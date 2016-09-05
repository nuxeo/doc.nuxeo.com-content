---
title: Using Nuxeo Gadgets from Other Applications
labels:
    - gadgets
confluence:
    ajs-parent-page-id: '16092624'
    ajs-parent-page-title: Browsing Content in Document Management
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Using+Nuxeo+Gadgets+from+Other+Applications
    canonical_source: >-
        https://doc.nuxeo.com/display/USERDOC58/Using+Nuxeo+Gadgets+from+Other+Applications
    page_id: '16092660'
    shortlink: 9I31
    shortlink_source: 'https://doc.nuxeo.com/x/9I31'
    source_link: /display/USERDOC58/Using+Nuxeo+Gadgets+from+Other+Applications
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 13:01'
        message: ''
        version: '25'
    - 
        author: Solen Guitter
        date: '2013-10-17 18:21'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '24'
    - 
        author: Solen Guitter
        date: '2013-10-17 18:21'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '23'
    - 
        author: Solen Guitter
        date: '2013-10-17 18:21'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '22'
    - 
        author: Solen Guitter
        date: '2013-10-17 18:21'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '21'
    - 
        author: Solen Guitter
        date: '2013-10-17 18:21'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '20'
    - 
        author: Solen Guitter
        date: '2013-10-17 18:21'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '19'
    - 
        author: Solen Guitter
        date: '2013-10-17 18:21'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-10-17 18:20'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-10-17 18:20'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-09-30 16:19'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2012-09-20 17:46'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '14'
    - 
        author: Solen Guitter
        date: '2012-09-20 17:46'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '13'
    - 
        author: Solen Guitter
        date: '2012-09-20 17:46'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '12'
    - 
        author: Solen Guitter
        date: '2012-09-20 17:46'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '11'
    - 
        author: Solen Guitter
        date: '2012-09-20 17:46'
        message: Migrated to Confluence 4.0
        version: '10'
    - 
        author: Solen Guitter
        date: '2012-09-20 17:46'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-09-20 10:52'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2012-06-18 18:05'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2012-06-18 17:52'
        message: Added related content
        version: '6'
    - 
        author: Solen Guitter
        date: '2012-06-14 09:50'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-11-23 10:00'
        message: Removed 5.4 references
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-06-06 12:22'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-06-06 10:59'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2011-06-01 16:21'
        message: ''
        version: '1'

---
When the Document Management module is installed on the Nuxeo Platform, it is possible to use Nuxeo gadgets in other applications, such as iGoogle.

This takes 2 steps, to make this work:

1.  your administrator must [authorize the external application to access the Nuxeo Platform](#authorizing-an-external-application-to-access-nuxeo-dm),
2.  you can [add the Nuxeo gadget on the external application](#adding-the-nuxeo-gadget-in-the-external-application).

In this page, we will take the example of iGoogle, which is a pretty easy example. For more complex use cases, you can report to the page [Using OAuth]({{page space='admindoc58' page='using-oauth'}}).

## Authorizing an External Application to Access the Nuxeo Platform

Before users can use the Nuxeo Platform gadgets in another application, the administrator must authorize this application to access Nuxeo content.

{{!-- unmigrated-inline-wiki-markup: {multi-excerpt-include:Managing authentication with other applications|name=iGoogle_OAuth_steps|nopanel=true} --}}

## Adding the Nuxeo Gadget in the External Application

**Add a Nuxeo gadget in an external application:**

1.  In Nuxeo, go on your dashboard, available in the **Home** tab.
2.  Click on the **Add gadget** button.
3.  Copy the URL of the gadget you want to use in iGoogle.
    ![]({{file name='dashboard-gadgetURL.png'}} ?w=650,border=true)
4.  In the external application, add a new gadget that has the Nuxeo Platform gadget URL. On iGoogle:
    1.  On iGoogle home, click on **Add gadgets**.
    2.  On the gadget selection page, click on **Add feed or gadget**.
    3.  Paste the Nuxeo gadget URL and click on the **Add** button.
        ![]({{file name='DM-542_igoogle_add_gadget.png'}} ?border=true)
        The Nuxeo gadget is now available from your iGoogle page.
        iGoogle is available in the "Authorized Applications" tab of your home, so you can set how long iGoogle can access the Nuxeo Platform content.

&nbsp;