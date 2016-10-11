---
title: How to track the performances of your platform
review:
    comment: ''
    date: ''
    status: ok
labels:
    - funkload
    - link-update
    - performance
toc: true
confluence:
    ajs-parent-page-id: '17334435'
    ajs-parent-page-title: Dev Cookbook
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: How+to+track+the+performances+of+your+platform
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC58/How+to+track+the+performances+of+your+platform
    page_id: '17334284'
    shortlink: DIAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/DIAIAQ'
    source_link: /display/NXDOC58/How+to+track+the+performances+of+your+platform
history:
    - 
        author: Solen Guitter
        date: '2013-11-22 15:42'
        message: ''
        version: '31'
    - 
        author: Solen Guitter
        date: '2013-11-13 15:09'
        message: ''
        version: '30'
    - 
        author: Solen Guitter
        date: '2013-09-04 15:03'
        message: ''
        version: '29'
    - 
        author: Solen Guitter
        date: '2013-09-04 15:03'
        message: ''
        version: '28'
    - 
        author: Benoit Delbosc
        date: '2013-06-24 11:15'
        message: ''
        version: '27'
    - 
        author: Benoit Delbosc
        date: '2013-04-19 15:57'
        message: ''
        version: '26'
    - 
        author: Solen Guitter
        date: '2012-09-06 16:32'
        message: Migrated to Confluence 4.0
        version: '25'
    - 
        author: Solen Guitter
        date: '2012-09-06 16:32'
        message: Updated links to recent reports
        version: '24'
    - 
        author: Solen Guitter
        date: '2012-05-16 11:38'
        message: Fixed typos
        version: '23'
    - 
        author: Wojciech Sulejman
        date: '2012-01-06 17:55'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2011-12-20 10:09'
        message: Fixed link and terminology
        version: '21'
    - 
        author: Solen Guitter
        date: '2011-11-24 11:45'
        message: Fixed broken links
        version: '20'
    - 
        author: Benoit Delbosc
        date: '2011-07-05 15:51'
        message: ''
        version: '19'
    - 
        author: Benoit Delbosc
        date: '2011-07-05 11:29'
        message: cosmit
        version: '18'
    - 
        author: Benoit Delbosc
        date: '2011-07-05 11:23'
        message: cosmit
        version: '17'
    - 
        author: Benoit Delbosc
        date: '2011-07-05 11:18'
        message: Adding note about network latency
        version: '16'
    - 
        author: Benoit Delbosc
        date: '2011-02-11 16:33'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2011-01-07 11:26'
        message: ''
        version: '14'
    - 
        author: Olivier Grisel
        date: '2010-12-11 01:21'
        message: ''
        version: '13'
    - 
        author: cmckinnon
        date: '2010-10-27 15:17'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2010-10-26 15:13'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2010-10-26 12:07'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2010-10-26 11:48'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2010-10-26 11:22'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2010-10-15 11:22'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2010-10-15 11:22'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2010-10-15 11:15'
        message: formatting and typos
        version: '5'
    - 
        author: stan
        date: '2010-09-07 20:17'
        message: ''
        version: '4'
    - 
        author: stan
        date: '2010-09-07 20:10'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2010-06-14 00:02'
        message: ''
        version: '2'
    - 
        author: Thierry Delprat
        date: '2010-06-13 23:51'
        message: ''
        version: '1'

---
#### Document Types

A very common task in an ECM project is to define your own Document Types. In most cases it will have little or no impact on performance.

However, if you define documents with a lot of meta-data (some people have several hundred meta-data elements) or if you define very complex schema (like nesting complex types on 4 levels), this can have impact on:

*   the database : because queries will be more complex,
*   the display layer : because correctly configuring prefetch will be very important.

#### Number of Documents

As expected, the number of documents in the repository has an impact on performance:

*   impact on database size, and as a consequence on the database performance,
*   impact on ACLs management,
*   possible impacts on UI listings.

This is a natural impact and you cannot exclude this factor when doing capacity planning.

The good news is that Nuxeo's document repository has been tested successfully with several millions of documents with a single server.

#### Concurrent Requests

The raw performance of the platform is not tied to a number of users but to a number of concurrent requests: 10 hyperactive users may load the platform more than 100 inactive users.

In terms of modeling the users activity, think in terms of Transaction/s or Request/s: concurrent users is usually too vague.

### Factors That Have Little or no Impact

#### Size of the Files

When using Nuxeo's repository, the actual size of the binary files you store does not directly impact the performance of the repository. Since the binary files are stored in a Binary Store on the file system and not in the Database, impact will be limited to Disk I/O and upload/download time.

Regarding binary file size, the only impacting factor is the size of the full-text content because it will impact the size of the full-text index. But in most cases, big files (images, video, archives ...) don't have a big full-text content.

