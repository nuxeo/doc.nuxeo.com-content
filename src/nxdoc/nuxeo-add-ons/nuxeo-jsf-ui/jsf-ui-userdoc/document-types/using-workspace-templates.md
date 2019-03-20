---
title: Using Workspace Templates
review:
    comment: ''
    date: '2018-02-26'
    status: ok
labels:
    - templates
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '2392395'
    ajs-parent-page-title: Document Types
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Using+Workspace+Templates
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Using+Workspace+Templates'
    page_id: '4688692'
    shortlink: NItH
    shortlink_source: 'https://doc.nuxeo.com/x/NItH'
    source_link: /display/USERDOC/Using+Workspace+Templates
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2015-12-08 15:00'
        message: ink updat
        version: '16'
    -
        author: Manon Lumeau
        date: '2015-11-25 17:02'
        message: 'replace "access rights" by "permissions"'
        version: '15'
    -
        author: Solen Guitter
        date: '2014-11-04 00:26'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2013-10-22 15:44'
        message: '5.8: removed website / blog document types that are now in an addon'
        version: '13'
    -
        author: Solen Guitter
        date: '2013-07-02 17:49'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2012-01-23 12:35'
        message: Migrated to Confluence 4.0
        version: '11'
    -
        author: Solen Guitter
        date: '2012-01-23 12:35'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2011-11-24 10:46'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2011-06-06 14:57'
        message: ''
        version: '8'
    -
        author: Julie Allouch
        date: '2010-12-23 16:54'
        message: ''
        version: '7'
    -
        author: Julie Allouch
        date: '2010-12-23 16:53'
        message: ''
        version: '6'
    -
        author: whajeri
        date: '2010-12-23 10:03'
        message: ''
        version: '5'
    -
        author: whajeri
        date: '2010-12-22 17:02'
        message: ''
        version: '4'
    -
        author: whajeri
        date: '2010-12-22 15:21'
        message: ''
        version: '3'
    -
        author: whajeri
        date: '2010-12-22 12:45'
        message: ''
        version: '2'
    -
        author: whajeri
        date: '2010-12-22 11:40'
        message: ''
        version: '1'

---
Templates are the easiest way to automate the creation of workspace tree structures. This is useful in many cases, for example when:

*   You have many workspaces to create and want them to follow a certain structure of Folders, Files, or any type of documents.
*   You want to keep a consistency among different workspaces that users will create. For example, you may want each team's workspace to have a mail folder, a "projects" workspace, etc.

**To create a template:**

1.  Click on **Templates** in the navigation tree.

    ![]({{file name='templates-navigation-tree.png'}} ?w=250,border=true)
2.  From there, you can create a new Template containing any type of document, and even files, with the tree structure you want.
3.  Once a new Template has been created, you can create many workspaces from this template.

{{#> callout type='info' heading='Templates and User Rights Management'}}

*   When you set permissions on the 1st-level workspace of a template - here IT project workspace structure-, it will be inherited in the new workspaces. For example, a user who is not allowed to read "IT project workspace structure" will not be able to see it when creating a workspace.

*   When you set permissions on the content of a workspace in a template, it won't be inherited in the new workspaces. For example, a user who can't read a folder like "Meeting reports" in a workspace but have reading access on the 1st-level workspace, will be allowed to see "Meeting reports"
    In a few words, don't try to manage workspaces' permissions with Templates (this can be done other ways, like using [Studio]({{page space='studio'}}) configuration tool).

{{/callout}}
