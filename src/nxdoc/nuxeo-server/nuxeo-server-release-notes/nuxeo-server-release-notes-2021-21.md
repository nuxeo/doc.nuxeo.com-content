---
title: LTS 2021.21 / LTS 2021-HF21
description: Discover what's new in LTS 2021.21 / LTS 2021-HF21
review:
   comment: ''
   date: '2022-06-07'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 3020
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-21'}}
# What's New in LTS 2021.21 / LTS 2021-HF21

## Major Bug Fixes

### Fix Elasticsearch Indexing of Property 'ecm:proxyTargetId' for Proxies

The property 'ecm:proxyTargetId' is indexed in Elasticsearch for proxies.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31005](https://jira.nuxeo.com/browse/NXP-31005)

### Expose `nuxeo-core-binarymanager-s3` Test Jar from Distribution

`S3BlobProviderFeature` is now accessible from external bundle by importing `nuxeo-core-binarymanager-s3` test jar

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30993](https://jira.nuxeo.com/browse/NXP-30993)

### Unable to View Documents after Indexing with `elasticsearch.manageAlias.enabled=true`

The Elasticsearch alias is correctly propagated when doing a full reindex with manageAlias=true.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30944](https://jira.nuxeo.com/browse/NXP-30944)

### Fix Parent Workflow Abandon Process

A workflow can now be canceled after one of its subworkflow has been canceled

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30926](https://jira.nuxeo.com/browse/NXP-30926)

# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21683) is available in our bug tracking tool.

{{! /multiexcerpt}}
