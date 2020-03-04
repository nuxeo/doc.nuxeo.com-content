---
title: Release Notes
description: .
tree_item_index: 700
review:
  comment: ''
  date: '2020-03-02'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 4.5.0**

## Breaking Changes

### Direct Transfer

The Direct Transfer feature has been disabled for the moment; the implementation is currently being reworked to be more stable.  

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2040](https://jira.nuxeo.com/browse/NXDRIVE-2040)

## Improvements

### S3 Direct Upload

When the Amazon S3 addon is installed and configured, Nuxeo Drive will automatically use it when uploading files to Nuxeo. It's a great improvement as it will lower the work on the Nuxeo side and leverage high-speed servers from Amazon.

{{#> callout type='warning' }}
The default token expiration (TTL) is set to 1 hour by default.
This is too low for Nuxeo Drive uploads, as an upload can be paused or a transfer can take longer than 1 hour.
{{/callout}}

To tweak the token TTL, the server admin have to add a new property (integer) in `nuxeo.conf`:

```conf
# Value in seconds, here 10 hours
nuxeo.s3storage.transient.expiration=36000
```

It is used for the duration (in seconds) of the "assume role" of AWS.

Then use that property in [s3directupload-config.xml](https://github.com/nuxeo/nuxeo/blob/82f835172103dda6f5a28f4660a4bac0ed62be85/packages/nuxeo-amazon-s3-package/src/main/resources/install/templates/s3binaries/nxserver/config/s3directupload-config.xml.nxftl#L70):

```xml
<property name="expiration">${nuxeo.s3storage.transient.expiration}</property>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-1837](https://jira.nuxeo.com/browse/NXDRIVE-1837)

### Direct Edit

Direct Edit can now handle any kind of custom blob metadata, there is no more limitations on the `xpath`.</br>

Those are all valid (given "s" for string and "n" for number):
- s:s (file:content, foo:bar, note:note)
- s:s/n (files:files/0, foo:bar/0)
- s:s/n/s (files:files/0/file)
- s:s/n/n/n/n/s/n/s/... (foo:baz/0/0/0/0/file/0/real:file...)

Notes handling is stricter, only "note:note" is taken into account, nothing changed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2027](https://jira.nuxeo.com/browse/NXDRIVE-2027)

### Auto-Update

Updates are now unlock on the centralized channel when auto-update is disabled.

Auto-updates are now allowed/forced when those parameters are met:
- the `update_check_delay` option is set to `0`;
- the `channel` option is set to `"centralized"`;
- the `client_version` option is set.

This is required for IT teams wanting to fully control which version of the application to deploy.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2047](https://jira.nuxeo.com/browse/NXDRIVE-2047)

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
Each and every application must be "notarized", this is now done for Nuxeo Drive.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2041](https://jira.nuxeo.com/browse/NXDRIVE-2041)

### Translations

Incomplete and/or obsolete translations have been cleaned up, and the hard-coded "Nuxeo Drive" has been removed to ease up future branding.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-1996](https://jira.nuxeo.com/browse/NXDRIVE-1996) and [NXDRIVE-1893](https://jira.nuxeo.com/browse/NXDRIVE-1893).

## Fixes

### Synchronization

When the local folder where data is synchronized was on a different partition than the standard "C:", there were different errors (in the synchronization process and Direct Edit), this is fixed now.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-1966](https://jira.nuxeo.com/browse/NXDRIVE-1966) and [NXDRIVE-1969](https://jira.nuxeo.com/browse/NXDRIVE-1969).

The synchronization on Windows has been fixed when one creates a new folder and then renames it very quickly.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-1847](https://jira.nuxeo.com/browse/NXDRIVE-1847)

### Direct Transfer

When performing Direct Transfer of a folder to a target remote folder, the content of the folder was transferred directly to the remote folder. Now a remote subfolder is created when uploading a folder.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-1958](https://jira.nuxeo.com/browse/NXDRIVE-1958)

Direct Transfer now handles username containing non-letter characters.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-1983](https://jira.nuxeo.com/browse/NXDRIVE-1983)

### Memory

This release brings several fixes around memory issues, Nuxeo Drive is now less resources greedy.  
<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2012](https://jira.nuxeo.com/browse/NXDRIVE-2012)/[NXDRIVE-2048](https://jira.nuxeo.com/browse/NXDRIVE-2048)/[NXDRIVE-2052](https://jira.nuxeo.com/browse/NXDRIVE-2052).

The application is now fully High-DPI aware.  
<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-1900](https://jira.nuxeo.com/browse/NXDRIVE-1900)
