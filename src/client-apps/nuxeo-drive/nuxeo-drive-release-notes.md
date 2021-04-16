---
title: Release Notes
description: Release notes for Nuxeo Drive.
tree_item_index: 700
review:
  comment: ''
  date: '2021-04-15'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 5.1.1**

**Status**: <font color="#ff0000">**Beta**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/5.1.1.md)

## Important Changes

### Windows Certificate Renewal

The certificate used to ship Windows binaries has been renewed. For a small amount of time, users may see the Windows Smart Screen alert as below:

![]({{file name='windows-smart-screen-nuxeo-drive-5.1.1.png' page='nuxeo-drive-release-notes'}} ?w=350)

This is a temporary warning and it is completely safe to use Nuxeo Drive.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2577](https://jira.nuxeo.com/browse/NXDRIVE-2577).

## Improvements

### Direct Transfer

#### End of Session Notification Clickable

Once a session of Direct Transfer is done, the notification has been made clickable and now redirects the user to the destination folder in the browser.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2427](https://jira.nuxeo.com/browse/NXDRIVE-2427).

#### Updated Permission Check

The atomic permission `AddChildren` is now used instead of the `ReadWrite` permission group to define the possible upload destinations in Direct Transfer.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2572](https://jira.nuxeo.com/browse/NXDRIVE-2572).

### Idempotent Requests

To improve uploads resiliency, we introduced idempotent requests for several calls.
Improvement thanks to such requests are no more duplicate creations or missing on the server when uploading a lot of files; ensuring the app will not create duplicates after a hard crash, and more generally it will make the upload experience more fluid.

As the performances impact is not yet known, we put the feature behind the [`use-idempotent-requests`]({{page page='nuxeo-drive'}}#use-idempotent-requests) option, and it is disabled by default. We will work on benchmarks in the coming weeks and if the feature is safe enough, it will be enabled by default in a future release.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2463](https://jira.nuxeo.com/browse/NXDRIVE-2463).

## Fixes

### S3 Direct Upload

We improved uploads robustness when going through S3 direct upload in several situations:
- when a non-chunked upload fails because of expired credentials;
- when refreshed credentials are still expired because of a misconfiguration of the ARN;
- when the original `batchId` is removed from the transient store while the upload is still ongoing on the S3 side.
These use cases will now restart the transfer from the ground because there is no possibility to continue an upload with a different batchId.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2590](https://jira.nuxeo.com/browse/NXDRIVE-2590), [NXDRIVE-2595](https://jira.nuxeo.com/browse/NXDRIVE-2595) and [NXDRIVE-2598](https://jira.nuxeo.com/browse/NXDRIVE-2598).

### macOS Auto-Update

By default, the app is installed in the `/Applications` folder. It implies several issues because that folder is protected and one needs to enter a password to apply changes. We found it blocked several users when the app is auto-updating itself.

A better location for apps is the `$HOME/Application` folder. It is not password-protected and allows separate apps for all users from ones from the current user.

Starting with Nuxeo Drive 5.1.1, the auto-updater will automatically move the app from `/Applications` to `$HOME/Applications`. It should be transparent for the user.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2163](https://jira.nuxeo.com/browse/NXDRIVE-2163).


### Fixed Conflicted Documents With Non-Standard Digest

In Nuxeo Drive [5.0.0]({{page page='5.0.0-nuxeo-drive-release-notes'}}#handle-documents-with-non-standard-digest) we improved the handling of documents having non-standard digests. At the time we did not take care of conflicts for such documents, this is now done.

The conflict resolution will be delayed until a valid digest will be sent by the server.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2587](https://jira.nuxeo.com/browse/NXDRIVE-2587).

## Download Links

- [GNU/Linux binary](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.1.1-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.1.1.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.1.1.exe)
