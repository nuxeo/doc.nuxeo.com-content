---
title: Document Layouts
review:
    comment: ''
    date: '2019-02-13'
    status: ok
labels:
    - lts2016-ok
    - layout
    - web-ui-component
    - atchertchian
    - excerpt
    - content-review-lts2017
    - jsf-ui
confluence:
    ajs-parent-page-id: '6029663'
    ajs-parent-page-title: Documents Display Configuration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Document+Layouts
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Document+Layouts'
    page_id: '3868341'
    shortlink: tQY7
    shortlink_source: 'https://doc.nuxeo.com/x/tQY7'
    source_link: /display/NXDOC/Document+Layouts
tree_item_index: 200
history:
    -
        author: Anahide Tchertchian
        date: '2014-12-09 13:39'
        message: 'XDOC-427: document fallback on document layout mode ta'
        version: '12'
    -
        author: Solen Guitter
        date: '2014-08-25 12:00'
        message: Remove 5.4 references
        version: '11'
    -
        author: Solen Guitter
        date: '2014-01-13 17:39'
        message: formatting
        version: '10'
    -
        author: Solen Guitter
        date: '2014-01-13 17:38'
        message: Removed mentions to 5.4.2 and older versions
        version: '9'
    -
        author: Anahide Tchertchian
        date: '2013-12-12 17:55'
        message: better sample conf
        version: '8'
    -
        author: Anahide Tchertchian
        date: '2013-12-12 17:47'
        message: add anchor for display
        version: '7'
    -
        author: Anahide Tchertchian
        date: '2013-12-12 17:43'
        message: update + add document layout tags
        version: '6'
    -
        author: Anahide Tchertchian
        date: '2013-12-03 16:24'
        message: better title
        version: '5'
    -
        author: Solen Guitter
        date: '2013-09-04 16:05'
        message: ''
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2011-03-01 15:55'
        message: Migrated to Confluence 4.0
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2011-03-01 15:55'
        message: ''
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2010-10-12 15:08'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

{{! excerpt}}
Layouts can be linked to a document type by specifying the layout names in its definition.
{{! /excerpt}}

Here is a sample configuration excerpt:

```xml
<type id="Note">
  [...]
  <layouts mode="any">
    <layout>heading</layout>
    <layout>note</layout>
  </layouts>
</type>

```

Layouts are defined in a given mode; layouts in the "any" mode will be used as default when no layouts are given in specific modes.

It is possible to merge layouts when redefining the document type, adding a property `append="true"`:

```xml
<layouts mode="any" append="true">
  <layout>newLayout</layout>
</layouts>

```

The property named&nbsp;`display` set on the layout configuration is enough to handle a two columns rendering, it can be set to value `table_2_columns` for this purpose.

## {{> anchor 'display'}}Document Layouts Display

The [documentLayout tag](http://community.nuxeo.com/api/nuxeo/latest/tlddoc/nxl/documentLayout.html) can be used to display the layouts of a document:

```xml
<div xmlns="http://www.w3.org/1999/xhtml"
    xmlns:nxl="http://nuxeo.org/nxforms/layout">
  <nxl:documentLayout mode="view" value="#{currentDocument}" />
</div>

```

It is possible to make a distinction between the layouts defined in a given mode on the document, and the mode used to render layouts, for instance:

```xml
<nxl:documentLayout
  documentMode="header"
  mode="view"
  value="#{currentDocument}"
  defaultLayout="document_header"
  includeAnyMode="false" />

```

It is also possible to define a fallback mode on documents, for instance when retrieving layouts for document mode `driveEdit`, if no layout is resolved, it can fallback to layouts defined for document mode `edit`:

```xml
<nxl:documentLayout
  documentMode="edit"
  documentModeFallback="driveEdit"
  mode="view"
  value="#{currentDocument}" />
```
