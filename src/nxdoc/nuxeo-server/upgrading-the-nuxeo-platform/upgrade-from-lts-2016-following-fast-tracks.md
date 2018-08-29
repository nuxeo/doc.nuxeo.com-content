---
title: Upgrade from LTS 2016 following Fast Tracks
review:
    comment: ''
    date: '2017-12-11'
    status: ok
labels:
    - multiexcerpt
    - lts2017-ok
    - upgrade
    - akervern
toc: true
tree_item_index: 95

---

## From LTS 2016 to 9.1

{{! multiexcerpt name='upgrade-9.1-reindex-warning'}}

Reindex the full repository following [Rebuilding the repository index page]({{page anchor='rebuildingtheindex-rebuilding-the-repository-index' page='elasticsearch-setup'}}), or using [Nuxeo Dev Tools Extension]({{page page='nuxeo-dev-tools-extension'}}). See [NXP-21279](https://jira.nuxeo.com/browse/NXP-21279).

{{! /multiexcerpt}}

### Installation and Configuration

#### Requirements

{{! multiexcerpt name='upgrade-9.1-installation-requirements'}}
- **MySQL** >= 5.6.4 is required. See [NXP-21338](https://jira.nuxeo.com/browse/NXP-21338)
{{! /multiexcerpt}}

#### Parameters to Update

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Parameter</th>
<th colspan="1">Modification</th>
<th colspan="1">Reference</th>
</tr>
<tr>
<td colspan="1">`org.nuxeo.cmis.proxies`</td>
<td colspan="1">New Default Value to `true`</td>
<td colspan="1">[NXP-21828](https://jira.nuxeo.com/browse/NXP-21828)</td>
</tr>
</tbody>
</table>
</div>

### Nuxeo Studio Application Definition

{{! multiexcerpt name='upgrade-9.1-studio-deps'}}
Make sure your Nuxeo Studio project depends on the **Nuxeo JSF UI** target package. See the pages [How to Update the Version of Your Target Platform in Studio](https://doc.nuxeo.com/studio/update-the-version-of-your-target-platform/) and [Specific Upgrade Instructions](https://doc.nuxeo.com/studio/specific-upgrade-instructions/) for more details.
{{! /multiexcerpt}}

### Code Changes

#### Automation Scripting

{{! multiexcerpt name='upgrade-9.1-code.scripts-backward-compat'}}

Backward Compatibility was broken for 9.1 ([NXP-21508](https://jira.nuxeo.com/browse/NXP-21508)): parameters are no longer extracted from the context of the `params` object when calling the scripting operation. You have to explicitly set each parameter in the operation definition. Follow [NXP-22190](https://jira.nuxeo.com/browse/NXP-22190) for resolution.

Started from 9.2: you can set the parameter `nuxeo.automation.scripting.inline-context-in-params` to `true` in order to get back compatibility with scripts created before 9.1.

{{! /multiexcerpt}}

#### Code Behavior Changes

{{! multiexcerpt name='upgrade-9.1-code.defaultValue'}}

- Setting a property value to `null` now always sets it to the default value if a default value is configured for the schema field. See [NXP-19466](https://jira.nuxeo.com/browse/NXP-19466).

{{! /multiexcerpt}}

{{! multiexcerpt name='upgrade-9.1-code.platform.el'}}

- Expression Language artifact has been renamed from `org.nuxeo.ecm.platform:nuxeo-platform-el` to `org.nuxeo.ecm.core:nuxeo-core-el`. See [NXP-21713](https://jira.nuxeo.com/browse/NXP-21713).

{{! /multiexcerpt}}

{{! multiexcerpt name='upgrade-9.1-code.elasticsearchfeature'}}

- When using the feature `RepositoryElasticSearchFeature`, you need to add a test Maven dependency on `org.nuxeo.ecm.automation:nuxeo-automation-server`:

    ```xml
    <dependency>
      <groupId>org.nuxeo.ecm.automation</groupId>
      <artifactId>nuxeo-automation-server</artifactId>
      <scope>test</scope>
    <dependency>
    ```
See [NXP-21186](https://jira.nuxeo.com/browse/NXP-21186).

{{! /multiexcerpt}}

#### Operation Changes

{{! multiexcerpt name='upgrade-9.1-operation.Server.CreateUser'}}

- Operations `Services.CreateUser` and `Services.QueryUsers` are now part of the base platform. They have been renamed into `User.CreateOrUpdate` and `User.Query`.<br/>
Aliases with old names have been kept for compatibility. See [NXP-21962](https://jira.nuxeo.com/browse/NXP-21962)

{{! /multiexcerpt}}

{{! multiexcerpt name='upgrade-9.1-operation.Tag.Suggestion'}}

- `Tag.Suggestion` operation no longer requires JSF; You have to pass the target document using the new parameter `document`. See [NXP-21717](https://jira.nuxeo.com/browse/NXP-21717).

{{! /multiexcerpt}}

{{! multiexcerpt name='upgrade-9.1-operation.addPermission'}}

- `Document.AddPermission` operation: The existence of the input user name or group name is now checked before adding a permission. See [NXP-21559](https://jira.nuxeo.com/browse/NXP-21559).

{{! /multiexcerpt}}

#### Deprecated APIs

##### Fields file:filename and common:size Removed

{{! multiexcerpt name='upgrade-9.1-deprecated.filecommon'}}

{{#> callout type='warning' }}
Documents exports made before 9.1 won’t be importable starting from 9.1.
{{/callout}}

To fix exports, manually edit the ZIP file (prior to 9.1) by removing `<common:size>` and `<file:filename>` elements from the files `document.xml`. See [NXP-21025](https://jira.nuxeo.com/browse/NXP-21025).

{{! /multiexcerpt}}

##### Scoped DocumentModel Context Data

{{! multiexcerpt name='upgrade-9.1-deprecated.document.context'}}

Any usage of `ScopedMap` or `ScopeType` is deprecated and will be removed in the future.

- Instead of `ScopedMap`, use `Map<String, Serializable>`.
- Instead of `ScopeType` in `getContextData` and `putContextData`, use equivalent methods without a scope.

See [NXP-21570](https://jira.nuxeo.com/browse/NXP-21570).

{{! /multiexcerpt}}

##### LoginScreenHelper Mobile Methods

{{! multiexcerpt name='upgrade-9.1-deprecated.mobile.helper'}}

Removed:

- `LoginScreenHelper#NUXEO_PROTOCOL`
- `LoginScreenHelper#getURLForMobileApplication(HttpServletRequest request)`
- `LoginScreenHelper#getURLForMobileApplication(String baseURL, String requestedURL)`

Use `org.nuxeo.ecm.platform.web.common.MobileBannerHelper` instead. See [NXP-21679](https://jira.nuxeo.com/browse/NXP-21679).

{{! /multiexcerpt}}

##### FileManager Can Now Prevent Overwriting Existing Document

{{! multiexcerpt name='upgrade-9.1-deprecated.filemanager'}}

Added:

- `FileManager#createFolder(CoreSession documentManager, String fullname, String path, boolean overwrite)`
- `FileManagerService#defaultCreateFolder(CoreSession documentManager, String fullname, String path, boolean overwrite)`
- `FileManagerService#defaultCreateFolder(CoreSession documentManager, String fullname, String path, String containerTypeName, boolean checkAllowedSubTypes, boolean overwrite)`

Deprecated:

- `FileManager#createFolder(CoreSession documentManager, String fullname, String path)`
- `FileManagerService#defaultCreateFolder(CoreSession documentManager, String fullname, String path)`
- `FileManagerService#defaultCreateFolder(CoreSession documentManager, String fullname, String path, String containerTypeName, boolean checkAllowedSubTypes)`

See [NXP-21853](https://jira.nuxeo.com/browse/NXP-21853).

{{! /multiexcerpt}}

##### BlobDispatcher Can Now Dispatch Depending on Document's XPath

{{! multiexcerpt name='upgrade-9.1-deprecated.blobdispatcher'}}

Added:

- `BlobDispatcher#getBlobProvider(Document doc, Blob blob, String xpath)`

Deprecated:

- `BlobDispatcher#getBlobProvider(Document doc, Blob blob)`

See [NXP-21891](https://jira.nuxeo.com/browse/NXP-21891).

{{! /multiexcerpt}}

##### Automatic Versioning

{{! multiexcerpt name='upgrade-9.1-deprecated.automatic-versioning'}}

We introduced a new automatic versioning system in 9.1. We deprecated [versioningRules](http://explorer.nuxeo.org/nuxeo/site/distribution/9.10/viewExtensionPoint/org.nuxeo.ecm.core.versioning.VersioningService--versioningRules) extension point. You now have to use new extension points, see [documentation]({{page page='versioning#automatic-versioning-system'}}).

Nuxeo provides a backward compatibility mechanism, but it could be not accurate.

Previous automatic versioning mechanisms were removed or upgraded to new system:

- File manager and bulk edit don't automatically version documents since 9.1, you could put back this behavior by contributing a new rule and use [source]({{page page='versioning#source-based-versioning'}}) parameter to restrict versioning to this functionalities (for instance use: `fileimporter-{name-of-your-importer}` or `bulkEdit`)
- Nuxeo Drive is not responsible of automatic versioning anymore. The last contributor rule is now a default policy, and delay rule is introduced by Nuxeo Drive and rely on [source]({{page page='versioning#source-based-versioning'}}) parameter mechanism.

{{#> callout type='note' }}

All configuration parameters relative to automatic versioning were removed without backward compatibility.

{{/callout}}

It's the case for:

- `nuxeo.drive.force.versioning`
- `versioningDelay` and `versioningOption` used in `DefaultFileSystemItemFactory`. <br/>
Note that `VersioningFileSystemItemFactory` is deprecated.

{{! /multiexcerpt}}

### Addons

#### Nuxeo Drive - Server APIs Changes

{{! multiexcerpt name='upgrade-9.1-addons.drive.apis'}}

Added:

- `FileSystemItemManager#createFolder(String parentId, String name, Principal principal, boolean overwrite)`
- `FileSystemItemManager#createFile(String parentId, Blob blob, Principal principal, boolean overwrite)`
- `FolderItem#createFolder(String parentId, String name, Principal principal, boolean overwrite)`
- `FolderItem#createFile(String parentId, Blob blob, Principal principal, boolean overwrite)`
- the `overwrite` parameter to the `NuxeoDrive.CreateFolder` operation
- the `overwrite` parameter to the `NuxeoDrive.CreateFile` operation

Deprecated:

- `FileSystemItemManager#createFolder(String parentId, String name, Principal principal)`
- `FileSystemItemManager#createFile(String parentId, Blob blob, Principal principal)`
- `FolderItem#createFolder(String parentId, String name, Principal principal)`
- `FolderItem#createFile(String parentId, Blob blob, Principal principal)`

See [NXP-21854](https://jira.nuxeo.com/browse/NXP-21854).

{{! /multiexcerpt}}

#### Nuxeo Drive - Synchronization Root Behavior

{{! multiexcerpt name='upgrade-9.1-addons.drive.sync.root'}}

Synchronization root is now reset with a copied document. In LTS 2016 and earlier, copying a synchronization root Document resulted in creating a new synchronization root.

To re-activate the old behavior:

```xml
<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="org.nuxeo.drive.resetSyncRootsOnCopy">false</property>
</extension>
```

See [NXP-21676](https://jira.nuxeo.com/browse/NXP-21676).

{{! /multiexcerpt}}

### Complementary Information

- [Upgrade notes for 9.1](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%229.1%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
- [Release notes for 9.1]({{page version='' space='nxdoc' page='nuxeo-server-release-notes'}})

## From 9.1 to 9.2

{{! multiexcerpt name='9.1-to-9.2-upgrade-page'}}

### Installation and Configuration

{{! multiexcerpt name='upgrade-9.2-drop-change-token'}}
<!-- This paragraph is specific to the upgrade from 9.1 to 9.2. Do not report on page Upgrade from LTS 2016 to latest Fast Track.-->
With VCS, delete the column `hierarchy.changetoken` so that it is regenerated with the correct type. For instance: `ALTER TABLE hierarchy DROP COLUMN changetoken`. See [NXP-22259](https://jira.nuxeo.com/browse/NXP-22259).

{{! /multiexcerpt}}

{{! multiexcerpt name='upgrade-9.2-new.parameters'}}

#### New Parameters

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Parameter</th>
<th colspan="1">Default</th>
<th colspan="1">Reference</th>
</tr>
<tr>
<td colspan="1">`org.nuxeo.runtime.reload_strategy`</td>
<td colspan="1">Default Value to `restart`</td>
<td colspan="1">[NXP-19326](https://jira.nuxeo.com/browse/NXP-19326)</td>
</tr>
<tr>
<td colspan="1">`nuxeo.automation.scripting.inline-context-in-params`</td>
<td colspan="1">Default Value to `false`</td>
<td colspan="1">[NXP-22190](https://jira.nuxeo.com/browse/NXP-22190)</td>
</tr>
<tr>
<td colspan="1">`nuxeo.automation.allowVirtualUser`</td>
<td colspan="1">Default Value to `false`</td>
<td colspan="1">[NXP-21889](https://jira.nuxeo.com/browse/NXP-21889)</td>
</tr>
</tbody>
</table>
</div>

{{! /multiexcerpt}}

#### nuxeo.conf

Add the following parameter in order to keep consistency with the previous hot-reload strategy: `org.nuxeo.runtime.reload_strategy=unstash`.

### Data

#### Directories

##### SQL Directories

{{! multiexcerpt name='upgrade-9.2-sql-template-required'}}

If you did not use an explicit SQL configuration template (`postgresql`, `mssql`, `mysql` or `mariadb`), you must add the new `sql` template in your nuxeo.conf, in addition to the `default` template. You should at least have:

```
nuxeo.templates=default,sql
```

{{! /multiexcerpt}}

##### MongoDB Directories

{{! multiexcerpt name='upgrade-9.2-new.directories.mongodb'}}

Directories are now stored in MongoDB when enabling the `mongodb` template. You don't need to install the addon [Nuxeo MongoDB Audit and Directories](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-mongodb-ext) anymore, which is only needed for Audit now. See [NXP-21582](https://jira.nuxeo.com/browse/NXP-21582).

**Migrating your directories to MongoDB**

To migrate your custom directories to MongoDB, enable the `mongodb` template and use the extension point [`org.nuxeo.ecm.directory.GenericDirectory`](http://explorer.nuxeo.com/nuxeo/site/distribution/9.10/viewExtensionPoint/org.nuxeo.ecm.directory.GenericDirectory--directories) instead of [`org.nuxeo.ecm.directory.sql.SQLDirectoryFactory`](http://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform-9.2/viewExtensionPoint/org.nuxeo.ecm.directory.sql.SQLDirectoryFactory--directories). See [NXP-19175](https://jira.nuxeo.com/browse/NXP-19175).

**Using MongoDB with SQL directories**

If you want to keep your custom SQL directories, contribute them to the extension point `org.nuxeo.ecm.directory.sql.SQLDirectoryFactory`.

{{! /multiexcerpt}}

### Code Changes

#### Code Behavior Changes

{{! multiexcerpt name='upgrade-9.2-code.blobinfo'}}

- Class `org.nuxeo.ecm.core.blob.BlobManager.BlobInfo` moved to `org.nuxeo.ecm.core.blob.BlobInfo`. See [NXP-22217](https://jira.nuxeo.com/browse/NXP-22217).

{{! /multiexcerpt}}

{{! multiexcerpt name='upgrade-9.2-code.nuxeoctl.register.trial'}}

- In `nuxeoctl`, the `register-trial` command reads parameters: `./nuxectl register-trial [<firstname> <lastname> <email> <company> <project>]`. See [NXP-22550](https://jira.nuxeo.com/browse/NXP-22550).

{{! /multiexcerpt}}

{{! multiexcerpt name='upgrade-9.2-code.oauth'}}

- During OAuth2 challenge (as identity provider), parameters `state` and `redirect_uri` are now mandatory for security reason. See [NXP-22183](https://jira.nuxeo.com/browse/NXP-22183) and [NXP-22186](https://jira.nuxeo.com/browse/NXP-22186).

{{! /multiexcerpt}}

#### Deprecated APIs

##### OAuth2Client

{{! multiexcerpt name='upgrade-9.2-deprecated.oauth2'}}

- Constructor `OAuth2Client(String name, String id, String secret)` is deprecated. See [NXP-22183](https://jira.nuxeo.com/browse/NXP-22183).

{{! /multiexcerpt}}

### Addons

#### Segment.io - Updated

{{! multiexcerpt name='upgrade-9.2-addons.segmentio'}}

Nuxeo Segment.io plugin is now aligned on `com.github.segmentio:analytics:1.0.7`, thus it has received a big update and breaks backward compatibility. See [NXP-22462](https://jira.nuxeo.com/browse/NXP-22462) and [NXP-22212](https://jira.nuxeo.com/browse/NXP-22212).

{{! /multiexcerpt}}

### Complementary Information

- [Upgrade notes for 9.2](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%229.2%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
- [Release notes for 9.2]({{page version='' space='nxdoc' page='nuxeo-server-release-notes'}})

## From 9.2 to 9.3

{{! multiexcerpt name='9.2-to-9.3-upgrade-page'}}

### Installation and Configuration

#### Requirements

{{! multiexcerpt name='upgrade-9.3-installation-requirements'}}
- **Elasticsearch** >= 5.6.x is required.
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
<td colspan="1">`nuxeo.server.tomcat_error.show_report`</td>
<td colspan="1">Default Value to `false`</td>
<td colspan="1">[NXP-22592](https://jira.nuxeo.com/browse/NXP-22592)</td>
</tr>
<tr>
<td colspan="1">`nuxeo.server.tomcat_error.show_report_info`</td>
<td colspan="1">Default Value to `false`</td>
<td colspan="1">[NXP-22592](https://jira.nuxeo.com/browse/NXP-22592)</td>
</tr>
<tr>
<td colspan="1">`nuxeo.faceted.tag.service.enabled`</td>
<td colspan="1">Default Value to `false`</td>
<td colspan="1">[NXP-21651](https://jira.nuxeo.com/browse/NXP-21651)</td>
</tr>
</tbody>
</table>
</div>

#### Parameters to Update

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Parameter</th>
<th colspan="1">Modification</th>
<th colspan="1">Reference</th>
</tr>
<tr>
<td colspan="1">`nuxeo.works.total.default.scheduled.count`</td>
<td colspan="1">Renamed to `nuxeo.works.total.default.scheduled`</td>
<td colspan="1">[NXP-22996](https://jira.nuxeo.com/browse/NXP-22996)</td>
</tr>
<tr>
<td colspan="1">`org.nuxeo.runtime.reload_strategy`</td>
<td colspan="1">Default value to `standby`<br/>`unstash` was removed</td>
<td colspan="1">[NXP-22546](https://jira.nuxeo.com/browse/NXP-22546)</td>
</tr>
</tbody>
</table>
</div>

#### nuxeo.conf

It is no longer needed to define `org.nuxeo.runtime.reload_strategy=unstash` (introduced in 9.2), this behavior has been removed in favor of `standby` strategy.

### Data

#### Elasticsearch

{{! multiexcerpt name='upgrade-9.3-installation-elasticsearch-upgrade'}}

Elasticsearch 5.6.x is required. Follow those necessary steps to upgrade:

1. Upgrade Elasticsearch version
1. Update your custom settings and mapping to follow new Elasticsearch rules
1. Re-index the repository to apply the new settings and mapping
1. Update your custom code that queries Elasticsearch directly

##### Upgrade Elasticsearch Version

If your indices have been created with LTS 2016 they are in Elasticsearch 2.x format and can be read by Elasticsearch 5.6,
in this case follow the [full cluster restart upgrade procedure](https://www.elastic.co/guide/en/elasticsearch/reference/current/restart-upgrade.html).

If your indices have been created **before** LTS 2016 they are in Elasticsearch 1.x format and Elasticsearch 5.x will not start,
in this case an index need to be migrated to the new Elasticsearch 5.x format:

- The repository index named `nuxeo` by default doesn't need this migration because the repository will be re-indexed in the next step,
  so once this index has been backed up you can delete it.
- The sequence index named `nuxeo-uidgen` cannot be migrated because the `_source` field is disabled, Nuxeo will take care to re-create this index at startup,
  so once this index has been backed up you can delete it.
- The audit index named `nuxeo-audit` need to be migrated. Follow the [reindex upgrade procedure](https://www.elastic.co/guide/en/elasticsearch/reference/5.6/reindex-upgrade.html).

Please refer to [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-upgrade.html) for more information on upgrading your Elasticsearch cluster.


#####  Update Your Custom Elasticsearch Settings and Mapping

If you have a custom configuration for Elasticsearch it needs to be adapted to follow the new 5.6 rules.
It is probably easier to start from the default Nuxeo 9.3 configuration and migrate your necessary change instead of modifying your existing contribution directly.

Since Nuxeo 9.3, you can configure the settings and mapping by overriding JSON files in your custom template:

- The default settings is located in `templates/common-base/nxserver/config/elasticsearch-doc-settings.json.nxftl`.
  The important changes are that settings no longer supports an analyzer alias (the `fulltext` alias need to be removed).

- The default mapping is located in `templates/common-base/nxserver/config/elasticsearch-doc-mapping.json`.
  The important changes are:
  - Type `string` must be rewritten to `keyword` (in place of `not_analyzed` string) or `text` (the `analyzed` string version)
  - `not_analyzed` is deprecated type it should be replaced by `keyword`
  - Type `multi_field` does not exists anymore, it must be rewritten as type `keyword` or `text`
  - `_all` is disabled. A custom `all_field` is used instead. By default all string fields are copied to this field, to not index a field this requires to add a mapping without the `"copy_to": "all_field"` instruction.
  - Text field used for sorting or aggregating must be of type `keyword` or `text` with `fielddata=true` property
  - Text field used with NXQL `LIKE` requires a `text` field. If the field is also used for sorting it must be `fielddata`. For instance `dc:title`:
  ```
      "dc:title": {
        "type": "text",
        "copy_to": "all_field",
        "fielddata": true,
        "fields": {
          "fulltext": {
            "type": "text",
            "analyzer": "fulltext"
          }
        }
      },
  ```
  - Highlight must be done on `text` field with a `fulltext` analyzer.

##### Re-Index the Repository

The new mapping and setting for the repository index must be applied, this means that the entire repository must be re-indexed.

When using the JSF UI this can be done from the **Admin**&nbsp;> **Elasticsearch**&nbsp;> **Admin** page.

Or this can be done via REST:

```
curl -v -X POST 'http://localhost:8080/nuxeo/site/automation/Elasticsearch.Index' -u Administrator:Administrator -H 'content-type: application/json+nxrequest' -d '{"params":{},"context":{}}'
```

##### Update Your Custom Code That Query Elasticsearch Directly

Any custom native queries done using the passthrough or code need to be reviewed to follow Elasticsearch 5 query format, for instance:

- `filtered` query must be replaced with `bool` query
- `not` filter should be replaced with a `bool` query
- Aggregate `size=0` to get all buckets is not anymore supported the size must be explicitly defined (> 0)
- There is no more default `_all` field. `query_string` and `simple_query_string` must use the new custom `all_field` field.

{{! /multiexcerpt}}

#### {{> anchor 'keeping-old-tags'}} Keeping Old Tags

{{! multiexcerpt name='upgrade-9.3-keeping-tags'}}

The tag implementation has changed in 9.3. If you want to keep your old tags, add the following contribution:
  ```xml
  <require>org.nuxeo.ecm.platform.tag.service.migrator</require>
  <extension target="org.nuxeo.runtime.migration.MigrationService" point="configuration">
    <migration id="tag-storage">
      <defaultState>relations</defaultState>
    </migration>
  </extension>
  ```
If you want to migrate tags to the new storage model, follow the [Tag migrations steps](#tag-migration).
{{! /multiexcerpt}}

#### {{> anchor 'tag-migration'}} Tag Migration

{{! multiexcerpt name='upgrade-9.3-tags-migration'}}

To migrate tags to the new storage model:

1. Follow the step from section [Keeping old tags](#keeping-old-tags).

1. In the Nuxeo Platform's JSF UI, go to **Admin**&nbsp;> **System Information**&nbsp;> **Migration**, click the button **Migrate tags from relations to facets** and wait until migration is completed.

1. Remove the contribution added at step 1.

{{! /multiexcerpt}}

### Code Changes

#### Code Behavior Changes

{{! multiexcerpt name='upgrade-9.3-behavior.WebException'}}

- A new `statusCode` field has been added to `NuxeoException` to specify which HTTP code should be returned in case the exception is thrown, default to `500`. See [NXP-21776](https://jira.nuxeo.com/browse/NXP-21776).

{{! /multiexcerpt}}

{{! multiexcerpt name='upgrade-9.3-behavior.PageProvider'}}

- New `org.nuxeo.ecm.platform.query.api.PageProvider#getResultsCountLimit` method to access the limit of number of results beyond which the page provider may not be able to compute the result count. See [NXP-23202](https://jira.nuxeo.com/browse/NXP-23202).

{{! /multiexcerpt}}

{{! multiexcerpt name='upgrade-9.3-behavior.complexlist'}}

- Setting the value of a complex property now overwrites any previous values, and does not do a partial update anymore. See [NXP-19261](https://jira.nuxeo.com/browse/NXP-19261).

{{! /multiexcerpt}}

{{! multiexcerpt name='upgrade-9.3-behavior.NuxeoGroupImpl'}}

- `NuxeoGroupImpl` class has been moved to `org.nuxeo.ecm.platform.usermanager` package. The code relying on it must be updated. See [NXP-20619](https://jira.nuxeo.com/browse/NXP-20619).

{{! /multiexcerpt}}


#### Operation Changes

{{! multiexcerpt name='upgrade-9.3-operations.facets'}}

- Operations `Document.CopySchema`, `Document.AddFacet` and `Document.RemoveFacet` have a new parameter `save` to force a session save or not. See [NXP-22912](https://jira.nuxeo.com/browse/NXP-22912).

{{! /multiexcerpt}}

#### Deprecated APIs

##### Group Entity-type (REST)

{{! multiexcerpt name='upgrade-9.3-deprecated.groupentity'}}

The `groupname` and `grouplabel` properties at the root are deprecated. `id` property must be used instead of `groupname`. Both are now part of the `properties` field with all others group schema properties. See [NXP-22542](https://jira.nuxeo.com/browse/NXP-22542).

{{! /multiexcerpt}}

##### Nuxeoctl register-trial

{{! multiexcerpt name='upgrade-9.3-deprecated.nuxeoctltrial'}}

The command `nuxeoctl register-trial` has been deprecated. See [NXP-23122](https://jira.nuxeo.com/browse/NXP-23122).

{{! /multiexcerpt}}

##### WebException

{{! multiexcerpt name='upgrade-9.3-deprecated.WebException'}}

`WebException` (and most subclasses) has been deprecated, `NuxeoException` (and subclasses) are now the exceptions to be thrown. See [NXP-21776](https://jira.nuxeo.com/browse/NXP-21776).

{{! /multiexcerpt}}

### Complementary Information

- [Upgrade notes for 9.3](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%229.3%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
- [Release notes for 9.3]({{page version='' space='nxdoc' page='nuxeo-server-release-notes'}})

{{! /multiexcerpt}}

## From 9.3 to LTS 2017

{{! multiexcerpt name='9.3-to-lts-2017-upgrade-page'}}

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
<td colspan="1">`nuxeo.core.readacl.async.enabled`</td>
<td colspan="1">Default value to `true`</td>
<td colspan="1">[NXP-23788](https://jira.nuxeo.com/browse/NXP-23788)</td>
</tr>
<tr>
<td colspan="1">`nuxeo.core.readacl.async.threshold`</td>
<td colspan="1">Default value to `500`</td>
<td colspan="1">[NXP-23788](https://jira.nuxeo.com/browse/NXP-23788)</td>
</tr>
</tbody>
</table>
</div>

### Addons

#### nuxeo-mqueues - Deprecated

{{! multiexcerpt name='upgrade-lts-2017-addons.deprecated.mqueues'}}

The `nuxeo-mqueues` addon is replaced by `nuxeo-stream`. See [NXP-23854](https://jira.nuxeo.com/browse/NXP-23854).

{{! /multiexcerpt}}

### Complementary Information

- [Upgrade notes for LTS 2017](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%229.10%22%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
- [Release notes for LTS 2017]({{page version='' space='nxdoc' page='nuxeo-server-release-notes'}})

{{! /multiexcerpt}}

{{! /multiexcerpt}}
