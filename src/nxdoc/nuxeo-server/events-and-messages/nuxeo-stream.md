---
title: Nuxeo Stream
review:
    comment: ''
    date: '2020-07-16'
    status: ok
labels:
    - 11.1-ok
toc: true
tree_item_index: 300
---

{{! excerpt}}
Nuxeo Stream aims to provide asynchronous and distributed processing, there are different layers:
- A Log storage abstraction with a Chronicle Queue and Kafka implementations
- A library to provide processing patterns without dependencies on Nuxeo
- Nuxeo services to configure Kafka, streams and processor using Nuxeo extension point.
{{! /excerpt}}

{{#> callout type='info' heading='Hyland University'}}
Watch the related course on Hyland University:</br>
[Video on Streams from the Data Persistence course](https://university.hyland.com/courses/e4009).
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Kafka/university_streams.png
    name: university_streams.png
    server#screenshot#up_to_date
--}}
![university_streams.png](/nx_assets/6ea2d254-104f-4747-bf74-3f5aad34cc51.png ?w=450,border=true)
{{/callout}}

## Log and Stream Processing

### The Log

A [log](https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying) is a storage abstraction; it is an append-only sequence of record ordered by time. This simple concept is at the heart of many data-intensive applications. It brings fault tolerance, durability, immutability and ordering to a distributed system.

### Stream Processing

When the processing of records is expected to give near real-time feedback, and the number of records is unbounded, this is called stream processing.

Nuxeo provides a Stream Processing pattern based on computation.</br>
A computation can be seen as a Unix program:
- A computation is doing one thing well and expect its output to become the input of another computation.
- Computations can be composed using streams, like Unix programs can be composed using pipes.

But it is much more powerful:
- A computation can have many input and output streams enabling to create a complex topology.
- A computation can be executed in parallel.
- Computations can be distributed on multiple machines.
- Computation can be added, restarted or removed without stopping the processing or data loss.
- Computations are fault-tolerant and can define an error handling strategy.
- Streams capacity is only limited by disk size, there is no need to introduce back pressure to slow down producers.
- Streams are persisted during a retention period, all records are kept. It is possible to debug, tune and test new features easily.
- Messages exchanged by computations can be validated according to an Avro schema taking care of message evolution and interoperability.
- Computations are monitored, the lag and latency between producer and consumer are available metrics

## Nuxeo Stream Library

The `nuxeo-stream` module provides a log-based broker message passing system with a computation stream pattern.

This module has no dependency on Nuxeo framework to ease integration with external sources or sinks.

The underlying Log solution relies on:

- either on [Chronicle Queue](https://github.com/OpenHFT/Chronicle-Queue) which is a high-performance off-Heap queue library. There is no broker to install, it relies entirely on OS memory-mapped file (the storage is limited by disk capacity).
- either on [Apache Kafka](https://kafka.apache.org/) which is a distributed streaming platform.

The Chronicle Queue implementation can be used when producers and consumers are on the same node,
**for distributed support and fault tolerance Kafka is required**.

Please visit the [Kafka page]({{page page='kafka'}}) for more information.

## Nuxeo Stream Services

The `nuxeo-runtime-stream` module provides an integration of the `nuxeo-stream` library with Nuxeo by exposing Nuxeo services:

### Kafka Configuration Service

This service enables to register multiple Kafka access, along with Kafka properties for consumer, producer and admin API.

Please visit the [Kafka page]({{page page='kafka'}}) for more information.

### Codec Service

The record needs to be encoded (and decoded) into binary format to be stored in a stream.

The Log API requires a record to extend Java Externalizable, but this does not mean that interoperability is limited to Java.

The Codec service proposes multiple formats:

- `legacy`: default using Java Externalizable.
- `java`: explicitly use Java Externalizable.
- `avroBinary`: use Java reflection to extract an [Avro](https://avro.apache.org/docs/current/) schema and convert the record to Avro.
- `avro`: use Java reflection to convert the record to [Avro message](https://avro.apache.org/docs/current/spec.html#single_object_encoding) which is `avro` binary with a header containing a fingerprint of the schema.
- `avroConfluent`: same as `avro` but using the [Confluent Schema Registry](https://docs.confluent.io/current/avro.html#confluent-schema-registry)

`avro` and `avroConfluent` refer to a schema fingerprint, they are an interoperable format
supporting [forward and backward compatibility](https://docs.confluent.io/current/avro.html).

When using the Computation pattern, the record is always of type `org.nuxeo.lib.stream.computation.Record`
that contains the following information:
- `key`: a string that can be used to assign a Log partition
- `data`: an array of bytes
- `watermark`: an extended timestamp with a sequence
- `flagAsByte`: a byte representing 8 flags
- `traceContext`: since 11.1 if a distributed trace is activated the context is propagated via the record

The default codec for the computation record is `avro` (this can be changed by configuration), with the following schema:

```json
{
  "name": "Record",
  "namespace": "org.nuxeo.lib.stream.computation",
  "type": "record",
  "fields": [
    {
      "name": "watermark",
      "type": "long"
    },
    {
      "name": "key",
      "type": "string"
    },
    {
      "name": "data",
      "type": {
        "type": "bytes",
        "java-class": "[B"
      }
    },
    {
      "name": "flagsAsByte",
      "type": {
        "type": "int",
        "java-class": "java.lang.Byte"
      }
    },
    {
      "name" : "traceContext",
      "type" : [ "null", {
        "type" : "bytes",
        "java-class" : "[B"
      } ],
      "default" : null
    }
  ]
}
```

The computation record acts as an envelope that contains the data used by the computations.</br>
The embedded data is a convention between computations and can be whatever you like, from plain JSON to Avro.
Using the Codec service with an `avro` message is a good option to encode and decode this data,
because:
- it provides a Schema validation preventing corrupted or incomplete data
- it is fast and very compact
- the Schema can evolve without breaking existing code

Also, it is possible to contribute a new Codec.

### Nuxeo Stream Services

#### {{> anchor 'namespace'}}Namespaces for Stream and Computation names

Since Nuxeo 11.1, to prevent conflict between different services (Audit, StreamWorkManager, Bulk Service ...), a namespace has been introduced for Stream and Computation names.

The notation is a URN (Unified Resource Name) of the form: `namespace/specific-name`.

Nuxeo defines the following namespaces:
- `audit`: for the Audit service
- `work`: for the StreamWorkManager
- `bulk`: for the Bulk Action service
- `import`: for the Nuxeo Stream Importer
- `retention`: for the retention service
- `pubsub`: for the PubSub service

Because stream and computation names are used to define thread names, Kafka topics, Kafka consumer group, Chronicle files, and metrics,
the URN notation `namespace/specific-name` is encoded as an identifier with the form `namespace-specific-name`.
For this reason, a namespace should not contain the `-` (dash) character.

For backward compatibility it is still possible to not use namespace as long as names match `[A-Za-z0-9][A-Za-z0-9_]*` see [NXP-28877](https://jira.nuxeo.com/browse/NXP-28877) for more information.

#### LogConfig

`LogConfig` extension point enables to define:
- An implementation (Chronicle Queue or Kafka) and its configuration
- How to create new Logs if they don't exist
- When to use the configuration, using a `startswith` match pattern on the Log/Stream or Consumer Group name.

For instance:

  ```xml
   <extension target="org.nuxeo.runtime.stream.service" point="logConfig">
    <!-- Chronicle impl, define the storage directory with a week of retention -->
    <logConfig name="myCQImport" type="chronicle">
      <option name="basePath">/var/lib/nuxeo/my-import</option>
      <option name="retention">7d</option>
      <!-- Init a log with 12 partitions if it does not exists -->
      <log name="myCQ/myLog" size="12" />
      <!-- this config will be applied to all log or stream name from the myCQ namespace -->
      <match name="myCQ/" />
    </logConfig>
    <!-- Define a specific Kafka configuration for the audit namespace  -->
    <logConfig name="fastAuditConsumer" type="kafka">
      <!-- fastConsumer must be a valid kafkaConfig -->
      <option name="kafkaConfig">fastConsumer</option>
      <match name="audit/" />
    </logConfig>
    <!-- Define a specific Kafka configuration for StreamWorkManager videoConversion  -->
    <logConfig name="mySlowConsumer" type="kafka">
      <option name="kafkaConfig">slowConsumer</option>
      <!-- -->
      <match group="work/videoConversion" />
    </logConfig>
  </extension>
  ```

It is possible to use the low low-level access to the Log using the [LogManager](https://github.com/nuxeo/nuxeo/tree/master/modules/runtime/nuxeo-stream) that can create Log, create tailer (reader) or appender (writer).

```
  StreamService service = Framework.getService(StreamService.class);
  LogManager logManager = service.getLogManager();
  Name myStream = Name.ofUrn("myCQ/myLog");
  Name myConsumer = Name.ofUrn("myCQ/consumer");

  // write
  LogAppender<MyRecord> appender = logManager.getAppender(myStream);
  appender.append(key, new MyRecord(key, "foo"));

  // read
  try (LogTailer<MyRecord> tailer = logManager.createTailer(myConsumer, myStream)) {
      LogRecord<MyRecord> logRecord = tailer.read(Duration.ofSeconds(1));
      MyRecord myRecord = logRecord.message();
      // ... do something with the message
      // then save the current position
      tailer.commit();
  }
  // never close the manager, this is done by the service
```

#### Stream Processor

When using the Stream Processing pattern, you don't have to use the LogManager directly.

Register your processor by providing:
  - a Java class that defines a topology of computations
  - some settings that describe the stream configuration (partitions, codec) and how to run the computation (concurrency, policies)
The `StreamService` will run a set of computation thread pools called a Processor when starting.

  ```xml
   <streamProcessor name="myStreamProcessor" class="org.nuxeo.runtime.stream.tests.MyStreamProcessor"
      defaultConcurrency="4" defaultPartitions="2">
      <!-- All the streams used in the topology will be initialized with the default partitions and codec
           but you can change the default: -->
      <stream name="my/input" partitions="1" codec="avro" />
      <stream name="my/output" codec="avroJson" />
      <!-- Same for the computation concurrency and policy -->
      <computation name="my/computation" concurrency="1" />
      <policy name="my/computation" maxRetries="10" delay="1s" maxDelay="60s" continueOnFailure="false" />
      <!-- It is possible to pass a map of options to your stream processor constructor -->
      <option name="myOption">value</option>
    </streamProcessor>
  ```

To write some input to feed your process, just ask for the StreamManager:
  ```java
  StreamService service = Framework.getService(StreamService.class);
  StreamManager streamManager = service.getStreamManager();
  // Append a record
  streamManager.append(Name.ofUrn("my/input"), Record.of("key", "some message".getBytes("UTF-8")));
  ```

## Error Handling

Strategies for handling errors is essential to have stable and reliable processing.

### Retry Policy

Errors can be temporary, in this case retrying after some delay is a good strategy. The classical way is to configure a number of retries with a delay that backs off exponentially up to a maximum,
for instance:
```xml
<policy name="my/computation" maxRetries="8" delay="1s" maxDelay="60s" continueOnFailure="false" />
```
The above configuration defines a retry policy with 8 retries, starting with a delay of 1s that backs off exponentially up to 60s:
- t: error, wait 1s
- t+1s: retry 1 in error, wait 2s
- t+3s: retry 2 in error, wait 4s
- t+7s: retry 3 in error, wait 8s
- t+15s: retry 4 in error, wait 16s
- t+31s: retry 5 in error, wait 32s
- t+63s: retry 5 in error, wait 60s because this is the `maxDelay`
- t+123s: retry 6 in error, wait 60s
- t+183s: retry 7 in error, wait 60s
- t+243s: retry 8 success!

This policy tolerates a ~4min shortage.

Note that the default policy in Nuxeo is:
```xml
<policy name="..." maxRetries="20" delay="1s" maxDelay="60s" continueOnFailure="false" />
```
which tolerates a 15min shortage.

When using Kafka, the record is reassigned to a valid consumer, the tolerance in this case is:
15min * number of consumer threads.

The policy `name` refers to the computation name, to set a default retry policy for all computations of the processor you should use `name="default"`.

### Fallback

After applying the retry policy if the computation is still in error, the computation uses the fallback directive `continueOnFailure`.

If the computation is not doing something critical setting `continueOnFailure` to `true` will skip the record
and continue processing records. The failure with the record position is traced.

By default and for critical computation `continueOnFailure` is set to `false`, the computation is in failure and terminates its thread.</br>
This means that the processing is blocked even if upstream computations can continue to append records.

Furthermore, when using Kafka, a computation that terminates will trigger a rebalancing and its partitions
will be re-assigned to another available computation thread and the record will be processed again. If the error
is permanent, all the computation threads on all nodes are going to terminate, blocking the downstream computations completely.

Also, nothing prevents a computation from creating a Dead Letter Queue mechanism. In case of failure, the record is
persisted in a dedicated stream and the processing continues. This is the approach taken by the [WorkManager DLQ](https://jira.nuxeo.com/browse/NXP-27148).

### {{> anchor 'recovery'}}Recovery After Failure

A computation in failure on critical processing requires a human intervention to understand the cause and fix it.

There are different possible causes:
- An infrastructure failure, like a disk full. Once fixed, a rolling restart of Nuxeo nodes must be done to restart computations threads. If this is done within the retention period (7 days by default when using Kafka), there is no data loss.

- A bug in the computation, redeploying a fix within the retention period is the best option. If this is not possible, we should force the computation to skip the failure, see below.

- A poisonous record, something which is not supposed to be in the stream and must be skipped,
  the procedure is the following:
    1. Add this `nuxeo.conf` option on a single Nuxeo node:
      `nuxeo.stream.recovery.skipFirstFailures=1`</br>
      Then restart the node, with this option processors will skip the first record in failure instead of terminating.
      Check the `server.log` file that this is the case.
    2. Remove the `nuxeo.stream.recovery.skipFirstFailures=1` option line from `nuxeo.conf`.
    3. Perform a rolling restart of other Nuxeo nodes to restore all processor threads.


### Alerting

A critical Computation in failure requires human intervention, so it is important to be alerted.

The following metric needs to be monitored on each Nuxeo node, any value greater than 0 should trigger an alert:
```
nuxeo.nuxeo.stream.failure.count
```

Another way to be alerted is by monitoring the `server.log` file looking for error pattern like:
```
ERROR [ComputationRunner] Terminate computation: <SOME_COMPUTATION_NAME> due to previous failure
```

There is also a `streamStatus` Nuxeo probe activated by default on the `runningstatus` endpoint health check.

It is important to understand that this probe will immediately report a computation failure with a message like:
```
2 computations have been terminated after failure. First failure detected: 2019-10-30 14:57:22Z, probe failure delayed by PT36H. This Nuxeo instance must be restarted within the stream retention period.
```
**but** the probe failure is delayed by 36 hours to have time to apply the recovery procedure.

This delay is necessary because most of the time the Nuxeo health check is used by the load balancer and we don't want to interrupt the service immediately while we have time to fix the problem during the retention duration without downtime or data loss.

The probe delay is configurable using the `nuxeo.conf` option, keep it under the retention duration (7 days when using Kafka).
```
nuxeo.stream.health.check.delay=36h
```

### Monitoring

Nuxeo exposes Computation metrics per Nuxeo node and also global metrics visit the
  [Nuxeo Streams metrics page]({{page page='metrics'}}#nuxeo-streams).

The `stream.sh` script can be used to display the lag and latency, the script is part of Nuxeo distribution in the `bin` directory.

To get the lag, pos and end for all streams and computations:
```bash
./bin/stream.sh -k lag
```

To get the latency in addition:
```bash
./bin/stream.sh -k latency --codec avro
```

Since Nuxeo 11.1, Nuxeo is reporting global lag and latency metrics, there is no more need to run additional `stream.sh` process.

### Reporting Problems

To get reliable processing applied at scale, the code needs to be sturdy and handle borderline cases like
documents that don't exist or are not accessible.

It is important to report problems so contributed code can reach the expected production state.

If you encounter a problem, here is the needed information to report:
1. Get the [health-check status]({{page page='reporting-problems'}}#health-check).
2. Check for ERROR in the Nuxeo `server.log`. Look for a pattern like `Terminate computation` or `Exception in processLoop`.
3. Report the [consumer lag]({{page page='reporting-problems'}}#stream-lag).
4. Report [Nuxeo activity with thread dumps]({{page page='reporting-problems'}}#thread-dump).

## Integration

The Nuxeo stream service is used in different locations.

### Stream Audit Writer

Used by default since Nuxeo 9.3, a sync listener collects the events that need to be traced in the audit.

When the transaction is committed, events are written as JSON into an audit Log.

A `StreamProcessor` takes the audit Log as input and send the entries in batch to the Audit backend.

This brings:
- **Reliability**: the entries are first persisted to the log and can be processed later even
  if the audit backend is not reachable or if the application crash.
- **Performance**: the entries are sent to the audit backend at a constant and optimal throughput,
  not tied to the application activity.

The Stream audit writer can be configured with the following options:
```
# When disabled the previous "no stream" audit bulk writer implementation is used
nuxeo.stream.audit.enabled=true
# The log configuration to use
nuxeo.stream.audit.log.config=audit
# Send log entries by batch
nuxeo.stream.audit.batch.size=25
# Do not wait more than this threshold if the batch is not full
nuxeo.stream.audit.batch.threshold.ms=500
# How to encode the records
nuxeo.stream.audit.log.codec=legacy
```

### Stream WorkManager

This implementation is not activated by default.

Instead of queueing work into memory or into Redis (which is also in memory),
work can be queued into a Log without worries about the memory limits.

Kafka is required to enable distributed work in a cluster mode.

To scale horizontally, so adding Nuxeo node supports more load,
the number of Log partitions that fix the maximum concurrency must be higher than the thread pool size of a single node.
This strategy is called partition over provisioning.

By default, there is an over-provisioning factor of 3.</br>
For instance, with a work pool of size 4, we have 12 partitions in the Log:

- For a cluster of 1 node: there are 4 threads, each reading from 3 partitions.
- For a cluster of 2 nodes: there are 8 threads, some reading from 2 partitions, other reading from 1 partition.
- For a cluster of 3 nodes: there are 12 threads, each thread reading from one partition.
- For a cluster of 4 nodes: there are 16 threads, some threads in the work pool will be unused, reducing the overall node load.

Note that, a work pool of size 1 is not over-provisioned because we don't want any concurrency.

The Stream WorkManager can be configured with the following options:

```
# Activate the StreamWorkManager
nuxeo.stream.work.enabled=true
# The log config to use
nuxeo.stream.work.log.config=work
# The over provisioning factor
nuxeo.stream.work.over.provisioning.factor=3
# How to encode the records
nuxeo.stream.work.log.codec=legacy
```

The behavior of the Stream WorkManager is slightly different than the default WorkManager:
- Works are immutable: they can not be used as a storage for results, the repository or the transient store should be used instead
- Works cannot be listed or loaded on demand because this can not scale
- Works with the same id are executed only once, this make work idempotent for free
- At the moment the number of Running works is only an estimation, scheduled and completed metrics are reliable

This requires some work and WorkManager usage adaptations, this is still a work in progress.

### Stream PubSub Provider

The PubSub service is used by the cache service to handle cluster invalidation.

There is an implementation based on Nuxeo Stream that can be activated with the following option:
```
nuxeo.pubsub.provider=stream
# How to encode the records
nuxeo.stream.pubsub.log.codec=avroBinary
```

### Stream Importer

The `nuxeo-importer-stream` which is part of the `nuxeo-platform-importer` addon use Log to run document importer.

Please visit [nuxeo-importer-stream README](https://github.com/nuxeo/nuxeo/tree/master/modules/platform/nuxeo-platform-importer/nuxeo-importer-stream)
for more information.

### Bulk Action Framework

The Bulk Action Framework is leveraging Nuxeo Stream to be able to run resilient bulk actions on documents.
Please visit [nuxeo-core-bulk README](https://github.com/nuxeo/nuxeo/tree/master/modules/core/nuxeo-core-bulk)
for more information.
