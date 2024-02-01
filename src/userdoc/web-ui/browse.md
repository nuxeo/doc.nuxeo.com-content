---
title: Browsing Content
review:
    comment: ''
    date: '2020-06-08'
    status: ok
description: null
toc: true
labels:
    - creation
    - drag-and-drop
tree_item_index: 100
---
{{! excerpt}}
In order to help you find the documents that you need, the Nuxeo Platform features several options to access, create and edit documents.
{{! /excerpt}}

{{#> callout type='info' heading='Hyland University'}}
Watch the related courses on Hyland University</br>
[Getting started with Nuxeo Web UI](https://university.hyland.com/courses/e4051)</br>
[Importing Documents in the Nuxeo Platform](https://university.hyland.com/courses/e4058)</br>
![]({{file name='university-webui.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

## Side Menu

The side menu offers two different tabs. Clicking on elements on the left will open a side panel (also called **Drawer**) with the content of the selected tab: browsing options are on the first left column, content to browse on the second and content to view on the main area.
This new pattern allows to start browsing without changing the context of work.
The side menu displays all the domain structure from the root. It enables you to easily access any space in the application structure.

## Dashboard

{{{multiexcerpt 'intro-dashboard' page='browsing-content'}}}

![]({{file space='nxdoc' page='web-ui-dashboard' name='DASHBOARD.png'}} ?w=600,border=true)

To access your dashboard, click on the icon on the top left hand corner of your platform.

## Previewing Documents
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Browse/Preview action
    name: preview-action-icon.png
    1.1.3#screenshot#up_to_date
--}}
![Preview action ](/nx_assets/c6960afb-7b44-4999-ae65-90c7f8908e18.png ?w=300,border=true)

To preview documents, click on the **Preview** icon {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Browse/Preview action icon
    name: preview-docactions.png
    1.1.3#icon#up_to_date
--}}
![Preview action icon](/nx_assets/c79aa9cd-3426-47ca-b751-b0e2e1aceb4b.png ?w=32).

A pop-up window will display a preview of your document.
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Browse/Preview pop up
    name: preview-pop-up.png
    1.1.3#popup#up_to_date
--}}
![Preview pop up ](/nx_assets/c21209c4-60ff-4204-b3d1-fb57e242dbf6.png ?w=300,border=true)

All type of documents can be previewed: Audio, PDF, Office, Video, 3D, etc.

## Browsing Lists of Documents

Users can change the way content is presented in the folderish repositories (workspaces, folders, sections) and search results. They can also change the displayed information.

### Changing View Mode

Two views of the content lists are available on the top right corner of your workspace.

- Table View ![]({{file name='table-view-web-ui.png' page='icons-index'}} ?w=20) (default view): This view displays the title of the documents with a small icon (that depends on the type of document or main attachment type) and a set of metadata in a table.

- Grid View ![]({{file name='grid-view-web-ui.png' page='icons-index'}} ?w=20): This view displays a thumbnail of documents. For folders, the thumbnail of the first item in the folder is displayed.

### Changing Displayed Information

Lists of documents, whether in grid view or thumbnail view, show some information about the documents, like their title, the last contributor, their type, their lifecycle state, etc. Users can change the information displayed, i.e. the columns for the list view or the information below the document thumbnail in thumbnail view.

To change the information displayed in content views, click on the icon&nbsp;![]({{file name='manage_collection_web-ui.png' page='icons-index'}} ?w=20).
A pop-up is displayed, select the information that you want to be displayed among the list.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Browse/Columns Settings on Web UI
    name: columns-settings-web-ui.png
    1.1.3#popup#up_to_date
--}}
![Columns Settings on Web UI](/nx_assets/2b0af330-d3f1-492f-96a2-0f31d582961e.png ?w=250,border=true)

Once it's done click on **Close**.

{{#> callout type='info'}}
The displayed information can also be changed from the [Search view]({{page version='' space='userdoc' page='search'}}).
{{/callout}}

All information displayed on content views, except document titles, can be filtered at the top of every column.

Once in the view of a document, the side details bar can be collapsed by clicking ![]({{file name='details-collapsible-sidebar.png'}} ?w=20) at the top of the sidebar.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Browse/Document View with sidebar
    name: view-sidebar.png
    1.1.3#screenshot#to_be_updated
--}}
![Document View with sidebar](/nx_assets/5284dbcb-db38-4466-accc-ddaa05c3e29a.png ?w=600,border=true)

It enables you to have a more focused view on the document preview.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Browse/Document view collapsed sidebar
    name: without-sidebar.png
    1.1.3#screenshot#to_be_updated
--}}
![Document view collapsed sidebar](/nx_assets/2df976a7-5f45-4899-86d1-a814b4d88ab9.png ?w=600,border=true)

#### Flags

Adding the **Flags** column will display if the document is under [Retention, Legal Hold, Cold storage]({{page version='' space='nxdoc' page='nuxeo-retention-functional-overview'}}#visualising-retentionlegal-hold-status), or if it's a Favorite.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/Flags favorites
    name: flags_fav.png
    web_ui#screenshot#up_to_date
--}}
![Flags favorites](/nx_assets/8badf40a-13e6-4a86-a3c4-0afa58103fcd.png ?w=650,border=true)

## Keyboard Shortcuts

Some actions or features are accessible using keyboard shortcuts:
- c: Create
- d: Dashboard
- s: Search
- shift + /: Search

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related pages'}}
- [Favorites]({{page page='favorites' space='userdoc'}})
- [Collections]({{page page='collections-web-ui' space='userdoc'}})
{{/panel}}
</div>

<div class="column medium-6">
</div>
</div>
