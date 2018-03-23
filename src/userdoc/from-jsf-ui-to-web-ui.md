---
title: From JSF UI to Web UI
review:
    comment: ''
    date: '2018-02-27'
    status: ok
toc: true
description: This documentation page will help you to migrate from JSF UI to Web UI
tree_item_index: 50
labels:
    - lts2017-ok
---
## Create

{{! table-filter removed }}
<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th width="250" colspan="1">JSF UI</th>
<th width="250" colspan="1">Web UI</th>
</tr>
<tr>
<td colspan="1" style="background-color:white; border-top:1px solid grey;">
Create a document using the **New** button to select the type of document you want to create among all Nuxeo Platform's document types.

![]({{file name='available-documents-workspace.png' page='userdoc/creating-content'}} ?w=400,border=true)

{{! multiexcerpt name='create-document'}}
1. Click on the **New** button and click on the desired document on the pop-up.</br>
2. Fill in the document's creation form and click on the **Create** button.
{{! /multiexcerpt}}
</br>
</br>
The **Summary** tab of the document is displayed.
</td>
<td colspan="1" style="background-color:white; border-top:1px solid grey;">
Creating a document using the button ![]({{file name='create_button.png' space='nxdoc' page='web-ui-overview'}} ?w=20) enables you to select the type of document you want to create among all Nuxeo Platform's document types.
![]({{file name='creation-popup-web-ui.png' page='userdoc/browse'}} ?w=400,border=true)
To create a document using the **Create** button:</br>
1. Click on the button ![]({{file name='create_button.png' space='nxdoc' page='web-ui-overview'}} ?w=20) and click on the desired document.</br>
2. Fill in the document's creation form and click on the **Create** button.
</br>
</br>
The View tab of the document is displayed.
</td>
</tbody>
</table>
</div>

## Preview


<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th width="250" colspan="1">JSF UI</th>
<th width="250" colspan="1">Web UI</th>
</tr>
<tr>
<td colspan="1" style="background-color:white; border-top:1px solid grey;"> CONTENT </td>

<td colspan="1" style="background-color:white; border-top:1px solid grey;"> CONTENT </td>
</td>
</tbody>
</table>
</div>

## Browse

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th width="250" colspan="1">JSF UI</th>
<th width="250" colspan="1">Web UI</th>
</tr>
<tr>
<td colspan="1" style="background-color:white; border-top:1px solid grey;">
**Navigation Tree**: The default navigation tree displayed on the left hand side of the pages is the folders navigation tree. It displays all the domain structure from the root. It enables you to easily access any space in the application structure.
![]({{file name='navigation_tree.png' page='userdoc/browsing-content'}} ?w=350,border=true)
</br>
**Dashboard**: Every user has a personal dashboard that displays information he finds relevant and help him have a global view of the application's activity. To access your dashboard, click on the Home main tab. Your dashboard is the default tab of your Home.
![]({{file name='CAP-dashboard.png' page='userdoc/browsing-content'}} ?w=600,border=true)
</br>
**View Mode**: Thumbnail / list
</td>

<td colspan="1" style="background-color:white; border-top:1px solid grey;">
**Side Menu**: The side menu offers two different tabs. Clicking on elements on the left will open a side panel (also called Drawer) with the content of the tab selected: browsing options are on the first left column, content to browse on the second and content to view on the main area. This new pattern allows to start browsing without changing the context of work. The side menu displays all the domain structure from the root.
![]({{file name='web_ui_with_side_panel.png' page='nxdoc/web-ui-overview'}} ?w=400,border=true)
</br>
**Dashboard**: To access your dashboard, click on the icon on the top left hand corner of your platform. It displays a set of boxes, for example, all the workspaces the user can access, the last documents he modified, the last documents that have been published, the pending tasks, etc.
![]({{file version='' space='nxdoc' page='web-ui-dashboard' name='DASHBOARD.png'}} ?w=400,border=true)
</td>
</td>
</tbody>
</table>
</div>


## Search

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th width="250" colspan="1">JSF UI</th>
<th width="250" colspan="1">Web UI</th>
</tr>
<tr>
<td colspan="1" style="background-color:white; border-top:1px solid grey;">
**Default Search**: The Search can be accessed at the top in the three main spaces, select the **Search** tab and it will enable you to search on keywords, metadata and additional criteria such as the location in the application.</br>
![]({{file name='search_content_view.png' page='nxdoc/how-to-configure-a-search-filter-with-facets-and-other-aggregates'}} ?w=400,border=true)
**Quick Search**: The quick search can be accessed from any page. At any time, you can search a document by typing keywords in the search box located at the upper right corner of the page.</br>
![]({{file name='search-box.png' page='userdoc/quick-search'}} ?w=314,h=42,border=true)
</td>
<td colspan="1" style="background-color:white; border-top:1px solid grey;">
**Search Tab**: The Search tab can be accessed from the side menu and enables you to search a document using documents metadata You can for instance select metadata of the searched document or the date of specific events such as publication, creation.</br>
![]({{file name='search-tab-web-ui.png' page='userdoc/search'}} ?w=400,border=true)
**Quick search**: As in JSF UI, the quick search can be accessed from any page. At any time, you can search a document by typing keywords in the search box located at the upper right corner of the page. The keywords will be highlighted in your query results.
![]({{file name='quick-search-web-ui.png' page='userdoc/search'}} ?w=400,border=true)
</td>
</td>
</tbody>
</table>
</div>


## Workflow

{{! table-filter removed }}
<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th width="250" colspan="1">JSF UI</th>
<th width="250" colspan="1">Web UI</th>
</tr>
<tr>
<td colspan="1" style="background-color:white; border-top:1px solid grey;"> Two workflows are available by default on the Nuxeo Platform, the [**serial workflow** and the **parallel workflow**]({{page }}). </td>

<td colspan="1" style="background-color:white; border-top:1px solid grey;"> CONTENT </td>
</td>
</tbody>
</table>
</div>

## Download

{{! table-filter removed }}
<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th width="250" colspan="1">JSF UI</th>
<th width="250" colspan="1">Web UI</th>
</tr>
<tr>
<td colspan="1" style="background-color:white; border-top:1px solid grey;">Users can download documents on their computer. It is possible to download:</br>
- One document at a time</br>
- A selection of document</br>
- An entire workspace, folder, section
</br>
The **Export button** is available at the top right-hand corner of the page, by clicking the icon ![]({{file name='export.png' page='icons-index'}}) in the **More** menu

</br>

&nbsp;

**From a Document**</br>
3 exports are available:</br>
- The **PDF export**</br>
- The **ZIP XML Export**</br>
- The **XML export**

</br>

&nbsp;

**From a Folder**</br>
You can export via an **XML export** or a **ZIP Tree XML export**

<td colspan="1" style="background-color:white; border-top:1px solid grey;"> As in JSF UI, users can download a single document or a selection of documents:</br>
**From a Document**</br>
- Go to the document you want to download</br>
- Click on the Download button ![]({{file name='download-document-web-ui.png' page='icons-index'}} ?w=25) under the preview of your document.</br>
  Your document is downloaded on your computer.
</br>
**From a Folder**</br>
- Go to the folder/workspace that you want</br>
- Select several documents</br>
  A top bar is displayed with document actions</br>
- Click on the download button ![]({{file name='download-multiple-documents-web-ui.png' page='icons-index'}} ?w=22)</br>
  The documents are downloaded as a .zip on your computer. </td>
</td>
</tbody>
</table>
</div>
