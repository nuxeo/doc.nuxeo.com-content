---
title: Enabling Drag and Drop for Internet Explorer
review:
    comment: ''
    date: ''
    status: ok
labels:
    - drag-and-drop
confluence:
    ajs-parent-page-id: '16810056'
    ajs-parent-page-title: Setup
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Enabling+Drag+and+Drop+for+Internet+Explorer
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC58/Enabling+Drag+and+Drop+for+Internet+Explorer
    page_id: '16810022'
    shortlink: JoAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/JoAAAQ'
    source_link: /display/ADMINDOC58/Enabling+Drag+and+Drop+for+Internet+Explorer
history:
    - 
        author: Solen Guitter
        date: '2016-08-30 12:49'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-10-18 15:36'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-10-18 15:35'
        message: Added link to NXP issue
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-10-18 15:04'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-10-18 15:03'
        message: ''
        version: '1'

---
Since Tomcat 7, drag and drop doesn't work on Internet Explorer because of a security option enabled by default. Indeed Tomcat [prevents cookies access from JavaScript](http://tomcat.apache.org/migration-7.html#Session_cookie_configuration) (see [NXP-12202](https://jira.nuxeo.com/browse/NXP-12202) for details). Here is a workaround to enable drag and drop on this browser.

1.  Make sure the server is stopped.
2.  Edit the file `$TOMCAT/conf/context.xml`: add `useHttpOnly="false"` on Context element.

3.  Start the server.

    Users can now [use the Internet Explorer drag and drop extension]({{page space='userdoc58' page='working-using-drag-and-drop'}}).

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Drag and Drop Compatibility Table]({{page space='userdoc58' page='drag-and-drop-compatibility-table'}})
*   [Working Using Drag and Drop]({{page space='userdoc58' page='working-using-drag-and-drop'}})
*   [Drag and Drop Service for Content Capture (HTML5-Based)]({{page space='nxdoc58' page='drag-and-drop-service-for-content-capture-html5-based'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>