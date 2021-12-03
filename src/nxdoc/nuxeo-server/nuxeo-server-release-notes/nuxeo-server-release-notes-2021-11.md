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
---

{{! multiexcerpt name='nuxeo-server-updates-2021-11'}}
# What's New in LTS 2021.11 / LTS 2021-HF11

## Nuxeo Server

### Core Storage

#### `SystemDocument` on Core Management Documents {{> tag 'dev'}}

The facet `SystemDocument` has been added on core management documents.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30544](https://jira.nuxeo.com/browse/NXP-30544)

#### Bulk Action for Mongo Read ACL Propagation {{> tag 'dev'}} {{> tag 'admin'}}

Mongo Read ACL propagation are now updated with a BAF action.</br>
There are several benefits to this change: improve the performances for larges repositories, preserve the platform availability during the ACL propagation, improve the monitoring and error management.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30426](https://jira.nuxeo.com/browse/NXP-30426)

#### Configuration of Custom S3 Truststore {{> tag 'dev'}}

New configuration properties have been added to allow the configuration of a custom S3 truststore:
```
nuxeo.aws.trustStorePath=
nuxeo.aws.trustStorePassword=
nuxeo.aws.trustStoreType=
nuxeo.aws.keyStorePath=
nuxeo.aws.keyStorePassword=
nuxeo.aws.keyStoreType=
```
<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28162](https://jira.nuxeo.com/browse/NXP-28162)

### Core Repository

#### MongoDB `queryAndFetch` Timeout on Counting Match {{> tag 'dev'}}

MongoDB query will now return with a total count of -2 when it cannot be computed within the MongoDB socket time out (likely because there are too many results to be fetch within the timeout).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30633](https://jira.nuxeo.com/browse/NXP-30633)

### Redis

#### Redis Availability Checking at Nuxeo Startup {{> tag 'dev'}}

Redis availability is checked at startup just like a SQL DB or MongoDB Backing Service.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22842](https://jira.nuxeo.com/browse/NXP-22842)

## Major Bug Fixes

### Fix Operation `Repository.Query` When Parameter `searchTerm` is provided with an empty string {{> tag 'dev'}}

The operation `Repository.Query` handles the parameter 'searchTerm' set to an empty string.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29097](https://jira.nuxeo.com/browse/NXP-29097)

### Retention Addon - Expire Stream Not Processing {{> tag 'dev'}} {{> tag 'admin'}}

`RetentionExpiredComputation` does not fail anymore on deleted or unknown documents.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30651](https://jira.nuxeo.com/browse/NXP-30651)

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21515) is available in our bug tracking tool.

{{! /multiexcerpt}}
