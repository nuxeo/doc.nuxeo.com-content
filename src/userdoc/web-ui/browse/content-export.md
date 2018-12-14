---
title: Exporting Content
review:
    comment: ''
    date: '2018-11-15'
    status: ok
description: null
toc: true
labels:
    - creation
    - drag-and-drop
tree_item_index: 300

---

Users can export documents on their computer. It is possible to export:

- One document at a time
- An entire workspace, folder, section

## Exports Available

### From a Folder

- **XML export** is a low-level export that enables users to get either the XML definition of the document or get a folder for each exported document that contains:
    - a document.xml file holding the document's metadata and various information such as the applied access rights
    - a .blob file that holds the binary content of the document. This blob is referenced in the document.xml file
- **ZIP export** enables you to export a whole workspace, section or folder in a zipped XML folder. This export is only available on folderish documents.
- **CSV export** enables you to export a table listing of all the properties of the content in CSV format. This export is available on folderish documents, search results and collections. CSV export  ![]({{file name='csv-icon.png'}} ?w=30)  is available at the top-right of document listing.

### From a Document

- The **PDF export** enables you to get a PDF version of your document. This export is only available on non-folderish documents.
- The **ZIP Export** enables you to get a zipped folder with the documents' main attachment (.pdf, .doc files). This export is only available on non-folderish documents.
- The **XML export** is a low level export that enables users to either get the XML definition of the document or get a folder for each exported document that contains:
    - document.xml file holding the document's metadata and various information such as the applied access rights,
    - A .blob file that holds the binary content of the document. This blob is referenced in the document.xml file;


The exports are available by clicking on the export button ![]({{file name='export-web-ui.png' page='icons-index'}} ?w=16).

## Low-Level Exports

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
