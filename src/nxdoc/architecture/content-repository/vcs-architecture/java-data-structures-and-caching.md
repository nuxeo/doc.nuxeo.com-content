---
title: Java Data Structures and Caching
review:
    comment: ''
    date: ''
    status: ok
labels:
    - vcs
confluence:
    ajs-parent-page-id: '17334318'
    ajs-parent-page-title: VCS Architecture
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Java+Data+Structures+and+Caching
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Java+Data+Structures+and+Caching'
    page_id: '17334517'
    shortlink: 9YAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/9YAIAQ'
    source_link: /display/NXDOC58/Java+Data+Structures+and+Caching
history:
    - 
        author: Solen Guitter
        date: '2016-08-30 13:05'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-09-04 15:52'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-04-08 17:21'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-04-08 16:52'
        message: ''
        version: '1'

---
Here is a list of Java objects that hold data:

*   **Row:** It holds a single database row using a map (or a list of value for a multi-valued properties).
*   **Fragment:** It is a Row with a state, the original data are kept to pinpoint dirty fields that will need to be synchronized with the database. There are two kind of fragments: `SimpleFragment` to hold single database row and `CollectionFragment` to hold multi-valued fields. Fragment and Rows manipulates non-typed data (Serializable).
*   **Node**: It holds a map of fragments and it gives access to typed property.
*   **Selection:** It holds a list of IDs for a node like the list of children, versions or proxies.
*   **DocumentModel**: The high level document representation, it uses a Node and has knowledge about rights, proxies, versions.

When a session is manipulating documents, the underlying Row objects are loaded, updated, deleted using a Mapper.

When a session is saved, the Mapper send SQL DML instructions in batch to minimize database round trip.

The main database caching is done at the Row level.

When performing a NXQL query, the result list of IDs is not cached. Only the database rows needed to represent the documents are cached.

After a commit the session sends cache invalidation to other sessions (or to other Nuxeo instances when in cluster mode). Before starting a new transaction the session processes the invalidation to update its cache.

The default cache implementation uses a cache per session. The cache is done with Java SoftReference map. This means that cache values can be garbage collected on memory pressure. The cache size depends on the size of the JVM heap and on the memory pressure.

The cache implementation is pluggable so it is possible to try other strategies like having an common cache shared by all sessions. There is a beta implementation here:&nbsp;[https://github.com/bdelbosc/nuxeo-core-ehcache-mapper/](https://github.com/bdelbosc/nuxeo-core-ehcache-mapper/).

The Selection (list of children, proxies or versions) are also cached using SoftReference at the session level.

Both Row and Selection caches expose metrics so it is possible to get the cache hit ratio.

&nbsp;