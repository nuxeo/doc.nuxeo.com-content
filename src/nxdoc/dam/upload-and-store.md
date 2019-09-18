---
title: Upload & Store
description: Discover how Nuxeo Platform let you upload and store your digital assets.
review:
    comment: ''
    date: '2019-09-18'
    status: ok
labels:
    - DAM
tree_item_index: 100
toc: true
---

## Bulk Upload

On Nuxeo Platform, different features are available to let you upload and/or create your assets in every possible way.

### From Nuxeo platform

#### Drag and Drop

You can use drag and drop to easily import documents into a workspace or just to create one document at a time. It enables you to quickly drag and drop documents in the workspace that you want.

You can also drag and drop a file directly in the file view in order to replace the already uploaded file.

![]({{file space='userdoc' name='import-popup-web-ui.png' page='content-create'}} ?w=450,border=true)

#### Import Button

You can also drag and drop one or more files of any type from the Import tab of the creation popup.

From this Import button you will be able to import with properties, which means fill in metadata of the document(s) before they are created in the workspace.

![]({{file space='userdoc' name='add-properties-web-ui.png' page='content-create'}} ?w=450,border=true)

### From Nuxeo Drive

Nuxeo Drive is a Nuxeo addon that enables the synchronization of folders or workspaces from the Nuxeo Platform with local folder on your computer.

You can very easily import document by moving them from a desktop folder to a Nuxeo Drive folder, or creating office files directly in a Nuxeo Drive folder.

Read the [Nuxeo Drive documentation]({{page space='client-apps' page='nuxeo-drive'}}) for more information.

SCREENSHOT

## Connect with Dropbox, Google Drive, Box, OneDrive

Nuxeo Live Connect allows you to create a content application that handles cloud files (Dropbox, Google Drive, Box, OneDrive...) as if they were local files. Files remain in the cloud but they are referenced in the Nuxeo repository as if they were stored within it. This allows the user to benefit from thumbnailing service, full text, conversions, etc.

![]({{file name='LiveConnect-file-creation-webui.png' page='nuxeo-live-connect'}} ?w=450,border=true)

Read the [Nuxeo Live Connect documentation]({{page version='' space='nxdoc' page='nuxeo-live-connect'}}) for more information.

## Automated Metadata Extraction

{{{multiexcerpt 'automated-metadata-extraction-excerpt' page='userdoc/creating-content'}}}

Read the [Binary Metadata]({{page space='nxdoc' page='binary-metadata'}}) documentation for more information.

## Supported File Formats

The Platform Digital Asset Management module supports a large number of file formats. For example:

- **Picture**: JPG, PNG, GIF, PSD, AI, etc.
- **Video**: avi, mp4, WMV, etc.
- **Audio**: mp3, wav, etc.
- **Office**: PDF, Open Office, Microsoft Office, etc.

See the full list of supported formats on the [dedicated documentation page]({{page version='' space='nxdoc' page='supported-file-formats'}}).
