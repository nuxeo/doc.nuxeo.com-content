---
title: Upgrade from LTS 2016 to 9.2
description: Instructions to upgrade your Nuxeo Platform instance from LTS 2016 version to Fast Track 9.2.
review:
    comment: ''
    date: '2017-04-03'
    status: ok
labels:
    - multiexcerpt
toc: true
tree_item_index: 96
---

## From LTS 2016 to 9.2

### Installation and Configuration

{{#> callout type='warning' }}

Reindex the full repository following [Rebuilding the repository index page]({{page anchor='rebuildingtheindex-rebuilding-the-repository-index' page='elasticsearch-setup'}}), or using [Nuxeo Dev Tools Extension]({{page page='nuxeo-dev-tools-extension'}}). See [NXP-21279](https://jira.nuxeo.com/browse/NXP-21279).

{{/callout}}

#### Requirements

- MySQL >= 5.6.4 is required. See [NXP-21338](https://jira.nuxeo.com/browse/NXP-21338)

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
<td colspan="1">`nuxeo.automation.allowVirtualUser`</td>
<td colspan="1">Default Value to `false`</td>
<td colspan="1">[NXP-21889](https://jira.nuxeo.com/browse/NXP-21889)</td>
</tr>
</tbody>
</table>
</div>

### Code Changes

#### Code Behavior Changes

{{{multiexcerpt 'upgrade-9.1-code.defaultValue' page='/nxdoc/Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.1-code.platform.el' page='/nxdoc/Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.1-code.elasticsearchfeature' page='/nxdoc/Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.2-code.blobinfo' page='/nxdoc/Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.2-code.nuxeoctl.register.trial' page='/nxdoc/Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.2-code.oauth' page='/nxdoc/Upgrade from LTS 2016 following Fast Tracks'}}}

#### Operation Changes

{{{multiexcerpt 'upgrade-9.1-operation.Server.CreateUser' page='/nxdoc/Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.1-operation.Tag.Suggestion' page='/nxdoc/Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.1-operation.addPermission' page='/nxdoc/Upgrade from LTS 2016 following Fast Tracks'}}}

#### Deprecated APIs

##### Automatic Versioning

{{{multiexcerpt 'upgrade-9.1-deprecated.automatic-versioning' page='/nxdoc/Upgrade from LTS 2016 following Fast Tracks'}}}

##### Fields file:filename and common:size Removed

{{{multiexcerpt 'upgrade-9.1-deprecated.filecommon' page='/nxdoc/Upgrade from LTS 2016 following Fast Tracks'}}}

##### FileManager Can Now Prevent Overwriting Existing Document

{{{multiexcerpt 'upgrade-9.1-deprecated.filemanager' page='/nxdoc/Upgrade from LTS 2016 following Fast Tracks'}}}

##### BlobDispatcher Can Now Dispatch Depending on Document's XPath

{{{multiexcerpt 'upgrade-9.1-deprecated.blobdispatcher' page='/nxdoc/Upgrade from LTS 2016 following Fast Tracks'}}}

##### Scoped DocumentModel Context Data

{{{multiexcerpt 'upgrade-9.1-deprecated.document.context' page='/nxdoc/Upgrade from LTS 2016 following Fast Tracks'}}}

##### LoginScreenHelper Mobile Methods

{{{multiexcerpt 'upgrade-9.1-deprecated.mobile.helper' page='/nxdoc/Upgrade from LTS 2016 following Fast Tracks'}}}

##### Oauth2Client

{{{multiexcerpt 'upgrade-9.1-operation.Server.CreateUser' page='/nxdoc/Upgrade from LTS 2016 following Fast Tracks'}}}

### Addons

#### Nuxeo Drive

{{{multiexcerpt 'upgrade-9.1-addons.drive.apis' page='/nxdoc/Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.1-addons.drive.sync.root' page='/nxdoc/Upgrade from LTS 2016 following Fast Tracks'}}}

#### Segment.io

{{{multiexcerpt 'upgrade-9.2-addons.segmentio' page='/nxdoc/Upgrade from LTS 2016 following Fast Tracks'}}}

### Complementary Information

#### Upgrade notes

- [Upgrade notes for 9.1](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%229.1%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
- [Upgrade notes for 9.2](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%229.2%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)

#### Release notes

- [Release notes for 9.1]({{page version='' space='nxdoc' page='nuxeo-server-release-notes'}})
- [Release notes for 9.2]({{page version='' space='nxdoc' page='nuxeo-server-release-notes'}})
