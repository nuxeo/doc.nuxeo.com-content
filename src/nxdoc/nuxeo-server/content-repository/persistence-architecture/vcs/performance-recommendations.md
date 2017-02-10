---
title: Performance Recommendations
review:
    comment: ''
    date: '2016-12-07'
    status: ok
labels:
    - lts2016-ok
    - vcs
    - performance
    - vcs-component
tree_item_index: 500
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

Here is a non-exhaustive list of recommendations to get better performance from your VCS configuration:

- Check that common properties are set as prefetched (see [org.nuxeo.ecm.core.schema.TypeService--configuration](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.schema.TypeService--configuration) and [org.nuxeo.ecm.core.schema.TypeService--doctype](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.schema.TypeService--doctype)).
- If you don't want to match proxies in your query, add a `AND ecm:isProxy = 0` clause.
- If you don't use proxies at all, deactivate them at the repository level by adding inside the `<repository>` element the following:
    ```xml
    <proxies enabled="false"/>
    ```
- If you are doing a NXQL query that involves custom schemas you may need to add custom indexes to make the request efficient. You can trace the slow NXQL queries using [NXP-14845](https://jira.nuxeo.com/browse/NXP-14845).
- Use groups to manage ACLs. Adding a user to a group is free, but adding a user in an ACL at the document root level has a cost because optimized read ACLs need to be recomputed for all documents under the root.
- When using Nuxeo in cluster mode, consider using [Redis VCS row cache invalidation]({{page page='nuxeo-and-redis'}}#vcs-row-cache-invalidation).
- Consider disabling the OS swapping (`sudo swapoff -a`) or try to lower the swapiness (`vm.swappiness=1`).
- Check the network latency between the application and the database.
- [Configure ImageMagick]({{page page='installing-and-setting-up-related-software'}}) to use a single thread.
- [Monitor]({{page page='metrics-and-monitoring'}}) everything, JVM, GC, VCS cache hit ratio, database, system.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Managing Performance]({{page page='managing-performance'}})
- [Metrics and Monitoring]({{page page='metrics-and-monitoring'}})
- [Tracking the Performance of the Nuxeo Platform]({{page page='tracking-the-performance-of-the-nuxeo-platform'}})
- [Monitoring Slow NXQL Queries]({{page page='monitoring-slow-nxql-queries'}})

{{/panel}}</div><div class="column medium-6">

</div></div>
