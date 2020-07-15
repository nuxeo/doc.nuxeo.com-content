---
title: Release Notes
description: Release notes for Nuxeo Drive.
tree_item_index: 700
review:
  comment: 'release'
  date: '2020-04-30'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 4.4.4**

**Status**: <font color="#ff0044">**BETA**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/4.4.4.md)

## Important Changes

### Direct Transfer

The Direct Transfer has been re-enabled as a BETA feature, it can be activated through the Features tab (see the following paragraph about the [Feature tab](#new-features-tab)).

The Direct Transfer feature [leverages the FileManager](https://jira.nuxeo.com/browse/NXDRIVE-2065) for files upload.

#### Transfer Window

Once a transfer is launched, a popup shows the list of all the files with their metrics (progress bar, file name, transferred data).

Direct Transfers can be paused, resumed and cancelled through this interface. A link to the remote folder is available in front of each file.

![]({{file name='direct-transfer-popup.png'}})

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA tickets [NXDRIVE-2208](https://jira.nuxeo.com/browse/NXDRIVE-2208), [NXDRIVE-1926](https://jira.nuxeo.com/browse/NXDRIVE-1926) and [NXDRIVE-2219](https://jira.nuxeo.com/browse/NXDRIVE-2219).

#### Duplicates Management

Duplicates management has been temporarily disabled on the client-side. It now only relies on the FileManager to decide what to do. This is the same behavior as when creating a new file on Web-UI: a new document will be created each time, generating possible duplicates.

A better duplicates management is being written and will be shipped within a future version.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2235](https://jira.nuxeo.com/browse/NXDRIVE-2235)

### Disable Temporarily S3 Capability

The Amazon S3 batch handler has been completely turned off until blocker bugs have been fixed (likely in the next release).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2226](https://jira.nuxeo.com/browse/NXDRIVE-2226)

### New Features Tab

A new Features tab has been added to the Settings.

This tab contains a list of switches for all features that may be activated/deactivated in one-click.</br>
When changing the state of a feature, the new user preferences are saved into the local configuration file, thus permitting their persistence.

![]({{file name='features-tab-drive.png'}})

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2138](https://jira.nuxeo.com/browse/NXDRIVE-2138)

## Improvements

### Direct Edit

#### Always Start a Fresh Download on Direct Edit

During a Direct Edit, it sometimes happened that the download failed for a number of reasons.
If the document was large enough to be downloaded by chunks, then an incomplete temporary file was saved.</br>
Trying another Direct Edit on that same document was resuming the download using the same temporary file and may cause an error and prevent the file from being opened. The user was not aware of this error as no notifications were displayed, and nothing was written in the logs.

The only way to fix this error was for the user to manually remove the temporary and restart a Direct Edit.

To prevent this issue from happening again, Drive now removes the previously downloaded file and does a fresh download of the document on each Direct Edit.

A similar issue was fixed at the same time, see [NXDRIVE-2116](https://jira.nuxeo.com/browse/NXDRIVE-2116).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2112](https://jira.nuxeo.com/browse/NXDRIVE-2112)

#### Direct Edit on Proxies

Direct Edit on proxies is now forbidden. Allowing it was too bad for both server and client sides as it was:

- filling up server logs with errors (see [NXDRIVE-2131](https://jira.nuxeo.com/browse/NXDRIVE-2131));
- filling up client logs (see [NXDRIVE-2131](https://jira.nuxeo.com/browse/NXDRIVE-2131));
- generating a huge amount of Sentry events, exploding our quota.

Finally, such a move was the next logical step after NXP-28497 where the Direct Edit button has been hidden for those documents.

This is a 2-part fix alongside [NXDRIVE-2131](https://jira.nuxeo.com/browse/NXDRIVE-2131).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2132](https://jira.nuxeo.com/browse/NXDRIVE-2132)

#### Orphaned Documents Should First Be Remotely Unlocked Before Being Cleaned Up

When the application was shut down while a Direct Edit session was ongoing, the edited document stayed locked on the server and the downloaded file was not removed.

When starting again, the application will now first retrieve the file's metadata to unlock the document on the server and then will locally clean up the orphaned file.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2129](https://jira.nuxeo.com/browse/NXDRIVE-2129)

#### Handle Corrupted Downloads in Direct Edit

During a Direct Edit, it may happen that the downloaded file ends up corrupted.
The download was aborted without informing the user of what happened and the Direct Edit cancelled.

The download is now retried multiple times when Drive detects such a case. On each and every try, the user will be informed of the error via a notification. If the download still fails after 3 tries, the user will be notified that Direct Edit is impossible on the targeted document.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-1786](https://jira.nuxeo.com/browse/NXDRIVE-1786)

### Translations

#### New language: Basque

Basque is now part of the available languages: the application and its installers are now translated to Basque.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2187](https://jira.nuxeo.com/browse/NXDRIVE-2187)

## Fixes

### Account Removal on macOS

The account removal was no more working on macOS. This is due to an API change of the Finder favorites management in latest Apple versions.

This is now fixed. Future regressions of that kind will be handled to still allow one to remove an account even if there was an error somewhere in the Apple-specific API call.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2206](https://jira.nuxeo.com/browse/NXDRIVE-2206)

### Adding a New Account on Windows

In the previous version (4.4.2 that includes the work done on [NXDRIVE-2042](https://jira.nuxeo.com/browse/NXDRIVE-2042)), we introduced a nice bar to show the amount of disk space available. The same information is displayed when adding a new account, below the local folder selection.

On Windows, it happens that it introduced a new bug when the selected folder was inexistent. Then the mechanism to query the available disk space was failing and thus it could prevent one from adding a new account.
We enforced that mechanism robustness and it's fixed now.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2162](https://jira.nuxeo.com/browse/NXDRIVE-2162)


<!--To be published when 4.4.4 released
## Download Links

- [GNU/Linux](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-4.4.4-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-4.4.4.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-4.4.4.exe)
-->
