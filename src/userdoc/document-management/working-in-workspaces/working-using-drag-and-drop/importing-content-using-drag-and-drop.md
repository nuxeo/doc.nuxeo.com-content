---
title: Importing Content Using Drag and Drop
review:
    comment: ''
    date: ''
    status: ok
labels:
    - extensions
    - drag-and-drop
confluence:
    ajs-parent-page-id: '16092639'
    ajs-parent-page-title: Working Using Drag and Drop
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Importing+Content+Using+Drag+and+Drop
    canonical_source: >-
        https://doc.nuxeo.com/display/USERDOC58/Importing+Content+Using+Drag+and+Drop
    page_id: '16092638'
    shortlink: 3o31
    shortlink_source: 'https://doc.nuxeo.com/x/3o31'
    source_link: /display/USERDOC58/Importing+Content+Using+Drag+and+Drop
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 16:13'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2015-08-28 08:34'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-12-02 11:51'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-10-22 17:56'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-10-18 15:40'
        message: Added note about drag and drop disabled on IE by default
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-04-15 10:27'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-02-06 17:49'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2012-09-26 10:49'
        message: Migrated to Confluence 4.0
        version: '12'
    - 
        author: Solen Guitter
        date: '2012-09-26 10:49'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2012-06-27 16:22'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2012-06-19 15:00'
        message: Added limitation on the D&D of folders
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-12-23 12:18'
        message: Updated screenshots
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-11-23 11:23'
        message: Removed 5.4 references and added related content
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-06-06 11:38'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-05-31 17:56'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-05-31 17:51'
        message: updated with new 5.4.2 drag & drop
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-05-31 17:51'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-10-01 14:13'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-04-23 18:25'
        message: ''
        version: '1'

---
&nbsp;

&nbsp;

You can use Drag and Drop to easily import content into Nuxeo or just to create one document at a time. Two types of import are available:

*   [quick import](#quick-import-of-documents), that enables to quickly create documents in workspace;
*   [import with metadata](#import-with-metadata), that enables to fill in metadata of the document(s) before they are created in the workspace.

## Quick Import of Documents

To import content into Nuxeo, drag an item from your computer and drop it into a workspace. The document is then automatically created in the workspace and its title is the name of the original file, and no metadata is filled in. You can also drop files in your worklist. The document is then created in your personal workspace.
You can drag and drop one or more files in Nuxeo.

{{#> callout type='info' heading='Drag and drop of folders'}}

Drag and drop of folders is possible only with the Internet Explorer extension. The complete structure of the dropped folder is then reproduced and created in Nuxeo.
For security reasons, the HTML5 standard, used by the other browsers, doesn't allow to drop a folder. You can however drop several documents at the same time to fill a folder with many documents in a single manipulation.

{{/callout}}

{{{multiexcerpt 'warning-drag-and-drop-IE-disabled' page='Working using drag and drop'}}}

_Import using drag and drop in Internet Explorer:_
![]({{file name='DragNDrop-Loading.png'}} ?w=650,border=true)

_Import using HTML5 drag and drop in Firefox:_
![]({{file name='HTML5-DnD.png'}} ?w=650,border=true)

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

## Import with Metadata

{{#> callout type='info' heading='Prerequisite'}}

Import with metadata is available only on browsers that support the HTML 5 drag and drop standard.

{{/callout}}

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
    ![]({{file name='smartDnD_metadata.png'}} ?w=650,border=true)
    The file is created with the filled in metadata.
    ![]({{file name='smartDnD_done.png'}} ?w=650,border=true)

&nbsp;