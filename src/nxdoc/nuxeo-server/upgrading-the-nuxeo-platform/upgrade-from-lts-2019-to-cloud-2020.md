---
title: Upgrade from LTS 2019 to Nuxeo Platform Cloud 2020
description: Instructions to upgrade your Nuxeo Platform instance from LTS 2019 version to Nuxeo Cloud 2020.
review:
    comment: ''
    date: '2020-07-29'
    status: ok
labels:
    - multiexcerpt
toc: true
tree_item_index: 95
---

For the general upgrade process, see the page [Upgrading the Nuxeo Platform]({{page page='upgrading-the-nuxeo-platform'}}).

{{! excerpt}}
This chapter highlights some major information about upgrade from Nuxeo Platform LTS 2019 (10.10) to Nuxeo Platform Cloud 2020 (10.10). We strongly encourage you to also have a quick read of the upgrade notes.
{{! /excerpt}}

## Prerequisites

This upgrade notes assumes that Nuxeo Server is up to date in 10.10 before the upgrade, which means:
 - Nuxeo Server is on 10.10 with the latest hotfixes
 - All the migrations have been successfully completed (comments and trash).

## Installation and Configuration

### Recommended Changes

#### Disable Tomcat AJP Connector

For security reasons (CVE-2020-1938), AJP is now disabled by default. To re-enabled it, the following properties must be defined:
- `nuxeo.server.ajp.enabled=true`
- `nuxeo.server.ajp.secretRequired=true`
- `nuxeo.server.ajp.secret=changeme`

