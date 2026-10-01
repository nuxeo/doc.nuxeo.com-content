---
title: LTS 2025.26 / LTS 2025-HF26
description: Discover what's new in LTS 2025.26 / LTS 2025-HF26
review:
   comment: ''
   date: '2026-09-30'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2025-26'}}
# What's New in LTS 2025.26 / LTS 2025-HF26

## Management API - Audit Purge Endpoint

 New "purge" management rest API audit endpoint to submit the "routeAudit" BAF scrolling a query and dispatching through named routes

See [Management REST API documentation](https://doc.nuxeo.com/rest-api/1/audit-endpoint/#purge-log-entries-through-named-routes).
## Refuse Creating a User When a Group With the Same Id Exists, and Vice Versa

Added an opt-in check to refuse creating a user with the same id as an existing group, and vice versa.

Prior to this fix, an ACE stored a bare identifier with no indication of whether it designated a user or a group, so a user and a group sharing the same id ended up with the exact same permissions. A new `nuxeo.usermanager.check.user.group.id.conflict` configuration property can now be enabled to make `UserManager#createUser` and `UserManager#createGroup` refuse the creation when the id is already used by the other type, preventing this collision from happening.
## Bulk Action Routing Scrolled Audit Log Entries Against Named Routes

New routeAudit bulk action to purge audit backend.

The `routeAudit` bulk action consumes an audit-scroll and dispatches every scrolled `LogEntry` through one or more named routes — live or not — writing matching entries to each route's target backend. It preserves the original log entry id and logDate.

Default action configuration:

Property

Default

`nuxeo.bulk.action.routeAudit.defaultConcurrency` 

`2`     

`nuxeo.bulk.action.routeAudit.defaultPartitions`  

`4`     

Once completed, the bulk status `result` object contains a `matched.<route-name>` counter for each requested route, giving the number of entries it dispatched, and a `skip.<backend-name>` counter for each target backend that already contained a given entry (idempotent re-runs, for instance when a route is also live and already dual-writing).
## Support Non-Live Audit Routes in the Routes Extension Point

New live attribute on route descriptor.

`<route name="..." live="true|false">` controls whether the route is evaluated for incoming events. It defaults to `true`.

A `live="false"` route is excluded from the live routing path, but it remains addressable by name, for instance, to be used by the Audit Purge mechanism (see NXP-33391).
## Provide Common Route Predicates

New NXQLPredicate and NotRoutesPredicate are available to define custom audit routing.

Audit routes can now be conditioned on an NXQL query or on the outcome of other routes, without writing a custom Java predicate:

- `org.nuxeo.audit.service.route.NXQLPredicate`: an NXQL `WHERE` clause can be contributed directly on a route's predicate, evaluated against each log entry as it's routed (or purged) — no custom code needed for common conditions like an event type, a document path, or an age cutoff.
- `org.nuxeo.audit.service.route.NotRoutesPredicate`: a route can also be conditioned on not matching one or more other routes, so a "catch-all" or "not-yet-migrated" route no longer has to duplicate another route's criteria — it just declares which routes it excludes.

Both are optional; existing custom `Predicate<LogEntry>` contributions keep working unchanged.

```
<!-- all events go to future-default, except old to_be_archived events -->
<route name="future-default-route" live="true">
  <backend name="future-default" />
  <predicate class="org.nuxeo.audit.service.route.NXQLPredicate">
    <property name="query">
      SELECT * FROM LogEntry WHERE NOT (eventId = 'to_be_archived' AND logDate &lt; NOW('-P30D'))
    </property>
  </predicate>
</route>
<!-- archive, purge-only: the complement of future-default-route, i.e. old to_be_archived events -->
<route name="archive-route" live="false">
  <backend name="archive" />
  <predicate class="org.nuxeo.audit.service.route.NotRoutesPredicate">
    <property name="routes">future-default-route</property>
  </predicate>
</route>
```

`NOW()` is also now bound once for the duration of a routing pass or a purge bulk command, via a new `NXQL.withNow(Instant, Supplier)` API, instead of being resolved independently for every log entry — so a route and a `NotRoutesPredicate` referencing it always agree on which side of the cutoff an entry falls, even for entries very close to the boundary.
## Fix Thumbnail Generation for Image Files With MIME Type Application/Illustrator

Thumbnails are now properly generated for illustrator and postscript MIME types.

## Fix XA Datasource Property Naming in Common-Base xadatasource-params.ftl for PostgreSQL

Fixed PostgreSQL XA datasource configuration where properties were incorrectly named, preventing successful connections when XA mode was enabled.

## tracing.jaeger.service Has No Effect Because Jaeger Reporter Template Omits the Service Option

Jaeger and Zipkin reporters now include the service option.

## Fix Build Failure With org.apache.avro:avro Upgrade From 1.12.1 to 1.12.2

Improved Avro serialization security by restricting reflection-based (de)serialization to trusted packages.

As part of adopting Avro 1.12.2's new class-security safeguard (ClassSecurityValidator), which restricts reflection-based Avro serialization to explicitly trusted classes, Nuxeo now trusts its own classes by default so internal usages (stream, bulk, audit messages, etc.) continue to work securely.

A new `nuxeo.conf` property, `nuxeo.stream.avro.serializable_packages`, lets you configure the comma-separated list of Java packages allowed for Avro serialization (defaults to `org.nuxeo`). No action is required unless you have custom classes outside the `org.nuxeo` package that need to be Avro-serialized, in which case add their package to this property.
## Fix Build Failure With Google-Cloud-Storage Upgrade From 2.68.0 to 2.71.0

com.google.http-client artifacts bumped to 2.2.0 - google-cloud-storage bumped to 2.73.0

## org.nuxeo.runtime.reload_strategy=restart Breaks Hot Reload With a NullPointerException: ReloadComponent Deactivates Itself and Nulls Its Own Static Bundle Field

Fix hot reload restart strategy

## PDF.MergeWithBlobs Silently Corrupts PDF Content on LTS 2025 After PDFBox 3 Upgrade

Fix a code path that might corrupt the merged PDF within PDF.MergeWithBlos

## Nuxeo Docker Image Should Follow Log

Dev-mode Docker containers now keep streaming the Nuxeo server log to standard output after a log file rollover, so docker logs / docker compose logs no longer goes  │ silent and requires a container restart to see new entries.

## Deprecate NXQL#TEST_NXQL_NOW in Favor of NXQL#withNow

Use NXQL#withNow instead of NXQL#TEST_NXQL_NOW

## Security Fixes

This release also contains security fixes.

{{! /multiexcerpt}}
