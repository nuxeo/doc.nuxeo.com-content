---
title: LTS 2025.0 / LTS 2025-HF00
description: Discover what's new in LTS 2025.0 / LTS 2025-HF00
review:
   comment: ''
   date: '2025-02-11'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 10000
---

{{! multiexcerpt name='nuxeo-server-updates-2025-0'}}
# What's New in LTS 2025.0 / LTS 2025-HF00

## Nuxeo Server

### Upgrade to AWS SDK 2

All AWS JAVA SDK dependencies were bumped to v2.

Encryption APIs for client-side encryption were bumped to v3 (previously v2). See upgrade notes instructions for more details.

### Make Creation of User Without Password Using the REST API Configurable

The `nuxeo.user.password.empty.enabled` nuxeo configuration property can be set to `true` to create users without password. Its default value is `false`**.**

### Requesting an Unknown Document Id With Easyshare Returns a 500 Error

Exception happening in WebEngine is now better caught when the requested MediaType is not `application/json`.

An exception writer has been added for `text/html` media type, so Nuxeo Server WebEngine now handles the following media type for NuxeoException handling:

- `text/html`
- `application/json` which is the default fallback for other media types

### Improve Server Assembly to Leverage More the Maven Tree

Nuxeo Server Packaging has been improved to support container lib.

The container lib (that is, the ones under TOMCAT_HOME/lib) is now included in `nuxeo-nxr-server`, allowing to create marketplace package that needs to add librairies there.

### Fix Infinite Login Loop When the Anonymous User Is Enabled

Fixed infinite login loop when the anonymous user is enabled.

### Do Not Scroll Record Blob Provider by Default When Triggering Full GC

Records blob provider are no longer scrolled for Full GC.

A **records** query parameter is available on the Garbage Collect Document's Blobs endpoint in case there is a need for garbage collecting the record blob provider. See [blobs endpoints]({{page version='1' section='rest-api' page='blobs-endpoint'}}#garbage-collect-documentand39s-blobs) for more information.

### Fix nuxeoctl.bat After Making the Nuxeo Launcher Log4j Configuration File Overridable

Add launcher Log4j configuration support to `nuxeoctl.bat`.

### Stop Using Joda DateTime in login.jsp and Other JSP Files

Platform JSP files no longer rely on Joda-Time library.

### Fix Rendition Web Adapter for Picture and Video Documents

@rendition rest adapter now returns rendition contributed by rendition providers.

### Upgrade PDFBox From 2.x.y to 3.x.y

PDFBox was upgraded from 2.0.32 to 3.0.3.

### Optimise Command Line Executor Startup

Command line executor startup was optimized.

The Command line executor startup has been optimized by caching the shell commands existence test.

We have observed a 10% gain on a stock Nuxeo Server startup.

In the same time, we have reworked the command existence warning logs to print a more concise one.

### Create a NuxeoForwardDeprecatedPathFilter for Removed REST APIs

Removed REST APIs now has extended support

The `NuxeoForwardDeprecatedPathFilter` was added to Nuxeo Platform to bring backward compatibility with removed REST APIs.
When a removed REST APIs is hit, the filter logs the information at info level (warn level in dev mode).

As every request made to Nuxeo is checked, the filter could be disabled by setting the following nuxeo.conf property:

```
nuxeo.forward.deprecated.path.enabled=false
```

### Remove Jena Implementation in Nuxeo-Platform-Relations

The Jena plugin for Nuxeo Relation has been removed.

The `nuxeo-platform-relations-jena-plugin` has been removed from Nuxeo Platform because it was supporting only SQL and not MongoDB. It has been superseded by core relations.

### Make Possible to Run Nuxeo With MongoDB Without H2

Nuxeo deployed with MongoDB doesn't need H2 anymore.

Nuxeo doesn’t need to have H2 library in its classpath when it is deployed with MongoDB.

