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
tree_item_index: 93
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
 - `nuxeo.s3storage.multipart.copy.threshold`  is deprecated and unused, `use nuxeo.s3storage.multipart.upload.threshold` instead.
 - `nuxeo.s3storage.multipart.cleanup.disabled`  is deprecated and unused, see below.

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

## Dependencies Removal

### Joda Time

Joda Time library is no longer part of the default nuxeo distribution. Users are asked to migrate to java.time - a core part of the JDK which replaces this project.

## Complementary Information

* [Release notes for Nuxeo Platform LTS 2025]({{page page='nuxeo-server-release-notes-2025-0"}})
