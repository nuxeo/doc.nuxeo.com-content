---
title: Nuxeo DuoWeb Two-Factor Authentication
review:
    comment: ''
    date: ''
    status: ok
labels:
    - content-review-lts2015
    - duo-web-authentication-addon
confluence:
    ajs-parent-page-id: '28475782'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Nuxeo+DuoWeb+Two-Factor+Authentication
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC710/Nuxeo+DuoWeb+Two-Factor+Authentication
    page_id: '28475674'
    shortlink: GoGyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/GoGyAQ'
    source_link: /display/NXDOC710/Nuxeo+DuoWeb+Two-Factor+Authentication
history:
    - 
        author: Solen Guitter
        date: '2015-12-22 17:25'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-10-27 14:01'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2014-10-27 13:36'
        message: ''
        version: '5'
    - 
        author: Vladimir Pasquier
        date: '2014-10-27 12:07'
        message: ''
        version: '4'
    - 
        author: Vladimir Pasquier
        date: '2014-10-27 12:06'
        message: ''
        version: '3'
    - 
        author: Vladimir Pasquier
        date: '2014-10-27 12:06'
        message: ''
        version: '2'
    - 
        author: Vladimir Pasquier
        date: '2014-10-27 11:57'
        message: ''
        version: '1'

---
{{! excerpt}}

The Nuxeo addon nuxeo-duoweb-authentication is an integration of [DuoWeb](http://www.duosecurity.com) access in Nuxeo login plugin and provides two-factor authentication through the Nuxeo login page.

This plugin is available for Nuxeo Platform 5.8 and above.

{{! /excerpt}} {{#> callout type='info' heading='Configuration'}}

Please refer to this [README](https://github.com/nuxeo/nuxeo-duoweb-authentication/blob/release-7.10/README.md) to configure and activate the addon on your Nuxeo instance.

{{/callout}}

The two factors authentication is executing the following steps:

1.  Login with your Nuxeo credentials.
    ![]({{file name='img0.png'}} ?w=500)
2.  Bind/Use your Duo application to check identity through your mobile phone.
    ![]({{file name='img.png'}} ?w=500)
3.  Confirm identity authorization with your mobile phone.
    ![]({{file name='img2.png'}} ?w=400,border=true)