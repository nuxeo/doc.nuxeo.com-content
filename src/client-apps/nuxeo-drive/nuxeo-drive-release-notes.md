---
title: Release Notes
description: Release notes for Nuxeo Drive.
tree_item_index: 700
review:
  comment: 'release'
  date: '2021-08-13'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 5.2.7**

**Status**: <font color="#ff0000">**Beta**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/5.2.7.md)

## General

### Improvements

#### Better Handle Failed Migrations

Thanks to this improvement, following a failed migration, the application will automatically downgraded to the previous working version and will not allow to upgrade to the problematic version anymore. But it will allow to upgrade to the next next version.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2534](https://jira.nuxeo.com/browse/NXDRIVE-2534).

## Direct Transfer

### Improvements

#### Bulk Add Documents From File Explorer

You can now bulk add files and/or folders from your file explorer.
To do so, select multiple documents, do a right click > **Upload content**. The Direct transfer popup will open with the list of your documents selected.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2157](https://jira.nuxeo.com/browse/NXDRIVE-2157).

#### Rethink the New Remote Folder Capability

This is a first task of a major improvement on Direct Transfer: the selection of the document type when launching a transfer of documents.</br>
With this first ticket, when selecting the path of the target remote folder, with a right-click on the tree, you have a user action **Add a new folder** that asks for the folder name and the folder type. For the moment, the folder type is set to **Automatic**, the selection will come in another iteration.

The Epic is available [here](https://jira.nuxeo.com/browse/NXDRIVE-1999) for more information.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2666](https://jira.nuxeo.com/browse/NXDRIVE-2666).

## Download Links

- [GNU/Linux binary](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-5.2.7-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-5.2.7.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-5.2.7.exe)
