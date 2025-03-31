---
title: How to upgrade Nuxeo Audit Service
description: Instructions to upgrade your Nuxeo Project to LTS 2025 - Nuxeo Audit Service Part
review:
   comment: ''
   date: '2025-03-31'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 400
---

## Introduction

{{! excerpt}}
The Nuxeo Platform Audit service has been heavily reworked for reliability, security and future improvements.

This refactoring maintains the backward compatibility with your existing code and contributions to Audit service,
but we highly encourage you to upgrade to the new APIs.
{{! /excerpt}}

## Maven Dependency

The Maven module `org.nuxeo.ecm.platform:nuxeo-platform-audit-api` has been merged into
`org.nuxeo.ecm.platform:nuxeo-platform-audit-core`. You may need to update your pom if you were leveraging it.

Optionally, if your module depends on `org.nuxeo.ecm.platform:nuxeo-platform-audit-core:test-jar` we advise upgrading to
`org.nuxeo.ecm.platform:nuxeo-platform-audit-test`, which brings more features, among others, the `org.nuxeo.audit.test.AuditFeature`
class that correctly configures your test execution.

The Nuxeo Audit Service was also reworked to improve its modularity and make it easier to implement an alternative
backend to store the Nuxeo audit.
See below, the current Maven modules for LTS 2025.0:

```xml
<dependencies>
  ..
  <dependency>
    <groupId>org.nuxeo.ecm.platform</groupId>
    <artifactId>nuxeo-platform-audit-core</artifactId>
  </dependency>
  <dependency>
    <groupId>org.nuxeo.ecm.platform</groupId>
    <artifactId>nuxeo-platform-audit-mongodb</artifactId>
  </dependency>
  <dependency>
    <groupId>org.nuxeo.ecm.platform</groupId>
    <artifactId>nuxeo-platform-audit-opensearch1</artifactId>
  </dependency>
  <dependency>
    <groupId>org.nuxeo.ecm.platform</groupId>
    <artifactId>nuxeo-platform-audit-sql</artifactId>
  </dependency>
  <dependency>
    <groupId>org.nuxeo.ecm.platform</groupId>
    <artifactId>nuxeo-platform-audit-test</artifactId>
    <scope>test</scope>
  </dependency>
  ..
</dependencies>
```

## Java Code

All services or POJO classes you may use from the `org.nuxeo.ecm.platform.audit` package have been migrated to `org.nuxeo.audit` 
or have been replaced. 
This mainly impacts the following usages:

- `org.nuxeo.ecm.platform.audit.api.LogEntry` should be updated to `org.nuxeo.audit.api.LogEntry`
- `AuditAdmin`, `AuditLogger`, `AuditReader` and `Logs` should be updated to `org.nuxeo.audit.service.AuditBackend`

For example, previous Audit Service usage would be:

```java
import org.nuxeo.ecm.platform.audit.api.AuditLogger;
import org.nuxeo.ecm.platform.audit.api.LogEntry;

protected void addAudit(AuditLogger logger, String auditComment, String principalName) {
    LogEntry logEntry = logger.newLogEntry();
    logEntry.setEventId("an event id");
    logEntry.setCategory("an event category");
    logEntry.setEventDate(new Date());
    logEntry.setPrincipalName(principalName);
    logEntry.setComment(auditComment);
    logger.addLogEntries(Collections.singletonList(logEntry));
}
```

This might be converted to:

```java
import org.nuxeo.audit.api.LogEntry;
import org.nuxeo.audit.service.AuditBackend;

protected void addAudit(String auditComment, String principalName) {
    var logEntry = LogEntry.builder("an event id", new Date())
                            .category("an event category")
                            .principalName(principalName)
                            .comment(auditComment)
                            .build();
    Framework.getService(AuditBackend.class).addLogEntries(List.of(logEntry));
}
```

## XML Contributions

Contributions made to `org.nuxeo.ecm.platform.audit.service.NXAuditEventsService` extension points should be updated to the new services.

### Events

Events extension point declaration didn’t change, just the target of the contribution:

```xml
<extension target="org.nuxeo.ecm.platform.audit.service.NXAuditEventsService" point="event">
    <event name="eventNameToAudit" />
</extension>
```

Should be updated to:

```xml
<extension target="org.nuxeo.audit.service.AuditComponent" point="event">
    <event name="eventNameToAudit" />
</extension>
```

### Extended Info

Extended Info extension point didn’t change, just the target of the contributions:

```xml
<extension target="org.nuxeo.ecm.platform.audit.service.NXAuditEventsService" point="extendedInfo">
    <extendedInfo key="title" expression="${source.dublincore.title}" />
</extension>
```

Should be updated to:

```xml
<extension target="org.nuxeo.audit.service.AuditComponent" point="extendedInfo">
    <extendedInfo key="title" expression="${source.dublincore.title}" />
</extension>
```

## Operation

