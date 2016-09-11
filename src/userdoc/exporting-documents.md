---
title: Exporting Documents
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - export
    - worklist
    - multiexcerpt
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

*   One document at a time,
*   A selection of documents,
*   An entire workspace, folder, section.

### Exports Available

#### From a Folder

*   The&nbsp;**XML export**&nbsp;is a low level export that enables users to either get the XML definition of the document or get a folder for each exported document that contains:
    *   document.xml file holding the document's metadata and various information such as the applied access rights,
    *   A .blob file that holds the binary content of the document. This blob is referenced in the document.xml file;
*   The&nbsp;**ZIP Tree XML export**&nbsp;enables you to export a whole workspace, section or folder in a zipped XML folder.&nbsp;This export is only available on folderish documents.&nbsp;

#### From a Document

*   The**&nbsp;PDF export&nbsp;**enables you to get a PDF version of your document.&nbsp;This export is only available on non-folderish documents.
*   The**&nbsp;ZIP XML Export&nbsp;**enables you to get a zipped folder with the documents' main attachment (.pdf, .doc files). This export is only available on non-folderish documents.
*   The&nbsp;**XML export**&nbsp;is a low level export that enables users to either get the XML definition of the document or get a folder for each exported document that contains:
    *   document.xml file holding the document's metadata and various information such as the applied access rights,
    *   A .blob file that holds the binary content of the document. This blob is referenced in the document.xml file;

Export is available from:

*   The worklist,

*   The Export button, available by clicking the icon&nbsp;![]({{file name='export.png' space='userdoc58' page='icons-index'}})&nbsp;in the&nbsp;**More**&nbsp;menu.

### Exporting Attachments

Users can easily export the attachments of a document or of a selection of documents, i.e. their main file and the additional attachments added from the&nbsp;**Files**&nbsp;tab of the documents.

#### Exporting the Attachments of a Document Selection

You can export the attachments of several documents at the same time, using the worklist.

To**&nbsp;export a selection of documents**, check the box that corresponds to the documents to export.&nbsp;Click on the&nbsp;**Add to worklist**&nbsp;button.

The documents are added to your worklist, in the left part of the screen.

![]({{file name='worklist.png'}} ?w=250,border=true,thumbnail=true)

Optionally go in other folders and add other documents to your worklist.&nbsp;In the worklist,&nbsp;**click on the&nbsp;****Export as ZIP** link and&nbsp;**S****ave**&nbsp;the "Clipboard.zip" folder.

When you unzip it, you get the documents' attachments and an INDEX.txt file that summarizes the content of the export.
![]({{file name='unzipped-zip-export.png'}} ?w=650,border=true)

### Exporting the List of Documents in a Folder

Just like it is possible to&nbsp;[export search results]({{page page='searching-the-nuxeo-platform'}}), it is possible to export the list of documents in a workspace, section or folder.
You can use the Excel export which&nbsp;enables you to get the list of documents inside the folder in an Excel table.

To**&nbsp;export the list of documents of a space in an Excel file**,**&nbsp;**click on the icon&nbsp;![]({{file name='xls_export.png' page='icons-index'}})&nbsp;displayed in the top right corner of the&nbsp;**Content**&nbsp;tab of the workspace, folder or section.
You are proposed to save a "document_content.xls" file, that displays the same information on the folder's documents as in the&nbsp;**Content**&nbsp;tab.

### Low-Level Exports

XML export is a low level&nbsp;export that enables users to get a set of information on documents in an XML file. This export type is useful for debugging, and as such, is mainly intended to administrators. You can export:

*   a single document,
*   a selection of documents,
*   the structure of a folder.

#### XML Export of a Single Document

The XML export of a document enables users to get a folder for the exported document that contains:

*   a document.xml file holding the document's various information (the applied access rights, the document's metadata, its path),
*   a .blob file that holds the binary content of the document. This blob is referenced in the document.xml file.

To**&nbsp;get the XML export of a document**, from the document, click on the icon&nbsp; ![]({{file name='export.png' page='icons-index'}}) &nbsp;or, if the icon is not available on the action bar, on the&nbsp;**Export&nbsp;**button**&nbsp;**of the&nbsp; **More**&nbsp;menu in the action bar.

![]({{file name='more-menu.png'}} ?w=250,border=true,thumbnail=true)

Click on&nbsp;![]({{file name='zip_export.png' page='icons-index'}}) **ZIP XML Export&nbsp;**on the pop-up window.
You are proposed to save a "export.zip" file on your computer.

{{#> callout type='tip' }}

If you're only interested in the XML file of the document, click on&nbsp;![]({{file name='xml.png' page='icons-index'}}) **XML Export**. The XML file should open in a new tab or window (depending on your browser's preferences).

{{/callout}}

&nbsp;

**Save**&nbsp;the "export.zip" file.
When you unzip it, you get a folder named from the document, that contains a document.xml file and .blob for each attachment of the document.
![]({{file name='unzipped-xml-export.png'}} ?w=650,border=true)

#### XML Export of a Document Selection

It is possible to do an XML export of several documents in a single export, using the Worklist.

To**&nbsp;export a selection of documents,** check the box that corresponds to the documents to export to select it.&nbsp;Click on the&nbsp;**Add to worklist** button.

The documents are added to your worklist, in the left part of the screen.
![]({{file name='more-menu.png'}} ?w=250,border=true,thumbnail=true)

Optionally go in other folders and add other documents to your worklist.&nbsp;In the worklist, click on the&nbsp; **Export to XML** &nbsp;link and&nbsp; **Save**&nbsp;the "export.zip" folder.

When you unzip it, you get a folder structure that reproduces the Nuxeo Platform tree to the document.
![]({{file name='unzipped-multiple-doc-xml-export.png'}} ?w=650,border=true)

#### XML Export of a Folder

It is possible to export a whole workspace, section or folder in a zipped XML folder. This specific export enables users to import the folder back, with the same access rights definition.

To**&nbsp;get the XML export of a folder**, from the folder (or workspace or section), click on the icon&nbsp; ![]({{file name='export.png' page='icons-index'}}) &nbsp;or, if the icon is not available on the action bar, on the&nbsp; **Export&nbsp;** button of the&nbsp; **More** &nbsp;menu in the action bar.

![]({{file name='more-menu.png'}} ?w=250,border=true,thumbnail=true)

Click on&nbsp;![]({{file name='zip_tree_export.png' space='userdoc60' page='icons-index'}}) **ZIP Tree XML Export&nbsp;**on the pop-up window.
You are proposed to save a "export.zip" file on your computer.

{{#> callout type='tip' }}

If you're only interested in the XML definition of the folder, click on&nbsp;![]({{file name='xml.png' page='icons-index'}}) **XML Export**. The XML file should open in a new tab or window (depending on your browser's preferences).

{{/callout}}

&nbsp;

**Save**&nbsp;the "export.zip" file.
When you unzip it, you get a folder named from the document, that contains a document.xml file and .blob for each attachment of the document.
![]({{file name='unzipped-folder-xml-export.png' space='userdoc58' page='exporting-documents'}} ?w=650,border=true)

{{! /multiexcerpt}}