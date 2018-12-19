---
title: Upgrade from LTS 2017 following Fast Tracks
review:
    comment: ''
    date: '2018-11-16'
    status: ok
labels:
    - multiexcerpt
    - upgrade
    - akervern
toc: true
tree_item_index: 90

---

## From LTS 2017 to 10.1

### Installation and Configuration

#### New Parameters

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Parameter</th>
<th colspan="1">Modification</th>
<th colspan="1">Reference</th>
</tr>
<tr>
<td colspan="1">`nuxeo.server.hsts.enabled`</td>
<td colspan="1">Default value to `false`</td>
<td colspan="1">[NXP-24030](https://jira.nuxeo.com/browse/NXP-24030)</td>
</tr>
</tbody>
</table>
</div>

### Code Changes

#### Replace `json-lib` with `jackson`

{{! multiexcerpt name='upgrade-10.1-code.jackson'}}

You should now use `com.fasterxml.jackson.core:jackson-*`, instead of `net.sf.json-lib:json-lib`.

See [NXP-24093](https://jira.nuxeo.com/browse/NXP-24093).

{{! /multiexcerpt}}

#### CSRF Protection

{{! multiexcerpt name='upgrade-10.1-code.csrf-protection'}}

CSRF protection is activated by default and based on the CORS configuration, along with its `allowOrigin` and `supportedMethods` parameters, which by default doesn't allow any cross origin.

See [NXP-24331](https://jira.nuxeo.com/browse/NXP-24331).

{{! /multiexcerpt}}

#### Video Conversion Listener

{{! multiexcerpt name='upgrade-10.1-code.video-listeners'}}

The video info (duration, format, etc.) is now computed by an asynchronous work to avoid loading the blob and running `ffmpeg-info` synchronously. This work, schedules two asynchronous works to process the video storyboard and conversions.

Class removed: `VideoAutomaticConversionListener`, `VideoStoryboardListener` and `org.nuxeo.ecm.platform.video.VideoConstants#VIDEO_CHANGED_EVENT` (`videoChanged`).

Class added: `VideoInfoWork` and `VideoStoryboardWork`.

See [NXP-24316](https://jira.nuxeo.com/browse/NXP-24316).

{{! /multiexcerpt}}

#### Code Behavior Changes

{{! multiexcerpt name='upgrade-10.1-behavior.field.version.indexed'}}
- `ecm:versionVersionableId` is now indexed by Elasticsearch.
</br>
  See [NXP-24114](https://jira.nuxeo.com/browse/NXP-24114).

{{! /multiexcerpt}}

{{! multiexcerpt name='upgrade-10.1-code.rest-stack-trace'}}

- Exception stack trace is no longer written in the response by default. Use parameter `org.nuxeo.rest.stack.enable` to enable it.
</br>
  See [NXP-23861](https://jira.nuxeo.com/browse/NXP-23861).

{{! /multiexcerpt}}

#### Deprecated APIs

##### @LocalDeploy

{{! multiexcerpt name='upgrade-10.1-deprecated.localdeploy'}}

`@LocalDeploy` is now deprecated it must not be used anymore, use `@Deploy` instead that now allows you to deploy local contributions.

See [NXP-22544](https://jira.nuxeo.com/browse/NXP-22544).

{{! /multiexcerpt}}

##### CoreSession#close

{{! multiexcerpt name='upgrade-10.1-deprecated.coresession-close'}}

`CoreSession.close()` is deprecated and should not be used anymore.

See [NXP-24089](https://jira.nuxeo.com/browse/NXP-24089).

{{! /multiexcerpt}}

### Complementary Information

- [Upgrade notes for 10.1](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%2210.1%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
- [Release notes for 10.1]({{page version='' space='nxdoc' page='nuxeo-server-release-notes'}})

## From 10.1 to 10.2

### Installation and Configuration

#### Requirements

{{! multiexcerpt name='upgrade-10.2-installation-requirements'}}
- **Elasticsearch** >= 6.x is required.
{{! /multiexcerpt}}
- **Kafka** >= 1.1.0 is required.

### Data

#### Elasticsearch

{{! multiexcerpt name='upgrade-10.2-installation-elasticsearch-upgrade'}}

Elasticsearch 6.x is required since Nuxeo 10.2. Follow those necessary steps to upgrade:

1. Upgrade Elasticsearch version
1. Update your custom settings and mapping to follow new Elasticsearch rules
1. Re-index the repository to apply the new settings and mapping
1. Update your custom code that queries Elasticsearch directly

##### Upgrade Elasticsearch Version

If your indices have been created with LTS 2017 they are in Elasticsearch 5.6 format and can be read by Elasticsearch 6.x.
in this case follow the [full cluster restart upgrade procedure](https://www.elastic.co/guide/en/elasticsearch/reference/current/restart-upgrade.html).

If your indices have been created with LTS 2016 (Elasticsearch 2.x format) or LTS 2015 (1.x format) Elasticsearch 6.x will not start,
in this case an index need to be migrated to the new Elasticsearch 6.x format:
- The repository index named `nuxeo` by default doesn't need this migration because the repository will be re-indexed in the next step,
  so once this index has been backed up you can delete it.
- The sequence index named `nuxeo-uidgen` cannot be migrated because the `_source` field is disabled, Nuxeo will take care to re-create this index at startup,
  so once this index has been backed up you can delete it.
- The audit index named `nuxeo-audit` need to be migrated. Follow the [reindex upgrade procedure](https://www.elastic.co/guide/en/elasticsearch/reference/6.3/reindex-upgrade.html).

Please refer to [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-upgrade.html) for more information on upgrading your Elasticsearch cluster.

#####  Update Your Custom Elasticsearch Settings and Mapping

If you have a custom configuration for Elasticsearch it needs to be adapted to follow the new 6.x rules.

Here are the necessary changes to apply on your existing Nuxeo LTS 2017/Elasticsearch 5.6 configuration.
(If you upgrade from an older configuration refer to the upgrade steps of LTS 2017).

- The default settings is located in `templates/common-base/nxserver/config/elasticsearch-doc-settings.json.nxftl`.
  - The ngram tokenizer will complain if the difference of `max_gram` and `min_gram`  is greater than one.
    Either increase the `max_ngram_diff`, either reduce the `max_gram`.
    Note that the default Nuxeo settings defines an ngram analyzer but it is not used by default.
- The default mapping is located in `templates/common-base/nxserver/config/elasticsearch-doc-mapping.json`.
  - `_all` is a deprecated field, Nuxeo uses an explicit `all_field` for this purpose, the line `"_all": {"enabled": false}` must be removed.
  - Only one Elasticsearch type is supported per index, the line `"mapping.single_type": true` must be removed.

##### Re-Index the Repository

If your indices have been created with LTS 2017 (Elasticsearch 5.6 format) you don't need to run this step.

If you want to apply your new custom settings or mapping you have to re-index the entire repository.

When using the JSF UI this can be done from the **Admin**&nbsp;> **Elasticsearch**&nbsp;> **Admin** page.

Or this can be done via REST:

```
curl -v -X POST 'http://localhost:8080/nuxeo/site/automation/Elasticsearch.Index' -u Administrator:Administrator -H 'content-type: application/json+nxrequest' -d '{"params":{},"context":{}}'
```

##### Update Your Custom Code That Query Elasticsearch Directly

Any custom native queries done using the passthrough or code need to be reviewed to follow Elasticsearch 6 query format, for instance:

- query on boolean term must be explicitly use `true` or `false` no more `1` or `0`
- query must not use the `_type` field.
{{! /multiexcerpt}}

### Code Changes

#### Automation Scripting

{{! multiexcerpt name='upgrade-10.2-code.relax-import-constraints'}}
The import constraints have been relaxed, it's now possible to allow specific Java classes to be used via Automation Scripting, by default we add:

- `java.util.ArrayList`
- `java.util.Arrays`
- `java.util.Collections`
- `java.util.UUID`
- `org.nuxeo.runtime.transaction.TransactionHelper`
- `org.nuxeo.ecm.core.api.Blobs`
- `org.nuxeo.ecm.core.api.impl.blob.StringBlob`
- `org.nuxeo.ecm.core.api.impl.blob.JSONBlob`
- `org.nuxeo.ecm.core.api.NuxeoException`

See [NXP-25020](https://jira.nuxeo.com/browse/NXP-25020) and [NXP-25211](https://jira.nuxeo.com/browse/NXP-25211).
{{! /multiexcerpt}}

#### TrashService

{{! multiexcerpt name='upgrade-10.2-deprecated.lifecycle_transition_event'}}

##### API Changes
The new TrashService fires dedicated events `documentTrashed` and `documentUntrashed` (hold by TrashService interface) instead of `lifecycle_transition_event`. The document model passed in the event won't be saved by Nuxeo at the end.

##### Keeping Old Trash implementation
The trash implementation has changed in 10.2. If you want to keep previous implementation relying on life cycle state, add the following contribution:
  ```
  <require>org.nuxeo.ecm.core.trash.service.migrator</require>
  <extension target="org.nuxeo.runtime.migration.MigrationService" point="configuration">

    <migration id="trash-storage">
      <defaultState>lifecycle</defaultState>
    </migration>

  </extension>
  ```

If you want to migrate trash state to the new property model (`ecm:isTrashed`), follow the Trash migration steps.

##### Trash Migration
To migrate trash states to the new property model:

1. Follow the step from section [Keeping old trash implementation](#keeping-old-trash-implementation).
1. In the Nuxeo Platform's JSF UI, go to **Admin** > **System Information** > **Migration**, click the button Migrate trashed state from lifecycle to property and wait until migration is completed.
1. Then perform an Elasticsearch re-indexation of all repository, in the Nuxeo Platform's JSF UI, go to **Admin** > **Elasticsearch** > **Admin**, click the button Re-index repository and wait until re-indexation is completed.
1. Remove the contribution added at step 1.

{{#> callout type='info' heading='Migration Note - 10.2'}}
During migration, documents in state `deleted` will receive the `isTrashed` property set to true but migrator will leave document in `deleted` state.
{{/callout}}

{{#> callout type='warning' heading='Migration Note - 10.3'}}
Migrator behavior has changed in 10.3, now documents in state `deleted` will receive the `isTrashed` property set to true and migrator will follow transition `undelete` if possible, if not it will set `project` state.
{{/callout}}

See [NXP-24850](https://jira.nuxeo.com/browse/NXP-24850).
{{! /multiexcerpt}}

#### Code Behavior Changes

{{! multiexcerpt name='upgrade-10.2-code.TransactionalFeature'}}
- Some test classes have been moved under `nuxeo-core-io` test part. But `nuxeo-core-io` test module is a dependency of `nuxeo-core-test` (former location) to enforce backward compatibility.

  `TransactionalFeature` has been moved from `nuxeo-core-test` to `nuxeo-runtime-test`:</br>
    `org.nuxeo.ecm.core.test.TransactionalFeature` becomes `org.nuxeo.runtime.test.runner.TransactionalFeature`

See [NXP-25197](https://jira.nuxeo.com/browse/NXP-25197).
{{! /multiexcerpt}}


{{! multiexcerpt name='upgrade-10.2-api.KeyValueStore'}}
- New APIs are available on `KeyValueStore`.
</br>
  - Optimized storage of `Long` values:
    - put(String key, Long value)
    - put(String key, Long value, long ttl)
    - getLong(String key)
    - getLongs(Collection<String> keys)

  - Atomic increment:
    - addAndGet(String key, long delta)

  See [NXP-23745](https://jira.nuxeo.com/browse/NXP-23745).
{{! /multiexcerpt}}

{{! multiexcerpt name='upgrade-10.2-code.skipAggregates'}}
- You can add the skipAggregates=true http header when invoking the search rest endpoint to skip any aggregation computation on a page provider query.

  See [NXP-25158](https://jira.nuxeo.com/browse/NXP-25158).
{{! /multiexcerpt}}


#### Operation changes

{{! multiexcerpt name='upgrade-10.2-operation.SuggestUserEntries'}}
Since Nuxeo 10.2 and 9.10-HF03, the `SuggestUserEntries` operation performs a full name user search, e.g. typing "John Do" returns the user with first name "John" and last name "Doe".

See [NXP-24583](https://jira.nuxeo.com/browse/NXP-25020).
{{! /multiexcerpt}}

### Complementary Information
- [Upgrade notes for 10.2](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%2210.2%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
- [Release notes for 10.2]({{page version='' space='nxdoc' page='nuxeo-server-release-notes'}})

## From 10.2 to 10.3

### Installation and configuration

#### Requirements

{{! multiexcerpt name='upgrade-10.3-installation-requirements'}}
- **Kafka** >= 2.0.0 is required.
{{! /multiexcerpt}}

#### New Parameters

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Parameter</th>
<th colspan="1">Modification</th>
<th colspan="1">Reference</th>
</tr>
<tr>
<td colspan="1">`userResolverCreateIfNeeded`</td>
<td colspan="1">Default value to `true`</td>
<td colspan="1">[NXP-25062](https://jira.nuxeo.com/browse/NXP-25062)</td>
</tr>
<tr>
<td colspan="1">`userResolverUpdate`</td>
<td colspan="1">Default value to `true`</td>
<td colspan="1">[NXP-25062](https://jira.nuxeo.com/browse/NXP-25062)</td>
</tr>
</tbody>
</table>
</div>

### Data

#### Elasticsearch

{{! multiexcerpt name='upgrade-10.3-installation-elasticsearch-upgrade'}}
An Elasticsearch RestClient Trust Store can now be configured.

The following `nuxeo.conf` properties can be set to define an appropriate TLS/SSL configuration for the Elasticsearch RestClient:
- `elasticsearch.restClient.truststore.path`
- `elasticsearch.restClient.truststore.password`
- `elasticsearch.restClient.truststore.type`
- `elasticsearch.restClient.keystore.path`
- `elasticsearch.restClient.keystore.password`
- `elasticsearch.restClient.keystore.type`

The following properties are *deprecated* (they were misnamed and are actually referring to the `trustStore`, not the `keyStore`):
- `elasticsearch.restClient.keystorePath`
- `elasticsearch.restClient.keystorePassword`
- `elasticsearch.restClient.keystoreType`

If a more fine-grained configuration is needed than properties, the following extension point can be used instead:
```xml
  <require>org.nuxeo.elasticsearch.defaultConfig</require>
  <extension target="org.nuxeo.elasticsearch.ElasticSearchComponent" point="elasticSearchClient">
    <elasticSearchClient class="org.nuxeo.elasticsearch.client.ESRestClientFactory">
      ...
      <option name="trustStorePath">/path/to/cacerts.jks</option>
      <option name="trustStorePassword">changeit</option>
      <option name="trustStoreType">jks</option>
      <option name="keyStorePath">/path/to/keystore.jks</option>
      <option name="keyStorePassword">changeit</option>
      <option name="keyStoreType">jks</option>
    </elasticSearchClient>
  </extension>
```
See [NXP-26074](https://jira.nuxeo.com/browse/NXP-26074)
{{! /multiexcerpt}}

#### MongoDB

{{! multiexcerpt name='upgrade-10.3-installation-mongodb-upgrade'}}
A MongoDB Client TrustStore can be configured for in-flight encryption.

The following `nuxeo.conf` properties can be set to define appropriate TLS/SSL configuration for MongoDB:

- `nuxeo.mongodb.ssl=true`
- `nuxeo.mongodb.truststore.path`
- `nuxeo.mongodb.truststore.password`
- `nuxeo.mongodb.truststore.type`
- `nuxeo.mongodb.keystore.path`
- `nuxeo.mongodb.keystore.password`
- `nuxeo.mongodb.keystore.type`

If a more fine-grained configuration is needed than properties, the following extension point can be used instead:

```xml
  <require>org.nuxeo.mongodb.connection</require>
  <extension target="org.nuxeo.runtime.mongodb.MongoDBComponent" point="connection">
    <connection id="default">
      ...
      <ssl>true</ssl>
      <trustStorePath>/path/to/cacerts.jks</trustStorePath>
      <trustStorePassword>changeit</trustStorePassword>
      <trustStoreType>jks</trustStoreType>
      <keyStorePath>/path/to/keystore.jks</keyStorePath>
      <keyStorePassword>changeit</keyStorePassword>
      <keyStoreType>jks</keyStoreType>
    </connection>
  </extension>
```
See [NXP-26072](https://jira.nuxeo.com/browse/NXP-26072)
{{! /multiexcerpt}}

#### Redis

{{! multiexcerpt name='upgrade-10.3-installation-redis-upgrade'}}
The following `nuxeo.conf` properties can be set to define appropriate TLS/SSL configuration for Redis:
- `nuxeo.redis.ssl=true`
- `nuxeo.redis.truststore.path`
- `nuxeo.redis.truststore.password`
- `nuxeo.redis.truststore.type`
- `nuxeo.redis.keystore.path`
- `nuxeo.redis.keystore.password`
- `nuxeo.redis.keystore.type`

If a more fine-grained configuration is needed than properties, the following extension point can be used instead:
```xml
  <require>org.nuxeo.ecm.core.redis.config</require>
  <extension target="org.nuxeo.ecm.core.redis" point="configuration">
    <server>
      ...
      <ssl>true</ssl>
      <trustStorePath>/path/to/cacerts.jks</trustStorePath>
      <trustStorePassword>changeit</trustStorePassword>
      <trustStoreType>jks</trustStoreType>
      <keyStorePath>/path/to/keystore.jks</keyStorePath>
      <keyStorePassword>changeit</keyStorePassword>
      <keyStoreType>jks</keyStoreType>
    </server>
  </extension>
```
See [NXP-26073](https://jira.nuxeo.com/browse/NXP-26073)
{{! /multiexcerpt}}

### Code Changes

#### CSRF Protection

{{! multiexcerpt name='upgrade-10.3-code.csrf-activation'}}
**Activation**

To activate CSRF Token verification, use the following configuration:
```xml
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="nuxeo.csrf.token.enabled">true</property>
  </extension>
```

When this is activated, *all* clients accessing Nuxeo will need to get a token and provide it on all requests that are not GET/HEAD.

Note that even when the CSRF Token is not activated, other CSRF checks not using a token are *still* being done (using the Origin/Referer headers).

**Getting the token initially**

The client must use the following request with the header `CSRF-Token: fetch`:

```
GET /nuxeo
CSRF-Token: fetch
```
The response will contain the token in the header:
```
200 OK
CSRF-Token: uNTIwv3oEImb3singqJKSuJDNjM9ldVOjnwtxmFh
```

**Passing the token**

Then on every request that is not a GET/HEAD (so this applies to POST/PUT/DELETE/etc.) the client must provide the same token, either in the `CSRF-Token` request header or in the `csrf-token` request parameter:
```
POST /nuxeo/something
CSRF-Token: uNTIwv3oEImb3singqJKSuJDNjM9ldVOjnwtxmFh
```

or

```
POST /nuxeo/something?csrf-token=uNTIwv3oEImb3singqJKSuJDNjM9ldVOjnwtxmFh
```

**Missing, expired or invalid token**

If the token is missing, expired or invalid, the client will get a `403 Forbidden` error, and a `CSRF-Token: invalid` header will be set:
```
403 Forbidden
CSRF-Token: invalid
```

**Skipping certain endpoints**

Some authentication endpoints need to be available with a `POST` without CSRF token checks. This can be done using for example:
```xml
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="nuxeo.csrf.token.skip" list="true">/login</property>
  </extension>
```

See [NXP-25903](https://jira.nuxeo.com/browse/NXP-25903)
{{! /multiexcerpt}}

{{! multiexcerpt name='upgrade-10.3-code.csrf-protection'}}
CSRF attack from local filesystem is disabled by default.

On 10.3, the behavior is still disallowed but will be allowed in dev mode.

On 7.10, 8.10 and 9.10, the behavior is now again allowed by default. To prevent local filesystem files from being allowed to POST, use the following contribution:
```xml
   <require>org.nuxeo.ecm.platform.ui.web.cors</require>
   <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
     <property name="nuxeo.cors.allowNullOrigin">false</property>
   </extension>
```

See [NXP-25680](https://jira.nuxeo.com/browse/NXP-25680)
{{! /multiexcerpt}}

#### Directories

{{! multiexcerpt name='upgrade-10.3-code.directories'}}
New directory query APIs using a `QueryBuilder`:
- `Session.query(QueryBuilder, fetchReferences)`
- `Session.queryIds(QueryBuilder)`

See [NXP-19262](https://jira.nuxeo.com/browse/NXP-19262)
{{! /multiexcerpt}}

#### Conversion

{{! multiexcerpt name='upgrade-10.3-code.conversion'}}
When calling a converter directly through its name, a check is done on its source MIME type to see if it can handle the input blob. A `ConversionException` is thrown if the converter can't handle it.
A new configuration property `nuxeo.convert.enforceSourceMimeTypeCheck` is available to disable this behavior which defaults to `true`.

To disable the check, use the following contribution:
```xml
<require>org.nuxeo.ecm.core.convert.configuration</require>
<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
  <property name="nuxeo.convert.enforceSourceMimeTypeCheck">false</property>
</extension>
```
See [NXP-25840](https://jira.nuxeo.com/browse/NXP-25840)
{{! /multiexcerpt}}

#### Transient Username and External Permissions

{{! multiexcerpt name='upgrade-10.3-code.transient-username'}}
A computed transient username is now always the same for a given base username, so only one token is generated for a given email when giving permission to an external user: that means if you invite the same external user on 2 documents, he won't have to log out from the first document to see the second one.

To enable back the uniqueness of the transient username computation, use the following contribution:
```xml
<require>org.nuxeo.ecm.core.api.properties</require>
<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
  <property name="nuxeo.transient.username.unique">true</property>
</extension>
```
See [NXP-25828](https://jira.nuxeo.com/browse/NXP-25828)
{{! /multiexcerpt}}

#### TrashService

{{! multiexcerpt name='upgrade-10.3-deprecated.lifecycle_transition_event'}}
`org.nuxeo.isTrashed.from.deleteTransition` introduced in 10.2 has been removed. Now, if you have migrated your Nuxeo instance to use the new dedicated `isTrashed` property, calls to `CoreSession#followTransition` with the _delete_/_undelete_ transition are forwarded to `TrashService` without following the transition.

Also, these transitions are deprecated as we DO NOT follow them anymore. As a consequence, after migration or on a fresh instance, documents can't have `deleted` state anymore.

As a consequence of this backward mechanism, following these transitions on a proxy will remove them.

See [NXP-25761](https://jira.nuxeo.com/browse/NXP-25761)
{{! /multiexcerpt}}

#### {{> anchor 'keeping-old-comments'}} Keeping Old Comments

{{! multiexcerpt name='upgrade-10.3-keeping-comments'}}
The comment implementation has changed in 10.3. If you want to keep your old comments, add the following contribution:
```xml
<require>org.nuxeo.ecm.platform.comment.manager.migrator</require>
<extension target="org.nuxeo.runtime.migration.MigrationService" point="configuration">
  <migration id="comment-storage">
    <defaultState>relation</defaultState>
  </migration>
</extension>
```

If you want to migrate comments to the new storage model, follow the [Comment migration steps](#comment-migration).
{{! /multiexcerpt}}

#### {{> anchor 'comment-migration'}} Comment Migration

{{! multiexcerpt name='upgrade-10.3-comments-migration'}}
To migrate comments to the new storage model:

1. Follow the step from section [Keeping old comments](#keeping-old-comments).
2. In the Nuxeo Platform's JSF UI, go to **Admin**&nbsp;> **System Information**&nbsp;> **Migration**, click the button **Migrate comments from relations to the parent id property usage** and wait until migration is completed.
3. Remove the contribution added at step 1.
{{! /multiexcerpt}}

#### Log4j 2

{{! multiexcerpt name='upgrade-10.3-api.log4j'}}
Nuxeo now uses Log4j 2 as its logging backend instead of Log4j.
Two logging APIs are generally available in Nuxeo:
- Commons Logging
- Log4j 2 API

SLF4J is still available, but Log4j 2 API are preferred by reason of its lambda support.

**Breaking change**

- `Log4jHelper.setQuiet` and `Log4jHelper.setDebug` was removed due to its usage of Log4j API which are now impossible with Log4j 2. These APIs were replaced by `Log4jHelper.setLevel`. Compared to previous implementation, `setLevel` API doesn't change appender's threshold, it just acts on logger's levels.
- LogCaptureFeature.Filter has also changed without backward compatibility because it exposed a Log4j internal class. This has been replaced by corresponding Log4j 2 internal class.
- File rollover has changed. Files are now compressed using gzip and pattern has been generalised to `NAME-YYYY-MM-dd.log.gz`.</br>
  For instance: `server.log.2018-01-01` becomes `server-2018-01-01.log.gz`
- Watch log4j file for reload has been removed in favor of built-in logic in Log4j2.
These properties are no longer read:
  - `org.nuxeo.runtime.log4jwatch.disabled`
  - `org.nuxeo.runtime.log4jwatch.delay`</br>
  See _Automatic Reconfiguration_ in [Log4j 2 documentation](https://logging.apache.org/log4j/2.x/manual/configuration.html) to have watch file behavior.

**Code behavior change**

- LogCaptureFeature behavior has changed. Now log `Result` is cleaned between each tests. You'll have an isolated result to assert for `@Before`/`@After`/test methods.
- You may need to add the slf4j dependency if you were using it in your source code:
```
<dependency>
  <groupId>org.slf4j</groupId>
  <artifactId>slf4j-api</artifactId>
</dependency>
```

**New**

- `LogCaptureFeature.FilterOn` now accepts a logger class instead of a logger name
- You can now use Log4j 2 API in your code

See [NXP-23863](https://jira.nuxeo.com/browse/NXP-23863)
{{! /multiexcerpt}}

#### Use `NuxeoPrincipal` Instead of `Principal` in Most APIs

{{! multiexcerpt name='upgrade-10.3-api.nuxeoprincipal'}}
The general upgrade rule is the Nuxeo code should not deal with a `java.security.Principal` anymore (except for internal authentication-related classes).

**API changes**

`NuxeoPrincipal` is now used instead of `Principal` in the methods and constructors for these classes:

- CoreSession
- DocumentEventContext
- EventContext
- EventContextImpl
- InlineEventContext
- OperationContext
- QueryFilter
- SQLQuery.Transformer
- SecurityPolicy
- SecurityPolicy.QueryTransformer
- SecurityService
- TrashService
- UnboundEventContext
- UserWorkspaceService
- WebContext

**Removed APIs**

These APIs were previously deprecated or internal and have been removed.

- CoreInstance.getInstance()
- CoreInstance.getNumberOfSessions()
- CoreInstance.getRegistrationInfos()
- CoreInstance.openCoreSession(repositoryName, Map context)
- CoreInstance.openCoreSession(repositoryName, Principal principal)
- DetachedNuxeoPrincipal
- SimplePrincipal (use UserPrincipal instead)

See [NXP-25910](https://jira.nuxeo.com/browse/NXP-25910)
{{! /multiexcerpt}}

#### Thumbnail Resolution

{{! multiexcerpt name='upgrade-10.3-code.thumbnail-resolution'}}
In `ThumbnailDocumentConverter`, removed unnecessary constants:
```
THUMBNAIL_CONVERTER_NAME

THUMBNAIL_SIZE_PARAMETER_NAME // use ThumbnailConstants#THUMBNAIL_SIZE_PARAMETER_NAME instead

THUMBNAIL_DEFAULT_SIZE // use ThumbnailConstants#THUMBNAIL_DEFAULT_SIZE instead
```
See [NXP-24717](https://jira.nuxeo.com/browse/NXP-24717)
{{! /multiexcerpt}}

#### REST API

##### REST API Enrichers

{{! multiexcerpt name='upgrade-10.3-api.enrichers'}}
Enrichers can now apply to the `blob` type.

For instance, to get the links to open a LiveConnect blob in all applications associated to its MIME type, you can use the `enrichers-blob: appLinks` enricher.
Any blob property, e.g. `file:content`, will then be enriched in the following way:

```
{
  "file:content": {
    "name": "...",
    "mime-type": "...",
    ...,
    "appLinks": [
      {
        "appName": "...",
        "icon": "...",
        "link": "..."
      },
      ...
    ]
  }
}
```

Note: since such a `blob` enricher applies to a `BlobProperty`, the backing class should extend `AbstractJsonEnricher<BlobProperty>` as in the example below:

```java
public class BlobAppLinksJsonEnricher extends AbstractJsonEnricher<BlobProperty> {

    @Override
    public void write(JsonGenerator jg, BlobProperty blobProperty) throws IOException {
        ...
    }
}
```
See [NXP-26126](https://jira.nuxeo.com/browse/NXP-26126)
{{! /multiexcerpt}}

##### REST API Endpoints
{{! multiexcerpt name='upgrade-10.3-api.endpoints'}}
The REST API now produces and consumes only application/json as content type:

- `application/json+nxentity` is now never returned as content type response; the server does not expect it as content type request.
- `application/json+nxrequest` content type should not be used anymore. It still works but it's deprecated server side. `application/json` should be used instead when POSTing to automation.
- `application/json+esentity` which was never used was also removed.

**Breaking Change:**
- `org.nuxeo.ecm.automation.jaxrs.io.documents.JsonESDocumentWriter`, located in `nuxeo-automation-io` has moved to `org.nuxeo.elasticsearch.io.JsonESDocumentWriter`, located in `nuxeo-elasticsearch-core`. The `JsonESDocumentWriter` does not implement anymore `MessageBodyWriter<DocumentModel>`, you may need to update your code.

See [NXP-25036](https://jira.nuxeo.com/browse/NXP-25036)
{{! /multiexcerpt}}

#### Code Behavior Changes

{{! multiexcerpt name='upgrade-10.3-code.nuxeooauthfilter'}}
- To activate OAuth 1, an `<authenticationChain>` must be defined to include `<plugin>OAUTH1_AUTH</plugin>`.</br>
See [NXP-25975](https://jira.nuxeo.com/browse/NXP-25975)
{{! /multiexcerpt}}

{{! multiexcerpt name='upgrade-10.3-code.fulltext'}}
- Fulltext maximum size is now 128 KB by default. To change this, the repository configuration can be updated to use another `fieldSizeLimit` value:

  ```
  <fulltext ... fieldSizeLimit="1048576">
    ...
  </fulltext>
  ```
  A value of `0` means no limit.

  See the [full text documentation]({{page version='' space='nxdoc' page='repository-configuration'}}#full-text) for more information.

  See [NXP-25716](https://jira.nuxeo.com/browse/NXP-25716)
{{! /multiexcerpt}}


#### Operation Changes

##### Rename operations WebUI.* related to JSF

{{! multiexcerpt name='upgrade-10.3-code.webui-operations'}}

| Previous names                  | New names                   |
| ------------------------------- | --------------------------- |
| WebUI.AddErrorMessage           | Seam.AddErrorMessage        |
| WebUI.AddInfoMessage            | Seam.AddInfoMessage         |
| WebUI.AddMessage                | Seam.AddMessage             |
| WebUI.ClearClipboard            | Seam.ClearClipboard         |
| WebUI.ClearSelectedDocuments    | Seam.ClearSelectedDocuments |
| WebUI.ClearWorklist             | Seam.ClearWorklist          |
| WebUI.ShowCreateForm            | Seam.CreateDocumentForm     |
| WebUI.DownloadFile              | Seam.DownloadFile           |
| WebUI.NavigateTo                | Seam.NavigateTo             |
| WebUI.AddToClipboard            | Seam.AddToClipboard         |
| WebUI.PushDocumentToSeamContext | Seam.PushDocument           |
| WebUI.AddToWorklist             | Seam.AddToWorklist          |
| WebUI.RaiseSeamEvents           | Seam.RaiseEvents            |
| WebUI.Refresh                   | Seam.Refresh                |
| WebUI.SetJSFOutcome             | Seam.SetOutcome             |
| WebUI.DestroySeamContext        | Seam.DestroyContext         |
| WebUI.InitSeamContext           | Seam.InitContext            |
| WebUI.RunOperationInSeam        | Seam.RunOperation           |

See [NXP-22232](https://jira.nuxeo.com/browse/NXP-22232)
{{! /multiexcerpt}}


##### Relocate `nuxeo-platform-collections` in `nuxeo-service`

{{! multiexcerpt name='upgrade-10.3-operation.collections'}}
Since Nuxeo Platform 10.3, Collection Core types (Collection, Favorites, etc.), schema and facets have been merged in [CoreExtensions.xml](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-core/nuxeo-core/src/main/resources/OSGI-INF/CoreExtensions.xml).
As a result:
- `nuxeo-platform-collections-jsf` has disappeared. Resources and classes have been dispatched in `nuxeo-jsf/nuxeo-platform-webapp-base` and `nuxeo-dm/nuxeo-platform-webapp-types`
- All Collection-related automation operations have been moved to `nuxeo-automation-features`
- Collection and Favorites services have been kept but moved under `nuxeo-services/nuxeo-collections`
- [`UserWorkspaces`](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/nuxeo-platform-userworkspace/nuxeo-platform-userworkspace-core/src/main/java/org/nuxeo/ecm/platform/userworkspace/core/service/AbstractUserWorkspaceImpl.java#L78) service now contributes where should be located User's collections and Favorites by implementing [`CollectionLocationService.java`](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-services/nuxeo-collections/src/main/java/org/nuxeo/ecm/collections/api/CollectionLocationService.java)
- You can use [`CollectionFeature.java`](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-services/nuxeo-collections/src/test/java/org/nuxeo/ecm/collections/core/test/CollectionFeature.java) to test a feature relying on Collections.</br>
  You need to add the following pom dependency:
```
<dependency>
   <groupId>org.nuxeo.ecm.platform</groupId>
   <artifactId>nuxeo-platform-collections-core</artifactId>
   <type>test-jar</type>
   <scope>test</scope>
</dependency>
```

See [NXP-25543](https://jira.nuxeo.com/browse/NXP-25543)
{{! /multiexcerpt}}

#### Image Recompute

{{! multiexcerpt name='upgrade-10.3-operation.image-recompute'}}
Added the `Picture.RecomputeViews` operation for administrators.

See [NXP-25791](https://jira.nuxeo.com/browse/NXP-25791)
{{! /multiexcerpt}}

### Addons

#### Nuxeo Drive - Server APIs Changes

{{! multiexcerpt name='upgrade-10.3-addons.drive.apis'}}
**Added**

- Added to `FileManager`:
```
DocumentModel createDocumentFromBlob(CoreSession documentManager, Blob input, String path, boolean overwrite, String fullName, boolean noMimeTypeCheck, boolean excludeOneToMany) throws IOException;
```
to allow excluding "one-to-many" importers (ie. the ones creating more than one document for the given blob, typically `CSVZipImporter` or `ExportedZipImporter`) when selecting the importer. This is used by Drive to not try to explode a CSV import ZIP for instance.

- Added to `FileImporter`:
```
boolean isOneToMany();
```
to flag an importer as "one-to-many", ie. it creates more than one document for the given blob, typically `CSVZipImporter` or `ExportedZipImporter`.

See [NXP-25797](https://jira.nuxeo.com/browse/NXP-25797)

**Deprecated**

- The following operations have been deprecated:
```
GetRepositoriesOperation
NuxeoDriveAddToLocallyEditedCollection
NuxeoDriveCanMove
NuxeoDriveGenerateConflictedItemName
NuxeoDriveGetClientUpdateInfo
NuxeoDriveWaitForAsyncCompletion
```

- The following operation parameters has been deprecated:
```
NuxeoDriveGetChangeSummary#lastSyncActiveRootDefinitions
```

See [NXP-24885](https://jira.nuxeo.com/browse/NXP-24885)
{{! /multiexcerpt}}

##### Remove Usage of Deprecated Code in Nuxeo-Drive-Server

{{! multiexcerpt name='upgrade-10.3-addons.drive.deprecated'}}
Removed as deprecated since 7.10 or less:
```
FileSystemItemFactory#getDocumentByFileSystemId(String id, Principal principal)

FileSystemItemManager#getSession(String repositoryName, Principal principal)

NuxeoDriveManager#setChangeFinder(FileSystemChangeFinder changeFinder)

NuxeoDriveActions#UPDATE_SITE_URL_PROP_KEY
NuxeoDriveActions#SERVER_VERSION_PROP_KEY

NuxeoDriveCreateFile#name

NuxeoDriveGetChangeSummary#lastSyncDate

NuxeoDriveGetTopLevelChildren
```

Removed as should have been deprecated since 7.10 or less, see NXP-14826:
```
FileSystemChangeFinder#getFileSystemChangesIntegerBounds(CoreSession session, Set<IdRef> lastActiveRootRefs, SynchronizationRoots activeRoots, Set<String> collectionSyncRootMemberIds, long lowerBound, long upperBound, int limit)

FileSystemChangeFinder#getCurrentDate();

NuxeoDriveManager#getChangeSummaryIntegerBounds(Principal principal, Map<String, Set<IdRef>> lastSyncRootRefs, long lowerBound)
```
and changed
```
FileSystemChangeFinder#getFileSystemChanges(CoreSession session, Set<IdRef> lastActiveRootRefs, SynchronizationRoots activeRoots, long lastSuccessfulSyncDate, long syncDate, int limit)

NuxeoDriveManager#getChangeSummary(Principal principal, Map<String, Set<IdRef>> lastSyncRootRefs, long lastSuccessfulSync)
```
to
```
FileSystemChangeFinder#getFileSystemChanges(CoreSession session, Set<IdRef> lastActiveRootRefs, SynchronizationRoots activeRoots, Set<String> collectionSyncRootMemberIds, long lowerBound, long upperBound, int limit)

NuxeoDriveManager#getChangeSummary(Principal principal, Map<String, Set<IdRef>> lastSyncRootRefs, long lowerBound)
```
See [NXP-25844](https://jira.nuxeo.com/browse/NXP-25844)
{{! /multiexcerpt}}

#### Nuxeo CSV

{{! multiexcerpt name='upgrade-10.3-addons.csv.dates'}}
Dates in CSV files must be formatted using the W3C format. More information on the [W3C documentation](https://www.w3.org/TR/NOTE-datetime).

It is possible to use the old legacy date format (without time information) {{MM/dd/yyyy}} by setting the configuration property `nuxeo.csv.import.legacyDateFormat` to `true`:
```xml
<require>org.nuxeo.ecm.csv.core.properties</require>
<extension point="configuration" target="org.nuxeo.runtime.ConfigurationService">
  <property name="nuxeo.csv.import.legacyDateFormat">true</property>
</extension>
```
See [NXP-25219](https://jira.nuxeo.com/browse/NXP-25219)
{{! /multiexcerpt}}

#### Nuxeo Diff

{{! multiexcerpt name='upgrade-10.3-addons.diff.deprecated'}}
Deprecated `ContentDiffHelper#getHtmlConversionBlackListedMimeTypes`.

**Added:**
```
org.nuxeo.ecm.diff.content.MimeTypesDescriptor
org.nuxeo.ecm.diff.content.MimeTypeDescriptor
ContentDiffAdapterManager#getHtmlConversionBlacklistedMimeTypes()
```

Added the `htmlConversionBlacklistedMimeTypes` extension point to the `org.nuxeo.ecm.diff.content.adapter.ContentDiffAdapterManagerComponent` component:
```xml
  <extension-point
    name="htmlConversionBlacklistedMimeTypes">
    <documentation>
      @since 10.10

      Allows to contribute the list of blacklisted mime types for HTML
      conversion.

      By default, contributing a list merges its mime types
      with the existing ones.
      To remove a mime type, use enabled=false.
      <code>
        <extension
          target="org.nuxeo.ecm.diff.content.adapter.ContentDiffAdapterManagerComponent"
          point="htmlConversionBlacklistedMimeTypes">
          <mimeTypes>
            <mimeType>application/msword</mimeType>
            <mimeType>application/rtf</mimeType>
            <mimeType enabled="false">application/pdf</mimeType>
          </mimeTypes>
        </extension>
      </code>

      To override the whole list, use override="true".
      <code>
        <extension
          target="org.nuxeo.ecm.diff.content.adapter.ContentDiffAdapterManagerComponent"
          point="htmlConversionBlacklistedMimeTypes">
          <mimeTypes override="true">
            <mimeType>application/msword</mimeType>
          </mimeTypes>
        </extension>
      </code>
    </documentation>
    <object
      class="org.nuxeo.ecm.diff.content.MimeTypesDescriptor" />
  </extension-point>
```
See [NXP-25208](https://jira.nuxeo.com/browse/NXP-25208)
{{! /multiexcerpt}}

### Complementary Information

- [Upgrade notes for 10.3](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%2210.3%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
- [Release notes for 10.3]({{page version='' space='nxdoc' page='nuxeo-server-release-notes'}})

## From 10.3 to LTS 2019

### Installation and Configuration

#### Requirements



#### New Parameters

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Parameter</th>
<th colspan="1">Modification</th>
<th colspan="1">Reference</th>
</tr>
<tr>
<td colspan="1">&nbsp;</td>
<td colspan="1">&nbsp;</td>
<td colspan="1">&nbsp;</td>
</tr>
</tbody>
</table>
</div>

### Data

### Code Changes




#### Code Behavior Changes




#### Operation Changes




### Addons



### Complementary Information

- [Upgrade notes for LTS 2019](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%2210.3%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
- [Release notes for LTS 2019]({{page version='' space='nxdoc' page='nuxeo-server-release-notes'}})
