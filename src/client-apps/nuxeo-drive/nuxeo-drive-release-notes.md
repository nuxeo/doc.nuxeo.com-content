---
title: Release Notes
description: Release notes for Nuxeo Drive.
tree_item_index: 700
review:
  comment: ''
  date: '2021-05-21'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 5.2.1**

**Status**: <font color="#ff0000">**Beta**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/5.2.1.md)

## General

### Fixes

#### Amazon S3 Credentials Renewal

A regression introduced in previous versions that would break credentials renewal when using Amazon S3 direct upload capabilities was fixed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXPY-223](https://jira.nuxeo.com/browse/NXPY-223).

#### Better Partition Checks

We improved how a given local folder could be used for the synchronization content. New checks are more specifics and less restrictives.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2644](https://jira.nuxeo.com/browse/NXDRIVE-2644).

#### Database Management

Our Sentry usage showed lots of errors about "database or disk is full". After deep investigations, we hope the situation will now be better: temporary databases are now handled in memory (RAM) instead of a temporary folder. The later was the source of all reported problems were it may be limited in disk space and blocking our database actions while there are still enough disk space at the current location of those databases.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2646](https://jira.nuxeo.com/browse/NXDRIVE-2646).

### Improvements

#### Operations Check at Startup

Users were able to add an account using their credentials but for one reason or another they do not have enough rights to call `NuxeoDrive.*` automation operations. Such case is now well handled.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2647](https://jira.nuxeo.com/browse/NXDRIVE-2647).

#### Local Folder Button in Systray

The local folder icon in the system tray menu is now disabled when the synchronization is.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2651](https://jira.nuxeo.com/browse/NXDRIVE-2651).

## Direct Transfer

### Fixes

#### Using the Feature Right After Account Addition

When the synchronization is disabled, there was an issue that won't start transferring files when doing a Direct Transfer right after having added a new account. This is now fixed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2643](https://jira.nuxeo.com/browse/NXDRIVE-2643).

#### CSV Export Button

The CSV export button click area was not covering the CSV icon. One had to click on the right on the icon to apply the action. The click area is now correctly set.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2650](https://jira.nuxeo.com/browse/NXDRIVE-2650).

## Synchronization

### Improvements

#### Polished Disabled Sync Behavior

Following the work done on the version [5.2.0]({{page page='5.2.0-nuxeo-drive-release-notes'}}#the-synchronization-mechanism-is-now-a-feature) where the synchronization became a feature, we polished even more the behavior.

Now, when the synchronization is disabled, the application won't do anymore actions on the local folder (like checking its existence, checking extended attributes support, calling NuxeoDrive.* operations, ...).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2641](https://jira.nuxeo.com/browse/NXDRIVE-2641).

## Download Links

- [GNU/Linux binary](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.2.1-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.2.1.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.2.1.exe)
