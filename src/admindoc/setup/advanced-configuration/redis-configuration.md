---
title: Redis Configuration
review:
    comment: ''
    date: ''
    status: ok
labels:
    - redis
    - clustering
toc: true
confluence:
    ajs-parent-page-id: '27604662'
    ajs-parent-page-title: Advanced Configuration
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: Redis+Configuration
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC710/Redis+Configuration'
    page_id: '27604684'
    shortlink: zDalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/zDalAQ'
    source_link: /display/ADMINDOC710/Redis+Configuration
tree_item_index: 900
version_override:
    'FT': /nxdoc/redic-configuration
    '6.0': 60/admindoc/redis-configuration
    '5.8': 58/admindoc/redis-configuration
history:
    -
        author: Manon Lumeau
        date: '2016-07-25 09:31'
        message: ''
        version: '20'
    -
        author: Benoit Delbosc
        date: '2016-07-22 08:02'
        message: Explain how to flush redis db
        version: '19'
    -
        author: Benoit Delbosc
        date: '2016-06-13 13:04'
        message: >-
            Remove redis preferable location because it is not explained there
            are many options that deserve a new paragraph
        version: '18'
    -
        author: Solen Guitter
        date: '2016-05-16 08:44'
        message: Update Redis supported versions.
        version: '17'
    -
        author: Benoit Delbosc
        date: '2016-04-20 10:07'
        message: Update with vcs row cache invalidation info
        version: '16'
    -
        author: Solen Guitter
        date: '2016-03-03 13:54'
        message: Add nuxeo.redis.maxIdle and nuxeo.redis.maxTotal parameters
        version: '15'
    -
        author: Solen Guitter
        date: '2016-02-08 13:25'
        message: ''
        version: '14'
    -
        author: Benoit Delbosc
        date: '2015-12-16 15:05'
        message: ''
        version: '13'
    -
        author: Benoit Delbosc
        date: '2015-12-16 15:03'
        message: ''
        version: '12'
    -
        author: Benoit Delbosc
        date: '2015-12-16 15:01'
        message: ''
        version: '11'
    -
        author: Antoine Taillefer
        date: '2015-12-09 13:43'
        message: ''
        version: '10'
    -
        author: Antoine Taillefer
        date: '2015-12-09 13:37'
        message: ''
        version: '9'
    -
        author: Maxime Hilaire
        date: '2015-08-03 15:14'
        message: ''
        version: '8'
    -
        author: Stéphane Lacoin
        date: '2015-05-18 14:18'
        message: ''
        version: '7'
    -
        author: Stéphane Lacoin
        date: '2015-05-18 14:13'
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
Nuxeo instances should be configured with a Redis server (in addition to the regular SQL database) in the following cases:

1.  When it's important that asynchronous jobs not yet executed be kept across server restarts.
2.  In cluster mode to allow:
    *   Execution of some asynchronous jobs on dedicated nodes (for instance image conversion or full-text extraction).
    *   A distributed [Transient Store](/x/AQalAQ), required for&nbsp;[Batch Upload](/x/OYLZ)&nbsp;and&nbsp;[Asynchronous Conversion Works](/x/PYMlAQ#Conversion-AsynchronousConversions).
    *   Relying on the `RedisCache`&nbsp;as a distributed implementation of the [Nuxeo Drive]({{page space='userdoc' page='nuxeo-drive'}}) synchronization roots cache.
    *   Efficient repository low level cache invalidations ([VCS row cache invalidation]({{page space='NXDOC' page='Nuxeo and+Redis#NuxeoandRedis-VCSRowCacheInvalidation'}}))

For a robust production instance, the first point is always necessary, which means that Redis should always be used.

## Configuring Redis

The Nuxeo Platform supports the following Redis versions: 2.8.x and 3.0.x.

The following Redis configuration points should be checked:

*   The `maxmemory-policy`should be set to `noeviction`which is the default setting of Redis
*   The server memory should be enough to hold the Redis database (the size depends on the usage: transient store, cache, the backlog of asynchronous jobs ...).
*   [Redis persistence](http://redis.io/topics/persistence) should be configured appropriately for the level of service required. In particular the RDB files should be used as backups and periodically saved offsite.
*   [Redis master-slave replication](http://redis.io/topics/replication)&nbsp;should be set up, for robustness (fast disaster recovery). Note that Nuxeo Platform does not yet know how to use the slaves for read-only operation.

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
nuxeo.redis.maxTotal=16
nuxeo.redis.maxIdle=8
```

The `nuxeo.redis.port` is self-explanatory, 6379 is the value for a default Redis installation.

The `nuxeo.redis.prefix` is the prefix used for all Nuxeo keys stored and read in Redis. This allows you to use a single Redis server between several Nuxeo cluster installations by having a different prefix for each cluster, but this is not really recommended. All keys used for Work queue management have `work:` added after this prefix. Those related to caching use&nbsp;`cache:` after this prefix. For locking, `lock:` followed by the repository name is used.

The `nuxeo.redis.password`, `nuxeo.redis.database` and `nuxeo.redis.timeout` are standard Redis parameters, although rarely used.

When `nuxeo.redis.enabled=true` then the following is automatically activated as well:

```
nuxeo.work.queuing=redis
```

(As of Nuxeo Platform 5.8, work queuing is the only use of Redis in the standard Nuxeo modules, so it makes sense to activate both together.)

`nuxeo.redis.maxTotal` sets the maximum size of the Redis connections pool (available since HF-05).

`nuxeo.redis.maxIdle` sets the maximum number of Redis idle connections in the pool (available since HF-05).

## High Availability

If needed, you may configure nuxeo for resolving the redis server through sentinels.

```
nuxeo.redis.ha.enabled=true
nuxeo.redis.ha.master=mymaster
nuxeo.redis.ha.hosts=sentinel1,sentinel2,....
nuxeo.redis.ha.port=26379
```

Nuxeo will ask sentinel hosts in the declaring order at port 26379 for the server mymaster.

## Flushing the Redis Content

The Redis data are transient but should not be flushed while Nuxeo is running, in some case it needs to be reset:

*   After a normal Nuxeo cluster shutdown when there are no async job running, the flush is not necessary but possible.
*   When performing testing and killing abruptly Nuxeo process.
*   After a crash when some inconsistencies are visible in the work manager, like worker being marked as running forever.

Once the Nuxeo instance or cluster is stopped you can drop the Redis data using the&nbsp;`redis-cli`&nbsp;command line and send a&nbsp;`flushdb` commmand, Nuxeo is using the&nbsp;`db 0` per default.
