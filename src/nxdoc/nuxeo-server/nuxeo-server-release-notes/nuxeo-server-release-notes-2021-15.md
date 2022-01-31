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
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-15'}}
# What's New in LTS 2021.15 / LTS 2021-HF15

## Fix REST API when setting an Integer property with a String value which can be parsed as an Integer

Numeral values sent as a String value are allowed to update a Integer/Float property via the REST API

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30806](https://jira.nuxeo.com/browse/NXP-30806)

## setUserAgentPrefix in S3 config

The S3 user agent prefix and suffix parameters are configurable through nuxeo.conf.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30797](https://jira.nuxeo.com/browse/NXP-30797)

## Avoid Record overflow during csvExport containing huge metadata

CSV Export can now handle large metadata (over 1MB)

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30796](https://jira.nuxeo.com/browse/NXP-30796)

## Make possible to annotate test class with WithFrameworkProperty

Test classes can be annotated with WithFrameworkProperty

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30795](https://jira.nuxeo.com/browse/NXP-30795)

## Add log to pinpoint any slow processing

Long bulk commands and slow stream processing are now traced

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30790](https://jira.nuxeo.com/browse/NXP-30790)

## Close Redis executor pool after use in RedisChecker

Redis executor pool is closed after redis check on startup.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30781](https://jira.nuxeo.com/browse/NXP-30781)

## Fix Fn.getPrincipal which doesn't fetch NuxeoPrincipal's groups

Explicit call to the getPrincipal method keeps fetching groups.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30780](https://jira.nuxeo.com/browse/NXP-30780)

## Upgrade various dependencies to fix CVE

netty-handler, plexus-utils and owasp-java-html-sanitizer libraires have been upgraded.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30773](https://jira.nuxeo.com/browse/NXP-30773)

## Clean up json enrichers to do not produce warn logs

Nuxeo default enrichers do not produce warns on empty document models.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30742](https://jira.nuxeo.com/browse/NXP-30742)

## Make possible to contribute several blob dispatcher configuration

Blob dispatcher configurations are correctly merged.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30740](https://jira.nuxeo.com/browse/NXP-30740)

## Support MSK rolling upgrade to avoid stream failure

Avoid Stream failures during Kafka rolling upgrade

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30709](https://jira.nuxeo.com/browse/NXP-30709)

## Fix Task marshaller when workflow schema prefix is different from the name

The Task marshaller supports orkflow and node schemas with a prefix different from the shema name.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30658](https://jira.nuxeo.com/browse/NXP-30658)

## Use partialFilterExpression on parentId when creating the unique index to avoid duplicates

Enabling unique child constraint doesn't prevent version creation anymore

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30638](https://jira.nuxeo.com/browse/NXP-30638)

## Fix versioning of Video document when incrementing version at creation time using a custom policy

Video conversions don't checkout the checked in documents

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30619](https://jira.nuxeo.com/browse/NXP-30619)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21583) is available in our bug tracking tool.

{{! /multiexcerpt}}
