---
title: LTS 2025.11 / LTS 2025-HF11
description: Discover what's new in LTS 2025.11 / LTS 2025-HF11
review:
   comment: ''
   date: '2025-11-19'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2025-11'}}
# What's New in LTS 2025.11 / LTS 2025-HF11

## Provide Uninterrupted Service During Full Reindex

It's now possible to reindex repository without downtime. For ways to re-index repository without downtime across different search clusters and implementations, see [https://doc.nuxeo.com/nxdoc/search-setup/#reindexing](https://doc.nuxeo.com/nxdoc/search-setup/#reindexing-bulk)

## Fix SAML Logout When No Login Page Is Configured

Don't save SAML logout request when logging out.

## Support Nuxeo Retention on Azure Storage

Azure Blob Provider can now be used for storing record blobs for Retention.

## NoSuchFileException in LocalBlobStore.writeBlobGeneric()

Files being written to LocalBlobStore are now ignored by the garbage collector.

## Create a D2 (Declarative Diagramming) Introspection Stream Export

It's now possible to view the [cluster state as D2 diagram](https://doc.nuxeo.com/rest-api/1/stream-endpoint/#get-detailed-nuxeo-stream-and-processor-information).

## Deprecate PropertyBasedConfiguration's getProperties Methods With a Default-Value Parameter

Use Optional-based methods instead of getProperties methods With a default-value parameter.

## Address Regression in Hotfix 2023.38 of Library Quartz 2.5.1 in a Nuxeo Cluster Using PostgreSQL

Address a regression in Quartz for PostgreSQL.


{{! /multiexcerpt}}
