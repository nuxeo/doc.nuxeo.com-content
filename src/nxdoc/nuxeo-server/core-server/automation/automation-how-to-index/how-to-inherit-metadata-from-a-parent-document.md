---
title: How to Inherit Metadata from a Parent Document
review:
    comment: ''
    date: '2016-12-19'
    status: ok
notes: Documentation page used on Nuxeo Studio. Check with NOS team before deleting or moving.
details:
    howto:
        excerpt: 'In this how-to, we will implement an event handler that will listen to the creation of documents. When the created document matches some predefined criteria, the listener will execute a content automation chain. The chain will copy the "source" metadata value from the workspace to the created document.'
        level: Beginner
        tool: Studio
        topics: 'Automation, Event handler'
labels:
    - lts2016-ok
    - howto
    - automation
    - fdavid
    - studio
    - event
    - excerpt
    - content-review-lts2017
toc: true
version_override:
    LTS 2015: 710/nxdoc/how-to-inherit-a-metadata-from-a-parent-document
    '6.0': 60/nxdoc/how-to-inherit-a-metadata-from-a-parent-document
confluence:
    ajs-parent-page-id: '19235642'
    ajs-parent-page-title: Automation How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Inherit+a+Metadata+from+a+Parent+Document
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Inherit+a+Metadata+from+a+Parent+Document'
    page_id: '1409312'
    shortlink: IIEV
    shortlink_source: 'https://doc.nuxeo.com/x/IIEV'
    source_link: /display/NXDOC/How+to+Inherit+a+Metadata+from+a+Parent+Document
tree_item_index: 300
history:
    -
        author: Manon Lumeau
        date: '2015-12-16 14:15'
        message: ''
        version: '28'
    -
        author: Manon Lumeau
        date: '2015-12-16 14:10'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2014-12-01 21:59'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2014-09-16 13:31'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2014-09-16 10:54'
        message: Add related links
        version: '24'
    -
        author: Solen Guitter
        date: '2014-09-15 17:57'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2014-09-15 17:56'
        message: ''
        version: '22'
    -
        author: Alain Escaffre
        date: '2014-05-06 15:28'
        message: ''
        version: '21'
    -
        author: Alain Escaffre
        date: '2014-05-06 15:06'
        message: ''
        version: '20'
    -
        author: Alain Escaffre
        date: '2014-05-06 15:06'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2010-05-20 14:13'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2010-05-20 14:13'
        message: typo
        version: '17'
    -
        author: Solen Guitter
        date: '2010-05-19 08:53'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2010-05-18 19:03'
        message: Added link and reorganized instructions
        version: '15'
    -
        author: Alain Escaffre
        date: '2010-04-23 20:27'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2010-04-23 17:41'
        message: ''
        version: '13'
    -
        author: Alain Escaffre
        date: '2010-04-23 17:40'
        message: ''
        version: '12'
    -
        author: Alain Escaffre
        date: '2010-04-23 17:25'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2010-04-23 17:23'
        message: ''
        version: '10'
    -
        author: Alain Escaffre
        date: '2010-04-23 17:18'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2010-04-23 17:17'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2010-04-23 17:16'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2010-04-23 17:15'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2010-04-23 17:01'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2010-04-23 16:33'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2010-04-23 16:33'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2010-04-23 16:32'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2010-04-23 16:32'
        message: ''
        version: '1'

---
There are cases where you want a document to inherit some metadata values from its parent. In general, the goal is to benefit from the creation context of a document to infer some metadata values. For example, you can set a `project_id` metadata on your document type and on the workspace (or any type of container). Then your document type can inherit the project id value from its parent workspace. This is also useful when most of your documents are captured via Nuxeo Drive. Since Drive doesn't allow the setting of metadata values, you can only infer them from parent containers.

{{! excerpt}}

In this how-to, we will implement an event handler that will listen to the creation of documents. If the created document matches some predefined criteria, the listener will execute a content automation chain. The chain will copy the Dublincore "source" metadata value from the workspace to the created document.

{{! /excerpt}} {{#> callout type='info' }}

To maintain inheritance, you need to use the event "Document Updated" and select the children document you want to update. This approach would work with a few documents below your parent documents only. For a larger number of documents, you should consider a lower level approach.

{{/callout}}

## Prerequisite

To complete this how-to, you need the elements below to be already configured in your Nuxeo Studio project.

*   A document type called [`DocumentationItem`]({{page page='implementing-documentation-items'}}).

## Creating the Event Handler

**To implement the metadata inheritance listener:**

1.  Create a new **Event Handler** (see [how to bind an automation chain to an event handler]({{page page='how-to-create-an-automation-chain#automation-chain-binding-event-handler'}})).
2.  Fill in the filtering information below:
    *   Events: Document created
    *   Current document has one of the types: `DocumentationItem`
3.  Create the corresponding automation chain (see below for the chain parameters).

## Creating the Automation Chain

[Create an automation chain]({{page page='how-to-create-an-automation-chain'}}) with the following operations and parameters:

```
- Context.FetchDocument
- Context.PushDocument
- Document.GetParent:
    type: Workspace
- Context.SetVar:
    name: sourceValue
    value: "@{Document[\"dc:source\"]}"
- Context.PopDocument
- Document.SetProperty:
    xpath: "dc:source"
    save: "true"
    value: "@{sourceValue}"
```

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Popular How-Tos'}}

- [How to Create an Automation Chain]({{page page='how-to-create-an-automation-chain'}})
- [How to Fetch a Document by Its ID or Path]({{page page='how-to-fetch-a-document-by-its-id-or-path'}})
- [How to Set a Default Value on a Date Field of a Task Form]({{page page='how-to-set-a-default-value-on-a-date-field-of-a-task-form'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Automation In Nuxeo Studio]({{page space='studio' page='automation'}})
- [Content Automation Concepts]({{page page='content-automation-concepts'}})
- [Events and Listeners in developer documentation]({{page page='events-and-listeners'}})
- [Event Handlers in Studio]({{page space='studio' page='event-handlers'}})

{{/panel}}</div></div>
