---
title: Automated Document Categorization
review:
    comment: ''
    date: ''
    status: ok
labels:
    - document-categorization
confluence:
    ajs-parent-page-id: '21299463'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Automated+Document+Categorization
    canonical_source: >-
        https://doc.nuxeo.com/display/USERDOC60/Automated+Document+Categorization
    page_id: '21299456'
    shortlink: AAFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/AAFFAQ'
    source_link: /display/USERDOC60/Automated+Document+Categorization
history:
    - 
        author: Solen Guitter
        date: '2016-08-30 14:18'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-11-22 12:05'
        message: Added link to Marketplace
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-11-07 18:25'
        message: Added related topics
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-11-07 18:16'
        message: ''
        version: '2'
    - 
        author: Vladimir Pasquier
        date: '2013-11-05 17:11'
        message: ''
        version: '1'

---
{{! excerpt}}

The [Automated Document Categorization package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/automated-document-categorization) enables the system to automatically fill in some metadata of the document when it is created, from the document's content.

{{! /excerpt}}

When a user creates a new document, the text of the note or of the file is analyzed and the system fills some metadata automatically from this text. This occurs when documents are created using all the means provided by Nuxeo DM (the **New** button, **Import a file** button and Drag&Drop).

The metadata that the system fills in automatically are:

*   language
*   coverage
*   subjects

You can at anytime edit the document to change and complete the metadata of the document. The system fills the metadata at document creation, but then it doesn't update or control them when the document is edited.

![]({{file name='MP-Categorization-package.png'}} ?w=725,h=370,border=true)

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other documentation about this package'}}

*   [Automated Document Categorization dev documentation]({{page space='nxdoc60' page='automated-document-categorization'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>