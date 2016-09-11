---
title: Folders
review:
    comment: ''
    date: ''
    status: ok
labels:
    - last-review-20141125
    - folder
toc: true
confluence:
    ajs-parent-page-id: '21299527'
    ajs-parent-page-title: Available Documents
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Folders
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Folders'
    page_id: '21299457'
    shortlink: AQFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/AQFFAQ'
    source_link: /display/USERDOC60/Folders
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 08:33'
        message: ''
        version: '26'
    - 
        author: Solen Guitter
        date: '2014-11-25 18:28'
        message: ''
        version: '25'
    - 
        author: Solen Guitter
        date: '2014-11-25 18:27'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2014-11-25 18:26'
        message: 'Update available doc types, related pages'
        version: '23'
    - 
        author: Solen Guitter
        date: '2014-02-24 14:19'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2014-01-06 16:52'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2014-01-06 16:51'
        message: >-
            Made it more clear that sorting can only be manual in ordered
            folders.
        version: '20'
    - 
        author: Solen Guitter
        date: '2013-12-02 11:38'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2013-10-31 15:43'
        message: Updated screenshots for 5.8
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-10-22 17:56'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-02-06 17:46'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2012-07-24 11:42'
        message: Migrated to Confluence 4.0
        version: '15'
    - 
        author: Solen Guitter
        date: '2012-07-24 11:42'
        message: Added TOC
        version: '14'
    - 
        author: Solen Guitter
        date: '2012-07-24 11:38'
        message: Added TOC
        version: '13'
    - 
        author: Solen Guitter
        date: '2012-06-27 11:29'
        message: Added TOC
        version: '12'
    - 
        author: Solen Guitter
        date: '2011-12-23 12:01'
        message: Updated screenshots
        version: '11'
    - 
        author: Solen Guitter
        date: '2011-11-23 11:06'
        message: Added related content
        version: '10'
    - 
        author: Solen Guitter
        date: '2011-11-09 09:48'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-11-08 17:09'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-06-06 11:36'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2010-10-20 10:42'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2010-10-05 18:13'
        message: resized screenshots
        version: '5'
    - 
        author: Solen Guitter
        date: '2010-10-05 17:50'
        message: ''
        version: '4'
    - 
        author: Stéfane Fermigier
        date: '2010-08-03 17:55'
        message: added links
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-06-18 19:11'
        message: added links
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-06-18 19:05'
        message: ''
        version: '1'

---
&nbsp;

&nbsp;

In workspaces, you can create and manage your documents in folders. A folder works like a workspace, but the documents available for creation are limited.

In a folder, you can create:

*   [Notes]({{page page='notes'}})
*   [Files]({{page page='files'}})
*   [Collections]({{page page='collections'}})
*   Sub-folders

{{! excerpt}}

There are two types of folders: regular folders and ordered folders. The difference between the two folder types is the way content is sorted.

{{! /excerpt}}

*   In a regular folder, documents are sorted on the title by default. You can change the sort criterion by clicking on the content table columns title. You can thus sort them on their state, author, etc.
*   In an ordered folder, documents are manually sorted. So, the orders in which documents are listed in the folder doesn't depend on one of its properties (version, author, etc); you decide where it should be displayed in the list. When a document is created, it is added at the end of the list. It is not possible to sort documents automatically by clicking on the columns titles in an ordered folder.

## Regular Folders

Regular folders, called "Folders", have the same behavior as workspaces. In a folder, you can:

*   [Create documents]({{page page='creating-content'}}) and do all the actions available on them (edit, approve, manage relations, etc)
*   [Manage access rights]({{page page='managing-access-rights'}})
*   [Subscribe to and manage alerts]({{page page='alerts'}})
*   [Manage the folder's trash]({{page page='managing-deleted-documents'}})

Like in a workspace, you can use [drag & drop]({{page page='working-using-drag-and-drop'}}) to create content in a folder.

## Ordered Folders

Ordered folders are folders in which you can change the content's order.

An ordered folder has the same presentation as a regular folder, but it has some additional buttons below the content table:

*   Move up
*   Move down
*   Move to top
*   Move to bottom

**To change the content's order:**

1.  Select a document using the checkbox on the left.
    The move buttons are available.
    ![]({{file name='ordered-folder-content.png'}} ?w=650,border=true)
2.  Click on the move button you need.
3.  The document is moved in the list of documents available in the folder.
    ![]({{file name='ordered-folder-content-updated.png'}} ?w=650,border=true)

{{#> callout type='tip' heading='Moving documents restrictions'}}

You can move one document at a time. If you select more than one document, the move buttons will deactivate.

{{/callout}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related User Documentation'}}

*   [Available Documents]({{page page='available-documents'}})
*   [Creating Content]({{page page='creating-content'}})
*   [Working Using Drag and Drop]({{page page='working-using-drag-and-drop'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Customization Documentation'}}

*   [How to Override Existing Document Types]({{page space='nxdoc60' page='how-to-override-existing-document-types'}})
*   [How to Define a Document Type]({{page space='nxdoc60' page='how-to-define-a-document-type'}})
*   [How-To Index]({{page space='nxdoc60' page='how-to-index'}})

{{/panel}}</div></div>