---
title: Working with WebDAV
review:
    comment: ''
    date: '2018-02-26'
    status: ok
labels:
    - webdav
    - editing
    - multiexcerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '2392396'
    ajs-parent-page-title: Editing Content
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Working+with+WebDAV
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Working+with+WebDAV'
    page_id: '2392398'
    shortlink: ToEk
    shortlink_source: 'https://doc.nuxeo.com/x/ToEk'
    source_link: /display/USERDOC/Working+with+WebDAV
history:
    -
        author: Florent Guillaume
        date: '2015-10-13 14:57'
        message: ''
        version: '38'
    -
        author: Solen Guitter
        date: '2015-08-31 12:59'
        message: Update related pages
        version: '37'
    -
        author: Manon Lumeau
        date: '2015-08-20 15:59'
        message: ''
        version: '36'
    -
        author: Manon Lumeau
        date: '2015-08-20 15:53'
        message: ''
        version: '35'
    -
        author: Florent Guillaume
        date: '2015-04-21 12:34'
        message: ''
        version: '34'
    -
        author: Manon Lumeau
        date: '2014-12-01 11:34'
        message: ''
        version: '33'
    -
        author: Manon Lumeau
        date: '2014-12-01 11:12'
        message: ''
        version: '32'
    -
        author: Manon Lumeau
        date: '2014-12-01 11:07'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2014-02-06 15:15'
        message: formatting and terminology
        version: '30'
    -
        author: Solen Guitter
        date: '2014-02-04 15:39'
        message: ''
        version: '29'
    -
        author: Solen Guitter
        date: '2014-01-20 14:09'
        message: ''
        version: '28'
    -
        author: Solen Guitter
        date: '2013-10-22 18:05'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2013-09-30 16:46'
        message: Removed related topics from TOC
        version: '26'
    -
        author: Solen Guitter
        date: '2013-02-06 17:57'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2013-01-17 12:49'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2012-10-30 11:00'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2012-01-16 13:52'
        message: Migrated to Confluence 4.0
        version: '22'
    -
        author: Solen Guitter
        date: '2012-01-16 13:52'
        message: ''
        version: '21'
    -
        author: Florent Guillaume
        date: '2011-12-19 17:01'
        message: ''
        version: '20'
    -
        author: Florent Guillaume
        date: '2011-12-19 16:59'
        message: typo
        version: '19'
    -
        author: Solen Guitter
        date: '2011-11-30 12:05'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2011-11-30 12:05'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2011-11-30 12:04'
        message: Moved steps to add new clients in EP documentation and added related content
        version: '16'
    -
        author: Solen Guitter
        date: '2011-11-25 18:06'
        message: Added XP WSS steps
        version: '15'
    -
        author: Thierry Martins
        date: '2011-11-07 15:34'
        message: support for other webdav clients
        version: '14'
    -
        author: Benoit Delbosc
        date: '2011-06-01 11:25'
        message: ''
        version: '13'
    -
        author: Benoit Delbosc
        date: '2011-06-01 10:27'
        message: ''
        version: '12'
    -
        author: Benoit Delbosc
        date: '2011-05-19 13:48'
        message: ''
        version: '11'
    -
        author: Benoit Delbosc
        date: '2011-05-17 18:39'
        message: ''
        version: '10'
    -
        author: Benoit Delbosc
        date: '2011-05-17 18:26'
        message: ''
        version: '9'
    -
        author: Benoit Delbosc
        date: '2011-05-17 18:18'
        message: Update for 5.4.2 wss support
        version: '8'
    -
        author: Solen Guitter
        date: '2010-12-01 11:19'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2010-10-01 14:15'
        message: resized screenshots
        version: '6'
    -
        author: Solen Guitter
        date: '2010-05-26 16:03'
        message: added section for document creation
        version: '5'
    -
        author: Solen Guitter
        date: '2010-05-26 12:42'
        message: added section on document management information from MS Office
        version: '4'
    -
        author: Solen Guitter
        date: '2010-05-26 11:54'
        message: added screenhots
        version: '3'
    -
        author: Solen Guitter
        date: '2010-05-25 19:27'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2010-04-15 12:14'
        message: ''
        version: '1'

---
{{! multiexcerpt name='functional-overview'}}

