---
title: Templates
review:
    comment: ''
    date: '2018-10-25'
    status: ok
tree_item_index: 650
toc: true
---
## Document Templates

Document templates are used as conversion instructions, to render XML, HTML, CSV or any open format from a document or a list of documents, using specific rendering operations. You would especially want to use this when you handle business data on content types and want to generate a nicer presentation for publishing, export, etc.

For more information on Document Templates, discover [how to quickly generate a PDF using document template]({{page version='' space='nxdoc' page='how-to-quickly-generate-a-pdf-using-document-template'}}).

## Mail Templates

A mail template defines the content of an email that is sent to users under predefined circumstances. A mail template is usually composed of text and variables. Typically, email templates are used to define the content of email alerts in the Nuxeo Platform.

It can be used in the "Notification > Send Email" operation, or when notification emails are sent during a workflow.

When downloading the Nuxeo Platform, users will access some default mail templates. However, then can also be created.  

| Template | Usage |
|---|---|
| appReviewStarted | Informs users that review has started on a document. |
| defaultNotifTemplate | By default, informs users a document has been shared with them.   |
| emailDocument  | Informs users a document has been shared with them. |
| modif | Informs users that a modification occurred on a document. |
| publish | For JSF UI, informs users of a publication. |
| subscriptionsUpdated | Informs users of their subscription to a document.  |
| workflow | Informs users of the state of a workflow.  |
| workflowTaskAssigned | Informs users that a task has been assigned to them or to a group they belong to.   |
| workflowTaskDelegated | Informs users that a task has been delegated to them or to a group they belong to.   |



For more information on Email templates, discover the [available variables in mail templates]({{page version='' space='nxdoc' page='available-variables-in-email-templates'}}) and [how to customize them]({{page version='' space='nxdoc' page='how-to-customize-email-templates'}}).
