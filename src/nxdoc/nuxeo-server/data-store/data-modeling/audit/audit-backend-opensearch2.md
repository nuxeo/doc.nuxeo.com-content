---
title: OpenSearch 2.x Audit Backend
description: OpenSearch 2.x Audit Backend for Nuxeo — installation, available configuration properties.
review:
    comment: ''
    date: '2026-09-02'
    status: ok
labels:
    - audit
    - opensearch2
toc: true
tree_item_index: 740
---

{{! excerpt}}
The OpenSearch 2.x Audit Backend stores log entries in an OpenSearch 2.x cluster.
{{! /excerpt}}

## Installation

Install the `nuxeo-audit-opensearch2` Marketplace Package.

It deploys the `opensearch2-audit` template, which sets
`nuxeo.audit.backend.default.factory` to
`org.nuxeo.audit.opensearch2.OpenSearchAuditBackendFactory` and contributes a
default `audit/default` OpenSearch client and index named `nuxeo-audit`.

{{#> callout type='warning' }}
Make sure you read the [Backing Up and Restoring the Audit Elasticsearch Index]({{page page='backup-and-restore'}}#backingupandrestoringtheauditelasticsearchindex) section.
{{/callout}}

## Configuration

The audit backend reuses the OpenSearch 2.x infrastructure deployed by
`nuxeo-opensearch2`. When the `nuxeo-opensearch2-embed` Marketplace Package
is installed alongside, the audit backend reuses the embedded OpenSearch
node deployed by that package (controlled internally by the
`nuxeo.opensearch2.embed.enabled` flag). The embed package is intended for
development only and is not supported in production.

### Backend

| Property                                                       | Default                                          | Description                                          |
|----------------------------------------------------------------|--------------------------------------------------|------------------------------------------------------|
| `nuxeo.audit.backend.default.factory`                          | `…opensearch2.OpenSearchAuditBackendFactory`     | Factory class used by the default backend.           |
| `nuxeo.audit.backend.default.opensearch2.enabled`              | `true`                                           | Enables/disables the default OpenSearch 2.x backend. |
| `nuxeo.audit.backend.default.opensearch2.index.name`           | `nuxeo-audit`                                    | Index name.                                          |
| `nuxeo.audit.opensearch2.latestLogId.afterDate`                | `now-14d/d`                                      | Elastic date math used by `getLatestLogId`.          |

### Client

The audit ingestion uses a dedicated `audit/default` OpenSearch client. Each
property falls back to its `nuxeo.opensearch2.*` equivalent.

| Property                                                                          | Default     | Description                                            |
|-----------------------------------------------------------------------------------|-------------|--------------------------------------------------------|
| `nuxeo.audit.backend.default.opensearch2.client.server`                           |             | Comma-separated list of node URLs.                     |
| `nuxeo.audit.backend.default.opensearch2.client.connectionTimeout`                | `30s`       | Connection timeout.                                    |
| `nuxeo.audit.backend.default.opensearch2.client.socketTimeout`                    | `121000ms`  | Socket timeout.                                        |
| `nuxeo.audit.backend.default.opensearch2.client.sslCertificateVerification`       | `true`      | Whether to verify the SSL certificate.                 |
| `nuxeo.audit.backend.default.opensearch2.client.username`                         |             | Basic auth username.                                   |
| `nuxeo.audit.backend.default.opensearch2.client.password`                         |             | Basic auth password.                                   |
| `nuxeo.audit.backend.default.opensearch2.client.trustStore.path`                  |             | Path to a truststore.                                  |
| `nuxeo.audit.backend.default.opensearch2.client.trustStore.password`              |             | Truststore password.                                   |
| `nuxeo.audit.backend.default.opensearch2.client.trustStore.type`                  |             | Truststore type (for example, `JKS`).                          |
| `nuxeo.audit.backend.default.opensearch2.client.keyStore.path`                    |             | Path to a keystore.                                    |
| `nuxeo.audit.backend.default.opensearch2.client.keyStore.password`                |             | Keystore password.                                     |
| `nuxeo.audit.backend.default.opensearch2.client.keyStore.type`                    |             | Keystore type.                                         |

### Index settings

| Property                                                                          | Default   | Description                                |
|-----------------------------------------------------------------------------------|-----------|--------------------------------------------|
| `nuxeo.audit.backend.default.opensearch2.settings.indexTranslogDurability`        | `request` | Index translog durability.                 |
| `nuxeo.audit.backend.default.opensearch2.settings.numberOfShards`                 | `5`       | Number of primary shards.                  |
| `nuxeo.audit.backend.default.opensearch2.settings.numberOfReplicas`               | `1`       | Number of replicas.                        |
| `nuxeo.audit.backend.default.opensearch2.settings.ignoreMalformed`                | `true`    | Ignore malformed values during indexing.   |

## Migrating From Another Backend

To move existing audit entries from another backend to this one — for instance when upgrading from OpenSearch 1.x — copy the audit backend rather than copying the index at cluster level. See [Copy an Audit Backend]({{page page='copy-audit-backend'}}) and [Migrating Search Technology]({{page page='search-setup-migration'}}).

## Learn More

- [Audit]({{page page='audit'}})
- [Audit Router]({{page page='audit-router'}})
- [OpenSearch 2.x Search Setup]({{page page='search-setup-opensearch2'}})
