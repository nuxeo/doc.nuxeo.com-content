---
title: Compact Architecture with Kafka
description:
review:
    comment: ''
    date: '2021-03-12'
    status: ok
toc: true
tree_item_index: 200
---

## Architecture Description

This is a compact architecture because it includes a single Kafka node running in standalone mode (KRaft), so there is no separate coordination service to deploy.

In this architecture:
- A load balancer with sticky sessions is used.
- A total of two machines are prepared for the application cluster. Each machine holds a Nuxeo server node and a reverse proxy. More machines can be added later for scalability purpose.
- A search engine cluster (OpenSearch, Elasticsearch, or MongoDB Atlas Search) is highly recommended for scalable and performant search, though Nuxeo can also rely on repository search only.
- A database cluster with at least 2 nodes.
- A **Kafka node** as the default implementation for Nuxeo Stream.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Scalability Options/compact-with-kafka-1.png
    name: compact-with-kafka-1.png
    server#schema#up_to_date
--}}
![compact-with-kafka-1.png](/nx_assets/06f4904f-2717-48eb-a48c-16a6b9906da4.png ?w=650,border=true)

## Limitations

- Kafka is the single point of failure. In case of failure, scheduled jobs might be lost. To solve this issue, several Kafka nodes are needed, as well as Zookeeper.

**→ Jump to the [Distributed architecture with Kafka]({{page page='distributed-architecture-with-kafka'}})** to provide a full high availability and fault tolerant Nuxeo architecture.
