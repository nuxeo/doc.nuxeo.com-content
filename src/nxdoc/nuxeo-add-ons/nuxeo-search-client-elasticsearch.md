---
title: 'Nuxeo Search Client Elasticsearch'
description: Documentation page about the Nuxeo Elasticsearch packages. 
tree_item_index: 2595
review:
  comment: ''
  date: '2025-10-01'
  status: ok
toc: true
---

Since Nuxeo LTS 2025, you have to explicitly choose and install a SearchClient package. By default, the SearchService will be configured with a Repository SearchClient that is using the underlying repository data store (VCS or DBS) with limited capabilities regarding fulltext search, aggregation and scalability.
Therefore, we provide Elasticsearch packages to rely on this external search engine:
- For Elasticsearch 7.x or 8.x, you need to install the`nuxeo-search-client-opensearch1` package.
- For Elasticsearch 9.x, you need to install the`nuxeo-search-client-elasticsearch9` package.

## Installation 

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Configuration 

For more information about the configuration of the Elasticsearch package, please read the [Search documentation]({{page page='search-setup'}}#setting-up-an-elasticsearch9-cluster).

