---
title: Downloading Files
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
    - url
    - blob-storage
    - blob-manager-component
    - fguillaume
    - excerpt
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '950287'
    ajs-parent-page-title: Content Repository
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Downloading+Files
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Downloading+Files'
    page_id: '16091110'
    shortlink: 5of1
    shortlink_source: 'https://doc.nuxeo.com/x/5of1'
    source_link: /display/NXDOC/Downloading+Files
tree_item_index: 600
history:
    -
        author: Solen Guitter
        date: '2016-08-31 15:33'
        message: ''
        version: '9'
    -
        author: Florent Guillaume
        date: '2015-10-13 14:29'
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

This page describes the logic for building the correct URL to download a file stored on a Nuxeo Document.

{{! /excerpt}}

The structure of a download URL is made of:

*   The server URL: `http://127.0.0.1:8080/nuxeo`
*   The download servlet: `nxfile` (note that `nxbigfile` is also accepted for compatibility with older versions)
*   The repository name and document id: `default/776c8640-7f19-4cf3-b4ff-546ea1d3d496`
*   An optional file designator, either using a blobholder index, or an explicit blob property name (`blobholder:0`, `blobholder:1`, `file:content`, `files:files/0/file`, etc.)
*   An optional filename, to force the name under which you want the file to be downloaded
*   An optional `?inline=true` parameter to force the download to be made with `Content-Disposition: inline`, which means that the content will be displayed in the browser (if possible) instead of being download.

Here are some examples:

*   The main file of the document:
    `http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496`
*   The main file of the document with a different name:
    `http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/blobholder:0/mydocument.pdf`
*   An attached file of the document:
    `http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/blobholder:1`
*   A file stored in the given property:
    `http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/myschema:content`
*   A file stored in the given complex property, downloaded with a specific filename:
    `http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/files:files/0/file/myimage.png`
*   The main file of the document inside the browser instead of being downloaded:
    `http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496?inline=true`

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other Documentation About URLs'}}

- [Default URL Patterns]({{page page='default-url-patterns'}})
- [URLs for Files]({{page page='urls-for-files'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
