---
title: Upgrade from LTS 2016 to 9.1
description: Instructions to upgrade your Nuxeo Platform instance from LTS 2016 version to Fast Track 9.1.
review:
    comment: ''
    date: '2017-04-03'
    status: ok
labels:
    - multiexcerpt
toc: true
tree_item_index: 95
---

{{! multiexcerpt name='8.10-to-9.1-upgrade-page'}}

## From LTS 2016 to 9.1

{{#> callout type='warning' }}

Reindex the full repository following [Rebuilding the repository index page]({{page anchor='rebuildingtheindex-rebuilding-the-repository-index' page='elasticsearch-setup'}}), or using [Nuxeo Dev Tools Extension]({{page page='nuxeo-dev-tools-extension'}}). See [NXP-21279](https://jira.nuxeo.com/browse/NXP-21279).

{{/callout}}

### Installation and Configuration

{{! multiexcerpt name='upgrade-9.1-installation-requirements'}}

#### Requirements

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

### Code Changes

#### Automation Scripting

{{! multiexcerpt name='upgrade-9.1-code.defaultValue'}}

Backward Compatibility was broken for 9.1 ([NXP-21508](https://jira.nuxeo.com/browse/NXP-21508)): parameters are no longer extracted from the context of the `params` object when calling the scripting operation. You have to explicitly set each parameter in the operation definition.. Follow [NXP-22190](https://jira.nuxeo.com/browse/NXP-22190) for resolutions.

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

{{! multiexcerpt name='upgrade-9.1-operation.Tag.Suggestion'}}

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

##### Scoped DocumentModel Context Date

Any usage of `ScopedMap` or `ScopeType` is deprecated and will be removed in the future.

- Instead of `ScopedMap`, use `Map<String, Serializable>`.
- Instead of `ScopeType` in `getContextData` and `putContextData`, use equivalent methods without a scope.

See [NXP-21570](https://jira.nuxeo.com/browse/NXP-21570).

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

###### BlobDispatcher Can Now Dispatch Depending on Document's XPath

{{! multiexcerpt name='upgrade-9.1-deprecated.blobdispatcher'}}

Added:

- `BlobDispatcher#getBlobProvider(Document doc, Blob blob, String xpath)`

Deprecated:

- `BlobDispatcher#getBlobProvider(Document doc, Blob blob)`

See [NXP-21891](https://jira.nuxeo.com/browse/NXP-21891).

{{! /multiexcerpt}}

#### Addons

##### Nuxeo Drive - Server APIs Changes

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
- `FolderItem#reateFile(String parentId, Blob blob, Principal principal)`

See [NXP-21854](https://jira.nuxeo.com/browse/NXP-21854).

{{! /multiexcerpt}}

###### Nuxeo Drive - Synchronization Root Behavior

{{! multiexcerpt name='upgrade-9.1-addons.drive.apis'}}

Synchronization root is now reset with a copied document. In LTS 2016 and earlier, copying a synchronization root Document resulted in creating a new synchronization root.

To re-activate the old behavior:

```xml
<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="org.nuxeo.drive.resetSyncRootsOnCopy">false</property>
</extension>
```

See [NXP-21676](https://jira.nuxeo.com/browse/NXP-21676).

{{! /multiexcerpt}}

{{! /multiexcerpt}}

### Complementary Information

* [Upgrade notes for 9.1](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%229.1%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
* [Release notes for 9.1]({{page version='' space='nxdoc' page='nuxeo-server-release-notes'}})
