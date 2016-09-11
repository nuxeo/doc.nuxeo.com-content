---
title: Creating a New Social Workspace
review:
    comment: ''
    date: ''
    status: ok
labels:
    - social-workspace
confluence:
    ajs-parent-page-id: '16092563'
    ajs-parent-page-title: Social Workspaces Overview
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Creating+a+New+Social+Workspace
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Creating+a+New+Social+Workspace'
    page_id: '16092567'
    shortlink: l431
    shortlink_source: 'https://doc.nuxeo.com/x/l431'
    source_link: /display/USERDOC58/Creating+a+New+Social+Workspace
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 13:57'
        message: ''
        version: '27'
    - 
        author: Manon Lumeau
        date: '2014-08-14 12:33'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '26'
    - 
        author: Manon Lumeau
        date: '2014-08-14 12:33'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '25'
    - 
        author: Manon Lumeau
        date: '2014-08-14 12:33'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '24'
    - 
        author: Manon Lumeau
        date: '2014-08-14 12:33'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '23'
    - 
        author: Manon Lumeau
        date: '2014-08-14 12:33'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '22'
    - 
        author: Manon Lumeau
        date: '2014-08-14 12:33'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:25'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '20'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:25'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '19'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:25'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:25'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:25'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-01-23 11:11'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-01-23 11:11'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-01-23 11:11'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2012-06-13 16:44'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '12'
    - 
        author: Solen Guitter
        date: '2012-06-13 16:44'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '11'
    - 
        author: Solen Guitter
        date: '2012-06-13 16:44'
        message: Migrated to Confluence 4.0
        version: '10'
    - 
        author: Solen Guitter
        date: '2012-06-13 16:44'
        message: Updated default tab after creation
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-12-21 12:42'
        message: Added screenshot and links to dashboard configuration
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-12-20 10:33'
        message: Added screenshot and links to dashboard configuration
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-11-17 17:35'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-11-17 14:13'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-11-17 11:14'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-11-17 11:11'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-11-17 10:56'
        message: Added creation steps from DM view
        version: '2'
    - 
        author: Solen Guitter
        date: '2011-11-16 18:02'
        message: ''
        version: '1'

---
Social workspaces can only be created in the Social domain added automatically by the system when you install the Social Collaboration module to your Nuxeo application.

To be able to create a new social workspace

You can create a social workspace from:

*   the Collaboration tab, from any social workspace's dashboard,
*   the document management view of the social domain.

**To create a new social workspace from the Collaboration tab:**

1.  Click on the **Actions** button, in the top right corner of the view.
2.  Click on **Create a Social Workspace**.
    The social workspace creation form is displayed.
3.  Fill in the form (see below for social workspace parameters) and click on the **Create** button.
    ![]({{file name='Social workspace creation.png'}} ?w=500,border=true)
    The workspace's **Wall** tab is displayed. You can then [configure the workspace's dashboards]({{page page='setting-the-workspaces-dashboards'}}).

**To create a social workspace from the document management view of the application:**

1.  In the Social domain, click on the **New** button.
2.  On the **Available document types** window, click on **Social Workspace**.
3.  Fill in the social workspace creation form.
4.  Click on **Create** button.
    The workspace's **Wall** tab is displayed. You can now [configure the workspace's dashboards]({{page page='setting-the-workspaces-dashboards'}}).

{{! multiexcerpt name='social-workspace-properties'}}<table><tbody><tr><th colspan="1">Field</th><th colspan="1">Description</th></tr><tr><td colspan="1">Title</td><td colspan="1">Name of the social workspace.</td></tr><tr><td colspan="1">Description</td><td colspan="1">Text that explains what the social workspace is about.</td></tr><tr><td colspan="1">Subject</td><td colspan="1">Topic(s) of the social workspace.</td></tr><tr><td colspan="1">Public</td><td colspan="1">Indicate if the social workspace is public or private.</td></tr><tr><td colspan="1">Approval subscription workflow</td><td colspan="1">For public workspaces: indicates if join request should be approved by a workspace administrator or automatically.</td></tr><tr><td colspan="1">Expire on</td><td colspan="1">Date at which the social workspace can be closed by an administrator.</td></tr></tbody></table>{{! /multiexcerpt}}