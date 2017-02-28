---
title: Browse
review:
    comment: ''
    date: '2017-01-04'
    status: ok
description:
toc: true
labels:
    - creation
    - drag-and-drop
tree_item_index: 100
---
In order to help you find the documents that you need, the Nuxeo Platform features several options to access, create and edit documents.

## Browsing Content

### Side Menu&nbsp;
The&nbsp;side menu offers two different tabs. Clicking on elements on the left will open a side panel with the content of the tab selected: browsing options are on the first left column, content to browse on the second and content to view on the main area.
This new pattern allows to start browsing without changing the context of work.
The&nbsp;side menu displays all the domain structure from the root. It enables you to easily access any space in the application structure.

### Dashboard

{{{multiexcerpt 'intro-dashboard' page='browsing-content'}}}

To access your dashboard, click on icon on the top left hand corner of your platform.

### Browsing Lists of Documents

Users can change the way content is presented in the folderish repositories (workspaces, folders, sections) and search results.They can also change the displayed information.

#### Changing the View Mode
Two views of the content lists are available on the top right corner of your workspace

- Table View ![]({{file name='table-view-web-ui.png' page='icons-index'}} ?w=30)(default view) : this view displays title of the documents with a small icon (that depends on the type of document or main attachment type) and a set of metadata in a table;

- Grid View ![]({{file name='grid-view-web-ui.png' page='icons-index'}} ?w=30): this view displays a thumbnail of documents. For folders, the thumbnail of the first item in the folder is displayed.

#### Changing Displayed Information
Lists of documents, whether in grid view or thumbnail view, show some information about the documents, like their title, the last contributor, their life cycle state, etc. Users can change the information displayed, i.e. the columns for the list view or the information below the document thumbnail in thumbnail view.

To change the information displayed in content views, click on the icon ![]({{file name='manage_collection.png' page='icons-index'}} ?w=20). A pop-up is displayed: select the information that you want to be displayed among the list.

![]({{file name='columns-settings-web-ui.png'}} ?w=250,border=true)

Once it's done click on **Close**.

