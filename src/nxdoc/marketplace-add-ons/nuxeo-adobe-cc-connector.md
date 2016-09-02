---
title: Nuxeo Adobe CC Connector
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Adobe+CC+Connector
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Adobe+CC+Connector'
    page_id: '31686663'
    shortlink: B4DjAQ
    shortlink_source: 'https://doc.nuxeo.com/x/B4DjAQ'
    source_link: /display/NXDOC/Nuxeo+Adobe+CC+Connector
history:
    - 
        author: Anne Jubert
        date: '2016-09-02 13:32'
        message: ''
        version: '13'
    - 
        author: Andrei Nechaev
        date: '2016-09-02 13:25'
        message: ''
        version: '12'
    - 
        author: Anne Jubert
        date: '2016-09-02 12:43'
        message: ''
        version: '11'
    - 
        author: Anne Jubert
        date: '2016-09-02 12:42'
        message: ''
        version: '10'
    - 
        author: Anne Jubert
        date: '2016-09-02 12:39'
        message: ''
        version: '9'
    - 
        author: Anne Jubert
        date: '2016-09-02 12:29'
        message: ''
        version: '8'
    - 
        author: Anne Jubert
        date: '2016-09-02 12:24'
        message: ''
        version: '7'
    - 
        author: Anne Jubert
        date: '2016-09-02 12:13'
        message: ''
        version: '6'
    - 
        author: Anne Jubert
        date: '2016-09-02 10:14'
        message: ''
        version: '5'
    - 
        author: Anne Jubert
        date: '2016-09-02 09:56'
        message: ''
        version: '4'
    - 
        author: Anne Jubert
        date: '2016-06-30 11:31'
        message: ''
        version: '3'
    - 
        author: Anne Jubert
        date: '2016-06-30 11:29'
        message: ''
        version: '2'
    - 
        author: Anne Jubert
        date: '2016-06-30 10:39'
        message: ''
        version: '1'

---
![]({{file name='Screen Shot 2016-09-02 at 11.55.39.png'}} ?w=200,h=303,border=true,align=center)

<span class="s1"><span style="color: rgb(20,51,83);">The Nuxeo Adobe CC Connector addon enables designers to import assets into an InDesign, Photoshop or Illustrator document directly from Nuxeo repository. Link to the repository is maintained so as to facilitate updates of the referenced assets.</span></span>

# Installation

Installation is made of two steps:

*   You have to install the following marketplace package, link [here](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-cc-connector-marketplace).
*   On the marketplace page, you should see a link to the zip plugin for the client side (under "useful links and resources"). The client side plugin needs to be unzipped in the following location:&nbsp;
    *   On Mac, into ~/Library/Application\ Support/Adobe/CEP/extensions. We recommend you remove the previous client-side extensions/files. Be sure to close, then open the applications if you had them opened before installing the update.
    *   In your Window/extensions view in the Creative suite, you will now see a "Nuxeo CC" option.

A new extension "Nuxeo CC Connector" is now available on your Photoshop, InDesign or Illustrator Application.

# Configuration

A connection to your Nuxeo server must be implemented. Go to the settings part of the connect and fill the following information:&nbsp;

*   Choose between http and https
*   your nuxeo server adress: [http://localhost:8080/nuxeo](http://localhost:8080/nuxeo)&nbsp;for example
*   login and password

# Functional Overview

## <span style="color: rgb(0,0,0);">Assets listing view</span>

<span style="color: rgb(0,0,0);">By default, all assets with the facet "Picture" will be displayed, with a maximum of 35 by default.</span>

<span style="color: rgb(0,0,0);">Each displayed asset comes with a</span> **card view** <span style="color: rgb(0,0,0);">containing: &nbsp;</span>

*   <span style="color: rgb(0,0,0);line-height: 21.58px;">Thumbnail of the asset</span>
*   <span style="color: rgb(0,0,0);line-height: 21.58px;">Customised information: filename, format and modification date.&nbsp;</span>
*   <span style="color: rgb(0,0,0);line-height: 21.58px;">For Photoshop so far: a green checkbox added when the document is already placed on the current project&nbsp;</span>

<span style="color: rgb(0,0,0);">A **search feature** is available with the following choices:&nbsp;</span>

<span style="color: rgb(0,0,0);">&nbsp;&nbsp;&nbsp;&nbsp;- On document title</span>

<span style="color: rgb(0,0,0);">&nbsp;&nbsp;&nbsp;&nbsp;- On folder title: retrieve all children of returned folders</span>

![]({{file name='Screen Shot 2016-09-02 at 14.21.19.png'}} ?w=600)

## <span style="color: rgb(0,0,0);">Asset view</span>

<span style="color: rgb(0,0,0);">When selecting an asset, you are redirected to the asset view with the following information:&nbsp;</span>

<span style="color: rgb(0,0,0);">&nbsp;&nbsp;&nbsp;&nbsp;- Thumbnail</span>

<span style="color: rgb(0,0,0);">&nbsp;&nbsp;&nbsp;&nbsp;- Filename with a link: it enables the user to directly open the asset on the nuxeo instance</span>

<span style="color: rgb(0,0,0);">&nbsp;&nbsp;&nbsp;&nbsp;- Same customised fields than on the document listing view: format and modification date</span>

<span style="color: rgb(0,0,0);">![]({{file name='Screen Shot 2016-09-02 at 14.28.20.png'}} ?w=400,border=true)&nbsp; &nbsp; &nbsp;
</span>

## Update / Place / Synchronisation

<span style="color: rgb(0,0,0);">On the asset view, some actions are available: &nbsp;</span>

<span style="color: rgb(0,0,0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- On **Photoshop**: "Place", "Update" or "Delete" pictures/psd projects</span>

<span style="color: rgb(0,0,0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- On **Indesign** and **Illustrator**: "Place" pictures.&nbsp;</span>

<span style="color: rgb(0,0,0);">Updated documents in nuxeo instance or in an adobe application will be replicated everywhere. A red icon indicates that **synchronisation** to the server has to be done.</span>

<span style="color: rgb(0,0,0);">![]({{file name='Screen Shot 2016-09-02 at 14.31.58.png'}} ?w=400,h=376,border=true)</span>

&nbsp;

{{! Don't put anything here. }}

* * *