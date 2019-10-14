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

Document templates are used as conversion instructions, to render XML, HTML, CSV or any open format from a document or a list of documents, using specific rendering operations.</br>
You can use document templates to:

- handle business data on content types and generate a nicer presentation for publishing, export, etc.
- create a file from document properties and create file on demand.

{{{multiexcerpt 'disabling-feature' page='branding'}}}

For more information on Document Templates, discover [how to quickly generate a PDF using document template]({{page version='' space='nxdoc' page='how-to-quickly-generate-a-pdf-using-document-template'}}) and check the [Nuxeo Template Rendering]({{page version='' space='nxdoc' page='template-rendering-addon'}}) addon which is leveraging the templates mechanism.

## Mail Templates

A mail template defines the content of an email sent to users under predefined circumstances. A mail template is usually composed of text and variables. Typically, they are used to define the content of email alerts in the Nuxeo Platform.

It can be used in the "Notification > Send Email" operation, or when notification emails are sent during a workflow. It can also be used for any event occuring in the platform.

Mail templates can use properties from the Document object or the Workflow task properties.

When downloading the Nuxeo Platform, users will access some default mail templates. However, they can also create them manually.  

| Template | Usage |
|---|---|
| `appReviewStarted` | Informs users that review has started on a document. |
| `defaultNotifTemplate` | By default, informs users a document has been shared with them and that the sender wants them to see the document. |
| `emailDocument`  | Informs users a document has been shared with them by its principal author. |
| `modif` | Informs users that a modification occurred on a document. |
| `publish` | Informs users of a publication. |
| `subscriptionsUpdated` | Informs users of their subscription to a document.  |
| `workflow` | Indicates a summary of the action executed on a workflow instance. |
| `workflowTaskAssigned` | Informs users that a task has been assigned to them or to a group they belong to.   |
| `workflowTaskDelegated` | Informs users that a task has been delegated to them or to a group they belong to. |

For more information on Email templates, discover the [available variables in mail templates]({{page version='' space='nxdoc' page='available-variables-in-email-templates'}}) and [how to customize them]({{page version='' space='nxdoc' page='how-to-customize-email-templates'}}).

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Nuxeo Studio Community Cookbook'}}

- [Email Template Samples](https://github.com/nuxeo/nuxeo-studio-community-cookbook/blob/master/modules/nuxeo/email-templates-nuxeo)

{{/panel}}</div><div class="column medium-6">
</div></div>
