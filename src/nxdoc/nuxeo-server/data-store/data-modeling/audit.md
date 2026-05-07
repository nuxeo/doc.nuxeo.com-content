---
title: Audit
description: The Audit Service stores audit log entries derived from Nuxeo events into one or more Audit Backends.
review:
    comment: ''
    date: '2026-05-07'
    status: ok
labels:
    - lts2016-ok
    - audit
    - fdavid
    - audit-component
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '31033314'
    ajs-parent-page-title: Nuxeo Server
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Audit
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Audit'
    page_id: '19793490'
    shortlink: UgYuAQ
    shortlink_source: 'https://doc.nuxeo.com/x/UgYuAQ'
    source_link: /display/NXDOC/Audit
tree_item_index: 700
history:
    -
        author: Solen Guitter
        date: '2016-08-31 15:49'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2015-10-09 09:40'
        message: ''
        version: '16'
    -
        author: Guillaume Renard
        date: '2015-09-29 11:42'
        message: ''
        version: '15'
    -
        author: Guillaume Renard
        date: '2015-09-28 13:28'
        message: ''
        version: '14'
    -
        author: Guillaume Renard
        date: '2015-09-28 13:27'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2015-08-31 14:03'
        message: Update table of contents look
        version: '12'
    -
        author: Alain Escaffre
        date: '2014-09-19 15:10'
        message: ''
        version: '11'
    -
        author: Gildas Lefevre
        date: '2014-07-08 15:22'
        message: ''
        version: '10'
    -
        author: Gildas Lefevre
        date: '2014-07-08 15:17'
        message: ''
        version: '9'
    -
        author: Gildas Lefevre
        date: '2014-07-07 14:05'
        message: ''
        version: '8'
    -
        author: Gildas Lefevre
        date: '2014-07-04 17:36'
        message: ''
        version: '7'
    -
        author: Gildas Lefevre
        date: '2014-07-04 17:14'
        message: ''
        version: '6'
    -
        author: Gildas Lefevre
        date: '2014-07-04 16:29'
        message: ''
        version: '5'
    -
        author: Gildas Lefevre
        date: '2014-07-04 16:21'
        message: ''
        version: '4'
    -
        author: Gildas Lefevre
        date: '2014-07-04 15:17'
        message: ''
        version: '3'
    -
        author: Gildas Lefevre
        date: '2014-07-04 15:14'
        message: ''
        version: '2'
    -
        author: Gildas Lefevre
        date: '2014-07-04 15:00'
        message: ''
        version: '1'
---

The Audit Service is used for logging and retrieving audit data into a data
store. The service can be accessed directly with the Java API for reading or
writing audit entries but the main source for Audit entries is the Nuxeo event
bus: the Audit Service listens to all events that may occur on the platform
(document creation, user logging in, workflow started ...) and according to the
configuration an Audit record will be created.

