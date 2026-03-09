---
title: LTS 2025.16 / LTS 2025-HF16
description: Discover what's new in LTS 2025.16 / LTS 2025-HF16
review:
   comment: ''
   date: '2026-03-04'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2025-16'}}
# What's New in LTS 2025.16 / LTS 2025-HF16

## Management API Could Report Usage to Audit

An event is fired for every access to the Management API

The `managementApiAccess` event is fired for all authenticated request to the Management API. The event context holds the `HttpServletRequest` as argument, which enables users to easily contribute the event and its extendedInfo mappers to the Audit service. For instance:

```
  <extension target="org.nuxeo.audit.service.AuditComponent" point="routes">
    <route name="default">
      <event name="managementApiAccess" />
    </route>
  </extension>

  <extension target="org.nuxeo.audit.service.AuditComponent" point="extendedInfo">
    <extendedInfo event="managementApiAccess" expression="${message.arguments[0].method}" key="method" />
    <extendedInfo event="managementApiAccess" expression="${message.arguments[0].requestURI}" key="requestURI" />
    <extendedInfo event="managementApiAccess" expression="${message.arguments[0].queryString}" key="queryString" />
    <extendedInfo event="managementApiAccess" expression="${message.arguments[0].contentLength}" key="contentLength" />
    <extendedInfo event="managementApiAccess" expression="${message.arguments[0].getHeader('Accept')}" key="headerAccept" />
  </extension>
```

## Query a Non Default Audit Backend API

Query another Audit Backend than the default one.

The property `backend` was added to the `AuditPageProvider` page provider allowing callers to query a different audit backend than the default one.See the following example:

```
<genericPageProvider name="myAuditPageProvider" class="org.nuxeo.audit.provider.AuditPageProvider">
  <backend>another_backend</backend>
  <searchDocumentType>BasicAuditSearch</searchDocumentType>
  <whereClause>
    <predicate parameter="eventDate" operator="BETWEEN">
      <field schema="basicauditsearch" name="startDate" />
      <field schema="basicauditsearch" name="endDate" />
    </predicate>
    <predicate parameter="category" operator="IN">
      <field schema="basicauditsearch" name="eventCategories" />
    </predicate>
    <predicate parameter="eventId" operator="IN">
      <field schema="basicauditsearch" name="eventIds" />
    </predicate>
    <predicate parameter="principalName" operator="IN">
      <field schema="basicauditsearch" name="principalNames" />
    </predicate>
  </whereClause>
  <sort column="eventDate" ascending="false" />
  <pageSize>10</pageSize>
  <maxPageSize>1000</maxPageSize>
</genericPageProvider>
```

The parameter `backendName` was added to the `Audit.QueryWithPageProvider` (`Audit.PageProvider`) operation, allowing callers to query a different audit backend than the default one.

## Introduce New Nuxeo User Preferences Modules

New Rest API endpoints are available to manage user preferences.

New Rest API endpoints:

- /me/preferences for global user preferences:
  - Create / Update a preference`PUT http://NUXEO_SERVER/nuxeo/api/v1/me/preferences/foo -d "bar"`
  ```
{
  "entity-type": "userPreference",
  "key": "foo",
  "value": "bar"
}
```
- Get all user preferences`GET http://NUXEO_SERVER/nuxeo/api/v1/me/preferences`
  ```
{
  "entity-type": "userPreferences",
  "preferences": {
    "foo": "bar",
    "anotherKey": "anotherValue"
  }
}
```
- Get a single preference value`GET http://NUXEO_SERVER/nuxeo/api/v1/me/preferences/foo`
- Delete a single preference`DELETE http://NUXEO_SERVER/nuxeo/api/v1/me/preferences/foo`
- @preferences document adapter for document-related user preferences:
  - Create / Update document preferences
  `PUT http://NUXEO_SERVER/nuxeo/api/v1/path/default-domain/@preferences`
  ```
{
  "entity-type": "userPreferences",
  "preferences": {
    "key1": "value1",
    "key2": "value2"
  }
}
```
- Get all document preferences`GET http://NUXEO_SERVER/nuxeo/api/v1/path/default-domain/@preferences`
- Get a single document preference`GET http://NUXEO_SERVER/nuxeo/api/v1/path/default-domain/@preferences/key1`
- Remove a single document preference`DELETE http://NUXEO_SERVER/nuxeo/api/v1/path/default-domain/@preferences/key1`
- Delete all document preferences`DELETE http://NUXEO_SERVER/nuxeo/api/v1/path/default-domain/@preferences`
- userPreferences Document Content EnricherWhen fetching a document, the `userPreferences` enricher adds the current user preferences to this document:`GET http://NUXEO_SERVER/nuxeo/api/v1/path/default-domain?enrichers.document=userPreferences`
  ```
{
  "entity-type": "document",
  ...
  "contextParameters": {
    ...
    "userPreferences": {
      "entity-type": "userPreferences",
      "preferences": {
        "key1": "value1",
        "key2": "value2"
      }
    }
  }
}
```

