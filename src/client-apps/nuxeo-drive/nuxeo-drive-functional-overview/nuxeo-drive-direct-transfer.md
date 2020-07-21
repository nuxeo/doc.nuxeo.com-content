---
title: Direct Transfer
description: 'Direct Transfer adds a third core capability to Drive: one-time transfer of content between the Nuxeo Server and the user desktop.'
review:
    comment: ''
    date: '2020-07-20'
    status: ok
labels:
    - nuxeo-drive
    - direct-transfer
tree_item_index: 100
toc: true
---

The purpose of the Direct Transfer feature is to add a third core capability to Nuxeo Drive: one-time transfer of content between the Nuxeo Server and the user desktop.

Direct Transfer allows users having installed Nuxeo Drive to upload new content to the server, as opposed to using the traditional document creation from Nuxeo Web UI. This will be particularly useful in the case of big files, as timeouts occur with Web UI after a certain while.

Nuxeo Drive upload capability provides a productive and network resilient way of transferring the content and leverage chunking capabilities of the platform to send content to the server.

## Create a Transfer

1. Open Nuxeo Drive from your desktop and click on **Direct Transfer**.</br>
    The finder opens.
1. Select the document(s) you want to transfer and click on **Open**.</br>
    The Direct Transfer popup opens.
    ![]({{file name='direct-transfer-creation.png'}})
1. Select the remote folder where you want the document(s) to be uploaded.</br>
    The selected path will update depending on the remote folder selected.
1. **Optional**: from this popup you can also add more files by clicking on **Add files** at the top right of the popup.
1. Click on **OK** to launch the transfer.

{{#> callout type='info' heading='Duplicate Management'}}
On Nuxeo Drive 4.4.4, if a document is already present on the remote folder, a duplicate document will be created, this is the same behavior as when adding a new file from Web UI.
{{/callout}}

<!--To be published on next beta
### Options

On this section you need to choose what to do when a transfer would create a duplicate document on the server.
The setting is effective for all files that will be sent at the same time (it is called the *session*). Each *session* has its own duplicates behavior.

Available options are:
- **Create**: this is the default option. A duplicate document will be created, this is the same behavior as when adding a new file from Web UI.
- **Ignore**: the transfer will be cancelled, preventing the duplicate creation.
- **Override**: the document will be replaced on the server.

{{#> callout type='warning' }}
The **Ignore** option may be problematic on huge trees: for each and every file, an NXQL query will be done on the server to verify the existence of a similar document.<br>
And that query is not using Elasticsearch, so if you have folderish documents with thousands of children, that query will likely be a bottleneck.<br>
{{/callout}}
-->
## Launch a Transfer

Once a transfer is launched, a new popup appears.

![]({{file name='direct-transfer-running.png'}})

From there you have full control on your transfer, you can:
- pause/resume or cancel any upload.
- monitor each upload thanks to the progress bar.

Once the transfer is done, the popup closes and a desktop notification lets you know that the transfer is complete (works only for files < 25Mio).

<!--
## Limitations

## Technical Overview

### Filemanager

### ...
-->
