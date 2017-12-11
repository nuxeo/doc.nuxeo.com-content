---
title: How to Automatically Convert a Document to PDF
review:
    comment: ''
    date: '2017-12-12'
    status: ok
details:
    howto:
        excerpt: Learn how to convert automatically a document into PDF using Nuxeo Studio.
        level: Intermediate
        tool: Studio
        topics: 'Document type, Automation, Conversion'
labels:
    - lts2016-ok
    - howto
    - conversion
    - troger
    - excerpt
    - multiexcerpt-include
    - lts2017-ok
confluence:
    ajs-parent-page-id: '19235645'
    ajs-parent-page-title: Conversion
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Automatically+Convert+a+Document+to+PDF
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Automatically+Convert+a+Document+to+PDF'
    page_id: '8683647'
    shortlink: f4CE
    shortlink_source: 'https://doc.nuxeo.com/x/f4CE'
    source_link: /display/NXDOC/How+to+Automatically+Convert+a+Document+to+PDF
tree_item_index: 100
history:
    -
        author: Manon Lumeau
        date: '2015-11-03 10:30'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2015-11-03 10:28'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2014-12-05 15:38'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2014-12-01 22:05'
        message: ''
        version: '21'
    -
        author: Manon Lumeau
        date: '2014-09-18 12:22'
        message: ''
        version: '20'
    -
        author: Manon Lumeau
        date: '2014-09-16 10:23'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2014-09-16 10:23'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2014-09-15 17:50'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2014-09-02 16:51'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2014-07-09 15:29'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2014-06-12 15:21'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2014-03-31 22:00'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2013-07-17 18:38'
        message: Added excerpt
        version: '12'
    -
        author: Solen Guitter
        date: '2012-09-05 10:41'
        message: Migrated to Confluence 4.0
        version: '11'
    -
        author: Solen Guitter
        date: '2012-09-05 10:41'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2011-09-06 15:55'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2011-09-02 17:05'
        message: added related howtos
        version: '8'
    -
        author: Alain Escaffre
        date: '2011-08-30 19:30'
        message: ''
        version: '7'
    -
        author: Frédéric Vadon
        date: '2011-08-30 16:01'
        message: ''
        version: '6'
    -
        author: Frédéric Vadon
        date: '2011-08-30 15:58'
        message: ''
        version: '5'
    -
        author: Frédéric Vadon
        date: '2011-08-30 15:58'
        message: ''
        version: '4'
    -
        author: Frédéric Vadon
        date: '2011-08-30 15:57'
        message: ''
        version: '3'
    -
        author: Frédéric Vadon
        date: '2011-08-30 15:57'
        message: ''
        version: '2'
    -
        author: Frédéric Vadon
        date: '2011-08-30 15:57'
        message: ''
        version: '1'

---
{{! excerpt}}

In some cases, you want the system to automatically create a PDF conversion of a document and attach it to the document. In Nuxeo Studio, the operation&nbsp;**Conversion > Convert To PDF**&nbsp;is provided to make this conversion.

{{! /excerpt}}

Here is how you can create an automation chain to do the conversion and attach the PDF created on the input document.

{{#> callout type='info' }}

This how to requires knowledge about:

*   [Document Types Definition]({{page page='how-to-define-a-document-type'}}),
*   [Automation chains]({{page page='content-automation-concepts'}}).

{{/callout}}

## Document Preparation

The document needs a metadata to hold the PDF blob created during the conversion, two options are available:

* Use the default File document type, in that case, the metadata that holds the blob is `file:content`.
* Define your own custom metadata to store the blob. To do so, you first need to add a field to the schema in the document definition. This new metadata has to be a Blob type. Here is an example where the new metadata is "pdffile". It can be accessed by "myDocumentSchema:pdffile" if the schema name of my document type is "myDocumentSchema".

![]({{file name='schema_pdffile.png'}} ?w=600,border=true)

## Automation Chain

The "Blob To PDF" operation accepts either blob, bloblists or document as inputs. If the input is a document, the file to convert must be in the `file:content` metadata (the usual place for it). The operation produces a blob (the PDF file) and does not return the input document so we will have to store the document somehow before the conversion so that we can recall it after to attach the PDF file to it. The solution is to use Push & Pop operation to put the input document in a heap and get it back (or to use a context variable).

For the same reasons, we also do not want to lose the PDF file produced by the conversion during the recall of the input document, so we will save it as a Context variable.

The automation chain to configure is finally:

```
- Context.FetchDocument
- Context.PushDocument
- Blob.ToPDF
- Context.SetInputAsVar:
    name: pdfblob
- Context.PopDocument
- Document.SetBlob:
    file: "@{Context[\"pdfblob\"}"
    save: "true"
    xpath: "myDocumentSchema:pdffile"
```

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{{multiexcerpt 'popular-how-tos' page='How to Create an Automation Chain'}}}

</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Automation in Nuxeo Studio]({{page space='studio' page='automation'}})
- [Content Automation Concepts]({{page page='content-automation-concepts'}})
- [Document Templates and Automation Rendering Service]({{page page='document-templates-and-automation-rendering-service'}})
- [Template Rendering Add-on]({{page page='template-rendering-addon'}})

{{/panel}}</div></div>
