---
title: Search Indexing Logic
description: When manipulating a session to create, update or delete documents, a synchronous listener stacks the indexing commands to process.
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - lts2016-ok
    - elasticsearch
    - elasticsearch-component
    - bdelbosc
    - university
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '4687860'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Elasticsearch+Indexing+Logic
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Elasticsearch+Indexing+Logic'
    page_id: '19235209'
    shortlink: iYElAQ
    shortlink_source: 'https://doc.nuxeo.com/x/iYElAQ'
    source_link: /display/NXDOC/Elasticsearch+Indexing+Logic
tree_item_index: 600
history:
    -
        author: Bertrand Chauvin
        date: '2015-12-17 14:18'
        message: ''
        version: '32'
    -
        author: Bertrand Chauvin
        date: '2015-12-17 14:17'
        message: Added video
        version: '31'
    -
        author: Guillaume Renard
        date: '2015-08-06 09:44'
        message: ''
        version: '30'
    -
        author: Bertrand Chauvin
        date: '2015-07-02 13:27'
        message: Fixed typo
        version: '29'
    -
        author: Benoit Delbosc
        date: '2015-02-26 13:48'
        message: ''
        version: '28'
    -
        author: Benoit Delbosc
        date: '2015-02-26 13:47'
        message: ''
        version: '27'
    -
        author: Benoit Delbosc
        date: '2015-02-26 13:45'
        message: ''
        version: '26'
    -
        author: Benoit Delbosc
        date: '2015-02-20 09:03'
        message: ''
        version: '25'
    -
        author: Benoit Delbosc
        date: '2014-12-01 17:02'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2014-12-01 16:55'
        message: Add subtitiles
        version: '23'
    -
        author: Benoit Delbosc
        date: '2014-11-25 15:33'
        message: ''
        version: '22'
    -
        author: Benoit Delbosc
        date: '2014-11-10 16:13'
        message: ''
        version: '21'
    -
        author: Alain Escaffre
        date: '2014-11-02 22:29'
        message: ''
        version: '20'
    -
        author: Alain Escaffre
        date: '2014-11-02 22:27'
        message: ''
        version: '19'
    -
        author: Benoit Delbosc
        date: '2014-08-04 11:02'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2014-07-30 10:27'
        message: ''
        version: '17'
    -
        author: Alain Escaffre
        date: '2014-07-09 12:17'
        message: 'Removing the Indexing strategy part which is incomplete. '
        version: '16'
    -
        author: Guillaume Renard
        date: '2014-07-09 11:23'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2014-06-12 16:01'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2014-05-02 16:45'
        message: ''
        version: '13'
    -
        author: Alain Escaffre
        date: '2014-05-02 16:24'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-04-18 19:13'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2014-04-18 16:28'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-04-18 16:19'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-04-18 10:21'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2014-04-17 19:19'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2014-04-17 19:17'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2014-04-17 19:16'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2014-04-17 19:01'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2014-04-17 18:59'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2014-04-17 18:32'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-04-17 18:26'
        message: ''
        version: '1'
---

{{#> callout type='info' heading='Hyland University'}}
Watch the related courses on Hyland University:</br>
[Configuring Searches in Nuxeo Studio Modeler & Designer](https://university.hyland.com/courses/e4141).
![]({{file name='university-search.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

## Indexing

The indexing process involves stacking indexing commands when manipulating sessions to create, update, or delete documents. These commands are then emitted as indexing domain events into a `source/indexing` stream when the transaction is committed.

There are two indexing processors:
- A **Synchronous processor**:
  When a UI request is involved, some indexing commands are marked as synchronous. After transaction commit, the thread waits for these specific commands to be processed by the synchronous processor before returning.
  This way the next UI request is able to search updated documents, giving a real time indexing appearance.
  The synchronous processor reads the `source/indexing` stream and processes simple events marked as synchronous. It also refreshes the index to ensure updates are searchable.
- An **Asynchronous processor**:
  It reads the same `source/indexing` stream and processes all commands not handled by the synchronous processor. This includes heavy operations like indexing all children (recursive commands) when moving a folder or changing an ACL.

When indexing a document, the Nuxeo Platform sends a JSON representation to be indexed. A creation or update command submits the complete document. For OpenSearch/Elasticsearch engines, the JSON document can be viewed in the `_source` field. It is possible to override the default JSON writer (`DefaultIndexingJsonWriter`).

Note that this is a new indexing logic implemented in LTS 2025, which no longer relies on WorkManager.

## Searching and Limitations

NXQL Queries are translated by the SearchClient, some implementation may have some limitations or different behavior, they are documented in the [NXQL documentation.]({{page page='nxql'}}) and below.

### OpenSearch 1 Search Client
This search client provides access to OpenSearch 1.x, Elasticsearch 7.x and 8.x Search engines.

When the query does not specify an ordering, the results are sorted by descending order of relevance as [described in Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/guide/current/relevance-intro.html).
There are multiple ways to tune relevance:
- By updating the mapping to [automatically boost some fields](https://www.elastic.co/guide/en/elasticsearch/reference/5.6/mapping-boost.html).
- By using NXQL Hint with operator that support field boost notation like `/*+ES: INDEX(dc:title.fulltext^3,dc:description.fulltext) */`
- By building your elasticsearch query directly and pass a [function to return a score](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-function-score-query.html).

**Operators and Mapping**

Some operators need an explicit mapping to work properly. This is the case for FULLTEXT, LIKE and ILIKE operators (STARTSWITH for `ecm:path` has a special mapping setup by default). See the page [Configuring the OpenSearch Mapping]({{page page='configuring-the-elasticsearch-mapping'}}) for more information.

**Security and ACLs**

The security clause is automatically added to match the principal and its groups. Each document contains the list of the users or groups that have permission to browse the document.

Only the simplified ACL is supported with Elasticsearch (this is the default security mode since 6.0). Simplified ACL means we only handle DENY on Everyone (block all rights) and not DENY on principals.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other Elasticsearch Documentation'}}

- [Configuring the Elasticsearch Mapping]({{page page='configuring-the-elasticsearch-mapping'}})
- [Elasticsearch Setup]({{page page='elasticsearch-setup'}})
- [How to Make a Page Provider or Content View Query Elasticsearch Index]({{page page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Indexing related pages'}}

- [Indexing and Query]({{page page='indexing-and-query'}})
- [Full-Text Queries]({{page page='full-text-queries'}})
- [Indexing and Querying How-To Index]({{page page='indexing-and-querying-how-to-index'}})

{{/panel}}</div></div>
