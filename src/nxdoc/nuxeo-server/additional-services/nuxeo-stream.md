---
title: Nuxeo Stream
review:
    comment: ''
    date: '2017-12-07'
    status: ok
labels:
    - lts2017-ok
toc: true
tree_item_index: 1100
---
{{! excerpt}}

Nuxeo Stream provides a Log storage abstraction and a Stream processing pattern.

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [LTS 2017 New Features](https://university.nuxeo.com/learn/public/course/view/elearning/126/lts-2017-new-features).
![]({{file name='university-nuxeo-stream.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

{{! /excerpt}}

## Log and Stream Processing

A log is a storage abstraction, it is an append-only sequence of record ordered by time.
This simple concept is at the heart of many data intensive applications. It brings fault tolerance, durability, immutability and ordering to distributed system.

When the processing of log records is expected to give near real time feedback and the number of records is unbounded this is called stream processing.

Nuxeo uses a pattern called computation for stream processing, it enables to compose producer/consumer into a complex topology.

Visit the [nuxeo-stream README](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-runtime/nuxeo-stream) for more details.

## Stream Library

The `nuxeo-stream` module provides a log based broker message passing system with a computation stream pattern.

This module has no dependency on Nuxeo framework to ease integration with third parties.

The underlying log solution relies:

- either on [Chronicle Queue](https://github.com/OpenHFT/Chronicle-Queue) which is a high performance off-Heap queue library, there is no broker to install, it relies entirely on OS memory mapped file.

- either on [Apache Kafka](https://kafka.apache.org/) which is a distributed streaming platform.

The Chronicle Queue implementation can be used when producers and consumers are on the same node,
for distributed support Kafka is needed.

Please visit the [Kafka page]({{page page='kafka'}}) for more information.

## Nuxeo Stream

The `nuxeo-runtime-stream` module provides an integration of `nuxeo-stream` with Nuxeo by exposing two services:

### Kafka Configuration Service

This service enable to register Kafka and Zookeeper access, along with Kafka properties for consumer and producers.

Please visit the [Kafka page]({{page page='kafka'}}) for more information.

### Nuxeo Stream Service

This `StreamService` service provides:

- A way to register [different Log configurations](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-runtime/nuxeo-runtime-stream#the-log-configuration).
  For instance you can define a Log based on Chronicle Queue with the storage location and a retention.

- An access to a [Log manager](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-runtime/nuxeo-runtime-stream#using-log-from-nuxeo) that can create Log, create tailer (reader) or appender (writer).

- A way to [register stream processing](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-runtime/nuxeo-runtime-stream#stream-processing).
  By providing a class that define a topology of computations, the service will take care of creating a Pool of thread that run the processing.


### Record Codec

At some point the record object need to be encoded to binary and decoded (aka codec).

The Log API requires a record to extend Java Externalizable, but this does not mean
that interoperability is limited to Java.
You can choose between different codec:

- `legacy`: default using Java Externalizable.
- `java`: explicitly use Java Externalizable.
- `avroBinary`: use Java reflection to extract an [Avro](https://avro.apache.org/docs/current/) schema and convert the record to Avro.
- `avro`: use Java reflection to convert the record to [Avro message](https://avro.apache.org/docs/current/spec.html#single_object_encoding) which is avro binary with a header containing a fingerprint of the schema.
- `avroConfluent`: same as Avro but using the [Confluent Schema Registry](https://docs.confluent.io/current/avro.html#confluent-schema-registry)

`avro` and `avroConfluent` refer to a schema fingerprint so they are interoperable format
that support [forward and backward compatibility](https://docs.confluent.io/current/avro.html).


When using the computation pattern the record is always a `org.nuxeo.lib.stream.computation.Record`
that contains the following information:
- `key`: a string that can be used to assign a Log partition
- `data`: an array of bytes
- `watermark`: an extended timestamp with a sequence
- `flagAsByte`: a byte representing 8 flags

The Avro schema for the computation record is:
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
    }
  ]
}
```

The content of the computation Record is an array of bytes, this can be
whatever you like from plain JSON to Avro codec.

## Integration

The Nuxeo stream service is used in different locations.

### Stream Audit Writer

Used by default since Nuxeo 9.3. The events that need to be traced in the audit are collected by a sync listener.
When the transaction is committed, events are written as JSON into an audit Log.
A StreamProcessor takes the audit Log as input and send the entries in batch to the Audit backend.

This brings:
- Reliability: the entries are first persisted to the log and can be processed later even
  if the audit backend is not reachable or if the application crash.
- Performance: the entries are sent to the audit backend at a constant and optimal throughput,
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

Kafka is required to enable distributed work in cluster mode.

To scale horizontally, so adding Nuxeo node supports more load,
the number of Log partitions that fix the maximum concurrency must be greater than the thread pool size of a single node.
This strategy is called partition over provisioning.

By default there is an over provisioning factor of 3.
For instance with a work pool of size 4, we have 12 partitions in the Log:

- For a cluster of 1 node: there are 4 threads, each reading from 3 partitions.
- For a cluster of 2 nodes: there are 8 threads, some reading from 2 partitions, other reading from 1 partition.
- For a cluster of 3 nodes: there are 12 threads, each thread reading from one partition.
- For a cluster of 4 nodes: there are 16 threads, some threads in the work pool will be unused, reducing the overall node load.

Note that work pool of size 1 are not over provisioned because we don't want any concurrency.

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

{{#> callout type='warning' }}
The behavior of the Stream WorkManager is slightly different than the default WorkManager:

- Works are immutable: they can not be used as a storage for result, the repository or the transient store should be used instead
- Works can not be listed or loaded on demand because this can not scale
- Works with the same id are executed only once, this make work idempotent for free
- At the moment the number of Running works is only an estimation, scheduled and completed metrics are reliable

This requires some work and WorkManager usage adaptations, this is still a work in progress.
{{/callout}}

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

Please visit [nuxeo-importer-stream README](https://github.com/nuxeo/nuxeo-platform-importer/tree/master/nuxeo-importer-stream)
for more information.

### Bulk Action Framework

The Bulk Action Framework is leveraging Nuxeo Streams to be able to run resilient bulk actions on documents.
Please visit [nuxeo-core-bulk README](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-core/nuxeo-core-bulk)
for more information.
