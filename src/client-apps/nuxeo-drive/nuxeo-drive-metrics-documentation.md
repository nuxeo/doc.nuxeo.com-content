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

{{#> callout type='note' }}
Most metrics are sent in real-time, directly attached to the request made against the appropriate endpoint or operation.

Some of them are sent asynchronously to the /site/api/v1/me endpoint every 15 minutes (default value). This can be changed with the custom-metrics-poll-interval option (exprimed in seconds).

That asynchronous process can be disabled through the configuration using the [custom-metrics](https://doc.nuxeo.com/client-apps/nuxeo-drive/#custom-metrics) option.
{{/callout}}

# HTTP Headers

Custom metrics are sent under JSON format into two distinct headers that are `NX-metric-drive-global` and `NX-metric-drive-request`.

## `NX-metric-drive-global`

This header is sent for each and every requests to the platform and contains generic information about the Nuxeo Drive installation, configuration and operating system.

### Available Metrics

- `execution.locale`: Drive selected language.
- `execution.profile`: Profile of execution (`private` for qa/dev/sources otherwise `public`).
- `execution.session.uid`: Unique uuid generated at Drive startup.
- `installation.type`: Installation type (`system-wide` or `user-only`).
- `metrics.custom`: Custom metrics are enabled.
- `metrics.ga`: Google Analytics is enabled.
- `metrics.sentry`: Sentry is enabled.
- `os.locale`: Operating System locale.
- `os.machine`: The machine type (e.g. `i386`).
- `updater.channel`: Current update channel.

## `NX-metric-drive-request`

This header is sent for specific requests only and contains usage and behaviour information about Nuxeo Drive features.

### Direct Edit

- `directEdit.conflict.hit` (async): A conflict has been encountered.
- `directEdit.error.count` (async): Number of errors during a file edition.
- `directEdit.recovery.hit` (async): A file has been recovered.
- `directEdit.save.count` (async): Number of save done while editing a file.

### Direct Transfer

- `directTransfer.duplicate.file.behavior`: File duplicate creation option (`create|ignore|override`).
- `directTransfer.option.newFolder`: A new remote folder is created.
- `directTransfer.session.number`: The session number.
- `directTransfer.session.status` (async): Final session status (`cancelled|done`).

### Synchronization

- `sync.action` (async): Event that triggered the transfer (`remotely_created|locally_modified|...`).
- `sync.error.label` (async): Lower-case error label.
- `sync.time` (async): Time between the event trigger and the end of the action, in nanoseconds.

### Other

- `app.crashed.hit` (async): The app crashed during the previous run.
- `app.crashed.trace` (async): The application crash stacktrace.
- `filters.syncRoot.count` (async): Synchronization roots count.

# Asynchronous Metrics

Some of the metrics are calculated asynchronously over a period of time and thus cannot be sent directly to the server.</br>
These metrics are sent to the `/site/api/v1/me` endpoint once calculated.
To avoid spamming the endpoint too much and causing performance issues, Nuxeo Drive sends these metrics in a batch every 15 minutes (default value). This can be changed with the "private" `custom-metrics-poll-interval` (in seconds) option.</br>
This process can be deactivated through the configuration using the [custom-metrics](https://doc.nuxeo.com/client-apps/nuxeo-drive/#custom-metrics) option.
