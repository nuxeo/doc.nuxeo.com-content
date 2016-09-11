---
title: Working with Workspaces
review:
    comment: ''
    date: ''
    status: ok
labels:
    - last-review-20141106
toc: true
confluence:
    ajs-parent-page-id: '21299507'
    ajs-parent-page-title: Working in Workspaces
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Working+with+Workspaces
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Working+with+Workspaces'
    page_id: '21299508'
    shortlink: NAFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/NAFFAQ'
    source_link: /display/USERDOC60/Working+with+Workspaces
history:
    - 
        author: Solen Guitter
        date: '2014-11-04 00:29'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2014-11-04 00:28'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2014-11-04 00:18'
        message: 'Merging workspace creation, edition and deletion pages'
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-10-17 18:23'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-02-06 17:35'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-02-06 17:34'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-10-29 21:40'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2012-07-24 11:42'
        message: Migrated to Confluence 4.0
        version: '7'
    - 
        author: Solen Guitter
        date: '2012-07-24 11:42'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2012-07-24 11:38'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-12-11 20:46'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-11-08 17:09'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-05-10 18:31'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-04-23 16:33'
        message: ''
        version: '1'

---
There are two types of workspaces:

*   _shared workspaces_ are workspaces meant for collaborative work, that is to say that the workspace's content is meant to be shared and modified by several users. Collaborative workspaces are workspaces created in the root space called **Workspaces** and shared between users. Once documents are ready for distribution, they must be published in a section.

*   _personal workspaces_ can only be accessed by their owner, by default. You can of course share the access to your personal workspace with other users. Personal workspaces are accessible in the header of the application.

{{#> callout type='tip' heading='Personal workspaces behaviour'}}

Content creation and edition, as well as management, works the same way in personal workspaces as in collaborative workspaces.

{{/callout}}

By default, no workspace is available at workspaces root. Thus, you can create the structure you need for your project, edit it if needed. You can also [set the appropriate access right]({{page page='managing-access-rights'}}) for users to be able to collaborate in the workspaces.

Workspaces management also includes setting [alerts]({{page page='alerts'}}) for users to be informed when content is created or edited in workspaces and handling content deletion.

## Creating a Workspace

Workspaces are created in the Workspaces root space, either at the root of Workspaces or in sub-workspaces. By default, no workspace is available in the Nuxeo Platform so that you can create the structure needed for your project. You can create as many workspaces and sub-workspaces as you need.

Workspaces can be created from scratch or from a template.

### Creating a Workspace from Scratch

To create a new workspace, you need to have at least 'Write' rights in the parent folder.

**To create a workspace:**

1.  Click on the **New** button (**New Workspace** if you are the root of workspaces).
2.  On the Available document types window, click on **Workspace**.
3.  Give the workspace a title and possibly a description.
4.  Click on **Create** button.
    The workspace **Content** tab is displayed.
    ![]({{file name='workspace-saved.png'}} ?w=650,border=true)

{{> anchor 'template-based-workspace-creation'}}

### Creating a Workspace from a Template

Templates are predefined workspaces that you can use to make building your workspace structure easier.

When you create a workspace from a template, the newly created workspace automatically have the same content and description as its template. Access rights however are not inherited from the template but from the parent workspace.

**To create a workspace from a template:**

1.  Click on the **New** button (**New Workspace** if you are the root of workspaces).
2.  On the Available document types window, click on **Workspace**.
3.  Give the workspace a title, possibly a description and select the template to create the workspace from in the drop down list.
4.  Click on **Create** button.
    The workspace **Content** tab is displayed.

## Editing a Workspace

To edit a workspace, you need to have Write right on the workspace.

When you edit a workspace, you can edit its properties (title and description) and its metadata. The metadata of workspaces are the same as for all the other documents:

{{{multiexcerpt 'metadata' page='Editing Content'}}}

**To edit a workspace:**

1.  Click on the **Edit** tab of the workspace.
2.  Fill in the edition form's fields.
    ![]({{file name='workspace_edit_form.png'}} ?w=650,border=true)
3.  Optionally type a comment to keep track of why you edited the workspace.
4.  Click on the **Save** button.
    Modifications are saved and the fact that you edited the workspace is tracked in **History** tab.

## Deleting a Workspace

Only users with "write" or "manage everything" rights in the parent workspace can delete a workspace.

When you delete a workspace, you also delete its content. This action moves the workspace into the parent's trash, from which users with management rights can [revert deletion]({{page page='managing-deleted-documents#restore-documents'}}) or [delete it permanently]({{page page='managing-deleted-documents#permanently-delete-documents'}}).

**To delete a workspace:**

1.  In the **Content** tab of the parent workspace, check the box corresponding to the workspace to delete.
2.  Click on the **Delete** button.
3.  In the window that pops up, click on the **OK** button.
    The parent workspace **Content** tab is displayed: the deleted workspace is not displayed anymore.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Pages'}}

*   [Managing a Workspace]({{page page='managing-a-workspace'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Customization'}}

*   [How to Override Existing Document Types]({{page space='nxdoc60' page='how-to-override-existing-document-types'}})

{{/panel}}</div></div>