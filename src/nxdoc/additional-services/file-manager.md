---
title: File Manager
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '22380662'
    ajs-parent-page-title: Additional Services
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: File+Manager
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/File+Manager'
    page_id: '22380629'
    shortlink: VYBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/VYBVAQ'
    source_link: /display/NXDOC60/File+Manager
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2016-08-31 08:37'
        message: ''
        version: '4'
    -
        author: Manon Lumeau
        date: '2015-09-16 11:52'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2014-05-02 16:00'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-05-02 15:57'
        message: ''
        version: '1'

---
{{! excerpt}}

The File Manager is used for creating documents from simple binaries.

{{! /excerpt}}

From a user perspective, the Nuxeo Platform offers many ways to capture a binary so as to make it a document with a binary property. It can be done from the browser's drag and drop, from WebDAV, from CMIS, from Nuxeo Drive, &nbsp;...

The file manager service is a traditional Nuxeo Platform service that offers some methods that help standardize what happens when a file is captured in the Platform, in regard to:

*   what document type should be created
*   what is the property mapping logic
*   what is the versioning policy
*   how should the binary be processed (exploding a zip, doing some pre-persistence conversions)

## Customising and Using the File Manager Service

*   The File Manager service has a plugin architecture, so that it is possible to contribute different policies depending on the mime-type of the file and the context.&nbsp;The default Nuxeo Platform use cases of the File Manager can be customised reading the documentation of the&nbsp;[file manager service extension point](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewExtensionPoint/org.nuxeo.ecm.platform.filemanager.service.FileManagerService--plugins). There are also means of&nbsp;[controlling the versioning policy](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewExtensionPoint/org.nuxeo.ecm.platform.filemanager.service.FileManagerService--versioning)&nbsp;of documents updated via this channel. Finally, there is a helper for&nbsp;[implementing binary unicity checks](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewExtensionPoint/org.nuxeo.ecm.platform.filemanager.service.FileManagerService--unicity).
*   The File Manager can be called and used in your custom Java code with the standard service call pattern:&nbsp;

```
... fileManager = Framework.getService(FileManager.class);
DocumentModel createdDoc = fileManager.createDocumentFromBlob(coreSession, blob, path, true, fileName);
```

*   And you can also use the&nbsp;[dedicated](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewOperation/FileManager.Import)&nbsp;automation operation, which provides a way to create in one REST call an document from a binary, or to create easily a document from a blob in an automation chain.

See also the tutorial on&nbsp;[how to change the default document type used when importing files in the Nuxeo Platform]({{page page='how-to-change-the-default-document-type-when-importing-a-file-in-the-nuxeo-platform'}}).

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading='Related Documentation'}}

- [REST API]({{page page='rest-api'}})
- [Automation]({{page page='automation'}})
- [Versioning]({{page page='versioning'}})
- [How to Change the Default Document Type When Importing a File in the Nuxeo Platform?]({{page page='how-to-change-the-default-document-type-when-importing-a-file-in-the-nuxeo-platform'}})

{{/panel}}</div><div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

&nbsp;

</div></div>
