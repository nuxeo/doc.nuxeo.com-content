---
title: Nuxeo Server LTS 2021.3 / LTS 2021-HF03 Release Notes
description: Discover what's new in LTS 2021.3 / LTS 2021-HF03
review:
   comment: ''
   date: '2021-05-18'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 10000
---

{{! multiexcerpt name='nuxeo-server-updates-2021'}}
# What's New in LTS 2021.3 / LTS 2021-HF03

## Nuxeo Server

### Miscellaneous

#### Add a quiet option to nuxeoctl not to log to nuxeoctl.log {{> tag 'admin'}} {{> tag 'dev'}}

`nuxeoctl` has now a quiet option to not print the launcher command to the logs.

This can be useful in some cases where confidential data are logged to `nuxeoctl.log`, mainly when `nuxeoctl` is used to encrypt properties.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30265](https://jira.nuxeo.com/browse/NXP-30265)

## Major bug fixes

### Fix null version on doc inside folder copied from clipboard

The version of documents in a folder copied from the clipboard is reset to zero, instead of being null.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30250](https://jira.nuxeo.com/browse/NXP-30250)

### Do not log password when failing to connect to Kafka

Kafka password are now always masked in the logs.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30304](https://jira.nuxeo.com/browse/NXP-30304)

### Correct mime-type in S3DirectBatchHandler

The S3 content-type header is now split into MIME type and encoding, and then saved to the blob properties.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30357](https://jira.nuxeo.com/browse/NXP-30357)

### Fix thumbnails computation when importing a large PDF with S3 BlobProvider

The thumbnails are now correctly computed after a direct upload to S3 buckets, even for 5 MB and larger files.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30122](https://jira.nuxeo.com/browse/NXP-30122)

# Learn more

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21249) is available in our bug tracking tool.

{{#> callout type='info' heading='Upgrade Notes'}}
Refer to the [LTS 2021.1 upgrade notes]({{page page='upgrade-from-lts-2019-to-lts-2021'}}) to transition to this version.
{{/callout}}

{{! /multiexcerpt}}