This improves security, by removing a library from the Nuxeo runtime, and performance, by removing components to be loaded.

### Make Possible to Search in Extended Infos

LogEntry extended infos are now searchable.

Extended info constraints can now be used when searching in the Audit.

This could be expressed in an NXQL request given to the AuditPageProvider:. For example:

```
SELECT * FROM LogEntry WHERE extended/user = 'Administrator'
```

Or by using directly the AuditBackend#queryLogs(QueryBuilder) API. For example:

```
var entries = auditBackend.queryLogs(new AuditQueryBuilder().predicate(
    Predicates.eq("extended/user", session.getPrincipal().getName())))
```

### Align Quartz-Mongodb on quartz-2.5.0

The dependency `quartz-mongodb` has been updated.

### Better Handling of X-Forwarded-Proto Header When Others Are Not Present

The `X-Forwarded-Proto` header is now taken into account to deduce the port when no other `X-Forwarded-* headers are present.

### Make Keycloak Logout Work With Client Not Using Credentials

Keycloak logout now works with client authentication disabled.

### Add the Possibility to Retrieve the Contributing Component in Contributions

The Contributing Component can be retrieved in Descriptor with `@XContext`.

The contributing component, or the component which holds your contribution to an extension point, can now be retrieved with the `@XContext` annotation. This can be useful if your descriptor needs to lookup a resource present in your bundle. To use it, just add to your Descriptor:

```
    @XContext(XContextValues.CONTRIBUTING_COMPONENT)
    protected ComponentInstance contributingComponent;
```

### SAML Requests Should Be Signed

SAML requests are always signed when KeyManager is configured.

The SAML Requests sent to the IDP are always signed when the KeyManager component is configured.

The original cause was a startup order issue. A possible  workaround could be putting the KeyManager contribution before the SAML authenticator one.

### Create a Management REST API for UIDSequencer

A new Management REST API for Nuxeo Sequencer is available.

### Improve UIDGeneratorService Modularity

UIDSequencers have been reworked for better modularity.

The UIDSequencer modules have been reworked to allow more modularity, which provide better performance to Nuxeo Platform, mainly because only one sequencer is now contributing to Nuxeo Platform by default.

A new `nuxeo.conf` property has been added to Nuxeo Platform that allows defining of the default UIDSequencer used by Nuxeo:

```
nuxeo.uidsequencer.default.class=org.nuxeo.ecm.core.uidgen.KeyValueStoreUIDSequencer
```

And so, starting from Nuxeo Platform LTS 2025, the default UIDSequencer is now `KeyValueStoreUIDSequencer`.

The ElasticSearch/OpenSearch UIDSequencer has been extracted to the `nuxeo-uidgen-opensearch1` package marketplace. If you want to use it just install the package, check that the template `opensearch1-uidgen` is enabled, and the OpenSearch connection configuration is present in your `nuxeo.conf`:

```
# You can replace the prefix _nuxeo.uidsequencer.default_ by _nuxeo_ if you use other OpenSearch implementations that uses the same OpenSearch cluster
# Mandatory configuration
nuxeo.uidsequencer.default.opensearch1.client.server=
# Optional configuration
nuxeo.uidsequencer.default.opensearch1.client.connectionTimeout=30s
nuxeo.uidsequencer.default.opensearch1.client.socketTimeout=121s
nuxeo.uidsequencer.default.opensearch1.client.sslCertificateVerification=true
nuxeo.uidsequencer.default.opensearch1.client.username=
nuxeo.uidsequencer.default.opensearch1.client.password=
nuxeo.uidsequencer.default.opensearch1.client.trustStore.path=
nuxeo.uidsequencer.default.opensearch1.client.trustStore.password=
nuxeo.uidsequencer.default.opensearch1.client.trustStore.type=
nuxeo.uidsequencer.default.opensearch1.client.keyStore.path=
nuxeo.uidsequencer.default.opensearch1.client.keyStore.password=
nuxeo.uidsequencer.default.opensearch1.client.keyStore.type=
```

The JPA/SQL UIDSequencer has been extracted to the `nuxeo-uidgen-sql` package marketplace. If you want to use it just install the package and check that the template `sql-uidgen` is enabled.

The MongoDB UIDSequencer stays in the Nuxeo Platform, without being enabled/contributed. If you want to use it just add the line below to your `nuxeo.conf`:

```
nuxeo.uidsequencer.default.class=org.nuxeo.ecm.core.mongodb.seqgen.MongoDBUIDSequencer
```

### Fix RenditionWork to Use the Correct Repository

Rendition work is now compatible with multi repositories config.

### Catch ArithmeticException in Video Converter

Video conversion is now skipped if the height of the video is not known.

### CSP Errors Shows on Login Page

There are no more Content Security Policy (CSP) errors on the login page with a stricter CSP not allowing inline scripts.

### Fix Being Able to Create User With Empty Password

The REST API doesn't allow creating a user with an empty password.

### Make Possible to Load a RunnerFeature Dynamically

Features can now dynamically loads other features.

A feature can depend on other features by using annotation with `@Features` but this mechanism is static, that is, we can not condition a feature dependency for instance.

We have introduced `DynamicFeaturesLoader` to be able to depend on a feature with a simple programmatic API, for instance `MyFeature` can now depends on `MyOtherFeature` depending on some conditions. This is accomplished by created a constructor with a `DynamicFeaturesLoader` parameter in your feature, see an example below:
```java
public class MyFeature implements RunnerFeature {

