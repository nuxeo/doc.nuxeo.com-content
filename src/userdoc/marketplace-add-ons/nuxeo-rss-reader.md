---
title: Nuxeo RSS Reader
labels:
    - rss-reader
toc: true
confluence:
    ajs-parent-page-id: '21299463'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Nuxeo+RSS+Reader
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Nuxeo+RSS+Reader'
    page_id: '21299440'
    shortlink: 8ABFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/8ABFAQ'
    source_link: /display/USERDOC60/Nuxeo+RSS+Reader
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 15:26'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2016-01-18 13:49'
        message: ''
        version: '22'
    - 
        author: Manon Lumeau
        date: '2014-12-05 18:14'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2014-06-30 14:57'
        message: ''
        version: '20'
    - 
        author: Manon Lumeau
        date: '2014-06-17 17:40'
        message: ''
        version: '19'
    - 
        author: Manon Lumeau
        date: '2014-06-17 17:17'
        message: ''
        version: '18'
    - 
        author: Manon Lumeau
        date: '2014-06-17 17:11'
        message: ''
        version: '17'
    - 
        author: Manon Lumeau
        date: '2014-06-17 16:03'
        message: ''
        version: '16'
    - 
        author: Manon Lumeau
        date: '2014-06-17 15:56'
        message: ''
        version: '15'
    - 
        author: Manon Lumeau
        date: '2014-06-17 15:47'
        message: ''
        version: '14'
    - 
        author: Manon Lumeau
        date: '2014-06-17 15:46'
        message: ''
        version: '13'
    - 
        author: Manon Lumeau
        date: '2014-06-17 15:43'
        message: ''
        version: '12'
    - 
        author: Manon Lumeau
        date: '2014-06-17 15:40'
        message: ''
        version: '11'
    - 
        author: Manon Lumeau
        date: '2014-06-17 14:41'
        message: ''
        version: '10'
    - 
        author: Manon Lumeau
        date: '2014-06-17 14:19'
        message: ''
        version: '9'
    - 
        author: Manon Lumeau
        date: '2014-06-17 12:05'
        message: ''
        version: '8'
    - 
        author: Manon Lumeau
        date: '2014-06-12 18:03'
        message: ''
        version: '7'
    - 
        author: Manon Lumeau
        date: '2014-06-12 17:29'
        message: ''
        version: '6'
    - 
        author: Manon Lumeau
        date: '2014-06-12 16:39'
        message: ''
        version: '5'
    - 
        author: Manon Lumeau
        date: '2014-06-12 15:57'
        message: ''
        version: '4'
    - 
        author: Manon Lumeau
        date: '2014-06-11 18:17'
        message: ''
        version: '3'
    - 
        author: Manon Lumeau
        date: '2014-05-27 16:51'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-10-25 10:03'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DeprecatedAddOn_6.0' page='NXDOC60:Generic Multi-Excerpts'}}}

{{! excerpt}}

<span style="color: rgb(0,0,0);">[Nuxeo RSS Reader](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-rss-reader)&nbsp;is a Nuxeo add-on which provides&nbsp;<span style="color: rgb(0,0,0);">an OpenSocial gadget displaying RSS feeds.</span></span>

{{! /excerpt}}

It enables users to display the latest news of their favorite newspapers on their home page.&nbsp;

{{#> callout type='info' }}

In order to be able to download and to use RSS Reader correctly, you need to install the Nuxeo Document Management module.

{{/callout}}

## Configuring Available RSS Feeds

As an admin user you can predefine a list of RSS feeds for final users in order to propose a user-friendly list of choices.

### Adding a RSS Feed

1.  From the **RSS Feed** tab in the Admin Center, click on&nbsp;**Create RSS Feed**.
2.  Fill in the page with the title and the RSS Feed address.&nbsp;
3.  Click on&nbsp;**Create**.
    The RSS feed is added to the list.&nbsp;
    ![]({{file name='rss-reader-tab.png'}} ?w=650,border=true)

### <span style="color: rgb(0,0,0);">Managing the RSS Feeds</span>

Once your list of feeds is created, you can decide which news you want to display first.&nbsp;

1.  Select the RSS feed that you want to move using the&nbsp;check boxes on the documents list.
2.  Click on **Move to top** or **Move to bottom.&nbsp;**

### Removing a RSS Feed

1.  From the **RSS Feed** tab in the Admin Center, select the feed that you want to remove&nbsp;using the&nbsp;check boxes.
    ![]({{file name='rss-reader-delete.png'}} ?w=650,h=187,border=true)
2.  Click on **Delete**.
    A window appears.&nbsp;
3.  Click on **OK** to confirm.
    The feed is deleted.
    ![]({{file name='rss-reader-deleted.png'}} ?w=650,h=184,border=true)

## Using RSS Feeds on Your Dashboard

Even if you are not an admin user, you can manage your RSS feeds.&nbsp;

### Adding the RSS Reader Gadget

1.  From your home page, click on **Add gadget**.
2.  Select **RSS Reader** in the list of available gadgets.&nbsp;
    ![]({{file name='DM-dashboard_add_gadget.png' space='userdoc58' page='dashboard'}} ?w=650,border=true)
    The gadget appears on your home page.

### Using the Defined RSS Feeds

1.  Click on **Settings** in the RSS Reader gadget.
2.  Select the feed you want by clicking on **Select a defined feed.**
    **![]({{file name='select-defined-feed.png'}} ?w=650,h=130,border=true)
    **
3.  Click on **Subscribe** to confirm.
    The feed appears in the list of feeds received.&nbsp;
    ![]({{file name='list-received-feeds.png'}} ?w=650,h=150,border=true)

### Creating a New RSS Feed

If the feed you want is not already defined, you can add it by yourself.&nbsp;

1.  Click on&nbsp;**Settings**&nbsp;in the RSS Reader gadget.
2.  Enter the RSS address of the feed and give it a title.
    ![]({{file name='enter-own-feed.png'}} ?w=650,border=true)
3.  Click on **Subscribe** to confirm.
    The feed is saved and available on your home page.
    ![]({{file name='save-own-feed.png'}} ?w=650,border=true)
4.  Close the settings window.&nbsp;
    The latest news appear on your home page.
    ![]({{file name='home-bbc-feed.png'}} ?w=650,border=true)

### Removing a RSS Feed

1.  Click on&nbsp;**Settings**&nbsp;in the RSS Reader gadget.
2.  Click on **Unsubscribe&nbsp;**next to the feed that you want to delete.&nbsp;
    ![]({{file name='list-feeds-home.png'}} ?w=650,border=true)
3.  Click on **OK&nbsp;**to confirm.&nbsp;
    The feed is deleted.
    ![]({{file name='deleted-feeds-home.png'}} ?w=650,border=true)

&nbsp;

* * *