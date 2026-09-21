---
title: Purge an Audit Backend
description: Archive or drop a subset of the log entries of an Audit Backend using non-live routes, the routeAudit bulk action and the Management REST API.
review:
  comment: ''
  date: '2026-09-21'
  status: ok
labels:
  - audit
  - purge
toc: true
tree_item_index: 790
---

{{#> callout type='warning' heading='Available since 2025.26'}}
Non-live routes, `NXQLPredicate`, `NotRoutesPredicate`, the `routeAudit` bulk
action and the `POST /management/audit/purge` Management REST endpoint are
introduced in Nuxeo 2025.26.
{{/callout}}

{{! excerpt}}
Purging Audit is routing a subset of the log entries — selected through an
NXQL query and one or more [Audit Router]({{page page='audit-router'}})
routes — to an archive backend, to a future default backend, or simply
dropping them. Nothing is ever deleted in place: entries are copied to
whichever backend a route targets, and the source backend content is only
removed manually, once you no longer need it (see step 6 of the canonical
scenario below).
{{! /excerpt}}

## Non-Live Routes

A route ([`routes` extension point]({{page page='audit-router'}}#routes-extension-point)) can be
declared **non-live** (`live="false"`): it is not evaluated for new incoming
events, but it remains addressable by name so it can be triggered explicitly
by a purge or migration operation. This lets you declare purge-only or
archive routes that never fire on new events.

## NXQL and `NotRoutesPredicate` Route Predicates

Two predicates, contributed through the `<predicate>` element of a route
(see [Audit Router]({{page page='audit-router'}})), make it easy to
express purge criteria without writing Java code:

- `NXQLPredicate` evaluates an NXQL `WHERE` clause against each `LogEntry` in
  memory, including `NOW()` with an optional period/duration (for example,
  `NOW('-P30D')`).
- `NotRoutesPredicate` matches a `LogEntry` only if none of the named routes
  it references would themselves match it. This lets a route defer to another
  route's criteria instead of duplicating them.

See the [Audit Router]({{page page='audit-router'}}) page for the full
`routes` extension point reference.

## `routeAudit` Bulk Action

The `routeAudit` bulk action consumes an [audit scroll]({{page page='copy-audit-backend'}}#audit-scroll)
and dispatches every scrolled `LogEntry` through one or more named routes —
live or not — writing matching entries to each route's target backend. The
original log entry `id` and `logDate` are preserved. It is exclusive: a
second purge is rejected as long as a previous one is still running.

Default action configuration:

| Property                                          | Default |
| ------------------------------------------------- | ------- |
| `nuxeo.bulk.action.routeAudit.defaultConcurrency` | `2`     |
| `nuxeo.bulk.action.routeAudit.defaultPartitions`  | `4`     |

Once completed, the bulk status `result` object contains a
`matched.<route-name>` counter for each requested route, giving the number of
entries it dispatched, and a `skip.<backend-name>` counter for each target
backend that already contained a given entry (idempotent re-runs, for
instance when a route is also live and already dual-writing).

## Management REST API

| Endpoint                               | Purpose                                                                                         |
| -------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `POST /management/audit/purge`         | Trigger a `routeAudit` bulk action, scrolling a `query` and dispatching through named `routes`. |
| `GET  /management/audit/checkSearch`   | Run the same NXQL on several backends and compare results — useful to validate a purge.         |
| `GET  /management/audit/introspection` | Get a PlantUML view of the live audit routing, including which routes are live/non-live.        |

See the [Audit Endpoint]({{page space='rest-api' version='1' page='audit-endpoint'}})
for the full REST API reference, and
[Copy an Audit Backend]({{page page='copy-audit-backend'}}) to copy or
duplicate entries without per-entry routing.

## Canonical Purge Scenario

The following scenario keeps only recent `loginSuccess` events in the audit
storage going forward, while old ones are archived. A `future-default`
backend receives everything except `loginSuccess` entries older than 30 days,
and an `archive` backend receives exactly the complement — those old
`loginSuccess` entries — without duplicating any filtering logic.

### 1. Contribute Secondary Audit Backends

See [Audit Router — Worked Example]({{page page='audit-router'}}#worked-example-routing-a-business-event-to-a-secondary-backend)
for the full backend registration (factory, client, index). Here, two simple
backends are demonstrated:

```xml
<extension target="org.nuxeo.audit.service.AuditComponent" point="backendFactory">
  <backend name="future-default" factory="org.nuxeo.audit.opensearch1.OpenSearchAuditBackendFactory" />
  <backend name="archive" factory="org.nuxeo.audit.opensearch1.OpenSearchAuditBackendFactory" />
</extension>
```

### 2. Contribute the Routes

- `future-default-route` is **live**: from now on it dual-writes every new
  event to `future-default`, except `loginSuccess` entries already older than
  30 days at ingestion time (there shouldn't be any, but the same predicate
  will be reused for the purge below).
- `archive-route` is **non-live**: it never fires on new events, and is
  defined with `NotRoutesPredicate` as the exact complement of
  `future-default-route`, so it only ever needs to be triggered explicitly by
  a purge.

```xml
<extension target="org.nuxeo.audit.service.AuditComponent" point="routes">
  <route name="future-default-route" live="true">
    <backend name="future-default" />
    <predicate class="org.nuxeo.audit.service.route.NXQLPredicate">
      <property name="query">SELECT * FROM LogEntry WHERE NOT (eventId = 'loginSuccess' AND eventDate &lt; NOW('-P30D'))</property>
    </predicate>
  </route>

  <route name="archive-route" live="false">
    <backend name="archive" />
    <predicate class="org.nuxeo.audit.service.route.NotRoutesPredicate">
      <property name="routes">future-default-route</property>
    </predicate>
  </route>
</extension>
```

### 3. Trigger the Purge

```curl
curl -X POST -u Administrator:Administrator \
--data-urlencode "query=SELECT * FROM default" \
--data-urlencode "routes=future-default-route" \
--data-urlencode "routes=archive-route" \
http://localhost:8080/nuxeo/api/v1/management/audit/purge
```

The `query` scopes the source entries to scroll — here, every entry currently
in `default`. Each entry is then evaluated against both routes: recent
entries and non-`loginSuccess` entries land in `future-default`, while old
`loginSuccess` entries land in `archive`. Because `future-default-route` is
live, any entry already dual-written to it since it was contributed is
recognized as a duplicate and skipped rather than copied twice. The resulting
[bulk status]({{page space='rest-api' version='1' page='bulk-status-entity-type'}})'s `result` object
reports `matched.<route-name>` and `skip.<backend-name>` counters for this.

{{#> callout type='note'}}
If you don't need per-entry filtering through a route, `POST /management/audit/copy`
with an NXQL `query` form parameter (instead of `from`) is enough to copy an
arbitrary subset of entries from one backend to another — see
[Copy an Audit Backend]({{page page='copy-audit-backend'}}).
{{/callout}}

### 4. Validate

```curl
curl -X GET -u Administrator:Administrator \
--data-urlencode "nxql=SELECT * FROM LogEntry WHERE NOT (eventId = 'loginSuccess' AND eventDate &lt; NOW('-P30D'))" \
--data-urlencode "backend=default" \
--data-urlencode "backend=future-default" \
-G http://localhost:8080/nuxeo/api/v1/management/audit/checkSearch
```

### 5. Swap the Default Backend

Once `future-default` has caught up with `default` (validated above),
promote it as the new `default`. This is a repackaging step, see the
[Typical Blue/Green Migration]({{page page='copy-audit-backend'}}#typical-blue-green-migration)
steps.

### 6. Decommission the Old Backend

Once entries have been routed and validated, the old backend content can be
dropped at the infrastructure level (drop the SQL rows, delete the
Elasticsearch/OpenSearch index, …). This last step remains a manual,
operational action outside of Nuxeo.

{{#> callout type='note' heading='Upgrading from an older version?'}}
Before 2025.26, purging Audit required direct, manual operations on the
storage backend — see [Purging Audit Logs]({{page page='purging-audit-logs-nxp_logs'}})
for the legacy SQL/Elasticsearch scripts.
{{/callout}}

## Learn More

- [Audit]({{page page='audit'}})
- [Audit Router]({{page page='audit-router'}})
- [Copy an Audit Backend]({{page page='copy-audit-backend'}})
- [Audit Endpoint]({{page space='rest-api' version='1' page='audit-endpoint'}})
- [Purging Audit Logs (legacy)]({{page page='purging-audit-logs-nxp_logs'}})
