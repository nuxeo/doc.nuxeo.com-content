---
title: Deleting Content
review:
    comment: ''
    date: '2018-02-26'
    status: ok
labels:
    - delete
    - trash
    - last
    - multiexcerpt
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '11043048'
    ajs-parent-page-title: Nuxeo Platform User Documentation
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Deleting+Content
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Deleting+Content'
    page_id: '2392394'
    shortlink: SoEk
    shortlink_source: 'https://doc.nuxeo.com/x/SoEk'
    source_link: /display/USERDOC/Deleting+Content
tree_item_index: 900
history:
    -
        author: Solen Guitter
        date: '2015-12-08 14:25'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2015-12-08 14:25'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2015-11-23 14:30'
        message: new Edit permission
        version: '24'
    -
        author: Solen Guitter
        date: '2015-08-31 12:48'
        message: 'User doc reorganization: fix link to relations'
        version: '23'
    -
        author: Solen Guitter
        date: '2015-07-17 08:17'
        message: ''
        version: '22'
    -
        author: Manon Lumeau
        date: '2015-07-16 14:45'
        message: ''
        version: '21'
    -
        author: Manon Lumeau
        date: '2015-07-16 10:05'
        message: ''
        version: '20'
    -
        author: Manon Lumeau
        date: '2015-07-16 10:02'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2015-07-16 10:01'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2014-12-01 11:47'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2014-02-24 15:00'
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
{{! multiexcerpt name='functional-overview'}}

### Deleting Documents

Only users with "Edit" or "Manage everything" permissions can delete documents from a space.

To delete one or several documents, select them from the **Content** tab of the workspace, click on **Delete** and confirm. The documents are moved to the **Trash** tab of the workspace (available to users with management rights only) and do not appear in the workspace's content list anymore. They are now flagged as trashed (`ecm:isTrashed = 1`).

You can also delete documents using right-click on the document's icon from the **Content** tab of the workspace.

![]({{file name='right-click-menu.png' space='nxdoc' page='editing-content'}} ?w=350,border=true)

### Managing Deleted Documents

Users with "Manage everything" permissions can access the workspace's **Trash** and perform one of the following actions:

*   Restore documents by selecting them and clicking the **Restore** button.
    Documents are moved back to the **Content** tab of the workspace and available to users. They get the "project" lifecycle state, even if their lifecycle state before deletion was "approved".
    ![]({{file name='trash-tab.png' space='nxdoc' page='deleting-content'}} ?w=600,border=true)
*   Erase documents by selecting them and clicking the **Permanent delete** button.
    Documents are permanently erased from the application. They cannot be restored. The [relations]({{page space='nxdoc' page='editing-content'}}#relations) to the deleted documents are deleted.
    ![]({{file name='trash-tab.png' space='nxdoc' page='deleting-content'}} ?w=600,border=true)
*   Empty the trash by clicking the corresponding button.
    All deleted documents are permanently erased from the application. They cannot be restored. The [relations]({{page space='nxdoc' page='editing-content'}}#relations) to the deleted documents are deleted.
    ![]({{file name='empty-trash.png' space='nxdoc' page='deleting-content'}} ?w=500,h=179,border=true)

{{! /multiexcerpt}}

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Deleting documents in developer documentation]({{page space='nxdoc' page='deleting-documents'}})

{{/panel}}
</div>

<div class="column medium-6">

&nbsp;

</div>
</div>
