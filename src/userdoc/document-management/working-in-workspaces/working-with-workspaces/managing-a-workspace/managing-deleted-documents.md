---
title: Managing Deleted Documents
labels:
    - delete
confluence:
    ajs-parent-page-id: '16092668'
    ajs-parent-page-title: Managing a Workspace
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Managing+Deleted+Documents
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Managing+Deleted+Documents'
    page_id: '16092670'
    shortlink: '-o31'
    shortlink_source: 'https://doc.nuxeo.com/x/-o31'
    source_link: /display/USERDOC58/Managing+Deleted+Documents
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 13:12'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2014-02-03 11:27'
        message: Updated relations to a deleted document behavior
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-10-22 17:42'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2012-06-19 11:42'
        message: Migrated to Confluence 4.0
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-06-19 11:42'
        message: Added related Studio content
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-12-11 20:54'
        message: Updated screenshots
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-11-09 09:48'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-11-09 09:48'
        message: Added related content
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-06-06 11:22'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2010-12-01 11:17'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-05-10 18:33'
        message: fixed broken links
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-04-26 17:53'
        message: ''
        version: '1'

---
When they are deleted by users with "write" rights, documents are moved into the **Trash** tab of the parent folder (domain, workspace, folder, etc). They are not erased from the application. Users with "manage everything" rights can still restore them or delete them permanently.

## Restoring Documents{{> anchor 'restore-documents'}}

Only users with management rights can restore documents.

When they are deleted by users with writing rights, documents are moved into the **Trash** tab of workspaces or folders. They are not erased from the application and can still be restored, i.e. moved back into the **Content** tab of the workspace.

**To restore a document:**

1.  Go on the **Trash** tab of the workspace.
    ![]({{file name='trash-tab.png'}} ?w=650,border=true)
2.  Check the box in front of the document's name.
3.  Click on the **Restore** button.
4.  On the window that pops up, click on the **OK** button.
    The document is moved back into the **Content** tab of the workspace.
    It takes the 'project' life cycle state, even if its life cycle state before deletion was "approved" or "obsolete".

## Permanently Deleting Documents{{> anchor 'permanently-delete-documents'}}

Only users with management rights can manage the trash of a space and delete documents permanently.

**To delete a document permanently:**

1.  In the **Trash** tab of the workspace, check the box in front of the document's name.
    ![]({{file name='trash-tab.png'}} ?w=650,border=true)
2.  Click on the **Permanent delete** button.
3.  On the window that pops up, click on the **OK** button.
    The document is permanently erased from the application. It cannot be restored.
    The [relations]({{page page='relations'}}) to the deleted document are deleted.

&nbsp;