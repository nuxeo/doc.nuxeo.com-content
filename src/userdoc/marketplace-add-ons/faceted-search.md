---
title: Faceted Search
review:
    comment: ''
    date: ''
    status: ok
labels:
    - shared-search
    - faceted-search
    - search
toc: true
confluence:
    ajs-parent-page-id: '21299463'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Faceted+Search
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Faceted+Search'
    page_id: '21299423'
    shortlink: 3wBFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/3wBFAQ'
    source_link: /display/USERDOC60/Faceted+Search
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 14:20'
        message: ''
        version: '29'
    - 
        author: Solen Guitter
        date: '2015-06-30 14:19'
        message: ''
        version: '28'
    - 
        author: Solen Guitter
        date: '2014-12-02 14:36'
        message: ''
        version: '27'
    - 
        author: Solen Guitter
        date: '2014-11-03 22:34'
        message: Add note about deprecation
        version: '26'
    - 
        author: Solen Guitter
        date: '2014-10-29 23:51'
        message: ''
        version: '25'
    - 
        author: Solen Guitter
        date: '2014-10-29 23:39'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2014-10-21 18:58'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2014-03-06 11:16'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2014-02-24 10:48'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2014-01-27 17:31'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2014-01-20 14:50'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2014-01-20 14:50'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-11-29 15:57'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-11-15 14:01'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-11-05 17:09'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-10-30 22:49'
        message: Updated screenshots for 5.8
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-10-30 22:35'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-10-17 18:17'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-09-04 18:13'
        message: Removed related topics from TOC
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-06-24 22:38'
        message: Updated screenshots with 5.7.1 new UI
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-06-21 19:24'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-06-21 19:23'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2013-06-21 19:22'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-06-21 19:22'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-06-21 19:22'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-06-21 19:22'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-06-21 19:06'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-06-21 18:58'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-06-21 18:45'
        message: ''
        version: '1'

