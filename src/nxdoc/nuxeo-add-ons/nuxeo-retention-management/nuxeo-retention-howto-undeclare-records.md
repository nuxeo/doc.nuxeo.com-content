---
title: How To Undeclare Records
description: Discover how flexible retention rules can be leveraged to undeclare records.
review:
    comment: ''
    date: '2023-09-15'
    status: 'ok'
labels:
    - bchauvin
    - mlumeau
    - retention-management
toc: true
tree_item_index: 400
---

This page teaches how flexible retention can be leveraged to undeclare records, and goes through the principles and implementation used in this example.

## Prerequisites

//TODO HF version
//TODO Addon version

This how-to requires:
- Being familiar with the base concepts of Nuxeo
- Knowing how  to use Nuxeo Web UI for standard actions like navigating and creating a document
- Knowing how to launch [REST API]({{page page='rest-api'}}) calls, as this feature is not yet exposed in Nuxeo Web UI.


The Nuxeo Retention Management addon must be installed on your instance: 
- In standard mode. This feature is not available in strict mode.
- Using our [recommended architecture]({{page page='nuxeo-retention-installation'}}) that uses a dedicated bucket for records. 

## Practice - High-Level Overview

In this how-to, we will first create a retention rule using flexible retention. We will then apply it on a document to turn the document into an operational record, and undeclare the record. We will then provide some additional examples you could use to go further and go through the principles used in this example. Practice first, theory second.


### Creating a Retention Rule

