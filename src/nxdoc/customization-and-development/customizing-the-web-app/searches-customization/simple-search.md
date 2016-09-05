---
title: Simple Search
labels:
    - search
    - simple-search
confluence:
    ajs-parent-page-id: '18449663'
    ajs-parent-page-title: Searches Customization
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Simple+Search
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Simple+Search'
    page_id: '18449666'
    shortlink: AoUZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/AoUZAQ'
    source_link: /display/NXDOC58/Simple+Search
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 15:39'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2014-01-22 17:02'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-01-22 16:57'
        message: ''
        version: '1'

---
{{! excerpt}}

<span class="smalltext">The simple search is configured to work in conjunction with a content view. This section describes the document type and layouts used in the default simple search.</span>

{{! /excerpt}}

## Simple Search Content View

The simple search content view is named&nbsp;`simple_search` <span class="s">and can be overridden <span class="s">see the contribution at [search-contentviews-contrib.xml](https://github.com/nuxeo/nuxeo-jsf/blob/release-5.8/nuxeo-platform-webapp-base/src/main/resources/OSGI-INF/search-contentviews-contrib.xml).</span></span>

It shares part of its configuration with the [Advanced Search]({{page page='advanced-search'}}) to make user experience better (for instance search results layout and selected columns results).

## Simple Search Box

Since 5.8, the simple search box is shown thanks to an action. To customize this box, the corresponding action contribution can be overriden. See [http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewContribution/org.nuxeo.ecm.platform.actions--actions](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewContribution/org.nuxeo.ecm.platform.actions--actions)

## Suggestions

{{#> callout type='info' }}

The suggestions on simple search come with the Document Management module.

{{/callout}}

When the Document Management module is enabled, the simple search content view fallback on the [Faceted Search]({{page page='faceted-search'}}) tab and results.

It takes over the simple search by disabling the action showing the simple search box, and adding the suggester one. See [https://github.com/nuxeo/nuxeo-platform-suggestbox/blob/release-5.8/nuxeo-platform-suggestbox-jsf/src/main/resources/OSGI-INF/suggestbox-actions-contrib.xml](https://github.com/nuxeo/nuxeo-platform-suggestbox/blob/release-5.8/nuxeo-platform-suggestbox-jsf/src/main/resources/OSGI-INF/suggestbox-actions-contrib.xml).

Suggesters can be contributed to this search box. See the contribution at [http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewContribution/org.nuxeo.ecm.platform.suggestbox.core.defaultSuggesters--suggesters](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewContribution/org.nuxeo.ecm.platform.suggestbox.core.defaultSuggesters--suggesters).

&nbsp;