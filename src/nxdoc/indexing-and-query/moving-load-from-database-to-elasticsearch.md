---
title: Moving Load from Database to Elasticsearch
review:
    comment: ''
    date: ''
    status: ok
labels:
    - elasticsearch
    - t
toc: true
confluence:
    ajs-parent-page-id: '22380787'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Moving+Load+from+Database+to+Elasticsearch
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/Moving+Load+from+Database+to+Elasticsearch
    page_id: '23366327'
    shortlink: t4pkAQ
    shortlink_source: 'https://doc.nuxeo.com/x/t4pkAQ'
    source_link: /display/NXDOC60/Moving+Load+from+Database+to+Elasticsearch
history:
    - 
        author: Benoit Delbosc
        date: '2015-05-22 06:57'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2015-04-08 08:52'
        message: ''
        version: '13'
    - 
        author: Benoit Delbosc
        date: '2015-04-07 09:14'
        message: Add deactivating database fulltext section
        version: '12'
    - 
        author: Solen Guitter
        date: '2015-03-25 09:39'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2015-03-18 09:30'
        message: ''
        version: '10'
    - 
        author: Benoit Delbosc
        date: '2015-02-23 10:22'
        message: ''
        version: '9'
    - 
        author: Benoit Delbosc
        date: '2015-02-23 10:20'
        message: ''
        version: '8'
    - 
        author: Benoit Delbosc
        date: '2015-02-23 10:09'
        message: ''
        version: '7'
    - 
        author: Benoit Delbosc
        date: '2015-02-23 10:00'
        message: ''
        version: '6'
    - 
        author: Benoit Delbosc
        date: '2015-02-23 09:54'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2015-02-23 09:18'
        message: ''
        version: '4'
    - 
        author: Benoit Delbosc
        date: '2015-02-20 10:55'
        message: ''
        version: '3'
    - 
        author: Benoit Delbosc
        date: '2015-02-20 10:46'
        message: ''
        version: '2'
    - 
        author: Benoit Delbosc
        date: '2015-02-20 09:42'
        message: ''
        version: '1'

---
{{! excerpt}}

By moving query load from the database to Elasticsearch,&nbsp;applications can dramatically increase performance and scalability.

{{! /excerpt}}

It is easy to pinpoint slow queries that need to be migrated from the database to Elasticsearch by [monitoring the slow queries]({{page space='admindoc60' page='monitoring-slow-nxql-queries'}}).

## Migrating Content View or Page Provider

This can be done as described in [How to Make a Page Provider or Content View Query Elasticsearch Index]({{page page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}}).

Using a page provider to query the repository makes it easy to tune or override queries.

## Migrating an Explicit NXQL Query

If you can not use a page provider and want to migrate code like this:

```
DocumentModelList docs = session.query(nxql);
```

Using Elasticsearch you will use a query builder:

```
ElasticSearchService ess = Framework.getLocalService(ElasticSearchService.class);
DocumentModelList docs = ess.query(new NxQueryBuilder(session).nxql(nxql).limit(-1)); // do we need to load all documents ?
```

The first difference is that using `session.query` all the documents are returned while using Elasticsearch there is a default limit to `10` documents. To get all the documents use a limit of `-1`. Think twice before using the `-1` limit: loading all the documents&nbsp;can affect performance especially if the query is dynamic and can match all the documents in the repository. Note that with a limit set to `0` you can get the total results size (using `docs.totalSize()`) without loading any documents.

Another difference is that documents that are searchable at time `**t**` may be different between database and Elasticsearch:

*   When using the repository API, a document is searchable after a modification once there is a `session.save()` or after the transaction commit for others sessions.
*   When using Elasticsearch a document is searchable after a modification only when:&nbsp; the transaction is committed AND asynchronous indexing job is done AND Elasticsearch index is refreshed, which happens every second by default.

For instance migrating this code:

```
doc.setPropertyValue("dc:title", "A new title");
session.saveDocument(doc);
session.save();

docs = session.query("SELECT * FROM Document WHERE dc:title = 'A new title'"); // expect to match "doc"
```

Can be done like this (requires 6.0-HF06):

```
doc.setPropertyValue("dc:title", "A new title");
session.saveDocument(doc);
session.save();

ElasticSearchAdmin esa = Framework.getService(ElasticSearchAdmin.class);
TransactionHelper.commitOrRollbackTransaction();
TransactionHelper.startTransaction();
esa.prepareWaitForIndexing().get(20, TimeUnit.SECONDS); // wait for indexing
esa.refresh(); // explicit refresh 

ess.query(new NxQueryBuilder(session).nxql("SELECT * FROM Document WHERE dc:title = 'A new title'").limit(-1)); // "doc" is returned
```

Obviously there is a write overhead here because we are splitting the transaction and explicitly call a refresh. This can be useful for unit test migration but on normal code you have to decide if it make sense to search documents that are probably already loaded in your context.

{{#> callout type='warning' }}

For now you can not migrate `queryAndFetch` queries because the NXQL select clauses are not yet supported. See the [Elasticsearch limitations]({{page space='NXDOC' page='Elasticsearch Indexing+Logic#ElasticsearchIndexingLogic-SearchingandLimitations'}}) for more information.

{{/callout}}

## Deactivating Database Optimizations

By default there are two optimizations done at the database level : one for the document path search (`STARTSWITH` operator) and one for the right filtering (ACL Read). They optimize the read request but they have a cost on write operations. Basically they are materializing data (document path and ACL read) using stored procedures.

See [VCS configuration documentation]({{page space='admindoc60' page='vcs-configuration'}}) to see how to disable `pathOptimizations` and `aclOptimizations`.

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

{{/callout}}

&nbsp;

## Going Further with Elasticsearch

### Searching over Multiple Repositories

If you have set up a [multi repositories configuration]({{page space='ADMINDOC60' page='Elasticsearch Setup#ElasticsearchSetup-ConfigurationforMultiRepositories'}}) to query over them just use the `searchOnAllRepositories` option:

```
docs = ess.query(new NxQueryBuilder(session).nxql(nxql).searchOnAllRepositories());
```

&nbsp;

&nbsp;

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [How to Make a Page Provider or Content View Query Elasticsearch Index]({{page page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}})
*   [Configuring the Elasticsearch Mapping]({{page page='configuring-the-elasticsearch-mapping'}})
*   [Elasticsearch Indexing Logic]({{page page='elasticsearch-indexing-logic'}})
*   [Elasticsearch Setup]({{page space='nxdoc' page='elasticsearch-setup'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

&nbsp;

</div></div>