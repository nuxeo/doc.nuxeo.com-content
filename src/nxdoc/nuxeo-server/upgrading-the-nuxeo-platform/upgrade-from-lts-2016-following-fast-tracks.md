---
title: Upgrade from LTS 2016 following Fast Tracks
review:
    comment: ''
    date: '2017-04-03'
    status: ok
labels:
    - multiexcerpt
toc: true
tree_item_index: 95
---

## From LTS 2016 to 9.1

{{! multiexcerpt name='upgrade-9.1-reindex-warning'}}

{{#> callout type='warning' }}

Reindex the full repository following [Rebuilding the repository index page]({{page anchor='rebuildingtheindex-rebuilding-the-repository-index' page='elasticsearch-setup'}}), or using [Nuxeo Dev Tools Extension]({{page page='nuxeo-dev-tools-extension'}}). See [NXP-21279](https://jira.nuxeo.com/browse/NXP-21279).

{{/callout}}

{{! /multiexcerpt}}

### Installation and Configuration

#### Requirements
{{! multiexcerpt name='upgrade-9.1-installation-requirements'}}

- MySQL >= 5.6.4 is required. See [NXP-21338](https://jira.nuxeo.com/browse/NXP-21338)

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

### Nuxeo Studio Application Dependencies

{{! multiexcerpt name='upgrade-9.1-studio-deps'}}
Make sure your Nuxeo Studio project depends on the **Nuxeo JSF UI** target package. See the pages [How to Update the Version of Your Target Platform in Studio]({{page space='studio' page='update-the-version-of-your-target-platform'}}) and [Specific Upgrade Instructions]({{page space='studio' page='specific-upgrade-instructions'}}) for more details.
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

- Elasticsearch artifact has been renamed from `org.nuxeo.ecm.platform:nuxeo-platform-el` to `org.nuxeo.ecm.core:nuxeo-core-el`. See [NXP-21713](https://jira.nuxeo.com/browse/NXP-21713).

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

We introduced a new automatic versioning system in 9.1. We deprecated [versioningRules](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.versioning.VersioningService--versioningRules) extension point. You now have to use new extension points, see [documentation]({{page page='versioning#versioning-policies'}}).

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

### Code Changes

#### Code Behavior Changes

{{! multiexcerpt name='upgrade-9.2-code.blobinfo'}}

- Use `org.nuxeo.ecm.core.blob.BlobInfo` instead of the old `org.nuxeo.ecm.core.blob.BlobManager.BlobInfo`. See [NXP-22217](https://jira.nuxeo.com/browse/NXP-22217).

{{! /multiexcerpt}}

{{! multiexcerpt name='upgrade-9.2-code.nuxeoctl.register.trial'}}

- The `register-trial` command reads parameters: `./nuxectl register-trial [<firstname> <lastname> <email> <company> <project>]`. See [NXP-22550](https://jira.nuxeo.com/browse/NXP-22550).

{{! /multiexcerpt}}

{{! multiexcerpt name='upgrade-9.2-code.oauth'}}

- Parameters `state` and `redirect_uri` are now mandatory for security reason. See [NXP-22183](https://jira.nuxeo.com/browse/NXP-22183) and [NXP-22186](https://jira.nuxeo.com/browse/NXP-22186).

{{! /multiexcerpt}}

#### Deprecated APIs

##### Oauth2Client

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

{{! /multiexcerpt}}
