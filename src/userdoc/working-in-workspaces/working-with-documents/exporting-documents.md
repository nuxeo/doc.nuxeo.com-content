---
title: Exporting Documents
review:
    comment: ''
    date: ''
    status: ok
labels:
    - last-review-20141202
    - export
    - worklist
toc: true
confluence:
    ajs-parent-page-id: '21299491'
    ajs-parent-page-title: Working with Documents
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Exporting+Documents
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Exporting+Documents'
    page_id: '21299538'
    shortlink: UgFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/UgFFAQ'
    source_link: /display/USERDOC60/Exporting+Documents
history:
    - 
        author: Solen Guitter
        date: '2015-03-23 13:40'
        message: dd details on Export options
        version: '23'
    - 
        author: Manon Lumeau
        date: '2015-03-20 10:18'
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
Users can export documents on their computer. It is possible to export:

*   One document at a time,
*   A selection of documents,
*   An entire workspace, folder, section.

## Available Export Options

Export options are available from:

*   The Export button of documents and folders, available by clicking the icon ![]({{file name='export.png' space='userdoc58' page='icons-index'}})&nbsp;in the **More** menu
*   The worklist

### PDF Export

PDF export is available for documents and folders, from the Export options (icon ![]({{file name='export.png' space='userdoc58' page='icons-index'}})&nbsp;in the **More** menu). It consists in a PDF file that lists:

*   For documents:
    *   The document files for documents (main content and attachments)
    *   The document metadata
*   *   The links to the document (path URL and permalink)
    *   The History log of the document
    *   The comments of the document
*   For folders:
    *   The folder metadata
    *   The links to the folder (path URL and permalink)
    *   The History log of the folder
    *   The list of documents and folders inside the folder

### XML Exports

The **XML export** is&nbsp;a low level export available from the Export options of the document (icon ![]({{file name='export.png' space='userdoc58' page='icons-index'}})&nbsp;in the **More** menu). It consists in the XML definition of the document.

The **ZIP XML Export** is available from the document. It consists in a zipped folder called export.zip that contains:

*   A document.xml file holding the document's metadata and various information such as the applied access rights.
*   .blob files that holds the binary content of the document (main file and attachments). Blobs are referenced in the document.xml file.

From a folder, this export option is called **ZIP Tree XML Export**. The export.zip file contains a series of folders that reproduce the children hierarchy of the exported folder, and for each document inside it the same document.xml and associate blob structure as the ZIP XML Export described above.

From the worklist, the **Export to XML** option provides you with an export.zip folder that contains as many folders as documents in your worklist, with he same document.xml and associate blob structure as the ZIP XML Export described above.

### Zip Exports of Binaries

Zip export of binaries is available from the document and from the worklist.

From a document (icon ![]({{file name='export.png' space='userdoc58' page='icons-index'}})&nbsp;in the **More** menu), the **ZIP Binary Export** option consists in a clipboard.zip that holds:

*   The main file of the document
*   The attachments of the document
*   An INDEX.txt file

From the export options of a folder, the clipboard.zip file provided by the ZIP Binary Export options holds:

*   All the main files and attachments of the documents in a folder of the same name as the Nuxeo folder
*   An INDEX.txt file at the root of the ZIP

The **Export as ZIP** option of the worklist provides a clipboard.zip folder that holds:

*   All the main files and attachments from the documents in the worklis
*   An INDEX.txt file

### Excel Export

From the folder export options (icon ![]({{file name='export.png' space='userdoc58' page='icons-index'}})&nbsp;in the **More** menu), the **Excel Export** provides a document_content.xls file that reproduces the table of the folder **Content** tab.

## Exporting Attachments

Users can easily export the attachments of a document or of a selection of documents, i.e. their main file and the additional attachments added from the **Files** tab of the documents.

### Exporting the Attachments of a Document Selection

You can export the attachments of several documents at the same time, using the worklist.

**To export a selection of documents:**

1.  Check the box that corresponds to the documents to export.
2.  Click on the **Add to worklist** button.
    The documents are added to your worklist, in the left part of the screen.
    ![]({{file name='worklist.png'}} ?w=250,border=true,thumbnail=true)
3.  Optionally go in other folders and add other documents to your worklist.
4.  In the worklist, click on the **Export as ZIP** link.
5.  Save the "Clipboard.zip" folder.
    When you unzip it, you get the documents' attachments and an INDEX.txt file that summarizes the content of the export.
    ![]({{file name='unzipped-zip-export.png' space='userdoc58' page='exporting-documents'}} ?w=650,border=true)

