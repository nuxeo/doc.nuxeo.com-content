---
title: Smart Search
labels:
    - search
    - smart-search
    - dm-540
toc: true
confluence:
    ajs-parent-page-id: '16092550'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Smart+Search
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Smart+Search'
    page_id: '16092601'
    shortlink: uY31
    shortlink_source: 'https://doc.nuxeo.com/x/uY31'
    source_link: /display/USERDOC58/Smart+Search
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 08:09'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-12-12 15:35'
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
## Saving a smart search

Smart Search enables users to save their search in smart folders. A smart folder is a folder that displays the result of the associated query. Every time a user click on the folder, the query is executed and the content displayed is updated.
Smart folders can be created in workspaces and folders.
There are two ways to create a smart folder:

*   you can first create your query and [save it](#save-search) in your personal workspace,
*   or you can [create a smart folder](#smart-folder) directly from a workspace.

{{#> callout type='tip' }}

Access rights cannot be managed on smart folders. If you want to share a smart search, you need to save it in a workspace or a folder that is shared with other users.

{{/callout}}

### Saving a smart search

You can save a smart search from the search form directly or from the search results. When you save a smart search, it is automatically saved in your personal workspace.

{{> anchor 'save-search'}}To save a search in a smart folder:

1.  [Build your query](#build-query).
2.  From the search result page or from the search form, click on the **Save search** button.
    The Smart folder creation form is displayed. The Request and Search results are already filled in with your search configuration.
    ![]({{file name='Smart-Search-save-form.png'}} ?border=true)
3.  Give the smart folder a title, optionally a description.
4.  Click on the **Create**button to save the smart folder and display its content.

    {{#> callout type='tip' }}

    You can click on the **Create and go back to smart search** button to save the smart folder and go back to the smart search form to start creating other requests.

    {{/callout}}

    The smart folder is saved in your personal workspace.
    ![]({{file name='Smart-Search-search-saved.png'}} ?border=true)

### Creating a smart folder

You can create a smart search in a workspace or in a folder.

{{> anchor 'smart-folder'}}To create a smart folder:
You can create a smart folder and then build the query that will be associated to it:

1.  In a workspace, click on **New**.
2.  In the modal window, click on **Smart folder**.
3.  On the creation form, type a title, a description (optional) and [build your query](#build-query).
4.  Click on the **Create** button to save the smart folder and display its content.
    The smart folder is saved.

&nbsp;

&nbsp;