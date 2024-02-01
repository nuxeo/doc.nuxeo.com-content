---
title: File Storage
review:
    comment: ''
    date: '2017-01-30'
    status: ok
labels:
    - lts2016-ok
    - blob-storage
    - binary-manager
    - blob-manager-component
    - fguillaume
    - multiexcerpt
    - multiexcerpt-include
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '20515468'
    ajs-parent-page-title: Persistence Architecture
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: File+Storage
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/File+Storage'
    page_id: '18450045'
    shortlink: fYYZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/fYYZAQ'
    source_link: /display/NXDOC/File+Storage
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2015-12-22 11:14'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2015-12-22 10:10'
        message: ''
        version: '30'
    -
        author: Alain Escaffre
        date: '2015-12-15 13:57'
        message: ''
        version: '29'
    -
        author: Manon Lumeau
        date: '2015-12-14 13:13'
        message: Formatting
        version: '28'
    -
        author: Alain Escaffre
        date: '2015-12-14 12:39'
        message: ''
        version: '27'
    -
        author: Manon Lumeau
        date: '2015-12-14 11:11'
        message: formatting
        version: '26'
    -
        author: Alain Escaffre
        date: '2015-12-13 22:57'
        message: ''
        version: '25'
    -
        author: Alain Escaffre
        date: '2015-12-13 22:47'
        message: ''
        version: '24'
    -
        author: Alain Escaffre
        date: '2015-12-13 22:42'
        message: ''
        version: '23'
    -
        author: Alain Escaffre
        date: '2015-12-13 22:41'
        message: ''
        version: '22'
    -
        author: Alain Escaffre
        date: '2015-12-13 22:39'
        message: ''
        version: '21'
    -
        author: Alain Escaffre
        date: '2015-12-13 22:20'
        message: ''
        version: '20'
    -
        author: Alain Escaffre
        date: '2015-12-13 22:13'
        message: ''
        version: '19'
    -
        author: Alain Escaffre
        date: '2015-12-13 22:06'
        message: ''
        version: '18'
    -
        author: Alain Escaffre
        date: '2015-12-13 22:05'
        message: ''
        version: '17'
    -
        author: Alain Escaffre
        date: '2015-12-13 22:01'
        message: ''
        version: '16'
    -
        author: Alain Escaffre
        date: '2015-12-13 22:00'
        message: ''
        version: '15'
    -
        author: Alain Escaffre
        date: '2015-12-13 21:59'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2015-12-13 21:58'
        message: ''
        version: '13'
    -
        author: Alain Escaffre
        date: '2015-12-13 21:53'
        message: ''
        version: '12'
    -
        author: Alain Escaffre
        date: '2015-12-13 21:34'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2015-12-13 21:28'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2015-09-16 09:07'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2014-12-10 17:00'
        message: TOC
        version: '8'
    -
        author: Florent Guillaume
        date: '2014-10-09 18:56'
        message: ''
        version: '7'
    -
        author: Florent Guillaume
        date: '2014-10-09 18:53'
        message: ''
        version: '6'
    -
        author: Florent Guillaume
        date: '2014-10-09 18:52'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-01-30 12:20'
        message: Added TOC
        version: '4'
    -
        author: Solen Guitter
        date: '2014-01-29 18:26'
        message: Typos
        version: '3'
    -
        author: Thierry Delprat
        date: '2014-01-28 17:27'
        message: ''
        version: '2'
    -
        author: Thierry Delprat
        date: '2014-01-28 16:57'
        message: ''
        version: '1'
---

