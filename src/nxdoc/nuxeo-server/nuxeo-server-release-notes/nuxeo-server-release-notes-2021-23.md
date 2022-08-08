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
tree_item_index: 3000
---

{{! multiexcerpt name='nuxeo-server-updates-2021-23'}}
# What's New in LTS 2021.23 / LTS 2021-HF23

## Nuxeo Server

### Stream Management: Cat Endpoint to View Stream Content

New management API to view stream records.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31085](https://jira.nuxeo.com/browse/NXP-31085)

### Change ElasticSearchComponent#isReady Method Visibility to Public

ElasticSearchComponent#isReady method visibility is now public.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31068](https://jira.nuxeo.com/browse/NXP-31068)

## Majors Bug Fixes

### Write Correctly the Error When Uncaught Exceptions Occur in OAUTH2 Servlet

OAuth2 servlet better handles unexpected error.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31104](https://jira.nuxeo.com/browse/NXP-31104)

### Avoid Record Overflow During Bulk Indexing of Huge Fulltext

Record overflow is avoided during bulk indexing of huge fulltext.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31080](https://jira.nuxeo.com/browse/NXP-31080)

### Fix Handling of `&` Character in Encrypted Properties

Decrypted conf properties containing xml special characters are now allowed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31055](https://jira.nuxeo.com/browse/NXP-31055)

### Fix Update of Proxy’s Picture Metadata When a Picture Document Is Published Before Picture Properties Are Computed

Proxy of version are now indexed when version received a system update

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31007](https://jira.nuxeo.com/browse/NXP-31007)

### ImagingComponent callPictureConversionChain Should Handle Automation Transaction

ImagingComponent no longer converts picture outside current transaction, caller must handle transaction management explicitly. An option is available to fill picture views outside current transaction in DefaultPictureAdapter.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31001](https://jira.nuxeo.com/browse/NXP-31001)

### Avoid Transaction Timeout When MongoDB Maxtime Is Reached

The transaction timeout is avoided when MongoDB maxtime is reached.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30992](https://jira.nuxeo.com/browse/NXP-30992)

# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21718) is available in our bug tracking tool.

{{! /multiexcerpt}}
