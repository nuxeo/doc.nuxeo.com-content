---
title: Using Workspace Templates
labels:
    - templates
    - dm-document
    - cap-document
confluence:
    ajs-parent-page-id: '16092666'
    ajs-parent-page-title: Working in Workspaces
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Using+Workspace+Templates
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Using+Workspace+Templates'
    page_id: '16092595'
    shortlink: s431
    shortlink_source: 'https://doc.nuxeo.com/x/s431'
    source_link: /display/USERDOC58/Using+Workspace+Templates
history:
    - 
        author: Solen Guitter
        date: '2013-10-22 15:44'
        message: '.8: removed website / blog document types that are now in an addo'
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

*   you have many workspaces to create and want them to follow a certain structure of Folders, Files, or any type of documents (Forum, etc).
*   you want to keep a consistency among different workspaces that users will create. For example, you may want each team's workspace to have a mail folder, a "projects" workspace, etc.

**To create a template:**

1.  Click on the left panel of Nuxeo DM on **Templates**.
    ![]({{file name='templates-navigation-tree.png'}} ?border=true)
2.  From there, you can create a new Template containing any type of document, and even files, with the tree structure you want.
3.  Once a new Template has been created, you can [create many workspaces from this template]({{page page='creating-a-workspace#create-a-workspace-from-a-template'}}).

{{#> callout type='info' heading='Templates and User Rights Management'}}

*   When you set access rights on the 1st-level workspace of a template - here IT project workspace structure-, it will be inherited in the new workspaces. For example, a user who is not allowed to read "IT project workspace structure" will not be able to see it when creating a workspace.

*   When you set access rights on the content of a workspace in a template, it won't be inherited in the new workspaces. For example, a user who can't read a folder like "Meeting reports" in a workspace but have reading access on the 1st-level workspace, will be allowed to see "Meeting reports"
    In a few words, don't try to manage workspaces' access rights with Templates (this can be done other ways, like using [Studio]({{page space='studio'}}) configuration tool).

{{/callout}}