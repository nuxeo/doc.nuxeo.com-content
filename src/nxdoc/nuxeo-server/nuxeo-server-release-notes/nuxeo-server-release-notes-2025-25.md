---
title: LTS 2025.25 / LTS 2025-HF25
description: Discover what's new in LTS 2025.25 / LTS 2025-HF25
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

{{! multiexcerpt name='nuxeo-server-updates-2025-25'}}
# What's New in LTS 2025.25 / LTS 2025-HF25

## Add a Cache to TokenAuthenticationService

Added a cache for token authentication lookups, avoiding a directory query on every authenticated request.

 Defaults to 5 minutes / 1000 entries, configurable via the `nuxeo.conf` properties `nuxeo.tokenauth.cache.ttl`, `nuxeo.tokenauth.cache.maxSize`, and `nuxeo.tokenauth.cache.concurrencyLevel`.
## Take Into Account the Search Pattern on Multi-Directories

Fix substringMatchType (subinitial / subany / subfinal) not being honored by user/group search when the user or group directory is a multi-directory (nuxeo.directory.type=multi).

## Fire blobDigestUpdated Even if Digest Is Not Computed Due to Threshold

A blobDigestSkipped event is fired when digest is not computed due to threshold

## S3BlobStoreConfiguration: Fix Spurious Versioning Warn When KeyStrategyDocId Is Not Used

Review cloud blob providers versioning config at startup and apply a fail-fast strategy when KeyStrategyDocId is used without cloud-storage versioning.

## Expose the System Change Token on DocumentModel API

The systemChangeToken is now exposed at DocumentModel level

## Enhance Exclusiveness Handling in BulkService to Return a 409 HTTP Status

Return a 409 status code if an exclusive Bulk Action is already running

## Change CacheDescriptor#ttl to java.time.Duration for Explicit Unit

Cache TTL can now be expressed as a Duration string (e.g. 5m, 1h, 30s) instead of a plain number of minutes.

The `<ttl>` element of a cache contribution (`CacheService`/`caches` extension point) now accepts a `java.time.Duration`-compatible string in addition to the legacy plain number (still interpreted as minutes for backward compatibility). This makes the unit explicit and allows sub-minute precision, which was previously impossible.

Example:

```
<extension target="org.nuxeo.ecm.core.cache.CacheService" point="caches">
  <cache name="my-cache" class="org.nuxeo.ecm.core.cache.InMemoryCacheImpl">
    <ttl>5m</ttl>
    <option name="maxSize">1000</option>
  </cache>
</extension>
```

On the Java side, `CacheDescriptor#getTTL()`/`setTTL(Long)` are deprecated in favor of `getTTLAsDuration()`/`setTTL(Duration)`.
## Security Fixes

This release also contains security fixes.

{{! /multiexcerpt}}
