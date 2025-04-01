---
title: Upgrade from LTS 2023 to LTS 2025
description: Instructions to upgrade your Nuxeo Platform instance from LTS 2023 version to LTS 2025.
review:
  comment: ''
  date: '2025-02-28'
  status: ok
labels:
  - multiexcerpt
toc: true
tree_item_index: 92
---

For the general upgrade process, see the page [Upgrading the Nuxeo Platform]({{page page='upgrading-the-nuxeo-platform'}}).

{{! excerpt}}
This chapter highlights some major information about upgrade from Nuxeo Platform LTS 2023 (2023.x) to Nuxeo Platform LTS 2025 (2025.x). We strongly encourage you to also have a quick read of the upgrade notes.
{{! /excerpt}}

## Prerequisites

These upgrade notes assume that Nuxeo Server is on 2023 and up to date with the latest hotfixes.

## Installation and Configuration

### AWS S3

AWS Java SDK was bumpded to version 2. As such, a couple of s3 blob store configuration properties have evolved.

#### Deprecated S3 blob provider configuration properties:

- `nuxeo.s3.multipart.copy.part.size` is deprecated and unused, use `nuxeo.s3storage.minimum.upload.part.size` instead.
- `nuxeo.s3storage.multipart.copy.threshold` is deprecated and unused, `use nuxeo.s3storage.multipart.upload.threshold` instead.
- `nuxeo.s3storage.multipart.cleanup.disabled` is deprecated and unused, see below.

#### New S3 blob provider configuration properties:

