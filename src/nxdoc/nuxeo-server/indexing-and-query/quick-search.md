---
title: Quick Search
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
    - simple-search
    - query-pageprovider-component
    - search-tab-component
    - atchertchian
    - nxdoc-450
    - link-update
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '4687860'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Quick+Search
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Quick+Search'
    page_id: '17794521'
    shortlink: 2YUPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/2YUPAQ'
    source_link: /display/NXDOC/Quick+Search
tree_item_index: 1100
history:
    -
        author: Manon Lumeau
        date: '2016-06-09 12:21'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2016-05-27 13:06'
        message: Fix link to search-contentviews-contrib.xml
        version: '10'
    -
        author: Solen Guitter
        date: '2015-10-14 10:03'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-12-05 18:57'
        message: Remove link to advanced search page (obsolete)
        version: '8'
    -
        author: Solen Guitter
        date: '2014-11-20 11:45'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-01-17 17:52'
        message: Added related topics
        version: '6'
    -
        author: Solen Guitter
        date: '2014-01-13 18:01'
        message: ''
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2013-12-16 14:27'
        message: add minimal doc about quick search conf
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2013-12-16 12:35'
        message: add related topics + excerpt
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2013-12-06 17:57'
        message: better title
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2013-12-05 13:58'
        message: ''
        version: '1'

---
{{! excerpt}}

The simple search is configured to work in conjunction with a content view. This section describes the document type and layouts used in the default simple search.

{{! /excerpt}}

## Simple Search Content View

The simple search content view is named&nbsp;`simple_search` <span class="s">and can be overridden <span class="s">see the contribution at [search-contentviews-contrib.xml](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/nuxeo-platform-rendition/nuxeo-platform-rendition-web/src/main/resources/OSGI-INF/search-contentviews-contrib.xml).</span></span>

## Quick Search Box

Since 5.8, the simple search box is shown thanks to an action. To customize this box, the corresponding action contribution can be overridden. See [http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewContribution/org.nuxeo.ecm.platform.actions--actions](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewContribution/org.nuxeo.ecm.platform.actions--actions)

## Suggestions

It takes over the simple search by disabling the action showing the simple search box, and adding the suggester one. See [https://github.com/nuxeo/nuxeo-platform-suggestbox/blob/master/nuxeo-platform-suggestbox-jsf/src/main/resources/OSGI-INF/suggestbox-actions-contrib.xml](https://github.com/nuxeo/nuxeo-platform-suggestbox/blob/master/nuxeo-platform-suggestbox-jsf/src/main/resources/OSGI-INF/suggestbox-actions-contrib.xml).

Suggesters can be contributed to this search box. See the contribution at [http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewContribution/org.nuxeo.ecm.platform.suggestbox.core.defaultSuggesters--suggesters](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewContribution/org.nuxeo.ecm.platform.suggestbox.core.defaultSuggesters--suggesters).
