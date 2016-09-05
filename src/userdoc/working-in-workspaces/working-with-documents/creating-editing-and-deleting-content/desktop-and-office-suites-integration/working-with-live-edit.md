---
title: Working with Live Edit
labels:
    - extensions
    - live-edit
    - last-review-20141126
    - editing
    - document-creation
toc: true
confluence:
    ajs-parent-page-id: '21299487'
    ajs-parent-page-title: Desktop & Office Suites Integration
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Working+with+Live+Edit
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Working+with+Live+Edit'
    page_id: '21299502'
    shortlink: LgFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/LgFFAQ'
    source_link: /display/USERDOC60/Working+with+Live+Edit
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 14:20'
        message: ''
        version: '28'
    - 
        author: Anonymous
        date: '2014-11-26 10:53'
        message: ''
        version: '27'
    - 
        author: Solen Guitter
        date: '2014-11-26 10:47'
        message: ''
        version: '26'
    - 
        author: Alain Escaffre
        date: '2014-11-24 15:46'
        message: ''
        version: '25'
    - 
        author: Alain Escaffre
        date: '2014-11-24 15:46'
        message: ''
        version: '24'
    - 
        author: Thierry Martins
        date: '2014-09-19 10:50'
        message: Add troubleshooting section
        version: '23'
    - 
        author: Solen Guitter
        date: '2014-02-03 18:41'
        message: Formatting
        version: '22'
    - 
        author: Solen Guitter
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
{{! multiexcerpt name='LiveEditDeprecated'}} {{#> callout type='note' }}

Nuxeo Live Edit is now deprecated, you should use Nuxeo Drive Edit, see Online Editing section of[ Nuxeo Drive documentation]({{page page='nuxeo-drive'}}).

{{/callout}}{{! /multiexcerpt}}

Nuxeo Live Edit is a Nuxeo extension that enables users to open and edit Microsoft Office and OpenOffice.org documents in their native application from Nuxeo. This extension prevents you from the painful process of downloading - editing - uploading office documents in the application.

Depending on the local environment, one or several extensions are required. The [Installing Live Edit]({{page page='installing-live-edit'}}) page describes what is required for which configuration.

{{! multiexcerpt name='live-edit-compatibility'}}

Live Edit is available for:

*   MS Office 2007/2010 (standard and OOXML formats),
*   OpenOffice.org 3.3+,
*   LibreOffice 3.4.4+.

It is known to work with Internet Explorer 7+ and Firefox 3.6+.

{{! /multiexcerpt}} {{#> callout type='tip' heading='Compatible environments'}}

Live Edit can be used on Windows and Linux environments.

{{/callout}}

Live Edit allows you to:

*   create documents in MS Office, OpenOffice.org and LibreOffice,
*   edit documents in MS Office, OpenOffice.org and LibreOffice.

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

Documents that can be edited with Live Edit are indicated by the icon&nbsp;![]({{file name='application_form_edit.png' page='icons-index'}}) in the **Content** tab of the parent folder and in the **Summary** tab of the document.

When you edit a document online using Live Edit, the document is automatically locked in Nuxeo. It is automatically unlocked when you close the file from Microsoft Office or OpenOffice.org.

**To edit office documents from the Nuxeo Platform:**

1.  Click on the online edition icon of the document.
    The document opens in the appropriate application.
2.  Modify the file.
3.  When done, close the editing application.
    A window pops up.
4.  Indicate if you want to save the modifications.
    The modified file is automatically uploaded on the Nuxeo Platform.

## Troubleshooting

If LiveEdit is not working on your computer, you can consult the common mistakes ans tips to investigate:

*   Check the temporary folder configured in Protocol Handler options exists and has the exact same case as the real path (`C:\Temp` is different to `C:\TEMP`)
*   Cookies need to be allowed, at least for your Nuxeo application
*   After clicking on the LiveEdit icon, check if a new folder was created in your temporary folder
*   Copy the LiveEdit link (something like `nxedit:http://server:8080/nuxeo` [)](http://xxx)) and paste it in a new tab: it could display an error message if something is wrong with your configuration
*   Open the Browser Console and check the logs after clicking on the LiveEdit link: it could indicate the reason why the document is not correctly opened