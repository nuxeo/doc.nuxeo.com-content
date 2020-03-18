---
title: Managing Performance
description: This page provides guidance on how to optimize your application performance, as well as how to troubleshoot performance-related issues through monitoring.
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - lts2016-ok
    - performance
    - bdelbosc
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '19235677'
    ajs-parent-page-title: Quick Start Series
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Managing+Performance
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Managing+Performance'
    page_id: '19235830'
    shortlink: 9oMlAQ
    shortlink_source: 'https://doc.nuxeo.com/x/9oMlAQ'
    source_link: /display/NXDOC/Managing+Performance
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2016-09-05 12:02'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2016-08-30 14:07'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2016-02-25 13:58'
        message: ''
        version: '17'
    -
        author: Stuart Miller
        date: '2016-02-24 23:04'
        message: ''
        version: '16'
    -
        author: Stuart Miller
        date: '2016-02-24 23:03'
        message: ''
        version: '15'
    -
        author: Stuart Miller
        date: '2016-02-24 19:34'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2015-10-20 14:58'
        message: Fix page layout to use 2/3 layout
        version: '13'
    -
        author: Manon Lumeau
        date: '2014-12-10 16:34'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-05-23 11:10'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-05-22 17:56'
        message: ''
        version: '10'
    -
        author: Stuart Miller
        date: '2014-05-07 21:49'
        message: ''
        version: '9'
    -
        author: Stuart Miller
        date: '2014-05-07 21:00'
        message: ''
        version: '8'
    -
        author: Stuart Miller
        date: '2014-05-07 20:07'
        message: ''
        version: '7'
    -
        author: Stuart Miller
        date: '2014-05-07 18:52'
        message: ''
        version: '6'
    -
        author: Thierry Delprat
        date: '2014-05-07 17:38'
        message: ''
        version: '5'
    -
        author: Thierry Delprat
        date: '2014-05-07 17:29'
        message: ''
        version: '4'
    -
        author: Thibaud Arguillere
        date: '2014-05-07 00:42'
        message: ''
        version: '3'
    -
        author: Thibaud Arguillere
        date: '2014-05-07 00:36'
        message: ''
        version: '2'
    -
        author: Thierry Delprat
        date: '2014-05-07 00:09'
        message: ''
        version: '1'

---
The Nuxeo Platform can be used for a very broad range of application, each with different use cases and each involving differing expectations around performance.

Depending on your particular use cases and the throughput you expect, you will likely need to adapt the Nuxeo Platform configuration as well as the configuration of the underlying systems, in order to obtain the performance you seek.

This page provides guidance on how to optimize your application performance, as well as how to troubleshoot performance-related issues through monitoring. This information will also come in very handy should you seek assistance through our Support Department.

## Information Gathering

Context is key &ndash; when gathering information about performance (whether you are setting your internal objectives or troubleshooting problems), it's important to clarify what you are trying to achieve and how you are going about it.

In short, one must be able to quantify or measure performance issues, in order to be able to solve them.

### Describe Your Test Scenario

What you are testing, and how you are testing it?  Consider the following elements:

*   Which of the Nuxeo entry points are you testing?
    *   JSF UI,
    *   Rest API,
    *   Java API,
    *   other.
*   Your usage scenario:

    *   Bulk import? Browse? Search? Convert? ...
    *   How many concurrent users? What is the ramp up?
*   Your test data:

    *   How many documents do you have in the repository (approximately)?
    *   What content types are you using? Where to check for this?
    *   How many users do you have?
    *   How many ACEs (access control entries) do you have? Where to check for this?
*   The testing tools are you using, if any:

    *   Manual load testing?
    *   JMeter, LoadRunner ?

Having this information will help identify the part of the platform you are putting pressure on, and provide insight into how to reproduce the issue, which is an important step in identifying the underlying cause(s), setting up targeted monitoring, and qualifying potential resolutions.

### Metrics and Measurements

Performance is relative &ndash; if something appears slow, we need to define what "slow" means for your application.

The following metrics should be considered when qualifying a performance issue.

*   Application metrics:

    *   Number of request/sec,
    *   Number of document injected/sec,
    *   Number of queries executed/sec.
*   Information about your system:
    *   JVM monitoring (Heap, GC, Threads) need links to how to install & monitor this;
    *   Nuxeo Host system (CPU, Memory, I/O) PerfMon, fs_usage vm_stat, top, netstat;
    *   DB Server (CPU, Memory, I/O, Locks, Slow queries ...) PerfMon for SQLServer, Enterprise Manager for Oracle, ...?);
    *   Are any systems running on a VM (virtual machine)?
    *   Is the DB on the same host/VM?
    *   Where is the binary store (local disk, network mount, same disk as Nuxeo host server or database, AmazonS3, ...)?
        *   Is this on an SSD (solid state disk)?
    *   Is the DB storage using SSD (solid state disks)?

You can find more information about monitoring Nuxeo in the [Nuxeo Metrics page]({{page page='metrics-and-monitoring'}}).