    public MyFeature(DynamicFeaturesLoader loader) {
        if (Boolean.parseBoolean(System.getProperty("nuxeo.test.with.other.feature", "false"))) {
            loader.loadFeature(MyOtherFeature.class);
        }
    }
}
```

### Page Provider Does Not Escape Quote in Term Aggregate Value

Quotes are now escaped when running bulk action on term aggregate value that contain them.

### Fix Keycloak Logout URI After Multiple Calls

Keycloak logout URI doesn't keep previous query parameters.

### Improve the sequenceHexRandomized Retry Mechanism

The MongoDB sequenceHexRandomized retry mechanism has a maximum duration of 250 ms.

### Configure Tomcat Logs With Log4j

Tomcat Log configuration with Log4j

The Tomcat logs configuration can be handled by Log4j which easily allows to configure Tomcat logs in Cloud environments.

The introduced configuration routes all Tomcat logs to `log/catalina.log` (without the date) with same level as with the JUL configuration under `conf/logging.properties`.

### Fix NPE When Moving a Snapshotable Document

Moving a document to an Orderable folderable is now working correctly.

### Requesting a Non Existing Rendition Should Return Bad Request

A 400 HTTP code is now returned when requesting a non existing rendition.

### Add Spotless Maven Plugin to CI Build

The Nuxeo code formatting is now checked as part of our validation tests.

### Bump Third-Party Services to Latest Version

The MongoDB Java driver was upgraded from 4.x.y to 5.x.y.

### Comments Not Showing on Version Documents

AbstracSession#getOrCreateDocument now works properly to create a document under a version.

### Allow to Use S3 StrictAuthenticatedEncryption With a Local Keystore

A `nuxeo.s3storage.crypt.keystore.legacymode` configuration property default is `true` for lts-2023, and `false` for lts-2025 is available to decrypt objects encrypted client-side with a local keystore in v1 AWS encryption API.

### Move Swagger Rest API and Automation Doc to an Optional Marketplace

Rest Swagger doc available under `/nuxeo/api/v1/doc` endpoint and Automation doc available under `/nuxeo/api/v1/automation/doc` endpoint are no longer part of the default distribution.

If you need the old swagger documentation or the automation documentation, please install the nuxeo-rest-api-documentation marketplace from connect.

Doc source is now located [here](https://github.com/nuxeo/nuxeo-rest-api-swagger-doc).

### Add a Way to Add Appenders to Loggers Configured With @LoggerLevel

You can now configure additional appenders to loggers configured with `@LoggerLevel` in tests.

Loggers configured with help of `@LoggerLevel` in tests can now receive additional appenders. The resulting logger has `additivity` enabled and so the configured appenders are added to the existing one (the file appender that logs DEBUG logs and higher to `target/trace.log` and the console appender that logs WARN logs and higher to the console).

For example, the following logger will print INFO logs to the console:
```Java
@LoggerLevel(klass = DBSSession.class, level = "TRACE", appenders = NuxeoLoggingConstants.APPENDER_CONSOLE_INFO)
```
Thus, you will have slow DBS queries printed to the console.

### Page Provider Does Not Include Aggregate Selection in Search

Fixed bulk action on search results with aggregate selection.

### Fix Random Convert Related Tests

Convert Cache configuration has been improved.

### Fix S3BlobScroll on Blob Provider With KeyStrategyDocId

S3 Record blob providers are now properly scrolled.

### Add Amazon S3 Client-Side Encryption With AWS KMS Managed Keys

AWS S3 Client-side encryption with KMS is now possible.

AWS KMS client-side encryption can be enabled by defining a KMS key ID with the following property:
```Java
nuxeo.s3storage.crypt.kms.clientside.key=your-kms-key-id
```
Optionally, specify the region of the KMS key if it is different from the environment or bucket one:
```Java
nuxeo.s3storage.crypt.kms.clientside.region=your-kms-key-region
```

### DocumentTaskProvider getTasks Should Rely on an Elastic to Avoid Mongo Timeouts

The task related page providers now rely on Elasticsearch by default.

### Scim 2.0: Do Not Fetch Group Members When Not Needed

Group members are not fetched when not needed.

### Implement Nuxeo SCIM 2.0 Update Endpoint for Groups

The PATCH method is available for the /scim/v2/Groups/{id} endpoint.

### Fix ZIP Import for Document With Path Traversal Values

Path traversals are detected more precisely.

### Return 400 Status Code for Incorrect Entity-Type

Workflow requests with wrong workflow name or entity type return 404 and 400 codes.

### Make Bulk Scroller Use a Specific Kafka Configuration

The Bulk Scroller is now using a slow consumer Kafka configuration.

### Add Editor to Oracle Linux Docker Image

Added Vim editor to the Nuxeo Docker image.

### Fallback to Application/Octet-Stream if ??? Is the Detected MIME Type

The MIME type of a document file is set to "application/octet-stream" if undefined.

### Make the Nuxeo Launcher Log4j Configuration File Overridable

The Log4j configuration file for Nuxeo Launcher can now be customized.

Previously present in the launcher, the Nuxeo Launcher Log4j configuration file has been extracted to `/lib/log4j2-launcher.xml` so that it could be edited.

A new `nuxeo.conf` property has been introduced to reference the log4j configuration file if needed:
```Java
launcher.log4j2.file=/etc/nuxeo/log4j2-launcher.xml
```
WARNING:
Variable expansion is not supported on this property because the property is used before launcher invocation which owns this mechanism.


### Boolean Property Set to a Random String Value Using the Document REST API Should Throw an Exception

The "nuxeo.primitive.type.strict.validation" nuxeo.conf property allows to throw an error when decoding a string input as a boolean.

Boolean primitive type validation now relies on the `nuxeo.primitive.type.strict.validation` Framework property.

By default, it is set to `false`, keeping the previous behavior: at a low level, when trying to decode a string input as a boolean, fall back on 0 if the string cannot be decoded as a boolean. For example, "foo".

If set to `true`, an `IllegalArgumentException` is thrown.

Consequently, when executing a REST API:
-  search request on a PageProvider and passing "foo" as a query parameter for a predicate on a boolean field
  or
- create a document request and set "foo" as a value for a boolean property

the server will respond with a 400 Bad Request status code.


### Allow to Configure the Content Security Policy With nuxeo.conf Parameter

A new nuxeo.conf property allows to override the default Content Security Policy.

Added new `nuxeo.conf` property to override the default Content Security Policy:
```Java
nuxeo.content.security.policy=img-src data: blob: *; default-src blob: *; script-src 'nonce-dummy' 'unsafe-eval' 'strict-dynamic'; style-src 'unsafe-inline' *; font-src data: *
```

### Create a Nuxeo Stream Log4j2 Appender Package

NuxeoStreamAppender has been extracted to nuxeo-log4j-stream package.

### CSV Import Optional Trim

Imported CSV values trimming can be disabled.

You can disable trimming of the imported CSV values with the following contribution:

```
  <require>org.nuxeo.ecm.csv.core.properties</require>
  <extension point="configuration" target="org.nuxeo.runtime.ConfigurationService">
    <property name="nuxeo.csv.import.trim">false</property>
  </extension>
