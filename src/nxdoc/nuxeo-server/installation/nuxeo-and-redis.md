---
title: Nuxeo and Redis
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - redis
    - bdelbosc
    - rediscomponent
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '3866685'
    ajs-parent-page-title: Installation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+and+Redis
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+and+Redis'
    page_id: '23367045'
    shortlink: hY1kAQ
    shortlink_source: 'https://doc.nuxeo.com/x/hY1kAQ'
    source_link: /display/NXDOC/Nuxeo+and+Redis
tree_item_index: 1500
history:
    -
        author: Benoit Delbosc
        date: '2016-07-22 08:03'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2016-06-09 12:18'
        message: ''
        version: '14'
    -
        author: Benoit Delbosc
        date: '2016-05-13 16:02'
        message: ''
        version: '13'
    -
        author: Antoine Taillefer
        date: '2016-02-04 12:54'
        message: ''
        version: '12'
    -
        author: Antoine Taillefer
        date: '2016-02-04 12:52'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2015-12-14 10:09'
        message: Formatting
        version: '10'
    -
        author: Benoit Delbosc
        date: '2015-12-11 16:43'
        message: ''
        version: '9'
    -
        author: Benoit Delbosc
        date: '2015-12-11 16:12'
        message: ''
        version: '8'
    -
        author: Benoit Delbosc
        date: '2015-12-11 16:10'
        message: Add a note about VCS row invalidation
        version: '7'
    -
        author: Manon Lumeau
        date: '2015-04-27 14:31'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2015-03-06 13:07'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2015-03-06 13:06'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2015-03-06 10:37'
        message: ''
        version: '3'
    -
        author: Thierry Delprat
        date: '2015-03-05 16:40'
        message: ''
        version: '2'
    -
        author: Thierry Delprat
        date: '2015-03-05 16:38'
        message: ''
        version: '1'
---

## Principles

{{! excerpt}}
Nuxeo provides a Redis integration via the `nuxeo-core-redis` bundle.
{{! /excerpt}}

Redis is not a hard requirement for running the Nuxeo Platform; it is used as a backend to provide alternate implementation of some services inside the platform. However, we do provide these implementations because we think they can be useful.

{{#> callout type='info' }}
Nuxeo can use Redis to store both data to be persisted (e.g. jobs list) and transient data (e.g. cache data). After a normal cluster shutdown, you can flush (erase) the transient data in Redis. Note however that Nuxeo can not work with a Redis configured as an [LRU cache](http://redis.io/topics/lru-cache); there should be no eviction under memory pressure.
{{/callout}}

{{#> callout type='warning' }}
Using Nuxeo in cluster mode does not necessarily need Redis, for more info check the related documentation below.
{{/callout}}

## Nuxeo Core Cache

Nuxeo Core Cache provides a service to declare and use caches. This cache system is used for:

- Nuxeo Directories (caching directories entries)
- UserManager (caching principals)
- Nuxeo Drive (caching synchronization roots)

It can also be used in your custom code.

The Cache has a default "in memory" implementation, but `nuxeo-core-redis` provides another implementation that allows to:

- Have an out of JVM memory cache storage.</br>
  It opens the way to have big caches without hurting the JVM.
- Share the same cache between several Nuxeo nodes.</br>
  In cluster mode this can increase cache efficiency.
- Manage cluster wide invalidations.</br>
  Updating the user on one node will impact the central cache: all nodes see the exact same data.

You can configure the backend storage on a per cache basis:&nbsp;Directory A could use Redis while directory B could use in memory.

## Work Manager

The WorkManager handles asynchronous jobs:

- Schedule Jobs and store them in queues
- Assign execution slots to queues
- Execute the jobs

In the default implementation, job queues are in the JVM memory. But this model has some limitations:

- Stacking a lot of jobs will consume JVM Memory
- In cluster mode each Nuxeo node maintains its own queue
- When a Nuxeo server is restarted, all the queued jobs are lost

`nuxeo-core-redis` provides an alternate implementation of the queuing system based on Redis:

- Jobs are then stored outside of JVM memory.</br>
  That's why Work have to be serializable: they are serialized and stored in Redis.
- Jobs can be shared across cluster nodes.</br>
  This allows to dedicate some nodes to some specific processing.
- Jobs survive a Nuxeo restart.</br>
  When Redis persistence is activated, the jobs even survive a Redis restart.

## Lock Manager

By default Lock managed on documents are stored in the repository backend. When the locking system is heavily used, it can create a lot of very small transactions against the database backend.

`nuxeo-core-redis` provides a Redis-based implementation of the locking system that is resilient as the database implementation, but easier to scale.

## Clustering invalidation

### Visual Content Store ([VCS](https://doc.nuxeo.com/nxdoc/vcs/)) Row Cache Invalidation

Managing *VCS* (Meaning RDBMS) row cache invalidations with [Redis instead of using the database](https://jira.nuxeo.com/browse/NXP-14923) can improve performance on concurrent writes and provides synchronous invalidations.

### Document Based Storage ([DBS](https://doc.nuxeo.com/nxdoc/dbs/)) Cache Invalidation

For Nuxeo 8.10 and 9.10 the *DBS* layer (used to connect with MongoDB or Marklogic) [has a cache](https://jira.nuxeo.com/browse/NXP-20640) its invalidation in cluster mode requires Redis.

{{#> callout type='warning' }}
A Nuxeo No-Redis cluster configuration can be applied at certain conditions, see: [No-Redis Nuxeo Cluster Configuration](https://doc.nuxeo.com/nxdoc/kafka/#andquotno-redisandquot-nuxeo-cluster) for more info.
{{/callout}}

## Transient Store

The `RedisTransientStore`&nbsp;is a Redis-based implementation of the [Transient Store]({{page page='transient-store'}}).

It is not anymore the **default** Transient Store when Redis is enabled since **LTS2019**, more details in: [NXP-26581](https://jira.nuxeo.com/browse/NXP-26581).

The old Redis Transient Store can still be used with `nuxeo.transientstore.provider=redis` set in the `nuxeo.conf`, but it is not cluster safe. Binaries are temporarily stored in the Nuxeo node's file system. More details in: [NXP-21871](https://jira.nuxeo.com/browse/NXP-21871).

## Clean-up

The following code can be used with the Redis client to delete old workers marked as running:
```
local keys = redis.call('KEYS', 'nuxeo:work:run:*')

for _,k in ipairs(keys) do
	redis.call('DEL', k)
end
```
Copy this code to a file named `delete_running_works.lua`, change the Redis prefix if required (the default prefix value is `nuxeo`) run the following command line:
```
redis-cli --eval /path/to/delete_running_works.lua
```

It finds all keys prefixed with `nuxeo:work:run` then delete these keys.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading='Related Documentation'}}

- [Redis Configuration]({{page page='redis-configuration'}})
- [Work and WorkManager]({{page page='work-and-workmanager'}})
- [Nuxeo Clustering Configuration]({{page page='nuxeo-clustering-configuration'}})
- [No-Redis Nuxeo Clustering Configuration]({{page page='nxdoc/kafka/#andquotno-redisandquot-nuxeo-cluster'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

&nbsp;

</div></div>
