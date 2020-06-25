---
title: Logs
description: Configuring Nuxeo logs.
review:
    date: '2020-06-10'
    status: ok
    comment: ''
labels:
    - metrics
    - monitoring
toc: true
tree_item_index: 200
---

Nuxeo logging is compliant with common Java logging frameworks [Log4J](https://logging.apache.org/log4j/1.2/), [Log4j2](https://logging.apache.org/log4j/2.x/),
[JCL](https://commons.apache.org/proper/commons-logging/), [SLF4J](http://www.slf4j.org/) and [JUL](http://download.oracle.com/javase/6/docs/technotes/guides/logging/index.html).

Logging in Nuxeo is configured through a Log4J XML file: `$NUXEO_HOME/lib/log4j2.xml`

Editing that file, you can set the logging rules (log level per file and component, files rotation, ...).

Log4J log levels are: ERROR, WARN, INFO, DEBUG and TRACE.

You can increase or decrease the logs for specific services. Here are some useful loggers:

- `org.nuxeo.runtime.deployment.preprocessor.DeploymentPreprocessor` logs the pre-processing order
- `org.nuxeo.osgi.application.loader.FrameworkLoader` writes the configuration summary
- `org.nuxeo.runtime.osgi.OSGiRuntimeService` provides the final startup summary

## Log Files

The log files location depends on the `nuxeo.log.dir` parameter. By default, Nuxeo generates the following log files (also available from the platform [Admin tab]({{page page='admin-tab-overview'}}) and the Control Panel):

- Launcher logs
  - nuxeoctl.log - Logs activity from NuxeoCtl
  - console.log - Logs output written to the console (stdout)
- Server logs
  - server.log - Server logs
  - nuxeo-error.log - Gathers errors raised to the user
  - stderr.log - Gathers errors written to the console (stderr)
  - classloader.log - Gathers class loading errors from Catalina
  - tomcat.log - Gathers Tomcat logs

## Tomcat Specific

{{#> callout type='note' }}
The following information is for debug purpose, it may have impacts on performance and logging files size.
{{/callout}}

`$NUXEO_HOME/conf/logging.properties` has no effect; you can safely remove it.

Because Tomcat uses `java.util.logging` of which Log4J is not aware, Tomcat logs (`org.apache.catalina.*`) have to be redirected to Apache Commons Logging (compliant with Log4J).

Nuxeo provides a bridge for that redirection (in `org.nuxeo.common.logging.JavaUtilLoggingHelper`) with a default threshold set at INFO level. You can customize it by adding into `nuxeo.conf`:

```
JAVA_OPTS=$JAVA_OPTS -Dorg.nuxeo.runtime.redirectJUL.threshold=CONFIG
```

But that redirection is only available after Nuxeo Framework initialization whereas most of the startup logs from `org.apache.catalina` happen before (when the redirection is not yet active).

Note also that FINER and FINEST logs will be ignored anyway.

## JSON format

By editing your `log4j2.xml` you can turn log into JSON,
You can have a look at [this JSON contribution](https://github.com/nuxeo/nuxeo/blob/master/server/nuxeo-nxr-server/src/main/resources/templates/docker-json/lib/log4j2.xml)

## Garbage Collector

You can activate the JVM garbage collector logs with the following option in your `nuxeo.conf`:

```bash
JAVA_OPTS=$JAVA_OPTS -Xlog:gc*:file=${nuxeo.log.dir}/gc.log
```

## Slow NXQL Queries

It is possible to easily pinpoint slow NXQL. If you want trace all the queries that take more than 100ms:

1.  Add the following line in your `nuxeo.conf`:

    *   For VCS:

        ```
        org.nuxeo.vcs.query.log_min_duration_ms=100

        ```

    *   For DBS:

        ```
        org.nuxeo.dbs.query.log_min_duration_ms=100

        ```

2.  Activate the log for session you use (VCS or DBS)&nbsp;at the INFO level.
    Here an example of `lib/log4j2.xml` to get them in a separate file:

    *   For VCS:

        ```xml
        <Logger name="org.nuxeo.ecm.core.storage.sql.SessionImpl" level="info" additivity="false">
            <AppenderRef ref="SLOW" />
        </Logger>
        <File name="SLOW" fileName="${sys:nuxeo.log.dir}/slow-query.log" append="false">
            <PatternLayout pattern="%d{ISO8601} %-5p [%t] [%c] %m%X%n" />
        </File>
        ```

    *   For DBS:

        ```xml
        <Logger name="org.nuxeo.ecm.core.storage.dbs.DBSSession" level="info" additivity="false">
            <AppenderRef ref="SLOW" />
        </Logger>
        <File name="SLOW" fileName="${sys:nuxeo.log.dir}/slow-query.log" append="false">
            <PatternLayout pattern="%d{ISO8601} %-5p [%t] [%c] %m%X%n" />
        </File>
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

## Logging Transactional Events

Configure log4j in `$NUXEO_HOME/lib/log4j2.xml` by adding the following keywords to your appender pattern layout: `%t`&nbsp;for the thread name and `%X`&nbsp;for the logging context map:

```html/xml
<PatternLayout pattern="%d{ISO8601} %-5p [%t] [%c] %m%X%n" />
```
You should also add a new Logger if you want the traces to be enabled:

```html/xml
<Logger name="org.nuxeo.ecm.core.management.jtajca" level="trace" additivity="false" />
```

At this stage, once a transaction is started or a connection is opened, their identifiers are put in a context map for the logger. By adding the `%X`&nbsp;keyword, you've requested to print them each a message is logged. The transactions and connections will also be logged. You should add additional log statements at level `DEBUG` or `TRACE` around the code you want to monitor.

## Important Log to Monitor

Any log at `ERROR` level should be investigated.

Below are described some important logs.

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Level</th><th colspan="1">Source
Message</th><th colspan="1">Cause</th></tr>

<tr><td colspan="1">
INFO
</td><td colspan="1">
__Component Loading Status__: Pending: 0 / Missing: 0 / Unstarted: 0 / Total: 813
</td><td colspan="1">
A Nuxeo node is started
</td></tr>


<tr><td colspan="1">
ERROR
</td><td colspan="1">
__Terminate computation__: XXX due to previous failure
</td><td colspan="1">
Failure in a computation code after retries, a manual intervention is needed refer to [Nuxeo Stream]({{page page='nuxeo-stream'}}#recovery)
</td></tr>

<tr><td colspan="1">
ERROR
</td><td colspan="1">
__Exception in processLoop__: XXX
</td><td colspan="1">
Low level failure in a computation thread, a manual intervention is needed refer to [Nuxeo Stream]({{page page='nuxeo-stream'}}#recovery)
</td></tr>

<tr><td colspan="1">
WARN
</td><td colspan="1">
__Submitted index command__: XXX to index the entire default repository
</td><td colspan="1">
A Bulk Command to re-index the repository has been submitted
</td></tr>

<tr><td colspan="1">
WARN
</td><td colspan="1">
__Index command__: XXX completed: XXX docs in XXXs (wait: XXXs, scroll: XXXs) rate: XXX docs/s
</td><td colspan="1">
A Bulk Command to re-index the repository is completed
</td></tr>

<tr><td colspan="1">
ERROR
</td><td colspan="1">
[Consumer clientId=XXX, groupId=XXX] Offset commit failed on partition XXX at offset XXX: The request timed out.
</td><td colspan="1">
This is KafkaConsumer retry under network congestion that can be ignored [Kafka-7791](https://issues.apache.org/jira/browse/KAFKA-7791)
</td>
</tr>
</tbody>
</table>
</div>
