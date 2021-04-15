---
title: Asynchronous Processing
description:
review:
    comment: ''
    date: '2021-03-10'
    status: ok
toc: true
tree_item_index: 700
---

Asynchronous processing relies on the **WorkManager**, **Nuxeo Stream**, **KeyValue Store** and the **PubSub Service**.

## Concepts

When running in cluster mode, the Nuxeo nodes need to communicate so the following services work in a distributed way:

- The **[WorkManager]({{page page='work-and-workmanager'}})** can distribute its Works among nodes and share a common state.
- **[Nuxeo Stream]({{page page='nuxeo-stream'}})** and the **[Bulk Service]({{page page='bulk-action-framework'}})** distribute processing among nodes and handle failover.
- The **KeyValue Store** enabling a shared [Transient Store]({{page page='transient-store'}}).
- The **PubSub Service** can publish messages to all nodes and is used for cache invalidation.

Nuxeo Platform have built-in critical features (Document trashing, CSV export, document deletion etc.) relying on the Nuxeo Platform Bulk Service. The bulk service is implemented with Nuxeo Stream that provides two implementation:
- Chronicle Queue
- Kafka  

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
  <td colspan="1"></th>
  <th colspan="1">WorkManager</th>
  <th colspan="1">Nuxeo Stream/Bulk Service</th>
  <th colspan="1">KeyValue Store</th>
  <th colspan="1">PubSub Service</th>
</tr>
<tr>
  <th colspan="1">Redis</th>
  <td colspan="1">Yes</td>
  <td colspan="1">No</td>
  <td colspan="1">Yes</td>
  <td colspan="1">Yes</td>
</tr>
<tr>
  <th colspan="1">Kafka</th>
  <td colspan="1">Yes</td>
  <td colspan="1">Yes</td>
  <td colspan="1">No</td>
  <td colspan="1">Yes</td>
</tr>
<tr>
  <th colspan="1">Chronicle Queue</th>
  <td colspan="1">No</td>
  <td colspan="1">Yes</td>
  <td colspan="1">No</td>
  <td colspan="1">No</td>
</tr>
<tr>
  <th colspan="1">MongoDB</th>
  <td colspan="1">No</td>
  <td colspan="1">No</td>
  <td colspan="1">Yes</td>
  <td colspan="1">No</td>
</tr>
<tr>
  <th colspan="1">SQL DB</th>
  <td colspan="1">No</td>
  <td colspan="1">No</td>
  <td colspan="1">Yes</td>
  <td colspan="1">No</td>
</tr>
</tbody>
</table>
</div>

## Recommendations

Nuxeo Stream is shipped with Kafka implementations and brings more resilience and a greater distribution capability, for example, having several consumer threads for the same queue. For this reason, **deploying Kafka is recommended to have a highly reliable Bulk Service**.

{{#> callout type='info' heading='Kafka in the Cloud'}}
You can consider [Amazon MSK](https://aws.amazon.com/msk/) or [Confluent Cloud for Kafka](https://www.confluent.io/confluent-cloud) as a managed service to go with Kafka.
{{/callout}}

Consequently, we recommend:

- **Kafka** for the WorkManager, Nuxeo Stream / Bulk Service and the PubSub.
- **MongoDB** for the KeyValue Store.

### Chronicle Queue and Kafka

  Technically both implementations work in unit tests, but we discourage the use of Chronicle Queue on a production setup:

- The Chronicle Queue storage is local to the node, it is not replicated and in case of file system failure, scheduled processing are lost. More concretely while indexing processing is reproducible, a deletion of folders that would be missed will be missed forever. The system won’t be able to capture the user intent, in case of damage on the hard drive of the Nuxeo node. 
- Asynchronous jobs (content indexing, thumbnail computations, etc…) cannot be distributed. Any processing submitted on a front node will be executed in the same node, in the same JVM, providing limited experience in case of massive bulk import, content re-indexing, bulk processing with the upcoming “Select All“ capability in user interface, up to system not responding, not serving web pages.
- Nuxeo don't provide backup restore procedures related to a set up leveraging Chronicle Queue.
Nuxeo doesn’t provide recommendation on the required disk space of the Nuxeo node in case of using Chronicle Queue in production 

In this last scenario:
- Chronicle Queue runs the Bulk Services
- Mongo handles the KeyValue Store
- Redis for the WorkManager and the PubSub Service

## Configuration

Since Nuxeo Platform LTS 2019 (10.10), Kafka is recommended in cluster mode so the Bulk Service can be distributed and handles failover between Nuxeo nodes.

When used as WorkManager implementation you can safely stop a Nuxeo node anytime without being worried of losing any processing.

When the KeyValue store relies on the repository's backend, you don't need a Redis cluster anymore.

Kafka requires few resources and it is limited only by the available disk space.

For high availability Kafka needs to be deployed in cluster.

To get high availability, we need a Kafka cluster with 2 Kafka nodes. To orchestrate the log queue, we need **Zookeeper nodes**. Zookeeper nodes do not consume a lot of memory or CPU.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Going further'}}
- [Kafka configuration]({{page version='' space='nxdoc' page='kafka'}}#configuration)
- [Redis configuration]({{page version='' space='nxdoc' page='redis-configuration'}})
{{/panel}}</div><div class="column medium-6">
</div></div>
