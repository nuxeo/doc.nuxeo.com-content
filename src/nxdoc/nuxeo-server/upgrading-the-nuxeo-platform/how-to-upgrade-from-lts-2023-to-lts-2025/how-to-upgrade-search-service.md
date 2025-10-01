---
title: How to upgrade to New Search Service
description: Instructions to upgrade your Nuxeo Project to LTS 2025 - Nuxeo Search Service Part
review:
   comment: ''
   date: '2025-04-21'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 250
---

## Introduction

{{! excerpt}}
A new `SearchService` has been introduced in Nuxeo LTS 2025. The `ElasticSearchService` has been removed, representing a breaking change. The code needs to be modified to use the new `SearchService`.
{{! /excerpt}}

## Maven Dependency

`nuxeo-elasticsearch-core` has been removed in LTS 2025
```xml
<dependency>
  <groupId>org.nuxeo.elasticsearch</groupId>
  <artifactId>nuxeo-elasticsearch-core</artifactId>
</dependency>
```
Should be replaced by:
```xml
<dependency>
  <groupId>org.nuxeo.ecm.core</groupId>
  <artifactId>nuxeo-core-search</artifactId>
</dependency>
```

The management API provided by `nuxeo-elasticsearch-rest` is now part of `nuxeo-rest-api-server`.

## Java Code

The new `SearchService` implements a standardized method for executing NXQL queries against document repositories. Queries are executed on a dedicated search index, which can be contributed. This index primarily identifies repository and search client configurations.

By default, an index named `repository` is provided. This index is configured for the default repository and utilizes a Repository search client, leveraging the `CoreSession` to execute queries on the repository backend.

When a Search Client package, such as `nuxeo-search-client-opensearch1`, is installed to enable OpenSearch or Elasticsearch back-end functionality, an `enhanced` index is automatically created. This enhanced index will serve as the default search index for the default repository.

### How to Use the New SearchService
Here are few examples on how to build queries, search and load matching documents:
```java
import org.nuxeo.ecm.core.search.SearchQuery;
import org.nuxeo.ecm.core.search.SearchService;
import org.nuxeo.ecm.core.search.SearchResponse;
  // ...
  // Build a query
  SearchQuery query;
  // NXQL on default repository using its default index, with the current user
  query = SearchQuery.builder("SELECT * from Document").build();
  // same but using the repository and user from the given session
  query = SearchQuery.builder("SELECT * from Document", session).build();
  // explicit use of the repository index (repository back-end)
  query = SearchQuery.builder("SELECT * from Document").index("repository").build();
  // explicit use of the enhanced index
  query = SearchQuery.builder("SELECT * from Document").index("enhanced").build();

  // Execute the query
  SearchService searchService = Framework.getService(SearchService.class);
  SearchResponse response = searchService.search(query);

  // total number of match for the query without limits
  long totalMatch = response.getTotal();
  // number of returned match (aka hit) can be document ids or rows
  long hits = response.getHitsCount();

  // load search result documents from the repository using the given session
  DocumentModelList docs = response.loadDocuments(session);
  // or use an iterator
  IterableQueryResult iterator = response.getHitsAsIterator();
  // or ask for rows
  PartialList<Map<String, Serializable>> rows = response.getHitsAsMap();
  // or use hits
  List<SearchHit> hits = response.getHits();
  String firstDocId = hits.getFirst().getDocId();


```

### Code Change Examples
Following are some examples of code conversions from LTS 2023 `ElasticSearchService` to the new `SearchService`: 

An NXQL query using LTS 2023 `ElasticSearchService`:
```java
ElasticSearchService ess = Framework.getService(ElasticSearchService.class);
NxQueryBuilder query = new NxQueryBuilder(session).nxql("SELECT * FROM Document").limit(1);
DocumentModelList docs = ess.query(query);
```

Might be converted to:
```java
import org.nuxeo.ecm.core.search.SearchQuery;
import org.nuxeo.ecm.core.search.SearchService;
// ...
SearchService searchService = Framework.getService(SearchService.class);
var query = SearchQuery.builder("SELECT * from Document", session).limit(1).build();
DocumentModelList docs = searchService.search(searchQuery).loadDocuments(session);
```

A scroll search using LTS 2023 `ElasticSearchService`:
```java
long scrollKeepAliveMillis = 10_000L;
int scrollSize = 20;
ElasticSearchService ess = Framework.getService(ElasticSearchService.class);
EsScrollResult res = ess.scroll(new NxQueryBuilder(session)
                                  .nxql(query)
                                  .limit(batchSize), keepAliveMillis);
// ...
// next results
res = ess.scroll(res);
```

Might be converted to:
```java
SearchService searchService = Framework.getService(SearchService.class);
SearchResponse res = searchService.search(SearchQuery.builder(query, session)
  .scrollSize(scrollSize)
  .scrollKeepAlive(Duration.ofMillis(scrollKeepAliveMillis))
  .build());
// ...
// next results
res = searchService.searchScroll(res.getScrollContext());
```

Query using the OpenSearch API in LTS 2023
```java
import org.opensearch.action.search.SearchRequest;
import org.opensearch.action.search.SearchResponse;
import org.opensearch.index.query.QueryBuilders;
import org.opensearch.search.builder.SearchSourceBuilder;

//...
ElasticSearchAdmin esa = Framework.getService(ElasticSearchAdmin.class);
SearchRequest request = new SearchRequest(IDX_NAME)
  .source(new SearchSourceBuilder().query(QueryBuilders.matchAllQuery()).from(0).size(60));
SearchResponse response = esa.getClient().search(request);
```

