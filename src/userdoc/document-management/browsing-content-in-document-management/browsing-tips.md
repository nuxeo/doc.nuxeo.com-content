---
title: Browsing Tips
labels:
    - tips
toc: true
confluence:
    ajs-parent-page-id: '16092624'
    ajs-parent-page-title: Browsing Content in Document Management
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Browsing+Tips
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Browsing+Tips'
    page_id: '16092584'
    shortlink: qI31
    shortlink_source: 'https://doc.nuxeo.com/x/qI31'
    source_link: /display/USERDOC58/Browsing+Tips
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 08:15'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2014-06-11 15:24'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2013-11-13 17:41'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-11-12 18:43'
        message: Added access keys section
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-10-30 22:55'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-10-17 18:20'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2012-07-16 16:40'
        message: Migrated to Confluence 4.0
        version: '3'
    - 
        author: Solen Guitter
        date: '2012-07-16 16:40'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2012-07-16 16:40'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

&nbsp;

&nbsp;

The Nuxeo Platform provides several means to browse its content: tags, the breadcrumbs, the different trees... Here are some tips on how to leverage all these means.

## Going Back to a Previous Page

Due to [technical reasons]({{page space='nxdoc58' page='back-and-next-buttons-paradigm-and-jsf-in-the-nuxeo-platform'}}), it is recommended to NOT use the browser's Back and Next buttons to navigate in the Platform. There are several ways to go back to a previous page.

To go up one level in the platform structure, the easiest way is to click on the icon ![]({{file name='UpFolder_icon.gif' page='icons-index'}})&nbsp;in the breadcrumbs.

![]({{file name='breadcrumbs.png'}} ?border=true)

</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

Users can also click on the workspace's title in the breadcrumbs directly or in the navigation tree. They can go up several levels in the document's path in a single click that way.

## Working with Several Documents at the Same Time

Users may want to have several Nuxeo documents open in different tabs in order to easily consult them at the same time or to work on several documents at the same time. Browsers provide a way to open documents in new tabs, but then some contextual information will be shared by all these tabs (all tabs use the same conversation). This can result in inconsistencies when modification on the documents are saved or when the user wants to navigate to another document. The Platform provides a safe way to open documents in new tabs, which is preferable to the browser's "Open in new tab".

To open documents in new tabs in order to have several Nuxeo tabs, click on the icon ![]({{file name='external.gif' page='icons-index'}})&nbsp;displayed next to the document's title. The document is opened in a new tab and in a context that is independent from the original tab.

## Quick Access to Document's Features

### Right-Click Menu

The Nuxeo Platform provides a contextual menu that enables users to access to the document's tabs in a single click instead of clicking on the document and then on the tab they want (the **Edit** tab for instance).

Right-clicking on the document displays this contextual menu and enables users to easily rename the document, access to the Workflow tab, lock the document, etc.
![]({{file name='right-click-menu.png' page='editing-content'}} ?w=350,border=true)

### Access Keys

Some actions or features are accessible using access keys: For instance ctrl-Shift-e displays the Edit tab of the document.

Press Shift-h to see the different access keys you can combine with ctrl-Shift keys to get a quick access to features.

![]({{file name='akHelp.png'}} ?w=100,border=true,thumbnail=true)