---
title: LTS 2021.19 / LTS 2021-HF19
description: Discover what's new in LTS 2021.19 / LTS 2021-HF19
review:
   comment: ''
   date: '2022-04-26'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 3040
---

{{! multiexcerpt name='nuxeo-server-updates-2021-19'}}
# What's New in LTS 2021.19 / LTS 2021-HF19

## Nuxeo Server

### Upgrade MariaDB to 2.2.4 or Later

MariaDB driver is updated to version 2.2.4.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30937](https://jira.nuxeo.com/browse/NXP-30937)

## Core Storage

### Elastic Socket Timeout Should Be Aligned With Request Timeouts

Default Elastic socket timeout is now set to 2min.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30957](https://jira.nuxeo.com/browse/NXP-30957)

### Fix Full-Text Binary Indexing of Multi-Valued Blob Property Defined in Studio

List of blob properties are now full text indexed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30925](https://jira.nuxeo.com/browse/NXP-30925)

### Fix Error Message When Setting an Invalid Password

Setting a password which doesn't respect the configured pattern results in a bad request error.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30278](https://jira.nuxeo.com/browse/NXP-30278)

### Bulk Service Should Have a Transactional Behavior

The Bulk service can now submit command with a transactional behavior.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28296](https://jira.nuxeo.com/browse/NXP-28296)

## Major Bug Fixes

### Delay the Start of Quartz Scheduler to Avoid Database Constraint Violations

Delay Quartz scheduler start for 5s by default.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30239](https://jira.nuxeo.com/browse/NXP-30239)

### Fix isNextPageAvailable in Directory Endpoint

The directory endpoint now returns an accurate value for isNextPageAvailable.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30520](https://jira.nuxeo.com/browse/NXP-30520)

### Use Elastic `word_delimiter_graph` Instead of `word_delimiter` to Avoid Indexing Error

Elastic mapping has been updated to avoid indexing error because of a deprecated word delimiter.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30785](https://jira.nuxeo.com/browse/NXP-30785)

### Fix full-text Binary Indexing of multi-valued Blob Property Defined in Studio

List of blob properties are now full text indexed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30925](https://jira.nuxeo.com/browse/NXP-30925)

# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21651) is available in our bug tracking tool.

{{! /multiexcerpt}}
