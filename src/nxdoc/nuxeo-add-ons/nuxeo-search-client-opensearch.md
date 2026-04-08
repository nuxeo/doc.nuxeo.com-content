---
title: 'Nuxeo Search Client OpenSearch'
description: Documentation page about the Nuxeo OpenSearch packages. 
tree_item_index: 2590
review:
  comment: ''
  date: '2026-04-07'
  status: ok
toc: true
---

Since Nuxeo LTS 2025, you have to explicitly choose and install a SearchClient package. By default, the SearchService will be configured with a Repository SearchClient that is using the underlying repository data store (VCS or DBS) with limited capabilities regarding fulltext search, aggregation and scalability.
Therefore, we provide 2 OpenSearch packages to rely on this external search engine:
- For OpenSearch 1.x, you need to install the `nuxeo-search-client-opensearch1` package.
- For OpenSearch 2.x, you need to install the `nuxeo-search-client-opensearch2` package.

## Installation 

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Configuration 

For configuration of the OpenSearch 1.x / Elasticsearch 7–8 client, see **[Search setup for OpenSearch 1.x and Elasticsearch 7.x–8.x]({{page page='search-setup-opensearch1'}})** and the shared procedures on [Search setup]({{page page='search-setup'}}) (`opensearch1` examples). For OpenSearch 2.x, see **[Search setup for OpenSearch 2.x]({{page page='search-setup-opensearch2'}})** and reuse those shared steps with the `opensearch2` namespace.

