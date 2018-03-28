---
title: Exporting Documents
review:
    comment: ''
    date: '2018-03-08'
    status: ok
labels:
    - export
    - worklist
    - multiexcerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '11043048'
    ajs-parent-page-title: Nuxeo Platform User Documentation
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Exporting+Documents
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Exporting+Documents'
    page_id: '9830819'
    shortlink: owGW
    shortlink_source: 'https://doc.nuxeo.com/x/owGW'
    source_link: /display/USERDOC/Exporting+Documents
tree_item_index: 1500
history:
    -
        author: Manon Lumeau
        date: '2016-01-04 16:27'
        message: ix image
        version: '28'
    -
        author: Manon Lumeau
        date: '2016-01-04 16:06'
        message: Fix image
        version: '27'
    -
        author: Manon Lumeau
        date: '2015-11-30 14:45'
        message: ''
        version: '26'
    -
        author: Manon Lumeau
        date: '2015-11-30 14:29'
        message: User Doc Migration
        version: '25'
    -
        author: Manon Lumeau
        date: '2015-03-20 10:10'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2015-03-20 10:05'
        message: ''
        version: '23'
    -
        author: Manon Lumeau
        date: '2015-03-20 10:02'
        message: ''
        version: '22'
    -
        author: Manon Lumeau
        date: '2014-12-02 23:20'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2014-02-14 10:05'
        message: Added icon
        version: '20'
    -
        author: Solen Guitter
        date: '2013-10-22 18:21'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2013-09-30 15:58'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2013-09-30 15:56'
        message: Added export icons.
        version: '17'
    -
        author: Solen Guitter
        date: '2013-07-02 17:56'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '16'
    -
        author: Solen Guitter
        date: '2013-07-02 17:56'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2012-10-30 11:23'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '14'
    -
        author: Solen Guitter
        date: '2012-10-30 11:23'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2012-10-03 15:36'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '12'
    -
        author: Solen Guitter
        date: '2012-10-03 15:36'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2012-10-03 15:31'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2012-07-03 18:00'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '9'
    -
        author: Solen Guitter
        date: '2012-07-03 18:00'
        message: Migrated to Confluence 4.0
        version: '8'
    -
        author: Solen Guitter
        date: '2012-07-03 18:00'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2012-06-18 17:48'
        message: Added XML export options
        version: '6'
    -
        author: Solen Guitter
        date: '2012-04-11 17:18'
        message: Added XML export options
        version: '5'
    -
        author: Solen Guitter
        date: '2012-04-06 17:51'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2012-04-06 12:19'
        message: fixed screenshots width
        version: '3'
    -
        author: Solen Guitter
        date: '2012-04-06 12:17'
        message: Fixed broken link
        version: '2'
    -
        author: Solen Guitter
        date: '2012-03-20 17:49'
        message: ''
        version: '1'

---
{{! multiexcerpt name='functional-overview'}}

Users can export documents on their computer. It is possible to export:

*   One document at a time
*   A selection of documents
*   An entire workspace, folder, section

### Exports Available

#### From a Folder

*   The **XML export** is a low level export that enables users to either get the XML definition of the document or get a folder for each exported document that contains:
    *   A document.xml file holding the document's metadata and various information such as the applied access rights
    *   A .blob file that holds the binary content of the document. This blob is referenced in the document.xml file
*   The **ZIP Tree XML export** enables you to export a whole workspace, section or folder in a zipped XML folder. This export is only available on folderish documents.

#### From a Document

*   The **PDF export** enables you to get a PDF version of your document. This export is only available on non-folderish documents.
*   The **ZIP XML Export** enables you to get a zipped folder with the documents' main attachment (.pdf, .doc files). This export is only available on non-folderish documents.
*   The **XML export** is a low level export that enables users to either get the XML definition of the document or get a folder for each exported document that contains:
    *   A document.xml file holding the document's metadata and various information such as the applied access rights
    *   A .blob file that holds the binary content of the document. This blob is referenced in the document.xml file

Export is available from:

*   The worklist
*   The Export button, available by clicking the icon ![]({{file name='export.png' page='icons-index'}}) in the **More** menu

### Exporting Attachments

Users can easily export the attachments of a document or of a selection of documents, i.e. their main file and the additional attachments added from the **Files** tab of the documents.

