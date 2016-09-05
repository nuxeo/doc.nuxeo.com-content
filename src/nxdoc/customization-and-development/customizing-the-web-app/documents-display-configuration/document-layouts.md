---
title: Document Layouts
labels:
    - layout
confluence:
    ajs-parent-page-id: '17334303'
    ajs-parent-page-title: Documents Display Configuration
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Document+Layouts
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Document+Layouts'
    page_id: '17334432'
    shortlink: oIAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/oIAIAQ'
    source_link: /display/NXDOC58/Document+Layouts
history:
    - 
        author: Solen Guitter
        date: '2014-01-23 17:59'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2014-01-22 16:47'
        message: ''
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

A new mode "listing" can be used for folderish documents. Their default content will use the given layouts to make it possible to switch between the different presentations. Since 5.4.0, this configuration is deprecated as it is now possible to configure it through [Content Views]({{page page='content-views'}}). Anyhow, some default listing layouts have been defined, the one used by default when no layout is given in this mode is `document_listing`. To remove the layouts defined by default on a document type, override it without listing any modes.

```xml
<layouts mode="listing">
</layouts>

<layouts mode="listing">
  <layout>document_listing</layout>
  <layout>document_listing_compact_2_columns</layout>
  <layout>document_icon_2_columns</layout>
</layouts>

```

Layouts with a name that ends with `2_columns` will be displayed on two columns by default. The layout name will be used as a message key for the selector label.

Since 5.8, the property named `display` set on the layout configuration is enough to handle a two columns rendering, it can be set to value table_2_columns for this purpose.

## {{> anchor 'display'}}Document Layouts Display

The [documentLayout](http://community.nuxeo.com/api/nuxeo/5.8/tlddoc/nxl/documentLayout.html) tag can be used to display the layouts of a document:

```xml

<div xmlns="http://www.w3.org/1999/xhtml"
    xmlns:nxl="http://nuxeo.org/nxforms/layout">
  <nxl:documentLayout mode="view" value="#{currentDocument}" />
</div> 
```

It is possible to make a distinction between the layouts defined in a given mode on the document, and the mode used to render layouts, for instance:

```xml
<nxl:documentLayout documentMode="header" mode="view"
  value="#{currentDocument}" defaultLayout="document_header"
  includeAnyMode="false" />
```