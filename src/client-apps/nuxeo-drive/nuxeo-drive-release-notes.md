---
title: Release Notes
description: Release notes for Nuxeo Drive.
tree_item_index: 700
review:
  comment: 'release'
  date: '2023-12-13'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 5.4.0**

**Status**: <font color="#0066ff">**Release**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/5.4.0.md)

## Direct Transfer

### Large File Upload

When transferring large file, it may take update to few days or the transfer may get blocked, you now have info on the popup to let you know if the transfer is still happening or if an error occurred. If an error occurred, the transfer would resume by itself.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2711](https://jira.nuxeo.com/browse/NXDRIVE-2711).


## Core 

### Log Sanitization

All sensitive information that weren’t necessary for Drive usage or debug were removed from logs. 

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2828](https://jira.nuxeo.com/browse/NXDRIVE-2828).

### Account URL Format

When adding new account, some URLs weren’t correctly formatted, we added more checks and a popup will be displayed if the format isn’t correct. 

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2861](https://jira.nuxeo.com/browse/NXDRIVE-2861).


## Download Links

- [GNU/Linux binary](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-5.4.0-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-5.4.0.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-5.4.0.exe)
