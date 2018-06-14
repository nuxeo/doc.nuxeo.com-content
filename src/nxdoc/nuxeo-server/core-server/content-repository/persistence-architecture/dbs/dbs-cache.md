---
title: DBS Cache
description: DBS cache configuration
review:
    date: '2017-12-15'
    status: ok
    comment: ''
labels:
    - dbs
    - kleturc
    - lts2017-ok

---

Since 8.10 we've added a cache on DBS repositories. At this moment, MongoDB and MarkLogic connectors use this cache by default.

The cache is handled by Guava caches and uses PubSubService to send invalidations to other nodes in cluster mode.

The cache is shared between all sessions, invalidations are sent at the end of Nuxeo transaction and received at the begin and the end of Nuxeo transaction.

In order to configure it we provide some configuration parameters for `nuxeo.conf`:

| Parameter | Default value | Description |
| ------ | ------- | ---------- | ---- |
| nuxeo.dbs.cache.enabled | `true` | Whether or not the cache is enabled |
| nuxeo.dbs.cache.concurrencyLevel | 10 | Guava cache parameter: Guides the allowed concurrency among update operations. Used as a hint for internal sizing. The table is internally partitioned to try to permit the indicated number of concurrent updates without contention. Because assignment of entries to these partitions is not necessarily uniform, the actual concurrency observed may vary. Ideally, you should choose a value to accommodate as many threads as will ever concurrently modify the table. Using a significantly higher value than you need can waste space and time, and a significantly lower value can lead to thread contention. But overestimates and underestimates within an order of magnitude do not usually have much noticeable impact. A value of one permits only one thread to modify the cache at a time, but since read operations and cache loading computations can proceed concurrently, this still yields higher concurrency than full synchronization. |
| nuxeo.dbs.cache.maxSize | 1000 | The maximum size of DBS cache |
| nuxeo.dbs.cache.ttl | 10 | The expire after write value in minutes |

The cache shared also some metrics under `nuxeo.repositories.default.cache` and `nuxeo.repositories.default.childCache`

Here's a list of Guava metrics shared with Nuxeo metrics system:
  * `average.load.penalty`
  * `eviction.count`
  * `hit.count`
  * `hit.rate`
  * `load.count`
  * `load.exception.count`
  * `load.exception.rate`
  * `load.success.count`
  * `miss.count`
  * `miss.rate`
  * `request.count`
  * `total.load.time`
