---
title: LTS 2021.65 / LTS 2021-HF65
description: Discover what's new in LTS 2021.65 / LTS 2021-HF65
review:
   comment: ''
   date: '2025-01-01'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2021-65'}}
# What's New in LTS 2021.65 / LTS 2021-HF65

## setRetainUntil Can't Set Indeterminate Dates


When setting a document under indeterminate retention, retainable blobs are put under legal hold in S3. This legal hold is then removed whenever the document has a determinate retention date.


{{! /multiexcerpt}}
