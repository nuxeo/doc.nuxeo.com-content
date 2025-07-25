---
title: Release Notes
description: Release notes for Nuxeo Drive.
tree_item_index: 700
review:
  comment: 'release'
  date: '2024-04-25'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 5.6.0**

**Status**: <font color="##ff0000">**Beta**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/5.6.0.md)

## Web UI – Native Integration of Direct Transfer

**Feature Overview:**
As of Web UI 3.1.21 for LTS 2023 and 2025.6.0 for LTS 2025, the Direct Transfer capability is now natively integrated into the Web UI. This enhancement allows users to upload documents directly from the Web UI without launching the Nuxeo Drive application.

**Key Improvements:**
* Seamless Upload Experience: Users can initiate Direct Transfer operations directly from any folderish document in the Web UI.
* New Action Button: A dedicated action button is now available on all folderish documents. When selected, it opens a pre-filled Direct Transfer popup with the current folder path.
* Simplified Workflow: Users only need to select the document(s) to upload and start the transfer—no additional navigation required.

**Benefits:**
* Eliminates the need to switch between Web UI and Nuxeo Drive.
* Reduces interaction overhead and improves user productivity.
* Provides a more intuitive and efficient document upload process.

**Requirements:**
* Nuxeo Drive: Version 5.6.0 or higher
* Web UI: Version 3.1.21 for LTS 2023 and 2025.6.0 for LTS 2025
* Permissions: Edit rights on the target folderish document

Please read the [related documentation]({{page page='nuxeo-drive-direct-transfer'}}#direct-transfer-integration-in-web-ui) for more information.

## Upgrade to Python 3.13.1 

We have upgraded from Python 3.9.5 to Python 3.13.1 

## Download Links

- [GNU/Linux binary](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.6.0-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.6.0.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.6.0.exe)
