---
title: LTS 2021.37 / LTS 2021-HF37
description: Discover what's new in LTS 2021.37 / LTS 2021-HF37
review:
   comment: ''
   date: '2023-05-05'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-37'}}
# What's New in LTS 2021.37 / LTS 2021-HF37

## Add an Option to Disable Hostname Verification During Elastic/Opensearch SSL Handshake


A property is added to disable hostname verification during SSL handshake with Elasticsearch.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31837](https://jira.nuxeo.com/browse/NXP-31837)

## GetAllDocumentBlobs (Document.GetBlobs) Returns Thumbnails


The `nuxeo.document.blob.extractor.legacy` nuxeo.conf property is available to return the blob properties of the doc type only

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31834](https://jira.nuxeo.com/browse/NXP-31834)

## Prevent GC With a Cross Repository Shared Blob Provider Configuration


Immediate GC in case of multi-repository deployment with a custom Blob Dispatcher configuration is not supported.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31833](https://jira.nuxeo.com/browse/NXP-31833)

## WOPI Not Following Blob Download Policy


Download policies are now taken into account in the WOPI addon.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31828](https://jira.nuxeo.com/browse/NXP-31828)

## Fix Rendition URL to Support Multi-Repository


The Rendition URL supports multi-repository.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31827](https://jira.nuxeo.com/browse/NXP-31827)

## Add Scroller on Blob Stores


New scrolls to iterate over blobs stored by a repository through its BlobStoreBlobProvider's (S3, Local and In-Memory) are available

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31737](https://jira.nuxeo.com/browse/NXP-31737)

## Instant Share Is Broken With OpenID Authentication Installed


Authentication plugins now define the same authentication chain that the default.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30228](https://jira.nuxeo.com/browse/NXP-30228)

## JSF/MultiDirectory/Admin: Suppressing the Label for a Group Does Not Work


Resetting a group label from JSF UI administration in a multidirectory configuration is now working.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27871](https://jira.nuxeo.com/browse/NXP-27871)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22266) is available in our bug tracking tool.

{{! /multiexcerpt}}
