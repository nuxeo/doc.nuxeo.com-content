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
tree_item_index: 200

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

## Drag and Drop

In a content view, drag and drop is available to move documents from a folderish document to another (like workspaces, folders, or collections).

1. From your folder view, select the document you want to move.
2. Click on selected documents and drag them.
3. Drop them on the folderish document you want.
