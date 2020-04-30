---
title: Release Notes
description: .
tree_item_index: 700
review:
  comment: 'release'
  date: '2020-04-30'
  status: ok
review:
  comment: 'beta'
  date: '2020-04-15'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 4.4.2**

**Status**: <font color="#0066ff">**Release**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/4.4.2.md)

## Important Changes

### Direct Transfer

The Direct Transfer feature has been disabled by default for the moment. It can be re-enabled by configuration. It is currently being reworked to be more configurable so as to better match our users' use cases.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2082](https://jira.nuxeo.com/browse/NXDRIVE-2082)

## Improvements

### Behaviors and Features Flags

We want to give even more control on features/behaviors to enable or not inside Nuxeo Drive. And so we introduced two new parameters that will easily allow one to control the application behavior or features.

Feature enablement will typically allow you to enable Direct Edit while disabling synchronization. Or Direct Edit and Direct Transfer, and not synchronization. Or only synchronization.
It is configurable both globally for all users and locally for a specific group of users.

#### Features

Using configuration files, you can now turn on/off features inside the application, such as the auto-update, Direct Edit, Direct Transfer and S3 Direct Uploads.

Here is a sample for the [local configuration file]({{page version='' space='client-apps' page='nuxeo-drive'}}#configuration-file):

```json
[DEFAULT]
env = myFeatures

[myFeatures]
feature.auto-update     = true
feature.direct-edit     = true
feature.direct-transfer = true
feature.s3              = true
```

And here is how to set those values for every user connected to a server, via the JSON file stored server side and used by Nuxeo Drive:

```json
{
    "feature": {
        "auto-update"     : true,
        "direct-edit"     : true,
        "direct-transfer" : true,
        "s3"              : true
    }
}
```

#### Behaviors

The IT team can tweak behaviors as well. A behavior is a server-side action that can be turned on/off using the [server configuration]({{page version='' space='client-apps' page='how-to-configure-nuxeo-drive-globally'}}). For now, the only possibility is to deny server deletions completely.

Here is how to set those values for every user connected to a server, via the [server configuration]({{page version='' space='client-apps' page='how-to-configure-nuxeo-drive-globally'}}):

```json
{
    "behavior": {
        "server-deletion": true
    }
}
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2070](https://jira.nuxeo.com/browse/NXDRIVE-2070) and [technical specifications document](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/dep/2020-03%20Features%20flags.md)

### Direct Edit

Direct Edit can now handle any custom blob metadata; there are no more limitations on the `xpath`.</br>

Those are all valid (given "s" for string and "n" for number):
- `s:s` (file:content, foo:bar, note:note)
- `s:s/n` (files:files/0, foo:bar/0)
- `s:s/n/s` (files:files/0/file)
- `s:s/n/n/n/n/s/n/s:s...` (foo:baz/0/0/0/0/file/0/real:file...)

Notes handling is stricter, only `note:note` is taken into account, nothing changed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2027](https://jira.nuxeo.com/browse/NXDRIVE-2027)

### Server Configuration

As the server configuration endpoint can be used to enabled/disable features and tweak parameters impacting all users, it was natural to first wait for it before starting features.

Here is the flow when starting the application:
1. Launch engines (an engine is an account).
1. Fetch the server configuration endpoint.
1. Update options, merge with one from the local configuration file.
1. Start (or deny) all features.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2091](https://jira.nuxeo.com/browse/NXDRIVE-2091)

### Delay Option

The remote watcher uses the 'delay' option (in seconds) between 2 calls to the NuxeoDrive.GetChangeSummary operation. That value can be tweaked from different locations:
- from the CLI using the `--delay` argument
- from the local config file
- from the server config

The last possibility was not working: if one set the 'delay' option to another value different from the default, the option will effectively be updated but not used by the remote watcher.

A fix has been merged to use the new value as soon as available, making the remote watcher adapting its calls in realtime.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2118](https://jira.nuxeo.com/browse/NXDRIVE-2118)

### Auto-Update

Updates are now unlocked on the centralized channel when auto-update is disabled.

Auto-updates are now allowed/forced when those parameters are met:
- the `update_check_delay` option is set to `0`;
- the `channel` option is set to `"centralized"`;
- the `client_version` option is set.

This is required for IT teams wanting to control which version of the application to deploy.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2047](https://jira.nuxeo.com/browse/NXDRIVE-2047)

### Local Configuration

When an option was set from both the local configuration file and from the server configuration endpoint, and if the local value was the default value of that option, then there's no impact.
This is unfortunate as one could not force the value of an option if it was modified from the server configuration endpoint.

As of now, any option set locally, using the default value or not, has the precedence over the options set by the server.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-1980](https://jira.nuxeo.com/browse/NXDRIVE-1980)

### Systray Menu

We have improved the systray menu with new icons and tooltips when hovering over the icons.
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Drive/Release Notes - 4.5.0/Icons Systray Menu
    name: icons-systray-menu.png
    addins#icon#up_to_date
--}}
![Icons Systray Menu](nx_asset://b2fdfa22-0ae6-429a-b8fa-9ef54238f90d ?w=100)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-1255](https://jira.nuxeo.com/browse/NXDRIVE-1255)

### Disk Free Space

There's now a free disk space bar displayed at different places.
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Drive/Release Notes - 4.5.0/Free Disk Space
    name: free-disk-space.png
    addins#screenshot#up_to_date
--}}
![Free Disk Space](nx_asset://354a68c8-43ed-4dfc-86bb-3181b3613ddb ?w=300,border=true)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2042](https://jira.nuxeo.com/browse/NXDRIVE-2042)

### Notarizing macOS Software

Since February 2020, Apple enforced its security policy for distributed applications.</br>
Every application must be "notarized", this is now done for Nuxeo Drive.

Another big step is the full support for Catalina and Mojave.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2041](https://jira.nuxeo.com/browse/NXDRIVE-2041)

### Translations

Incomplete and/or obsolete translations have been cleaned up, and the hard-coded "Nuxeo Drive" has been removed to ease up future branding.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA tickets [NXDRIVE-1996](https://jira.nuxeo.com/browse/NXDRIVE-1996) and [NXDRIVE-1893](https://jira.nuxeo.com/browse/NXDRIVE-1893).

### QA/CI

In the global scope of moving out from the legacy QA and having quick PR statuses, we moved quality checks and unit tests to GitHub Actions.

Results are more than satisfying because we now have PR statuses in less than 2 minutes, covering all quality checks (translations, code style, spelling, dead code, lint and type annotations) and unit tests on GNU/Linux, macOS and Windows.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2064](https://jira.nuxeo.com/browse/NXDRIVE-2064)

## Fixes

### Conflict Management

Conflicts are now even more precisely managed.

The old bug was:
- A file is in conflict (edited locally and remotely).
- That file has been renamed remotely, changing its file name locally.
- When resolving the conflict: the user chose to use its local version of the file.

The fix provides this expected behavior:
- The remote file is replaced with the local one.
- the remote file keeps its metadata.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-382](https://jira.nuxeo.com/browse/NXDRIVE-382)

### Synchronization

When the local folder where data is synchronized was on a different partition than the standard `C:`, there were different errors (in the synchronization process and Direct Edit), this is fixed now.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-1966](https://jira.nuxeo.com/browse/NXDRIVE-1966) and [NXDRIVE-1969](https://jira.nuxeo.com/browse/NXDRIVE-1969).

The synchronization on Windows has been fixed when one creates a new folder and then renames it very quickly.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-1847](https://jira.nuxeo.com/browse/NXDRIVE-1847)

Some non-folderish documents can have zero digest.</br>
This is sometimes the case with special documents using the LiveConnect addon. It may also happen in very rare cases when a server contribution may be broken.</br>
In such scenario, Nuxeo Drive cannot synchronize the file as it has no control over the file integrity.</br> Such documents are now ignored instead of generating errors.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-1973](https://jira.nuxeo.com/browse/NXDRIVE-1973)

An issue has been fixed about invalid TransferStatus value, it was introduced in the version 4.2.0, it may have broke retro-compatibility between versions 4.1.4 and 4.2.0 in certain conditions. We apologize for the inconvenience.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-1901](https://jira.nuxeo.com/browse/NXDRIVE-1901)

### Direct Transfer

When performing Direct Transfer of a folder to a target remote folder, the content of the folder was transferred directly to the remote folder. Now a remote subfolder is created when uploading a folder.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-1958](https://jira.nuxeo.com/browse/NXDRIVE-1958)

Direct Transfer now handles username containing non-letter characters.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-1983](https://jira.nuxeo.com/browse/NXDRIVE-1983)

### Memory

We take some precious time to improve the memory usage of the application. The result is quite enjoying as the application is now slightly faster and consume less RAM & CPU. This is laptop battery savor!

We also identified a memory leak in one the third-party module we are using for metrics, this had caused severe memory errors for some people and we are sorry for the inconvenience.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA tickets [NXDRIVE-1982](https://jira.nuxeo.com/browse/NXDRIVE-1982).


### Hi-DPI

The application is now fully High-DPI aware.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-1900](https://jira.nuxeo.com/browse/NXDRIVE-1900)


## Download Links

- [GNU/Linux](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-4.4.2-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-4.4.2.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-4.4.2.exe)
