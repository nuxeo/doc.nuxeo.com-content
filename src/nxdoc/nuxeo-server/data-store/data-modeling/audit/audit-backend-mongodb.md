---
title: MongoDB Audit Backend
description: MongoDB Audit Backend for Nuxeo — installation, available configuration properties.
review:
    comment: ''
    date: '2026-05-07'
    status: ok
labels:
    - audit
    - mongodb
    - mongodb-component
toc: true
tree_item_index: 720
---

{{! excerpt}}
The MongoDB Audit Backend stores log entries in a MongoDB collection.
{{! /excerpt}}

## Installation

Install the `nuxeo-audit-mongodb` Marketplace Package.

It deploys the `mongodb-audit` template, which sets `nuxeo.audit.backend.default.factory`
to `org.nuxeo.audit.mongodb.MongoDBAuditBackendFactory` and contributes a
default `audit/default` MongoDB connection.

By default the entries are stored in the `audit` collection, fed by the `audit`
database (the connection inherits the `nuxeo.mongodb.*` properties).

## Configuration

### Backend

| Property                                                | Default                                  | Description                                                  |
|---------------------------------------------------------|------------------------------------------|--------------------------------------------------------------|
| `nuxeo.audit.backend.default.factory`                   | `…MongoDBAuditBackendFactory`            | Factory class used by the default backend.                   |
| `nuxeo.audit.backend.default.mongodb.enabled`           | `true`                                   | Enables/disables the default MongoDB backend.                |
| `nuxeo.audit.backend.default.mongodb.collection.name`   | `${nuxeo.mongodb.audit.collection.name:=audit}` | Name of the MongoDB collection storing log entries.   |

### Connection

The MongoDB Audit Backend uses a dedicated `audit/default` MongoDB connection.
By default each property falls back to the corresponding `nuxeo.mongodb.*`
property already configured for the repository.

| Property                                                       | Falls back to                       |
|----------------------------------------------------------------|-------------------------------------|
| `nuxeo.audit.backend.default.mongodb.server`                   | `nuxeo.mongodb.server`              |
| `nuxeo.audit.backend.default.mongodb.dbname`                   | `nuxeo.mongodb.dbname`              |
| `nuxeo.audit.backend.default.mongodb.ssl`                      | `nuxeo.mongodb.ssl`                 |
| `nuxeo.audit.backend.default.mongodb.truststore.path`          | `nuxeo.mongodb.truststore.path`     |
| `nuxeo.audit.backend.default.mongodb.truststore.password`      | `nuxeo.mongodb.truststore.password` |
| `nuxeo.audit.backend.default.mongodb.truststore.type`          | `nuxeo.mongodb.truststore.type`     |
| `nuxeo.audit.backend.default.mongodb.keystore.path`            | `nuxeo.mongodb.keystore.path`       |
| `nuxeo.audit.backend.default.mongodb.keystore.password`        | `nuxeo.mongodb.keystore.password`   |
| `nuxeo.audit.backend.default.mongodb.keystore.type`            | `nuxeo.mongodb.keystore.type`       |

Set any of those properties in `nuxeo.conf` to point the audit to a separate
MongoDB cluster than the repository.

## Learn More

- [Audit]({{page page='audit'}})
- [Audit Router]({{page page='audit-router'}})
- [MongoDB Setup]({{page page='mongodb'}})
