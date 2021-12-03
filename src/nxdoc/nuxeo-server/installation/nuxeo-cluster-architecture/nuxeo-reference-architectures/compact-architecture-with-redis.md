---
title: Compact Architecture with Redis
description:
review:
    comment: ''
    date: '2021-03-12'
    status: ok
toc: true
tree_item_index: 100
---

## Architecture Description

In this architecture:
- A **load balancer** with sticky sessions is used.
- A total of two machines are prepared for the application cluster. Each machine holds a **Nuxeo server node**, a **Redis node**, and a **reverse proxy**. More machines can be added later for scalability purpose.
- Since we have **two Redis nodes**, we take advantage from it to configure Redis in [master / slave mode](https://redis.io/topics/replication).
- An **Elasticsearch cluster** with at least 3 nodes.
- A **database cluster** with at least 2 nodes.
- **Chronicle Queue** as the default implementation for Nuxeo Stream.

<!-- Source: https://lucid.app/lucidchart/8db3f1df-ea81-4796-ae42-d7f77ab3a9fd/edit?beaconFlowId=CD3C7B1BC539200B&page=0_0#-->

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Reference Architectures/1-basic-architecture.png
    name: 1-basic-architecture.png
    server#schema#up_to_date
--}}
![1-basic-architecture.png](nx_asset://e8b0853a-283e-44bd-97f8-27fd16fe98b9 ?w=650,border=true)

This architecture can be improved by externalizing the Redis node inside a specific cluster:  

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Reference Architectures/1-basic-architecture-v2.png
    name: 1-basic-architecture-v2.png
    server#schema#up_to_date
--}}
![1-basic-architecture-v2.png](nx_asset://a48c5a80-712c-4b08-a4c2-7cbe46f48c98 ?w=650,border=true)

## Limitations

As detailed in the [messaging system page]({{page version='' space='nxdoc' page='messaging-system-architecture'}}#alternative-configuration-using-redis-no-kafka) this is not a recommended solution because:

- The processing done with the Bulk Service relies on Chronicle Queue which is not distributed (poor performance) and not fault tolerant.
- The WorkManager Queuing is limited by the amount of Redis memory and in case of failure Works might be lost.

**→ Jump to the [Compact architecture with Kafka]({{page page='compact-architecture-with-kafka'}})** to:
- Remove Redis and Chronicle Queue limitations
- Benefits from Kafka advantages
