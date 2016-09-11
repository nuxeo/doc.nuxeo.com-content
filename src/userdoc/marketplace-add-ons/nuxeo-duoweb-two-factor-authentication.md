---
title: Nuxeo DuoWeb Two-Factor Authentication
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '21299463'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Nuxeo+DuoWeb+Two-Factor+Authentication
    canonical_source: >-
        https://doc.nuxeo.com/display/USERDOC60/Nuxeo+DuoWeb+Two-Factor+Authentication
    page_id: '21299512'
    shortlink: OAFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/OAFFAQ'
    source_link: /display/USERDOC60/Nuxeo+DuoWeb+Two-Factor+Authentication
history:
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

The Nuxeo addon nuxeo-duoweb-authentication is an integration of [DuoWeb](http://www.duosecurity.com) access in Nuxeo login plug-in and provides two-factor authentication through the Nuxeo login page.

This plug-in is available for Nuxeo Platform 5.8 and above.

{{! /excerpt}} {{#> callout type='info' heading='Configuration'}}

Please refer to this [README](https://github.com/nuxeo/nuxeo-duoweb-authentication/blob/release-6.0/README.md) to configure and activate the add-on on your Nuxeo instance.

{{/callout}}

The two factors authentication is executing the following steps:

1.  Login with your Nuxeo credentials
    ![]({{file name='img0.png'}} ?w=500)
2.  Bind/Use your Duo application to check identity through your mobile phone:
    ![]({{file name='img.png'}} ?w=500)
3.  Confirm identity authorization with your mobile phone:
    ![]({{file name='img2.png'}} ?w=500)