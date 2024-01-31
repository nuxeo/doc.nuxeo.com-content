---
title: 'HOWTO: Retain Multiple Files'
description: Discover how to retain multiple blobs (files) and prevent properties from being edited when a record is declared.
review:
    comment: ''
    date: '2024-01-22'
    status: 'ok'
labels:
    - bchauvin
    - mlumeau
    - retention-management
toc: true
tree_item_index: 450
---

Proving compliance requires keeping a record of all the evidence you may need. Therefore, Nuxeo Server allows you to define in the most flexible way what should constitute a record. 

By default, Nuxeo Server will always protect the main file of the document when [putting a document under retention]({{page page='nuxeo-retention-functional-overview'}}#put-a-document-under-retention) and the document remains editable. Should you wish to put under retention additional files from the document and prevent certain properties from being edited, you need to configure a list of properties to be protected.

In this tutorial, you will learn how to leverage this configuration to retain multiple document properties securely, including how to retain additional files in WORM storage. This helps proving that no metadata has been tampered with in case of an audit. If you wish to go further, a high level understanding of how to store additional elements like comments will also be provided.

## Prerequisites

This feature is available starting from:
- Nuxeo Server `LTS 2021 HF32`
- Nuxeo Retention `2021.4.5`

This how-to requires:
- Being familiar with the base concepts of Nuxeo and Nuxeo Studio.
- Knowing how  to use Nuxeo Web UI for standard actions like navigating and creating a document.

## Define Properties to Retain 

Properties to retain are defined through Nuxeo Studio configuration.

First, we need to declare the dependency on the addon.

In Nuxeo Studio Modeler:
- Go to the `Application Definition` screen, and add `Nuxeo Retention` to the list of packages to install.
- Save your configuration

Now, let's configure a custom document type containing additional properties we want to retain.

In Nuxeo Studio Modeler:
- Go to `Content Model > Document Types`
- Create a new document type
  - Name it `MyClaim`
  - Make it extend `File`
- In the `Schema` tab, add the following custom properties:
  - `amountRefunded`: floating point
  - `expertReport`: blob
  - `incidentDate`: date
  - `incidentDescription`: string
  - `repairQuotes`: blob (multi-valued)

We need to display these properties during creation, edit and view. 

- Go to Nuxeo Studio Designer
- Go to `Layouts > Local Document Types > MyClaim` and click on the `Configure Missing Layouts` button.
- In the different layouts, drag and drop the `myclaim` schema to add the missing properties to the form and save your configuration.

Next step is to configure which of these properties we want to retain.

In Nuxeo Studio Modeler:
- Go to `Advanced Settings > XML Extensions`
- Create a new XML extension and give it a name, e.g. `retainMyClaimProperties`
- Paste the following code

```
<require>org.nuxeo.ecm.core.CoreExtensions</require> 
  <extension target="org.nuxeo.ecm.core.schema.TypeService" point="schema"> 
    <!-- Setting properties like text, date, numbers as retainable will protect them from being edited once the document goes under retention. -->
    <property schema="myclaim" name="amountRefunded" retainable="true" /> 
    <property schema="myclaim" name="incidentDate" retainable="true" /> 

    <!-- Files held in blob properties set as retainable will be sent to the dedicated bucket for records if it exists. If this bucket uses WORM storage, these files will be stored in WORM storage as well. -->
    <property schema="myclaim" name="expertReport" retainable="true" /> 
    <property schema="myclaim" name="repairQuotes" retainable="true" />

    <!-- You can also use configuration to retain only specific parts of complex or multivalued complex properties. Here, we retain all the files held in the files schema (i.e., the attachments from a default File document) but do not protect the other parts of this complex multivalued property. -->
    <property schema="files" name="files/*/file" retainable="true" /> 

    <!-- Note that we do not retain the incident description, so this property can still be edited after the document is put under retention. -->
  </extension>
```

- Save your configuration and deploy it

That's it! Let's take a look at the result and explain what we did.

## Checking the Result 

In Nuxeo Server:
- [Create a retention rule]({{page page='nuxeo-retention-functional-overview'}}#create-a-retention-rule) with immediate retention and a duration of 1 day
- Create a document of type `MyClaim` inside a workspace and fill in its properties
- [Put the document under retention]({{page page='#put-a-document-under-retention'}})

Your document is now under retention, and the additional properties you configured are protected too. In our example:
- Trying to edit properties like the amount refunded will fail while the document is under retention.
- Editing properties like the document title will be allowed because they are not explicitly protected in our configuration.

{{#> callout type='info'}}
Properties defined as retainable apply at the instance level, no matter what document type they are used in. If you use a schema in multiple documents, this property will always be protected if you declare the document as a record.
{{/callout}}

{{#> callout type='tip'}}
Keep in mind that when retaining multiple files, Nuxeo Server will follow the same configuration as for the main one of the document. If you leverage WORM storage, these additional files will also be stored in WORM storage.
{{/callout}}

### How are Properties Protected?
Text, dates, numbers properties defined as retainable are protected by our low level APIs. Someone with direct access to the database could still edit them. Consider this when planning for compliance. Further security can be added for them by exporting their value inside a file at the time the document is declared a record and storing this file in WORM storage, as explained in the "Going Further" section below.

Files are protected by our low level APIs too. If you leverage WORM storage, the files configured as retainable will also be sent to WORM storage, providing an additional protection layer.

## Going Further: Retain Comments in WORM storage when Declaring a Record 
In some cases, you may wish to store additional information securely while declaring a record. Comments or annotations could be important evidence to keep in case of an audit. Let's see how we could store this information in WORM storage to prove that it has not been tampered with.

### Prerequisites

This section requires:
- Being familiar with Java development, and developing on top of Nuxeo.
- The Nuxeo Retention addon must be configured to [support WORM storage]({{page page='nuxeo-retention-installation-standard'}}#store-records-in-a-dedicated-s3-bucket-with-s3-object-lock).

{{#> callout type='tip'}}
You can still follow these steps if your configuration does not leverage WORM storage, typically to test this tutorial in lower environments. In this case, the end result might differ slightly depending on your configuration.
{{/callout}}

### High Level Principles

The high level principles are the following:
1. Create a property of type `blob` to store additional information.
1. Configure this property to be retainable when the document becomes a record.
1. Create a custom operation to export the values of the properties, the comments of the documents, or anything else into a file.
1. Create an event handler that will be triggered when the document is about to become a record and integrate your logic.
1. Populate your new property with the file we generated.

The file will then be stored in WORM storage along with others, allowing you to prove that the information held cannot have been tampered with.

{{#> callout type='tip'}}
If you use this method to export the value of some document properties, remember to configure them as being retainable too for the sake of consistency. E.g., if you are going to export the value of the title of the document inside the file, you should configure the `dc:title` property as retainable to prevent it from being edited.
{{/callout}}

### Create a Property to Store Exported Information

First step is to create a new property to store the information we will export.

In Nuxeo Studio Modeler:
- Go to `Content Model > Document Types > MyClaim`
- In the `Schema` tab, add the following custom properties:
  - `recordStorage`: blob

### Make this Property Retainable

Update the `retainMyProperties` XML extension to retain the new property. Code should look like this:

```
<extension target="org.nuxeo.ecm.core.schema.TypeService" point="schema"> 
  [...]
    <!-- Retain an additional property for information we want to export and store in WORM storage -->
    <property schema="myclaim" name="recordStorage" retainable="true" /> 
  [...]
</extension>
```

### Create a Custom Operation to Export Your Information 

At this stage, you need to [create a custom operation]({{page page='contributing-an-operation'}}) and [reference it in Nuxeo Studio]({{page page='referencing-an-externally-defined-operation' space='studio'}}). This operation should take a document as input, export the information you require (like document metadata or comments) and return it as a blob.

We are not providing a specific example here as you will need to create one adapted to your needs.

### Integrate the Export and Storage Logic

Once the operation is ready, we need to integrate it in our logic.

In Nuxeo Studio Modeler:
- Go to `Registries > Core Events`
- Add the following code to reference the event we need:

```
{
  "events": {
    "beforeMakeRecord": "Before Declaring a Record"
  }
}
```

- Save your configuration
- Go to `Automation > Automation Chains`
- Create a new chain called `exportRecordInfoChain`
- Define your logic as follows, replacing the `Document.GetBlobs` operation with your own custom operation:

```
- Context.FetchDocument
- Context.SetInputAsVar:
    name: recordDocument
- Document.GetBlobs
- Blob.CreateZip:
    filename: recordInformation.zip
- Blob.AttachOnDocument:
    document: recordDocument
    save: "true"
    xpath: "myclaim:recordStorage"
```

- Save your configuration

{{#> callout type='tip'}}
You can copy-paste the code above into Nuxeo Studio after clicking the `Switch editor` button and saving this configuration to go faster.
{{/callout}}

### Create a Trigger for Your Logic

We now need to trigger the logic we created when a record is about to be declared.

In Nuxeo Studio Modeler:
- Go to `Automation > Event Handlers`
- Create a new event handler and name it `exportRecordInfoHandler`
- Associate it to: 
  - The `Before Declaring a Record` event
  - On the `MyClaim` document type
  - The `exportRecordInfoChain` automation chain
- Save your configuration

We're all set! Let's check the result.

### Checking the Result

In Nuxeo Server:
- [Create a retention rule]({{page page='nuxeo-retention-functional-overview'}}#create-a-retention-rule) with immediate retention and a duration of 1 day.
- Create a document of type `MyClaim` inside a workspace and fill in its properties.
- [Put the document under retention]({{page page='#put-a-document-under-retention'}}).

Compared to our previous example, you should be able to export the document as JSON or XML and notice that our new property `claim:recordStorage` is now populated with the exported information. 

What happens exactly?
1. When the document is about to be declared as a record, our event handler is triggered.
1. This launches our export logic that populates the `myclaim:recordStorage` property with the information we want.
1. Since our `myclaim:recordStorage` property is of type `blob` and configured as `retainable`, it is sent into secure storage as other `retainable` files.

As a result, this additional information is now stored in WORM storage and can be used as a proof in case of an audit.