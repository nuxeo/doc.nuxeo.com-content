---
title: LTS 2023.6 / LTS 2023-HF06
description: Discover what's new in LTS 2023.6 / LTS 2023-HF06
review:
   comment: ''
   date: '2024-01-03'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2023-6'}}
# What's New in LTS 2023.6 / LTS 2023-HF06

## Aded Byte-Range Support to GoogleStorageBlobProvider


GoogleStorageBlobProvider supports byte-range 

See NXP-28919

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32197](https://jira.nuxeo.com/browse/NXP-32197)

## Test LTS Instance Upgrade From N-1 Minor Version (Hotfix)


Nuxeo LTS is now continuously tested on minor version upgrade.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32058](https://jira.nuxeo.com/browse/NXP-32058)

## Provide a GoogleBlobProvider Extending BlobProvider


A new Google Storage Blob Provider that supports the new Full GC implementation is available

This new implementation is not enabled by default, you must define:
```Java
nuxeo.core.binarymanager=org.nuxeo.ecm.core.storage.gcp.GoogleStorageBlobProvider
```
to activate it.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31991](https://jira.nuxeo.com/browse/NXP-31991)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22648) is available in our bug tracking tool.

{{! /multiexcerpt}}
