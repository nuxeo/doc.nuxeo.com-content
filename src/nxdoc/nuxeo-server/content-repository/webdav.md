---
title: WebDAV
labels:
    - webdav
    - webdav-component
    - multiexcerpt-include
toc: true
confluence:
    ajs-parent-page-id: '950287'
    ajs-parent-page-title: Content Repository
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: WebDAV
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/WebDAV'
    page_id: '950300'
    shortlink: HIAO
    shortlink_source: 'https://doc.nuxeo.com/x/HIAO'
    source_link: /display/NXDOC/WebDAV
history:
    - 
        author: Solen Guitter
        date: '2015-10-15 09:34'
        message: emve related pages (not useful anymore
        version: '13'
    - 
        author: Florent Guillaume
        date: '2015-10-13 14:57'
        message: ''
        version: '12'
    - 
        author: Manon Lumeau
        date: '2015-08-20 15:55'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-09-23 10:56'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-09-23 10:54'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-11-30 12:05'
        message: Migrated to Confluence 4.0
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-11-30 12:05'
        message: Added how to a add a new WebDAV client
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-11-30 11:57'
        message: Added how to a add a new WebDAV client
        version: '6'
    - 
        author: Florent Guillaume
        date: '2011-06-08 16:07'
        message: ''
        version: '5'
    - 
        author: Julien Carsique
        date: '2011-03-24 18:15'
        message: ''
        version: '4'
    - 
        author: Florent Guillaume
        date: '2010-10-15 13:57'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2010-10-15 00:57'
        message: ''
        version: '2'
    - 
        author: Admin name placeholder
        date: '2010-03-01 13:36'
        message: ''
        version: '1'

---
## Functional Overview

{{{multiexcerpt 'functional-overview' page='USERDOC:Working with WebDAV'}}}

## Technical Overview

Nuxeo supports the WebDAV (Web-based Distributed Authoring and Versioning_)_ protocol and thus enables you to create and edit Office documents stored in the Nuxeo Platform directly from you OS desktop, without having to go through your Nuxeo application in a browser.

The documentation about installation and usage of WebDAV can be found [in the Nuxeo Platform User Guide]({{page space='userdoc' page='working-with-webdav'}}).

### Adding a new WebDAV Client

The plugin comes with a default configuration which supports only a few clients among Windows 7's one, litmus, davfs, cadaver. If your usual client is not listed, you can override this configuration by adding a new file `webdav-authentication-config.xml` under `$NUXEO/nxserver/config/` and update the list associated to the header.

Below is an example where BitKinex is added:

```

  org.nuxeo.ecm.platform.wi.auth.config

        (Microsoft-WebDAV-MiniRedir|DavClnt|litmus|gvfs|davfs|WebDAV|cadaver|BitKinex).*

        DIGEST_AUTH
        WEBDAV_BASIC_AUTH

```