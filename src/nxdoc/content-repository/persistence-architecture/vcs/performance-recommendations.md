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
    ajs-parent-page-id: '22380715'
    ajs-parent-page-title: VCS
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Performance+Recommendations
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Performance+Recommendations'
    page_id: '22380636'
    shortlink: XIBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/XIBVAQ'
    source_link: /display/NXDOC60/Performance+Recommendations
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2016-08-30 13:27'
        message: ''
        version: '12'
    -
        author: Benoit Delbosc
        date: '2016-04-14 10:04'
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


- Check that common properties are set as prefetched.
- If you don't want to match proxies in your query add a "`AND ecm:isProxy = 0`" clause
- If you don't use proxy at all deactivate them at the repository level inside the `<repository>` tag add
    ```
    <proxies enabled="false" />
    ```

- If you are doing NXQL query that involve custom schema you may need to add custom index to make the request efficient. You can trace the slow NXQL queries using [NXP-14845](https://jira.nuxeo.com/browse/NXP-14845).
- Use groups to manage ACL. Adding a user to a group is free, but adding a user in an ACL at the root level has a cost because optimized read ACLs need to be recomputed.
- Consider disabling the OS swapping (sudo swapoff -a) or try to lower the swapiness (vm .swappiness = 1)
- Check the network latency between the application and the database.
- [Configure ImageMagick]({{page space='admindoc60' page='installing-and-setting-up-related-software'}}) to use a single thread.
- [Monitor](/x/gBDF) everything, JVM, GC, VCS cache hit ratio, database, system.

&nbsp;

* * *

</div>

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in the developer documentation'}}

- [Managing Performance]({{page page='managing-performance'}})
- [Tracking the Performances of the Nuxeo Platform]({{page page='tracking-the-performances-of-the-nuxeo-platform'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related pages in the administration documentation'}}

- [Metrics and Monitoring]({{page space='admindoc60' page='metrics-and-monitoring'}})
- [Nuxeo Clustering Configuration]({{page space='admindoc60' page='nuxeo-clustering-configuration'}})

{{/panel}}</div></div>
