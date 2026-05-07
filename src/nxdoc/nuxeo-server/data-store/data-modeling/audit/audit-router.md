---
title: Audit Router
description: Route audit log entries to one or more Audit Backends based on event names and predicates.
review:
    comment: ''
    date: '2026-05-07'
    status: ok
labels:
    - audit
    - audit-router
toc: true
tree_item_index: 770
---

{{#> callout type='warning' heading='Available since 2025.16'}}
The Audit Router and the `routes` extension point are introduced in Nuxeo
2025.16. Until then, only the legacy `event` extension point is available.
The legacy `event` extension point still works and remains backward-compatible
on later releases.
{{/callout}}

{{! excerpt}}
The `AuditRouter` is the engine that decides, for each Nuxeo event, which Audit
Backend(s) the resulting `LogEntry` is written to. It is configured through the
`routes` extension point of the Audit Service.
{{! /excerpt}}

## How Routing Works

The audit ingestion pipeline goes through three stages:

1. The `StreamAuditEventListener` intercepts each audited event, asks the
   `AuditRouter` to compute the resulting `LogEntry` from the event context,
   and the listener appends it to the `audit/audit` Nuxeo Stream.
2. The `audit/writer` computation (`StreamAuditWriter`) consumes the
   `audit/audit` stream entries.
3. For every entry, the computation calls the `AuditRouter` back to get the
   list of target backends. The router walks the contributed routes and, for
   every route that matches the entry, returns the configured backend. The
   entry is then written to each matching backend.

![]({{file name='architecture-diagram.png' page='audit'}} ?w=600,border=true)

The combination semantics are:

- **routes are ORed**: a single log entry can be written to several backends if
  several routes match.
- **events** of one route are ORed.
- **predicates** of one route are ORed.
- **events AND predicates** are combined inside a single route: a route
  declaring both accepts an entry only when one of its events matches **and**
  one of its predicates is satisfied.

A route may declare only events, only predicates, or both:

- **Events only** — the events declared in the route are registered as auditable events,
  so the post-commit listener forwards them to the `audit/audit` stream.
- **Predicates only** — the route does not register events; it only filters
  log entries that already flow through the router (for example, to copy
  entries flowing to the default backend to a secondary one based on their
  category).

## {{> anchor 'routes-extension-point'}}`routes` Extension Point

A route is a `<route>` element with a `name`, a `<backend>` and any
combination of `<event>` and `<predicate>` children:

```xml
<extension target="org.nuxeo.audit.service.AuditComponent" point="routes">
  <route name="default">
    <backend name="default" />
    <event name="documentCreated" />
    <event name="documentModified" enabled="true" />
  </route>
</extension>
```

By default the Nuxeo Platform contributes a `default` route holding all auditable events. Custom contributions to the `routes` extension point can override or extend this configuration.

### `<backend>`

`<backend name="..."/>` references a backend registered through the
`backendFactory` extension point. The platform always contributes a `default`
backend whose factory comes from `nuxeo.audit.backend.default.factory`.

### `<event>`

`<event name="..." enabled="true|false"/>` registers an auditable event.

- The event must be one of the events fired by the platform (or by your code).
- Setting `enabled="false"` is the supported way to suppress an event from a
  route without redefining it; this is how the SQL backend disables `search`
  by default.

### `<predicate>`

`<predicate class="..."/>` filters which log entries the route accepts. A
predicate is a `java.util.function.Predicate<LogEntry>` that takes a
`Map<String, String>` of `<property>` entries as constructor argument:

```xml
<route name="documentCategory">
  <backend name="default" />
  <predicate class="org.nuxeo.audit.service.route.CategoryLogEntryPredicate">
    <property name="category">eventDocumentCategory</property>
  </predicate>
</route>
```

The platform ships `CategoryLogEntryPredicate`, which keeps log entries whose
`category` matches the configured value. You can contribute your own
`Predicate<LogEntry>` implementation by providing a public constructor that
accepts a `Map<String, String>`.

### Route Inheritance with `copy`

A route can copy another existing route by referring to it via the `copy`
attribute. The copying route inherits the backend and the events/predicates
of the source route, and merges them with what it declares locally:

- Locally declared `<event>` and `<predicate>` elements are merged with the
  inherited ones (entries are identified by `name`). A local
  `<event name="..." enabled="false"/>` disables a specific inherited event.
- The `<backend>` is replaced when redeclared.

```xml
<route name="default-mirrored" copy="default">
  <backend name="secondary" />
</route>
```

## Worked Example — Routing a Business Event to a Secondary Backend

The following example contributes a secondary OpenSearch 1.x backend that
receives only the custom `hylandBusinessEvent` event. The default backend is
left untouched: it keeps receiving the events declared by the implicit
`default` route, and it does **not** receive `hylandBusinessEvent`.

### 1. Register the secondary backend

```xml
<extension target="org.nuxeo.audit.service.AuditComponent" point="backendFactory">
  <backend name="secondary" factory="org.nuxeo.audit.opensearch1.OpenSearchAuditBackendFactory" />
</extension>
```

### 2. Configure the backend implementation

```xml
<extension target="org.nuxeo.audit.opensearch1.OpenSearchAuditBackendFactory" point="backend">
  <backend name="secondary"
           clientId="audit/secondary"
           indexName="${hyland.custom.audit.backend.secondary.opensearch1.index.name:=hyland-business-audit}" />
</extension>
```

### 3. Configure the OpenSearch client used by the secondary backend

```xml
<extension target="org.nuxeo.runtime.opensearch1.OpenSearchComponent" point="client">
  <client id="audit/secondary">
    <server>${hyland.custom.audit.backend.secondary.opensearch1.client.server:=http://localhost:9200}</server>
    <connectionTimeout>${hyland.custom.audit.backend.secondary.opensearch1.client.connectionTimeout:=30s}</connectionTimeout>
    <socketTimeout>${hyland.custom.audit.backend.secondary.opensearch1.client.socketTimeout:=121000ms}</socketTimeout>
    <username>${hyland.custom.audit.backend.secondary.opensearch1.client.username:=}</username>
    <password>${hyland.custom.audit.backend.secondary.opensearch1.client.password:=}</password>
  </client>
</extension>
```

### 4. Contribute the route

```xml
<extension target="org.nuxeo.audit.service.AuditComponent" point="routes">
  <route name="secondary_route">
    <backend name="secondary" />
    <event name="hylandBusinessEvent" />
  </route>
</extension>
```

From now on, every `hylandBusinessEvent` raised by the application is ingested
by the secondary OpenSearch backend, while regular events keep flowing to the
default backend.

{{#> callout type='warning' }}
When installing two Audit Backend Marketplace Packages side-by-side, only one
of them must be the default. Force the default factory in `nuxeo.conf` and
disable the other one, for instance:

```
# default backend is SQL
nuxeo.audit.backend.default.factory=org.nuxeo.audit.sql.SQLAuditBackendFactory
# secondary OpenSearch package must not register itself as default
nuxeo.audit.backend.default.opensearch1.enabled=false
```
{{/callout}}

## Learn More

- [Audit]({{page page='audit'}})
- [Copy an Audit Backend]({{page page='copy-audit-backend'}})
- [Audit Endpoint]({{page space='rest-api' version='1' page='audit-endpoint'}})
- [How to Upgrade Nuxeo Audit Service]({{page page='how-to-upgrade-audit-service'}})
