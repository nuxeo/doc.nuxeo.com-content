---
title: Default Search
review:
    comment: ''
    date: ''
    status: ok
labels:
    - elasticsearch
    - last-review-20141120
    - search
confluence:
    ajs-parent-page-id: '21299500'
    ajs-parent-page-title: Searching the Nuxeo Platform
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Default+Search
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Default+Search'
    page_id: '21299425'
    shortlink: 4QBFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/4QBFAQ'
    source_link: /display/USERDOC60/Default+Search
history:
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
The default search enables you to search a document using documents metadata. You can for instance select metadata of the searched document or the date of specific events such as publication, creation. You can also&nbsp;[customize what information is displayed in the search results](#customizing-search-results).

The default search leverages Elasticsearch to provide a quicker and more efficient search. The search form uses [Elasticsearch aggregates]({{page space='nxdoc60' page='how-to-configure-a-search-filter-with-facets-and-other-aggregates'}}) for most fields: aggregate fields values are filtered so as to display only relevant values and show the count of matching documents for each value.

![]({{file name='search-tab.png'}} ?w=600,border=true)

The default search form offers several search criteria, that you can associate to define your search and find documents.

When you associate different criteria, query is built following this principle:

```sql
SELECT * FROM Document WHERE (criterion1 = value1 OR criterion1 = value2) AND (criterion2 = valueA OR criterion2 = valueB) AND criterion 3 = something
```

**To search documents using detailed criteria:**

1.  Click on the **Search** tab.
    The default search is selected by default in the left panel. By default all the documents are displayed.
2.  Fill in the form with your criteria.
    See below for details on each field.
3.  If needed click on the **Filter** button.
    Search results are in thumbnail view. You can change the view for the list view or edit the displayed information (see the [dedicated section on the page Browsing Content ]({{page page='browsing-content#change-content-view-presentation'}})).
4.  Click on a document thumbnail to see its main information pop-up and browse to other results, or click on the document title to open it.

**Available search criteria**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Field</th><th colspan="1">Description</th></tr><tr><td colspan="1">

Text search

</td><td colspan="1">

This field is equivalent to the simple search field: keywords are searched for in the title, description and content, using stemming. You can use operators to refine your search.

</td></tr><tr><td colspan="1">

Tags

</td><td colspan="1">

Select which tag the document(s) should hold. You can choose several tags. In that case, the search will return any document holding at least one of the tags.

**Note**: Tags do not rely on Elasticsearch aggregates. So they are not pre-filtered depending on already selected search criteria and do not trigger the query.

</td></tr><tr><td colspan="1">

Creation date

</td><td colspan="1">

Check the date range during which the documents were created.

</td></tr><tr><td colspan="1">

Modification date

</td><td colspan="1">

Check the date range during which the documents were modified. Default ranges are:

*   Last 24h: Documents modified from 24 hours ago to now.
*   Last week: Documents modified from 7 days go to 24 hours ago.
*   Last month: Documents modified from 1 month ago to 7 days ago.
*   Last year: Documents modified from 1 year ago to 1 month ago.
*   More than 1 year ago: Documents modified until 1 year ago.

</td></tr><tr><td colspan="1">

Author

</td><td colspan="1">

Search and select the user who must have created the documents. You can select several users. In that case, the search will of course return documents created by any of the selected users, using a OR operators on this field.

</td></tr><tr><td colspan="1">

Collections

</td><td colspan="1">

Select the collections in which the documents must be in. Collections have the same behavior as tags.

</td></tr><tr><td colspan="1">

Nature

</td><td colspan="1">

You can search for documents that have a specific value in the Nature metadata. You can select one or several values in this search field.

</td></tr><tr><td colspan="1">

Subjects

</td><td colspan="1">

You can search documents on their Subject value. You can search on several coverage values, but it is not possible to search on the first level of subject only (Art for instance).

</td></tr><tr><td colspan="1">

Coverage

</td><td colspan="1">

Just like you can search document on their subject, you can also make use of their coverage value. You can select several coverage values. It is not possible to search only on the continent.

</td></tr><tr><td colspan="1">

Size

</td><td colspan="1">

You can query documents on their size. Check the size range in which the documents you are looking for are in.

**Note**: Folderish documents such as workspaces and folders have a 0 Kb size, whatever their content.

</td></tr><tr><td colspan="1">

Path

</td><td colspan="1">

You can limit the search to a specific workspaces / section / folder by selecting it in the Folder pop-up window.

**Note**: The tree displayed is not pre-filtered depending on already selected search criteria, you are always displayed the whole tree (depending on your access rights).

</td></tr></tbody></table></div>

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='More in User Documentation '}}

*   [Searching the Nuxeo Platform]({{page page='searching-the-nuxeo-platform'}})
*   [Browsing Content]({{page page='browsing-content'}})
*   [Quick Search]({{page page='quick-search'}})
*   [Saved Searches]({{page page='saved-searches'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Want to know more?'}}

*   [Indexing and Querying How-To Index]({{page space='nxdoc60' page='indexing-and-querying-how-to-index'}})
*   [Indexing and Query]({{page space='nxdoc60' page='indexing-and-query'}})
*   [Full-Text Queries]({{page space='nxdoc60' page='full-text-queries'}})

{{/panel}}</div></div>