## Exporting the List of Documents in a Folder

Just like it is possible to [export search results]({{page page='searching-the-nuxeo-platform'}}), it is possible to export the list of documents in a workspace, section or folder.
You can use the Excel export which&nbsp;enables you to get the list of documents inside the folder in an Excel table.

**To export the list of documents of a space in an Excel file:**
Click on the icon&nbsp;![]({{file name='xls_export.png' page='icons-index'}})&nbsp;displayed in the top right corner of the **Content** tab of the workspace, folder or section.
You are proposed to save a "document_content.xls" file, that displays the same information on the folder's documents as in the **Content** tab.

## Low-Level Exports

XML export is a low level&nbsp;export that enables users to get a set of information on documents in an XML file. This export type is useful for debugging, and as such, is mainly intended to administrators. You can export:

*   a single document,
*   a selection of documents,
*   the structure of a folder.

### XML Export of a Single Document

The XML export of a document enables users to get a folder for the exported document that contains:

*   a document.xml file holding the document's various information (the applied access rights, the document's metadata, its path),
*   a .blob file that holds the binary content of the document. This blob is referenced in the document.xml file.

**To get the XML export of a document:**

1.  From the document, click on the icon&nbsp;![]({{file name='export.png' page='icons-index'}})&nbsp;or, if the icon is not available on the action bar, on the **Export** button**&nbsp;**of the **More** menu in the action bar.
    ![]({{file name='more-menu.png'}} ?w=250,border=true,thumbnail=true)
2.  Click on ![]({{file name='zip_export.png' page='icons-index'}})&nbsp;**ZIP XML Export** on the pop-up window.
    You are proposed to save a "export.zip" file on your computer.

    {{#> callout type='tip' }}

    If you're only interested in the XML file of the document, click on&nbsp;![]({{file name='xml.png' page='icons-index'}}) **XML Export**. The XML file should open in a new tab or window (depending on your browser's preferences).

    {{/callout}}
3.  Save the "export.zip" file.
    When you unzip it, you get a folder named from the document, that contains a document.xml file and .blob for each attachment of the document.
    ![]({{file name='unzipped-xml-export.png' space='userdoc58' page='exporting-documents'}} ?w=650,border=true)

### XML Export of a Document Selection

It is possible to do an XML export of several documents in a single export, using the Worklist.

**To export a selection of documents:**

1.  Check the box that corresponds to the documents to export to select it.
2.  Click on the **Add to worklist** button.
    The documents are added to your worklist, in the left part of the screen.
    ![]({{file name='worklist.png'}} ?w=250,border=true,thumbnail=true)
3.  Optionally go in other folders and add other documents to your worklist.
4.  In the worklist, click on the **Export to XML** link.
5.  Save the "export.zip" folder.
    When you unzip it, you get a folder structure that reproduces the Nuxeo Platform tree to the document.
    ![]({{file name='unzipped-multiple-doc-xml-export.png' space='userdoc56' page='exporting-documents'}} ?w=650,border=true)

### XML Export of a Folder

It is possible to export a whole workspace, section or folder in a zipped XML folder. This specific export enables users to import the folder back, with the same access rights definition.

**To get the XML export of a folder:**

1.  From the folder (or workspace or section), click on the icon&nbsp;![]({{file name='export.png' page='icons-index'}})&nbsp;or, if the icon is not available on the action bar, on the **Export&nbsp;**button of the **More** menu in the action bar.
    ![]({{file name='more-menu.png'}} ?w=250,border=true,thumbnail=true)
2.  Click on ![]({{file name='zip_tree_export.png' page='icons-index'}})&nbsp;**ZIP Tree XML Export** on the pop-up window.
    You are proposed to save a "export.zip" file on your computer.

    {{#> callout type='tip' }}

    If you're only interested in the XML definition of the folder, click on&nbsp;![]({{file name='xml.png' page='icons-index'}}) **XML Export**. The XML file should open in a new tab or window (depending on your browser's preferences).

    {{/callout}}
3.  Save the "export.zip" file.
    When you unzip it, you get a folder named from the document, that contains a document.xml file and .blob for each attachment of the document.
    ![]({{file name='unzipped-folder-xml-export.png' space='userdoc58' page='exporting-documents'}} ?w=650)