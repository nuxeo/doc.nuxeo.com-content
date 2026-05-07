---
title: Audit
description: The Audit Service is mainly a data store service. It defines a data record structure that will be used for storing audit information.
review:
    comment: ''
    date: '2017-12-14'
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
associated to the main `LogEntry` record. These informations are extracted from
the event message using and EL (Expression Language) expression and stored into
a map.

### Audit Back-ends

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

## Querying the Audit Data Store

The Service API is composed of three services:

* `AuditReader`: service for reading data from the audit logs. [More details](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewService/org.nuxeo.ecm.platform.audit.api.AuditReader).
* `AuditLogger`: service for adding data into the audit logs. [More details](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewService/org.nuxeo.ecm.platform.audit.api.AuditLogger).
* `AuditAdmin`: service for administrating the Audit Service.

A set of methods allows the user to do common queries quite easily like getting
all the log entries for a document, getting a specific log by its id, etc.

```java
AuditReader reader = Framework.getService(AuditReader.class);

// Getting of the logs for the document 'doc' in 'myRepository'
List<LogEntry> logEntries = reader.getLogEntriesFor(doc.getId(), 'myRepository');

// Same method but with a query builder
AuditQueryBuilder builder = new AuditQueryBuilder();
builder.predicates(Predicates.eq("docUUID", doc.getId()), Predicates.eq("repositoryId", 'myRepository'));
List<LogEntry> logEntriesFiltered = reader.queryLogs(builder);
```

There are two PageProviders that can be used for querying the Audit data store:

* `AuditPageProvider`: allows to generate simple queries against Audit entries.
* `DocumentHistoryReader`: allows to compute history for a given document.

    [More details on the explorer](http://explorer.nuxeo.com/nuxeo/site/latest/viewContribution/org.nuxeo.ecm.platform.audit.PageProviderservice.contrib--providers).

A schema has been defined for basic Audit search: `basicauditsearch.xsd`. This
schema is helpful for building a PageProvider feeding a ContentView with data
from the Audit data store. An object `BasicAuditSearch` could be used to define
queries on the audit data store.

## Extending the Audit Service

There a few extension points used to contribute to the Audit Service:

* `event`
* `extendedInfo`
* `adapter`
* `listener`

Two others extension points can be used to configure the datastorage for Audit:

* `queues`
* `hibernate` **&dash; for the legacy SQL back-end only**

### Event

Those default auditable events match the Nuxeo core base events:

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
[here](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.audit.service.NXAuditEventsService--event).
{{/callout}}

If you are sending new Nuxeo core events and want them to be audited, you have
to extend the `event` extension point. Here is an example of a contribution to
this extension point:

```xml
<extension target="org.nuxeo.ecm.platform.audit.service.NXAuditEventsService" point="event">
	<event name="documentCreated" />
    <event name="documentCreatedByCopy" />
    <event name="documentDuplicated" />
    <event name="documentMoved" />
    <event name="documentRemoved" />
    <event name="documentModified" />
    <event name="documentLocked" />
    <event name="documentUnlocked" />
    <event name="documentSecurityUpdated" />
    <event name="lifecycle_transition_event" />
    <event name="loginSuccess" />
    <event name="loginFailed" />
    <event name="logout" />
    <event name="documentCheckedIn" />
    <event name="versionRemoved" />
    <event name="documentProxyPublished" />
    <event name="sectionContentPublished" />
    <event name="documentRestored" />
</extension>
```

[More details on the explorer.](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.audit.service.NXAuditEventsService--event)

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
<extension point="extendedInfo" target="org.nuxeo.ecm.platform.audit.service.NXAuditEventsService">
    <extendedInfo expression="${source.dublincore.title}" key="title" />
    <extendedInfo expression="${message.cacheKey}" key="key" />
    <extendedInfo expression="${principal.name}" key="user" />
</extension>
```

You can also extend the audit info per event name:

```xml
<extension target="org.nuxeo.ecm.platform.audit.service.NXAuditEventsService"
    point="event">
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
`worklowInitiator`, `workflowVarriables` to the `extendedInfo` only for the
`afterWorkflowStarted` event.

When the extension point is contributed, the data are stored into the
`audit.elasticsearch.indexName` index for the Elasticsearch back-end, into the
`NXP_LOGS_EXTINFO` and `NXP_LOGS_MAPEXTINFOS` tables for the legacy SQL back-end
and into the `audit` collection in the `audit` database for the MongoDB
back-end.

[More details on the explorer.](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.audit.service.NXAuditEventsService--extendedInfo)

### Adapter

The contribution to the `adapter` extension point of the
`org.nuxeo.ecm.platform.audit.service.NXAuditEventsService` component allows to
define the adapter that will be injected in the EL context. Here is an example
of a contribution to this extension point.

```xml
<extension target="org.nuxeo.ecm.platform.audit.service.NXAuditEventsService" point="adapter">
    <adapter name="myadapter" class="org.nuxeo.ecm.core.api.facet.VersioningDocument"/>
</extension>
```

[More details on the explorer.](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.audit.service.NXAuditEventsService--adapter)

### Listener

A post commit asynchronous listener is defined and an Event Bundle, which is an
ordered set of events raised during a user operation, is pushed into the Audit
log. Here is an example of a contribution to the `listener` extension point.

```xml
<extension target="org.nuxeo.ecm.core.event.EventServiceComponent" point="listener">
	<listener name="auditLoggerListener" async="true" postCommit="true"
	class="org.nuxeo.ecm.platform.audit.listener.AuditEventLogger" />
</extension>
```

[More details on the explorer.](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewContribution/org.nuxeo.ecm.platform.audit.service.NXAuditEventsService--listener)

Note that since 9.3 by default this listener is overridden by the
[Nuxeo Stream audit writer]({{page page='nuxeo-stream'}}).

### Queues

It is also possible to configure queues used by the Audit Service. Each queue is
using a separate queue and a single thread for logging. The extension point used
to define the queues' parameters is `queue` for the
`org.nuxeo.ecm.core.work.service` target.

```xml
<extension target="org.nuxeo.ecm.core.work.service" point="queues">
  <queue id="audit">
    <name>Audit queue</name>
    <maxThreads>1</maxThreads>
    <category>auditLoggerListener</category>
    <!-- clear completed work instances older than 5 min -->
    <clearCompletedAfterSeconds>300</clearCompletedAfterSeconds>
  </queue>
</extension>
```

[More details on the explorer.](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.work.service--queues)
