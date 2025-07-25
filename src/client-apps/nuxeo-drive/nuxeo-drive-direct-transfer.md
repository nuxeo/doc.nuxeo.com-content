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

### Direct Transfer Integration in Web UI

**Starting with Web UI 3.1.21 for LTS 2023 and 2025.6.0 for LTS 2025**, the Direct Transfer functionality has been natively embedded within the Web UI. This integration allows users to initiate document uploads directly from the Web UI interface, removing the requirement to manually launch the Nuxeo Drive desktop application.

**Functional Enhancements:**
A new Direct Transfer action is now available on all folderish documents. When triggered, this action opens a pre-populated Direct Transfer dialog, automatically setting the target path based on the currently viewed folder.
Users are only required to select the file(s) for upload and confirm the transfer operation.

**Benefits:**
* Eliminates the need for context switching between Web UI and Nuxeo Drive.
* Reduces user interaction overhead and streamlines the document upload workflow.
* Enhances operational efficiency and improves the overall user experience.
  
**System Requirements:**
* Nuxeo Drive: Version 5.6.0 or higher
* Web UI: Version 2025.x
* Permissions: Edit rights on the target folderish document


### From the Nuxeo Drive Interface

1. Open Nuxeo Drive from your desktop and click on **Upload Content** button.</br>
    The Direct Transfer popup opens.
    ![]({{file name='direct-transfer-popup.png'}})
1. Click on **New transfer** at the top right of the popup.
    {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Drive/Nuxeo Drive /direct-transfer-creation.png
    name: direct-transfer-creation.png
    drive#popup#up_to_date
    --}}
    ![direct-transfer-creation.png](/nx_assets/b16b7fff-55c1-4925-823c-e2608745dd5c.png ?w=350)
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
This option is only available from **Nuxeo Drive 4.5.1** version.
{{/callout}}

This field lets you create your remote folder directly from the Direct Transfer popup. You don't have to go back to your instance to create it, you can handle everything at the same place.</br>
To do so:
1. Click on **New remote folder**</br>
    A popup opens.
1. Select the type of folder from the drop down list.
2. Type your new remote folder name and click **OK**.
4. Once you've set your new remote folder click on **OK** to launch your transfer.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Drive/Nuxeo Drive /New remote folder
    name: dt-new-remote-folder.png
    drive#popup#up_to_date
--}}
![New remote folder](/nx_assets/067afdc7-3909-4a72-85ef-07382bd35238.png ?w=350)

#### Document Type 

{{#> callout type='info' }}
This option is only available from **Nuxeo Drive 5.3.0** version and needs to be enabled from the **Features** tab.
{{/callout}}

Once you've selected your files and/or folders, 2 drop down lists are available at the bottom of the direct transfer popup. 
These drop-down lists work like when you create new documents on Web UI and therefore depend on your access rights and will be updated according to the file you want to transfer your documents to. 

You will be able to select the folder and/or file types of the documents you are transferring, even custom ones.

{{#> callout type='note' }}
As long as you have not selected any file(s) and/or folder(s) the fields remain grayed out. 
{{/callout}}

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Drive/Nuxeo Drive /dt-doc-type-selection.png
    name: dt-doc-type-selection.png
    drive#popup#up_to_date
--}}
![dt-doc-type-selection.png](/nx_assets/3078b8d5-1240-46a2-a3f7-3486208fe798.png ?w=250)

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
