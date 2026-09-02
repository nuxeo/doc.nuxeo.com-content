---
title: Elasticsearch 9.x Audit Backend
description: Elasticsearch 9.x Audit Backend for Nuxeo — installation, available configuration properties.
review:
    comment: ''
    date: '2026-09-02'
    status: ok
labels:
    - audit
    - elasticsearch9
toc: true
tree_item_index: 750
---

{{! excerpt}}
The Elasticsearch 9.x Audit Backend stores log entries in an Elasticsearch 9.x cluster.
{{! /excerpt}}

## Installation

Install the `nuxeo-audit-elasticsearch9` Marketplace Package.

It deploys the `elasticsearch9-audit` template, which sets
`nuxeo.audit.backend.default.factory` to
`org.nuxeo.audit.elasticsearch9.ElasticsearchAuditBackendFactory` and
contributes a default `audit/default` Elasticsearch client and index named
`nuxeo-audit`.

{{#> callout type='warning' }}
Make sure you read the [Backing Up and Restoring the Audit Elasticsearch Index]({{page page='backup-and-restore'}}#backingupandrestoringtheauditelasticsearchindex) section.
{{/callout}}

## Configuration

### Backend

| Property                                                          | Default                                              | Description                                            |
|-------------------------------------------------------------------|------------------------------------------------------|--------------------------------------------------------|
| `nuxeo.audit.backend.default.factory`                             | `…elasticsearch9.ElasticsearchAuditBackendFactory`   | Factory class used by the default backend.             |
| `nuxeo.audit.backend.default.elasticsearch9.enabled`              | `true`                                               | Enables/disables the default Elasticsearch 9.x backend.|
| `nuxeo.audit.backend.default.elasticsearch9.index.name`           | `nuxeo-audit`                                        | Index name.                                            |
| `nuxeo.audit.elasticsearch9.latestLogId.afterDate`                | `now-14d/d`                                          | Elastic date math used by `getLatestLogId`.            |

### Client

| Property                                                                             | Default     | Description                                            |
|--------------------------------------------------------------------------------------|-------------|--------------------------------------------------------|
| `nuxeo.audit.backend.default.elasticsearch9.client.server`                           |             | Comma-separated list of node URLs.                     |
| `nuxeo.audit.backend.default.elasticsearch9.client.connectionTimeout`                | `30s`       | Connection timeout.                                    |
| `nuxeo.audit.backend.default.elasticsearch9.client.socketTimeout`                    | `121000ms`  | Socket timeout.                                        |
| `nuxeo.audit.backend.default.elasticsearch9.client.sslCertificateVerification`       | `true`      | Whether to verify the SSL certificate.                 |
| `nuxeo.audit.backend.default.elasticsearch9.client.username`                         |             | Basic auth username.                                   |
| `nuxeo.audit.backend.default.elasticsearch9.client.password`                         |             | Basic auth password.                                   |
| `nuxeo.audit.backend.default.elasticsearch9.client.trustStore.path`                  |             | Path to a truststore.                                  |
| `nuxeo.audit.backend.default.elasticsearch9.client.trustStore.password`              |             | Truststore password.                                   |
| `nuxeo.audit.backend.default.elasticsearch9.client.trustStore.type`                  |             | Truststore type (for example, `JKS`).                          |
| `nuxeo.audit.backend.default.elasticsearch9.client.keyStore.path`                    |             | Path to a keystore.                                    |
| `nuxeo.audit.backend.default.elasticsearch9.client.keyStore.password`                |             | Keystore password.                                     |
| `nuxeo.audit.backend.default.elasticsearch9.client.keyStore.type`                    |             | Keystore type.                                         |

### Index settings

| Property                                                                             | Default   | Description                                |
|--------------------------------------------------------------------------------------|-----------|--------------------------------------------|
| `nuxeo.audit.backend.default.elasticsearch9.settings.indexTranslogDurability`        | `request` | Index translog durability.                 |
| `nuxeo.audit.backend.default.elasticsearch9.settings.numberOfShards`                 | `5`       | Number of primary shards.                  |
| `nuxeo.audit.backend.default.elasticsearch9.settings.numberOfReplicas`               | `1`       | Number of replicas.                        |
| `nuxeo.audit.backend.default.elasticsearch9.settings.ignoreMalformed`                | `true`    | Ignore malformed values during indexing.   |

## Migrating From Another Backend

To move existing audit entries from another backend to this one — for instance when upgrading from OpenSearch 1.x — copy the audit backend rather than copying the index at cluster level. See [Copy an Audit Backend]({{page page='copy-audit-backend'}}) and [Migrating Search Technology]({{page page='search-setup-migration'}}).

## Learn More

- [Audit]({{page page='audit'}})
- [Audit Router]({{page page='audit-router'}})
- [Elasticsearch 9.x Search Setup]({{page page='search-setup-elasticsearch9'}})
