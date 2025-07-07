---
title: 'Nuxeo Search Client OpenSearch'
description: Documentation page about the Nuxeo OpenSearch packages. 
tree_item_index: 2586
review:
  comment: ''
  date: '2025-07-04'
  status: ok
toc: true
---

Since Nuxeo LTS 2025, you have to explicitly choose and install a SearchClient package. By default, the SearchService will be configured with a Repository SearchClient that is using the underlying repository data store (VCS or DBS) with limited capabilities regarding fulltext search, aggregation and scalability.
Therefore we provide 2 OpenSearch packages to rely on this external search engine:
- For OpenSearch 1.x, you need to install the`nuxeo-search-client-opensearch1` package.
- For OpenSearch 2.x, you need to install the`nuxeo-search-client-opensearch2` package.

## Installation 

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Configuration 

For more information about the configuration of the OpenSearch package, please read the [Search documentation]({{page page='search-setup'}}#setting-up-an-opensearch-2x-cluster).

