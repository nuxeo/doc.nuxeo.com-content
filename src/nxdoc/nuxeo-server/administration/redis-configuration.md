---
title: Redis Configuration
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - lts2016-ok
    - redis
    - clustering
    - bdelbosc
    - multiexcerpt-include
    - lts2017-ok
confluence:
    ajs-parent-page-id: '31032113'
    ajs-parent-page-title: Administration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Redis+Configuration
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Redis+Configuration'
    page_id: '17793513'
    shortlink: 6YEPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/6YEPAQ'
    source_link: /display/NXDOC/Redis+Configuration
tree_item_index: 1100
version_override:
    LTS 2015: 710/admindoc/redis-configuration
    '6.0': 60/admindoc/redis-configuration
    '5.8': 58/admindoc/redis-configuration
history:
    -
        author: Solen Guitter
        date: '2016-05-13 15:15'
        message: se excerpt for compatibility version
        version: '19'
    -
        author: Manon Lumeau
        date: '2016-04-25 15:51'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2016-03-03 13:55'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2016-02-08 13:25'
        message: ''
        version: '16'
    -
        author: Antoine Taillefer
        date: '2016-02-04 12:49'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2016-01-11 15:45'
        message: Update Redis version (3.0 instead of 2.8)
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
    *   Execution of some asynchronous jobs on dedicated nodes (for instance image conversion or fulltext extraction).
    *   A distributed [Transient Store]({{page page='transient-store'}}), required for [Batch Upload]({{page page='batch-upload-endpoint'}}) and [Asynchronous Conversion Works]({{page page='conversion'}}#-anchor-java-api-async-conversions-asynchronous-conversions).
    *   Relying on the `RedisCache` as a distributed implementation of the [Nuxeo Drive]({{page page='nuxeo-drive'}}) synchronization roots cache.
    *   [Cluster cache invalidations]({{page page='nuxeo-and-redis'}}#clustering-invalidation)

Until Nuxeo 9.10 for a robust production instance, the first point is always necessary, which means that Redis should always be used.
Visit [the Nuxeo and Redis page]({{page page='nuxeo-and-redis'}}) for more information.

Since Nuxeo 9.10 [Nuxeo Stream]({{page page='nuxeo-stream'}}) has been introduced and enables to use an alternative work manager that can rely on Kafka for
the cluster mode, this cover point 1 and for [some configuration]({{page page='kafka'}}#no-redis) point 2.


## Configuring Redis

The Nuxeo Platform supports the following Redis versions:

{{{multiexcerpt 'redis_supported_versions' page='Compatibility Matrix'}}}

The following Redis configuration points should be checked:

*   The server memory should be enough to hold the Redis database (the size depends on the usage: transient store, cache, the backlog of asynchronous jobs).
*   [Redis persistence](http://redis.io/topics/persistence) should be configured appropriately for the level of service required. In particular the RDB files should be used as backups and periodically saved offsite.
*   [Redis master-slave replication](http://redis.io/topics/replication) should be set up, for robustness (fast disaster recovery). Note that Nuxeo Platform 5.8 does not yet know how to use the slaves for read-only operation.

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
nuxeo.work.queuing=redis
```

The `nuxeo.redis.port` is self-explanatory, 6379 is the value for a default Redis installation.

The `nuxeo.redis.prefix` is the prefix used for all Nuxeo keys stored and read in Redis. This allows you to use a single Redis server between several Nuxeo cluster installations by having a different prefix for each cluster, but this is not really recommended. All keys used for Work queue management have `work:` added after this prefix. Those related to caching use `cache:` after this prefix. For locking, `lock:` followed by the repository name is used.

The `nuxeo.redis.password`, `nuxeo.redis.database` and `nuxeo.redis.timeout` are standard Redis parameters, although rarely used.

`nuxeo.redis.maxTotal` sets the maximum size of the Redis connections pool (available since 8.2).

`nuxeo.redis.maxIdle` sets the maximum number of Redis idle connections in the pool (available since since 8.2).

When `nuxeo.redis.enabled=true` then the following is automatically activated as well:
`nuxeo.work.queuing=redis`.
(As of Nuxeo Platform 5.8, work queuing is the only use of Redis in the standard Nuxeo modules, so it makes sense to activate both together.)

### TLS/SSL

If you have chosen to configure TLS/SSL then you can set up Nuxeo using `nuxeo.conf` with the following properties:

```
nuxeo.redis.ssl=true
nuxeo.redis.truststore.path
nuxeo.redis.truststore.password
nuxeo.redis.truststore.type
nuxeo.redis.keystore.path
nuxeo.redis.keystore.password
nuxeo.redis.keystore.type
```

See the [Trust Store and Key Store Configuration]({{page page='trust-store-and-key-store-configuration'}}) page for more.


### clustering

To activate the Redis [cluster invalidation]({{page page='nuxeo-and-redis'}}#clustering-invalidation) in cluster mode you need to add:

```
repository.clustering.invalidation=pubsub
```

You can monitor that your cluster is able to send invalidations request using that command:

```
redis-cli psubscribe "*"
```

After editing a document, you should be able to see such message:

```
1) "pmessage"
2) "*"
3) "nuxeo:vcs:default"
4) "2:\xac\xed\x00\x05sr\x00,org.nuxeo.ecm.core.storage.sql.Invalidations..."​
```



## High Availability

If needed, you may configure nuxeo for resolving the Redis server through sentinels.

```
nuxeo.redis.ha.enabled=true
nuxeo.redis.ha.master=mymaster
nuxeo.redis.ha.hosts=sentinel1,sentinel2,....
nuxeo.redis.ha.port=26379
```

Nuxeo will ask sentinel hosts in the declaring order at port 26379 for the server mymaster.
