---
title: Nuxeo Shared Bookmarks
labels:
    - shared-bookmarks
toc: true
confluence:
    ajs-parent-page-id: '21299463'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Nuxeo+Shared+Bookmarks
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Nuxeo+Shared+Bookmarks'
    page_id: '21299545'
    shortlink: WQFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/WQFFAQ'
    source_link: /display/USERDOC60/Nuxeo+Shared+Bookmarks
history:
    -
        author: Solen Guitter
        date: '2016-08-31 12:19'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2015-10-13 08:10'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2015-10-13 08:10'
        message: ''
        version: '4'
    -
        author: Manon Lumeau
        date: '2014-12-08 11:56'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2014-02-26 21:39'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2014-02-26 15:43'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DeprecatedAddOn_6.0' page='NXDOC60:Generic Multi-Excerpts'}}}
{{! excerpt}}

The [Nuxeo Shared Bookmarks](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-shared-bookmarks) addon enables users to bookmark documents and organize their bookmarks in folders. They can thus organize existing documents in a new tree structure without duplicating content.

{{! /excerpt}}

The Nuxeo Shared Bookmarks addon provides new document type to the Nuxeo Platform, called shared bookmark, in which users can create folders and bookmark documents.

Bookmarking a document doesn't mean copying it in a folder. It displays a link to the document from the bookmark the folder, but the document only exist once, in its original workspace or folder.

## Creating Shared Bookmarks

Shared bookmarks can be created in workspaces and folders.

1.  In the **Content** tab of the workspace, click on the **New** button.
2.  On the window **Available document types**, click on the desired document.
    ![]({{file name='shared-bookmarks-available-docs.png'}} ?w=650,border=true)
3.  Fill in the document's creation form.
4.  Click on the **Create** button.
    The Shared bookmark's Content tab is displayed. You can now [bookmark documents](#bookmarking-documents) in it or create folders to organize your bookmarks.

## {{> anchor 'bookmarking-documents'}}Bookmarking Documents

&nbsp;By default, you can bookmark notes, files and pictures. You need to have one of the following rights in the target bookmark folder to be able to bookmark:

*   Manage everything,
*   Bookmark.

### Bookmarking a Document from the Document

Documents have an additional tab called Bookmarks. This tab enables users to bookmark the document in a bookmark folder, but also to see where the document is already bookmarked.

**To bookmark a document from its Bookmarks tab:**

1.  Click on the **Bookmarks** tab.
2.  In the Available bookmarks folder drop-down list, select the folder where you want to bookmark the document.

    {{#> callout type='tip' }}

    The list of bookmarks folder is displayed independently from its structure. They are sorted alphabetically.

    {{/callout}}

    ![]({{file name='shared-bookmarks-doc-bookmark-tab.png'}} ?w=650,border=true)

3.  Click on the **Bookmark here** link corresponding to the folder where you want to bookmark the document.
    The document is now available from the selected bookmark folder. The selected folder is now displayed in the "Folders in which the current document is already bookmarked" section of the **Bookmark** tab.
    The action is tracked in both the document and the bookmark folder histories.

### Bookmarking a Document from the Workspace

The Nuxeo Shared Bookmarks addon adds **Bookmark** button in the **Content** tab of workspaces and folders. You can then bookmark one or several documents from this view.

**To bookmark a document from the workspace Content tab:**

1.  Select the document(s) to bookmark using the check boxes.
2.  Click on the **Bookmark** button.
3.  In the Available bookmarks folder drop-down list, select the folder where you want to bookmark the document.

    {{#> callout type='tip' }}

    The list of bookmarks folder is displayed independently from its structure. They are sorted alphabetically.

    {{/callout}}

    ![]({{file name='shared-bookmarks-bulk-bookmarking.png'}} ?w=650,border=true)

4.  Click on the **Bookmark here** link corresponding to the folder where you want to bookmark the document.
    The document is now available from the selected bookmark folder. The action is tracked in both the document and the bookmark folder histories.

## Sharing Bookmarks

You can either want to grant access to the bookmark folder or enable users to bookmark additional documents in that folder.

*   To grant access to the bookmark folder, you need to give Read right to users.
*   To enable users to bookmark documents in the folder, you need to give them the Bookmark right in the folder. By default, only users with Manage everything right can bookmark documents in a bookmark folder.

See the page [Managing Access Rights]({{page page='managing-access-rights'}}).

&nbsp;

* * *