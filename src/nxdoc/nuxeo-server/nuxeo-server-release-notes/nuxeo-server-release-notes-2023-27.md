---
title: LTS 2023.27 / LTS 2023-HF27
description: Discover what's new in LTS 2023.27 / LTS 2023-HF27
review:
   comment: ''
   date: '2025-03-10'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 260
---

{{! multiexcerpt name='nuxeo-server-updates-2023-27'}}
# What's New in LTS 2023.27 / LTS 2023-HF27

## Requesting an Unknown Document Id With Easyshare Returns a 500 Error

Improve Exception Handling in WebEngine

Exception happening in WebEngine is now better identified when the requested MediaType is not `application/json`.

An exception writer has been added for `text/html` media type, so Nuxeo Server WebEngine now handles the following media type for NuxeoException handling:

- `text/html`
- `application/json` which is the default fallback for other media types

## Fix Infinite Login Loop When the Anonymous User Is Enabled

Fixed infinite login loop when the anonymous user is enabled

## Migration Tool to Extract Full Text From Mongo DB to an S3 Blob

In order to reduce the MongoDB collection size, it’s now possible to move the fulltext extracted from binaries (stored in MongoDB) to a s3 bucket on an existing instance  in a efficient way. See the 4 step migration process in the upgrade notes.


{{! /multiexcerpt}}
