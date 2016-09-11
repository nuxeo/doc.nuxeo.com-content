---
title: >-
    How to Change the Default Document Type When Importing a File in the Nuxeo
    Platform?
review:
    comment: ''
    date: ''
    status: ok
labels:
    - import
confluence:
    ajs-parent-page-id: '17334435'
    ajs-parent-page-title: Dev Cookbook
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: viewpage.action?pageId=18451500
    canonical_source: viewpage.action?pageId=18451500
    page_id: '18451500'
    shortlink: LIwZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/LIwZAQ'
    source_link: /pages/viewpage.action?pageId=18451500
history:
    - 
        author: Manon Lumeau
        date: '2016-09-08 09:43'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2016-08-30 15:35'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-03-21 18:15'
        message: ''
        version: '1'

---
In this cookbook, importing a file corresponds to these actions:

*   Using the Drag'n Drop,
*   Using the "Import a file" button,
*   Adding a file from a WebDAV drive.

The mechanism to create a Nuxeo document with an import is tight to the extension point [plugins](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8//viewExtensionPoint/org.nuxeo.ecm.platform.filemanager.service.FileManagerService--plugins) from the FileManager service.

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