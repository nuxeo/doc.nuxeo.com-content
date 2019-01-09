---
title: Sharing and Exporting Content
review:
    comment: ''
    date: '2018-11-15'
    status: ok
description: null
toc: true
labels:
    - creation
    - drag-and-drop
tree_item_index: 700

---

## Downloading

Users can download documents on their computer. It is possible to download:
- One document at a time
- A collection
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
  ## Exporting

  Users can export documents on their computer. It is possible to export:

  - One document at a time
  - An entire workspace, folder, section

## Exports Available

### From a Folder

  - The **XML export** is a low level export that enables users to either get the XML definition of the document or get a folder for each exported document that contains:
      - a document.xml file holding the document's metadata and various information such as the applied access rights,
      - a .blob file that holds the binary content of the document. This blob is referenced in the document.xml file;
  - The **ZIP export** enables you to export a whole workspace, section or folder in a zipped XML folder. This export is only available on folderish documents.

### From a Document

  - The **PDF export** enables you to get a PDF version of your document. This export is only available on non-folderish documents.
  - The **ZIP Export** enables you to get a zipped folder with the documents' main attachment (.pdf, .doc files). This export is only available on non-folderish documents.
  - The **XML export** is a low level export that enables users to either get the XML definition of the document or get a folder for each exported document that contains:
      - document.xml file holding the document's metadata and various information such as the applied access rights,
      - A .blob file that holds the binary content of the document. This blob is referenced in the document.xml file;


  The exports are available by clicking on the export button ![]({{file name='export-web-ui.png' page='icons-index'}} ?w=16).

  ### Low-Level Exports

  XML export is a low level export that enables users to get a set of information on documents in an XML file. This export type is useful for debugging, and as such, is mainly intended to administrators. You can export:

  - A single document
  - The structure of a folder

### XML Export of a Single Document

  The XML export of a document enables users to get a folder for the exported document that contains:

  - A document.xml file holding the document's various information (the applied access rights, the document's metadata, its path)
  - A .blob file that holds the binary content of the document. This blob is referenced in the document.xml file

  To **get the XML export of a document**, from the document, click on the icon&nbsp;![]({{file name='export-web-ui.png' space='userdoc' page='icons-index'}} ?w=16) and select **ZIP Export**.

  ![]({{file name='available-exports-web-ui.png'}} ?w=350,border=true)

  {{#> callout type='tip' }}
  If you're only interested in the XML file of the document, click on **XML Export**. The XML file should open in a new tab or window (depending on your browser's preferences).
  {{/callout}}

  When you unzip it, you get a folder named from the document, that contains a document.xml file and .blob for each attachment of the document.

### XML Export of a Folder

  It is possible to export a whole workspace, section or folder in a zipped XML folder. This specific export enables users to import the folder back, with the same access rights definition.

  To **get the XML export of a folder**, from the folder (or workspace or section), click on the icon&nbsp;![]({{file name='export-web-ui.png' space='userdoc' page='icons-index'}} ?w=16) and select **ZIP Export** on the popup window.

  {{#> callout type='tip' }}
  If you're only interested in the XML definition of the folder, click on **XML Export**. The XML file should open in a new tab or window (depending on your browser's preferences).
  {{/callout}}

  When you unzip it, you get a folder named from the document, that contains a document.xml file and .blob for each attachment of the document.

  You can also use Nuxeo File System Exporter to export Documents. For more information, see [Nuxeo File System Exporter]({{page version='' space='nxdoc' page='nuxeo-file-system-exporter'}}).

## Sharing

The button ![]({{file name='share_web-ui.png' page='icons-index' space='userdoc'}}) gives you the permanent link to the document concerned, in order to easily share it.

You can also use Nuxeo Easyshare add-on which enables sharing files from the repository with external users not requiring a login.
For more information, see [EasyShare Documentation]({{page space='userdoc' page='easyshare'}}).

## Publishing

### Working with Sections

When a document is ready for distribution, you must publish it in a section. Sections are spaces dedicated to the distribution of documents to a wider audience.

Sections are spaces managed like workspaces. No section is created by default, except the sections root. The main difference with workspaces is the fact that documents can't be edited in sections.

You are free to organize your section to fit your project or your needs the best. The section tree is completely independent from workspaces. Their structures are not linked.

As in workspaces, access to sections is determined by permissions.

You can define any document type as publish space by checking Document is a publish space, in the Definition screen of your custom document type in Studio Modeler. <!--![]({{file name='publish-space-studio.png'}} ?w=500,border=true)-->

## Publishing Documents

Publishing a document means publishing a version of the document as it is at the time of publication.

After publication, if you modify the document in the workspace, it is not modified in the section.

When you publish a document, the following elements are kept from the workspace document:

- The metadata
- All attachments
- The document history (Event log tab only)
- The tags (if this is a first publication — in case of a republication, tags from the workspace are merged with existing - tags on the published document)
- However, comments are not kept from the workspace document.

**To publish a document:**

1. From the View of the document in the workspace, click ![]({{file name='more-three-dots.png'}} ?w=30)in the top action toolbar and select Publish Document. ![]({{file name='publication-popup.png'}} ?w=500,border=true)
1. Select the rendition that should be published, for example None (same document format as in the workspace) or a PDF version of the document.
1. Optional: Create a version.
1. Click Publish.


{{#> callout type='info' header='Working with Renditions'}}

There are several renditions available for your publications. This list of renditions is configurable. If you select no rendition by selecting None in the list, it implies a publication of the document itself.

Selecting Default rendition implies a format that depends of the document type, schemas and facets at the time of publication.

{{/callout}}

**To unpublish a document:**

From the Publication tab of the document in the workspace, click **Unpublish** on the publication you want to revert.

To revert all the publication of this document, click **Unpublish All**.

{{#> panel heading='Related pages'}}
[Nuxeo Platform Feature Table]({{page space='nxdoc' page='nuxeo-platform-feature-table'}})
[Nuxeo Media Publishing]({{page space='nxdoc' page='nuxeo-media-publishing'}})
{{/panel}}
