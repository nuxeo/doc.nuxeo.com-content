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

The Audit Service is used for logging and retrieving audit data into a data store. The service can be accessed directly with the Java API for reading or writing audit entries but the main source for Audit entries is the Nuxeo event bus: the Audit Service listens to all events that may occur on the platform (document creation, user logging in, workflow started ...) and according to the configuration an Audit record will be created.

{{#> callout type='info'  heading='Nuxeo University'}}
Watch the related course on Nuxeo University:</br>
[Video on Audits from the Data Persistence course](https://university.nuxeo.com/learn/course/external/view/elearning/190/NuxeoArchitecture)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Audit/university_audit.png
    name: university_audit.png
    server#screenshot#up_to_date
--}}
![university_audit.png](nx_asset://fa59bf2b-6f7c-4cfa-a8ad-c0bb7e1775ae ?w=450,border=true)
{{/callout}}

## Architecture

The Audit Service is mainly a data store service. It defines a data record structure that will be used for storing audit information.

The data record structure is defined in Java by the `LogEntry` and `ExtendedInfo` Java classes. The Audit Service receives events from the Event Service. Then the Audit Service filters and converts them into log entries. The `LogEntry` class is mainly obtained from a `DocumentEventContext`.

Nuxeo documents and events can have a lot of custom properties, so if you want to log some specific events or document properties, the [Extended Info](#extendedinfo) allows for a Key/Value type storage that will be associated to the main `LogEntry` record. These informations are extracted from the event message using and EL (Expression Language) expression and stored into a map.

By default, since Nuxeo LTS 2015, the data store relies on the [Elasticsearch Back-end](#elasticsearch-back-end). To disable Elasticsearh for Audit logs and use the [Legacy SQL Back-end](#legacy-sql-back-end) please refer to the [Disabling Elasticsearch for Audit Logs]({{page page='elasticsearch-setup'}}#disabling-es-for-audit-logs) section.

### Elasticsearch Back-end

The audit entries are stored in the Elasticsearch index named by the `audit.elasticsearch.indexName` property in `nuxeo.conf`.

{{#> callout type='warning' }}
Make sure you read the [Backing Up and Restoring the Audit Elasticsearch Index]({{page page='backup-and-restore'}}#backingupandrestoringtheauditelasticsearchindex) section.
{{/callout}}

Fore more information about the global Elasticsearch setup, see [Elasticsearch Setup]({{page page='elasticsearch-setup'}}).

### Legacy SQL Back-end

If Elasticsearch is disabled for Audit logs, the data store is built over a relational database back-end.

The `LogEntry` and `ExtendedInfo` Java classes are mapped onto the datastore using JPA (Java Persistence API) annotations.

There are three tables used by the Audit Service: `NXP_LOGS`, `NXP_LOGS_EXTINFO` and `NXP_LOGS_MAPEXTINFOS`. `NXP_LOGS` is the main table, it is used most of the time. The two others are used only when the `extendedInfo` extension point is defined.

![]({{file name='diagram.png'}} ?w=600,border=true)

### MongoDB Back-end

The audit entries can also be stored in a MongoDB database. The entries will be stored in the `audit` collection by default. To enable the MongoDB data store in place of the Elasticsearch or SQL ones, activate the `mongodb-audit` template in `nuxeo.conf`.

## Querying the Audit Data Store

The Service API is composed of three services:

* `AuditReader`: service for reading data from the audit logs. [More details](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewService/org.nuxeo.ecm.platform.audit.api.AuditReader).
* `AuditLogger`: service for adding data into the audit logs. [More details](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewService/org.nuxeo.ecm.platform.audit.api.AuditLogger).
* `AuditAdmin`: service for administrating the Audit Service.

A set of methods allows the user to do common queries quite easily like getting all the log entries for a document, getting a specific log by its id, etc.

```java
AuditReader reader = Framework.getService(AuditReader.class);

// Getting of the logs for the document 'doc' in 'myRepository'
List<LogEntry> logEntries = reader.getLogEntriesFor(doc.getId(), 'myRepository');

// Same method but with a query builder
AuditQueryBuilder builder = new AuditQueryBuilder();
builder.predicates(Predicates.eq("docUUID", doc.getId()), Predicates.eq("repositoryId", 'myRepository'));
List<LogEntry> logEntriesFiltered = reader.queryLogs(builder);
```

You can perform some simple queries using the Elasticsearch API, here is an example of getting all the logs of the category 'MyExport' ordered by the date of the event:

```java
List<LogEntry> entries = new ArrayList<>();
ElasticSearchAdmin esa = Framework.getService(ElasticSearchAdmin.class);
SearchRequestBuilder builder = esa.getClient()
                                  .prepareSearch(esa.getIndexNameForType(ElasticSearchConstants.ENTRY_TYPE))
                                  .setTypes(ElasticSearchConstants.ENTRY_TYPE)
                                  .setSearchType(SearchType.DFS_QUERY_THEN_FETCH);
builder.setQuery(QueryBuilders.termQuery("category", "MyExport"));
builder.addSort("eventDate", SortOrder.DESC);
SearchResponse searchResponse = builder.execute().actionGet();
for (SearchHit hit : searchResponse.getHits()) {
    try {
        entries.add(AuditEntryJSONReader.read(hit.getSourceAsString()));
    } catch (IOException e) {
        log.error("Error while reading Audit Entry from ES", e);
    }
}
```

When using the legacy SQL back-end, you can use `AuditReader` to do simple queries using the JPA Query language:

```java
StringBuffer query = new StringBuffer("from LogEntry log where ");
query.append(" log.category='");
query.append("MyExport");
query.append("'  ORDER BY log.eventDate DESC");
AuditReader reader = Framework.getService(AuditReader.class);
List<LogEntry> result = (List<LogEntry>)reader.nativeQuery(query.toString(), 1, 1);
```

There are two PageProviders that can be used for querying the Audit data store:

* `AuditPageProvider`: allows to generate simple queries against Audit entries.
* `DocumentHistoryReader`: allows to compute history for a given document.

    [More details on the explorer](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewContribution/org.nuxeo.ecm.platform.audit.PageProviderservice.contrib--providers).

A schema has been defined for basic Audit search: `basicauditsearch.xsd`. This schema is helpful for building a PageProvider feeding a ContentView with data from the Audit data store. An object `BasicAuditSearch` could be used to define queries on the audit data store.

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

If you are sending new Nuxeo core events and want them to be audited, you have to extend the `event` extension point. Here is an example of a contribution to this extension point:

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

[More details on the explorer.](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.platform.audit.service.NXAuditEventsService--event)

### Extended Info{{> anchor 'extendedinfo'}}

This service is used to evaluate EL expressions using a document as context and registering results into a Map indexed by names.

Just after converting a received `DocumentEventContext` instance into the corresponding `LogEntry` instance, the Audit Service allows you to extract information from the handling context and to store them.

To do this, you have to define an EL expression and associate it with a key. You can access to the following variables:

* `message`: Document event context describing the event.
* `source`: Document from which the event is from.
* `principal`: Identity of the event owner.

If you want to contribute to the extended info of the service, you have to use the `extendedInfo` extension point. Here is an example of a contribution to this extension point

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

For instance, the above contribution will add `modelId`, `modelName`, `worklowInitiator`, `workflowVarriables` to the `extendedInfo` only for the `afterWorkflowStarted` event.

When the extension point is contributed, the data are stored into the `audit.elasticsearch.indexName` index for the Elasticsearch back-end, into the `NXP_LOGS_EXTINFO` and `NXP_LOGS_MAPEXTINFOS` tables for the legacy SQL back-end and into the `audit` collection in the `audit` database for the MongoDB back-end.

[More details on the explorer.](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.platform.audit.service.NXAuditEventsService--extendedInfo)

### Adapter

The contribution to the `adapter` extension point of the `org.nuxeo.ecm.platform.audit.service.NXAuditEventsService` component allows to define the adapter that will be injected in the EL context. Here is an example of a contribution to this extension point.

```xml
<extension target="org.nuxeo.ecm.platform.audit.service.NXAuditEventsService" point="adapter">
    <adapter name="myadapter" class="org.nuxeo.ecm.core.api.facet.VersioningDocument"/>
</extension>
```

[More details on the explorer.](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.platform.audit.service.NXAuditEventsService--adapter)

### Listener

A post commit asynchronous listener is defined and an Event Bundle, which is an ordered set of events raised during a user operation, is pushed into the Audit log. Here is an example of a contribution to the `listener` extension point.

```xml
<extension target="org.nuxeo.ecm.core.event.EventServiceComponent" point="listener">
	<listener name="auditLoggerListener" async="true" postCommit="true"
	class="org.nuxeo.ecm.platform.audit.listener.AuditEventLogger" />
</extension>
```

[More details on the explorer.](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewContribution/org.nuxeo.ecm.platform.audit.service.NXAuditEventsService--listener)

Note that since 9.3 by default this listener is overridden by the [Nuxeo Stream audit writer]({{page page='nuxeo-stream'}}).

### Queues

It is also possible to configure queues used by the Audit Service. Each queue is using a separate queue and a single thread for logging. The extension point used to define the queues' parameters is `queue` for the `org.nuxeo.ecm.core.work.service` target.

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

[More details on the explorer.](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.core.work.service--queues)

### Hibernate - Legacy SQL Back-end Only

In the legacy SQL back-end, the Audit Service  uses Hibernate as a JPA provider. The configuration is done in the `hibernate` extension point for the `org.nuxeo.ecm.core.persistence.PersistenceComponent` target. This extension point lets you override the default Hibernate configuration.

```xml
<extension target="org.nuxeo.ecm.core.persistence.PersistenceComponent" point="hibernate">
  <hibernateConfiguration name="nxaudit-logs">
    <datasource>nxaudit-logs</datasource>
    <properties>
      <property name="hibernate.hbm2ddl.auto">update</property>
    </properties>
  </hibernateConfiguration>
</extension>
```

[More details on the explorer.](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.core.persistence.PersistenceComponent--hibernate)
