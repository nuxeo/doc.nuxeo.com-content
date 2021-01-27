---
title: Direct Transfer
description: 'Direct Transfer adds a third core capability to Nuxeo Drive: one-time transfer of content between the user desktop and the Nuxeo server.'
review:
    comment: ''
    date: '2021-01-07'
    status: ok
labels:
    - nuxeo-drive
    - direct-transfer
tree_item_index: 100
toc: true
---

The purpose of the Direct Transfer feature is to add a third core capability to Nuxeo Drive: one-time transfer of content between the user desktop and the Nuxeo server.

Direct Transfer allows users having installed Nuxeo Drive to upload new content to the server, as opposed to using the traditional document creation from Nuxeo Web UI. This will be particularly useful in the case of big files.

This is also different from what is done in the core of Nuxeo Drive: transfers are not tight to synchronization roots but everywhere on the server (depending on user access rights).

Nuxeo Drive upload capability provides a productive and network resilient way of transferring the content and leverage chunking capabilities of the platform to send content to the server.

## Create a Transfer

1. Open Nuxeo Drive from your desktop and click on **Upload Content** button.</br>
    The Direct Transfer popup opens.
    ![]({{file name='direct-transfer-popup.png'}})
1. Click on **New transfer** at the top right of the popup.        
    ![]({{file name='direct-transfer-creation.png'}})
1. From this view, you can decide to **Add files** or **Add a folder**.</br>
    The files selection popup opens.    
1. Select the document(s) you want to transfer and click on **Open**.</br>
1. Select the remote folder where you want the document(s) or folders to be uploaded.</br>
    The selected path will update depending on the remote folder selected.

### Options{{> anchor 'duplicates-behavior'}}

#### Files Duplicate Management

On this section you need to choose what to do when a transfer would create a duplicate document on the server.
The setting is effective for all files that will be sent at the same time (it is called the *session*). Each *session* has its own duplicates behavior.

Available options are:
- **Create**: this is the default option. A duplicate document will be created, this is the same behavior as when adding a new file from Web UI.
- **Ignore**: the transfer will be cancelled, preventing the duplicate creation.
- **Override**: the document will be replaced on the server.

#### New Remote Folder

{{#> callout type='info' }}
This option is only available on **Nuxeo Drive 4.5.1 Beta** version.
{{/callout}}

This field lets you create your remote folder directly from the Direct Transfer popup. You don't have to go back to your instance to create it, you can handle everything at the same place.</br>
To do so:
1. Click on **Set**</br>
    A popup opens.
1. Type your new remote folder name and click **OK**.
1. You can still update it, by clicking once again on **Set**.
1. Once you've set your new remote folder click on **OK** to launch your transfer.
![]({{file name='new-remote-folder.gif' page='nuxeo-drive-release-notes'}} ?w=450)

## Manage Sessions

The Direct Transfer popup displays 3 tabs that will help you manage your transfers.

### Running Tab

Once a transfer is launched, you'll be redirected to the **Running** tab where the current running session(s) are displayed.

![]({{file page='nuxeo-drive-release-notes' name='DT-sessions-running.png'}} ?w=350)

From there you have full control on your session(s), you can pause/resume or cancel any upload.</br>
Some information is displayed: filename(s), date and time, number of files, and target remote folder.

### History Tab

Once the session is uploaded, it goes to the **History** tab and appears as "Completed".</br>
If you decided to cancel the session it will also be displayed there as "Cancelled".

![]({{file page='nuxeo-drive-release-notes' name='DT-sessions-history.png'}} ?w=350)

### Monitoring Tab

When a session is running you can navigate to the **Monitoring** tab, it displays the upload progress of each file. From there you can decide to cancel some transfers.

![]({{file page='nuxeo-drive-release-notes' name='DT-sessions-monitoring.png'}} ?w=350)

<!--
## Limitations

## Technical Overview

### Filemanager

### ...
-->
