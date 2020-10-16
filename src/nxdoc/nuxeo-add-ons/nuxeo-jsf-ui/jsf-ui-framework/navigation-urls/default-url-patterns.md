---
title: Default URL Patterns
review:
    comment: ''
    date: '2019-10-21'
    status: ok
labels:
    - content-review-lts2016
    - url
    - url-codec-component
    - atchertchian
    - blob-manager-component
    - excerpt
    - content-review-lts2017
    - jsf-ui
confluence:
    ajs-parent-page-id: '7209351'
    ajs-parent-page-title: Navigation URLs
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Default+URL+Patterns
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Default+URL+Patterns'
    page_id: '14257168'
    shortlink: EIzZ
    shortlink_source: 'https://doc.nuxeo.com/x/EIzZ'
    source_link: /display/NXDOC/Default+URL+Patterns
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2016-08-31 15:13'
        message: ''
        version: '13'
    -
        author: Anahide Tchertchian
        date: '2015-12-08 11:10'
        message: update for LTS 2015
        version: '12'
    -
        author: Solen Guitter
        date: '2014-01-23 18:24'
        message: ''
        version: '11'
    -
        author: Julien Carsique
        date: '2013-12-06 18:18'
        message: ''
        version: '10'
    -
        author: Anahide Tchertchian
        date: '2013-12-06 18:00'
        message: add link to explorer
        version: '9'
    -
        author: Anahide Tchertchian
        date: '2013-12-04 17:42'
        message: better title
        version: '8'
    -
        author: Anahide Tchertchian
        date: '2013-12-04 17:41'
        message: remove WIP info
        version: '7'
    -
        author: Anahide Tchertchian
        date: '2013-12-04 17:40'
        message: remove webengine site URLs
        version: '6'
    -
        author: Solen Guitter
        date: '2013-09-06 17:58'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2013-09-06 10:39'
        message: Added related topics
        version: '4'
    -
        author: Julien Carsique
        date: '2013-09-05 15:03'
        message: ''
        version: '3'
    -
        author: Thierry Martins
        date: '2013-07-31 13:07'
        message: ''
        version: '2'
    -
        author: Thierry Martins
        date: '2013-07-31 12:25'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}
{{! excerpt}}

This page introduces the URLs used in Nuxeo Platform and tries to bind them to services/addons.

{{! /excerpt}}

URLs:

-  `/nuxeo/nxdoc`: navigation by document ID in Workspace tab
-   `/nuxeo/nxpath`: navigation by document path in Workspace tab
-   `/nuxeo/nxfile`: URL to download a file
-   `/nuxeo/nxbigfile`: URL to download big files or automatic switch from nxfile if file size > 5 MB (default value)
-   `/nuxeo/nxhome`: navigation under Home tab
-   `/nuxeo/nxadmin`: navigation under Admin tab
-   `/nuxeo/nxsearch`: navigation under Search tab
-   `/nuxeo/nxdam`: navigation in DAM (when the DAM Nuxeo Package is installed)

The [complete list of contributions](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.ui.web.rest.URLService--urlpatterns) can be browsed on the explorer.

Other URLs exposed by WebEngine module are of the form `/nuxeo/site/*` (where * is a service offered by a WebEngine module), please refer to [Default WebEngine Applications]({{page page='default-webengine-applications'}}) for the list of corresponding URLs.

Other URLs:

*   `/nuxeo/atom/cmis` : CMIS service

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other URL related documentation'}}

*   [URLs for Files]({{page page='urls-for-files'}})
*   [Navigation URLs]({{page page='navigation-urls'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