This requires to add a dependency on `nuxeo-runtime-opensearch1` module, to be converted to:
```java
import org.nuxeo.runtime.opensearch1.OpenSearchClientService;
import org.nuxeo.runtime.opensearch1.client.OpenSearchClient;

OpenSearchClient client = Framework.getService(OpenSearchClientService.class).getClient("default");
SearchRequest request = new SearchRequest(IDX_NAME)
  .source(new SearchSourceBuilder().query(QueryBuilders.matchAllQuery()).from(0).size(60));
SearchResponse response = client.search(request);
```

### Test runner

There is no more `RepositoryElasticSearchFeature` or `RepositoryLightElasticSearchFeature` feature runners.

You have to use the new `CoreSearchFeature`.

```java
@RunWith(FeaturesRunner.class)
@Features(CoreSearchFeature.class)
public class MyTestSuite {

  @Inject
  protected CoreSession session;

  @Inject
  protected SearchService searchService;

  @Inject
  protected TransactionalFeature txFeature;

  @Test
  public void testSomething() {
    ...
    var documents = searchService.search(SearchQuery.builder("SELECT * FROM Document).build).loadDocuments(session);
    ... 
  }
}

```
It's possible to run the test suite with different search clients:
```bash
# run test with default repository search client
mvn -nsu test -Dtest=MyTestSuite
# run unit test against an embedded opensearch1 server
mvn -nsu test -Dtest=MyTestSuite -Dnuxeo.test.search=opensearch1
# run unit test against a remote opensearch server
mvn -nsu test -Dtest=MyTestSuite -Dnuxeo.test.search=opensearch1 -Dnuxeo.test.opensearch1.servers=http://my-opensearch-cluster:9200/
```

## Page Providers

Any reference to `ElasticSearchNxqlPageProvider` page provider needs to be replaced by  `SearchServicePageProvider`.

When an enhanced search client like `nuxeo-search-client-opensearch1` is installed it will be used.

For instance, this
```xml
<genericPageProvider class="org.nuxeo.elasticsearch.provider.ElasticSearchNxqlPageProvider"
```
Should be replaced by:
```xml
<genericPageProvider class="org.nuxeo.ecm.platform.query.nxql.SearchServicePageProvider"
```

## XML Contributions
Contributions made to `org.nuxeo.elasticsearch.ElasticSearchComponent` extension points should be updated to the new services. 

For instance `hint` contributions should be changed from
```xml
  <extension target="org.nuxeo.elasticsearch.ElasticSearchComponent" point="elasticSearchHints">
    <hint name="foo" class="..." />
```
to 
```xml
<extension target="org.nuxeo.ecm.core.search.client.opensearch1" point="hint">
  <hint name="foo" class="..." />
```

## Automation Operations

`ElasticSearch.Index` should be replaced by `Search.Index`.

`Elasticsearch.BulkIndex` should be replaced by `Search.Index`.

`Elasticsearch.WaitForIndexing` should be replaced by `Search.WaitForIndexing`.

## Management API

`/management/elasticsearch` call should be changed to `/management/search` to remain compatible.

There is no more low level `/management/elasticsearch/flush` and `/management/elasticsearch/optimize`. We recommend to use directly the search engine to perform such administrative operation.


## Nuxeo Server Configuration

{{#> callout type='warning' }}
Nuxeo Server is provided with a `repository` search client implementation.
You need to explicitly install a search client Marketplace Package to have an `enhanced` index.
{{/callout}}

### OpenSearch Search Client

To use OpenSearch indexing and search capability you need to install the [nuxeo-search-client-opensearch1](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-search-client-opensearch1)
package.

After installation, check that the `opensearch1-search-client` template is included in your `nuxeo.conf` file. The template will enable to access an OpenSearch 1.x, Elasticsearch 7.x or 8.x cluster. The previous `elasticsearch.enabled` configuration property has no more effect.

Previously, the Elasticsearch / OpenSearch configuration properties looked like:

```properties
# generic
elasticsearch.addressList=http://localhost:9200
elasticsearch.restClient.connectionTimeoutMs=30000
elasticsearch.restClient.socketTimeoutMs=121000
elasticsearch.restClient.ssl.certificate.verification=true

# optional
elasticsearch.restClient.username=
elasticsearch.restClient.password=
elasticsearch.restClient.truststore.path=
elasticsearch.restClient.truststore.password=
elasticsearch.restClient.truststore.type=
elasticsearch.restClient.keystore.path=
elasticsearch.restClient.keystore.password=
elasticsearch.restClient.keystore.type=

# repository index
elasticsearch.indexName=nuxeo
elasticsearch.index.translog.durability=request
elasticsearch.indexNumberOfShards=5
elasticsearch.indexNumberOfReplicas=1
```

Now you will configure OpenSearch 1 / Elasticsearch 7 or 8 connection with:

```properties
# generic
nuxeo.opensearch1.client.server=http://localhost:9200
nuxeo.opensearch1.client.connectionTimeout=3s
nuxeo.opensearch1.client.socketTimeout=121s
nuxeo.opensearch1.client.sslCertificateVerification=true

# optional
nuxeo.opensearch1.client.username=
nuxeo.opensearch1.client.password=
nuxeo.opensearch1.client.trustStore.path=
nuxeo.opensearch1.client.trustStore.password=
nuxeo.opensearch1.client.trustStore.type=
nuxeo.opensearch1.client.keyStore.path=
nuxeo.opensearch1.client.keyStore.password=
nuxeo.opensearch1.client.keyStore.type=

# default index for the default repository
nuxeo.search.client.default.opensearch1.index.name=nuxeo
nuxeo.search.client.default.opensearch1.settings.indexTranslogDurability=request
nuxeo.search.client.default.opensearch1.settings.numberOfShards=5
nuxeo.search.client.default.opensearch1.settings.numberOfReplicas=1
```

Currently, there is no managed alias support. The `elasticsearch.manageAlias.enabled` should not be used.
