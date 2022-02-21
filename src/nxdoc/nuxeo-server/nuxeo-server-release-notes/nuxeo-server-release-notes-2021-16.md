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
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-16'}}
# What's New in LTS 2021.16 / LTS 2021-HF16

## Don't prevent Nuxeo from starting if MongoDB indexes are not correct

Nuxeo now warns if a MongoDB index is badly configured

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30865](https://jira.nuxeo.com/browse/NXP-30865)

## Improve indexing reliability when Elastic is overloaded

Nuxeo is now handling back pressure when Elastic is overloaded

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30841](https://jira.nuxeo.com/browse/NXP-30841)

## Enable trace and logs correlation with Datadog tracing

Datadog automatic tracing instrumentation supports log correlation

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30789](https://jira.nuxeo.com/browse/NXP-30789)

## Enable Log4j trace correlation with OpenCensus

The log4j trace now contains reference to the tracing identifier enabling correlation

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30788](https://jira.nuxeo.com/browse/NXP-30788)

## Mongo index creation should not be done for each new connection

MongDB index are created at startup only

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30683](https://jira.nuxeo.com/browse/NXP-30683)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21604) is available in our bug tracking tool.

{{! /multiexcerpt}}
