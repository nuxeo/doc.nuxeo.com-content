---
title: Default Search
review:
    comment: ''
    date: '2018-02-26'
    status: ok
labels:
    - search
    - elasticsearch
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '2392416'
    ajs-parent-page-title: Searching the Nuxeo Platform
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Default+Search
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Default+Search'
    page_id: '14255361'
    shortlink: AYXZ
    shortlink_source: 'https://doc.nuxeo.com/x/AYXZ'
    source_link: /display/USERDOC/Default+Search
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2015-07-27 14:29'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2014-11-26 09:35'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2014-11-20 14:22'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2014-11-20 12:04'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2014-11-19 16:57'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2014-11-19 16:44'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2014-03-06 11:18'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-03-06 11:17'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2014-01-20 14:52'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2013-11-29 15:58'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2013-11-13 16:47'
        message: Added screenshots
        version: '16'
    -
        author: Solen Guitter
        date: '2013-10-30 22:48'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2013-10-17 18:18'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2013-09-30 16:39'
        message: Updated icons
        version: '13'
    -
        author: Solen Guitter
        date: '2013-09-30 16:14'
        message: Removed related topics from TOC
        version: '12'
    -
        author: Solen Guitter
        date: '2013-06-21 19:24'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2013-06-21 19:24'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2013-06-21 19:24'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2013-06-21 19:24'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2013-06-21 19:24'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-06-21 19:23'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-06-21 19:23'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2013-06-21 19:06'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2013-06-21 18:57'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2013-06-21 18:54'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2013-06-21 18:54'
        message: ''
        version: '1'

---
The default search enables you to search a document using documents metadata. You can for instance select metadata of the searched document or the date of specific events such as publication, creation.

The default search leverages Elasticsearch to provide a quicker and more efficient search. The search form uses [Elasticsearch aggregates]({{page space='nxdoc' page='how-to-configure-a-search-filter-with-facets-and-other-aggregates'}}) for most fields: aggregate fields values are filtered so as to display only relevant values and show the count of matching documents for each value.

![]({{file name='search-tab.png'}} ?w=600,border=true)

The default search form offers several search criteria, that you can associate to define your search and find documents. Search results use the [thumbnail view]({{page page='browsing-content'}}#browsing-lists-documents) by default. Clicking on a document thumbnail shows its main information pop-up. You can browse to the previous and next documents from that view.

When you associate different criteria, the query is built following this principle:

```sql
SELECT * FROM Document WHERE (criterion1 = value1 OR criterion1 = value2) AND (criterion2 = valueA OR criterion2 = valueB) AND criterion 3 = something
```

**To search documents using detailed criteria:**

1.  Click on the **Search** tab.
2.  Fill in the form with your criteria and if needed click on the **Filter** button.

**Notes about default search fields:**

*   **Collections**, **Tags** and **Text search** do not rely on Elasticsearch aggregates. So they are not pre-filtered depending on already selected search criteria and do not trigger the query.
*   **Path**: The tree displayed is not pre-filtered depending on already selected search criteria, you are always displayed the whole tree (depending on your access rights).
*   **Size**: Folderish documents such as workspaces and folders have a 0 Kb size, whatever their content.

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='More in User Documentation '}}

- [Searching the Nuxeo Platform]({{page page='searching-the-nuxeo-platform'}})
- [Browsing Content]({{page page='browsing-content'}})
- [Quick Search]({{page page='quick-search'}})
- [Saved Searches]({{page page='saved-searches'}})

{{/panel}}
</div>
<div class="column medium-6">
{{#> panel heading='Want to know more?'}}

- [Indexing and Querying How-To Index]({{page space='nxdoc' page='indexing-and-querying-how-to-index'}})
- [Indexing and Query]({{page space='nxdoc' page='indexing-and-query'}})
- [Full-Text Queries]({{page space='nxdoc' page='full-text-queries'}})

{{/panel}}
</div>
</div>
