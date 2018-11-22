---
title: How to Quickly Generate a PDF Using Document Template
review:
    comment: ''
    date: '2018-01-15'
    status: ok
details:
    howto:
        excerpt: Learn how to get a PDF printable version of the data stored on your document as properties using Nuxeo Studio.
        level: Beginner
        tool: Studio
        topics: 'Automation, Conversion, Document template'
labels:
    - lts2016-ok
    - howto
    - automation
    - conversion
    - troger
    - excerpt
    - multiexcerpt-include
    - lts2017-ok
confluence:
    ajs-parent-page-id: '19235642'
    ajs-parent-page-title: Automation How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Quickly+Generate+a+PDF+Using+Document+Template
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Quickly+Generate+a+PDF+Using+Document+Template'
    page_id: '5570635'
    shortlink: SwBV
    shortlink_source: 'https://doc.nuxeo.com/x/SwBV'
    source_link: /display/NXDOC/How+to+Quickly+Generate+a+PDF+Using+Document+Template
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2015-10-12 10:13'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2014-12-05 15:34'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2014-12-01 21:56'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2014-09-15 15:45'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2014-09-15 15:29'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2014-09-09 18:46'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-09-09 18:45'
        message: Add FreeMarker Document template sample
        version: '12'
    -
        author: Solen Guitter
        date: '2014-09-09 16:31'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2014-09-09 16:30'
        message: Formatting and link update
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-08-01 14:53'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2014-07-31 17:41'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2014-05-06 00:42'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-09-02 15:49'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2013-02-11 06:52'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2013-02-11 06:51'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2013-02-11 06:51'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2011-01-24 12:07'
        message: Migrated to Confluence 4.0
        version: '2'
    -
        author: Alain Escaffre
        date: '2011-01-24 12:07'
        message: ''
        version: '1'
notes: Documentation page used on Nuxeo Studio. Check with NOS team before deleting or moving.
---
**Use case**: you want to get a PDF printable version of the data stored on your document as properties.

{{#> callout type='info' }}

You may want to use [Nuxeo Platform Template Rendering addon]({{page page='template-rendering-addon'}}) for this use case. That module will allow a much better control on the look&feel of your generated PDF, using MS Word or Open Office templating.

{{/callout}}{{! excerpt}}

**Method**: You will use a FreeMarker template to generate an HTML document, then use the PDF converter operation to generate the PDF, and then the Download operation for letting the user getting it.

{{! /excerpt}}

1.  In Studio, create the FreeMarker template (**Templates** > **Document template**).
    You can use the following sample for instance.

    ```xml
    <#list This as doc>

    <h1>${doc.title}</h1>

    <ul>

    <li>${doc.dublincore.description}</li>

    <li>${doc.dublincore.nature}</li>
    </ul>
    </#list>
    ```

2.  Create a [user action]({{page space='studio' page='user-actions'}}) on the document (in the [category]({{page page='actions-display'}}) you want).
3.  Create the related automation chain (see [How to Create an Automation Chain]({{page page='how-to-create-an-automation-chain'}})) with the following operations:

    ```
    - Context.FetchDocument
    - Render.Document:
        template: "template:MyDocumentTemplate"
        filename: output.ftl
        mimetype: text/html
        type: ftl
    - Blob.ToPDF
    - Seam.DownloadFile
    ```

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{{multiexcerpt 'popular-how-tos' page='How to Create an Automation Chain'}}}

</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Automation in Nuxeo Studio]({{page space='studio' page='automation'}})
- [Content Automation Concepts]({{page page='content-automation-concepts'}})
- [Document Templates and Automation Rendering Service]({{page page='document-templates-and-automation-rendering-service'}})
- [Template Rendering Addon]({{page page='template-rendering-addon'}})

{{/panel}}</div></div>
