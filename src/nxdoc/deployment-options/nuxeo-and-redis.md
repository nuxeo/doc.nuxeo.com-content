---
title: Nuxeo and Redis
labels:
    - redis
    - content-review-lts2015
    - rediscomponent
toc: true
confluence:
    ajs-parent-page-id: '28475525'
    ajs-parent-page-title: Deployment Options
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Nuxeo+and+Redis
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Nuxeo+and+Redis'
    page_id: '28475669'
    shortlink: FYGyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/FYGyAQ'
    source_link: /display/NXDOC710/Nuxeo+and+Redis
history:
    - 
        author: Benoit Delbosc
        date: '2016-07-22 07:45'
        message: dd a note about redis usage and memory evictio
        version: '14'
    - 
        author: Benoit Delbosc
        date: '2016-05-13 15:55'
        message: ''
        version: '13'
    - 
        author: Nicolas Chapurlat
        date: '2016-04-01 08:55'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2016-02-08 13:30'
        message: Add Transient Store section
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

The idea is that, at least for now, Redis is not a hard requirement for running the Nuxeo Platform; We simply use Redis as a backend to provide alternate implementation of some services inside the platform. However, we do provide these implementations because we think they can be useful.

{{#> callout type='warning' }}

Nuxeo uses Redis to store transient data, after a normal cluster shutdown, the content of Redis can be flushed (erased). Note however that Nuxeo can not work with a Redis configured as [LRU cache](http://redis.io/topics/lru-cache), there should be no eviction under memory pressure, hopefully this is the default policy of Reds.

{{/callout}}

&nbsp;

## Nuxeo Core Cache

Nuxeo Core Cache provides a service to declare and use caches. This cache system:

*   is used in Nuxeo Directories (caching directories entries)
*   is used in UserManager (caching principals)
*   is used in Nuxeo Drive (caching synchronization roots)
*   can be used in your custom code&nbsp;

The Cache has a default "in memory" implementation, but `nuxeo-core-redis` provides another implementation that allows:

*   To have out of JVM memory cache storage.
    It opens the way to have big caches without hurting the JVM.
*   To share the same cache between several Nuxeo nodes.
    In cluster mode this can increase cache efficiency.
*   To manage cluster wide invalidations.
    Updating the user on one node will impact the central cache: all nodes see the exact same data.

You can configure the backend storage on a per cache basis:&nbsp;Directory A could use Redis while directory B could use in memory.

## Work Manager

The WorkManager handles asynchronous jobs:

*   Schedule Jobs and store them in queues
*   Assign execution slots to queues&nbsp;
*   Execute the jobs

In the default implementation, job queues are in the JVM memory. But this model has some limitations:

*   Stacking a lot of jobs will consume JVM Memory
*   In cluster mode each Nuxeo node maintains its own queue
*   When a Nuxeo server is restarted, all the queued jobs are lost

`nuxeo-core-redis` provides an alternate implementation of the queuing system based on Redis:

*   Jobs are then stored outside of JVM memory.
    That's why Work have to be serializable: they are serialized and stored inside Redis.
*   Jobs can be shared across cluster nodes.
    This allows to dedicate some nodes to some specific processing.
*   Jobs survive a Nuxeo restart.
    When Redis persistence is activated, the jobs even survive a Redis restart.

## Lock Manager

By default Lock managed on documents are stored inside the repository backend. When the locking system is heavily used, it can create a lot of very small transactions against the database backend.

`nuxeo-core-redis` provides a Redis-based implementation of the locking system that is resilient as the database implementation, but easier to scale.

## VCS Row Cache Invalidation

Since 7.4 ({{jira server='Nuxeo Issue Tracker' key='NXP-14923'}}) it is possible to manage VCS row cache invalidations with Redis instead of using the database.

To do so you need to change the repository configuration&nbsp;`default-repository-config.xml.nxftl` to add the following line inside the&nbsp;`repository`element:

```
 <clusterInvalidatorClass>org.nuxeo.ecm.core.redis.contribs.RedisClusterInvalidator</clusterInvalidatorClass>
```

Since 8.1 and 7.10-HF02 you only need to add this option in the&nbsp;`nuxeo.conf`

```
repository.clustering.invalidation=redis
```

## Transient Store

The `RedisTransientStore` is a Redis-based implementation of the [Transient Store]({{page page='transient-store'}}).

It is the one used by the default Transient Store if Redis is enabled.

It allows the parameters associated to the stored blobs to be shared across cluster nodes.

&nbsp;

* * *