---
title: Exporting Documents
review:
    comment: ''
    date: ''
    status: ok
labels:
    - worklist
    - export
toc: true
confluence:
    ajs-parent-page-id: '16092666'
    ajs-parent-page-title: Working in Workspaces
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Exporting+Documents
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Exporting+Documents'
    page_id: '16092572'
    shortlink: nI31
    shortlink_source: 'https://doc.nuxeo.com/x/nI31'
    source_link: /display/USERDOC58/Exporting+Documents
history:
    - 
        author: Solen Guitter
        date: '2014-02-13 17:45'
        message: dded ico
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
## Exporting Attachments

Users can easily export the attachments of a document or of a selection of documents, i.e. their main file and the additional attachments added from the **Files** tab of the documents.

### Exporting a Document's Attachments

When you are on a document and you want to get its attached files, you can export them in a zipped folder.

**To export the attachments of a document:**

{{! multiexcerpt name='zip-export'}}

1.  From the document, click on the icon&nbsp;![]({{file name='export.png' page='icons-index'}}) or, if the icon is not available on the action bar, on the **Export options** entry of the **More** menu.
    ![]({{file name='more-menu.png'}} ?w=250,border=true,thumbnail=true)
2.  Click on ![]({{file name='action_export_zip.gif' page='icons-index'}}) ZIP Binary Export.
    You are proposed to save a "clipboard.zip" file on your computer.
3.  Save it.
    When you unzip it, you get the document's attachments and an INDEX.txt file that summarizes the content of the export.

{{! /multiexcerpt}}

### Exporting the Attachments of a Document Selection

You can export the attachments of several documents at the same time, using the worklist.

**To export a selection of documents:**

1.  Check the box that corresponds to the documents to export to select it.
2.  Click on the **Add to worklist** button.
    The documents are added to your worklist, in the left part of the screen.
    ![]({{file name='worklist.png'}} ?w=200,border=true)
3.  Optionally go in other folders and add other documents to your worklist.
4.  In the worklist, click on the **Export as ZIP** link.
5.  Save the "Clipboard.zip" folder.
    When you unzip it, you get the documents' attachments and an INDEX.txt file that summarizes the content of the export.
    ![]({{file name='unzipped-zip-export.png'}} ?w=450,border=true)

### Exporting the Content of a Workspace

Just like you can export a selection of documents, you can easily export the content of a workspace, folder, section. In that case, the zipped folder you get recreates the structure of the exported space: workspaces and folders are exported as folders, in which you have the documents' attachments.

**To export the content of a workspace:**

1.  From the workspace, folder or section, click on the icon&nbsp;![]({{file name='export.png' page='icons-index'}}) or, if the icon is not available on the action bar, on the **Export options** entry of the **More** menu in the action bar.
    ![]({{file name='more-menu.png'}} ?w=250,border=true)
2.  Click on **![]({{file name='action_export_zip.gif' page='icons-index'}}) ZIP Binary Export**.
    You are proposed to save a "clipboard.zip" file on your computer.
3.  Save it.
    When you unzip it, you get a folder that represents the Nuxeo space structure and documents' attachments and an INDEX.txt file that summarizes the content structure of the export.

## Exporting the List of Documents a Folder

Just like it is possible to [export search results]({{page page='searching-the-nuxeo-platform#exporting-search-results'}}), it is possible to export the list of documents in a workspace, section or folder.
You can either use the Excel or the PDF export:

*   the Excel export enables you to get the list of documents inside the folder in an Excel table,
*   the PDF export enables you to get the folder metadata and history in addition to the list of documents.

**To export the list of documents of a space in an Excel file:**
Click on the icon&nbsp;![]({{file name='xls_export.png' page='icons-index'}}) displayed in the top right corner of the **Content** tab of the workspace, folder or section.
You are proposed to save a "document_content.xls" file, that displays the same information on the folder's documents as in the **Content** tab.

