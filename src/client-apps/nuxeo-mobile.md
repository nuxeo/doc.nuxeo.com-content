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

{{! excerpt}}
The [Nuxeo mobile](https://www.nuxeo.com/products/mobile/) application lets you access content stored in Nuxeo Platform servers on your phone. It provides a seamless experience on essential features such as searching, browsing and managing favorite documents. Available for iOS and Android.
{{! /excerpt}}

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

Since Nuxeo Platform 9.2, the Nuxeo mobile application uses an OAuth&nbsp;2 flow to authorize against the platform. If not already done, you need to [register]({{page page='using-oauth2'}}#client-registration) an OAuth&nbsp;2 client on your Nuxeo Platform with the following attributes:

- Name: Nuxeo Mobile
- Client Id: `nuxeo-mobile`
- Redirect URIs: `nuxeo://authorize`

## Installation

The Nuxeo **iOS** application can be installed from the [Apple Store](https://itunes.apple.com/app/apple-store/id1103802613?mt=8).

The Nuxeo **Android** application can be installed from [Google Play](https://play.google.com/store/apps/details?id=com.nuxeomobile).

## Functional Overview

The Nuxeo application allows you to authenticate against a Nuxeo server, browse and search the Nuxeo repository. In addition, you can manage your favorite documents and access your shared/personal collections. Finally, you can start and process workflows tasks on your assets. All features listed below are available using the side ("burger") menu.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Menu
    name: mobile-menu.png
    1.13#screenshot#up_to_date
--}}
![Mobile Menu](nx_asset://02542a71-a2e3-4dec-89bd-1a4aa53792b1 ?w=200,border=true)

### Authenticating

Once the application is installed and opened, indicate the Nuxeo server you want to connect to by filling the HTTP information. For example `http://NUXEO_SERVER/nuxeo`. As soon as the server is detected, the login page is displayed. Depending on your server configuration, it is the default one or your customized login page providing authentication through CAS, OpenID or another authentication system.

<div>
<table class="hover" style="border: 0px;">
<tbody>
<tr>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Connection
    name: mobile-connection.png
    1.13#screenshot#up_to_date
--}}
![Mobile Connection](nx_asset://cafb4592-0a06-4373-863c-297e13d71347 ?w=200,h=355,border=true)</b></td>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Login Page
    name: mobile-login-page.png
    1.13#screenshot#up_to_date
--}}
![Mobile Login Page](nx_asset://d708e300-680a-4332-8bcf-b668eb6f26dc ?w=200,h=355,border=true)</b></td>
</tr>
</tbody>
</table>
</div>

### Browsing Content

The **Browse** menu enables you to browse your documents. The thumbnail of the document is displayed whenever it's available, just like on the regular web user interface (see the [Limitations](#limitations) section). Otherwise an icon is displayed. Tap to enter the workspace or see the document. Actions on documents are available by **taping the overflow button**:

- Share
- [Add to/Remove from favorites](#favorites)
- Add to Collections
- [Start Process](#workflows)

<div>
<table class="hover" style="border: 0px;">
<tbody>
<tr>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Actions Overflow
    name: mobile-actions-overflow.jpg
    1.13#screenshot#up_to_date
--}}
![Mobile Actions Overflow](nx_asset://723f8305-2a9e-45dd-ac90-9cc1e1f6b783 ?w=200,h=355,border=true)</b></td>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Actions Overflow Menu
    name: mobile-actions-overflow-menu.png
    1.13#screenshot#up_to_date
--}}
![Mobile Actions Overflow Menu](nx_asset://94f5a226-a875-4469-b798-5a90644736c9 ?w=200,h=355,border=true)</b></td>
</tr>
</tbody>
</table>
</div>

For any non folderish document, such as notes and files typically, some information is displayed on the view layout:

- The document thumbnail if available or the preview of content for notes
- The filename and size of the attached file if any
- The creation date, creator username, version, state and list of contributors


If the PDF preview is available, tap the thumbnail zone to preview it. If the document is a text document with several pages, you can navigate through it.

<div>
<table class="hover" style="border: 0px;">
<tbody>
<tr>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Browse
    name: mobile-browse.jpg
    1.13#screenshot#up_to_date
--}}
![Mobile Browse](nx_asset://59cee105-d60c-4b86-806d-2ae530f3ac93 ?w=210,border=true)</b></td>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Document View
    name: mobile-document-view.png
    1.13#screenshot#up_to_date
--}}
![Mobile Document View](nx_asset://e13b65e4-b5ae-40ea-b266-b41b82a80535 ?w=200,border=true)</b></td>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Document Preview
    name: mobile-document-preview.png
    1.13#screenshot#up_to_date
--}}
![Mobile Document Preview](nx_asset://642becf6-9504-4872-8ee5-f86c1942ff46 ?w=200,border=true)</b></td>
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
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Browse Grid
    name: mobile-browse-grid.png
    1.13#screenshot#up_to_date
--}}
![Mobile Browse Grid](nx_asset://4a958393-6ad3-44f7-8fd4-850a21c3f247 ?w=200,border=true)</b></td>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Browse Sort
    name: mobile-browse-sort.png
    1.13#screenshot#up_to_date
--}}
![Mobile Browse Sort](nx_asset://abdabea3-eb03-4eec-9e63-3fc93f4a8858 ?w=200,border=true)</b></td>
</tr>
</tbody>
</table>
</div>

{{#> callout type='tip' }}
Tapping a sort order twice switches between ascendant and descendant sort order{{/callout}}

### Search

The **Search** menu enables you to query documents on their title and content, by performing a full-text search. {{{multiexcerpt 'full-text-search-user-desc' space='nxdoc' page='quick-search'}}}A list of matching documents is provided and you can directly have access them. Once on a document, tap the back icon to go back to search results.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Search
    name: mobile-search.jpg
    1.13#screenshot#up_to_date
--}}
![Mobile Search](nx_asset://b7d7293e-78cf-456b-b6b8-75be16b5e660 ?w=200,border=true)

### Favorites

You are able to mark as favorite the list of documents you are interested in. "Add to" and "Remove from" favorites actions are available for all document types whether the document is folderish or not. Select the "..." action available on the toolbar. Favorite documents are available directly from the **Favorites** menu.

<div>
<table class="hover" style="border: 0px;">
<tbody>
<tr>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Favorites
    name: mobile-favorites.png
    1.13#screenshot#up_to_date
--}}
![Mobile Favorites](nx_asset://b7333bef-f753-407a-a2c9-a97f588083fe ?w=200,h=357,border=true)</b></td>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Add Favorite
    name: mobile-add-favorite.png
    1.13#screenshot#up_to_date
--}}
![Mobile Add Favorite](nx_asset://7636b6df-d9a2-4669-a59b-904cf58f7936 ?w=200,h=357,border=true)</b></td>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Remove Favorite
    name: mobile-remove-favorite.png
    1.13#screenshot#up_to_date
--}}
![Mobile Remove Favorite](nx_asset://1f709d2d-08c4-4dfd-b5b2-5479f6ff21f6 ?w=200,h=357,border=true)</b></td>
</tr>
</tbody>
</table>
</div>

### Recently Viewed

The **Recently Viewed** entry displays the last 20 documents viewed on your Nuxeo Mobile application. From this entry you can tap on a document to enter a workspace or display the document. Actions on documents are available by **sliding** to share, add to your favorites or add a document to a collections.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Recently Viewed
    name: mobile-recently-viewed.png
    1.13#screenshot#up_to_date
--}}
![Mobile Recently Viewed](nx_asset://220f2d30-3271-4e55-a59d-3c436c4ba838 ?w=200,h=357,border=true)


### Collections

The dedicated menu entry enables you to directly access collections: Shared and Personal. Personal collections have been created by yourself and Shared collections are collections where you have been granted at least read permissions.

Browsing your repository, you can add a document to one or several collections. Once you have selected the list of collections, you can view them and uncheck some.

<div>
<table class="hover" style="border: 0px;">
<tbody>
<tr>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Collections
    name: mobile-collections.png
    1.13#screenshot#up_to_date
--}}
![Mobile Collections](nx_asset://871e1b5f-210b-495a-a336-454874c2ae1d ?w=200,h=357,border=true)</b></td>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Collections JPG
    name: mobile-collections.jpg
    1.13#screenshot#up_to_date
--}}
![Mobile Collections JPG](nx_asset://5eb75da0-6859-4ac8-a8ec-9cc7e9965a60 ?w=200,h=357,border=true)</b></td>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Collections Added
    name: mobile-collections-added.png
    1.13#screenshot#up_to_date
--}}
![Mobile Collections Added](nx_asset://9a607995-e8b8-4f2d-9998-42bfb72551c1 ?w=200,h=357,border=true)</b></td>
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
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Capture Add Nuxeo
    name: mobile-capture-add-nuxeo.png
    1.13#screenshot#up_to_date
--}}
![Mobile Capture Add Nuxeo](nx_asset://f6e32747-3bb1-4f54-b26d-6846c1c5e718 ?w=200,border=true)</b></td>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Capture Share Photo
    name: mobile-capture-share-photo.png
    1.13#screenshot#up_to_date
--}}
![Mobile Capture Share Photo](nx_asset://8b7709e3-0870-4d15-99f4-302cc9e74594 ?w=200,border=true)</b></td>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Capture Share Photo Android
    name: mobile-capture-share-photo-android.png
    1.13#screenshot#up_to_date
--}}
![Mobile Capture Share Photo Android](nx_asset://e6b4ea7a-8d30-4e53-ba16-0492f8d9a098 ?w=200,border=true)</b></td>
</tr>
</tbody>
</table>
</div>

When capturing a document in Nuxeo, the user can select her personal space (set by default) or browse folders to select the destination.

<div>
<table class="hover" style="border: 0px;">
<tbody>
<tr>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Capture Folder Selection
    name: mobile-capture-folder-selection.png
    1.13#screenshot#up_to_date
--}}
![Mobile Capture Folder Selection](nx_asset://46a1c41e-cfc7-49c1-8ee4-a030828427dd ?w=200,border=true)</b></td>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Capture Folder Done
    name: mobile-capture-folder-done.png
    1.13#screenshot#up_to_date
--}}
![Mobile Capture Folder Done](nx_asset://43db26be-d997-4ca7-a4fe-c9190a919291 ?w=200,border=true)</b></td>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Capture Done
    name: mobile-capture-done.png
    1.13#screenshot#up_to_date
--}}
![Mobile Capture Done](nx_asset://4c77c6c8-26ed-4548-8c86-0797287d97e4 ?w=200,border=true)</b></td>
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
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Workflow Start Process
    name: mobile-workflows-start-process.png
    1.13#screenshot#up_to_date
--}}
![Mobile Workflow Start Process](nx_asset://a0bc8a70-0552-4945-8fc0-91bfcf14a053 ?w=200,border=true)</b></td>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Worfklow Task View
    name: mobile-workflows-task-view.png
    1.13#screenshot#up_to_date
--}}
![Mobile Worfklow Task View](nx_asset://aaa2c577-db14-43e7-a841-b56ccaa29f45 ?w=200,border=true)</b></td>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Workflow Approve Reject
    name: mobile-workflows-approve-reject.png
    1.13#screenshot#up_to_date
--}}
![Mobile Workflow Approve Reject](nx_asset://6d17fa9a-a39f-40c5-a8db-ce1d4f06d5b1 ?w=200,border=true)</b></td>
</tr>
</tbody>
</table>
</div>


### Share / Open in

You are able to **share** any document through messages, mail, Slack, Twitter, Facebook.... any available application on your phone for that purpose. The **Share** button is available on the toolbar of the document view, next to the filename.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Share Action
    name: mobile-share-action.png
    1.13#screenshot#up_to_date
--}}
![Mobile Share Action](nx_asset://08f0f3aa-975f-4f26-b66f-e62b480c8f72 ?w=200,h=350,border=true)

In addition, you are able to **Open directly** documents on your phone by downloading them first and then choose the action that you want. To do so click on the **Download** button below the thumbnail view.

<div>
<table class="hover" style="border: 0px;">
<tbody>
<tr>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Open in Download
    name: mobile-open-in-download.png
    1.13#screenshot#up_to_date
--}}
![Mobile Open in Download](nx_asset://424be51f-df49-47b7-8cb7-3a07b724929d ?w=200,h=350,border=true)</b></td>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Open Action
    name: mobile-open-action.png
    1.13#screenshot#up_to_date
--}}
![Mobile Open Action](nx_asset://85464e22-7504-4023-8401-bea12fc162fd ?w=200,h=350,border=true)</b></td>
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
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Offline Mode
    name: mobile-offline-mode.png
    1.13#screenshot#up_to_date
--}}
![Mobile Offline Mode](nx_asset://dc835e7a-6258-4c12-bc50-47e9322a3f27 ?w=200,h=350,border=true)</b></td>
<td colspan="1"><b>{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Mobile/Mobile Offline Mode Refresh
    name: mobile-offline-mode-refresh.png
    1.13#screenshot#up_to_date
--}}
![Mobile Offline Mode Refresh](nx_asset://f7e6a180-0273-42dc-b7ad-7e5551309feb ?w=200,h=350,border=true)</b></td>
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
