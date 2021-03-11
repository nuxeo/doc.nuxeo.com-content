---
title: Redis
description: 
review:
    comment: ''
    date: '2021-03-10'
    status: ok
toc: true
tree_item_index: 800
---

## Concepts

Redis can be used for the WorkManager, KeyValue Store and PubSub service.

When a Redis instance or cluster is set up, you can safely stop your Nuxeo server nodes anytime without being worried about losing these jobs in the process.

Keep in mind that Redis is always limited by its available memory which can be a problem on a mass operation.

## Recommandation

For high availability, a Redis cluster with a minimum of **three nodes** is required (for the same reasons as Elasticsearch).

**Redis Enterprise** is our recommended for a high availability Redis cluster, as it gets support from RedisLabs. You may visit the [RedisLabs website](https://redislabs.com/why-redis/redis-enterprise/) for more information about the product.

{{#> callout type='info' title='Redis Enterprise alternative'}}
Redis Sentinel is the open-source option to provide automatic Redis node failover. Nuxeo server's API has been adapted to be used with Redis Sentinel, and some of our customers happily use it in production. Before choosing it though, you need to know that RedisLabs (creators of Redis) does not officially support it, which means that in case of a problem we will not be able to provide support either.
{{/callout}}

## Configuration

The Elasticsearch configuration is detailed in the following documentation:
-  [Elasticsearch cluster recommended tuning]({{page version='' space='nxdoc' page='elasticsearch-setup'}}#installing-the-elasticsearch-cluster) 

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Going further'}}

- [Redis configuration]({{page version='' space='nxdoc' page='redis-configuration'}})

{{/panel}}</div><div class="column medium-6">
</div></div>