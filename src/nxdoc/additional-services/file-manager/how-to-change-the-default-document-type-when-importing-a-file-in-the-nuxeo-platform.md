---
title: >-
    How to Change the Default Document Type When Importing a File in the Nuxeo
    Platform?
review:
    comment: ''
    date: ''
    status: ok
labels:
    - document-type
    - lts2015-ok
    - file-upload-component
    - howto
    - import
confluence:
    ajs-parent-page-id: '28475564'
    ajs-parent-page-title: File Manager
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: viewpage.action?pageId=28475478
    canonical_source: viewpage.action?pageId=28475478
    page_id: '28475478'
    shortlink: VoCyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/VoCyAQ'
    source_link: /pages/viewpage.action?pageId=28475478
history:
    - 
        author: Manon Lumeau
        date: '2016-09-08 09:43'
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

In this how-to, [importing a file]({{page space='userdoc710' page='creating-content'}}) can correspond to using the Drag'n Drop, using the Import button, or adding a file from [Nuxeo Drive]({{page space='userdoc710' page='nuxeo-drive'}}) or a [WebDAV drive]({{page space='userdoc710' page='working-with-webdav'}}).

{{! /excerpt}}

The mechanism to create a Nuxeo document with an import is tight to the extension point [plugins](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewExtensionPoint/org.nuxeo.ecm.platform.filemanager.service.FileManagerService--plugins) from the FileManager service.

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