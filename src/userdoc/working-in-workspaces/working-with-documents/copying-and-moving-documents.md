---
title: Copying and Moving Documents
labels:
    - last-review-20141202
    - clipboard
    - worklist
toc: true
confluence:
    ajs-parent-page-id: '21299491'
    ajs-parent-page-title: Working with Documents
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Copying+and+Moving+Documents
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Copying+and+Moving+Documents'
    page_id: '21299513'
    shortlink: OQFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/OQFFAQ'
    source_link: /display/USERDOC60/Copying+and+Moving+Documents
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 14:34'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2015-02-03 13:34'
        message: ''
        version: '11'
    - 
        author: Manon Lumeau
        date: '2014-12-02 22:44'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2014-12-01 23:49'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2014-06-11 15:12'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2014-02-21 09:29'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-02-14 10:03'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2014-02-14 10:02'
        message: Added compare action from worklist
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:22'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-09-30 17:13'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-06-17 17:49'
        message: Added links
        version: '2'
    - 
        author: Solen Guitter
        date: '2012-10-29 14:14'
        message: ''
        version: '1'

---
Copying and moving documents requires to have at least Read right on the original document and Write right in the target workspace. Copy and move are possible in workspaces and workspaces templates. To copy a document in a section you need to [publish]({{page page='publishing-documents'}}) it in the new section. To move it from a section to another, you need to [unpublish]({{page page='publishing-documents'}}) it from the first section and [publish]({{page page='publishing-documents'}}) it in the second one.

Copying and Moving are done using the clipboard and worklist, which are located in the left part of the screen, below the navigation tree.

![]({{file name='worklist-clipboard.png'}} ?w=180,border=true,thumbnail=true)

## Clipboard? Worklist?

What is the difference between the clipboard and the worklist?

Both are used to select documents and apply actions on these documents. Possible actions are:

*   [copy](#copying-documents)
*   [move](#moving-documents)
*   [export]({{page page='exporting-documents'}})

There are two differences between the clipboard and the worklist:

*   the clipboard is a one-shot selection: when you select one or several documents and add them to the clipboard, it replaces the previous selection. On the contrary, putting documents to the worklist adds them to the existing selection.
*   the worklist content is kept when you log out: your selection is still available when you log back in, until you remove documents from the worklist. The clipboard selection is lost when you log out.

## Copying Documents

There are two ways to copy documents:

*   if you need to copy one document or more from the same workspace, use the clipboard;
*   if you need to copy several documents from different workspaces, use the worklist.

### Copying Documents from the Same Workspace

To copy one or several documents from a single workspace at the same time:

1.  In the workspace **Content** tab, check the box(es) corresponding to the document(s) you want to copy.
2.  Click on the **Copy** button below the table.
    The selected documents are added to the clipboard, which is displayed instead of the worklist.
    ![]({{file name='clipboard-doc-copied.png'}} ?w=180,border=true,thumbnail=true)
    A **Paste in current folder** action is immediately available, so you duplicate the document in the current workspace.
3.  Go to the workspace where you want to copy the document(s).
4.  In the target workspace, either click on the **Paste** button in the **Content** tab or the **Paste in current folder** link in the clipboard.
    ![]({{file name='clipboard-doc-to-be-pasted.png'}} ?w=180,border=true,thumbnail=true)
    A new document is created in the current workspace, that has the same title as the original document.
    In the document's history, its creation by copy is logged, with a link to the original document.
    ![]({{file name='copied-document-history.png'}} ?w=650,border=true)

### Copying Documents from Different Workspaces

You can paste documents from different workspaces at the same time. To do that, you need to add documents to your worklist instead of copying them.

1.  Go in a workspace.
2.  In the first workspace **Content** tab, check the box(es) corresponding to the document(s) you want to copy.
3.  Click on the **Add to worklist** button below the table.
    The selected documents are added to the worklist.
    A **Paste in current folder** action is immediately available, so you duplicate the documents in the current workspace.
4.  Repeat steps 1 to 3 as many times as you need.
5.  When you have added all the documents you need to your worklist, go in the workspace where you want to paste the documents.
6.  Either click on the **Paste** button in the **Content** tab or the **Paste in current folder** link in the worklist.
    Documents are created in the current workspace, that have the same title as the original documents.
    In the documents history, the creation by copy is logged, with a link to the original document.
    ![]({{file name='copied-document-history.png'}} ?w=650,border=true)

## Moving Documents

### Moving Documents from the Same Workspace

To move one or several documents from a single workspace at the same time, you can use either the clipboard or the worklist. Steps are given here to use the clipboard.

1.  In the workspace **Content** tab, check the box(es) corresponding to the document(s) you want to move.
2.  Click on the **Copy** button below the table.
    The selected documents are added to the clipboard, which is displayed instead of the worklist.
3.  Go to the workspace where you want to move the document(s).
4.  Click on the **Move in current folder** link in the clipboard.
    ![]({{file name='clipboard-doc-to-be-pasted.png'}} ?w=180,border=true,thumbnail=true)
    The documents are now available from this workspace. They are not available anymore from the other workspace.
    The Move action is logged in the documents history, with a link to the original workspace.
    ![]({{file name='move-document-history.png'}} ?w=650,border=true)

{{#> callout type='tip' heading='Moving using drag and drop'}}

You can also move documents one by one by dragging their icon from the **Content** tab to the target workspace in the navigation tree.

![]({{file name='move-d&d.png' page='working-using-drag-and-drop'}} ?w=400,border=true)

{{/callout}}

### Moving Documents from Several Workspaces

To move several documents from different workspaces at the same time:

1.  Go in a workspace.
2.  In the first workspace **Content** tab, check the box(es) corresponding to the document(s) you want to move.
3.  Click on the **Add to worklist** button below the table.
    The selected documents are added to the worklist.
4.  Repeat steps 1 to 3 as many times as you need.
5.  Go to the workspace where you want to move the document(s).
6.  Click on the **Move in current folder** link in the worklist.
    The documents are now available from this workspace. They are not available anymore from the other workspaces.
    The Move action is logged in the documents history, with a link to the original workspace.
    ![]({{file name='move-document-history.png'}} ?w=650,border=true)

{{#> callout type='tip' heading='Moving using drag and drop'}}

You can also move documents one by one by dragging their icon from the **Content** tab to the target workspace in the navigation tree.

![]({{file name='move-d&d.png' page='working-using-drag-and-drop'}} ?w=400,border=true)

{{/callout}}