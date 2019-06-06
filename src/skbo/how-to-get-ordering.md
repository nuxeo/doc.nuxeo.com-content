---
title: How to get ordering by relevance in NXQL processed by ElasticSearch
description: How to get ordering by relevance in NXQL processed by ElasticSearch
review: 
    date: '2019-06-01'
    status: ok
    comment: ''
labels:
    - runtime-administration
    - 3rdparties-elasticsearch
    - elasticsearch
    - nxql

---
# How to get ordering by relevance in NXQL processed by ElasticSearch?
## Problem
You would like to customize the order of presentation of NXQL results when the NXQL query is processed by ElasticSearch as a backend?
## Solution
To get ordering by relevance on an NXQL query which is processed by Elasticsearch, you need to use a fulltext operator and either not providing an ordering or be explicit with a **ORDER BY ecm:fulltextScore**.

The score used to sort the result is the default elasticsearch scoring explained here: <https://www.elastic.co/guide/en/elasticsearch/guide/current/relevance-intro.html>

There are different ways to change the scoring:

+ By editing the elasticsearch mapping and adding boost factor on specific fields. (by default we boost **dc:title** with a factor *2* and **dc:description** with a factor *1.5*)
+ By using NXQL hint, below the `^3` is a boost factor of 3


    SELECT * FROM Document WHERE /*+ES: INDEX(dc:title.fulltext^3,dc:description.fulltext) */ ecm:fulltext = 'foo'

+ By using low level API and building your elasticsearch directly, this way you can pass a function to return a score: <https://www.elastic.co/guide/en/elasticsearch/reference/5.6/query-dsl-function-score-query.html>


2019-06-01T17:37:47.166Z
## (c) Nuxeo Support Knowledge Base Outline 2019