Log in as a member of the `RecordManager` group or an `administrator`, and [create a retention rule]({{page page='nuxeo-retention-functtional-overview'}}#create-a-retention-rule). Define it as following:

- Rule name: Operational Record - Keep 1 day
- Description: Keep as a record for a day. Record can be undeclared. 
- Retention period starting point: Immediate
- Retention duration: 1 day
- Post-retention actions: Trash

{{#> callout type='tip'}}
The feature will work similarly with different retention rule options. The ones suggested here serve only as a basis for the example in this how-to. Feel free to experiment.
{{/callout}}

### Update the Retention Rule to Use Flexible Retention

By default, your retention rule will use enforced retention, meaning that: 
- When using this rule to declare a record, the file(s) that are retained will end up in the bucket dedicated to records
- Records using this retention rule cannot be undeclared

Let's check this. Launch the following command in a terminal (make sure to adapt the path of the document with its actual URL if needed, and to set the correct password):

```
curl -X GET 'http://localhost:8080/nuxeo/api/v1/path/RetentionRules/Operational%20Record%20-%20Kee' -H 'Nuxeo-Transaction-Timeout: 3' -H 'X-NXproperties: *' -H 'X-NXRepository: default' -H 'content-type: application/json' -u Administrator:<PASSWORD> 
```

In the response, you will find the following property: `"retention_rule:flexibleRecords": false`. This confirms that the rule uses enforced retention. Let's update the retention rule to allow undeclaring the record. Launch the following command in a terminal (make sure to adapt the path of the document with its actual URL if needed, and to set the correct password):

```
curl -X PUT 'http://localhost:8080/nuxeo/api/v1/path/RetentionRules/Operational%20Record%20-%20Kee' -H 'Nuxeo-Transaction-Timeout: 3' -H 'X-NXproperties: *' -H 'X-NXRepository: default' -H 'content-type: application/json' -H 'content-type: application/json' -d '{ "entity-type": "document", "properties": { "retention_rule:flexibleRecords": true } }' -u Administrator:<PASSWORD>
```

In the response, you will notice this time that the property is updated as following: `"retention_rule:flexibleRecords":true`. The rule now uses flexible retention, meaning that:
- When using this rule to declare a record, the file(s) that are retained will remain in the main bucket
- Records using this retention rule can be undeclared

{{#> callout type='tip'}}
Any user that is part of the `RecordManager` group can manage retention rules in Nuxeo Web UI.
{{/callout}}

### Declaring an Operational Record

Now that we have a rule that leverages flexible retention, we can use it to declare operational records.

- Create a document of type `File`
- Upload a file as the main file of the document
- [Attach the retention rule]({{nuxeo-retention-functional-overview}}#put-a-document-under-retention) that we created previously on the document

You should now see that the document is under retention.

Let's check that the document is considered under flexible retention. Launch the following command in a terminal (make sure to adapt the path of the document with its actual URL, and to set the correct password):

```
curl -X GET 'http://localhost:8080/nuxeo/api/v1/path/default-domain/workspaces/MyWorkspace/MyFile' -H 'Nuxeo-Transaction-Timeout: 3' -H 'X-NXproperties: *' -H 'X-NXRepository: default' -H 'content-type: application/json' -H 'content-type: application/json' -u Administrator:<PASSWORD>
```

In the response, you should be able to see the following property on the document: `"isFlexibleRecord":true`. This means that the document is currently using flexible retention.

{{#> callout type='tip'}}
Any user with the `ManageRecord` permission on the document can declare it a record.
{{/callout}}

### Undeclaring a Record

Now that we have an operational record under retention, let's undeclare it. Launch the following command in a terminal (make sure to adapt the path of the document with its actual URL, and to set the correct password):

```
curl -X POST 'http://localhost:8080/nuxeo/site/automation/Document.UnattachRetentionRule' -H 'Nuxeo-Transaction-Timeout: 3' -H 'X-NXproperties: *' -H 'X-NXRepository: default' -H 'X-NXVoidOperation: false' -H 'content-type: application/json' -d '{"params":{},"input":"/default-domain/workspaces/MyWorkspace/MyFile","context":{}}' -u Administrator:<PASSWORD>
```

You will notice that:
- Post-retention actions are not triggered if you undeclare a record (i.e., in this example the document is not sent to the trash)
- This action is traced in the audit trail of the document (i.e., you can see who undeclared the record and when by visiting the `History` tab of the document)

It is now possible to attach another retention rule on the document if you want to.

{{#> callout type='tip'}}
Any user with the `Write` and `UnsetRetention` permissions on the document can undeclare it.
{{/callout}}

### Going Further (Optional)
If you wish to go further, note that it is possible to execute custom business logic when undeclaring a record. We will add a custom audit trail entry when a record is undeclared as an example.

{{#> callout type='info'}}
This part is optional and requires for you to be familiar with Nuxeo Studio.
{{/callout}}

#### Declare a Dependency to the Nuxeo Retention Addon
In your Nuxeo Studio project, go to `Settings > Application Definition` and add the `Nuxeo Retention` package in the `Packages to install` selection. Save your configuration.

#### Expose the Event
Go to `Settings > Registries > Core Events` and add the following to expose it in Nuxeo Studio:

```
{
  "events": {
    "afterUnsetRetention": "After Undeclaring a Record"
  }
}
```

Save your configuration.

#### Leverage the Event
It is time to leverage the event now. 

- Go to `Configuration > Automation > Event Handlers`. 
- Create a new event handler and name it `undeclareRecordEvent`.
- In the `Events` list, select the `After Undeclaring a Record` event and move it to the right box. 
- In the `chain or script` option at the bottom of the screen, click the `create` button.
- Select the `chain` option and name it `undeclareRecordChain`. Save your configuration if prompted to.

You will be taken to the automation chain configuration screen.

- Click on the `Switch Editor` button in the top left corner.
- Paste the following code inside the box:

```
- Context.FetchDocument
- Audit.LogEvent:
    event: Record undeclared
    category: compliance
    comment: Custom audit event when undeclaring a record
```

Save your configuration and deploy it.

#### Test Your Logic

Now that your logic is deployed: 
- Attach a retention rule that leverages flexible retention to a document
- Undeclare the record
- Go to the document's history tab

You will notice that two audit entries will be added: one coming by default, and the custom one you configured using Nuxeo Studio. This example can of course be tweaked to execute any logic you wish, following the principles of [Nuxeo Automation]({{page page='automation'}}).

## Principles of Flexible Retention

### Constraints

Note that for a record to be undeclared, some conditions must be met and some security-related constraints apply.

#### Flexible Retention Must be Used
Only records that have been declared using flexible retention can be undeclared. If you declared your record using a rule that doesn't allow flexible retention, there is no way to leverage flexible retention later.

#### Flexible Retention Must be Used When Declaring the Record
Nuxeo Server will determine if the record should use flexible retention or not when you declare your record by attaching a retention rule to the document. If you update the retention rule later, this will NOT affect the documents that are already under retention with this rule. 

This means that if you intend to leverage flexible retention, you need to make sure that your rules are defined accordingly before you attach them to your documents.

#### Legal Hold Turns the Document Into an Enforced Record
Putting a document under legal hold means that you intend to secure it and its content for an undefined period of time, likely due to a legal requirement. 

As soon as legal hold is applied, retention is enforced as well: the file(s) that are retained will automatically be moved into the dedicated bucket for records (meaning that if you use object lock, they will be stored in WORM storage). The document cannot go back to flexible retention to be undeclared anymore, even if you remove the legal hold later. 

### High Level Principles

The Nuxeo Retention Management addon must be installed on your instance: 
- In standard mode. This feature is not available in strict mode.
- Using our [recommended architecture]({{page page='nuxeo-retention-installation'}}) that uses a dedicated bucket for records. 

//TODO make the above an excerpt from higher in the page

Only in standard mode
Two options for retention rules
Breakdown of retention options
Sends to storage bucket depending on rule