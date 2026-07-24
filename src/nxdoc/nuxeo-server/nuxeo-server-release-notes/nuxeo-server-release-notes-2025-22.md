---
title: LTS 2025.22 / LTS 2025-HF22
description: Discover what's new in LTS 2025.22 / LTS 2025-HF22
review:
   comment: ''
   date: '2026-07-21'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2025-22'}}
# What's New in LTS 2025.22 / LTS 2025-HF22

## Support AWS DocumentDB Elastic

Improve support of AWS DocumentDB Elastic.

## Allow Disabling Thumbnail Auto-Generation Per Repository

Thumbnail auto-generation can now be disabled globally or per repository.

### Optional thumbnail auto-generation

- Set `nuxeo.thumbnail.enabled=false` in `nuxeo.conf` to disable it globally.
- Contribute to the new `thumbnailConfiguration` extension point of `org.nuxeo.ecm.core.api.thumbnail.ThumbnailService` for per-repository overrides:

```
<extension target="org.nuxeo.ecm.core.api.thumbnail.ThumbnailService" point="thumbnailConfiguration">
  <thumbnailConfig repository="other" enabled="false" />
</extension>
```

When disabled, no thumbnail is computed at document creation. Thumbnails on documents that already carry the `Thumbnail` facet continue to be refreshed when their main blob changes.

The `perf` server template now ships with thumbnail auto-generation disabled.

### Purge existing thumbnails

A new bulk action and management endpoint allow removing stored thumbnails (blob + `Thumbnail` facet) for documents matching an NXQL query.

- `DELETE /api/v1/management/thumbnails/remove?query=<NXQL>&queryLimit=<N>`
- Both parameters are optional. Default query targets all non-proxy documents currently carrying a thumbnail blob.
  
## Refactor PublicationJsonEnricher to Use a Page Provider

PublicationJsonEnricher now uses the SearchService. The 2025 branch use `SearchService.search()` directly. A new page provider plugged into the Elasticsearch backend has been introduced for the 2023 branch. For additional information, see Upgrade notes.

## Take Into Account the Search Pattern on LDAP Directories

The `UserGroup.Suggestion` operation now honors the directory's `substringMatchType (subinitial, subany, subfinal)`, so LDAP user/group suggestions return infix and suffix matches when configured to do so.

## Support DocumentDB Local

Improve support of DocumentDB local docker image.

## S3 Blob Storage Properties With Full nuxeo.s3storage.* Prefix Cannot Be Set via Framework Properties (nuxeo.conf)

"nuxeo.s3storage.multipart.upload.threshold" and "nuxeo.s3storage.minimum.upload.part.size" are now properly taken into account.

## Expose Relevance Score via Enrichers

There is a new score enricher to get the fulltext score in PageProvider results.

## Security Fixes

This release also contains security fixes.

{{! /multiexcerpt}}
