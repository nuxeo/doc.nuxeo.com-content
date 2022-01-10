---
title: LTS 2021.14 / LTS 2021-HF14
description: Discover what's new in LTS 2021.14 / LTS 2021-HF14
review:
   comment: ''
   date: '2022-01-10'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-14'}}
# What's New in LTS 2021.14 / LTS 2021-HF14

## Upgrade Apache log4j to 2.17.0

null

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30777](https://jira.nuxeo.com/browse/NXP-30777)

## Fix ES manage alias feature in HF55 with MongoDB

ES manage alias feature works fine with MongoDB.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30755](https://jira.nuxeo.com/browse/NXP-30755)

## Allow S3 TransferManager ExecutorFactory ThreadPool size to be configurable

S3 TransferManager thread pool size is configurable.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30718](https://jira.nuxeo.com/browse/NXP-30718)

## Allow access token expiration to be configurable

Access token expiration is configurable.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30717](https://jira.nuxeo.com/browse/NXP-30717)

## Fix cursor timeout during binary garbage collection

A configuration parameter is added to disable cursor timeout during the orphan binary GC.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30714](https://jira.nuxeo.com/browse/NXP-30714)

## Fix creation of document via REST API when providing string value to integer property

An error is thrown if a value does not correspond to the property type at creation with a REST API call.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30680](https://jira.nuxeo.com/browse/NXP-30680)

## Avoid avro MissingSchemaException when updating core messages

Backward compatibility is added when avro codec was used.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30671](https://jira.nuxeo.com/browse/NXP-30671)

## Document under retention / legal hold can be Trashed

null

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30072](https://jira.nuxeo.com/browse/NXP-30072)

## Keep passwords encrypted in deployed xml files

null

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-28880](https://jira.nuxeo.com/browse/NXP-28880)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21567) is available in our bug tracking tool.

{{! /multiexcerpt}}
