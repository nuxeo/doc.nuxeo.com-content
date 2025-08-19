---
title: Nuxeo Aspera 2021.3.6
description: Release notes for Nuxeo Aspera Connector 2021.3.6
tree_item_index: 850
review:
  comment: ''
  date: '2022-12-03'
  status: ok
toc: true
hidden: true
---

{{! multiexcerpt name='nuxeo-aspera-connector-2021-3-6'}}
## What's New in Aspera for LTS 2021 (version 2021.3.6)

This is a bugfix release.

## Released Changes

### Aspera iterator classes need to be able to use proxy
Users were reporting that it is still not possible to use Aspera through their proxy implementation. Client indicates problem points in AsperaIterator and AsperaBrowseFilesIterator now fixed.
<br/>[[NXP-31290](https://jira.nuxeo.com/browse/NXP-31290)]

### Folder retry
A new retry button is added during the upload if one or many files inside the folder are failing.
<br/>[[NXP-31113](https://jira.nuxeo.com/browse/NXP-31113)]

### Edit Metadata is not working as per expectation for Folder
This is a fix. When creating one transfer, if we add a couple of folders and when editing the transfer and put some common metadata for both folders.
Wait till they are uploaded in transient. Click on edit metadata. Change metadata for one folder. Complete transfer
Wait for the transfer to be completed. After completion Check metadata for all the files under the folder whose metadata was changed.
We were seeing the common old metadata. But now we can see the new metadata which was given.
<br/>[[NXP-31178](https://jira.nuxeo.com/browse/NXP-31178)]

### Parse error in AsperaNodeServiceImpl
As a part of NXP-31290 & NXP-31356, (to enable proxy support) all Jersey Client instance has been replaced with httpclient.
Due to this change, the default encoding config seems to have started rejecting filenames with special character, leading to the parse issue at Aspera Side. Applied the fix on this a the error is fixed.
<br/>[[NXP-31420](https://jira.nuxeo.com/browse/NXP-31420)]

### Skip all Aspera API invocations during retry
During Retry, Invoking Aspera APIs might lead to failure as Aspera stores information related to a transfer only for a limited time. (24 hrs)
Since the info needed from Aspera is already processed during complete transfer, We can extract and store that information inside Transfer and skip any future Aspera API calls for the same transfer during retry.
<br/>[[NXP-31416](https://jira.nuxeo.com/browse/NXP-31416)]

{{! /multiexcerpt}}
