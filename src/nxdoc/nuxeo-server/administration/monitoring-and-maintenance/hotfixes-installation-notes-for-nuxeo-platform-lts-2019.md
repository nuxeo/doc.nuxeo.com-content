---
title: Hotfixes Installation Notes for Nuxeo Platform LTS 2019
review:
    comment: ''
    date: '2020-11-18'
    status: ok
labels:
    - lts2017-ok
    - multiexcerpt-include
toc: true
tree_item_index: 1200
version_override:
    LTS 2017: 910/nxdoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2017
    LTS 2016: 810/nxdoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2016
    LTS 2015: 710/admindoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2015
    '6.0': 60/admindoc/hotfixes-installation-notes-for-nuxeo-platform-60
---

The purpose of this page is to describe the additional actions that need to be done when installing the hotfixes on Nuxeo Platform and that cannot be done automatically. The page provides an exhaustive list of manipulations for the installation of Nuxeo Platform LTS 2019 hotfixes, but you need only to apply those relevant for your own instance.

{{{multiexcerpt 'intro_hotfix' page='ADMINDOC710:Hotfixes Installation Notes for Nuxeo Platform LTS 2015'}}}

{{#> callout type='warning' }}
While installing hotfixes, you will see the following message, but you can ignore it and continue.  
```
Use of the <copy /> command on JAR files is not recommended, prefer using <update /> command to ensure a safe rollback. (nuxeo-launcher-9.10-HF01-jar-with-dependencies.jar)
```
{{/callout}}

## Instance Registration

Hotfixes released for LTS 2019 can only be used on valid, registered Nuxeo instances.

**Why?** </br>
If you are using an *unregistered LTS 2019 Nuxeo instance with hotfixes installed*, you may encounter the following behavior:
- A warning will be displayed in the logs during startup,

```
ERROR [RuntimeService] NUXEO INSTANCE NOT REGISTERED

***** This Nuxeo instance is not registered *****
It can only be used for development and will be stopped if used in production
```
- Over a certain level of use the server will be stopped automatically. When this happens, a message is displayed in the logs to inform you as well.

```
ERROR [RuntimeService] NUXEO INSTANCE STOPPING

***** This Nuxeo instance is not registered *****
Stopping Nuxeo instance due to threshold exceeded (TOTAL_COMMITS > 100000) after failed registration checks
```
The current limits of use are:
- 100,000 transaction commits
- 10 concurrent sessions (a session correspond to an access to the core)

If the expiration date is close (less than 15 days), a warning will be displayed and indicate how many days are left before expiration.
In the JSF UI, a message based on the Administrative message mechanism will be displayed: all users will be informed.

After expiration date, the following message will be displayed in the logs at startup:
```
ERROR [RuntimeService] NUXEO INSTANCE REGISTRATION EXPIRED

***** This Nuxeo instance registration is expired *****
It can only be used for development and will be stopped if used in production
```

The following message will be displayed in the logs when Nuxeo will be stopped automatically according to the same conditions as described earlier:
```
ERROR [RuntimeService] NUXEO INSTANCE STOPPING

***** This Nuxeo instance registration is expired *****
Stopping Nuxeo instance due to threshold exceeded (TOTAL_COMMITS > 100000) after registration expiration
```

**How Can I Avoid This?** </br>

Make sure to [register your Nuxeo instance]({{page version='810' space='nxdoc' page='registering-your-nuxeo-instance'}}): this can be done both for online and offline instances.

**Could it Break My CI Chain? Do I Need to Register My Test Instances?** </br>

The level of use needed  to stop an *unregistered instance with hotfixes* has been tuned to prevent any problems with CI chain tests. It would be possible to run the full test suite of Nuxeo server (both unit tests AND integration tests) several times before anything would happen.

Nevertheless, it is recommended to register your test instances, especially if you wish to test features that require heavy usage (e.g. load testing or mass import).

**How Often Do I Need to Register My Instance?** </br>

{{#> callout type='warning' }}
Registration tokens are valid until your current contract's expiration date. When renewing your Nuxeo Online Services subscription, you should register your instances again.
{{/callout}}

**I Have More Questions, Who Can I Ask For Help?** </br>

If you have any questions, feel free to contact our support team via a dedicated support ticket.

## Hotfix 34

### SameSite Attribute

A new configuration property `nuxeo.server.cookies.sameSite` is added to allow setting the same site cookie policy.

In 10.10 this property is unset by default so we don't introduce a breaking change but in newer versions the default value is `strict`.</br>
When setting the same site cookie policy to `none`, to allow sending cookies cross origin, these will be automatically set to be secure since this is a requirement and as such the server needs to use https.

This change brings a breaking change for configuration where the context path has been changed. In this configuration, the file `templates/common-base/conf/Catalina/localhost/nuxeo.xml.nxftl` has been replaced by a file whose name corresponds to the new context path. The hotfix 34 embeds a new version of `nuxeo.xml.nxftl`, so the replacement must be done again.</br>
And the file `conf/Catalina/localhost/nuxeo.xml` must be removed if the error `NuxeoException: Cannot register standby command` is thrown during the startup.

### Improved Showconf

`nuxeoctl showconf` output now dumps the full effective configuration of a Nuxeo Server. Please read the description of [NXP-29729](https://jira.nuxeo.com/browse/NXP-29729) for more details.

## Hotfix 32

### ACL on Versions

A new configuration property `org.nuxeo.version.acl.disabled` controls whether ACLs on versions are disabled. Setting it to true disables all use of ACLs on versions for permission checks. The value `legacy` is also possible, to disable for direct access but enable for queries.

This code allows to set ACL on versions:
```
  <require>org.nuxeo.ecm.core.versioning.config</require>
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="org.nuxeo.version.acl.disabled">false</property>
  </extension>
```
The  default behavior in 10.10 is unchanged from before for compatibility: `legacy` is used.

### ReadVersion Permission

[NXP-28370](https://jira.nuxeo.com/browse/NXP-28370) introduces a new behavior around the access to Version documents. Please read its description carefully to understand the changes.

The new configuration property `org.nuxeo.version.readversion.disabled` controls whether the `ReadVersion` permission is disabled. The behavior in 10.10 is unchanged from before for compatibility: `true` is used.

To enable the new behavior, use this contribution:
```
  <require>org.nuxeo.ecm.core.versioning.config</require>
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="org.nuxeo.version.readversion.disabled">false</property>
  </extension>
```

### Bypass Allowed Subtype Check

Since 10.10-HF32, the allowed subtype check, done by the FileManager, can be bypassed using this code:
```
FileImporterContext.builder(coreSession, blob, parentpath)
        .bypassAllowedSubtypeCheck(true)
        .build();
```

## Hotfix 31

### Direct Upload with SSE-KMS Enabled on S3 Buckets

The hotfix 31 introduces a new configuration property to setup SSE/KMS on the transient bucket for direct upload:
```
nuxeo.s3storage.transient.crypt.kms.key=<sse-kms-key-id>
```

### S3 Direct Upload of 5+ GB files

The upload of very large files (> 5GB) requires to use an arbitrary key, instead of the digest computed by S3, as S3 is not computed any digest for these large files.

In order to be able to use arbitrary file keys generated either by the provider or by a trusted upload client, the new `S3BlobProvider` must be used and the key strategy should be set to `managed` (default key strategy is `digest`). Use these properties in your `nuxeo.conf`:

```
nuxeo.core.binarymanager=org.nuxeo.ecm.blob.s3.S3BlobProvider
nuxeo.core.blobstore.keyStrategy=managed
```

### Import of MHTML Files

The import of MHTML files requires to disable the Multipart handling.  
So a new parameter `nuxeo.batch.upload.multipart.disabled` has been added to the `ConfigurationService` to allow disabling multipart upload since streaming is now the way to go.

You can use this contribution to set this new behavior:
```
<require>"org.nuxeo.ecm.platform.restapi.server.properties.batch.upload"</require>
<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
  <property name="nuxeo.batch.upload.multipart.disabled">true</property>
</extension>
```

## Hotfix 25

### Optimized MongoDB IDs

[NXP-28763](https://jira.nuxeo.com/browse/NXP-28763) brings the option to use smaller document IDs in MongoDB. Such smaller IDs will give smaller database size but more importantly, smaller index sizes.

Deploy the following XML configuration to use optimized IDs:
```
  <require>default-repository-config</require>
  <extension target="org.nuxeo.ecm.core.storage.mongodb.MongoDBRepositoryService" point="repository">
    <repository name="default">
      <idType>sequenceHexRandomized</idType>
      <nativeId>true</nativeId>
    </repository>
  </extension>
  ```

## Hotfix 23

### Unique Index on ecm:id in MongoDB

[NXP-28406](https://jira.nuxeo.com/browse/NXP-28406) adds the management of duplicates in MongoDB. For already initialized database, it requires to add a unique index on the field `ecm:id`.</br>
Run this command to check if an index, non unique, is already set for this field:
```
db.default.getIndexes().forEach(function(idx) {
  if (idx.key['ecm:id'] && !idx.unique) {
    printjson(idx.name)
  }
})
```
Then remove this index with:
```
db.default.dropIndex({"ecm:id": 1})
```

Note that, adding the unique index will fail if the database contains duplicates. </br>
This command helps to find the duplicates:
```
db.default.aggregate(
     {"$group": {"_id": "$ecm:id", "count": {"$sum": 1}, objectids: {$addToSet: "$_id"}}},
     {"$match": {"count": {"$gt": 1}}},
     {"$project": {"ecm:id": "$_id", "objectids": "$objectids", "_id": 0}}
)
```
Run the following command to remove a duplicated document:</br>
(Caution: you must keep **one** object with a given ecm:id)
```
db.default.remove({"_id": ObjectId(".......")})
```

To manually create the index, run:
```
db.default.createIndex({"ecm:id": 1}, {unique: true, background: true})
```

### AJP Connector in Tomcat

For security reasons (CVE-2020-1938), AJP is now disabled by default. To re-enabled it, the following properties must be defined:
```
nuxeo.server.ajp.enabled=true
nuxeo.server.ajp.secretRequired=true
nuxeo.server.ajp.secret=changeme
```

The secret must also be mentioned in the `mod_proxy_ajp` configuration, see https://httpd.apache.org/docs/trunk/mod/mod_proxy_ajp.html for more.

If one is sure that the AJP port cannot be accessed by any untrusted hosts, then the following configuration is possible:
```
nuxeo.server.ajp.enabled=true
nuxeo.server.ajp.secretRequired=false
```

### Concurrent Repository and Direction Initialization With Multiple Nuxeo Nodes

In cluster mode, the document repository and the directories are initialized non-concurrently in a cluster-wide critical section.

When a cluster node attempts to initialize its repository (or a directory), and another node is already doing the same thing, it will wait for 1 min for the cluster-wide lock to be released and do its own initialization. If this timeout expires, then initialization fails with an exception.

The following two `nuxeo.conf` properties can be used to change this timeout:
```
org.nuxeo.repository.cluster.start.duration=1m
org.nuxeo.directory.cluster.start.duration=1m
```

In case where there is a startup crash while a lock is held, it may be necessary to manually cleanup the key/value store of its locks. The keys corresponding to the locks are visible when using Redis with `KEYS nuxeo:cluster:*`, for instance:</br>
`nuxeo:cluster:start-repository-default`</br>
or</br>
`nuxeo:cluster:start-directories`.

For a MongoDB key/value store, the keys are stored in the collection `kv.cluster`

### Concurrent Scheduler Service Initialization With Multiple Nuxeo Nodes

In cluster mode, the scheduler service is initialized non-concurrently in a cluster-wide critical section.

When a cluster node attempts to initialize the scheduler service and another node is already doing the same thing, it will wait for 1 min for the cluster-wide lock to be released and do its own initialization. If this timeout expires, then initialization fails with an exception.

The following two `nuxeo.conf` property can be used to change this timeout:
```
org.nuxeo.scheduler.cluster.start.duration=1m
```

In case where there is a startup crash while a lock is held, it may be necessary to manually cleanup the key/value store of its locks. The key corresponding to the lock is `nuxeo:cluster:start-scheduler`. For a MongoDB key/value store, the key is stored in the collection `kv.cluster`.

### S3 Direct Upload Compatible with S3-like Storage

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
Note that, path-style access is incompatible with accelerate mode ([NXP-27657](https://jira.nuxeo.com/browse/NXP-27657)), see S3 documentation.

### S3 Transfer Acceleration

The S3 connector now has new `nuxeo.conf` parameters to configure S3 accelerate mode:
```
nuxeo.s3storage.accelerateMode (default false)
nuxeo.s3storage.transient.accelerateMode (default false) (for direct upload)
```

For example:
```
nuxeo.s3storage.accelerateMode=true
nuxeo.s3storage.transient.accelerateMode=true
```

Note that, accelerate mode is incompatible with path-style access ([NXP-28526](https://jira.nuxeo.com/browse/NXP-28526)), see S3 documentation.

### New S3 Blob Provider Implementation

HF21 introduced a new S3 Blob storage. It's possible to switch to this new implementation by adding this line to your `nuxeo.conf`:

```
nuxeo.core.binarymanager=org.nuxeo.ecm.blob.s3.S3BlobProvider
```

### S3BinaryManager Cleanup

The startup process that cleans up old (> 1 day) S3 multipart uploads can be disabled by setting this `nuxeo.conf` property:
```
nuxeo.s3storage.multipart.cleanup.disabled=true
```

### Nuxeo Stream Latency Metrics in Datadog

Nuxeo Stream metrics about consumer lags and latencies can now be exposed to Datadog using `stream.sh` command:
```
./bin/stream.sh datadog -k --codec avro -l ALL -i 60 --api-key <DATADOG_API_KEY> --tags "staging:foo,project:bar"
```

The list of exposed metrics are:
```
    nuxeo.streams.lag: the lag of the consumer for the stream, in records.
    nuxeo.streams.latency: the latency of the consumer for the stream in microsecond.
    nuxeo.streams.pos: the last checkpointed position of the consumer in the stream, in record.
    nuxeo.streams.end: the end offset of a stream, in record.
```

The additional Datadog tags are:
```
    stream: the name of the stream
    consumer: the name of the consumer group
    partition: Either "all" for an aggregated metric or a number for a specific partition
    host: the host name that has reported the metric (should not be useful because metrics are global to the cluster)
```

### Glacier Low-Level Implementation

The hotfix 23 adds new APIs:
```
    BlobProvider.updateBlob(BlobUpdateContext) can now use a BlobUpdateContext.withRestoreForDuration(Duration)
    BlobProvider.getStatus(ManagedBlob) -> BlobStatus
        BlobStatus.getStorageClass()
        BlobStatus.isDownloadable()
        BlobStatus.getDownloadableUntil() -> Instant
```

### Disable HTTP Proxy for S3 Connections

To disable usage of the proxy environment variables (nuxeo.http.proxy.\*) for the connection to the S3 endpoint, defined the `nuxeo.conf` property:
```
nuxeo.s3.proxy.disabled=true
```

### Download URL

If a document blob provider is configured for direct download, it is now possible to get direct links to the final download URL (to S3 or CloudFront typically) returned in the JSON document output.

To activate this feature, the following must be configured:
```
  <require>org.nuxeo.ecm.core.io.download.DownloadService</require>
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="org.nuxeo.download.url.follow.redirect">true</property>
  </extension>
```

## Hotfix 21

{{#> callout type='warning' }} This hotfix brings data model changes. To apply it to your database, one node of your Nuxeo cluster *must* be started with the property `nuxeo.vcs.ddlmode` set to `execute`. {{/callout}}

### New Implementation for S3 Blob Storage

A new blob provider `org.nuxeo.ecm.blob.s3.S3BlobProvider` is available.
It has the same configuration properties as the old `org.nuxeo.ecm.core.storage.sql.S3BinaryManager` but in addition:
- it allows configuration in record or transactional mode (see [NXP-28276](https://jira.nuxeo.com/browse/NXP-28276))
- it allows direct configuration of CloudFront (without using `CloudFrontBinaryManager`).

The CloudFront properties are:
- `cloudfront.enabled`: must be `true` to activate CloudFront
- `cloudfront.privKey`: the path to the private key
- `cloudfront.privKeyId`: the id of the private key
- `cloudfront.distribDomain`: the distribution domain
- `cloudfront.protocol`: the protocol (`http` or `https`)

### New Implementation for the Encrypted (AES) Blob Provider

A new blob provider `org.nuxeo.ecm.core.blob.AESBlobProvider` is available.

It has the same configuration properties as the old `org.nuxeo.ecm.core.blob.binary.AESBinaryManager`.

An AES key is needed to encrypt a binary. This key can be retrieved from a keystore, or generated from a password using PBKDF2 (in which case each stored file contains a different salt for security reasons).

The blob provider configuration holds the keystore information to retrieve the AES key, or the password that is used to generate a per-file key using PBKDF2.

For keystore use, the following properties are available:

- keyStoreType: the keystore type, for instance JCEKS
- keyStoreFile: the path to the keystore, if applicable
- keyStorePassword: the keystore password
- keyAlias: the alias (name) of the key in the keystore
- keyPassword: the key password

And for PBKDF2 use:
- password: the password

In addition, the following property may be specified to define where the encrypted blobs are stored:
- path: the filesystem path for the storage (if relative, under `nxserver/data`). The default is binaries.

For backward compatibility, the encryption properties can also be included in the `<property name="key">prop1=value1,prop2=value2,...</property>` of the blob provider configuration.

### Retention Capabilities

The notion of a document being a record is added. The notion of retention date and legal hold is added to records. Once a document is a record, this is forever. Copies of records (including versions) are not initially records.

When a record has a legal hold or has a retention date in the future, modification or deletion of the main blob (`[file:content|file:///content]`) is prevented, even indirectly through removal of the document or of an ancestor, even for Administrators.

The following APIs are added:
 - `CoreSession.makeRecord(doc)`</br>
 Only for users with permission `MakeRecord`.</br>
 A record can never be set back to non-record (there is no unmakeRecord() API).</br>
 When a document is turned into a record, the document blob manager will take care of unsharing the blob and moving it to the record blob provider.
 - `CoreSession.isRecord(doc)`
 - `CoreSession.setRetainUntil(doc, datetime)`</br>
 Only for users with permission `SetRetention`.</br>
 A special `CoreSession.RETAIN_UNTIL_INDETERMINATE` value is also available.</br>
 The retention date can only be increased, except if it was indeterminate, in which case it can be set to an actual date.
 - `CoreSession.getRetainUntil(doc)`
 - `CoreSession.setLegalHold(doc, boolean)`</br>
 Only for users with permission `ManageLegalHold`.</br>
 If a hold is removed and the retention has expired, a "retention expired" event will be sent (after which the document may be deleted, along with its blob, depending on high-level policies).
 - `CoreSession.hasLegalHold(doc)`
 - `CoreSession.isUnderRetentionOrLegalHold(doc)`</br>
 Convenience method doing hasLegalHold() OR getRetainUntil() > currentDate()

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

Note that NXQL does *not* have `ecm:isUnderRetentionOrLegalHold`, instead one should use `ecm:retainUntil > NOW() OR ecm:hasLegalHold = 1`.

At the storage level, VCS has 3 additional columns in the table `hierarchy`:
 - `isrecord`
 - `retainuntil`
 - `haslegalhold`

Some specific blob providers implementations can now be in "record mode":
 - `BlobProvider.isRecordMode()`

When in record mode the blob providers behave differently:
 - They are transactional (blobs aren't actually written/deleted in the underlying storage until the transaction commits, and transaction rollback is possible).
 - They don't do de-duplication, each blob is stored individually.
 - They store only one blob per document (the main blob, `[file:content|file:///content]`).
 - They can replace or delete a document's blob.
 - They have hooks to store additional metadata alongside the blob (for diagnostics/recovery).

### Tags Configuration

There is a new configuration property `nuxeo.tag.removal.on.trash.enabled` that allows to control the removal of tags when trashing documents. It is set to `true` by default.

To disable the removal of tags when trashing documents, use the following contribution:
```
<require>org.nuxeo.tag.service.properties</require>
<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
  <property name="nuxeo.tag.removal.on.trash.enabled">false</property>
</extension>
```

## Hotfix 19

### Content Model Change for Comments

A migration process is required to benefit from the new content model for comments where comments are stored under the commented document. It is mainly required if replies on comments are used in the application.

{{#> callout type='info' }}
Running this migration will break your application if you were creating comments without using the Comments API.
{{/callout}}

{{#> callout type='warning' }}
Before starting the migration process, please make sure you have the **Nuxeo JSF UI** addon installed on your platform and that your data are backed up by following the steps on the [Backup and Restore]({{page version='' space='nxdoc' page='backup-and-restore'}}) documentation page.
{{/callout}}

Administrator credentials are required to execute the steps below:
1. Once you are connected with the Admin credentials, click on the **ADMIN** Tab.
1. Click on the Migration tab and then under the `Migration of the comment storage model` section, click on `Detect` button.
1. Launch the available migration step.

If the migration succeed the new state will be displayed and the next available step too if any.

## Hotfix 15

### Probe from Nuxeo Stream

The stream probe can be added to the health check with the following contribution:
```
  <require>org.nuxeo.ecm.core.management.contribs</require>
  <extension target="org.nuxeo.ecm.core.management.CoreManagementComponent"
    point="healthCheck">
    <probe name="streamStatus" enabled="true" />
  </extension>
```

### S3 Configurable Digest

The digest algorithm to use to compute a unique key when storing blobs in S3, can now be configured in `nuxeo.conf`:
```
nuxeo.s3storage.digest=SHA-256
```

Or, if a full XML configuration is used (necessary if there are several different S3 blob providers):
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

The default is MD5. The valid digest algorithms are those available to the Java runtime, the standard ones are listed [here for Java 8](https://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#MessageDigest) and [here for Java 11](https://docs.oracle.com/en/java/javase/11/docs/specs/security/standard-names.html#messagedigest-algorithms).

## Hotfix 13

### Performance Improvement to Load User Entities

It's possible to configure the Nuxeo Platform so that `UserManagerResolver` will marshal User entities without fetching their references (by default, only groups are referenced). User entities are mainly used by the ACL enricher and metadata whose type is User. Enabling this behavior will improve the duration to load the Permissions tab and Content views which display the creator or the contributors (or custom User metadata).

To enable this behavior, use the following code:
```
  <require>org.nuxeo.ecm.platform.usermanager.properties</require>
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="nuxeo.usermanager.resolver.fetchReferences">false</property>
  </extension>
```

### Global Disabling of Facets

To disable a facet, for instance `Versionable`, use a contribution like:
```
  <require>org.nuxeo.ecm.core.CoreExtensions</require>
  <extension target="org.nuxeo.ecm.core.schema.TypeService" point="doctype">
    <facet name="Versionable" enabled="false" />
  </extension>
```
The `<require>` line must reflect the actual component that declares the facet that one wants to disable. Use [Platform Explorer](http://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform%20LTS%202019-10.10/viewExtensionPoint/org.nuxeo.ecm.core.schema.TypeService--doctype) to find the component which declares the facet you want to disable.

## Hotfix 08

### Underscore Character in LDAP Queries

The `UserManager.searchUsers(pattern)` and` UserManager.searchGroups(pattern)` APIs can now interpret the pattern as a generic string with arbitrary characters that will be matched exactly (depending on the directory substring match style).

The compatibility with previous versions is enabled by default, and a pattern with % and _ is interpreted as LIKE escapes.

To disable the compatibility mode and allow the underscore character, use the following contribution:
```
<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
  <property name="nuxeo.usermanager.search.escape.compat">false</property>
</extension>
```

### Secured Properties

The following dublincore properties are now secured from edition:
* dc:created
* dc:modified
* dc:creator
* dc:lastContributor
* dc:contributors

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
```
You can also relax the constraint on a secured property, for example dc:creator with:
```
<component name="my.component.name" version="1.0">
  <require>org.nuxeo.ecm.core.CoreExtensions</require>
  <extension target="org.nuxeo.ecm.core.schema.TypeService" point="schema">
    <property schema="dublincore" name="created" secured="false" />
  </extension>
</component>
```

## Hotfix 06

### Large ACLs with SQL Server

On SQL Server it's possible to configure VCS to use an increased size to stored the Read ACLs optimization tables, which may be necessary if users belong to many groups (total size of group names + the user name + "Everyone" > 4000 characters).

```
nuxeo.vcs.optimizations.acl.maxsize=999999
```

Any value > 4000 will make SQL Server use NVARCHAR(MAX) instead of NVARCHAR(4000) for its internal data structures.

On PostgreSQL this feature already existed (default to 4096) but was not easily configurable, the same configuration property can be used to increase the value. The specific value requested will be used (there is no notion of MAX).

Note that the use of a new value will only happen when the optimization tables are created, which can be done on a stopped server by running:
```
DROP TABLE aclr;
DROP TABLE aclr_user;
-- on SQL Server:
EXEC nx_rebuild_read_acls;
-- on PostgreSQL:
SELECT nx_rebuild_read_acls();
```

## Hotfix 05

### StreamWorkManager Configuration

It is possible to use the StreamWorkManager implementation with large works that exceed 1MB when serialized. The value is stored outside of the stream, in an external storage. For now the possible storages are the KeyValue store and the Transient store.

Here are the `nuxeo.conf` options to use to activate this feature for the StreamWorkManager:
```
# Filter big work to be stored outside of the stream
nuxeo.stream.work.computation.filter.enabled=true
# Above this threshold in bytes the record value is stored outside of the stream
nuxeo.stream.work.computation.filter.thresholdSize=1000000
nuxeo.stream.work.computation.filter.class=org.nuxeo.ecm.core.transientstore.computation.TransientStoreOverflowRecordFilter
nuxeo.stream.work.computation.filter.storeName=default
nuxeo.stream.work.computation.filter.storeKeyPrefix=bigRecord:
# An alternative storage using the KeyValue store
#nuxeo.stream.work.computation.filter.class=org.nuxeo.ecm.core.work.KeyValueStoreOverflowRecordFilter # TTL is only taken in account with the KV impl, for TS impl you need to configure TS garbage collector
#nuxeo.stream.work.computation.filter.storeTTL=4d
```

When using the TransientStore, its TTL (firstLevelTTL) needs to be adapted so that the record value is not garbage collected before the work is processed.

The `nuxeo.stream.work.computation.filter.storeTTL` option, which is used by the KeyValue store implementation, can be expressed using a duration string like "48h" or "4d".

Note also that this ability of using an external storage for large record value is not tied to the StreamWorkManager and can be used in any StreamProcessor.

### Quota Computation on Versioning

The behavior of quota computation and check has changed for versioning.
Now we compute and check the quotas on the `aboutToCheckIn` event instead of computing the quotas on the `documentCheckedIn` one and checking the quotas on the `documentCheckedOut` one.

This behavior is disabled by default and can be enabled by overriding the `nuxeo.quota.size.check.on.aboutToCheckIn` property:
```
  <require>org.nuxeo.ecm.quota.contrib</require>

  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="nuxeo.quota.size.check.on.aboutToCheckIn">true</property>
  </extension>
```

## Hotfix 04

### Binary Store Configuration

A new property `nuxeo.binarystores.root` is available and its use is recommended over the now-deprecated `repository.binary.store`. The old `repository.binary.store` is equivalent to `${nuxeo.binarystores.root}/binaries`.

### Orphan Version Cleanup

The orphan versions cleanup is disabled by default and can be re-enabled (if its performance is acceptable) with the following contribution:
```
  <require>org.nuxeo.ecm.core.orphanVersionsCleanup</require>
  <extension point="listener" target="org.nuxeo.ecm.core.event.EventServiceComponent">
    <listener name="orphanVersionsCleanup" enabled="true" />
  </extension>
```

## Hotfix 02

### Multiple AWS Configuration

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

To get to this configuration, you can use:
```
new NuxeoAWSCredentialsProvider(id)
new NuxeoAWSRegionProvider(id).getRegion()
```

{{#> callout type='note' }}
If the configuration is not found, the providers will still fall back on the default AWS SDK behavior to look in the OS environment, Java system properties, AWS profile or EC2 container credentials (which don't take into account any configuration id).
{{/callout}}

### S3 Server-side Encryption

S3 copy (used during direct upload in particular) now correctly takes into account the server-side encryption configuration for the destination bucket.

For direct upload, the following property is required:
```
nuxeo.s3storage.transient.crypt.serverside=true
```

### S3 Multipart Part Size

There is a new configuration property `nuxeo.s3.multipart.copy.part.size` to change the S3 multipart copy part size. The default is `5242880` (5MB).</br>

It can be changed with:
```
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="nuxeo.s3.multipart.copy.part.size">5242880</property>
  </extension>
```
