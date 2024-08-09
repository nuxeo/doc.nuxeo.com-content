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

### What It Is

As a Nuxeo system administrator, the admin console is your go-to application to support your users on a daily basis and maintain your Nuxeo instance in production. Through an easy to use UI, it provides a full set of capabilities to leverage our [management REST API endpoints]({{page space='rest-api' version='1' page='management-endpoint'}}) tasks easily on individual documents and at scale. 

### What It Is NOT

- A monitoring and observability application. Nuxeo provides a wide set of [metrics for observability]({{page page='observability'}}) that leverage market standards, allowing you to leverage your monitoring tool of choice for this use case.

- A functional administration tool. Options like managing users or vocabularies for instance can be achieved from [Nuxeo Web UI]({{page space='userdoc' page='administration'}}). 

- A developer focused application. Applications like our [browser extension for developers]({{page page='nuxeo-dev-tools-extension'}}) and [Nuxeo CLI]({{page page='nuxeo-cli'}}) help with that.

- A way to get the logs of your instance. Reasons for that:
  - Since we run nuxeo apps as a cluster, we need to aggregate all the logs from all the machines in a single place, including logs from services like [Nuxeo Enhanced Viewer]({{page page='nuxeo-enhanced-viewer'}}). A single Nuxeo instance cannot get this information, so the admin console cannot handle that. Their display is managed in the [cloud console]({{page space='nuxeo-cloud' page='nuxeo-cloud-customer-console'}}) for our cloud customers, self-managed customers can leverage their observability tool of choice.
  - Logs configuration will usually vary depending on the type of environment. The [cloud console]({{page space='nuxeo-cloud' page='nuxeo-cloud-customer-console'}}) offers this option.

## Functional Overview

Once installed, the Nuxeo admin console can be accessed using a dedicated URL: `[YOUR-NUXEO-SERVER-URL/nuxeo]/nuxeoadmin`. Only `administrators` can access this interface, using an account without adminstrator level will be met with an error message.

![]({{file name='admin-console-access-refused.png'}} ?border=true)





In its current iteration, the tool supports reindexing documents in Elasticsearch. In the future, more endpoints from the Management Endpoint will be exposed in the UI.