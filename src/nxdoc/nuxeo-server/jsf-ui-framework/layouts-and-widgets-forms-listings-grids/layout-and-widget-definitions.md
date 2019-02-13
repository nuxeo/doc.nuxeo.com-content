---
title: Layout and Widget Definitions
review:
    comment: ''
    date: '2019-02-13'
    status: ok
labels:
    - content-review-lts2016
    - link-update
    - home
    - mlumeau
    - excerpt
    - lts2017-ok
confluence:
    ajs-parent-page-id: '950330'
    ajs-parent-page-title: 'Layouts and Widgets (Forms, Listings, Grids)'
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Layout+and+Widget+Definitions
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Layout+and+Widget+Definitions'
    page_id: '3868333'
    shortlink: rQY7
    shortlink_source: 'https://doc.nuxeo.com/x/rQY7'
    source_link: /display/NXDOC/Layout+and+Widget+Definitions
tree_item_index: 100
history:
    -
        author: Manon Lumeau
        date: '2016-07-20 13:20'
        message: emove children display macr
        version: '28'
    -
        author: Solen Guitter
        date: '2014-01-08 10:52'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2014-01-07 16:40'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2014-01-07 16:40'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2014-01-07 16:39'
        message: ''
        version: '24'
    -
        author: Anahide Tchertchian
        date: '2013-12-20 15:40'
        message: ''
        version: '23'
    -
        author: Anahide Tchertchian
        date: '2013-12-05 14:23'
        message: ''
        version: '22'
    -
        author: Anahide Tchertchian
        date: '2013-12-05 14:02'
        message: add links to subpages
        version: '21'
    -
        author: Anahide Tchertchian
        date: '2013-12-04 14:39'
        message: better intro + display child pages in table of contents
        version: '20'
    -
        author: Anahide Tchertchian
        date: '2013-12-04 13:54'
        message: 'remove content moved to subpages '
        version: '19'
    -
        author: Anahide Tchertchian
        date: '2013-12-03 16:52'
        message: ''
        version: '18'
    -
        author: Anahide Tchertchian
        date: '2013-12-03 16:52'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2013-11-13 14:11'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-09-04 16:04'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2012-09-11 21:23'
        message: Migrated to Confluence 4.0
        version: '14'
    -
        author: Solen Guitter
        date: '2012-09-11 21:23'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2012-07-06 11:12'
        message: 'Added TOC, related pages and missing links'
        version: '12'
    -
        author: Anahide Tchertchian
        date: '2012-06-04 14:02'
        message: ''
        version: '11'
    -
        author: Anahide Tchertchian
        date: '2012-05-21 15:29'
        message: ''
        version: '10'
    -
        author: Anahide Tchertchian
        date: '2012-05-21 15:11'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2012-05-21 11:04'
        message: Updated 5.4 mercurial link to 5.6 snapshot github URL
        version: '8'
    -
        author: Solen Guitter
        date: '2011-01-07 19:04'
        message: ''
        version: '7'
    -
        author: Anahide Tchertchian
        date: '2010-10-13 15:53'
        message: ''
        version: '6'
    -
        author: Anahide Tchertchian
        date: '2010-10-13 15:52'
        message: ''
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2010-10-13 15:50'
        message: ''
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2010-10-12 15:18'
        message: ''
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2010-10-12 15:07'
        message: ''
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2010-10-12 15:03'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DeprecatedJSF' page='generic-multi-excerpts'}}}

{{! excerpt}}
Custom layouts and widgets can be contributed to the web layout service, using its extension points.
{{! /excerpt}}

These layout definitions are then available through the service to control how they will be displayed in a given mode.

This chapter explains how to contribute new [layouts]({{page page='layout-definitions'}}) and [widgets]({{page page='widget-definitions'}}) and gives information about [modes]({{page page='layout-and-widget-modes'}}) management:

*   [Layout Definitions]({{page space='NXDOC' page='Layout Definitions'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Layouts can be used to display various kinds of information, in various renderings.&nbsp;</span>
*   [Widget Definitions]({{page space='NXDOC' page='Widget Definitions'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This page describes the different elements that can be used to define widgets.</span>
*   [Layout and Widget Modes]({{page space='NXDOC' page='Layout and+Widget+Modes'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Both layouts and widgets have modes, that makes it possible to render the same layout in different use cases, even if some only support a simple "view" mode.</span>
*   [Field Binding and Expressions]({{page space='NXDOC' page='Field Binding+and+Expressions'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This chapter explains how field bindings are resolved, what is their purpose, and what variables are available for expressions depending on the context.</span>
