---
title: Nuxeo Aspera 2021.3.4
description: Release notes for Nuxeo Aspera Connector 2021.3.4
tree_item_index: 900
review:
  comment: ''
  date: '2022-10-03'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-aspera-connector-2021-3-4'}}
## What's New in Aspera for LTS 2021 (version 2021.3.4)

This is a bugfix release.

## Released Changes

### Update Aspera Retry UI Button

The mouse pointer style does not change from "arrow" to "hand" to show that the retry button is clickable when hovered over the retry button.
This is now fixed and allow for better user experience.

[[NXP-31239](https://jira.nuxeo.com/browse/NXP-31239)]

### Aspera Download Complete Collection

Users have now the ability to download a complete collection (same behavior as if it were a folder).

[[NXP-30871](https://jira.nuxeo.com/browse/NXP-30871)]

### Aspera Download Includes Trashed Docs

Previously when we deleted a file (eg.: abc.jpg) from a folder (eg.: folder1), then go to the parent folder and select folder1 and click download with aspera, the resultant folder1 that is downloaded locally also consists of the deleted abc.jpg
This is now fixed, and the trashed document is not downloaded.

[[NXP-30909](https://jira.nuxeo.com/browse/NXP-30909)]

### Retry Option Is Still There When a Retry Process Is Going On

The retry option was still present when a retry process is going on. We removed the retry button when the process is going on.
It is only available when there is any failure and retry can make that successful.

[[NXP-31105](https://jira.nuxeo.com/browse/NXP-31105)]

{{! /multiexcerpt}}
