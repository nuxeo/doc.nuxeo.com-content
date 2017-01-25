---
title: Preview
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lts2015-ok
    - preview-component
    - preview
    - link-update
toc: true
confluence:
    ajs-parent-page-id: '28475785'
    ajs-parent-page-title: Additional Services
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Preview
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Preview'
    page_id: '28475540'
    shortlink: lICyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/lICyAQ'
    source_link: /display/NXDOC710/Preview
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2015-09-07 15:21'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2015-09-07 15:18'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2015-07-09 12:36'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2015-07-09 12:36'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2015-07-09 12:36'
        message: Add functional overview
        version: '11'
    -
        author: Solen Guitter
        date: '2014-12-05 16:06'
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
## Functional Overview

{{{multiexcerpt 'preview_functional_overview' page='USERDOC:Preview'}}}

## Installation & Configuration

For all document previews make sure you installed the [related softwares]({{page space='admindoc710' page='installing-and-setting-up-related-software'}}) corresponding to your document types.

Since 7.10-HF01, if you are running the Nuxeo Platform on MacOS, you will fall into the bug [NXP-18883](https://jira.nuxeo.com/browse/NXP-18883).
Until it is fixed, you will need to use the following contribution as a workaround:
```
<require>org.nuxeo.ecm.platform.commandline.executor.service.testContrib.magic2</require>
<extension target="org.nuxeo.ecm.platform.commandline.executor.service.CommandLineExecutorComponent"
    point="command">

    <command name="pdftohtml" enabled="true">
      <commandLine>pdftohtml</commandLine>
      <parameterString> -c -enc UTF-8 -noframes #{inFilePath} #{outDirPath}/index.html</parameterString>
      <winParameterString> -c -enc UTF-8 -noframes #{inFilePath} #{outDirPath}\index.html</winParameterString>
      <installationDirective>You need to install pdftohtml</installationDirective>
    </command>

  </extension>
```

## Customization

You may want to check the following how-tos for customization:

*   [How to Customize the Info-View Pop-Up]({{page page='how-to-customize-the-info-view-pop-up'}})
*   [How to Contribute Picture Conversions]({{page page='how-to-contribute-picture-conversions'}})

## Core Implementation

### Technical Overview

When previewing a document, the logic executed goes through several layers (from end result to the most core part):

*   **Preview popup** in the JSF UI: Adds a Preview popup that displays the preview inside an iframe, querying the Restlet preview URL for the current document.
*   **A preview Restlet**, that is in charge of handling caching logic when delivering the HTML preview for a given document. The Restlet URL follows the pattern below:

    ```
    http://{server}:{port}/nuxeo/restAPI/preview/{server_name}/{document_uuid}/{previewfield}/

    ```

    An example could be  [`http://localhost:8080/nuxeo/restAPI/preview/default/cf5d81c5-e880-4f8a-9520-bf63e670260e/file:content/`](http://localhost:8080/nuxeo/restAPI/preview/default/cf5d81c5-e880-4f8a-9520-bf63e670260e/file:content/) .

    It gets the HTLM preview by getting the `HtmlPreviewAdapter` from the documentModel.

*   **The [HtmlPreviewAdapter](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewContribution/org.nuxeo.ecm.platform.preview.adapters--adapters)** is a standard Nuxeo Platform adapter, that is fetched using `doc.getAdapter(HtmlPreviewAdapter.class)`. This adapter is a way to get access to the service below.

*   **[The PreviewAdapterManagerComponent](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewComponent/org.nuxeo.ecm.platform.preview.adapter.PreviewAdapterManagerComponent)** and its `getAdapter(DocumentModel doc)` method, that returns, depending on the document type of "doc" and the contributions that have been made to [extension "AdapterFactory"](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewExtensionPoint/org.nuxeo.ecm.platform.preview.adapter.PreviewAdapterManagerComponent--AdapterFactory) of this component, an object whose type implements the interface.

### HtmlPreviewAdapter Details

The [HtmlPreviewAdapter](https://fisheye.nuxeo.com/browse/nuxeo/nuxeo-features/nuxeo-platform-preview/src/main/java/org/nuxeo/ecm/platform/preview/api/HtmlPreviewAdapter.java?hb=true) is an interface that is in charge of returning the preview blob (or list of blobs).

```
...
 preview = targetDocument.getAdapter(HtmlPreviewAdapter.class);
 List<Blob> previewBlobs= preview.getFilePreviewBlobs();

```

When no custom factory has been contributed for the given document type, the above mentioned service returns a `ConverterBasedHtmlPreviewAdapter` instance. This instance leverages the BlobHolder of the document to get the preview blob. If the document has no BlobHolder, it takes takes [`file:content`](http://filecontent) or [`files:files`](http://filesfiles). It uses the `MimeTypePreviewer` (see below) if the MIME type matches. If there is no MIME type match, the converter service is used to get a [any2html](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewContribution/org.nuxeo.ecm.platform.convert.preview.plugins--converter) conversion chain. (You can override/extend the MIME types that can benefit from this chain).

Some other adapters are contributed by default in the Platform, for pictures and notes. Contributing another adapter is of course possible. For instance, if you want to "merge" all the PDFs there are in the [`file:content`](http://filecontent) and [`files:files`](http://filesfiles) properties of a custom "Report" type (or any other property) and preview all the content in one block. This custom logic could be written in such an adapter. Or, if you want to generate the preview of a CAD (AutoCAD) document and need to get some linked files before doing your generation, this is where you would do it.

## MimeTypePreviewer Details

The [MimeTypePreviewer](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewExtensionPoint/org.nuxeo.ecm.platform.preview.adapter.PreviewAdapterManagerComponent--MimeTypePreviewer), as said above, may be used by the converter-based `HtmlPreviewAdapter` as a helper to build the HTML document. It was introduced to handle cases where the binary to preview is already in plain/text, XML or HTML, and we just need to either wrap it by `<PRE>` chunks and encode existing tags inside the content, or do other small string manipulations. Pragmatically, you may want to contribute a MimeTypePreviewer if you want to build your preview by doing a bit of HTML assembly with some custom logic, and that you want to use this logic on a per MIME type basis. You need to provide a mapping between a class that implements MimeTypePreviewer and a regular expression that can be validated by the MIME type of the targeted blob to preview.

Note that it is by default called only from the converter-based `HtmlPreviewAdapter`. If you contribute your own adapter and also want to benefit from this logic, you need to call inside your HtmlPreviewAdapter implementation. The following extract of Nuxeo code illustrates how to use it:

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

{{> end_of_tabs }}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation '}}

- [Installing and Setting Up Related Software]({{page space='ADMINDOC' page='Installing and+Setting+Up+Related+Software'}})
- [How to Customize the Info-View Pop-Up]({{page space='NXDOC' page='How to+Customize+the+Info-View+Pop-Up'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
