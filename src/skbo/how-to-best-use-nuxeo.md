---
title: How to best use Nuxeo search tooling
description: How to best use Nuxeo search tooling
review:
    date: '2019-06-01'
    status: ok
    comment: ''
labels:
    - 3rdparties-elasticsearch
    - elasticsearch
    - nxql

---
# How to best use Nuxeo search tooling
## Problem
You want to fine tune the Nuxeo Search tooling available since Nuxeo 6.0. How to best use it?
## Solution
The Nuxeo NXQL documentation gives an example of usage of the ElasticSearch engine as:

    SELECT * FROM Document WHERE /*+ES: INDEX(dc:title.fulltext) OPERATOR(simple_query_string) */ dc:title = '\"fried eggs\" +(eggplant | potato) -frittata'

Let’s then assume you have 3 notes stored in Nuxeo containing respectively the words “parti”, “partie” and “patrie”

    SELECT * FROM Document WHERE /*+ES: INDEX(dc:title.fulltext^3,dc:description.fulltext) OPERATOR(query_string) */ ecm:fulltext = 'parti*'

(returns "parti" and "partie")

    SELECT * FROM Document WHERE /*+ES: INDEX(dc:title.fulltext^3,dc:description.fulltext) OPERATOR(query_string) */ ecm:fulltext = 'parti'

(returns "parti")

If you want to include in the search results the word "patrie", the operator would rather look like "fuzzy" in the query-string

    SELECT * FROM Document WHERE /*+ES: INDEX(dc:title.fulltext^3,dc:description.fulltext) OPERATOR(query_string) */ ecm:fulltext = 'partie~'

(returns "parti" and "partie" and "patrie")

To take advantage of ElasticSearch in the default page providers, you might need to uncomment in the Nuxeo.conf file the line looking like:

    elasticsearch.override.pageproviders=default_search,document_content,section_content,document_content,tree_children,default_document_suggestion,simple_search,advanced_search,nxql_search,DEFAULT_DOCUMENT_SUGGESTION

Performing this operation enables not to encounter differences in behavior depending on the search engine used, e.g. being consistent in finding both “Héhé” and “Hehe” or “Héhe” in a content view, in the quick search…
## Reference
<https://doc.nuxeo.com/nxdoc/nxql/#elasticsearch-nxql-hints>  
<https://www.elastic.co/guide/en/elasticsearch/reference/current/full-text-queries.html>  
<https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax>  
<https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html>


2019-06-01T17:37:59.359Z
## (c) Nuxeo Support Knowledge Base Outline 2019
