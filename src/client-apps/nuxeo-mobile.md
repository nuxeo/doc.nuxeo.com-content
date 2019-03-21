---
title: Nuxeo Mobile
review:
    comment: ''
    date: '2018-07-06'
    status: ok
toc: true
labels:
    - lts2016-ok
    - nuxeo-mobile
    - yachour
    - lts2017-ok
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
        date: '2016-10-05 08:04'
        message: ''
        version: '26'
    -
        author: Anne Jubert
        date: '2016-10-04 09:44'
        message: ''
        version: '25'
    -
        author: Anne Jubert
        date: '2016-10-03 14:29'
        message: ''
        version: '24'
    -
        author: Anne Jubert
        date: '2016-10-03 14:28'
        message: ''
        version: '23'
    -
        author: Anne Jubert
        date: '2016-10-03 14:20'
        message: ''
        version: '22'
    -
        author: Anne Jubert
        date: '2016-10-03 14:18'
        message: ''
        version: '21'
    -
        author: Anne Jubert
        date: '2016-10-03 13:17'
        message: ''
        version: '20'
    -
        author: Anne Jubert
        date: '2016-10-03 13:07'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2016-09-02 08:24'
        message: ''
        version: '18'
    -
        author: Anne Jubert
        date: '2016-08-31 13:17'
        message: ''
        version: '17'
    -
        author: Anne Jubert
        date: '2016-08-31 13:05'
        message: ''
        version: '16'
    -
        author: Anne Jubert
        date: '2016-08-31 13:01'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2016-06-20 15:38'
        message: 'Add links, rephrase and reorganise content a bit'
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
{{! excerpt}}The Nuxeo mobile application lets you access content stored in Nuxeo Platform servers on your phone. It provides a seamless experience on essential features such as searching, browsing and managing favorite documents. Available for iOS and Android.{{! /excerpt}}

## Requirements

### iPhone

The Nuxeo mobile application is available for iPhones SE, 5/5c/5s, 6/6+, 7/7+, 8/8+ and X with a minimum version of iOS 8 required.

### Android

The minimum required version of Android 4.4.

### Nuxeo Platform

#### Nuxeo Platform Versions

The Nuxeo mobile application is compliant with all Nuxeo Platform versions as of LTS 2015 HF12.

