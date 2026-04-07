---
title: Search Setup for Elasticsearch 9.x
description: Configure Nuxeo LTS 2025 with an Elasticsearch 9.x cluster using the elasticsearch9 search client packages.
review:
    comment: ''
    date: '2026-04-07'
    status: ok
labels:
    - elasticsearch
    - elasticsearch-component
toc: true
confluence:
    ajs-parent-page-id: '20518480'
    ajs-parent-page-title: Search Setup
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
tree_item_index: 1010
---

{{! excerpt}}
Install the Elasticsearch 9.x search client packages, then apply the same configuration steps as on Search setup for OpenSearch 1.x, using the `elasticsearch9` property namespace.
{{! /excerpt}}

In order to use an Elasticsearch 9.x cluster, you need to install the `nuxeo-search-client-elasticsearch9` and `nuxeo-audit-elasticsearch9` packages.

Note that it's not possible to run an Elasticsearch 9 server in the same JVM as Nuxeo Platform.

For cluster sizing and operations, see [Search setup for OpenSearch 1.x and Elasticsearch 7.x–8.x]({{page page='search-setup-opensearch1'}}) where concepts align (your cluster runs Elasticsearch&nbsp;9 instead). Then use the same configuration workflow as on [Search setup]({{page page='search-setup'}}), starting with [Configuring Nuxeo to Access the Search Cluster]({{page page='search-setup'}}#configuring-nuxeo-to-access-the-search-cluster) and the following sections there (reindex, mappings, multi-repository, troubleshooting). In every `nuxeo.conf` property name, replace the `opensearch1` segment with the client key for your search stack (see the example below).

For instance, you will have to use:
```
nuxeo.elasticsearch9.client.server=http://somenode:9200,https://anothernode:443
nuxeo.elasticsearch9.client.username=your_username
...
nuxeo.search.client.default.elasticsearch9.index.name=nuxeo
...
```

## See also

- [Search setup for OpenSearch 1.x and Elasticsearch 7.x–8.x]({{page page='search-setup-opensearch1'}}) — related cluster guidance.
- [Search setup]({{page page='search-setup'}}) — shared sections ([configuring access]({{page page='search-setup'}}#configuring-nuxeo-to-access-the-search-cluster), reindex, mappings, multi-repository, troubleshooting) illustrated with `opensearch1`; use `elasticsearch9` in property names when following those steps with this client.
- [Nuxeo Search Client Elasticsearch]({{page page='nuxeo-search-client-elasticsearch'}}) — Marketplace packages overview.
