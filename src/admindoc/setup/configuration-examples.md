---
title: Configuration Examples
review:
    comment: ''
    date: ''
    status: ok
labels:
    - configuration
    - port
    - content-review-lts2015
    - last-review-20141126
toc: true
confluence:
    ajs-parent-page-id: '27604704'
    ajs-parent-page-title: Setup
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: Configuration+Examples
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC710/Configuration+Examples'
    page_id: '27604686'
    shortlink: zjalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/zjalAQ'
    source_link: /display/ADMINDOC710/Configuration+Examples
history:
    - 
        author: Solen Guitter
        date: '2015-12-15 14:48'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2015-12-15 10:40'
        message: Don't use default values anymore
        version: '19'
    - 
        author: Solen Guitter
        date: '2015-12-15 10:32'
        message: >-
            Add missing nuxeo.server.ajp.port and
            nuxeo.server.tomcat_admin.port 
        version: '18'
    - 
        author: Solen Guitter
        date: '2015-11-09 15:44'
        message: 'Remove Live Edit '
        version: '17'
    - 
        author: Solen Guitter
        date: '2015-09-07 14:48'
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

{{#> callout type='tip' }}

The use of the [nuxeo.conf file]({{page page='configuration-parameters-index-nuxeoconf'}}) is highlighted in the steps below. However, you can also change parameters from the **Admin** > **System Information** > **Setup** tab, in the **Advanced Setup**.

{{/callout}}

## Changing the Default Port (8080)

Nuxeo applications run on the 8080 port by default. As it may be used by another application, you may need to change it.

1.  Stop your server.
2.  Edit your nuxeo.conf file.
3.  Add the parameters below if they are not already defined in the nuxeo.conf file. Change values if needed.

    *   `nuxeo.server.http.port=8180`
    *   `nuxeo.server.ajp.port=8109`
    *   `nuxeo.server.tomcat_admin.port=8105`
4.  Save and start your server.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in this documentation'}}

*   [Configuration Parameters Index (nuxeo.conf)]({{page page='configuration-parameters-index-nuxeoconf'}})
*   [Admin Tab Overview]({{page page='admin-tab-overview'}})
*   [Recommended Configurations]({{page page='recommended-configurations'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

&nbsp;

</div></div>