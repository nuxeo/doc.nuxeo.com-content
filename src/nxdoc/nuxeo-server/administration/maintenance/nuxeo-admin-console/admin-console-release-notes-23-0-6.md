---
title: Version 23.0.6
description: Discover what's new in Admin Console 23.0.6.
review:
  comment: ''
  date: '2024-12-27'
  status: ok
toc: true
labels:
tree_item_index: 999
hidden: true
---

{{{multiexcerpt 'matching-notes' page='admin-console-release-notes'}}}

{{! multiexcerpt name='admin-console-updates'}}

## What’s New in Admin Console for LTS 2023 (Version 23.0.6)

### Hyland UI replaced by Angular Material

- Hyland UI is removed from Admin Console, following it's deprecation, with the interface now using plain Angular Material while maintaining a consistent design.

### Fulltext Reindexing Support

- User can run extraction of all binaries (blobs) referenced by documents using fulltext reindex of 

  - a single document.

  - a document and all of it's children.

  - documents returned by a NXQL query.

- A confirmation popup shows the number of documents affected, estimated reindex time, and potential performance impact, prompting users to continue or abort.


## Learn More

[More information about released changes and fixed bugs](https://hyland.atlassian.net/projects/NAC/versions/34125/tab/release-report-all-issues) is available in our bug tracking tool.


{{! /multiexcerpt}}