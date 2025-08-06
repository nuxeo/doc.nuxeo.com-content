---
title: Hotfixes Installation Notes
review:
    comment: ''
    date: '2025-03-26'
    status: ok
labels:
    - multiexcerpt-include
toc: true
tree_item_index: 1200
version_override:
    LTS 2023: 2023/nxdoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2023
    LTS 2021: 2021/nxdoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2021
    LTS 2019: 1010/nxdoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2019
    LTS 2017: 910/nxdoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2017
    LTS 2016: 810/nxdoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2016
    LTS 2015: 710/admindoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2015
    '6.0': 60/admindoc/hotfixes-installation-notes-for-nuxeo-platform-60
---

The purpose of this page is to describe the additional actions that need to be done when installing the hotfixes on Nuxeo Platform and that cannot be done automatically. The page provides an exhaustive list of manipulations for the installation of Nuxeo Platform LTS 2025 hotfixes, but you need only to apply those relevant for your own instance.

{{{multiexcerpt 'intro_hotfix' page='ADMINDOC710:Hotfixes Installation Notes for Nuxeo Platform LTS 2015'}}}

{{#> callout type='warning' }}
While installing hotfixes, you will see the following message, but you can ignore it and continue.
```
Use of the <copy /> command on JAR files is not recommended, prefer using <update /> command to ensure a safe rollback. (nuxeo-launcher-9.10-HF01-jar-with-dependencies.jar)
```
{{/callout}}
<!--
Since LTS 2021, the addon "Nuxeo JSF UI" is handled outside the main Nuxeo repository on GitHub. As a consequence, the related fixes for JSF UI will not be embedded in a hotfix.</br>
Therefore if the addon "Nuxeo JSF UI" is installed on your instance, you must upgrade this package after installing a hotfix by running the following command:

```
> nuxeoctl mp-upgrade
```
Note that this command will upgrade the versions of any package.
-->
## Instance Registration

Hotfixes released for LTS 2025 can only be used on valid, registered Nuxeo instances.

**Why?** </br>
If you are using an *unregistered LTS 2025 Nuxeo instance with hotfixes installed*, you may encounter the following behavior:
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

## Hotfix 0

### Migration Tool to Extract Full Text From Mongo DB to an S3 Blob

Here is the 4 step migration process when you want to switch the storage of binary fulltext from the repository (MongoDB) to a S3 bucket on an existing instance.

**1. Update the** `nuxeo.conf` **and restart all nodes**

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
Re-indexing will not change this state. Running `extractBinaryFulltext` will do but this is not efficient since it’s slow and expensive. Follow the next steps for the migration.

**2. Clean MongoDB fulltext**

Since we have disabled the fulltext search from the repository, we can remove existing index and fields. Check if MongoDB `fulltext` index exists:

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

then remove it:

```
db.default.dropIndex('fulltext')
```

Remove MongoDB field `ecm:fulltextSimple`. This can be a long operation depending on the db size.

```
db.default.updateMany({}, {$unset: {"ecm:fulltextSimple":1}});
```

**3. Run the migration**

```
curl -s -X POST "http://localhost:8080/nuxeo/api/v1/management/fulltext/fixBinaryStorage" -u Administrator:Administrator
```

It’s possible to test it by providing a custom NXQL `query`. The default query matches all docs that is not a proxy.

**4. Remove the migration bulk action and restart all nodes**

Change the `nuxeo.conf` and restart:

```
nuxeo.bulk.action.fixBinaryFulltextStorage.enabled=false
```

### Move Opensearch Maven Dependency to Nuxeo-Runtime-Opensearch1 Module

The OpenSearch dependencies have been removed from Nuxeo root pom.

If you need them and still be in sync with the version used by Nuxeo, you can import our new bom:

```xml
  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>org.nuxeo</groupId>
        <artifactId>nuxeo-opensearch1-bom</artifactId>
        <version>${nuxeo.platform.version}</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
    </dependencies>
  </dependencyManagement>
```

### Remove Unneeded Build-Helper-Maven-Plugin in 2025

Removed the following plugin from the `<pluginManagement>` section of the root POM:

```xml
<plugin>
  <groupId>org.codehaus.mojo</groupId>
  <artifactId>build-helper-maven-plugin</artifactId>
  <version>3.6.0</version>
</plugin>
```

and the following plugin from the `build` section:

```
<plugin>
  <groupId>org.codehaus.mojo</groupId>
  <artifactId>build-helper-maven-plugin</artifactId>
  <executions>
    <execution>
      <id>remove-old-installers</id>
      <goals>
        <goal>remove-project-artifact</goal>
      </goals>
      <configuration>
        <removeAll>false</removeAll>
      </configuration>
    </execution>
  </executions>
</plugin>
```

### Remove Unused org.apache.felix:maven-bundle-plugin in 2025

Removed the following plugin from the `<pluginManagement>` section of the root POM:

```xml
<plugin>
  <groupId>org.apache.felix</groupId>
  <artifactId>maven-bundle-plugin</artifactId>
  <version>2.5.4</version>
</plugin>
```

### Remove org.concordion:concordion Unused Dependency in 2025

Removed the following dependency from the root POM:

```xml
<dependency>
  <groupId>org.concordion</groupId>
  <artifactId>concordion</artifactId>
  <version>1.5.1</version>
</dependency>
```

### Fix Vim Low CVE in Docker Image

Vim editor was upgraded in the Docker image from `8.2.2637-20.0.1` to `8.2.2637-21.0.1`.

### Upgrade PDFBox From 2.x.y to 3.x.y

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

### Make Possible to Run Nuxeo With MongoDB Without H2

In order to leverage the no H2 deployment you must remove the `default` template from your `nuxeo.templates` nuxeo.conf properties.

For instance, if you have:

```
nuxeo.templates=default,mongodb
```

You must update it to:

```
nuxeo.templates=mongodb
```

### Align Quartz-Mongodb on  quartz-2.5.0

The upgrade of `quartz` breaks the compatibility with `quartz-mongodb` but since the project [https://github.com/michaelklishin/quartz-mongodb](https://github.com/michaelklishin/quartz-mongodb|smart-link) is in an abandoned state, we have to fork it to apply the require changes. This result in a change in the `groupId` of the dependency, so if you’re using this dependency in your project, you must update it to:

```xml
<dependency>
  <groupId>org.nuxeo.lib.novemberain</groupId>
  <artifactId>quartz-mongodb</artifactId>
</dependency>
```

### Improve UIDGeneratorService Modularity

The default UIDSequencer in Nuxeo Platform has changed in LTS 2025. It is now `KeyValueStoreUIDSequencer`, so you might need to migrate your custom sequences, or install and use a former UIDSequencer (JPA, ElasticSearch/OpenSearch, MongoDB).

There’s only one sequence that is being used by Nuxeo Platform itself. It is the `audit` sequence. This sequence **doesn’t not need to be migrated** because the audit backends that need it will init the sequence at the right value during the Nuxeo Platform start.

To migrate your custom sequences, before the upgrade, we recommend to stop activity on Nuxeo Platform, then request the sequences value with the Management REST API:

```
curl -u USERNAME:PASSWORD -XGET https://NUXEO_INSTANCE/nuxeo/api/v1/management/sequencers
```

You will receive ll the defined sequencers and all its sequences with their current values. 

Save the couple key/value somewhere in order to push them after the upgrade.

Upgrade Nuxeo to LTS 2025, then, before enabling activities, init each of your custom sequences with:

```
curl -u USERNAME:PASSWORD -XPOST https://NUXEO_INSTANCE/nuxeo/api/v1/management/sequencers/default -d 'key=customSequence1&value=customValue1'
curl -u USERNAME:PASSWORD -XPOST https://NUXEO_INSTANCE/nuxeo/api/v1/management/sequencers/default -d 'key=customSequence2&value=customValue2'
...
curl -u USERNAME:PASSWORD -XPOST https://NUXEO_INSTANCE/nuxeo/api/v1/management/sequencers/default -d 'key=customSequenceN&value=customValueN'
```

### Fix Being Able to Create User With Empty Password

A POST request on the `/nuxeo/api/v1/user` endpoint now returns a 400 _Bad Request_ status code if no password or a blank password is provided.

### Fix Property Name in 'quartz.properties.nxftl' File

Renamed the following Quartz scheduler property:

```
org.quartz.scheduler.mongoOptionWriteConcernTimeoutMillis
```

to

```
org.quartz.jobStore.mongoOptionWriteConcernTimeoutMillis
```

### Configure Tomcat Logs With Log4j

If you enable the Tomcat logs with Log4j configuration feature in LTS 2023, you might need to migrate `conf/logging.properties` to `log4j2.xml` if you have one.
 The default `conf/logging.properties` was migrated to this portion of the default `log4j2.xml` file:
```java
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

### Rework Nuxeo-Platform-Audit for More Modularity

##### Context

The Nuxeo Platform Audit service has been heavily reworked for reliability, security, and further improvements.
In this rework, we kept the backward compatibility with your existing code or your existing contributions to Audit service, but we highly encourage you to upgrade to new APIs.

##### Maven

The Maven module `org.nuxeo.ecm.platform:nuxeo-platform-audit-api` has been merged into `org.nuxeo.ecm.platform:nuxeo-platform-audit-core`. You may need to update your Maven dependencies.
Optionally, if your module depends on `org.nuxeo.ecm.platform:nuxeo-platform-audit-core:test-jar`, we advise you to upgrade to `org.nuxeo.ecm.platform:nuxeo-platform-audit-test`, which brings more features and the `org.nuxeo.audit.test.AuditFeature`that correctly configures your test execution.

##### Java

All services or POJO class that you may use from the `org.nuxeo.ecm.platform.audit` package have been migrated to `org.nuxeo.audit` or they have been replaced. 
This mainly impacts the following usages:

- `org.nuxeo.ecm.platform.audit.api.LogEntry` should be updated to `org.nuxeo.audit.api.LogEntry`
- usage of `AuditAdmin`, `AuditLogger`, `AuditReader` and `Logs` should be updated to `org.nuxeo.audit.service.AuditBackend`

##### XML Contributions

Contributions made to `org.nuxeo.ecm.platform.audit.service.NXAuditEventsService` extension points should be updated to the new services.

###### Events

Events extension point declaration didn’t change, just the target of the contribution:

```xml
        <extension target="org.nuxeo.ecm.platform.audit.service.NXAuditEventsService" point="event">
          <event name="eventNameToAudit" />
        </extension>
```

should be updated to:

```xml
	<extension target="org.nuxeo.audit.service.AuditComponent" point="event">
		<event name="eventNameToAudit" />
	</extension>
```

###### Extended Info

Extended Info extension point didn’t change, just the target of the contributions:

```xml
  <extension target="org.nuxeo.ecm.platform.audit.service.NXAuditEventsService" point="extendedInfo">
     <extendedInfo key="title" expression="${source.dublincore.title}" />
  </extension>
```

should be updated to:

```xml
	<extension target="org.nuxeo.audit.service.AuditComponent" point="extendedInfo">
		<extendedInfo key="title" expression="${source.dublincore.title}" />
	</extension>
```

### Bump Third-Party Services to Latest Version

Upgraded the MongoDB Java driver `org.mongodb:mongodb-driver-sync` from 4.11.4 to 5.1.4.

### Allow the Use of S3 StrictAuthenticatedEncryption With a Local Keystore

You must set the **nuxeo.s3storage.crypt.keystore.legacymode** configuration property to **true** when upgrading from **lts-2023** to **lts-2025** if you have objects encrypted client-side with a local keystore in v1 AWS encryption API.

If you want to start a fresh production environment in **lts-2023** with a higher level of security, you should set the **nuxeo.s3storage.crypt.keystore.legacymode** configuration property to **false**.

### Move Swagger Rest API and Automation Doc to an Optional Marketplace

If you need the old swagger documentation or the automation documentation, please install the **nuxeo-rest-api-documentation** marketplace from connect.

Doc source is now located at https://github.com/nuxeo/nuxeo-rest-api-swagger-doc.

### Fix Random Convert Related Tests

The convert cache contribution has changed. You need to migrate your contributions to the extension point `org.nuxeo.ecm.core.convert.service.ConversionServiceImpl-configuration`.
For example, see below an old contribution:
```Java
  <extension target="org.nuxeo.ecm.core.convert.service.ConversionServiceImpl" point="configuration">
    <configuration>
      <enableCache>true</enableCache>
      <cachingDirectory>/tmp/nuxeo-convert-cache</cachingDirectory>
      <gcInterval>10</gcInterval>
      <diskCacheSize>10240</diskCacheSize>
    </configuration>
  </extension>
```
That will be converted to:
```Java
  <extension target="org.nuxeo.ecm.core.convert.service.ConversionServiceImpl" point="configuration">
    <cache enabled="true">
      <directory>/tmp/nuxeo-convert-cache</directory>
      <gcRate>10m</gcRate>
      <maxSize>10240</maxSize>
    </configuration>
  </extension>
```

### DocumentTaskProvider getTasks Should Rely on an Elastic to Avoid Mongo Timeouts

The page providers below have been set to use Elasticsearch by default. Make sure you add them to the `elasticsearch.override.pageproviders` nuxeo.conf property if you've overridden it.
```
GET_TASKS_FOR_ACTORS,GET_TASKS_FOR_ACTORS_OR_DELEGATED_ACTORS,GET_TASKS_FOR_PROCESS,GET_TASKS_FOR_PROCESS_AND_ACTORS,GET_TASKS_FOR_PROCESS_AND_NODE,GET_TASKS_FOR_TARGET_DOCUMENT,GET_TASKS_FOR_TARGET_DOCUMENTS,GET_TASKS_FOR_TARGET_DOCUMENTS_AND_ACTORS,GET_TASKS_FOR_TARGET_DOCUMENTS_AND_ACTORS_OR_DELEGATED_ACTORS
```

### Make the Nuxeo Launcher Log4j Configuration File Overridable

The `bin/nuxeoctl` script has been updated by this feature, so if you're using the HF mechanism on a standalone zip server, you might set back the execute permission to `bin/nuxeoctl`, something like below:
```Java
chmod +x bin/nuxeoctl
```

### Create a Nuxeo Stream Log4j2 Appender Package

You need to install nuxeo-log4j-stream package when upgrading to LTS 2025 if you were using NuxeoStreamAppender in your `log4j2.xml` file.

### Provide OpenSearch1 NXQL Hints

ElasticSearch hint extension point has been moved to new SearchService component. Your contributions need to be replaced to:

```xml
<extension target="org.nuxeo.ecm.core.search.client.opensearch1" point="hint">
  <hint name="yourHint" class="com.your.hint.implementation.Hint" />
</extension>
```


### Extend Search Service With Advanced Search Capabilities

### Breaking Change

#### Aggregate field definition

The aggregate fields expressed in parameter attribute of the PageProvider definition need to be updated to match the Nuxeo XPath notation.

For example, the following contribution:

```
    <coreQueryPageProvider name="page_provider_name">
      ...
      <whereClause>
        ...
        <aggregate id="common_size_agg" type="range" parameter="file:content.length">
          ...
        </aggregate>
        ...
      </whereClause>
      ...
    </coreQueryPageProvider>
```

should be updated to:

```
    <coreQueryPageProvider name="page_provider_name">
      ...
      <whereClause>
        ...
        <aggregate id="common_size_agg" type="range" parameter="file:content/length">
          ...
        </aggregate>
        ...
      </whereClause>
      ...
    </coreQueryPageProvider>
```

### Rework Server Functional Tests

Selenium WebDriver was completely removed from the stack:
- The few functional tests remaining on the server and some packages were reworked to rely on a HTTP client.
- No more browser tests nor screenshots in case of failure.

The `nuxeo-functional-tests` module was moved from `server` to `ftests`.

Removed the following dependencies:
```
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-api</artifactId>
</dependency>
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-support</artifactId>
</dependency>
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-firefox-driver</artifactId>
</dependency>
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-ie-driver</artifactId>
</dependency>
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-chrome-driver</artifactId>
</dependency>
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>htmlunit-driver</artifactId>
</dependency>
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>htmlunit</artifactId>
</dependency>
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-server-standalone</artifactId>
</dependency>
<dependency>
  <groupId>net.jsourcerer.webdriver</groupId>
  <artifactId>JSErrorCollector</artifactId>
</dependency>
<dependency>
  <groupId>net.lightbody.bmp</groupId>
  <artifactId>browsermob-proxy</artifactId>
</dependency>
```
Removed the following Java packages in `nuxeo-functional-tests`:
```
org.nuxeo.functionaltests.contentView
org.nuxeo.functionaltests.drivers
org.nuxeo.functionaltests.forms
org.nuxeo.functionaltests.fragment
org.nuxeo.functionaltests.pages
org.nuxeo.functionaltests.proxy
org.nuxeo.functionaltests.shibboleth
```
and most of the classes in the `org.nuxeo.functionaltests` package.

Most of the removed code was used for JSF UI, which is no more released in 2025.

### Upgrade to AWS SDK 2

Deprecated S3 blob provider configuration properties:
- **nuxeo.s3.multipart.copy.part.size** is deprecated and unused, use **nuxeo.s3storage.minimum.upload.part.size** instead.
- **nuxeo.s3storage.multipart.copy.threshold**  is deprecated and unused, use **nuxeo.s3storage.multipart.upload.threshold** instead.
- **nuxeo.s3storage.multipart.cleanup.disabled**  is deprecated and unused, see below.

New S3 blob provider configuration properties:
- **nuxeo.s3storage.concurrency.max** to configure [the maximum number of allowed concurrent requests of the AWS CRT client](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/s3/S3CrtAsyncClientBuilder.html#maxConcurrency(java.lang.Integer)) used by the transfer manager for parallel data upload and downloads.
-  **nuxeo.s3storage.targetThroughputInGbps** to define [the target throughput for transfer requests of the AWS CRT client](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/s3/S3CrtAsyncClientBuilder.html#targetThroughputInGbps(java.lang.Double)) used by the transfer manager for parallel data upload and downloads.
- **nuxeo.s3storage.crypt.kms.legacymode** which must be set to **true** when upgrading from **lts-2023** to **lts-2025** if you have objects encrypted client-side with a KMS key using the AWS encryption API  v2. See NXP-32760.

The Nuxeo server no longer aborts old Multipart uploads. Adding a bucket lifecycle configuration to delete incomplete multipart uploads is highly recommended. See [AWS documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpu-abort-incomplete-mpu-lifecycle-config.html).

HEAD requests on Presigned URLs are no longer supported. See NXP-32293 and [aws-sdk-java-v2 limiation](https://github.com/aws/aws-sdk-java-v2/issues/5276).

The old and deprecated **org.nuxeo.ecm.core.storage.sql.S3BinaryManager** implementation has been deleted and is no longer part of the distribution. The remaining classes from the **org.nuxeo.ecm.core.storage.sql** package have been merged into the **org.nuxeo.ecm.blob.s3** one. Please update any dependant project accordingly.


## Hotfix 6

### Remove Buildnumber-Maven-Plugin From Default Execution

The `buildnumber-maven-plugin` has been removed from the default Maven execution because it didn’t work on project without Versioning Control System (such as Git).

## Hotfix 5

### Remove Dependency on `commons-lang` libraries

Removed the following dependencies from the root POM’s dependencyManagement section. If your project depends on the Nuxeo parent POM and relies on these libraries, you’ll have to upgrade your project to not depend on these libraries anymore.

* `net.sf.json-lib:json-lib`
* `commons-lang:commons-lang`

Also, removed the following library from the Nuxeo Docker image and Tomcat server ZIP: `$NUXEO_HOME/lib/commons-lang-2.6.jar`.

### Upgrade DuoWeb SDK to the Latest Version

See [https://doc.nuxeo.com/nxdoc/nuxeo-duoweb-two-factor-authentication/](https://doc.nuxeo.com/nxdoc/nuxeo-duoweb-two-factor-authentication/) for configuring Duo's two-factor authentication.

### Fix JSF 2023 Functional Tests Failing on Document Update

We’ve added two nuxeo.conf parameters, allowing to configure the Tomcat Connector’s `maxPartCount` and `maxPartHeaderSize` attributes. The default values match the ones set in the future version of Tomcat, 9.0.107:

- `nuxeo.server.http.maxPartCount=50`
- `nuxeo.server.http.maxPartHeaderSize=512`

## Hotfix 3

### Allow Having FFMpeg Installed in the LTS 2023/2025 Docker Image

Upgraded ImageMagick 7 from 7.1.1.36-341 to 7.1.1.47-1.

### Fix Vim Low CVE in Docker Image

Vim editor was upgraded in the Docker image from `8.2.2637-21.0.1` to `8.2.2637-22.0.1`.

### Deprecate Portal SSO Authentication

The [nuxeo-platform-login-portal-sso](https://github.com/nuxeo/nuxeo-lts/tree/2025/modules/platform/login/nuxeo-platform-login-portal-sso) module was deprecated in LTS 2025. Use [OAuth 2.0 Client Credentials flow](https://doc.nuxeo.com/nxdoc/using-oauth2/#oauth-2-client-credentials-flow) instead.

## Hotfix 1

### Migration Tool to Extract Full Text From Mongo DB to an S3 Blob

Here is the 4 step migration process that you can follow when you want to switch the storage of binary fulltext from the repository (MongoDB) to an S3 bucket on an existing instance.

**1. Update the** `nuxeo.conf` **and restart all nodes**

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

After this, the binary fulltext of new blob will be stored in the S3 bucket under `/fulltext/` prefix.

Everything should work properly while there are two different storages for the binary fulltext.
Re-indexing will not change this state. Running `extractBinaryFulltext` will do but this is not efficient since it’s slow and expensive. Follow the next steps for the migration.

**2. Clean MongoDB fulltext**

Since we have disabled the fulltext search from the repository, we can remove existing index and fields. Check if MongoDB `fulltext` index exists

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

Remove MongoDB field `ecm:fulltextSimple`. This can be a long operation depending on the db size.

```
db.default.updateMany({}, {$unset: {"ecm:fulltextSimple":1}});
```

**3. Run the migration**

```
curl -s -X POST "http://localhost:8080/nuxeo/api/v1/management/fulltext/fixBinaryStorage" -u Administrator:Administrator
```

It’s possible to test it by providing a custom NXQL `query`. The default query match all docs that is not a proxy.

**4. Remove the migration bulk action and restart all nodes**

Change the `nuxeo.conf` and restart

```
nuxeo.bulk.action.fixBinaryFulltextStorage.enabled=false
```

### Restrict the Visibility of Administrators' Members

The new `nuxeo.group.administrators.members.resticted` nuxeo.conf property, when set to `true`, allows to restrict the visibility of the member users, member groups and parent groups of an administrator group, typically the “administrators” group. In this case, making a call to `/nuxeo/api/v1/groups/administrators` as a non-administrator user returns empty lists for the ”memberUsers”, “memberGroups” and “parentGroups“ properties.

This property is not set by default.

