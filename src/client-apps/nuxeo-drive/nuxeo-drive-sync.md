---
title: Synchronization
description: 'Drive Sync enables the synchronization of folders or workspaces from the Nuxeo Platform with local folder on your computer, providing offline edition capabilities.'
review:
    comment: ''
    date: '2021-05-06'
    status: ok
labels:
    - nuxeo-drive
    - drive-sync
    - synchronization
tree_item_index: 300
toc: true
---

Drive Synchronization lets you mark some workspaces or folders to synchronize on the Nuxeo Platform web interface. Documents are saved on your computer so you can access them and work on them offline. The next time you have an Internet connection, changes in your local folder are uploaded to the Nuxeo Platform and changes on the server are also automatically downloaded to your computer.

## Configuration

- Enable the feature from the **Feature** tab and restart Nuxeo Drive.
- Once Nuxeo Drive is restarted, a new tab **Sync** is available in your settings.

![]({{file name='drive-tab-sync.png' page='nuxeo-drive'}})

## Synchronizing Content

### Nuxeo Drive Synchronization Status

Here are the different statuses of Nuxeo Drive:

Icon | Old Icon | Status
--- | -- | ---
![]({{file name='drive-icon-offline.png' page='nuxeo-drive'}} ?w=20) | ![]({{file name='drive-icon-offline-old.png' page='nuxeo-drive'}}) | Synchronization is disabled (offline mode or suspended synchronization).
![]({{file name='drive-icon-online.png' page='nuxeo-drive'}} ?w=20) | ![]({{file name='drive-icon-online-old.png' page='nuxeo-drive'}}) | Nuxeo Drive has successfully synchronized.
![]({{file name='drive-icon-transferring.png' page='nuxeo-drive'}} ?w=20) | ![]({{file name='drive-icon-transferring-old.png' page='nuxeo-drive'}}) | Nuxeo Drive is synchronizing with the Nuxeo Platform.
![]({{file name='drive-icon-stopping.png' page='nuxeo-drive'}} ?w=20) | ![]({{file name='drive-icon-stopping-old.png' page='nuxeo-drive'}}) | Your authentication token has expired.

### {{> anchor 'access-local-drive-folder'}}Accessing the Nuxeo Drive Folder

When you install Nuxeo Drive on your computer, it creates a "Nuxeo Drive" folder on your computer, from where you will be able to access the synchronized documents. This Nuxeo Drive folder is located:

