---
title: LTS 2023.37 / LTS 2023-HF37
description: Discover what's new in LTS 2023.37 / LTS 2023-HF37
review:
   comment: ''
   date: '2025-10-13'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2023-37'}}
# What's New in LTS 2023.37 / LTS 2023-HF37

## Fix HTTP Status Code When a Quota Is Exceeded


Nuxeo now returns a "413 - Content Too Large" error instead of the standard "500 - Internal Server Error" when a user exceeds its quota.

## Fix Random WorkflowEscalationTest.testEscalationMultipleExecutionWithListener (PostgreSQL)

A new generic test waiter for bulk command submitted by event listener is available in CoreBulkFeature.

## Integrate an External Uid for User and Group to Use in REST API

Several additions to user for REST APIs

### Comment Author Fetcher

A new Fetcher has been added for Comment response. Use `fetch.comment=author` to receive a full user / principal object at `author` location instead of just its username.

### Audit / History Principal Fetcher

A new Fetcher has been added for Audit responses. Use `fetch.logEntry=principal` to receive a full user / principal object at `principal` location.
## Bump AWS SDK (V1) Version to Latest Release in LTS 2023

The AWS Java SDK was updated from 1.12.650 to 1.12.792.


{{! /multiexcerpt}}
