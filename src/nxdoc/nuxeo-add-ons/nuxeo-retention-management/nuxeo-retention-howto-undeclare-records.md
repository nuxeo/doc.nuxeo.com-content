---
title: 'HOWTO: Undeclare Records'
description: Discover how flexible retention rules can be leveraged to undeclare records.
review:
    comment: ''
    date: '2024-01-22'
    status: 'ok'
labels:
    - bchauvin
    - mlumeau
    - retention-management
toc: true
tree_item_index: 400
---

This page teaches how flexible retention can be leveraged to undeclare records, and goes through the principles used in this example.

## Prerequisites

This feature is available starting from:
- Nuxeo Server `LTS 2021 HF43`
- Nuxeo Retention `2021.4.5`

This how-to requires:
- Being familiar with the base concepts of Nuxeo
- Knowing how  to use Nuxeo Web UI for standard actions like navigating and creating a document

The Nuxeo Retention addon must be installed on your instance: 
- In standard mode. This feature is not available in strict mode.
- Using our [recommended architecture]({{page page='nuxeo-retention-installation'}}) that uses a dedicated bucket for records. 

If you wish to leverage the REST API, some sample calls will be demonstrated. They are entirely optional.

## Practice - High-Level Overview

We will first create a retention rule using flexible retention. We will then apply it on a document to turn the document into an operational record, and undeclare the record. We will then provide some additional examples you could use to go further and go through the principles used in this example. Practice first, theory second.


### Creating a Retention Rule

