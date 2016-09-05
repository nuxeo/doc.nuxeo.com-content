---
title: Redis Configuration
labels:
    - redis
    - clustering
confluence:
    ajs-parent-page-id: '16809993'
    ajs-parent-page-title: Advanced Configuration
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Redis+Configuration
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Redis+Configuration'
    page_id: '17794375'
    shortlink: R4UPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/R4UPAQ'
    source_link: /display/ADMINDOC58/Redis+Configuration
history:
    - 
        author: Solen Guitter
        date: '2013-12-04 13:32'
        message: ''
        version: '1'

---
Nuxeo instances should be configured with a Redis server (in addition to the regular SQL database) whenever:

*   It's important that asynchronous jobs not yet executed be kept across server restarts.
*   In cluster mode and some asynchronous jobs should be executed only on some nodes (for instance image conversion or fulltext extraction).

For a robust production instance, the first point is always necessary, which means that Redis should always be used.

## Configuring Redis

Redis 2.6 or higher must be installed preferably on a separate server.

The following Redis configuration points should be checked:

*   The server memory should be enough to hold the Redis database (which is not expected to be big in Nuxeo Platform 5.8 unless there is a huge backlog of asynchronous jobs).
*   [Redis persistence](http://redis.io/topics/persistence) should be configured appropriately for the level of service required. In particular the RDB files should be used as backups and periodically saved offsite.
*   [Redis master-slave replication](http://redis.io/topics/replication)&nbsp;should be set up, for robustness (fast disaster recovery). Note that Nuxeo Platform 5.8 does not yet know how to use the slaves for read-only operation.

## Configuring Nuxeo for Redis

To make the Nuxeo Platform use Redis, you must activate the following in `bin/nuxeo.conf`:

```
nuxeo.redis.enabled=true
nuxeo.redis.host=redishost
```

The `nuxeo.redis.host` must be the hostname or IP address of your master Redis server. All the Nuxeo instances in a Nuxeo cluster must of course point to the same Redis server.

Also available are (with defaults):

```
nuxeo.redis.port=6379
nuxeo.redis.prefix=nuxeo:work:
nuxeo.redis.password=
nuxeo.redis.database=0
nuxeo.redis.timeout=2000
```

The `nuxeo.redis.port` is self-explanatory, 6379 is the value for a default Redis installation.

The `nuxeo.redis.prefix` is the prefix used for all Nuxeo keys stored and read in Redis. This allows you to use a single Redis server between several Nuxeo cluster installations by having a different prefix for each cluster, but this is not really recommended.

The `nuxeo.redis.password`, `nuxeo.redis.database` and `nuxeo.redis.timeout` are standard Redis parameters, although rarely used.

When `nuxeo.redis.enabled=true` then the following is automatically activated as well:

```
nuxeo.work.queuing=redis
```

(As of Nuxeo Platform 5.8, work queuing is the only use of Redis in the standard Nuxeo modules, so it makes sense to activate both together.)