---
title: Configure a Domain Specific Advanced Search
details:
    howto:
        excerpt: >-
            Learn how to create new search forms with Nuxeo Studio to leverage
            your specific document types and metadata.
        level: Intermediate
        tool: Studio
        topics: 'Content View, Advanced Search'
labels:
    - advanced-search
    - content-view
    - howto
    - studio
    - content-review-6-0
confluence:
    ajs-parent-page-id: '17334338'
    ajs-parent-page-title: Content Views
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Configure+a+Domain+Specific+Advanced+Search
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC58/Configure+a+Domain+Specific+Advanced+Search
    page_id: '7537385'
    shortlink: 6QJz
    shortlink_source: 'https://doc.nuxeo.com/x/6QJz'
    source_link: /display/NXDOC58/Configure+a+Domain+Specific+Advanced+Search
history:
    - 
        author: Manon Lumeau
        date: '2015-08-28 14:44'
        message: igration of unmigrated content due to installation of a new plugi
        version: '27'
    - 
        author: Manon Lumeau
        date: '2015-08-28 14:44'
        message: ''
        version: '26'
    - 
        author: Manon Lumeau
        date: '2015-08-28 14:43'
        message: ''
        version: '25'
    - 
        author: Manon Lumeau
        date: '2014-09-15 17:35'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '24'
    - 
        author: Manon Lumeau
        date: '2014-09-15 17:35'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '23'
    - 
        author: Manon Lumeau
        date: '2014-09-15 17:35'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '22'
    - 
        author: Manon Lumeau
        date: '2014-09-15 17:35'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '21'
    - 
        author: Manon Lumeau
        date: '2014-09-15 17:35'
        message: ''
        version: '20'
    - 
        author: Manon Lumeau
        date: '2014-09-15 15:16'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2014-06-12 15:14'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '18'
    - 
        author: Solen Guitter
        date: '2014-06-12 15:14'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2014-03-10 17:56'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '16'
    - 
        author: Solen Guitter
        date: '2014-03-10 17:56'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-09-02 15:13'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-09-02 15:13'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-08-29 17:23'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-08-29 17:23'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2011-09-02 17:59'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '10'
    - 
        author: Solen Guitter
        date: '2011-09-02 17:59'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-09-02 17:59'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-09-02 17:59'
        message: Migrated to Confluence 4.0
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-09-02 17:59'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-07-11 11:18'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-07-05 16:06'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-07-04 11:13'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-06-30 16:20'
        message: added link to local configuration in Nuxeo DM
        version: '2'
    - 
        author: Solen Guitter
        date: '2011-06-30 16:16'
        message: ''
        version: '1'

---
{{! excerpt}}

Nuxeo Studio enables you to create new search forms to leverage your specific document types and metadata. Using [Nuxeo DM local configuration]({{page space='userdoc' page='local-configuration'}}), you can choose to override the default search form with your own. For instance, you can define a new advanced search form in Nuxeo Studio, that you will be able to use instead of the default advanced search form on a domain.

{{! /excerpt}}

Search forms are based on [content views]({{page space='nxdoc' page='how-to-define-a-new-content-view'}}).

**To create a new advanced search form:**

1.  [Define your query filter]({{page space='nxdoc' page='how-to-define-a-new-content-view#set-your-query-filter'}}), that is to say the fixed part of the query that will be executed when the user clicks on the "Search" button.
2.  Check the flag **Advanced search**.
    ![]({{file name='STUDIO_advanced_search_flag.png'}} ?w=400,border=true)
3.  Design the search form that will be displayed to users:

    {{!-- unmigrated-wiki-markup: {multi-excerpt-include:Define a new content view|name=filter_form_creation|nopanel=true} --}}
4.  [Configure the results layout]({{page space='nxdoc' page='how-to-define-a-new-content-view#configure-the-results-layout'}}).

After you have configured your new advanced search form and [updated your Nuxeo DM instance with your last Studio changes]({{page space='studio' page='deploying-your-project-in-dev-mode'}}), you can [select your new advanced search form in your domain's local configuration]({{page space='userdoc' page='local-configuration'}}).

![]({{file name='DM_local_configuration_advanced_search.png'}} ?w=650,border=true)

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-tos'}}

*   [How to Add a New Virtual Navigation Entry]({{page space='nxdoc' page='how-to-add-a-new-virtual-navigation-entry'}})
*   [undefined]()
*   [undefined]()
*   [How to Customize the Default Content and Trash Listings]({{page space='nxdoc' page='how-to-customize-the-default-content-and-trash-listings'}})
*   [How-To Index]({{page space='nxdoc' page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Content Views ]({{page space='nxdoc' page='content-views'}})
*   [Content Views in Studio Documentation]({{page space='studio' page='content-views'}})
*   [Custom Page Providers]({{page space='nxdoc' page='custom-page-providers'}})
*   [Documents Display Configuration]({{page space='nxdoc' page='documents-display-configuration'}})
*   [Default Search]({{page space='userdoc' page='default-search'}})

{{/panel}}</div></div>