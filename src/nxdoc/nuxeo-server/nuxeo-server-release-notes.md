---
title: Nuxeo Server Cloud 2020 Release Notes
description: This page relates to the release notes of Nuxeo Server and related addons for the 11 cycle, a.k.a Cloud release 2020 cycle.
review:
   comment: ''
   date: '2020-06-30'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 10000
---

This page relates to the release notes of Nuxeo Server and related addons for 11 cycle, a.k.a Cloud release 2020 cycle. It will list the improvements and features that are successively shipped with the 11.x releases. Evolutions are grouped by components.

You can also find detailed JIRA release notes:

- [11.1 JIRA release notes](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=19367)
- [11.2 JIRA release notes](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=20630)
- [11.3 JIRA release notes](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=20723)
- [11.4 JIRA release notes](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=20815)

The upgrade notes are available [here]({{page page='upgrade-from-lts-2019-to-cloud-2020'}}).

## Nuxeo Server

### Core Repository

#### Record, Retention and Hold Low-Level Implementation

The notion of a document being a record is added. The notion of retention date and legal hold is added to records. Once a document is a record, this is forever. Copies of records (including versions) are not initially records.
When a record has a legal hold or has a retention date in the future, modification or deletion of the main blob (`file:content`) is prevented, even indirectly through removal of the document or of an ancestor, even for Administrators.

The following APIs are added:
 - `CoreSession.makeRecord(doc)`</br>
    Only for users with permission `MakeRecord`.</br>
    A record can never be set back to non-record (there is no unmakeRecord() API).</br>
    When a document is turned into a record, the document blob manager will take care of unsharing the blob and moving it to the record blob provider.
 - `CoreSession.isRecord(doc)`
 - `CoreSession.setRetainUntil(doc, datetime)`</br>
    Only for users with permission `SetRetention.`</br>
    A special `CoreSession.RETAIN_UNTIL_INDETERMINATE` value is also available.</br>
    The retention date can only be increased, except if it was indeterminate, in which case it can be set to an actual date.
 - `CoreSession.getRetainUntil(doc)`
 - `CoreSession.setLegalHold(doc, boolean)`</br>
    Only for users with permission `ManageLegalHold`.</br>
    If a hold is removed and the retention has expired, a "retention expired" event will be sent (after which the document may be deleted, along with its blob, depending on high-level policies).
 - `CoreSession.hasLegalHold(doc)`
 - `CoreSession.isUnderRetentionOrLegalHold(doc)`</br>
    Convenience method doing `hasLegalHold()` OR `getRetainUntil()` > `currentDate()`

And for convenience some getters are added:
 - `DocumentModel.isRecord()`
 - `DocumentModel.getRetainUntil()`
 - `DocumentModel.hasLegalHold()`
 - `DocumentModel.isUnderRetentionOrLegalHold()`

The following APIs, that have never been used, are deprecated:
 - `CoreSession.setRetentionActive(doc, boolean)`
 - `CoreSession.isRetentionActive(doc)`

NXQL has the following new special properties:
 - `ecm:isRecord`
 - `ecm:retainUntil`
 - `ecm:hasLegalHold`

Note that NXQL does not have `ecm:isUnderRetentionOrLegalHold`, instead one should use `ecm:retainUntil > NOW() OR ecm:hasLegalHold = 1`.

At the storage level, VCS has 3 additional columns in the table hierarchy:
 - `isrecord`
 - `retainuntil`
 - `haslegalhold`

Some specific blob providers implementations can now be in "record mode":
 - `BlobProvider.isRecordMode()`

