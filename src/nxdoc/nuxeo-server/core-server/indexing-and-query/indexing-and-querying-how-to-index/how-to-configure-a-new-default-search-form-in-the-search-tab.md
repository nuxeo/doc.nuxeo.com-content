---
title: 'HOWTO: Configure a New Default Search Form in the Search Tab'
review:
    comment: ''
    date: '2019-04-16'
    status: ok
details:
    howto:
        excerpt: Learn how to add a new search search
        level: Beginner
        tool: Studio
        topics: 'Content View, Elasticsearch, Query'
labels:
    - content-review-lts2016
    - howto
    - content-view
    - atchertchian
    - query-pageprovider-component
    - search-tab-component
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '4687860'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Configure+a+New+Default+Search+Form+in+the+Search+Tab
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Configure+a+New+Default+Search+Form+in+the+Search+Tab'
    page_id: '20517112'
    shortlink: _BA5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/_BA5AQ'
    source_link: /display/NXDOC/How+to+Configure+a+New+Default+Search+Form+in+the+Search+Tab
tree_item_index: 1300
history:
    -
        author: Solen Guitter
        date: '2015-02-24 15:50'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-12-01 22:22'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-11-19 16:39'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-10-28 11:12'
        message: Add link to Search screen description
        version: '7'
    -
        author: Solen Guitter
        date: '2014-10-28 11:11'
        message: Add link
        version: '6'
    -
        author: Solen Guitter
        date: '2014-10-28 11:10'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-10-27 17:43'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-10-27 17:41'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2014-10-27 17:40'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2014-10-23 19:19'
        message: ''
        version: '1'
---

Updating a new default search form basically consists in disabling the default search and create a new one, based upon your requirements.

To set a new search form that will replace the Default search form displayed when you click on the Search tab:

1. In Nuxeo Studio Designer, **disable the default search** in **UI** > **Drawer** > **Drawer Items** > defaultSearchMenuPage.
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/How to Configure a New Default Search Form in the Search Tab/disable-default-search.png
    name: disable-default-search.png
    1.1.3#screenshot#up_to_date
--}}
![disable-default-search.png](nx_asset://b567178b-f8f9-4337-842e-29324509cd84 ?w=650,border=true)
2. In Nuxeo Studio Modeler, go to **Configuration** > **Page Providers**, to create a **new Page Provider**.
3. Generate the corresponding **form and result layouts** in Nuxeo Studio Designer, following the [How to Configure Searches]({{page page='web-ui-search'}}) tutorial.
4. Save and [deploy]({{page space='studio' page='deploying-your-project-in-dev-mode'}}).
&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Configure a Search Filter With Facets and Other Aggregates]({{page page='how-to-configure-a-search-filter-with-facets-and-other-aggregates'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Search screen in Nuxeo Studio]({{page space='studio' page='search-advanced-search'}})

{{/panel}}</div></div>
