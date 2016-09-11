---
title: Decoration Widget Types
review:
    comment: ''
    date: ''
    status: ok
labels:
    - widget-types
toc: true
confluence:
    ajs-parent-page-id: '22380771'
    ajs-parent-page-title: Standard Widget Types
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Decoration+Widget+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Decoration+Widget+Types'
    page_id: '22380827'
    shortlink: G4FVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/G4FVAQ'
    source_link: /display/NXDOC60/Decoration+Widget+Types
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 09:38'
        message: ''
        version: '8'
    - 
        author: Manon Lumeau
        date: '2015-09-16 12:17'
        message: ''
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
{{! excerpt}}A series of widget types that are only useful to handle display of subwidgets, or just add tags surrounding other widgets.{{! /excerpt}}

## Container

Id: `container`

The container widget is a "decorative" widget, used to control rendering of its subwidgets. It's available since Nuxeo 5.6 and is used on the default Summary layout.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/containerWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/containerWidget)

## Drop Zone

Id:&nbsp;`dropZone`

This widget defines a drop zone, used to define a zone where some actions will be called on drop. The&nbsp;[Drag and Drop Service for Content Capture (HTML5-Based)]({{page page='drag-and-drop-service-for-content-capture-html5-based'}})&nbsp;documentation details how it can be used.

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