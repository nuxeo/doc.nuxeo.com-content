---
title: Audit
review:
    comment: ''
    date: ''
    status: ok
labels:
    - audit-component
    - lts2015-not-ok
    - audit
toc: true
confluence:
    ajs-parent-page-id: '28475536'
    ajs-parent-page-title: Developer Documentation Center
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Audit
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Audit'
    page_id: '28475719'
    shortlink: R4GyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/R4GyAQ'
    source_link: /display/NXDOC710/Audit
tree_item_index: 1200
history:
    -
        author: Solen Guitter
        date: '2016-08-31 15:48'
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
The Audit Service is used for logging and retrieving audit data into a datastore. The service can be accessed directly via Java API for reading or writing audit entries but the main source for Audit entries is the Nuxeo event bus : the Audit service listen to all events that may occur on the platform (document creation, user logging in, workflow started ...) and according to configuration an Audit record will be created.

## Architecture

Audit service is mainly a datastore service. It defines a data record structure that will be used for storing audit information.

The datastore is built over a relational database backend. The data record structure is defined in Java by the LogEntry and ExtendedInfo java classes.

They are mapped onto the datastore using JPA (Java Persistence API) annotations. Audit service receive events from the Event service. Then the Audit service is filtering and converting them into log entries. The LogEntry class is mainly obtained from the DocumentMessage event type.

JPA data-mapping configuration is not very flexible whereas Nuxeo Documents and events can have a lot of custom properties.

So, if you want to log some specific event or document properties, the **extendedInfo** allows for a Key/Value type storage that will be associated to the main LogEntry record. These informations are extracted from the event message using EL (Expression Language) expression and stored into a map.

There are three tables used by the Audit Service : NXP_LOGS, NXP_LOGS_EXTINFO and NXP_LOGS_MAPEXTINFOS. NXP_LOGS is the main table, it is used most of the time. The two others are used only when the **extendedInfo** extension point is defined.

![]({{file name='diagram.png'}} ?w=600,border=true)

## Querying the Audit datastorage

The Service API is composed by three services :

*   AuditReader : service for reading data from the audit logs. More details [here](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewService/org.nuxeo.ecm.platform.audit.api.AuditReader).
*   AuditLogger : service for adding data into the audit logs. More details [here](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewService/org.nuxeo.ecm.platform.audit.api.AuditLogger).
*   AuditAdmin : service for administrating the Audit Service.

You can use AuditReader to do simple queries using the JPA Query language, here an example of getting all the logs of the category 'MyExport' and ordered by the date of the event :

```java
StringBuffer query = new StringBuffer("from LogEntry log where ");
query.append(" log.category='");
query.append("MyExport");
query.append("'  ORDER BY log.eventDate DESC");
AuditReader reader = Framework.getService(AuditReader.class);
List result = reader.nativeQuery(query.toString(), 1, 1);
```

A set of methods allows the user to do common queries quiet easily like getting all the log entries for a document, getting a specific log by its id, etc.

```java
AuditReader reader = Framework.getService(AuditReader.class);

// Getting of the logs for the document 'doc'
List<LogEntry> logEntries = reader.getLogEntriesFor(doc.getId());

// Same method but with a filter
FilterMapEntry filter = new FilterMapEntry();
filter.setColumnName("eventId");
filter.setOperator("=");
filter.setQueryParameterName("eventId");
filter.setObject(DocumentEventTypes.DOCUMENT_CREATED);
Map<String, FilterMapEntry> filterMap = new HashMap<String, FilterMapEntry>();
filterMap.put("eventId", filter);
List<LogEntry> logEntriesFiltered = reader.getLogEntriesFor(doc.getId(), filterMap, true);
```

There are two PageProviders that could be used for querying the Audit datastorage :

*   AuditPageProvider : allows to generate simple queries against Audit entries
*   DocumentHistoryReader : allows to compute history for a given document

[More details on the explorer](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewContribution/org.nuxeo.ecm.platform.audit.PageProviderservice.contrib--providers).

A schema has been defined for basic audit search, its name is **basicauditsearch.xsd**. This schema is helpful for building a PageProvider feeding a ContentView with data from the audit datastorage. An object **BasicAuditSearch** could be used to define queries on the audit datastorage.

## Extending the Audit Service

There a few extension points used to contribute to the Audit Service :

