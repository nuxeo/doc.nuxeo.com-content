---
title: LTS 2021.29 / LTS 2021-HF29
description: Discover what's new in LTS 2021.29 / LTS 2021-HF29
review:
   comment: ''
   date: '2022-11-17'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 2040
---

{{! multiexcerpt name='nuxeo-server-updates-2021-29'}}
# What's New in LTS 2021.29 / LTS 2021-HF29

## Fix Audit Entries for Rendition When Audit Is Stored in MongoDB

Rendition download events are correctly saved to MongoDB audit.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31383](https://jira.nuxeo.com/browse/NXP-31383)

## Make the Document Creation Take Into Account the Segment Limit

Apply path segment max size at document creation.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31363](https://jira.nuxeo.com/browse/NXP-31363)

## documentNotFoundException - enricher: runnableWorkflows Exception When Browsing with Multirepo Configuration

Runnable Wokflow models can now be retrieved within a multi repository deployment.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31351](https://jira.nuxeo.com/browse/NXP-31351)

## TransientStore GC throws Not Started Exception

Transient Store GC are no longer started if already in progress.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31323](https://jira.nuxeo.com/browse/NXP-31323)

## Provide a Way to Differentiate a View From a Download in the Audit Trail

You can now specify the download reason when download a blob.

The download client reason can be specified within a REST call by providing a query parameter or a HTTP header when downloading a blob.

The query parameter is `clientReason`, see below a cURL example:

The HTTP header is `X-Client-Reason`, see below a cURL example:

This information can then be retrieved in the extended object of audit entry under the name `clientReason`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31279](https://jira.nuxeo.com/browse/NXP-31279)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21879) is available in our bug tracking tool.

{{! /multiexcerpt}}
