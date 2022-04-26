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
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-19'}}
# What's New in LTS 2021.19 / LTS 2021-HF19

## Elastic socket timeout should be aligned with request timeouts

Default Elastic socket timeout is now set to 2min

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30957](https://jira.nuxeo.com/browse/NXP-30957)

## Upgrade MariaDB to 2.2.4 or later

MariaDB driver is updated to version 2.2.4.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30937](https://jira.nuxeo.com/browse/NXP-30937)

## Fix full-text binary indexing of multi-valued blob property defined in Studio

List of blob properties are now full text indexed

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30925](https://jira.nuxeo.com/browse/NXP-30925)

## Use elastic word_delimiter_graph instead of word_delimiter to avoid indexing error

Elastic mapping has been updated to avoid indexing error because of a deprecated word delimiter.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30785](https://jira.nuxeo.com/browse/NXP-30785)

## Fix isNextPageAvailable in directory endpoint

The directory endpoint now returns an accurate value for isNextPageAvailable.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30520](https://jira.nuxeo.com/browse/NXP-30520)

## Fix error message when setting an invalid password

Setting a password which doesn't respect the configured pattern results in a bad request error. 

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30278](https://jira.nuxeo.com/browse/NXP-30278)

## Delay the start of Quartz scheduler to avoid database constraint violations

Delay Quartz scheduler start for 5s by default.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30239](https://jira.nuxeo.com/browse/NXP-30239)

## Bulk Service should have a transactional behavior

The Bulk service can now submit command with a transactional behavior

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-28296](https://jira.nuxeo.com/browse/NXP-28296)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21651) is available in our bug tracking tool.

{{! /multiexcerpt}}
