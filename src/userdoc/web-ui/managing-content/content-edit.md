---
title: Editing Content
review:
    comment: ''
    date: '2018-10-15'
    status: ok
description: null
toc: true
labels:
    - creation
    - drag-and-drop
tree_item_index: 300
---
Editing a document means modifying its content (i.e. the attached file of a file document, the text of a note, etc.), or simply editing the title, description or any property of the document.

You can also edit documents using Nuxeo Drive. For more information, see [Nuxeo Drive Editing Documents]({{page space='client-apps' page='nuxeo-drive/#editing-documents'}}).

## Editing Properties

Properties of the documents, a.k.a. metadata, help the document to be more accurately referenced. Some properties are automatically filled in by the system, but most of them need to be filled in by users. When you create a document (file, note, workspace, section, or any other document type), its properties are empty.

The Nuxeo Platform uses Dublin Core metadata by default, although not all of them are necessarily displayed to the user by default. Dublin Core metadata are:

{{{multiexcerpt 'metadata' page='userdoc/editing-content'}}}

Although properties are not mandatory, filling them in will make your documents easier to find using [Nuxeo search engine]({{page space='userdoc' page='search'}}).

**To edit a property:**

1. Click on the Edit button in the document actions toolbar ![]({{file name='edit-icon_web-ui.png' page='icons-index'}} ?w=16)
    ![]({{file name='edit-metadata-web-ui.png'}} ?w=250,border=true)
2. Edit the metadata that you want.
3. Once it is done, click on **SAVE**

## Moving and Replacing Files using Drag and Drop

### Moving Documents

In a content view, drag and drop is available to move documents from a folderish document to another (like workspaces, folders, or collections).

1. From your folder view, select the document you want to move.
2. Click on selected documents and drag them.
3. Drop them on the folderish document you want.

## Managing Attachments

![]({{file name='replace.png'}} ?w=300,border=true)

### Replacing an attachment

1. From your document view, click **More** ![]({{file name='more.png'}} ?w=32) then **Replace** ![]({{file name='replace-icon.png'}} ?w=32).
<br>The Replace File pop-up appears.
1. Drag and drop the file in the zone or click **Upload main file**.
1. Click **Replace**.

### Removing an attachment

1. From your document view, click **More** ![]({{file name='more.png'}} ?w=32) then **Remove** ![]({{file name='remove-icon.png'}} ?w=32).
<br>The Remove File pop-up appears.
1. Click YES to confirm.

## Commenting

Comments enable users to discuss about the document and its evolution. To have better collaboration on content, users can create, edit, and delete threaded comments on documents.

### Creating a Comment

In the Comments section of the Document view, type your comment and click on ![]({{file name='comment-validate.png'}} ?w=32).

![]({{file name='comment-writing.png'}} ?w=300,border=true)

{{#> callout type='info'}} Please note that comments are not indexed yet.{{/callout}}

### Replying to a Comment
You can reply to your comments and to comments from other users. However, replies cannot be indented further than a 2-level thread.

**To reply to a comment:**

Click on ![]({{file name='reply.png'}} ?w=32,border=true) next to the comment you want to reply to.
Type your comment and click on ![]({{file name='comment-validate.png'}} ?w=20).
![]({{file name='reply-comment.png'}} ?w=300,border=true)

### Editing a Comment or a Reply
You cannot edit comments from other users. However, you can reply to them.

**To edit a comment or a reply:**

1. Click on Edit.
1. Modify your comment or reply and click on ![]({{file name='comment-validate.png'}} ?w=32,border=true).
The mention (edited) will figure on your edited comment or reply.

### Deleting a Comment or a Reply

1. Click on ![]({{file name='more-dots.png'}} ?w=32,border=true).
1. Click on Delete. ![]({{file name='comment-edit-delete.png'}} ?w=300,border=true) A confirmation pop-up appears. ![]({{file name='delete-pop-up.png'}} ?w=300,border=true)
1. Click on Delete to confirm. Your comment has been deleted.

{{#> callout type='warning'}} Please note that when a comment is deleted, all related replies are deleted too. Also deleting a comment is a permanent action, they cannot be restored. {{/callout}}
