---
title: Release Notes
description: Release notes for Nuxeo Drive.
tree_item_index: 700
review:
  comment: 'release'
  date: '2022-09-29'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 5.3.1**

**Status**: <font color="#0066ff">**Release**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/5.3.1.md)

## General

This is a bugfix release.

### Prefix Synchronized Folder Name

In this release we took the decision to always prefix the synchronized folder name, whether there's a duplicate or not, it will always be prefixed "Domain - Workspaces - My workspace". 

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2800](https://jira.nuxeo.com/browse/NXDRIVE-2800) and [NXDRIVE-2830](https://jira.nuxeo.com/browse/NXDRIVE-2830).

### Handling of Special and Non-english Characters in Document Names

Special characters are now correctly handled in Nuxeo Drive, whether it's in your local sync folder or Direct Transfer screen. 

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2764](https://jira.nuxeo.com/browse/NXDRIVE-2764).

## Direct Edit 

### Review the Direct Edit Flow 

This release brings a huge improvement on the Direct Edit flow, main issues fixed are about the lock behavior and the notifications.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2125](https://jira.nuxeo.com/browse/NXDRIVE-2125).

## UI 

### Synchronization Icons on Local Drive Folder 

A bug was preventing the sync icons to be correctly displayed on your local sync folder, it's now fixed. 

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2772](https://jira.nuxeo.com/browse/NXDRIVE-2772).


## Download Links

- [GNU/Linux binary](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-5.3.1-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-5.3.1.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-5.3.1.exe)