#### Exporting the Attachments of a Document Selection

You can export the attachments of several documents at the same time, using the worklist.

To **export a selection of documents**, check the box that corresponds to the documents to export. Click on the **Add to worklist** button.

The documents are added to your worklist, in the left part of the screen.

![]({{file name='worklist.png'}} ?w=250,border=true)

Optionally go in other folders and add other documents to your worklist. In the worklist, click on the **Export as ZIP** link and **Save** the "Clipboard.zip" folder.

When you unzip it, you get the documents' attachments and an INDEX.txt file that summarizes the content of the export.
![]({{file name='unzipped-zip-export.png'}} ?w=650,border=true)

### Exporting the List of Documents in a Folder

Just like it is possible to [export search results]({{page page='searching-the-nuxeo-platform'}}), it is possible to export the list of documents in a workspace, section or folder.
You can use the Excel export which enables you to get the list of documents inside the folder in an Excel table.

To **export the list of documents of a space in an Excel file**, click on the icon ![]({{file name='xls_export.png' page='icons-index'}}) displayed in the top right corner of the **Content** tab of the workspace, folder or section.
You are proposed to save a "document_content.xls" file, that displays the same information on the folder's documents as in the **Content** tab.

### Low-Level Exports

XML export is a low level export that enables users to get a set of information on documents in an XML file. This export type is useful for debugging, and as such, is mainly intended to administrators. You can export:

*   A single document
*   A selection of documents
*   The structure of a folder

#### XML Export of a Single Document

The XML export of a document enables users to get a folder for the exported document that contains:

*   A document.xml file holding the document's various information (the applied access rights, the document's metadata, its path)
*   A .blob file that holds the binary content of the document. This blob is referenced in the document.xml file

To **get the XML export of a document**, from the document, click on the icon  ![]({{file name='export.png' page='icons-index'}})  or, if the icon is not available on the action bar, on the **Export** button of the **More** menu in the action bar.

![]({{file name='more-menu.png'}} ?w=250,border=true)

Click on **ZIP XML Export** on the pop-up window.
You are proposed to save a "export.zip" file on your computer.

{{#> callout type='tip' }}

If you're only interested in the XML file of the document, click on **XML Export**. The XML file should open in a new tab or window (depending on your browser's preferences).

{{/callout}}

**Save** the "export.zip" file.
When you unzip it, you get a folder named from the document, that contains a document.xml file and .blob for each attachment of the document.
![]({{file name='unzipped-xml-export.png'}} ?w=650,border=true)

#### XML Export of a Document Selection

It is possible to do an XML export of several documents in a single export, using the Worklist.

To** export a selection of documents,** check the box that corresponds to the documents to export to select it. Click on the **Add to worklist** button.

The documents are added to your worklist, in the left part of the screen.
![]({{file name='worklist.png'}} ?w=250,border=true)

Optionally go in other folders and add other documents to your worklist. In the worklist, click on the  **Export to XML**  link and  **Save** the "export.zip" folder.

When you unzip it, you get a folder structure that reproduces the Nuxeo Platform tree to the document.
![]({{file name='unzipped-multiple-doc-xml-export.png'}} ?w=650,border=true)

#### XML Export of a Folder

It is possible to export a whole workspace, section or folder in a zipped XML folder. This specific export enables users to import the folder back, with the same access rights definition.

To **get the XML export of a folder**, from the folder (or workspace or section), click on the icon  ![]({{file name='export.png' page='icons-index'}})  or, if the icon is not available on the action bar, on the  **Export** button of the  **More**  menu in the action bar.

![]({{file name='more-menu.png'}} ?w=250,border=true)

Click on **ZIP Tree XML Export** on the pop-up window.
You are proposed to save a "export.zip" file on your computer.

{{#> callout type='tip' }}

If you're only interested in the XML definition of the folder, click on ![]({{file name='xml.png' page='icons-index'}}) **XML Export**. The XML file should open in a new tab or window (depending on your browser's preferences).

{{/callout}}

**Save** the "export.zip" file.
When you unzip it, you get a folder named from the document, that contains a document.xml file and .blob for each attachment of the document.
![]({{file name='unzipped-folder-xml-export.png' page='exporting-documents'}} ?w=650,border=true)

{{! /multiexcerpt}}
