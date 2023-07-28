---
title: Release Notes
description: Release notes for Nuxeo Drive.
tree_item_index: 700
review:
  comment: 'release'
  date: '2023-08-28'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 5.3.2**

**Status**: <font color="#ff0000">**Beta**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/5.3.2.md)

## General

This is a bugfix release.

### Auto-Restart

Before 5.3.2 version, it was necessary to manually restart Nuxeo Drive when upgrading version, it will now be automatically restarted!

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2363](https://jira.nuxeo.com/browse/NXDRIVE-2363).

### Systray Menu

The systray menu can quickly become very busy when using synchronization, you can now add a new configuration parameter `feature_systray_history` to decide the number of documents you want to be displayed in your systray, and do some clean up!

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2767](https://jira.nuxeo.com/browse/NXDRIVE-2767).

## Direct Transfer

### External Hardware Transfer

When transferring documents from an external hardware to your local sync folder, you may need to remove it at the middle of the transfer without being able to stop it correctly. You can now plug it back in and resume your transfer where you left it.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2844](https://jira.nuxeo.com/browse/NXDRIVE-2844).


## Download Links

- [GNU/Linux binary](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.3.2-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.3.2.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.3.2.exe)