---
{{! excerpt}} {{#> callout type='note' }}

This addon is deprecated since Nuxeo Platform 6.0 and has been replaced by the [Search tab]({{page page='default-search'}}).

{{/callout}}

The Faceted search add-on provides a way to browse the whole document repository using visual filters on metadata.

{{! /excerpt}}

You can filter content using:

*   Keywords (full text search based on stemming, see the [ General principles section ]({{page page='searching-the-nuxeo-platform#general-principles'}}) for more details on full text search),
*   Dates (creation and last modification dates),
*   Author,
*   Documents categorization (nature, coverage, subjects of documents),
*   Location of the documents in the folders.

Faceted search is available as a Marketplace add-on. It add a ![]({{file name='facetedSearch.png' page='icons-index'}}) tab of the left hand side of the page in the Workspace tab.

![]({{file name='DM-faceted-search-tab.png'}} ?border=true)

### Searching Documents Using Faceted Search

The faceted search tab offers several criteria to filter the content of the application.

<table><tbody><tr><th colspan="1">Field</th><th colspan="1">Description</th></tr><tr><td colspan="1">Keywords</td><td colspan="1">The keywords field behaves like the simple search field. It makes a full-text search. You can use full-text operators in this field to refine your search.</td></tr><tr><td colspan="1">Dates</td><td colspan="1">

The creation date and modification date criteria have the same behavior. The system will just respectively query the "Created at" and "Last modified at" fields.
These fields enable you to select a time period (from Apr. 19th 2013 to Apr. 23rd 2013 for instance) or just a limit date (from Apr. 19th 2013 or until Apr. 19th 2013 for instance).

{{#> callout type='tip' heading='Time'}}

Date-based search includes the time of the selected day(s). By default, 12:00 pm is selected. This may impact search results, since documents created before or after that time will not be included in the search results. You need to manually change the time to cover a full day.

{{/callout}}</td></tr><tr><td colspan="1">Author</td><td colspan="1">You can select one or several users of the application using the user suggestion field: type at least three characters to make the user search start. If you select several users, the system will search for documents created by any of the selected users.</td></tr><tr><td colspan="1">Nature</td><td colspan="1">You can search for documents that have a specific value in the Nature metadata. You can select one or several values in this search field.</td></tr><tr><td colspan="1">Coverage</td><td colspan="1">You can search documents on their coverage value. You can search on several coverage values. You can also select a 1st level value to search the document that cover Europe, for instance.</td></tr><tr><td colspan="1">Subjects</td><td colspan="1">The Subjects field behaves like the Coverage field.</td></tr><tr><td colspan="1">Path</td><td colspan="1">

You can limit the search to a specific workspaces / section / folder by selecting it in the Folder popup window.

{{#> callout type='tip' heading='Multi-domain Nuxeo instance'}}

If you have several domains (for instance if you use the Social Collaboration or Digital Asset Management modules), note that the Folder popup window will display the tree structure of the domain you are currently browsing. To select folders in several domains, go on the application's root (using the icon ![]({{file name='UpFolder_icon.gif' page='icons-index'}})) before filling in the faceted search form.

{{/callout}}</td></tr></tbody></table>

**To browse the content of the application using faceted search:**

1.  In the Faceted Search tab, fill in the form with the properties of the documents you want to browse.
    For instance, we only want the documents created by user John Doe.
    ![]({{file name='DM-faceted-search-author.png'}} ?w=450,border=true)
2.  Click on the&nbsp;**Go**&nbsp;button.
    The documents that were created by John Doe are displayed in the content part of the page.
    ![]({{file name='DM-faceted-search-results.png'}} ?w=650,border=true)
3.  If needed, edit your filter criteria in the faceted search form that is still available.
    For instance, let's say we only want the documents created by John Doe that are "booklets".
    ![]({{file name='DM-faceted-search-nature.png'}} ?w=200,border=true,thumbnail=true)
4.  Click on the&nbsp;**Go**&nbsp;button again.
    The list of documents that answer to the two criteria filled in is refreshed.
    ![]({{file name='DM-faceted-search-results-2.png'}} ?w=650,border=true)

### Saving Your Faceted Searches

{{! multiexcerpt name='save-faceted-search-intro'}}

With faceted search comes the possibility to save your searches, so you can reuse them at anytime. You can also share these saved searched to make them available for other users.

{{#> callout type='tip' heading='Saving searches limitations'}}

Only faceted searches can be saved.

{{/callout}}{{! /multiexcerpt}}

#### Saving a Search

{{! multiexcerpt name='save-faceted-search'}}

When you save a search, you save the criteria of the search. This means that the results displayed when you reuse the search may be different from the results at the time you saved the search, as the content of the application may (and probably will) have changed.

You can save as many searches you need. Saved searches are available in the drop down list below the "Save this search" box. To load a search, just click on it in the list. It is automatically executed.

{{! /multiexcerpt}}

**To save a search:**

1.  Start a search using the faceted search form.
2.  When you are satisfied with the filter you have done, click on the **Save this search** title on top of the filters.
3.  Give the search a title.
    ![]({{file name='DM-faceted-search-save.png'}} ?w=200,border=true,thumbnail=true)
4.  Click on the&nbsp;**Save**&nbsp;button.
    The search is saved. It is now available in the drop down list so you can run it in one click.
    ![]({{file name='DM-faceted-search-saved-searches.png'}} ?w=200,border=true,thumbnail=true)
    It is also available in the **Saved searches** tab of your **Home**, in the **Faceted searches** tab. You can edit it from there.
    ![]({{file name='saved-searches-tab.png'}} ?w=650,border=true)

#### Sharing a Saved Search

{{! multiexcerpt name='share-saved-search'}}

Saved searches are stored in the **Saved searches** tab of your **Home**. This enables you see them as documents and to edit and share them.

Depending on the modules you use and possible customizations, there can be several tabs in the Saved searches. For instance, if you use the Document Management and Digital Asset Management modules, you will have two tabs: Faceted searches, for DM saved faceted searches, and DAM searches, for DAM saved searches.

**To share a search:**

1.  Go on the relevant **Saved searches** tab in your **Home**.
2.  Click on the search you want to share.
3.  Click on the search **Manage** tab and [give Read access right]({{page page='managing-access-rights'}}) to the users you want to be able to use the search.

{{! /multiexcerpt}}

![]({{file name='saved-search-edit-view.png'}} ?w=650,border=true)

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in this documentation'}}

*   [Smart Search]({{page page='smart-search'}})
*   [Quick Search]({{page page='quick-search'}})
*   [Advanced Search]({{page space='userdoc58' page='advanced-search'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related pages in other documentations'}}

*   [Faceted Search]({{page space='nxdoc60' page='faceted-search'}})

{{/panel}}</div></div>