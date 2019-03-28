---
title: Renditions
review:
    comment: ''
    date: '2018-01-15'
    status: ok
labels:
    - lts2016-ok
    - link-update
    - renditions-component
    - rendition
    - troger
    - excerpt
    - multiexcerpt-include
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '16089319'
    ajs-parent-page-title: Additional Services
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Renditions
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Renditions'
    page_id: '23367218'
    shortlink: Mo5kAQ
    shortlink_source: 'https://doc.nuxeo.com/x/Mo5kAQ'
    source_link: /display/NXDOC/Renditions
tree_item_index: 1000
history:
    -
        author: Manon Lumeau
        date: '2015-11-30 14:47'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2015-11-30 14:46'
        message: ''
        version: '7'
    -
        author: Florent Guillaume
        date: '2015-11-13 15:08'
        message: Add storeByDefault
        version: '6'
    -
        author: Solen Guitter
        date: '2015-03-16 09:10'
        message: Add links and related pages
        version: '5'
    -
        author: Thomas Roger
        date: '2015-03-13 13:41'
        message: ''
        version: '4'
    -
        author: Thomas Roger
        date: '2015-03-13 11:09'
        message: ''
        version: '3'
    -
        author: Thomas Roger
        date: '2015-03-13 10:48'
        message: ''
        version: '2'
    -
        author: Thomas Roger
        date: '2015-03-10 14:39'
        message: ''
        version: '1'

---
{{! excerpt}}

This page explains what renditions are, how to get them and how to contribute new ones.

{{! /excerpt}}

## Functional Overview

In the Nuxeo Platform, renditions are used for exports. For more information, discover how it works on:
- [Web UI]({{page version='' space='userdoc' page='exporting-documents'}})
- [JSF UI]({{page version='' space='userdoc' page='exporting-content'}})

## What Are Renditions?

Renditions are alternative representations of a document, or its content such as:

*   A PDF representation of office files
*   A watermarked image
*   A resized video
*   An XML export of the document
*   ...

## Rendition Contributions

Renditions are declared on a document through rendition definition contributions. They are done on the  [`org.nuxeo.ecm.platform.rendition.service.RenditionService`](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewComponent/org.nuxeo.ecm.platform.rendition.service.RenditionService) .

### Rendition Definitions

A rendition definition can be contributed through the  [`renditionDefinitions`](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.rendition.service.RenditionService--renditionDefinitions) extension point.

{{#> panel type='code' heading='Sample contribution for a PDF rendition'}}
```xml
<extension target="org.nuxeo.ecm.platform.rendition.service.RenditionService"
  point="renditionDefinitions">
  <renditionDefinition name="pdf">
    <label>label.rendition.pdf</label>
    <icon>/icons/pdf.png</icon>
    <contentType>application/pdf</contentType>
    <operationChain>blobToPDF</operationChain>
    <storeByDefault>true</storeByDefault>
    <filters>
      <filter-id>allowPDFRendition</filter-id>
    </filters>
  </renditionDefinition>
</extension>
```
{{/panel}}

By default, the rendition is computed through an automation chain, specified in the `operationChain` element. The rendition isn't stored permanently unless the code requesting it explicitly asks for it to be stored, but since Nuxeo 7.10 the default can be changed by using the `storeByDefault` element.

When using an automation chain to compute the rendition, note that the **document** and the **main Blob** are pushed on the operation context. For instance, the `blobToPDF` chain uses the `Context.PopBlob` operation as the first operation to retrieve the Blob to convert, see its contribution:

```xml
<extension target="org.nuxeo.ecm.core.operation.OperationServiceComponent"
  point="chains">
  <chain id="blobToPDF">
    <operation id="Context.PopBlob" />
    <operation id="Blob.ToPDF" />
  </chain>
</extension>
```

A rendition definition can also use a specific class (instead of the default `DefaultAutomationRenditionProvider`) to compute the rendition, through the **class** attribute on the `renditionDefinition` contribution. The class must implement the `RenditionProvider` interface.

### Rendition Definition Providers

Rendition definitions can also be contributed through a `RenditionDefinitionProvider` on the `renditionDefinitionProviders` extension point. Using a `RenditionDefinitionProvider` allows to dynamically generate `RenditionDefinition`, especially useful when the renditions depends on the content of a document.

We have some examples in the Nuxeo Platform, such as:

*   `PictureRenditionDefinitionProvider` for picture conversions
*   `VideoRenditionDefinitionProvider` for transcoded videos

Here is the contribution for the `PictureRenditionDefinitionProvider`:

```xml
<extension target="org.nuxeo.ecm.platform.rendition.service.RenditionService"
  point="renditionDefinitionProviders">
  <renditionDefinitionProvider name="pictureRenditionDefinitionProvider"
    class="org.nuxeo.ecm.platform.picture.rendition.PictureRenditionDefinitionProvider">
    <filters>
      <filter-id>hasPictureFacet</filter-id>
    </filters>
  </renditionDefinitionProvider>
</extension>
```

### Filtering Rendition Definitions and Rendition Definition Providers

Since 7.2, both contributions can be filtered through standard filters we already use in the Nuxeo Platform. The `currentDocument` referenced in the filter is the document on which the rendition definition is checked.

### Default Rendition{{> anchor 'default_rendition'}}

A [default rendition extension point](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.rendition.service.RenditionService--defaultRendition) allows to configure which rendition should be produced according to contextual data:

- a `reason`
- the `CurrentUser`
- the `Document`

```xml
  <defaultRendition reason="download">
    <script language="JavaScript">
      function run() {
        if (Document.getType() == "File") {
          return 'mainBlob';
        } else if (Document.getType() == 'Picture') {
          return 'mainBlob';
        } else if (Document.getType() == 'Video') {
          return 'mainBlob';
        } else if (Document.getType() == 'Audio') {
          return 'mainBlob';
        } else if (Document.getType() == 'Note') {
          return 'pdf';
        } else if (Document.getFacets().contains("Collection")) {
          return 'containerDefaultRendition';
        } else if (Document.getFacets().contains("Folderish")) {
          return 'containerDefaultRendition';
        } else {
          return 'xmlExport';
        }
      }
    </script>
  </defaultRendition>
```

The language can be any JVM scripting language, the default is "JavaScript".

The `<script>` must define a run() function that returns the name of the rendition to be produced.

Note that the [`containerDefaultRendition`](https://github.com/nuxeo/nuxeo/blob/10.10/nuxeo-features/nuxeo-platform-rendition/nuxeo-platform-rendition-core/src/main/resources/OSGI-INF/rendition-contrib.xml#L88) rendition returns a Zip containing the default renditions of the `Folderish`'s children or the `Collection`'s members.

Web UI leverages this capabiltiy in 2 important feature in :

- [`Bulk Download`]({{page page='web-ui-defaullt-rendition#bulk_download'}}) which will pack inside a Zip file the default renditions of a selection of documents to be downloaded.
- [`Publishing`]({{page page='web-ui-defaullt-rendition#publishing'}}) where you can pick the default rendition to be used when publishing a document.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Digital Asset Management (DAM)]({{page page='digital-asset-management-dam'}})

{{/panel}}</div><div class="column medium-6">



</div></div>
