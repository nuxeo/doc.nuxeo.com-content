---
title: How to Change the Default Document Type When Importing a File in the Nuxeo Platform?
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - lts2016-ok
    - import
    - gcarlin
    - howto
    - document-type
    - file-upload-component
    - excerpt
    - lts2017-ok
    - university
confluence:
    ajs-parent-page-id: '19235627'
    ajs-parent-page-title: File Manager
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: viewpage.action?pageId=18451489
    canonical_source: viewpage.action?pageId=18451489
    page_id: '18451489'
    shortlink: IYwZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/IYwZAQ'
    source_link: /pages/viewpage.action?pageId=18451489
history:
    -
        author: Manon Lumeau
        date: '2016-09-08 09:42'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2016-08-30 15:37'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2015-12-07 15:12'
        message: link update
        version: '13'
    -
        author: Antoine Taillefer
        date: '2015-10-13 10:42'
        message: ''
        version: '12'
    -
        author: Antoine Taillefer
        date: '2015-10-13 10:41'
        message: ''
        version: '11'
    -
        author: Antoine Taillefer
        date: '2015-10-13 10:37'
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

In this how-to, [importing a file]({{page space='userdoc' page='creating-content'}}) can correspond to using the drag and drop, using the Import button, or adding a file from [Nuxeo Drive]({{page space='client-apps' page='nuxeo-drive'}}) or a [WebDAV drive]({{page space='userdoc' page='working-with-webdav'}}).

{{! /excerpt}}

The mechanism to create a Nuxeo document with an import is tight to the [plugins](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.filemanager.service.FileManagerService--plugins) extension point from the `FileManager` service.

According to the MIME type of the file you try to import, a specific plugin will be called. And most of the time, it's the `DefaultFileImporter` plugin that will be used.

So, to create a document of your own type, you have to set the `docType` attribute when overwriting the default contribution:

```xml
<require>org.nuxeo.ecm.platform.filemanager.service.FileManagerService.Plugins</require>

<extension target="org.nuxeo.ecm.platform.filemanager.service.FileManagerService" point="plugins">
    <plugin name="DefaultFileImporter" merge="true" docType="MyCustomFileType" />
</extension>
```

{{#> callout type='tip' heading='Go further'}}

This mechanism is also valid with any document type inherited from File, as Picture, Audio or Video.

{{/callout}}

{{#> callout type='info' heading='Learn more'}}

*   [DAM Configuration](https://university.nuxeo.com/learn/public/course/view/elearning/100/dam-configuration) video on Nuxeo University: Learn how to type a file as Picture according to its file extension.

{{/callout}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related topics in developer documentation'}}

- [Nuxeo Core Import / Export API]({{page page='nuxeo-core-import-export-api'}})
- [Nuxeo CSV]({{page page='nuxeo-csv'}})
- [Drag and Drop Service for Content Capture (HTML5-Based)]({{page page='drag-and-drop-service-for-content-capture-html5-based'}})

{{/panel}}</div><div class="column medium-6">

</div></div>
