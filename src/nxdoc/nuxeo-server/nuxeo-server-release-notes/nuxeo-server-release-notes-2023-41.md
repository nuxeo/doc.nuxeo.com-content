---
title: LTS 2023.41 / LTS 2023-HF41
description: Discover what's new in LTS 2023.41 / LTS 2023-HF41
review:
   comment: ''
   date: '2026-01-08'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2023-41'}}
# What's New in LTS 2023.41 / LTS 2023-HF41

## Keep Custom Metadata When Publishing a Rendition of a Folderish Document

Rendition service offers a new "targetDocTypes" extension point to register the target document type for holding a rendition of a source document type that is either Folderish or is not adaptable as a BlobHolder.

The new targetDocTypes extension point allows registering the target document type for holding a rendition of a source document type that is either Folderish or is not adaptable as a BlobHolder, which is required to hold the rendition result. Contributed target types must be adaptable as a BlobHolder.

Example:

```
  <extension target="org.nuxeo.ecm.platform.rendition.service.RenditionService" point="targetDocTypes">
    <targetDocType from="Note" to="File" />
  </extension>
```

If no target doc type is found for a given type, it falls back on File.

## Run Work in Failure Management Endpoint Should Accept dryRun and Filter Parameters

The "dryRun" and "categoryFilter" form parameters are now available on the work manager endpoint of "run-works-in-failure".

## Enable Override of PageProvider Class in PaginableAdapter

Page providers used in PagineableAdapter are now using a name and they can be overriden like other page providers.


{{! /multiexcerpt}}
