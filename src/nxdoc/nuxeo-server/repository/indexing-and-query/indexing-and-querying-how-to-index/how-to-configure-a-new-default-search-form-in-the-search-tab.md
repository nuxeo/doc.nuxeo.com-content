---
title: How to Configure a New Default Search Form in the Search Tab
review:
    comment: ''
    date: '2017-04-21'
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
{{#> callout type='info' }}
{{{multiexcerpt 'check-jsf-ui-dependency' page='how-to-define-a-new-content-view'}}}
{{/callout}}

Defining a new search form basically consists in defining a new content view that is flagged as a Search content view.

To set a new search form that will replace the Default search form displayed when you click on the Search tab:

1.  In Studio, click on the **Listings & Views** > [**Search** menu item]({{page space='studio' page='search-advanced-search'}}).
2.  Click on the **Create** button to create a new default search.
3.  Configure the base query, the form and the results table, like you would on any other content view (see [How to Define a New Content View]({{page page='how-to-define-a-new-content-view'}})).
4.  Save and [deploy]({{page space='studio' page='deploying-your-project-in-dev-mode'}}).

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Define a New Content View]({{page page='how-to-define-a-new-content-view'}})
- [How to Configure a Search Filter With Facets and Other Aggregates]({{page page='how-to-configure-a-search-filter-with-facets-and-other-aggregates'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Search screen in Nuxeo Studio]({{page space='studio' page='search-advanced-search'}})
- [Content Views in Nuxeo Studio documentation]({{page space='studio' page='content-views'}})
- [Content Views in developer documentation]({{page page='content-views'}})

{{/panel}}</div></div>
