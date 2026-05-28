---
title: LTS 2023.47 / LTS 2023-HF47
description: Discover what's new in LTS 2023.47 / LTS 2023-HF47
review:
   comment: ''
   date: '2026-05-07'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2023-47'}}
# What's New in LTS 2023.47 / LTS 2023-HF47

## Store Binary Fulltext in Blob Only Above a Threshold

It's now possible to store the binary fulltext into a blob only if the size exceed a threshold

When using binary fulltext stored in blob, a size threshold can now be configured. Fulltext smaller than the threshold is stored inline in the repository, while fulltext equal to or larger than the threshold is externalized to a blob provider.

This option improves re-indexing performance by limiting blob access only for large content. 
This is a DBS (MongoDB) only option.

```
// store binary fulltext in blob ...
nuxeo.vcs.fullltext.storeInBlob=true
// ... only if bigger than 4k
nuxeo.dbs.fulltext.storeInBlobThreshold=4KiB 
```

The threshold can be activated on existing instance. It will apply only for new documents.

It’s possible to force the threshold to apply to the entire repository using the `management/fulltext/fixBinaryStorage` management endpoint.

## Fix Relation Documents Missing From Repository Re-Index LTS 2023

Relations are now included in reindexing. "SELECT * FROM Document" no longer returns Relations on Elasticsearch/OpenSearch backends.

Full repository reindexing operations now use `FROM Document, Relation`, so Relations are now included in reindexing. Previously, `SELECT * FROM Document` incorrectly returned Relation documents when using Elasticsearch or OpenSearch backends.

Before: `SELECT * FROM Document` returned Documents + Relations (incorrect)

After: `SELECT * FROM Document` returns only Documents (correct)

## Fix UnsupportedOperationException When Uploading a File to an Encrypted Blob Store

Implemented `copyOrMoveBlob` method for `AESBlobStore`, enabling encrypted blob dispatch between blob stores.

## Fix WOPI Favicon Not Matching Opened Application

Use matching Microsoft favicons when opening a document through Microsoft 365 for the web.

## Add Property to Configure Search Behavior on LDAP Groups

A new property, nuxeo.ldap.group.searchBehavior is added to the LDAP template to configure the search behavior for LDAP groups.

A new property, `nuxeo.ldap.group.searchBehavior` is added to the LDAP template to configure the search behavior for LDAP groups.

## Better Handling of Duration.ZERO Formatting With DurationUtils

DurationUtils now proper handle zero formatting.


{{! /multiexcerpt}}
