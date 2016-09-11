---
title: Automated Document Categorization
review:
    comment: ''
    date: ''
    status: ok
labels:
    - document-categorization
confluence:
    ajs-parent-page-id: '16092550'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Automated+Document+Categorization
    canonical_source: >-
        https://doc.nuxeo.com/display/USERDOC58/Automated+Document+Categorization
    page_id: '16092589'
    shortlink: rY31
    shortlink_source: 'https://doc.nuxeo.com/x/rY31'
    source_link: /display/USERDOC58/Automated+Document+Categorization
history:
    - 
        author: Solen Guitter
        date: '2016-08-30 14:17'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-11-22 12:06'
        message: Added link to Marketplace
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-11-07 18:22'
        message: Added related topics
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-11-07 18:20'
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