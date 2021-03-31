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

Some of these metrics are marked with the `ASYNC` tag, meaning that they are sent in a specific process to avoid spamming the platform with too many requests. More documentation about this can be found in the [asynchronous metrics](#asynchronous-metrics) section.


# HTTP Headers

Custom metrics are sent under JSON format into two distinct headers that are `NX-metric-drive-global` and `NX-metric-drive-request`.

## `NX-metric-drive-global`

This header is sent for each and every requests to the platform and contains generic information about the Nuxeo Drive installation, configuration and operating system.

### Available Metrics

#### `installation.type`

Description: TBD
- Example: `null`
- type: `str`

#### `execution.profile`

Description: TBD
- type: `str`
- Example: `null`

#### `execution.session.uid`

Description: TBD
- type: `str`
- Example: `null`

#### `metrics.custom`

Description: TBD
- type: `int`
- Example: `null`

#### `metrics.ga`

Description: TBD
- type: `int`
- Example: `null`

#### `metrics.sentry`

Description: TBD
- type: `int`
- Example: `null`

#### `updater.channel`

Description: TBD
- type: `str`
- Example: `null`

#### `execution.locale`

Description: TBD
- type: `str`
- Example: `null`

#### `os.machine`

Description: TBD
- type: `str`
- Example: `null`

#### `os.locale`

Description: TBD
- type: `str`
- Example: `null`

## `NX-metric-drive-request`

This header is sent for specific requests only and contains usage and behaviour information about Nuxeo Drive features.

### Direct Edit

#### `directEdit.conflict.hit`

Description: TBD
- type: `int`
- Example: `null`

#### `directEdit.recovery.hit`

Description: TBD
- type: `int`
- Example: `null`

#### `directEdit.error.count`

Description: TBD
- type: `int`
- Example: `null`

#### `directEdit.save.count`

Description: TBD
- type: `int`
- Example: `null`


### Direct Transfer

#### `directTransfer.session.number`

Description: TBD
- type: `int`
- Example: `null`

#### `directTransfer.duplicate.file.behavior`

Description: TBD
- type: `str`
- Example: `null`

#### `directTransfer.option.newFolder`

Description: TBD
- type: `int`
- Example: `null`

#### `directTransfer.session.status`

Description: TBD
- type: `str`
- Example: `null`

### Synchronization

#### `sync.error.label`

Description: TBD
- type: `str`
- Example: `null`

#### `sync.action`

Description: TBD
- type: `int`
- Example: `null`

#### `sync.time`

Description: TBD
- type: `int`
- Example: `null`


### Other

#### `app.crashed.hit`

Description: TBD
- type: `int`
- Example: `null`

#### `app.crashed.trace`

Description: TBD
- type: `str`
- Example: `null`

#### `filters.syncRoot.count`

Description: TBD
- type: `int`
- Example: `null`

# Asynchronous Metrics

Some of the metrics are calculated asynchronously over a period of time and thus cannot be sent directly to the server.</br>
These metrics are sent to the `/site/api/v1/me` endpoint once calculated.
To avoid spamming the endpoint too much and causing performance issues, Nuxeo Drive sends these metrics in a batch every 15 minutes (not configurable).</br>
This process can be deactivated through the configuration using the [custom-metrics](https://doc.nuxeo.com/client-apps/nuxeo-drive/#custom-metrics) option.
