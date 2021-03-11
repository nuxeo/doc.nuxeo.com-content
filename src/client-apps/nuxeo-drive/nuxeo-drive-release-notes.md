---
title: Release Notes
description: Release notes for Nuxeo Drive.
tree_item_index: 700
review:
  comment: ''
  date: '2021-03-02'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 5.1.0**

**Status**: <font color="#ff0000">**Beta**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/5.1.0.md)

## Important Changes

### Direct Transfer

#### Status Change

The Direct Transfer feature is now enabled by default.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2537](https://jira.nuxeo.com/browse/NXDRIVE-2537)

#### CSV Export Capability for Direct Transfer Sessions

It is now possible for the user to export a Direct Transfer session to a CSV file. When a session is completed, a link will appear, allowing the user to generate an export on demand.
The created CSV file contains default filled fields that make it directly usable in the Nuxeo CSV importer.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2382](https://jira.nuxeo.com/browse/NXDRIVE-2382)

## Improvements

### Improved Stability of S3 Direct Uploads

We fixed a tricky issue when S3 direct upload was enabled for the synchronization. It was generating false conflicts and duplicates documents errors.
The synchronization is now fully "safe", just as the synchronization using the default upload provider.

We also improved non-chunked S3 direct uploads by removing one HTTP call for each and every upload.

See [NXPY-204](https://jira.nuxeo.com/browse/NXPY-204) and [NXPY-205](https://jira.nuxeo.com/browse/NXPY-205) for additional details.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2479](https://jira.nuxeo.com/browse/NXDRIVE-2479)

## Fixes

### Preventing Crashes

The issue was not visible quickly but when Drive was running a long time with a lot of synchronization actions. Each thread was opening multiple connections to the SQLite database, but they were never released. Resulting in an increase of the number of opened file descriptors and it was consuming more and more memory (RAM). Both situations were ending with a hard crash: the OS was killing the application in both cases.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2523](https://jira.nuxeo.com/browse/NXDRIVE-2523)

## Download Links

- [GNU/Linux binary](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.1.0-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.1.0.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.1.0.exe)
