---
title: LTS 2021.68 / LTS 2021-HF68
description: Discover what's new in LTS 2021.68 / LTS 2021-HF68
review:
   comment: ''
   date: '2025-03-05'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-68'}}
# What's New in LTS 2021.68 / LTS 2021-HF68

## Requesting an Unknown Document Id With Easyshare Returns a 500 Error

Improve Exception Handling in WebEngine

Exception happening in WebEngine is now better caught when the requested MediaType is not `application/json`.

An exception writer has been added for `text/html` media type, so Nuxeo Server WebEngine now handles the following media type for NuxeoException handling:

- `text/html`
- `application/json` which is the default fallback for other media types

## Fix Infinite Login Loop When the Anonymous User Is Enabled

Fixed infinite login loop when the anonymous user is enabled


{{! /multiexcerpt}}
