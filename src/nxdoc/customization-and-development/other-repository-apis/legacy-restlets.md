---
title: Legacy Restlets
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '17334379'
    ajs-parent-page-title: Other Repository APIs
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Legacy+Restlets
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Legacy+Restlets'
    page_id: '17334533'
    shortlink: BYEIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/BYEIAQ'
    source_link: /display/NXDOC58/Legacy+Restlets
history:
    - 
        author: Solen Guitter
        date: '2013-10-21 14:38'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2013-10-20 00:45'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

Restlets used to be the main way of exposing a REST API in Nuxeo. It is no more the case and this module is here for compatibility purpose as some part of the UI still rely on it. You should use the new[ REST API]({{page page='rest-api'}}) if you want to use or extend the REST exposition of Nuxeo.

</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

## Restlets in Nuxeo

The Restlet framework is integrated in Nuxeo since version 5.1 and has been used to expose REST API on top of the Platform. Restlet has been replaced by JAX-RS /Jersey, but Nuxeo still embeds Restlets:

*   Because of lot of "old" REST APIs are still used and works perfectly with Restlets,
*   Because Restlets have been integrated with Seam (so you can easily mix Seam JS and Restlets calls since they share the same server side conversation).

Unlike Content Automation, Restlets in Nuxeo were never targeted at providing a uniform high level API, these are just helpful REST APIs exposed for:

*   Seam Remoting usage,
*   Browser helpers usage,
*   JavaScript usage.

You can see what Rest APIs are exposed via Restlets by looking and the configured Restlets:&nbsp;[http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewExtensionPoint/org.nuxeo.ecm.platform.ui.web.restAPI.service.PluggableRestletService--restlets](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewExtensionPoint/org.nuxeo.ecm.platform.ui.web.restAPI.service.PluggableRestletService--restlets).