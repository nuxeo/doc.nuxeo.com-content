---
title: LTS 2025.24 / LTS 2025-HF24
description: Discover what's new in LTS 2025.24 / LTS 2025-HF24
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

{{! multiexcerpt name='nuxeo-server-updates-2025-24'}}
# What's New in LTS 2025.24 / LTS 2025-HF24

## Add Synchronous I/O Opt-Out Properties for S3-Compatible Gateways

Two new nuxeo.conf properties — `nuxeo.s3storage.syncDownload` and `nuxeo.s3storage.syncUpload` — allow switching blob downloads and/or uploads to the synchronous Apache HTTP client to work around hangs with S3-compatible gateways.

The AWS CRT-based S3 transfer manager used by the S3 Blob Provider has been observed to hang against certain S3-compatible gateways. Two new independent `nuxeo.conf` properties allow forcing one or both I/O directions onto the synchronous Apache HTTP client (`S3Client`), bypassing the async transport entirely:

- `nuxeo.s3storage.syncDownload` — when `true`, blob downloads use the synchronous Apache HTTP client instead of the CRT-based transfer manager. Default: `false`.
- `nuxeo.s3storage.syncUpload` — when `true`, blob uploads use a single synchronous `PutObject` request instead of the CRT-based transfer manager. Default: `false`. This mode is limited to objects of 5 GiB or less; attempts to upload a larger blob are rejected immediately with an error before any S3 traffic.

These properties are independent. Enable only the direction that is problematic on your gateway. AWS S3 deployments are unaffected and should leave both properties at their default `false` values.

## Unwrap CompletionException in S3BlobStore Async Read/Write Paths

S3BlobStore async read and write paths now unwrap CompletionException so callers consistently receive the underlying SdkException as the effective cause.

## Use Versity S3 Gateway in Benchmark to Eliminate Cross-Cloud I/O Bottleneck During Data Import

Benchmark now uses a Versity S3 gateway.

## DublinCoreListener Throws NPE When Dc:contributors Contains a Null Entry, Degrading MoveToColdStorage Throughput Under Batch Load

Stop persisting null values in dc:contributors.

A `WARN` is logged with the message "Skipping null contributor(s) for doc: {}" when a `null` value is submitted for `dc:contributors`.

The `org.nuxeo.ecm.platform.dublincore.service.DublinCoreStorageServiceImpl` logger can be enabled at `DEBUG` level to print a stack trace when a null value is submitted for `dc:contributors`.

## OpenSearch Audit Backend Fails to Deserialize Log Entries With Missing or Null Entity-Type

OpenSearch audit backend now reads legacy log entries whose stored JSON had a missing or null "entity-type".

## Security Fixes

This release also contains security fixes.

{{! /multiexcerpt}}