For simple and automatic GC (garbage collection in the JVM) monitoring, see the [Monitoring Page]({{page version='' space='nxdoc' page='reporting-problems'}}#jvm-garbage-collector).

### Architecture

*   What version of Nuxeo are you using?
    *   What distribution are you using (CAP, DM, DAM, ...)?
    *   Any specific addons that may be relevant (Quotas, Multi-Tenant, custom code)?
*   What database server are you using? MSSQL, Oracle, PostgreSQL, other?
*   What is the hardware you are testing on?

## Key Points For Consideration

### Monitoring is Key

Performing benchmarking and performance tests is only effective when good monitoring is in place &ndash; the metrics you capture from monitoring the various systems and components is crucial when trying to pinpoint bottlenecks, and crucial in determining if a particular modification yields any improvement.

For more information on monitoring the Nuxeo Platform, please see [Nuxeo Metrics page]({{page page='metrics-and-monitoring'}}).

### Connection Pools

On most modern hardware, CPUs are multi-core. This means you will need to use multi-threading in order to take full advantage of the parallelism benefits of multi-core CPUs.

To control how you handle threads on Nuxeo, you can adjust its _pool_ settings.

There are three settings in Nuxeo that are directly related and that should be adjusted in a consistent manner:

*   Tomcat:
    *   HTTP connector:

        *   Thread pool size (`maxThreads` in server.xml or common-base/conf/server.xml.nxftl). This is the number of concurrent in-bound HTTP requests that Tomcat will handle in parallel;
        *   Waiting queue: This is the size of the in-bound HTTP requests that are accepted and held while waiting for a free thread.
    *   AJP connector
*   Nuxeo: DB connection pool
    *   VCS pool (`nuxeo.vcs.max-pool-size` in nuxeo.conf);
    *   Other DB pool (`nuxeo.db.max-pool-size` in nuxeo.conf).
*   Database server: Maximum concurrent connection and transactions.

In general the rule-of-thumb is that for each running Tomcat HTTP thread:

*   You will need one connection from VCS to access the repository;
*   You may need one connection from the generic pool to access an other datasource.

This means that for a typical configuration, you will have: `maxThreads = nuxeo.vcs.max-pool-size`.

- If you are not using Nuxeo in cluster mode you must ensure that: `nuxeo.vcs.max-pool-size + 1 (lock management) < nuxeo.db.max-pool-size`.

- If you are using Nuxeo in cluster mode you must ensure that: `nuxeo.vcs.max-pool-size + 1 (cluster connection) + 1 (lock management) < nuxeo.db.max-pool-size`.

Usually `nuxeo.db.max-pool-size` is set to `nuxeo.vcs.max-pool-size` + 10% to handle any thread requesting a DB connection but not a VCS connection (VCS is used to manipulate the repository).

Failure to set the DB server's in-bound connections to a large enough number to accommodate all possible connections from all running Nuxeo nodes, can create a bottleneck and severely impact performance.

It's important to understand that using more threads won't always speed up the application: the more threads you have, the more they will share the resources (CPU, DB ...), and the longer the transactions will be. This may create locking and conflicts issues at database level.

Adjusting the correct number of threads is dependent on many factors. This is where benchmarking can help, as it will allow you to adjust various settings and compare results in a consistent manner.

You may very well have at some point more requests than available threads: that's where the Tomcat queuing will be useful.

#### Common Problems & Hints

**DB Connections / Transaction Starvation**

When the database connection pool size is too high, you can end up in a situation where the database cannot provide anymore connections or transactions. In this case you will start having JDBC errors coming from the pools saying that transaction or connection was refused by the server.

**Pool Starvation**

When the HTTP thread pool size is too large in proportion to the database connection pool, you can end up in a situation where HTTP requests:

*   will be waiting for next available connection in the pool;
*   may eventually exit with an error such as "can not obtains a connection from the pool within the blocking timeout".

**Deadlocks & Transaction Rollbacks**

Deadlocks and rollbacks will occur when there are several transactions affective the same records in the database. Inside the Nuxeo Platform, this implies that more than one thread is attempting to modify the same document. For interactive users this is very unlikely to happen as the application provides thread-safe locking protection.

This kind of problem would occur if several asynchronous processes affect the same document. Typically, this could occur when several asynchronous listeners are triggered when a document is created or updated: for example virus scan + OCR + quota. However, most databases will correctly handle this via built-in row-locking. Therefore deadlocks are often the sign of additional problems being present, such as:

*   Long running transactions:
    *   Creates more concurrent transactions;
    *   Creates more overlapping between transactions;
*   Too many concurrent transactions:
    *   Lock escalation moves from row to page;
    *   Interleaving creates long running transactions.

Solutions are:

*   Reduce as much as possible long running transactions:
    *   Speed up transactions by speeding up I/O and reducing disk accesses;
    *   Split long running transactions in sub transactions.
*   Configure the pool to limit concurrency to what the database can actually handle.

### The DBA is Your Friend

By default the Nuxeo Platform will create database tables with very few indexes &ndash; this is by design as we cannot foresee what queries you will require and therefore which indexes should be created to make them more efficient.

In the default configuration, we create a set of default indexes that will be useful in most of the cases.

But to optimize your database, you should:

*   Run benchmarks of typical user activity;
*   Use the database monitoring tools to highlight the slowest queries;
*   create indexes in the database that will speed these queries.

Please refer to the [VCS documentation]({{page page='vcs'}}) in order to have a better understanding about how the Nuxeo Platform uses the database.

For more information about database-specific configurations and how to report problems, please see the [Database section]({{page page='database-configuration'}}).

### CPU Is Not 100%: Don't Panic

When running performance benchmarks, you may very well reach the maximum system throughput without seeing CPU utilization 100%. This is normal &ndash; it merely implied that the bottleneck is not the processing power. Other system bottleneck can include:

*   Disk I/O,
*   Database speed,
*   Memory allocation and GC,
*   Network latency and I/O.

If your benchmarks show that you use 100% of the CPU, this is usually a good sign as CPU is typically the easiest resource to add more of, and can add more Nuxeo nodes in order to increase performance.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Tracking the Performance of the Nuxeo Platform]({{page page='tracking-the-performance-of-the-nuxeo-platform'}})
- [Performance Recommendations]({{page page='performance-recommendations'}})
- [Metrics and Monitoring]({{page page='metrics-and-monitoring'}})

{{/panel}}</div><div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

&nbsp;

</div></div>
