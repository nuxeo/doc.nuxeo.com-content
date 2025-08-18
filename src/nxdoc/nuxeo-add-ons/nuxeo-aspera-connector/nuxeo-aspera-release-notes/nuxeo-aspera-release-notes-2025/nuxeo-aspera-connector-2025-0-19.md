---
title: Nuxeo Aspera 2025.0.19
description: Release notes for Nuxeo Aspera Connector 2025.0.19
tree_item_index: 855
review:
  comment: ''
  date: '2025-08-18'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-aspera-connector-2025-0-19'}}

## What's New in Aspera for LTS 2025 (version 2025-0-19)
This is a bugfix and improvement release.

## Released Changes

### Opt Out of Updated Event in AsperaCompleteWork

Uploading assets via Aspera previously triggered both a "documentCreated" and a "documentUpdated" event, which resulted in duplicate notifications. This has been corrected so that only a single event is generated per asset upload, ensuring only one notification is sent, consistent with standard Nuxeo upload behavior.
<br/>[[NXCON-42](https://jira.nuxeo.com/browse/NXCON-42)]

### Initiate Aspera Download in One API Call

Previously, initiating an Aspera download required a call to GetChildrenBlobs, with results passed to another endpoint for further processing. The process has been simplified where a client can now initiate a download directly with a single API call through a new endpoint.
<br/>[[NXCON-32](https://jira.nuxeo.com/browse/NXCON-32)]

### Fix Aspera Connector Functional Tests

Aspera connector functional tests were failing due to Node.js version incompatibilities. The tests have been fixed by upgrading and aligning with Node.js 22.
<br/>[[NXCON-45](https://jira.nuxeo.com/browse/NXCON-45)]

{{! /multiexcerpt}}

