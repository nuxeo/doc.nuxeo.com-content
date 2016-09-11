---
title: Nuxeo and Redis
review:
    comment: ''
    date: ''
    status: ok
labels:
    - redis
toc: true
confluence:
    ajs-parent-page-id: '22380917'
    ajs-parent-page-title: Deployment Options
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Nuxeo+and+Redis
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Nuxeo+and+Redis'
    page_id: '23367096'
    shortlink: uI1kAQ
    shortlink_source: 'https://doc.nuxeo.com/x/uI1kAQ'
    source_link: /display/NXDOC60/Nuxeo+and+Redis
history:
    - 
        author: Solen Guitter
        date: '2015-03-06 13:07'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2015-03-06 13:06'
        message: ''
        version: '1'

---
## Principles

{{! excerpt}}

Nuxeo provides a Redis integration via the `nuxeo-core-redis` bundle.

{{! /excerpt}}

The idea is that, at least for now, Redis is not a hard requirement for running the Nuxeo Platform; We simply use Redis as a backend to provide alternate implementation of some services inside the platform. However, we do provide these implementations because we think they can be useful.

## Nuxeo Core Cache

Nuxeo Core Cache provides a service to declare and use caches. This cache system:

*   is used in Nuxeo Directories (caching directories entries)
*   is used in UserManager (caching principals)
*   can be used in your custom code&nbsp;

The Cache has a default "in memory" implementation, but `nuxeo-core-redis` provides a an other implementation that allows:

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

By default Lock managed on documents are stored inside the repository backend.When the locking system is heavily used, it can create a lot of very small transactions against the database backend.

`nuxeo-core-redis` provides a Redis-based implementation of the locking system that is resilient as the database implementation, but easier to scale.

&nbsp;

* * *