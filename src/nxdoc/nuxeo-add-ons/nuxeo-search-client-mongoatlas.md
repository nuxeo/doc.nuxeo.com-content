---
title: 'Nuxeo Search Client MongoDB Atlas'
description: Documentation page about the Nuxeo MongoDB Atlas Search package.
tree_item_index: 2598
review:
  comment: ''
  date: '2026-04-08'
  status: ok
toc: true
---

Since Nuxeo LTS 2025, you have to explicitly choose and install a SearchClient package. By default, the SearchService is configured with a Repository SearchClient that uses the underlying repository data store with limited capabilities regarding fulltext search and aggregation.
For **MongoDB Atlas Search** with a **MongoDB Atlas** document repository, install the `nuxeo-search-client-mongoatlas` package.

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Configuration

For repository requirements, connection and index settings, field mappings, supported operators and aggregates, and known limitations, see **[MongoDB Atlas Search]({{page page='search-setup-mongoatlas'}})** and the shared procedures on [Search setup]({{page page='search-setup'}}) (use the `mongoatlas` property namespace where other guides show `opensearch1`, `opensearch2`, or `elasticsearch9`).
