---
title: Nuxeo Aspera 2021.3.3
description: Release notes for Nuxeo Aspera Connector 2021.3.3
tree_item_index: 100
review:
  comment: ''
  date: '2022-09-05'
  status: ok
toc: true
hidden: true
---

{{! multiexcerpt name='nuxeo-aspera-connector'}}
## What's New in Aspera for LTS 2021 (version 2021.3.3)

This is a bugfix release.

## Released Changes

-Aspera add-on doesn't handle correctly transfer with more than 1000 files<br/>[[NXP-30257](https://jira.nuxeo.com/browse/NXP-30257)]
Details: A retrofit of a previous fix given in 10.10 version. 
The fix retrieve Aspera transfer entities of transferred files by id instead of tag improving performance. 
-Allow Aspera Connector to rely on Proxy<br/>[[NXP-30775](https://jira.nuxeo.com/browse/NXP-30775)]
Details: 
The Aspera proxy settings is defaulted to false i.e. if proxy is enabled via nuxeo.http.proxy.host,  Aspera config will still be ignoring the proxy host and would connect to the Aspera instance configured. 
However, if you wishes to connect to Aspera via proxy, set the property nuxeo.aspera.enable.proxy to true. This would lead the Aspera config to connect through proxy. 
-Aspera - 'Edit Metadata' form needs a refresh<br/>[[NXP-31094](https://jira.nuxeo.com/browse/NXP-31094)]
Details: 
The file list will show the current transfer's files
-S3BatchHandler and AsperaS3BatchHandler is using same Transient store<br/>[[SUPNXP-41389](https://jira.nuxeo.com/browse/SUPNXP-41389)]
AsperaS3BatchHandler transientStore is renamed to ‘asperaS3TransientStore’ from ‘s3TransientStore’ to avoid conflict with S3BatchHandler. 
{{! /multiexcerpt}}




---


{{! multiexcerpt name='nuxeo-aspera-connector'}}
## What's New in Aspera for LTS 2021 (version 2021.3.1)

This is a bugfix release.

## Released Changes

- The author and Last Contributor name set as "System" in the Aspera folder upload has been changed to the actual user<br/>[[NXP-30867](https://jira.nuxeo.com/browse/NXP-30867)]
- Aspera download from collection is now possible<br/>[[NXP-30862](https://jira.nuxeo.com/browse/NXP-30862)]
- Manual retry mechanism implemented for failed Aspera upload complete transfers<br/>[[NXP-30965](https://jira.nuxeo.com/browse/NXP-30965)
{{! /multiexcerpt}}
