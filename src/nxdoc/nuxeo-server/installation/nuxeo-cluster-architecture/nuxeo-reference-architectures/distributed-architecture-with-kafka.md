---
title: Distributed Architecture with Kafka
description:
review:
    comment: ''
    date: '2021-03-12'
    status: ok
toc: true
tree_item_index: 300
---

## Architecture Description

Compared to the [Compact Architecture with Kafka]({{page page='compact-architecture-with-kafka'}}), this architecture includes a Kafka cluster and a Zookeeper cluster so that SPOF (single point of failure) no longer exists, and consequently provides a full high availability and fault tolerant Nuxeo architecture.

In this architecture:
- A load balancer with sticky sessions is used.
- A total of two machines are prepared for the application cluster. Each machine holds a Nuxeo server node and a reverse proxy. More machines can be added later for scalability purpose.
- An Elasticsearch cluster with at least 3 nodes
- A database cluster with at least 2 nodes
- A **Kafka cluster**, with at least 2 nodes, as the default implementation for Nuxeo Stream
- A **Zookeeper cluster**, with at least 3 nodes, to orchestrate the Kafka cluster nodes, Kafka topics, partitions etc.   

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Reference Architectures/2-simple-architecture-with-kafka.png
    name: Screenshot 2021-03-11 at 11.25.12.png
    server#diagram#up_to_date
--}}
![2-simple-architecture-with-kafka.png](nx_asset://db5d61db-04c5-4fb0-be9b-ab4b3252905a ?w=650,border=true)

## Limitations

At this stage, this architecture is fault tolerant and in high availability, and the architecture should be tuned depending on the kind of requests and loads.

**→ Check the [scalability options]({{page page='nuxeo-scalability-options'}})** to:
- Add Nuxeo nodes for specific loads (API node, worker node and import nodes)
- Set up data partitioning with database sharding and a multi-repository approach
