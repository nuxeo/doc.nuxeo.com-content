---
title: LTS 2021.11 / LTS 2021-HF11
description: Discover what's new in LTS 2021.11 / LTS 2021-HF11
review:
   comment: ''
   date: '2021-11-08'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 5300
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-11'}}
# What's New in LTS 2021.11 / LTS 2021-HF11

## Nuxeo Server

### Core Storage

#### `SystemDocument` on Core Management Documents

The facet `SystemDocument` has been added on core management documents.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30544](https://jira.nuxeo.com/browse/NXP-30544)

#### Bulk Action for Mongo Read ACL Propagation

Mongo Read ACL propagation are now updated with a BAF action.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30426](https://jira.nuxeo.com/browse/NXP-30426)

### Core Repository

#### MongoDB `queryAndFetch` Timeout on Counting Match

MongoDB query will now return with a total count of -2 when it cannot be computed within the MongoDB socket time out (likely because there are too many results to be fetch within the timeout).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30633](https://jira.nuxeo.com/browse/NXP-30633)

### Major Bug Fixes

#### Retention Addon - Expire Stream Not Processing

`RetentionExpiredComputation` does not fail anymore on deleted or unknown documents.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30651](https://jira.nuxeo.com/browse/NXP-30651)

# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21506) is available in our bug tracking tool.

{{! /multiexcerpt}}
