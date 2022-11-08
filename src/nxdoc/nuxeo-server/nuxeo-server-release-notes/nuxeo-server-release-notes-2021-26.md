---
title: LTS 2021.26 / LTS 2021-HF26
description: Discover what's new in LTS 2021.26 / LTS 2021-HF26
review:
   comment: ''
   date: '2022-09-19'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2021-26'}}
# What's New in LTS 2021.26 / LTS 2021-HF26

## Improve Retry Tuning When Elastic Is Overloaded

The retry delay has been increased to handle when elastic is overloaded.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31201](https://jira.nuxeo.com/browse/NXP-31201)

## Fix REST API When Setting an Integer Property With an Empty String

Setting an empty string to other type than string in REST API will behave like null.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31199](https://jira.nuxeo.com/browse/NXP-31199)

## Fix ACL Setting in Structure Template When Applied by Non-admin Users

ACLs are set in an unrestricted fashion when applying structure templates.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31167](https://jira.nuxeo.com/browse/NXP-31167)

## Avoid Race Condition During Elasticsearch Index Initialization

Concurrent Elasticsearch index initialization is managed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30565](https://jira.nuxeo.com/browse/NXP-30565)

## Enable to Configure Kafka in SASL Without TLS

The template for Kafka in SASL works without TLS.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27100](https://jira.nuxeo.com/browse/NXP-27100)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21811) is available in our bug tracking tool.

{{! /multiexcerpt}}