{{#> callout type='info'}}
The displayed information can also be changed from the Search view.
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
Creating a document using the create button enables you to select the type of document you want to create among all Nuxeo Platform's document types.

![]({{file name='creation-popup-web-ui.png'}} ?w=450,border=true)

To create a document using the **Create** button:
1. Click on the **Create** button and click on the desired document.
2. Fill in the document's creation form and click on the Create button.

The Summary tab of the document is displayed.

### Importing Documents Using Drag and Drop
Drag and drop is based on the HTML 5 standard and is available on all browsers that support the HTML 5 Drag and drop, without extension. Basically, this includes all browsers supported by the Nuxeo Platform:

{{{multiexcerpt 'jsf-ui-supported-browsers' space='nxdoc' page='nuxeo-jsf-ui'}}}

Depending on the user interface addon or applications you use, the browsers requirements can differ. See the relevant pages:
- [Nuxeo JSF UI]({{page page='nuxeo-jsf-ui'}})
- [Nuxeo Web UI]({{page page='web-ui'}})

You can use drag and drop to easily import content into a workspace or just to create one document at a time. Two types of import are available:

- Quick import, that enables to quickly create documents in workspace;
- Import with metadata, that enables to fill in metadata of the document(s) before they are created in the workspace.

#### Quick Import of Documents

To import content into Nuxeo, drag an item from your computer and drop it into a workspace. The document is then automatically created in the workspace and its title is the name of the original file, and no metadata is filled in.

- You can drag and drop one or more files of any type in Nuxeo, directly in the workspace concerned.
- You can also drag and drop one or more files of any type from the **Import** tab of the creation popup. On this popup you can also edit the location of your import.
  ![]({{file name='import-popup-web-ui.png'}} ?w=450,border=true)

#### Import with Metadata

It is possible to do a drag and drop import of documents with an additional step to fill in some metadata. This prevents you from editing the documents after the import is done.

**To import documents with metadata:**

1. Drag your file from your desktop to the workspace main area in the browser.
    The file is uploaded. When the upload is done, the creation popup on the **Import** tab is displayed.
    ![]({{file name='dnd-web-ui.png'}} ?w=350,border=true)

2. Click on **ADD PROPERTIES**
3. Fill in the metadata that you need and then decide if you want to **EDIT NEXT** or **APPLY TO ALL** your modifications.
    ![]({{file name='add-properties-web-ui.png'}} ?w=350,border=true)
4. Once it's done click on **CREATE**.

The file is created with the filled in metadata.

### Creating Content Using Nuxeo Drive

{{{excerpt 'userdoc/nuxeo-drive'}}}

You can very easily import document by moving them from a desktop folder to a Nuxeo Drive folder, or creating office files directly in a Nuxeo Drive folder. Read the [Nuxeo Drive documentation]({{page page='nuxeo-drive'}}) for more information.

### Automated Metadata Extraction

{{{multiexcerpt 'automated-metadata-extraction-excerpt' page='userdoc/creating-content'}}}

Read the [Binary Metadata]({{page space='nxdoc' page='binary-metadata'}}) documentation for more information.

## Editing Content

Editing a document means modifying its content (i.e. the attached file of a file document, the text of a note, etc.), or simply editing the title, description or any metadata of the document.

### Editing Metadata

Metadata are information describing some properties of the workspace, so that they are more accurately referenced. Some metadata are automatically filled in by the system, but most of them need to be filled in by users. When you create a document (file, note, workspace, section, or any other document type), its metadata are empty.

The Nuxeo Platform uses Dublin Core metadata by default. They are listed below:

{{{multiexcerpt 'metadata' page='userdoc/editing-content'}}}

Although metadata are not mandatory, filling them in will make your documents easier to find using [Nuxeo search engine]({{page space='userdoc' page='search'}}).

**To edit a Metadata:**

1. Click on the Edit button
    ![]({{file name='edit-metadata-web-ui.png'}} ?w=250,border=true)
2. Edit the metadata that you want
3. Once it is done, click on **SAVE**

## Exporting Content
Users can export documents on their computer. It is possible to export:

*   One document at a time,
*   An entire workspace, folder, section.

### Exports Available

#### From a Folder

* The **XML export** is a low level export that enables users to either get the XML definition of the document or get a folder for each exported document that contains:
    *   document.xml file holding the document's metadata and various information such as the applied access rights,
    *   A .blob file that holds the binary content of the document. This blob is referenced in the document.xml file;
* The **ZIP export** enables you to export a whole workspace, section or folder in a zipped XML folder. This export is only available on folderish documents.

#### From a Document

*   The **PDF export** enables you to get a PDF version of your document. This export is only available on non-folderish documents.
*   The **ZIP Export** enables you to get a zipped folder with the documents' main attachment (.pdf, .doc files). This export is only available on non-folderish documents.
*   The **XML export** is a low level export that enables users to either get the XML definition of the document or get a folder for each exported document that contains:
    *   document.xml file holding the document's metadata and various information such as the applied access rights,
    *   A .blob file that holds the binary content of the document. This blob is referenced in the document.xml file;


The exports are available by clicking on the export button ![]({{file name='export-web-ui.png' page='icons-index'}} ?w=16)


### Low-Level Exports

XML export is a low level export that enables users to get a set of information on documents in an XML file. This export type is useful for debugging, and as such, is mainly intended to administrators. You can export:

*   a single document,
*   the structure of a folder.

#### XML Export of a Single Document

The XML export of a document enables users to get a folder for the exported document that contains:

*   a document.xml file holding the document's various information (the applied access rights, the document's metadata, its path),
*   a .blob file that holds the binary content of the document. This blob is referenced in the document.xml file.

To **get the XML export of a document**, from the document, click on the icon ![]({{file name='export-web-ui.png' space='userdoc' page='icons-index'}} ?w=16) and select **ZIP Export** ![]({{file name='zip_export.png' page='icons-index'}}).

![]({{file name='available-exports-web-ui.png'}} ?w=350,border=true)

{{#> callout type='tip' }}
If you're only interested in the XML file of the document, click on ![]({{file name='file.gif' page='icons-index'}}) **XML Export**. The XML file should open in a new tab or window (depending on your browser's preferences).
{{/callout}}

When you unzip it, you get a folder named from the document, that contains a document.xml file and .blob for each attachment of the document.

#### XML Export of a Folder

It is possible to export a whole workspace, section or folder in a zipped XML folder. This specific export enables users to import the folder back, with the same access rights definition.

To **get the XML export of a folder**, from the folder (or workspace or section), click on the icon ![]({{file name='export-web-ui.png' space='userdoc' page='icons-index'}} ?w=16) and select **ZIP Export** ![]({{file name='zip_export.png' page='icons-index'}}) on the popup window.

{{#> callout type='tip' }}
If you're only interested in the XML definition of the folder, click on ![]({{file name='file.gif' page='icons-index'}}) **XML Export**. The XML file should open in a new tab or window (depending on your browser's preferences).
{{/callout}}

When you unzip it, you get a folder named from the document, that contains a document.xml file and .blob for each attachment of the document.

## Deleting Content
Only users with "Edit" or "Manage everything" permissions can delete documents from a space.

### From the Workspace View

To delete one or several documents, select them in your workspace and click on the delete icon ![]({{file name='delete_2.png' page='icons-index'}} ?w=12) in the selection toolbar.

### From the Document View

On the document itself you can decide to delete the file of your document by clicking on the Delete icon ![]({{file name='delete_2.png' page='icons-index'}} ?w=12) next to its title and add a new one.

## Versioning

Every document holds a version number, which is a piece of information about the evolution of the document. A version number (V.v) is composed of a major version number (V) and a minor version number (v). When a document is created, its version number is 0.0. Minor version increment are used for secondary changes. Major version increment is usually reserved to significant modifications.

Let's say that your current document version is 0.1:&nbsp;

- You can save modifications without creating a new version of the document, as it is not yet ready. The 0.1 version of the document has been modified, so its version number becomes 0.1+ (the + indicates to other users that version 0.1 has been modified).
    {{#> callout type='info' }}
    If you haven't actually done any modification on the document when you click **Save**, the version remains 0.1, you are not added to the contributors of the document and the last modification time is not updated.
    {{/callout}}
- You can save the modifications in a new version of the document. The version number will then be 0.2 if you increment minor version or 1.0 if you save modifications in a major version. The newly created version is automatically archived in the **History** tab so it's not lost when users will edit it.

    {{#> callout type='info' heading='Version number 0.0'}}
    When a document is created, its version number is 0.0\. This is considered as a draft of the document, which will need to be saved into a first version, either minor or major.

    Draft version 0.0 is not archived and the + behavior described above does not apply to 0.0 draft.
    {{/callout}}

**To create a new version of your document**:
- Go on the View tab of the desired document
- In the top right section of metadata, click on **Create Version**
- Select the version that you want and click on **Create Version** to confirm.
  ![]({{file name='versions-web-ui.png'}} ?w=350,border=true)


### Drag and Drop Versioning Policy

{{{multiexcerpt 'dnd-versioning-policy' page='editing-content' space='userdoc'}}}

### Nuxeo Drive Versioning Policy

When you edit a document, either from your Nuxeo Drive folder or using the online editing, a [new version](#versioning) is automatically created on the Platform and the version number is updated:

*   If you are not the last contributor of the document
*   Or if your last edit is more than an hour ago

Then, if your document's version was 1.0 before modification for instance, it automatically becomes 1.1+ after you edited it from the Nuxeo Drive folder and the 1.1 is archived as it is created. Otherwise, a simple modification is done on the document and logged in the document's History.

See the page [How to Customize Nuxeo Drive Versioning Policy]({{page space='NXDOC' page='How to+Customize+Nuxeo+Drive+Versioning+Policy'}}) to change this behavior.

## Document Actions

The document actions toolbar displays all the actions available for the current document.
![]({{file name='document_toolbar.png' page='web-ui' space='nxdoc'}} ?w=800, border=true)

### Share a Document

The ![]({{file name='share.png' page='icons-index' space='userdoc'}}) button gives you the permanent link to the document concerned, in order to easily share it.

### Alerts
{{{multiexcerpt 'alert-functional' page='collaborative-features'}}}

### Lock / Unlock

When you need to work on a document for some time, you don't want other users to edit it at the same time and disturb your own work. This is typically the case where you lock the document by clicking the icon ![]({{file name='unlocked-web-ui.png' space='userdoc' page='icons-index'}} ?w=16).

A locked document remains visible to other users but only the locker and users with Manage everything permission can edit it. Other users can see the document locked through the orange icon ![]({{file name='locked-web-ui.png' space='userdoc' page='icons-index'}} ?w=16). A tooltip indicates who locked the document and when.

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
{{#> panel heading='Related How-Tos'}}

{{/panel}}
</div>
</div>
