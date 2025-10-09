---
title: LTS 2025.9 / LTS 2025-HF09
description: Discover what's new in LTS 2025.9 / LTS 2025-HF09
review:
   comment: ''
   date: '2025-10-09'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2025-9'}}
# What's New in LTS 2025.9 / LTS 2025-HF09

## Fix HTTP Status Code When a Quota Is Exceeded

The 413 - Content Too Large error is now returned when exceeding configured quota.

Nuxeo now returns a 413 - Content Too Large error instead of the standard 500 - Internal Server Error when a user exceeds its quota.
## Fix Random WorkflowEscalationTest.testEscalationMultipleExecutionWithListener (PostgreSQL)

A new generic test waiter for bulk command submitted by event listener is available in CoreBulkFeature

## Integrate an External Uid for User and Group to Use in REST API

Several additions to user for REST APIs

### Comment Author Fetcher

A new Fetcher has been added for Comment response. Use `fetch.comment=author` to receive a full user / principal object at `author` location instead of just its username.

### Audit / History Principal Fetcher

A new Fetcher has been added for Audit responses. Use `fetch.logEntry=principal` to receive a full user / principal object at `principal` location.
## Speed Up the Execution Time of the Unit Tests Using WorkflowFeature 

The test WorkfFlowFeature no longer carries the test AuditFeature. The test AutomationFeaturesFeature no longer carries the CoreSearchFeature.


{{! /multiexcerpt}}
