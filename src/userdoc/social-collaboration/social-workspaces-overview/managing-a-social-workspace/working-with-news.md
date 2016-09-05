---
title: Working with News
labels:
    - news
confluence:
    ajs-parent-page-id: '16092564'
    ajs-parent-page-title: Managing a Social Workspace
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Working+with+News
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Working+with+News'
    page_id: '16092568'
    shortlink: mI31
    shortlink_source: 'https://doc.nuxeo.com/x/mI31'
    source_link: /display/USERDOC58/Working+with+News
history:
    - 
        author: Solen Guitter
        date: '2013-10-22 18:30'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2012-10-12 11:14'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-12-21 16:53'
        message: Migrated to Confluence 4.0
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-12-21 16:53'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-12-21 16:51'
        message: Added screenshots and completed steps
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-11-17 17:29'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2011-11-17 14:34'
        message: ''
        version: '1'

---
News items are articles that enable the social workspace administrators to share information to the workspace's members. The news items are displayed in a dedicated gadget, that can be used in both social workspace dashboards, and in the user's home dashboard. Like articles, news items can be either private (visible to the space members only) or public (visible to all users).

News are automatically displayed on the different dashboards of users, providing that they display the **News** gadget:

*   The Home dashboard displays the news of all the social workspaces users can access,
*   The Collaboration home dashboard displays the news of all the social workspaces users can access,
*   The social workspaces dashboard display the news of the workspace only.

News items can only be created by the workspace administrators.
They can be created from:

*   [From any page in the Collaboration view using the Actions menu](#news-creation-from-actions-menu),
*   [From the workspace dashboard using the **Document Library** gadget](#news-creation-from-doc-library),
*   [From the Document Management view](#news-creation-from-doc-management-view).

{{> anchor 'news-creation-from-actions-menu'}}**To create a news item from any page:**

1.  From the dashboard of the social workspace, an article or a news item, click on the **Actions** button.
2.  Click on **Create a news item**.
3.  Fill in the news creation form (see below for article's properties).
    ![]({{file name='news_creation.png'}} ?w=650,border=true)
4.  Click on **Create**.
    The news is created in the News item container. The news collaboration view is displayed.

{{> anchor 'news-creation-from-doc-library'}}**To create a news item quickly from the dashboard:**

{{#> callout type='info' heading='Pre-requisite'}}

The dashboard must display the Document library gadget.

{{/callout}}

1.  On the dashboard's Document library gadget, go in the **News** folder.
2.  Click on the icon .
3.  Click on **News item**.
    ![]({{file name='news-creation-from-doc-library.png'}} ?w=350,border=true)
    The news item creation form is displayed in the gadget.
4.  Fill in the title, description and content.
5.  Click on the **Create** button.
    The news item is created and displayed in the Document library gadget.
    By default, the news item is private. You can edit it to add a picture.

{{> anchor 'news-creation-from-doc-management-view'}}**To create a News item from the Document Management view:**

1.  In the **Document Management** view, click on the **Collaboration** domain.
2.  Click on the social workspace you want to create a news item in.
3.  In the social workspace, click on the **News** folder.
4.  Click on the **Create a News Item** button.
5.  Fill in the document's creation form.
6.  Click on the **Create** button.
7.  The **Summary** tab of the news item is displayed.

**News items properties**

<table><tbody><tr><th colspan="1">

Field

</th><th colspan="1">

Description

</th></tr><tr><td colspan="1">

Title

</td><td colspan="1">

Name of the news item

</td></tr><tr><td colspan="1">

Description

</td><td colspan="1">

Summary of the news item. This description is displayed in the News gadget.

</td></tr><tr><td colspan="1">

Publication

</td><td colspan="1">

For public workspaces. Select who should see the news item : only the space members (Restricted to the Social Workspace) or all users (public).

</td></tr><tr><td colspan="1">

Picture

</td><td colspan="1">

Upload an image to illustrate your news item.

</td></tr><tr><td colspan="1">

Content

</td><td colspan="1">

Type the content of your news item.

</td></tr><tr><td colspan="1">

Format

</td><td colspan="1">

Select which format should be used for the news item.

</td></tr></tbody></table>