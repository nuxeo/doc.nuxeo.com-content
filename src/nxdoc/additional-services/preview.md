---
title: Preview
review:
    comment: ''
    date: ''
    status: ok
labels:
    - link-update
    - preview
toc: true
confluence:
    ajs-parent-page-id: '22380662'
    ajs-parent-page-title: Additional Services
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Preview
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Preview'
    page_id: '22380595'
    shortlink: M4BVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/M4BVAQ'
    source_link: /display/NXDOC60/Preview
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2016-08-31 15:53'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2014-12-05 16:05'
        message: 'fix broken link, formatting'
        version: '10'
    -
        author: Solen Guitter
        date: '2014-06-06 11:25'
        message: Formatting and reorganization
        version: '9'
    -
        author: Frédéric Vadon
        date: '2014-06-04 11:16'
        message: ''
        version: '8'
    -
        author: Frédéric Vadon
        date: '2014-06-04 11:14'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2014-05-09 18:36'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2014-05-09 03:24'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2014-05-09 03:21'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2014-05-09 03:18'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2014-05-09 03:14'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-05-09 03:10'
        message: ''
        version: '1'

---
{{! excerpt}}

The [nuxeo-platform-preview module](https://github.com/nuxeo/nuxeo-features/tree/release-6.0/nuxeo-platform-preview) provides services, converters and adapters to generate HTML previews of a Nuxeo DocumentModel. You may want to understand in details how this module works so as to change the behavior for a given MIME type or add the support of a new format.

{{! /excerpt}}

## Overview

When previewing a document, the logic executed goes through several layers (from end result to the most core part):

*   **Preview tab** in the JSF UI: Adds a Preview tab that displays the preview inside an iframe, querying the Restlet preview URL for the current document.
*   **A preview Restlet**, that is in charge of handling caching logic when delivering the HTML preview&nbsp;for a given document. The Restlet URL follows the pattern below:

    ```
    http://{server}:{port}/nuxeo/restAPI/preview/{server_name}/{document_uuid}/{previewfield}/

    ```

    An example could be [`http://localhost:8080/nuxeo/restAPI/preview/default/cf5d81c5-e880-4f8a-9520-bf63e670260e/file:content/`](http://localhost:8080/nuxeo/restAPI/preview/default/cf5d81c5-e880-4f8a-9520-bf63e670260e/file:content/).

    It gets the HTLM preview by getting the `HtmlPreviewAdapter` from the documentModel.

*   **The [HtmlPreviewAdapter](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewContribution/org.nuxeo.ecm.platform.preview.adapters--adapters)** is a standard Nuxeo Platform adapter, that is fetched using&nbsp;`doc.getAdapter(HtmlPreviewAdapter.class)`. This adapter is a way to get access to the service below.

*   **[The PreviewAdapterManagerComponent](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewComponent/org.nuxeo.ecm.platform.preview.adapter.PreviewAdapterManagerComponent)** and its `getAdapter(DocumentModel doc)` method, that returns, depending on the document type of "doc" and the contributions that have been made to [extension "AdapterFactory"](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewExtensionPoint/org.nuxeo.ecm.platform.preview.adapter.PreviewAdapterManagerComponent--AdapterFactory) of this component, &nbsp;an object whose type implements the interface.

## HtmlPreviewAdapter Details

The [HtmlPreviewAdapter](https://fisheye.nuxeo.com/browse/nuxeo/nuxeo-features/nuxeo-platform-preview/src/main/java/org/nuxeo/ecm/platform/preview/api/HtmlPreviewAdapter.java?hb=true) is an interface that is in charge of returning the preview blob (or list of blobs).

```
...
 preview = targetDocument.getAdapter(HtmlPreviewAdapter.class);
 List<Blob> previewBlobs= preview.getFilePreviewBlobs();

```

When no custom factory has been contributed for the given document type, the above mentioned service returns a **ConverterBasedHtmlPreviewAdapter** &nbsp;instance. This instance leverages the BlobHolder of the document to get the preview blob. If the document has no BlobHolder, it takes takes [`file:content`](http://filecontent) or [`files:files`](http://filesfiles).&nbsp; It uses the MimeTypePreviewer (see below) if the MIME type matches. If there is no MIME type match, the converter service is used to get a&nbsp;[any2html](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewContribution/org.nuxeo.ecm.platform.convert.preview.plugins--converter)&nbsp;conversion chain. (You can override/extend the MIME types that can benefit from this chain).

Some other adapters are contributed by default in the Platform, for pictures and notes. Contributing another adapter is of course possible. For instance, if you want to "merge" all the PDFs there are in&nbsp; the [`file:content`](http://filecontent)&nbsp;and&nbsp;[`files:files`](http://filesfiles)&nbsp;properties of a custom "Report" type (or any other property) and preview all the content in one block. This custom logic could be written in such an adapter. Or, if you want to generate the preview of a CAD (AutoCAD) document and need to get some linked files before doing your generation, this is where you would do it.

## MimeTypePreviewer Details

The MimeTypePreviewer, as said above,&nbsp;may be used by the converter-based HtmlPreviewAdapter as a helper to build the HTML document. It was introduced to handle cases where the binary to preview is already in plain/text, XML or HTML, and we just need to either wrap it by `<PRE>` chunks and encode existing tags inside the content, or do other small string manipulations. Pragmatically, you may want to contribute a MimeTypePreviewer if you want to build your preview by doing a bit of HTML assembly with some custom logic, and that you want to use this logic on a per MIME type basis. MimeTypePreviewer [can be contributed](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewExtensionPoint/org.nuxeo.ecm.platform.preview.adapter.PreviewAdapterManagerComponent--MimeTypePreviewer) via the extension system. You need to provide a mapping between a class that implements MimeTypePreviewer and a regular expression that can be validated by the MIME type of the targeted blob to preview.

Note that it is by default called only from the converter-based HtmlPreviewAdapter. If you contribute your own adapter and also want to benefit from this logic, you need to call inside your HtmlPreviewAdapter implementation. The following extract of Nuxeo code illustrates how to use it:

```java
...
String srcMT = blob.getMimeType();
MimeTypePreviewer mtPreviewer = Framework.getService(PreviewAdapterManager.class).getPreviewer(srcMT);
        if (mtPreviewer != null) {
            blobResults = mtPreviewer.getPreview(blob2Preview, adaptedDoc);
            return blobResults;
        }

....
```

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in other documentation'}}

*   [Preview]({{page space='userdoc60' page='preview'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
