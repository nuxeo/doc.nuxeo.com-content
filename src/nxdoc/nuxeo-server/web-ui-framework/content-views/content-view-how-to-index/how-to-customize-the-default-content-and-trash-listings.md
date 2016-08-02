---
title: How to Customize the Default Content and Trash Listings
details:
    howto:
        excerpt: >-
            Learn how to customize the default content and trash listings using
            Nuxeo Studio.
        level: Intermediate
        tool: Studio
        topics: Content View
labels:
    - content-view
    - howto
    - studio
    - lts2015-ok
confluence:
    ajs-parent-page-id: '19235663'
    ajs-parent-page-title: Content View How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Customize+the+Default+Content+and+Trash+Listings
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/How+to+Customize+the+Default+Content+and+Trash+Listings
    page_id: '19235716'
    shortlink: hIMlAQ
    shortlink_source: 'https://doc.nuxeo.com/x/hIMlAQ'
    source_link: /display/NXDOC/How+to+Customize+the+Default+Content+and+Trash+Listings
history:
    - 
        author: Manon Lumeau
        date: '2016-06-09 13:55'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2016-04-15 09:25'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-12-01 21:41'
        message: ''
        version: '6'
    - 
        author: Anahide Tchertchian
        date: '2014-12-01 12:15'
        message: ''
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2014-12-01 12:11'
        message: ''
        version: '4'
    - 
        author: Manon Lumeau
        date: '2014-09-15 15:26'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2014-09-02 14:20'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2014-05-05 11:55'
        message: ''
        version: '1'

---
{{! excerpt}}

<span style="color: rgb(50,51,51);">The content displayed in the&nbsp;</span> **Content** <span style="color: rgb(50,51,51);">&nbsp;tab of a folder, for instance, is the result of a query that says that we want to display all the documents that:</span> <span style="color: rgb(50,51,51);">&nbsp;</span>

*   <span style="color: rgb(50,51,51);">are the direct children of the current folder;</span>
*   <span style="color: rgb(50,51,51);">are not "deleted";</span>
*   <span style="color: rgb(50,51,51);">are not hidden in navigation.</span>

{{! /excerpt}}

<span style="color: rgb(50,51,51);">You can create new views that will display the results of a query you have customized. This is done using Content views. And then, you can choose to use your content view in the&nbsp;</span> **Content** <span style="color: rgb(50,51,51);">&nbsp;or&nbsp;</span> **Trash** <span style="color: rgb(50,51,51);">&nbsp;tab of your document types.</span>

<span style="color: rgb(50,51,51);">**To change the list of documents displayed in the Content and Trash tabs:**</span>

1.  <span style="color: rgb(50,51,51);">Create a&nbsp;</span> <span style="color: rgb(0,99,198);">new Content View</span> <span><span style="color: rgb(50,51,51);">.</span></span>
2.  <span style="color: rgb(50,51,51);">On the document type definition, click on the&nbsp;</span> **Tabs** <span style="color: rgb(50,51,51);">&nbsp;tab.</span>
3.  <span style="color: rgb(50,51,51);">Select the content view you want to use for:</span>
    *   <span style="color: rgb(50,51,51);">the "Main content", i.e. the&nbsp;</span> **Content** <span style="color: rgb(50,51,51);">&nbsp;tab of your document type.</span>
    *   <span style="color: rgb(50,51,51);">the "Trash content", i.e. the&nbsp;</span> **Trash** <span style="color: rgb(50,51,51);">&nbsp;tab of your document type.</span>
4.  <span style="color: rgb(50,51,51);">Click on&nbsp;</span> **Save** <span style="color: rgb(50,51,51);">.</span>