---
title: LTS 2021.12 / LTS 2021-HF12
description: Discover what's new in LTS 2021.12 / LTS 2021-HF12
review:
   comment: ''
   date: '2021-11-29'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 5200
---

{{! multiexcerpt name='nuxeo-server-updates-2021-12'}}
# What's New in LTS 2021.12 / LTS 2021-HF12

## Nuxeo Server

### Tomcat 9.0.55

The Nuxeo Platform now relies on Tomcat 9.0.55.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30706](https://jira.nuxeo.com/browse/NXP-30706)

### Keep the Platform Fully Available While Performing a Re-Indexing With Alias

It is now possible to perform a full reindexing of the repository without any interruption of service.
This will work in the following case:

- Nuxeo is configured to manage elastic aliases: `elasticsearch.manageAlias.enabled=true`.
- Reindexing is done using the Bulk Service see [NXP-26032](https://jira.nuxeo.com/browse/NXP-26032) (the WorkManager legacy reindexing behavior triggered by the admin UI is unchanged).

The repository is reindexed into a new index, all update operations are propagated to the existing and new indexes, when the repository indexing is completed aliases are updated, and the old index can be manually deleted.

It is possible to scale up Nuxeo nodes during reindexing (and to scale down once the bulk scroller is completed).

Note that you need to ensure you have enough elastic disk space first.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28316](https://jira.nuxeo.com/browse/NXP-28316)

### Enable to Set Bulk Query Limit From PP Rest Invokation

A query limit can be enforced from Page Provider REST invokation.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30673](https://jira.nuxeo.com/browse/NXP-30673)

## Major Bug Fixes

### Read ACL for All Versions of Children Are Recomputed After a Permission Change  

During an ACL update of a folder, Read ACL are materialized on children documents for search optimization, this is done on different backends (Mongo, PostgreSQL).

The current fix is also recomputing Read ACL for all versions of children, this means more queries and database updates, which certainly impacts the performance during massive ACL updates.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30578](https://jira.nuxeo.com/browse/NXP-30578)

### Fix blobProviderId Still Present When Moving Blob From a S3 Blob Provider to Another S3 Blob Provider

Better management of the blob ProviderId when moving blob from a S3 blob provider to another S3 blob provider.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30632](https://jira.nuxeo.com/browse/NXP-30632)

### Fix operation Repository.Query When Parameter 'searchTerm' is Provided with an Empty String

The operation `Repository.Query` handles the parameter `searchTerm` set to an empty string.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29097](https://jira.nuxeo.com/browse/NXP-29097)

### LTS 2021 Zip package with Mongo fails to Start

The MongoDB check at startup is fixed with a better path parsing.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30279](https://jira.nuxeo.com/browse/NXP-30279)

### Fix Poor Performance of Automation Helper Functions

The performance of "group" automation helper functions is improved.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30657](https://jira.nuxeo.com/browse/NXP-30657)

### Prevent Bulk Action ‘Recomputeviews’ From Updating Document’s Dublincore Properties

The bulk action to recompute picture views does not update dublincore metadata.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30705](https://jira.nuxeo.com/browse/NXP-30705)

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21528) is available in our bug tracking tool.

{{! /multiexcerpt}}