#### Average Number of Documents per Folder

A common question is about the number of documents that can be stored in a Folder node. When you use Nuxeo's VCS repository, this has no impact on the performance: you can have folders with several thousands of child documents.

When designing your main filing plan, the key question should be more about security management, because your hierarchy will have an impact on how ACLs are inherited.

### Some Generic Tips for Tuning the Nuxeo Platform

Independent from use cases, some technical factors have an impact on performance:

#### Application Server

The Nuxeo Platform is available on Tomcat and JBoss servers. Tomcat tends to have better raw performance than JBoss.

Tomcat HTTP and AJP connector configuration impact the behavior of the server on load, limiting the `maxThread` value to prevent the server from being overloaded and to keep constant throughput.

Under load the JBoss JTA object store can generate lots of write operations even for read-only access. A simple workaround can be to use a ramdisk for the `server/default/data/tx-object-store` folder.

Note also that the default maximum pool size for the AJP connector on JBoss is only 40, which can quickly become a bottleneck if there is no static cache on the frontal HTTP server.

#### JVM Tuning

Always use the latest 1.6 JDKs, they contain performance optimizations.

#### Log Level

Log level must be set to INFO or WARN to reduce CPU and disk writes.

#### Database

Database choice has a large impact on performance.

PostgreSQL has more Nuxeo optimizations than other databases. It is the preferred database platform.

Tuning is not optional, as Nuxeo does not provide default database configurations for production.

#### Network

The network between the application and the database has an impact on performance.

Especially on a page that manipulates many documents and that generates lots of micro JDBC round trips.

Our advice is to use a Gigabit Ethernet connection and check that any router/firewall or IDS don't penalize the traffic.

Here are some example of the command _ping -s PACKETSIZE_ in the same network (MTU 1500) that can give you an idea of the latency added to each JDBC round trip:

<div class="table-scroll"><table class="hover"><tbody><tr><td colspan="1">

**Ping packet size**

</td><td colspan="1">

**Fast Ethernet (ms)**

</td><td colspan="1">

**Gigabit Ethernet (ms)**

</td><td colspan="1">

**ratio**

</td></tr><tr><td colspan="1">

default

</td><td colspan="1">

0.310

</td><td colspan="1">

0.167

</td><td colspan="1">

1.8562874

</td></tr><tr><td colspan="1">

4096

</td><td colspan="1">

1.216

</td><td colspan="1">

0.271

</td><td colspan="1">

4.4870849

</td></tr><tr><td colspan="1">

8192

</td><td colspan="1">

1.895

</td><td colspan="1">

0.313

</td><td colspan="1">

6.0543131

</td></tr></tbody></table></div>

While the database will process a simple request in less than 0.05ms most of the JDBC time will be spend on the network

from 0.3ms on Gigabit Ethernet to 1.9ms on Fast Ethernet (6 times more).

Note that you can check your network configuration using the ethtool command line.

If you have a firewall or your database don't reply to ICMP ping, you can test the network latency using a tool like [jdbctester](https://github.com/bdelbosc/jdbctester).

Also knowing your JDBC driver configuration may help, for instance Oracle by default do a round trip every 10 rows, this can be changed using the following JAVA_OPTS

<pre> -Doracle.jdbc.defaultRowPrefetch=50</pre>

## How we Manage the Nuxeo Platform Performance

Now, that we have seen that managing performance involves many factors, let's see how we manage this at Nuxeo for the Platform and its modules.

### A Toolbox for Benchmarking the Nuxeo Platform

We provide several tools to load test and benchmark the Platform: see the Tool chapter later in this document.

### Continuous Performance Testing via CI

Benchmarking once is great, but the real challenge is to be sure to detect when performances are impacted by a modification (in the UI, in the Document Types, ...).

To do so, we use small benchmark tests that are automatically run every night by our CI chain. The test is configured to fail if the performance results are below the performance results of the previous build.

This fast bench enables to check core and UI regressions on a simple case.

*   Hudson benching job
*   Daily bench report
*   Daily bench monitoring report
*   Benching script sources

This allows us, for example, to quickly detect when a template has been wrongly modified and lets us quickly correct it before the faulty changeset becomes hidden by hundreds of other modifications.

### Periodic Benchmark Campaigns

Every 2 or 3 months, we run major benchmarking campaigns to tests the platform on the limits.

This is a great opportunity to do careful profiling and eventually introduce new database and Java optimizations.

## Sizing your Nuxeo Platform-Based ECM Application

In order to correctly size your Nuxeo Platform-based ECM application, you should:

### Define your Requirements

You have to define your needs and hypotheses for any factor that can impact the platform performance:

*   target number of documents in the repository,
*   target security policy,
*   target filing plan and ACLs inheritance logic,
*   target request/s.

### Setup Performance Testing From the Beginning

