---
title: Kafka
description: Kafka configuration and integration with Nuxeo.
review:
    comment: ''
    date: '2019-04-17'
    status: ok
labels:
    - lts2019-ok
toc: true
tree_item_index: 1100
---

{{! excerpt}}
Kafka configuration and integration with Nuxeo.
{{! /excerpt}}

{{#> callout type='info'  heading='Nuxeo University'}}
Watch the related course on Nuxeo University:</br>
[Video on Streams from the Data Persistence course](https://university.nuxeo.com/learn/course/external/view/elearning/190/NuxeoArchitecture)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Kafka/university_streams.png
    name: university_streams.png
    server#screenshot#up_to_date
--}}
![university_streams.png](nx_asset://6ea2d254-104f-4747-bf74-3f5aad34cc51 ?w=450,border=true)
{{/callout}}

## When to Use Kafka?

Since Nuxeo 10.10 it is highly recommended to use Kafka when running Nuxeo in cluster mode:

- [Nuxeo Stream]({{page page='nuxeo-stream'}}) introduced in Nuxeo 9.3 requires [Kafka](https://kafka.apache.org/) to run in a distributed way.
  Kafka will act as a message broker and enable reliable distributed processing by handling failover between nodes.

  Without Kafka, Nuxeo Stream relies on local storage using Chronicle Queue:
   - the processing is not distributed among nodes
   - there is no cluster wide metrics to follow processing progress
   - the chronicle queue files need to be backup on each node

- The [Nuxeo Bulk Service]({{page page='bulk-action-framework'}}) introduced in Nuxeo 10.10 relies on Nuxeo Stream and therefore requires Kafka to work in a distributed way.

Other reasons to use Kafka:

- The WorkManager can be configured to use Nuxeo Stream and go beyond the boundaries of Redis by not being limited by memory.

- To get rid of Redis deployment.

- To gain interoperability using Kafka topic and Avro messaging.

## Kafka Setup

Nuxeo only need to talk with Kafka brokers, it does not need to have access to Zookeeper.

Here is the compatibility versions:

{{{multiexcerpt 'kafka_supported_versions' page='Compatibility Matrix'}}}

Kafka broker need to be tuned a bit:

  | Kafka broker options | default | recommended |  Description |
  | --- | ---: | ---: | --- |
  | `offsets.retention.minutes` | `1440` | `20160` |The default offset retention is only 1 day, without activity for this amount of time the current consumer offset position is lost and all messages will be reprocessed. To prevent this we recommend to use a value 2 times bigger as `log.retention.hours`, so by default 14 days or `20160`. See [KAFKA-3806](https://issues.apache.org/jira/browse/KAFKA-3806) for more information. |
  | `log.retention.hours` | `168` | |The default log retention is 7 days. If you change this make sure you update `offset.retention.minutes`.|

{{#> callout type='warning' }}
Make sure that you set properly the `offsets.retention.minutes`.
{{/callout}}

## Kafka Configuration

Access, consumer and producer properties are registered using the Nuxeo `KafkaConfigService` extension point:

```xml
<?xml version="1.0"?>
<component name="my.project.kafka.contrib">
  <extension target="org.nuxeo.runtime.stream.kafka.service" point="kafkaConfig">
    <kafkaConfig name="default" topicPrefix="nuxeo-">
      <producer>
        <property name="bootstrap.servers">localhost:9092</property>
      </producer>
      <consumer>
        <property name="bootstrap.servers">localhost:9092</property>
        <property name="request.timeout.ms">65000</property>
        <property name="max.poll.interval.ms">60000</property>
        <property name="session.timeout.ms">20000</property>
        <property name="heartbeat.interval.ms">1000</property>
        <property name="max.poll.records">50</property>
      </consumer>
    </kafkaConfig>
  </extension>
</component>
```

Here are some important properties:

  | Consumer options | default | Description |
  | --- | ---: |  --- |
  | `bootstrap.servers` | `localhost:9092` | A list of host/port pairs to use for establishing the initial connection to the Kafka cluster. |
  | `enable.auto.commit` | `false` | The module manages the offset commit this is always set to `false`. |
  | `auto.offset.reset` | `earliest` | This option is always set to `earliest` |
  | `request.timeout.ms` | `30000` | Requests timeout between client and Kafka brokers. |
  | `max.poll.interval.ms` | `300000` | Consumers that don't call poll during this delay are removed from the group. |
  | `session.timeout.ms` | `10000` | Consumers that don't send heartbeat during this delay are removed from the group. |
  | `heartbeat.interval.ms` | `3000` | Interval between heartbeats. |
  | `max.poll.records` | `2` | Can be adjusted to make sure the poll interval is respected. |
  | `group.initial.rebalance.delay.ms` | `3000` | Delay for the initial consumer rebalance. |
  | `subscribe.disable` | `false` | Not a Kafka option, used by the module to disable the dynamic assignment, when this option is `true` LogManager will only support static partition assignment. |

  | Producer options | default | Description |
  | --- | ---: |  --- |
  | `acks` | `1` | The number of acknowledgments the producer requires the leader to have received before considering a request complete. |
  | `compression.type` | `none` | Valid values are none, gzip, snappy, or lz4. Compression is of full batches of data, so the efficacy of batching will also impact the compression ratio (more batching means better compression). |
  | `default.replication.factor` | `1` | Not a Kafka option, used by Nuxeo to set the topic replication factor when creating new topic. |


Most of the above properties can be tuned directly from [nuxeo.conf file]({{page space='nxdoc' page='configuration-parameters-index-nuxeoconf'}}).

{{#> callout type='warning' }}
Make sure that you set properly the `default.replication.factor`, the default value is `1` which means NO replication.
With replication factor N, Kafka will tolerate up to N-1 server failures without losing record.
For instance if you have 3 brokers in your cluster a replication factor of 2 will tolerate a server failure.{{/callout}}

Please refer to the Kafka documentation about the [consumer and producer options](https://kafka.apache.org/documentation#configuration) and [replication](https://kafka.apache.org/documentation/#replication) for more information.


When Kafka is used by the PubSub Provider, the **topic retention can be reduced to few hours** because PubSub is used to send instant messages, this can be done at the Kafka level using the following command:
```bash
$KAFKA_HOME/bin/kafka-configs.sh --zookeeper <zk_host> --alter --entity-type topics --entity-name nuxeo-pubsub --add-config retention.ms=7200000
```
