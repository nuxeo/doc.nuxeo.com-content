---
title: LTS 2021.52 / LTS 2021-HF52
description: Discover what's new in LTS 2021.52 / LTS 2021-HF52
review:
   comment: ''
   date: '2024-04-10'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 1810
---

{{! multiexcerpt name='nuxeo-server-updates-2021-52'}}
# What's New in LTS 2021.52 / LTS 2021-HF52

## Fix Scale Metrics When There Is No Processors Information


Fixed scale metrics when there is no processors information.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32434](https://jira.nuxeo.com/browse/NXP-32434)

## Fix HTTP 500 When Running an Unauthenticated Request Against REST API With Keycloak Auth


Fix HTTP 500 when running an unauthenticated request against REST API with Keycloak authentication.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32389](https://jira.nuxeo.com/browse/NXP-32389)

## Fix ES Indexing Error When Adding a Live Proxy to a Collection


Proxy indexing with Elasticsearch/Opensearch is fixed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32376](https://jira.nuxeo.com/browse/NXP-32376)

## Upgrade PDFBox to 2.0.31


PDFBox was bumped from 2.0.24 to 2.0.31

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32365](https://jira.nuxeo.com/browse/NXP-32365)

## Fix Error Using Document.MoveToColdStorage on Objects Greater Than 5GB


S3 objects are sent to Glacier using the async transfer api

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32361](https://jira.nuxeo.com/browse/NXP-32361)

##  Provide Option to Enable Nashorn Optimistic Typing


nuxeo.conf now allows to enable Nashorn optimistic types.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32342](https://jira.nuxeo.com/browse/NXP-32342)

## Document.Create Operation Does Not Take Into Account the Segment Limit 


Document.Create Operation takes path segment limit into account.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32337](https://jira.nuxeo.com/browse/NXP-32337)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22817) is available in our bug tracking tool.

{{! /multiexcerpt}}
