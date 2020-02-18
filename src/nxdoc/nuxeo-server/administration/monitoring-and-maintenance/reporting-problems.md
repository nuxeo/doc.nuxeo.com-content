---
title: Reporting Problems
review:
    comment: ''
    date: '2020-02-12'
    status: ok
toc: true
labels:
    - lts2019-ok
    - content-review-lts2019
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
Here are listed some procedures to extract information of a running Nuxeo instance.</br>
Most of these scripts generate files in the `/tmp/` directory.</br>
These information can be requested by the Support team.</br>
Please always compress files before uploading them to your JIRA ticket.
{{! /excerpt}}

&nbsp;

## {{> anchor 'nuxeo-conf'}}Nuxeo Status and Configuration

To dump your server status and configuration:

```bash
./bin/nuxeoctl showconf > /tmp/nuxeo-showconf-`date +%Y%m%d-%H%M%S`.txt
```

## {{> anchor 'health-check'}}Nuxeo Health Check Status

```bash
curl -XGET http://localhost:8080/nuxeo/runningstatus > /tmp/nuxeo-healthcheck-`date +%Y%m%d-%H%M%S`.json
```

## {{> anchor 'metrics'}}Nuxeo Metrics via JMX

When JMX is enabled (uncomment JMX related lines in [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}})), the Nuxeo Platform exposes [lots of metrics]({{file name='metrics.odt'}}) accessible in the `"metrics"` domains.

