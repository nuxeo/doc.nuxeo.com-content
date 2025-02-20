---
title: Moving Load from Database to Search Engine
description: By moving query load from the database to a search engine such as OpenSearch, applications can drastically increase performance and scalability.
review:
    comment: ''
    date: '2017-12-15'
    status: ok
labels:
    - content-review-lts2016
    - elasticsearch
    - query-pageprovider-component
    - kleturc
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '4687860'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Moving+Load+from+Database+to+Elasticsearch
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Moving+Load+from+Database+to+Elasticsearch'
    page_id: '23366423'
    shortlink: F4tkAQ
    shortlink_source: 'https://doc.nuxeo.com/x/F4tkAQ'
    source_link: /display/NXDOC/Moving+Load+from+Database+to+Elasticsearch
tree_item_index: 700
history:
    -
        author: Benoit Delbosc
        date: '2015-05-22 07:11'
        message: ''
        version: '12'
    -
        author: Benoit Delbosc
        date: '2015-05-22 06:58'
        message: Add deactivating database fulltext section
        version: '11'
    -
        author: Solen Guitter
        date: '2015-04-08 08:52'
        message: ''
        version: '10'
    -
        author: Benoit Delbosc
        date: '2015-04-07 09:13'
        message: Add deactivating database fulltext section
        version: '9'
    -
        author: Bob Canaway
        date: '2015-03-23 18:19'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-03-18 09:14'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2015-03-18 09:11'
        message: fix links
        version: '6'
    -
        author: Solen Guitter
        date: '2015-03-18 09:08'
        message: ''
        version: '5'
    -
        author: Benoit Delbosc
        date: '2015-03-17 08:40'
        message: ''
        version: '4'
    -
        author: Benoit Delbosc
        date: '2015-03-17 08:36'
        message: ''
        version: '3'
    -
        author: Benoit Delbosc
        date: '2015-02-23 10:25'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2015-02-23 09:27'
        message: ''
        version: '1'

---
{{! excerpt}}
By moving query load from the database to a search engine (Elasticsearch, OpenSearch, ...), applications can drastically increase performance and scalability.
{{! /excerpt}}

It is easy to pinpoint slow queries that need to be migrated from the database by [monitoring slow queries]({{page page='monitoring-slow-nxql-queries'}}).

## Migrating Content View or Page Provider

This can be done as described in [How to Make a Page Provider or Content View Query Elasticsearch Index]({{page page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}}).

Using a page provider to query the repository makes it easy to tune or override queries.

## Migrating an Explicit NXQL Query

If you can not use a page provider and want to migrate code like this:

```
DocumentModelList docs = session.query(nxql);
```

Using the Search Service you will use a SearchQuery:

```java
SearchService searchService = Framework.getService(SearchService.class);
SearchResponse response = searchService.search(SearchQuery.Builder(nxql).limit(100).build());
DocumentModelList docs = response.loadDocuments(session);
```

