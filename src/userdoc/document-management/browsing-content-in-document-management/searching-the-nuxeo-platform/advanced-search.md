---
title: Advanced Search
labels:
    - search
    - advanced-search
toc: true
confluence:
    ajs-parent-page-id: '16092650'
    ajs-parent-page-title: Searching the Nuxeo Platform
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Advanced+Search
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Advanced+Search'
    page_id: '16092592'
    shortlink: sI31
    shortlink_source: 'https://doc.nuxeo.com/x/sI31'
    source_link: /display/USERDOC58/Advanced+Search
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 08:10'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2013-11-29 16:01'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2013-11-13 16:40'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-11-13 16:39'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-11-13 16:26'
        message: Added screenshot of the advanced search form
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
Available search criteria are:

<table><tbody><tr><th colspan="1">Field</th><th colspan="1">Description</th></tr><tr><td colspan="1">Required words</td><td colspan="1">

This field is equivalent to the simple search field: keywords are searched for in the title, description and content, using stemming. You can use operators to refine your search.

</td></tr><tr><td colspan="1">Title</td><td colspan="1">

This field is a full-text search field. The keywords typed in this field are searched for in the document title only, using stemming. You can use operators to refine you search.

</td></tr><tr><td colspan="1">Description</td><td colspan="1">

This full-text search field enables you to search for keywords in the description of documents only. You can use operators to make your search more precise.

</td></tr><tr><td colspan="1">Nature</td><td colspan="1">

You can search for documents that have a specific value in the Nature metadata. You can select one or several values in this search field. To select several nature values, click on each of them with the CTRL key pressed. Click again on a value to unselect it.

</td></tr><tr><td colspan="1">Subjects</td><td colspan="1">

You can search documents on their Subject value. You can search on several coverage values, but, unlike the faceted search, it is not possible to search on the first level of subject only (Art for instance).

</td></tr><tr><td colspan="1">Rights</td><td colspan="1">

This is an exact match search field. This means that you must type exactly the value that has been filled in on the document to find it, including the letter case. You can use the % character to replace one or several letters.

</td></tr><tr><td colspan="1">Source</td><td colspan="1">

The Source field has the same behavior as the Rights field.

</td></tr><tr><td colspan="1">Coverage</td><td colspan="1">

Just like you can search document on their subject, you can also make use of their coverage value. You can search on several coverage values, but you must select both the continent and the country. It is not possible to search only on the continent like on the faceted search form.

</td></tr><tr><td colspan="1">

Creation date &nbsp;

</td><td colspan="1">

&nbsp;

All the dates fields have the same behavior. The system will respectively query the "Created at", "Last modified at", publication date and "Expires at" fields.

These fields enable you to select a time period (from Apr. 19th 2013 to Apr. 23rd 2013 for instance) or just a limit date (from Apr. 19th 2013 or until Apr. 19th 2013 for instance). Date-based search includes the time of the selected day(s). By default, 12:00 am is selected for "from" field and 11:59pm for "to" fields.
You can manually change the time if you want only documents created from a certain time, for instance.

</td></tr><tr><td colspan="1">Modification date</td></tr><tr><td colspan="1">Issue date</td></tr><tr><td colspan="1">Validation date</td></tr><tr><td colspan="1">Expiration date</td></tr><tr><td colspan="1">Format</td><td colspan="1">

This exact match field behaves like the Rights field.

</td></tr><tr><td colspan="1">Path</td><td colspan="1">

You can limit the search to a specific workspaces / section / folder by selecting it in the Folder popup window.

</td></tr><tr><td colspan="1">Language</td><td colspan="1">

This is an exact search field. It behaves like the Rights field.**&nbsp;**

</td></tr><tr><td colspan="1"><span class="widgetLabel  ">Search also for deleted</span>&nbsp;<span class="widgetLabel  ">&nbsp;documents?</span>&nbsp;</td><td colspan="1">

Select "Yes" if you want deleted documents to be included in search results.

</td></tr></tbody></table>{{! multiexcerpt name='advanced-search-steps'}}

&nbsp;**To search documents using detailed criteria:**

1.  Click on the **Advanced search** link, located next to the search box.
    ![]({{file name='search-box.png' page='searching-the-nuxeo-platform'}} ?border=true)
2.  Type your criteria in the **Search criteria** form.
    ![]({{file name='advanced-search-form.png'}} ?w=650,border=true)
3.  Possibly, [change the search results columns](#search-result-custom).
4.  Click on the **Search** button.
    Search results are displayed in a table.
5.  Click on the document's name to open it.

{{! /multiexcerpt}}

You can edit advanced search results directly from the search results page, using a filter displayed on top of the search results.

1.  Click on the&nbsp;**Filter**&nbsp;link displayed on top of search results to unfold it.
    The advanced search form is displayed, filled in with your criteria.
    ![]({{file name='DM-advanced _search_results.png'}} ?w=650,border=true)
2.  Edit your criteria and click on the&nbsp;**Filter**&nbsp;button to run the search with your new criteria.
    ![]({{file name='DM-advanced_search_filter.png'}} ?w=650,border=true)&nbsp;
    Search results are updated below the filter form.
    ![]({{file name='DM-advanced_search_filtered.png'}} ?w=650,border=true)

{{#> callout type='tip' heading='Searching for all documents'}}

Click on the **Clear filter** link on the left of the filter to empty the filter form and search for all documents.

{{/callout}}

### Customizing Search Results&nbsp;{{> anchor 'search-result-custom'}}

{{! multiexcerpt name='result-customization-intro'}}

&nbsp;You can choose which information is displayed on the results page. The default information are the document's title, its creation date and its modification date. You can add or remove fields from search results display.

All users can customize search results columns.

{{! /multiexcerpt}}

#### Adding New Search Results Columns

**To add a new search results column:**

{{! multiexcerpt name='add-result-columns-steps'}}

1.  Click on the **Advanced search** link in the top rights corner of the page.
    The **Search results columns** form is displayed below the **Search criteria** form.
    ![]({{file name='search-result-columns-form.png'}} ?w=500,border=true)
2.  Select the column you want to add and click on the&nbsp;![]({{file name='move_right.png' page='icons-index'}}) arrow.
    The new field is added in the selected columns.
    ![]({{file name='search-result-columns-added.png'}} ?w=500,border=true)
3.  Use the up and down arrows to reorder the columns.&nbsp;

{{! /multiexcerpt}}

#### Removing Search Result Columns

{{! multiexcerpt name='remove-result-column-step'}}

&nbsp;To remove a column, select the column to be removed and click on the&nbsp;![]({{file name='move_left.png' page='icons-index'}}) arrow.

{{! /multiexcerpt}}

#### Changing Search Result Sorting

{{! multiexcerpt name='result-sorting-steps'}}

You can sort the results on any of the search results column. You can also change the order direction.

**To change the sort criteria of search results:**

1.  On the **Search results columns** form, in the **Order by** field, click on **Add** and the select the column you want to use to sort the search results.
2.  Select if you want to order search results in an increasing or decreasing order.
    ![]({{file name='advanced_search_columns_and_sort.png'}} ?w=350,border=true)
    Search results are directly sorted.
    ![]({{file name='advanced_search_results.png'}} ?w=650,border=true)

{{! /multiexcerpt}}

&nbsp;

&nbsp;