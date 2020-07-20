---
title: Kafka
description: Kafka configuration and integration with Nuxeo.
review:
    comment: ''
    date: '2020-07-16'
    status: ok
labels:
    - 11.1-ok
toc: true
tree_item_index: 1100
---

{{! excerpt}}
Kafka configuration and integration with Nuxeo.
{{! /excerpt}}

{{#> callout type='info'  heading='Nuxeo University'}}
Watch the related course on Nuxeo University:</br>
[Video on Streams from the Data Persistence course](https://university.nuxeo.com/learn/course/external/view/elearning/190/NuxeoArchitecture)
![university_streams.png](nx_asset://6ea2d254-104f-4747-bf74-3f5aad34cc51 ?w=450,border=true)
{{/callout}}

## When to Use Kafka?

Since Nuxeo 10.10 it is highly recommended to use Kafka when running Nuxeo in cluster mode,
[Nuxeo Stream]({{page page='nuxeo-stream'}}) requires [Kafka](https://kafka.apache.org/) to run in a distributed way.
Kafka acts as a message broker and enables reliable distributed processing by handling failover between nodes.

{{#> callout type='warning' }}Without Kafka, Nuxeo Stream relies on local storage using Chronicle Queue with the following limitations:
- the processing is **not distributed** among Nuxeo nodes, the processing happens on the node it is submitted
- there is no cluster-wide metrics to follow processing progress
- losing the local storage that contains the Chronicle Queue files means losing running or scheduled processing
{{/callout}}

Note that the [Nuxeo Bulk Service]({{page page='bulk-action-framework'}}), introduced in Nuxeo 10.10, relies on Nuxeo Stream and therefore requires Kafka to work in a distributed way.

Other reasons to use Kafka:
- The WorkManager can be configured to use Nuxeo Stream and go beyond the boundaries of Redis by not being limited by memory.
- To get rid of Redis deployment.
- To gain interoperability using Kafka topic and Avro messaging.

## Kafka Setup

Nuxeo uses the Kafka [Producer](https://kafka.apache.org/documentation/#producerapi), [Consumer](https://kafka.apache.org/documentation/#consumerapi), and [Admin](https://kafka.apache.org/documentation/#adminapi) APIs.
This requires only a Kafka brokers (aka bootstrap) access, it does not need to have access to Zookeeper.

Here are the compatible versions:
{{{multiexcerpt 'kafka_supported_versions' page='Compatibility Matrix'}}}

Kafka brokers need to be tuned if you want more than 7 days of retention or if you have a Kafka version < 2:

  | Kafka Broker Options | Default | Recommended |  Description |
  | --- | ---: | ---: | --- |
  | `offsets.retention.minutes` | `1440` (Kafka < 2.x) | `10080` | Make sure the offset retention is greater or equal to `log.retention.hours` |
  | `log.retention.hours` | `168` | `168`| The default log retention is 7 days. If you change this make sure you update `offset.retention.minutes`|

{{#> callout type='warning' }}
If the `offsets.retention.minutes` is not properly set and there is no activity, consumer positions can be lost and all records will be reprocessed.</br>
To prevent this we recommend to use value greater of equals to `log.retention.hours`. See [KAFKA-3806](https://issues.apache.org/jira/browse/KAFKA-3806) for more information
{{/callout}}

## Kafka Configuration

The Kafka Producer, Consumer and Admin properties are registered using the Nuxeo `KafkaConfigService` extension point,
you can define multiple configuration for different usages:

```xml
<?xml version="1.0"?>
<component name="my.project.kafka.contrib">
  <require>org.nuxeo.runtime.stream.kafka.service</require>
  <extension target="org.nuxeo.runtime.stream.kafka.service" point="kafkaConfig">
    <kafkaConfig name="default" topicPrefix="nuxeo-">
      <!-- admin properties can be defined when requiring a different access than producer  -->
      <!--
      <admin>
        <property name="bootstrap.servers">kafka:9092</property>
        <property name="request.timeout.ms">60000</property>
        <property name="default.replication.factor">2</property>
      </admin>
      -->
      <producer>
        <property name="bootstrap.servers">kafka:9092</property>
        <property name="default.replication.factor">1</property>
        <property name="delivery.timeout.ms">120000</property>
        <property name="acks">1</property>
      </producer>
      <consumer>
        <property name="bootstrap.servers">kafka:9092</property>
        <property name="request.timeout.ms">30000</property>
        <property name="max.poll.interval.ms">7200000</property>
        <property name="session.timeout.ms">50000</property>
        <property name="heartbeat.interval.ms">4000</property>
        <property name="max.poll.records">2</property>
        <property name="default.api.timeout.ms">60000</property>
      </consumer>
    </kafkaConfig>
    <!-- Define another config for higher throughput > 100 records per 10min -->
    <kafkaConfig name="fastConsumer" topicPrefix="nuxeo-">
      <producer>...</producer>
      <consumer>
        ...
        <property name="max.poll.interval.ms">600000</property>
        <property name="max.poll.records">100</property>
        ...
      </consumer>
    </kafkaConfig>
  </extension>
</component>
```

Here are some important properties:

  | Consumer options | default | Description |
  | --- | ---: |  --- |
  | `bootstrap.servers` | `localhost:9092` | A list of host/port pairs to use for establishing the initial connection to the Kafka cluster. |
  | `request.timeout.ms` | `30000` | Request timeout between client and Kafka brokers. |
  | `default.api.timeout.ms` | `60000` | Default timeout for consumer API related to position (commit or move to a position). |
  | `max.poll.interval.ms` | `3600000` | Consumers that don't call poll during this delay are removed from the group. |
  | `max.poll.records` | `2` | Can be adjusted to make sure the poll interval is respected. |
  | `session.timeout.ms` | `50000` | Consumers that don't send heartbeat during this delay are removed from the group. |
  | `heartbeat.interval.ms` | `4000` | Interval between heartbeats. |
  | `group.initial.rebalance.delay.ms` | `3000` | Delay for the initial consumer rebalance. |

A consumer will be removed from the group if:
 - there is a network outage longer than `session.timeout.ms`
 - the consumer is too slow to process record, see remark about the `max.poll.interval.ms` below.

Note that Nuxeo will always set `enable.auto.commit` to `false` and `auto.offset.reset` to `earliest`.

  | Producer options | default | Description |
  | --- | ---: |  --- |
  | `delivery.timeout.ms` | `120000` | Timeout for a producer to get an acknowledgement. |
  | `acks` | `1` | The number of acknowledgments the producer requires the leader to have received before considering a request complete. |
  | `compression.type` | `none` | Valid values are none, gzip, snappy, or lz4. Compression is of full batches of data, so the efficacy of batching will also impact the compression ratio (more batching means better compression). |
  | `default.replication.factor` | `1` | Not a Kafka option, used by Nuxeo to set the topic replication factor when creating a new topic. |

A producer will fail to deliver a record if it cannot get an acknowledgement within `delivery.timeout.ms`.

Most of the above properties can be tuned directly from [nuxeo.conf file]({{page space='nxdoc' page='configuration-parameters-index-nuxeoconf'}}) where properties are prefixed with `kafka.`.

{{#> callout type='warning' }}
Make sure you set properly the `default.replication.factor`, the default value is `1` which means **No replication**.</br>
With replication factor N, Kafka will tolerate up to N-1 server failures without losing record.
For instance, if you have 3 brokers in your cluster a replication factor of 2 will tolerate a server failure.
{{/callout}}

{{#> callout type='warning' }}
It is important to adapt the `max.poll.interval.ms` for slow consumers; otherwise, you will encounter errors like:
{{/callout}}
  ```bash
  ERROR [ComputationRunner] compliance: Exception in processLoop: Commit cannot be completed since the group has already rebalanced and assigned the partitions to another member. This means that the time between subsequent calls to poll() was longer than the configured max.poll.interval.ms, which typically implies that the poll loop is spending too much time message processing. You can address this either by increasing the session timeout or by reducing the maximum size of batches returned in poll() with max.poll.records.
  ```

For instance, this will happen when using the `StreamWorkManager` if a Work takes more than 2h.

Please refer to the Kafka documentation about the [consumer and producer options](https://kafka.apache.org/documentation#configuration) and [replication](https://kafka.apache.org/documentation/#replication) for more information.

When using Nuxeo Stream for PubSub service (see below) it is recommended to **reduce the topic retention to few hours** to save disk storage.

This should be done at the Kafka level using the following command:
```bash
$KAFKA_HOME/bin/kafka-configs.sh --zookeeper <zk_host> --alter --entity-type topics --entity-name nuxeo-pubsub --add-config retention.ms=7200000
```

## Kafka Topics and Consumer Groups

Each Nuxeo Stream is a Kafka Topic and each Nuxeo Computation is a consumer part of a Kafka Consumer Group.

Both Topic and Consumer Group are prefixed using the `kafka.topicPrefix` option in `nuxeo.conf`.
This prefix is by default `nuxeo-`, you can share a Kafka cluster among different Nuxeo cluster instances using distinct prefixes.

Since Nuxeo 11.1 stream and computation names use [namespaces]({{page page='nuxeo-stream'}}#namespace) to avoid conflicts between services and to ease the configuration.

A Nuxeo Stream named `<namespace>/<stream>` is converted to a topic:</br> `<prefix><namespace>-<stream>`.

Same applies to Nuxeo Computation: `<namespace>/<computation>` is converted into a group:</br> `<prefix><namespace>-<stream-name>`

Because streams and computations are extensible, the list of topics and group varies depending on the deployed Nuxeo components.

If you want the complete list of topics and consumer groups, the easiest way is to start a staging environment and use Kafka scripts:
```bash
# list of topics
/opt/kafka/bin/kafka-topics.sh  --zookeeper zookeeper:2181 --list --exclude-internal
nuxeo-audit-audit
nuxeo-bulk-automation
nuxeo-bulk-bulkIndex
nuxeo-bulk-command
nuxeo-bulk-csvExport
nuxeo-bulk-deletion
nuxeo-bulk-done
nuxeo-bulk-exposeBlob
nuxeo-bulk-index
nuxeo-bulk-makeBlob
nuxeo-bulk-recomputeThumbnails
nuxeo-bulk-recomputeViews
nuxeo-bulk-removeProxy
nuxeo-bulk-setProperties
nuxeo-bulk-setSystemProperties
nuxeo-bulk-sortBlob
nuxeo-bulk-status
nuxeo-bulk-trash
nuxeo-bulk-zipBlob
nuxeo-input-null
nuxeo-pubsub-pubsub
nuxeo-retention-retentionExpired
nuxeo-work-blobs
nuxeo-work-collections
nuxeo-work-default
nuxeo-work-dlq
nuxeo-work-elasticSearchIndexing
nuxeo-work-escalation
nuxeo-work-fulltextUpdater
nuxeo-work-permissionsPurge
nuxeo-work-pictureViewsGeneration
nuxeo-work-renditionBuilder
nuxeo-work-updateACEStatus
nuxeo-work-videoConversion

# list of consumers
/opt/kafka/bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 --list
nuxeo-audit-writer
nuxeo-bulk-automation
nuxeo-bulk-bulkIndex
nuxeo-bulk-csvExport
nuxeo-bulk-deletion
nuxeo-bulk-exposeBlob
nuxeo-bulk-index
nuxeo-bulk-indexCompletion
nuxeo-bulk-makeBlob
nuxeo-bulk-recomputeThumbnails
nuxeo-bulk-recomputeViews
nuxeo-bulk-removeProxy
nuxeo-bulk-scroller
nuxeo-bulk-setProperties
nuxeo-bulk-setSystemProperties
nuxeo-bulk-sortBlob
nuxeo-bulk-status
nuxeo-bulk-trash
nuxeo-bulk-zipBlob
nuxeo-retention-retentionExpired
nuxeo-stream-metrics
nuxeo-work-blobs
nuxeo-work-collections
nuxeo-work-default
nuxeo-work-elasticSearchIndexing
nuxeo-work-escalation
nuxeo-work-fulltextUpdater
nuxeo-work-permissionsPurge
nuxeo-work-pictureViewsGeneration
nuxeo-work-renditionBuilder
nuxeo-work-updateACEStatus
nuxeo-work-videoConversion
```

For instance, you can use this list of topics to create them in your target environment so Nuxeo can use a Kafka user with limited rights.

Below are listed common topics and consumer groups used by Nuxeo using the default `nuxeo-` prefix.

### Default Nuxeo Topics

#### The Audit Topic

Nuxeo Stream is used to decouple write into the audit backend, the namespace used is `audit`.
A stream `audit/audit` is defined with a single partition to get a total ordering.
The computation in charge of writing to the backend is called `audit/writer`.
This translates into a topic `nuxeo-audit-audit` and a consumer group `nuxeo-audit-writer`.

You can see the lag using `stream.sh`:
```bash
./bin/stream.sh lag -k -l audit/audit
## Log: Name{id='audit-audit', urn='audit/audit'} partitions: 1
### Group: Name{id='audit-writer', urn='audit/writer'}
| partition | lag | pos | end | posOffset | endOffset |
| All       |   0 |  20 |  20 |        20 |        20 |
```

Or using Kafka scripts:
```bash
/opt/kafka/bin/kafka-topics.sh --zookeeper zookeeper:2181 --describe --topic nuxeo-audit-audit
-- Topic:nuxeo-audit-audit	PartitionCount:1	ReplicationFactor:1	Configs:
--	Topic: nuxeo-audit-audit	Partition: 0	Leader: 1001	Replicas: 1001	Isr: 1001


/opt/kafka/bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group nuxeo-audit-writer
-- GROUP              TOPIC             PARTITION  CURRENT-OFFSET  LOG-END-OFFSET  LAG             CONSUMER-ID                                                HOST            CLIENT-ID
-- nuxeo-audit-writer nuxeo-audit-audit 0          20              20              0               nuxeo-audit-writer-21-4ebb7f79-d9f8-41f5-ae6e-559981380967 /172.19.0.11    nuxeo-audit-writer-21
```

#### The StreamWorkManager Topics

When `nuxeo.stream.work.enabled=true` the WorkManager is based on Nuxeo Stream and each Work Queue is using a topic.

Since Nuxeo 11.1 the namespace `work` is used.

Given a Work Queue for instance `elasticSearchIndexing`:
- the stream and its associated computation will be `work/elasticSearchIndexing`
- the Kafka topic name and consumer group will be `nuxeo-work-elasticSearchIndexing`

You will find a topic for each Work Queue:
- `nuxeo-work-default`: the default WorkManager queue.
- `nuxeo-work-elasticSearchIndexing`: the queue used for indexing documents in Elasticsearch.
- `nuxeo-work-fulltextUpdater`
- `nuxeo-work-renditionBuilder`
- `nuxeo-work-permissionsPurge`
- `nuxeo-work-collections`
- `nuxeo-work-blobs`
- `nuxeo-work-escalation`

In addition, there is a Dead Letter Queue stream `work/dlq` to store Work in failure the topic is:
- `nuxeo-work-dlq`

Here is an example to get the lag and latency for the `default` Work Queue:
```bash
./bin/stream.sh latency -k -l work/default --codec avro --verbose
## Log: Name{id='work-default', urn='work/default'} partitions: 12
### Group: Name{id='work-default', urn='work/default'}
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

Since Nuxeo 11.1 the namespace used is `bulk`.

There are topics part of the Bulk Service:
- `nuxeo-bulk-command`: Scheduled Bulk Commands are first written into this topic.
- `nuxeo-bulk-status`: Any Bulk Command reports its progress into this topic.
- `nuxeo-bulk-done`: This topic contains the status of the completed Bulk Commands.

Each Bulk Action creates its own processor and topics, you can find a [description of the topology]({{page page='bulk-action-framework'}}#bulk-service)
and interesting [debugging commands]({{page page='bulk-action-framework'}}#debugging) in the related documentation.

#### The PubSub Topic

The PubSub service is used to send instant messages to all Nuxeo nodes, mainly to do cache invalidation.
When it is configured to use Nuxeo Stream (`nuxeo.pubsub.provider=stream`) messages are published in a topic named `nuxeo-pubsub-pubsub` by default.

This topic is special because consumers don't need past messages, they start consuming from the end of the topic and they don't need to commit their position.
As a result, Kafka is not able to list consumer groups for this topic.

Also, because it is instant messages, it is recommended to **reduce the topic retention to few hours** to save disk storage, see the above Kafka configuration section.