Nuxeo configuration properties:

- `nuxeo.user.preferences.max` defines the maximum number of preferences per user; the default is `2000`
- `nuxeo.user.preferences.sanitizeValues.enabled` defines whether HTML sanitization is performed on preference values before persisting them; the default is `true`
- `nuxeo.user.preferences.listeners.userDeleted.enabled` defines whether preferences should be deleted after the owner is deleted; the default is `true`
- `nuxeo.bulk.action.userPreferencesGC.enabled` defines whether document-related preferences should be deleted after the related document is deleted; the default is `true`

## Introduce a Contribuable Audit Router

Configure Audit Router to ingest Log Entries to different Backends.

The Audit ingestion mechanism has been improved to leverage the introduced Audit Router service.

You can now contribute Audit routes to write log entries to different audit backend. For instance, if you want to write the log entries of a specific event to a secondary audit backend named `other`, you can contribute the following:

```
<extension target="org.nuxeo.audit.service.AuditComponent" point="routes">
  <route name="other">
    <backend name="other" />
    <event name="specificEvent" />
  </route>
</extension>
```

### Audit Router

Nuxeo Server declares only the `default` route that ingests the default events into the `default` audit backend. Here’s an extract:

```
<extension target="org.nuxeo.audit.service.AuditComponent" point="routes">
  <route name="default">
    <backend name="default" />
    <event name="loginSuccess" />
    <event name="loginFailed" />
    <event name="logout" />
    <event name="documentCreated" />
    <event name="documentCreatedByCopy" />
    ...
  </route>
</extension>
```

That means, for every event fired through the `EventService`, the ones registered within an audit route will be converted to audit log entries, like previously.

Then, audit routes are all evaluated against each log entries, and each log entry matching a route is written to the corresponding backend.

This is a two steps process: convert events to log entries and then route them to audit backends.

#### Events to Log Entries

At startup, the Audit Router extracts all contributed `event` from enabled `route` to convert latter the events to log entries.

For example, with the previous `other` route, the Audit Router will convert all default events contributed to the `default` route and the `specificEvent` events from the `other` route. The log entries are then passed to the routing engine.

#### Routing Engine

The Audit Router tests each log entries against each route to compute which audit backend will receive the log entry.

For example, with the previous `other` route, the Audit Router will compute that all default events contributed to the `default` route will be written to the `default` audit backend and the `specificEvent` events from the `other` route will be written to the `other` backend.

Another addition to the Audit Router service is the audit route predicates that can be contributed.

For example, with the previous `other` route, the `specificEvent` event can be of two categories, `catA` and `catB`, and we would like to route them to different audit backends. This is doable with:

```
<extension target="org.nuxeo.audit.service.AuditComponent" point="routes">
  <route name="other-catA">
    <backend name="otherA" />
    <predicate class="org.nuxeo.audit.service.route.CategoryLogEntryPredicate">
      <property name="category">catA</property>
    </predicate>
    <event name="specificEvent" />
  </route>
  <route name="other-catB">
    <backend name="otherB" />
    <predicate class="org.nuxeo.audit.service.route.CategoryLogEntryPredicate">
      <property name="category">catB</property>
    </predicate>
    <event name="specificEvent" />
  </route>
</extension>
```

The contributed `predicate` class must implement `Predicate<LogEntry>` and have a constructor taking `Map<String, String>` as parameter for contributed `property`.

Logical relation of contributed elements are:

- routes are ORed
- predicates AND events
- predicates are ORed
- events are ORed

## Create a Management API to Retrieve Routes

Introduce the Audit Management REST API.

The `GET /nuxeo/api/v1/management/audit/introspection` endpoint has been added to Nuxeo.

It allows retrieving of the Audit Router introspection as a PlantUML file.

{{! /multiexcerpt}}
