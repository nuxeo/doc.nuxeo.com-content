---
title: LTS 2025.10 / LTS 2025-HF10
description: Discover what's new in LTS 2025.10 / LTS 2025-HF10
review:
   comment: ''
   date: '2025-10-29'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2025-10'}}
# What's New in LTS 2025.10 / LTS 2025-HF10

## Fix Shibboleth Logout With Anonymous User Enabled

Logout is fixed when Shibboleth authentication is configured.

## Schemas With Matching Attributes Incorrectly Affected by Retention

Properties with same name, but from different schemas, can now be properly retained as long as a prefix is defined for each schema.

## Fix File Properties When Creating the Document using REST API and an Existing Blob Digest

When creating a document with Automation and an existing blob, we can now pass all the file properties, such as MIME type and filename.

## Fix Publication With Rendition for Folderish Documents With Custom Lifecycle

Publication with default rendition of a folderish document with a custom lifecycle is now working.

## Use uploadFromUrl Instead of copyFromUrl API for Azure Optimized Copy 

Azure Blob Provider now leverages efficient APIs to write and copy blobs.

The Azure Blob Provider now uses the [uploadFromFileWithResponse](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-upload-java#upload-a-block-blob-with-configuration-options) API to write a file to an Azure container. As such, new Nuxeo configuration properties are available to tweak the underlying [ParallelTransferOptions](https://learn.microsoft.com/en-us/java/api/com.azure.storage.blob.models.paralleltransferoptions?view=azure-java-stable) API:

- `nuxeo.storage.azure.upload.blockSize` to set the block size (chunk size) to transfer at a time, default is `4 MiB`
- `nuxeo.storage.azure.upload.maxConcurrency` to set the maximum number of parallel requests that will be issued at any given time as a part of a single parallel transfer, defaults to `2`
- `nuxeo.storage.azure.upload.maxSingleUploadSize` if the size of the data is less than or equal to this value, it will be uploaded in a single put rather than broken up into chunks, defaults to `8 MiB`
- `nuxeo.storage.azure.upload.timeout` to set the upload timeout, defaults to `2h`

It also now uses the [uploadFromUrl](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-copy-url-java#copy-a-blob-from-a-source-object-url) API to copy files within Azure containers.
## Improve Bulk Scroller Distribution of Records Among Partitions

Reduce long tail processing due to unbalance load.

## NuxeoDrive.GetChangeSummary Should Ignore Trashed Documents that the Current User is not Authorized to Access

The Nuxeo Drive change summary doesn't include any more trashed or untrashed documents to which the connected user doesn't have access.

## Nuxeo 3D Viewer Is Not Correctly Installed

nuxeoctl correctly installs packages containing JAR files with the "dash-number" pattern in their name.

## Fix Typo on Enabled in ConvertCacheDescriptor

Enabled flag on convert cache is taken into account.


{{! /multiexcerpt}}
