---
title: LTS 2025.17 / LTS 2025-HF17
description: Discover what's new in LTS 2025.17 / LTS 2025-HF17
review:
   comment: ''
   date: '2026-03-25'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2025-17'}}
# What's New in LTS 2025.17 / LTS 2025-HF17

## Add MAX_CONTENT_LENGTH to FreeMarkerProcessor (2023 and 2025)

Added the `nuxeo.freemarker.processor.mimetype.max.size` configuration parameter to configure the maximum content size read by the FreemarkerProcessor for MIME type detection.

## Fix Blob Dispatch to Provider With Caching Configuration, Key Digest Strategy, and Optimized Copy

Blobs can now be dispatched between heterogeneous blob providers, from LocalBlobProvider to S3BlobProvider.

## Plug hasFolderishChild Json Content Enricher on Search Service

The "hasFolderishChild" JSON enricher now relies on the search service.

The `org.nuxeo.ecm.core.io.marshallers.json.enrichers.HasFolderishChildJsonEnricher` has been deprecated in favor of `org.nuxeo.ecm.restapi.server.enrichers.HasFolderishChildJsonEnricher`.The new enricher relies on the `SearchService`, which uses indexed backends (such as OpenSearch) to resolve queries more efficiently, resulting in better performance for operations like the `hasFolderishChild` enrichment.

## Unable to Create User Preferences as a Non-Admin User

Non-admin users can now create preferences.

## Fix ByteRange Download With an AES Blob Provider

Download with byte range now works with AESBlobProvider.


{{! /multiexcerpt}}
