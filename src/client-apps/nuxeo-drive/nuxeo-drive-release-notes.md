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

Welcome to the Release Notes for **Nuxeo Drive 5.3.0**

**Status**: <font color="#ff0000">**Beta**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/5.3.0.md)

## General

### New feature: Document Type Selection

A new feature **Document type selection** has been added to the **Features** tab that can be enabled or disabled. 
This feature is adding 2 new fields on the direct transfer screen to let you choose the type of folder(s) and/or file(s) you are about to transfer as Web UI is doing. 
These fields are updating depending on your access rights and the remote path you are navigating in. 

{{#> callout type='warning' }}
Once this feature enabled, if you want to downgrade to a previous version of Nuxeo Drive, make sure to remove the feature `feature_document_type_selection` from your `config.ini` file. 
{{/callout}}

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-1999](https://jira.nuxeo.com/browse/NXDRIVE-1999).

### Support of Self-Signed Certificates

An issue was preventing the support of self-signed certificates when adding new account, it's now fixed. 

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2779](https://jira.nuxeo.com/browse/NXDRIVE-2779).


## Download Links

- [GNU/Linux binary](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.3.0-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.3.0.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.3.0.exe)
