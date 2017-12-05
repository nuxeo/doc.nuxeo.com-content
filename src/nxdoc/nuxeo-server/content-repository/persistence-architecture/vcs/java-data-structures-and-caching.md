---
title: Java Data Structures and Caching
review:
    comment: ''
    date: '2016-12-07'
    status: ok
labels:
    - lts2016-ok
    - vcs
    - fguillaume
    - cache
    - vcs-component
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '3342350'
    ajs-parent-page-title: VCS
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Java+Data+Structures+and+Caching
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Java+Data+Structures+and+Caching'
    page_id: '12915241'
    shortlink: KRLF
    shortlink_source: 'https://doc.nuxeo.com/x/KRLF'
    source_link: /display/NXDOC/Java+Data+Structures+and+Caching
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2016-08-30 13:08'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2015-12-10 14:07'
        message: Adding related pages
        version: '5'
    -
        author: Florent Guillaume
        date: '2015-12-09 15:20'
        message: details
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
This page described low-level implementation details of the VCS backend.

Here is a list of Java objects that hold data:

*   **Row**: holds a single database row using a map (or a list of value for a multi-valued properties).
*   **Fragment**: a Row with a state, the original data are kept to pinpoint dirty fields that will need to be synchronized with the database at the next save. There are two kind of fragments: SimpleFragment to hold single database row and CollectionFragment to hold multi-valued fields. Fragments and Rows manipulates non-typed data (Serializable).
*   **Node**: holds a map of fragments (one per table, roughly equivalent to one per schema) and it gives access to typed properties.
*   **Selection**: holds a list of IDs for a node. It is equivalent to a cached subset of a query for the children, versions or proxies of a document.
*   **Document**: the low-level document (SQLDocumentLive), holding a Node and implementing the Session SPI.
*   **DocumentModel**: the high level document representation, synchronized with the Document at getDocument/saveDocument time, and has knowledge about rights, proxies, versions.

When a session is manipulating documents, the underlying Row objects are loaded, updated, deleted using a Mapper.

When a session is saved, the Mapper send SQL DML instructions in batch to minimize database round trip.

The main database caching is done at the Row level.

When performing a NXQL query, the result list of IDs is not cached. Only the database rows needed to represent the documents are cached.

After a commit the session sends cache invalidation to other sessions (or to other Nuxeo instances when in cluster mode). Before starting a new transaction the session processes the invalidation to update its cache.

The default cache implementation uses a cache per session. The cache is done with Java SoftReference map. This means that cache values can be garbage collected on memory pressure. The cache size depends on the size of the JVM heap and on the memory pressure.

The cache implementation is pluggable so it is possible to try other strategies like having an common cache shared by all sessions. Another available implementation based on Ehcache is the UnifiedCachingMapper.

The Selection (list of children, proxies or versions) are also cached using SoftReference at the session level.

Both Row and Selection caches expose metrics so it is possible to get the cache hit ratio.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in this documentation'}}

- [VCS]({{page page='vcs'}})
- [Performance Recommendations]({{page page='performance-recommendations'}})

{{/panel}}</div><div class="column medium-6">

</div></div>
