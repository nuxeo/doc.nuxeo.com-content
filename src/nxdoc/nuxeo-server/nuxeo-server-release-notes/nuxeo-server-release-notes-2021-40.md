---
title: LTS 2021.40 / LTS 2021-HF40
description: Discover what's new in LTS 2021.40 / LTS 2021-HF40
review:
   comment: ''
   date: '2023-07-05'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 1930
---

{{! multiexcerpt name='nuxeo-server-updates-2021-40'}}
# What's New in LTS 2021.40 / LTS 2021-HF40

## Add a nuxeo.conf property to expose the final Blob URL


When activating direct download, the final blob URL can be exposed with a nuxeo.conf property.

To expose the final Blob URL, use the following nuxeo.conf property:

```
org.nuxeo.download.url.follow.redirect=true
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31987](https://jira.nuxeo.com/browse/NXP-31987)

## Fix ORA-03146  When Setting a CLOB in a Prepared Statement


Added a new property to use setClob method in PreparedStatement for Oracle.

Added a new property `nuxeo.oracle.use.clob` to use the `setClob` method in PreparedStatement for Oracle. Defaults to `false`.

To use `setClob` method, configure in `nuxeo.conf`:
```
nuxeo.oracle.use.clob=true
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31955](https://jira.nuxeo.com/browse/NXP-31955)

## Fix BulkMigrator Service in Cluster Mode


BulkMigrator now works in cluster mode

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31946](https://jira.nuxeo.com/browse/NXP-31946)

## Update ImageMagick in 2021 Docker Image


ImageMagick was updated to 6.9.12.90-1.el7 in the Nuxeo Docker image.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31919](https://jira.nuxeo.com/browse/NXP-31919)

## Fix Unit Tests With 2021.36 on H2 With Schema Named Rights


H2 reserved table names are now avoided in Nuxeo.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31907](https://jira.nuxeo.com/browse/NXP-31907)

## Document Move Should Scale and Be Asynchronous


Moving large folder is now more scalable and asynchronous

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31893](https://jira.nuxeo.com/browse/NXP-31893)

## Add an Extension Point to Configure the Properties Returned by checkFileInfo


Allow to update properties returned by the CheckFileInfo WOPI call

You can now contribute a class to the `WOPIService` to be able to update the default computed properties returned by the CheckFileInfo WOPI call
```xml
<extension target=org.nuxeo.wopi.WOPIService point=checkFileInfoUpdater>
  <checkFileInfoUpdater class=org.nuxeo.wopi.MyCustomCheckFileInfoUpdater />
</extension>
```

The new class must extend `org.nuxeo.wopi.CheckFileInfoUpdater` and implement the only method `Map<String, Serializable> update(Map<String, Serializable> checkFileInfoProperties)`. This method will be called just before returning the computed properties to Office Online allowing to update any property.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31852](https://jira.nuxeo.com/browse/NXP-31852)

## Management API Endpoint for Nuxeo Properties


Introducing a new management/configuration endpoint

Nuxeo instances can now dump their configuration as json. Sensitive informations are redacted based on key pattern and also on value pattern.

a simple get is enough:

```sh
curl -u <user>:<password> <nuxeoHost>:8080/nuxeo/api/v1/management/configuration
```



<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31783](https://jira.nuxeo.com/browse/NXP-31783)

## Rest API Calls Should Not Return Exception Messages


The nuxeo conf property "org.nuxeo.rest.exception.message.enabled" is available to hide exception messages at Rest API level

See [documentation](https://doc.nuxeo.com/nxdoc/configuration-parameters-index-nuxeoconf/#orgnuxeorestexceptionmessageenabled)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31672](https://jira.nuxeo.com/browse/NXP-31672)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22322) is available in our bug tracking tool.

{{! /multiexcerpt}}
