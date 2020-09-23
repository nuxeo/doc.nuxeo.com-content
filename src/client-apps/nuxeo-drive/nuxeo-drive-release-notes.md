---
title: Release Notes
description: Release notes for Nuxeo Drive.
tree_item_index: 700
review:
  comment: 'release'
  date: '2020-08-31'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 4.4.5**

**Status**: <font color="#0066ff">**Release**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/4.4.5.md)

## Important Changes

### Direct Transfer

#### Folder Uploads

Folders upload through the Direct Transfer feature has been enabled. The feature now creates folders via the [FileManager]({{page version='' space='nxdoc' page='file-manager'}}). Uploads of complex assets e.g. documents with deep hierarchies of folders and files are now well supported up to multiple thousands of documents.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2019](https://jira.nuxeo.com/browse/NXDRIVE-2019)

#### Improved Folders Selection

The Direct Transfer remote folder selection has been improved to better handle what kind of folderish documents can be used to transfer files into. It now respects the `HiddenInCreation` facet, as it is done in Web UI. We unified the experience.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2304](https://jira.nuxeo.com/browse/NXDRIVE-2304)

#### Duplicates Behavior

You can now choose what to do when a transfer would create a duplicate document on the server. The setting is effective for all files that will be sent at the same time (it is called the session). Each session has its own duplicates behavior.

Available options are:
- **Create**: a duplicate document will be created, this is the same behavior as when adding a new file from Web UI.
- **Ignore**: the transfer will be cancelled, preventing the duplicate creation.
- **Override**: the document will be replaced on the server.

![]({{file name='duplicates-behavior-dt.png' page='nuxeo-drive-release-notes'}})

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2234](https://jira.nuxeo.com/browse/NXDRIVE-2234)

### Direct Edit

#### Prevent Unintentional Upload of Files

During a Direct Edit, some third party files may be inserted in the edited file temporary folder. These files were listed at startup, and, depending on the case were considered as the original edited file. This may corrupt the remote document (data loss) or allow an attacker to upload any content to the server.

Some security has been added to ensure that those files are now simply ignored and only the original edited file would be taken into account.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2144](https://jira.nuxeo.com/browse/NXDRIVE-2144)

#### 3 Attempts to Upload Direct Edit Updates

As seen with proxies ([NXDRIVE-2131](https://jira.nuxeo.com/browse/NXDRIVE-2131) and [NXDRIVE-2132](https://jira.nuxeo.com/browse/NXDRIVE-2132)), an unhandled error while uploading a file will retry indefinitely. This is quite bad as it explodes server logs, client logs and our Sentry quota.

Such file will now be tried at most 3 times. Then, the document will be removed from the upload queue with an error displayed to the user.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2147](https://jira.nuxeo.com/browse/NXDRIVE-2147)

#### Direct Edit and Unusual Digests

It is now possible to Direct Edit a document when the attached file has no digest or when the digest is not standard.

{{#> callout type='warning'}}
Note that such documents will loose the ability to check their integrity and thus the conflicts detection will be ineffective.
{{/callout}}

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2236](https://jira.nuxeo.com/browse/NXDRIVE-2236)

#### Force Refetch Server Config

The fixed issue here is that Direct Edit starts only when the server configuration has been retrieved first. So when the app started and there were connection issues (bad network, no VPN, ...) then there was no Direct Edit thread started.

Later, still while the app was running, even if the network issues were fixed, it was not possible to use Direct Edit without restarting the app.

Now the server configuration is fetched "on-demand" before doing any Direct Edit.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2194](https://jira.nuxeo.com/browse/NXDRIVE-2194)

### S3 Direct Upload

The Amazon S3 batch handler has been enabled back. It is still considered a beta feature and can be activated from the Features tab.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2210](https://jira.nuxeo.com/browse/NXDRIVE-2210)

When uploading files using the Amazon S3 provider, Nuxeo Drive will automatically use the accelerate endpoint when available. Resulting in faster uploads.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2279](https://jira.nuxeo.com/browse/NXDRIVE-2279)

### File Integrity Checks

There is a new option to disable the files integrity checks. </br>
`disabled_file_integrity_check` set to `True` disables downloaded files integrity check. It is a needed option when the [managed blob store key strategy]({{page page='hotfixes-installation-notes-for-nuxeo-platform-lts-2019'}}#s3-direct-upload-of-5-gb-files) is set up on the server, because there is no logic digest filled, the application would not be able to validate such files.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2307](https://jira.nuxeo.com/browse/NXDRIVE-2307)

## Improvements

### Systray Menu

We have improved the systray menu with new icons and removed the server URL below the username.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA tickets [NXDRIVE-2119](https://jira.nuxeo.com/browse/NXDRIVE-2219) and [NXDRIVE-2225](https://jira.nuxeo.com/browse/NXDRIVE-2225).

### OS Integration

The list of synchronized documents visible in the system tray menu is now displaying the good date format according to what is configured on the OS.

Before the fix, a multi-locales OS and Nuxeo Drive configured to use the French language was displaying dates in the English format.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2230](https://jira.nuxeo.com/browse/NXDRIVE-2230)

### Tracker

In order to better control our release and OS support flows, primary metrics are now always sent to Google Analytics: application and OS versions.

Those are simple transparent and anonymous details. This is harmless for the user and we kept everything GDPR-compliant.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2254](https://jira.nuxeo.com/browse/NXDRIVE-2254)

### Translations

Polish is now part of the available languages: the application and its installers are now translated to Polish.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2269](https://jira.nuxeo.com/browse/NXDRIVE-2269)

## Fixes

### Framework

We adapted a bunch of code to be really thread-safe, especially when iterating over a `dict`. It also improve atomicity speed and the code is more memory efficient.

For instance, that code is not completely thread-safe:

```
for item in list(self.my_queue.values()):
    # ...
```

And such code is not immune to "dictionary changed size during iteration" errors.

Here is the new code:
```
for item in self.my_queue.copy().values():
    # ...
```

It applies to all operations on dict objects: `dict.items()`, `dict.keys()` and `dict.values()`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2083](https://jira.nuxeo.com/browse/NXDRIVE-2083)

The application has a notion of "staled transfers". A staled transfer has the ONGOING status, meaning it is currently being processed.

Normally, this status cannot be if the application was correctly shut down. In that case, such transfers will be purged at startup. This likely means there was an error somewhere and the transfer will unlikely be able to resume. This was done initially to remove infinite transfers on proxy documents.

On the other end, if the application hard-crashed at the previous run, such transfers should be adapted to being able to resume. Removing them would likely make some users angry.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2186](https://jira.nuxeo.com/browse/NXDRIVE-2186)

### Account Tab

To better understand the fix, let's explain the bug.

Let's add an account using a placeholder username (as it is generally done when the application is widely deployed with automation):
```
python -m nxdrive bind-server --password "azerty" --local-folder "$HOME/Nuxeo Drive" "foo" "http://localhost:8080/nuxeo"
```

The user "foo" will be used. When the user will start the application for the first time, it will be asked to update credentials.

The user will click on the link to update credentials, fill the good username, password and validate.

Then, the username will not be updated in the GUI. Even if the user entered something else different than "foo" as username, it will still be displayed as "foo". This is now fixed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2272](https://jira.nuxeo.com/browse/NXDRIVE-2272)

When adding a new account, the app was trying to understand the given URL by deconstructing and reconstructing it using different patterns.

This behavior leaded to several issues, the most critical was Kaspersky detecting and completely deleting the application because of its HTTP scanner heuristic.

From now, a simple syntax check will be done on the URL and if it is wrong then the user will have to fix it. The user will know when the URL is good: the text field will have blue borders. If the given URL does not meet the expected syntax, the field is red.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2193](https://jira.nuxeo.com/browse/NXDRIVE-2193)

### Upload

A bug was appearing when using the S3 upload provider and when the configured bucket prefix was empty, such upload would never complete. It's now fixed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXPY-180](https://jira.nuxeo.com/browse/NXPY-180)

## Download Links

- [GNU/Linux](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-4.4.5-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-4.4.5.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/release/nuxeo-drive-4.4.5.exe)
