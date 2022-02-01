---
title: LTS 2021.15 / LTS 2021-HF15
description: Discover what's new in LTS 2021.15 / LTS 2021-HF15
review:
   comment: ''
   date: '2022-01-31'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 5000
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-15'}}
# What's New in LTS 2021.15 / LTS 2021-HF15

## Nuxeo Server

### Core Storage

#### setUserAgentPrefix in S3 Config

The S3 user agent prefix and suffix parameters are configurable through nuxeo.conf.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30797](https://jira.nuxeo.com/browse/NXP-30797)

#### Avoid Record Overflow During csvExport Containing Huge Metadata

CSV Export can now handle large metadata (over 1MB)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30796](https://jira.nuxeo.com/browse/NXP-30796)

#### Make Possible to Annotate Test Class With WithFrameworkProperty

Test classes can be annotated with WithFrameworkProperty

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30795](https://jira.nuxeo.com/browse/NXP-30795)

#### Add Log to Pinpoint Any Slow Processing

Long bulk commands and slow stream processing are now traced

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30790](https://jira.nuxeo.com/browse/NXP-30790)

#### Clean Up JSON Enrichers to Do Not Produce Warn Logs

Nuxeo default enrichers do not produce warns on empty document models.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30742](https://jira.nuxeo.com/browse/NXP-30742)

#### Make Possible to Contribute Several Blob Dispatcher Configuration

Blob dispatcher configurations are correctly merged.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30740](https://jira.nuxeo.com/browse/NXP-30740)

#### Fix Task Marshaller When Workflow Schema Prefix Is Different From the Name

The Task marshaller supports workflow and node schemas with a prefix different from the schema name.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30658](https://jira.nuxeo.com/browse/NXP-30658)

#### Use partialFilterExpression On parentId When Creating the Unique Index to Avoid Duplicates

Enabling unique child constraint doesn't prevent version creation anymore

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30638](https://jira.nuxeo.com/browse/NXP-30638)

#### Fix Versioning of Video Document When Incrementing Version at Creation Time Using a Custom Policy

Video conversions don't checkout the checked in documents

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30619](https://jira.nuxeo.com/browse/NXP-30619)

## Packaging / Distribution / Installation

#### Upgrade Various Dependencies to Fix CVE

netty-handler, plexus-utils and owasp-java-html-sanitizer libraires have been upgraded.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30773](https://jira.nuxeo.com/browse/NXP-30773)

## Major Bug Fixes

#### Fix Rest API When Setting an Integer Property With a String Value Which Can Be Parsed as an Integer

Numeral values sent as a String value are allowed to update a Integer/Float property via the REST API

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30806](https://jira.nuxeo.com/browse/NXP-30806)

#### Close Redis Executor Pool After Use in RedisChecker

Redis executor pool is closed after redis check on startup.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30781](https://jira.nuxeo.com/browse/NXP-30781)

#### Fix Fn.getPrincipal Which Doesn’t Fetch Nuxeoprincipal’s Groups

Explicit call to the getPrincipal method keeps fetching groups.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30780](https://jira.nuxeo.com/browse/NXP-30780)

#### Support MSK Rolling Upgrade to Avoid Stream Failure

Avoid Stream failures during Kafka rolling upgrade.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30709](https://jira.nuxeo.com/browse/NXP-30709)

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21583) is available in our bug tracking tool.

{{! /multiexcerpt}}
