---
title: WorkManager Dead Letter Queue (DLQ)
description: Concept and FAQ about WorkManager DLQ
review:
    comment: ''
    date: '2021-03-22'
    status: ok
toc: true
tree_item_index: 1490
---

## Concept

Dead Letter Queue (DLQ) stream goal is to store Work in failure:
- A work that is in failure after retries is skipped, resulting in a possible consistency problem. For instance, an indexing work that is failing after retries will be skipped resulting in a discrepancy between the documents in the repository and the one that is indexed.
- When the cause of the failure requires manual intervention: fix a misconfiguration, restart a service, fix a disk full, re-deployment etc... a retry policy is not enough.

## Frequently Asked Questions

### How to reprocess the stuck messages and does it need to be done?

After retries, Works in failure are stored in a dead letter queue (DLQ) stream named `dlq-work`. This DLQ is activated by default on both WorkManager implementations (`default` and `StreamWorkManager`). Works in this DLQ can be re-executed for repairing purpose.

Works in failure stored in a Dead Letter Queue stream can be replayed using an **automation operation** or through a **Nuxeo REST API endpoint**.

#### Using the Automation Operation

The `WorkManager.RunWorkInFailure` automation operation has to be used as in this example:
```
curl -X POST "http://localhost:8080/nuxeo/site/automation/WorkManager.RunWorkInFailure" -u Administrator:Administrator -H 'content-type: application/json+nxrequest' -d '{"params":{},"context":{}}'
```

This returns a JSON result with the total number of Works re-executed and the number that were successfully executed:

```
{"total":3,"success":3}
```

{{#> callout type='info' title='Automation operation documentation'}}
You can get more details about this operation by reading the [Nuxeo Explorer documentation page](https://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform-2021/viewOperation/WorkManager.RunWorkInFailure)
{{/callout}}

#### Using the Nuxeo REST API Endpoint

Let's see now how to use the Nuxeo REST API endpoint for run works in failure:

##### Call Without Params

```
curl -X POST -u Administrator:Administrator http://localhost:8080/nuxeo/site/management/workmanager/runworksinfailure
```

##### Call With `timeoutSeconds` Param

```
curl -X POST -u Administrator:Administrator -d timeoutSeconds=10 http://localhost:8080/nuxeo/site/management/workmanager/runworksinfailure
```

In case of success, the server sends a 200 code, with:

```
{
 "total": 4,
 "success": 4
}
```

### Does it contribute to any data inconsistency?

It depends on the work which is in failure:
- For example, if it is about content reindexing, then all errors generate a gap between the repository (database) and the Elasticsearch indexes.

### Are there best practices for avoiding messages to end up in DLQ or maintaining DLQ messages?

Nuxeo Work has to be be monitored, as well as the `dlq-work` topic. Please refer to the [Observability]({{page page='observability'}}) page for more details.
