---
title: Document access tracking
labels:
    - access-tracking
confluence:
    ajs-parent-page-id: '16092550'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Document+access+tracking
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Document+access+tracking'
    page_id: '16092597'
    shortlink: tY31
    shortlink_source: 'https://doc.nuxeo.com/x/tY31'
    source_link: /display/USERDOC58/Document+access+tracking
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 09:58'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-11-18 17:54'
        message: ''
        version: '2'
    - 
        author: Vladimir Pasquier
        date: '2013-10-31 17:39'
        message: ''
        version: '1'

---
{{! excerpt}}

The [Document access tracking package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/audit-web-access) is used to register in the document's history the fact that users have accessed the document, and so have probably read it.

{{! /excerpt}}

It adds actions done by the server. You do not have any action to do so the access to documents is logged.
Just like there is a new line in the event log every time the document is modified, there will be a line added when users click on the document to consult it.

In this **History** tab, when a user clicks on the document, a new event is registered, called "Access". It is indicated the user who opened the document and the date and time at which he/she accessed it.

![]({{file name='MP-document-access-package.png'}} ?w=650,border=true)

&nbsp;