{{#> callout type='info'  heading='Hyland University'}}
Watch the related course on Hyland University:</br>
[Video on Audits from the Data Persistence course](https://university.hyland.com/courses/e4009)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Audit/university_audit.png
    name: university_audit.png
    server#screenshot#up_to_date
--}}
![university_audit.png](/nx_assets/fa59bf2b-6f7c-4cfa-a8ad-c0bb7e1775ae.png ?w=450,border=true)
{{/callout}}

## Architecture

The Audit Service is mainly a data store service. It defines a data record
structure that will be used for storing audit information.

The data record structure is defined in Java by the `LogEntry` and
`ExtendedInfo` Java classes. The Audit Service receives events from the Event
Service. Then the Audit Service filters and converts them into log entries. The
`LogEntry` class is mainly obtained from a `DocumentEventContext`.

Nuxeo documents and events can have a lot of custom properties, so if you want
to log some specific events or document properties, the
[Extended Info](#extendedinfo) allows for a Key/Value type storage that will be
associated to the main `LogEntry` record. This information is extracted from
the event message using an EL (Expression Language) expression and stored into
a map.

Since LTS 2025 the Audit Service has been redesigned to support **multiple
backends in parallel** through the
[`AuditRouter`]({{page page='audit-router'}}). The high-level pipeline is:

```
Nuxeo Event Service
        │
        ▼
StreamAuditEventListener (sync, priority 500)
        │  AuditRouter computes LogEntry from event
        ▼
audit/audit Nuxeo Stream
        │
        ▼
audit/writer computation (StreamAuditWriter)
        │  AuditRouter.routeToBackend(LogEntry)
        ▼
        ├──► Audit Backend "default"
        ├──► Audit Backend "secondary"
        └──► …
```

### Services

| Service                                              | Purpose                                                          |
|------------------------------------------------------|------------------------------------------------------------------|
| `org.nuxeo.audit.service.AuditService`               | Entry point — exposes the configured backends and the router.     |
| `org.nuxeo.audit.service.AuditBackend`               | Backend SPI — read, write and query log entries.                  |
| `org.nuxeo.audit.service.AuditRouter`                | Internal service computing and routing log entries to the configured backends. |

The legacy `AuditReader`, `AuditLogger` and `AuditAdmin` services from the
`org.nuxeo.ecm.platform.audit.api` package are still available and proxy to the
default backend. They are deprecated and will be removed in a future release —
new code should target `AuditService` and `AuditBackend` directly. To get the
default backend:

```java
AuditService auditService = Framework.getService(AuditService.class);
AuditBackend backend = auditService.getAuditBackend("default");
```

See the
[How to Upgrade Nuxeo Audit Service]({{page page='how-to-upgrade-audit-service'}})
page for the full migration guide.

### {{> anchor 'audit-back-ends'}}Audit Backends

Since LTS 2025, you have to explicitly choose a backend implementation from the
following implementations listed below:

| Backend                                  | Marketplace Package             | Reference                                                                          |
|------------------------------------------|---------------------------------|------------------------------------------------------------------------------------|
| In-Memory (not for production)           | Built-in Nuxeo Server (default) | —                                                                                  |
| OpenSearch 1.x / Elasticsearch 7.x - 8.x | nuxeo-audit-opensearch1         | [OpenSearch 1.x Audit Backend]({{page page='audit-backend-opensearch1'}})          |
| OpenSearch 2.x                           | nuxeo-audit-opensearch2         | [OpenSearch 2.x Audit Backend]({{page page='audit-backend-opensearch2'}})          |
| Elasticsearch 9.x                        | nuxeo-audit-elasticsearch9      | [Elasticsearch 9.x Audit Backend]({{page page='audit-backend-elasticsearch9'}})    |
| MongoDB                                  | nuxeo-audit-mongodb             | [MongoDB Audit Backend]({{page page='audit-backend-mongodb'}})                     |
| SQL Database (Legacy)                    | nuxeo-audit-sql                 | [SQL Audit Backend (Legacy)]({{page page='audit-backend-sql'}})                      |

Each child page lists the configuration properties exposed by the package as
`nuxeo.audit.backend.default.<implementation>.*` so you can override them in
`nuxeo.conf`.

### Audit Router

The [Audit Router]({{page page='audit-router'}}) (since 2025.16) replaces the
legacy `event` extension point with a richer `routes` extension point:

* A route binds a **backend** to a set of **events** and **predicates**.
* Several routes can match the same entry, so the same event can be written to multiple backends in parallel.
* The legacy `event` extension point still works and is automatically merged into the implicit `default` route.

The [Audit Router]({{page page='audit-router'}}) child page contains the full
extension-point reference and worked examples (route a custom business event to
a secondary backend, filter by category, etc.).

## Querying the Audit Data Store

The `AuditService` is the entry point to read audit data. From it you get an
`AuditBackend` that exposes the read API on a specific backend (the default
one in most cases).

A set of methods allows you to do common queries quite easily like getting all
the log entries for a document, getting a specific log by its id, etc.

```java
AuditService auditService = Framework.getService(AuditService.class);
AuditBackend backend = auditService.getAuditBackend("default");

// Getting of the logs for the document 'doc' in 'myRepository'
List<LogEntry> logEntries = backend.getLogEntriesFor(doc.getId(), "myRepository");

// Same method but with a query builder
AuditQueryBuilder builder = new AuditQueryBuilder();
builder.predicates(Predicates.eq(LogEntryConstants.LOG_DOC_UUID, doc.getId()),
                   Predicates.eq(LogEntryConstants.LOG_REPOSITORY_ID, "myRepository"));
List<LogEntry> logEntriesFiltered = backend.queryLogs(builder);
```

To target another backend, just ask the `AuditService` for it:

```java
AuditBackend secondary = auditService.getAuditBackend("secondary");
List<LogEntry> entries = secondary.queryLogs(builder);
```

There are two PageProviders that can be used for querying the Audit data store:

* `AuditPageProvider`: allows to generate simple queries against Audit entries.
* `DocumentHistoryReader`: allows to compute history for a given document.

    [More details on the explorer](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewContribution/org.nuxeo.audit.PageProviderService.contrib--providers).

By default both PageProviders query the default backend. They support targeting
a specific backend through the `backend` PageProvider property.

A schema has been defined for basic Audit search: `basicauditsearch.xsd`. This
schema is helpful for building a PageProvider querying the Audit data store. An
object `BasicAuditSearch` could be used to define queries on the audit data
store.

## Extending the Audit Service

The Audit Service exposes the following extension points on the
`org.nuxeo.audit.service.AuditComponent` component:

| Extension Point  | Purpose                                                                                                                |
|------------------|------------------------------------------------------------------------------------------------------------------------|
| `routes`         | Bind a backend to a set of events and predicates. **Since 2025.16.**                                                   |
| `event`          | Register an auditable event. **Deprecated since 2025.16** — use `routes` instead. Backward-compatible.                  |
| `extendedInfo`   | Extract custom values from the event context using EL and store them on the log entry.                                  |
| `adapter`        | Register an adapter exposed to EL expressions of `extendedInfo`.                                                        |
| `backendFactory` | Register an `AuditBackend` implementation. Contributed by the audit Marketplace Packages, rarely used by integrations.  |

### Routes — Recommended Since 2025.16

The `routes` extension point is the modern way to declare what is audited and
where it is stored. A minimal route registers an event and writes it to the
default backend:

```xml
<extension target="org.nuxeo.audit.service.AuditComponent" point="routes">
  <route name="documentLifecycle">
    <backend name="default" />
    <event name="documentCreated" />
    <event name="documentModified" />
  </route>
</extension>
```

See the [Audit Router]({{page page='audit-router'}}) child page for the full
reference (predicates, route inheritance with `copy`, routing semantics, …) and
worked examples.

The Nuxeo Platform contributes a `default` route which holds the auditable
events matching the Nuxeo core base events:

* `documentCreated`
* `documentCreatedByCopy`
* `documentDuplicated`
* `documentMoved`
* `documentRemoved`
* `documentModified`
* `documentLocked`
* `documentUnlocked`
* `documentSecurityUpdated`
* `lifecycle_transition_event`
* `loginSuccess`
* `loginFailed`
* `logout`
* `documentCheckedIn`
* `versionRemoved`
* `documentProxyPublished`
* `sectionContentPublished`
* `documentRestored`

{{#> callout type='info'  heading='Full List'}}
The full list of audit events used in the platform can be found
[here](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.audit.service.AuditComponent--routes).
{{/callout}}

If you are sending new Nuxeo core events and want them to be audited, you have
to contribute them to the `routes` extension point. Here is an example of a
contribution adding a custom event to the `default` route:

```xml
<extension target="org.nuxeo.audit.service.AuditComponent" point="routes">
  <route name="default">
    <event name="myCustomEvent" />
  </route>
</extension>
```

[More details on the explorer.](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.audit.service.AuditComponent--routes)

### Event — Deprecated Since 2025.16

The `event` extension point keeps registering auditable events on the implicit
`default` route. It is the legacy way of declaring audited events and
remains supported for backward compatibility.

### Extended Info{{> anchor 'extendedinfo'}}

This service is used to evaluate EL expressions using a document as context and
registering results into a Map indexed by names.

Just after converting a received `DocumentEventContext` instance into the
corresponding `LogEntry` instance, the Audit Service allows you to extract
information from the handling context and to store them.

To do this, you have to define an EL expression and associate it with a key. You
can access to the following variables:

* `message`: Document event context describing the event.
* `source`: Document from which the event is from.
* `principal`: Identity of the event owner.

If you want to contribute to the extended info of the service, you have to use
the `extendedInfo` extension point. Here is an example of a contribution to this
extension point

```xml
<extension target="org.nuxeo.audit.service.AuditComponent" point="extendedInfo">
    <extendedInfo expression="${source.dublincore.title}" key="title" />
    <extendedInfo expression="${message.cacheKey}" key="key" />
    <extendedInfo expression="${principal.name}" key="user" />
</extension>
```

You can also extend the audit info per event name:

```xml
<extension target="org.nuxeo.audit.service.AuditComponent" point="event">
    <event name="afterWorkflowStarted">
      <extendedInfos>
        <extendedInfo expression="${message.properties.modelId}" key="modelId" />
        <extendedInfo expression="${message.properties.modelName}" key="modelName" />
        <extendedInfo expression="${message.properties.workflowInitiator}" key="workflowInitiator" />
        <extendedInfo expression="${message.properties.workflowVariables}" key="workflowVariables" />
      </extendedInfos>
    </event>
</extension>
```

For instance, the above contribution will add `modelId`, `modelName`,
`workflowInitiator`, `workflowVariables` to the `extendedInfo` only for the
`afterWorkflowStarted` event.

{{#> callout type='info' heading='Recommended since 2025.16'}}
Since the introduction of the [Audit Router]({{page page='audit-router'}}),
per-event `extendedInfo` entries have to be declared directly on the
`extendedInfo` extension point with an `event` attribute, for instance:

```xml
<extension target="org.nuxeo.audit.service.AuditComponent" point="extendedInfo">
    <extendedInfo event="afterWorkflowStarted" expression="${message.properties.modelId}" key="modelId" />
</extension>
```

This is the recommended form. The legacy form nesting `<extendedInfo>` inside
`<event>` is kept for backward compatibility but will be removed in the future.
{{/callout}}

[More details on the explorer.](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.audit.service.AuditComponent--extendedInfo)

### Adapter

The contribution to the `adapter` extension point of the
`org.nuxeo.audit.service.AuditComponent` component allows to define the adapter
that will be injected in the EL context. Here is an example of a contribution to
this extension point.

```xml
<extension target="org.nuxeo.audit.service.AuditComponent" point="adapter">
    <adapter name="myadapter" class="org.nuxeo.ecm.core.api.facet.VersioningDocument"/>
</extension>
```

[More details on the explorer.](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.audit.service.AuditComponent--adapter)

### Live Ingestion — Stream Audit Writer

The audit ingestion pipeline is built on top of
[Nuxeo Stream]({{page page='nuxeo-stream'}}). A synchronous event listener
(`StreamAuditEventListener`) serializes each audited event as a `LogEntry` and
appends it to the `audit/audit` stream. A computation (`auditWriter`) consumes
the stream and delegates the actual write to the
[`AuditRouter`]({{page page='audit-router'}}).

This replaces the historical post-commit `auditLoggerListener` and the dedicated
Works `audit` queue: there is **no** `queue` extension point to configure for
the Audit Service anymore.

## Learn More

* [Audit Router]({{page page='audit-router'}})
* [Copy an Audit Backend]({{page page='copy-audit-backend'}})
* [Audit Endpoint]({{page space='rest-api' version='1' page='audit-endpoint'}})
* [How to Upgrade Nuxeo Audit Service]({{page page='how-to-upgrade-audit-service'}})
* [Backing Up and Restoring the Audit Index]({{page page='backup-and-restore'}}#backingupandrestoringtheauditelasticsearchindex)
