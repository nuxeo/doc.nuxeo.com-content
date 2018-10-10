---
title: Browse
review:
    comment: ''
    date: '2017-03-29'
    status: ok
description: null
toc: true
labels:
    - creation
    - drag-and-drop
    - content-review-lts2017
tree_item_index: 100

---
{{! excerpt}}
In order to help you find the documents that you need, the Nuxeo Platform features several options to access, create and edit documents.
{{! /excerpt}}

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Getting started with Nuxeo WebUI](https://university.nuxeo.com/learn/public/course/view/elearning/92/getting-started-with-nuxeo-web-ui)
- [Importing Documents in the Nuxeo Platform](https://university.nuxeo.com/learn/public/course/view/elearning/86/DataCapture)
![]({{file name='university-webui.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

## Browsing Content

### Drag and Drop

In the View tab, you can use drag and drop to move documents in workspaces, folders, or collections.

1. In **View**, select the document you want to move. 
2. Click on selected documents and drag them.
3. Drop them on the folderish document you want.


### Side Menu
The side menu offers two different tabs. Clicking on elements on the left will open a side panel (also called **Drawer**) with the content of the tab selected: browsing options are on the first left column, content to browse on the second and content to view on the main area.
This new pattern allows to start browsing without changing the context of work.
The side menu displays all the domain structure from the root. It enables you to easily access any space in the application structure.

### Dashboard

{{{multiexcerpt 'intro-dashboard' page='browsing-content'}}}

![]({{file version='' space='nxdoc' page='web-ui-dashboard' name='DASHBOARD.png'}} ?w=600,border=true)

To access your dashboard, click on the icon on the top left hand corner of your platform.

### Browsing Lists of Documents

Users can change the way content is presented in the folderish repositories (workspaces, folders, sections) and search results.They can also change the displayed information.

#### Changing View Mode
Two views of the content lists are available on the top right corner of your workspace

- Table View ![]({{file name='table-view-web-ui.png' page='icons-index'}} ?w=20) (default view): This view displays the title of the documents with a small icon (that depends on the type of document or main attachment type) and a set of metadata in a table

- Grid View ![]({{file name='grid-view-web-ui.png' page='icons-index'}} ?w=20): This view displays a thumbnail of documents. For folders, the thumbnail of the first item in the folder is displayed.

#### Changing Displayed Information
Lists of documents, whether in grid view or thumbnail view, show some information about the documents, like their title, the last contributor, their lifecycle state, etc. Users can change the information displayed, i.e. the columns for the list view or the information below the document thumbnail in thumbnail view.

To change the information displayed in content views, click on the icon&nbsp;![]({{file name='manage_collection_web-ui.png' page='icons-index'}} ?w=20). A pop-up is displayed: select the information that you want to be displayed among the list.

![]({{file name='columns-settings-web-ui.png'}} ?w=250,border=true)

Once it's done click on **Close**.

{{#> callout type='info'}}
The displayed information can also be changed from the [Search view]({{page version='' space='userdoc' page='search'}}).
{{/callout}}

The information displayed on content views can be filtered with filters at the top of every columns.

### Access Keys
Some actions or features are accessible using access keys:
- c: Create
- d: Dashboard
- s: Search
- shift + /: Search

## Creating Content
{{{multiexcerpt 'intro-creating-content'}}}

### Creating a Document Using the Create Button
Creating a document using the button ![]({{file name='create_button.png' space='nxdoc' page='web-ui-overview'}} ?w=30) enables you to select the type of document you want to create among all Nuxeo Platform's document types.

![]({{file name='creation-popup-web-ui.png'}} ?w=450,border=true)

To create a document using the **Create** button:
1. Click on the button ![]({{file name='create_button.png' space='nxdoc' page='web-ui-overview'}} ?w=30) and click on the desired document.
2. Fill in the document's creation form and click on the **Create** button.

The View tab of the document is displayed.

### Importing Documents Using Drag and Drop
Drag and drop is based on the HTML 5 standard and is available on all browsers that support the HTML 5 Drag and drop, without extension. Basically, this includes all browsers supported by the Nuxeo Platform and the Web UI:

{{{multiexcerpt 'webui-supported-browsers' space='nxdoc' page='web-ui-overview'}}}

See the [complete requirements]({{page version='' space='nxdoc' page='web-ui-overview'}}#requirements).

You can use drag and drop to easily import content into a workspace or just to create one document at a time. Two types of import are available:

- Quick import, that enables to quickly create documents in workspace
- Import with properties, that enables to fill in metadata of the document(s) before they are created in the workspace

#### Quick Import of Documents

To import content into Nuxeo, drag an item from your computer and drop it into a workspace. The document is then automatically created in the workspace and its title is the name of the original file, and no properties are filled in.

- You can drag and drop one or more files of any type in Nuxeo, directly in the workspace concerned.
- You can also drag and drop one or more files of any type from the **Import** tab of the creation popup. On this popup you can also edit the **location** of your import.
  ![]({{file name='import-popup-web-ui.png'}} ?w=450,border=true)

#### Import with Properties

It is possible to do a drag and drop import of documents with an additional step to fill in some properties. This prevents you from editing the documents after the import is done.

**To import documents with metadata:**

1. Drag your file from your desktop to the workspace main area in the browser.
    The file is uploaded. When the upload is done, the creation popup on the **Import** tab is displayed.
    ![]({{file name='dnd-web-ui.png'}} ?w=350,border=true)

2. Click on **ADD PROPERTIES**.
3. Fill in the properties that you need and then decide if you want to **EDIT NEXT** or **APPLY TO ALL** your modifications.
    ![]({{file name='add-properties-web-ui.png'}} ?w=350,border=true)
4. Once it's done click on **CREATE**.

The file is created with the filled in properties.

### Creating Content Using Nuxeo Drive

{{{excerpt 'userdoc/nuxeo-drive'}}}

You can very easily import document by moving them from a desktop folder to a Nuxeo Drive folder, or creating office files directly in a Nuxeo Drive folder. Read the [Nuxeo Drive documentation]({{page page='nuxeo-drive'}}) for more information.

### Automated Metadata Extraction

{{{multiexcerpt 'automated-metadata-extraction-excerpt' page='userdoc/creating-content'}}}

Read the [Binary Metadata]({{page space='nxdoc' page='binary-metadata'}}) documentation for more information.

## Editing Content

Editing a document means modifying its content (i.e. the attached file of a file document, the text of a note, etc.), or simply editing the title, description or any property of the document.

### Editing Properties

Properties of the documents, aka metadata, help the document to be more accurately referenced. Some properties are automatically filled in by the system, but most of them need to be filled in by users. When you create a document (file, note, workspace, section, or any other document type), its properties are empty.

The Nuxeo Platform uses Dublin Core metadata by default, although not all of them are necessarily displayed to the user by default. Dublin Core metadata are:

{{{multiexcerpt 'metadata' page='userdoc/editing-content'}}}

Although properties are not mandatory, filling them in will make your documents easier to find using [Nuxeo search engine]({{page space='userdoc' page='search'}}).

**To edit a property:**

1. Click on the Edit button in the document actions toolbar ![]({{file name='edit-icon_web-ui.png' page='icons-index'}} ?w=16)
    ![]({{file name='edit-metadata-web-ui.png'}} ?w=250,border=true)
2. Edit the metadata that you want.
3. Once it is done, click on **SAVE**

## Exporting Content
Users can export documents on their computer. It is possible to export:

- One document at a time
- An entire workspace, folder, section

### Exports Available

#### From a Folder

- The **XML export** is a low level export that enables users to either get the XML definition of the document or get a folder for each exported document that contains:
    - document.xml file holding the document's metadata and various information such as the applied access rights,
    - A .blob file that holds the binary content of the document. This blob is referenced in the document.xml file;
- The **ZIP export** enables you to export a whole workspace, section or folder in a zipped XML folder. This export is only available on folderish documents.

#### From a Document

- The **PDF export** enables you to get a PDF version of your document. This export is only available on non-folderish documents.
- The **ZIP Export** enables you to get a zipped folder with the documents' main attachment (.pdf, .doc files). This export is only available on non-folderish documents.
- The **XML export** is a low level export that enables users to either get the XML definition of the document or get a folder for each exported document that contains:
    *   document.xml file holding the document's metadata and various information such as the applied access rights,
    *   A .blob file that holds the binary content of the document. This blob is referenced in the document.xml file;


The exports are available by clicking on the export button ![]({{file name='export-web-ui.png' page='icons-index'}} ?w=16).

### Low-Level Exports

XML export is a low level export that enables users to get a set of information on documents in an XML file. This export type is useful for debugging, and as such, is mainly intended to administrators. You can export:

*   A single document
*   The structure of a folder

#### XML Export of a Single Document

The XML export of a document enables users to get a folder for the exported document that contains:

*   A document.xml file holding the document's various information (the applied access rights, the document's metadata, its path)
*   A .blob file that holds the binary content of the document. This blob is referenced in the document.xml file

To **get the XML export of a document**, from the document, click on the icon&nbsp;![]({{file name='export-web-ui.png' space='userdoc' page='icons-index'}} ?w=16) and select **ZIP Export**.

![]({{file name='available-exports-web-ui.png'}} ?w=350,border=true)

{{#> callout type='tip' }}
If you're only interested in the XML file of the document, click on **XML Export**. The XML file should open in a new tab or window (depending on your browser's preferences).
{{/callout}}

When you unzip it, you get a folder named from the document, that contains a document.xml file and .blob for each attachment of the document.

#### XML Export of a Folder

It is possible to export a whole workspace, section or folder in a zipped XML folder. This specific export enables users to import the folder back, with the same access rights definition.

To **get the XML export of a folder**, from the folder (or workspace or section), click on the icon&nbsp;![]({{file name='export-web-ui.png' space='userdoc' page='icons-index'}} ?w=16) and select **ZIP Export** on the popup window.

{{#> callout type='tip' }}
If you're only interested in the XML definition of the folder, click on **XML Export**. The XML file should open in a new tab or window (depending on your browser's preferences).
{{/callout}}

When you unzip it, you get a folder named from the document, that contains a document.xml file and .blob for each attachment of the document.

## Downloading Content

Users can download documents on their computer. It is possible to download:
- One document at a time
- An entire workspace, folder, section

**From a Document**
- Go to the document you want to download
- Click on the Download button ![]({{file name='download-document-web-ui.png' page='icons-index'}} ?w=25) under the preview of your document.</br>
  Your document is downloaded on your computer.

**From a Folder**
- Go to the folder/workspace that you want
- Select several documents
  A top bar is displayed with document actions
- Click on the download button ![]({{file name='download-multiple-documents-web-ui.png' page='icons-index'}} ?w=22)</br>
  The documents are downloaded as a .zip on your computer.


## Deleting Content
{{! multiexcerpt name='functional-overview-trash-feature'}}

Only users with "Edit" or "Manage everything" [permissions]({{page version='' space='userdoc' page='managing-permissions'}}) can delete documents from a space.

### From Workspace View

To delete one or several documents, select them in your workspace and click on the delete icon&nbsp;![]({{file name='delete_web-ui.png' page='icons-index'}} ?w=18) in the action toolbar.

### From Document View

On the document itself you can decide to delete the file of your document by clicking on the Delete icon&nbsp;![]({{file name='delete_web-ui.png' page='icons-index'}} ?w=18) next to its title and add a new one.

### Managing Deleted Documents

Users with "Manage everything" permissions can access the workspace's Trash and perform one of the following actions:

**Restore Document**

1. Go to the workspace that you want and click on the **Trash** view.</br>
   Deleted document(s) of the workspace are displayed.
1. Select the document(s) that you want to restore
1. Click on ![]({{file name='restore-doc-web-ui.png' page='icons-index'}} ?w=18) in the action toolbar at the top of the page.</br>
   Documents are moved back to the **View** tab of the workspace and available to users.

![]({{file name='restore-content-web-ui.png'}} ?w=600)

**Delete Permanently**

1. Go to the folder that you want and click on the **Trash** view.</br>
   The deleted document(s) of the folders are displayed.
1. Click on the document you want to delete permanently.
  A top bar is displayed at the top of the document.
1. In **View** click on ![]({{file name='delete-permanently-web-ui.png' page='icons-index'}} ?w=18) in the action toolbar at the top of the page.</br>

{{#> callout type='warning' }}
  Documents are permanently erased from the application. They cannot be restored.
{{/callout}}

![]({{file name='delete-permanently-content-web-ui.png'}} ?w=600)

**Empty Trash**

1. Go to the workspace where you want to empty the trash.
1. Click on the **Trash** view.
1. Click on the **Empty the trash** button at the top right of the page. ![]({{file name='empty-trash-web-ui.png'}} ?w=70)

### Trash Search

On the side menu on the left a **Trash** menu is available where you can find all the documents deleted depending on your rights.

![]({{file name='trash-search-web-ui.png'}} ?w=600)

From this search you can also restore and/or delete permanently document(s) as explained above.

![]({{file name='trash-search-selected-web-ui.png'}} ?w=600)

If you open a document that is already in the trash, an info bar is displayed at the top of the page saying that you are viewing a trashed document. If you have the necessary rights on the document, you can restore and/or delete permanently document(s) as explained above from this info bar.

![]({{file name='delete-info-bar-web-ui.png'}} ?w=600)

{{! /multiexcerpt}}


## Versioning

{{! multiexcerpt name='versioning-functional-overview'}}
{{! multiexcerpt name='versioning-intro'}}

Document versions enable you and other users to easily revert to a specific version of the document if needed, without having to edit the document. The Nuxeo Platform offers both automatic and manual versioning of documents.

{{! /multiexcerpt}}

Every document holds a version number, which is a piece of information about the evolution of the document. A version number (V.v) is composed of a major version number (V) and a minor version number (v). When a document is created, its version number can be 0.0, 0.1 or 1.0 depending on automatic versioning rules. Minor version increment are typically used for secondary changes. Major version increment is usually reserved to significant modifications. When a document is edited without a new version being created, the version number is suffixed with a + (0.1+ for instance), to indicate that the version was modified since it was created.

{{#> callout type='info' heading='Version number 0.0'}}
Version number 0.0 is considered as a draft of the document, which will need to be saved into a first version, either minor or major.
Draft version 0.0 is not archived.
{{/callout}}

### Automatic Versioning

Two automatic versioning behaviors are applied by default: one for files (and associated document types) and one for notes.

- Files and other document types with [schema]({{page version='' space='nxdoc' page='repository-concepts'}}#schemas) `file:file`, like pictures, are created in version 0.0. A new minor version is automatically created when you edit a document that was last modified by another user. This minor version holds the modifications of the previous contributor, so that no data is lost. Your changes are applied on top of this version, the version number becoming for instance 0.1+. When you edit a document that was last edited by yourself, no version is automatically saved. You can however decide to manually create a new version of the document.

- For notes, a new version is created for every modification, whether you are the last contributor of the note or not. The created version holds the your changes. When they are created, notes have a version number of 0.1.

This automatic versioning applies in case of:
- Modification of the main file or its attachments using drag and drop
- Manual edit of the attachments
- Modification of the document (main file, properties, attachments) via bulk edit

The following actions don’t trigger the automatic versioning of the document:
- Tagging the document
- Adding the document to a collection
- Changing the relations of the document
- Commenting the document

{{#> callout type='info'}}
Automatic versioning is disabled on CMIS connector due to conflict between our specifications and CMIS specifications.
{{/callout}}

### Manual Versioning

You can decide to manually create a new version of the document.

In case of a file document types the automatic version is done first and then the manual version. So if you edit the document and select the option “Increment major version”, a minor version is created and then a major version: the minor version is the automatic one holding the previous contributor’s work, and the major one is the manual version with your modifications. If you select “Increment minor version”, two minor versions are created following the same principle. And if you chose “Skip version increment”, only the automatic versioning behavior is applied and the document version number is 0.1+ for instance.

For notes, if you use the Edit form, only the manual versioning rules applied. Selecting “Increment major version” save your changes in a major version, “Increment minor version” saves them in a minor version and choosing “Skip version increment” doesn’t create a new version and the version number is +ed (0.1+ for instance).

{{! /multiexcerpt}}

**To create a new version of your document**:

{{! multiexcerpt name='web-ui-manual-versioning'}}

1. Go on the **View** tab of the desired document.
2. In the top right section of metadata, click on **Create Version**.
3. Select the version that you want and click on **Create Version** to confirm.
  ![]({{file name='versions-web-ui.png'}} ?w=350,border=true)
{{! /multiexcerpt}}

### Comparing Versions

You can visualize differences between two versions of a document.

1. Go to a versioned document.
2. In the document action toolbar, click **Compare Version** {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/Compare Versions
    name: Compare-versions.png
    1.1.3#icon#up_to_date
--}}
![Compare Versions ](nx_asset://00a30c28-31a8-4a91-b7b1-b39f7c3eff22 ?w=20).
3. Select versions you want to compare.
Data that differ from one version to another are displayed.
4. Click **View All Data** to display all data for both versions of a document.
Data that differ from one version to another are highlighted.


### Nuxeo Drive Versioning Policy

{{! multiexcerpt name='drive-versioning-policy'}}
When you edit a document, either from your Nuxeo Drive folder or using the online editing, a new version is automatically created on the Platform and the version number is updated:

*   If you are not the last contributor of the document
*   Or if your last edit is more than an hour ago

Then, if your document's version was 1.0 before modification for instance, it automatically becomes 1.1+ after you edited it from the Nuxeo Drive folder and the 1.1 is archived as it is created. Otherwise, a simple modification is done on the document and logged in the document's History.

See the page [How to Customize Nuxeo Drive Versioning Policy]({{page space='NXDOC' page='How to+Customize+Nuxeo+Drive+Versioning+Policy'}}) to change this behavior.
{{! /multiexcerpt}}

## Document Actions

The document actions toolbar displays all the actions available for the current document.
![]({{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Browse/Document Action Toolbar
    name: document-action-toolbar.png
    1.1.3#screenshot#up_to_date
--}}
![Document Action Toolbar](nx_asset://3f4d1465-5072-448b-b3b5-08f982925354 ?w=600,border=true))

### Compare

#### Compare Versions of a Document

When you have several versions of a document, click **Compare Version**  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/Compare Versions
    name: Compare-versions.png
    1.1.3#icon#up_to_date
--}}
![Compare Versions](nx_asset://00a30c28-31a8-4a91-b7b1-b39f7c3eff22 ?w=20)to see the differences between the document versions.

{{#> callout type='info'}}
By default, you will only see the data that differ from one version to another. Check View all data to see all the properties of the documents.
{{/callout}}

#### Compare Metadata between Documents

You can visualize metadata differences between two documents.

1. In a folder, select documents you want to compare.
2. Click **Compare** {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/Compare
    name: Compare.png
    1.1.3#icon#up_to_date
--}}
![Compare](nx_asset://518ac85c-ba2f-4566-8637-f4b1029b0646 ?w=20).
3. To choose other selected documents, scroll through the list.
By default, you will only see the data that differ from one document to another.
4. Click **View All Data** to display all data for both documents.
Data that differ from one document to another are highlighted.



### Share a Document

The button ![]({{file name='share_web-ui.png' page='icons-index' space='userdoc'}}) gives you the permanent link to the document concerned, in order to easily share it.

### Alerts
{{{multiexcerpt 'alert-functional' page='collaborative-features'}}}

### Lock / Unlock

When you need to work on a document for some time, you don't want other users to edit it at the same time and disturb your own work. This is typically the case where you lock the document by clicking the icon&nbsp;![]({{file name='unlocked-web-ui.png' space='userdoc' page='icons-index'}} ?w=16).

A locked document remains visible to other users but only the locker and users with Manage everything permission can edit it. Other users can see the document locked through the icon&nbsp;![]({{file name='locked-web-ui.png' space='userdoc' page='icons-index'}} ?w=16). A tooltip indicates who locked the document and when.

Users with Management everything permission can unlock document on other users' behalf so a document does not remains locked during the locker's vacation and blocks other user's work, for instance.

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related pages'}}
- [Favorites]({{page page='favorites' space='userdoc'}})
- [Collections]({{page page='collections-web-ui' space='userdoc'}})
{{/panel}}
</div>

<div class="column medium-6">
</div>
</div>
