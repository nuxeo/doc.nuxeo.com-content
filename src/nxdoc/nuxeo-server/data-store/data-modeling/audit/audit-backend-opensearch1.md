---
title: OpenSearch 1.x / Elasticsearch 7-8 Audit Backend
description: OpenSearch 1.x / Elasticsearch 7-8 Audit Backend for Nuxeo — installation, available configuration properties.
review:
    comment: ''
    date: '2026-05-07'
    status: ok
labels:
    - audit
    - opensearch1
    - elasticsearch
toc: true
tree_item_index: 730
---

{{! excerpt}}
The OpenSearch 1.x Audit Backend stores log entries in an OpenSearch 1.x or
Elasticsearch 7.x – 8.x cluster. This package replaces the legacy Elasticsearch-based audit backend.
{{! /excerpt}}

## Installation

Install the `nuxeo-audit-opensearch1` Marketplace Package.

It deploys the `opensearch1-audit` template, which sets
`nuxeo.audit.backend.default.factory` to
`org.nuxeo.audit.opensearch1.OpenSearchAuditBackendFactory` and contributes a
default `audit/default` OpenSearch client and index.

{{#> callout type='warning' }}
Make sure you read the [Backing Up and Restoring the Audit Elasticsearch Index]({{page page='backup-and-restore'}}#backingupandrestoringtheauditelasticsearchindex) section.
{{/callout}}

For more information about the global Elasticsearch / OpenSearch setup, see
[OpenSearch 1.x Search Setup]({{page page='search-setup-opensearch1'}}).

## Configuration

The audit backend reuses the OpenSearch 1.x infrastructure deployed by
`nuxeo-opensearch1`. When the `nuxeo-opensearch1-embed` Marketplace Package
is installed alongside, the audit backend reuses the embedded OpenSearch
node deployed by that package (controlled internally by the
`nuxeo.opensearch1.embed.enabled` flag). The embed package is intended for
development only and is not supported in production.

### Backend

| Property                                                          | Default                                                          | Description                                                                                                                            |
|-------------------------------------------------------------------|------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `nuxeo.audit.backend.default.factory`                             | `…opensearch1.OpenSearchAuditBackendFactory`                     | Factory class used by the default backend.                                                                                             |
| `nuxeo.audit.backend.default.opensearch1.enabled`                 | `true`                                                           | Enables/disables the default OpenSearch 1.x backend.                                                                                   |
| `nuxeo.audit.backend.default.opensearch1.index.name`              | `${audit.elasticsearch.indexName:=${elasticsearch.indexName:=nuxeo}-audit}` | Index name. Replaces the legacy `audit.elasticsearch.indexName` property.                                                    |
| `nuxeo.audit.opensearch1.latestLogId.afterDate`                   | `now-14d/d`                                                      | Elastic date math used by `getLatestLogId` to bound the lookup window. Improves performance on large indices.                          |

### Client

The audit ingestion uses a dedicated `audit/default` OpenSearch client. Each
property falls back to its `nuxeo.opensearch1.*` equivalent and then to the
legacy `elasticsearch.restClient.*` property.

| Property                                                                          | Default     | Description                                            |
|-----------------------------------------------------------------------------------|-------------|--------------------------------------------------------|
| `nuxeo.audit.backend.default.opensearch1.client.server`                           |             | Comma-separated list of node URLs.                     |
| `nuxeo.audit.backend.default.opensearch1.client.connectionTimeout`                | `30s`       | Connection timeout.                                    |
| `nuxeo.audit.backend.default.opensearch1.client.socketTimeout`                    | `121000ms`  | Socket timeout.                                        |
| `nuxeo.audit.backend.default.opensearch1.client.sslCertificateVerification`       | `true`      | Whether to verify the SSL certificate.                 |
| `nuxeo.audit.backend.default.opensearch1.client.username`                         |             | Basic auth username.                                   |
| `nuxeo.audit.backend.default.opensearch1.client.password`                         |             | Basic auth password.                                   |
| `nuxeo.audit.backend.default.opensearch1.client.trustStore.path`                  |             | Path to a truststore.                                  |
| `nuxeo.audit.backend.default.opensearch1.client.trustStore.password`              |             | Truststore password.                                   |
| `nuxeo.audit.backend.default.opensearch1.client.trustStore.type`                  |             | Truststore type (for example, `JKS`).                          |
| `nuxeo.audit.backend.default.opensearch1.client.keyStore.path`                    |             | Path to a keystore.                                    |
| `nuxeo.audit.backend.default.opensearch1.client.keyStore.password`                |             | Keystore password.                                     |
| `nuxeo.audit.backend.default.opensearch1.client.keyStore.type`                    |             | Keystore type.                                         |

### Index settings

| Property                                                                          | Default   | Description                                |
|-----------------------------------------------------------------------------------|-----------|--------------------------------------------|
| `nuxeo.audit.backend.default.opensearch1.settings.indexTranslogDurability`        | `request` | Index translog durability.                 |
| `nuxeo.audit.backend.default.opensearch1.settings.numberOfShards`                 | `5`       | Number of primary shards.                  |
| `nuxeo.audit.backend.default.opensearch1.settings.numberOfReplicas`               | `1`       | Number of replicas.                        |
| `nuxeo.audit.backend.default.opensearch1.settings.ignoreMalformed`                | `true`    | Ignore malformed values during indexing.   |

## Learn More

- [Audit]({{page page='audit'}})
- [Audit Router]({{page page='audit-router'}})
- [OpenSearch 1.x Search Setup]({{page page='search-setup-opensearch1'}})
