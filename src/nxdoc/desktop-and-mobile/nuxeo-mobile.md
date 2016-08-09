---
title: Nuxeo Mobile
toc: true
confluence:
    ajs-parent-page-id: '31033323'
    ajs-parent-page-title: Desktop and Mobile
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Mobile
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Mobile'
    page_id: '31035724'
    shortlink: TJHZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/TJHZAQ'
    source_link: /display/NXDOC/Nuxeo+Mobile
history:
    - 
        author: Solen Guitter
        date: '2016-06-20 15:38'
        message: 'dd links, rephrase and reorganise content a bi'
        version: '14'
    - 
        author: Solen Guitter
        date: '2016-06-20 12:43'
        message: ''
        version: '13'
    - 
        author: Anne Jubert
        date: '2016-06-20 12:37'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2016-06-20 10:09'
        message: ''
        version: '11'
    - 
        author: Anne Jubert
        date: '2016-06-20 10:07'
        message: ''
        version: '10'
    - 
        author: Alain Escaffre
        date: '2016-06-19 22:34'
        message: ''
        version: '9'
    - 
        author: Anne Jubert
        date: '2016-06-17 19:59'
        message: ''
        version: '8'
    - 
        author: Anne Jubert
        date: '2016-06-17 19:57'
        message: ''
        version: '7'
    - 
        author: Anne Jubert
        date: '2016-06-17 19:52'
        message: ''
        version: '6'
    - 
        author: Anne Jubert
        date: '2016-06-17 14:01'
        message: ''
        version: '5'
    - 
        author: Alain Escaffre
        date: '2016-06-16 12:10'
        message: ''
        version: '4'
    - 
        author: Anne Jubert
        date: '2016-06-15 13:49'
        message: ''
        version: '3'
    - 
        author: Anne Jubert
        date: '2016-06-15 12:48'
        message: ''
        version: '2'
    - 
        author: Antoine Taillefer
        date: '2016-06-15 11:30'
        message: ''
        version: '1'

---
{{! excerpt}}

The Nuxeo mobile application lets you access content stored in Nuxeo Platform servers on your phone. It provides a seamless experience on essential features such as searching, browsing and managing favorite documents.

{{! /excerpt}}

&nbsp;

## Requirements

### iPhone Requirements

The Nuxeo mobile application is available for iPhones SE, 5/5c/5s and 6/6+ with a minimum version of iOS 8 required.

### Nuxeo Platform Requirements

The Nuxeo mobile application is compliant with Nuxeo Platform 8.3 and Nuxeo LTS 2015 with hotfix 12\. See the [Limitations](#limitations) section for previous hotfixes of Nuxeo Platform LTS 2015.

## Installation

The Nuxeo application can be installed from the Apple Store.

## Functional Overview

The Nuxeo application allows you to authenticate against a Nuxeo server and browse and search the Nuxeo repository and your favorites documents. It provides a menu giving access to all menu entries, except when you are browsing.

![]({{file name='MobileMenu.jpg'}} ?w=200,h=355,border=true)

### Authenticating

Once the application is installed and opened, indicate the Nuxeo server you want to connect to by filling the HTTP information. For example "[http://myserver.nuxeo.com/nuxeo](http://myserver.nuxeo.com/nuxeo)".

![]({{file name='MobileServerConnection.PNG'}} ?w=200,h=355,border=true)

As soon as the server is detected, the login page is displayed. Depending on your server configuration, it is the default one or your customized login page providing authentication through CAS, OpenID or another authentication system.

![]({{file name='MobileLoginPage.jpg'}} ?w=200,h=355,border=true)

### Browsing Content

The **Browse** menu enables you to browse your documents. The thumbnail of the document is displayed whenever it's available, just like on the regular web user interface (see the [Limitations](#limitations) section). Otherwise an icon is displayed. Tap to enter the workspace or see the document.

For any non folderish document, such as notes and files typically, some information is displayed on the view layout:&nbsp;

*   The document thumbnail if available or the preview of&nbsp;content &nbsp;for notes
*   The filename and size of the attached file if any
*   The creation date, creator username, version, state and list of contributors

If the PDF preview is available, tap the thumbnail zone to preview it. If the document is a text document with several pages, you can navigate through it.

![]({{file name='MobileUnstarred.jpg'}} ?w=200,h=355,border=true)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;![]({{file name='MobileDocumentView.jpg'}} ?w=200,h=355,border=true)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;![]({{file name='MobilePreview.jpg'}} ?w=200,h=355,border=true)

### Favorites

You are able to mark as favorite the list of documents you are interested in. The "Star" action is available for all document types whether the document is folderish or not. Tap the star icon to add documents to your favorites. Favorite documents are marked with a blue star and are available directly from the **Favorites** menu.

![]({{file name='MovileStarred.jpg'}} ?w=200,h=355,border=true)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;![]({{file name='MobileFavorites.jpg'}} ?w=200,h=355,border=true)

### Search

The **Search** menu enables you to query documents on their title and content, by performing a full-text search.&nbsp;

{{{multiexcerpt 'full-text-search-user-desc' page='USERDOC:Quick Search'}}}

A list of matching documents is provided and you can directly have access them. Once on a document, tap the back icon to go back to search results.

![]({{file name='MobileSearch.jpg'}} ?w=200,h=355,border=true)

### Personal Workspace

The personal workspace menu gives you a direct access to your collections and personal documents.

## Limitations

### Nuxeo Platform LTS 2015 with Hotfix 12

Yet there are two limitations when running against Nuxeo LTS 2015 with hotfix 12, aka. Nuxeo 7.10-HF12:

*   It is not possible to mark a document as Favorite from the mobile app but you can have access to documents marked as favorites from the web UI
*   Preview isn't available&nbsp;for the Picture and Video document types nor for the File type with PDF content. A simple file icon is displayed instead.
    To allow previewing these types of documents you can add the following [XML contribution]({{page page='how-to-contribute-to-an-extension'}}) to your Nuxeo instance:

    ```xml
    <?xml version="1.0"?>
    <component name="com.my.company.authChainContrib">

      <require>org.nuxeo.ecm.platform.ui.web.auth.WebEngineConfig</require>

      <extension
        target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService"
        point="chain">
        <authenticationChain>
          <plugins>
            <plugin>BASIC_AUTH</plugin>
            <plugin>TOKEN_AUTH</plugin>
            <plugin>FORM_AUTH</plugin>
            <plugin>WEBENGINE_FORM_AUTH</plugin>
            <plugin>ANONYMOUS_AUTH</plugin>
            <plugin>WEBSERVICES_AUTH</plugin>
          </plugins>
        </authenticationChain>
      </extension>

    </component>
    ```

### Nuxeo Platform LTS 2015 until Hotfix 11 Included

If you run the mobile application against a Nuxeo Platform LTS 2015 instance with hotfixes inferior to HF12 installed, it will work but in degraded mode:

*   Authentication: Only basic default authentication is available.
*   Browsing:

    *   No thumbnails are available in the document listing.
    *   No preview is available except for Note documents.

{{! Don't put anything here. }}

* * *