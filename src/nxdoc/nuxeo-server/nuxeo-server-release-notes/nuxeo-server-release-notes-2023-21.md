---
title: LTS 2023.21 / LTS 2023-HF21
description: Discover what's new in LTS 2023.21 / LTS 2023-HF21
review:
   comment: ''
   date: '2024-10-30'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 320
---

{{! multiexcerpt name='nuxeo-server-updates-2023-21'}}
# What's New in LTS 2023.21 / LTS 2023-HF21

## Fix Keycloak Logout URI After Multiple Calls

Keycloak logout URI doesn't keep previous query parameters.


## Fix S3BlobScroll on Blob Provider With KeyStrategyDocId

S3 Record blob providers are now properly scrolled.

The `s3:ListBucketVersions` permission is needed on the retention bucket.


## Downgrade commons-compress

commons-compress was downgraded to 1.21.


# Learn More

[More information about released changes and fixed bugs](https://hyland.atlassian.net/secure/ReleaseNote.jspa?projectId=14958&version=29506) is available in our bug tracking tool.

{{! /multiexcerpt}}
