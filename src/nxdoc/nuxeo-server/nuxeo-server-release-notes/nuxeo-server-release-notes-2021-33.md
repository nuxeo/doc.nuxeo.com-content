---
title: LTS 2021.33 / LTS 2021-HF33
description: Discover what's new in LTS 2021.33 / LTS 2021-HF33
review:
   comment: ''
   date: '2023-02-07'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-33'}}
# What's New in LTS 2021.33 / LTS 2021-HF33

## Make Thumbnail URL in suggestion results take into account the repository

Thumbnails in quick search suggestions are correctly displayed in a multi-repo configuration.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31635](https://jira.nuxeo.com/browse/NXP-31635)

## Fix TemplateProcessorComponent to register the invalidator after the cluster service has started

Changes on Templates are distributed to all cluster nodes.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31623](https://jira.nuxeo.com/browse/NXP-31623)

## Issue when using Repository.PageProvider with IN clause

NXQL page provider now works when org.nuxeo.web.ui.pageprovider.method is set to POST

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31595](https://jira.nuxeo.com/browse/NXP-31595)

## Add an event to the audit trail when a proxy is removed

A proxyRemoved event is fired on the working copy when a proxy is removed from Nuxeo.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31575](https://jira.nuxeo.com/browse/NXP-31575)

## Upgrade logback-core

null

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31562](https://jira.nuxeo.com/browse/NXP-31562)

## Unable to start with GridFS

Nuxeo Stream starts correctly woth GridFS.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31551](https://jira.nuxeo.com/browse/NXP-31551)

## Create a Management API to extract binary fulltext

There is a new Management endpoint to run binary fulltext extraction

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31276](https://jira.nuxeo.com/browse/NXP-31276)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22032) is available in our bug tracking tool.

{{! /multiexcerpt}}
