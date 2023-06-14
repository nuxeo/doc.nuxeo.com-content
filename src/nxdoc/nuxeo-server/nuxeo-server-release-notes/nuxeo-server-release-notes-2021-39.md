---
title: LTS 2021.39 / LTS 2021-HF39
description: Discover what's new in LTS 2021.39 / LTS 2021-HF39
review:
   comment: ''
   date: '2023-06-14'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-39'}}
# What's New in LTS 2021.39 / LTS 2021-HF39

## Orphan Version Full GC Should Report the Number of Versions Removed


The number of versions removed is available the Bulk Status of the garbageCollectOrphanVersions action (total - skipCount)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31903](https://jira.nuxeo.com/browse/NXP-31903)

## Add Mongodb Index on Ecm:mixinTypes


New MongoDB index on ecm:mixinTypes

For MongoDB backend, create the index manually:
```Java
db.default.createIndex(
   { ecm:mixinTypes: 1 }
);
```
Otherwise, the nuxeo server will attempt to create this index if not present at start-up.  In the case of an existing instance with large amounts of documents, this process may time out and/or affect performance.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31899](https://jira.nuxeo.com/browse/NXP-31899)

## Retention - Object Lock Should Follow AWS Configuration


S3 object lock mode is driven by the bucket's default policy, Nuxeo platform mode is used as a fallback

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31861](https://jira.nuxeo.com/browse/NXP-31861)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22295) is available in our bug tracking tool.

{{! /multiexcerpt}}
