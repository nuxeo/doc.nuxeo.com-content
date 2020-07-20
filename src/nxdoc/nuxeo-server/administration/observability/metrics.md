---
title: Metrics
description: Nuxeo is instrumented to expose metrics to various Monitoring systems.
review:
    date: '2020-06-10'
    status: ok
labels:
    - metrics
    - monitoring
toc: true
version_override:
    LTS 2019: nxdoc/metrics-and-monitoring
tree_item_index: 300
---

The Nuxeo code is instrumented using [Dropwizard Metrics](http://metrics.dropwizard.io/).

This library enables to report different type of metrics:
- __Counters__: a value that can increase (or decrease), for instance the number of created documents.
- __Gauges__: this is an instantaneous measurement of a value. For example, the size of a cache.
- __Timers__: it measures both the rate that a particular piece of code is called and the distribution of its duration.
  For example, it provides the min, max, average and percentiles for a request duration but also
  the number of requests per second, the total number of requests and, the total elapsed time.

Nuxeo metrics can be reported to various Monitoring systems.

{{#> callout type='note' }}

To have a complete monitoring you should also monitor the operating system where Nuxeo is running as well as other services: databases, Elasticsearch, Redis or Kafka.

{{/callout}}

## Supported Monitoring Systems

Nuxeo uses a `MetricReporter` interface to publish its metrics and provides multiple implementations,
the system can be extended to support other monitoring systems.

By default, since Nuxeo 11, we have the following metric reporters:
- JMX
- Graphite
- Datadog
- Prometheus

It is possible to activate multiple reporters at the same time.

Depending on the chosen metric reporter, Nuxeo will __push__ metrics or the metric system will __poll__ Nuxeo for metrics.
For instance, metrics are pushed to Graphite and Datadog while Prometheus is polling Nuxeo for metrics.

Monitoring systems are either hierarchical or dimensional:
- __Hierarchical__ Monitoring system uses a flat metric name, like a file system tree. Example of such system are: JMX, Graphite, StatsD, Ganglia, ...
- __Dimensional__ Monitoring system uses metric names enriched with tag key/value pairs. Example of such system are: Prometheus, Datadog, influxDB, ...

Since Nuxeo 11 the instrumentation of the code uses metric names with tags (dimensional metric).
Hierarchical monitoring reporters flatten the tags into the metric name.

For instance, a gauge that measures the pending video conversions on a Nuxeo cluster is named `nuxeo.works.global.queue.scheduled` and has the following tag: `queue=videoConversion`
that express the work `queue` dimension, the metric name is translated into:
<div class="table-scroll">

<table class="hover">
<tbody>
<tr>
  <th>Monitoring system</th>
  <th>type</th>
  <th>metric</th>
</tr>
<tr>
  <th>JMX</th>
  <td>hierarchical</td>
  <td>#mbean = metrics:name=nuxeo.works.global.queue.scheduled,queue=videoConversion,type=gauges</td>
</tr>
<tr>
  <th>Graphite</th>
  <td>hierarchical</td>
  <td>${PREFIX}+nuxeo.works.global.queue.videoConversion.scheduled</td>
</tr>
<tr>
  <th>Datadog</th>
  <td>dimensional</td>
  <td>nuxeo.works.global.queue.scheduled queue:videoConversion host:nuxeo</td>
</tr>
<tr>
  <th>Prometheus</th>
  <td>dimensional</td>
  <td>dropwizard5_nuxeo_works_global_queue_scheduled_gauge{instance="nuxeo:8888",job="nuxeo",queue="videoConversion"}</td>
</tr>
</tbody>
</table>
</div>

Note that the tag value (`videoConversion` in the above example) can be rewritten as a valid identifier, for instance a value of `audit/writer` will be translated into `audit-writer`

### JMX Reporter

To activate the JMX reporting you need a `nuxeo.conf` with the following options:
```
metrics.enabled=true
metrics.jmx.enabled=true
```

Metrics are exposed in a `metrics` MBean domain.

Note that to access the JMX MBean you need to activate JMX using `JAVA_OPTS`:

```
JAVA_OPTS=$JAVA_OPTS -Dcom.sun.management.jmxremote=true
```

{{#> callout type='note' }}
You then have to manage security for this access, since there is no authentication by default.
{{/callout}}

Visit [this page to see how to dump all metrics]({{page page='reporting-problems'}}#nuxeo-metrics-via-jmx).


```bash
$ echo "get -b metrics:name=nuxeo.works.queue.timer,queue=default,type=timers *" | java -jar /tmp/jmxterm-1.0.1-uber.jar -l localhost:1089 -n
Welcome to JMX terminal. Type "help" for available commands.
#mbean = metrics:name=nuxeo.works.queue.timer,queue=default,type=timers:
50thPercentile = 0.0;
DurationUnit = microseconds;
Max = 76000.0;
75thPercentile = 0.0;
95thPercentile = 0.0;
98thPercentile = 0.0;
99thPercentile = 0.0;
999thPercentile = 24000.0;
Mean = 67.96712231400461;
StdDev = 1250.994358152994;
Min = 0.0;
Count = 60;
RateUnit = events/second;
Sum = 509000.0;
FifteenMinuteRate = 0.021929133134494853;
FiveMinuteRate = 0.011975928378019026;
MeanRate = 0.047353163048175675;
OneMinuteRate = 5.608847244891202E-4;
```

### Graphite Reporter

Metrics are pushed to Graphite every `pollInterval`.
Default reporting is done using TCP but if possible UDP should be chosen.
If unspecified the default prefix is `server.<HOSTNAME>.nuxeo.`

The `nuxeo.conf` options are:
```
metrics.enabled=true
metrics.graphite.enabled=true
metrics.graphite.host=GRAPHITE_HOST
metrics.graphite.port=2003
metrics.graphite.udp=false
metrics.graphite.pollInterval=60
metrics.graphite.prefix=
```

![graphite]({{file name='graphite-nav.png'}} ?w=650,border=true)

### Datadog Reporter

Configuration:
```
metrics.datadog.enabled=true
metrics.datadog.pollInterval=60
metrics.datadog.apiKey=YOUR_API_KEY
metrics.datadog.tags=nuxeo
metrics.datadog.hostname=
metrics.datadog.udp=false
metrics.datadog.host=localhost
metrics.datadog.port=8125
```

The `metrics.datadog.apiKey` is required when publishing directly to Datadog, in this case host and port are not required.

When UDP is chosen, the `metrics.datadog.host` and `metrics.datadog.port` must refer to a Datadog agent in charge of forwarding metrics into the cloud.

Additional tags can be added to all metrics using `metrics.datadog.tags`.
Metrics are polled from Nuxeo and pushed to Datadog using the defined `pollInterval`.

![datadog]({{file name='datadog-nav.png'}} ?w=650,border=true)

### Prometheus Reporter

Configuration:
```
metrics.prometheus.enabled=true
metrics.prometheus.port=9090
```

Nuxeo is exposing a Prometheus endpoint on `metrics.prometheus.port`.
You have to manage security for this access and make sure it is accessible from Prometheus in order to scrape the metrics.

Note that the Dropwizzard Metrics are exposed using [Opencensus](opencensus.io/), they are automatically prefixed by `dropwizard5_`
and suffixed depending on metric types (`_gauge`, `_count` and `_timer`).

![prometheus]({{file name='prometheus-nav.png'}} ?w=650,border=true)

## Metrics Filtering

A counter or gauge instrumentation create a single metric,
on the other hand a timer generates 16 metrics:
- `min`: minimum measured time
- `max`: maximum measured time
- `mean`: average measured time
- `stddev`: standard deviation
- `p50`: median or percentile 50%
- `p75`, `p95`, `p98`, `p99`, `p999`: percentiles
- `m1_rate`: moving average on the last minute of the throughput
- `m5_rate`, `m15_rate`: moving average on 5 and 15 minutes
- `mean_rate`: average throughput
- `count`: number of timer call
- `sum`: total cumulative time

The number of metrics depends on the deployed repositories, directories, caches, work queues, computations, streams ...
which can be a huge number.
Fortunately it is possible to filter metrics.

Nuxeo comes with a default filter that:
- Reduces timer metrics by removing some percentiles and rates
- Accept only a few caches and directories metrics
- Deny other caches and directories
- Deny log4j metrics for the level below WARN

This filter can be found in `common-base` template in the [metrics-config.xml](https://github.com/nuxeo/nuxeo/blob/master/server/nuxeo-nxr-server/src/main/resources/templates/common-base/nxserver/config/metrics-config.xml) file:

```xml
  <extension target="org.nuxeo.runtime.metrics.MetricsService" point="configuration">
    <configuration enabled="${metrics.enabled}">
      ...
      <filter>
        <allow>
          <prefix>nuxeo.cache.default-cache.</prefix>
          <prefix>nuxeo.cache.user-entry-cache.</prefix>
          <prefix>nuxeo.cache.group-entry-cache.</prefix>
          <prefix>nuxeo.directories.directory.userDirectory</prefix>
          <prefix>nuxeo.directories.directory.groupDirectory</prefix>
        </allow>
        <deny>
          <prefix>nuxeo.cache</prefix>
          <prefix>nuxeo.directories</prefix>
          <prefix>nuxeo.ActionService</prefix>
          <prefix>org.apache.logging.log4j.core.Appender.debug.count</prefix>
          <prefix>org.apache.logging.log4j.core.Appender.info</prefix>
          <prefix>org.apache.logging.log4j.core.Appender.debug</prefix>
          <prefix>org.apache.logging.log4j.core.Appender.trace</prefix>
          <prefix>org.nuxeo.ecm.core.management.standby.StandbyComponent</prefix>
          <!-- Timer expansion to remove -->
          <expansion>sum</expansion>
          <expansion>p999</expansion>
          <expansion>p99</expansion>
          <expansion>p95</expansion>
          <expansion>m15_rate</expansion>
          <expansion>m5_rate</expansion>
          <expansion>mean_rate</expansion>
        </deny>
      </filter>
    </configuration>
  </extension>
```

Note that the `prefix` value used in the allow/deny rules is the beginning of the flatten metric name.

## Metrics Description

This section describes the main metrics available by categories.

You will find the metric name and its associates dimensions.

### Nuxeo Cache

All the following metrics have a `cache` dimension with the name of the cache.
Common caches are: `default-cache` or low level caches used by directories like: `user-entry-cache` or `group-entry-cache`.

- `nuxeo.cache.hit`: Number of cache hits
- `nuxeo.cache.miss`: Number of cache miss
- `nuxeo.cache.hit.ratio`: Hit ratio of the cache
- `nuxeo.cache.invalidation`: Number of cache invalidation
- `nuxeo.cache.size`: Size of the cache
- `nuxeo.cache.read`: Number of cache get (miss + hit)
- `nuxeo.cache.write`: Number of cache put

### Nuxeo Directories

Directory metrics have a `directory` dimension with the name of the directory.
Common directories are: `userDirectory`, `groupDirectory`

- `nuxeo.directories.directory.sessions.active`: Number of active Sessions
- `nuxeo.directories.directory.sessions.max`: Maximum number of Sessions used
- `nuxeo.directories.directory.cache.hit`: Number of entry hits
- `nuxeo.directories.directory.cache.hit.null`: Count hit on non-existing entries
- `nuxeo.directories.directory.cache.invalidation`: Count invalidation
- `nuxeo.directories.directory.cache.miss`: Number of cache miss
- `nuxeo.directories.directory.cache.size`: Cache size

### Nuxeo Elasticsearch

Nuxeo Elasticsearch service use timers.

- `nuxeo.elasticsearch.service.timer`: Timer on the service dimension below
  - `service=search`: Invoking an elasticsearch query
  - `service=scroll`: Invoking a next scroll query
  - `service=index`: Invoking indexation of a single document
  - `service=bulkIndex`: Invoking indexation of one or more documents
  - `service=delete`: Invoking a deletion query
  - `service=fetch`: Fetching documents from the repository to build the search response

### Nuxeo Stream Importer

When using the `nuxeo-platform-importer/nuxeo-importer-stream` some metrics are reported to follow producers and consumers progress.

- `nuxeo.importer.stream.producer`: Timer on poducer hook
- `nuxeo.importer.stream.producers`: Number of producers
- `nuxeo.importer.stream.consumers`: Number of consumers
- `nuxeo.importer.stream.consumer.committed`: Number of committed documents
- `nuxeo.importer.stream.consumer.batchCommit`: Timer on batch transaction commit
- `nuxeo.importer.stream.consumer.batchFailure`: Counter of batch failure

### Nuxeo Instance UP

Each time a Nuxeo node is started it reports the following metrics that can be
aggregated to count the number of Nuxeo nodes in the cluster.

- `nuxeo.instance-up`: One if up

### Nuxeo Repositories

Repository metrics have a `repository` dimension with the name of the repository.

- `nuxeo.repositories.repository.documents.create`: Count the number of documents created since the node is up
- `nuxeo.repositories.repository.documents.delete`: Count the number of documents deleted since the node is up
- `nuxeo.repositories.repository.documents.update`: Count the number of documents updated since the node is up

- `nuxeo.repositories.repository.query`: Timer on NXQL queries
- `nuxeo.repositories.repository.save`: Timer on session saves
- `nuxeo.repositories.sessions`: Counter of active sessions

- `nuxeo.repositories.repository.connection.count`: Number of connections used
- `nuxeo.repositories.repository.connection.idle`: Number of connections idle
- `nuxeo.repositories.repository.connection.killed`: Killed connections

Repository document cache stats:
- `nuxeo.repositories.repository.cache.eviction.count`
- `nuxeo.repositories.repository.cache.hit.count`
- `nuxeo.repositories.repository.cache.hit.ratio`
- `nuxeo.repositories.repository.cache.miss.count`
- `nuxeo.repositories.repository.cache.read.count`
- `nuxeo.repositories.repository.cache.size`

Repository children documents cache stats:
- `nuxeo.repositories.repository.childCache.eviction.count`
- `nuxeo.repositories.repository.childCache.hit.count`
- `nuxeo.repositories.repository.childCache.hit.ratio`
- `nuxeo.repositories.repository.childCache.miss.count`
- `nuxeo.repositories.repository.childCache.read.count`
- `nuxeo.repositories.repository.childCache.size`

### {{> anchor 'nuxeo-streams'}}Nuxeo Streams

[Nuxeo Stream]({{page page='nuxeo-stream'}}) Processor relies on a topology of computations.
It is important to monitor failure [because a manual intervention is required]({{page page='nuxeo-stream'}}#recovery).

- `nuxeo.streams.failure`: Total number of computation threads terminated because of failure for the node (all computations)

Each computation has the following metrics, the computation name being a dimension, for instance `audit/writer`, `bulk/csvExport` ...

- `nuxeo.streams.computation.failure`: Count the number of computation threads terminated by a failure
- `nuxeo.streams.computation.skippedRecord`: Count the number of record skipped after failure, the computation thread is not terminated
- `nuxeo.streams.computation.processRecord`: Timer around processing of incoming record
- `nuxeo.streams.computation.processTimer`: Timer around the computation timer processing
- `nuxeo.streams.computation.running`: Number of active computation thread processing records or timers

All these metrics are local to each Nuxeo node.

The following metrics represent the lag and latencies of computations,
these metrics are global to the Nuxeo cluster and have 2 dimensions:
- `stream` obviously the stream name like `audit/audit` or `bulk/command`
-`group` the name of the consumer group which the computation name like `audit/writer` or `bulk/scroller`

- `nuxeo.streams.global.stream.group.lag`: Number of records between the end of the stream and position of the consumer group
- `nuxeo.streams.global.stream.group.pos`: Offset of the consumer group on this stream
- `nuxeo.streams.global.stream.group.end`: Offset of the last record in the stream
- `nuxeo.streams.global.stream.group.latency`: Latency of consumer group when there is a lag

#### Understanding the Lag and Latency Metrics

Given a producer that appends 3 records in a stream `source`:
 - `record1` at time `t1`, offset `1`
 - `record2` at time `t2`, offset `2`
 - `record3` at time `t3`, offset `3`

A processor is started with a computation `C1` reading from the previous stream,
until the first record of the stream has been processed there is no lag or latency reported.

Once the first record has been processed we have the following metrics for `group`: `C1`, `stream`: `source`:
- `pos`: offset `1`
- `end`: offset `3`
- `lag`: `2` (which is `end` - `pos`)
- `latency`: now() - `t1`

After processing the second record we have:
- `pos`: offset `2`
- `end`: offset `3`
- `lag`: `1`
- `latency`: now() - `t2`

After the third and last record, there is no more lag or latency, the computation has caught up with the producer:
- `pos`: offset `3`
- `end`: offset `3`
- `lag`: `0`
- `latency`: `0`

### Nuxeo Transactions

- `nuxeo.transactions.concurrency`: Current number of concurrent transaction
- `nuxeo.transactions.concurrency.max`: Maximum registered concurrent transactions
- `nuxeo.transactions.rollbacks`: Number of transaction rollbacks
- `nuxeo.transactions.timer`: Timer on all transactions

### Nuxeo Web

Metrics reported by the Web NuxeoAuthenticationFilter:

- `nuxeo.web.authentication.logged-users`: Number of users successfully logged and that didn't logout explicitly, the session timeout is not taken into account
- `nuxeo.web.authentication.requests.concurrency`: Current concurrent requests in the filter
- `nuxeo.web.authentication.requests.concurrency.max`: Registered maximum number of concurrency
- `nuxeo.web.authentication.requests.timer`: Timer on the request web filter

### Nuxeo WorkManager

The WorkManager service provides metrics by queue (`default`, `fulltextUpdater` ...)

Some are global to the Nuxeo cluster:

- `nuxeo.works.global.queue.scheduled`: Number of scheduled Work
- `nuxeo.works.global.queue.completed`: Number of completed Work
- `nuxeo.works.global.queue.running`: Number of running Work
- `nuxeo.works.global.queue.canceled`: number of canceled Work

Some are local to the node:

- `nuxeo.works.dlq`: Number of Work in failure moved in the dead letter queue
- `nuxeo.works.queue.timer`: Timer for Work execution

### JVM
Can be disabled using:
```
metrics.jvm.enabled=false
```

Some metrics depends on the chosen garbage collector or the version of the JVM:

- `jvm.buffers.direct.capacity`
- `jvm.buffers.direct.count`
- `jvm.buffers.direct.used`
- `jvm.buffers.mapped.capacity`
- `jvm.buffers.mapped.count`
- `jvm.buffers.mapped.used`
- `jvm.files`
- `jvm.garbage.G1*`
- `jvm.memory.heap.committed`
- `jvm.memory.heap.init`
- `jvm.memory.heap.max`
- `jvm.memory.heap.usage`
- `jvm.memory.heap.used`
- `jvm.memory.non-heap.committed`
- `jvm.memory.non-heap.init`
- `jvm.memory.non-heap.max`
- `jvm.memory.non-heap.usage`
- `jvm.memory.non-heap.used`
- `jvm.memory.total.committed`
- `jvm.memory.total.init`
- `jvm.memory.total.max`
- `jvm.memory.total.used`
- `jvm.threads.blocked.count`
- `jvm.threads.count`
- `jvm.threads.daemon.count`
- `jvm.threads.deadlock.count`
- `jvm.threads.deadlocks`
- `jvm.threads.new.count`
- `jvm.threads.runnable.count`
- `jvm.threads.terminated.count`
- `jvm.threads.timed_waiting.count`
- `jvm.threads.waiting.count`

### Tomcat

Can be disabled using:
```
metrics.tomcat.enabled=false
```

- `tomcat.activeSessions`
- `tomcat.bytesReceived`
- `tomcat.bytesSent`
- `tomcat.currentThreadBusy`
- `tomcat.currentThreadCount`
- `tomcat.errorCount`
- `tomcat.jdbc-numActive`
- `tomcat.jdbc-numIdle`
- `tomcat.processingTime`
- `tomcat.requestCount`

### Log4j

Can be disabled using:
```
metrics.log4j.enabled=false
```

- `org.apache.logging.log4j.core.Appender.all`: Count number of log traced (all level)
- `org.apache.logging.log4j.core.Appender.warn`: Count the number of log at level WARN
- `org.apache.logging.log4j.core.Appender.error`: Count the number of log at level ERROR
- `org.apache.logging.log4j.core.Appender.fatal`: Count the number of log at FATAL level

## Monitoring Dashboard

The above metrics can be rendered in dashboards depending on the chosen monitoring systems.

### Grafana

Grafana can be used to render Graphite or Prometheus metrics.

The [Nuxeo Stacks](https://github.com/bdelbosc/nuxeo-stacks/) tool that generates dev and testing environment for Nuxeo provides a Grafana dashboard using a Graphite backend.

The [JSON dashboard can be found in its sources](https://github.com/bdelbosc/nuxeo-stacks/blob/master/roles/common/files/grafana/provisioning/dashboards/nuxeo.json).

![grafana]({{file name='grafana-dashboard.png'}} ?w=650,border=true)

### Datadog

The same dashboard can be build using Datadog.

![datadog]({{file name='datadog-dashboard.png'}} ?w=650,border=true)
