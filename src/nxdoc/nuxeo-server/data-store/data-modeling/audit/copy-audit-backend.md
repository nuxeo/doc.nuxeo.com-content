---
title: Copy an Audit Backend
description: Copy log entries from one Audit Backend to another using the audit scroll, the copyAudit bulk action and the Management REST API.
review:
    comment: ''
    date: '2026-09-02'
    status: ok
labels:
    - audit
    - blue-green-migration
toc: true
tree_item_index: 780
---

{{#> callout type='warning' heading='Available since 2025.19'}}
The audit scroller, the `copyAudit` bulk action and the related Management
REST API endpoints are introduced in Nuxeo 2025.19.
{{/callout}}

{{! excerpt}}
Copying log entries between two Audit Backends is the cornerstone of a
**Blue/Green Audit migration** — for instance when upgrading from OpenSearch 1.x
to OpenSearch 2.x, or when moving the audit out of SQL backend. Nuxeo provides a
generic scroller, a `copyAudit` Bulk Action and Management REST endpoints to
trigger and verify the copy.
{{! /excerpt}}

## Audit Scroll

The `audit` scroll is a [Bulk Action Framework]({{page page='bulk-action-framework'}})
scroller backed by the Audit `QueryBuilder` API. It scrolls log entry
identifiers from one [Audit Backend]({{page page='audit'}}#audit-back-ends)
based on a valid NXQL query whose `FROM` clause states the source backend.

Constraints can be expressed on the `LogEntry` fields (`eventId`, `logDate`,
`category`, …) like the Audit Page Provider already proposes; an `ORDER BY`
clause is also supported. When no order is provided, the scroller orders by
`id ASC` to keep the scroll deterministic.

Example NXQL — scroll the `default` backend, oldest first:

```sql
SELECT * FROM default ORDER BY logDate ASC
```

The scroll only supports one backend per request — the audit `FROM` clause
expects exactly one backend name.

## `copyAudit` Bulk Action

The `copyAudit` bulk action consumes the `audit` scroll and writes every
scrolled `LogEntry` to a target backend. It is exclusive between two
backends — a second copy from the same source to the same target is rejected
as long as a previous one is still running.

Default action configuration:

| Property                                           | Default |
|----------------------------------------------------|---------|
| `nuxeo.bulk.action.copyAudit.defaultConcurrency`   | `2`     |
| `nuxeo.bulk.action.copyAudit.defaultPartitions`    | `4`     |

The action also tolerates failures: it retries up to 3 times with an
exponential back-off (`500ms` → `10s`) before giving up.

## Management REST API

Three Management endpoints expose the copy / verification flow:

| Endpoint                                | Purpose                                                     |
|-----------------------------------------|-------------------------------------------------------------|
| `POST /management/audit/copy`           | Trigger a `copyAudit` bulk action between two backends.     |
| `GET  /management/audit/checkSearch`    | Run the same NXQL on several backends and compare results.  |
| `GET  /management/audit/introspection`  | Get a PlantUML view of the live audit routing.              |

## Typical Blue/Green Migration

1. Deploy a secondary Audit Backend — referred to as the green backend, the
   live one being the `default` backend — see the [Audit Router]({{page page='audit-router'}})
   page.
2. Contribute a [route]({{page page='audit-router'}}#routes-extension-point) to start mirroring live ingestion to the `green`
   backend.
3. Trigger `POST /management/audit/copy?from=default&to=green` to copy the
   historical entries.
4. Monitor the bulk command status using the [Bulk Endpoint]({{page space='rest-api' version='1' page='bulk-endpoint'}}).
5. Validate using `GET /management/audit/checkSearch?backend=default&backend=green`.
6. Promote the `green` backend as the new default — this is a repackaging
   step that registers the `green` backend as the `default` backend and the
   previous default configuration can be removed.
7. (Optional) Delete the contents of the previous backend once you no longer
   need to keep its historical data.

{{#> callout type='info' heading='Coming next — Purge Audit Migration'}}
The same building blocks (audit scroll + `copyAudit` style bulk action) will be
reused to provide an uninterrupted **Audit Purge** capability.
{{/callout}}

## Learn More

- [Audit]({{page page='audit'}})
- [Audit Router]({{page page='audit-router'}})
- [Audit Endpoint]({{page space='rest-api' version='1' page='audit-endpoint'}})
- [Bulk Action Framework]({{page page='bulk-action-framework'}})
- [Migrating Search Technology]({{page page='search-setup-migration'}})