You can use GUI tools like Java Mission Control or VisualVM to introspect these metrics, but if you want to dump all of them to report a problem you can use [jmxterm](http://wiki.cyclopsgroup.org/jmxterm/) (using the same JVM and user as your Nuxeo):

Initialize the script:
```bash
# download jmxterm
wget https://github.com/jiaqi/jmxterm/releases/download/v1.0.1/jmxterm-1.0.1-uber.jar -O /tmp/jmxterm-1.0.1-uber.jar
# list metrics beans and create a script
echo -e "domain metrics\nbeans" | java -jar /tmp/jmxterm-1.0.1-uber.jar -l localhost:1089 -n | sed -e "s,^,get -b ,g" -e "s,$, \*,g" > /tmp/metrics-script.txt
```

Then proceed to the metric capture:
```bash
(now=`date +%Y%m%d-%H%M%S`; java -jar /tmp/jmxterm-1.0.1-uber.jar -l localhost:1089 -n -i /tmp/metrics-script.txt)  > /tmp/nuxeo-metrics-$now.txt 2>&1
```

## {{> anchor 'gc'}}JVM Garbage Collector

The garbage collector attempts to reclaim memory used by objects that are no longer in use by the application.

The garbage collector is monitored by default since Nuxeo 6.0, the log file is located here: `${nuxeo.log.dir}/gc.log`.

In case of problem think to save this file before restarting because the file is overridden on start. If you see many full GC in the file try to run a JVM heap histo.

## {{> anchor 'heap-histo'}}JVM Heap Histo

To see what objects are present in the heap:

```
jcmd Bootstrap GC.class_histogram > /tmp/nuxeo-heap-histo-`date +%Y%m%d-%H%M%S`.txt
```

## JVM Thread Dump and CPU Activity

A thread dump is useful to understand what code is running at time `t`.

The first step is to log in as same user as the Nuxeo JVM then use `jcmd`:

```
jcmd Bootstrap Thread.print > /tmp/nuxeo.tdump
```

It is interesting to correlate the code path given by a thread dump with the CPU activity:

```
top -bcH -n1 -w512 > /tmp/top-thread.txt
```

{{> anchor 'thread-dump'}}To pinpoint stuck code this needs to be done multiple times:
```bash
# 6 dumps during one minute
for i in {0..5}; do now=`date +%Y%m%d-%H%M%S`; jcmd Bootstrap Thread.print > /tmp/nuxeo-$now.tdump; top -bcH -n1 -w512 > /tmp/top-$now.txt; sleep 10; done
```

## {{> anchor 'flight-record'}}Oracle JVM Flight Recording

If you are subscribing to an appropriate Oracle commercial license for the JVM, you can activate this option in the `nuxeo.conf`:

```
JAVA_OPTS=$JAVA_OPTS -Dcom.sun.management.jmxremote.autodiscovery=true -Dcom.sun.management.jdp.name=Nuxeo -XX:+UnlockCommercialFeatures -XX:+FlightRecorder
```

Then to record JVM activity for 1 minute use the following command:

```
jcmd Bootstrap JFR.start duration=60s filename=/tmp/nuxeo-record-`date +%Y%m%d-%H%M%S`.jfr
```

## {{> anchor 'core-dump'}}JVM Core Dump

When the JVM is stuck, in addition to thread dump and before restarting, a core dump can give more context information,

If you have `gdb` installed, you can generate a core dump without killing the application:

```
sudo gdb --pid=<PID> --batch -ex generate-core-file -ex detach
```

## {{> anchor 'network'}}Network

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
sudo tcpdump  -i lo -A host localhost and tcp port 8080 -w /tmp/nuxeo-network-`date +%Y%m%d-%H%M%S`.tcpdump
```

## {{> anchor 'os'}}OS

You can report a Linux configuration using the [aspersa summary](http://aspersa.googlecode.com/svn/html/summary.html) script:

```
wget https://raw.githubusercontent.com/AnthemiusGuo/aspersa/master/summary && bash summary > /tmp/nuxeo-os-summary-`date +%Y%m%d-%H%M%S`.txt
```

To monitor the system the [sysstat](http://pagesperso-orange.fr/sebastien.godard/) utilities are a collection of performance monitoring tools for Linux that is easy to setup.

You can monitor the system activity like this:

```
sar -d -o /tmp/nuxeo-sysstat-`date +%Y%m%d-%H%M%S`.log 5 720 >/dev/null 2>&1 &

```

This will monitor the activity every 5s during 1h.

Very useful also is to have a process monitoring, this can be done with [atop](http://atopatop) running as root:

```
atop -w /tmp/nuxeo-atop-`date +%Y%m%d-%H%M%S`.log 5 720 >/dev/null 2>&1 &
```


## {{> anchor 'postgres'}}PostgreSQL

Follow the [Nuxeo recommendation]({{page page='postgresql'}}#monitoring) and perform the [reporting problem procedure]({{page page='postgresql'}}#reporting-problems). [Pgbadger](https://github.com/dalibo/pgbadger) and [explain](http://explain.depesz.com/) are your friends.

## {{> anchor 'elastic'}}Elasticsearch

If the problem is related to Elasticsearch access (initialization or bad health status), please list:

- the non default `nuxeo.conf`, `elasticsearch.*` options
- the non default Elasticsearch configuration options (especially the discovery)

And report the output of the following commands, assuming that Elasticsearch is on localhost and that the HTTP protocol is open on port 9200:

```bash
(ES="localhost:9200"; curl "$ES"; curl "$ES/_cat/health?v"; curl "$ES/_cat/nodes?v"; curl "$ES/_cat/indices?v") > /tmp/nuxeo-elastic-`date +%Y%m%d-%H%M%S`.txt
```

In addition if the problem is related to unexpected search results or errors, follow this procedure: [Reporting Settings and Mapping]({{page page='elasticsearch-setup'}}#reporting-settings-and-mapping)

## {{> anchor 'redis'}}Redis

How much memory is used:
```bash
redis-cli info memory > /tmp/nuxeo-redis-mem-`date +%Y%m%d-%H%M%S`.txt
```

Capture activity, hit `Ctrl-C` to stop:
```bash
redis-cli monitor > /tmp/nuxeo-redis-monitor-`date +%Y%m%d-%H%M%S`.txt
```

## {{> anchor 'kafka'}}Kafka

You can get low level information using directly Kafka scripts, for instance:

```bash
# List all topics:
/opt/kafka/bin/kafka-topics.sh  --zookeeper zookeeper:2181 --list

# Describe a topic
/opt/kafka/bin/kafka-topics.sh  --zookeeper zookeeper:2181 --describe --topic nuxeo-audit

# List all consumer groups
/opt/kafka/bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 --list

# Describe a consumer group
/opt/kafka/bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group nuxeo-AuditLogWriter
```

## {{> anchor 'stream-lag'}}Nuxeo Stream Consumer Lag

The `stream.sh` utility is located in the same `bin` directory as `nuxeoctl`.

### {{> anchor 'stream-lag-kafka'}}When Using Kafka

```bash
# List topics and consumers lag
./bin/stream.sh lag -k >  /tmp/nuxeo-stream-lag-`date +%Y%m%d-%H%M%S`.md

# Get the latency in addition to the lag
./bin/stream.sh latency -k --codec avro >  /tmp/nuxeo-stream-lag-`date +%Y%m%d-%H%M%S`.md
```

### {{> anchor 'stream-lag-cq'}}When Using Chronicle

When not using Kafka, you need to get the consumer activity on each Nuxeo node:
```bash
# List streams and consumers position
(NUXEO_DATA=/var/lib/nuxeo/data; ./bin/stream.sh lag --chronicle $NUXEO_DATA/stream/bulk; ./bin/stream.sh lag --chronicle $NUXEO_DATA/stream/audit; ./bin/stream.sh lag --chronicle $NUXEO_DATA/stream/default) >  /tmp/nuxeo-stream-lag-`date +%Y%m%d-%H%M%S`.md
```

If required you can also take a snapshot of the streams:
```bash
(NUXEO_DATA=/var/lib/nuxeo/data; tar czsf /tmp/nuxeo-cq-`date +%Y%m%d-%H%M%S`.tgz $NUXEO_DATA/stream/ $NUXEO_DATA/avro/)
```

## {{> anchor 'security'}}Security

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
