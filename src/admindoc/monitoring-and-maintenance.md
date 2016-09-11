---
title: Monitoring and Maintenance
review:
    comment: ''
    date: ''
    status: ok
labels:
    - datasource
    - monitoring
toc: true
confluence:
    ajs-parent-page-id: '16810081'
    ajs-parent-page-title: Installation and Administration
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Monitoring+and+Maintenance
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Monitoring+and+Maintenance'
    page_id: '16810080'
    shortlink: YIAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/YIAAAQ'
    source_link: /display/ADMINDOC58/Monitoring+and+Maintenance
history:
    - 
        author: Solen Guitter
        date: '2013-10-14 17:25'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-08-06 11:25'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-05-22 11:37'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-05-22 11:36'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-05-22 11:36'
        message: ''
        version: '13'
    - 
        author: Thierry Delprat
        date: '2012-10-01 18:27'
        message: ''
        version: '12'
    - 
        author: Thierry Delprat
        date: '2012-10-01 11:20'
        message: ''
        version: '11'
    - 
        author: Mathieu Guillaume
        date: '2012-02-09 13:50'
        message: Migrated to Confluence 4.0
        version: '10'
    - 
        author: Mathieu Guillaume
        date: '2012-02-09 13:50'
        message: svn -> hg
        version: '9'
    - 
        author: Mathieu Guillaume
        date: '2011-11-29 13:17'
        message: replaced 5.4.3 with 5.5
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-11-14 15:27'
        message: replaced 5.4.3 with 5.5
        version: '7'
    - 
        author: Benoit Delbosc
        date: '2011-08-22 15:20'
        message: ''
        version: '6'
    - 
        author: Julien Carsique
        date: '2011-08-11 18:23'
        message: ''
        version: '5'
    - 
        author: Julien Carsique
        date: '2011-08-11 18:16'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-03-04 17:32'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-03-03 17:22'
        message: ''
        version: '2'
    - 
        author: Admin name placeholder
        date: '2010-03-01 00:58'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

## Monitoring Nuxeo

### Nuxeo JMX Monitoring

Nuxeo platform exposes counters, probes and stopwatch via [nuxeo-runtime-management]({{page page='supervision'}}).

### Nuxeo Server Running and Components Loading Statuses

