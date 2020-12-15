---
title: Release Notes
description: Release notes for Nuxeo Drive.
tree_item_index: 700
review:
  comment: ''
  date: '2020-12-'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 4.5.0**

**Status**: <font color="#FF0000">**Beta**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/4.4.4.md)

## Important Changes

### macOS Big Sur Support

This is the first release that officially supports the new macOS version: Big Sur.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2270](https://jira.nuxeo.com/browse/NXDRIVE-2270)

### Direct Transfer

#### Fixed Multi-Screen Centering

When opening the settings of Direct Transfer window, it is centered on the screen. But that was not working well for multi-screens setup. This is now fixed and the window will be centered on the screen where the mouse cursor is located.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2353](https://jira.nuxeo.com/browse/NXDRIVE-2353)

#### Sessions for Direct Transfer

It is now possible for the user to see and interact with the Direct Transfer sessions through the GUI. Two dedicated tabs have been added to the Direct Transfer window to show sessions statuses. These tabs list ongoing and completed sessions with some useful informations about them. It is also possible to pause/resume/cancel an ongoing session through this interface. The previously existing list of transferred items has been moved to a third tab called _Monitoring_.

The Monitoring tab now only shows transfers uploaded by chunks ([NXDRIVE-2432](https://jira.nuxeo.com/browse/NXDRIVE-2432)). And it is no more possible to pause a single transfer from that view, you will have to pause the session instead ([NXDRIVE-2433](https://jira.nuxeo.com/browse/NXDRIVE-2433)).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2309](https://jira.nuxeo.com/browse/NXDRIVE-2309)

#### New Parameter to Control Forbidden Doc Types

The new [`disallowed_types_for_dt`]({{page version='' space='client-apps' page='nuxeo-drive'}}#disallowed-types-for-dt) parameter can be used to control custom document types where doing a direct Transfer is not allowed. Typically, Domain and Section are such types.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2311](https://jira.nuxeo.com/browse/NXDRIVE-2311)

### GNU/Linux Release

We temporary stop publishing GNU/Linux releases as the support has been lost due to changes in the project we use to freeze the application code (meaning converting all Python code to something understandable by the OS without the need for the Python interpreter to be installed on your machine).

We are sorry for the inconvenience and will get back the GNU/Linux support ASAP.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2399](https://jira.nuxeo.com/browse/NXDRIVE-2399)

## Improvements

### Direct Edit

#### Fixed Broken Document Previews

When uploading changes done with Direct Edit to the server, the document preview was broken if the upload provider was S3. The issue was a missing HTTP header to set the appropriate content type of the document that would then be used by the server to detect the specific converter to call.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2380](https://jira.nuxeo.com/browse/NXDRIVE-2380)

#### Direct Edit Lock Permission Errors

Direct Edit lock permission errors are now handled and a warning is displayed to the user.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2380](https://jira.nuxeo.com/browse/NXDRIVE-2380)

### New chunk_limit Maximum Value

The old maximum value for the [chunk_limit]({{page version='' space='client-apps' page='nuxeo-drive'}}#chunk-limit) parameter was 20 MiB. We push that limit to 5,120 MiB (5 GiB) to be able to fully leverage S3 upload capabilities.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2368](https://jira.nuxeo.com/browse/NXDRIVE-2368)

### More Friendly Message Boxes

We reworked message boxes to get rid of the ugly all-bold text. There is now a clear title and more complete and useful message.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2359](https://jira.nuxeo.com/browse/NXDRIVE-2359)

## Fixes

### PAC files Support

Dealing with PAC files set at the OS level (the registry on Windows and the system preferences on macOS) was done correctly since the beginning. But one could not enter a PAC file directly into proxy settings. This is now possible.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2435](https://jira.nuxeo.com/browse/NXDRIVE-2435)

### Large File Uploads Robustness

We fixed a tricky issue when using S3 as the upload provider on large files. For some people the upload would never finish, but for others it would finish with success. We introduced the keepalive TCP option for all HTTPS requests to fix that. The original patch was merged into the Python client so that everybody using it will benefit of the bug fix.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2373](https://jira.nuxeo.com/browse/NXDRIVE-2373)

### Start on Boot Alteration on Windows

If you disabled the start on boot option from the settings window, the auto-updater was always reverting back the setting. This is now fixed.

This introduces a small change for macOS users: by default the app will not be startup on boot. The feature must be selected from the settings window.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2330](https://jira.nuxeo.com/browse/NXDRIVE-2330)


## Download Links

- [GNU/Linux](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-4.5.0-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-4.5.0.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-4.5.0.exe)
