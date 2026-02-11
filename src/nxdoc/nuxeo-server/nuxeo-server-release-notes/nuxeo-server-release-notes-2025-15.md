---
title: LTS 2025.15 / LTS 2025-HF15
description: Discover what's new in LTS 2025.15 / LTS 2025-HF15
review:
   comment: ''
   date: '2026-02-11'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2025-15'}}
# What's New in LTS 2025.15 / LTS 2025-HF15

## JDBCRowMapper With Closed Connection on PostgreSQL

There is a new option to ensure borrowed connection is not stale

Under heavy load, the VCS connection pool can hand out stale (closed) connections. A new option `org.nuxeo.session.pool.reconnect.enabled` has been added: when enabled, each borrowed connection is reopened to ensure it is not stale.

- LTS 2023: Default behavior is unchanged; the option is disabled.
- LTS 2025: The option is enabled by default.
## Implement a Dynatrace Metric Reporter

There is a new Dynatrace metrics reporter.

There is a new Dynatrace Metric reporter available.

It only works with Dynatrace OneAgent or ActiveGate configured to accept UDP StatsD protocol.

Use the option below to enable it:

```
metrics.dynatrace.enabled=true
metrics.dynatrace.host=localhost
metrics.dynatrace.port=18125
```
## Update LibreOffice to Latest Patch Version in Nuxeo LTS 2023/2025 Docker Image

Updated LibreOffice in Docker image from 7.5.8 to 7.5.9.2.

## Add No Limit Support to ByteSize

Fix no limit support on configuration expressed in bytes


{{! /multiexcerpt}}
