---
title: Working Using Drag and Drop
review:
    comment: ''
    date: ''
    status: ok
labels:
    - drag-and-drop
confluence:
    ajs-parent-page-id: '16092666'
    ajs-parent-page-title: Working in Workspaces
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Working+Using+Drag+and+Drop
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Working+Using+Drag+and+Drop'
    page_id: '16092639'
    shortlink: '3431'
    shortlink_source: 'https://doc.nuxeo.com/x/3431'
    source_link: /display/USERDOC58/Working+Using+Drag+and+Drop
history:
    - 
        author: Anonymous
        date: '2013-10-22 17:57'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-10-18 15:38'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-10-17 18:05'
        message: 'Update for 5.8: no more Chrome Frame, no more FF extension'
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-06-18 18:40'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-05-27 11:57'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-05-27 11:56'
        message: Added note about Google Chrome Frame
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-02-06 17:48'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-10-18 11:58'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2012-10-18 11:57'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-12-23 12:02'
        message: Migrated to Confluence 4.0
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-12-23 12:02'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-11-23 11:19'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-05-31 17:01'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-05-10 18:39'
        message: fixed broken links
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-04-23 18:20'
        message: ''
        version: '1'

---
The Nuxeo Platform allows the [import of documents from your desktop using drag and drop]({{page page='importing-content-using-drag-and-drop'}}).

{{! multiexcerpt name='drag-and-drop-html5-vs-extension-summary'}}

Drag and drop is based on the HTML 5 standard and is available on all browsers that support the HTML 5 Drag and drop, without extension. Basically, this includes Firefox 3.6+, Chrome10+, Safari 5+.

For other browsers or older versions,&nbsp;you may need to install an extension to enable drag and drop import.

{{! /multiexcerpt}}

Internet Explorer requires the installation of an extension:

*   [Drag & Drop Latest Stable for IE Extension](http://download.nuxeo.org/desktop-integration/drag-drop/msie/Nuxeo-MSIEBrowserExtension-latest-stable.msi) (.msi)
*   [Drag & Drop MSI install helper for Windows 2000](http://download.nuxeo.org/desktop-integration/drag-drop/msie/Nuxeo-MSIEBrowserExtension-latest-stable.exe) (.exe)

{{! multiexcerpt name='warning-drag-and-drop-IE-disabled'}} {{#> callout type='note' heading='Enabling drag and drop on Internet Explorer'}}

Because of server security contraints, drag and drop is not enabled for Internet Explorer by default. See the page [Enabling Drag and Drop for Internet Explorer]({{page space='admindoc58' page='enabling-drag-and-drop-for-internet-explorer'}}) which provides a workaround this contraint.

{{/callout}}{{! /multiexcerpt}}

&nbsp;

&nbsp;