- GNU/Linux: `/home/USER/`
- macOS: `/Users/USER/`
- Windows: `C:\Users\USER\Documents\`

Quick access to this folder is possible at any time using the Nuxeo Drive icon:

1. Into the system tray menu, right-click on the icon ![]({{file name='drive-icon-online.png' page='nuxeo-drive'}} ?w=20) (or ![]({{file name='drive-icon-offline-old.png' page='nuxeo-drive'}} ?w=14) on old versions).
2. Click on the icon ![]({{file name='drive-icon-open-folder.png' page='nuxeo-drive'}}).
    The Nuxeo Drive opens like any folder. You can now browse the Nuxeo synchronized folders from your desktop.

### {{> anchor 'synchronizing-workspaces-root'}}Marking Workspaces and Folders for Synchronization

Nuxeo Drive enables the synchronization of the document types below and their content:

- Workspace
- Folder
- Ordered folder

In the rest of this documentation, we'll call them all "folder".

### Synchronizing a Folder

Starting from Nuxeo Platform 6.0, you can synchronize spaces on which you have [at least Read permissions]({{page version='' space='userdoc' page='permissions'}}). For older versions of the Nuxeo Platform, you need at least Edit permissions to be able to synchronize a space.

#### Web UI

To synchronize a space, in the Nuxeo Platform, click on the icon ![]({{file name='drive-webui-synced-under-root.png' page='nuxeo-drive'}} ?w=20).
The icon becomes ![]({{file name='drive-webui-unsynced.png' page='nuxeo-drive'}} ?w=20). Documents inside the synchronized space have a Drive local edit icon ![]({{file name='drive-webui-direct-edit.png' page='nuxeo-drive'}} ?w=20).

{{! multiexcerpt name='drive-content-sync'}}
The folder and all its content is now available in your local Nuxeo Drive folder. You can now create, edit, delete documents from your computer. If you only have Read permissions, documents are in read-only mode.
{{! /multiexcerpt}}

In the **Administration** menu > **Nuxeo Drive**, the space is displayed in the "Synchronization root" section. This is where you can see all the spaces you have synchronized with Nuxeo Drive.

![]({{file name='drive-webui-newtab.png' page='nuxeo-drive'}} ?w=650)

#### JSF UI

{{{multiexcerpt 'JSF-UI-required' space='nxdoc' page='generic-multi-excerpts'}}}

To synchronize a space, in the Nuxeo Platform, click on the icon ![]({{file name='drive-icon-unsynced-old.png' page='nuxeo-drive'}}).
The icon becomes green. Documents inside the synchronized space have an icon ![]({{file name='drive-jsf-synced-under-root.png' page='nuxeo-drive'}}) and a Drive local edit icon ![]({{file name='drive-jsf-direct-edit.png' page='nuxeo-drive'}}).

![]({{file name='drive-synchronise-icon.png' page='nuxeo-drive'}} ?w=650)

{{{multiexcerpt 'drive-content-sync'}}}

On your Home Nuxeo Drive tab, the space is displayed in the "Synchronization root" section. This is where you can see all the spaces you have synchronized with Nuxeo Drive.

### Suspending Synchronization

If a synchronized folder holds big document or a large amount of documents, synchronization can take some time and some computer resources. It is then possible to prevent this by suspending synchronization until a more convenient time.

**To suspend synchronization:**

1. Click on the Drive icon ![]({{file name='drive-icon-online.png' page='nuxeo-drive'}} ?w=20) in the system tray.
2. Click on the icon ![]({{file name='drive-settings-icon.png' page='nuxeo-drive'}} ?w=20) and click on the **Suspend** menu item.
    If Nuxeo Drive is currently synchronizing, synchronization is completed before suspending Nuxeo Drive.
    As long as synchronization is suspended the Drive icon becomes ![]({{file name='drive-icon-offline.png' page='nuxeo-drive'}} ?w=20) (or ![]({{file name='drive-icon-offline-old.png' page='nuxeo-drive'}} ?w=14) on old versions).

**To resume synchronization:**

1. Click on the Drive icon ![]({{file name='drive-icon-offline.png' page='nuxeo-drive'}} ?w=20) (or ![]({{file name='drive-icon-offline-old.png' page='nuxeo-drive'}} ?w=14) on old versions) in the system tray.
2. Click on the icon ![]({{file name='drive-settings-icon.png' page='nuxeo-drive'}} ?w=20) and click on the **Resume** menu item.
    The Drive icon becomes blue again and synchronization is available again.

### Unsynchronizing a Folder

There are two ways to desynchronize a folder.

- From the server, when you desynchronize a folder all its content is desynchronized from all the devices where you use Drive.
- From the client, when you desynchronize a folder you can do it in detail and choose to locally deactivate synchronization of different folders for the current device.

#### Deactivating Synchronization Locally (Client)

By default, once you have synchronized a folder all its content (files and folders) is synchronized. But you can deactivate synchronization locally on some folders. This feature enables you to manage the storage space dedicated to the synchronization, which is especially useful if you use a device with a low-storage capacity.

Clicking on the **Select sync folders** button in the [Settings window]({{page page='nuxeo-drive-installation-configuration'}}#settings) shows the **Nuxeo Drive Filters** windows from which you can unselect folders to unsynchronize. Unselected folders remain displayed to you can easily reselect and synchronize them back. They are still marked as synchronized on your web UI.

{{#> callout type='warning' }}
Please note that when synchronizing a significant amount of data, it is highly inadvisable to deactivate synchronization of the folders containing this data, to avoid generating conflicts with the server. Versions 2.5.9 and above will not allow to access the "select sync folders" window when such synchronization is running.
{{/callout}}

#### Unsynchronizing Folders (Server)

##### Web UI

Unsynchronizing a folder is only possible from the Nuxeo Platform web interface. You can only unsynchronize the whole synchronized space, i.e. from the synchronization root ![]({{file name='drive-webui-synced-under-root.png' page='nuxeo-drive'}} ?w=20).

To unsynchronize a space, in the Nuxeo Platform interface, click on the icon ![]({{file name='drive-webui-synced-under-root.png' page='nuxeo-drive'}} ?w=20).
The icon becomes gray, indicating that the space is no longer synchronized. The folder and its content is no longer available from your Nuxeo Drive folder and from the Home **Nuxeo Drive** tab.

##### JSF UI

{{{multiexcerpt 'JSF-UI-required' page='nxdoc/generic-multi-excerpts'}}}

Unsynchronizing a folder is only possible from the Nuxeo Platform web interface. You can only unsynchronize the whole synchronized space, i.e. from the synchronization root ![]({{file name='drive-icon-synced-old.png' page='nuxeo-drive'}}): it is not possible to unsynchronize a child ![]({{file name='drive-jsf-synced-under-root.png' page='nuxeo-drive'}}). Clicking on the icon ![]({{file name='drive-jsf-synced-under-root.png' page='nuxeo-drive'}}) brings you back on the space from which the synchronization is done.

To unsynchronize a space, in the Nuxeo Platform interface, click on the icon ![]({{file name='drive-icon-synced-old.png' page='nuxeo-drive'}}).
The icon becomes gray, indicating that the space is no longer synchronized. The folder and its content is no longer available from your Nuxeo Drive folder and from the Home **Nuxeo Drive** tab.

## Managing Documents

### {{> anchor 'creating-documents'}}Creating Documents

#### From the Platform

When you create a new document in a Drive-synchronized folder from the Platform, it is automatically created in your Drive folder at the next synchronization. If you created a file or a picture, what is in the Drive folder is the attachment (mydoc.doc for instance for Nuxeo document whose title could be "My document").

#### From the Local Nuxeo Drive Folder

Adding a new document in a Drive-synchronized folder from your computer will create the document in the Platform workspace at the next synchronization. The document title is the name of the original file, and no metadata is filled in.

{{{multiexcerpt 'dnd-file-correspondence' space='nxdoc' page='creating-content'}}}

### Editing Documents

#### Versioning

{{! multiexcerpt name='drive-versioning'}}
When you edit a document, either from your Nuxeo Drive folder or using the online editing, a [new version]({{page space='userdoc' page='version'}}) is automatically created on the Platform and the version number is updated:

- If you are not the last contributor of the document
- Or if your last edit is more than an hour ago
{{! /multiexcerpt}}

Then, if your document's version was 1.0 before modification for instance, it automatically becomes 1.1+ after you edited it from the Nuxeo Drive folder and the 1.1 is archived as it is created. Otherwise, a simple modification is done on the document and logged in the document's History.

See the page [How to Customize Nuxeo Drive Versioning Policy]({{page page='how-to-customize-nuxeo-drive-versioning-policy'}}) to change this behavior.

### Editing a Locked Document

In the Nuxeo Drive folder, no indication is available if a document has been locked from the Nuxeo Platform interface. Nuxeo Drive won't prevent you from working on a document, but it will not update the locked document on the server if you are not the locker.

### Managing Conflicts

It can happen that a document is edited by several users locally at more or less the same time. Or that a user edits a document locally in offline mode, and that the same document is modified during that offline period. When Nuxeo Drive tries to synchronize the document it detects that there may be a conflict between the different modifications of the document.

Clicking on the conflict message shows you the details and how to resolve the conflicts.

- **Use local**: The document in your Nuxeo Drive folder overrides the document on the server.
- **Use remote**: The document on the server is downloaded in your Nuxeo Drive folder and overrides your local version.

![]({{file name='drive-resolve-conflicts.png' page='nuxeo-drive'}})


### Renaming Documents

Renaming a document from the server, i.e. changing the document's title, has no impact on the file's name in your Nuxeo Drive folder, which is the document's attachment.

Renaming a document from the Nuxeo Drive folder renames the document and its attachment on the server if they have the same name. If the document title is different from the attachment's, then only the attachment is renamed.

### Uploading Documents with Direct Transfer

Starting from **Nuxeo Drive 4.4.4**, the Direct Transfer feature allows to upload content on the server, providing to the user a productive and network resilient way of transferring the content.

[Discover&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true" ></i>]({{page page='nuxeo-drive-direct-transfer'}})

### {{> anchor 'metadata-edit'}}Editing Metadata

{{#> callout type='info' }}
Metadata edit is available starting from Nuxeo Platform 6.0.</br>
With a Drive client version below 4, it will open in a view within the application. Otherwise, it will open directly in the browser.</br>
The custom metadata page is only available with the JSF UI. If using WebUI, it will direct you to the default page of the document.
{{/callout}}

Metadata Edit allows you to edit the metadata of your document from your desktop.

1. Go to your Nuxeo Drive folder on your computer.
2. Right-click on the name of the document that you want to edit.
3. Click on Nuxeo Drive > Edit metadata.
    A view or a browser page is then opened to the document metadata.
    ![]({{file name='drive-metadata-view.png' page='nuxeo-drive'}} ?w=350)
4. Click on **Edit** and modify your document,
    ![]({{file name='drive-metadata-edit.png' page='nuxeo-drive'}} ?w=350)
5. Click on **Save**.

### Moving Documents

You can move documents either from your local Nuxeo Drive folder or [from the Platform]({{page space='userdoc' page='content-edit'}}). When you move documents between two synchronized spaces, the move is done on the other side, whether you move documents from the Platform or from your Drive folder.

When you move a document from a Drive-synchronized folder to an unsynchronized one, the behavior is different if you move the document from the Platform or from your local folder.

- If you move the document from the Platform, the document is not available anymore in your local folder.
- If you move the document from your local folder, the document is deleted on the Platform and moved into the folder's trash. In the document's history, the deletion is tagged with the Nuxeo Drive category.

### Deleting Documents

When you [delete documents from the Platform]({{page space='userdoc' page='content-delete'}}), they are deleted from your local Drive folder at the next update.

When you delete a document from your local Drive folder, the document is deleted on the Platform and moved into the folder's trash. In the document's history, the deletion is tagged with the Nuxeo Drive category.

Starting with Drive 4.1.0, a local deletion will by default unsynchronize the document, and not remove it from the Platform. Clicking on **Change deletion behavior settings** in the **General** tab of the client will allow the user to set it back to a real remote deletion. The user will also be prompted to confirm or rollback each deletion, unless he checks the **Don't ask me again** checkbox of the dialog window.

## Unauthorizing a Drive Client to Access the Nuxeo Platform

When you start Nuxeo Drive on your computer for the first time, you need to provide your credentials so the Drive client can communicate with the Nuxeo Platform. This creates an authentication token on the Platform, that is displayed on the **Nuxeo Drive** tab in the **Home** on JSF UI and on the **Nuxeo Drive** part of **User Settings** on Web UI.. If you want to unauthorize a Drive client to access the Nuxeo Platform using your credentials, for instance because you changed your computer, you can revoke this authentication token. The Nuxeo Drive client will then require the credentials to be updated to connect to the Nuxeo Platform.

**To revoke an authentication token:**

1. On the Nuxeo Platform, click on the **Nuxeo Drive** tab (see locations above).
2. Click on the **Revoke** button of the token to be revoked. Several elements are displayed to help you identify the right token:

    - the device description: whether it is a macOS client, Windows client, GNU/Linux client;
    - the creation time: date and time at which the token was created, i.e. the date and time at which you provided it with your credentials.

3. In the window that pops up, click on **OK** to confirm.
    The Nuxeo Drive client cannot communicate with the Nuxeo Platform and switches to offline. When you click on the Drive icon, it says "Update credentials (required)".
{{! /multiexcerpt}}
