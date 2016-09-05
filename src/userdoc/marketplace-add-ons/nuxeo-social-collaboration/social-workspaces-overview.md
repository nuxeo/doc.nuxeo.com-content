---
title: Social Workspaces Overview
labels:
    - dashboard
    - social-workspace
toc: true
confluence:
    ajs-parent-page-id: '21299521'
    ajs-parent-page-title: Nuxeo Social Collaboration
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Social+Workspaces+Overview
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Social+Workspaces+Overview'
    page_id: '21299519'
    shortlink: PwFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/PwFFAQ'
    source_link: /display/USERDOC60/Social+Workspaces+Overview
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 13:46'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2016-01-18 13:51'
        message: Fix deprecated note and TOC
        version: '19'
    - 
        author: Manon Lumeau
        date: '2014-12-05 18:15'
        message: ''
        version: '18'
    - 
        author: Anonymous
        date: '2014-08-20 18:18'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2014-08-20 18:17'
        message: formatting
        version: '16'
    - 
        author: Manon Lumeau
        date: '2014-08-14 12:35'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-12-02 15:53'
        message: typos
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-11-04 19:09'
        message: Updated icon to switch view and fixed screenshot size
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:25'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2011-12-21 12:42'
        message: Migrated to Confluence 4.0
        version: '11'
    - 
        author: Solen Guitter
        date: '2011-12-21 12:42'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2011-12-20 10:27'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-12-15 17:28'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-12-14 18:20'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-11-22 11:55'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-11-17 14:13'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-11-16 17:20'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-11-16 17:16'
        message: Added social workspace user profiles
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-11-16 12:04'
        message: Added social workspace visibility and views sections
        version: '2'
    - 
        author: Solen Guitter
        date: '2011-11-15 11:32'
        message: ''
        version: '1'

---
{{{multiexcerpt 'nuxeo_social_collaboration_deprecated' page='Nuxeo Social Collaboration'}}}

Social workspaces are spaces that enable you to create content and share it to a community of users, using only the notion of private / public content.

Social workspaces have user friendly views of the content that enable users to access content simply and quickly and to share documents without having to understand all the hierarchical structure of the Nuxeo application. These views are dashboards that can be configured by the workspace administrators to be consistent with the workspace purpose and members.

## Social Workspace Visibility

Social workspaces can be either private or public.

### Public Workspace Overview

A public workspace is a space in which content can be shared to all users of the application, even if they are not members of the workspace. Indeed, the workspace can be seen in the workspaces directory by all users. If people are interested in the workspace's topics, they can ask to join the workspace to have access to more content.

### Private Workspace Overview

A private workspace is a space in which content can only be accessed by workspace members. Users become members of the workspace when they are invited to the workspace. They cannot join the workspace at their own initiative.

## Social Workspace Users

There are two types of users in a social workspace: members and administrators.

Members can:

*   Create content (articles),
*   Edit the workspace's content,
*   Change the visibility of articles (public / private).

Beside members' actions, social workspace administrators can:

*   Create news,
*   Customize the workspace dashboards,
*   Manage the members of the workspace (approve join requests, add / remove members...).

## Browsing a Social Workspace

Social workspaces display content in a user-friendly way, independent from the usual hierarchical structure of Nuxeo, publication process, etc. This Collaboration view is available for social workspaces and the documents inside it. The workspace collaboration view uses dashboards, which are composed of gadgets that display content in a transparent way. The workspace's administrators can [configure dashboards]({{page page='setting-the-workspaces-dashboards'}}) to display only the gadgets they think are relevant to the workspace and its users.

There are two social workspace dashboards:

*   A public dashboard which is displayed to non-members,
*   A private dashboard which is displayed to the members of the space.

Workspace members also have access to a classic Document Management view of the workspace, from which they can access additional document management features such as [comments]({{page page='comments'}}).
You can go to the Document Management view from any Collaboration view by clicking the **Actions** button and then **Document Management view**. Conversely, you can access the Collaboration view of documents and social workspaces at anytime by clicking the icon ![]({{file name='switch.png' page='icons-index'}}).

In the Collaboration tab, you can easily browse content, without having to know where the content is in the collaboration structure. For instance, you can:

*   Access all the articles of the social workspace:
    ![]({{file name='Articles-view.png'}} ?w=600,border=true)
*   Access all the news of the workspace:
    ![]({{file name='news-view.png'}} ?w=600,border=true)
*   Go to another social workspace.
    ![]({{file name='select_a_workspace_menu.png'}} ?w=300,border=true,thumbnail=true)

The available actions are displayed on the top right corner of the social workspace view. You can:

*   Select another social workspace (only the workspaces you're a member of are displayed),
*   Create and edit content,
*   Go to the articles of your social workspace,
*   Go to the news of your social workspace.