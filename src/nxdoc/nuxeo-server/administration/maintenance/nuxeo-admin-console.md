---
title: Nuxeo Admin Console
description: The Nuxeo admin console provides a dedicated UI for system administrators to get an overview of the system and perform common tasks like reindexing documents.
review:
    comment: ''
    date: '2024-08-08'
    status: ok
labels:
    - bchauvin
toc: true
tree_item_index: 1050
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

![]({{file name='admin-console-access-refused.png'}} ?border=true)

### Homepage

The homepage provides a quick view into the essential information of your Nuxeo instance:
* Probes and their status to see if all components are running
* Version information and cluster enablement information

![]({{file name='admin-console-homepage.png'}} ?border=true)

### Document Reindexing

The `Elasticsearch Reindex` menu lets you reindex documents with Elasticsearch or OpenSearch. You can reindex documents:
- Individually
- From a folder: all documents in that folder and below are reindexed
- From a [NXQL query]({{page page='NXQL'}})

When using the `Folder` and `NXQL Query` options, the admin console warns you about the consequences and the expected duration of this action.

![]({{file name='admin-console-reindex.png'}} ?border=true)

### Monitoring an Action

Any action triggered through the admin console uses the [bulk action framework]({{page page='bulk-action-framework'}}), making them highly scalable. Once an action is triggered, a confirmation is provided with a bulk action command id.

![]({{file name='admin-console-action-launched.png'}} ?border=true)

You can click on the `See Status` button to follow how the bulk action is proceeding.

In addition, the command id can be copied to retrieve its status later using the `Bulk Action Monitoring` menu. Note that the bulk action id won't be remembered, so you may want to store it in a safe place if you intend to monitor it later on.

![]({{file name='admin-console-bulk-action-monitoring.png'}} ?border=true)

### Checking the Status of System Components

The homepage provides a concise list of [probes]({{page page='health-check'}}#probes) to check the health of the various system components. For a full list with detailed information and the possibility to launch a check on them individually, you can head to the `Probes` menu.

![]({{file name='admin-console-probes-homepage.png'}} ?border=true)

![]({{file name='admin-console-probes.png'}} ?border=true)

## Going Further

Additional management options are not yet exposed into the admin console and are only available at this stage using the [management REST API endpoint]({{page space='rest-api' version='1' page='management-endpoint'}}). Please refer to the documentation for an exhaustive list.