See the [Limitations](#limitations) section for previous hotfixes of Nuxeo Platform LTS 2015.

#### OAuth 2 Configuration

Since Nuxeo Platform 9.2, the Nuxeo mobile application uses an OAuth&nbsp;2 flow to authorize against the platform. If not already done, you need to [register]({{page page='using-oauth2#client-registration'}}) an OAuth&nbsp;2 client on your Nuxeo Platform with the following attributes:

* Name: Nuxeo Mobile
* Client Id: `nuxeo-mobile`
* Redirect URIs: `nuxeo://authorize`

## Installation

The Nuxeo **iOS** application can be installed from the [Apple Store](https://itunes.apple.com/app/apple-store/id1103802613?mt=8).

The Nuxeo **Android** application can be installed from [Google Play](https://play.google.com/store/apps/details?id=com.nuxeomobile).

## Functional Overview

The Nuxeo application allows you to authenticate against a Nuxeo server, browse and search the Nuxeo repository. In addition, you can manage your favorite documents and access your shared/personal collections. Finally, you can start and process workflows tasks on your assets. All features listed below are available using the side ("burger") menu.

![]({{file name='mobile-menu.png'}} ?w=200,h=433,border=true)

### Authenticating

Once the application is installed and opened, indicate the Nuxeo server you want to connect to by filling the HTTP information. For example `http://NUXEO_SERVER/nuxeo`. As soon as the server is detected, the login page is displayed. Depending on your server configuration, it is the default one or your customized login page providing authentication through CAS, OpenID or another authentication system.

<div>
<table class="hover" style="border: 0px;">
<tbody>
<tr>
<td colspan="1"><b>![]({{file name='mobile-connection.png'}} ?w=200,h=355,border=true)</b></td>
<td colspan="1"><b>![]({{file name='mobile-login-page.png'}} ?w=200,h=355,border=true)</b></td>
</tr>
</tbody>
</table>
</div>

### Browsing Content

The **Browse** menu enables you to browse your documents. The thumbnail of the document is displayed whenever it's available, just like on the regular web user interface (see the [Limitations](#limitations) section). Otherwise an icon is displayed. Tap to enter the workspace or see the document. Actions on documents are available by **taping the overflow button**:

*   Share
*   [Add to/Remove from favorites](#favorites)
*   Add to Collections
*   [Start Process](#workflows)

<div>
<table class="hover" style="border: 0px;">
<tbody>
<tr>
<td colspan="1"><b>![]({{file name='mobile-actions-overflow.jpg'}} ?w=200,h=355,border=true)</b></td>
<td colspan="1"><b>![]({{file name='mobile-actions-overflow-menu.png'}} ?w=200,h=355,border=true)</b></td>
</tr>
</tbody>
</table>
</div>

For any non folderish document, such as notes and files typically, some information is displayed on the view layout:

*   The document thumbnail if available or the preview of content for notes
*   The filename and size of the attached file if any
*   The creation date, creator username, version, state and list of contributors


If the PDF preview is available, tap the thumbnail zone to preview it. If the document is a text document with several pages, you can navigate through it.

<div>
<table class="hover" style="border: 0px;">
<tbody>
<tr>
<td colspan="1"><b>![]({{file name='mobile-browse.jpg'}} ?w=210,border=true)</b></td>
<td colspan="1"><b>![]({{file name='mobile-document-view.png'}} ?w=200,border=true)</b></td>
<td colspan="1"><b>![]({{file name='mobile-document-preview.png'}} ?w=200,border=true)</b></td>
</tr>
</tbody>
</table>
</div>

{{#> callout type='tip' }}
When previewing a document, you can hide the top bar by taping the screen.
{{/callout}}

Browsing documents can be made with list view or grid view, allowing to better preview thumbnails. Finally, folder or collection content, as well as [search results](#search) can be sorted by alphabetical order ('title') or modification date.

<div>
<table class="hover" style="border: 0px;">
<tbody>
<tr>
<td colspan="1"><b>![]({{file name='mobile-browse-grid.png'}} ?w=200,border=true)</b></td>
<td colspan="1"><b>![]({{file name='mobile-browse-sort.png'}} ?w=200,border=true)</b></td>
</tr>
</tbody>
</table>
</div>

{{#> callout type='tip' }}
Tapping a sort order twice switches between ascendant and descendant sort order{{/callout}}

### Search

The **Search** menu enables you to query documents on their title and content, by performing a full-text search. {{{multiexcerpt 'full-text-search-user-desc' space='nxdoc' page='quick-search'}}}A list of matching documents is provided and you can directly have access them. Once on a document, tap the back icon to go back to search results.

![]({{file name='mobile-search.jpg'}} ?w=200,border=true)

### Favorites

You are able to mark as favorite the list of documents you are interested in. "Add to" and "Remove from" favorites actions are available for all document types whether the document is folderish or not. Select the "..." action available on the toolbar. Favorite documents are available directly from the **Favorites** menu.

<div>
<table class="hover" style="border: 0px;">
<tbody>
<tr>
<td colspan="1"><b>![]({{file name='mobile-favorites.png'}} ?w=200,h=357,border=true)</b></td>
<td colspan="1"><b>![]({{file name='mobile-add-favorite.png'}} ?w=200,h=357,border=true)</b></td>
<td colspan="1"><b>![]({{file name='mobile-remove-favorite.png'}} ?w=200,h=357,border=true)</b></td>
</tr>
</tbody>
</table>
</div>

### Recently Viewed

The **Recently Viewed** entry displays the last 20 documents viewed on your Nuxeo Mobile application. From this entry you can tap on a document to enter a workspace or display the document. Actions on documents are available by **sliding** to share, add to your favorites or add a document to a collections.

![]({{file name='mobile-recently-viewed.png'}} ?w=200,h=357,border=true)


### Collections

The dedicated menu entry enables you to directly access collections: Shared and Personal. Personal collections have been created by yourself and Shared collections are collections where you have been granted at least read permissions.

Browsing your repository, you can add a document to one or several collections. Once you have selected the list of collections, you can view them and uncheck some.

<div>
<table class="hover" style="border: 0px;">
<tbody>
<tr>
<td colspan="1"><b>![]({{file name='mobile-collections.png'}} ?w=200,h=357,border=true)</b></td>
<td colspan="1"><b>![]({{file name='mobile-collections.jpg'}} ?w=200,h=357,border=true)</b></td>
<td colspan="1"><b>![]({{file name='mobile-collections-added.png'}} ?w=200,h=357,border=true)</b></td>
</tr>
</tbody>
</table>
</div>

### Capture of Documents

Documents such as images, videos, attachments can be shared to Nuxeo.
On iOS, from the **Share** menu associated with a document, add the Nuxeo share destination. On android, the share extension is activated by default.

<div>
<table class="hover" style="border: 0px;">
<tbody>
<tr>
<td colspan="1"><b>![]({{file name='mobile-capture-add-nuxeo.png'}} ?w=200,border=true)</b></td>
<td colspan="1"><b>![]({{file name='mobile-capture-share-photo.png'}} ?w=200,border=true)</b></td>
<td colspan="1"><b>![]({{file name='mobile-capture-share-photo-android.png'}} ?w=200,border=true)</b></td>
</tr>
</tbody>
</table>
</div>

When capturing a document in Nuxeo, the user can select her personal space (set by default) or browse folders to select the destination.

<div>
<table class="hover" style="border: 0px;">
<tbody>
<tr>
<td colspan="1"><b>![]({{file name='mobile-capture-folder-selection.png'}} ?w=200,border=true)</b></td>
<td colspan="1"><b>![]({{file name='mobile-capture-folder-done.png'}} ?w=200,border=true)</b></td>
<td colspan="1"><b>![]({{file name='mobile-capture-done.png'}} ?w=200,border=true)</b></td>
</tr>
</tbody>
</table>
</div>

### Workflows
All Nuxeo documents evolve according to defined lifecycle. See [workflows]({{page space='nxdoc' page='workflow'}}) documentation for more details. On mobile, default serial and parallel workflows are implemented.

On documents, document lists or collections, access the contextual menu by clicking the overflow button and click on **Start Process** to choose the workflow type. When consulting a document with a task to process, a banner (black in the screenshot below) allows a direct access to the task screen.

<div>
<table class="hover" style="border: 0px;">
<tbody>
<tr>
<td colspan="1"><b>![]({{file name='mobile-workflows-start-process.png'}} ?w=200,border=true)</b></td>
<td colspan="1"><b>![]({{file name='mobile-workflows-choose-type.png'}} ?w=200,border=true)</b></td>
<td colspan="1"><b>![]({{file name='mobile-workflows-asset-task-to-process.png'}} ?w=200,border=true)</b></td>
</tr>
</tbody>
</table>
</div>

The dedicated **Tasks** entry enables you to directly access the user tasks and process them. A definition of the task, as well as the deadline, participants and document link is displayed.
Once mandatory fields are filled, the user can process it (approval, rejection, or any other action defined in this task).

<div>
<table class="hover" style="border: 0px;">
<tbody>
<tr>
<td colspan="1"><b>![]({{file name='mobile-workflows-tasks-list.png'}} ?w=200,border=true)</b></td>
<td colspan="1"><b>![]({{file name='mobile-workflows-task-view.png'}} ?w=200,border=true)</b></td>
<td colspan="1"><b>![]({{file name='mobile-workflows-approve-reject.png'}} ?w=200,border=true)</b></td>
</tr>
</tbody>
</table>
</div>


### Share / Open in

You are able to **share** any document through messages, mail, Slack, Twitter, Facebook.... any available application on your phone for that purpose. The **Share** button is available on the toolbar of the document view, next to the filename.

![]({{file name='mobile-share-action.png'}} ?w=200,h=355,border=true)

In addition, you are able to **Open directly** documents on your phone by downloading them first and then choose the action that you want. To do so click on the **Download** button below the thumbnail view.

<div>
<table class="hover" style="border: 0px;">
<tbody>
<tr>
<td colspan="1"><b>![]({{file name='mobile-open-in-download.png'}} ?w=200,h=357,border=true)</b></td>
<td colspan="1"><b>![]({{file name='mobile-open-action.png'}} ?w=200,h=355,border=true)</b></td>
</tr>
</tbody>
</table>
</div>

### Personal Workspace

The personal workspace menu gives you a direct access to your collections and personal documents.

### Offline Mode

When your phone loses network connection or when you turn it on airplane mode, an offline banner is displayed. However, assets aren't loaded nor accessible without connection.

<div>
<table class="hover" style="border: 0px;">
<tbody>
<tr>
<td colspan="1"><b>![]({{file name='mobile-offline-mode.png'}} ?w=200,h=355,border=true)</b></td>
<td colspan="1"><b>![]({{file name='mobile-offline-mode-refresh.png'}} ?w=200,h=355,border=true)</b></td>
</tr>
</tbody>
</table>
</div>

## {{> anchor 'limitations'}}Limitations

### Nuxeo Platform LTS 2015 with Hotfix 12

Yet there are two limitations when running against Nuxeo LTS 2015 with hotfix 12, aka. Nuxeo 7.10-HF12:

*   It is not possible to mark a document as Favorite from the mobile app but you can have access to documents marked as favorites from the web UI.
*   Preview isn't available for the Picture and Video document types nor for the File type with PDF content. A simple file icon is displayed instead.
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

If you run the mobile application against a Nuxeo Platform LTS 2015 instance with hotfixes inferior to HF12 installed, it works but in degraded mode:

- Authentication: Only basic default authentication is available.
- Browsing:
  - No thumbnails are available in the document listing.
  - No preview is available except for Note documents.
