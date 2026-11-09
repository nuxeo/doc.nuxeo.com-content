---
title: Release Notes
description: Release notes for Nuxeo Drive.
tree_item_index: 700
review:
  comment: 'beta'
  date: '2026-11-09'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 8.0.0**

**Status**: <font color="##ff0000">**Beta**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/8.0.0.md)

## What's New:

## Improvements

### Schedule uploads for later
Direct Transfers now let you choose when your uploads begin. Select Upload Later to set a date and time, or Upload Now to start right away.

### Select multiple files and folders together
The new Add Items dialog lets you select multiple files and folders in one place, making it easier to prepare your Direct Transfers.

### Review your selection before uploading
Use Review Selection to check your files and folders before starting a Direct Transfer. Browse folder contents, search by name, and remove anything you don’t want to upload.

### Updated desktop framework
Nuxeo Drive now uses PySide instead of PyQt to power its desktop interface.

### Clearer synchronization progress
File synchronization now shows a progress indicator, making it easier to track uploads and see when files are syncing.

## Bug Fixes

### Files stay removed from your local folder
Fixed an issue where files could reappear locally after you removed them and chose to keep them only on the server.

### Direct Downloads work on Linux
Fixed an issue that prevented files from downloading when using Download with Nuxeo Drive on Linux.

### Pause and resume synchronization
Fixed an issue where the Pause and Resume controls in the Activity Feed did not respond during synchronization.

### File conflicts are easier to find
Fixed an issue where clicking a conflict notification could open an empty view instead of showing the affected files.

### Correct sync activity when switching accounts
Switching accounts now shows only the selected account’s files and sync activity, rather than information from the previous account.

## Download Links

- [GNU/Linux binary](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-8.0.0-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-8.0.0.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-8.0.0.exe)
