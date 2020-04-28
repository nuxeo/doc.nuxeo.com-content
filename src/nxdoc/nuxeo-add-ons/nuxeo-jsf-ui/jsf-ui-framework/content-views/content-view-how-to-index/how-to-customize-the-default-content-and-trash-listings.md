---
title: How to Customize the Default Content and Trash Listings
review:
    comment: ''
    date: '2016-12-19'
    status: ok
details:
    howto:
        excerpt: Learn how to customize the default content and trash listings using Nuxeo Studio.
        level: Intermediate
        tool: Studio
        topics: Content View
labels:
    - lts2016-ok
    - content-view
    - atchertchian
    - howto
    - studio
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '19235663'
    ajs-parent-page-title: Content View How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Customize+the+Default+Content+and+Trash+Listings
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Customize+the+Default+Content+and+Trash+Listings'
    page_id: '19235716'
    shortlink: hIMlAQ
    shortlink_source: 'https://doc.nuxeo.com/x/hIMlAQ'
    source_link: /display/NXDOC/How+to+Customize+the+Default+Content+and+Trash+Listings
tree_item_index: 200
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
{{#> callout type='info' }} {{{multiexcerpt 'check-jsf-ui-dependency' page='how-to-define-a-new-content-view'}}} {{/callout}}
{{! excerpt}}

The content displayed in the **Content** tab of a folder is the result of a query that says that we want to display all the documents that:

*   are the direct children of the current folder;
*   are not "trashed";
*   are not hidden in navigation.

{{! /excerpt}}

You can create new views that will display the results of a query you have customized. This is done using Content views. Then you can choose to use your content view in the **Content** or **Trash** tab of your document types.

**To change the list of documents displayed in the Content and Trash tabs:**

1.  Create a [new Content View]({{page space='nxdoc' page='how-to-define-a-new-content-view'}}).
2.  On the document type definition, click on the **Tabs** tab.
3.  Select the content view you want to use for:
    *   the "Main content", i.e. the **Content** tab of your document type.
    *   the "Trash content", i.e. the **Trash** tab of your document type.
4.  Click on **Save**.
