---
title: Document Types in Web UI
description: 'The Nuxeo Platform offers different document types such as workspaces, files, notes, pictures, etc.'
review:
    comment: ''
    date: '2018-10-15'
    status: ok
toc: true
labels:
    - history
tree_item_index: 100
---
## Domain

{{! multiexcerpt name='definition-domain'}}
Sections, workspaces and templates are grouped in **domains**. A domain can be considered as a mini-application in Nuxeo or a root in the application. Typically, you can use domains to open the application to two or more very different populations of users. For instance, you can have an "intranet" domain and an "extranet" domain. Domains can be totally independent or not, depending on the permissions you set on each domain.
{{! /multiexcerpt}}

## Section

{{! multiexcerpt name='definition-section'}}
When documents are finished and ready, they are published in **sections**. Traditionally opened to a wider audience than workspaces, sections are dedicated to content distribution and communication and are designed for content consultation. That is why users cannot change documents (edit or move them) in sections: documents published in sections are frozen versions of workspace documents.
{{! /multiexcerpt}}

## Workspace

{{{multiexcerpt 'definition-workspace' page='document-types'}}}

### Folder

{{! multiexcerpt name='definition-folders-types'}}
In workspaces, you can create and manage your documents in folders. A folder works like a workspace, but the documents available for creation are limited. In a folder, you can create: documents, notes, files, collections and sub-folders.

There are two types of folders: regular folders and ordered folders. The difference between the two folder types is the way content is sorted.
{{! /multiexcerpt}}

**Regular Folders**

{{! multiexcerpt name='definition-folder'}}
Regular folders, called "Folders", have the same behavior as workspaces. In a regular folder, documents are sorted on the title by default. You can change the sort criterion by clicking on the content table columns title. You can thus sort them on their state, author, etc.
{{! /multiexcerpt}}

In a folder, you can:

