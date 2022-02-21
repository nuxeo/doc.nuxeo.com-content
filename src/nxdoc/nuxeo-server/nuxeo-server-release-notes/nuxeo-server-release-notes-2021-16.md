---
title: LTS 2021.16 / LTS 2021-HF16
description: Discover what's new in LTS 2021.16 / LTS 2021-HF16
review:
   comment: ''
   date: '2022-02-21'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 4050
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-16'}}
# What's New in LTS 2021.16 / LTS 2021-HF16

## Nuxeo Server

### Core Storage

#### Don’t Prevent Nuxeo From Starting if Mongodb Indexes Are Not Correct

Nuxeo now warns if a MongoDB index is badly configured.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30865](https://jira.nuxeo.com/browse/NXP-30865)

#### Improve Indexing Reliability When Elastic Is Overloaded

Nuxeo is now handling back pressure when Elastic is overloaded.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30841](https://jira.nuxeo.com/browse/NXP-30841)

#### Enable Trace and Logs Correlation With Datadog Tracing

Datadog automatic tracing instrumentation supports log correlation.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30789](https://jira.nuxeo.com/browse/NXP-30789)

#### Enable Log4j Trace Correlation With Opencensus

The log4j trace now contains reference to the tracing identifier enabling correlation.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30788](https://jira.nuxeo.com/browse/NXP-30788)

## Major Bug Fixes

### Mongo Index Creation Should Not Be Done for Each New Connection

MongoDB index are created at startup only.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30683](https://jira.nuxeo.com/browse/NXP-30683)

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21604) is available in our bug tracking tool.

{{! /multiexcerpt}}
