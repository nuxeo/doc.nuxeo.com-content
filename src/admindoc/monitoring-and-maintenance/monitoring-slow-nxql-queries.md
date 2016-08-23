---
title: Monitoring Slow NXQL Queries
labels:
    - monitoring
    - nxql
    - monitoring-component
    - lts2015-ok
confluence:
    ajs-parent-page-id: '27604627'
    ajs-parent-page-title: Monitoring and Maintenance
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: Monitoring+Slow+NXQL+Queries
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC710/Monitoring+Slow+NXQL+Queries'
    page_id: '27604592'
    shortlink: cDalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/cDalAQ'
    source_link: /display/ADMINDOC710/Monitoring+Slow+NXQL+Queries
history:
    - 
        author: Solen Guitter
        date: '2015-01-14 08:54'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2015-01-14 08:52'
        message: ''
        version: '3'
    - 
        author: Florent Guillaume
        date: '2015-01-13 08:15'
        message: ''
        version: '2'
    - 
        author: Benoit Delbosc
        date: '2015-01-12 16:16'
        message: ''
        version: '1'

---
It is possible to easily pinpoint slow NXQL. If you want trace all the queries that take more than 100ms:

1.  Add the following line in your `nuxeo.conf`:

    ```
    org.nuxeo.vcs.query.log_min_duration_ms=100

    ```

2.  Activate the log for `org.nuxeo.ecm.core.storage.sql` at the INFO level.
    Here an example of `lib/log4j.xml` to get them in a separate file:

    ```xml
    <category name="org.nuxeo.ecm.core.storage.sql.SessionImpl" additivity="false">
        <priority value="INFO" />
        <appender-ref ref="SLOW" />
    </category>
    <appender name="SLOW" class="org.apache.log4j.FileAppender">
        <errorHandler class="org.apache.log4j.helpers.OnlyOnceErrorHandler" />
        <param name="File" value="${nuxeo.log.dir}/slow-query.log" />
        <param name="Append" value="false" />
        <layout class="org.apache.log4j.PatternLayout">
          <param name="ConversionPattern" value="%d{ISO8601} %-5p [%t][%c] %m%X%n" />
        </layout>
    </appender>
    ```

<pre>To get the slowest queries:</pre>

```bash
$ grep duration_ms log/slow-query.log | sed -e's/^[^\t]*\t//g' -e 's/{.*$//g' |sort -nr | head

802.89  QueryFilter(principal=system, limit=0, offset=0)        query   SELECT * FROM Document WHERE ....
12.87   QueryFilter(principal=bob, limit=0, offset=0)        queryAndFetch   Select DISTINCT ecm:uuid...
10.12   QueryFilter(principal=system, limit=50, offset=0) count total results UNLIMITED query   SELECT * FROM Document WHERE ...
5.35    QueryFilter(principal=Administrator, limit=20, offset=0) count total results up to 20   query   SELECT * FROM ...

```

{{#> callout type='tip' }}

When configuring the log priority to TRACE a debug stack trace is available in the log so you got the code path.

{{/callout}}

&nbsp;

* * *