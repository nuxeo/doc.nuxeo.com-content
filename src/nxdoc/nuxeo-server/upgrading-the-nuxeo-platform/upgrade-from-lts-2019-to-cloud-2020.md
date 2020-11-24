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
<component name="my.component.name">
  <extension target="org.nuxeo.ecm.core.schema.TypeService" point="schema">
    <property schema="YOUR_SCHEMA" name="PROP_NAME" secured="true" />
  </extension>
</component>
You can also relax the constraint on a secured property, for example dc:creator with:
<component name="my.component.name">
  <require>org.nuxeo.ecm.core.CoreExtensions</require>
  <extension target="org.nuxeo.ecm.core.schema.TypeService" point="schema">
    <property schema="dublincore" name="created" secured="false" />
  </extension>
</component>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27137](https://jira.nuxeo.com/browse/NXP-27137)

## Nuxeo API Changes

#### New Endpoint to Get All Comments for 50+ Annotations Documents

- **REST API**:
    The endpoint GET `/nuxeo/api/v1/id/DOC_ID/@annotation/comments` has been deprecated in favor of POST `/nuxeo/api/v1/id/DOC_ID/@annotation/comments`.

    The annotationIds are now given in the payload request as a simple json array.

    For instance:
    ```
    curl -XPOST http://localhost:8080/nuxeo/api/v1/id/DOC_ID/@annotation/comments -d '[ "ANNOT_ID1", "ANNOT_ID2", ...  ]'
    ```

- **Java API**
    Added:
    ```
    CommentManager#getComments(CoreSession session, Collection<String> documentIds)
    AnnotationAdapter#getCommentsFromBody(String payload)
    ```

    Deprecated:
    ```
    AnnotationAdapter#getComments(@QueryParam("annotationIds") List<String> annotationIds)
    ```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29610](https://jira.nuxeo.com/browse/NXP-29610)

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

### ConfigurationService API

APIs below were deprecated:
 - `String getProperty(String)` in favor of `Optional<String> getString(String)`
 - `String getProperty(String, String)` in favor of `String getString(String, String)`
 - boolean `isBooleanPropertyTrue(String)` in favor of boolean `isBooleanTrue(String)` (same behavior)
 - boolean `isBooleanPropertyFalse(String)` in favor of boolean `isBooleanFalse(String)` - new API returns true if and only if property value is false, it wasn't the case for `isBooleanPropertyFalse` which returns true if property value is not blank and is not `true`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26181](https://jira.nuxeo.com/browse/NXP-26181)

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

#### Error Management on Invalid Operation/Chain/Codec Registration

Operation chain contributions should now require contributions holding operations that they reference.

The following issue will now prevent server from starting in strict mode:
- invalid chain declaration, referencing an operation unknown to the service at registration time
- invalid operation class declaration (class not found or not an operation)
- invalid automation codec class declaration (class not found or not a codec)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29499](https://jira.nuxeo.com/browse/NXP-29499)

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

### Make Tests Stop Depending on nuxeo-automation-client

Tests depending on `EmbeddedAutomationServerFeature` can now make use of a limited-functionality `org.nuxeo.ecm.automation.test.HttpAutomationClient` (in a new package) that does direct HTTP calls and doesn't attempt to map JSON responses to a domain-level object model like Document, etc.

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

#### Rename the Parameter "overwite" of filemanager.import to "overwrite"

In the FileManager.Import operation, the misspelled param `overwite` has been renamed to overwrite:
- `overwite` is now deprecated, no more used and replaced by `overwrite`.
- `overwite` is kept as an alias for backward compatibility.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29286](https://jira.nuxeo.com/browse/NXP-29286)

## Workflow

### Behavior Changes

#### Workflow Page Providers Now Used the `ecm:isTrashed` Attribute

Workflow page providers now used the `ecm:isTrashed` attribute.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29183](https://jira.nuxeo.com/browse/NXP-29183)

## Elasticsearch

Since Nuxeo 11.4, Elasticsearch client library version 7.9.2 is used.

Once you have adapted your application to follow the behavior changes of Elasticsearch 7.x,
you need to upgrade your existing Elasticsearch cluster to version 7.9 (7.7 or 7.8 are also supported).

### Behavior Changes

#### Update Your Custom Elasticsearch Settings and Mapping

If you have a custom configuration for Elasticsearch, it needs to be adapted to follow the new 7.x rules.

Here are a few breaking changes to take into account when upgrading from Elasticsearch 6:

- If you use the nGram tokenizer the type has been renamed from `nGram` to `ngram`.

- A phrase prefix search on a `keyword` field now raises an exception, this will happen on the following query:

  ```sql
  SELECT * FROM Document WHERE someKeywordField LIKE 'foo%'
  ```

  The field needs to be of `text` type.


If you have to adapt your setting or mapping, you will need to re-index the repository to apply the change.

#### Don't Use the TransportClient

The connection to Elasticsearch should use the `RestClient` (default since Nuxeo LTS 2017),
the `TransportClient` is deprecated in version 7.x.

Technically, it can work if the index exists, but re-indexing is going to fail.

There is no advantage of using the `TransportClient` over the default `RestClient`.

#### Warnings in Unit Test with Embedded Elasticsearch Instance

Your unit tests may have the following WARN messages:

```
2020-11-16 11:10:43,561 [main] WARN  [DanglingIndicesState] gateway.auto_import_dangling_indices is disabled, dangling indices will not be automatically detected or imported and must be managed manually
2020-11-16 11:10:43,828 [elasticsearch[nuxeoTestNode][clusterApplierService#updateTask][T#1]] WARN  [ClusterApplierService] failed to notify ClusterStateListener
org.apache.lucene.util.SetOnce$AlreadySetException: The object cannot be set twice!
```

You can ignore them by editing your `log4j2` test configuration to add:

```xml
    <!-- Remove WARN on elastic embedded because dangling indices cannot be detected -->
    <Logger name="org.elasticsearch.gateway.DanglingIndicesState" level="error" />
    <!-- Remove WARN on elastic embedded because node and cluster identifiers change between test suites -->
    <Logger name="org.elasticsearch.cluster.service.ClusterApplierService" level="error" />
```

#### Adapt Your Custom Elasticsearch Queries

If you use the [Elasticsearch Passthrough]({{page page='elasticsearch-passthrough'}}),
or if you use directly the [elasticsearch query builder](https://github.com/nuxeo/nuxeo/blob/v11.4.32/modules/platform/nuxeo-elasticsearch/nuxeo-elasticsearch-core/src/main/java/org/nuxeo/elasticsearch/query/NxQueryBuilder.java#L164),
make sure your query works in Elasticsearch 7.x.

One of the biggest changes is that the Elasticsearch document type has been removed,
for instance, this changes the URL pattern to access a Nuxeo document from `http://elastic:9200/nuxeo/doc/<DOC_ID>` to: `http://elastic:9200/nuxeo/<DOC_ID>`.

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

### Upgrade Elasticsearch to 7.x

The procedure depends on when your instance has been created:

#### Elasticsearch Indexes Created in Elasticsearch 6.x (Nuxeo 10.10/LTS 2019)

Elasticsearch 7.x can read indexes created in version 6.0 or above.

This means that there is no migration to do if your Nuxeo instance has been created with Nuxeo LTS 2019.

Follow the [Elasticsearch upgrade documentation](https://www.elastic.co/guide/en/elasticsearch/reference/7.x/setup-upgrade.html) to upgrade your Elasticsearch Cluster.

If you had to adapt your Elasticsearch settings or mappings for 7.x,
you have to proceed to a [repository re-index]({{page page='elasticsearch-setup'}}#reindex) in order to apply the new configuration.

#### Migration of Elastic Indexes Created in Elasticsearch 5.x (Nuxeo 9.10/LTS 2017)

An Elasticsearch 7.x node will not start in the presence of indexes created in a version of Elasticsearch before 6.0.
Indexes created in Elasticsearch 5.x or before will need to be reindexed with Elasticsearch 6.x in order to be readable by Elasticsearch 7.x.

Nuxeo uses 3 indexes:

1. The repository index, named `nuxeo` by default, doesn't need this migration because the repository
 will be re-indexed in the next step, so, once this index has been backed up, you can delete it.

2. The sequence index named `nuxeo-uidgen` will be re-created at startup, so, once this index has been backed up, you can delete it.

3. The audit index named `nuxeo-audit` needs to be migrated. Follow the [re-index upgrade procedure](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/reindex-upgrade.html).

Once the Elasticsearch cluster is upgraded, start Nuxeo LTS 2021 and proceed to a [repository re-index]({{page page='elasticsearch-setup'}}#reindex).

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

It is no more possible to call `FileManager.Import` in a sychronous event, it has to be done in an asynchronous event. See [NXP-28534](https://jira.nuxeo.com/browse/NXP-28534).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27346](https://jira.nuxeo.com/browse/NXP-27346)

## Monitoring

### Behavior Changes

#### Tagging for Datadog Metrics

Many metrics names have been renamed in order to support tagging which is necessary for Datadog and Prometheus support.

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

## Addons

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

## Farewell

### Remove Deprecated `org.nuxeo.ecm.core.model.LockManager`

The internal interface `org.nuxeo.ecm.core.model.LockManager` has been removed, `org.nuxeo.ecm.core.api.lock.LockManager` should be used instead.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29654](https://jira.nuxeo.com/browse/NXP-29654)

### Remove Old JDBCClusterInvalidator for VCS

The configuration property `repository.clustering.delay` is now fully unused (all clustering invalidation propagation is immediate).

The unused class JDBCClusterInvalidator has been removed.

The configuration property `repository.clustering.delay` is not used anymore, and in the &lt;repository&gt; extension point, the &lt;clustering&gt; part doesn't exist anymore.

(Note that the &lt;clustering&gt; id= and enabled= attributes were removed from the &lt;repository&gt; extension point by [NXP-25499](https://jira.nuxeo.com/browse/NXP-25499).)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28891](https://jira.nuxeo.com/browse/NXP-28891)

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
<td colspan="1">com.sun.xml.bind:jaxb-impl</td>
<td colspan="1">2.3.0.1</td>
<td colspan="1">2.3.3</td>
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
<td colspan="1">javax.xml.bind:jaxb-api</td>
<td colspan="1">2.2.11</td>
<td colspan="1">jakarta.xml.bind:jakarta.xml.bind-api:2.3.3</td>
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

## Dependencies Removal

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Removed component</th>
</tr>
<tr>
<td colspan="1">com.sun.xml.bind:jaxb-core</td>
</tr>
</tbody>
</table>
</div>


## Complementary Information

- [Release notes for Nuxeo Cloud Platform 2020]({{page version='' space='nxdoc' page='nuxeo-server-release-notes'}})
