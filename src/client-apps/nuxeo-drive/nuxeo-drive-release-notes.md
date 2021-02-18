---
title: Release Notes
description: Release notes for Nuxeo Drive.
tree_item_index: 700
review:
  comment: ''
  date: '2021-01-28'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 5.0.0**

**Status**: <font color="#FF0000">**Beta**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/5.0.0.md)

## Important Changes

### End of macOS Sierra Support

The support of macOS Sierra (10.12) has been dropped. It was needed in order to benefit of upcoming improvements in the synchronization engine.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2518](https://jira.nuxeo.com/browse/NXDRIVE-2518)

### End of Windows 7 Support

The support of Windows 7 has been dropped. It was needed in order to benefit of upcoming improvements in the product.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2015](https://jira.nuxeo.com/browse/NXDRIVE-2015)

## Improvements

### Implementation of Mutual TLS Authentication

Drive is now compatible with servers that require mutual TLS authentication. The user can specify the paths to a client certificate and it's unencrypted key in the configuration file with the options [cert-file]({{page page='nuxeo-drive'}}#cert-file) and [cert-key-file]({{page page='nuxeo-drive'}}#cert-key-file).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2442](https://jira.nuxeo.com/browse/NXDRIVE-2442)

## Fixes

### Conflict "Open Remote" Button Behavior Changed

When a conflict needs a manual action from the user, buttons are displayed. One to open the local file/folder ("Open local"), and one to open the local file/folder '"Open remote").

The old "Open remote" behavior was actually initiating a Direct Edit on the document. This had several issues:

1. For non-folderish documents, the file will be downloaded first; and for large files, this may be bad. Moreover, Drive cannot know if the user can actually open that file, so a potential problematic/large file will be downloaded but then the OS will fail to open it.
1. For folderish documents, it never worked. The button was doing nothing but generating an error in the logs.

The new behavior is as simple as opening the document on Web-UI. If the user wants to open it with Direct Edit, one will be able to leverage the Direct Edit button from Web-UI: clearer concerns and potential saving of (large) resources.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2501](https://jira.nuxeo.com/browse/NXDRIVE-2501)

### Fixed a Database Corruption on GNU/Linux

A database corruption issue on GNU/Linux that was causing Drive to not detect anymore registered accounts has been fixed.

**No data has been impacted or lost**, the issue only concerned the store where the data’s address are saved.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2524](https://jira.nuxeo.com/browse/NXDRIVE-2524)

### Capability to Edit Custom Xpath

A regression introduced in 4.5.1 where it was no more possible to use the Direct Edit feature on a custom xpath has been fixed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2517](https://jira.nuxeo.com/browse/NXDRIVE-2517)

### Handle Documents With Non-Standard Digest

When using the S3 upload provider, digest of documents can be non-standard, i.e. not MD5, SHA256, etc. In that case, Drive is not able to download a file from the server because it cannot verifiy its integrity.</br>
The situation is worse when the S3 encryption is used (SSE-KMS): everytime a change is done on the server, Drive will receive a non-standard digest different for each action, even when the file itself was not modified.

Before Drive 5.0.0, such documents were simply skipped: there was no way to synchronize them.

A huge work was done on the server to asynchronously compute real digest of those documents.
When one creates a file on the server, the document is created and the file attached to it with the non-standard digest set by S3. Then a worker on the server will compute the digest and update the document digest accordingly.

With Drive 5.0.0, when a document with a non-standard digest will be received, it will be saved in the database, just like any other documents. Except that it will not be synchronized, not yet.
Later, when the server will have finished to compute the digest, Drive will receive a new event with the up-to-date and correct digest. At that moment, Drive will be able to synchronize the document.

**Note:**
There are other documents with exotic digests such as Live Connect ones. In that case, Drive will keep documents in the local database but will never synchronize them. This is an open door for future versions of Drive where we might want to handle those documents differently.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2140](https://jira.nuxeo.com/browse/NXDRIVE-2140)

## Download Links

- [GNU/Linux binary](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.0.0-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.0.0.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.0.0.exe)
