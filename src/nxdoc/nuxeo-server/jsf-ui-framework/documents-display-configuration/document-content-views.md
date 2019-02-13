---
title: Document Content Views
review:
    comment: ''
    date: '2019-02-13'
    status: ok
labels:
    - lts2016-ok
    - document-content-view
    - web-ui-component
    - atchertchian
    - excerpt
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '6029663'
    ajs-parent-page-title: Documents Display Configuration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Document+Content+Views
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Document+Content+Views'
    page_id: '17794801'
    shortlink: 8YYPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/8YYPAQ'
    source_link: /display/NXDOC/Document+Content+Views
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2016-08-31 15:37'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-03-10 18:39'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-01-17 17:12'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-01-13 17:42'
        message: Formatting
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2013-12-12 18:47'
        message: Fix related topics box (by label)
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2013-12-12 18:43'
        message: add related labels
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2013-12-12 18:11'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DeprecatedJSF' page='generic-multi-excerpts'}}}

{{! excerpt}}
Content Views can be linked to a document type by specifying the content view names in its definition.
{{! /excerpt}}

Some default document views present [content views]({{page page='content-views'}}) for listing this folderish document content, for instance, or to present the result of a search using some of the document properties as parameters (like in the [Smart Search]({{page page='smart-search'}}) addon).

A `category` has been added to make the distinction between the different views, here is a sample configuration:

```xml
<type id="Workspace">
  [...]
  <contentViews category="content">
    <contentView>document_content</contentView>
  </contentViews>
  <contentViews category="trash_content">
    <contentView showInExportView="false">
      document_trash_content
    </contentView>
  </contentViews>
</type>
```

The category&nbsp;`content` is looked up by the default tab showing a folderish document content. The category `trash_content` is looked up by the default tab showing a folderish document trash content.

Several content views can be shown on each of these views.
