---
title: User Preferences
review:
    comment: ''
    date: '2018-02-27'
    status: ok
labels:
    - preferences
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '7536681'
    ajs-parent-page-title: User Home
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: User+Preferences
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/User+Preferences'
    page_id: '11043664'
    shortlink: UIOo
    shortlink_source: 'https://doc.nuxeo.com/x/UIOo'
    source_link: /display/USERDOC/User+Preferences
history:
    -
        author: Solen Guitter
        date: '2015-12-01 15:42'
        message: ix page layou
        version: '12'
    -
        author: Solen Guitter
        date: '2015-08-24 16:24'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2014-10-30 00:15'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2013-10-30 19:51'
        message: Updated screenshots for 5.8
        version: '9'
    -
        author: Solen Guitter
        date: '2013-10-17 16:20'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2013-01-15 10:24'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2012-11-12 11:53'
        message: Added user menu and preferences tab screenshots
        version: '6'
    -
        author: Antoine Taillefer
        date: '2012-07-30 14:24'
        message: Migrated to Confluence 4.0
        version: '5'
    -
        author: Antoine Taillefer
        date: '2012-07-30 14:24'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2012-07-30 14:21'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2012-07-27 15:28'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2012-07-27 14:01'
        message: ''
        version: '1'

---
Users can set some preferences that will be used instead of the default browser's default language and the server's time.

User preferences are easily accessible:

*   from the user menu,
    ![]({{file name='user-menu.png'}} ?w=400,border=true)
*   from the [Home]({{page page='user-home'}}) tab.
    ![]({{file name='users-preferences.png' page='nuxeo-platform-concepts'}} ?w=650,border=true)

## Setting the Language of the Application

By default, when the user browses a web page, the language selected is the browser's default language. However, users may want to browse the content of the Nuxeo Platform in another language without having to select a language every time they log in (which was what they had to do until the version 5.6). The language also determines the formatting of dates (in the history for instance), since dates are not always formatted the same way. For instance, in English dates are written MM/dd/yyyy while in French the format is dd/MM/yyyy.

The Nuxeo Platform user interface is available in several languages. However, only English and French translations are provided by Nuxeo. Other languages are [contributions from the community]({{page version='' space='nxdoc' page='how-to-translate-the-nuxeo-platform'}}). If some labels are not available in the wished language, the English label is automatically displayed.

**To change the language of the Nuxeo Platform interface:**

1.  Click on the **Preferences** tab in the Home or on the **Preferences** item in the user menu.
2.  In the **Actions** menu in the top right corner, click on **Edit locale settings**.
    ![]({{file name='user-preferences-actions-menu.png'}} ?w=250,border=true)
3.  Select the language you want to use.
    ![]({{file name='user-preferences-locale-settings.png'}} ?w=250,border=true)
4.  Click on **Save**.
    The user interface is immediately displayed in the selected language.

## Setting the Time Zone

The actions done by users on documents are tracked in the document's history, so it's easy to find who did what on a document, and when. Users can be distributed in different places and possibly in countries in different time zone. But they need to be displayed a time that is relevant to them.

By default, the user's time zone is set from the browser's time, which is the same as the computer's, the first time they log on to Nuxeo. Should the user change their computer's time zone, the time zone used by Nuxeo is not updated automatically, because the user might want to keep the previous time zone. If not, they can reset it to use the same as the browser's.

**To reset the time zone:**

1.  Click on the **Preferences** tab in the Home or on the **Preferences** item in the user menu.
2.  In the **Actions** menu in the top right corner, click on **Reset time zone from browser**.
    ![]({{file name='user-preferences-actions-menu.png'}} ?w=250,border=true)
    The time zone used on your user interface is immediately changed and all the times displayed are updated accordingly.
