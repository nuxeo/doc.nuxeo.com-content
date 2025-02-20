---
title: Search Engines
description:
labels:
    - deployment
    - bchauvin
    - architecture
    - cluster
    - content-review-lts2017
    - lts2019-ok
review:
    comment: ''
    date: '2021-03-10'
    status: ok
toc: true
tree_item_index: 600
---

## Concept

A search engine such as Elasticsearch (or OpenSearch)  is used to relieve the database from the costliest operations:
- It keeps indexes on the documents to improve search performance, on very high volumes.
- It stores the document's audit log. Since every operation on a document in Nuxeo is stored for possible audit purposes, the corresponding table would grow very rapidly and possibly reach millions of tuples when stored in the database. Using Elasticsearch, this is not a problem anymore.
- It scales horizontally and provides constant performance even with growing content size.

A search engine is a mandatory component of the Nuxeo architecture: in a development environment, it makes sense to use the embedded OpenSearch package, but a Nuxeo production environment expects an externalized Elasticsearch or OpenSearch cluster. Refer to the [Search setup]({{page page='search-setup'}}) documentation for more information.

## Recommendation

At least three nodes for the Elasticsearch cluster: Remember **you always need to have an odd number of machines for Elasticsearch** (3, 5, 7, etc.). It is required in order to safely handle failover when a network partitioning error occurs.

- Imagine that your cluster gets cut in half: 2 nodes on side A cannot communicate anymore with the third node on side B. In this situation, if the master node is the one isolated on side B, failover can be achieved properly because a majority (the 2 nodes on side A) can elect a new master node between them and keep service available. If you had 4 nodes in the same situation, service wouldn't be available anymore because a majority could not be obtained when voting. This is known as the split-brain problem. This also means that the minimum number of nodes to obtain high availability is 3.

## Configuration

The Elasticsearch configuration is detailed in the following documentation:
-  [Elasticsearch Cluster Recommended Tuning]({{page version='' space='nxdoc' page='search-setup'}}#installing-the-elasticsearch-cluster)
