---
title: Compact architecture with Kafka
description: 
review:
    comment: ''
    date: '2021-03-12'
    status: ok
toc: true
tree_item_index: 200
---

## Architecture description

Compared to the the [Compact Architecture with Redis]({{page page='compact-architecture-with-redis'}}), this architecture includes Kafka in the architecture. Consequently, Nuxeo Stream and the Bulk Service relies on Kafka, providing significant performance improvement compared to a Redis-based infrastructure. Redis and Chronicle Queue are no longer necessary by the Nuxeo architecture.

This is a compact architecture because it includes a single node for Kafka, so you don't need to deploy Zookeeper to keep track of status of the Kafka cluster nodes, Kafka topics, partitions etc. 

In this architecture:
1. A load balancer with sticky sessions is used.
1. A total of two machines are prepared for the application cluster. Each machine holds a Nuxeo server node and a reverse proxy. More machines can be added later for scalability purpose.
1. An Elasticsearch cluster with at least 3 nodes
1. A database cluster with at least 2 nodes
1. A **Kafka node** as the default implementation for Nuxeo Stream

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Scalability Options/compact-with-kafka-1.png
    name: compact-with-kafka-1.png
    server#schema#up_to_date
--}}
![compact-with-kafka-1.png](nx_asset://06f4904f-2717-48eb-a48c-16a6b9906da4 ?w=650,border=true)

## Limitations

- Kafka is the single point of failure, so, in case of failure, scheduled jobs might be lost. To solve this issue, several Kafka nodes are needed, as well as Zookeeper.

**→ Jump to the [Distributed architecture with Kafka]({{page page='distributed-architecture-with-kafka'}})** to provide a full high availability and fault tolerant Nuxeo architecture.