- [Create documents]({{page page='content-create'}}) and do all the actions available on them (edit, approve, manage relations, etc.)
- [Manage permissions]({{page page='permissions'}})
- [Subscribe to alerts]({{page version='' space='userdoc' page='alerts'}})
- [Manage the folder's trash]({{page page='content-delete'}})

Like in a workspace, you can use drag and drop to create content in a folder.

**Ordered Folders**

{{! multiexcerpt name='ordered-folders'}}
In an ordered folder, documents are manually sorted. So, the order in which documents are listed in the folder doesn't depend on one of its properties (version, author, etc); you decide where it should be displayed in the list. When a document is created, it is added at the end of the list. It is not possible to sort documents automatically by clicking on the columns titles in an ordered folder.

An ordered folder has the same presentation as a regular folder, but it has some additional buttons below the content table:

- Move up
- Move down

To change the content's order, select a document using the checkbox on the left and click on the **Move** button you need. The document is moved in the list of documents available in the folder.

You can move groups of documents. Moving groups of documents up or down joins the group items and positions them one row up or one row down. Moving groups does not affect the rest of the order.
{{! /multiexcerpt}}


### File

{{! multiexcerpt name='definition-file'}}
A file document is a basic binary container and is composed of an attached file that you upload on the application. You can upload files of any format.

A file is composed of:

- A title (mandatory),
- A description (optional),
- An attached file.
{{! /multiexcerpt}}

![]({{file name='file-web-ui.png'}} ?w=600,border=true)

**To create a file**, in a workspace, click on ![]({{file name='create_button.png' space='nxdoc' page='web-ui-overview'}} ?w=30). On the **Create** popup, click on the desired document. Fill in the document's creation form and click on **Create**.

When the file is created, users can enhance it by [filling its properties]({{page version='' space='userdoc' page='content-edit'}}), adding attached files on it.

### Note

The note is a basic rich text container that consists in a text displayed in the **View** tab of the document. The note is usually created using the integrated rich editor, displayed in the note creation form. This editor enables layout modifications on the text.

![]({{file name='note-web-ui.png'}} ?w=600,border=true)

The default format of the note is HTML. The other formats available are .txt, .xml and Markdown.

A note is composed of the fields below:

Fields | Description
--- | ---
Title | The note's title
Description | The text that explains what the note is about.
Content | The text of the note created using the rich text editor.
Format | The format of the automatically created file used to export notes from the Nuxeo Platform.

**To create a note**, in a workspace, click on ![]({{file name='create_button.png' space='nxdoc' page='web-ui-overview'}} ?w=30). On the **Create** popup, click on the desired document. Fill in the document's creation form and click on **Create**.

You can also create a note by importing a .txt, a .html or a .xml file [using drag and drop]({{page page='content-create'}}#importing-documents-using-drag-and-drop).
When the note is created, users can enhance it by attaching files on it or just [editing it]({{page page='content-edit'}}).

#### Attachments

It is possible to add attachments to [Files](#file) and [Notes](#note) using the Files tab. This tab is available to users with at least Edit permission. There is no limit to the number of attachments.

**To add attachments to your document:**

In the **View** tab of the document concerned, drag and drop the attachment in the field or click on **Upload attachment** and a popup lets you select the attachment from your computer.

**To remove attachment:**
In the **View** tab of the document concerned, click on ![]({{file name='delete_web-ui.png' page='icons-index'}}) next to the attachment concerned. The attachment is immediately deleted.

{{#> callout type='note' heading='Limitations'}}
- Attached files are not synchronized with [Nuxeo Drive]({{page version='' space='client-apps' page='nuxeo-drive'}}).
{{/callout}}

### Picture

Pictures are specific files. To take into account the specificities of pictures, their View shows additional pieces of information, such as:

- Rotate actions
- The picture's EXIF metadata
- Additional picture views

![]({{file name='picsMetadata-webui.png' space='nxdoc' page='digital-asset-management-dam'}} ?w=600,border=true)

For more information about picture document, take a look to the [Digital Asset Management page]({{page version='' space='nxdoc' page='digital-asset-management-dam'}}).

### Video

{{! multiexcerpt name='definition-video'}}
Video is a document type dedicated to the management of videos files. It provides the following specific features:
- A player to view the video from the application
- A storyboard to navigate in the video and alternative video formats.

![]({{file name='video_document_type-webui.png' space='nxdoc' page='digital-asset-management-dam'}} ?w=600,border=true)

For more information about video document, take a look to the [Digital Asset Management page]({{page page='digital-asset-management-with-the-nuxeo-platform'}}).
{{! /multiexcerpt}}

### Audio

Audio is a document type dedicated to audio files management. It provides a player from the document View to listen to it from the application.

Audio documents can be [created and edited]({{page page='content-edit'}}) like any other document type. They don't have any specific tab or action available.

For more information about audio document, take a look to the [Digital Asset Management page]({{page version='' space='nxdoc' page='digital-asset-management-dam'}}).

## Templates

Templates are the easiest way to automate the creation of workspace tree structures. This is useful in many cases, for example when:

- You have many workspaces to create and want them to follow a certain structure of Folders, Files, or any type of documents.
- You want to keep a consistency among different workspaces that users will create. For example, you may want each team's workspace to have a mail folder, a "projects" workspace, etc.

**To create a template:**

1. Click on **Templates** in the navigation tree.
2. From there, you can create a new Template containing any type of document, and even files, with the tree structure you want.
3. Once a new Template has been created, you can create many workspaces from this template.

{{#> callout type='info' heading='Templates and User Rights Management'}}
- When you set permissions on the 1st-level workspace of a template - here IT project workspace structure-, it will be inherited in the new workspaces. For example, a user who is not allowed to read "IT project workspace structure" will not be able to see it when creating a workspace.

- When you set permissions on the content of a workspace in a template, it won't be inherited in the new workspaces. For example, a user who can't read a folder like "Meeting reports" in a workspace but have reading access on the 1st-level workspace, will be allowed to see "Meeting reports".
In a few words, don't try to manage workspaces' permissions with Templates (this can be done other ways, like using [Studio]({{page space='studio'}}) configuration tool).
{{/callout}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related User Documentation'}}

- [Creating Content]({{page page='nxdoc/creating-content'}})
- [Editing Content]({{page page='nxdoc/editing-content'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Override Existing Document Types]({{page space='nxdoc' page='how-to-override-existing-document-types'}})
- [How to Define a Document Type]({{page space='nxdoc' page='how-to-define-a-document-type'}})

{{/panel}}</div></div>
