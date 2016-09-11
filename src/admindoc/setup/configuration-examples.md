---
title: Configuration Examples
review:
    comment: ''
    date: ''
    status: ok
labels:
    - configuration
    - port
    - live-edit
toc: true
confluence:
    ajs-parent-page-id: '16810056'
    ajs-parent-page-title: Setup
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Configuration+Examples
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Configuration+Examples'
    page_id: '16810062'
    shortlink: ToAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/ToAAAQ'
    source_link: /display/ADMINDOC58/Configuration+Examples
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 15:39'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-10-10 16:43'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-10-10 16:42'
        message: Removed related topics from TOC
        version: '10'
    - 
        author: Solen Guitter
        date: '2012-02-02 12:06'
        message: Migrated to Confluence 4.0
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-02-02 12:06'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-12-10 09:24'
        message: Added related content
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-12-10 00:08'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-03-11 17:27'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-03-11 16:50'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-03-08 11:56'
        message: fixed typo
        version: '3'
    - 
        author: Stéphane Lacoin
        date: '2011-02-22 15:36'
        message: ''
        version: '2'
    - 
        author: Stéphane Lacoin
        date: '2011-02-22 14:50'
        message: ''
        version: '1'

---
Here are some configuration use cases:

{{#> callout type='tip' }}

The use of the Admin Center is highlighted in the steps below. However, you can do the same configurations by [editing the `nuxeo.conf` file manually]({{page page='setup#conf-manual-edition'}}).

{{/callout}}

## Changing the Live Edit Default Version Incrementation

When users [edit documents with Live Edit]({{page space='userdoc58' page='working-with-live-edit'}}), the default behavior is that no version incrementation occurs. This default behavior can be changed and you can set what version number should be incremented when users save a document with Live Edit.

**Configure default Live Edit version incrementation:**

1.  In the Admin Center, click on the **Setup** tab of system information section.
2.  In the Advanced Settings, edit the value of the parameter "org.nuxeo.ecm.platform.liveedit.autoversioning" :
    *   `minor` will instruct the server to automatically increment the minor version of the document,
    *   `major` will instruct the server to automatically increment the major version of the document,
    *   `none` will instruct the server to not increment the version of the document (this is the default value).
3.  Click the button **Save**.

## Changing the Default Port (8080)

Nuxeo applications run on the 8080 port by default. As it may be used by another application, you may need to change it.

**Change the default port:**

1.  In the Admin Center, click on the **Setup** tab of system information section.
2.  In the Advanced Settings, edit the value of the parameter "nuxeo.server.http.port".
3.  Click the button **Save**.
4.  Restart the server as indicated on top of the page.

&nbsp;