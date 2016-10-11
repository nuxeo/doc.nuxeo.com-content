---
title: >-
    How to Change the Default Document Type When Importing a File in the Nuxeo
    Platform?
review:
    comment: ''
    date: ''
    status: ok
labels:
    - howto
    - document-type
    - import
confluence:
    ajs-parent-page-id: '22380629'
    ajs-parent-page-title: File Manager
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: viewpage.action?pageId=22380867
    canonical_source: viewpage.action?pageId=22380867
    page_id: '22380867'
    shortlink: Q4FVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/Q4FVAQ'
    source_link: /pages/viewpage.action?pageId=22380867
history:
    - 
        author: Manon Lumeau
        date: '2016-09-08 09:43'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2016-08-30 15:36'
        message: ''
        version: '10'
    - 
        author: Manon Lumeau
        date: '2014-07-21 10:48'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2014-07-18 11:42'
        message: add links
        version: '8'
    - 
        author: Solen Guitter
        date: '2014-07-18 11:41'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-07-18 11:29'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2014-03-21 18:15'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2014-03-21 17:40'
        message: ''
        version: '4'
    - 
        author: Thierry Martins
        date: '2014-03-21 17:21'
        message: ''
        version: '3'
    - 
        author: Thierry Martins
        date: '2014-03-21 17:21'
        message: Add related links
        version: '2'
    - 
        author: Thierry Martins
        date: '2014-03-21 17:20'
        message: ''
        version: '1'

---
{{! excerpt}}

In this how-to, importing a file can correspond to using the [Drag'n Drop]({{page space='userdoc60' page='working-using-drag-and-drop'}}), using the ["Import a file"]({{page space='userdoc60' page='creating-content'}}) button, or adding a file from [Nuxeo Drive]({{page space='userdoc60' page='nuxeo-drive'}}) or a [WebDAV drive]({{page space='userdoc60' page='working-with-webdav-and-wss'}}).

{{! /excerpt}}

The mechanism to create a Nuxeo document with an import is tight to the extension point [plugins](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewExtensionPoint/org.nuxeo.ecm.platform.filemanager.service.FileManagerService--plugins) from the FileManager service.

According to the mimetype of the file you try to import, a specific plugin will be called. And most of the time, it's the `DefaultFileImporter`plugin that will be used.

So, to create a document of your own type that, you have to set the&nbsp;`docType` attribute when overwriting the default contribution:

```xml
<require>org.nuxeo.ecm.platform.filemanager.service.FileManagerService.Plugins</require>

<extension target="org.nuxeo.ecm.platform.filemanager.service.FileManagerService" point="plugins">
    <plugin name="DefaultFileImporter" merge="true" docType="MyCustomFileType" />
</extension>
```

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related topics in developer documentation'}}

*   [Nuxeo Core Import / Export API]({{page page='nuxeo-core-import-export-api'}})
*   [Nuxeo CSV]({{page page='nuxeo-csv'}})
*   [Drag and Drop Service for Content Capture (HTML5-Based)]({{page page='drag-and-drop-service-for-content-capture-html5-based'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

&nbsp;

</div></div>