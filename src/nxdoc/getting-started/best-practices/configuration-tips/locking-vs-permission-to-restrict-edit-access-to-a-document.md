---
title: Locking vs Permission to Restrict Edit Access to a Document
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - lts2016-ok
    - lock
    - excerpt
    - permission
    - acl
    - bdelbosc
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '12914194'
    ajs-parent-page-title: Design Tips
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Locking+vs+Permission+to+Restrict+Edit+Access+to+a+Document
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Locking+vs+Permission+to+Restrict+Edit+Access+to+a+Document'
    page_id: '14256288'
    shortlink: oIjZ
    shortlink_source: 'https://doc.nuxeo.com/x/oIjZ'
    source_link: /display/NXDOC/Locking+vs+Permission+to+Restrict+Edit+Access+to+a+Document
tree_item_index: 100
history:
    -
        author: Manon Lumeau
        date: '2016-01-18 13:37'
        message: ormattin
        version: '9'
    -
        author: Manon Lumeau
        date: '2016-01-18 13:24'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2014-12-10 16:45'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-06-12 11:56'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-09-02 17:20'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2013-07-12 17:21'
        message: ''
        version: '4'
    -
        author: Frédéric Vadon
        date: '2013-07-10 17:49'
        message: ''
        version: '3'
    -
        author: Frédéric Vadon
        date: '2013-07-10 16:39'
        message: ''
        version: '2'
    -
        author: Frédéric Vadon
        date: '2013-07-10 16:38'
        message: ''
        version: '1'

---
{{! excerpt}}

During the life of a document, on state changes, or during a workflow for instance, it is sometimes required that a document has restricted modification permissions. There are at least two ways of doing this in Nuxeo:

*   by locking the document with the lock feature,
*   by setting ACLs (permissions) on the document.

We will see a few tips to choose between the two.

{{! /excerpt}}

## Locking the Document

The locking feature is exposed in the user interface through a lock icon in the action bar of non-folderish documents. It restricts the edit permission to the user who locked the document. The document stays visible for other users. A lock can be removed either by the owner of the document or by a member of administrators groups.

### Pros

*   Very simple to use: one button in the interface to lock or unlock a document. A corresponding automation operation also exists. So either from the UI, or Studio, or the APIs, the lock feature has no complexity both to understand and to use.
*   User friendly: the Summary tab shows clearly who locked the document and when.

### Cons

*   Very limited use case: you can use it only if you want to restrict Edit access to one user.
*   By default, only available on non-folderish documents.

### Related Automation Operations

In Studio, you can lock a document or a list of documents using the Document > Document.Lock operation and unlock the document(s) by using the Document > Document.Unlock operation.

There respective descriptions are available in the Explorer at:

*   [Document.Lock](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewOperation/Document.Lock)
*   [Document.Unlock](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewOperation/Document.Unlock)

## Permissions

Permissions are much more powerful and enable to define very precisely who can do what on a document.

To understand how they work, you can refer to the [ACLs]({{page page='acls'}}) page. And to see how they are exposed in the UI, you can refer to the [Security]({{page space='security'}}) page. You can also define permissions through Studio or the Automation API.

### Pros

*   Much more powerful than the lock feature. You can inherit permissions, choose exactly the needed permissions (not only Edit as with locking) for several users or groups of users on the same document. You can have some who can Read, others who can Edit... You can even apply custom permissions if needed.
*   Available on every document by default.

### Cons

*   More complicated to use, many possibilities to set the permissions, and the result depends on the order you set them up.
*   Less user friendly: you have to go to the dedicated tab to see all the permissions (ACLs for access control lists) of one document and read it carefully (if there are many permissions set up) to know what the permissions are.

### Automation Operations

In Studio, a whole set of operations allow you to you handle permissions on your documents. All of them accept either a single document or a list of documents:

- Document > Document.AddPermission<br />
Recommended operation to add a permission, since it provides all the available parameters including the start and end dates.<br/>
See [Document.AddPermission](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewOperation/Document.AddPermission) on the Explorer

- Document > Document.AddACE<br />
Allows to add a permission too. This operation is kept for backwards compatibility reasons. You should use the Document.AddPermission operation instead when possible.<br/>
See [Document.AddACE](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewOperation/Document.AddACE) on the Explorer

- Document > Document.BlockPermissionInheritance<br />
As the name suggests, blocks permission inheritance on a given ACL.<br/>
See [Document.BlockPermissionInheritance](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewOperation/Document.BlockPermissionInheritance) on the Explorer

- Document > Document.UnblockPermissionInheritance<br />
Unblocks permission inheritance on a given ACL.<br/>
See [Document.UnblockPermissionInheritance](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewOperation/Document.UnblockPermissionInheritance) on the Explorer

- Document > Document.RemoveACL<br />
Remove completely all entries in a given ACL.<br/>
See [Document.RemoveACL](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewOperation/Document.RemoveACL) on the Explorer

- Document > Document.ReplacePermission<br />
Replace a permission with another for a given user.<br/>
See [Document.ReplacePermission](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewOperation/Document.ReplacePermission) on the Explorer

## Which One to Choose?

If your use case is to restrict the modifications to only one user temporarily to make sure there is no interference on the document, then locking is probably the easiest way. For all other cases, it is too limited and then using permissions through the UI or through the Automation API is the best solution.
