---
title: Kafka
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

Kafka configuration and integration with Nuxeo.

{{! /excerpt}}

## Kafka Setup

[Nuxeo Stream]({{page page='nuxeo-stream'}}) (introduced in Nuxeo 9.3) requires [Kafka 1.0.x](https://kafka.apache.org/).

In addition to a Kafka broker access Nuxeo Stream will also require a Zookeeper access.

Kafka broker need to be tuned a bit:


  | Kafka broker options | default | recommended |  Description |
  | --- | ---: | ---: | --- |
  | `offsets.retention.minutes` | `1440` | `20160` |The default offset retention is only 1 day, without activity for this amount of time the current consumer offset position is lost and all messages will be reprocessed. To prevent this we recommend to use a value 2 times bigger as `log.retention.hours`, so by default 14 days or `20160`. See [KAFKA-3806](https://issues.apache.org/jira/browse/KAFKA-3806) for more information. |
  | `log.retention.hours` | `168` | |The default log retention is 7 days. If you change this make sure you update `offset.retention.minutes`.|
  | `auto.create.topics.enable` |  `true` |  | This is not a requirement for Log, because topic are created from Zookeeper. |


## Kafka Configuration

Access, consumer and producer properties are registered using the Nuxeo `KafkaConfigService` extension point:

```xml
<?xml version="1.0"?>
<component name="my.project.kafka.contrib">
  <extension target="org.nuxeo.runtime.stream.kafka.service" point="kafkaConfig">
    <kafkaConfig name="default" zkServers="localhost:2181" topicPrefix="nuxeo-">
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
  | `max.poll.records` | `500` | Can be adjusted to make sure the poll interval is respected. |
  | `group.initial.rebalance.delay.ms` | `3000` | Delay for the initial consumer rebalance. |
  | `subscribe.disable` | `false` | Not a Kafka option, used by the module to disable the dynamic assignment, when this option is `true` LogManager will only support static partition assignment. |

  | Producer options | default | Description |
  | --- | ---: |  --- |
  | `acks` | `1` | The number of acknowledgments the producer requires the leader to have received before considering a request complete. |
  | `compression.type` | `none` | Valid values are none, gzip, snappy, or lz4. Compression is of full batches of data, so the efficacy of batching will also impact the compression ratio (more batching means better compression). |
  | `default.replication.factor` | `1` | Not a Kafka option, used by Nuxeo to set the topic replication factor when creating a new topic. |

{{#> callout type='warning' }}
Make sure that you set properly the `default.replication.factor`, the default value is `1` which means NO replication.
With replication factor N, Kafka will tolerate up to N-1 server failures without losing record.
For instance if you have 3 brokers in your cluster a replication factor of 2 will tolerate a server failure.{{/callout}}

Please refer to the Kafka documentation about the [consumer and producer options](https://kafka.apache.org/documentation#configuration) and [replication](https://kafka.apache.org/documentation/#replication) for more information.

## {{> anchor 'no-redis'}}"No Redis" Nuxeo cluster

Redis is used for different things in Nuxeo, among them as a default key value provider.
For now there is only one alternative for this service and it requires to use MongoDB.

Here is a possible "No Redis" Nuxeo cluster configuration:
```properties

# We use mongodb, this will switch the keyvalue provider and lock manager to mongodb:
# nuxeo.keyvalue.provider=mongodb
# nuxeo.lock.manager=mongodb
nuxeo.templates=mongodb,default

# Enable Kafka
kafka.enabled=true
kafka.bootstrap.servers=my-kafka-broker:9092

# Enable the StreamWorkManager
nuxeo.stream.work.enabled=true

# Use the Stream PubSub provider
# this will be used by cache and dbs invalidation
nuxeo.pubsub.provider=stream

# Just to make it clear
nuxeo.redis.enabled=false
```

The Kafka topic used by the PubSub Provider don't need to have a 7 days retentions,
it is used to send instant message and its retention can be reduced at the Kafka level to 2 hours:

```bash
$KAFKA_HOME/bin/kafka-configs.sh --zookeeper <zk_host> --alter --entity-type topics --entity-name nuxeo-pubsub --add-config retention.ms=7200000
```
