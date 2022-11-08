---
title: LTS 2021.28 / LTS 2021-HF28
description: Discover what's new in LTS 2021.28 / LTS 2021-HF28
review:
   comment: ''
   date: '2022-11-02'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-28'}}
# What's New in LTS 2021.28 / LTS 2021-HF28

## Allow to Configure the Bucket Prefix of the `s3DirectUploadBlobProviderDestination` BlobProvider

A new 'nuxeo.s3storage.s3DirectUpload.bucket_prefix' conf property is available to specify the bucket prefix of the blobProvider backing the transientStore used by the s3 batchHandler. 

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31302](https://jira.nuxeo.com/browse/NXP-31302)

## Fix Npe When Overriding a Binary Metadata Rule

Metadata rules with missing order value are taken into account.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30629](https://jira.nuxeo.com/browse/NXP-30629)

## Fix Creation of a 'OAuth 2 Service Provider' with Blank Character(s)

Blank service names are forbidden for providers.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30566](https://jira.nuxeo.com/browse/NXP-30566)

## Add an Explicite Dependency on `nuxeo-core-cache` in `nuxeo-platform-usermanager-core`

A warn is logged if cache service not available when initializing User Manager on 10.10 and 2021. A requirement is added from 2023.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29416](https://jira.nuxeo.com/browse/NXP-29416)

# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21848) is available in our bug tracking tool.

{{! /multiexcerpt}}
