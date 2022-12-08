---
title: Nuxeo Aspera 2021.3.3
description: Release notes for Nuxeo Aspera Connector 2021.3.3
tree_item_index: 100
review:
  comment: ''
  date: '2022-09-05'
  status: ok
toc: true
tree_item_index: 950
---

{{! multiexcerpt name='nuxeo-aspera-connector-2021-3-3'}}
## What's New in Aspera for LTS 2021 (version 2021.3.3)

This is a bugfix release.

## Released Changes

### Aspera Addon Doesn’t Handle Correctly Transfer With More Than 1000 Files

A retrofit of a previous fix given in 10.10 version.
The fix retrieve Aspera transfer entities of transferred files by id instead of tag improving performance.

[[NXP-30257](https://jira.nuxeo.com/browse/NXP-30257)]

### Allow Aspera Connector to Rely on Proxy

The Aspera proxy settings is defaulted to false i.e. if proxy is enabled via nuxeo.http.proxy.host,  Aspera config will still be ignoring the proxy host and would connect to the Aspera instance configured.
However, if you wishes to connect to Aspera via proxy, set the property nuxeo.aspera.enable.proxy to true. This would lead the Aspera config to connect through proxy.

[[NXP-30775](https://jira.nuxeo.com/browse/NXP-30775)]

### "Edit Metadata" Form Update

The file list will show the current transfer's files.

[[NXP-31094](https://jira.nuxeo.com/browse/NXP-31094)]

### S3BatchHandler and AsperaS3BatchHandler It Is Using Same Transient Store

AsperaS3BatchHandler transientStore is renamed from `s3TransientStore` to `asperaS3TransientStore` to avoid conflict with S3BatchHandler.

[[NXP-31170](https://jira.nuxeo.com/browse/NXP-31170)]

{{! /multiexcerpt}}
