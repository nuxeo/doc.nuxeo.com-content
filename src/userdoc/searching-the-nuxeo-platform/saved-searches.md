---
title: Saved Searches
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - search
    - saved-search
    - excerpt
toc: true
confluence:
    ajs-parent-page-id: '2392416'
    ajs-parent-page-title: Searching the Nuxeo Platform
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Saved+Searches
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Saved+Searches'
    page_id: '20519012'
    shortlink: ZBg5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/ZBg5AQ'
    source_link: /display/USERDOC/Saved+Searches
history:
    - 
        author: Manon Lumeau
        date: '2015-11-25 17:07'
        message: eplace "access rights" by "permissions
        version: '8'
    - 
        author: Solen Guitter
        date: '2015-07-27 15:30'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-11-20 14:42'
        message: ''
        version: '6'
    - 
        author: Manon Lumeau
        date: '2014-11-20 11:20'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2014-11-19 18:01'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2014-11-19 18:00'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2014-11-19 17:59'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-11-19 17:53'
        message: ''
        version: '1'

---
{{! excerpt}}

You can save searches done using the default search form and the quick search form, so as to be able to reuse them at anytime. You can run them from the **Search** tab, and manage them from the **Home** > **Searches** tab.

{{! /excerpt}}

NXQL searches cannot be saved.

## Saving a Search

When you save a search, you save its criteria. This means that the results displayed when you reuse the search may be different from the results at the time you saved the search, as the content of the application may (and probably will) have changed. Saved searches also include the results columns and sort criteria selected when the search was saved.

You can save as many searches you need: Click on the **Save as** button when you are satisfied with your query and results. Then give your search a title and confirm save.

![]({{file name='save-search-popup.png'}} ?w=350,border=true)

Saved searches are available in the Search tab drop down list. To load a search, just click on it in the list, it is automatically executed.

![]({{file name='saved-search-list.png'}} ?w=200,border=true,thumbnail=true)

All your saved searches are also available from your Home in the **Searches** tab.

![]({{file name='home-searches-tab.png'}} ?w=600,border=true)

## Sharing a Saved Search

Saved searches are private by default. But you can share them by [giving permissions]({{page page='managing-permissions'}}) on them.

## Deleting a Saved Search

You can manage your saved searches from the **Searches** tab of your Home. Saved searched are deleted like a regular document, by selecting it using the checkbox, clicking the **Delete** button and confirming deletion.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='More in User Documentation'}}

*   [Default Search]({{page page='default-search'}})
*   [Quick Search]({{page page='quick-search'}})
*   [Searching the Nuxeo Platform]({{page page='searching-the-nuxeo-platform'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Configuring and Customizing Search '}}

*   [Indexing and Querying How-To Index]({{page space='nxdoc' page='indexing-and-querying-how-to-index'}})
*   [Full-Text Queries]({{page space='nxdoc' page='full-text-queries'}})
*   [Indexing and Query]({{page space='nxdoc' page='indexing-and-query'}})

{{/panel}}</div></div>