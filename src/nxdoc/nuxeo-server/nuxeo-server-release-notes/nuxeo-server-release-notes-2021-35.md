---
title: LTS 2021.35 / LTS 2021-HF35
description: Discover what's new in LTS 2021.35 / LTS 2021-HF35
review:
   comment: ''
   date: '2023-03-21'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-35'}}
# What's New in LTS 2021.35 / LTS 2021-HF35

## Ensure File Existence When Using Batch Upload in Cluster Mode and Cloud Storage


CachingBlobStore now asserts that a blob exists in the wrapped blob store on wirte

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31730](https://jira.nuxeo.com/browse/NXP-31730)

## Blob.AttachOnDocument Doesn't Handle Correctly List of Blobs


Blob.AttachOnDocument works with a list of blobs.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31721](https://jira.nuxeo.com/browse/NXP-31721)

## Worker Nodes Scaling Management Endpoint


There is a new Management endpoint for autoscaler

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31679](https://jira.nuxeo.com/browse/NXP-31679)

## Delete Orphan Workflows and Tasks


Orphaned workfows can be deleted daily along with wokflows in state "done" or "canceled'. A new management endpoint is available to GC orphaned, done or canceled workflows on demand.

The `DocumentRoutingWorkflowInstancesCleanup` listener (triggered daily), which removes the workflow in state `done` or `canceled`, has been reimplemented to leverage BAF. Note that the tasks related to a removed workflow are also removed.

By setting the `nuxeo.routing.cleanup.workflow.instances.orphan` conf property to `true` (`false` by default), the `DocumentRoutingWorkflowInstancesCleanup` listener will also remove orphan workflows daily.

A new management rest API endpoint is also available to perform a workflow garbage collection on demand. See [documentation](https://doc.nuxeo.com/rest-api/1/workflows-endpoint/).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31659](https://jira.nuxeo.com/browse/NXP-31659)

## Make Directory.SuggestEntries Return Parent With Obsolete Children if the Parameter canSelectParent Is Set to True


A parent directory entry of which all children are obsolete is now returned if 'canSelectParent' is true

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31052](https://jira.nuxeo.com/browse/NXP-31052)

## PubSub Usage Must Be Monitored


There is new metric to monitor PubSub usage.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29386](https://jira.nuxeo.com/browse/NXP-29386)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22210) is available in our bug tracking tool.

{{! /multiexcerpt}}