Log in as a member of the `RecordManager` group or an `administrator`, and [create a retention rule]({{page page='nuxeo-retention-functtional-overview'}}#create-a-retention-rule). Define it as following:

- Rule name: Operational Record - Keep 1 day
- Description: Keep as a record for a day. Record can be undeclared.
- Allow record to be undeclared: Yes. 
- Retention period starting point: Immediate
- Retention duration: 1 day
- Post-retention actions: Trash

{{#> callout type='info'}}
Any user that is part of the `RecordManager` group can manage retention rules in Nuxeo Web UI.
{{/callout}}

{{#> callout type='tip'}}
The feature will work similarly with different retention rule options. The ones suggested here serve only as a basis for the example in this how-to. Feel free to experiment.
{{/callout}}

{{#> callout type='info'}}
When a rule allows records to be undeclared, the file(s) that are retained will remain in the main bucket and will NOT use WORM storage, even if it is configured.
{{/callout}}

#### Optional: Checking For Rule Options
{{! multiexcerpt name='rest-api-optional-call'}}
{{#> callout type='info'}}
This optional step is meant to teach you more about how to leverage these options through the REST API. Feel free to skip it if you do not intend to use it.
{{/callout}}
{{! /multiexcerpt}}

You can check that your rule allows undeclaring the record using the REST API. Here is a sample call, make sure to adapt the path of the document with its actual URL, and to set the correct password.
```
curl -X GET 'http://localhost:8080/nuxeo/api/v1/path/RetentionRules/Operational%20Record%20-%20Kee' -H 'Nuxeo-Transaction-Timeout: 3' -H 'X-NXproperties: *' -H 'X-NXRepository: default' -H 'content-type: application/json' -u Administrator:<PASSWORD> 
```

In the response, you will find the following property: `"retention_rule:flexibleRecords": true`. This confirms that the rule allows for records to be undeclared.

### Declaring an Operational Record

Now that we have a rule that leverages flexible retention, we can use it to declare operational records.

- Create a document of type `File`
- Upload a file as the main file of the document
- [Attach the retention rule]({{nuxeo-retention-functional-overview}}#put-a-document-under-retention) that we created previously on the document

You should now see that the document is under retention.

{{#> callout type='tip'}}
Any user with the `ManageRecord` permission on the document can declare it a record.
{{/callout}}

#### Optional: Checking For the Record Status
{{{multiexcerpt 'rest-api-optional-call' page='nuxeo-retention-howto-undeclare-records'}}}

Let's check that the document is allowed to be undeclared. Launch the following command in a terminal. Remember to adapt the path of the document with its actual URL, and to set the correct password:

```
curl -X GET 'http://localhost:8080/nuxeo/api/v1/path/default-domain/workspaces/MyWorkspace/MyFile' -H 'Nuxeo-Transaction-Timeout: 3' -H 'X-NXproperties: *' -H 'X-NXRepository: default' -H 'content-type: application/json' -H 'content-type: application/json' -u Administrator:<PASSWORD>
```

In the response, you should be able to see the following property on the document: `"isFlexibleRecord":true`. This means that the record can be undeclared.

### Undeclaring a Record

Now that we have an operational record under retention, let's undeclare it. 

In Nuxeo Web UI, navigate to your file, then:
- Open the [document actions menu]({{page space='userdoc' page='web-ui'}}#main-view) on the top right
- Click on the `Undeclare Record` option.

You will notice that:
- The retention related information banner disappears
- Post-retention actions are not triggered if you undeclare a record (i.e., in this example the document is not sent to the trash)
- This action is traced in the audit trail of the document (i.e., you can see who undeclared the record and when by visiting the `History` tab of the document)

It is now possible to attach another retention rule on the document if you want to.

{{#> callout type='tip'}}
Any user with the `Write` and `UnsetRetention` permissions on the document can undeclare it.
{{/callout}}

#### Optional: Undeclaring a Record Using the REST API
{{{multiexcerpt 'rest-api-optional-call' page='nuxeo-retention-howto-undeclare-records'}}}

Launch the following command in a terminal. Remember to adapt the path of the document with its actual URL, and to set the correct password::

```
curl -X POST 'http://localhost:8080/nuxeo/site/automation/Document.UnattachRetentionRule' -H 'Nuxeo-Transaction-Timeout: 3' -H 'X-NXproperties: *' -H 'X-NXRepository: default' -H 'X-NXVoidOperation: false' -H 'content-type: application/json' -d '{"params":{},"input":"/default-domain/workspaces/MyWorkspace/MyFile","context":{}}' -u Administrator:<PASSWORD>
```

### Optional: Going Further
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

### High-Level Overview
As a records manager, you will likely end up managing content that comes from various sources and that has varying requirements when it comes to retention. Some of this content may require strict compliance with regulations like SEC-17A4, but not all of it.

In order to leverage flexible retention, the Nuxeo Retention addon must be installed on your instance: 
- In standard mode. This feature is not available in strict mode.
- Using our [recommended architecture]({{page page='nuxeo-retention-installation'}}) that uses a dedicated bucket for records. 

Flexible retention provides an additional option to let you pick in which way you desire the content to be stored and managed. Here is a breakdown of what each option means:

| Capability                                    | Flexible Retention | Enforced Retention |
| --------------------------------------------- | ------------------ | ------------------ |
| **Intended usage**                            | **Operational records** | **Regulatory compliant records** |
| Prevent deletion of documents (1)             | YES | YES |
| Auditable events                              | YES | YES |
| Support for legal hold                        | YES | YES |
| Comment / annotate before retention start     | YES | YES |
| Comment / annotate after retention start      | NO  | NO  |
| Create versions before retention start        | YES | YES |
| Create versions after retention start         | NO  | NO  |
| Shorten duration of the retention period      | NO  | NO  |
| **Undeclare record (i.e., stop retention)**   | **YES: requires the `UnsetRetention` and `Write` permissions, action is audited and triggers a dedicated event** | **NO** |
| Protection of main binary                     | YES | YES |
| Configure additional properties to protect    | YES | YES |
| **Storage used for protected files**          | **Regular S3 storage: records' files remain stored in the same bucket as for other documents** | **Dedicated bucket for records that can be configured to use WORM storage (i.e., S3 object lock).** |
| **Protection level**                          | **Software** | **Software + S3 object lock if configured** |
| Attach a new rule after record is undeclared or retention period ends | YES | YES |

(1) When [installing the Nuxeo Retention addon in standard mode]({{page page='nuxeo-retention-installation'}}), [members of the NuxeoRecordCleaner group can delete records]({{page page='nuxeo-retention-functional-overview'}}#delete-a-document-under-retention) from Nuxeo Server (file(s) will still be stored in S3 if you configured object lock and use enforced retention). It is your responsibility to ensure that you do not leverage this feature if you intend to remain compliant with regulations like SEC-17A4.

After installing the addon, to leverage flexible retention: 
1. The flexible retention option should be set when [creating or updating a retention rule]({{page page='nuxeo-retention-functional-overview'}}#create-a-retention-rule) by setting the property `retention_rule:flexibleRecords` to `true`.
1. You need to declare documents as records by attaching this rule to them
1. You can undeclare records by using the `Document.UnattachRetentionRule` automation operation. Using this operation requires having the `UnsetRetention` and `Write` permissions on the document.
1. You need to consider the constraints mentioned below

### Constraints

Note that for a record to be undeclared, some conditions must be met and some security-related constraints apply.

#### Flexible Retention Must be Used
Only records that have been declared using flexible retention can be undeclared. If you declared your record using a rule that doesn't allow flexible retention, there is no way to leverage flexible retention later. Flexible records can be turned into enforced records, but not the other way around.

#### Changing Retention Rules Only Affects Future Records
Nuxeo Server will determine if the record should use flexible retention or not when you declare your record by attaching a retention rule to the document. If you update the retention rule later, this will NOT affect the documents that are already under retention with this rule. 

This means that if you intend to leverage flexible retention, you need to make sure that your rules are defined accordingly before you attach them to your documents.

#### Legal Hold Turns the Document Into an Enforced Record
Putting a document under legal hold means that you intend to secure it and its content for an undefined period of time, likely due to a legal requirement. 

As soon as legal hold is applied, retention is enforced as well: the document will be considered to use enforced retention from this point and its file(s) that are retained will automatically be moved into the dedicated bucket for records (meaning that if you use object lock, they will be stored in WORM storage). The document cannot go back to flexible retention and be undeclared anymore, even if you remove the legal hold later. 
