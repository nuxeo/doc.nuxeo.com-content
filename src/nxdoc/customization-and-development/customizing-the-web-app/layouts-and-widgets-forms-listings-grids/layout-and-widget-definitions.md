---
title: Layout and Widget Definitions
review:
    comment: ''
    date: ''
    status: ok
labels:
    - el
    - summary-layout
confluence:
    ajs-parent-page-id: '17334360'
    ajs-parent-page-title: 'Layouts and Widgets (Forms, Listings, Grids)'
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Layout+and+Widget+Definitions
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Layout+and+Widget+Definitions'
    page_id: '17334430'
    shortlink: noAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/noAIAQ'
    source_link: /display/NXDOC58/Layout+and+Widget+Definitions
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 15:19'
        message: 'emove children display macro '
        version: '19'
    - 
        author: Solen Guitter
        date: '2014-01-22 15:07'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-11-13 16:59'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-11-13 14:08'
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
{{! excerpt}}

Custom layouts and widgets can be contributed to the web layout service, using its extension points.

{{! /excerpt}}

These layout definitions are then available through the service to control how they will be displayed in a given mode.

This chapter explains how to contribute new [layouts]({{page page='layout-definitions'}}) and [widgets]({{page page='widget-definitions'}}) and gives information about [modes]({{page page='layout-and-widget-modes'}}) management:

*   [Layout Definitions]({{page space='NXDOC58' page='Layout Definitions'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Layouts can be used to display various kinds of information, in various renderings.&nbsp;</span>
*   [Widget Definitions]({{page space='NXDOC58' page='Widget Definitions'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This page describes the different elements that can be used to define widgets.</span>
*   [Layout and Widget Modes]({{page space='NXDOC58' page='Layout and+Widget+Modes'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Both layouts and widgets have modes, that makes it possible to render the same layout in different use cases, even if some only support a simple "view" mode.</span>
*   [Field Binding and Expressions]({{page space='NXDOC58' page='Field Binding+and+Expressions'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This chapter explains how field bindings are resolved, what is their purpose, and what variables are available for expressions depending on the context.</span>