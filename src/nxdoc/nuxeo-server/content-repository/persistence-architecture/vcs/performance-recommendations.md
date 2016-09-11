---
title: Performance Recommendations
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - vcs
    - performance
    - vcs-component
confluence:
    ajs-parent-page-id: '3342350'
    ajs-parent-page-title: VCS
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Performance+Recommendations
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Performance+Recommendations'
    page_id: '12915243'
    shortlink: KxLF
    shortlink_source: 'https://doc.nuxeo.com/x/KxLF'
    source_link: /display/NXDOC/Performance+Recommendations
history:
    - 
        author: Benoit Delbosc
        date: '2016-04-20 09:28'
        message: dd a note about redis invalidation in cluster mod
        version: '15'
    - 
        author: Benoit Delbosc
        date: '2016-04-14 10:03'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2015-10-15 09:49'
        message: ''
        version: '13'
    - 
        author: Florent Guillaume
        date: '2015-10-13 15:08'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2015-10-12 08:45'
        message: ''
        version: '11'
    - 
        author: Manon Lumeau
        date: '2014-08-05 11:04'
        message: ''
        version: '10'
    - 
        author: Benoit Delbosc
        date: '2014-08-04 10:17'
        message: ''
        version: '9'
    - 
        author: Benoit Delbosc
        date: '2014-08-04 10:16'
        message: ''
        version: '8'
    - 
        author: Benoit Delbosc
        date: '2014-08-04 10:14'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-01-16 12:18'
        message: Formatting
        version: '6'
    - 
        author: Benoit Delbosc
        date: '2014-01-15 11:00'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-09-04 15:53'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-08-27 15:46'
        message: Added ImageMagick configuration
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-04-08 17:22'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-04-08 16:58'
        message: ''
        version: '1'

---
<div class="outline-text-2">

*   Check that common properties are set as prefetched (see [org.nuxeo.ecm.core.schema.TypeService--configuration](http://explorer.nuxeo.com/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.core.schema.TypeService--configuration)&nbsp;and&nbsp;[org.nuxeo.ecm.core.schema.TypeService--doctype](http://explorer.nuxeo.com/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.core.schema.TypeService--doctype)).
*   If you don't want to match proxies in your query, add a `AND ecm:isProxy = 0` clause.
*   If you don't use proxies at all, deactivate them at the repository level by adding inside the `<repository>` tag the following:

    ```
    <proxies enabled="false"/>
    ```

*   If you are doing NXQL query that involve custom schema you may need to add custom index to make the request efficient. You can trace the slow NXQL queries using [NXP-14845](https://jira.nuxeo.com/browse/NXP-14845).
*   Use groups to manage ACL. Adding a user to a group is free, but adding a user in an ACL at the root level has a cost because optimized read ACLs need to be recomputed.
*   When using Nuxeo in cluster mode, consider using [Redis VCS row cache invalidation]({{page space='NXDOC' page='Nuxeo and+Redis#NuxeoandRedis-VCSRowCacheInvalidation'}}).
*   Consider disabling the OS swapping (`sudo swapoff -a`) or try to lower the swapiness (`<span class="pln">vm</span>`<span class="pun">.</span><span class="pln">swappiness</span> <span class="pun">=</span><span class="lit">1</span><span class="pln">)</span>
*   Check the network latency between the application and the database.
*   [Configure ImageMagick]({{page page='installing-and-setting-up-related-software'}}) [to use a single thread.](http://doc.nuxeo.com/x/gBDF)
*   [Monitor](http://doc.nuxeo.com/x/gBDF) everything, JVM, GC, VCS cache hit ratio, database, system.

&nbsp;

* * *

</div>