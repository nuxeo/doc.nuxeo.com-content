---
title: LTS 2021.18 / LTS 2021-HF18
description: Discover what's new in LTS 2021.18 / LTS 2021-HF18
review:
   comment: ''
   date: '2022-04-04'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 3050
---

{{! multiexcerpt name='nuxeo-server-updates-2021-18'}}
# What's New in LTS 2021.18 / LTS 2021-HF18

## Nuxeo Server

### Tomcat to 9.0.60

The Nuxeo Platform now relies on Tomcat 9.0.60.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30934](https://jira.nuxeo.com/browse/NXP-30934)

## Core Storage

### MakeBlob Computation Should Be Resilient to Unknown Command or Status

MakeBlob computation is more resilient to unknown command or status.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30918](https://jira.nuxeo.com/browse/NXP-30918)

### Manually Handle Transaction in OperationContext

An option is available on OperationContext to disable the transaction management in order to let this responsibility to the caller.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30897](https://jira.nuxeo.com/browse/NXP-30897)

### Fix Kafka Duplicate Processing Due to Incomplete Rebalance

Avoid duplicate processing when Kafka rebalancing is incomplete

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29208](https://jira.nuxeo.com/browse/NXP-29208)

## Major Bug Fixes

### Fix Bulk Edit Behavior Depending on Permission

Error on some document doesn't rollback changes done on other in the same batch during bulk edit.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30855](https://jira.nuxeo.com/browse/NXP-30855)

### Add DownloadBlobGuard to VCS

DownloadBlobGuard can also be enabled to prevent binary data from being full text indexed in VCS too

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30931](https://jira.nuxeo.com/browse/NXP-30931)

# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21631) is available in our bug tracking tool.

{{! /multiexcerpt}}
