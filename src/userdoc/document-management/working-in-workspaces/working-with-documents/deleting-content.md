---
title: Deleting Content
labels:
    - delete
confluence:
    ajs-parent-page-id: '16092634'
    ajs-parent-page-title: Working with Documents
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Deleting+Content
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Deleting+Content'
    page_id: '16092633'
    shortlink: 2Y31
    shortlink_source: 'https://doc.nuxeo.com/x/2Y31'
    source_link: /display/USERDOC58/Deleting+Content
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 14:17'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-10-22 17:54'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-10-22 17:54'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-02-06 17:42'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2012-06-19 17:41'
        message: Migrated to Confluence 4.0
        version: '12'
    - 
        author: Solen Guitter
        date: '2012-06-19 17:41'
        message: Added related Studio pages
        version: '11'
    - 
        author: Solen Guitter
        date: '2011-12-23 10:06'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2011-11-25 15:11'
        message: Fixed broken link
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-11-23 10:27'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-11-09 09:51'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-11-09 09:48'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-06-06 11:34'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2010-10-20 10:43'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2010-10-20 10:41'
        message: fixed broken links
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-05-10 18:38'
        message: fixed broken links
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-04-23 18:04'
        message: ''
        version: '1'

---
Only users with "Write" or "manage everything" rights can delete documents from a space.

Deleting a document occurs in two steps:

1.  A user moves a document to trash.
2.  The manager of the space [deletes the document permanently]({{page page='managing-deleted-documents'}}).

There are two ways to move a document into the **Trash** tab:

*   Deleting it from the workspace content table,
*   Submitting the document to an [workflow]({{page page='workflows'}}), with the destination lifecycle state 'deleted'.

If you are sure that the document is to be deleted, you can delete it from the workspace's content table. However, if you want the deletion to be approved before, you need to submit it to a [workflow]({{page page='workflows'}}) and specify that the destination life cycle is 'deleted'. When the workflow is ended and the deletion approved, the document is automatically moved into the **Trash** tab of the document.

**To delete a document from the Content tab of the workspace:**

1.  In the **Content** tab of the workspace, check the box in front of the document's name.
2.  Click on the **Delete** button.
3.  On the window that pops up, click on the **OK** button.
    The document is moved to the **Trash** tab of the workspace (available to users with management rights only) and does not appear in the workspace's content list.

{{#> callout type='tip' heading='Quick deletion'}}

You can also delete documents using right-click on document from the **Content** tab of the workspace.

{{/callout}}

![]({{file name='right-click-menu.png' page='editing-content'}} ?w=350,border=true)

&nbsp;