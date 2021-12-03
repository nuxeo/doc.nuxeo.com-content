---
title: Release Notes
description: Release notes for Nuxeo Drive.
tree_item_index: 700
review:
  comment: 'release'
  date: '2021-12-03'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 5.2.8**

**Status**: <font color="#0066ff">**Release**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/5.2.8.md)

## Direct Transfer

### Fix

#### Direct Transfer Popup Behavior

On Direct Transfer screen, when the popup is in full-screen mode you can now minimize it by pressing the Esc button on your keyboard.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2737](https://jira.nuxeo.com/browse/NXDRIVE-2737).

## Synchronization

### Fix

#### Synchronize Folders with Special Characters

A bug was found on Windows when synchronizing folder with dot at the end of the filename, it was considered as an incorrect file extension. Nuxeo Drive now sanitizes the value (name or title) used to create a folder during the synchronization.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2751](https://jira.nuxeo.com/browse/NXDRIVE-2751).


## Download Links

- [GNU/Linux binary](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-5.2.8-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-5.2.8.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-5.2.8.exe)
