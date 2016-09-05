---
title: Working Using Drag and Drop
labels:
    - drag-and-drop
toc: true
confluence:
    ajs-parent-page-id: '21299520'
    ajs-parent-page-title: 'Creating, Editing and Deleting Content'
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Working+Using+Drag+and+Drop
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Working+Using+Drag+and+Drop'
    page_id: '21299475'
    shortlink: EwFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/EwFFAQ'
    source_link: /display/USERDOC60/Working+Using+Drag+and+Drop
history:
    - 
        author: Solen Guitter
        date: '2015-12-08 11:14'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2015-02-03 13:38'
        message: Add moving and publishing using D&D
        version: '22'
    - 
        author: Solen Guitter
        date: '2015-01-22 15:16'
        message: ''
        version: '21'
    - 
        author: Manon Lumeau
        date: '2014-12-10 18:42'
        message: ''
        version: '20'
    - 
        author: Manon Lumeau
        date: '2014-12-10 18:42'
        message: ''
        version: '19'
    - 
        author: Manon Lumeau
        date: '2014-12-10 18:32'
        message: ''
        version: '18'
    - 
        author: Manon Lumeau
        date: '2014-12-08 15:21'
        message: ''
        version: '17'
    - 
        author: Anonymous
        date: '2014-02-24 14:49'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-10-22 17:57'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-10-18 15:38'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-10-17 18:05'
        message: 'Update for 5.8: no more Chrome Frame, no more FF extension'
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-06-18 18:40'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-05-27 11:57'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-05-27 11:56'
        message: Added note about Google Chrome Frame
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-02-06 17:48'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-10-18 11:58'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2012-10-18 11:57'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-12-23 12:02'
        message: Migrated to Confluence 4.0
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-12-23 12:02'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-11-23 11:19'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-05-31 17:01'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-05-10 18:39'
        message: fixed broken links
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-04-23 18:20'
        message: ''
        version: '1'

---
&nbsp;

&nbsp;

The Nuxeo Platform allows the import of documents from your desktop using drag and drop.Drag and drop is based on the HTML 5 standard and is available on all browsers that support the HTML 5 Drag and drop, without extension.&nbsp;Basically, this includes Firefox 3.6+, Chrome10+, Safari 5+, IE 10+ (which means all the browsers&nbsp;supported by Nuxeo Platform 6.0).

It is also possible to move documents and publish them using drag and drop. Based on JavaScript these features are available on all JS-compatible browsers.

## Creating Documents

You can use Drag and Drop to easily import content into Nuxeo or just to create one document at a time. Two types of import are available:

*   quick import, that enables to quickly create documents in workspace;
*   import with metadata, that enables to fill in metadata of the document(s) before they are created in the workspace.

### Quick Import of Documents

To import content into Nuxeo, drag an item from your computer and drop it into a workspace. The document is then automatically created in the workspace and its title is the name of the original file, and no metadata is filled in. You can also drop files in your worklist. The document is then created in your personal workspace.
You can drag and drop one or more files in Nuxeo.

_![]({{file name='HTML5-DnD.png'}} ?w=650,border=true)
_

You can drop any file type in Nuxeo.

{{! multiexcerpt name='dnd-file-correspondence'}}

Here are some examples of most commonly used item types and their output in Nuxeo:

<table><tbody><tr><th colspan="1">

Item type

</th><th colspan="1">

Document created in Nuxeo

</th></tr><tr><td colspan="1">

Folder

</td><td colspan="1">

Folder

</td></tr><tr><td colspan="1">

Microsoft Office file

</td><td colspan="1">

File

</td></tr><tr><td colspan="1">

OpenOffice.file

</td><td colspan="1">

File

</td></tr><tr><td colspan="1">

.txt file

</td><td colspan="1">

Note

</td></tr><tr><td colspan="1">

Picture (.jpg, .png, etc)

</td><td colspan="1">

Picture

</td></tr></tbody></table>{{! /multiexcerpt}}

### Import with Metadata

It is possible to do a drag and drop import of documents with an additional step to fill in some metadata. This prevents users from editing the documents after the import is done.

**To import documents with metadata:**

1.  Drag your file from your desktop to the workspace main area in the browser, but don't drop it.
    The drop area is highlighted in blue.
2.  Stay on the workspace a few seconds until the drop area is highlighted in green.
    ![]({{file name='smartDnD_stay.png'}} ?w=650,border=true)
3.  Drop the file.
    The file is uploaded. When the upload is done, a "Continue" button is displayed in the top right corner of the page and an icon is displayed in the center of the page.
    ![]({{file name='smartDnD_uploaded.png'}} ?w=650,border=true)
4.  Click on the icon or the "Continue" button.
    A window pops up, that enables you to select if you want to do a quick import (smart import) or an import with metadata.
5.  Select **Smart import with metadata** and click on the **Continue import** button.
    ![]({{file name='smartDnD_import_selection.png'}} ?w=650,border=true)
    The metadata are displayed on the pop up window.
6.  Fill in the metadata that you need and click on the **Continue** button.
    ![]({{file name='smartDnD_metadata.png'}} ?w=650,h=289,border=true)
    The file is created with the filled in metadata.
    ![]({{file name='smartDnD_done.png'}} ?w=650,border=true)

## Moving Documents

You can move documents individually from a workspace to another using drag and drop.

1.  Go in the workspace where the document to move is located.
2.  Unfold the navigation so the target workspace is visible.
3.  Drag the icon of the document to move onto the target workspace in the navigation tree until the workspace is highlighted, and drop the document icon.
    ![]({{file name='move-d&d.png'}} ?w=500,h=321,border=true)
    The document is immediately moved.

## Publishing Documents

It is possible to publish documents individually using drag and drop. This requires that you have the right to directly publish documents in the target section, i.e. that you have the Write right in the section.

To publish a document using drag and drop:

1.  Go in the workspace where the document to publish is located.
2.  Unfold the navigation so the target section is visible.
3.  Drag the icon of the document to publish onto the target section in the navigation tree until the section is highlighted, and drop the document icon.
    ![]({{file name='publish_D&D.png'}} ?w=500,h=290,border=true)
    The document is immediately published.

&nbsp;

* * *