Performance benchmarking is not something you should postpone to a pre-production phase.

It's far more efficient (and cheaper) to setup performance tests from the beginning.

Start with simple benchmark tests (based on the ones provided by Nuxeo) on a raw prototype and improve them incrementally as you improve your customization.

Using this approach will help you:

*   detect a performance issue as soon as possible,
*   correct small problems when they are still small,
*   avoid having a lot of mistakes to correct just before going to production.

You can leverage all the standard tests we provide and also the Hudson integration if you want to use Hudson as CI chain provider.

### Use Interpolation When Needed

Nuxeo provides standard benchmarks for both small and big documents repositories.

When needed, you can use these results to interpolate results from your tests.

## Performance Toolbox Provided by the Nuxeo Platform

### Benchmarking Tools

We use&nbsp;[FunkLoad](http://funkload.nuxeo.org/)&nbsp;for performance testing. This tools enables us to produce quickly new scenarios.
Here are the main advantages:

*   An http proxy recorder generates the initial bench script.
*   FunkLoad comes equipped and ready with "batteries included":
    *   helpers to make assertions,
    *   library to generate random content,
    *   library to share user credentials between threads,
    *   basic monitoring.
*   Scripts are done in Python which enables complex scenario implementation.
*   Benches are easily automated using simple Makefile.
*   FunkLoad produces a [detailed report](http://qa.nuxeo.org/funkload-bench/full/38/results/reader-cpu/funkload/)&nbsp;and differential report to [compare two bench results](http://funkload.nuxeo.org/report-example/diff_seam_java_6_vs_5).
*   Nuxeo DM has a Python library to write tests with a "fluent interface pattern" like:

    ```
    (LoginPage(self).view()
    .login('Administrator', 'Administrator')
    .getRootWorkspaces()
    .createWorkspace('My workspace', 'Test ws')
    .rights().grant('ReadWrite',  'members')
    .view()
     .logout())

    ```

    This makes it easy to create new scenarios.

We also use Nuxeo DM addon tools like [`nuxeo-platform-importer`](https://github.com/nuxeo/nuxeo-platform-importer/blob/release-5.6/README.md) to populate the document base.

### Metrics to Monitor During a Bench

*   CPU: The iowait or percent of time that CPU is idle during which the system has outstanding disk I/O request can be useful to identify an I/O&nbsp; bottleneck. On multi CPUs, if only one of the CPU is used at 100%, it may be the cause of an overloaded garbage collector.
*   JVM Garbage Collector throughput: this is the percentage of total time of the JVM not spent in garbage collection.
*   Disk utilization: to check for device saturation.
*   JBoss JCA connection pool.
*   SQL queries that took up most time.

### Monitoring Tools

*   [sysstat sar&nbsp;](http://pagesperso-orange.fr/sebastien.godard/)for monitoring the system activity (cpu, disk, network,&nbsp; memory ...). Using&nbsp;[kSar](http://ksar.atomique.net/linux.html)&nbsp;it can produce nice pdf reports.
*   The JBoss&nbsp;[LoggingMonitor](http://wiki.jboss.org/wiki/Wiki.jsp?page=JBossLoggingMonitor)&nbsp;service can monitor specific attributes of a MBean periodically and log its value to the filename specified.
*   JVM garbage collector logging using a JAVA_OPTS.
*   PosgreSQL log_min_duration to log SQL queries.
*   [logchart](http://public.dev.nuxeo.com/~ben/logchart/monitor.html)&nbsp;to produce miscellaneous charts from the sar output, JBoss logs, GC logs and dabatase logs.
*   [pgfouine](http://pgfouine.projects.postgresql.org/)&nbsp;the PostgreSQL log analyzer wich is used by logchart.

[Example of a logchart monitoring report](http://qa.nuxeo.org/funkload-bench/full/38/results/reader-cpu/funkload/)

More info on the [Monitoring Nuxeo DM FAQ](http://doc.nuxeo.org/xwiki/bin/view/FAQ/MonitoringNuxeoDM).

### Nuxeo Metrics Monitoring Tools with Mbeans

In `nuxeo-runtime-management-metric`, Nuxeo provides the infrastructure that can be used to monitor use of services or class through mbeans. The mbean displays access counts on methods and the time spent on it. It can also serialize its results in XML.

As an example, we will first see how to configure and monitor access to the Nuxeo repository backend class.

#### Monitor Nuxeo Core Backend Access

The idea is to plug our monitor class as a proxy of the real Repository class. When a method gets through the proxy, metrics are automatically added and named with interface and method names. All metrics have an operation "Sample" that provides the metrics you are looking for.

1.  Modify the file `config/default-repository-config.xml`(be careful to modify the right file if you are using templates configuration system) and add this line:

    ```
    <backendClass>org.nuxeo.ecm.core.storage.sql.management.MonitoredJDBCBackend</backendClass>

    ```

    This class is a proxy to the real backend class. Nuxeo VCS core storage will behave exactly like before. The proxy just counts and records time spent on each method of the interface, and make it available to the mbean.

    {{#> callout type='tip' }}

    When using VCS remote on a deported client, the class to used is `MonitoredNetBackend`.

    {{/callout}}
2.  To view the result, run jconsole or Visualvm.
3.  Connect to your running Nuxeo repository Java process.
4.  Go to the mbean tab
5.  In the mbeans "org.nuxeo" you will find all the metrics. MetricEnable contains operations to enable/disable logging and serialisation. Serialisation is used to have an xml output. Preferences can be set with MetricSerializer operations.
    ![]({{file name='metric_mbeans.png'}} ?w=650,border=true)

#### Create your Own monitored Proxy

The previous example had its proxy class available in the Nuxeo Platform and the backend class could easily be replaced by modifying an extension point. However, creating a new proxy class is still easy. Let's try adding a monitor proxy to all the listener to monitor Listener access:

Listener objects are created in `EventListenerDescriptor: initListener`.

The idea is to create the proxy with `MetricInvocationHandler.newProxy` and provide the instance to proxy and the Interface class to monitor.

The proxy will replace the original instance:

```
public void initListener() throws Exception {
        if (clazz != null) {
            if (EventListener.class.isAssignableFrom(clazz)) {
                inLineListener = (EventListener) clazz.newInstance();
                inLineListener = MetricInvocationHandler.newProxy(
                        inLineListener, EventListener.class);
                isPostCommit = false;
            } else if (PostCommitEventListener.class.isAssignableFrom(clazz)) {
                postCommitEventListener = (PostCommitEventListener) clazz.newInstance();
                postCommitEventListener = MetricInvocationHandler.newProxy(
                        postCommitEventListener, PostCommitEventListener.class);
                isPostCommit = true;
            }

```

Restarting the repository and accessing to the proxy will make the class monitored in the monitoring tool.

## Some Example Benchmark Results

### Goals

Demonstrate adequate response times for various document retrieval and insertion operations on a large storage of 10 million documents.

### Steps

1.  Tune the database following tips in the Nuxeo PostgreSQL&nbsp;[FAQ](http://www.nuxeo.org/xwiki/bin/view/FAQ/PostgreSQLSettings).
2.  Tune Nuxeo DM: for mass import, we disable the fulltext indexing (as described in the ["Mass import specific tuning" section of PostgreSQL configuration page]({{page space='admindoc58' page='configuring-postgresql#mass-import-specific-tuning'}})) and disable the ACL optimization ([NXP-4524](https://jira.nuxeo.org/browse/NXP-4524)).
3.  Import content: mass import is done using a multi-threaded importer to create File document with an attached text file randomly generated using a French dictionary. Only a percentage of the text file will be indexed for the full text, this ratio simulate the proportion of text in a binary format.
    [Sources of the nuxeo-platform-importer](http://hg.nuxeo.org/addons/nuxeo-platform-importer/)
4.  Rebuild fulltext as described in the ["Mass import specific tuning" FAQ](http://www.nuxeo.org/xwiki/bin/view/FAQ/PostgreSQLSettings).
5.  Generate random ACLs on documents. This can be done with a simple scripts that generate SQL inserts into the ACL table.
6.  Enable the read ACLs optimization, performing the SQL command:

    ```
    SELECT nx_rebuild_read_acls();

    ```

7.  Enable the ACL optimization ([NXP-4524](https://jira.nuxeo.org/browse/NXP-4524)).
8.  Bench using the same scripts as in continuous integration for writer and reader. In addition we have a navigation bench that randomly browses folders and documents.

### Results Overview

The base was successfully loaded with:

*   10 million of documents,
*   1TB of data.

Below are some average times:

*   Accessing a random document using the **Nuxeo DM** web interface under load of 250 concurrent users accessing the system with 10 seconds pause between requests: 0.6s.
*   Accessing a document that has already been accessed, under load: 0.2s.
*   Accessing a random document or download attached file using a simple **WebEngine** application: 0.1s.
    It can handle up to 100 req/s which can be projected to at least 1000 concurrent users.
*   Creating a new document using the **Nuxeo DM** web interface under load: 0.8s.

This bench showed no sign of being impaired by the data volume once the data was loaded from disk.

[http://public.dev.nuxeo.com/~ben/bench-10m/](http://public.dev.nuxeo.com/~ben/bench-10m/)

### Customizing Bench

The bench procedure can be customized to validate customer installation:

*   The mass importer tool can be used as a template to inject a customized document type instead of File documents.
*   Scripts can be modified to have realistic scenarios.
*   Scripts can be combined to create realistic loads.