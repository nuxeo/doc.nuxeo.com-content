---
title: Search / Advanced Search
review:
    comment: ''
    date: ''
    status: ok
labels:
    - search
    - content-view
confluence:
    ajs-parent-page-id: '12911803'
    ajs-parent-page-title: Listings & Views
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: viewpage.action?pageId=20517241
    canonical_source: viewpage.action?pageId=20517241
    page_id: '20517241'
    shortlink: eRE5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/eRE5AQ'
    source_link: /pages/viewpage.action?pageId=20517241
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2014-10-27 17:09'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-10-27 17:08'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2014-10-27 16:54'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2014-10-27 16:16'
        message: ''
        version: '1'

---

{{#> callout type='info' }}
  {{{multiexcerpt 'jsf-ui-target-package-requirement' page='listings-and-views'}}}
{{/callout}}

Default search configuration is defined the Search menu item in Nuxeo Platform 6.0\. For previous version, it is set in the Advanced Search menu entry.

{{! excerpt}}
From Nuxeo Platform 6.0 the Search menu item enables you to set up a new Default Search form to replace the one available in the Nuxeo Platform Search tab. The Advanced search menu item available for previous versions of the platform enables to define a new Advanced search form.
{{! /excerpt}}

It is basically a content view that is preset to be a search content view. So it shows the same tabs and configuration features as a [content view]({{page page='content-views'}}) with the differences below.

* Logically the Flags section of the content view definition is not displayed here.
* Since it is meant to replace the default search, it doesn't show the Enablement tab available for other search content views. (From Nuxeo Platform 6.0)

Please report to the [Content Views]({{page page='content-views'}}) documentation.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Search - Advanced Search/Search Menu
    name: Studio_search_menu.png
    studio_modeler#screenshot#up_to_date
--}}
![Search Menu](nx_asset://c2187eef-5ab4-4eeb-9d1f-f833ed322189 ?w=600,border=true)

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading='Related Documentation'}}

- [Content Views]({{page page='content-views'}})
- [Content View - Query and Form Tab]({{page page='content-view-query-and-form-tab'}})
- [Content View - Results]({{page page='content-view-results'}})
- [How to Configure a New Default Search Form in the Search Tab]({{page space='nxdoc' page='how-to-configure-a-new-default-search-form-in-the-search-tab'}})

{{/panel}}</div><div class="column medium-6">

</div></div>
