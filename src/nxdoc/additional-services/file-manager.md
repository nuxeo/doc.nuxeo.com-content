---
title: File Manager
labels:
    - lts2015-ok
    - file-manager
    - file-upload-component
toc: true
confluence:
    ajs-parent-page-id: '28475785'
    ajs-parent-page-title: Additional Services
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: File+Manager
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/File+Manager'
    page_id: '28475564'
    shortlink: rICyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/rICyAQ'
    source_link: /display/NXDOC710/File+Manager
history:
    - 
        author: Anonymous
        date: '2015-12-07 15:23'
        message: ink updat
        version: '9'
    - 
        author: Antoine Taillefer
        date: '2015-10-13 10:32'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2015-07-06 13:02'
        message: ''
        version: '7'
    - 
        author: Manon Lumeau
        date: '2015-07-01 09:58'
        message: ''
        version: '6'
    - 
        author: Manon Lumeau
        date: '2015-07-01 09:50'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2015-06-15 08:03'
        message: Step formatting
        version: '4'
    - 
        author: Michaël Vachette
        date: '2015-06-12 10:13'
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

From a user perspective, the Nuxeo Platform offers many ways to capture a binary so as to make it a document with a binary property. It can be done from the browser's [drag'n drop]({{page space='userdoc710' page='creating-content#content-creation-dandd'}}), from the [upload REST API]({{page page='how-to-upload-a-file-in-nuxeo-platform-using-rest-api-batch-processing-endpoint'}}), from [WebDAV]({{page space='userdoc710' page='working-with-webdav'}}), from [CMIS]({{page page='cmis'}}), from [Nuxeo Drive]({{page space='userdoc710' page='nuxeo-drive'}}), &nbsp;...

The file manager service is a traditional Nuxeo Platform service that offers some methods that help standardize what happens when a file is captured in the Platform, in regard to:

*   what document type should be created
*   what is the property mapping logic
*   what is the versioning policy
*   how should the binary be processed (exploding a zip, doing some pre-persistence conversions)

## Customising and Using the File Manager Service

*   The File Manager service has a plugin architecture, so that it is possible to contribute different policies depending on the mime-type of the file and the context.&nbsp;The default Nuxeo Platform use cases of the File Manager can be customised reading the documentation of the&nbsp;[file manager service extension point](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewExtensionPoint/org.nuxeo.ecm.platform.filemanager.service.FileManagerService--plugins). There are also means of&nbsp;[controlling the versioning policy](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewExtensionPoint/org.nuxeo.ecm.platform.filemanager.service.FileManagerService--versioning)&nbsp;of documents updated via this channel. Finally, there is a helper for&nbsp;[implementing binary unicity checks](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewExtensionPoint/org.nuxeo.ecm.platform.filemanager.service.FileManagerService--unicity).
*   The File Manager can be called and used in your custom Java code with the standard service call pattern:

    ```
    ... fileManager = Framework.getService(FileManager.class);
    DocumentModel createdDoc = fileManager.createDocumentFromBlob(coreSession, blob, path, true, fileName);
    ```

*   And you can also use the&nbsp;[dedicated](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewOperation/FileManager.Import)&nbsp;automation operation, which provides a way to create in one REST call an document from a binary, or to create easily a document from a blob in an automation chain.

## Implementing Your Own Plugin

Let's take a simple example where the document type depends on the parent folder type. In order to that in a fully automated way, you'll need to implement your own plugin. For example, we have a folder type&nbsp;`PurchaseOrderFolder`&nbsp;which accepts only&nbsp;`PurchaseOrder`&nbsp;documents as children, and an&nbsp;`InvoiceFolder`&nbsp;which accepts only&nbsp;`Invoice`&nbsp;documents.

1.  Write a class which extends&nbsp;`org.nuxeo.ecm.platform.filemanager.service.extension.AbstractFileImporter`.

    ```java
    public class SampleFilemanagerPlugin extends AbstractFileImporter {

        private static final long serialVersionUID = 1876876876L;

        private static final Log log = LogFactory.getLog(SampleFilemanagerPlugin.class);

        @Override
        public DocumentModel create(CoreSession session, Blob content, String path,
                                    boolean overwrite, String filename, TypeManager typeService)
                throws ClientException, IOException {

            PathRef root = new PathRef(path);
            DocumentModel rootDoc = session.getDocument(root);
            DocumentModel doc = null;
            switch (rootDoc.getType()) {
                case "PurchaseOrderFolder":doc = createDocType(session, path, content, filename,"PurchaseOrder");break;
                case "InvoiceFolder":doc = createDocType(session, path, content, filename,"Invoice");break;
                default:break;
            }
            if (doc!=null) doc = session.createDocument(doc);
            return doc;
        }

        private DocumentModel createDocType(CoreSession session, String path, Blob content, String filename, String type) {
            DocumentModel doc = session.createDocumentModel(path,type,type);
            doc.setPropertyValue("dc:title",filename);
            doc.setPropertyValue("file:content", (Serializable) content);
            doc.setPropertyValue("file:filename",filename);
            return doc;
        }
    }
    ```

    The created method returns either a&nbsp;`DocumentModel`&nbsp;object or&nbsp;`null`. If&nbsp;`null`&nbsp;is returned, then the file manager service will try with the next plugin. Within this method, we have access to the destination path which enables us to determine the type of the folder and thus create a document with the relevant type.

2.  Add a new contribution to the file manager service.

    ```xml
    <component name="org.nuxeo.sample.filemanager">
        <extension target="org.nuxeo.ecm.platform.filemanager.service.FileManagerService" point="plugins">
            <plugin name="SampleImporter" class="org.nuxeo.sample.SampleFilemanagerPlugin" order="0">
                <filter>.*</filter>
            </plugin>
        </extension>
    </component>
    ```

    That's it!

See also the tutorial on&nbsp;[how to change the default document type used when importing files in the Nuxeo Platform]({{page page='how-to-change-the-default-document-type-when-importing-a-file-in-the-nuxeo-platform'}}).

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

&nbsp;

</div><div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

&nbsp;

</div></div>