The secret must also be mentioned in the `mod_proxy_ajp` configuration, see [Apache documentation](https://httpd.apache.org/docs/trunk/mod/mod_proxy_ajp.html) for more.

If one is sure that the AJP port cannot be accessed by any untrusted hosts, then the following configuration is possible:
- `nuxeo.server.ajp.enabled=true`
- `nuxeo.server.ajp.secretRequired=false`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28703](https://jira.nuxeo.com/browse/NXP-28703)

#### Allow Some Runtime Configuration in Nuxeo Docker Images

To control the JVM heap size with the new options (since Java 10): `InitialRAMPercentage` and `MaxRAMPercentage`, in `nuxeo.conf`, we've changed:
```
JAVA_OPTS=-Xms512m -Xmx1024m
```
to:
```
JAVA_OPTS=-XX:InitialRAMPercentage=3 -XX:MaxRAMPercentage=25
```

See the best practices about the [Java Virtual Machine Settings]({{page version='' space='nxdoc' page='setup-best-practices'}}#java-virtual-machine-settings) for more information.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28145](https://jira.nuxeo.com/browse/NXP-28145)

#### Create ClusterService to Hold Cluster Node Info

When configuring Nuxeo in cluster mode, the configuration is now done with:
```
nuxeo.cluster.enabled=true
nuxeo.cluster.nodeid=...
```

You should specify a `nuxeo.cluster.nodeid` even if you don't activate clustering, as it may help debugging (in particular Stream-based Pub/Sub).

The previous Framework properties (`repository.clustering.enabled=true`, `repository.clustering.id=...`) are still available for backward compatibility.

Note that `repository.clustering.delay` still exists but is only meaningful for VCS when used with the legacy and deprecated JDBCClusterInvalidator (which is not the default anymore since Nuxeo 9.1 ([NXP-21801](https://jira.nuxeo.com/browse/NXP-21801))).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-25499](https://jira.nuxeo.com/browse/NXP-25499)

### Behavior Changes

#### Strict Mode by Default for `nuxeoctl` Start

`nuxeoctl` now starts a Nuxeo server in strict mode by default.
`--force` and `--strict` have no impact.

To start a Nuxeo server but aborting in error the start command when a component cannot be activated or if a server is already running, use the `--lenient` option.

```
$ nuxeoctl start --lenient
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-20418](https://jira.nuxeo.com/browse/NXP-20418)

### New Capabilities

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

#### Allow concurrent startup of Nuxeo instances

In cluster mode, the document repository and the directories are initialized non-concurrently in a cluster-wide critical section.

When a cluster node attempts to initialize its repository (or a directory) and another node is already doing the same thing, it will wait for 1 min for the cluster-wide lock to be released and do its own initialization. If this timeout expires, then initialization fails with an exception.

The following two `nuxeo.conf` properties can be used to change this timeout:
`org.nuxeo.repository.cluster.start.duration=1m
org.nuxeo.directory.cluster.start.duration=1m`

In case where there's a startup crash while a lock is held, it may be necessary to manually cleanup the key/value store of its locks. The keys corresponding to the locks are visible when using Redis with KEYS `nuxeo:cluster:*` for instance `nuxeo:cluster:start-repository-default` or `nuxeo:cluster:start-directories`.

For a MongoDB key/value store, the keys are stored in the collection `kv.cluster`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28661](https://jira.nuxeo.com/browse/NXP-28661)

## Core Storage

### Behavior Changes

#### MongoDB Repository Configuration Descriptors

Contributions including a MongoDB `nativeId`, `sequenceBlockSize` or `childNameUniqueConstraintEnabled` are now correctly merged.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28770](https://jira.nuxeo.com/browse/NXP-28770)

#### Document Creator And Contributors Injection/Impersonation

The following `dublincore` properties are now secured from edition:
 - `dc:created`
 - `dc:modified`
 - `dc:creator`
 - `dc:lastContributor`
 - `dc:contributors`

This means you have to be administrator to edit these properties. In tests, you can do the following:
```
Framework.doPrivileged(() -> doc.setPropertyValue("dc:creator", "john"));
```

or:

```
CoreInstance.doPrivileged("default", session -> {
    DocumentModel doc = session.createDocumentModel("/", "file", "File");
    doc.setPropertyValue("dc:creator", "john");
    return session.createDocument(doc);
});
```

In order to declare a property secured you can contribute the following:
```
<component name="my.component.name" version="1.0">
  <extension target="org.nuxeo.ecm.core.schema.TypeService" point="schema">
    <property schema="YOUR_SCHEMA" name="PROP_NAME" secured="true" />
  </extension>
</component>
You can also relax the constraint on a secured property, for example dc:creator with:
<component name="my.component.name" version="1.0">
  <require>org.nuxeo.ecm.core.CoreExtensions</require>
  <extension target="org.nuxeo.ecm.core.schema.TypeService" point="schema">
    <property schema="dublincore" name="created" secured="false" />
  </extension>
</component>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27137](https://jira.nuxeo.com/browse/NXP-27137)

### New Capabilities

#### Allow Optimized Mongodb IDs With Shorter Size

To use optimized ids, provide the following XML configuration (or adapt it):
` <require>default-repository-config</require>
  <extension target="org.nuxeo.ecm.core.storage.mongodb.MongoDBRepositoryService" point="repository">
    <repository name="default">
      <idType>sequenceHexRandomized</idType>
      <nativeId>true</nativeId>
    </repository>
  </extension>`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28763](https://jira.nuxeo.com/browse/NXP-28763)

#### Allow Configuration of Mongodb Query Max Execution Time

Query max execution time can be configured using:
` <extension target="org.nuxeo.runtime.mongodb.MongoDBComponent" point="connection">
    <connection id="default">
      <maxTime>10 m</maxTime>
    </connection>
  </extension>`

The default is 1h.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29112](https://jira.nuxeo.com/browse/NXP-29112)

#### Allow Full Configuration of Mongodb Connection

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

#### Add Some Metadata on Objects Stored in S3

When using the new S3BlobProvider ([NXP-28460](https://jira.nuxeo.com/browse/NXP-28460)), blobs stored in S3 now have the following informative metadata automatically set:
 - `Content-Type: MIME type`
 - `Content-Disposition: attachment; filename=...`

In addition, if the `metadata.addusername` part of the S3 connector XML configuration (or framework property `nuxeo.s3storage.metadata.addusername`) is set, the following Nuxeo-specific header is also set:
 - `x-amz-meta-username: username`

These headers are NOT modified for subsequent changes to the document, they are only set the first time a given blob is written to S3.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-25712](https://jira.nuxeo.com/browse/NXP-25712)

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
`nuxeo.core.binarymanager=org.nuxeo.ecm.blob.s3.S3BlobProvider`

This assumes of course that the s3binaries template is used (which is automatically done when installing the amazon-s3-online-storage package).

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

#### Allow Blob Provider to Do Optimized Byte Range Requests

The internal API `BlobProvider.getStream(blobKey, byteRange)` can be used by code that needs to access a byte range of a blob without fetching the full blob.
This assumes that the blob provider implementation is compatible with this, and that `BlobProvider.allowByteRange()` returns true (which is the case when the blob provider has been registered with `<property name="allowByteRange">true</property>)`.
This is implemented for the `S3BlobProvider`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28919](https://jira.nuxeo.com/browse/NXP-28919)

#### Allow Blob Provider to Access Document When Reading Blob

The new API `BlobProvider.readBlob(BlobInfoContext)` should be implemented by blob providers that wish to get information about the `Document` or the blob's xpath while reading the blob.
This is mostly useful for blob providers that implement "virtual" blobs whose information is derived from properties of the document itself.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28900](https://jira.nuxeo.com/browse/NXP-28900)

#### Add `BlobProvider.supportsSync()` to Avoid Relying on Binarymanager for Sync Tests

New API: `BlobProvider.supportsSync()`
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

#### Add Full regexp-based Match to DefaultBlobDispatcher

The default blob dispatcher now has a new operator ^ to match based on a full regexp (in addition to the already-existing glob-based match using ~).

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
 - `nuxeo.s3storage.accelerateMode` (default false)
 - `nuxeo.s3storage.transient.accelerateMode` (default false) (for direct upload)

For example:
 - `nuxeo.s3storage.accelerateMode=true`
 - `nuxeo.s3storage.transient.accelerateMode=true`

Note that accelerate mode is incompatible with path-style access ([NXP-27805](https://jira.nuxeo.com/browse/NXP-27805), see S3 documentation.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27657](https://jira.nuxeo.com/browse/NXP-27657)

#### Enforce the Server Side Encryption Header in S3 Client Request

S3 copy (used during direct upload in particular) now correctly takes into account the server-side encryption configuration for the destination bucket.
For direct upload, this requires setting the property:
`nuxeo.s3storage.transient.crypt.serverside=true`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26901](https://jira.nuxeo.com/browse/NXP-26901)

#### S3 multipart part size should be configurable

There is a new configuration property `nuxeo.s3.multipart.copy.part.size` to change the S3 multipart copy part size. The default is 5242880 (5MB). It can be changed with:
```
<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="nuxeo.s3.multipart.copy.part.size">5242880</property>
</extension>
```

Note that the maximum allowed by S3 is 5368709120 (5GB).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26899](https://jira.nuxeo.com/browse/NXP-26899)

#### Allow Storing Extracted Fulltext in Blobs

Fulltext extracted from binaries can be stored in a blob provider instead of metadata in the repository by defining:
```
nuxeo.vcs.fulltext.storedInBlob=true
```

(Note that despite the vcs in the name, which is here for regularity with other properties, it also applies to DBS/MongoDB.)

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

It has the same configuration properties as the old `org.nuxeo.ecm.core.blob.binary.AESBinaryManager`.

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

A new property `nuxeo.binarystores.root` is now available, and its use is recommended over the now-deprecated `repository.binary.store`. The old `repository.binary.store` is equivalent to `${nuxeo.binarystores.root}/binaries`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27109](https://jira.nuxeo.com/browse/NXP-27109)

## Nuxeo API Changes

### Remove "session id" Notion From CoreSession and DocumentModel

New methods:
 - `DocumentModel.getPrincipal()`
 - `DocumentModel.attach(CoreSession)`
 - `DocumentModel.isAttached()`
 - `CoreInstance.getCoreSession()` various signatures, as replacements for deprecated `openCoreSession()`
 - `CoreInstance.getCoreSessionSystem()` various signatures, as replacements for deprecated `openCoreSessionSystem()`

Deprecated methods/fields/classes:
 - `DocumentModel.getSessionId()`
 - `DocumentModel()` constructors with `sid` parameter
 - `CoreInstance.openCoreSession()` various signatures (use `getCoreSession()` instead)
 - `CoreInstance.openCoreSessionSystem()` various signatures (use `getCoreSessionSystem()` instead)
 - `CoreInstance.closeCoreSession()` (does nothing)
 - `DocumentModelFactory.createDocumentModel(type, id)` (was unused)
 - `CoreEventConstants.SESSION_ID` (was unused for a long time)
 - `CoreSessionService.releaseCoreSession(CoreSession)` (does nothing)
 - `CloseableCoreSession` (use `CoreSession` instead)

New INTERNAL methods:
 - `DocumentModel()` constructor with `CoreSession`, `repositoryName`, `NuxeoPrincipal` parameters
 - `DocumentModelFactory.createDocumentModel()` signatures with CoreSession parameter
 - `BaseSession.createEntryModel(schema, id, values, readOnly)` and variations (directory class)

Removed methods/fields/classes (these were INTERNAL implementation details):
 - `DocumentModel.attach(sid)`
 - `DocumentModelFactory.createDocumentModel()` signatures with `sid` parameter
 - `CoreSession.isLive(boolean)`
 - `CoreSession.getSessionId()`
 - `CoreInstance.getSession(sid)`
 - `CoreSessionService.getCoreSession(sid)`
 - `CoreSessionService.getCoreSessionRegistrationInfos()`
 - `BaseSession.createEntryModel()` signatures with `sid` parameter (directory class)
 - `LocalException` (`DocumentNotFoundException` is thrown instead)
 - `CoreSessionRegistrationInfo`
 - `SessionInfo`
 - `SIDGenerator`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28799](https://jira.nuxeo.com/browse/NXP-28799)

### Improve ConfigurationService API

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

Fallback on default value occurs when property doesn't exist or is blank. isBooleanTrue and isBooleanFalse return true if and only if property value is true and respectively false.

APIs below were deprecated:
 - `String getProperty(String)` in favor of `Optional<String> getString(String)`
 - `String getProperty(String, String)` in favor of `String getString(String, String)`
 - boolean `isBooleanPropertyTrue(String)` in favor of boolean `isBooleanTrue(String)` (same behavior)
 - boolean `isBooleanPropertyFalse(String)` in favor of boolean `isBooleanFalse(String)` - new API returns true if and only if property value is false, it wasn't the case for `isBooleanPropertyFalse` which returns true if property value is not blank and is not `true`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26181](https://jira.nuxeo.com/browse/NXP-26181)

### Add a New API to Refresh AWS Tokens in the Batch Handler

The new API `BatchHandler.refreshToken(batchId)` can be used to get new credentials. This is particularly interesting for big uploads to prevent hitting token timeout errors.
It is implemented for `S3DirectBatchHandler`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28869](https://jira.nuxeo.com/browse/NXP-28869)

### Cannot use multi repository (XA mode) with PostgreSQL

The following APIs are deprecated and will be removed in the future:
- `TransactionHelper.suspendTransaction`
- `TransactionHelper.resumeTransaction`
- `TransactionHelper.requireNewTransaction`

Instead, the following APIs should be used:
- `TransactionHelper.runInNewTransaction`
- `TransactionHelper.runWithoutTransaction`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-274915](https://jira.nuxeo.com/browse/NXP-27491)

## Operations and Automation

### GET Call to an Operation's @async Returns a JSON

Result of a GET call to an operation's @async adapter is now always JSON.
Previously when the result of the operation had a URL we returned a redirect to download the file but, in order to workaround the opaque redirect limitation, we are now returning the JSON object with the absolute URL. Clients should follow the URL manually to trigger the download.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28608](https://jira.nuxeo.com/browse/NXP-28608)

### Operation Document.AddPermission "users" Field Now Supports Stringlist

`Document.AddPermission` operation use now StringList type for users field.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26773](https://jira.nuxeo.com/browse/NXP-26773)

### Fn.htmlEscape is Now Available in JS Automation

The following methods become non-static to be available via JS automation:
- `org.nuxeo.ecm.automation.features.PlatformFunctions#htmlEscape`
- `org.nuxeo.ecm.automation.features.PlatformFunctions#nxqlEscape`

You can use them directly through the `Fn` object:
```
var escapedHtml = Fn.htmlEscape(html)
var escapedNxql = Fn.nxqlEscape(nxql)
```

When used in Java code, you must update your code from:
```
String htmlEscaped = PlatformFunctions.htmlEscape(html);
String nxqlEscaped = PlatformFunctions.nxqlEscape(nxql);
```
to:
```
PlatformFunctions pf = new PlatformFunctions();
String nxqlEscaped = pf.nxqlEscape(nxql);
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27294](https://jira.nuxeo.com/browse/NXP-27294)

### "workflowInstanceId" Alias for Workflow.GetOpenTasks Operation

The "processId" parameter of the `Workflow.GetOpenTasks` operation now has a "workflowInstanceId" alias.
This allows to run this operation within a chain called from a workflow (transition, escalation rule, ...) without passing any parameters, as the "nodeId" and "processId" (= "workflowInstanceId") parameters will be automatically bound to the operation context variables named the same way.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28078](https://jira.nuxeo.com/browse/NXP-28078)

### Make Tests Stop Depending on nuxeo-automation-client

Tests depending on `EmbeddedAutomationServerFeature` can now make use of a limited-functionality `org.nuxeo.ecm.automation.test.HttpAutomationClient` (in a new package) that does direct HTPP calls and doesn't attempt to map JSON responses to a domain-level object model like Document, etc.

```
@Inject
protected Session session;
```

becomes:

```
@Inject
protected HttpAutomationSession clientSession;
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28581](https://jira.nuxeo.com/browse/NXP-28581)

## Directory

### New Capabilities

#### Directory Initialization New Mode

A new optional parameter has been added in the `DirectoryService` for `initialization : "dataloadingPolicy"` in order to define the expected behavior when there are duplicate entries among:
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

## Elasticsearch

### Behavior Changes

#### Make Elasticsearch Hints an Extension Point

Elasticsearch hints are now exposed as extension point. To contribute or override an existing Elasticsearch hint, you should provide a name for your Elasticsearch hint and an implementation of `org.nuxeo.elasticsearch.api. ESHintQueryBuilder`.

The new way to expose the ES hints is by creating a contribution as below:
- We add new Extension Point to our existing ESComponent: `org.nuxeo.elasticsearch.ElasticSearchComponent`
- The name of XP is `elasticSearchHints`.
- At the end our "fuzzy" switch case, will be done like below:
```
<component name="org.nuxeo.elasticsearch.hint.contrib">
  <require>org.nuxeo.elasticsearch.ElasticSearchComponent</require>

  <extension point="elasticSearchHints" target="org.nuxeo.elasticsearch.ElasticSearchComponent">
    <hint name="match" class="org.nuxeo.elasticsearch.hint.MatchESHintQueryBuilder" />
    <hint name="match_phrase" class="org.nuxeo.elasticsearch.hint.MatchPhraseESHintQueryBuilder" />
    <hint name="match_phrase_prefix" class="org.nuxeo.elasticsearch.hint.MatchPhrasePrefixESHintQueryBuilder" />
    <hint name="multi_match" class="org.nuxeo.elasticsearch.hint.MultiMatchESHintQueryBuilder" />
    <hint name="regex" class="org.nuxeo.elasticsearch.hint.RegexESHintQueryBuilder" />
    <hint name="fuzzy" class="org.nuxeo.elasticsearch.hint.FuzzyESHintQueryBuilder" />
  </extension>
</component>
```

More details in the [Nuxeo How to documentation]({{page space='nxdoc' page='how-to-make-elasticsearch-hints-extension-point'}})

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21874](https://jira.nuxeo.com/browse/NXP-21874)

## Import

### Behavior Changes

#### Initialize Filename With Blob Name in FileImporterContext

Since 11.1 if the file name of the `FileImporterContext` is missing then it will be filled with the Blob's file name.

This means that you no longer need to add control to avoid an empty filename outside of the `FileImporterContext` class, for example see the snippet code below  AudioImporter:
```
// code placeholder
@@ -57,8 +56,7 @@ public class AudioImporter extends AbstractFileImporter {
         CoreSession session = context.getSession();
         Blob blob = context.getBlob();

-        String filename = FileManagerUtils.fetchFileName(
-                StringUtils.defaultIfBlank(context.getFileName(), blob.getFilename()));
+        String filename = FileManagerUtils.fetchFileName(context.getFileName());
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26780](https://jira.nuxeo.com/browse/NXP-26780)

#### Don't Timeout During Long Imports

Following this fix, it is no more possible to call `FileManager.Import` in a sychronous event, it has to be done in an asynchronous event. See [NXP-28534](https://jira.nuxeo.com/browse/NXP-28534).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27346](https://jira.nuxeo.com/browse/NXP-27346)

## Monitoring

### Behavior Changes

#### Tagging for Datadog Metrics

Many metrics names have been renamed in 11.1 in order to support tagging which is necessary for Datadog and Prometheus support.

Visit [the documentation]({{page space='nxdoc' page='nuxeo-datadog-reporter'}}) for more information.

Metric names updated to use tag but that generates different metric names in Graphite:
```
# global metrics for all cluster
nuxeo.works.global.queue.scheduled{queue=$queue}
nuxeo.works.global.queue.running{queue=$queue}
nuxeo.works.global.queue.completed{queue=$queue}
# local metrics per node
nuxeo.works.local.queue.timer{queue=$queue}
```

Metric names updated to use tag but without changing metric name in Graphite:

```
# local metrics on computation
nuxeo.stream.computation.running{computation=$computation}
nuxeo.stream.computation.failure{computation=$computation}
nuxeo.stream.computation.skippedRecord{computation=$computation}
nuxeo.stream.computation.processRecord{computation=$computation}
nuxeo.stream.computation.processTimer{computation=$computation}

# elasticsearch service metrics timer, service in index, delete, bulkIndex, search, scroll and fetch:
nuxeo.elasticsearch.service.timer{service=service}

# cache
nuxeo.cache.*{cache=$cache}
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28639](https://jira.nuxeo.com/browse/NXP-28639)

#### Change Default Datadog Poll Intervar to 1min

The option to configure the metrics poll interval for Datadog is now `metrics.datadog.pollInterval` and default is 60 (previously `datadog.pollinterval=10`)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28760](https://jira.nuxeo.com/browse/NXP-28760)

### New Capabilities

#### Reduce the Default Number of Metrics Published by Graphite and Datadog

Reported metrics can now be filtered using a contribution, see `common-base/nxserver/config/metrics-config.xml` for the default configuration.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28696](https://jira.nuxeo.com/browse/NXP-28696)

#### Publish Datadog Metrics in UDP Instead of HTTP

It is now possible to report Datadog metrics to a local agent using UDP.
The following options need to be used:
 - `metrics.datadog.udp=true`,
 - `metrics.datadog.host`,
 - `metrics.datadog.port`,

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

## Nuxeo Streams

### Behavior Changes

#### Keystore Is Now Optional With Kafka SSL Enabled

The SSL keystore is not mandatory for all Kafka setups. Kafka can work with several security configurations independently.

The best way to infer the need for an SSL keystore is to check if its path is set up in the configuration.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27904](https://jira.nuxeo.com/browse/NXP-27904)

#### Namespaces for Stream and Consumer Group Names Stream and Consumer Group Names Have Changed

To upgrade:
1. Wait for any asynchronous processing to be done, there must be no activity and no error,
2. Stop the Nuxeo cluster,
3. Drop the entire Kafka topics or Chronicle Queue directory,
4. Upgrade the Nuxeo cluster, streams will be created with new names.

Note that custom code is backward compatible and will continue to work even with name without namespace, but names have been enforced and must match:
```
[A-Za-z0-9][A-Za-z0-9_]*
```
or you get:
```
IllegalArgumentException: Invalid name without namespace: 'foo.bar'
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28877](https://jira.nuxeo.com/browse/NXP-28877)

## WorkManager

### Behavior Changes

#### StreamWorkManager Workaround for Large Work

The wrongly named class `LogConfigDescriptor.StreamDescriptor` has been renamed to `LogConfigDescriptor.LogDescriptor`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26691](https://jira.nuxeo.com/browse/NXP-26691)

## Customization

### New Capabilities

#### Allow Global Disabling of Schemas, Like Files

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

To disable a facet, for instance Versionable, use a contribution like:
 `<require>org.nuxeo.ecm.core.CoreExtensions</require>
  <extension target="org.nuxeo.ecm.core.schema.TypeService" point="doctype">
    <facet name="Versionable" enabled="false" />
  </extension>`
Of course the `<require>` line must reflect the actual component that declares the facet that one wants to disable.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27873](https://jira.nuxeo.com/browse/NXP-27873)

## Query

### New Capabilities

#### Add a NOW Expression in NXQL

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

## Scheduler

### New Capabilities

#### Configure SchedulerService Initialization Timeout

In cluster mode, the scheduler service is initialized non-concurrently in a cluster-wide critical section.

When a cluster node attempts to initialize the scheduler service and another node is already doing the same thing, it will wait for 1 min for the cluster-wide lock to be released and do its own initialization. If this timeout expires, then initialization fails with an exception.
The following two nuxeo.conf property can be used to change this timeout:
```
org.nuxeo.scheduler.cluster.start.duration=1m
```

In case where there's a startup crash while a lock is held, it may be necessary to manually cleanup the key/value store of its locks. The key corresponding to the lock is `nuxeo:cluster:start-scheduler`.

For a MongoDB key/value store, the key is stored in the collection `kv.cluster`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28558](https://jira.nuxeo.com/browse/NXP-28558)

## Download Service

### New Capabilities

#### Refactor DownloadService.downloadBlob to Use Builder Pattern

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

### Web UI - Take Into Account the Commentable Facet

Comments will only be available for document with the Commentable facet.

Note that on 10.10, this check will only be done when setting the `org.nuxeo.web.ui.enforceCommentable` conf property to true:
```
<require>org.nuxeo.web.ui.properties.contrib</require>
<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
  <property name="org.nuxeo.web.ui.enforceCommentable">true</property>
</extension>
```
to avoid a breaking change.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27963](https://jira.nuxeo.com/browse/NXP-27963)

### Web UI - Leverage Validation Report Client Side and Allow Async Layout Validation

- Layout validate method can now return a Promise in which case it must resolve to true to validate the layout.
- Server-side schema constraint violations are now reported at the top of the create and edit form layout.
- Server-side, you can now trigger a global validation error by throwing the following exception:
```
throw new DocumentValidationException("your.error.message");
```

in a synchronous listener on **aboutToCreate** or **beforeDocumentModification**. Note that your listener must bubble the exception to prevent the creation or modification. The error message of the exception will be translated Web UI (client) side and reported at the top of the create or edit form.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27982](https://jira.nuxeo.com/browse/NXP-27982)

### Web UI - Integrate Spreadsheet App Code in Nuxeo-Spreadsheet Web UI Addon

Nuxeo Spreadsheet is no longer a marketplace package, it is bundled with Web UI behind a feature flag.
To enable Nuxeo Spreadsheet the new configuration property `org.nuxeo.web.ui.spreadsheet.enabled` should be set to `true`:
`<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="org.nuxeo.web.ui.spreadsheet.enabled">true</property>
</extension>`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27416](https://jira.nuxeo.com/browse/NXP-27416)

### Web UI - Fix Selection Toolbar in Ordered Folders

Content distributed to "selectionActions" slot in `<nuxeo-results>` is no longer wrapped with a `<nuxeo-actions-menu>`. When overriding the default content be sure to wrap the actions or the `<nuxeo-slot>` with a `<nuxeo-actions-menu>` if you want to keep previous behavior.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28977](https://jira.nuxeo.com/browse/NXP-28977)

### Web UI - Allow using automation API in nuxeo-page-provider

This introduces a new Web UI configuration property `org.nuxeo.web.ui.pageprovider.method`
which by default is `GET` but can be changed to `POST`, in which case search requests will leverage the Automation API.
```
<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
  <property name="org.nuxeo.web.ui.pageprovider.method">POST</property>
</extension>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29126](https://jira.nuxeo.com/browse/NXP-29126)

## Miscellaneous

### Behavior Changes

#### Move RequestContext and RequestContextFilter to `nuxeo-platform-web-common`

`RequestContext` and `RequestContextFilter` have been moved from WebEngine to `nuxeo-platform-web-common`.

They have to be imported from `org.nuxeo.ecm.platform.web.common.RequestContext` and `org.nuxeo.ecm.platform.web.common.RequestCleanupHandler` (they were previously under `org.nuxeo.ecm.webengine.jaxrs.context`).

Maven dependency to add:

```
<dependency>
  <groupId>org.nuxeo.ecm.platform</groupId>
  <artifactId>nuxeo-platform-web-common</artifactId>
</dependency>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26710](https://jira.nuxeo.com/browse/NXP-26710)

#### Fix Collections Drawer Refresh When Trashing/Restoring a Collection

The `nuxeo-documents-untrashed` event payload is now consistent with the other similar event payloads and, instead of having only documents uids, contains the complete documents.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28902](https://jira.nuxeo.com/browse/NXP-28902)

#### Quota Exception Not Raised When Version Is Incremented

Behavior of quota computation and check has changed for versioning.

Now we compute and check the quotas on the `aboutToCheckIn` event instead of computing the quotas on the `documentCheckedIn` one and checking the quotas on the `documentCheckedOut` one.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26841](https://jira.nuxeo.com/browse/NXP-26841)

#### Fix Retrieval of Personal Workspace for User With Special Characters

Retrieving a User Workspace through UserWorkspaceService requires that the user (NuxeoPrincipal) exists in the Nuxeo Platform.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26003](https://jira.nuxeo.com/browse/NXP-26003)

#### Don't Do Orphan Versions Cleanup by Default

Orphan versions cleanup is now disabled by default, and can be re-enabled (if its performance is acceptable) by doing:
```
<require>org.nuxeo.ecm.core.orphanVersionsCleanup</require>
  <extension point="listener" target="org.nuxeo.ecm.core.event.EventServiceComponent">
    <listener name="orphanVersionsCleanup" enabled="true" />
</extension>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24819](https://jira.nuxeo.com/browse/NXP-24819)

#### Fix Some Nuxeo Maven Groups

Old groupId:artifactId --> new groupId:artifactId for the following maven modules:
 - `org.nuxeo:nuxeo-dmk-adaptor` --> `org.nuxeo.ecm.platform:nuxeo-dmk-adaptor`
 - `org.nuxeo:nuxeo-platform-lang-ext` --> `org.nuxeo.ecm.platform:nuxeo-platform-lang-ext`
 - `org.nuxeo:nuxeo-platform-lang-ext-incomplete` --> `org.nuxeo.ecm.platform:nuxeo-platform-lang-ext-incomplete`
 - `org.nuxeo.binary.metadata:nuxeo-binary-metadata` --> `org.nuxeo.ecm.platform:nuxeo-binary-metadata`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29046](https://jira.nuxeo.com/browse/NXP-29046)

#### Document.Lock Can Be Call Several Times for the Same User

The behavior of `AbstractSession.setLock` has been modified to meet the requirement "Document.Lock called twice should not fail".

Now if you try to lock a document locked by you, you will only get your original lock.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24359](https://jira.nuxeo.com/browse/NXP-24359)

#### Document Path Not Available in emptyDocumentmodelCreated Event Context

`DocumentModel#getRef` behavior has changed when called on a non-saved document. Before it was always returning null, now it may return a non-null PathRef value.

If `DocumentModel#getRef` was wrongly used to test if a document is saved or not, code must be updated to rely on `DocumentModel#getId` instead.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26903](https://jira.nuxeo.com/browse/NXP-26903)

#### Upgrade to Apache PDFBox 2.0.19

The upgrade of Apache PDFBox from 1.8.16 to 2.0.19 introduces breaking changes to the library, code relying on it must be updated.

See the [Migration to PDFBox 2.0.0](https://pdfbox.apache.org/2.0/migration.html) guide.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28825](https://jira.nuxeo.com/browse/NXP-28825)

#### Upgrade to mockserver-netty 5.10.0

```
import org.mockserver.client.server.MockServerClient;
```

becomes:

```
import org.mockserver.client.MockServerClient;
```

Use try-with-resource on `MockServerClient`:

```
try {
    MockServerClient client = new MockServerClient("localhost", PORT);
    …
}
```

becomes:

```
try (MockServerClient client = new MockServerClient("localhost", PORT)) {
   …
}
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28818](https://jira.nuxeo.com/browse/NXP-28818)

### New Capabilities

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

#### Allow multiple configurations for AWSConfigurationService

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

#### Add Default Referrer-Policy Header

A new Nuxeo property `nuxeo.referrer.policy` is available to control the value of the Referrer-Policy HTTP header.

The default is:
```
nuxeo.referrer.policy=strict-origin-when-cross-origin
```

The header Referrer-Policy and its possible values are described [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29115](https://jira.nuxeo.com/browse/NXP-29115)

## Dependencies Upgrade Versions

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Component</th>
<th colspan="1">Nuxeo Platform LTS 2019</th>
<th colspan="1">Nuxeo Platform Cloud 2020</th>
</tr>
<tr>
<td colspan="1">ant-maven-assembly-plugin</td>
<td colspan="1">2.1.2</td>
<td colspan="1">2.1.3</td>
</tr>
<tr>
<td colspan="1">Apache HttpComponents</td>
<td colspan="1">4.5.6</td>
<td colspan="1">4.5.11</td>
</tr>
<tr>
<td colspan="1">Apache HttpCore</td>
<td colspan="1">4.4.10</td>
<td colspan="1">4.4.13</td>
</tr>
<tr>
<td colspan="1">ASM</td>
<td colspan="1">6.2.1</td>
<td colspan="1">7.3.1</td>
</tr>
<tr>
<td colspan="1">assertj-core</td>
<td colspan="1">3.8.0</td>
<td colspan="1">3.14.0</td>
</tr>
<tr>
<td colspan="1">avro</td>
<td colspan="1">1.8.2</td>
<td colspan="1">1.9.2</td>
</tr>
<tr>
<td colspan="1">AWS SDK</td>
<td colspan="1">1.11.516</td>
<td colspan="1">1.11.738</td>
</tr>
<tr>
<td colspan="1">Axiom</td>
<td colspan="1">1.2.20</td>
<td colspan="1">1.2.22</td>
</tr>
<tr>
<td colspan="1">Batik</td>
<td colspan="1">1.10</td>
<td colspan="1">1.12</td>
</tr>
<tr>
<td colspan="1">BouncyCastle</td>
<td colspan="1">1.60</td>
<td colspan="1">1.64</td>
</tr>
<tr>
<td colspan="1">bsh</td>
<td colspan="1">2.0b1</td>
<td colspan="1">2.0b4</td>
</tr>
<tr>
<td colspan="1">cglib-nodep</td>
<td colspan="1">2.2.2</td>
<td colspan="1">3.3.0</td>
</tr>
<tr>
<td colspan="1">chronicle</td>
<td colspan="1">2.17.92</td>
<td colspan="1">2.17.465</td>
</tr>
<tr>
<td colspan="1">Commons Codec</td>
<td colspan="1">1.11</td>
<td colspan="1">1.14</td>
</tr>
<tr>
<td colspan="1">Commons Collections</td>
<td colspan="1">4.1</td>
<td colspan="1">4.4</td>
</tr>
<tr>
<td colspan="1">Commons CSV</td>
<td colspan="1">1.5</td>
<td colspan="1">1.7</td>
</tr>
<tr>
<td colspan="1">Commons Fileupload</td>
<td colspan="1">1.3.3</td>
<td colspan="1">1.4</td>
</tr>
<tr>
<td colspan="1">Commons Lang3</td>
<td colspan="1">3.8</td>
<td colspan="1">3.9</td>
</tr>
<tr>
<td colspan="1">Commons Pool2</td>
<td colspan="1">2.6.0</td>
<td colspan="1">2.8.0</td>
</tr>
<tr>
<td colspan="1">Commons Text</td>
<td colspan="1">1.4</td>
<td colspan="1">1.8</td>
</tr>
<tr>
<td colspan="1">Commons VFS2</td>
<td colspan="1">2.2</td>
<td colspan="1">2.6.0</td>
</tr>
<tr>
<td colspan="1">CORS Filter</td>
<td colspan="1">2.6</td>
<td colspan="1">2.8</td>
</tr>
<tr>
<td colspan="1">dependency-check-maven</td>
<td colspan="1">3.3.2</td>
<td colspan="1">5.2.4</td>
</tr>
<tr>
<td colspan="1">dnsjava</td>
<td colspan="1">2.1.8</td>
<td colspan="1">2.1.9</td>
</tr>
<tr>
<td colspan="1">dom4j</td>
<td colspan="1">1.6.1</td>
<td colspan="1">2.1.1</td>
</tr>
<tr>
<td colspan="1">Dumbster</td>
<td colspan="1">1.6</td>
<td colspan="1">1.7</td>
</tr>
<tr>
<td colspan="1">ESAPI</td>
<td colspan="1">2.1.0.1</td>
<td colspan="1">2.2.0.0</td>
</tr>
<tr>
<td colspan="1">fast-classpath-scanner</td>
<td colspan="1">2.0.4</td>
<td colspan="1">ClassGraph 4.8.60</td>
</tr>
<tr>
<td colspan="1">freemarker</td>
<td colspan="1">2.3.28</td>
<td colspan="1">2.3.29</td>
</tr>
<tr>
<td colspan="1">Gatling</td>
<td colspan="1">2.3.1</td>
<td colspan="1">3.3.1</td>
</tr>
<tr>
<td colspan="1">Gatling plugin</td>
<td colspan="1">2.2.4</td>
<td colspan="1">3.0.4</td>
</tr>
<tr>
<td colspan="1">Guava</td>
<td colspan="1">26.0</td>
<td colspan="1">28.2</td>
</tr>
<tr>
<td colspan="1">ICU4J</td>
<td colspan="1">62.1</td>
<td colspan="1">65.1</td>
</tr>
<tr>
<td colspan="1">ISOParser</td>
<td colspan="1">1.9.27</td>
<td colspan="1">1.9.41</td>
</tr>
<tr>
<td colspan="1">Jackrabbit</td>
<td colspan="1">2.17.5</td>
<td colspan="1">2.20.0</td>
</tr>
<tr>
<td colspan="1">Jackson</td>
<td colspan="1">2.9.10</td>
<td colspan="1">2.10.2</td>
</tr>
<tr>
<td colspan="1">jacoco-maven-plugin</td>
<td colspan="1">0.8.1</td>
<td colspan="1">0.8.2</td>
</tr>
<tr>
<td colspan="1">JAI</td>
<td colspan="1">1.1.2_01</td>
<td colspan="1">1.1.3</td>
</tr>
<tr>
<td colspan="1">jansi</td>
<td colspan="1">1.17.1</td>
<td colspan="1">1.18</td>
</tr>
<tr>
<td colspan="1">javassist</td>
<td colspan="1">3.21.0-GA</td>
<td colspan="1">3.26.0-GA</td>
</tr>
<tr>
<td colspan="1">Java JWT</td>
<td colspan="1">3.4.0</td>
<td colspan="1">3.9.0</td>
</tr>
<tr>
<td colspan="1">javax.json</td>
<td colspan="1">1.1.2</td>
<td colspan="1">1.1.4</td>
</tr>
<tr>
<td colspan="1">javax.mail:mail </td>
<td colspan="1">1.4.5</td>
<td colspan="1">1.4.7</td>
</tr>
<tr>
<td colspan="1">Javax transaction</td>
<td colspan="1">1.1</td>
<td colspan="1">1.3</td>
</tr>
<tr>
<td colspan="1">jaxen</td>
<td colspan="1">1.1.6</td>
<td colspan="1">1.2.0</td>
</tr>
<tr>
<td colspan="1">JClouds</td>
<td colspan="1">2.1.1</td>
<td colspan="1">2.2.0</td>
</tr>
<tr>
<td colspan="1">Jettison</td>
<td colspan="1">1.3.7</td>
<td colspan="1">1.4.0</td>
</tr>
<tr>
<td colspan="1">JGiven</td>
<td colspan="1">0.16.0</td>
<td colspan="1">0.18.2</td>
</tr>
<tr>
<td colspan="1">JMock</td>
<td colspan="1">2.8.4</td>
<td colspan="1">2.12.0</td>
</tr>
<tr>
<td colspan="1">joda-time</td>
<td colspan="1">2.9.2</td>
<td colspan="1">2.10.5</td>
</tr>
<tr>
<td colspan="1">Jolokia</td>
<td colspan="1">1.3.3</td>
<td colspan="1">1.6.2</td>
</tr>
<td colspan="1">json-simple</td>
<td colspan="1">1.1</td>
<td colspan="1">1.1.1</td>
</tr>
<tr>
<td colspan="1">JSONAssert</td>
<td colspan="1">1.2.3</td>
<td colspan="1">1.5.0</td>
</tr>
<tr>
<td colspan="1">junit</td>
<td colspan="1">4.12</td>
<td colspan="1">4.13</td>
</tr>
<tr>
<td colspan="1">Jxls</td>
<td colspan="1">jxls 1.0.6-NX01</td>
<td colspan="1">jxls 1.0.6-NX02, jxls2 2.8.0</td>
</tr>
<tr>
<td colspan="1">Log4j</td>
<td colspan="1">2.11.1</td>
<td colspan="1">2.13.0</td>
</tr>
<tr>
<td colspan="1">maven-compiler-plugin</td>
<td colspan="1">3.1</td>
<td colspan="1">3.8.0</td>
</tr>
<tr>
<td colspan="1">maven-dependency-analyzer</td>
<td colspan="1">1.11.0</td>
<td colspan="1">1.11.1</td>
</tr>
<tr>
<td colspan="1">maven-dependency-plugin</td>
<td colspan="1">2.10</td>
<td colspan="1">5.2.4</td>
</tr>
<tr>
<td colspan="1">maven-shade-plugin</td>
<td colspan="1">3.1.1</td>
<td colspan="1">3.2.1</td>
</tr>
<tr>
<td colspan="1">mockserver-netty</td>
<td colspan="1">3.10.4</td>
<td colspan="1">5.10.0</td>
</tr>
<tr>
<td colspan="1">Metrics</td>
<td colspan="1">4.0.3</td>
<td colspan="1">Metrics5 5.0.0-rc3</td>
</tr>
<tr>
<td colspan="1">metrics-datadog</td>
<td colspan="1">1.0.2</td>
<td colspan="1">2.0.0-RC1</td>
</tr>
<tr>
<td colspan="1">MongoDB Java Driver</td>
<td colspan="1">3.8.1</td>
<td colspan="1">3.12.1</td>
</tr>
<tr>
<td colspan="1">Mongo quartz</td>
<td colspan="1">2.0.0-NX3</td>
<td colspan="1">2.1.0-NX1</td>
</tr>
<tr>
<td colspan="1">MVEL</td>
<td colspan="1">2.4.2.Final</td>
<td colspan="1">2.4.5.Final</td>
</tr>
<tr>
<td colspan="1">mysql-connector-java</td>
<td colspan="1">8.0.13</td>
<td colspan="1">8.0.19</td>
</tr>
<tr>
<td colspan="1">onedrive</td>
<td colspan="1">1.0</td>
<td colspan="1">2.0</td>
</tr>
<tr>
<td colspan="1">OpenPDF</td>
<td colspan="1">1.2.1</td>
<td colspan="1">1.3.12</td>
</tr>
<tr>
<td colspan="1">PDFBox</td>
<td colspan="1">1.8.16</td>
<td colspan="1">2.0.19</td>
</tr>
<tr>
<td colspan="1">pdf-html</td>
<td colspan="1">1.2.1</td>
<td colspan="1">1.2.16</td>
</tr>
<tr>
<td colspan="1">POI</td>
<td colspan="1">3.17</td>
<td colspan="1">4.1.2</td>
</tr>
<tr>
<td colspan="1">PostgreSQL Java Driver</td>
<td colspan="1">42.2.5</td>
<td colspan="1">42.2.9</td>
</tr>
<tr>
<td colspan="1">quartz</td>
<td colspan="1">2.3.0</td>
<td colspan="1">2.3.2</td>
</tr>
<tr>
<td colspan="1">Restlet</td>
<td colspan="1">2.4.1</td>
<td colspan="1">2.4.2</td>
</tr>
<tr>
<td colspan="1">scala-maven-plugin</td>
<td colspan="1">3.3.2</td>
<td colspan="1">4.3.1</td>
</tr>
<tr>
<td colspan="1">SLF4J</td>
<td colspan="1">1.7.21</td>
<td colspan="1">1.7.30</td>
</tr>
<tr>
<td colspan="1">snakeyaml</td>
<td colspan="1">1.21</td>
<td colspan="1">1.25</td>
</tr>
<tr>
<td colspan="1">stax-ex</td>
<td colspan="1">1.7.8</td>
<td colspan="1">1.8.2</td>
</tr>
<tr>
<td colspan="1">Surefire</td>
<td colspan="1">2.22.0</td>
<td colspan="1">2.22.2</td>
</tr>
<tr>
<td colspan="1">Wink Client</td>
<td colspan="1">1.3.0</td>
<td colspan="1">1.4</td>
</tr>
<tr>
<td colspan="1">xerces</td>
<td colspan="1">2.12.0</td>
<td colspan="1">2.12.0-nx1</td>
</tr>
<tr>
<td colspan="1">XBean Naming</td>
<td colspan="1">3.18</td>
<td colspan="1">4.15</td>
</tr>
<tr>
<td colspan="1">Xmlbeans</td>
<td colspan="1">3.0.1</td>
<td colspan="1">3.1.0</td>
</tr>
<tr>
<td colspan="1">XOM</td>
<td colspan="1">1.2.5</td>
<td colspan="1">1.3.2</td>
</tr>
<tr>
<td colspan="1">XStream</td>
<td colspan="1">1.4.11</td>
<td colspan="1">1.4.11.1</td>
</tr>
<tr>
<td colspan="1">webdav-jaxrs</td>
<td colspan="1">1.2.1</td>
<td colspan="1">1.2.1-nx1</td>
</tr>
</tbody>
</table>
</div>

## Complementary Information

- [Release notes for Nuxeo Cloud Platform 2020]({{page version='' space='nxdoc' page='nuxeo-server-release-notes'}})
