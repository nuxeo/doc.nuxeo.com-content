---
title: Release Notes
description: Release notes for Nuxeo Drive.
tree_item_index: 700
review:
  comment: 'release'
  date: '2021-07-29'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 5.2.5**

**Status**: <font color="#ff0000">**Beta**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/5.2.5.md)

## General

### Fixes

#### Restored Support for macOS 10.13

The support for macOS 10.13 was accidentally lost after the Nuxeo Drive 5.2.1 release. The application build process has been reviewed and the support for this version has been restored.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2724](https://jira.nuxeo.com/browse/NXDRIVE-2724).

#### `ca-bundle` Option Ignored When No SSL Verification Done

Previously, the `ca-bundle` option was set to `None` or removed when the value of `ssl-no-verify` was changed at runtime. This behaviour was bad as it could cause errors and forced the user had to manually set the option again when re-enabling the SSL verification.

To prevent this situation, the `ca-bundle` option is now ignored and never changed by the application when the ssl-no-verify option is set to `True`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2725](https://jira.nuxeo.com/browse/NXDRIVE-2725).

### Improvements

#### Added Proxy Settings Forwarding When Using OAuth 2

The proxy settings are now forwarded when using OAuth 2 authentication, allowing the application to fetch the OpenID URL, when given and when the user is behind a company proxy.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2703](https://jira.nuxeo.com/browse/NXDRIVE-2703).

## Direct Edit

### Fixes

#### Local Folder with UNC Names

Previously, the Direct Edit feature was not able to lock a document when the local folder was a UNC name. This was caused by the fact that UNC names do not support extended attributes and Direct Edit is heavily relying on them.

This issue has been fixed by using a temporary folder for Direct Edit when a UNC path is specified but it made document recovery in Direct Edit impossible.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2702](https://jira.nuxeo.com/browse/NXDRIVE-2702).

### Fix Behavior on Lock Document Configuration

In some case, the advanced configuration to never lock automatically a document in Direct Edit was ignored by the application and the document was locked even when told not to do so.

This issue has been fixed and the document won't be locked anymore when the option is set.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2699](https://jira.nuxeo.com/browse/NXDRIVE-2699).

## Synchronization

### Fix

#### Handling of Synchronization Roots to Prevent Name Conflicts

In the case that a client use templates (automated folder structure), they may have many folders with the same name. Previously, as soon as one of those folders was synchronized, it became not possible to synchronize another one as it created conflicts.

Synchronization roots local folders names now includes the name of the remote parents folders, making them more unique and preventing conflicts errors.
The option `sync-root-max-level` has been added to configure this new behaviour.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2694](https://jira.nuxeo.com/browse/NXDRIVE-2694).


## Download Links

- [GNU/Linux binary](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.2.5-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.2.5.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.2.5.exe)