```

When importing a CSV with the `CSV.Import` automation operation, you can also set the new `trim` parameter to `false`.

### Fix Documents With Name That Begins With @ ("At" Sign)

Any heading with `@` character in the document title is replaced by `_` when computing the document path.

### Fix How Framework.getProperty Reads Accentued Characters

The nuxeo.conf and other nuxeo properties files are now read / written with UTF-8 encoding.

### Fix Inline Parameter Not Working When Direct Download Is Enabled

Blobs are now displayed in the browser with inline parameter and S3 direct download.

### Rework Server Functional Tests

Reworked functional tests to remove Selenium WebDriver from the dependencies.

### Fix Thumbnail Rendition for JPG With Orientation in EXIF Metadata

Fixed thumbnail rendition for JPG File with orientation in EXIF metadata.

### Fix XSS in Easyshare Folder Form

Easyshare web and mail templates are now HTML escaped.

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

### Migration Tool to Extract Full Text From Mongo DB to an S3 Blob

In order to reduce the MongoDB collection size, it’s now possible to move in a efficient way the fulltext extracted from binaries (stored in MongoDB) to a s3 bucket on an existing instance. See the 4 step migration process in the upgrade notes.

### Fix Inline Parameter Not Working When Direct Download Enabled

Blobs are now displayed in the browser with inline parameter and S3 direct download

## Addons

### Nuxeo Retention 

#### setRetainUntil Can't Set Indeterminate Dates

When setting a document under indeterminate retention, retainable blobs are put under legal hold in S3. This legal hold is then removed whenever the document has a determinate retention date.

### Release Nuxeo SCIM 2.0 Package

The [nuxeo-scim-v2](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-scim-v2) package was released.

## Deprecation

### Deprecate OAuth 1.0 for LTS 2025

The OAuth 1 protocol has been deprecated for LTS 2025.

## Farewell 

### Remove Nuxeo-Platform-3d Modules and Package

Removed nuxeo-platform-3d modules and package, replaced by the [Nuxeo 3D Viewer]({{page page='nuxeo-3d-viewer'}}) package.

### Remove Nuxeo-Platform-Forms-Layout Modules

The nuxeo-platform-forms-layout modules have been removed from Nuxeo Platform.

### Remove Nuxeo-Theme-Styling Module

The nuxeo-theme-styling has been removed from the Nuxeo platform.

### Remove Mobile Banner From Login Page

The mobile banner has been removed from the login page and all the JSF UI pages, since the mobile app is no longer maintained.

### Remove NTLM Login

NTLM Login has been removed from Nuxeo Platform.

### Remove Deprecated Code Since 10.10

Code deprecated since 10.10 has been removed from Nuxeo

#### Configuration Properties

##### Configuration Service

`org.nuxeo.ecm.core.uidgen.sequencer.hibernate` was removed, the default sequencer is always used

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

{{! /multiexcerpt}}
