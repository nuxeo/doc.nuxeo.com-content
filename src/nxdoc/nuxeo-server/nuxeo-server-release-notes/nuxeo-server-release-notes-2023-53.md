---
title: LTS 2023.53 / LTS 2023-HF53
description: Discover what's new in LTS 2023.53 / LTS 2023-HF53
review:
   comment: ''
   date: '2026-09-10'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2023-53'}}
# What's New in LTS 2023.53 / LTS 2023-HF53

## Add a Cache to TokenAuthenticationService

Added a cache for token authentication lookups, avoiding a directory query on every authenticated request.

Defaults to 5 minutes / 1000 entries, configurable via the `nuxeo.conf` properties `nuxeo.tokenauth.cache.ttl`, `nuxeo.tokenauth.cache.maxSize`, and `nuxeo.tokenauth.cache.concurrencyLevel`.

## Take Into Account the Search Pattern on Multi-Directories

Fix substringMatchType (subinitial / subany / subfinal) not being honored by user/group search when the user or group directory is a multi-directory (nuxeo.directory.type=multi).

## Fire blobDigestUpdated Even if Digest Is Not Computed Due to Threshold

A blobDigestSkipped event is fired when digest is not computed due to threshold.

## Enhance Exclusiveness Handling in BulkService to Return a 409 HTTP Status

Return a 409 status code if an exclusive Bulk Action is already running.

## Security Fixes

This release also contains security fixes.

{{! /multiexcerpt}}
