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

## Recommendation

For high availability, a Redis cluster with a minimum of **three nodes** is required (for the same reasons as Elasticsearch).

**Redis Enterprise** is our recommended for a high availability Redis cluster, as it gets support from RedisLabs. You may visit the [RedisLabs website](https://redislabs.com/why-redis/redis-enterprise/) for more information about the product.

{{#> callout type='info' title='Redis Enterprise alternative'}}
Redis Sentinel is the open-source option to provide automatic Redis node failover. Nuxeo server's API has been adapted to be used with Redis Sentinel, and some of our customers happily use it in production. Before choosing it though, you need to know that RedisLabs (creators of Redis) does not officially support it, which means that in case of a problem we will not be able to provide support either.
{{/callout}}

## Configuration

Redis server is known to be very resilient, and is less impacting when failing; this is why we considered deploying it in master / slave mode in our architecture schema. If it ever fails, consequences will be rather low as it mainly stores transient data, but you would still lose pending asynchronous jobs in the process. Losing these jobs will result in a loss of features in the application, but will not prevent it from working overall.

Depending on the importance of these jobs in your application (for instance they could be considered mission critical in a DAM application), you have options to provide high availability using Redis. You can refer to our [Nuxeo architecture introduction]({{page page='redis-architecture'}}) page for details. Remember that if choosing sentinel you will need at least 3 Redis nodes to prevent the split-brain problem.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Going further'}}

- [Redis Configuration]({{page version='' space='nxdoc' page='redis-configuration'}})

{{/panel}}</div><div class="column medium-6">
</div></div>
