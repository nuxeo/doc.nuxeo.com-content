---
title: Configuration Examples
review:
    comment: ''
    date: ''
    status: ok
labels:
    - live-edit
    - port
    - configuration
    - last-reviewed-20151215
toc: true
confluence:
    ajs-parent-page-id: '21921866'
    ajs-parent-page-title: Setup
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: Configuration+Examples
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC60/Configuration+Examples'
    page_id: '21921809'
    shortlink: EYBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/EYBOAQ'
    source_link: /display/ADMINDOC60/Configuration+Examples
tree_item_index: 200
version_override:
    'FT': 'nxdoc/configuration-examples'
history:
    -
        author: Solen Guitter
        date: '2015-12-15 14:53'
        message: dd missing nuxeo.server.ajp.port and nuxeo.server.tomcat_admin.por
        version: '17'
    -
        author: Solen Guitter
        date: '2015-09-07 14:53'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2014-11-26 14:15'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2014-10-20 10:26'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2014-05-23 11:14'
        message: ''
        version: '13'
    -
        author: Thierry Martins
        date: '2014-05-22 12:40'
        message: Fix doc
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
This page shows some configuration use cases.

&nbsp;

{{#> callout type='tip' }}

The use of the Admin tab is highlighted in the steps below. However, you can do the same configurations by [editing the `nuxeo.conf` file manually]({{page page='setup#conf-manual-edition'}}).

{{/callout}}

## Changing the Default Port (8080)

Nuxeo applications run on the 8080 port by default. As it may be used by another application, you may need to change it.

**Change the default port:**

1.  In the Admin tab, click on the **Setup** tab of system information section.
2.  In the Advanced Settings, edit the value of the following parameters:
    *   `nuxeo.server.http.port`
    *   `nuxeo.server.ajp.port`
    *   `nuxeo.server.tomcat_admin.port`
3.  Click the button **Save**.
4.  Restart the server as indicated on top of the page.

## Changing the Live Edit Default Version Incrementation

When users [edit documents with Live Edit]({{page space='userdoc60' page='working-with-live-edit'}}), the default behavior is that no version incrementation occurs. This default behavior can be changed and you can set what version number should be incremented when users save a document with Live Edit.

**Configure default Live Edit version incrementation:**

1.  In the Admin tab, click on the **Setup** tab of system information section.
2.  In the Advanced Settings, edit the value of the parameter `org.nuxeo.ecm.platform.liveedit.autoversioning`:
    *   `minor` will instruct the server to automatically increment the minor version of the document,
    *   any other value will not increment the version.
3.  Click the button **Save**.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in this documentation'}}

*   [Admin Tab Overview]({{page page='admin-tab-overview'}})
*   [Recommended Configurations]({{page page='recommended-configurations'}})
*   [Configuration Parameters Index (nuxeo.conf)]({{page page='configuration-parameters-index-nuxeoconf'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

&nbsp;

</div></div>
