---
title: Monitoring Slow NXQL Queries
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - nxql
    - monitoring
    - monitoring-component
confluence:
    ajs-parent-page-id: '950318'
    ajs-parent-page-title: Monitoring and Maintenance
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Monitoring+Slow+NXQL+Queries
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Monitoring+Slow+NXQL+Queries'
    page_id: '23364562'
    shortlink: 0oNkAQ
    shortlink_source: 'https://doc.nuxeo.com/x/0oNkAQ'
    source_link: /display/NXDOC/Monitoring+Slow+NXQL+Queries
history:
    - 
        author: Solen Guitter
        date: '2016-06-28 09:15'
        message: dd Since 8.3 mentio
        version: '8'
    - 
        author: Solen Guitter
        date: '2016-06-28 07:32'
        message: ''
        version: '7'
    - 
        author: Kevin Leturc
        date: '2016-06-27 12:18'
        message: ''
        version: '6'
    - 
        author: Manon Lumeau
        date: '2016-03-29 09:46'
        message: ''
        version: '5'
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

    *   For VCS:

        ```
        org.nuxeo.vcs.query.log_min_duration_ms=100

        ```

    *   For DBS (since Nuxeo Platform 8.3):&nbsp;

        ```
        org.nuxeo.dbs.query.log_min_duration_ms=100

        ```

2.  Activate the log for session you use (VCS or DBS)&nbsp;at the INFO level.
    Here an example of `lib/log4j.xml` to get them in a separate file:

    *   For VCS:

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

    *   For DBS (since Nuxeo Platform 8.3):

        ```xml
        <category name="org.nuxeo.ecm.core.storage.dbs.DBSSession" additivity="false">
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

To get the slowest queries:

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