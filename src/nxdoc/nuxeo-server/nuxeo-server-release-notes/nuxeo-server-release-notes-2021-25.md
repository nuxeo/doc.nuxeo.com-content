---
title: LTS 2021.25 / LTS 2021-HF25
description: Discover what's new in LTS 2021.25 / LTS 2021-HF25
review:
   comment: ''
   date: '2022-08-29'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-25'}}
# What's New in LTS 2021.25 / LTS 2021-HF25

## Nuxeo Server

### Stream Management: Position Endpoint to Change Consumer Position

It is now possible to change computation positions without downtime.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31086](https://jira.nuxeo.com/browse/NXP-31086)

## Majors Bug Fixes

### NXQL Complex Property Correlations Not Working with MongoDB

Query with complex correlation for schemas with no prefix now works on MongoDB.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31174](https://jira.nuxeo.com/browse/NXP-31174)

### Fix Download Context for Renditions

Added a new DownloadContextBlobHolder and its writer for download permissions checking.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31166](https://jira.nuxeo.com/browse/NXP-31166)

### Fix NPE in ‘Subtypes’ Enricher When Appending a Disabled Document Type to an Existing Folderish Document Type

Disabled types are excluded from sub types listings. Type extending a disabled super type produces an ERROR log.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31155](https://jira.nuxeo.com/browse/NXP-31155)

### Fix `Cannot Deep Copy java.lang.Integer`

The error `Cannot deep copy: java.lang.Integer` is handled at Core level.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31148](https://jira.nuxeo.com/browse/NXP-31148)

### Unable to Detect Mimetype When Uploading Multipart Form Data

Send a clear message about multipart/form-data not being supported on Nuxeo 2021.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31123](https://jira.nuxeo.com/browse/NXP-31123)

# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21753) is available in our bug tracking tool.

{{! /multiexcerpt}}
