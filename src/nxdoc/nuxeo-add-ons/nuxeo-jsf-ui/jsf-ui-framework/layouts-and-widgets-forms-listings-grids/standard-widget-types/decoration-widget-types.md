---
title: Decoration Widget Types
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
    - widget-types
    - layout-widgets-component
    - atchertchian
    - excerpt
    - content-review-lts2017
    - jsf-ui
toc: true
confluence:
    ajs-parent-page-id: '3868345'
    ajs-parent-page-title: Standard Widget Types
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Decoration+Widget+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Decoration+Widget+Types'
    page_id: '17794540'
    shortlink: 7IUPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/7IUPAQ'
    source_link: /display/NXDOC/Decoration+Widget+Types
tree_item_index: 600
history:
    -
        author: Solen Guitter
        date: '2016-08-31 09:39'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-08-31 14:19'
        message: Update table of contents look
        version: '7'
    -
        author: Solen Guitter
        date: '2014-01-08 16:48'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-01-08 16:47'
        message: Added related topics
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2013-12-06 15:18'
        message: add right menu
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2013-12-06 15:01'
        message: wording
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2013-12-05 17:50'
        message: add container and dropZone widget types
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2013-12-05 17:29'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}
{{! excerpt}}
A series of widget types that are only useful to handle display of subwidgets, or just add tags surrounding other widgets.
{{! /excerpt}}

## Container

Id: `container`

The container widget is a "decorative" widget, used to control rendering of its subwidgets. It's available since Nuxeo 5.6 and is used on the default Summary layout.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/containerWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/containerWidget)

## Drop Zone

Id: `dropZone`

This widget defines a drop zone, used to define a zone where some actions will be called on drop. The [Drag and Drop Service for Content Capture (HTML5-Based)]({{page page='drag-and-drop-service-for-content-capture-html5-based'}}) documentation details how it can be used.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in this documentation'}}

*   [Actions Overview]({{page page='actions-overview'}})
*   [Custom Action Types]({{page page='custom-action-types'}})
*   [Drag and Drop Service for Content Capture (HTML5-Based)]({{page page='drag-and-drop-service-for-content-capture-html5-based'}})
*   [How to Customize the HTML5 Drag and Drop Import with Metadata Form]({{page page='how-to-customize-the-html5-drag-and-drop-import-with-metadata-form'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related pages in Studio documentation'}}

*   [User Actions]({{page space='studio' page='user-actions'}})
*   [User actions categories]({{page space='studio' page='user-actions-categories'}})

{{/panel}}</div></div>
