---
title: Working in Sections
labels:
    - section
confluence:
    ajs-parent-page-id: '16092644'
    ajs-parent-page-title: Document Management
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Working+in+Sections
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Working+in+Sections'
    page_id: '16092613'
    shortlink: xY31
    shortlink_source: 'https://doc.nuxeo.com/x/xY31'
    source_link: /display/USERDOC58/Working+in+Sections
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 09:03'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:22'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-10-18 10:59'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2011-11-29 12:07'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-11-29 12:07'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-11-08 17:55'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2010-11-03 16:48'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2010-10-20 10:39'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2010-10-18 15:59'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2010-10-18 12:25'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-10-13 17:46'
        message: added links
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-04-29 14:52'
        message: ''
        version: '1'

---
&nbsp;

&nbsp;

When a document is finished and ready for distribution, you must publish it in a section. Sections are spaces dedicated to the distribution of documents to a wider audience.

Sections are spaces that are managed like workspaces. Like for workspaces, there is no section that is automatically created by default, except for the sections root. You are free to organize your section the way it fits your needs or your project the best. The section tree is completely independent from workspaces. Their structure is not linked. Still, you can guide users as to where they should publish documents from a specific workspace using the [publication targets]({{page page='setting-publication-targets'}}).

As in workspaces, the access to sections is determined by [access rights]({{page page='document-management-concepts#rights'}}).

The main difference with workspaces is the fact that documents can't be edited in sections. The only actions available on published documents are:

*   [relations actions]({{page page='relations'}}),
*   [annotation actions]({{page page='annotations-and-preview'}}),
*   [tagging]({{page page='tag-cloud'}}),
*   [alerts]({{page page='alerts'}}).

Publishing a document means publishing the version of the document as it is at the time of publication. If you modify the document in the workspace once published, it is not modified in the section. The workspace document can be deleted without the published document to be affected: section readers will still be able to consult the published document, comment it, etc.

Published documents are for consultation only and cannot be modified. If you want to modify a published document, you must modify it in the workspace and then publish the modified version of the document.

When you want to publish a document, you need to submit it to publishing. When the document is submitted to publication, the section's managers can approve the publication submission, that is to say publish the document, or reject it. In that last case, the document is not available in the section. However, it is still available in the workspace. You can modify it and submit it again.