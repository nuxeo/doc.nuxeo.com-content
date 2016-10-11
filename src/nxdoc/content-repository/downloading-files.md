---
title: Downloading Files
review:
    comment: ''
    date: ''
    status: ok
labels:
    - url
confluence:
    ajs-parent-page-id: '22380905'
    ajs-parent-page-title: Content Repository
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Downloading+Files
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Downloading+Files'
    page_id: '22380588'
    shortlink: LIBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/LIBVAQ'
    source_link: /display/NXDOC60/Downloading+Files
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 15:32'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2014-12-03 15:32'
        message: JSF only content was moved on page URLs for Files
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-07-01 14:30'
        message: ''
        version: '6'
    - 
        author: Vincent Dutat
        date: '2014-02-13 01:59'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-10-21 14:17'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2013-10-18 01:04'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-10-17 11:38'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2013-10-16 17:08'
        message: ''
        version: '1'

---
{{! excerpt}}

This page provides the logic for building the correct URL for downloading a file stored on a Nuxeo Document, provided we know the document ID.

{{! /excerpt}}

You can use the&nbsp;`nxbigfile`&nbsp;pattern that is executed by a standalone servlet:

*   <pre>http://127.0.0.1:8080/nuxeo/nxbigfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/file:content/rm.pdf</pre>

*   <pre>http://127.0.0.1:8080/nuxeo/nxbigfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/blobholder:0/rm.pdf</pre>

*   <pre>http://127.0.0.1:8080/nuxeo/nxbigfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/files:files/0/file/SC-DM-DAM.png</pre>

*   <pre>http://127.0.0.1:8080/nuxeo/nxbigfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/blobholder:1/SC-DM-DAM.png</pre>

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other Documentation About URLs'}}

*   [Default URL Patterns]({{page page='default-url-patterns'}})
*   [URLs for Files]({{page page='urls-for-files'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>