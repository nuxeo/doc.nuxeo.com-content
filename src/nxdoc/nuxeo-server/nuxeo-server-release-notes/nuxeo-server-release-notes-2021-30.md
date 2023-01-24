---
title: LTS 2021.30 / LTS 2021-HF30
description: Discover what's new in LTS 2021.30 / LTS 2021-HF30
review:
   comment: ''
   date: '2022-12-07'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 2030
---

{{! multiexcerpt name='nuxeo-server-updates-2021-30'}}
# What's New in LTS 2021.30 / LTS 2021-HF30

## Use Jackson BOM for Jackson Dependencies

Jackson BOM is now imported in the Maven dependency graph.

Addons declaring jackson artefacts in their dependencies management section can remove them as the `jackson-bom` is now imported in the Maven dependency graph of Nuxeo Platform.
This will ease the security upgrade of Jackson artefacts for all Nuxeo artefacts.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31455](https://jira.nuxeo.com/browse/NXP-31455)

## Make certificateKeyAlias Value Configurable from nuxeo.conf 

The certification key alias can be configured.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31425](https://jira.nuxeo.com/browse/NXP-31425)

## Upgrade MongoDB Driver to Version 4.7

The MongoDB driver has been bumped to version 4.7 to allow using MongoDB 6.x.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31398](https://jira.nuxeo.com/browse/NXP-31398)

## Make the Document Creation Take Into Account the Segment Limit in Web UI

Apply path segment max size at document creation.

The segment limit can be adapted like in the sample contrib attached.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31363](https://jira.nuxeo.com/browse/NXP-31363)

## Create a MongoTransientStore That Can Handle Large Number Params

There is a new optimized implementation of TransientStore for MongoDB.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31311](https://jira.nuxeo.com/browse/NXP-31311)

## Fix Race Condition When Reading Work State From KV Store

Race condition is avoided when reading Work state from KV store.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31244](https://jira.nuxeo.com/browse/NXP-31244)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21888) is available in our bug tracking tool.

{{! /multiexcerpt}}
