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

Document templates are used as conversion instructions, to render XML, HTML, CSV or any open format from a document or a list of documents, using specific rendering operations. You can use document templates in particular when:

- you handle business data on content types and want to generate a nicer presentation for publishing, export, etc.
- you wish to create a file from document properties, and create file on demand.

For more information on Document Templates, discover [how to quickly generate a PDF using document template]({{page version='' space='nxdoc' page='how-to-quickly-generate-a-pdf-using-document-template'}}).

Discover the  Nuxeo Template Rendering addon, which is leveraging the templates mechanism. See [Nuxeo Template Rendering addon]({{page version='' space='nxdoc' page='template-rendering-addon'}}).

## Mail Templates

An mail template defines the content of an email that is sent to users under predefined circumstances. An email template is usually composed of text and variables. Typically, mail templates are used to define the content of email alerts in the Nuxeo Platform.

It can be used in the "Notification > Send Email" operation, or when notification emails are sent during a workflow. It can also be used for any event occuring in the platform.

Mail templates can use properties from the Document object or the Workflow task properties.

When downloading the Nuxeo Platform, users will access some default mail templates. However, then can also be created.  

| Template | Usage |
|---|---|
| appReviewStarted | Informs users that review as started on a document. |
| defaultNotifTemplate | By default, informs users a document has been shared with them and that the sender wants them to see the document. |
| emailDocument  | Informs users a document has been shared with them by its principal author. |
| modif | Informs users that a modification occurred on a document. |
| publish | Informs users of a publication. |
| subscriptionsUpdated | Informs users of their subscription to a document.  |
| workflow | Indicates a summary of the action executed on a workflow instance. |
| workflowTaskAssigned | Informs users that a task has been assigned to them or to a group they belong to.   |
| workflowTaskDelegated | Informs users that a task has been delegated to them or to a group they belong to. |

For more information on Email templates, discover the [available variables in mail templates]({{page version='' space='nxdoc' page='available-variables-in-email-templates'}}) and [how to customize them]({{page version='' space='nxdoc' page='how-to-customize-email-templates'}}).
