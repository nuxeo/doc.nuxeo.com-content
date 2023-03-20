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
- **[Nuxeo Stream]({{page page='nuxeo-stream'}})** and the **[Bulk Service]({{page page='bulk-action-framework'}})** distribute processing among nodes and handle failover. It is used by critical features such as Document trashing, CSV export, document deletion, etc.
- The **KeyValue Store** is shared by all nodes and used by different services like the [Transient Store]({{page page='transient-store'}}).
- The **PubSub Service** is used to distribute cache invalidation among nodes.

## Requirements

**Kafka** is required as a messaging system in Nuxeo LTS 2023 for all the above services except for the KeyValue Store which relies on the repository database.

{{#> callout type='info' heading='Kafka in the Cloud'}}
You can consider [Amazon MSK](https://aws.amazon.com/msk/) or [Confluent Cloud for Kafka](https://www.confluent.io/confluent-cloud) as a managed service to go with Kafka.
{{/callout}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Going further'}}
- [Kafka configuration]({{page version='' space='nxdoc' page='kafka'}}#configuration)
- [Redis configuration]({{page version='' space='nxdoc' page='redis-configuration'}})
{{/panel}}</div><div class="column medium-6">
</div></div>
