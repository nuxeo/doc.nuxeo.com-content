---
title: LTS 2023.1 / LTS 2023-HF01
description: Discover what's new in LTS 2023.1 / LTS 2023-HF01
review:
   comment: ''
   date: '2023-08-09'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 1000
---

{{! multiexcerpt name='nuxeo-server-updates-2023-1'}}
# What's New in LTS 2023.1 / LTS 2023-HF01

## Fix Inconsistency With the Dates Used by the Date-Based ACEs

Take into account the server timezone when updating ACEs.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-32013](https://jira.nuxeo.com/browse/NXP-32013)

## Remove Elasticsearch Dependency Exclusions From Nuxeo Drive Server

Outdated elasticsearch libraries dependency exclusions have been removed from Nuxeo Drive.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31988](https://jira.nuxeo.com/browse/NXP-31988)

## Add a nuxeo.conf Property to Expose the Final Blob URL

When activating direct download, the final blob URL can be exposed with a nuxeo.conf property.

To expose the final Blob URL, use the following  property:

```
org.nuxeo.download.url.follow.redirect=true
```

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31987](https://jira.nuxeo.com/browse/NXP-31987)

## Fix ORA-00932 When Using a CLOB Is a WHERE Clause

A new property is added to use `setClob` method in `PreparedStatement` for Oracle.

Added a new property `nuxeo.oracle.use.clob` to use the `setClob` method in `PreparedStatement` for Oracle. Defaults to `false`.

To use `setClob` method, configure in nuxeo.conf:

```
nuxeo.oracle.use.clob=true

```

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31981](https://jira.nuxeo.com/browse/NXP-31981)

## Preview Adapter Should Process Rendition on Worker Nodes

Preview are now more scalable.

The preview adapter is now processed by worker nodes within a managed thread pools instead of being done on front nodes, the preview is cached and shared between all front nodes.
This feature is activated by default on LTS 2023.
On LTS 2021 it can be activated by setting `nuxeo.preview.legacy.enabled=false` in the `nuxeo.conf` file.
The number of threads per worker nodes executing PreviewWork can be tuned with `nuxeo.work.queue.renditionBuilder.threads=2`, default being 2 threads per node, with a max concurrency of 6.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31979](https://jira.nuxeo.com/browse/NXP-31979)

## Add Flexible Record Core API

Added Flexible Record Core API

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31968](https://jira.nuxeo.com/browse/NXP-31968)

## Delete Temp Files After a CSV Exports

CSV export doesn't leave temp files behind.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31960](https://jira.nuxeo.com/browse/NXP-31960)

## Fix ORA-03146 When Setting a CLOB in a Prepared Statement

CLOB values are set with the setClob method in PreparedStatement.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31955](https://jira.nuxeo.com/browse/NXP-31955)

## Fix BulkMigrator Service in Cluster Mode

BulkMigrator now works in cluster mode.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31946](https://jira.nuxeo.com/browse/NXP-31946)

## Make Drive Adapt Types Which Extend Note

Nuxeo Drive now adapts Note subtypes.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31934](https://jira.nuxeo.com/browse/NXP-31934)

## Fix Unit Tests With 2021.36 on H2 With Schema Named Rights

H2 reserved table names are now avoided in Nuxeo.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31907](https://jira.nuxeo.com/browse/NXP-31907)

## Rename Compliance Mode as Strict Mode

Nuxeo Retention compliance mode renamed as strict mode.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31878](https://jira.nuxeo.com/browse/NXP-31878)

## Improve Rendition of Large Documents in PDF Viewer

Live renditions are more scalable.

The live document rendering used as preview are now processed by worker nodes within a managed thread pools instead of being done on front nodes, the rendering is cached and shared between all front nodes.
This feature is activated by default on LTS 2023.
On LTS 2021 it can be activated by setting `nuxeo.rendition.legacy.enabled=false` in the `nuxeo.conf` file.
The number of threads per worker nodes executing RenditionWork can be tuned with `nuxeo.work.queue.renditionBuilder.threads=2`, default being 2 threads per node, with a max concurrency of 6.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31855](https://jira.nuxeo.com/browse/NXP-31855)

## Add an Extension Point to Configure the Properties Returned by checkFileInfo

Allow to update properties returned by the CheckFileInfo WOPI call.

You can now contribute a class to the WOPIService to be able to update the default computed properties returned by the CheckFileInfo WOPI call.

```
<extension target="org.nuxeo.wopi.WOPIService" point="checkFileInfoUpdater">
  <checkFileInfoUpdater class="org.nuxeo.wopi.MyCustomCheckFileInfoUpdater" />
</extension>
```

The new class must extend org.nuxeo.wopi.CheckFileInfoUpdater and implement the only method `Map<String, Serializable> update(Map<String, Serializable> checkFileInfoProperties)`. This method will be called just before returning the computed properties to Office Online allowing to update any property.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31852](https://jira.nuxeo.com/browse/NXP-31852)

## Management API Endpoint for Nuxeo Properties

Introducing a new management/configuration endpoint.

Nuxeo instances can now dump their configuration as JSON. Sensitive informations are redacted based on key pattern and also on value pattern.

a simple get is enough:

```
curl -u <user>:<password> <nuxeoHost>:8080/nuxeo/api/v1/management/configuration
```

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31783](https://jira.nuxeo.com/browse/NXP-31783)

## Rest API Calls Should Not Return Exception Messages

The nuxeo conf property `org.nuxeo.rest.exception.message.enabled` is available to hide exception messages at Rest API level.

See [documentation](https://doc.nuxeo.com/nxdoc/configuration-parameters-index-nuxeoconf/#orgnuxeorestexceptionmessageenabled)

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31672](https://jira.nuxeo.com/browse/NXP-31672)

## Skip handleLogin When HTTP Response Has Already Been Commited

The Keycloak module delegates the redirect after auth failure to the default authentication mechanism.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30507](https://jira.nuxeo.com/browse/NXP-30507)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22336) is available in our bug tracking tool.

{{! /multiexcerpt}}
