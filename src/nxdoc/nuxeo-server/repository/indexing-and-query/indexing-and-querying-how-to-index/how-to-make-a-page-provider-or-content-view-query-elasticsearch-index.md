---
title: How to Make a Page Provider or Content View Query Elasticsearch Index
review:
    comment: ''
    date: '2017-12-14'
    status: ok
details:
    howto:
        excerpt: Learn how to make a content view query Elasticsearch instead of the Core API.
        level: Beginner
        tool: Studio
        topics: 'Content view, Elasticsearch, Query'
labels:
    - content-review-lts2016
    - elasticsearch
    - content-view
    - atchertchian
    - howto
    - query-pageprovider-component
    - kleturc
    - university
    - excerpt
    - lts2017-ok
    - jsf-ui
confluence:
    ajs-parent-page-id: '4687860'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Make+a+Page+Provider+or+Content+View+Query+Elasticsearch+Index
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Make+a+Page+Provider+or+Content+View+Query+Elasticsearch+Index'
    page_id: '19235213'
    shortlink: jYElAQ
    shortlink_source: 'https://doc.nuxeo.com/x/jYElAQ'
    source_link: /display/NXDOC/How+to+Make+a+Page+Provider+or+Content+View+Query+Elasticsearch+Index
tree_item_index: 1500
history:
    -
        author: Bertrand Chauvin
        date: '2015-12-03 15:56'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2015-02-23 09:25'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2014-12-01 22:23'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2014-11-19 16:39'
        message: ''
        version: '17'
    -
        author: Benoit Delbosc
        date: '2014-11-10 15:33'
        message: ''
        version: '16'
    -
        author: Benoit Delbosc
        date: '2014-11-10 15:32'
        message: ''
        version: '15'
    -
        author: Alain Escaffre
        date: '2014-11-04 02:23'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2014-11-04 02:20'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-11-03 09:27'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-11-03 09:08'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2014-11-02 23:24'
        message: ''
        version: '10'
    -
        author: Alain Escaffre
        date: '2014-11-02 23:24'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2014-11-02 22:25'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2014-05-05 11:30'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-04-18 16:25'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2014-04-18 10:42'
        message: ''
        version: '5'
    -
        author: Florent Guillaume
        date: '2014-04-17 19:11'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2014-04-17 19:07'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2014-04-17 18:59'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-04-17 18:58'
        message: ''
        version: '1'

---
{{! excerpt}}

When [configuring a content view]({{page space='studio' page='content-view-query-and-form-tab'}}) in Nuxeo Studio, you can make it query Elasticsearch instead of the Core API. This may be interesting for performance/scalability reasons as well as for enabling aggregates support. This page lists the required steps:

{{! /excerpt}}

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Configuring Searches in Nuxeo Studio Modeler & Designer](https://university.nuxeo.com/learn/public/course/view/elearning/134/configuring-searches-in-nuxeo-studio-modeler-designer).
![]({{file name='university-search.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

## Overriding an Existing Page Provider

See in `nuxeo.conf` the property "`elasticsearch.override.pageproviders`". Uncomment it and pickup some of the mentioned page providers.

```
elasticsearch.override.pageproviders=default_search,document_content,section_content,document_content,tree_children,default_document_suggestion,simple_search,advanced_search,nxql_search,DEFAULT_DOCUMENT_SUGGESTION
```

You can view the list of the Page Providers in the Admin Center/Elasticsearch/Page Provider tab, the `CoreQueryDocumentPageProvider` listed in blue can be overridden by Elasticsearch.

{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

## Configuring a New Content View (and underlying Page Provider) With Nuxeo Studio

1.  In Studio, on the content view, on the query & form tab, check "Use Elasticsearch index" and Save.
    ![]({{file name='Studio-content-view-query-definition.png' space='studio' page='content-views'}} ?w=600,border=true)

2.  [Deploy your Nuxeo Studio project]({{page space='studio' page='deploying-your-project-in-dev-mode'}}).
    You are done!

{{#> callout type='note' }}

Elasticsearch indexing is "eventually consistent". This means that depending on your indexing server charge, you may have a small delay before Elasticsearch returns the latest content update/create/delete.

{{/callout}}
&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other pages about Elasticsearch'}}

- [Moving Load from Database to Elasticsearch]({{page page='moving-load-from-database-to-elasticsearch'}})
- [Elasticsearch Setup]({{page page='elasticsearch-setup'}})
- [Elasticsearch Indexing Logic]({{page page='elasticsearch-indexing-logic'}})
- [Configuring the Elasticsearch Mapping]({{page page='configuring-the-elasticsearch-mapping'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Indexing related pages'}}

- [Full-Text Queries]({{page page='full-text-queries'}})
- [How to Configure a New Default Search Form in the Search Tab]({{page page='how-to-configure-a-new-default-search-form-in-the-search-tab'}})
- [Content Views]({{page page='content-views'}})
- [Page Providers]({{page page='page-providers'}})

{{/panel}}</div></div>
