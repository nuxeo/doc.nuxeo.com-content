---
title: Upgrade from LTS 2017 following Fast Tracks
review:
    comment: ''
    date: '2018-07-04'
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

#### Operation Changes

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
- **Kafka** >= 1.1.0 is required.
{{! /multiexcerpt}}

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
  * Optimized storage of Long values:
    - put(String key, Long value)
    - put(String key, Long value, long ttl)
    - getLong(String key)
    - getLongs(Collection<String> keys)

  * Atomic increment:
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
