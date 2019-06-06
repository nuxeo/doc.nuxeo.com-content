---
title: Upgrade from LTS 2017 to LTS 2019
description: Instructions to upgrade your Nuxeo Platform instance from LTS 2017 version to LTS 2019.
review:
    comment: ''
    date: '2019-03-04'
    status: ok
labels:
    - multiexcerpt
toc: true
tree_item_index: 91

---
{{! multiexcerpt name='9.10-to-10.10-upgrade-page'}} For the general upgrade process, see the page [Upgrading the Nuxeo Platform]({{page page='upgrading-the-nuxeo-platform'}}).

{{! excerpt}}
This chapter highlights some major information about upgrade from Nuxeo Platform LTS 2017 (9.10) to Nuxeo Platform LTS 2019 (10.10). We strongly encourage you to also have a quick read of the upgrade notes.

If you had already upgraded to previous 10.x Fast Track versions, check out the page [Upgrade from LTS 2017 following Fast Tracks]({{page version='' space='nxdoc' page='upgrade-from-lts-2017-following-fast-tracks'}}) for upgrade instructions from 10.1 to 10.2, 10.2 to 10.3 or 10.3 to LTS 2019.
{{! /excerpt}}

## Installation and Configuration

### New Parameters

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
<td colspan="1">New Default Value to `false`</td>
<td colspan="1">[NXP-24030](https://jira.nuxeo.com/browse/NXP-24030)</td>
</tr>
<tr>
<td colspan="1">`userResolverCreateIfNeeded`</td>
<td colspan="1">Default value to `true`</td>
<td colspan="1">[NXP-25062](https://jira.nuxeo.com/browse/NXP-25062)</td>
</tr>
<td colspan="1">`userResolverUpdate`</td>
<td colspan="1">Default value to `true`</td>
<td colspan="1">[NXP-25062](https://jira.nuxeo.com/browse/NXP-25062)</td>
</tr>
</tbody>
</table>
</div>

### Requirements
{{{multiexcerpt 'upgrade-10.2-installation-requirements' page='Upgrade from LTS 2017 following Fast Tracks'}}}
{{{multiexcerpt 'upgrade-10.3-installation-requirements' page='Upgrade from LTS 2017 following Fast Tracks'}}}

## Data

### Binaries
{{{multiexcerpt 'upgrade-10.10-installation-binaries-upgrade' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### Elasticsearch
{{{multiexcerpt 'upgrade-10.3-installation-elasticsearch-upgrade' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### MongoDB
{{{multiexcerpt 'upgrade-10.3-installation-mongodb-upgrade' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### Redis
{{{multiexcerpt 'upgrade-10.3-installation-redis-upgrade' page='Upgrade from LTS 2017 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-10.10-installation-redis-template' page='Upgrade from LTS 2017 following Fast Tracks'}}}

## Code Changes

### Replace `json-lib` with `jackson`

{{{multiexcerpt 'upgrade-10.1-code.jackson' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### CSRF Protection

{{{multiexcerpt 'upgrade-10.1-code.csrf-protection' page='Upgrade from LTS 2017 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-10.3-code.csrf-activation' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### Directories

{{{multiexcerpt 'upgrade-10.3-code.directories' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### Conversion

{{{multiexcerpt 'upgrade-10.3-code.conversion' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### Rendition

{{{multiexcerpt 'upgrade-10.10-api.rendition' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### Video Conversion Listener

{{{multiexcerpt 'upgrade-10.1-code.video-listeners' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### Automation Scripting

{{{multiexcerpt 'upgrade-10.2-code.relax-import-constraints' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### Transient Username and External Permissions

{{{multiexcerpt 'upgrade-10.3-code.transient-username' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### Rename operations WebUI.* related to JSF

{{{multiexcerpt 'upgrade-10.3-code.webui-operations' page='Upgrade from LTS 2017 following Fast Tracks'}}}

##### Keeping Old Comments
{{{multiexcerpt 'upgrade-10.3-keeping-comments' page='Upgrade from LTS 2017 following Fast Tracks'}}}

##### Comment Migration
{{{multiexcerpt 'upgrade-10.3-comments-migration' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### Log4j 2

{{{multiexcerpt 'upgrade-10.3-api.log4j' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### Use `NuxeoPrincipal` Instead of `Principal` in Most APIs

{{{multiexcerpt 'upgrade-10.3-api.nuxeoprincipal' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### REST API Enrichers

{{{multiexcerpt 'upgrade-10.3-api.enrichers' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### REST API Endpoints

{{{multiexcerpt 'upgrade-10.3-api.endpoints' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### Thumbnail resolution

{{{multiexcerpt 'upgrade-10.3-code.thumbnail-resolution' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### Bulk Action Framework Contextual Information

{{{multiexcerpt 'upgrade-10.10-code-BAF' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### KeyValueStore Implementation in SQL

{{{multiexcerpt 'upgrade-10.10-api.keyvaluestore' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### User Actions in WebUI
{{{multiexcerpt 'upgrade-10.10-code.webui-user-actions' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### FileManager
{{{multiexcerpt 'upgrade-10.10-code.filemanager' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### SAML Icon Displayed on Login Page
{{{multiexcerpt 'upgrade-10.10-code.saml-icon' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### Code Behavior Changes

{{{multiexcerpt 'upgrade-10.1-behavior.field.version.indexed' page='Upgrade from LTS 2017 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-10.1-code.rest-stack-trace' page='Upgrade from LTS 2017 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-10.2-code.TransactionalFeature' page='Upgrade from LTS 2017 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-10.2-api.KeyValueStore' page='Upgrade from LTS 2017 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-10.2-code.skipAggregates' page='Upgrade from LTS 2017 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-10.3-code.nuxeooauthfilter' page='Upgrade from LTS 2017 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-10.3-code.fulltext' page='Upgrade from LTS 2017 following Fast Tracks'}}}


### Operation Changes

#### `SuggestUserEntries` operation
{{{multiexcerpt 'upgrade-10.2-operation.SuggestUserEntries' page='Upgrade from LTS 2017 following Fast Tracks'}}}

#### Rename operations WebUI.* related to JSF
{{{multiexcerpt 'upgrade-10.3-code.webui-operations' page='Upgrade from LTS 2017 following Fast Tracks'}}}

#### Relocate `nuxeo-platform-collections` in `nuxeo-service`
{{{multiexcerpt 'upgrade-10.3-operation.collections' page='Upgrade from LTS 2017 following Fast Tracks'}}}

#### Image Recompute
{{{multiexcerpt 'upgrade-10.3-operation.image-recompute' page='Upgrade from LTS 2017 following Fast Tracks'}}}

#### Regenerate Thumbnails on Demand
{{{multiexcerpt 'upgrade-10.10-operation.thumbnail' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### Deprecated APIs

#### @LocalDeploy

{{{multiexcerpt 'upgrade-10.1-deprecated.localdeploy' page='Upgrade from LTS 2017 following Fast Tracks'}}}

#### CoreSession#close

{{{multiexcerpt 'upgrade-10.1-deprecated.coresession-close' page='Upgrade from LTS 2017 following Fast Tracks'}}}

#### TrashService

{{{multiexcerpt 'upgrade-10.2-deprecated.lifecycle_transition_event' page='Upgrade from LTS 2017 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-10.3-deprecated.lifecycle_transition_event' page='Upgrade from LTS 2017 following Fast Tracks'}}}

#### Comment Manager
{{{multiexcerpt 'upgrade-10.3-comments-migration' page='Upgrade from LTS 2017 following Fast Tracks'}}}

## Addons

### Nuxeo Drive - Server APIs Changes

{{{multiexcerpt 'upgrade-10.3-addons.drive.apis' page='Upgrade from LTS 2017 following Fast Tracks'}}}

#### Remove Usage of Deprecated Code in Nuxeo-Drive-Server

{{{multiexcerpt 'upgrade-10.3-addons.drive.deprecated' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### Nuxeo CSV

{{{multiexcerpt 'upgrade-10.3-addons.csv.dates' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### Nuxeo Diff

{{{multiexcerpt 'upgrade-10.3-addons.diff.deprecated' page='Upgrade from LTS 2017 following Fast Tracks'}}}

## Complementary Information

- [Upgrade notes for 10.2](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%2210.2%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
- [Release notes for 10.2]({{page version='' space='nxdoc' page='nuxeo-server-release-notes'}})
