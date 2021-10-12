---
title: LTS 2021.5 / LTS 2021-HF05
description: Discover what's new in LTS 2021.5 / LTS 2021-HF05
review:
   comment: ''
   date: '2021-07-01'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 8000
---

{{! multiexcerpt name='nuxeo-server-updates-2021-5'}}
# What's New in LTS 2021.5 / LTS 2021-HF05

## Nuxeo Server

### Core Repository

#### Add a parameter to allow to not automatically save the document in the operation `Document.SetMetadataFromBlob` {{> tag 'dev'}}

A parameter is added to not save the document in the operation `Document.SetMetadataFromBlob`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30145](https://jira.nuxeo.com/browse/NXP-30145)

### Core Storage

#### Improve the Nuxeo Platform Thanks to New Mongodb Indexes {{> tag 'admin'}} {{> tag 'dev'}}

We improved the Nuxeo Platform performances by adding by default new MongoDB indexes on:
 - the user and groups directories,
 - the annotations (mostly for Nuxeo Enhanced Viewer),
 - the document collections,
 - the audit (mostly for Nuxeo Drive),

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA tickets [NXP-30432](https://jira.nuxeo.com/browse/NXP-30432), [NXP-30215](https://jira.nuxeo.com/browse/NXP-30215), [NXP-30243](https://jira.nuxeo.com/browse/NXP-30243), and [NXP-30281](https://jira.nuxeo.com/browse/NXP-30281)

### Rendition

#### Improve `recomputeThumbnail` bulk action default configuration to avoid transaction timeout or stream failure {{> tag 'dev'}}

`recomputeThumbnail` bulk action has been tuned to avoid transaction timeout or stream failure.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30382](https://jira.nuxeo.com/browse/NXP-30382)

#### Compute Update Thumbnail in a Dedicated Transaction per Documents {{> tag 'dev'}}

Thumbnail computation is done in a dedicated transaction per documents.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30438](https://jira.nuxeo.com/browse/NXP-30438)

### Packaging / Distribution / Installation

#### Tomcat 9.0.48 {{> tag 'dev'}} {{> tag 'admin'}}

The Nuxeo Platform now relies on Tomcat 9.0.48.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30476](https://jira.nuxeo.com/browse/NXP-30476)

#### Allow to Configure SSL Protocol for the SMTP Connection {{> tag 'dev'}}

SSL protocol is now configurable for the SMTP connection into `nuxeo.conf`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30456](https://jira.nuxeo.com/browse/NXP-30456)

### Miscellaneous

#### Improve Fulltext Extraction for Microsoft Office .xls Files

Possible OOM is now prevented on XLS fulltext extraction.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30294](https://jira.nuxeo.com/browse/NXP-30294)

## Major Bug Fixes

### Fix Long-Running Thumbnail Generation for Large Office Files

We are now using LibreOffice to render Office file thumbnails in order to convert only the first page of the document instead of the full document.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30326](https://jira.nuxeo.com/browse/NXP-30326)

### Fix Search Results Not Being Sorted When a Quick Filter Is Used {{> tag 'dev'}}

Sort infos are now taken into account, in this order: first parameters, then quick filters, then defaults from page provider.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30360](https://jira.nuxeo.com/browse/NXP-30360)

# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21307) is available in our bug tracking tool.

{{! /multiexcerpt}}
