---
title: 'Nuxeo Search Client Elasticsearch'
description: Documentation page about the Nuxeo Elasticsearch packages. 
tree_item_index: 2595
review:
  comment: ''
  date: '2026-04-07'
  status: ok
toc: true
---

Since Nuxeo LTS 2025, you have to explicitly choose and install a SearchClient package. By default, the SearchService will be configured with a Repository SearchClient that is using the underlying repository data store (VCS or DBS) with limited capabilities regarding fulltext search, aggregation and scalability.
Therefore, we provide Elasticsearch packages to rely on this external search engine:
- For Elasticsearch 7.x or 8.x, install the `nuxeo-search-client-opensearch1` package.
- For Elasticsearch 9.x, install the `nuxeo-search-client-elasticsearch9` package.

## Installation 

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Configuration 

For configuration of Elasticsearch 7.x or 8.x (via the `nuxeo-search-client-opensearch1` package), see **[Search setup for OpenSearch 1.x and Elasticsearch 7.x–8.x]({{page page='search-setup-opensearch1'}})** and the shared procedures on [Search setup]({{page page='search-setup'}}). For Elasticsearch 9.x, see **[Search setup for Elasticsearch 9.x]({{page page='search-setup-elasticsearch9'}})** and reuse those shared steps with the `elasticsearch9` namespace.

