---
title: From JSF UI to Web UI
review:
    comment: ''
    date: '2020-06-08'
    status: ok
description: This documentation page will help you to migrate from JSF UI to Web UI
tree_item_index: 50
labels:
    - lts2017-ok
    - migration
    - web-ui
    - jsf-ui
---
## Create

{{! table-filter removed }}
<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th width="250" colspan="1" style="background-color:#ebebeb">JSF UI</th>
<th width="250" colspan="1" style="background-color:#ebebeb">Web UI</th>
</tr>
<tr>
<td colspan="1" style="background-color:white">
Create a document using the **New** button to select the type of document you want to create among all Nuxeo Platform's document types.

![]({{file name='create-button-jsf-ui.png'}} ?w=400,border=true)

{{! multiexcerpt name='create-document'}}
1. Click on the **New** button and click on the desired document on the pop-up.</br>
![]({{file name='available-documents-workspace.png' space='nxdoc' page='creating-content'}} ?w=400,border=true)
2. Fill in the document's creation form and click on the **Create** button.
{{! /multiexcerpt}}
</br>
</br>
The **Summary** tab of the document is displayed.
</br>
</br>
[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;**More info**]({{page page='creating-content'}})

</td>
<td colspan="1" style="background-color:white">
On Web UI, the Create button ![]({{file name='create_button.png' space='nxdoc' page='web-ui-overview'}} ?w=20) is available **from any page** in the bottom right corner of the page.
![]({{file name='content-view-create-web-ui.png'}} ?w=400,border=true)
It enables you to select the type of document you want to create among all Nuxeo Platform's document types.
![]({{file name='creation-popup-web-ui.png' page='content-create'}} ?w=400,border=true)
To create a document using the **Create** button:</br>
1. Click on the button ![]({{file name='create_button.png' space='nxdoc' page='web-ui-overview'}} ?w=20) and click on the desired document.</br>
2. Depending on the location specified, the document types available will change.</br>
3. Fill in the document's creation form and click on the **Create** button.
</br>
</br>
The View tab of the document is displayed.
</br>
</br>
[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;**More info**]({{page page='content-create'}})
</td>
</tbody>
</table>
</div>

## Preview

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th width="250" colspan="1" style="background-color:#ebebeb">JSF UI</th>
<th width="250" colspan="1" style="background-color:#ebebeb">Web UI</th>
</tr>
<tr>
<td colspan="1" style="background-color:white">
For all previewable documents, a **Preview** button (![]({{file name='preview.png' space='userdoc' page='icons-index'}}) icon) is available on the Document Actions section area (top right on the Web UI document view).</br>
For office and PDF documents: </br>
Click on the ![]({{file name='preview.png' space='userdoc' page='icons-index'}}) icon in the document view.
</br>
The preview opens in a popup window.</br>
On the JSF UI, you can find this on the **Summary** tab of a document, clicking on **More** > **Preview**.</br>
The document preview is displayed in a popup window.</br>
![]({{file name='preview_popup.png' space='nxdoc' page='preview'}} ?w=350,border=true)
On the JSF UI, you can also preview a document along with its main metadata on the [Info-View pop-up]({{page space='nxdoc' page='how-to-customize-the-info-view-pop-up'}}), accessible from any thumbnail listing.
</br>
</br>
[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;**More info**]({{page page='/userdoc/preview'}})
</td>
<td colspan="1" style="background-color:white">
On Web UI, all type of documents can be previewed: Audio, PDF, Office, Video, 3D, etc.</br>
A **preview button** is available at the top right-and corner of each document and below the document itself.</br>
When you click on it, a popup is displayed previewing your document.</br>
![]({{file name='preview-button-web-ui.png'}} ?w=450,border=true)
</br>
[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;**More info**]({{page version='' space='nxdoc' page='preview'}})
</td>
</td>
</tbody>
</table>
</div>

