---
title: Nuxeo Drive metrics
description: Nuxeo Drive custom metrics documentation.
tree_item_index: 900
review:
  comment: 'release'
  date: '2021-03-30'
  status: ok
toc: true
---

Starting with Nuxeo Drive 5.1.0 usage metrics have been added using custom HTTP headers. Those metrics are sent to the Nuxeo platform exclusively when the application calls specific operations or endpoints.

On this page, you will find the details about these metrics and their content.

---

Some of these metrics are marked with the `ASYNC` tag, meaning that they are sent in a specific process to avoid spamming the platform with too many requests. More documentation about this can be found in the [asynchronous metrics](#asynchronous-metrics) section.

---

# HTTP Headers

Custom metrics are sent under JSON format into two distinct headers that are `NX-metric-drive-global` and `NX-metric-drive-request`.

## `NX-metric-drive-global`

This header is sent for each and every requests to the platform and contains generic information about the Nuxeo Drive installation, configuration and operating system.

### Available Metrics

- `installation.type`: description


- `execution.profile`: description


- `execution.session.uid`: description


- `metrics.custom`: description


- `metrics.ga`: description


- `metrics.sentry`: description


- `updater.channel`: description


- `execution.locale`: description


- `os.machine`: description


- `os.locale`: description


## `NX-metric-drive-request`

This header is sent for specific requests only and contains usage and behaviour information about Nuxeo Drive features.

### Direct Edit

- `directEdit.conflict.hit`: description


- `directEdit.recovery.hit`: description


- `directEdit.error.count`: description


- `directEdit.save.count`: description



### Direct Transfer

- `directTransfer.session.number`: description


- `directTransfer.duplicate.file.behavior`: description


- `directTransfer.option.newFolder`: description


- `directTransfer.session.status`: description


### Synchronization

- `sync.error.label`: description


- `sync.action`: description


- `sync.time`: description



### Other

- `app.crashed.hit`: description


- `app.crashed.trace`: description


- `filters.syncRoot.count`: description


# Asynchronous Metrics

Some of the metrics are calculated asynchronously over a period of time and thus cannot be sent directly to the server.</br>
These metrics are sent to the `/site/api/v1/me` endpoint once calculated.
To avoid spamming the endpoint too much and causing performance issues, Nuxeo Drive sends these metrics in a batch every 15 minutes (default value). This can be changed with the "private" `custom-metrics-poll-interval` (in seconds) option.</br>
This process can be deactivated through the configuration using the [custom-metrics](https://doc.nuxeo.com/client-apps/nuxeo-drive/#custom-metrics) option.
