---
title: Kafka
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
        <property name="request.timeout.ms">30000</property>
        <property name="max.poll.interval.ms">60000</property>
        <property name="session.timeout.ms">50000</property>
        <property name="heartbeat.interval.ms">4000</property>
        <property name="max.poll.records">2</property>
        <property name="max.poll.interval.ms">3600000</property>
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
  | `request.timeout.ms` | `30000` | Request timeout between client and Kafka brokers. |
  | `default.api.timeout.ms` | `60000` | Default timeout for consumer API related to position (commit or move to a position). |
  | `max.poll.interval.ms` | `3600000` | Consumers that don't call poll during this delay are removed from the group. |
  | `max.poll.records` | `2` | Can be adjusted to make sure the poll interval is respected. |
  | `session.timeout.ms` | `50000` | Consumers that don't send heartbeat during this delay are removed from the group. |
  | `heartbeat.interval.ms` | `4000` | Interval between heartbeats. |
  | `group.initial.rebalance.delay.ms` | `3000` | Delay for the initial consumer rebalance. |
  | `subscribe.disable` | `false` | Not a Kafka option, used by the module to disable the dynamic assignment, when this option is `true` LogManager will only support static partition assignment. |

A consumer will be removed from the group if:

 - there is a network outage longer than `session.timeout.ms`
 - the consumer is too slow to process record, see remark about the `max.poll.interval.ms` below.


  | Producer options | default | Description |
  | --- | ---: |  --- |
  | `delivery.timeout.ms` | `120000` | Timeout for a producer to get an acknowledgement. |
  | `acks` | `1` | The number of acknowledgments the producer requires the leader to have received before considering a request complete. |
  | `compression.type` | `none` | Valid values are none, gzip, snappy, or lz4. Compression is of full batches of data, so the efficacy of batching will also impact the compression ratio (more batching means better compression). |
  | `default.replication.factor` | `1` | Not a Kafka option, used by Nuxeo to set the topic replication factor when creating new topic. |

A producer will fail to deliver a record if it cannot get an acknowledgement within `delivery.timeout.ms`.


Most of the above properties can be tuned directly from [nuxeo.conf file]({{page space='nxdoc' page='configuration-parameters-index-nuxeoconf'}}).

