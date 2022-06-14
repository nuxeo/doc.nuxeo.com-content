---
title: Cold Storage FAQ
description: Frequently Asked Questions about the Nuxeo Cold Storage addon.
review:
    comment: ''
    date: ''
    status: ''
labels:
    - storage
    - glacier
    - coldstorage
toc: true
tree_item_index: 350
---

## Compatibility

AWS only

## Content Import

### Can I Import Content Into Cold Storage?

Documents can be moved in bulk to cold storage once they are stored on the platform. It is however not possible to import content directly into cold storage. Reason is once the file is moved to cold storage, we cannot access it anymore unless a retrieval is requested. Therefore, Nuxeo needs to execute some actions first like generating the preview rendition and indexing the content of the main file to provide a good user experience while content is under cold storage before the content can be moved.

## User Experience

what is preview like for each doctype => send to preview config in installation

## Bulk Actions

how do you move content in bulk

## Cost

how does pricing work
what content should I move or not, what are the decision criteria
