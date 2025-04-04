---
title: Version 23.0.7
description: Discover what's new in Admin Console 23.0.7.
review:
  comment: ''
  date: '2025-04-04'
  status: ok
toc: true
labels:
tree_item_index: 998
hidden: true
---

{{{multiexcerpt 'matching-notes' page='admin-console-release-notes'}}}

{{! multiexcerpt name='admin-console-updates'}}

## What’s New in Admin Console for LTS 2023 (Version 23.0.7)


### Compatibility with stricter CSP
In order to make sure that the application works fine with a stricter CSP policy, dependability on following attributes have been removed -

- `"data: *"`, `"unsafe-inline"`, `"unsafe-eval"` in `"script-src"`
- `"blob: *"` in `"default-src"`

The application automatically adds the following attributes for better security -
- `"nonce-<val>"`, `"strict-dynamic"` in `"script-src"`
- `"none"` in `"object-src"`

{{! /multiexcerpt}}