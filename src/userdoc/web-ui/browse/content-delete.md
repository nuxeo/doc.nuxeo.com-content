---
title: Deleting Content
review:
    comment: ''
    date: '2018-11-15'
    status: ok
description: null
toc: true
labels:
    - creation
    - drag-and-drop
tree_item_index: 500

---
{{! multiexcerpt name='functional-overview-trash-feature'}}

Only users with "Edit" or "Manage everything" [permissions]({{page version='' space='userdoc' page='managing-permissions'}}) can delete documents from a space.

## From Workspace View

To delete one or several documents, select them in your workspace and click on the delete icon&nbsp;![]({{file name='delete_web-ui.png' page='icons-index'}} ?w=18) in the action toolbar.

## From Document View

On the document itself you can decide to delete the file of your document by clicking on the Delete icon&nbsp;![]({{file name='delete_web-ui.png' page='icons-index'}} ?w=18) next to its title and add a new one.

## Managing Deleted Documents

Users with "Manage everything" permissions can access the workspace's Trash and perform one of the following actions:

**Restore Document**

1. Go to the workspace that you want and click on the **Trash** view.</br>
   Deleted document(s) of the workspace are displayed.
1. Select the document(s) that you want to restore
1. Click on ![]({{file name='restore-doc-web-ui.png' page='icons-index'}} ?w=18) in the action toolbar at the top of the page.</br>
   Documents are moved back to the **View** tab of the workspace and available to users.

   ![]({{file name='restore-content-web-ui.png'}} ?w=600)

**Delete Permanently**

1. Go to the folder that you want and click on the **Trash** view.</br>
   The deleted document(s) of the folders are displayed.
1. Click on the document you want to delete permanently.
  A top bar is displayed at the top of the document.
1. In **View** click on ![]({{file name='delete-permanently-web-ui.png' page='icons-index'}} ?w=18) in the action toolbar at the top of the page.</br>

{{#> callout type='warning' }}
  Documents are permanently erased from the application. They cannot be restored.
{{/callout}}

![]({{file name='delete-permanently-content-web-ui.png'}} ?w=600)

**Empty Trash**

1. Go to the workspace where you want to empty the trash.
1. Click on the **Trash** view.
1. Click on the **Empty the trash** button at the top right of the page. ![]({{file name='empty-trash-web-ui.png'}} ?w=70)

## Trash Search

On the side menu on the left a **Trash** menu is available where you can find all the documents deleted depending on your rights.

![]({{file name='trash-search-web-ui.png'}} ?w=600)

From this search you can also restore and/or delete permanently document(s) as explained above.

![]({{file name='trash-search-selected-web-ui.png'}} ?w=600)

If you open a document that is already in the trash, an info bar is displayed at the top of the page saying that you are viewing a trashed document. If you have the necessary rights on the document, you can restore and/or delete permanently document(s) as explained above from this info bar.

![]({{file name='delete-info-bar-web-ui.png'}} ?w=600)

{{! /multiexcerpt}}
