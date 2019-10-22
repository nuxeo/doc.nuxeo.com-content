---
title: Standard Widget Types
review:
    comment: ''
    date: '2019-10-21'
    status: ok
labels:
    - content-review-lts2016
    - summary-layout
    - link-update
    - widget
    - atchertchian
    - community-links
    - home
    - excerpt
    - content-review-lts2017
    - jsf-ui
confluence:
    ajs-parent-page-id: '950330'
    ajs-parent-page-title: 'Layouts and Widgets (Forms, Listings, Grids)'
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Standard+Widget+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Standard+Widget+Types'
    page_id: '3868345'
    shortlink: uQY7
    shortlink_source: 'https://doc.nuxeo.com/x/uQY7'
    source_link: /display/NXDOC/Standard+Widget+Types
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2016-08-30 14:36'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2016-08-30 14:35'
        message: ''
        version: '23'
    -
        author: Manon Lumeau
        date: '2016-07-20 13:24'
        message: remove children display macro
        version: '22'
    -
        author: Solen Guitter
        date: '2015-10-12 13:18'
        message: ''
        version: '21'
    -
        author: Anahide Tchertchian
        date: '2014-12-08 16:49'
        message: 'NXDOC-286: add link to the layout showcase'
        version: '20'
    -
        author: Solen Guitter
        date: '2014-12-05 19:03'
        message: Fix links to point to latest version
        version: '19'
    -
        author: Solen Guitter
        date: '2014-01-08 15:28'
        message: Formatting
        version: '18'
    -
        author: Anahide Tchertchian
        date: '2013-12-05 17:32'
        message: move content to subpages
        version: '17'
    -
        author: Anahide Tchertchian
        date: '2013-12-04 18:03'
        message: add link to widget types limitations
        version: '16'
    -
        author: Solen Guitter
        date: '2013-11-13 16:55'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2013-09-04 16:07'
        message: Removed related topics from TOC
        version: '14'
    -
        author: Solen Guitter
        date: '2012-07-06 10:11'
        message: Migrated to Confluence 4.0
        version: '13'
    -
        author: Solen Guitter
        date: '2012-07-06 10:10'
        message: Added TOC and related pages
        version: '12'
    -
        author: Anahide Tchertchian
        date: '2012-06-04 14:09'
        message: ''
        version: '11'
    -
        author: Anahide Tchertchian
        date: '2012-06-04 12:12'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2012-05-21 13:57'
        message: Updated 5.4 link to 5.6
        version: '9'
    -
        author: Anahide Tchertchian
        date: '2011-04-04 16:34'
        message: ''
        version: '8'
    -
        author: Anahide Tchertchian
        date: '2011-04-04 16:32'
        message: ''
        version: '7'
    -
        author: Anahide Tchertchian
        date: '2011-04-04 16:30'
        message: ''
        version: '6'
    -
        author: Anahide Tchertchian
        date: '2011-04-04 16:29'
        message: ''
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2011-03-14 18:16'
        message: ''
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2010-10-12 15:19'
        message: ''
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2010-10-12 15:16'
        message: ''
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2010-10-12 15:10'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

{{! excerpt}}
A series of widget types has been defined for the most generic uses cases.
{{! /excerpt}}

Please refer to the tag library documentation available at [http://community.nuxeo.com/api/nuxeo/7.4/tlddoc/](http://community.nuxeo.com/api/nuxeo/7.4/tlddoc/) for Nuxeo JSF tags, and consider reading the page [Default Widget Types Known Limitations]({{page page='default-widget-types-known-limitations'}}).

You can also visit the [Layout Showcase](http://showcase.nuxeo.com/nuxeo/layoutDemo) to get a visual tour of the most common widget types.

All widgets types available on your Nuxeo application are listed at `http://NUXEO_SERVER/nuxeo/site/layout-manager/widget-types`.

Here is some documentation about the most common widget types that are used in the application:

-   [Default Widget Types Known Limitations]({{page space='NXDOC' page='Default Widget+Types+Known+Limitations'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Some widgets have limitations in some specific conditions of use. We maintain a list of known problems here.</span>
-   [Basic Widget Types]({{page space='NXDOC' page='Basic Widget+Types'}})&nbsp;&mdash;&nbsp;<span class="smalltext">A series of widget types is available for the most basic uses cases.</span>
-   [Listing Widget Types]({{page space='NXDOC' page='Listing Widget+Types'}})&nbsp;&mdash;&nbsp;<span class="smalltext">A series of widget types useful for listings.</span>
-   [Summary Widget Types]({{page space='NXDOC' page='Summary Widget+Types'}})&nbsp;&mdash;&nbsp;<span class="smalltext">A series of higher-level widget types useful to display information on a document Summary tab.</span>
-   [Tab Designer Widget Types]({{page space='NXDOC' page='Tab Designer+Widget+Types'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Some higher level widget types are useful to design tab content, and come as an addition to Summary Widget Types.</span>
-   [Decoration Widget Types]({{page space='NXDOC' page='Decoration Widget+Types'}})&nbsp;&mdash;&nbsp;<span class="smalltext">A series of widget types that are only useful to handle display of subwidgets, or just add tags surrounding other widgets.</span>
-   [Suggestion Widget Types]({{page space='NXDOC' page='Suggestion Widget+Types'}})&nbsp;&mdash;&nbsp;<span class="smalltext">A series of widget types for suggestions.</span>
-   [Aggregate Widget Types]({{page space='NXDOC' page='Aggregate Widget+Types'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This page presents widget types to be used to display aggregate buckets.</span>
-   [Advanced Widget Types]({{page space='NXDOC' page='Advanced Widget+Types'}})&nbsp;&mdash;&nbsp;<span class="smalltext">A series of widget types for advanced usage.</span>

&nbsp;
