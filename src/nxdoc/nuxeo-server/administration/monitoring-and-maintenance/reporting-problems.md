---
title: Reporting Problems
review:
    comment: ''
    date: '2016-12-07'
    status: ok
toc: true
labels:
    - lts2016-ok
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '950318'
    ajs-parent-page-title: Monitoring and Maintenance
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Reporting+Problems
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Reporting+Problems'
    page_id: '23365631'
    shortlink: '-4dkAQ'
    shortlink_source: 'https://doc.nuxeo.com/x/-4dkAQ'
    source_link: /display/NXDOC/Reporting+Problems
tree_item_index: 1100
version_override:
    LTS 2015: 710/admindoc/reporting-problems
    '6.0': 60/admindoc/reporting-problems
    '5.8': 58/admindoc/reporting-problems
history:
    -
        author: Manon Lumeau
        date: '2016-06-09 14:04'
        message: ''
        version: '28'
    -
        author: Manon Lumeau
        date: '2016-03-29 09:50'
        message: ''
        version: '27'
    -
        author: Benoit Delbosc
        date: '2016-02-12 08:53'
        message: ''
        version: '26'
    -
        author: Manon Lumeau
        date: '2016-01-27 11:08'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2016-01-27 11:00'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2016-01-27 10:38'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2015-12-03 15:16'
        message: ''
        version: '22'
    -
        author: Vincent Dutat
        date: '2015-09-24 18:04'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2015-06-05 09:23'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2015-06-05 09:22'
        message: Title format and typo
        version: '19'
    -
        author: Benoit Delbosc
        date: '2015-06-04 09:42'
        message: Add an ES reporting procedure
        version: '18'
    -
        author: Benoit Delbosc
        date: '2015-03-23 13:22'
        message: ''
        version: '17'
    -
        author: Anahide Tchertchian
        date: '2015-03-18 09:23'
        message: ''
        version: '16'
    -
        author: Anahide Tchertchian
        date: '2015-03-18 09:22'
        message: Reverted from v. 13
        version: '15'
    -
        author: Anahide Tchertchian
        date: '2015-03-18 09:21'
        message: ''
        version: '14'
    -
        author: Benoit Delbosc
        date: '2015-03-18 08:35'
        message: ''
        version: '13'
    -
        author: Benoit Delbosc
        date: '2015-03-18 08:33'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2015-03-16 09:11'
        message: ''
        version: '11'
    -
        author: Benoit Delbosc
        date: '2015-03-13 08:48'
        message: ''
        version: '10'
    -
        author: Anahide Tchertchian
        date: '2015-03-02 12:42'
        message: ''
        version: '9'
    -
        author: Benoit Delbosc
        date: '2015-02-18 09:16'
        message: ''
        version: '8'
    -
        author: Vincent Dutat
        date: '2015-02-16 17:41'
        message: ''
        version: '7'
    -
        author: Benoit Delbosc
        date: '2015-02-09 15:12'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2015-02-05 15:49'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2015-02-05 14:10'
        message: Add related topics
        version: '4'
    -
        author: Benoit Delbosc
        date: '2015-02-04 11:09'
        message: ''
        version: '3'
    -
        author: Benoit Delbosc
        date: '2015-02-04 11:01'
        message: ''
        version: '2'
    -
        author: Benoit Delbosc
        date: '2015-02-04 10:36'
        message: ''
        version: '1'

---
{{! excerpt}}

Here are listed some procedures to extract information of a running Nuxeo instance. These information can be requested by the support team. Please always compress files before uploading them to your JIRA ticket.

{{! /excerpt}}

&nbsp;

## Nuxeo Configuration and Status

To dump your server configuration and status run

```
./bin/nuxeoctl showconf
./bin/nuxeoctl status
```

## JMX Monitoring

When JMX is enabled (uncomment JMX related lines in [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}})), the Nuxeo Platform exposes [lots of metrics]({{file name='metrics.odt'}}) accessible in the `"metrics"` domains.

