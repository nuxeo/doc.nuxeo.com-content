---
title: LTS 2021.61 / LTS 2021-HF61
description: Discover what's new in LTS 2021.61 / LTS 2021-HF61
review:
   comment: ''
   date: '2024-10-10'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-61'}}
# What's New in LTS 2021.61 / LTS 2021-HF61

## Improve the sequenceHexRandomized Retry Mechanism


The MongoDB sequenceHexRandomized retry mechanism has a maximum duration of 250 ms.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32880](https://jira.nuxeo.com/browse/NXP-32880)

## Fix NPE When Moving a Snapshotable Document


Moving a document to an Orderable folderable is now working correctly.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32870](https://jira.nuxeo.com/browse/NXP-32870)

## Fix S3 Download URI When the Method Is Not GET


S3 presigned URL (generated for direct download) can now be used with the HEAD method to get file info only

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32293](https://jira.nuxeo.com/browse/NXP-32293)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=23105) is available in our bug tracking tool.

{{! /multiexcerpt}}
