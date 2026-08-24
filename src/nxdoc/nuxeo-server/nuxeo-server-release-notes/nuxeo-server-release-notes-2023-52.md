---
title: LTS 2023.52 / LTS 2023-HF52
description: Discover what's new in LTS 2023.52 / LTS 2023-HF52
review:
   comment: ''
   date: '2026-08-24'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2023-52'}}
# What's New in LTS 2023.52 / LTS 2023-HF52

## Use Versity S3 Gateway in Benchmark to Eliminate Cross-Cloud I/O Bottleneck During Data Import

Benchmark now uses a Versity S3 gateway

## DublinCoreListener Throws NPE When Dc:contributors Contains a Null Entry, Degrading MoveToColdStorage Throughput Under Batch Load

Stop persisting null values in dc:contributors.

A `WARN` is logged with the message "Skipping null contributor(s) for doc: {}" when a `null` value is submitted for `dc:contributors`.

The `org.nuxeo.ecm.platform.dublincore.service.DublinCoreStorageServiceImpl` logger can be enabled at `DEBUG` level to print a stack trace when a null value is submitted for `dc:contributors`.
## Security Fixes

This release also contains security fixes.

{{! /multiexcerpt}}