Since 5.5, Nuxeo provides an URL for monitoring the server status. This method is actually also used by the Launcher to follow the server startup status, after checking the Java process status.
[http://localhost:8080/nuxeo/runningstatus](http://localhost:8080/nuxeo/runningstatus) will be available at last. While it isn't reachable, the server is stopped or still starting.
[http://localhost:8080/nuxeo/runningstatus?info=started](http://localhost:8080/nuxeo/runningstatus?info=started) returns `true` if the server finished starting and the Nuxeo runtime is fine with its components.
[http://localhost:8080/nuxeo/runningstatus?info=summary&key=xxx](http://localhost:8080/nuxeo/runningstatus?info=summary&key=xxx) returns `true` or `false` (see "info=started") and a detailed summary about components. Access to this URL is restricted by an access key configurable in `nuxeo.conf` (see `"server.status.key"` in [Configuration Parameters Index (nuxeo.conf)]({{page page='configuration-parameters-index-nuxeoconf'}})).

{{#> panel type='code' heading='Sample output if something was wrong at startup (for instance, missing RelationService)'}}

```
false
======================================================================
= Nuxeo EP Started
======================================================================
= Component Loading Status: Pending: 7 / Unstarted: 0 / Total: 462
  * service:org.nuxeo.ecm.webengine.sites.wiki.relation requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
  * service:org.nuxeo.ecm.annotations.graph requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
  * service:org.nuxeo.ecm.platform.relations.jena requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
  * service:org.nuxeo.ecm.annotations.repository.graph requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
  * service:org.nuxeo.ecm.platform.publisher.relations.contrib requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
  * service:org.nuxeo.ecm.platform.relations.services.DefaultJenaGraph requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
  * service:org.nuxeo.ecm.platform.comment.service.CommentServiceConfig requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
======================================================================

```

{{/panel}}</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

You can get that information with `./bin/nuxeoctl status` (see [nuxeoctl and Control Panel Usage]({{page page='nuxeoctl-and-control-panel-usage'}})).

### JVM Garbage Collector

The garbage collector attempts to reclaim memory used by objects that are no longer in use by the application.

Monitoring the garbage collector can be very useful when tuning the JVM or setting the initial heap size.

Edit `$NUXEO_HOME/bin/nuxeo.conf` and uncomment the following options titled "Log Garbage Collector informations into a file":

```
JAVA_OPTS=$JAVA_OPTS -Xloggc:${nuxeo.log.dir}/gc.log -verbose:gc -XX:+PrintGCDetails -XX:+PrintGCTimeStamps

```

### JBoss

The JBoss LoggingMonitor service can monitor specific attributes of a MBean periodically and log their value to the filename specified.

More info on the LoggingMonitor:[http://wiki.jboss.org/wiki/Wiki.jsp?page=JBossLoggingMonitor](http://wiki.jboss.org/wiki/Wiki.jsp?page=JBossLoggingMonitor)

Edit `$NUXEO_HOME/bin/nuxeo.conf` and add `"monitor"` to the `nuxeo.templates` parameter (uncomment it if needed).

The logging-monitor jar file is deployed by default in $JBOSS_HOME/server/default/lib.

#### JBoss JVM Information

The `"monitor"` template will deploy a file named `jvm-monitor-service.xml` which will produce a `jvm.log` file.

#### JBoss Thread Pool

The `"monitor"` template will deploy a file named `webthreads-monitor-service.xml` which will produce a `webthreads.log` file.

#### Nuxeo Unified Datasource Connection Pool

The `"monitor"` template will deploy a file named `default-ds-monitor-service.xml` which will produce a `nuxeo-ds.log` file.

### PostgreSQL

The PostgreSQL logs can be setup like in the pgFouine tutorial:

[http://pgfouine.projects.postgresql.org/tutorial.html](http://pgfouine.projects.postgresql.org/tutorial.html)

For instance to log only request slower than 100ms change your postgresql.conf file:

```
log_min_duration_statement = 100

```

After a test you can catch the vacuum output like this:

```
vacuumdb  -fzv $DBNAME &> vacuum.log

```

### OS

The sysstat utilities are a collection of performance monitoring tools for Linux that is easy to setup.

You can monitor the system activity like this:

```
sar -d -o $JBOSS_HOME/server/default/log/sysstat-sar.log 5 720 >/dev/null 2>&1 &

```

This will monitor the activity every 5s during 1h.

For more information on systat, visit [`http://pagesperso-orange.fr/sebastien.godard/`](http://pagesperso-orange.fr/sebastien.godard/).

## Log Analysis

### logchart

This is a small script that process the following log files:

*   Garbage collector logging (`gc.log`)
*   Java Virtual Machine logging (`jvm.log`)
*   JBoss threads logging (`webthreads.log`)
*   NuxeoDS Data source usage (`nuxeo-ds.log`)
*   Sysstat sar logging, cpu and disk activity (`sysstat-sar.log`)
*   PostgreSQL logs (`pgsql.log`)
*   PostgreSQL vacuum output (`vacuum.log`)

to generate an html report with charts:
[`http://public.dev.nuxeo.com/~ben/logchart/monitor.html`](http://public.dev.nuxeo.com/~ben/logchart/monitor.html)

More information on logchart can be found on the `README.txt` of the project:
[`https://hg.nuxeo.org/tools/logchart/trunk`](https://hg.nuxeo.org/tools/logchart/trunk)

### Other Reporting Tools

*   GCViewer a tool to visualize data produced by the garbage collector logs: [http://www.tagtraum.com/gcviewer.html](http://www.tagtraum.com/gcviewer.html)

*   kSar a sar grapher that can produce detail PDF report of your system activity: [http://ksar.atomique.net/linux.html](http://ksar.atomique.net/linux.html)

*   pgfouine the PostgreSQL log analyzer which is used by logchart: [http://pgfouine.projects.postgresql.org/](http://pgfouine.projects.postgresql.org/)