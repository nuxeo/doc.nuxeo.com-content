---
title: JSF UI
review:
    comment: ''
    date: '2017-01-04'
    status: ok
labels:
    - concepts
    - home
    - search
toc: true
description: JSF UI User Documentation
---
{{! multiexcerpt name='functional-overview'}}

Nuxeo Platform JSF UI is the Back office view on the content repository. There are three main spaces in Nuxeo Platform:

*   The **Home** tab provides a set of dashboards
*   The **Browse** tab enables to navigate in the repository
*   The **Search** tab enables to query the repository

The Nuxeo Platform gives you all the necessary tools to let&nbsp;you customize what is displayed on your platform.&nbsp;

### Browse

This is where the majority of user's activity within the Nuxeo Platform will occur since it's where users can work on documents and browse the application domains, workspace, sections, etc.

#### Content Hierarchy&nbsp;

You can create different types of documents to be able to display the content hierarchy that you need in your application. By default you can create workspaces, folders, collections, templates, etc., but you can also&nbsp;[create your own document types]({{page space='nxdoc' page='how-to-define-a-document-type'}}).&nbsp;

The default navigation tree displayed on the left hand side of the pages is the folders navigation tree. It displays all the domain structure from the root. It enables you to easily access any space in the application structure.&nbsp;The navigation tree displays folderish documents, i.e. documents in which you can create other documents (workspaces, folders, etc.).

{{#> callout type='tip' }}

It is possible to add another type of navigation tree based on metadata instead of folder structure by installing the [Nuxeo Virtual Navigation add-on]({{page space='nxdoc' page='nuxeo-virtual-navigation'}}).

{{/callout}}

#### Breadcrumb

Breadcrumb enables you to navigate in the platform.&nbsp;For example, you can go up one level in the platform structure, by clicking on the&nbsp;![]({{file name='UpFolder_icon.gif' page='icons-index'}})&nbsp;icon&nbsp;in the breadcrumbs.&nbsp;Users can also click on the workspace's title in the breadcrumbs directly or in the navigation tree. They can go up several levels in the document's path in a single click that way.

![]({{file name='breadcrumbs.png' page='browsing-content'}} ?w=376,h=36,border=true)

{{#> callout type='info' }}

Due to [technical reasons]({{page space='NXDOC' page='Back and+Next+Buttons+Paradigm+and+JSF+in+the+Nuxeo+Platform'}}), it is recommended to NOT use the browser's Back and Next buttons to navigate in the Platform.&nbsp;

{{/callout}}

#### Tabs

A tab in the Nuxeo Platform is a view displayed on a document, controlled by a filter. Different tabs are displayed on each document type created in the content hierarchy, the basic ones are:

*   **Summary**: this view lets you see the metadata of your document, start a workflow or more specific metadata like for pictures document.&nbsp;
*   **Edit**: from this tab you can edit the metadata and the content of your document.&nbsp;
*   **Files**: you can add additional files from this tab.&nbsp;
*   **Publish**: this view lets you publish your document in another section of your platform.
*   **Relations**: this tab lets you manage the relations around the document.&nbsp;
*   **History**: this tab lets you see the event log of the document concerned.

On a same document users with different profiles will have access to different tabs. And so they will be presented different forms and buttons that correspond to their profile. Typically users with Read permission are not displayed the Edit tab.

### Dashboards

Every user has a set of personal dashboards from the **Home** tab that display the information he finds relevant and helps him have a global view of the application's activity.

The default tab of your Home is the Dashboard. It is composed of a set of boxes that display either a list of documents matching a criteria (all the workspaces the user can access, the last documents he modified, the last documents that have been published...), or possibly a piece of information either from the Platform or from external websites.
![]({{file name='CAP-dashboard.png' page='browsing-content'}} ?w=650,border=true)

{{#> callout type='tip' }}

If you want to customize your dashboard, follow this [how-to]({{page space='nxdoc' page='how-to-customize-the-dashboard'}}).

{{/callout}}

Other main user-centric information available from the **Home** is:

*   **Profile**: Enables the user to edit his personal information and his password
    ![]({{file name='user_profile.png'}} ?w=600,border=true)
*   **Workflow**: Displays the tasks assigned to the user
    ![]({{file name='home-workflow-tab.png'}} ?w=650,border=true)
*   **[Preferences]({{page page='user-preferences'}})** : Enables to select the language of the platform interface
    ![]({{file name='users-preferences.png'}} ?w=650,border=true)
*   **Alerts**: Shows the list of email notifications the user subscribed to
    ![]({{file name='Home-Alerts-tab.png' page='collaborative-features'}} ?w=650,border=true)
*   **Users & Groups**: Enables the user to browse the users and groups directory
    ![]({{file name='user_home_directories.png'}} ?w=650,border=true)
*   **Searches**: Provides access to the user's saved searches
    ![]({{file name='home-searches-tab.png' page='saved-searches'}} ?w=650,border=true)
*   **Authorized Applications**: Lists the external applications that can access Nuxeo data. See [Nuxeo Media Publishing]({{page space='nxdoc' page='nuxeo-media-publishing'}}) for instance.
*   **Collections**: Lists the [collections]({{page page='collections'}}) the user can access
    ![]({{file name='collection-home-tab.png' page='collections'}} ?w=650,border=true)

### Search

#### Available Filters

{{{multiexcerpt 'nuxeo-search' page='USERDOC:Searching the Nuxeo Platform'}}}

#### Facets

The default search filter provides a faceted search, leveraging the [Elasticsearch aggregates]({{page space='nxdoc' page='how-to-configure-a-search-filter-with-facets-and-other-aggregates'}}). You can search for documents from their metadata and other properties and search results are filtered as you add or remove criteria. Aggregate fields values are also filtered so as to display only relevant values and show the count of matching documents for each value.

#### Result Layout

Users can change the way content is presented in the result layout. They can also change the displayed information. At the top right and corner of the results pages, you have different options to display your content list.&nbsp;

*   **Thumbnail view**![]({{file name='DM-icon-view-icon.png' page='icons-index'}})&nbsp;: this view displays a thumbnail of documents. For folders, the thumbnail of the first item in the folder is displayed.
*   **Edit Result Columns**![]({{file name='edit_columns.png' space='userdoc60' page='icons-index'}}): this button lets you&nbsp;change the information displayed in content lists.&nbsp;The right column shows selected information and the left column shows information that are currently not displayed. You can move information from one column to another using the horizontal arrows and&nbsp;reorder columns using the vertical arrows.&nbsp;

    {{#> callout type='info' }}

    Editing results column is possible from search results and the Content tab of folderish documents. It is not possible from the tag cloud.

    {{/callout}}

When you create new search forms, you can adapt the result layout to your own document types so as to display information relevant to your users. See [How to Define a New Content View]({{page space='nxdoc' page='how-to-define-a-new-content-view'}}) for instance.

{{! /multiexcerpt}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Pages'}}

- [Document Types]({{page page='document-types'}})
- [Publishing Content]({{page page='publishing-content'}})
- [Managing Permissions]({{page page='managing-permissions'}})
- [Managing Users and Groups]({{page page='managing-users-and-groups'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
