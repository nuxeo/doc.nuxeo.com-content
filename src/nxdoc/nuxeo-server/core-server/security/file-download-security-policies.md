---
title: File Download Security Policies
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - security-policy
    - blob-manager-component
    - security-component
    - fguillaume
    - university
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '20515363'
    ajs-parent-page-title: Security
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: File+Download+Security+Policies
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/File+Download+Security+Policies'
    page_id: '26316548'
    shortlink: BI_RAQ
    shortlink_source: 'https://doc.nuxeo.com/x/BI_RAQ'
    source_link: /display/NXDOC/File+Download+Security+Policies
tree_item_index: 500
history:
    -
        author: Bertrand Chauvin
        date: '2015-12-03 15:38'
        message: dded vide
        version: '15'
    -
        author: Bertrand Chauvin
        date: '2015-11-23 13:52'
        message: 'Link to REST API doc, add mention about document security policies'
        version: '14'
    -
        author: Bertrand Chauvin
        date: '2015-11-23 13:43'
        message: Improve webengine reason description
        version: '13'
    -
        author: Thomas Roger
        date: '2015-11-04 13:34'
        message: ''
        version: '12'
    -
        author: Florent Guillaume
        date: '2015-10-23 14:45'
        message: ''
        version: '11'
    -
        author: Florent Guillaume
        date: '2015-10-23 14:44'
        message: bold names
        version: '10'
    -
        author: Bertrand Chauvin
        date: '2015-10-23 12:56'
        message: Possible side effects
        version: '9'
    -
        author: Bertrand Chauvin
        date: '2015-10-23 12:53'
        message: Added warning
        version: '8'
    -
        author: Florent Guillaume
        date: '2015-10-22 22:14'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2015-10-22 08:14'
        message: formatting
        version: '6'
    -
        author: Bertrand Chauvin
        date: '2015-10-21 16:26'
        message: formatting
        version: '5'
    -
        author: Bertrand Chauvin
        date: '2015-10-21 16:24'
        message: Added debugging section
        version: '4'
    -
        author: Florent Guillaume
        date: '2015-10-13 13:50'
        message: consistent download reasons
        version: '3'
    -
        author: Florent Guillaume
        date: '2015-09-25 12:26'
        message: ''
        version: '2'
    -
        author: Florent Guillaume
        date: '2015-09-22 12:59'
        message: ''
        version: '1'

---

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Video on Setting up a File Download Security Policy](https://university.nuxeo.com/learn/public/course/view/elearning/60/setting-up-a-file-download-security-policy).
![]({{file name='university-security-policy.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

In addition to the permissions applying to a document, which restrict access to a document as a whole, it's possible to specify more fine-grained permissions to disallow the download of some file attachments.

&nbsp;

{{#> callout type='info' }}

If you are looking to dynamically restrict access to whole documents depending on a set of conditions and not to its attachments only, you should have a look at the [Security Policy Service]({{page page='security-policy-service'}}) documentation.

{{/callout}} {{#> callout type='warning' }}

File download security policies apply to **all** blobs in the Platform. Your security filters need to be specific enough in order to avoid possible side-effects. Make sure to use the [available variables](#available-variables) at your disposal to check you are in the right use case first.

Possible side-effects you may want to check for include:

*   Show graph feature in a workflow.
*   User suggestion widget, for instance in the admin tab, users & groups menu, when editing the groups a user belongs to.

{{/callout}}

## Download Permissions

To additionally restrict the download of a given blob inside a document, you can contribute to the following extension point:

```xml
   <extension target="org.nuxeo.ecm.core.io.download.DownloadService" point="permissions">
    <permission name="myperm">
      <script language="JavaScript">
        function run() {
          if (CurrentUser.getName() != "bob") {
            return false;
          }
          return true;
        }
      </script>
    </permission>
  </extension>
```

The above is an example script that will prevent download if the user is not "bob".

The `language` can be any JVM scripting language, the default is "JavaScript".

The `<script>` must define a `run()` function that returns a boolean:

*   `true` means that downloading the blob is not forbidden by this permission (but other permission rules could forbid it),
*   `false` means that downloading the blob is forbidden.

If there are several permissions defined, a single one returning `false` is sufficient to forbid the blob download.

{{> anchor 'available-variables'}}The `run()` method will get called with the following global context (some values may be null for non-standard download methods):

*   **Document** (DocumentModel): the document in which the blob is stored. This may be null for dynamically computed dowloads (ZIP exports, EL, Automation results).
*   **XPath** (String): the xpath at which the blob is stored in the document. This may be null if there is no document (see above), or if the blob was not stored in the document but just computed from it (renditions, thumbnail).
*   **Blob** (Blob): the blob itself.
*   **CurrentUser** (NuxeoPrincipal): the current user.
*   **Reason** (String): the download "reason", which gives an indication of the source of the download:
    *   `download`: file downloads from the download servlet, Automation, WebEngine, REST API, Seam or Restlets.
    *   `picture`: downloadPicture codec (the XPath is then one of OriginalJpeg:content, Medium:content, Small:content, Thumbnail:content, etc.).
    *   `thumbnail`: downloadThumbnail codec.
    *   `workListXML`: worklist XML export.
    *   `pdfConversion`: PDF conversion.
    *   `el`: EL-triggered download.
    *   `operation`: Automation operation (WebUI.DownloadFile / Seam.DownloadFile).
    *   `rendition`: rendition.
    *   `templateRendition`: template rendition.
    *   `webengine`: WebEngine JSON responses. Includes Automation and [REST API]({{page page='rest-api'}}) calls.
    *   `contentDiff`: content diff display.
    *   `tile`: image tiling display.
    *   `preview`: preview display restlet.
*   **Rendition** (String): the rendition name, if this is a rendition.
*   **Infos** (Map): the ExtendedInfos map passed internally to the download method.

## Example

Here is a more complex (if unrealistic) example that uses most of the available context variables:

```
  <extension target="org.nuxeo.ecm.core.io.download.DownloadService" point="permissions">
    <permission name="myperm">
      <script>
        function run() {
          if (CurrentUser.getName() != "bob") {
            return false;
          }
          if (!CurrentUser.getGroups().contains("members")) {
            return false;
          }
          if (Document.getPropertyValue("dc:format") != "pdf") {
            return false;
          }
          if (Reason != "rendition") {
            return false;
          }
          if (Rendition != "myrendition") {
            return false;
          }
          if (Blob.getFilename() != "myfile.txt") {
            return false;
          }
          if (XPath == "file:content" || XPath == "blobholder:0") {
            return false;
          }
          return true;
        }
      </script>
    </permission>
  </extension>
```

## Debugging

If you launched your Nuxeo instance in console mode (`./nuxeoctl console`), you can print output to the terminal for easier debugging. For instance, getting the available variables is done as following:

```js
<extension target="org.nuxeo.ecm.core.io.download.DownloadService" point="permissions">
  <permission name="myperm">
    <script language="JavaScript">
      function run() {
        print("doc " + (Document == null ? "null" : Document.getId()));
        print("filename " + (Blob == null ? "null" : Blob.getFilename()));
        print("xpath " + XPath);
        print("user " + CurrentUser.getName());
        print("reason " + Reason);
        print("rendition " + Rendition);
        return true;
      }
    </script>
  </permission>
</extension>
```

{{! Don't put anything here. }}

* * *