{{#> callout type='tip' }}

The Excel export is also available from the **Export options** page, by clicking the icon&nbsp;![]({{file name='export.png' page='icons-index'}}) or the **Export options** entry of the **More** menu.

{{/callout}}

**To export the list of documents of a space in an PDF file:**

1.  From the workspace, folder or section, click on the icon&nbsp;![]({{file name='export.png' page='icons-index'}}) or, if the icon is not available on the action bar, on the **Export options** entry of the **More** menu in the action bar.
    ![]({{file name='more-menu.png'}} ?w=250,border=true)
2.  Click on **![]({{file name='pdf_export.png' page='icons-index'}}) PDF Export**.
    The PDF view of the page opens in a new tab. It displays:

*   the metadata of the folder,
*   its history,
*   its content list.

## Low-Level Exports

XML export is a low level that enables users to get a set of information on documents in an XML file. This export type is useful for debugging, and as such, is mainly intended to administrators. You can export:

*   a single document,
*   a selection of documents,
*   the structure of a folder.

### XML Export of a Single Document

The XML export of a document enables users to get a folder for the exported document that contains:

*   a document.xml file holding the document's various information (the applied access rights, the document's metadata, its path),
*   a .blob file that holds the binary content of the document. This blob is referenced in the document.xml file.

**To get the XML export of a document:**

1.  From the document, click on the icon&nbsp;![]({{file name='export.png' page='icons-index'}}) or, if the icon is not available on the action bar, on the **Export options** entry of the **More** menu in the action bar.
    ![]({{file name='more-menu.png'}} ?w=250,border=true)
2.  Click on ![]({{file name='zip_export.png' page='icons-index'}}) **ZIP XML Export**.
    You are proposed to save a "export.zip" file on your computer.

    {{#> callout type='tip' }}

    If you're only interested in the XML file of the document, click on&nbsp;![]({{file name='xml.png' page='icons-index'}}) **XML Export**. The XML file should open in a new tab or window (depending on your browser's preferences).

    {{/callout}}
3.  Save the "export.zip" file.
    When you unzip it, you get a folder named from the document, that contains a document.xml file and .blob for each attachment of the document.
    ![]({{file name='unzipped-xml-export.png'}} ?w=450,border=true)

### XML Export of a Document Selection

It is possible to do an XML export of several documents in a single export, using the Worklist.

**To export a selection of documents:**

1.  Check the box that corresponds to the documents to export to select it.
2.  Click on the **Add to worklist** button.
    The documents are added to your worklist, in the left part of the screen.
    ![]({{file name='worklist.png'}} ?w=200,border=true)
3.  Optionally go in other folders and add other documents to your worklist.
4.  In the worklist, click on the **Export to XML** link.
5.  Save the "export.zip" folder.
    When you unzip it, you get a folder structure that reproduces the Nuxeo DM tree to the document.
    ![]({{file name='unzipped-multiple-doc-xml-export.png'}} ?w=450,border=true)

### XML Export of a Folder

It is possible to export a whole workspace, section or folder in a zipped XML folder. This specific export enables users to import the folder back, with the same access rights definition.

**To get the XML export of a folder:**

1.  From the folder (or workspace or section), click on the icon&nbsp;![]({{file name='export.png' page='icons-index'}}) or, if the icon is not available on the action bar, on the **Export options** entry of the **More** menu in the action bar.
    ![]({{file name='more-menu.png'}} ?w=250,border=true)
2.  Click on ![]({{file name='zip_tree_export.png' page='icons-index'}}) **ZIP Tree XML Export**.
    You are proposed to save a "export.zip" file on your computer.

    {{#> callout type='tip' }}

    If you're only interested in the XML definition of the folder, click on&nbsp;![]({{file name='xml.png' page='icons-index'}}) **XML Export**. The XML file should open in a new tab or window (depending on your browser's preferences).

    {{/callout}}
3.  Save the "export.zip" file.
    When you unzip it, you get a folder named from the document, that contains a document.xml file and .blob for each attachment of the document.
    ![]({{file name='unzipped-folder-xml-export.png'}} ?w=450,border=true)