- `nuxeo.s3storage.concurrency.max` to configure the maximum number of allowed concurrent requests of the AWS CRT client used by the transfer manager for parallel data upload and downloads.
- `nuxeo.s3storage.targetThroughputInGbps` to define the target throughput for transfer requests of the AWS CRT client used by the transfer manager for parallel data upload and downloads.
- `nuxeo.s3storage.crypt.kms.legacymode`
  {{#> callout type='warning' heading='KMS client-side encryption'}}
  `nuxeo.s3storage.crypt.kms.legacymode` must be set to `true` when upgrading from `lts-2023` to `lts-2025` if you have objects encrypted client-side with a KMS key using the AWS encryption API v2.
  {{/callout}}
  See [NXP-32760](https://hyland-sync.atlassian.net/issues/?jql=%22Source%20Issue%20Key%5BShort%20text%5D%22%20~%20%22NXP-32760%22)
- `nuxeo.s3storage.crypt.keystore.legacymode`
  {{#> callout type='warning' heading='Keystore client-side encryption'}}
  `nuxeo.s3storage.crypt.keystore.legacymode` must be set to `true` when upgrading from `lts-2023` to `lts-2025` if you have objects encrypted client-side with a local keystore using the AWS encryption API v1.
  {{/callout}}
  See [NXP-32842](https://hyland-sync.atlassian.net/issues/?jql=%22Source%20Issue%20Key%5BShort%20text%5D%22%20~%20%22NXP-32842%22)

#### Behavior changes

The Nuxeo server no longer aborts old Multipart uploads. Adding a bucket lifecycle configuration to delete incomplete multipart uploads is highly recommended. See [AWS documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpu-abort-incomplete-mpu-lifecycle-config.html).

HEAD requests on Presigned URLs are no longer supported. See NXP-32293 and [aws-sdk-java-v2 limiation](https://github.com/aws/aws-sdk-java-v2/issues/5276).

The old and deprecated `org.nuxeo.ecm.core.storage.sql.S3BinaryManager` implementation has been deleted and is no longer part of the distribution. The remaining classes from the `org.nuxeo.ecm.core.storage.sql` package have been merged into the `org.nuxeo.ecm.blob.s3` one. Please update any dependant project accordingly.

### Upgrade Plexus-Archiver

Maven Plugins have been updated

The Maven Plugins used by Nuxeo were updated to not depend on very old libraries, this is the case for:

- maven-clean-plugin
- maven-enforcer-plugin
- maven-install-plugin
- maven-jar-plugin

We had to remove the Maven Eclipse Plugin from our dependency tree as it is unmaintained, if you were leverage it you should add it back to your pom:

```xml
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-eclipse-plugin</artifactId>
  <version>2.10</version>
</plugin>
```

### Upgrade PDFBox From 2.0.32 to 3.0.3

Upgraded the PDFBox dependencies from 2.0.32 to 3.0.3:

```
<dependency>
  <groupId>org.apache.pdfbox</groupId>
  <artifactId>pdfbox</artifactId>
</dependency>
<dependency>
  <groupId>org.apache.pdfbox</groupId>
  <artifactId>pdfbox-tools</artifactId>
</dependency>
<dependency>
  <groupId>org.apache.pdfbox</groupId>
  <artifactId>fontbox</artifactId>
</dependency>
```

Added this dependency:

```
<dependency>
  <groupId>org.apache.pdfbox</groupId>
  <artifactId>pdfbox-io</artifactId>
</dependency>
```

Added `PDFUtils#hex255ToRGBFloat(String inHex)`.

Followed the [PDFBox 3.0 Migration Guide](https://pdfbox.apache.org/3.0/migration.html).

Mostly, replaced:

```
PDDocument pdfDoc = PDDocument.load(inputStream);
```

by:

```
try (PDDocument pdfDoc = Loader.loadPDF(file)) {
  ...
}
```

Also see the [Release Notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12310760&version=12354416).

### Configure Tomcat logs with Log4j

If you enabled the Tomcat logs with Log4j configuration feature in LTS 2023; you might need to migrate `conf/logging.properties` to `log4j2.xml` if you have one.
The default `conf/logging.properties` was migrated to this portion of the default `log4j2.xml` file:

```
<!-- Tomcat catalina loggers -->
    <Logger name="org.apache.catalina" level="warn" additivity="false">
      <AppenderRef ref="CATALINA" />
    </Logger>
    <Logger name="org.apache.catalina.core.AprLifecycleListener" level="info" />
    <Logger name="org.apache.catalina.core.ContainerBase" level="info" />
    <Logger name="org.apache.catalina.startup.Catalina" level="info">
      <AppenderRef ref="CONSOLE" />
    </Logger>
    <Logger name="org.apache.catalina.startup.VersionLoggerListener" level="info" />
    <!-- Tomcat coyote loggers -->
    <Logger name="org.apache.coyote" level="warn" additivity="false">
      <AppenderRef ref="CATALINA" />
    </Logger>
    <!-- Tomcat jasper loggers -->
    <Logger name="org.apache.jasper" level="warn" additivity="false">
      <AppenderRef ref="CATALINA" />
    </Logger>
```

The JUL configuration present under `conf/logging.properties` will be removed in LTS 2025.
The log files: `classloader.log`, `stderr.log`, and `tomcat.log` will also be removed in LTS 2025 as their logs are now written to `catalina.log`.

## Core Storage

### MongoDB Java Driver Upgrade

Upgraded the MongoDB Java driver `org.mongodb:mongodb-driver-sync` from `4.11.4` to `5.1.4`.

### Migration Tool to Extract Full Text From Mongo DB to an S3 Blob

In order to reduce the MongoDB collection size, it’s now possible to move in a efficient way the fulltext extracted from binaries (stored in MongoDB) to a s3 bucket on an existing instance. See the 4 step migration process in the upgrade notes.

Here is the 4 step migration process when you want to switch the storage of binary fulltext from the repository (MongoDB) to a S3 bucket on an existing instance.

1. Update the `nuxeo.conf` and restart all nodes:

```
nuxeo.vcs.fulltext.storedInBlob=true
# when fulltext is stored in blob, repository fulltext search is disabled
nuxeo.vcs.fulltext.search.disabled=true
# bucket prefix to store fulltext blobs
nuxeo.s3storage.fulltext.storeInBlob.bucket_prefix=fulltext
# enable the fulltext migration
nuxeo.bulk.action.fixBinaryFulltextStorage.enabled=true
nuxeo.bulk.action.fixBinaryFulltextStorage.defaultConcurrency=2
nuxeo.bulk.action.fixBinaryFulltextStorage.defaultPartitions=4
```

After this, the binary fulltext of new blob will be stored in the s3 bucket under `/fulltext/` prefix.

Everything should work properly while there are two different storages for the binary fulltext.
Re-indexing will not change this state, running `extractBinaryFulltext` will do but this is not efficient since it’s slow and expensive, follow the next steps for the migration.

2. Clean MongoDB fulltext

Since we have disabled the fulltext search from the repository, we can remove existing index and fields, check if MongoDB fulltext index exists

```
db.default.getIndex("fulltext")
  {
    v: 2,
    key: { _fts: 'text', _ftsx: 1 },
    name: 'fulltext',
    weights: { 'ecm:fulltextBinary': 1, 'ecm:fulltextSimple': 1 },
    default_language: 'english',
    language_override: '__language',
    textIndexVersion: 3
  },
```

then remove it

```
db.default.dropIndex('fulltext')
```

Remove MongoDB field `ecm:fulltextSimple` this can be a long operation depending on the db size.

```
db.default.updateMany({}, {$unset: {"ecm:fulltextSimple":1}});
```

3. Run the migration

```
curl -s -X POST "http://localhost:8080/nuxeo/api/v1/management/fulltext/fixBinaryStorage" -u Administrator:Administrator
```

It’s possible to test it by providing a custom NXQL `query`. The default query match all docs that is not a proxy.

4. Remove the migration bulk action and restart all nodes

Change the `nuxeo.conf` and restart

```
nuxeo.bulk.action.fixBinaryFulltextStorage.enabled=false
```

### Make possible to run Nuxeo with MongoDB without H2

In order to leverage the no H2 deployment you must remove the default template from your nuxeo.templates nuxeo.conf properties.

For instance, if you have:

```
nuxeo.templates=default,mongodb
```

You must update it to:

```
nuxeo.templates=mongodb
```

### Align quartz-mongodb on quartz-2.5.0

The upgrade of `quartz` breaks the compatibility with `quartz-mongodb` but since the [project GitHub](https://github.com/michaelklishin/quartz-mongodb) is in an abandoned state we have to fork it to apply the require changes. This result in a change in the groupId of the dependency, so if you’re using this dependency in your project, you must update it to:

```
<dependency>
  <groupId>org.nuxeo.lib.novemberain</groupId>
  <artifactId>quartz-mongodb</artifactId>
</dependency>
```

### Improve UIDGeneratorService Modularity

The default UIDSequencer in Nuxeo Platform has changed in LTS 2025, it is now `KeyValueStoreUIDSequencer`, so you might need to migrate your custom sequences, or install and use a former UIDSequencer (JPA, ElasticSearch/OpenSearch, MongoDB).

There’s only one sequence that is being used by Nuxeo Platform itself, it is the `audit` sequence. This sequence **doesn’t not need to be migrated** because the audit backends that needs it will init the sequence at the right value during the Nuxeo Platform start.

To migrate your custom sequences, before the upgrade, we recommend to stop activity on Nuxeo Platform, then request the sequences value with the Management REST API:

```
curl -u USERNAME:PASSWORD -XGET https://NUXEO_INSTANCE/nuxeo/api/v1/management/sequencers
```

You will receive all the defined sequencers and all its sequences with their current values.

Save the couple key/value somewhere in order to push them after the upgrade.

Upgrade Nuxeo to LTS 2025, then, before enabling activities, init each of your custom sequences with:

```
curl -u USERNAME:PASSWORD -XPOST https://NUXEO_INSTANCE/nuxeo/api/v1/management/sequencers/default -d 'key=customSequence1&value=customValue1'
curl -u USERNAME:PASSWORD -XPOST https://NUXEO_INSTANCE/nuxeo/api/v1/management/sequencers/default -d 'key=customSequence2&value=customValue2'
...
curl -u USERNAME:PASSWORD -XPOST https://NUXEO_INSTANCE/nuxeo/api/v1/management/sequencers/default -d 'key=customSequenceN&value=customValueN'
```

## Nuxeo Streams

### Create a Nuxeo Stream Log4j2 Appender Package

You need to install `nuxeo-log4j-stream` package when upgrading to LTS 2025 if you were using `NuxeoStreamAppender` in your `log4j2.xml file`.

## Deprecated

### Deprecated 10.10 code removal

#### Configuration Properties

##### Configuration Service

`org.nuxeo.ecm.core.uidgen.sequencer.hibernate` was removed, the default sequencer is always used

#### Contributions

##### Extension point

`org.nuxeo.ecm.platform.audit.service.NXAuditEventsService#bulk` has been removed as it is replaced by Nuxeo Stream
`org.nuxeo.ecm.platform.comment.service.CommentService#config` has been removed as it is not used in newer implementations

#### Constants

`org.nuxeo.ecm.automation.io.rest.operations.JsonRequestReader.targetMediaTypeNXReq` was referencing `application/json+nxrequest` media type, `application/json` should be used
`org.nuxeo.ecm.core.api.AbstractSession#TRASH_KEEP_CHECKED_IN_PROPERTY` no replacement in new implementations
`org.nuxeo.ecm.core.api.LifeCycleConstants#DELETED_STATE` was replaced by TrashService
`org.nuxeo.ecm.core.api.LifeCycleConstants#DELETE_TRANSITION` was replaced by TrashService
`org.nuxeo.ecm.core.api.LifeCycleConstants#UNDELETE_TRANSITION` was replaced by TrashService
`org.nuxeo.ecm.core.api.LifeCycleConstants#DOCUMENT_UNDELETED` was replaced by TrashService
`org.nuxeo.ecm.core.api.NuxeoPrincipal#TRANSIENT_USER_FORMAT` was not used, no replacement
`org.nuxeo.ecm.core.io.download.DownloadService#NXBLOBSTATUS` was replaced by the `@async` web adapter mechanism
`org.nuxeo.ecm.platform.ec.notification.service.NotificationService#SUBSCRIPTION_NAME` was not used, no replacement
`org.nuxeo.ecm.platform.versioning.service.VersioningManagerImpl#COMPONENT_ID` was not used, no replacement

#### Methods

`org.nuxeo.common.utils.FileUtils#copyFile(File, File)` was not used, use `org.apache.commons.io.FileUtils#copyFile(File, File)` or `org.apache.commons.io.FileUtils#copyFileToDirectory(File, File)` instead
`org.nuxeo.common.utils.FileUtils#copyTree(File, File)` was not used, no replacement
`org.nuxeo.common.utils.FileUtils#copyTree(File, File, PathFilter)` was not used, no replacement
`org.nuxeo.common.utils.ZipUtils#getEntryContentAsStream(File, String)` was not used, no replacement
`org.nuxeo.common.utils.ZipUtils#getEntryContentAsString(File, String)` was not used, no replacement
`org.nuxeo.common.utils.ZipUtils#getEntryContentAsBytes(File, String)` was not used, no replacement
`org.nuxeo.ecm.automation.server.AutomationServer#addBinding(RestBinding)` was not used, no replacement
`org.nuxeo.ecm.automation.server.AutomationServer#removeBinding(RestBinding)` was not used, no replacement
`org.nuxeo.ecm.collections.api.CollectionManager#getUserDefaultCollections(DocumentModel, CoreSession)` was replaced by `org.nuxeo.ecm.collections.api.CollectionManager#getUserDefaultCollections(CoreSession)`
`org.nuxeo.ecm.collections.api.FavoritesManager#getFavorites(DocumentModel, CoreSession)` was replaced by `org.nuxeo.ecm.collections.api.FavoritesManager#getFavorites(CoreSession)`
`org.nuxeo.ecm.core.NXCore#getLifeCycleService()` was not used, use `org.nuxeo.runtime.api.Framework#getService(Class)` instead
`org.nuxeo.ecm.core.api.CoreSession#close()` not useful anymore, no replacement
`org.nuxeo.ecm.core.api.DocumentModel#isPrefetched(String)` not useful anymore, no replacement
`org.nuxeo.ecm.core.api.DocumentModel#isPrefetched(String, String)` not useful anymore, no replacement
`org.nuxeo.ecm.core.convert.service.MimeTypeTranslationHelper#getDestinationMimeTypes(String)` was not used, no replacement
`org.nuxeo.ecm.core.convert.service.MimeTypeTranslationHelper#getSourceMimeTypes(String)` was not used, no replacement
`org.nuxeo.ecm.core.event.Event#isLocal()` was not used, no replacement
`org.nuxeo.ecm.core.event.Event#setLocal(String)` was not used, no replacement
`org.nuxeo.ecm.core.event.Event#isPublic()` was not used, no replacement
`org.nuxeo.ecm.core.event.Event#setPublic(String)` was not used, no replacement
`org.nuxeo.ecm.core.io.download.DownloadService#downloadBlobStatus(HttpServletRequest, HttpServletResponse, String, String)` was replaced by the `@async` web adapter mechanism
`org.nuxeo.ecm.core.io.registry.MarshallerHelper#listToJson(Class, String, RenderingContext)` was replaced by `org.nuxeo.ecm.core.io.registry.MarshallerHelper#jsonToList(Class, String, RenderingContext)`
`org.nuxeo.ecm.core.io.registry.MarshallerHelper#objectToJson(Class, String, RenderingContext)` was replaced by `org.nuxeo.ecm.core.io.registry.MarshallerHelper#jsonToObject(Class, String, RenderingContext)`
`org.nuxeo.ecm.core.io.registry.MarshallerHelper#objectToJson(Class, Type, String, RenderingContext)` was replaced by `org.nuxeo.ecm.core.io.registry.MarshallerHelper#jsonToObject(Class, String, Type, RenderingContext)`
`org.nuxeo.ecm.core.io.upload.Batch#addChunk(String, InputStream, int, int, String, String, long)` was replaced by `org.nuxeo.ecm.core.io.upload.Batch#addFile(String, Blob, int, int, String, String, long)`
`org.nuxeo.ecm.core.io.upload.Batch#addFile(String, InputStream, String, String)` was replaced by `org.nuxeo.ecm.core.io.upload.Batch#addFile(String, Blob, String, String)`
`org.nuxeo.ecm.core.io.upload.BatchManager#addStream(String, String, InputStream, String, String)` was replaced by `org.nuxeo.ecm.core.io.upload.BatchManager#addBlob(String, String, Blob, String, String)`
`org.nuxeo.ecm.core.io.upload.BatchManager#addStream(String, String, InputStream, int, int, String, String, long)` was replaced by `org.nuxeo.ecm.core.io.upload.BatchManager#addBlob(String, String, Blob, int, int, String, String, long)`
`org.nuxeo.ecm.core.io.upload.BatchManager#getTransientStore()` was moved within batch handlers
`org.nuxeo.ecm.core.transientstore.api.TransientStoreConfig#setAbsoluteMaxSizeMB(int)` was not used, no replacement
`org.nuxeo.ecm.core.transientstore.api.TransientStoreConfig#setFirstLevelTTL(int)` was not used, no replacement
`org.nuxeo.ecm.core.transientstore.api.TransientStoreConfig#setSecondLevelTTL(int)` was not used, no replacement
`org.nuxeo.ecm.core.transientstore.api.TransientStoreConfig#setTargetMaxSizeMB(int)` was not used, no replacement
`org.nuxeo.ecm.core.work.WorkManager#find(String, State)` was not scalable, no replacement
`org.nuxeo.ecm.core.work.WorkManager#listWork(String, State)` was not scalable, no replacement
`org.nuxeo.ecm.core.work.WorkManager#listWorkIds(String, State)` was not scalable, no replacement
`org.nuxeo.ecm.permissions.TransientUserPermissionHelper#acquireToken(String, DocumentModel, String)` was replaced by `org.nuxeo.ecm.permissions.TransientUserPermissionHelper#addToken(String)`
`org.nuxeo.ecm.platform.audit.api.AuditLogger#logEvent(Event)` was replaced by contributions
`org.nuxeo.ecm.platform.audit.api.AuditLogger#logEvents(EventBundle)` was replaced by contributions
`org.nuxeo.ecm.platform.comment.api.CommentManager#getComments(DocumentModel, DocumentModel)` was replaced by `org.nuxeo.ecm.platform.comment.api.CommentManager#getComments(DocumentModel)`
`org.nuxeo.ecm.platform.comment.api.CommentManager#createComment(DocumentModel, String)` was replaced by `org.nuxeo.ecm.platform.comment.api.CommentManager#createComment(CoreSession, Comment)`
`org.nuxeo.ecm.platform.comment.api.CommentManager#createComment(DocumentModel, String, String)` was replaced by `org.nuxeo.ecm.platform.comment.api.CommentManager#createComment(CoreSession, Comment)`
`org.nuxeo.ecm.platform.comment.api.CommentManager#createComment(DocumentModel, DocumentModel, DocumentModel)` was replaced by `org.nuxeo.ecm.platform.comment.api.CommentManager#createComment(CoreSession, Comment)`
`org.nuxeo.ecm.platform.comment.api.CommentManager#deleteComment(DocumentModel, DocumentModel)` was replaced by `org.nuxeo.ecm.platform.comment.api.CommentManager#createComment(CoreSession, String)`
`org.nuxeo.ecm.platform.comment.api.CommentManager#getDocumentsForComment(DocumentModel)` not used anymore, no replacement
`org.nuxeo.ecm.platform.dublincore.service.DublinCoreStorageService#setCreationDate(DocumentModel, Calendar, Event)` was replaced by `org.nuxeo.ecm.platform.dublincore.service.DublinCoreStorageService#setCreationDate(DocumentModel, Calendar)`
`org.nuxeo.ecm.platform.dublincore.service.DublinCoreStorageService#setModificationDate(DocumentModel, Calendar, Event)` was replaced by `org.nuxeo.ecm.platform.dublincore.service.DublinCoreStorageService#setModificationDate(DocumentModel, Calendar)`
`org.nuxeo.ecm.platform.ec.notification.email.EmailAuthenticator#value(String)` was replaced by `org.nuxeo.ecm.platform.ec.notification.email.EmailAuthenticator#protocolValue(String)`
`org.nuxeo.ecm.platform.ec.notification.email.EmailAuthenticator#defaultValue(String)` was replaced by `org.nuxeo.ecm.platform.ec.notification.email.EmailAuthenticator#protocolValue(String)`
`org.nuxeo.ecm.platform.ec.notification.service.NotificationRegistryImpl#getNotificationRegistry()` was not used, no replacement
`org.nuxeo.ecm.platform.filemanager.api.FileManager#createDocumentFromBlob(CoreSession, Blob, String, boolean, String)` was replaced by `org.nuxeo.ecm.platform.filemanager.api.FileManager#createOrUpdateDocument(FileImporterContext)`
`org.nuxeo.ecm.platform.filemanager.api.FileManager#createDocumentFromBlob(CoreSession, Blob, String, boolean, String, boolean)` was replaced by `org.nuxeo.ecm.platform.filemanager.api.FileManager#createOrUpdateDocument(FileImporterContext)`
`org.nuxeo.ecm.platform.filemanager.api.FileManager#updateDocumentFromBlob(CoreSession, Blob, String, String)` was not used, no replacement
`org.nuxeo.ecm.platform.filemanager.service.extension.AbstractFileImporter#getFileManagerService()` was not used, use `org.nuxeo.runtime.api.Framework#getService(Class)` instead
`org.nuxeo.ecm.platform.filemanager.service.extension.FileImporter#setFileManagerService(FileManagerService)` was not used, no replacement
`org.nuxeo.ecm.platform.filemanager.service.extension.FileImporter#create(CoreSession, Blob, String, boolean, String, TypeManager)` was replaced by `org.nuxeo.ecm.platform.filemanager.service.extension.FileImporter#createOrUpdate(FileImporterContext)`
`org.nuxeo.ecm.platform.importer.factories.DefaultDocumentModelFactory#getMimeType(String)` was not used, no replacement
`org.nuxeo.ecm.platform.rendition.service.RenditionServiceImpl#getRenditionDefinition(String)` was replaced by `org.nuxeo.ecm.platform.rendition.service.RenditionServiceImpl#getAvailableRenditionDefinition(DocumentModel, String)`
`org.nuxeo.ecm.platform.rendition.service.RenditionServiceImpl#storeRendition(DocumentModel, Rendition)` was replaced by `org.nuxeo.ecm.platform.rendition.service.RenditionServiceImpl#storeRendition(DocumentModel, Rendition, RenditionDefinition)`
`org.nuxeo.ecm.platform.ui.web.auth.LoginScreenHelper#registerLoginProvider(String, String, String, String, String, LoginProviderLinkComputer)` was replaced by `org.nuxeo.ecm.platform.ui.web.auth.LoginScreenHelper#registerSingleProviderLoginScreenConfig(String, String, String, String, String, LoginProviderLinkComputer)`
`org.nuxeo.ecm.platform.ui.web.auth.service.LoginScreenConfig#registerLoginProvider(String, String, String, String, String, LoginProviderLinkComputer)` was replaced by `org.nuxeo.ecm.platform.ui.web.auth.service.LoginScreenConfig#LoginScreenConfig(LoginProviderLink)`
`org.nuxeo.ecm.platform.web.common.requestcontroller.service.RequestControllerManager#getCorsConfigForRequest(HttpServletRequest)` was replaced by `org.nuxeo.ecm.platform.web.common.requestcontroller.service.RequestControllerManager#getCorsFilterForRequest(HttpServletRequest)`
`org.nuxeo.ecm.quota.QuotaStatsService#computeInitialStatistics(String, CoreSession, QuotaStatsInitialWork)` was replaced by `org.nuxeo.ecm.quota.QuotaStatsService#computeInitialStatistics(String, CoreSession, QuotaStatsInitialWork, String)`
`org.nuxeo.ecm.quota.QuotaStatsService#launchInitialStatisticsComputation(String, String)` was replaced by `org.nuxeo.ecm.quota.QuotaStatsService#computeInitialStatistics(String, String, String)`
`org.nuxeo.ecm.quota.QuotaStatsUpdater#computeInitialStatistics(CoreSession, QuotaStatsInitialWork)` was replaced by `org.nuxeo.ecm.quota.QuotaStatsUpdater#computeInitialStatistics(CoreSession, QuotaStatsInitialWork, String)`
`org.nuxeo.lib.stream.computation.ComputationPolicy#isSkipFailure()` was replaced by `org.nuxeo.lib.stream.computation.ComputationPolicy#continueOnFailure()`
`org.nuxeo.runtime.test.runner.RuntimeHarness#deployFolder(File, ClassLoader)` was not used, no replacement
`org.nuxeo.runtime.test.runner.RuntimeHarness#deployTestContrib(String, String)` was replaced by `org.nuxeo.runtime.test.runner.RuntimeHarness#deployContrib(String, String)`
`org.nuxeo.runtime.test.runner.RuntimeHarness#deployTestContrib(String, URL)` was replaced by `org.nuxeo.runtime.test.runner.RuntimeHarness#deployContrib(String, String)`
`org.nuxeo.runtime.test.runner.RuntimeHarness#getProperties()` was not used, use `org.nuxeo.runtime.api.Framework#getProperties()` instead
`org.nuxeo.runtime.test.runner.RuntimeHarness#isRestart()` was not used, no replacement
`org.nuxeo.runtime.test.runner.RuntimeHarness#restart()` was not used, no replacement
`org.nuxeo.runtime.test.runner.RuntimeHarness#getClassLoaderFiles()` was not used, no replacement
`org.nuxeo.runtime.test.runner.TransactionFeature.Waiter#await(long)` was replaced by `org.nuxeo.runtime.test.runner.TransactionFeature.Waiter#await(Duration)`
`org.nuxeo.runtime.test.runner.TransactionFeature#nextTransaction(long, TimeUnit)` was replaced by `org.nuxeo.runtime.test.runner.TransactionFeature#nextTransaction(Duration)`

#### Classes

`org.nuxeo.ecm.core.api.impl.blob.AsyncBlob` was replaced by the `@async` web adapter mechanism
`org.nuxeo.ecm.core.trash.LifeCycleTrashService` was replaced by `org.nuxeo.ecm.core.trash.PropertyTrashService`
`org.nuxeo.ecm.core.trash.TrashService` was replaced by `org.nuxeo.ecm.core.api.trash.TrashService`
`org.nuxeo.ecm.directory.sql.filter.SQLBetweenFilter` was replaced by `org.nuxeo.ecm.core.query.sql.model.QueryBuilder`
`org.nuxeo.ecm.directory.sql.filter.SQLComplexFilter` was replaced by `org.nuxeo.ecm.core.query.sql.model.QueryBuilder`
`org.nuxeo.ecm.directory.sql.filter.SQLOperatorFilter` was replaced by `org.nuxeo.ecm.core.query.sql.model.QueryBuilder`
`org.nuxeo.ecm.liveconnect.core.JSONLiveConnectBlobDecoder` was replaced by `org.nuxeo.ecm.automation.core.util.JSONManagedBlobDecoder`
`org.nuxeo.ecm.platform.audit.listener.AuditEventLogger` was replaced by `org.nuxeo.ecm.platform.audit.listener.StreamAuditEventListener`
`org.nuxeo.ecm.platform.audit.service.AuditBulker` was replaced by Nuxeo Stream mechanism
`org.nuxeo.ecm.platform.audit.service.DefaultAuditBulker` was replaced by Nuxeo Stream mechanism
`org.nuxeo.ecm.platform.audit.service.NoopAuditBulker` was replaced by Nuxeo Stream mechanism
`org.nuxeo.ecm.platform.audit.service.extension.AuditBulkerDescriptor` was replaced by Nuxeo Stream mechanism
`org.nuxeo.ecm.platform.audit.service.management.AuditBulkerMBean` was replaced by Nuxeo Stream mechanism
`org.nuxeo.ecm.platform.comment.impl.CommentManagerImpl` was replaced by `org.nuxeo.ecm.platform.comment.impl.TreeCommentManager`
`org.nuxeo.ecm.platform.comment.service.CommentServiceHelper` was not used, use `org.nuxeo.runtime.api.Framework#getProperties()` instead
`org.nuxeo.ecm.platform.dublincore.NXDublinCore` was not used, no replacement
`org.nuxeo.ecm.platform.preview.adapter.PlainImagePreviewer` was not used, no replacement
`org.nuxeo.ecm.restapi.server.BulkDocumentsObject` was replaced by the Bulk Action Framework
`org.nuxeo.drive.operations.GetRepositoriesOperation` was not used, no replacement
`org.nuxeo.drive.operations.NuxeoDriveAddToLocallyEditedCollection` was not used, no replacement
`org.nuxeo.drive.operations.NuxeoDriveCanMove` was not used, no replacement
`org.nuxeo.drive.operations.NuxeoDriveGenerateConflictedItemName` was not used, no replacement
`org.nuxeo.drive.operations.NuxeoDriveGetClientUpdateInfo` was not used, no replacement
`org.nuxeo.drive.operations.test.NuxeoDriveWaitForAsyncCompletion` was not used, no replacement
`org.nuxeo.runtime.test.runner.ContainerFeature` was replaced by `org.nuxeo.runtime.test.runner.TransactionalFeature`
`org.nuxeo.runtime.test.runner.LocalDeploy` was replaced by `org.nuxeo.runtime.test.runner.Deploy`
`org.nuxeo.runtime.test.runner.ServletContainer` was replaced by `org.nuxeo.runtime.test.runner.ServletContainerFeature` automatic port allocation mechanism
`org.nuxeo.runtime.test.runner.SimpleFeature` was superseeded by Java default in interface, use `org.nuxeo.runtime.test.runner.RunnerFeature` instead

#### Operations

The parameter `username`/`user` of operation `Document.AddPermission`/`Document.AddACL` was replaced by `users`

#### Rest Endpoints

The endpoints GET|PUT|DELETE `/api/v1/bulk` was removed in favor of Bulk Action Framework endpoints
The endpoints GET|PUT|DELETE `/api/v1/oauth2/token/{providerName}/{nxLogin}` were replaced by `/api/v1/oauth2/token/provider/{providerName}/user/{nxLogin}`
The endpoint GET `/api/v1/search/lang/{queryLanguage}/execute` was replaced by `/api/v1/search/execute`
The endpoint POST `/api/v1/search/lang/{queryLanguage}/bulk/actionId` was replaced by `/api/v1/search/bulk/actionId`

## Dependencies Removal

### Joda Time

Joda Time library is no longer part of the default nuxeo distribution. Users are asked to migrate to java.time - a core part of the JDK which replaces this project.

## Complementary Information

- [Release notes for Nuxeo Platform LTS 2025]({{page page='nuxeo-server-release-notes-2025-0'}})
