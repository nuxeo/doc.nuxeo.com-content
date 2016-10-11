---
title: Default URL Patterns
review:
    comment: ''
    date: ''
    status: ok
labels:
    - url
confluence:
    ajs-parent-page-id: '17334426'
    ajs-parent-page-title: Navigation URLs
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Default+URL+Patterns
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Default+URL+Patterns'
    page_id: '17334323'
    shortlink: M4AIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/M4AIAQ'
    source_link: /display/NXDOC58/Default+URL+Patterns
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 15:11'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2014-01-23 18:23'
        message: Formatting
        version: '8'
    - 
        author: Solen Guitter
        date: '2014-01-22 17:58'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-01-22 17:57'
        message: ''
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
{{! excerpt}}

This page introduces the URLs used in Nuxeo Platform and tries to bind them to services/addons.

{{! /excerpt}}

URLs:

*   `/nuxeo/nxdoc`: navigation by document ID in Document Management
*   `/nuxeo/nxpath`: navigation by document path in Document Management
*   /`nuxeo/nxfile`: URL to download a file
*   `/nuxeo/nxbigfile`: URL to download big files or automatic switch from nxfile if file size > 5 MB (default value)
*   `/nuxeo/nxhome`: navigation under Home tab
*   `/nuxeo/nxcollab`: navigation in Social Collaboration
*   `/nuxeo/nxdam`: navigation in DAM
*   `/nuxeo/nxadmin`: navigation in Admin Center

The [complete list of contributions](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewExtensionPoint/org.nuxeo.ecm.platform.ui.web.rest.URLService--urlpatterns) can be browsed on the explorer.

Other URLs exposed by WebEngine module are of the form `/nuxeo/site/*` (where * is a service offered by a WebEngine module), please refer to&nbsp;[Default WebEngine Applications]({{page page='default-webengine-applications'}}) for the list of corresponding URLs.

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