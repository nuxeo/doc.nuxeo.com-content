---
title: Web UI User Documentation
review:
    comment: ''
    date: '2018-10-16'
    status: ok
toc: true
description: Web UI User Documentation
tree_item_index: 100
labels:
---

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related course on Nuxeo University:</br>
[Getting Started with Nuxeo Web UI](https://university.nuxeo.com/learn/public/course/view/elearning/92/getting-started-with-nuxeo-web-ui).
![]({{file name='university-webui.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

{{! multiexcerpt name='webui-functional-overview'}}

Nuxeo Web UI is a responsive application with three main layout regions:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Functional Overview.1544549838807/Functional Overview
    name: functional-overview.png
    1.1.3#screenshot#up_to_date
--}}
![Functional Overview](nx_asset://be681297-17de-47f5-88f2-6520e3ee3021 ?w=650,border=true)

1. [The header toolbar](#header-toolbar-functional-overview)
2. [The side menu](#side-menu-functional-overview)
3. [The main view](#main-view-functional-overview)

## {{> anchor 'header-toolbar-functional-overview'}} Header Toolbar

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Functional Overview.1544549838807/Functional overview header
    name: functional-overview-header.png
    1.1.3#screenshot#up_to_date
--}}
![Functional overview header](nx_asset://eb1727bb-f8d1-47d9-a4e5-a8c12d395afb ?w=650,border=true)

1.  **Domain**: The title of the selected page / document.
2.  **Sub-Views**: The sub-views available.
3.  **Quick search**: Search by keywords or users.

## {{> anchor 'side-menu-functional-overview'}} Side Menu

The menu displays different tabs. Clicking on one of them will open a side panel with the content of the tab selected: browsing options are on the first left column, content to browse on the second and content to view on the main area. We will see the description of the main area on the last part of this section.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Functional Overview.1544549838807/Functional overview side menu
    name: functional-overview-sidemenu.png
    1.1.3#screenshot#up_to_date
--}}
![Functional overview side menu](nx_asset://f5164570-ca46-481c-9066-6d9069678892 ?w=650,border=true)

This new pattern allows to start browsing without changing the context of work.

<div class="table-scroll"><table class="hover"><tbody><tr><td colspan="1">{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/Dashboard Home
    name: dashboard_home.png
    1.1.3#screenshot#up_to_date
--}}
![Dashboard Home](nx_asset://6945051c-0de3-4235-8af9-792f84a10a03 ?w=100,border=true)</td><td colspan="1"></br>
**Dashboard:** Displays the dashboard

</td>
</tr>
<tr><td colspan="1">{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/Browse Side Menu
    name: browse.png
    1.1.3#screenshot#up_to_date
--}}
![Browse Side Menu](nx_asset://d2ffbd05-411b-43d8-8ca5-a1304c985319 ?w=100,border=true)</td>
<td colspan="1"></br>

**Browse:** Shows the navigation tree to let you browse your content

</td>
</tr>
<tr>
<td colspan="1">{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/Recently Viewed Side Menu
    name: recently_viewed.png
    1.1.3#screenshot#up_to_date
--}}
![Recently Viewed Side Menu](nx_asset://4e851002-00cf-4cea-bfde-f1ca1a44025f ?w=100,border=true)</td>
<td colspan="1"></br>

**Recently Viewed:** Shows the 10 last documents viewed

</td>
</tr>
<tr>
<td colspan="1">
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/Searches Side Menu
    name: searches.png
    1.1.3#screenshot#up_to_date
--}}
![Searches Side Menu](nx_asset://017b892a-12b9-4ab3-98eb-7b4da8db8d47 ?w=100,border=true)
</td>
<td colspan="1"></br>

**Search Filters:** Search content using full text and metadata

</td>
</tr>
<tr>
<td colspan="1">
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/Expired Side Menu
    name: expired.png
    1.1.3#screenshot#up_to_date
--}}
![Expired Side Menu](nx_asset://ff15f0b2-5dc1-443c-8129-c698092fe987 ?w=100,border=true)
</td>
<td colspan="1"></br>

**Expired Queue:** Queue displaying expired documents

</td></tr><tr><td colspan="1">{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/Assets Side Menu
    name: assets.png
    1.1.3#screenshot#up_to_date
--}}
![Assets Side Menu](nx_asset://af27a311-732a-43fc-8acc-255cb3122e08 ?w=100,border=true)
</td>
<td colspan="1"></br>

**Assets:**  Search multimedia files (pictures, audio and video). Requires DAM add-on installation.

</td>
</tr>
<tr>
<td colspan="1">
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/Tasks Searches Side Menu
    name: tasks.png
    1.1.3#screenshot#up_to_date
--}}
![Tasks Searches Side Menu ](nx_asset://72e22374-dcd7-4fef-9587-69d331fe0515 ?w=100,border=true)
</td>
<td colspan="1"></br>

**Tasks:** Shows the list of pending workflow tasks

</td>
</tr>
<tr>
<td colspan="1">
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/Favorites Side Menu
    name: favorites.png
    1.1.3#screenshot#up_to_date
--}}
![Favorites Side Menu](nx_asset://dae49b7f-0415-4517-8193-20c24bbc2494 ?w=100,border=true)
</td>
<td colspan="1"></br>

**Favorites:** The list of documents added to Favorites

</td>
</tr>
<tr>
<td colspan="1">
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/Collections Side Menu
    name: collections.png
    1.1.3#screenshot#up_to_date
--}}
![Collections Side Menu](nx_asset://2170d4f0-fea2-4891-b15e-94ae22df2773 ?w=100,border=true)
</td>
<td colspan="1"></br>

**Collections:** The list of collections you can access

</td>
</tr>
<tr>
<td colspan="1">
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/Personal Space Side Menu
    name: personal_space.png
    1.1.3#screenshot#up_to_date
--}}
![Personal Space Side Menu](nx_asset://b8e216fa-da23-4c6c-bb91-2277eb2dd4cd ?w=100,border=true)
</td>
<td colspan="1"></br>

**Personal Space:** Access to your personal workspace, which is the default location for your Favorites and Collections folders

</td>
</tr>
<tr>
<td colspan="1">
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/Clipboard Side Menu
    name: clipboard.png
    1.1.3#screenshot#up_to_date
--}}
![Clipboard Side Menu](nx_asset://c2cd829c-35e8-4391-aae2-9f47bcc2a41d ?w=100,border=true)
</td>
<td colspan="1"></br>

**Clipboard:** Clipboard to copy and move documents

</td>
</tr>
<tr><td colspan="1">{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/Trash Search Side Menu
    name: trash-side-menu.png
    1.1.3#screenshot#up_to_date
--}}
![Trash Search Side Menu](nx_asset://a43671a8-e0ab-45da-be51-a914359ae971 ?w=100,border=true)</td><td colspan="1"></br>

**Trash:** Search deleted documents using full text and metadata

</td>
</tr>
<tr><td colspan="1">{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/Administration Side Menu
    name: administration.png
    1.1.3#screenshot#up_to_date
--}}
![Administration Side Menu](nx_asset://00a08f4c-f5d5-4244-acfb-827b621fb539 ?w=100,border=true)</td><td colspan="1"></br>

**Administration:** Displays the **Administration** tab when the user is an administrator

</td>
</tr>
<tr>
<td colspan="1">
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/User Settings Side Menu
    name: user_menu.png
    1.1.3#screenshot#up_to_date
--}}
![User Settings Side Menu](nx_asset://d5ccc84d-6e91-4b42-9c97-62abc4f3d961 ?w=100,border=true)
</td>
<td colspan="1"></br>

**User Settings:** Displays a **Themes** tab to manage branding and possibly other tabs depending on Nuxeo addons installed. For instance when Nuxeo Drive is installed a **Drive** tab is available to manage the user's synchronization roots.

</td>
</tr>
</tbody>
</table>
</div>

## {{> anchor 'main-view-functional-overview'}} Main View

The main view displayed depends on what has been selected on the side menu. The main view will usually show lists of documents or a document and its details.
Lists of documents are presented in a table that proposes different functionalities like infinite scroll instead of pagination, faceted filters in the header, easy columns selection with persistence of the user's choice and a great visibility of selected elements.

At the top of the main view toolbars are displayed according to the content being displayed:

**Document Actions**: Displays actions available for the current document

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Functional Overview.1544549838807/Document Toolbar
    name: document_toolbar.png
    1.1.3#screenshot#up_to_date
--}}
![Document Toolbar](nx_asset://161bd276-c70c-4397-85aa-febbe96686e6 ?w=650)

**Results Actions**: Displays actions available for the current result listing

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Functional Overview.1544549838807/Results toolbar
    name: results_toolbar.png
    1.1.3#screenshot#up_to_date
--}}
![Results toolbar](nx_asset://02e544ea-2d35-4f42-ac74-1bdbb3ad616e ?w=77)

A create button {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/Create Button
    name: create_button.png
    1.1.3#screenshot#up_to_date
--}}
![Create Button](nx_asset://2b093e23-6ed6-4228-943b-9b4655df9273 ?w=20) is also permanently displayed at the bottom right corner of the main view the to let you create or import documents from anywhere in the application.
{{! /multiexcerpt}}
