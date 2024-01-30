---
title: LTS 2021.48 / LTS 2021-HF48
description: Discover what's new in LTS 2021.48 / LTS 2021-HF48
review:
   comment: ''
   date: '2024-01-03'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2021-48'}}
# What's New in LTS 2021.48 / LTS 2021-HF48

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

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22646) is available in our bug tracking tool.

{{! /multiexcerpt}}
