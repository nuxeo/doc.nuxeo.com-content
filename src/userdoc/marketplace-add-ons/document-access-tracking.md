---
title: Document Access Tracking
review:
    comment: ''
    date: ''
    status: ok
labels:
    - access-tracking
confluence:
    ajs-parent-page-id: '21299463'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Document+Access+Tracking
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Document+Access+Tracking'
    page_id: '21299448'
    shortlink: _ABFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/_ABFAQ'
    source_link: /display/USERDOC60/Document+Access+Tracking
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 09:59'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-11-15 17:56'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-11-15 17:55'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-11-15 17:55'
        message: Updated for 5.8
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

![]({{file name='MP-document-access-package.png'}} ?w=650,h=287,border=true)

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Document Access Tracking dev documentation]({{page space='nxdoc60' page='document-access-tracking'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>