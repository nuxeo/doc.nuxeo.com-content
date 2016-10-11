---
title: Performance Recommendations
review:
    comment: ''
    date: ''
    status: ok
labels:
    - vcs
    - performance
confluence:
    ajs-parent-page-id: '17334318'
    ajs-parent-page-title: VCS Architecture
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Performance+Recommendations
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Performance+Recommendations'
    page_id: '17334518'
    shortlink: 9oAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/9oAIAQ'
    source_link: /display/NXDOC58/Performance+Recommendations
history:
    - 
        author: Solen Guitter
        date: '2016-08-30 13:29'
        message: ''
        version: '7'
    - 
        author: Benoit Delbosc
        date: '2016-04-14 10:04'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2014-01-16 12:10'
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

*   Check that common properties are set as prefetched.
*   If you don't&nbsp;want to match proxies in your query add a `AND ecm:isProxy = 0` clause.
*   f you don't use proxy at all deactivate them at the repository level inside the `<repository>` tag add

    ```xml
    <proxies enabled="false" />
    ```

*   If you are doing NXQL query that involve custom schema you may need to add custom index to make the request efficient.
*   Use groups to manage ACL. Adding a user to a group is free, but adding a user in an ACL at the root level has a cost because optimized read ACLs need to be recomputed.
*   Consider disabling the OS swapping (sudo swapoff -a) or try to lower the swapiness (vm .swappiness = 1)
*   Check the network latency between the application and the database.
*   [Configure ImageMagick]({{page space='admindoc58' page='installing-and-setting-up-related-software'}}) to use a single thread.
*   [Monitor](/x/gBDF) everything, JVM, GC, VCS cache hit ratio, database, system.

&nbsp;

* * *

</div>

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in the developer documentation'}}

*   [How to track the performances of your platform]({{page page='how-to-track-the-performances-of-your-platform'}})
*   [Search Results Optimizations]({{page page='search-results-optimizations'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related pages in the administration documentation'}}

*   [Metrics and Monitoring]({{page space='admindoc58' page='metrics-and-monitoring'}})
*   [Nuxeo Clustering Configuration]({{page space='admindoc58' page='nuxeo-clustering-configuration'}})

{{/panel}}</div></div>