The `Audit.Query` operation has been removed from contributed operations because it was tied to SQL Audit Backend.

If you were using it, we advise migrating your usage to the `Audit.QueryWithPageProvider`, which does the same thing
while being compatible with all backend implementations.

Otherwise you can still register back the Operation if you are using SQL Audit Backend:

```xml
<extension target="org.nuxeo.ecm.core.operation.OperationServiceComponent" point="operations">
  <operation class="org.nuxeo.ecm.automation.core.operations.services.AuditQuery" />
</extension>
```

The `Audit.QueryWithPageProvider` now supports NXQL for the `query` parameter to query your Audit.

## Nuxeo Server Configuration

{{#> callout type='warning' }}
Nuxeo Server is now provided with an in memory implementation for Audit storage, this default implementation is for 
testing purpose only which means that you need to explicitly install a Marketplace Package to store the audit in MongoDB,
OpenSearch or a SQL database.
{{/callout}}

### Audit in OpenSearch

To store the Nuxeo audit in OpenSearch you need to install the [nuxeo-audit-opensearch1](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-audit-opensearch1)
package.
After installation, check that the `opensearch1-audit` template is included in your `nuxeo.conf` file. The template
will enable the OpenSearch Audit Backend. The previous `audit.elasticsearch.enabled` configuration property has no more effect.

Previously, the ElasticSearch / OpenSearch configuration property for Audit looked like:

```properties
# generic
elasticsearch.addressList=http://localhost:9200
elasticsearch.index.translog.durability=request
elasticsearch.indexNumberOfShards=5
elasticsearch.indexNumberOfReplicas=1
elasticsearch.restClient.connectionTimeoutMs=30000
elasticsearch.restClient.socketTimeoutMs=121000
elasticsearch.restClient.ssl.certificate.verification=true

# optional
elasticsearch.restClient.username=
elasticsearch.restClient.password=
elasticsearch.restClient.truststore.path=
elasticsearch.restClient.truststore.password=
elasticsearch.restClient.truststore.type=
elasticsearch.restClient.keystore.path=
elasticsearch.restClient.keystore.password=
elasticsearch.restClient.keystore.type=

# audit specific
audit.elasticsearch.indexName=${elasticsearch.indexName}-audit
audit.elasticsearch.latestLogId.afterDate=now-14d/d
```

Now you will configure OpenSearch 1 / ElasticSearch 7 or 8 connection with:

```properties
# generic
nuxeo.opensearch1.client.server=http://localhost:9200

nuxeo.opensearch1.client.connectionTimeout=3s
nuxeo.opensearch1.client.socketTimeout=121s
nuxeo.opensearch1.client.sslCertificateVerification=true

# optional
nuxeo.opensearch1.client.username=
nuxeo.opensearch1.client.password=
nuxeo.opensearch1.client.trustStore.path=
nuxeo.opensearch1.client.trustStore.password=
nuxeo.opensearch1.client.trustStore.type=
nuxeo.opensearch1.client.keyStore.path=
nuxeo.opensearch1.client.keyStore.password=
nuxeo.opensearch1.client.keyStore.type=

# audit specific
nuxeo.audit.backend.default.opensearch1.index.name=nuxeo-audit
nuxeo.audit.backend.default.opensearch1.settings.indexTranslogDurability=request
nuxeo.audit.backend.default.opensearch1.settings.numberOfShards=5
nuxeo.audit.backend.default.opensearch1.settings.numberOfReplicas=1
nuxeo.audit.opensearch1.latestLogId.afterDate=now-14d/d
```

### Audit in MongoDB

To store the Nuxeo audit in MongoDB you need to install the [nuxeo-audit-mongodb](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-audit-mongodb)
package.
After installation, check that the `mongodb-audit` template is included in your `nuxeo.conf` file. The template
will enable the MongoDB Audit Backend.

The package works with your `nuxeo.mongodb.*` configuration properties, as before. The only property to update is:
`nuxeo.mongodb.audit.collection.name`, see new configuration properties:

```properties
nuxeo.audit.backend.default.mongodb.collection.name=audit

# all nuxeo.mongodb.* properties are available for audit backend, for instance
nuxeo.audit.backend.default.mongodb.dbname=nuxeo
```

The extended info is now stored as an Object in MongoDB instead of a plain String. This enables the search in extended 
info feature.

If you want to preserve the previous behavior, set this parameter in your `nuxeo.conf`:

```properties
nuxeo.audit.backend.mongodb.extended.json.as.object=false
```

### Audit In SQL - Hibernate (Legacy)

To store the Nuxeo audit in your SQL DB you need to install the [nuxeo-audit-sql](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-audit-sql)
package.
After installation, check that the `sql-audit` template is included in your `nuxeo.conf` file. The template
will enable the SQL Audit Backend.

The package works with the Nuxeo Common DataSource by registering a `DataSource` link.
