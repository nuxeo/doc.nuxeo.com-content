---
title: Performance Recommendations
review:
    comment: ''
    date: '2019-04-16'
    status: ok
labels:
    - lts2019-ok
    - lts2016-ok
    - vcs
    - performance
    - bdelbosc
    - vcs-component
    - lts2017-ok
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

Here is a non-exhaustive list of recommendations to get better performance:

- For VCS Repository (SQL backend):
  - Check that common properties are set as prefetched (see [org.nuxeo.ecm.core.schema.TypeService--configuration](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.schema.TypeService--configuration) and [org.nuxeo.ecm.core.schema.TypeService--doctype](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.schema.TypeService--doctype)).
  - If you don't want to match proxies in your query, add a `AND ecm:isProxy = 0` clause.
  - If you don't use proxies at all, deactivate them at the repository level by adding inside the `<repository>` element the following:
    ```xml
    <proxies enabled="false"/>
    ```
  - If possible disable the ACL optimization, look at the [perf template](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-distribution/nuxeo-nxr-server/src/main/resources/templates/perf) for more information.


- If you are doing an NXQL query that involves custom schemas, you may need to add custom indexes to make the request efficient. You can trace the slow NXQL queries using [NXP-14845](https://jira.nuxeo.com/browse/NXP-14845).


- Try to switch all page providers to Elasticsearch.


- Use groups to manage ACLs. Adding a user to a group is free, but adding a user in an ACL at the document root level has a cost because optimized read ACLs need to be recomputed for all documents under the root.


- Disable listeners that are not used (see the perf template above).


- Use BIGINT document identifier instead of default UID. This is done by adding a `<idType>sequence</idType>` in the repository contribution.


- Turn the Elasticsearch translog to async for all index ([NXP-25587](https://jira.nuxeo.com/browse/NXP-25587)).

- Tune the Elasticsearch settings and mappings:
  - Remove the `html_strip` char filters if not needed (on repository and audit index), its indexing cost is high on CPU.
  - Remove the [`ecm:binarytext` fulltext index]({{page page='elasticsearch-highlights'}}#elasticsearch-configuration) if highlights are no needed.</br>
&nbsp;
- Disable audit log on loginSuccess (see above perf template).


- Increase the audit writer batch size (`nuxeo.stream.audit.batch.size`).


- Consider disabling the OS swapping (`sudo swapoff -a`) or try to lower the swappiness (`vm.swappiness=1`).


- Check the network latency between the application and the database.


- [Configure ImageMagick]({{page page='installing-and-setting-up-related-software'}}) to use a single thread.


- [Monitor]({{page page='metrics-and-monitoring'}}) everything: JVM, GC, VCS cache hit ratio, database, system.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Managing Performance]({{page page='managing-performance'}})
- [Metrics and Monitoring]({{page page='metrics-and-monitoring'}})
- [Tracking the Performance of the Nuxeo Platform]({{page page='tracking-the-performance-of-the-nuxeo-platform'}})
- [Monitoring Slow NXQL Queries]({{page page='monitoring-slow-nxql-queries'}})

{{/panel}}</div><div class="column medium-6">

</div></div>