## Browse

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th width="250" colspan="1" style="background-color:#ebebeb">JSF UI</th>
<th width="250" colspan="1" style="background-color:#ebebeb">Web UI</th>
</tr>
<tr>
<td colspan="1" style="background-color:white">
**Navigation Tree**: The default navigation tree displayed on the left hand side of the pages is the folders navigation tree. It displays all the domain structure from the root. It enables you to easily access any space in the application structure.
![]({{file name='navigation_tree.png' space='nxdoc' page='browsing-content'}} ?w=350,border=true)
</br>
**Dashboard**: Every user has a personal dashboard that displays information he finds relevant and help him have a global view of the application's activity. To access your dashboard, click on the Home main tab. Your dashboard is the default tab of your Home.
![]({{file name='CAP-dashboard.png' space='nxdoc' page='browsing-content'}} ?w=600,border=true)
</br>
</br>
[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;**More info**]({{page page='browsing-content'}}#dashboard)
</td>

<td colspan="1" style="background-color:white">
**Side Menu**: The side menu offers two different tabs.</br>
Clicking on elements on the left will open a side panel (also called Drawer) with the content of the tab selected: browsing options are on the first left column, content to browse on the second and content to view on the main area. This new pattern allows to start browsing without changing the context of work. The side menu displays all the domain structure from the root.
![]({{file name='web_ui_with_side_panel.png' page='nxdoc/web-ui-overview'}} ?w=400,border=true)
</br>
**Dashboard**: To access your dashboard, click on the icon on the top left hand corner of your platform. It displays a set of boxes, for example, all the workspaces the user can access, the last documents he modified, the last documents that have been published, the pending tasks, etc.
![]({{file version='' space='nxdoc' page='web-ui-dashboard' name='DASHBOARD.png'}} ?w=400,border=true)
</br>
</br>
[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;**More info**]({{page page='browse'}}#dashboard)
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
<th width="250" colspan="1" style="background-color:#ebebeb">JSF UI</th>
<th width="250" colspan="1" style="background-color:#ebebeb">Web UI</th>
</tr>
<tr>
<td colspan="1" style="background-color:white">
**Default Search**: The Search can be accessed at the top in the three main spaces, select the **Search** tab and it will enable you to search on keywords, metadata and additional criteria such as the location in the application.</br>
![]({{file name='search_content_view.png' page='nxdoc/how-to-configure-a-search-filter-with-facets-and-other-aggregates'}} ?w=400,border=true)
**Quick Search**: The quick search can be accessed from any page. At any time, you can search a document by typing keywords in the search box located at the upper right corner of the page.</br>
![]({{file name='search-box.png' space='nxdoc' page='quick-search'}} ?w=314,h=42,border=true)
</br>
</br>
[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;**More info**]({{page page='searching-the-nuxeo-platform'}})
</td>
<td colspan="1" style="background-color:white">
**Search Tab**: The Search tab can be accessed from the side menu and enables you to search a document using documents metadata You can for instance select metadata of the searched document or the date of specific events such as publication, creation.</br>
![]({{file name='search-tab-web-ui.png' page='search'}} ?w=400,border=true)
**Quick search**: As in JSF UI, the quick search can be accessed from any page. At any time, you can search a document by typing keywords in the search box located at the upper right corner of the page. The keywords will be highlighted in your query results.
![]({{file name='quick-search-web-ui.png' page='search'}} ?w=400,border=true)
</br>
</br>
[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;**More info**]({{page page='search'}})
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
<th width="250" colspan="1" style="background-color:#ebebeb">JSF UI</th>
<th width="250" colspan="1" style="background-color:#ebebeb">Web UI</th>
</tr>
<tr>
<td colspan="1" style="background-color:white"> Two workflows are available by default on the Nuxeo Platform, the [**serial workflow**]({{page page='serial-document-workflow'}}) and the [**parallel workflow**]({{page page='parallel-document-workflow'}}).
</br>
</br>
You can start them from any document where you have at least Edit or Manage Everything rights. Go on the document that you want, select the workflow needed and click on **Start**.</br>
</br>
A workflow tab is now available on the document, where you will have to select the participants to the review that will have to accept of reject the document.</br>
</br>
If the task is assigned to you, different options are available. You can accept or reject the document but you can also, delegate or reassign the task to another coworker.
![]({{file version='' space='nxdoc' page='serial-document-workflow' name='workflow-choose-reviewers-task-workflow-tab.png'}} ?w=250,border=true)
</br>
</br>
[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;**More info**]({{page page='content-create'}})
</td>
<td colspan="1" style="background-color:white">
The [**serial workflow**]({{page version='' space='userdoc' page='task'}}) and the [**parallel workflow**]({{page version='' space='userdoc' page='task'}}) are also available by default on Web UI. Users who are involved in workflows are alerted by email and can have a synthetic view of all their pending tasks on documents in their dashboard or on the Task tab. The documents they have to review are listed there.</br>
Go on the document that you want to review and click on ![]({{file name='workflow_web-ui.png' page='icons-index'}}).
</br>
</br>
A process button is now displayed on the document.
![]({{file version='' space='userdoc' page='task' name='process-serial-review-web-ui.png'}} ?w=450,border=true)
You now need to select the participants to the review and follow the resolution of the task.
![]({{file version='' space='userdoc' page='task' name='participants-review-web-ui.png'}} ?w=300,border=true)
If a task has been assigned to you, the pending task will be available in the **Tasks** gadget and in the **Task** tab.
![]({{file version='' space='userdoc' page='task' name='task-menu-web-ui.png'}} ?w=200,border=true)
</br>
[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;**More info**]({{page page='content-create'}})
</td>
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
<th width="250" colspan="1" style="background-color:#ebebeb">JSF UI</th>
<th width="250" colspan="1" style="background-color:#ebebeb">Web UI</th>
</tr>
<tr>
<td colspan="1" style="background-color:white">Users can download documents on their computer. It is possible to download:</br>
- One document at a time</br>
- A selection of document</br>
- An entire workspace, folder, section
</br>
The **Export button** is available at the top right-hand corner of the page, by clicking the icon ![]({{file name='export.png' page='icons-index'}}) in the **More** menu.
</br>
</br>
**From a Document**</br>
3 exports are available:</br>
- The **PDF export**</br>
- The **ZIP XML Export**</br>
- The **XML export**
</br>
</br>
**From a Folder**</br>
You can export via an **XML export** or a **ZIP Tree XML export**.
</br>
</br>
[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;**More info**]({{page page='exporting-documents'}})
</td>
<td colspan="1" style="background-color:white"> As in JSF UI, users can download a single document or a selection of documents on Web UI:
</br>
</br>
**From a Document**</br>
- Go to the document you want to download</br>
- Click on the Download button ![]({{file name='download-document-web-ui.png' page='icons-index'}} ?w=25) under the preview of your document.</br>
  Your document is downloaded on your computer.
</br>
</br>
**From a Folder**</br>
- Go to the folder/workspace that you want</br>
- Select several documents</br>
  A top bar is displayed with document actions</br>
- Click on the download button ![]({{file name='download-multiple-documents-web-ui.png' page='icons-index'}} ?w=22)</br>
  The documents are downloaded as a .zip on your computer.

![]({{file name='download-button-web-ui.png'}} ?w=350,border=true)
</br>
[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;**More info**]({{page page='share'}})
</td>
</td>
</tbody>
</table>
</div>