The first difference is that using `session.query` all the documents are returned while using SearchService there is a default limit of `10` documents. On the OpenSearch client implementation, this limit is caped to `10000` (see [index.max_result_window](https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules.html) section). To get all the documents use the [scroll API]({{page page='moving-load-from-database-to-elasticsearch'}}#migrating-a-request-using-scroll-api). Note that with a limit set to `0` you can get the total results size (using `docs.totalSize()`) without loading any documents. The documents are loaded from the repository in a second step during `response.loadDocument(session)`, be aware that this operation can be expensive.

Another difference is that documents that are searchable at time `**t**` may be different between database and Elasticsearch:

*   When using the repository API, a document is searchable after a modification once there is a `session.save()` or after the transaction commit for others sessions.
*   When using the SearchService, a document is searchable after a modification only when the transaction is committed AND, indexing processors are done AND depending on the search client implementation, if the index is refreshed (which happens every second on OpenSearch).

For instance migrating this code:

```java
doc.setPropertyValue("dc:title", "A new title");
session.saveDocument(doc);
session.save();

docs = session.query("SELECT * FROM Document WHERE dc:title = 'A new title'"); // expect to match "doc"
```

Can be done like this:

```java
doc.setPropertyValue("dc:title", "A new title");
session.saveDocument(doc);
session.save();
// flag the thread to wait for synchronous indexing on commit
ThreadLocalIndexingCommandsStacker.useSyncIndexing.set(true);
// commit
TransactionHelper.commitOrRollbackTransaction();
TransactionHelper.startTransaction();

SearchService searchService = Framework.getService(SearchService.class);
SearchResponse response = searchService.search(SearchQuery.Builder("SELECT * FROM Document WHERE dc:title = 'A new title'").build());
DocumentModelList docs = response.loadDocuments(session); // "doc" is returned
```

Obviously there is a write overhead here because we are splitting the transaction and explicitly call a refresh. This can be useful but on normal code you have to decide if it makes sense to search documents that are probably already loaded in your context. Note that in unit test you don't have to do this because the `CoreSearchFeature` is already configured to wait for synchronous indexing during commit.

## Migrating a queryAndFetch Request

Replace the code:

```java
IterableQueryResult rows = session.queryAndFetch("SELECT ecm:uuid, dc:title FROM Document", NXQL.NXQL);
...
```

With:

```java
SearchResponse response = searchService.search(SearchQuery.Builder("SELECT ecm:uuid, dc:title FROM Document").build());
IterableQueryResult docs = response.getHitsAsIterator();
```

And you gain the limit/offset options.

{{#> callout type='warning' }}

For now the select clause support is limited to scalar properties. See the page [Elasticsearch limitations]({{page page='elasticsearch-indexing-logic'}}#searching-and-limitations) for more information.

{{/callout}}

## Migrating a Request using scroll API

To prevent overloading Nuxeo, some search client implementation such as Elasticsearch/OpenSearch will reject search request where `from + size > 10000`. If you need to get all documents from query, you should use scroll search request.

To do that, we can use the following code snippet`.

```java
SearchService searchService = Framework.getService(SearchService.class);

// Perform initial search and get first batch of 20 results
String query = "SELECT * FROM Document WHERE dc:title = 'A new title'";
var response = searchService.search(SearchQuery.Builder(nxql).scrollSearch(true).scrollSize(20).build);

while (response.getHitsCount() > 0) {
    for (DocumentModel doc : response.loadDocuments(session)) {
        // Process document
        ...
    }
    // Get next batch of results
    response = searchService.scrollSearch(response.getScrollContext());
}
```
{{#> callout type='note' }}

The `scrollSize` represents the size of each batch retrieved with scroll API. A `scrollKeepAlive` can also be set, it should be long enough to perform the next scroll query.

{{/callout}}

## Deactivating Database Optimizations

By default there are two optimizations done at the database level: one for the document path search (`STARTSWITH` operator) and one for the right filtering (ACL Read). They optimize the read request but they have a cost on write operations. Basically they are materializing data (document path and ACL read) using stored procedures.

See [VCS configuration documentation]({{page page='repository-configuration'}}) to see how to disable `pathOptimizations` and `aclOptimizations`.

If you disable these optimizations you will have bad response time on NXQL for non-administrator user and for queries involving the `STARTSWITH` operator. Again look at the slow queries monitoring and migrate them to Elasticsearch (see above section).

## Deactivating Database Full-Text Search

By default full text is indexed at the database level. If you have moved your full-text search to Elasticsearch you don't need to maintain database full-text index and trigger.

By using `nuxeo.vcs.fulltext.search.disabled=true` option in the `nuxeo.conf` file, full-text will be extracted and saved into the database, but there will be no full-text index, triggers and duplication overhead.

{{#> callout type='warning' }}

When disabling Database Full-text Search on an existing instance you have to remove the trigger and index manually, for instance for PostgreSQL:

```
DROP TRIGGER nx_trig_ft_update ON fulltext;
DROP INDEX fulltext_fulltext_idx;
DROP INDEX fulltext_fulltext_title_idx;
```

On MongoDB:
```
// remove the fulltext index
db.default.dropIndex('fulltext')
// remove the field containing the metadata fulltext
db.default.updateMany({}, {$unset: {"ecm:fulltextSimple":1}});
```

{{/callout}}

## Using a Search Engine Pass Through (HTTP API)

The OpenSearch1 search client package comes with PassThrough endpoint, it exposes a limited set of Read Only OpenSearch HTTP REST API, taking in account the Nuxeo authentication and authorization.

See the [OpenSearch Passthrough]({{page page='elasticsearch-passthrough'}}) page for more information.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [How to Make a Page Provider or Content View Query Elasticsearch Index]({{page page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}})
- [Configuring the Elasticsearch Mapping]({{page page='configuring-the-elasticsearch-mapping'}})
- [Search Indexing Logic]({{page page='elasticsearch-indexing-logic'}})
- [Elasticsearch Setup]({{page page='elasticsearch-setup'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

&nbsp;

</div></div>
