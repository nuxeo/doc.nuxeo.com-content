---
title: LTS 2021.45 / LTS 2021-HF45
description: Discover what's new in LTS 2021.45 / LTS 2021-HF45
review:
   comment: ''
   date: '2023-10-18'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 1880
---

{{! multiexcerpt name='nuxeo-server-updates-2021-45'}}
# What's New in LTS 2021.45 / LTS 2021-HF45

## Add Ecm:isVersion Missing Aggregate Fields


Elasticsearch aggregates on ecm:isVerison are now returned by the Rest API

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32121](https://jira.nuxeo.com/browse/NXP-32121)

## Multi-Platform Docker Image Breaks Openshift Build


The 2021 Nuxeo Docker image can be pulled with an old Docker version.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32118](https://jira.nuxeo.com/browse/NXP-32118)

## Fix BulkStatus Result Map Merge Overflow on Numbers


The deletedSize and totalSize of the bulk status result returned by Blob GC are now correct

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32112](https://jira.nuxeo.com/browse/NXP-32112)

## Add a Bulk Action Option for Exclusive Action


There is a new flag for Bulk Action so that only one of such command can be scheduled and run at a time

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32091](https://jira.nuxeo.com/browse/NXP-32091)

## Prevent Concurrent Requests When Reassigning/Delegating a Task


Tasks are now reassigned/delegated automatically

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32083](https://jira.nuxeo.com/browse/NXP-32083)

## Fix Incremental Blob GC When Async Digest Is Enabled


In case of async digest computation, the old blob is not garbage collected by the regular GC

A new boolean parameter is available in the **setBlob** method of low-level documents to not garbage collect old blob references if any. This parameter is leveraged when replacing the blob digest which only occurs when asynchronous blob digest is enabled.

The asynchronous blob digest computation keeps handling the old blob deletion later on through the **org.nuxeo.ecm.core.blob.BlobDeleteListener**.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32061](https://jira.nuxeo.com/browse/NXP-32061)

## Orphan Version Should Be Removed as It Goes Along (Versions minorGC)


Orphan version is removed as it goes along

There is a new incremental Garbage Collector for orphan versions that scales and handles more cases.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31964](https://jira.nuxeo.com/browse/NXP-31964)

## Add a Bulk Action Option for Sequential Processing


There is a new flag for Bulk Action to avoid concurrency within a bulk command processing

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30985](https://jira.nuxeo.com/browse/NXP-30985)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22498) is available in our bug tracking tool.

{{! /multiexcerpt}}
