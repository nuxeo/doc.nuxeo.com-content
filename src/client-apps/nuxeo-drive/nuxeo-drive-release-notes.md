---
title: Release Notes
description: Release notes for Nuxeo Drive.
tree_item_index: 700
review:
  comment: 'release'
  date: '2021-05-21'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 5.2.2**

**Status**: <font color="#ff0000">**Beta**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/5.2.1.md)

## General

### Fixes

#### [macOS] Opened Files

While trying to get the list of opened files, if the user closes one or more of them, then a silly error was fired and the list was not retrieved at all. We fixed the issue by doing a copy of that list as soon as possible, and then iterating on its items safely.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2684](https://jira.nuxeo.com/browse/NXDRIVE-2684).

#### [macOS] Start On Boot Option

If, for a reason or another, the user does not have rights to write in their own local folders (typically the $HOME/Library/LaunchAgents folder), then the app cannot be registered to start on boot.
We mitiged the issue by simply logging a warning as there is not much more that can be done.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2670](https://jira.nuxeo.com/browse/NXDRIVE-2670).

### Improvements

#### Add Account Screen

A visual improvement has been done on the Add account screen, making it more responsive to longs server urls or local paths.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2634](https://jira.nuxeo.com/browse/NXDRIVE-2634).

#### Sentry Enablement as an Option

A new switch has been added in the Advanced Settings tab allowing the user to enable/disable errors reporting through Sentry.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2678](https://jira.nuxeo.com/browse/NXDRIVE-2678).

## Direct Edit

### Improvements

#### Handling of Files With No Associated Application in Direct Edit

A notification message will now be shown if no associated application is found when opening a file through Direct Edit.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-1995](https://jira.nuxeo.com/browse/NXDRIVE-1995).

#### Handling of Invalid Data From Server in Direct Edit

An error notification will now be shown if the server returns invalid data when opening a file through Direct Edit.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2658](https://jira.nuxeo.com/browse/NXDRIVE-2658).

#### Better Experience

The Direct Edit experience has been made more robust by better handling502 (Bad Gateway), 503 (Service Unavailable) and 504 (Gateway Timeout) errors during document locking/unlocking.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2681](https://jira.nuxeo.com/browse/NXDRIVE-2681).

## Synchronization

### Fix

#### Windows and UNC Names

We fixed an issue when local trashing files was not working with UNC names.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2640](https://jira.nuxeo.com/browse/NXDRIVE-2640).

#### Synchronization Feature State

When upgrading from Nuxeo Drive < 5.2.1 to 5.2.1, users may see that the synchronization feature is disabled, even if they did not explicitly disabled it.
We restored the correct behavior.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2686](https://jira.nuxeo.com/browse/NXDRIVE-2686).

## Download Links

- [GNU/Linux binary](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.2.2-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.2.2.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.2.2.exe)
