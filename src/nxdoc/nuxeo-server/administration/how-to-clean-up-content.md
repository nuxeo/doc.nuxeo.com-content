---
title: 'HOWTO: Clean Up Content'
review:
    comment: ''
    date: '2023-06-29'
    status: ok
details:
    howto:
        excerpt: 'Explains what options are available to clean up your orphaned content, which one(s) you should pick based on your situation and how to apply them.'
        level: Intermediate
        tool: ''
        topics: 'garbage collector, log purge, orphaned binaries, cleanup'
labels:
    - howto
tree_item_index: 2250
---

{{! excerpt}}
This documentation explains what options are available to clean up your orphaned content, which one(s) you should pick based on your situation and how to apply them.
{{! /excerpt}}

## How Nuxeo Cleans Up Content

Nuxeo Server is designed to give you complete control over your content and how you dispose of it. 

For example, you may need to keep logs to prove compliance even if the document was deleted, or you may want to keep completed workflows around in order to build analytics and gather insights. To cover for such use cases, Nuxeo Server offers specific ways to dispose of orphaned content, and you need to leverage them explicitly.

Read on to discover what options are available to you, when, how and why you should leverage them.

## Available Options

### Cleaning Up Orphaned Versions for Deleted Documents

When [deleting permanently]({{page page='content-delete' space='userdoc'}}) a document, all its versions are deleted automatically.

A version stays referenced and therefore is not removed if:
- Any proxy points to a version in the version history of any live document
- In the case of a tree snapshot if there is a snapshot containing a version in the version history of any live document.

However when deleting documents recursively on large folder it may result in versions not being cleanup, leaving orphaned versions.
Since LTS 2021 HF45 this case is properly handled when using a MongoDB backend, still you might have legacy orphaned versions remaining.

In order to clean up orphaned versions, Nuxeo Server offers a [dedicated REST API endpoint](https://doc.nuxeo.com/rest-api/1/versions-endpoint/#garbage-collect-orphaned-versions) to perform a Full Garbage Collection.

This endpoint leverages a [bulk action]({{page page='bulk-action-framework'}}), meaning that it is scalable for any repository size and can be easily monitored, even in a context where it could end up being a long-running action.

{{#> callout type='tip'}}
To get the maximum benefit from your cleanup, it is recommended to leverage this option before cleaning up orphaned binaries, as removing versions may produce new orphaned binaries.
{{/callout}}

### Cleaning Up Orphaned Binaries

Nuxeo Server deduplicates content in order to optimize storage costs. This means that multiple documents may reference the same file, and yet it will be stored only once.

When [deleting permanently]({{page page='content-delete' space='userdoc'}}) a document, other documents may still reference some or all of the files it holds. If not, then these files are considered orphaned. 

If you started using Nuxeo after LTS 2021 HF35, orphaned files are cleaned up automatically through a background task. If you chose to disable this feature, an on demand option exists as well.

If you started using Nuxeo before LTS 2021 HF35, then you may need to run some migration steps to gain access to this feature. This will prevent new orphaned files to be created. Existing orphaned files can be cleaned up using the on demand cleanup option.

You can learn how to use this option in the [Garbage Collecting Orphaned Blobs]({{page page='garbage-collecting-orphaned-blobs'}}) documentation.

### Cleaning Up Completed Workflows

Workflows are stored as documents in Nuxeo Server. Each time a workflow is started, new documents are created for each step in the workflow. This means that if you leverage workflows heavily, your document count will grow along.
 
To mitigate this, workflows in state "done" or "canceled" are deleted automatically on a daily basis along with all the steps they contained. And since LTS 2021 HF35, this automatic removal uses a [bulk action]({{page page='bulk-action-framework'}}) to make it even more scalable. 

In addition to this mechanism, it is possible to do further cleanup with the following actions:

By setting the `nuxeo.routing.cleanup.workflow.instances.orphan` [nuxeo.conf property]({{page page='configuration-parameters-index-nuxeoconf'}}) to `true` (`false` by default), the `DocumentRoutingWorkflowInstancesCleanup` listener will also remove orphan workflows daily.

A new management rest API endpoint is also available to perform a workflow garbage collection on demand. See the [workflows endpoint documentation](https://doc.nuxeo.com/rest-api/1/workflows-endpoint). Reasons to use it include:
- You disabled the automatic workflow cleanup using configuration in order to build reports or gather data on your workflows
- You did not enable the `nuxeo.routing.cleanup.workflow.instances.orphan` [nuxeo.conf property]({{page page='configuration-parameters-index-nuxeoconf'}}) yet
- Before LTS 2021 HF35, workflows were not cleaned up in some [specific scenarios](https://jira.nuxeo.com/browse/NXP-31659)

### Cleaning Up Audit Logs

Audit logs keep track of all the activity for documents handled in Nuxeo Server. You may need it for security audits or to prove compliance for example. Therefore, it is kept forever until you explicitly choose to delete it, even for deleted documents. 

You can learn how to use this option in our dedicated [Purging Audit Logs]({{page page='purging-audit-logs-nxp_logs'}}) documentation.