The Nuxeo Platform enables you to create and edit Office documents stored in the Nuxeo Platform directly from your OS desktop, without having to go on your Nuxeo application in a browser. This is possible thanks to the support of the WebDAV (Web-based Distributed Authoring and Versioning) protocol.

To support this, you don't need to install an extension or configure the Nuxeo Platform. You just need to add the Nuxeo Platform as a network drive. You will then be able to do the following actions on Nuxeo MS Office documents, from your OS desktop directly:

*   Create documents and folders
*   Edit documents
*   Move documents and folders

{{#> callout type='info' heading='Nuxeo Drive'}}

There are several known limitations with using the WebDAV protocol on Windows machines to connect to the Nuxeo Platform: temporary files that are stored in the Nuxeo Platform, technical name displayed instead of title of the document. We hardly recommend to mount WebDAV drives on Windows machines but for some specific use cases. The behavior can be different depending on the version of Windows, the version of service pack, etc.

We recommend you to pay attention to [Nuxeo Drive]({{page version='' space='nxdoc' page='nuxeo-drive'}}) that can offer you a file system access style without the above mentioned drawbacks.

{{/callout}} {{#> callout type='note' heading='WSS'}}

Since Nuxeo 7.3, Windows SharePoint Service (WSS) is not supported anymore (see [NXP-16972](https://jira.nuxeo.com/browse/NXP-16972)).

{{/callout}}

### Adding the Nuxeo Platform as an External Drive

Depending on your OS, the steps to follow so the Nuxeo Platform is seen by the OS as an external drive are different depending on your OS.

{{#> callout type='note' heading='Requirement'}}

The first time you do the mapping, make sure that you have already logged in to the web interface once. This is required to setup the Windows authentication protocol.

{{/callout}}

#### Mapping a Network Drive from Windows 7 Explorer

1.  Open the Windows Explorer.
2.  Click **Map network drive**.
3.  Choose a Drive letter.
4.  In **Folder**, type the address of your Nuxeo application adding the **site/dav/** suffix, for instance `http://NUXEO_SERVER/nuxeo/site/dav/`.
    Make sure **Connect using different credentials** is selected.
    ![]({{file name='map-network-drive-wss.png'}} ?w=450)
5.  Click on **Finish**.
    A connect window opens.
6.  Type your login and your password and click on the **OK** button.

#### Connecting to the Nuxeo Platform from Mac OS Finder

1.  From the Finder open the **Connect to Server** popup.
2.  Type the address of your Nuxeo application adding the **site/dav/** suffix, for instance `http://NUXEO_SERVER/nuxeo/site/dav/`.
3.  A connect window opens.Type your login and your password and click on the **OK** button.

#### Connecting to the Nuxeo Platform from Linux

The plugin comes with a default configuration which supports only a few clients. On Linux, it supports:

*   cadaver, which enables you to browse the content of the Nuxeo application in command line like you would do with a FTP server
*   davfs, which enables your to mount the Nuxeo Platform and see it as a file system directory

It is possible to [configure the application to work with other WebDAV clients]({{page space='nxdoc' page='webdav'}}).

### Browsing the Nuxeo Platform from Your OS

After you added the Nuxeo application as an external drive, you can browse the content of the Nuxeo Platform from your OS. You can see:

*   Workspaces
*   Folders
*   Templates
*   Files
*   Notes
*   Pictures

### {{> anchor 'dav-edit'}}Editing Documents

You can edit office documents available in your Nuxeo workspaces and folders from your OS, like any other local documents.
The document is automatically locked in the Nuxeo Platform. When you save your modifications, they are saved in the Nuxeo Platform directly. When done, closing the document will unlock the document in the Nuxeo Platform.

### {{> anchor 'dav-create'}}Creating Content in the Nuxeo Platform

You can create folders and documents in the Nuxeo Platform from your desktop.
To create documents in a Nuxeo folder or workspace, you can:

*   Drag and drop files from a local folder into the target Nuxeo folder,
*   Create the document in the native office application and save it in the Nuxeo folder.

You can then create, copy and move documents and folders in the Nuxeo Platform via the Windows Explorer or Mac Finder the same way you would do in a local folder.

{{! /multiexcerpt}}

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [WebDAV developer documentation ]({{page space='nxdoc' page='webdav'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
