---
title: Upgrade from LTS 2016 to 9.3
description: Instructions to upgrade your Nuxeo Platform instance from LTS 2016 version to Fast Track 9.3.
review:
    comment: ''
    date: '2017-04-03'
    status: ok
labels:
    - multiexcerpt
toc: true
tree_item_index: 96
---

## From LTS 2016 to 9.3

### Installation and Configuration

{{{multiexcerpt 'upgrade-9.1-reindex-warning' page='Upgrade from LTS 2016 following Fast Tracks'}}}

#### Requirements

{{{multiexcerpt 'upgrade-9.1-installation-requirements' page='Upgrade from LTS 2016 following Fast Tracks'}}}

#### nuxeo.conf

{{{multiexcerpt 'upgrade-9.2-nuxeo.conf' page='Upgrade from LTS 2016 following Fast Tracks'}}}

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
<tr>
<td colspan="1">`nuxeo.works.total.default.scheduled.count`</td>
<td colspan="1">Renamed to `nuxeo.works.total.default.scheduled`</td>
<td colspan="1">[NXP-21828](https://jira.nuxeo.com/browse/NXP-22996)</td>
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
<tr>
<td colspan="1">`nuxeo.faceted.tag.service.enabled`</td>
<td colspan="1">Default Value to `false`</td>
<td colspan="1">[NXP-21651](https://jira.nuxeo.com/browse/NXP-21651)</td>
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
</tbody>
</table>
</div>

### Nuxeo Studio Application Definition

{{{multiexcerpt 'upgrade-9.1-studio-deps' page='Upgrade from LTS 2016 following Fast Tracks'}}}

### Data

#### Directories

##### SQL Directories

{{{multiexcerpt 'upgrade-9.2-sql-template-required' page='Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.3-behavior.sqldirectories' page='Upgrade from LTS 2016 following Fast Tracks'}}}

##### MongoDB Directories

{{{multiexcerpt 'upgrade-9.2-new.directories.mongodb' page='Upgrade from LTS 2016 following Fast Tracks'}}}

### Code Changes

#### Automation Scripting

{{{multiexcerpt 'upgrade-9.1-code.scripts-backward-compat' page='Upgrade from LTS 2016 following Fast Tracks'}}}

#### Code Behavior Changes

{{{multiexcerpt 'upgrade-9.1-code.defaultValue' page='Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.1-code.platform.el' page='Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.1-code.elasticsearchfeature' page='Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.2-code.blobinfo' page='Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.2-code.nuxeoctl.register.trial' page='Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.2-code.oauth' page='Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.3-behavior.WebException' page='Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.3-behavior.PageProvider' page='Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.3-behavior.espassthrough' page='Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.3-behavior.complexlist' page='Upgrade from LTS 2016 following Fast Tracks'}}}

#### Operation Changes

{{{multiexcerpt 'upgrade-9.1-operation.Server.CreateUser' page='Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.1-operation.Tag.Suggestion' page='Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.1-operation.addPermission' page='Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.3-operations.facets' page='Upgrade from LTS 2016 following Fast Tracks'}}}

#### Deprecated APIs

##### Nuxeoctl register-trial

{{{multiexcerpt 'upgrade-9.3-deprecated.nuxeoctltrial' page='Upgrade from LTS 2016 following Fast Tracks'}}}

##### Automatic Versioning

{{{multiexcerpt 'upgrade-9.1-deprecated.automatic-versioning' page='Upgrade from LTS 2016 following Fast Tracks'}}}

##### Fields file:filename and common:size Removed

{{{multiexcerpt 'upgrade-9.1-deprecated.filecommon' page='Upgrade from LTS 2016 following Fast Tracks'}}}

##### FileManager Can Now Prevent Overwriting Existing Document

{{{multiexcerpt 'upgrade-9.1-deprecated.filemanager' page='Upgrade from LTS 2016 following Fast Tracks'}}}

##### BlobDispatcher Can Now Dispatch Depending on Document's XPath

{{{multiexcerpt 'upgrade-9.1-deprecated.blobdispatcher' page='Upgrade from LTS 2016 following Fast Tracks'}}}

##### Scoped DocumentModel Context Data

{{{multiexcerpt 'upgrade-9.1-deprecated.document.context' page='Upgrade from LTS 2016 following Fast Tracks'}}}

##### LoginScreenHelper Mobile Methods

{{{multiexcerpt 'upgrade-9.1-deprecated.mobile.helper' page='Upgrade from LTS 2016 following Fast Tracks'}}}

##### Oauth2Client

{{{multiexcerpt 'upgrade-9.1-operation.Server.CreateUser' page='Upgrade from LTS 2016 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-9.2-deprecated.oauth2' page='Upgrade from LTS 2016 following Fast Tracks'}}}

##### WebException

{{{multiexcerpt 'upgrade-9.3-deprecated.WebException' page='Upgrade from LTS 2016 following Fast Tracks'}}}

### Addons

#### Nuxeo Drive - Server APIs Changes

{{{multiexcerpt 'upgrade-9.1-addons.drive.apis' page='Upgrade from LTS 2016 following Fast Tracks'}}}

#### Nuxeo Drive - Synchronization Root Behavior

{{{multiexcerpt 'upgrade-9.1-addons.drive.sync.root' page='Upgrade from LTS 2016 following Fast Tracks'}}}

#### Segment.io

{{{multiexcerpt 'upgrade-9.2-addons.segmentio' page='Upgrade from LTS 2016 following Fast Tracks'}}}

### Complementary Information

#### Upgrade notes

- [Upgrade notes for 9.1](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%229.1%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
- [Upgrade notes for 9.2](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%229.2%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)

#### Release notes

- [Release notes for 9.1]({{page version='' space='nxdoc' page='nuxeo-server-release-notes'}})
- [Release notes for 9.2]({{page version='' space='nxdoc' page='nuxeo-server-release-notes'}})
