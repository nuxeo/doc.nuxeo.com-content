---
title: Release Notes
description: Release notes for Nuxeo Drive.
tree_item_index: 700
review:
  comment: ''
  date: '2021-01-26'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 4.5.1**

**Status**: <font color="#ff0000">**Beta**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/4.5.1.md)

## Important Changes

### End of Windows 7 Support

We plan to add ARM support on macOS to be compatible with new Apple Silicon machines.
As a side-effect, we will need to upgrade the Python version used in the application to at least 3.9. But Python dropped the Windows 7 support starting with 3.9. As a consequence, Nuxeo Drive 4.5.1 will be the last version supporting Windows 7.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2482](https://jira.nuxeo.com/browse/NXDRIVE-2482)

### Direct Transfer

#### Added Create Folder Button Within the Upload Flow

A new button has been added in the Direct Transfer options. This button lets the user create a new folder in the selected remote path.</br>
Selected files and folders will be uploaded inside that new remote folder then.

![]({{file name='new-remote-folder.gif' page='nuxeo-drive-release-notes'}})

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2413](https://jira.nuxeo.com/browse/NXDRIVE-2413)

#### Multiple Transfers Reusing a Same File

It is now possible for the user to add the same file to multiple Direct Transfert sessions. For a file to be uploaded, other sessions containing the same file will need to be either paused or finished. This is a requirements from the OS because one file cannot be read by two different threads at the same time.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2394](https://jira.nuxeo.com/browse/NXDRIVE-2394)

#### Preventing Duplicate Folder Uploads

There is a duplicate creation option for Direct Transfer sessions. It was badly named as it is only effective for files. We renamed the option to be more specific.
And it is now forbidden to upload a folder if a document has the same name on the server. In that case, the entire session will be cancelled.

![]({{file name='DT-duplicate-folder.png' page='nuxeo-drive-release-notes'}})

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2438](https://jira.nuxeo.com/browse/NXDRIVE-2438)

### Direct Edit

#### Direct Edit now handles default URL ports

It is now possible to use Direct Edit when the user registered an account with a server URL containing 443 or 80 ports.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2410](https://jira.nuxeo.com/browse/NXDRIVE-2410)

## Improvements

### GUI Refresh After a Feature State Has Changed

Until now, it was mandatory for the user to restart the application to apply the change of a feature state on the GUI. The interface is now refreshed on a state change and there is no need to restart the application anymore.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2329](https://jira.nuxeo.com/browse/NXDRIVE-2329)

### Align Buttons

Buttons colors have been aligned on the Nuxeo guidelines.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2354](https://jira.nuxeo.com/browse/NXDRIVE-2354)

## Fixes

### GNU/Linux Release

In the previous release ([4.5.0]({{page page='450-nuxeo-drive-release-notes'}}#gnulinux-release)) we temporary stopped publishing GNU/Linux releases as the support had been lost due to changes in the project we use to freeze the application code.

We are now happy to announce that this is old time and GNU/Linux releases are back again!

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2400](https://jira.nuxeo.com/browse/NXDRIVE-2400)

### Fixed Subfolders Synchronization When Unfiltering

On Windows, after applying a filter on a synchronized subfolder, it wasn't possible anymore to re-synchronize the subfolder's content when unfiltering. The issue has been fixed and subfolders content will be synchronized again on unfiltering.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2489](https://jira.nuxeo.com/browse/NXDRIVE-2489)

## Download Links

- [GNU/Linux binary](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-4.5.1-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-4.5.1.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-4.5.1.exe)
