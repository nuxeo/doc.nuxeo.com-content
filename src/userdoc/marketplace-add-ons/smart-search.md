---
title: Smart Search
labels:
    - search
    - smart-search
toc: true
confluence:
    ajs-parent-page-id: '21299463'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Smart+Search
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Smart+Search'
    page_id: '21299459'
    shortlink: AwFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/AwFFAQ'
    source_link: /display/USERDOC60/Smart+Search
history:
    - 
        author: Solen Guitter
        date: '2016-01-25 17:05'
        message: pdate with new version aligned on 6.1
        version: '7'
    - 
        author: Manon Lumeau
        date: '2014-12-08 14:37'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-12-12 15:31'
        message: Added link to the smart search package on the Marketplace
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-10-08 13:49'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-09-04 18:20'
        message: Removed related topics from TOC
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-02-18 18:38'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2012-11-20 18:33'
        message: ''
        version: '1'

---
{{! excerpt}}

The [Smart Search package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-platform-smart-search) is a query engine that adds a new search form in the application from which you can build your queries and save them in smart folders. It offers search criteria on content, dates, and metadata.

{{! /excerpt}}

## Building a Smart Search{{> anchor 'build-query'}}

**To build a query using Smart Search:**

1.  Go to the **Search** tab and select **Smart Search** in the drop down menu of the search filters.

    The Smart Search form is displayed.
    ![]({{file name='Smart-Search-form.png'}} ?w=310,border=true)
2.  Select a first search criterion in the drop down list and fill in the corresponding field.
3.  Click on the **Add** button.
    The criterion is displayed in the text area below.
    ![]({{file name='Smart-Search-query.png'}} ?w=310,border=true)
4.  Possibly, add other criteria.

    {{#> callout type='tip' }}

    You can organize your search criteria in parenthesis.
    You can also use the **Undo** and **Clear** buttons to cancel actions when you build your query.

    {{/callout}}
5.  When your query is ready, click on **Add** and then on **Search**.
    The search results are displayed. You can click on the documents to consult them. You can also edit your search to refine the query or save your search.
    ![]({{file name='Smart-Search-results.png'}} ?w=650,border=true)

## Saving a Smart Search

Smart Search enables users to save their search in smart folders. A smart folder is a folder that displays the result of the associated query. Every time a user click on the folder, the query is executed and the content displayed is updated.
Smart folders can be created in workspaces and folders.
There are two ways to create a smart folder:

*   you can first create your query and [save it](#save-search) in your personal workspace,
*   or you can [create a smart folder](#smart-folder) directly from a workspace.

{{#> callout type='tip' }}

Permissions cannot be managed on smart folders. If you want to share a smart search, you need to save it in a workspace or a folder that is shared with other users.

{{/callout}}

### Saving a Smart Search

You can save a smart search from the search form directly or from the search results. When you save a smart search, it is automatically saved in your personal workspace.

{{> anchor 'save-search'}}To save a search in a smart folder:

1.  [Build your query](#build-query).
2.  From the search result page or from the search form, click on the **Save As** button.
3.  Give the smart search a title and click on **Save**.

    Once your smart search is saved, the smart folder is available:

    1.  in your personal workspace
        ![]({{file name='smart-folder-personal-workspace.png'}} ?w=600,border=true)

    2.  in the drop down list in the **Search tab**:
        ![]({{file name='saved-search.png'}} ?w=250,border=true,thumbnail=true)
    3.  in **Home** > **Searches**:
        ![]({{file name='hometab-searches.png'}} ?w=600,border=true)

### Creating a Smart Folder

You can create a smart search in a workspace or in a folder.

{{> anchor 'smart-folder'}}To create a smart folder:
You can create a smart folder and then build the query that will be associated to it:

1.  In a workspace, click on **New**.
2.  In the modal window, click on **Smart folder**.
3.  On the creation form, type a title, a description (optional) and [build your query](#build-query).
4.  Click on the **Create** button to save the smart folder and display its content.
    The smart folder is saved.

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related sections'}}

*   [Smart search operators]({{page page='smart-search-operators'}})
*   [Searching the Nuxeo Platform]({{page page='searching-the-nuxeo-platform'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related pages in other documentation'}}

*   [Smart Search developer documentation]({{page space='nxdoc60' page='smart-search'}})

{{/panel}}</div></div>