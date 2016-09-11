---
title: Metrics and Monitoring
review:
    comment: ''
    date: ''
    status: ok
labels:
    - metrics
    - 5-7-1
toc: true
confluence:
    ajs-parent-page-id: '16810080'
    ajs-parent-page-title: Monitoring and Maintenance
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Metrics+and+Monitoring
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Metrics+and+Monitoring'
    page_id: '16809996'
    shortlink: DIAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/DIAAAQ'
    source_link: /display/ADMINDOC58/Metrics+and+Monitoring
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 07:45'
        message: ''
        version: '20'
    - 
        author: Manon Lumeau
        date: '2016-01-27 11:13'
        message: ''
        version: '19'
    - 
        author: Benoit Delbosc
        date: '2016-01-27 09:40'
        message: Add link to list all jmx metrics
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-12-18 17:07'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-10-14 17:28'
        message: Added TOC
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-07-15 15:56'
        message: Fixed broken link to Diamond and added related topics
        version: '15'
    - 
        author: Benoit Delbosc
        date: '2013-06-27 17:31'
        message: ''
        version: '14'
    - 
        author: Benoit Delbosc
        date: '2013-06-27 17:31'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-06-18 14:35'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-03-26 22:31'
        message: ''
        version: '11'
    - 
        author: Benoit Delbosc
        date: '2013-03-25 14:58'
        message: ''
        version: '10'
    - 
        author: Benoit Delbosc
        date: '2013-03-25 14:46'
        message: ''
        version: '9'
    - 
        author: Benoit Delbosc
        date: '2013-03-21 11:27'
        message: ''
        version: '8'
    - 
        author: Benoit Delbosc
        date: '2013-03-21 11:26'
        message: ''
        version: '7'
    - 
        author: Benoit Delbosc
        date: '2013-03-19 15:55'
        message: ''
        version: '6'
    - 
        author: Benoit Delbosc
        date: '2013-03-19 15:53'
        message: ''
        version: '5'
    - 
        author: Benoit Delbosc
        date: '2013-03-19 15:46'
        message: ''
        version: '4'
    - 
        author: Benoit Delbosc
        date: '2013-03-19 15:33'
        message: ''
        version: '3'
    - 
        author: Benoit Delbosc
        date: '2013-03-19 15:24'
        message: ''
        version: '2'
    - 
        author: Benoit Delbosc
        date: '2013-03-19 15:16'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

