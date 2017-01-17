---
title: Browse
review:
    comment: ''
    date: '2017-01-04'
    status: ok
<<<<<<< 3b7d9bf0190f70b7ff35bf234e0b4778914d7031
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

SCREENSHOT

### Dashboard

CREATE EXCERPT FROM JSF

In order to help you find the documents that you need, the Nuxeo Platform features several options to access documents.

### Browsing Content
#### Side Menu
The side menu offers two different tabs. Clicking on elements on the left will open a side panel with the content of the tab selected: browsing options are on the first left column, content to browse on the second and content to view on the main area.
This new pattern allows to start browsing without changing the context of work.
The side menu displays all the domain structure from the root. It enables you to easily access any space in the application structure.

SCREENSHOT

#### Dashboard

CREATE EXCERPT FROM JSF


The dashboard is composed of a set of boxes that display either a list of documents matching a criteria (all the workspaces the user can access, the last documents he modified, the last documents that have been published...), or possibly a piece of information either from the Platform or from external websites.

To access your dashboard, click on icon on the top left hand corner.

SCREENSHOT

#### Browsing Lists of Documents

Users can change the way content is presented in the folderish repositories (workspaces, folders, sections) and search results.They can also change the displayed information.


#### Changing the View Mode

- Table View (default view) (ICON): this view displays title of the documents with a small icon (that depends on the type of document or main attachment type) and a set of metadata in a table;

- Grid View (ICON): this view displays a thumbnail of documents. For folders, the thumbnail of the first item in the folder is displayed.

#### Changing Displayed Information

To change the information displayed in content views, click on the icon (ICON). A pop-up is displayed: select the information that you want to be displayed among the list.

SCREENSHOT

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
EXCERPT PAGE CREATING CONTENT

### Creating a Document Using the Create Button
Creating a document using the create button enables you to select the type of document you want to create among all Nuxeo Platform's document types.

SCREENSHOT POPUP CREATION

To create a document using the **Create** button:
1. Click on the **Create** button and click on the desired document.
2. Fill in the document's creation form and click on the Create button.

The Summary tab of the document is displayed.

### Importing Documents Using Drag and Drop
Drag and drop is based on the HTML 5 standard and is available on all browsers that support the HTML 5 Drag and drop, without extension. Basically, this includes all browsers supported by the Nuxeo Platform:

{{{multiexcerpt 'supported-browsers' page='nxdoc/compatibility-matrix'}}}

Depending on the user interface addon or applications you use, the browsers requirements can differ. See the relevant pages:
- [Nuxeo JSF UI]({{page page='nuxeo-jsf-ui'}})
- [Nuxeo Web UI]({{page page='web-ui'}})

You can use drag and drop to easily import content into a workspace or just to create one document at a time. Two types of import are available:

- Quick import, that enables to quickly create documents in workspace;
- Import with metadata, that enables to fill in metadata of the document(s) before they are created in the workspace.

#### Quick Import of Documents

To import content into Nuxeo, drag an item from your computer and drop it into a workspace. The document is then automatically created in the workspace and its title is the name of the original file, and no metadata is filled in.

You can drag and drop one or more files of any type in Nuxeo.

SCREENSHOT

You can also drag and drop one or more files of any type directly from the **Import** tab of the creation popup. On this popup you can also edit the location of your import.

SCREENSHOT

#### Import with Metadata

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
SCREENSHOT
2. Edit the metadata that you want
3. Once it is done, click on **SAVE**

### Bulk Editing

You can use [Nuxeo Spreadsheet]({{page space='nxdoc' page='nuxeo-spreadsheet'}}) to edit several documents at the same time in your repository as if you were in a spreadsheet-like grid, like copy and paste by dragging the cell's value.

## Deleting Content
Only users with "Edit" or "Manage everything" permissions can delete documents from a space.

### From the Workspace View

To delete one or several documents, select them in your workspace and click on the delete icon (ICON) in the selection toolbar.

SCREENSHOT

### From the Document View

On the document itself you can decide to delete the file of your document by clicking on the Delete icon (ICON) and add a new one.

SCREENSHOT

## Versioning
{{{multiexcerpt 'versioning' page='userdoc/editing-content'}}}

Every document holds a version number, which is a piece of information about the evolution of the document. A version number (V.v) is composed of a major version number (V) and a minor version number (v). When a document is created, its version number is 0.0. Minor version increment are used for secondary changes. Major version increment is usually reserved to significant modifications.

SCREENSHOT

Let's say that your current document version is 0.1:&nbsp;

- You can save modifications without creating a new version of the document, as it is not yet ready. The 0.1 version of the document has been modified, so its version number becomes 0.1+ (the + indicates to other users that version 0.1 has been modified).

    {{#> callout type='info' }}

    If you haven't actually done any modification on the document when you click **Save**, the version remains 0.1, you are not added to the contributors of the document and the last modification time is not updated.

    {{/callout}}
- You can save the modifications in a new version of the document. The version number will then be 0.2 if you increment minor version or 1.0 if you save modifications in a major version. The newly created version is automatically archived in the&nbsp;**History**&nbsp;tab so it's not lost when users will edit it.

    {{#> callout type='info' heading='Version number 0.0'}}

    When a document is created, its version number is 0.0\. This is considered as a draft of the document, which will need to be saved into a first version, either minor or major.

    Draft version 0.0 is not archived and the + behavior described above does not apply to 0.0 draft.

    {{/callout}}

### Drag and Drop Versioning Policy
CREATE EXCERPT FROM JSF UI

When you drag and drop a document in a workspace its version is 0.0, like every new document created on your platform.

The drag and drop versioning policy uses the minor version incrementation so, if you edit one these
documents in local and reupload it with another drag and drop, the version number becomes 0.1+, then 0.2+, etc.

### Nuxeo Drive Versioning Policy

CREATE EXCERPT FROM JSF UI

When you edit a document, either from your Nuxeo Drive folder or using the online editing, a [new version]({{page space='USERDOC' page='Editing Content'}}) is automatically created on the Platform and the version number is updated:

*   If you are not the last contributor of the document
*   Or if your last edit is more than an hour ago

Then, if your document's version was 1.0 before modification for instance, it automatically becomes 1.1+ after you edited it from the Nuxeo Drive folder and the 1.1 is archived as it is created. Otherwise, a simple modification is done on the document and logged in the document's History.

See the page&nbsp;[How to Customize Nuxeo Drive Versioning Policy]({{page space='NXDOC' page='How to+Customize+Nuxeo+Drive+Versioning+Policy'}})&nbsp;to change this behavior.

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related pages'}}
- [Nuxeo Drive]({{page page='nuxeo-drive'}})
- [Nuxeo CSV]({{page space='nxdoc' page='nuxeo-csv'}})
{{/panel}}
</div>

<div class="column medium-6">
{{#> panel heading='Related How-Tos'}}
- [How to Customize the Bulk Import Form]({{page space='nxdoc' page='how-to-customize-the-bulk-import-form'}})
- [How to Enable Drag'n Drop and New Button on a Custom Content View]({{page space='nxdoc' page='how-to-enable-drag-and-drop-and-new-button-on-a-custom-content-view'}})
{{/panel}}
</div>
</div>

#### Access Keys