When in record mode the blob providers behave differently:
 - They are transactional (blobs aren't actually written/deleted in the underlying storage until the transaction commits, and transaction rollback is possible).
 - They don't do de-duplication, each blob is stored individually.
 - They store only one blob per document (the main blob, `file:content`).
 - They can replace or delete a document's blob.
 - They have hooks to store additional metadata alongside the blob (for diagnostics/recovery).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27435](https://jira.nuxeo.com/browse/NXP-27435)

#### New Implementation `S3BlobProvider`

A new blob provider `org.nuxeo.ecm.blob.s3.S3BlobProvider` is available.
It has the same configuration properties as the old `org.nuxeo.ecm.core.storage.sql.S3BinaryManager` but in addition:
 - it allows configuration in record or transactional mode (see [NXP-28276](https://jira.nuxeo.com/browse/NXP-28276))
 - it allows additional metadata in S3 (see [NXP-25712](https://jira.nuxeo.com/browse/NXP-25712))
 - it allows interaction with Glacier storage (see [NXP-28417](https://jira.nuxeo.com/browse/NXP-28417))
 - it allows direct configuration of CloudFront (without using CloudFrontBinaryManager).

The CloudFront properties are:
 - `cloudfront.enabled`: must be true to activate CloudFront
 - `cloudfront.privKey`: the path to the private key
 - `cloudfront.privKeyId`: the id of the private key
 - `cloudfront.distribDomain`: the distribution domain
 - `cloudfront.protocol`: the protocol (http or https)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28460](https://jira.nuxeo.com/browse/NXP-28460)

#### Allow Simple S3 Blob Provider Implementation Override, and Use Proper Require

To switch to the new S3 blob provider implementation from [NXP-28460](https://jira.nuxeo.com/browse/NXP-28460) add in `nuxeo.conf`:
```
nuxeo.core.binarymanager=org.nuxeo.ecm.blob.s3.S3BlobProvider
```

This assumes of course that the s3binaries template is used (which is automatically done when installing the [Amazon S3 Online Storage]({{page version='' space='nxdoc' page='amazon-s3-online-storage'}}) package).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28716](https://jira.nuxeo.com/browse/NXP-28716)

#### Blob Properties Should Expose Final URL If Possible

If a document's blob provider is configured for direct download, it's now possible to get direct links to the final download URL (to S3 or CloudFront typically) returned in the JSON document output.

To activate this feature, the following must be configured:
```
<require>org.nuxeo.ecm.core.io.download.DownloadService</require>
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="org.nuxeo.download.url.follow.redirect">true</property>
  </extension>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28599](https://jira.nuxeo.com/browse/NXP-28599)

#### Make `S3BinaryManager.abortOldUploads` Async and Optional

The startup process that cleans up old (> 1 day) S3 multipart uploads can be disabled by defining:
```
<extension target="org.nuxeo.ecm.core.blob.BlobManager" point="configuration">
    <blobprovider name="default">
      ...
      <property name="multipart.cleanup.disabled">true</property>
    </blobprovider>
  </extension>
```

Or for backward compatibility when XML configuration is not possible by setting the `nuxeo.conf` property:
```
nuxeo.s3storage.multipart.cleanup.disabled=true
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28571](https://jira.nuxeo.com/browse/NXP-28571)

#### Use AWS TransferManager in S3DirectBatchHandler

AWS TransferManager is used for copy by S3DirectBatchHandler.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29292](https://jira.nuxeo.com/browse/NXP-29292)

#### S3 Direct Upload for Little Files (SSE-KMS)

S3 Direct upload now works with SSE-KMS enabled.

It introduces a new configuration property to setup SSE/KMS on the transient bucket (for direct upload):
```
nuxeo.s3storage.transient.crypt.kms.key=<sse-kms-key-id>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29496](https://jira.nuxeo.com/browse/NXP-29496)

#### Allow Using Arbitrary File Keys in S3

Objects can be stored in S3 with an arbitrary file key instead of MD5 digest.

To be able to use arbitrary file keys generated either by the provider or by a trusted upload client, the new S3BlobProvider should be used and the key strategy should be set to `managed` (default key strategy is `digest`): 
```
nuxeo.core.binarymanager=org.nuxeo.ecm.blob.s3.S3BlobProvider
nuxeo.core.blobstore.keyStrategy=managed
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29319](https://jira.nuxeo.com/browse/NXP-29319)

#### Allow Blob Provider to Do Optimized Byte Range Requests

The internal API `BlobProvider.getStream(blobKey, byteRange)` can be used by code that needs to access a byte range of a blob without fetching the full blob.
This assumes that the blob provider implementation is compatible with this, and that `BlobProvider.allowByteRange()` returns true (which is the case when the blob provider has been registered with `<property name="allowByteRange">true</property>)`.
This is implemented for the `S3BlobProvider`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28919](https://jira.nuxeo.com/browse/NXP-28919)

#### Allow Blob Provider to Access Document When Reading Blob

The new API `BlobProvider.readBlob(BlobInfoContext)` should be implemented by blob providers that wish to get information about the `Document` or the blob's XPath while reading the blob.

This is mostly useful for blob providers that implement "virtual" blobs whose information is derived from properties of the document itself.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28900](https://jira.nuxeo.com/browse/NXP-28900)

#### Add `BlobProvider.supportsSync()` to Avoid Relying on Binarymanager for Sync Tests

New API: `BlobProvider.supportsSync()`</br>
Sync refers to the fact that a blob from this provider may be synced with a remote system (like Nuxeo Drive) or with a process that updates things in the blob (like Binary Metadata or WOPI).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28488](https://jira.nuxeo.com/browse/NXP-28488)

#### Allow Avoiding Use of the HTTP Proxy for S3 Connections If the S3 Endpoint Is Internal

To disable usage of the proxy environment variables (`nuxeo.http.proxy.*`) for the connection to the S3 endpoint, defined the `nuxeo.conf` property:
```
nuxeo.s3.proxy.disabled=true
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28185](https://jira.nuxeo.com/browse/NXP-28185)

#### Refactor Blob Providers Infrastructure for More Flexibility

New implementation of BlobProvider:
 - `org.nuxeo.ecm.core.blob.LocalBlobProvider`

They have the same configuration properties as the old ones, with additions. The XML configuration can now also include:
 - `<property name="record">true</property>`: to activate Record mode (see [NXP-27435](https://jira.nuxeo.com/browse/NXP-27435)). This mode is also transactional.
 - `<property name="transactional">true</property>`: to activate transactional mode independently of the record mode (useful for other features like Glacier).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28276](https://jira.nuxeo.com/browse/NXP-28276)

#### Add Full Regexp-Based Match to DefaultBlobDispatcher

The default blob dispatcher now has a new operator `^` to match based on a full regexp (in addition to the already-existing glob-based match using `~`).

For instance the following will match any document somewhere under a folder named images:
```
<property name="ecm:path^.*/images/.*">test</property>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28267](https://jira.nuxeo.com/browse/NXP-28267)

#### Add `ecm:path` Variable to the Default Blob Dispatcher

The default blob dispatcher now has a pseudo-property `ecm:path` representing the document path.

For example the following will match any JPG document somewhere under a folder named images:
```
<property name="ecm:path~*/images/*">test</property>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28227](https://jira.nuxeo.com/browse/NXP-28227)

#### S3BinaryManager: Allow Configurable Digest

The digest algorithm to use to compute a unique key when storing blobs in S3 can now be configured, using:
```
nuxeo.s3storage.digest=SHA-256
```

Or if a full XML configuration is used (necessary if there are several different S3 blob providers):
```
<extension target="org.nuxeo.ecm.core.blob.BlobManager" point="configuration">
  <blobprovider name="default">
    <class>org.nuxeo.ecm.core.storage.sql.S3BinaryManager</class>
    ...
    <property name="digest">SHA-256</property>
    ...
  </blobprovider>
</extension>
```

The default is MD5. The valid digest algorithms are those available to the Java runtime, the standard ones are listed here for Java 8 and here for Java 11.

This feature is not compatible with S3 Direct Upload.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27805](https://jira.nuxeo.com/browse/NXP-27805)

#### Enable S3 Transfer Acceleration

The S3 connector now has new `nuxeo.conf` parameters to configure S3 accelerate mode:
 - `nuxeo.s3storage.accelerateMode` (default `false`)
 - `nuxeo.s3storage.transient.accelerateMode` (default `false`) (for direct upload)

For example:
 - `nuxeo.s3storage.accelerateMode=true`
 - `nuxeo.s3storage.transient.accelerateMode=true`

Note that accelerate mode is incompatible with path-style access ([NXP-27805](https://jira.nuxeo.com/browse/NXP-27805), see S3 documentation.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27657](https://jira.nuxeo.com/browse/NXP-27657)

#### Enforce the Server Side Encryption Header in S3 Client Request

S3 copy (used during direct upload in particular) now correctly takes into account the server-side encryption configuration for the destination bucket.</b>
For direct upload, this requires setting the property:
```
nuxeo.s3storage.transient.crypt.serverside=true
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26901](https://jira.nuxeo.com/browse/NXP-26901)

#### S3 Multipart Part Size Should Be Configurable

There is a new configuration property `nuxeo.s3.multipart.copy.part.size` to change the S3 multipart copy part size. The default is `5242880` (5MB).

It can be changed with:
```
<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="nuxeo.s3.multipart.copy.part.size">5242880</property>
</extension>
```

Note that the maximum allowed by S3 is `5368709120` (5GB).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26899](https://jira.nuxeo.com/browse/NXP-26899)

#### Allow Storing Extracted Fulltext in Blobs

Fulltext extracted from binaries can be stored in a blob provider instead of metadata in the repository by defining:
```
nuxeo.vcs.fulltext.storedInBlob=true
```

(Note that despite the `vcs` in the name, which is here for regularity with other properties, it also applies to DBS/MongoDB.)

When doing so, by default a BlobProvider named fulltext will be used to store these blobs. When using a custom blob provider configuration instead of the default local filesystem storage, this fulltext blob provider must be defined accordingly. Usage of this specific blob provider is configured through a blob dispatcher in the default configuration, which may be overridden if needed.

When defining additional repositories, fulltext blob storage will need to be enabled with XML in the repository contribution:
```
<fulltext ... storedInBlob="true" ... />
```

and a custom blob dispatcher configuration will be needed to take into account this repository.
Note that when fulltext blob storage is enabled, repository-based fulltext search is automatically disabled (equivalent to `nuxeo.vcs.fulltext.search.disabled=true` or `<fulltext ... searchDisabled="true" ... />`).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26704](https://jira.nuxeo.com/browse/NXP-26704)

#### New Implementation for the Encrypted (AES) Blob Provider

A new blob provider `org.nuxeo.ecm.core.blob.AESBlobProvider` is available.

It has the same configuration properties as the old:
```
org.nuxeo.ecm.core.blob.binary.AESBinaryManager
```

To encrypt a binary, an AES key is needed. This key can be retrieved from a keystore, or generated from a password using PBKDF2 (in which case each stored file contains a different salt for security reasons).

The blob provider configuration holds the keystore information to retrieve the AES key, or the password that is used to generate a per-file key using PBKDF2.

For keystore use, the following properties are available:
 - `keyStoreType`: the keystore type, for instance JCEKS
 - `keyStoreFile`: the path to the keystore, if applicable
 - `keyStorePassword`: the keystore password
 - `keyAlias`: the alias (name) of the key in the keystore
 - `keyPassword`: the key password

And for PBKDF2 use:
 - `password`: the password

In addition, the following property may be specified to define where the encrypted blobs are stored:
 - `path`: the filesystem path for the storage (if relative, under nxserver/data). The default is binaries.

For backward compatibility, the encryption properties can also be included in the `<property name="key">prop1=value1,prop2=value2,...</property>` of the blob provider configuration.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28456](https://jira.nuxeo.com/browse/NXP-28456)

#### S3DirectBatchHandler Must Work With the New S3BlobProvider

A new S3 permission (action) is necessary to use DirectUpload with the new `S3BlobProvider`: `s3:GetBucketVersioning`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29122](https://jira.nuxeo.com/browse/NXP-29122)

#### Define `nuxeo.binarystores.root` for the Root of All Binaries Store

A new property `nuxeo.binarystores.root` is now available, and its use is recommended over the now-deprecated `repository.binary.store`.

The old `repository.binary.store` is equivalent to `${nuxeo.binarystores.root}/binaries`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27109](https://jira.nuxeo.com/browse/NXP-27109)

#### Support Flagging Repositories as Headless

A new "headless" attribute has been added to the repository descriptor to allow flagging repositories as headless:

```
<extension target="org.nuxeo.ecm.core.storage.sql.RepositoryService"
    point="repository">
    <repository name="second" label="label.second.repository" headless="true">
      ...
    </repository>
</extension>
```

By default repositories are not headless.</br>
For 10.10, all repositories, except for the "default" one are headless unless explicitly set otherwise.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29331](https://jira.nuxeo.com/browse/NXP-29331)

#### Configure Transient Store Cache

Four new configuration properties where introduced to control transient store first and second level cache:
```
nuxeo.transientstore.ttl=120
nuxeo.transientstore.ttl2=10
```
and for S3:
``` 
nuxeo.s3storage.transient.ttl=120
nuxeo.s3storage.transient.ttl2=10
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29291](https://jira.nuxeo.com/browse/NXP-29291)

#### Allow to Bypass Allowed Subtype Check in FileManager

A new flag is exposed to bypass the subtype check when creating a document with FileManager.

The allowed subtype check done by the FileManager can be bypassed using:
```
FileImporterContext.builder(coreSession, blob, parentpath)
        .bypassAllowedSubtypeCheck(true)
        .build();
```

Added:
```
FileImporterContext#bypassAllowedSubtypeCheck
FileImporterContext#isBypassAllowedSubtypeCheck()
FileImporterContext#Builder#bypassAllowedSubtypeCheck
FileImporterContext#Builder#bypassAllowedSubtypeCheck(boolean bypassAllowedSubtypeCheck)
AbstractFileImporter#checkSecurity(CoreSession session, String path)
AbstractFileImporter#checkAllowedSubtypes(CoreSession session, String path, String typeName)
```

Deprecated:
```
AbstractFileImporter#doSecurityCheck(CoreSession documentManager, String path, String typeName)
AbstractFileImporter#doSecurityCheck(CoreSession documentManager, String path, String typeName, TypeManager typeService)
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29138](https://jira.nuxeo.com/browse/NXP-29138)

### More robust blob upload to GCP (upload in chunks)

Blobs are uploaded to Google Cloud Storage in chunks to benefit from the retriable API.

We now upload Blobs to Google Cloud Storage in chunks. The default chunk size is 2MB and can be adjusted via storage.upload.chunk.size binary manager property or via nuxeo.gcp.storage.upload.chunk.size nuxeo.conf property.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29836](https://jira.nuxeo.com/browse/NXP-29836)

### Core Storage

#### Compatibility with MongoDB 4.X

Nuxeo DBS MongoDB implementation is now compatible and continuously tested with MongoDB 4.x.

MongoDB Java Driver has been upgraded from 3.x to 4.1 which brings breaking changes, you may need to re-compile your code if you were using the driver directly.
See https://mongodb.github.io/mongo-java-driver/4.1/upgrading/#upgrading-from-the-3-12-java-driver

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29636](https://jira.nuxeo.com/browse/NXP-29636)


#### Allow Optimized MongoDB Ids With Shorter Size
(also available in 10.10)

We can now use 8 bytes MongoDB ids (instead of 36 bytes) to reduce database and index sizes.

To use optimized ids, provide the following XML configuration (or adapt it):
` <require>default-repository-config</require>
  <extension target="org.nuxeo.ecm.core.storage.mongodb.MongoDBRepositoryService" point="repository">
    <repository name="default">
      <idType>sequenceHexRandomized</idType>
      <nativeId>true</nativeId>
    </repository>
  </extension>`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28763](https://jira.nuxeo.com/browse/NXP-28763)

#### Allow Configuration of MongoDB Query Max Execution Time

Query max execution time can be configured using:
` <extension target="org.nuxeo.runtime.mongodb.MongoDBComponent" point="connection">
    <connection id="default">
      <maxTime>10 m</maxTime>
    </connection>
  </extension>`

The default is 1h.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29112](https://jira.nuxeo.com/browse/NXP-29112)

#### Allow Full Configuration of MongoDB Connection

All MongoDB options can now be configured using a Nuxeo contribution.

To contribute options to MongoDB one can now use the following syntax:
 `<extension target="org.nuxeo.runtime.mongodb.MongoDBComponent" point="connection">
    <connection id="default">
      <property name="requiredReplicaSetName">myreplicaset</property>
      <property name="readPreference">primary</property>
      <property name="readConcern">majority</property>
      <property name="writeConcern">majority</property>
    </connection>
  </extension>`

The properties that can be used are those of the `MongoClientOptions.Builder` class.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29111](https://jira.nuxeo.com/browse/NXP-29111)

#### Blob Provider Improvements
(also available in 10.10)

A new blob provider implementation has been added to provide more flexibility and more options:
- making them transactional,
- adding a caching layer,
- allowing direct deletion,
- changing the digest computation for keys into something based on doc or blob info,
- passing down more information to the storage layer (as filename, mime type, username,...),
- avoid temporary files when streaming decrypted binaries (TL-318).

This new blob provider can be enabled using a property in `nuxeo.config`

When using this new provider, blobs stored in S3 now have the following informative metadata automatically set:
 - `Content-Type: MIME type`
 - `Content-Disposition: attachment; filename=...`

In addition, if the `metadata.addusername` part of the S3 connector XML configuration (or framework property `nuxeo.s3storage.metadata.addusername`) is set, the following Nuxeo-specific header is also set:
 - `x-amz-meta-username: username`

These headers are NOT modified for subsequent changes to the document, they are only set the first time a given blob is written to S3.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on the following JIRA tickets:
- [NXP-28276](https://jira.nuxeo.com/browse/NXP-28276)
- [NXP-28460](https://jira.nuxeo.com/browse/NXP-28460)
- [NXP-28716](https://jira.nuxeo.com/browse/NXP-28716)
- [NXP-25712](https://jira.nuxeo.com/browse/NXP-25712)

#### Better Management of Temporary Files for the Encrypted (AES) Blob Provider
(also available in 10.10)

A new implementation of the AESBinaryManager has been added to improve temporary files management.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28456](https://jira.nuxeo.com/browse/NXP-28456)

#### DefaultBlobDispatcher Supports Full Regexp-Based Match
(also available in 10.10)

Full regexp-based match has been added to `DefaultBlobDispatcher`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28267](https://jira.nuxeo.com/browse/NXP-28267)

#### Add `ecm:path` Variable to the Default Blob Dispatcher
(also available in 10.10)

`ecm:path` variable is added to the default blob dispatcher.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28227](https://jira.nuxeo.com/browse/NXP-28227)

#### Allow Avoiding Use of the HTTP Proxy for S3 Connections if the S3 Endpoint Is Internal
(also available in 10.10)

In some situations, the S3BinaryManager needs to connect to a local S3-compatible endpoint that must not go through the global `nuxeo.http.proxy.host` defined.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28185](https://jira.nuxeo.com/browse/NXP-28185)

#### Better Management of Authentication Parameters for Google Storage
(also available in 10.10)

We can now reference a file with the JSON content rather than the JSON value itself as a framework property.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27925](https://jira.nuxeo.com/browse/NXP-27925)

#### Configurable Digest in S3BinaryManager
(also available in 10.10)

The digest algorithm to use to compute a unique key when storing blobs in S3 can now be configured among standard algorithms listed here for Java 11.

The default value is MD5.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27805](https://jira.nuxeo.com/browse/NXP-27805)

#### S3 Cache and Connection Parameters Configurable Through `nuxeo.conf`

Instead of editing the template defining the S3 blob provider, we can now set the S3 cache and the connection parameters in `nuxeo.conf`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27777](https://jira.nuxeo.com/browse/NXP-27777)

#### S3 Transfer Acceleration Support

We now allow using the accelerate mode of S3, more details here: https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27657](https://jira.nuxeo.com/browse/NXP-27657)

#### Configure S3 Multipart Part Size
(also available in 10.10)

It is now possible to configure the chunk size of multipart part size (from 5MB to 5GB).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26899](https://jira.nuxeo.com/browse/NXP-26899)

#### Document Deletion With Bulk Action Framework on DBS

We now use the Bulk Action Framework to delete massively documents. This is supported for DBS only.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26908](https://jira.nuxeo.com/browse/NXP-26908)

#### MongoDB New Indexes

To improve performances, new indexes have been added on the metadata `rend:sourceId` and `rend:sourceVersionableId` that are used for standard queries on Nuxeo Server.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26676](https://jira.nuxeo.com/browse/NXP-26676)

#### H2 1.4.200

The Nuxeo Platform now relies on H2 1.4.200

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28956](https://jira.nuxeo.com/browse/NXP-28956)

### Directory

#### Allow Directory Initialization to Just Add Missing Entries

It is now possible to initialize a directory by adding missing entries and keep the existing entries untouched.

To do so, a new optional parameter has been added in the `DirectoryService` for `initialization : "dataloadingPolicy"` in order to define the expected behavior when there are duplicate entries among:
 - Ignore the duplicates
 - Update the duplicates
 - Error when duplicates

Available values:
 - `legacy`: previous behavior
 - `never_load`: never update (only creation)
 - `skip_duplicate`: Ignore the duplicates
 - `reject_duplicate`: Error when duplicates
 - `update_duplicate`: Update the duplicates

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27877](https://jira.nuxeo.com/browse/NXP-27877)

### Workflow

#### Support Task Variables on Nuxeo-Dropzone

Nuxeo-dropzone has been improved to be usable on workflow tasks layouts for uploading blobs to variables.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28263](https://jira.nuxeo.com/browse/NXP-28263)

#### Task Endpoint Paginable
(also available in 10.10)

The Task endpoint is now paginable.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28008](https://jira.nuxeo.com/browse/NXP-28008)

#### `workflowInstanceId` Alias for `Workflow.GetOpenTasks` Operation

The `processId` parameter of the `Workflow.GetOpenTasks` operation now has a `workflowInstanceId` alias.</br>
This allows to run this operation within a chain called from a workflow (transition, escalation rule, ...) without passing any parameters, as the `nodeId` and `processId` (= `workflowInstanceId`) parameters will be automatically bound to the operation context variables named the same way.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28078](https://jira.nuxeo.com/browse/NXP-28078)

#### Delete the Related Workflow Instances When a Document Is Deleted

Workflow instances related to deleted documents are now also removed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29100](https://jira.nuxeo.com/browse/NXP-29100)

### Nuxeo Streams

#### Kafka 2.5.0
The Nuxeo Platform now relies on Kafka 2.5.0.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29045](https://jira.nuxeo.com/browse/NXP-29045)

#### Report Stream lag and latency from Nuxeo

Previously, the stream processing lag and latency could be monitored by using Nuxeo `stream.sh`.

Stream lag and latency are now directly delivered by Nuxeo Server.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28801](https://jira.nuxeo.com/browse/NXP-28801)

#### Expose Nuxeo Stream latency metrics to Datadog
(also available in 10.10)

In the same way, it has been done for Graphite (cf. [NXP-26248](https://jira.nuxeo.com/browse/NXP-26248)), we can now expose Nuxeo Stream lag and latency in Datadog.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28508](https://jira.nuxeo.com/browse/NXP-28508)

#### Nuxeo Stream probe in the default health check

The default Nuxeo health check that is used by the `runningstatus` REST endpoint now includes a probe to check Nuxeo Stream Processors.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28094](https://jira.nuxeo.com/browse/NXP-28094)

#### Nuxeo Stream expose latency to Prometheus

Nuxeo deployments with Nuxeo Stream/Kafka on Kubernetes/OpenShift exposes latency to Prometheus, the metrics and monitoring engine commonly bundled with Kubernetes/OpenShift.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26416](https://jira.nuxeo.com/browse/NXP-26416)

#### Enable to register a Processor without running it

There are cases where a processor needs to be defined but not start/stop by the StreamService.
For instance, an import processor can be registered and start/stop using a REST API.
Another case is when having different processors that work together, we may want to initialize all the streams first and then control the order the processors are started.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28356](https://jira.nuxeo.com/browse/NXP-28356)

#### Recovery procedure for systematic failure in a stream processor

There is a new option to recover from systematic stream processor failure.</br>
First, add `nuxeo.stream.recovery.skipFirstFailures=1` to a single Nuxeo node, Processors will skip the first record in failure instead of terminating.
Second, once the problematic record is skipped remove the option from the `nuxeo.conf` and perform a rolling restart of other Nuxeo nodes to restore all processor threads.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27529](https://jira.nuxeo.com/browse/NXP-27529)

#### Expose stream processor failures as metrics

A new counter metric has been added when the processing enters in termination due to an error. Also, even if the probe is disabled, it will be nice to have the stream processor probe output to list which processing is failing.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27471](https://jira.nuxeo.com/browse/NXP-27471)

#### Stream Processor Probe in The `runningstatus`

Since 11.1, you can activate a health check probe to check the status of stream processors.
The option to activate in `nuxeo.conf` is:`nuxeo.stream.healthCheck.enabled=true`

If a stream processor fails after retries and its failover policy is to stop on error the `runningstatus` will be in error.</br>
When this happens the Nuxeo node needs to be restarted to continue the processing.</br>
Note that, by default, the health check probe is not activated.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27164](https://jira.nuxeo.com/browse/NXP-27164)

#### Allow to Disable Stream Processing

An option is available to disable Stream Processing on a given node.

All Stream Processors can be disabled on a Nuxeo node using:
```
nuxeo.stream.processing.enabled=false
```

All WorkManager processing can be disabled on a Nuxeo node using:
```
nuxeo.work.processing.enabled=false
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29361](https://jira.nuxeo.com/browse/NXP-29361)

### WorkManager

#### Trigger an Action after Completion of a Group of Works
(also available in 10.10)

The StreamWorkManager provides the capability to trigger an action once all tasks of a group of Works are completed.
For instance, it is now possible to fire a document rendition done Event once all the renderings for a document are completed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28182](https://jira.nuxeo.com/browse/NXP-28182)

#### New metrics for Works DLQ usage
(also available in 10.10)

Introduce a new metric nuxeo.works.dlq.count that counts the Works in failure that has been put in the dead letter queue (DLQ) stream since the instance is up.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27673](https://jira.nuxeo.com/browse/NXP-27673)

#### Store Work in Failure in DLQ for Repair Purpose
(also available in 10.10)

After retries, Works in failure are stored in a dead letter queue (DLQ) stream named `dlq-work`.
This DLQ is activated by default on both WorkManager implementations (default and StreamWorkManager).

Works in this DLQ can be re-executed for repair purpose using an automation operation.
Note that in cluster mode when NOT using Kafka you need to run this automation operation on each Nuxeo node.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27148](https://jira.nuxeo.com/browse/NXP-27148)

#### WorkManager Processing Disabling

You can now use `nuxeo.work.processing.disable=true` to disable WorkManager processing

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24314](https://jira.nuxeo.com/browse/NXP-24314)

### Scheduler

#### Scheduler Services to Support Multiple Nuxeo Nodes Startup
(also available in 10.10)

The scheduler services handle the startup with multiple Nuxeo nodes.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-285585](https://jira.nuxeo.com/browse/NXP-28558)

#### Configure SchedulerService Initialization Timeout

In cluster mode, the scheduler service is initialized non-concurrently in a cluster-wide critical section.

When a cluster node attempts to initialize the scheduler service and another node is already doing the same thing, it will wait for 1 min for the cluster-wide lock to be released and do its own initialization. If this timeout expires, then initialization fails with an exception.</br>
The following `nuxeo.conf` property can be used to change this timeout:
```
org.nuxeo.scheduler.cluster.start.duration=1m
```

In case where there's a startup crash while a lock is held, it may be necessary to manually cleanup the key/value store of its locks. The key corresponding to the lock is:
```
nuxeo:cluster:start-scheduler
```

For a MongoDB key/value store, the key is stored in the collection `kv.cluster`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28558](https://jira.nuxeo.com/browse/NXP-28558)

### Audit

#### Export Audit in CSV Files
(also available in 10.10)

Audit is now exportable as a CSV file.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27935](https://jira.nuxeo.com/browse/NXP-27935)

### Query

#### NOW Expression in NXQL
(also available in 10.10)

NXQL can now use a `NOW()` function.

`NOW()` returns the current date/time.

NOW(period) returns the current date/time plus the given period. The period is a string expressed in ISO-8601 period format, PnYnMnDTnHnMnS. A leading minus sign, and negative values for the units, are allowed.

So for instance:
 - `NOW('P1D')`: in one day
 - `NOW('-P1D')`: one day ago
 - `NOW('PT1H')`: in one hour
 - `NOW('P-1DT1H')`: one days less one hour ago (usually 23 hours ago, except when DST changes)
 - `NOW('P1Y2M3DT4H5M6S')`: in one year, two months, three days, four hours, five minutes and six seconds.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26305](https://jira.nuxeo.com/browse/NXP-26305)

#### Fix Permission Check on a NXQL Query With SQL Server When a User Belongs to Many Groups

On SQL Server it's now possible to configure VCS to use an increased size to store the Read ACLs optimization tables, which may be necessary if users belong to many groups (total size of group names + the user name + "Everyone" > 4000 characters).

```
nuxeo.vcs.optimizations.acl.maxsize=999999
```

Any value > 4000 will make SQL Server use NVARCHAR(MAX) instead of NVARCHAR(4000) for its internal datastructures.

On PostgreSQL this feature already existed (default to 4096) but was not easily configurable, the same configuration property can be used to increase the value. The specific value requested will be used (there is no notion of MAX).

Note that, the use of a new value will only happen when the optimization tables are created, which can be done on a stopped server by running:
```
DROP TABLE aclr;
DROP TABLE aclr_user;
-- on SQL Server:
EXEC nx_rebuild_read_acls;
-- on PostgreSQL:
SELECT nx_rebuild_read_acls();
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27200](https://jira.nuxeo.com/browse/NXP-27200)

#### Fix the conditions when DuplicatedCollectionListener will process the documents

Children documents are now kept in a collection when the parent container is versioned.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29450](https://jira.nuxeo.com/browse/NXP-29450)

### Rendition and conversion

#### Ability to Disable the Rendition Computations

Previously, the renditions were automatically and systematically computed/re-computed when adding or updating a file content.
It is now possible to configure Nuxeo Server to disable this behavior.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28743](https://jira.nuxeo.com/browse/NXP-28743)

#### Bulk Action Framework for `Picture.RecomputeViews` Operation

`Picture.RecomputeViews` operation has been re-implemented to use the Bulk Action Framework.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26420](https://jira.nuxeo.com/browse/NXP-26420)

#### Thumbnail Recomputation with Bulk Action Framework
(also available in 10.10)

Thumbnail recomputation is now done using the Bulk Action Framework.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27605](https://jira.nuxeo.com/browse/NXP-27605)

#### Improve concurrency management for conversions
(also available in 10.10)

Nuxeo Server better handles concurrency management for conversion and prevent override of conversions.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29769](https://jira.nuxeo.com/browse/NXP-29769)

#### Synchronously reindex document removed from a collection
(also available in 10.10)

Removing a document from a collection triggers a synchronous reindexing in Elasticsearch.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29645](https://jira.nuxeo.com/browse/NXP-29645)

### Elasticsearch

#### Elasticsearch 7.9

Elasticsearch 7.9 is the recommended version with Nuxeo Server Cloud 2020.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29529](https://jira.nuxeo.com/browse/NXP-29529)

#### Elasticsearch `nested` Operator
(also available in 10.10)

Nuxeo Server now supports the Elasticsearch "nested" operator.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-25489](https://jira.nuxeo.com/browse/NXP-25489)

#### Multiple Nuxeo With Embedded Elasticsearch
(also available in 10.10)

Multiple Nuxeo with embedded Elasticsearch can run on the same server.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27922](https://jira.nuxeo.com/browse/NXP-27922)

#### Elasticsearch Reindexing Optimization When a Document Is Checked In
(also available in 10.10)

The number of versions reindexed at document check-in has been optimized.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27663](https://jira.nuxeo.com/browse/NXP-27663)

### Bulk Service (Aka "Bulk Action Framework")

#### Bulk Service Processor Can Be Contributed by Configuration

Previously, the Bulk Service Processor (the scroller and status computations) required development to handle the dynamic parts (the action source stream) and to control the initialization.
- The Bulk Service Processor can now be created by using configuration only for:
- Register a processor
- Initialize its streams
- Mark streams as external (defined in another processor)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28357](https://jira.nuxeo.com/browse/NXP-28357)

#### Bulk Service Handles Elasticsearch Scroller
(also available in 10.10)

Elasticsearch scroller is usable with the Bulk Service.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28086](https://jira.nuxeo.com/browse/NXP-28086)

#### Limit the number of documents of a Bulk command

CSV Export is now limited to 100k rows by default.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29585](https://jira.nuxeo.com/browse/NXP-29585)

####  Bulk scroller threshold to write records downstream 

The Bulk scroller writes records downstream when the number of documents reaches a configured threshold.

The scroller that materializes the document set of a bulk command will write records downstream if there are more than 1m documents, this is in order to prevent OOM, in this case, if there is a failure on the scroller there will be duplicate processing.
This threshold of 1m can be configured using the config service:
```
<!-- disable the immediate produce threshold -->
 <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
     <property name="nuxeo.core.bulk.scroller.produceImmediateThreshold">0</property>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29587](https://jira.nuxeo.com/browse/NXP-29587)

### Monitoring

#### Improvements in Error Messages

We improved some error messages to help analysis and diagnosis.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on the following JIRA tickets:
- [NXP-28129](https://jira.nuxeo.com/browse/NXP-28129)
- [NXP-27124](https://jira.nuxeo.com/browse/NXP-27124)
- [NXP-26528](https://jira.nuxeo.com/browse/NXP-26528)
- [NXP-27175](https://jira.nuxeo.com/browse/NXP-27175)
- [NXP-22770](https://jira.nuxeo.com/browse/NXP-22770)
- [NXP-26687](https://jira.nuxeo.com/browse/NXP-26687)

#### `javax.mail` Messages in Nuxeo Logs
(also available in 10.10)

`javax.mail` messages are now redirected to Nuxeo logs.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28275](https://jira.nuxeo.com/browse/NXP-28275)

#### `nuxeoctl` Now Starts Nuxeo Platform in Strict Mode

Previously, it was possible to start a Nuxeo instance with an undeployed component. This can be risky, especially in cluster mode.

By default, nuxeoctl start is now in strict mode which prevents this to happen.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-20418](https://jira.nuxeo.com/browse/NXP-20418)

#### Datadog and Metrics Improvements

A lot of improvements have been made to improve metrics scope, visibility and usability:
- Improve Datadog metrics using tagging,
- Reduce the default number of metrics published by Graphite and Datadog, using a contribution (see `common-base/nxserver/config/metrics-config.xml` for the default configuration.),
- Report Stream lag and latency from Nuxeo,
- Expose stream processor failures as metrics,
- Refactor MetricsService to support more reporters,
- Enable to publish Datadog metrics in UDP,

It is now possible to easily build Datadog dashboards in the same way as for Grafana/Graphite.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on the following JIRA tickets:
- [NXP-28801](https://jira.nuxeo.com/browse/NXP-28801)
- [NXP-28795](https://jira.nuxeo.com/browse/NXP-28795)
- [NXP-28639](https://jira.nuxeo.com/browse/NXP-28639)
- [NXP-27471](https://jira.nuxeo.com/browse/NXP-27471)
- [NXP-28696](https://jira.nuxeo.com/browse/NXP-28696)

#### Publish Datadog Metrics in UDP Instead of HTTP

It is now possible to report Datadog metrics to a local agent using UDP.

The following options need to be used:
 - `metrics.datadog.udp=true`
 - `metrics.datadog.host`
 - `metrics.datadog.port`

You don't have to configure the API_KEY.

Usage:
```
import org.coursera.metrics.datadog.DatadogReporter
import org.coursera.metrics.datadog.DatadogReporter.Expansion._
import org.coursera.metrics.datadog.transport.Transport
import org.coursera.metrics.datadog.transport.HttpTransport
import org.coursera.metrics.datadog.transport.UdpTransport
import scala.concurrent.duration.SECONDS

...
val expansions = EnumSet.of(COUNT, RATE_1_MINUTE, RATE_15_MINUTE, MEDIAN, P95, P99)
val httpTransport = new HttpTransport.Builder().withApiKey(apiKey).build()
val reporter = DatadogReporter.forRegistry(registry)
  .withEC2Host()
  .withTransport(httpTransport)
  .withExpansions(expansions)
  .build()

reporter.start(10, SECONDS)
Example of using UDP transport:
...
val udpTransport = new UdpTransport.Builder().build()
val reporter =
    ...
    .withTransport(udpTransport)
    ...
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28697](https://jira.nuxeo.com/browse/NXP-28697)

### Authentication, User Management and Permissions

#### `postAuthenticationProcessChecks` added to `SAMLAuthenticationProvider`

Post Authentication Process Checks has been added to `SAMLAuthenticationProvider`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29495](https://jira.nuxeo.com/browse/NXP-29495)

#### User and Group Events/Categories Added to the Platform Audit Directories

User and group events/categories have been added to the Audit directories.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29200](https://jira.nuxeo.com/browse/NXP-29200)

#### Allow ACLs on Versions

A new configuration property allows to set permissions on versions.

The new configuration property `org.nuxeo.version.acl.disabled` controls whether ACLs on versions are disabled. The default value in 11.x is false. Setting it to true disables all use of ACLs on versions for permission checks. The value legacy is also possible, to disable for direct access but enable for queries.
```
  <require>org.nuxeo.ecm.core.versioning.config</require>
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="org.nuxeo.version.acl.disabled">false</property>
  </extension>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28758](https://jira.nuxeo.com/browse/NXP-28758)

#### Make Version Read Permission Depend on Live Doc ReadVersion

A property is exposed to make the Read permission on a version depend on the ReadVersion permission on the live document.

The new configuration property `org.nuxeo.version.readversion.disabled` controls whether the ReadVersion permission is disabled. The default value is false. Setting it to true disables special behavior for the ReadVersion permission.
```
  <require>org.nuxeo.ecm.core.versioning.config</require>
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="org.nuxeo.version.readversion.disabled">false</property>
  </extension>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28370](https://jira.nuxeo.com/browse/NXP-28370)

#### Filter user on subgroups in the `UserGroup.Suggestion` operation

The operation `UserGroup/Suggestion` has a new parameter to filter users on subgroups.

This new parameter is a new boolean parameter allowSubGroupsRestriction to take into account subgroups of the group given in the groupRestriction parameter.

Example of use in Web UI:
```
<nuxeo-user-suggestion role="widget" value=" " label="List of users in Group1" params='{"groupRestriction":"Group1","allowSubGroupsRestriction":"true"}' search-type="USER_TYPE" min-chars="0" required="true"></nuxeo-user-suggestion>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29720](https://jira.nuxeo.com/browse/NXP-29720)

### Comment Service

#### Rework Comments Storage/Architecture
(also available in 10.10)

- The comments storage has been refactored to improve several aspects:
- Permissions management
- Storage
- Versioning
- Copy
- export/import
- ...

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27984](https://jira.nuxeo.com/browse/NXP-27984)

#### Add Parent Post Content in 'New Comment' Notification

If a comment is a reply to another comment, the parent comment is now quoted in the comment notification mail.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28255](https://jira.nuxeo.com/browse/NXP-28255)

#### Comments Indexed on Linked Document Full-Text Field

Comments are now indexed on linked document full-text field.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26669](https://jira.nuxeo.com/browse/NXP-26669)

#### Automatically Send Notifications to the Users Who Participate in a Conversation
(also available in 10.10)

Automatic notifications are sent to users who participate on Comment conversation.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28254](https://jira.nuxeo.com/browse/NXP-28254)

### Download Service

#### Digest and Last-Modified Negotiation for Download Service
(also available in 10.10)

Digest and Last-Modified negotiation are added to the download service to manage the following request/response headers:
- Want-Digest / Digest
- If-Modified-Since / Last-Modified

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28092](https://jira.nuxeo.com/browse/NXP-28092)

#### `Downloadservice.Downloadblob` to Use Builder Pattern
(also available in 10.10)

Previously, the API DownloadService.downloadBlob had lots of different overloaded versions with different numbers of arguments.

We now use a builder pattern itself, to pass a download context object with all the required information.

New API: `DownloadService.downloadBlob(DownloadContext)`.
A `DownloadContext` can be constructed through `DownloadContext.builder(request, response)...<setters>...build()`.
The other `DownloadService.downloadBlob` methods with lots of arguments are now deprecated.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28005](https://jira.nuxeo.com/browse/NXP-28005)

#### Make DocumentModelJsonWriter Expose Schemas

Documents exported through JSON now have an addition schemas field (similar to facets):
```
[ {"name": "SCHEMA1", "prefix": "PREFIX1"}, {"name": SCHEMA2", "prefix": "PREFIX2"}, ... ],
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27995](https://jira.nuxeo.com/browse/NXP-27995)

#### Make Download Service Deal With Head Efficiently
(also available in 10.10)

The download service responds to a HEAD request with a better efficiency.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28093](https://jira.nuxeo.com/browse/NXP-28093)

### CMIS

#### Use the Nuxeo Downloadservice Framework for Cmis Downloads
(also available in 10.10)

We now use the Nuxeo DownloadService framework for CMIS downloads, instead of the native OpenCMIS library code.
This allows us to better deal with buffering, transactions, and take into account potential CDN redirects.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27337](https://jira.nuxeo.com/browse/NXP-27337)

### REST API

#### Facet API on `SimpleDocumentModel`
(also available in 10.10)

The facet API has been implemented on `SimpleDocumentModel`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28597](https://jira.nuxeo.com/browse/NXP-28597)

#### Offset Support to PaginableObject

The `PaginableObject.java` now supports the ability to specify an offset instead of a page index when it comes to fetching a page provider result set.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28418](https://jira.nuxeo.com/browse/NXP-28418)

#### New Parameter to the `Document.Copy` Operation to Reset the Document Lifecycle

There is a listener linked to the copy event and which looks at a context variable to reset the lifecycle or not.

The new parameter "reset lifecycle" allows to set or not this context variable.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27735](https://jira.nuxeo.com/browse/NXP-27735)

#### Improve ConfigurationService API

APIs below were added on ConfigurationService, signature are key or key/defaultValue:
 - `Optional<String> getString(String)`
 - `String getString(String, String)`
 - `Optional<Integer> getInteger(String)`
 - `int getInteger(String, int)`
 - `Optional<Long> getLong(String)`
 - `long getLong(String, long)`
 - `Optional<Duration> getDuration(String)`
 - `Duration getDuration(String, Duration)`
 - `Optional<Boolean> getBoolean(String)`
 - `boolean isBooleanTrue(String)`
 - `boolean isBooleanFalse(String)`

Fallback on default value occurs when property doesn't exist or is blank. `isBooleanTrue` and `isBooleanFalse` return true if and only if property value is true and respectively false.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26181](https://jira.nuxeo.com/browse/NXP-26181)

### New API to Refresh AWS Tokens in the Batch Handler

The new API `BatchHandler.refreshToken(batchId)` can be used to get new credentials. This is particularly interesting for big uploads to prevent hitting token timeout errors.
It is implemented for `S3DirectBatchHandler`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28869](https://jira.nuxeo.com/browse/NXP-28869)

### Optimize task endpoint

The size of the response for the task endpoint has been reduced and it dramatically decreases the response time when a user belongs to many groups/subgroups.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29759](https://jira.nuxeo.com/browse/NXP-29759)

### Lexical error returns 400-class error when calling Repository.Query via REST
(also available in 10.10)

A lexical error when calling the operation Repository.Query returns a HTTP 400 (Bad Request) error.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29699](https://jira.nuxeo.com/browse/NXP-29699)

### AWS Service

#### Multiple Configurations for AWSConfigurationService
(also available in 10.10)

Multiple AWS configurations are now supported.

AWS configuration can now specify an id with:
```
<extension target="org.nuxeo.runtime.aws.AWSConfigurationService" point="configuration">
    <configuration id="myconfig">
      <accessKeyId>MY_ACCESS_KEY_ID</accessKeyId>
      <secretKey>MY_SECRET_KEY</secretKey>
      <region>MY_REGION</region>
    </configuration>
</extension>
```

If the id is not specified, default is used.

To get to this configuration, one can then use:
 - new `NuxeoAWSCredentialsProvider(id)`
 - new `NuxeoAWSRegionProvider(id).getRegion()`

Note that if the configuration is not found, the providers will still fall back on the default AWS SDK behavior to look in the OS environment, Java system properties, AWS profile or EC2 container credentials (which don't take into account any configuration id).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26823](https://jira.nuxeo.com/browse/NXP-26823)

### CSV Export Service

#### Elasticsearch Scroll for CSV Export Bulk Action

The CSV Export now uses Elasticsearch scroll. This allows to improve resilience and ensure that an export from the UI (search result from Elasticsearch) matches the export.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28577](https://jira.nuxeo.com/browse/NXP-28577)

### Scroll Service
(also available in 10.10)

We added a new service dedicated to retrieve a long list of identifiers representing a result set.

This service allows to globalize the existing scrolling API to get a document list ids or Elasticsearch resultset.

It also allows to have other document scrollers:
- a list of ids (so we don't have to query the repository or elastic)
- a file in transient store containing a list of ids
- Or to scroll on non-documents identifier:
- audit entry ids
- user ids
- dictionary ids
- a stream

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28334](https://jira.nuxeo.com/browse/NXP-28334)


### Customisation

#### Allow Global Disabling of Schemas, Like Files
(also available in 10.10)

We can now disable an existing schema (make it so that it's ignored whenever a doctype references it, or when the list of all schemas is returned).
For instance, some use cases require that no attachments are created in the platform. With this feature, this becomes possible by simply disabling the files schema.

To disable a schema, for instance files, use a contribution like:
```
<require>org.nuxeo.ecm.core.CoreExtensions</require>
  <extension target="org.nuxeo.ecm.core.schema.TypeService" point="schema">
    <schema name="files" enabled="false" />
  </extension>
```
Of course the `<require>` line must reflect the actual component that declares the schema that one wants to disable.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27962](https://jira.nuxeo.com/browse/NXP-27962)

#### Allow Global Disabling of Facets, Like Versionable
(also available in 10.10)

A facet can be globally disabled.
For instance, some use cases require that no versions are created in the platform.

To disable a facet, for instance Versionable, use a contribution like:
 `<require>org.nuxeo.ecm.core.CoreExtensions</require>
  <extension target="org.nuxeo.ecm.core.schema.TypeService" point="doctype">
    <facet name="Versionable" enabled="false" />
  </extension>`
Of course the `<require>` line must reflect the actual component that declares the facet that one wants to disable.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27873](https://jira.nuxeo.com/browse/NXP-27873)

#### Allow Map and List in Nuxeo Platform List Template Parameters

It is now possible to contribute a complex structure as `templateParam`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27613](https://jira.nuxeo.com/browse/NXP-27613)

#### Improve OpenID Provider Descriptor to Handle User Info Request Authentication per Bearer
(also available in 10.10)

We improved OpenID provider to be able to choose between authentication though query parameters or through Authentication header.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27446](https://jira.nuxeo.com/browse/NXP-27446)

### Packaging / Distribution / Installation

#### Tomcat 9.0.35

The Nuxeo Platform now relies on Tomcat 9.0.35.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29093](https://jira.nuxeo.com/browse/NXP-29093)

#### Other Upgrades

Other upgrades are listed in the following JIRA ticket: [NXP-28537](https://jira.nuxeo.com/browse/NXP-28537)

#### Add the Notion of Profile in Nuxeo

We introduce the notion of profile in Nuxeo. These profiles are meant to be used to configure Nuxeo. Currently, they act as templates with some differences.

Profiles are configured through `NUXEO_PROFILES` environment variable, whereas templates are configured through `nuxeo.conf`.

As said, profiles are currently Nuxeo templates, and they are deployed after templates defined in `nuxeo.conf`.

For example, if we have `nuxeo.templates=mongodb,mongodb-audit` in `nuxeo.conf` and we define a `NUXEO_PROFILES=perf`, we get:

```
$ NUXEO_PROFILES=perf bash nuxeoctl console
Nuxeo home:          /opt/nuxeo-server-tomcat-11.1-SNAPSHOT
Nuxeo configuration: /opt/nuxeo-server-tomcat-11.1-SNAPSHOT/bin/nuxeo.conf
Nuxeo profiles:      perf
Include template: /opt/nuxeo-server-tomcat-11.1-SNAPSHOT/templates/common-base
Include template: /opt/nuxeo-server-tomcat-11.1-SNAPSHOT/templates/common
Include template: /opt/nuxeo-server-tomcat-11.1-SNAPSHOT/templates/default
Include template: /opt/nuxeo-server-tomcat-11.1-SNAPSHOT/templates/mongodb
Include template: /opt/nuxeo-server-tomcat-11.1-SNAPSHOT/templates/mongodb-audit
Include template: /opt/nuxeo-server-tomcat-11.1-SNAPSHOT/templates/perf
```

We can see that the perf profile is deployed after the template parameter value.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29190](https://jira.nuxeo.com/browse/NXP-29190)

#### Allow Concurrent Startup of Nuxeo Instances

In cluster mode, the document repository and the directories are initialized non-concurrently in a cluster-wide critical section.

When a cluster node attempts to initialize its repository (or a directory) and another node is already doing the same thing, it will wait for 1 min for the cluster-wide lock to be released and do its own initialization. If this timeout expires, then initialization fails with an exception.

The following two `nuxeo.conf` properties can be used to change this timeout:
```
org.nuxeo.repository.cluster.start.duration=1m
org.nuxeo.directory.cluster.start.duration=1m
```

In case where there's a startup crash while a lock is held, it may be necessary to manually cleanup the key/value store of its locks. The keys corresponding to the locks are visible when using Redis with KEYS `nuxeo:cluster:*` for instance `nuxeo:cluster:start-repository-default` or `nuxeo:cluster:start-directories`.

For a MongoDB key/value store, the keys are stored in the collection `kv.cluster`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28661](https://jira.nuxeo.com/browse/NXP-28661)

#### Allow to Pass Connect URL When Running the Nuxeo Server Docker Image

It is now possible to override the Connect URL when starting a Nuxeo Docker image through the environment variable `NUXEO_CONNECT_URL`.

For instance, to run a container with another Connect URL than the default one:
```
docker run -it -p 8080:8080 -e NUXEO_CONNECT_URL=<NUXEO_CONNECT_URL> nuxeo/slim:latest
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29194](https://jira.nuxeo.com/browse/NXP-29194)

#### Kafka Availability Checking at Nuxeo Startup

Nuxeo startup is now checking Kafka availability.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22844](https://jira.nuxeo.com/browse/NXP-22844)

#### Elasticsearch Availability Checking at Nuxeo Startup

Nuxeo startup is now checking ElasticSearch availability.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22843](https://jira.nuxeo.com/browse/NXP-22843)

### Miscellaneous

#### Remove Post Commit Listeners

Post-commit listeners have been converted to asynchronous listeners.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-2691](https://jira.nuxeo.com/browse/NXP-26911)

#### Allow Event.Fire to Use Properties

It is now possible to use properties into the asynchronous events.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26449](https://jira.nuxeo.com/browse/NXP-26449)

#### `DocumentModelJsonWriter` Exposes Schemas
(also available in 10.10)

Documents exported through JSON now have an addition schemas field (similar to facets).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27995](https://jira.nuxeo.com/browse/NXP-27995)

#### Clusterservice to Hold Cluster Node Info

A new service has been added to hold info about whether clustering is enabled and the cluster node id.
This replaces ad-hoc uses of the framework properties repository.clustering.enabled and repository.clustering.id and multiple different random generations of ids when there is no node id specified.
Current direct users of the properties are:
- MigrationServiceImpl
- StreamPubSubProvider
- CacheServiceImpl

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-25499](https://jira.nuxeo.com/browse/NXP-25499)

#### Reduce Response Size of the ACL Enricher
(also available in 10.10)

The User object representation is now returned to the client without its groups.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27947](https://jira.nuxeo.com/browse/NXP-27947)

#### `ecm:isProxy` A Valid Field for Aggregates
(also available in 10.10)

The field `ecm:isProxy` is now part of the valid fields for Elasticsearch aggregates.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26656](https://jira.nuxeo.com/browse/NXP-26656)

#### Improve LogFeature to Be Able to Annotate Test Methods

New test annotations are available on classes and methods:
```
@ConsoleLogLevelThreshold
@LoggerLevel
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-25836](https://jira.nuxeo.com/browse/NXP-25836)

#### Allow Underscore Character in LDAP Queries

Starting with 11.1, the `UserManager.searchUsers(pattern)` and `UserManager.searchGroups(pattern)` APIs interpret the pattern as a generic string with arbitrary characters that will be matched exactly (depending on the directory substring match style).

If compatibility with previous versions is needed, to use a pattern where % and _ are interpreted as LIKE escapes, the following must be set:
```
<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
  <property name="nuxeo.usermanager.search.escape.compat">true</property>
</extension>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27320](https://jira.nuxeo.com/browse/NXP-27320)

#### Add Default Referrer-Policy Header

A new Nuxeo property `nuxeo.referrer.policy` is available to control the value of the Referrer-Policy HTTP header.

The default is:
```
nuxeo.referrer.policy=strict-origin-when-cross-origin
```

The header Referrer-Policy and its possible values are described [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29115](https://jira.nuxeo.com/browse/NXP-29115)

#### Cleanup

This release also comes with hundreds of bugs fixed and also code cleanups, making Nuxeo Server more solid than ever.

## Addons

### S3 Direct Upload - Support S3-like Storage

S3 direct upload now has new `nuxeo.conf` parameters to configure a custom S3 endpoint and activate path-style access:
```
nuxeo.s3storage.transient.endpoint (default empty)
nuxeo.s3storage.transient.pathstyleaccess (default false)
```

For example:
```
nuxeo.s3storage.transient.endpoint=https://s3.us-east-1.amazonaws.com
nuxeo.s3storage.transient.pathstyleaccess=true
```

Note that path-style access is incompatible with accelerate mode ([NXP-27657](https://jira.nuxeo.com/browse/NXP-27657)), see S3 documentation.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28526](https://jira.nuxeo.com/browse/NXP-28526)

### S3 direct upload - Importing the Same File at the Same Time Fails

A universally unique identifier is now used as key identifier for files.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27162](https://jira.nuxeo.com/browse/NXP-27162)

### Web UI

For more information on Web UI latest release:
- [Web UI Release Notes]({{page version='next' space='nxdoc' page='web-ui-release-notes'}})
- [Web UI Upgrade Notes]({{page version='next' space='nxdoc' page='web-ui-upgrade-notes'}})

### JSF

#### Improve Jsf Admin Nos Registration Page in Offline Case

JSF Admin NOS page displays registration information in offline mode.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29336](https://jira.nuxeo.com/browse/NXP-29336)

#### Fix JSF EL Evaluation of a Condition Using a Multi-Valued Property in a Filter Used by a Picture Conversion

The function `nx:arrayContains` is added to evaluate JSF EL condition on multi-valued properties.

Added new functions in the EL context to work with arrays:

- nx:arrayContains: returns true if the given array contains the given element.
`${nx:arrayContains(array, 'foo')}`

- nx:arrayContainsAll: returns true if the given array contains all the given elements.
`${nx:arrayContainsAll(array, 'bar', 'foo')}`

- nx:arrayContainsAny: returns true if the given array contains one of the given elements.
`${nx:nx:arrayContainsAny(array, 'bar', 'foo')}`

- nx:arrayContainsNone: returns true if the given array contains none of the given elements.
`${nx:arrayContainsNone(array, 'barfoo', 'foobar')}`

For instance, those functions can be used in filters to filter picture conversions:
```
<extension target="org.nuxeo.ecm.platform.picture.ImagingComponent"
  point="pictureConversions">
  <pictureConversion id="subjectFilteredConversion" maxSize="200">
    <filters>
      <filter-id>subjectFilter</filter-id>
    </filters>
  </pictureConversion>
</extension>

<extension target="org.nuxeo.ecm.platform.actions.ActionService"
  point="filters">
  <filter id="subjectFilter">
    <rule grant="true">
      <condition>#{nx:arrayContains(currentDocument.dc.subjects, "art/paint")}</condition>
    </rule>
  </filter>
</extension>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28918](https://jira.nuxeo.com/browse/NXP-28918)

## Farewell

### Apache Derby

The support of the Apache Derby embedded database has been removed.
H2 is now the only option to handle in-memory data sources.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28673](https://jira.nuxeo.com/browse/NXP-28673)

### JAAS

JAAS has been removed (the use of LoginContext, security domains, LoginModules, etc.) and replaced per a direct call to `NuxeoAuthenticationPlugins`.

New methods:
 - `Framework.loginSystem()`
 - `Framework.loginSystem(originatingUser)`
 - `Framework.loginUser(username)`
 - `NuxeoPrincipal.getCurrent()`
 - `NuxeoPrincipal.isCurrentAdministrator()`

The above `loginSystem` and `loginUser` methods now return a `NuxeoLoginContext` that is `AutoCloseable` and can therefore be used in a try-with-resources.

Deprecated methods:
- `Framework.login()`</br>
    -> `Framework.loginSystem()`
- `Framework.loginAs(originatingUser)`</br>
    -> `Framework.loginSystem(originatingUser)`
- `Framework.loginAsUser(username)`</br>
    -> `Framework.loginUser(username)`
- `Framework.login(username, password)`</br>
    -> `Framework.loginUser(username)`
- `ClientLoginModule.clearThreadLocalLogin()`</br>
    -> `LoginComponent.clearPrincipalStack()` (INTERNAL)
- `ClientLoginModule.getThreadLocalLogin()`</br>
    -> `LoginComponent` (INTERNAL)
- `ClientLoginModule.getCurrentLogin()`</br>
    -> `LoginComponent.getCurrentPrincipal()`
- `ClientLoginModule.getCurrentPrincipal()`</br>
    -> `NuxeoPrincipal.getCurrent()`
- `ClientLoginModule.isCurrentAdministrator()`</br>
    -> `NuxeoPrincipal.isCurrentAdministrator()`
- `LoginStack`

These extension points or part of their contributions are removed:
 - `<loginModulePlugin>` in the element `<authenticationPlugin>` of extension point `authenticators` of `org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService`
 - the extension point domains of `org.nuxeo.runtime.LoginComponent` (which included registration of `LoginModule` classes)
 - the extension point plugin of `org.nuxeo.ecm.platform.login.LoginPluginRegistry` (which included registration of `LoginPlugin` classes)

Behavior change:
 - `NuxeoAuthenticationPlugin.handleRetrieveIdentity` should now contain all the authentication code, and return a `UserIdentificationInfo with credentialsChecked = true` (using the 1-arg constructor) if the credentials have already been checked by the auth plugin itself. Otherwise the method may return a `UserIdentificationInfo` that includes a username and password, to let the generic filter check the password against the UserManager.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27942](https://jira.nuxeo.com/browse/NXP-27942)

### NXCore Class

Usage of NXCore is deprecated and its usage is removed from the platform.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22532](https://jira.nuxeo.com/browse/NXP-22532)

### Nuxeo Static WAR

The `nuxeoctl` pack command used to generate a static WAR has been removed as well as the `nuxeo-distribution/nuxeo-war-tests` module testing it.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28100](https://jira.nuxeo.com/browse/NXP-28100)

### Nuxeo SDK Distribution

The Nuxeo Server Tomcat SDK build has been removed. The Maven profile `sdk` does not exist anymore.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28101](https://jira.nuxeo.com/browse/NXP-28101)

### Post Commit Listeners

Post-commit listeners have been converted to asynchronous listeners.

From 11.1, the post commit event listeners were made either asynchronous or synchronous. We strongly recommend to do the same thing with any custom event listener.

Later on, we will deprecate the post commit event listener execution mechanism relying on PostCommitEventExecutor, see [NXP-27986](https://jira.nuxeo.com/browse/NXP-27986).

For this purpose, a warning is logged when running a post commit event listener to inform that its execution will soon be deprecated and advising to update the listener contributions to make them asynchronous with `<listener async=\"true\"...>`.

The warning can be disabled with the following logger in NUXEO_SERVER/lib/log4j2.xml:
```
<Logger name="org.nuxeo.ecm.core.event.impl.PostCommitEventExecutor" level="warn">
  <RegexFilter regex="Running post commit event listeners.*" onMatch="DENY" onMismatch="NEUTRAL" />
</Logger>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26911](https://jira.nuxeo.com/browse/NXP-26911)

### GWT Modules

All GWT related modules have been removed from `nuxeo-jsf-ui` repository:
 - nuxeo-annot-api
 - nuxeo-annot-contrib
 - nuxeo-annot-core
 - nuxeo-annot-http
 - nuxeo-annot-repo
 - nuxeo-platform-imaging-tiling
 - nuxeo-platform-imaging-tiling-preview

The `PictureTilesRestlets` restlet related to the `nuxeo-platform-imaging-tiling` has also been removed: the endpoint `/nuxeo/restAPI/getTiles/` does not exist anymore.

All GWT artifacts in the Nuxeo root pom `dependencyManagement` have also been removed. If you depend on those ones, you must update your project pom to add them.

The related `nuxeo.old.jsf.preview` (introduced with [NXP-25110](https://jira.nuxeo.com/browse/NXP-25110)) and `nuxeo.text.annotations` configuration properties that were used to activate the old preview and the GWT text annotations have been removed: setting them has no impact.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27447](https://jira.nuxeo.com/browse/NXP-27447)

### Nuxeo DAM Dependency

The Nuxeo DAM Package and Nuxeo DAM JSF UI Package have been removed for Nuxeo 11.1.
All the features (Picture, Video, ...) installed through those packages are now integrated by default in a Nuxeo Server.
You do not need to depend on `nuxeo-dam` package anymore on your Nuxeo package, for instance:
```
<dependencies>
    <package>nuxeo-web-ui</package>
    <package>nuxeo-dam</package>
</dependencies>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28626](https://jira.nuxeo.com/browse/NXP-28626)

### Nuxeo Wizard

The Nuxeo Wizard has been removed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28621](https://jira.nuxeo.com/browse/NXP-28621)

### Marklogic Connector

The Marklogic connector has been removed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26571](https://jira.nuxeo.com/browse/NXP-26571)

### Nuxeo Connect Report Tools

The Nuxeo Connect Report Tools `nuxeo-connect-tools` has been removed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27864](https://jira.nuxeo.com/browse/NXP-27864)

### Nuxeo Shell

The Nuxeo Shell `nuxeo-shell` addon has been removed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27312](https://jira.nuxeo.com/browse/NXP-27312)

### Template Rendering Samples

The Template Rendering Samples has been removed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28059](https://jira.nuxeo.com/browse/NXP-28059)

### Nuxeo Agenda

The Nuxeo Agenda `nuxeo-agenda` addon has been removed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27271](https://jira.nuxeo.com/browse/NXP-27271)

### jclouds blob provider

The Nuxeo jclouds blob provider `JCloudsBinaryManager` has been removed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29885](https://jira.nuxeo.com/browse/NXP-29885)

### Others Packages

The following deprecated and unused packages have been removed:
 - nuxeo-activity
 - nuxeo-business-days-management
 - nuxeo-core-binarymanager-sql
 - nuxeo-http-client
 - nuxeo-javaagent
 - nuxeo-logs-viewer
 - nuxeo-rating
 - nuxeo-resources-compat
 - nuxeo-review-workflows-dashboards
 - nuxeo-session-inspector

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27271](https://jira.nuxeo.com/browse/NXP-27271)
