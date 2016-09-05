---
title: Locking vs Permission to Restrict Write Access to a Document
labels:
    - lock
toc: true
confluence:
    ajs-parent-page-id: '22380735'
    ajs-parent-page-title: Design Tips
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Locking+vs+Permission+to+Restrict+Write+Access+to+a+Document
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/Locking+vs+Permission+to+Restrict+Write+Access+to+a+Document
    page_id: '22380706'
    shortlink: ooBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/ooBVAQ'
    source_link: >-
        /display/NXDOC60/Locking+vs+Permission+to+Restrict+Write+Access+to+a+Document
history:
    - 
        author: Manon Lumeau
        date: '2016-01-18 13:45'
        message: anonical UR
        version: '8'
    - 
        author: Manon Lumeau
        date: '2014-12-10 16:45'
        message: TOC
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
&nbsp;

{{! excerpt}}

During the life of a document, on state changes, or during a workflow for instance, it is sometimes required that a document has restricted modification permissions. There are at least two ways of doing this in Nuxeo:

*   by locking the document with the lock feature,
*   by setting ACLs (permissions) on the document.

We will see a few tips to choose between the two.

{{! /excerpt}}

## Locking the Document

The locking feature is exposed in the user interface through a lock icon in the action bar of non-folderish documents. It restricts the write permission to the user who locked the document. The document stays visible for other users. A lock can be removed by the owner of the document or by someone having the manage permission.

### Advantages:

*   Very simple to use: one button in the interface to lock or unlock a document. A corresponding automation operation also exists. So either from the UI, or Studio, or the APIs, the lock feature has no complexity both to understand and to use.
*   User friendly: the Summary tab shows clearly who locked the document and when.

### Flaws

*   Very limited use case: you can use it only if you want to restrict Write access to one user.
*   By default, only available on non-folderish documents.

### Automation Operations

In Studio, you can lock a document using the Document > Lock operation and unlock the document by using the Document > Unlock operation.

There respective descriptions are available in the explorer at:

*   [http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewOperation/Document.Lock](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewOperation/Document.Lock)
*   [http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewOperation/Document.Unlock](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewOperation/Document.Unlock)

## Permissions

Permissions are much more powerful and enable to define very precisely who can do what on a document.

To understand how they work, you can refer to security management section in the page [Repository Concepts]({{page page='repository-concepts'}}). And to see how they are exposed in the UI, go to: [Managing Access Rights]({{page space='userdoc60' page='managing-access-rights'}}). You can also define permissions through Studio or the Automation API.

### Advantages:

*   Much more powerful than the lock feature. You can inherit permissions, choose exactly the needed permissions (not only Write as with locking) for several users or groups of users on the same document. You can have some who can Read, others who can Write... You can even create new permissions if needed.
*   Available on folderish documents by default.

### Flaws

*   More complicated to use, many possibilities to set the permissions and the result depends on the order you set them up.
*   Not exposed by default on non-folderish documents (easy to show though).
*   Less user friendly: you have to go to the dedicated tab to see all the permissions (ACLs for access control lists) of one document and read it carefully (if there are many permissions set up) to know what the permissions are.

### Automation Operations

In Studio, you can set permissions on a document with the operation Document > SetACL and remove permissions with the operation Document > RemoveACL.

Their respective descriptions can be found in the explorer at:

*   [http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewOperation/Document.SetACE](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewOperation/Document.SetACE)
*   [http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewOperation/Document.RemoveACL](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewOperation/Document.RemoveACL)

## Which one to choose?

If your use case is to restrict the modifications to only one user temporarily to make sure there is no interference on the document, then locking is probably the easiest way. For all other cases, it is too limited and then using classical permissions through the UI or through the Automation API is the best solution.

&nbsp;