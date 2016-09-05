---
title: Working with Live Edit
labels:
    - editing
    - extensions
    - live-edit
toc: true
confluence:
    ajs-parent-page-id: '16092621'
    ajs-parent-page-title: Desktop & Office Suites Integration
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Working+with+Live+Edit
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Working+with+Live+Edit'
    page_id: '16092645'
    shortlink: 5Y31
    shortlink_source: 'https://doc.nuxeo.com/x/5Y31'
    source_link: /display/USERDOC58/Working+with+Live+Edit
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 14:21'
        message: ''
        version: '22'
    - 
        author: Anonymous
        date: '2013-10-22 18:00'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2013-09-30 16:44'
        message: Removed related topics from TOC
        version: '20'
    - 
        author: Solen Guitter
        date: '2013-02-15 18:07'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2013-02-06 17:50'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2012-11-07 11:52'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2012-10-18 12:14'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2012-06-27 17:03'
        message: Migrated to Confluence 4.0
        version: '15'
    - 
        author: Solen Guitter
        date: '2012-06-27 17:03'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2012-01-10 16:41'
        message: Updated supported Office versions and added IE 9 note
        version: '13'
    - 
        author: Solen Guitter
        date: '2011-12-20 12:14'
        message: Added toc and related content
        version: '12'
    - 
        author: Arnaud Kervern
        date: '2011-12-01 11:11'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2011-11-25 11:04'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2011-11-23 15:32'
        message: ''
        version: '9'
    - 
        author: Alain Escaffre
        date: '2011-07-25 14:51'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-06-06 11:39'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-04-21 18:49'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-04-21 18:39'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-04-21 18:18'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-03-08 11:22'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-11-03 12:07'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-04-27 16:00'
        message: ''
        version: '1'

---
## Before You Start

Before you start using Live Edit to create and edit documents:

*   you may want to take a look at the [Live Edit Compatibility Table]({{page page='live-edit-compatibility-table'}}),
*   please check your certificate is validated if your Nuxeo Platform uses HTTPS. If your certificate is not validated, Live Edit won't work;
*   under Linux, ensure to have Java support installed when using LibreOffice. Ubuntu package is _libreoffice-java-common_;
*   for Internet Explorer 9 users, change your browser mode to at least "IE9 Compat view", in the developer toolbar (F12).

## Creating Office Documents

**To create office documents directly into the Nuxeo Platform:**

1.  Click on one of the MS Office or OpenOffice.org icon displayed below the search box.
2.  The application corresponding to the icon you clicked on opens.
3.  Type the content of your document.
4.  Save your modifications in Nuxeo:
    *   By closing the application.
    *   By cliking **Save in Nuxeo** in the Add-Ins menu of the application.
        A **Save in Nuxeo** window opens.
5.  Give the document a title and a description, and select where to save the document in Nuxeo.
6.  Click on **OK** button.
    The document is automatically saved in Nuxeo.

## Editing Documents {{> anchor 'online-editing'}}

Documents that can be edited with Live Edit are indicated by the icon in the **Content** tab of the parent folder and in the **Summary** tab of the document.

When you edit a document online using Live Edit, the document is automatically locked in Nuxeo. It is automatically unlocked when you close the file from Microsoft Office or OpenOffice.org.

**To edit office documents from the Nuxeo Platform:**

1.  Click on the online edition icon of the document.
    The document opens in the appropriate application.
2.  Modify the file.
3.  When done, close the editing application.
    A window pops up.
4.  Indicate if you want to save the modifications.
    The modified file is automatically uploaded on the Nuxeo Platform.

&nbsp;