*   event
*   extendedInfo
*   adapter
*   listener

Two others extension points could be defined to configure the datastorage for Audit :

*   hibernate
*   queues

### Event

Those default auditable events match Nuxeo core base events :

*   documentCreated
*   documentCreatedByCopy
*   documentDuplicated
*   documentMoved
*   documentRemoved
*   documentModified
*   documentLocked
*   documentUnlocked
*   documentSecurityUpdated
*   lifecycle_transition_event
*   loginSuccess
*   loginFailed
*   logout
*   documentCheckedIn
*   versionRemoved
*   documentProxyPublished
*   sectionContentPublished
*   documentRestored

If you are sending new Nuxeo core events and want them audited, you have to extend the extension point **event**. Here is an example of a contribution to the extension point event :

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

[More details on the explorer.](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewExtensionPoint/org.nuxeo.ecm.platform.audit.service.NXAuditEventsService--event)

### Extended Info{{> anchor 'extendedinfo'}}

This service is used to evaluate EL expression using document as context registering results into a Map indexed by names.

Just after converting received DocumentMessage instance into the corresponding LogEntry instance, Audit service allows you to extract information from the handling context and to store them.

To do this, you have to define an EL expression and associate it with a key. You can access to the following variables :

*   message : Document message describing the event

*   source : Document from which the event is from

*   principal : Identity of the event owner

If you want to contribute to the extended info of the service, you have to use the extension point **extendedInfo**. Here is an example of a contribution to the extension point :

```xml
<extension point="extendedInfo" target="org.nuxeo.ecm.platform.audit.service.NXAuditEventsService">
    <extendedInfo expression="${source.dublincore.title}" key="title" />
    <extendedInfo expression="${message.cacheKey}" key="key" />
    <extendedInfo expression="${principal.name}" key="user" />
</extension>
```

Since 7.4, you can also extend the audit info per event name:

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

For instance, the above contribution will add _modelId, modelName, worklowInitiator, workflowVarriables_&nbsp;to the&nbsp;**extendedInfo** only for the _afterWorkflowStarted_ event**.**

When the extension point is contributed, the data are stored into the tables NXP_LOGS_EXTINFO and NXP_LOGS_MAPEXTINFOS.

[More details on the explorer.](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewExtensionPoint/org.nuxeo.ecm.platform.audit.service.NXAuditEventsService--extendedInfo)

### Adapter

The contribution to the extension point **adapter** in component&nbsp;**org.nuxeo.ecm.platform.audit.service.NXAuditEventsService** allows to define the adapter that will be injected in EL context. Here is an example of a contribution to the extension point adapter.

```xml
<extension target="org.nuxeo.ecm.platform.audit.service.NXAuditEventsService" point="adapter">
    <adapter name="myadapter" class="org.nuxeo.ecm.core.api.facet.VersioningDocument"/>
</extension>
```

[More details on the explorer.](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewExtensionPoint/org.nuxeo.ecm.platform.audit.service.NXAuditEventsService--adapter)

### Listener

A PostCommit asynchronous listener is defined and pushed an Event Bundle, which is an ordered set of events raised during an user operation, into the Audit log. Here is an example of a contribution to the extension point **listener**.

```xml
<extension target="org.nuxeo.ecm.core.event.EventServiceComponent" point="listener">
	<listener name="auditLoggerListener" async="true" postCommit="true"
    	class="org.nuxeo.ecm.platform.audit.listener.AuditEventLogger" />
</extension>
```

[More details on the explorer.](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewContribution/org.nuxeo.ecm.platform.audit.service.NXAuditEventsService--listener)

### Hibernate

Audit used Hibernate as a JPA provider, the configuration is done in the extension point **hibernate**&nbsp;for the target **org.nuxeo.ecm.core.persistence.PersistenceComponent**. This extension point lets you override the default hibernate configuration.

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

[More details on the explorer.](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewExtensionPoint/org.nuxeo.ecm.core.persistence.PersistenceComponent--hibernate)

### Queues

It is also possible to configure queues used by the Audit Service. Each queue is using a separate queue and a single thread for logging. The extension point used to define the queues' parameters is **queue** for the target&nbsp;**org.nuxeo.ecm.core.work.service**.

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

[More details on the explorer.](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewExtensionPoint/org.nuxeo.ecm.core.work.service--queues)

&nbsp;

&nbsp;
