---
title: Nuxeo Admin Console
description: The Nuxeo admin console provides a dedicated UI for system administrators to get an overview of the system and perform common tasks like reindexing documents.
review:
    comment: ''
    date: '2025-11-18'
    status: ok
is_overview: true
tree_item_index: 1050
confluence:
  page_id: '10000'
---

The Nuxeo admin console is an addon that provides a dedicated UI for system administrators to get an overview of the system and perform common tasks like reindexing documents.

## Installation

{{{multiexcerpt 'mp-installation-easy' page='Generic Multi-Excerpts'}}}

{{#> callout type='tip' }}
The package id for this addon is `nuxeo-admin-console`.
{{/callout}}

### What It Is

As a Nuxeo system administrator, the admin console is your go-to application to support your users on a daily basis and maintain your Nuxeo instance in production. Through an easy to use UI, it provides a full set of capabilities to leverage our [management REST API endpoint]({{page space='rest-api' version='1' page='management-endpoint'}}) tasks easily on individual documents and at scale. 

### What It Is NOT

- A monitoring and observability application. Nuxeo provides a wide set of [metrics for observability]({{page page='observability'}}) that leverage market standards, allowing you to leverage your monitoring tool of choice for this use case.

- A functional administration tool. Options like managing users or vocabularies for instance can be achieved from [Nuxeo Web UI]({{page space='userdoc' page='administration'}}). 

- A developer focused application. Applications like our [browser extension for developers]({{page page='nuxeo-dev-tools-extension'}}) and [Nuxeo CLI]({{page page='nuxeo-cli'}}) help with that.

- A way to get the logs of your instance. Reasons for that:
  - Since we run Nuxeo apps as a cluster, we need to aggregate all the logs from all the systems in a single place, including logs from services like [Nuxeo Enhanced Viewer]({{page page='nuxeo-enhanced-viewer'}}). A single Nuxeo instance cannot get this information, so the admin console cannot handle that. Their display is managed in the [cloud console]({{page space='nuxeo-cloud' page='nuxeo-cloud-customer-console'}}) for our cloud customers. Self-managed customers can leverage their observability tool of choice.
  - Logs configuration usually varies depending on the type of environment. The [cloud console]({{page space='nuxeo-cloud' page='nuxeo-cloud-customer-console'}}) offers this option.

## Functional Overview

Once installed, the Nuxeo admin console can be accessed through a dedicated URL: `[YOUR-NUXEO-SERVER-URL/nuxeo]/nuxeoadmin`. Only `administrators` can access this interface. Using an account without adminstrator level displays an error message.

![](/assets/nxdoc/nuxeo-admin-console/admin-console-access-refused.png?border=true)

### Warning on login

A warning popup on login cautions users about tools potentially impacting application performance and can be disabled to prevent future displays.

![](/assets/nxdoc/nuxeo-admin-console/admin-console-warning.png?border=true)


### Homepage

The homepage provides a quick view into the essential information of your Nuxeo instance:
* Probes and their status to see if all components are running
* Version information and cluster enablement information

![](/assets/nxdoc/nuxeo-admin-console/admin-console-home-page.png?border=true)

### Checking the Status of System Components

The homepage provides a concise list of [probes]({{page page='health-check'}}#probes) to check the health of the various system components. For a full list with detailed information and the possibility to launch a check on them individually, you can see the `Probes` menu.


![](/assets/nxdoc/nuxeo-admin-console/admin-console-home-page.png?border=true)

![](/assets/nxdoc/nuxeo-admin-console/admin-console-access-probes-details.png?border=true)

### Document Reindexing

The `Elasticsearch Reindex` menu lets you reindex documents with Elasticsearch or OpenSearch. You can reindex documents:
- Individually
- From a folder: all documents in that folder and below are reindexed
- From a [NXQL query]({{page page='NXQL'}})

When using the `Folder` and `NXQL Query` options, the admin console warns you about the consequences and the expected duration of this action.

![](/assets/nxdoc/nuxeo-admin-console/admin-console-confirm-elasticsearch-reindex.png?border=true)

### Picture Renditions Generation

The `Picture Renditions Generation` menu lets you recompute picture views for documents. You can recompute picture views:
- Individually
- From a folder: all documents of type picture in that folder and below are recomputed
- From a [NXQL query]({{page page='NXQL'}})


![](/assets/nxdoc/nuxeo-admin-console/admin-console-picture-renditions.png?border=true)

When using the `Folder` and `NXQL Query` options, the admin console warns you about the consequences and the expected duration of this action.


![](/assets/nxdoc/nuxeo-admin-console/admin-console-confirm-picture-recompute.png?border=true)

### Video Renditions Generation

The `Video Renditions Generation` menu lets you recompute video conversions for documents. You can recompute video conversions:
- Individually
- From a folder: all documents of type video in that folder and below are recomputed
- From a [NXQL query]({{page page='NXQL'}})

You can optionally specify one or several conversion names to recompute and whether or not to recompute all video information by setting `Information to recompute`. Only missing information will be recomputed if it is set to `false`


![](/assets/nxdoc/nuxeo-admin-console/admin-console-video-renditions.png?border=true)

When using the `Folder` and `NXQL Query` options, the admin console warns you about the consequences and the expected duration of this action.

![](/assets/nxdoc/nuxeo-admin-console/admin-console-confirm-video-recompute.png?border=true)

### Thumbnails Generation

The `Thumbnails Generation` menu lets you recompute thumbnails for documents. You can recompute thumbnails:
- Individually
- From a folder: all documents of type video in that folder and below are recomputed
- From a [NXQL query]({{page page='NXQL'}})


![](/assets/nxdoc/nuxeo-admin-console/admin-console-thumbnails-generation.png?border=true)

When using the `Folder` and `NXQL Query` options, the admin console warns you about the consequences and the expected duration of this action.


![](/assets/nxdoc/nuxeo-admin-console/admin-console-thumbnails-generation.png?border=true)

### Fulltext Reindexing

The `Fulltext Reindex` menu lets you run extraction of all binaries (blobs) referenced by documents. This can be done:
- Individually
- From a folder: all documents of type video in that folder and below are recomputed
- From a [NXQL query]({{page page='NXQL'}})

The default query skips proxies without fulltext and avoids extraction from documents without downloadable binaries. This can be configured optionally by setting `Empty fulltext index of binaries for excluded documents` (default: false) to nullify binary fulltext on excluded documents.


![](/assets/nxdoc/nuxeo-admin-console/admin-console-fulltext-reindex.png?border=true)

When using the `Folder` and `NXQL Query` options, the admin console warns you about the consequences and the expected duration of this action.


![](/assets/nxdoc/nuxeo-admin-console/admin-console-confirm-fulltext-reindex.png?border=true)


### Monitoring an Action

Any action triggered through the admin console uses the [bulk action framework]({{page page='bulk-action-framework'}}), making them highly scalable. Once an action is triggered, a confirmation is provided with a bulk action command id.


![](/assets/nxdoc/nuxeo-admin-console/admin-console-action-launched.png?border=true)

You can click on the `See Status` button to follow how the bulk action is proceeding.

In addition, the command id can be copied to retrieve its status later using the `Bulk Action Monitoring` menu. Note that the bulk action id won't be remembered, so you may want to store it in a safe place if you intend to monitor it later on.


![](/assets/nxdoc/nuxeo-admin-console/admin-console-bulk-action-monitor.png?border=true)


### Stream Management
The Streams feature provides a robust interface for monitoring, analyzing, and managing real-time data streams within your application. With a suite of specialized tabs, Streams empowers users to gain deep insights into stream processing, performance, and consumer activity.

- [Stream Management]({{page page='nuxeo-admin-console-streams'}})


## Going Further

Additional management options are not yet exposed into the admin console and are only available at this stage using the [management REST API endpoint]({{page space='rest-api' version='1' page='management-endpoint'}}). Please refer to the documentation for an exhaustive list.

## Nuxeo Admin Console Release Notes

Discover what's new on Nuxeo Admin Console in the 
- [Release Notes]({{page page='admin-console-release-notes'}})