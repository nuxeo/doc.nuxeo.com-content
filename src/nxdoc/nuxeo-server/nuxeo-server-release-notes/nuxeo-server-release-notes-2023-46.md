---
title: LTS 2023.46 / LTS 2023-HF46
description: Discover what's new in LTS 2023.46 / LTS 2023-HF46
review:
   comment: ''
   date: '2026-04-15'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2023-46'}}
# What's New in LTS 2023.46 / LTS 2023-HF46

## Fix Content-Disposition Header Not Using RFC 5987 Encoding

The filename attribute encoding in the Content-Disposition header has been fixed to comply with RFC 6266

The `Content-Disposition` header encoding has been fixed to comply with RFC 6266. Previously, certain characters such as curly braces `{}`, spaces, and non-ASCII characters (accented letters, CJK characters) were not properly percent-encoded in the `filename*` parameter, which could cause download failures or garbled filenames in some browsers.

The encoding now uses a strict RFC 2231 `attr-char` allowlist, always emitting both a `filename` fallback (for older clients) and a `filename*=UTF-8''<encoded>` parameter when encoding is needed.

Additionally, the legacy MSIE 6/7 user-agent sniffing has been removed. The previous `RFC2231.encodeContentDisposition(String, String, Boolean)` three-argument method and `RFC2231.percentEscape(String, String)` method are deprecated.
## Fix Retention Rule Behavior With retainUntil Date in Past

It is now possible to set a retention expiry date in the past at platform level. Such past retention date won't be applied to cloud storage providers (AWS S3, Google & Azure Storage).

## Propose a DurationUtils.format API

Format your Duration as Human Readable text

The `DurationUtils#format(Duration)` API is now available to format Duration as: `_d_h_m_s_ms`.
## Restrict Bulk Download Operation Result ( ZIP) to Initiator Only

 Automation async adapter endpoints (status/result/abort) access is restricted to the initiating user

## Handle Empty Old Proof Keys in WOPI Discovery 

Make Nuxeo Office Online Integration work without old proof key - fresh on-premise Office Online Server for instance.


{{! /multiexcerpt}}
