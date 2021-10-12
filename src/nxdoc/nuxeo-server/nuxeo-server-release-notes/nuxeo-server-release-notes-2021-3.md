---
title: LTS 2021.3 / LTS 2021-HF03
description: Discover what's new in LTS 2021.3 / LTS 2021-HF03
review:
   comment: ''
   date: '2021-05-18'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 9000
---

{{! multiexcerpt name='nuxeo-server-updates-2021-3'}}
# What's New in LTS 2021.3 / LTS 2021-HF03

## Nuxeo Server

### Miscellaneous

#### Add a Quiet Option to `nuxeoctl` Not to Log to `nuxeoctl.log` {{> tag 'admin'}} {{> tag 'dev'}}

`nuxeoctl` has now a quiet option to not print the launcher command to the logs.

This can be useful in some cases where confidential data are logged to `nuxeoctl.log`, mainly when `nuxeoctl` is used to encrypt properties.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30265](https://jira.nuxeo.com/browse/NXP-30265)

## Major Bug Fixes

### Fix Null Version on Doc Inside Folder Copied From Clipboard

The version of documents in a folder copied from the clipboard is reset to zero, instead of being null.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30250](https://jira.nuxeo.com/browse/NXP-30250)

### Do Not Log Password When Failing to Connect to Kafka

Kafka passwords are now always masked in the logs.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30304](https://jira.nuxeo.com/browse/NXP-30304)

### Correct MIME Type in `S3DirectBatchHandler`

The S3 content-type header is now split into MIME type and encoding, and then saved to the blob properties.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30357](https://jira.nuxeo.com/browse/NXP-30357)

### Fix Thumbnails Computation When Importing a Large PDF With S3 BlobProvider

The thumbnails are now correctly computed after a direct upload to S3 buckets, even for 5 MB and larger files.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30122](https://jira.nuxeo.com/browse/NXP-30122)

# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21249) is available in our bug tracking tool.


{{! /multiexcerpt}}
