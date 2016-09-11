---
title: Document Content Views
review:
    comment: ''
    date: ''
    status: ok
labels:
    - document-content-views
confluence:
    ajs-parent-page-id: '17334303'
    ajs-parent-page-title: Documents Display Configuration
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Document+Content+Views
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Document+Content+Views'
    page_id: '18449659'
    shortlink: _4QZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/_4QZAQ'
    source_link: /display/NXDOC58/Document+Content+Views
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 15:36'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2014-01-22 16:49'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-01-22 16:48'
        message: ''
        version: '1'

---
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