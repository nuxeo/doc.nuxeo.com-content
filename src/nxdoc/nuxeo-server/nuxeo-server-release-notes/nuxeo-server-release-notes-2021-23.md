---
title: LTS 2021.23 / LTS 2021-HF23
description: Discover what's new in LTS 2021.23 / LTS 2021-HF23
review:
   comment: ''
   date: '2022-07-18'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-23'}}
# What's New in LTS 2021.23 / LTS 2021-HF23

## Write correctly the error when uncaught exceptions occur in OAuth2 servlet

OAuth2 servlet better handles unexpected error

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31104](https://jira.nuxeo.com/browse/NXP-31104)

## Stream Management: Cat endpoint to view stream content

New management API to view stream records

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31085](https://jira.nuxeo.com/browse/NXP-31085)

## Avoid Record overflow during bulk indexing of huge fulltext

Record overflow is avoided during bulk indexing of huge fulltext

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31080](https://jira.nuxeo.com/browse/NXP-31080)

## Change ElasticSearchComponent#isReady method visibility to public

ElasticSearchComponent#isReady method visibility is now public.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31068](https://jira.nuxeo.com/browse/NXP-31068)

## Fix handling of & character in encrypted properties

Decrypted conf properties containing xml special characters are now allowed

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31055](https://jira.nuxeo.com/browse/NXP-31055)

## Fix update of proxy's Picture metadata when a picture document is published before Picture properties are computed

Proxy of version are now indexed when version received a system update

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31007](https://jira.nuxeo.com/browse/NXP-31007)

## ImagingComponent callPictureConversionChain should handle automation transaction

ImagingComponent no longer converts picture outside current transaction, caller must handle transaction management explicitly. An option is available to fill picture views outside current transaction in DefaultPictureAdapter.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31001](https://jira.nuxeo.com/browse/NXP-31001)

## Avoid transaction timeout when mongodb maxtime is reached

The transaction timeout is avoided when mongodb maxtime is reached.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30992](https://jira.nuxeo.com/browse/NXP-30992)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21718) is available in our bug tracking tool.

{{! /multiexcerpt}}
