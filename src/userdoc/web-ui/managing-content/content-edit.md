---
title: Editing Content
review:
    comment: ''
    date: '2018-10-15'
    status: ok
description: Editing a document consists in modifying its content, as well as simply editing the title, description or any property of the document.
toc: true
labels:
    - creation
    - drag-and-drop
tree_item_index: 300
---

{{! excerpt}}
Editing a document consists in modifying its content (i.e. the attached file of a file document, the text of a note, etc.), as well as simply editing the title, description or any property of the document.
{{! /excerpt}}

You can also edit documents using Nuxeo Drive. For more information, see [Nuxeo Drive Editing Documents]({{page space='client-apps' page='nuxeo-drive'}}#editing-documents).

## Editing Properties

Properties of the documents, a.k.a. metadata, ensure that the document is referenced more accurately. Some properties are automatically filled in by the system, but most of them need to be filled in by users. When you create a document (file, note, workspace, section, or any other document type), its properties are empty.

The Nuxeo Platform uses Dublin Core metadata by default, although not all of them are displayed to the user by default. Dublin Core metadata is:

{{{multiexcerpt 'metadata' page='userdoc/editing-content'}}}

Although properties are not mandatory, filling them in will make your documents easier to find using [Nuxeo search engine]({{page space='userdoc' page='search'}}).

**To edit a property:**

1. Click on the Edit button in the document actions toolbar ![]({{file name='edit-icon_web-ui.png' page='icons-index'}} ?w=16)
    ![]({{file name='edit-metadata-web-ui.png'}} ?w=250,border=true)
1. Edit the metadata that you want.
1. Once it is done, click on **SAVE**.

## Moving Documents Using Drag and Drop

In a content view, drag and drop is available to move documents from a folderish document to another (like workspaces, folders, or collections).

1. From your folder view, select the document you want to move.
1. Click on the selected documents and drag them.
1. Drop them on the folderish document you want.

## Moving Documents Using the Clipboard

The clipboard lets you easily copy or move content from one location (workspace, folder, etc.) to another. You can add as many documents as needed to the clipboard: adding documents does not replace the previous selection, it only adds more to the clipboard list. </br>

{{#> callout type='info'}}
Copying or moving content works in batches, meaning that the whole document list is copied or moved. It is therefore not possible to chose which document in the clipboard is to be copied or moved, or not. All documents in the clipboard are treated at once.
{{/callout}}

**Prerequisite:**

Copying and moving documents requires to have at least **Read** permission on the original document and **ReadWrite** permission in the target workspace (see [Permissions]({{page version='' space='userdoc' page='permissions'}}) page for more information).

**To copy or move document using the clipboard:**

1. On your instance, go to **Browse** > **Domain** and navigate to the desired source location (workspace, folder, etc.).
1. In View mode, display the content you want to add to the clipboard or directly check it from the list of documents.
1. Click on the **Add to Clipboard** {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Functional Overview.1544549838807/Editing Content/Moving Documents - Clipboard Button 2
    name: moving-documents-clipboard-button-2.png
    1.1.3#icon#up_to_date
--}}
![Moving Documents - Clipboard Button 2](nx_asset://50110a52-8b6e-4cef-bbe4-929f8f49d450 ?w=25) button displayed in the top bar. </br>
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Functional Overview.1544549838807/Editing Content/Moving Documents - Clipboard button
    name: moving-documents-clipboard-button.png
    1.1.3#screenshot#up_to_date
--}}
![Moving Documents - Clipboard button](nx_asset://1bf6a419-74e9-4916-aaeb-2164850d18a8 ?w=650,border=true)

  The selected content is added to the clipboard and the icon displays a notification icon {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Functional Overview.1544549838807/Editing Content/Moving Documents - Clipboard Notification
    name: moving-documents-clipboard-notification.png
    1.1.3#icon#up_to_date
--}}
![Moving Documents - Clipboard Notification](nx_asset://1e43e78d-4fa1-4d8e-8be9-ffb2f333785a ?w=25) showing how much documents are in the clipboard.

  {{#> callout type='info'}}
  In the clipboard, the list of documents persists even when you log out and log back in.
  {{/callout}}

1. Go back to **Browse** > **Domain** and navigate to the desired target location.
1. Go to **Clipboard**. </br>
  The list of added documents displays in the left panel.
  {{#> callout type='info'}}
  Click the **Remove** icon next to a document to remove it from the list.
  {{/callout}}

  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Functional Overview.1544549838807/Editing Content/Moving Documents - Clipboard Actions
    name: moving-documents-clipboard-actions.png
    1.1.3#screenshot#up_to_date
  --}}
  ![Moving Documents - Clipboard Actions](nx_asset://26dc8718-0ed0-4f82-8d33-a0a961b438ff ?w=650,border=true)
1. Click on the:
  - **Copy** button to copy documents to the target location. </br>
  Documents are copied and are present in both source and target locations.
  - **Move** button to move documents to the target location. </br>
  Documents are moved from the source location to the target location. The source location is emptied of the selected documents.
  {{#> callout type='info'}}
  Both actions empty the clipboard.
  {{/callout}}

**Working with copied documents**

Once documents have been copied or moved using the clipboard, please note that they have their own working logic. Applying tags, versions, comments, etc., on a copied document is done on the working document itself. It is not shared between the source and target document.

## Managing Attachments

![]({{file name='replace.png'}} ?w=300,border=true)

### Replacing an Attachment

1. From your document view, click **More** ![]({{file name='more.png'}} ?w=32) then **Replace** ![]({{file name='replace-icon.png'}} ?w=32).</br>
   The Replace File pop-up appears.
1. Drag and drop the file in the zone or click **Upload main file**.
1. Click **Replace**.

### Removing an Attachment

1. From your document view, click **More** ![]({{file name='more.png'}} ?w=32) then **Remove** ![]({{file name='remove-icon.png'}} ?w=32).</br>
  The Remove File pop-up appears.
1. Click **Yes** to confirm.

## Commenting

Comments enable users to discuss the document and its evolution. To have better collaboration on content, users can create, edit, and delete threaded comments on documents.

### Creating a Comment

In the Comments section of the Document view, type your comment and click on ![]({{file name='comment-validate.png'}} ?w=20)

![]({{file name='comment-writing.png'}} ?w=300,border=true)

{{#> callout type='info'}}
Please note that comments are not indexed yet.
{{/callout}}

### Replying to a Comment
You can reply to your comments and to comments from other users. However, replies cannot be indented further than a 2-level thread.

**To reply to a comment:**

Click on ![]({{file name='reply.png'}} ?w=20) next to the comment you want to reply to.
Type your comment and click on ![]({{file name='comment-validate.png'}} ?w=32)
![]({{file name='reply-comment.png'}} ?w=300,border=true)

### Editing a Comment or a Reply
You cannot edit comments from other users. However, you can reply to them.

**To edit a comment or a reply:**

1. Click on **Edit**.
1. Modify your comment or reply and click on ![]({{file name='comment-validate.png'}} ?w=32)
The mention (edited) will figure on your edited comment or reply.

### Deleting a Comment or a Reply

1. Click on ![]({{file name='more.png'}} ?w=32)
1. Click on **Delete**.
   ![]({{file name='comment-edit-delete.png'}} ?w=300,border=true)
   A confirmation pop-up appears.
   ![]({{file name='delete-pop-up.png'}} ?w=300,border=true)
1. Click on **Delete** to confirm. Your comment has been deleted.

{{#> callout type='warning'}}
Please note that when a comment is deleted, all related replies are deleted too. Also deleting a comment is a permanent action, they cannot be restored.
{{/callout}}
