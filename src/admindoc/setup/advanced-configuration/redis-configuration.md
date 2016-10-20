---
title: Redis Configuration
review:
    comment: ''
    date: ''
    status: ok
labels:
    - redis
    - clustering
confluence:
    ajs-parent-page-id: '21921850'
    ajs-parent-page-title: Advanced Configuration
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: Redis+Configuration
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC60/Redis+Configuration'
    page_id: '21921864'
    shortlink: SIBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/SIBOAQ'
    source_link: /display/ADMINDOC60/Redis+Configuration
tree_item_index: 1000
version_override:
    'FT': 'nxdoc/redis-configuration'
history:
    -
        author: Maxime Hilaire
        date: '2015-08-03 15:13'
        message: ''
        version: '7'
    -
        author: Stéphane Lacoin
        date: '2015-05-18 14:26'
        message: ''
        version: '6'
    -
        author: Florent Guillaume
        date: '2014-11-12 12:03'
        message: Info about prefix.
        version: '5'
    -
        author: Solen Guitter
        date: '2013-12-04 13:31'
        message: use Nuxeo Platform 5.8 instead of Nuxeo 5.8
        version: '4'
    -
        author: Florent Guillaume
        date: '2013-11-14 17:49'
        message: ''
        version: '3'
    -
        author: Florent Guillaume
        date: '2013-11-14 17:38'
        message: ''
        version: '2'
    -
        author: Florent Guillaume
        date: '2013-11-14 16:50'
        message: ''
        version: '1'

---
Nuxeo instances should be configured with a Redis server (in addition to the regular SQL database) whenever:

*   It's important that asynchronous jobs not yet executed be kept across server restarts.
*   In cluster mode and some asynchronous jobs should be executed only on some nodes (for instance image conversion or fulltext extraction).

For a robust production instance, the first point is always necessary, which means that Redis should always be used.

## Configuring Redis

Redis 2.8 must be installed preferably on a separate server.

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
nuxeo.redis.prefix=nuxeo:
nuxeo.redis.password=
nuxeo.redis.database=0
nuxeo.redis.timeout=2000
```

The `nuxeo.redis.port` is self-explanatory, 6379 is the value for a default Redis installation.

The `nuxeo.redis.prefix` is the prefix used for all Nuxeo keys stored and read in Redis. This allows you to use a single Redis server between several Nuxeo cluster installations by having a different prefix for each cluster, but this is not really recommended. All keys used for Work queue management have `work:` added after this prefix. Those related to caching use&nbsp;`cache:` after this prefix. For locking, `lock:` followed by the repository name is used.

The `nuxeo.redis.password`, `nuxeo.redis.database` and `nuxeo.redis.timeout` are standard Redis parameters, although rarely used.

When `nuxeo.redis.enabled=true` then the following is automatically activated as well:

```
nuxeo.work.queuing=redis
```

(As of Nuxeo Platform 5.8, work queuing is the only use of Redis in the standard Nuxeo modules, so it makes sense to activate both together.)

## High Availability

If needed, you may configure nuxeo for resolving the redis server through sentinels (since HF12)

```
nuxeo.redis.ha.enabled=true
nuxeo.redis.ha.master=mymaster
nuxeo.redis.ha.hosts=sentinel1,sentinel2,....
nuxeo.redis.ha.port=26379
```

Nuxeo will ask sentinel hosts in the declaring order at port 26379 for the server mymaster.