{{#> callout type='warning' }}
Make sure that you set properly the `default.replication.factor`, the default value is `1` which means NO replication.
With replication factor N, Kafka will tolerate up to N-1 server failures without losing record.
For instance if you have 3 brokers in your cluster a replication factor of 2 will tolerate a server failure.{{/callout}}

{{#> callout type='warning' }}
It is important to adapt the `max.poll.interval.ms` for slow consumers; otherwise, you will encounter errors like:
{/callout}}
  ```bash
  ERROR [ComputationRunner] compliance: Exception in processLoop: Commit cannot be completed since the group has already rebalanced and assigned the partitions to another member. This means that the time between subsequent calls to poll() was longer than the configured max.poll.interval.ms, which typically implies that the poll loop is spending too much time message processing. You can address this either by increasing the session timeout or by reducing the maximum size of batches returned in poll() with max.poll.records.
  ```

For instance, this will happen when using the `StreamWorkManager` if a Work takes more than 2h.

Please refer to the Kafka documentation about the [consumer and producer options](https://kafka.apache.org/documentation#configuration) and [replication](https://kafka.apache.org/documentation/#replication) for more information.

When using Nuxeo Stream for PubSub service (see below) it is recommended to **reduce the topic retention to few hours** in order to save disk storage.

This is done at the Kafka level using the following command:
```bash
$KAFKA_HOME/bin/kafka-configs.sh --zookeeper <zk_host> --alter --entity-type topics --entity-name nuxeo-pubsub --add-config retention.ms=7200000
```

## About Topics

Each Nuxeo stream is a Kafka topic. The topic name is the stream name with a `topicPrefix` (`kafka.topicPrefix` in `nuxeo.conf`).

Because streams are defined by configuration, the list of topics varies depending on the deployed Nuxeo components.

Nuxeo uses the Kafka Producer/Consumer API and the consumer groups varies depending on what is deployed.

If you want the complete list of topics and consumer groups, the easiest way is to start a staging environment and use Kafka scripts:
```bash
# list of topics
/opt/kafka/bin/kafka-topics.sh  --zookeeper zookeeper:2181 --list
# list of consumers
/opt/kafka/bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 --list
```

For instance, you can use this list of topics to create them in your target environment so Nuxeo can use a Kafka user with limited rights.

Below is listed common topics used by Nuxeo.

### Default Nuxeo Topics

#### The Audit Topic: nuxeo-audit

Used to decouple write into the audit backend, it is a single partition topic to get a total ordering.
The consumer group is `nuxeo-AuditLogWriter`, there is a single consumer in the Nuxeo cluster.

You can see the lag using `stream.sh`:
```bash
./bin/stream.sh lag -k -l audit
## Log: audit partitions: 1
### Group: AuditLogWriter
| partition | lag  | pos  | end  | posOffset | endOffset |
| All       | 0    | 1039 | 1039 | 1039      | 1039      |
```

Or using Kafka scripts:
```bash
/opt/kafka/bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group nuxeo-AuditLogWriter
-- GROUP    TOPIC     PARTITION  CURRENT-OFFSET  LOG-END-OFFSET  LAG    CONSUMER-ID           HOST   CLIENT-ID
-- nuxeo-AuditLogWriter nuxeo-audit  0    1039   1039   0      AuditLogWriter-13-666cc3d2-5a5d-409e-9347-6e1565fab4cc /192.168.16.7   AuditLogWriter-13
```

#### The StreamWorkManager Topics

When `nuxeo.stream.work.enabled=true` the WorkManager is based on Nuxeo Stream and each Work Queue is using a topic.

You will find a topic for each Work Queue (prefixed by `nuxeo-`):
- `default`: the default WorkManager queue.
- `elasticSearchIndexing`: the queue used for indexing documents in Elasticsearch.
- `fulltextUpdater`
- `renditionBuilder`
- `permissionsPurge`
- `collections`
- `blobs`
- `escalation`

In addition there is a Dead Letter Queue topic to store Work in failure:
- `dlq-work`

Consumer groups are named from the Work Queue name, for instance:</br>
For a Work Queue `elasticSearchIndexing`:
  - the topic will be named `nuxeo-elasticSearchIndexing`
  - the consumer group `nuxeo-elasticSearchIndexing`

Here is an example to get the lag and latency for the `default` Work Queue:
```bash
./bin/stream.sh latency -k -l default --codec avro --verbose
## Log: default partitions: 12
### Group: default
| partition |  lag | latencyMs |      latency |  posTimestamp | posDate                  | curDate                  |  pos |  end | posOffset |  endOffset  | posKey                               |
|       --- | ---: |      ---: |         ---: |          ---: | ---:                     | ---:                     | ---: | ---: |      ---: |        ---: | ---                                  |
|       All | 1326 |      6336 | 00:00:06.336 | 1581688116759 | 2020-02-14T13:48:36.759Z | 2020-02-14T13:48:43.095Z | 7968 | 9294 |       586 |         831 | bf95c693-1591-48d6-88ee-a06b512da235 |
|         0 |  102 |      6285 | 00:00:06.285 | 1581688116810 | 2020-02-14T13:48:36.810Z | 2020-02-14T13:48:43.095Z |  586 |  688 |       586 |         688 | a67df7ca-6735-4f7e-93b6-8e777b3b7d4d |
|         1 |  116 |      5997 | 00:00:05.997 | 1581688117098 | 2020-02-14T13:48:37.098Z | 2020-02-14T13:48:43.095Z |  682 |  798 |       682 |         798 | 6e4f2083-4ddf-4d43-a200-689d25c5d607 |
|         2 |  145 |      6328 | 00:00:06.328 | 1581688116767 | 2020-02-14T13:48:36.767Z | 2020-02-14T13:48:43.095Z |  681 |  826 |       681 |         826 | 429a9679-d9ef-4351-9328-0687a0b610c0 |
|         3 |  111 |      6228 | 00:00:06.228 | 1581688116867 | 2020-02-14T13:48:36.867Z | 2020-02-14T13:48:43.095Z |  717 |  828 |       717 |         828 | 5ec904bb-9d1c-40b5-acdc-95f35246f14a |
|         4 |   71 |      5157 | 00:00:05.157 | 1581688117938 | 2020-02-14T13:48:37.938Z | 2020-02-14T13:48:43.095Z |  662 |  733 |       662 |         733 | 0c7b249e-0371-4945-aa42-bd21093affc0 |
|         5 |   99 |      6152 | 00:00:06.152 | 1581688116943 | 2020-02-14T13:48:36.943Z | 2020-02-14T13:48:43.095Z |  678 |  777 |       678 |         777 | a6e301d4-0105-4f8a-8fa5-218698ca3e53 |
|         6 |  114 |      6237 | 00:00:06.237 | 1581688116858 | 2020-02-14T13:48:36.858Z | 2020-02-14T13:48:43.095Z |  668 |  782 |       668 |         782 | 315664591256564.1171452278           |
|         7 |  114 |      5880 | 00:00:05.880 | 1581688117215 | 2020-02-14T13:48:37.215Z | 2020-02-14T13:48:43.095Z |  612 |  726 |       612 |         726 | 7af63679-381b-4661-9956-90c59c4f35b5 |
|         8 |  116 |      6044 | 00:00:06.044 | 1581688117051 | 2020-02-14T13:48:37.051Z | 2020-02-14T13:48:43.095Z |  634 |  750 |       634 |         750 | c169d984-8be7-44f2-b89a-2423ce84c69a |
|         9 |  117 |      6334 | 00:00:06.334 | 1581688116761 | 2020-02-14T13:48:36.761Z | 2020-02-14T13:48:43.095Z |  714 |  831 |       714 |         831 | 8ff057c0-1917-4bc8-a80e-7cc727c89c8e |
|        10 |   96 |      4939 | 00:00:04.939 | 1581688118156 | 2020-02-14T13:48:38.156Z | 2020-02-14T13:48:43.095Z |  671 |  767 |       671 |         767 | 4a8f57da-1f32-4bb7-8966-7aa35b08d430 |
|        11 |  125 |      6336 | 00:00:06.336 | 1581688116759 | 2020-02-14T13:48:36.759Z | 2020-02-14T13:48:43.095Z |  663 |  788 |       663 |         788 | bf95c693-1591-48d6-88ee-a06b512da235 |
```

#### The Bulk Service (Bulk Action Framework) Topics

By default topics are prefixed by `nuxeo-bulk-`.

There are topics part of the Bulk Service:
- `command`: Scheduled Bulk Commands are first written into this topic.
- `status`: Any Bulk Command reports its progress into this topic.
- `done`: This topic contains the status of the completed Bulk Commands.

Each Bulk Action creates its own processor and topics, you can find a [description of the topology]({{page page='bulk-action-framework'}}#bulk-service)
and interesting [debugging commands]({{page page='bulk-action-framework'}}#debugging) in the related documentation.

#### The PubSub Topic

The PubSub service is used to send instant messages to all Nuxeo nodes, mainly to do cache invalidation.
When it is configured to use Nuxeo Stream (`nuxeo.pubsub.provider=stream`) messages are published in a topic named `nuxeo-pubsub` by default.

This topic is special because consumers don't need past messages, they start consuming from the end of the topic and they don't need to commit their position.
As a result, Kafka is not able to list consumer groups for this topic.

Also, because it is instant messages it is recommended to **reduce the topic retention to few hours** in order to save disk storage, see the above Kafka configuration section.