You can use GUI tools like Java Mission Control or VisualVM to introspect these metrics, but if you want to dump all of them to report a problem you can use [jmxterm](http://wiki.cyclopsgroup.org/jmxterm/) (using the same JVM and user as your Nuxeo):

```
# download jmxterm
wget http://sourceforge.net/projects/cyclops-group/files/jmxterm/1.0-alpha-4/jmxterm-1.0-alpha-4-uber.jar/download -O /tmp/jmxterm-1.0-alpha-4-uber.jar
# list metrics beans and create a script
echo -e "domain metrics\nbeans" | java -jar /tmp/jmxterm-1.0-alpha-4-uber.jar -l localhost:1089 -n | sed -e "s,^,get -b ,g" -e "s,$, \*,g" > /tmp/metrics-script.txt
# get metrics info
(date +'%Y-%m-%d %H:%M:%S:%3N'; java -jar /tmp/jmxterm-1.0-alpha-4-uber.jar -l localhost:1089 -n -i /tmp/metrics-script.txt)  > /tmp/metrics.txt 2>&1

```

And attach the `metrics.txt` file to your JIRA ticket.

## JVM Garbage Collector

The garbage collector attempts to reclaim memory used by objects that are no longer in use by the application.

The garbage collector is monitored by default since Nuxeo 6.0, the log file is located here: `${nuxeo.log.dir}/gc.log`.

In case of problem think to save this file before restarting because the file is overridden on start. If you see many full GC in the file try to run a JVM heap histo.

## JVM Heap Histo

To see what objects are present in the heap

```
jcmd Bootstrap GC.class_histogram > /tmp/heap-histo.txt
```

## JVM Thread Dump

A thread dump is useful to understand what code is running at time t. It is always better to create 2 or 3 thread dumps with few seconds of pause between them. It makes possible to pinpoint stuck code, you should also take capture of the thread activity.

The first step is to log in as same user as the Nuxeo JVM then use either `jcmd`:

```
jcmd Bootstrap Thread.print > /tmp/nuxeo.tdump
```

Or `jstack`:

1.  Get the PID of the Nuxeo JVM, running command and look at a Bootstrap process id.
2.  Then run

    ```
    jstack <PID> > /tmp/nuxeo.tdump
    ```

3.  If you have errors try again with the force option: `jstack -F <PID>`.

### CPU Thread Activity

It is also interesting to correlate the code path given by a thread dump with the CPU activity:

```
top -bcH -n1 -w512 > /tmp/top-thread.txt
```

## Oracle JVM Flight Recording

If you are subscribing to an appropriate Oracle commercial license for the JVM, you can activate this option in the `nuxeo.conf`:

```
JAVA_OPTS=$JAVA_OPTS -Dcom.sun.management.jmxremote.autodiscovery=true -Dcom.sun.management.jdp.name=Nuxeo -XX:+UnlockCommercialFeatures -XX:+FlightRecorder
```

Then to record JVM activity for 1 minute use the following command:

```
jcmd Bootstrap JFR.start duration=60s filename=/tmp/record-01.jfr
```

## JVM Core Dump

When the JVM is stuck, in addition to thread dump and before restarting, a core dump can give more context information,

If you have `gdb` installed, you can generate a core dump without killing the application:

```
sudo gdb --pid=<PID> --batch -ex generate-core-file -ex detach
```

## PostgreSQL

Follow the [Nuxeo recommendation ]({{page page='postgresql'}}#monitoring)and perform the [reporting problem procedure]({{page page='postgresql'}}#reporting-problems). [Pgbadger](https://github.com/dalibo/pgbadger) and [explain](http://explain.depesz.com/) are your friends.

## Elasticsearch

If the problem is related to Elasticsearch access (initialization or bad health status), please list:

*   the non default `nuxeo.conf` `elasticsearch.*`options
*   the non default Elasticsearch configuration options (especially the discovery)

And report the output of the following commands, assuming that Elasticsearch is on localhost and that the HTTP protocol is open on port 9200:

```
curl "localhost:9200"
curl "localhost:9200/_cat/health?v"
curl "localhost:9200/_cat/nodes?v"
curl "localhost:9200/_cat/indices?v"
```

In addition If the problem is related to unexpected search results or errors, follow this procedure: [Reporting Settings and Mapping]({{page page='elasticsearch-setup'}}#reporting-settings-and-mapping)

## Network

Measure the round trip between [Nuxeo and the database]({{page page='tracking-the-performance-of-the-nuxeo-platform'}}):

```
ping -s 8192 <database IP>
```

Use [mtr](http://www.bitwizard.nl/mtr/) to discover what is between the Nuxeo server and the database, report any firewall or known hardware.

Look at the number of errors reported by `netstat -s` , as a large number of errors may indicate a network problem.

A network capture can be helpful at some point:

```
# Capture all eth0 traffic
sudo tcpdump -i eth0 -w /tmp/out.tcpdump
# Capture http traffic to port localhost:8080
sudo tcpdump  -i lo -A host localhost and tcp port 8080 -w /tmp/out.tcpdump
```

## OS

You can report a Linux configuration using the [aspersa summary](https://code.google.com/p/aspersa/) script:

```
wget http://aspersa.googlecode.com/svn/trunk/summary && bash summary
```

To monitor the system the [sysstat](http://pagesperso-orange.fr/sebastien.godard/) utilities are a collection of performance monitoring tools for Linux that is easy to setup.

You can monitor the system activity like this:

```
sar -d -o /tmp/sysstat-sar.log 5 720 >/dev/null 2>&1 &

```

This will monitor the activity every 5s during 1h.

Very useful also is to have a process monitoring, this can be done with [atop](http://atopatop) running as root:

```
atop -w /tmp/atop.log 5 720 >/dev/null 2>&1 &
```

## Security

If you think you've found a security issue, please report it privately to [security@nuxeo.com](mailto:security@nuxeo.com).

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading='Related Documentation'}}

- [Monitoring and Maintenance]({{page page='monitoring-and-maintenance'}})
- [Metrics and Monitoring]({{page page='metrics-and-monitoring'}})
- [Transactions and Connections]({{page page='transactions-and-connections'}})

{{/panel}}</div><div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

&nbsp;

</div></div>
