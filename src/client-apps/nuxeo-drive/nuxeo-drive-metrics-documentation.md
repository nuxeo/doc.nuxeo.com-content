---
title: Metrics
description: Nuxeo Drive custom metrics documentation.
tree_item_index: 900
review:
  comment: 'release'
  date: '2021-03-30'
  status: ok
toc: true
---

Starting from Nuxeo Drive 5.1.0, usage metrics have been added using custom HTTP headers. Those metrics are sent to the Nuxeo Platform exclusively when the application calls specific operations or endpoints.

On this page, you will find the details about these metrics and their content.

{{#> callout type='note' }}
Most metrics are sent in real-time, directly attached to the request made against the appropriate endpoint or operation.

Some of them are sent asynchronously to the `/site/api/v1/me` endpoint every 15 minutes (default value). This can be changed with the `custom-metrics-poll-interval` option (expressed in seconds).

That asynchronous process can be disabled through the configuration using the [custom-metrics](https://doc.nuxeo.com/client-apps/nuxeo-drive/#custom-metrics) option.
{{/callout}}

Custom metrics are sent under JSON format into two distinct headers that are:</br> [`NX-metric-drive-global`](#nx-metric-drive-global) and [`NX-metric-drive-request`](#nx-metric-drive-request).

## `NX-metric-drive-global`

This header is sent for each request to the platform and contains generic information about the Nuxeo Drive installation, configuration and operating system.

### Available Metrics

- `execution.locale`: Selected language in Nuxeo Drive settings.
- `execution.profile`: Profile of execution (`private` for QA/dev people otherwise `public`).
- `execution.session.uid`: Unique identifier generated at Nuxeo Drive startup.
- `installation.type`: Installation type (`system-wide` or `user-only`).
- `metrics.custom`: Custom metrics are enabled.
- `metrics.ga`: Google Analytics is enabled.
- `metrics.sentry`: Sentry is enabled.
- `os.locale`: Operating System locale.
- `os.machine`: The machine type (e.g. `i386`).
- `updater.channel`: Current update channel.

## `NX-metric-drive-request`

This header is sent for specific requests only and contains usage and behavior information about Nuxeo Drive features.

### Direct Edit

- `directEdit.conflict.hit` (async): A conflict has been encountered while sending updates to the server.
- `directEdit.error.count` (async): Errors count occured while uploading changes to the server.
- `directEdit.recovery.hit` (async): The file has been recovered from a previous Direct Edit session.
- `directEdit.save.count` (async): Saves count done while editing the file, e.g.: how many times the user hit CTRL-S or COMMAND-S.

### Direct Transfer

- `directTransfer.duplicate.file.behavior`: File duplicate creation option (`create|ignore|override`).
- `directTransfer.option.newFolder`: The new remote folder option was used for that session.
- `directTransfer.session.number`: The session number.
- `directTransfer.session.status` (async): Final session status (`cancelled|done`).

### Synchronization

- `sync.action` (async): Event that triggered the transfer (`remotely_created|locally_modified|...`).
- `sync.error.label` (async): Lower-cased error label that happened when processing the document.
- `sync.time` (async): Time between the event trigger and the end of the action, in nanoseconds.

### Other

- `app.crashed.hit` (async): The app crashed during the previous run.
- `app.crashed.trace` (async): The application crash stack trace, when available.
- `filters.syncRoot.count` (async): Enabled synchronization roots count.