Since Nuxeo 5.7.1, the platform uses [Coda Hale Yammer Metrics](http://metrics.codahale.com/).

These metrics are exposed via JMX but can also be reported with CSV files or send to a [Graphite](http://graphite.wikidot.com/) server.

## Reporting Metrics

###### Enable JMX Reporting

To enable JMX reporting add the following to the nuxeo.conf file (warning this is not secure):

<pre>JAVA_OPTS=$JAVA_OPTS -Dcom.sun.management.jmxremote=true</pre>

</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

![]({{file name='nuxeo-jmx-metrics.png'}} ?w=500,h=346,border=true)

###### Enabling CSV reporting

```
metrics.csv.enabled=true
metrics.csv.period=10
# This will create a sub directory metrics-TIMESTAMP
metrics.csv.dir=${nuxeo.log.dir}
```

###### Enabling Graphite reporting

```
metrics.graphite.enabled=true
metrics.graphite.host=localhost
metrics.graphite.port=2030
metrics.graphite.period=10
```

![]({{file name='graphite-reporting.png'}} ?w=500,h=398,border=true)

###### Reporting log4j stats

```
metrics.log4j.enabled=true
```

###### Reporting tomcat JMX info:

```
metrics.tomcat.enabled=true
```

Note that period to report metrics are in second.

## Nuxeo Metrics

Metrics are prefixed by default with `**servers.${HOSTNAME}.nuxeo**` to be compliant with [Diamond](https://github.com/BrightcoveOS/Diamond) prefix, this can be changed by setting the `**metrics.graphite.prefix**` in nuxeo.conf.

*   `prefix.nuxeo.org.nuxeo.ecm.core.api.AbstractSession`

    *   create-document: Counter of document created
    *   delete-document: Counter of document deleted
    *   update-document: Counter of document updated
*   `prefix.nuxeo.org.nuxeo.ecm.core.storage.sql.RepositoryImpl`

    *   session: Counter of VCS Session
*   `prefix.nuxeo.org.nuxeo.ecm.core.storage.sql.SelectionContext`

    *   cache-get: Timer on selection cache get operation
    *   cache-hit: Counter on cache hit
    *   cache-size: Size of the cache
*   `prefix.nuxeo.org.nuxeo.ecm.core.storage.sql.SelectionImpl`

    *   aclr-update: Timer on read acl optimization update
    *   query: Timer on query operation (session.query and session.queryAndFetch)
    *   save: Timer on session save operation
    *   session: Counter of VCS session
*   `prefix.nuxeo.org.nuxeo.ecm.core.storage.sql.SoftRefCachingRowMapper`

    *   cache-get: Timer on row cache get
    *   cache-hit: Counter on cache hit
    *   cache-size: Counter on cache size (may be inaccurate)
    *   sor-get: Timer on non cache get (System Of Record = db)
    *   sor-rows: Counter on number of rows returned by the sor access
*   `prefix.nuxeo.org.nuxeo.ecm.core.storage.work.AbstractWork`

    *   work: Timer on work executions
*   prefix.nuxeo.org.nuxeo.ecm.core.storage.work.WorkThreadPoolExecutor

    *   scheduled: Counter on work pending
    *   scheduled-max: Counter that keep the max of pending worker
*   `prefix.nuxeo.org.nuxe.ecm.platform.ui.web.auth.NuxeoAuthentificationFilter`

    *   logged-user: Counter of logged in user
    *   request: Timer on request
    *   request-concurrent: Counter of concurrent requests
    *   request-concurrent-max: Max of concurrent requests
*   `prefix.nuxeo.org.nuxeo.ecm.runtime.metrics.MetrcisServiceImpl`

    *   instance-up: 1 if instance is up, 0 on shutdown
    *   jdbc-numActive: jdbc/nuxeo datasource pool numActive connection
    *   jdbc-numIdle: jdbc/nuxeo datasource pool numIdle connection
    *   tomcat-activeSessions: tomcat activeSessions
    *   tomcat-currentThreadCount: tomcat http connector thread pool currentThreadCount
    *   tomcat-currentThreadBusy: tomcat http connector thread pool currentThreadBusy
    *   tomcat-errorCount: tomcat errorCount
    *   tomcat-processingTime: tomcat processingTime
    *   tomcat-requestCount: tomcat requestCount
*   `prefix.nuxeo.org.nuxeo.ecm.runtime.transaction.TransactionHelper`

    *   rollback: Counter of rollback transaction
    *   transaction: Timer on transaction
    *   tx-concurrent: Counter of concurrent transaction
    *   tx-concurrent-max: Max concurrent transaction

If you have enable log4j metrics you will have counters on log per severity (ERROR, WARN, ...)

*   `prefix.nuxeo.org.apache.log4j.Appender.*`

See the [reporting problem JMX monitoring]({{page space='ADMINDOC' page='Reporting Problems'}}) to list all of the available metrics.

The Graphite reporter also include JVM metrics for GC, memory and thread pool.

You should also monitor the system and the database to have a complete monitoring, tools like [Diamond](https://github.com/BrightcoveOS/Diamond/wik/) can do this easily.

## Graphite Dashboard

You can find an example of Graphite dashboard on GitHub:&nbsp;[https://github.com/nuxeo/nuxeo-runtime/blob/release-5.8/nuxeo-runtime-metrics/graphite/dashboard.json](https://github.com/nuxeo/nuxeo-runtime/blob/release-5.8/nuxeo-runtime-metrics/graphite/dashboard.json).

You will have to edit the dashboard to replace the hostname (here it is octopussy).

Here is an extract of what this dashboard looks like when monitoring a daily bench.

![]({{file name='graphite-nuxeo.png'}} ?w=500,h=198,border=true)

![]({{file name='graphite-nuxeo2.png'}} ?w=500,h=195,border=true)

&nbsp;