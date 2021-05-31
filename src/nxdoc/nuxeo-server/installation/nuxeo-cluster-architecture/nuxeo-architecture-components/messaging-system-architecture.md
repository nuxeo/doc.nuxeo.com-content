---
title: Messaging system
description:
review:
    comment: ''
    date: '2021-03-10'
    status: ok
toc: true
tree_item_index: 700
---

Different Nuxeo services rely on a messaging system, this is the case for the **WorkManager**, **Nuxeo Stream** and the **Bulk Service**, the **PubSub services** and the **KeyValue Store**.

## Concepts

When running in cluster mode, the Nuxeo nodes need to communicate so the following services work in a distributed way:

- The **[WorkManager]({{page page='work-and-workmanager'}})** can distribute its Works among nodes and share a common state.
- **[Nuxeo Stream]({{page page='nuxeo-stream'}})** and the **[Bulk Service]({{page page='bulk-action-framework'}})** distribute processing among nodes and handle failover.
- The **KeyValue Store** is shared by all nodes and used by different services like the [Transient Store]({{page page='transient-store'}}).
- The **PubSub Service** is used to distribute cache invalidation among nodes.

There are two main options for the messaging system, Kafka or Redis.

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
  <th colspan="1"></th>
  <th colspan="1">Redis</th>
  <th colspan="1">Kafka</th>
</tr>
<tr>
  <th colspan="1">WorkManager</th>
  <td colspan="1">Capacity limited by Redis memory</td>
  <td colspan="1">Recommended</td>
</tr>
<tr>
  <th colspan="1">Nuxeo Stream/Bulk Service</th>
  <td colspan="1">Using local file system (Chronicle Queue) processing is not distributed</td>
  <td colspan="1">Recommended</td>
</tr>
<tr>
  <th colspan="1">PubSub</th>
  <td colspan="1">Redis PubSub</td>
  <td colspan="1">Kafka</td>
</tr>
<tr>
  <th colspan="1">KeyValue Store</th>
  <td colspan="1">Redis</td>
  <td colspan="1">Data Storage (MongoDB or PostgreSQL)</td>
</tr>
</tbody>
  </table>
  </div>

Nuxeo Platform has built-in critical features (Document trashing, CSV export, document deletion etc.) relying on the Nuxeo Platform Bulk Service. The bulk service is implemented with Nuxeo Stream that provides two implementation: Kafka and Chronicle Queue.

## Recommendations

Nuxeo Stream is shipped with Kafka implementations and brings more resilience and a greater distribution capability, for example, having several consumer threads for the same queue. For this reason, **deploying Kafka is highly recommended to enable distributed processing on Nuxeo Stream and improve resiliency**.

{{#> callout type='info' heading='Kafka in the Cloud'}}
You can consider [Amazon MSK](https://aws.amazon.com/msk/) or [Confluent Cloud for Kafka](https://www.confluent.io/confluent-cloud) as a managed service to go with Kafka.
{{/callout}}

Consequently, we recommend:

- **Kafka** for the WorkManager, Nuxeo Stream / Bulk Service and the PubSub.
- **MongoDB** for the KeyValue Store.

## Configuration

Since Nuxeo Platform LTS 2019 (10.10), Kafka is recommended in cluster mode so the Bulk Service can be distributed and handles failover between Nuxeo nodes.

When used as WorkManager implementation you can safely stop a Nuxeo node anytime without being worried of losing any processing.

When the KeyValue store relies on the repository's backend, you don't need a Redis cluster anymore.

## Alternative configuration using Redis (No Kafka)

  Technically, when not using Kafka, Nuxeo Stream relies on Chronicle Queue. Both implementations work in unit tests, but we discourage the use of Chronicle Queue on a production setup:

- The Chronicle Queue storage is local to the node, it is not replicated and in case of file system failure, scheduled processing are lost. More concretely while indexing processing is reproducible, a deletion of folders that would be missed will be missed forever. The system won’t be able to capture the user intent, in case of damage on the hard drive of the Nuxeo node. 
- Asynchronous jobs (content indexing, thumbnail computations, etc…) cannot be distributed. Any processing submitted on a front node will be executed in the same node, in the same JVM, providing limited experience in case of massive bulk import, content re-indexing, bulk processing with the upcoming “Select All“ capability in user interface, up to system not responding, not serving web pages.
- Nuxeo don't provide backup restore procedures related to a set up leveraging Chronicle Queue.
Nuxeo doesn’t provide recommendation on the required disk space of the Nuxeo node in case of using Chronicle Queue in production 

In this last scenario:
- Redis is used for the WorkManager, the PubSub service and the KeyValue store
- Chronicle Queue runs Nuxeo Stream and its Bulk Service

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Going further'}}
- [Kafka configuration]({{page version='' space='nxdoc' page='kafka'}}#configuration)
- [Redis configuration]({{page version='' space='nxdoc' page='redis-configuration'}})
{{/panel}}</div><div class="column medium-6">
</div></div>
