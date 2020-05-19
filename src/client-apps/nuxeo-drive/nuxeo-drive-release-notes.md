---
title: Release Notes
description: Release notes for Nuxeo Drive.
tree_item_index: 700
review:
  comment: 'release'
  date: '2020-04-30'
  status: ok
---

Welcome to the Release Notes for **Nuxeo Drive 4.4.3**

**Status**: <font color="#0066ff">**Release**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/4.4.3.md)

## Fixes

In Nuxeo Drive [4.4.2]({{page version='' space='client-apps' page='442-nuxeo-drive-release-notes'}}), we upgraded the `psutil` module from 5.7.6 to 5.7.0.
Unfortunately, this version is crashing the application on some Windows machines.

The upgrade has been reverted.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2169](https://jira.nuxeo.com/browse/NXDRIVE-2169)
