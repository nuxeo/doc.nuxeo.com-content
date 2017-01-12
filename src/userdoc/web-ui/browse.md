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

### Browsing Content

#### Side Menu
The side menu offers two different tabs. Clicking on elements on the left will open a side panel with the content of the tab selected: browsing options are on the first left column, content to browse on the second and content to view on the main area.
This new pattern allows to start browsing without changing the context of work.
The side menu displays all the domain structure from the root. It enables you to easily access any space in the application structure.

SCREENSHOT

#### Dashboard

CREATE EXCERPT FROM JSF

Every user has a personal dashboard that displays information he finds relevant and help him have a global view of the application's activity.

The dashboard is composed of a set of boxes that display either a list of documents matching a criteria (all the workspaces the user can access, the last documents he modified, the last documents that have been published...), or possibly a piece of information either from the Platform or from external websites.

To access your dashboard, click on icon on the top left hand corner.

SCREENSHOT

#### Browsing Lists of Documents

Users can change the way content is presented in the folderish repositories (workspaces, folders, sections) and search results.They can also change the displayed information.

##### Changing the View Mode
Two views of the content lists are available on the top right corner of your workspace

- Table View (default view) (ICON): this view displays title of the documents with a small icon (that depends on the type of document or main attachment type) and a set of metadata in a table;

- Grid View (ICON): this view displays a thumbnail of documents. For folders, the thumbnail of the first item in the folder is displayed.

##### Changing Displayed Information
Lists of documents, whether in grid view or thumbnail view, show some information about the documents, like their title, the last contributor, their life cycle state, etc. Users can change the information displayed, i.e. the columns for the list view or the information below the document thumbnail in thumbnail view.

To change the information displayed in content views, click on the icon (ICON). A pop-up is displayed: select the information that you want to be displayed among the list.

SCREENSHOT

Once it's done click on **Close**.

{{#> callout type='info'}}
The displayed information can also be changed from the Search view.
{{/callout}}

The information displayed on content views can be filtered with filters at the top of every columns.

#### Access Keys
Some actions or features are accessible using access keys:
- c: Create
- d: Dashboard
- s: Search
- shift + /: Search

### Creating Content
EXCERPT PAGE CREATING CONTENT

#### Creating a Document Using the Create Button
Creating a document using the create button enables you to select the type of document you want to create among all Nuxeo Platform's document types.

SCREENSHOT POPUP CREATION

To create a document using the **Create** button:
1. Click on the **Create** button and click on the desired document.
2. Fill in the document's creation form and click on the Create button.

The Summary tab of the document is displayed.

#### Importing Documents Using Drag and Drop
Drag and drop is based on the HTML 5 standard and is available on all browsers that support the HTML 5 Drag and drop, without extension. Basically, this includes all browsers supported by the Nuxeo Platform:

{{{multiexcerpt 'supported-browsers' page='nxdoc/compatibility-matrix'}}}

Depending on the user interface addon or applications you use, the browsers requirements can differ. See the relevant pages:
- [Nuxeo JSF UI]({{page version='' space='nxdoc' page='nuxeo-jsf-ui'}})
- [Nuxeo Web UI]({{page version='' space='nxdoc' page='web-ui'}})

You can use drag and drop to easily import content into a workspace or just to create one document at a time. Two types of import are available:

- Quick import, that enables to quickly create documents in workspace;
- Import with metadata, that enables to fill in metadata of the document(s) before they are created in the workspace.

##### Quick Import of Documents

To import content into Nuxeo, drag an item from your computer and drop it into a workspace. The document is then automatically created in the workspace and its title is the name of the original file, and no metadata is filled in.

You can drag and drop one or more files of any type in Nuxeo.

SCREENSHOT

You can also drag and drop one or more files of any type directly from the **Import** tab of the creation popup. On this popup you can also edit the location of your import.

SCREENSHOT

##### Import with Metadata

It is possible to do a drag and drop import of documents with an additional step to fill in some metadata. This prevents you from editing the documents after the import is done.

**To import documents with metadata:**

1. Drag your file from your desktop to the workspace main area in the browser.

The file is uploaded. When the upload is done, the creation popup on the **Import** tab is displayed.

2. Click on **ADD PROPERTIES**
3. Fill in the metadata that you need and then decide if you want to **EDIT NEXT** or **APPLY TO ALL** your modifications.
SCREENSHOT

4. Once it's done click on **CREATE**.

The file is created with the filled in metadata.

SCREENSHOT

#### Creating Content Using Nuxeo Drive

{{{excerpt 'userdoc/nuxeo-drive'}}}

You can very easily import document by moving them from a desktop folder to a Nuxeo Drive folder, or creating office files directly in a Nuxeo Drive folder. Read the [Nuxeo Drive documentation]({{page page='nuxeo-drive'}}) for more information.

#### Automated Metadata Extraction

{{{multiexcerpt 'automated-metadata-extraction-excerpt' page='userdoc/creating-content'}}}

Read the [Binary Metadata]({{page space='nxdoc' page='binary-metadata'}}) documentation for more information.

### Editing Content

Editing a document means modifying its content (i.e. the attached file of a file document, the text of a note, etc.), or simply editing the title, description or any metadata of the document.

#### Editing Metadata

Metadata are information describing some properties of the workspace, so that they are more accurately referenced. Some metadata are automatically filled in by the system, but most of them need to be filled in by users. When you create a document (file, note, workspace, section, or any other document type), its metadata are empty.

The Nuxeo Platform uses Dublin Core metadata by default. They are listed below:

{{{multiexcerpt 'metadata' page='userdoc/editing-content'}}}

Although metadata are not mandatory, filling them in will make your documents easier to find using [Nuxeo search engine]({{page space='userdoc' page='search'}}).

**To edit a Metadata:**

1. Click on the Edit button

#### Editing with Spreadsheet

You can also use, [Nuxeo Spreadsheet]({{page space='nxdoc' page='nuxeo-spreadsheet'}}) to edit several documents at the same time&nbsp;in your repository as if you were in a spreadsheet-like grid, like copy and paste by dragging the cell's value.

### Deleting Content
#### From the Document View
#### From the Workspace View

### Versioning

#### Versioning Overview
iaoidozjzef

#### Drag and Drop Versioning Policy
uhzuhfiuzfe

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related pages'}}

- [Nuxeo Drive]({{page page='nuxeo-drive'}})
- [Nuxeo CSV]({{page space='nxdoc' page='nuxeo-csv'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Customize the Bulk Import Form]({{page space='nxdoc' page='how-to-customize-the-bulk-import-form'}})
- [How to Enable Drag'n Drop and New Button on a Custom Content View]({{page space='nxdoc' page='how-to-enable-drag-and-drop-and-new-button-on-a-custom-content-view'}})

{{/panel}}</div></div>
