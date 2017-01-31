---
title: Saved Searches
review:
    comment: ''
    date: ''
    status: ok
labels:
    - saved-search
    - last-review-20141120
    - search
toc: true
confluence:
    ajs-parent-page-id: '21299500'
    ajs-parent-page-title: Searching the Nuxeo Platform
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Saved+Searches
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Saved+Searches'
    page_id: '21299445'
    shortlink: 9QBFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/9QBFAQ'
    source_link: /display/USERDOC60/Saved+Searches
history:
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

When you save a search, you save its criteria. This means that the results displayed when you reuse the search may be different from the results at the time you saved the search, as the content of the application may (and probably will) have changed.

You can save as many searches you need. Saved searches are available in the Search tab drop down list. To load a search, just click on it in the list, it is automatically executed.

**To save a search:**

1.  Run a search.
2.  Click on the **Save search** button.
    The Save this search window pops up.
    ![]({{file name='save-search-popup.png'}} ?w=350,border=true)
3.  Give your search a name and click on **Save**.
    Your search is now available in the Search tab drop down list, in the Saved searches category.
    ![]({{file name='saved-search-list.png'}} ?w=200,border=true,thumbnail=true)
    It is also available from the **Searches** tab of your **Home**.
    ![]({{file name='home-searches-tab.png'}} ?w=600,border=true)

## Sharing a Saved Search

It is currently not possible to share a saved search.

## Deleting a Saved Search

You can manage your saved searches from the Searches tab of your Home.

**To delete a saved search:**

1.  In your Home, click on the **Searches** tab.
2.  Select the search to be deleted using the checkbox.
3.  Click on the displayed **Delete** button.
4.  Confirm deletion.
    The search is not available anymore from the Search tab.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='More in User Documentation'}}

- [Default Search]({{page page='default-search'}})
- [Quick Search]({{page page='quick-search'}})
- [Searching the Nuxeo Platform]({{page page='searching-the-nuxeo-platform'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Configuring and Customizing Search '}}

- [Indexing and Querying How-To Index]({{page space='nxdoc60' page='indexing-and-querying-how-to-index'}})
- [Full-Text Queries]({{page space='nxdoc60' page='full-text-queries'}})
- [Indexing and Query]({{page space='nxdoc60' page='indexing-and-query'}})

{{/panel}}</div></div>