{{#> callout type='info'  heading='Hyland University'}}
Watch the related courses on Hyland University:</br>
[Video on Document Blobs from the Data Persistence course](https://university.hyland.com/courses/e4009)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/File Storage/university_file_storage.png
    name: university_file_storage.png
    server#screenshot#up_to_date
--}}
![university_file_storage.png](nx_asset://c40a0162-48c8-4723-b280-aeb6ce516577 ?w=450,border=true)
{{/callout}}

## Files and Blobs

A file is what is commonly handled on user's desktop or other file system. It is a binary content managed under a file system, which means with a location (or locations if fragmented), a path and a name. On the Nuxeo Platform, the concept of file system doesn't exist. The content is stored as a binary stream, and the address of that content is stored in the database. The database has the notion of "Blob", that represents the binary stream and a set of metadata:

- The hash of the binary stream
- The length
- A name
- A mime-type.

At the Core level, blobs are bound to documents via a property of type `BlobProperty`. So a document can store multiple files that are standalone blob properties, or list of blob properties. When configuring this property, it has to be of type

```xml
<xs:element name="test" type="nxs:content"/>
```

Which corresponds in [Nuxeo Studio]({{page version='' space='studio' page='nuxeo-studio'}}) to selecting "Blob" in the type.

You can then use either the [`Document.SetBLob`](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewOperation/Document.SetBlob) operation to set a blob on a given property or the `setPropertyValue(String xpath,`

`Serializable value)`, of the `documentModel` object in the Java API. You can also have a look at the BlobAdapter pattern.

## Blob Manager and Blob Providers

At lower level, blobs are managed in the Nuxeo Platform by Blob Providers. Most of the time, blob Java objects implement the interface [`ManagedBlob`](http://community.nuxeo.com/api/nuxeo/8.10/javadoc/org/nuxeo/ecm/core/blob/ManagedBlob.html), that provides the `getKey()` method. This method returns an id for identifying the blob and this id starts by a prefix that gives the Blob Provider used to retrieve it.

A **Blob Provider** is a component that provides an **API to read and write binary streams** as well as additional services such as:

- Getting associated thumbnail of a binary stream
- Getting a download URI
- Some version management features
- Getting available conversions
- Getting registered applications links

As we will see later in this page, the Nuxeo Platform is shipped with several Blob Provider implementations:

- File System implementation
- S3, Azure, ...
- Google Drive, Dropbox

As a specialization, a Blob Provider can implement the interface `DocumentBlobProvider` if it is capable of dealing with advanced document-related operations like versioning.

A Nuxeo Platform instance can make use of several Blob Providers on the same instance. The `DocumentBlobManager` service is in charge of determining for read and write operations which Blob Provider should be used depending on various parameters. The `BlobManager` service is then in charge of actualing using the correct `BlobProvider` to do the read/write operation.

A typical low level Java call for creating a file is the following:

```java
DocumentBlobManager blobManager = Framework.getService(DocumentBlobManager.class);
String key = blobManager.writeBlob(blob, doc, xpath);
```

The `DocumentBlobManager` service uses the contributed `BlobDispatcher` implementation (or the default one) to determine which Blob Provider to use for persisting the blob. It can therefore accept the document and the blob's xpath as parameters. We will review below how the default BlobDispatcher works.

Bellow is a sequence diagram of what happens when writing a binary stream.

![]({{file name='Write Binary Sequence Diagram - New Page.png'}} ?w=600,border=true)

## Default Blob Provider

Without installing any additional addon, you will find several Blob Provider implementations that you can use.

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Name</th>
<th colspan="1">Class</th>
<th colspan="1">Description</th>
<th colspan="1">Resources</th>
</tr>
<tr>
<td colspan="1">Default</td>
<td colspan="1">`org.nuxeo.ecm.core.blob.LocalBlobProvider`</td>
<td colspan="1">The default implementation. Stores binaries using their MD5 (or other) hash on the local filesystem.</td>
<td colspan="1">[Configuration]({{page page='file-storage-configuration'}}#configuring-the-default-blobprovider)</td>
</tr>
<tr>
<td colspan="1">Encrypted</td>
<td colspan="1">`org.nuxeo.ecm.core.blob.AESBlobProvider`</td>
<td colspan="1">Stores binaries encrypted using AES form on the local filesystem.</td>
<td colspan="1">[Configuration]({{page page='implementing-encryption'}})</td>
</tr>
<tr>
<td colspan="1">External File System</td>
<td colspan="1">`org.nuxeo.ecm.core.blob.FilesystemBlobProvider`</td>
<td colspan="1">Reads content stored on an external file system.</td>
<td colspan="1">[Configuration]({{page page='file-storage'}}#external-file-system)</td>
</tr>
</tbody>
</table>
</div>

To register a new Blob Provider, use the [`blobprovider`](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.blob.BlobManager--configuration) extension point with the Java class for your Blob Provider:

```xml
<extension target="org.nuxeo.ecm.core.blob.BlobManager" point="configuration">
  <blobprovider name="default">
    <class>org.nuxeo.ecm.core.blob.LocalBlobProvider</class>
    <property name="path">binaries</property>
  </blobprovider>
</extension>
```

## Additional Blob Providers

In addition to the default ones listed above, the following implementations exist and can be used:

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Name</th>
<th colspan="1">Class</th>
<th colspan="1">Description</th>
<th colspan="1">Resources</th>
</tr>
<tr>
<td colspan="1">Azure</td>
<td colspan="1">`org.nuxeo.ecm.blob.azure.AzureBlobProvider`</td>
<td colspan="1">Stores Content on Azure Object Store (CDN available through configuration)</td>
<td colspan="1">[Nuxeo Package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/microsoft-azure-online-storage) - [Sources](https://github.com/nuxeo/nuxeo/blob/2023/modules/core/nuxeo-core-binarymanager-cloud/nuxeo-core-binarymanager-azure)</br>
- [Configuration](https://github.com/nuxeo/nuxeo/blob/2023/modules/core/nuxeo-core-binarymanager-cloud/nuxeo-core-binarymanager-azure/README.md)</td>
</tr>
<tr>
<td colspan="1">Google Storage</td>
<td colspan="1">`org.nuxeo.ecm.core.storage.gcp.GoogleStorageBlobProvider`</td>
<td colspan="1">Stores Content on Google Storage service from Google Cloud Platform</td>
<td colspan="1">[Nuxeo Package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/google-storage) - [Sources](https://github.com/nuxeo/nuxeo/tree/2023/modules/core/nuxeo-core-binarymanager-cloud/nuxeo-core-binarymanager-gcp)</br>
- [Configuration](https://github.com/nuxeo/nuxeo/blob/2023/modules/core/nuxeo-core-binarymanager-cloud/nuxeo-core-binarymanager-gcp/README.md)</td>
</tr>
<tr>
<td colspan="1">MongoDB GridFS Storage</td>
<td colspan="1">`org.nuxeo.ecm.core.storage.mongodb.blob.GridFSBlobProvider`</td>
<td colspan="1">Stores Content on MongoDB backend</td>
<td colspan="1">[Sources](https://github.com/nuxeo/nuxeo/tree/2023/modules/core/nuxeo-core-storage-mongodb)</br>
- [Configuration]({{page page='mongodb'}}#gridfs)</td>
</tr>
<tr>
<td colspan="1">Amazon S3</td>
<td colspan="1">`org.nuxeo.ecm.blob.s3.S3BlobProvider`</td>
<td colspan="1">Stores content on Amazon S3</td>
<td colspan="1">[Nuxeo Package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/amazon-s3-online-storage) - [Sources](https://github.com/nuxeo/nuxeo/tree/2023/modules/core/nuxeo-core-binarymanager-cloud/nuxeo-core-binarymanager-s3)
- [Configuration]({{page page='amazon-s3-online-storage'}})</td>
</tr>
<tr>
<td colspan="1">Google Drive</td>
<td colspan="1">`org.nuxeo.ecm.liveconnect.google.drive.GoogleDriveBlobProvider`</td>
<td colspan="1">Reads content from Google Drive</td>
<td colspan="1">[Nuxeo Package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-liveconnect) - [Sources](https://github.com/nuxeo/nuxeo/tree/2023/modules/platform/nuxeo-liveconnect/src/main/java/org/nuxeo/ecm/liveconnect/google/drive)</td>
</tr>
<tr>
<td colspan="1">Dropbox</td>
<td colspan="1">`org.nuxeo.ecm.liveconnect.dropbox.DropboxBlobProvider`</td>
<td colspan="1">Reads content from Dropbox</td>
<td colspan="1">[Nuxeo Package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-liveconnect) - [Sources](https://github.com/nuxeo/nuxeo/tree/2023/modules/platform/nuxeo-liveconnect/src/main/java/org/nuxeo/ecm/liveconnect/box)</td>
</tr>
</tbody>
</table>
</div>

## Blob Dispatcher and HSM

The Blob Manager allows to enforce typical HSM (Hierarchical Storage Management) behavior as illustrated in the high level schema below:

![]({{file name='Hierachical Storage Management - New Page.png'}} ?w=500,border=true)

This is doable thanks to the `BlobDispatcher` class.

The role of the blob dispatcher is to decide, based on a blob and its containing document, where the blob's binary is actually going to be stored. The Nuxeo Platform provides a default blob dispatcher ([`org.nuxeo.ecm.core.blob.DefaultBlobDispatcher`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/blob/DefaultBlobDispatcher.html)) that is easy to configure for most basic needs. But it can be replaced by a custom implementation if needed.

{{! multiexcerpt name='BlobDispatch'}}

Without specific configuration, the `DefaultBlobDispatcher` stores a document's blob's binary in a blob provider with the same name as the document's repository name.

Advanced dispatching configuration is possible using properties. Each property name is a list of comma-separated clauses, with each clause consisting of a property, an operator and a value. The property can be a document property XPath, or `ecm:repositoryName`, `ecm:path`, or, to match the current blob being dispatched, `blob:name`, `blob:mime-type`, `blob:encoding`, `blob:digest`, `blob:length` or `blob:xpath`. Comma-separated clauses are ANDed together. The special property name `default` defines the default provider, and **must** be present.

Available operators between property and value are `=`, `!=`, `<`, `>`, `~` and `^`. The operators `<` and `>` work with integer values. The operator `~` does glob matching using `?` to match a single arbitrary character, and `*` to match any number of characters (including none). The operator `^` does full regexp matching.

For example, all the videos could be stored somewhere, the attachments in a different area, the documents from a secret source in an encrypted area, and the rest in a default location. To do this, you would need to specify the following:

{{#> panel type='code' heading='Example Blob Dispatcher Configuration'}}

```xml
<extension target="org.nuxeo.ecm.core.blob.DocumentBlobManager" point="configuration">
  <blobdispatcher>
    <class>org.nuxeo.ecm.core.blob.DefaultBlobDispatcher</class>
    <property name="dc:format=video">videos</property>
    <property name="blob:mime-type=video/mp4">videos</property>
    <property name="blob:xpath~files/*/file">attachments</property>
    <property name="dc:source=secret">encrypted</property>
    <property name="default">default</property>
  </blobdispatcher>
</extension>
```

{{/panel}}

This assumes that you have four blob providers configured, the default one and three additional ones, `videos`, `attachments` and `encrypted`. For example you could have:

{{#> panel type='code' heading='Defining Additional Binary Managers'}}

```xml
<extension target="org.nuxeo.ecm.core.blob.BlobManager" point="configuration">
  <blobprovider name="videos">
    <class>org.nuxeo.ecm.core.blob.LocalBlobProvider</class>
    <property name="path">binaries-videos</property>
  </blobprovider>
  <blobprovider name="attachments">
    <class>org.nuxeo.ecm.core.blob.LocalBlobProvider</class>
    <property name="path">binaries-attachments</property>
  </blobprovider>
  <blobprovider name="encrypted">
    <class>org.nuxeo.ecm.core.blob.AESBlobProvider</class>
    <property name="key">password=secret</property>
  </blobprovider>
</extension>
```

{{/panel}}
The default `DefaultBlobDispatcher` class can be replaced by your own implementation.
{{! /multiexcerpt}}

## Download Service

All the code of the platform that performs a download (for WebDav and CMIS APIs, for custom actions in the UI, for the main download servlet) makes use of the same factorized Java code: the download service. A typical download session is like this:

```
DownloadService downloadService = Framework.getService(DownloadService.class); downloadService.downloadBlob(req, resp, doc, xpath, null, filename, "download");
```

The download service handles the call to the blobManager, logs all download in the audit and also allows to [contribute some security rules]({{page page='file-download-security-policies'}}) for authorizing or refusing download of blobs depending on the doc, the filename, the user, the rendition name, etc. The following activity diagram gives an idea of the behavior of what happens when downloading a file:

![]({{file name='Download Binary Activity Diagram - New Page.png'}} ?w=600,border=true)

That can also be view as a sequence diagram to better understand each actor's roles:

![]({{file name='Binary Download Sequence Diagram - New Page.png'}} ?w=600,border=true)

## File URLs / Download URL File Format

The default URL patterns for downloading files from within the JSF environment are:

- `http://NUXEO_SERVER/nuxeo/nxfile/{repository}/{uuid}/blobholder:{blobIndex}/{fileName}`
- `http://NUXEO_SERVER/nuxeo/nxfile/{repository}/{uuid}/{propertyXPath}/{fileName}`

Where:
- `nxfile` is the download servlet.</br>
  Note that `nxbigfile` is also accepted for compatibility with older versions.
- `repository` is the identifier of the target repository.
- `uuid` is the uuid of the target document.
- `blobIndex` is the index of the Blob inside the `BlobHolder` adapter corresponding to the target Document Type, starting at 0: `blobholder:0`, `blobholder:1`.
- `propertyXPath` is the xPath of the target Blob property inside the target document. For instance: `file:content`, `files:files/0/file`.
- `fileName` is the name of the file as it should be downloaded.
    This information is optional and is actually not used to do the resolution.
- `?inline=true` is an optional parameter to force the download to be made with `Content-Disposition: inline`. This means that the content will be displayed in the browser (if possible) instead of being downloaded.

Here are some examples:

- The main file of the document:
    `http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496`
- The main file of the document with a different name:
    `http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/blobholder:0/mydocument.pdf`
- An attached file of the document:
    `http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/blobholder:1`
- A file stored in the given property:
    `http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/myschema:content`
- A file stored in the given complex property, downloaded with a specific filename:
    `http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/files:files/0/file/myimage.png`
- The main file of the document inside the browser instead of being downloaded:
    `http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496?inline=true`


For Picture document type, a similar system is available to be able to get the attachments depending on the view name:

- `http://NUXEO_SERVER/nuxeo/nxpicsfile/{repository}/{uuid}/{viewName}:content/{fileName}`

where, by default, `viewName` can be Original, OriginalJpeg, Medium, Thumbnail.

## Default Blob Provider

The default Blob Provider implementation is based on a simple filesystem: considering the storage principles, this is safe to use this implementation even on a NFS like filesystem (since there is no conflicts).

```java
InputStream getStream(String digest);
Path getFile(String digest);
```

As you can see, the methods do not have any document related parameters. This means the binary storage is independent from the documents:

- Moving a document does not impact the binary stream.
- Updating a document does not impact the binary stream.

In addition, the streams are stored using their digest. Thanks to that:

- `BlobStore` does automatically manage de-duplication.
- `BlobStore` can be safely snapshoted (files are never moved or updated, and they are only removed via a `GarbageCollection` process).

## External File System

We provide a Blob Provider for being able to reference files that would be stored on an external file system that the Nuxeo server can reach: `org.nuxeo.ecm.core.blob.FilesystemBlobProvider`

The root path is a property of the contribution:

```xml
  <extension target="org.nuxeo.ecm.core.blob.BlobManager" point="configuration">
    <blobprovider name="fs">
      <class>org.nuxeo.ecm.core.blob.FilesystemBlobProvider</class>
      <property name="root">/opt/nuxeo/nxserver/blobs</property>
      <property name="preventUserUpdate">true</property>
 </blobprovider>
  </extension>

```

The `preventUserUpdate` property will be used by the UI framework for not proposing to the user the ability to update. Such a blob provider can be used when creating a document with the following code:

```java
BlobInfo blobInfo = new BlobInfo();
blobInfo.key = "/opt/nuxeo/nxserver/blobs/foo/bar.pdf";
blobInfo.mimeType = "application/pdf";
BlobManager blobManager = Framework.getService(BlobManager.class);
Blob blob = ((FilesystemBlobProvider) blobManager.getBlobProvider("fs")).createBlob(blobInfo);
```

Internally the blob will then be stored in the database with a key of `fs:foo/bar.pdf`.

## Encryption

A common question regarding the Blob Manager is the support for encryption. See [Implementing Encryption]({{page page='implementing-encryption'}}) for more on the configuration options.

### AES Encryption

Since Nuxeo Platform 6.0, it's possible to use a Blob Provider that encrypts file using AES. Two modes are possible:

- A fixed AES key retrieved from a Java KeyStore
- An AES key derived from a human-readable password using the industry-standard PBKDF2 mechanism.

While the files are in use by the application, a temporary file in clear is created. It is removed as soon as possible.

### Built-in S3 Encryption

When using the [Amazon S3 Online Storage]({{page page='amazon-s3-online-storage'}}) package, the AWS S3 client library automatically supports both client-side and server-side encryption:

![]({{file name='S3-SSEncryption.png'}} ?w=500,h=159,border=true)

With server-side encryption, the encryption is completely transparent.

![]({{file name='S3-CSEncryption.png'}} ?w=500,h=152,border=true)

In client-side encryption mode, Nuxeo Platform manages the encrypt/decrypt process using the AWS S3 client library. The local temporary file is in clear.

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related topics in this documentation'}}

- [Default URL Patterns]({{page page='default-url-patterns'}})

  {{/panel}}
</div>

<div class="column medium-6">
{{#> panel heading='Nuxeo Studio Community Cookbook'}}

- [EML Previewer](https://github.com/nuxeo/nuxeo-studio-community-cookbook/tree/master/modules/nuxeo/eml-previewer)
- [QR Code Integration](https://github.com/nuxeo/nuxeo-studio-community-cookbook/tree/master/modules/nuxeo/qr-code)

{{/panel}}
</div>
</div>
