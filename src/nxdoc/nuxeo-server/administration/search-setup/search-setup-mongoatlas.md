---
title: MongoDB Atlas Search
description: MongoDB Atlas Search for Nuxeo — Atlas repository requirement, operators, mappings, NXQL hints, aggregates, indexing behavior, and module test workflow.
review:
    comment: ''
    date: '2026-04-07'
    status: ok
labels:
    - mongodb
    - mongodb-component
toc: true
confluence:
    ajs-parent-page-id: '20518480'
    ajs-parent-page-title: Search Setup
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
tree_item_index: 1010
---

{{! excerpt}}
Install the MongoDB Atlas Search client when the repository runs on MongoDB Atlas; search uses the same Mongo connection as the repository.
{{! /excerpt}}

## Overview

The `nuxeo-search-client-mongoatlas` module integrates [MongoDB Atlas Search](https://www.mongodb.com/docs/atlas/atlas-search/). Unlike the other **Elasticsearch-based** search clients, documents are **indexed automatically from the MongoDB repository** via change streams, without indexing writer. That is **simpler to operate** but comes with **stricter limitations**.

Atlas Search is **Lucene-based** and **more static** than Elasticsearch: **operators and facets need explicit field mappings**, and there are **fewer aggregate types** than on OpenSearch/Elasticsearch. The sections below cover configuration, mappings, supported operators and aggregates, and known limits.

## Prerequisites and Nuxeo configuration

### Repository on MongoDB Atlas

This search client applies only when the **document repository is stored on [MongoDB Atlas](https://www.mongodb.com/atlas)**. A self-hosted MongoDB instance without Atlas Search is not sufficient. Install the `nuxeo-search-client-mongoatlas` package and use the MongoDB template as usual for the repository ([MongoDB]({{page page='mongodb'}}) configuration).

### Local testing with Docker

You can exercise the stack with the official local image, for example `mongodb/mongodb-atlas-local` (see `docker-compose-mongoatlas.yml` in the [nuxeo-mongoatlas](https://github.com/nuxeo/nuxeo-mongoatlas) repository). That image is useful for development and tests but **does not replicate full Atlas infrastructure**: some behaviors differ from cloud Atlas (for example **no dynamic mapping** and other gaps). Treat it as a convenience, not a substitute for validating behavior against a real Atlas deployment.

### Connection and access

Nuxeo does not use a separate set of Atlas connection properties for search. Access to the cluster (URI, credentials, TLS, and so on) is the **same as for the MongoDB repository**; the search client reuses that connection for Atlas Search operations.

Typical `nuxeo.conf` defaults include the name of the atlas index for the repository:

```
nuxeo.search.client.default.mongoatlas.index.name=nuxeo
```

## Search operators

The index uses `lucene.keyword` as the default analyzer; `keywordLowercase` and `fulltext` are also provided. Without proper mapping applied to a field, search may return an empty result with `INDEX_MAPPING` in `getLimitations()`.

| Operator | Required mapping | Example |
| --- | --- | --- |
| `equals`, `in`, `range` | `token` (stores whole value as one term) | `dc:nature = 'article'`, `dc:subjects IN ('art/culture', 'art/comics')` |
| `LIKE`, `NOT LIKE` | Index default `lucene.keyword` (whole-field match) | `dc:title LIKE 'testfile%'` — matches documents whose entire title starts with "testfile" |
| `ILIKE`, `NOT ILIKE` | `multi.lowercase` with `keywordLowercase` analyzer | `dc:title ILIKE '%report%'` |
| `ecm:fulltext.field` | `multi.fulltext` with `fulltext` analyzer | `ecm:fulltext.dc:title = 'search term'` — tokenized, analyzed search |

### Custom field mapping example

To enable all operators on `dc:description`:

```json
{
  "dc:description": [
    {
      "type": "string",
      "multi": {
        "fulltext": {
          "type": "string",
          "analyzer": "fulltext",
          "searchAnalyzer": "fulltext"
        },
        "lowercase": {
          "type": "string",
          "analyzer": "keywordLowercase",
          "searchAnalyzer": "keywordLowercase"
        }
      }
    },
    {
      "type": "token"
    }
  ]
}
```

### Fulltext analyzer

The `fulltext` analyzer uses standard tokenizer, englishPossessive, lowercase, stopword (English), and [kStemming](https://www.mongodb.com/docs/atlas/atlas-search/analyzers/token-filters/#kstemming). Fulltext search on the entire document uses multi-path search (for example `ecm:fulltext` queries both `ecm:fulltextBinary` and `ecm:fulltextSimple`). Atlas Search does not support `copy_to`; unlike OpenSearch/Elasticsearch, there is no single technical field for document-wide fulltext.

### Search limitations

- **STARTSWITH**: Only supported for `ecm:path` (translated to `ecm:ancestorIds`). Queries on other fields (for example `dc:coverage STARTSWITH 'foo/bar'`) return an empty result with `OPERATOR_NOT_SUPPORTED` in `getLimitations()`.
- **ecm:path@level, ecm:path@depth**: Not available (materialized by the indexing writer in other backends).
- **Fulltext**: Cannot be limited (`nuxeo.search.default.fulltext.size.max`) or externalized to a blob (`nuxeo.vcs.fulltext.storedInBlob`). Fulltext comes from whatever MongoDB storage puts in the document.
- **Correlated list wildcards** (`/*1`, `/*2`, …) on complex properties (see [NXQL]({{page page='nxql'}}) — complex properties) are **not** supported — the same limitation as the OpenSearch/Elasticsearch search clients.
- **Match-any wildcards** (`/*`) in complex properties are **not** supported.

### NXQL hints

| Hint | Supported | Notes |
| --- | --- | --- |
| `INDEX(field)` | Yes | Restricts search to specified field(s). `dc:title.fulltext` maps to multi path `{ value: "dc:title", multi: "fulltext" }`. |
| `INDEX(field^boost)` | Yes | Field with boost for fulltext (for example `INDEX(dc:title.fulltext^3,dc:description.fulltext)`). |
| `ANALYZER(name)` | No | Search analyzer is fixed in the index mapping per field. |
| `OPERATOR(...)` | No | Not supported. |

## Aggregates

Aggregates use MongoDB Atlas Search facet collectors. Counts are computed over the full base result set in a single `$search` operation.

| Aggregate | Required mapping | Example |
| --- | --- | --- |
| `terms` | `token` or `stringFacet` | `dc:source`, `dc:nature`, `dc:coverage` — string facet buckets |
| `range` | `number` or `numberFacet` | `common:size` — numeric range buckets (for example 0–1KB, 1KB–1MB) |
| `date_range` | `date` or `dateFacet` | `dc:modified` — date range buckets |
| `histogram` | `number` or `numberFacet` | `content.length` — numeric histogram with fixed interval |
| `date_histogram` | `date` or `dateFacet` | `dc:created` — date histogram (by year, month, and so on) |

### Mapping example for a string facet

```json
{
  "dc:source": [
    {
      "type": "token"
    },
    {
      "type": "stringFacet"
    }
  ]
}
```

### Aggregate limitations

- **No cross-aggregate filtering**: Selecting a bucket (for example `dc:source = foo`) filters results correctly, but aggregate counts do not narrow; all counts reflect the full base result set.
- **Unsupported**: `sum`, `avg`, `min`, `max`, `count`, `cardinality`, `missing`, `significant_terms`. When requested, search succeeds but unsupported aggregates keep empty buckets; `UNSUPPORTED` is reported in `getLimitations()`.
- **Terms order/exclude**: Atlas string facets support `numBuckets` only; `order` and `exclude` are applied client-side.
- **"other" bucket**: Atlas returns an "other" bucket for documents outside range boundaries; it is filtered out in the response.

## Other limitations

### Indexing

Documents are indexed asynchronously via change streams. The search client has no reliable way to wait for indexing to complete. A document that was just created or updated may not appear in the next search immediately.

When Nuxeo performs a full reindex, the Atlas index is dropped and recreated with the Nuxeo mapping. This can be used to apply a new mapping.

### MongoAtlasCoreSearchFeature (testing)

Because there is no way to know when indexing is done, the test feature waits a fixed delay and hopes it is enough.

## Module development and tests

The following applies to developers working on the [nuxeo-mongoatlas](https://github.com/nuxeo/nuxeo-mongoatlas) repository.

### Running unit tests

There is no embedded mode for MongoDB Atlas Search. Run a local instance using Docker Compose:

```shell
docker-compose -f ./docker-compose-mongoatlas.yml up -d
```

This starts MongoDB with Atlas Search support on `localhost:27017`.

```shell
mvn -nsu test
```

```shell
docker-compose -f ./docker-compose-mongoatlas.yml down
```

### Debugging

`nuxeo-search-client-mongoatlas` runs tests from `org.nuxeo.ecm.core:nuxeo-core-test` by setting `MongoAtlasCoreSearchFeature`. These external tests are run by the Maven Surefire plugin when invoking `mvn -nsu test` and may not be detected by your IDE.

Run a single test:

```shell
mvn -nsu test -Dnuxeo.test.search=mongoatlas -Dtest=TestSearchClientNxql#testNxqlFromDocumentation
```

To debug an external test:

```shell
mvnDebug -DforkCount=0 -nsu test
```

This waits for your IDE to start a "Remote JVM Debug" session configured with `-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:8000`.

### Search queries from mongosh

```javascript
db.default.aggregate([
  { $search: { index: "nuxeo", count: { type: "total" }, compound: { must: [{ exists: { path: "ecm:id" } }] } } },
  { $limit: 5 }
])
```

## See also

### MongoDB Atlas Documentation

- [Atlas Search overview](https://www.mongodb.com/docs/atlas/atlas-search/)
- [Define field mappings](https://www.mongodb.com/docs/atlas/atlas-search/define-field-mappings/)
- [Create and manage search indexes](https://www.mongodb.com/docs/atlas/atlas-search/create-index/)
- [String type](https://www.mongodb.com/docs/atlas/atlas-search/field-types/string-type/)
- Aggregates — [Facet collectors](https://www.mongodb.com/docs/atlas/atlas-search/facet/)

### Nuxeo Documentation

- [MongoDB]({{page page='mongodb'}}) — database and repository configuration.
- [Search setup]({{page page='search-setup'}}) — shared documentation (oriented toward OpenSearch/Elasticsearch); use the sections that apply to your stack.
- [NXQL]({{page page='nxql'}}) — query language reference.
