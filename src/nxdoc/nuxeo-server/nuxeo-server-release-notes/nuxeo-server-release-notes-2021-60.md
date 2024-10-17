---
title: LTS 2021.60 / LTS 2021-HF60
description: Discover what's new in LTS 2021.60 / LTS 2021-HF60
review:
   comment: ''
   date: '2024-09-18'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 1730
---

{{! multiexcerpt name='nuxeo-server-updates-2021-60'}}
# What's New in LTS 2021.60 / LTS 2021-HF60

## Comments Not Showing on Version Documents


`AbstracSession#getOrCreateDocument` now works properly to create a document under a version.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32845](https://jira.nuxeo.com/browse/NXP-32845)

## Move Swagger Rest API and Automation Doc to an Optional Marketplace


Rest Swagger doc, available under the `/nuxeo/api/v1/doc` endpoint, and the Automation doc, available under the `/nuxeo/api/v1/automation/doc` endpoint, are no longer part of the default distribution.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32841](https://jira.nuxeo.com/browse/NXP-32841)

## DocumentTaskProvider getTasks Should Rely on an Elastic to Avoid Mongo Timeouts


The task related page providers now rely on Elasticsearch by default.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32754](https://jira.nuxeo.com/browse/NXP-32754)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=23062) is available in our bug tracking tool.

{{! /multiexcerpt}}
