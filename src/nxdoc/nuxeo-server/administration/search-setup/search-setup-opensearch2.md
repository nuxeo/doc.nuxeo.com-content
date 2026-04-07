---
title: Search Setup for OpenSearch 2.x
description: Configure Nuxeo LTS 2025 with an OpenSearch 2.x cluster using the opensearch2 search client packages.
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
tree_item_index: 1005
---

{{! excerpt}}
Install the OpenSearch 2.x search client packages, then apply the same configuration steps as on Search setup for OpenSearch 1.x, using the `opensearch2` property namespace.
{{! /excerpt}}

In order to use an OpenSearch 2.x cluster, you need to install the `nuxeo-search-client-opensearch2` and `nuxeo-audit-opensearch2` packages.

If you want to set up an OpenSearch server that runs in the same JVM as the Nuxeo Platform's, you have to install explicitly the `nuxeo-opensearch2-embed` package. For production, you need to set up a Search cluster.

Install and tune your cluster following [Search setup for OpenSearch 1.x and Elasticsearch 7.x–8.x]({{page page='search-setup-opensearch1'}}) where the workflow matches (OpenSearch 2.x instead of OpenSearch 1.x). Then use the same configuration workflow as on [Search setup]({{page page='search-setup'}}), starting with [Configuring Nuxeo to Access the Search Cluster]({{page page='search-setup'}}#configuring-nuxeo-to-access-the-search-cluster) and the following sections there (reindex, mappings, multi-repository, troubleshooting). In every `nuxeo.conf` property name, replace the `opensearch1` segment with the client key for your search stack (see the example below).

For instance, you will have to use:
```
nuxeo.opensearch2.client.server=http://somenode:9200,https://anothernode:443
nuxeo.opensearch2.client.username=your_username
...
nuxeo.search.client.default.opensearch2.index.name=nuxeo
...
```

## See also

- [Search setup for OpenSearch 1.x and Elasticsearch 7.x–8.x]({{page page='search-setup-opensearch1'}}) — cluster install and tuning for the `opensearch1` stack.
- [Search setup]({{page page='search-setup'}}) — shared sections ([configuring access]({{page page='search-setup'}}#configuring-nuxeo-to-access-the-search-cluster), reindex, mappings, multi-repository, troubleshooting) illustrated with `opensearch1`; use `opensearch2` in property names when following those steps with this client.
- [Nuxeo Search Client OpenSearch]({{page page='nuxeo-search-client-opensearch'}}) — Marketplace packages overview.
