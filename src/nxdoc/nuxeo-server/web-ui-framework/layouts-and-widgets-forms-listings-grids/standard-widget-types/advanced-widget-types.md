---
title: Advanced Widget Types
labels:
    - widget-types
    - select2
    - layout-widgets-component
    - excerpt
toc: true
confluence:
    ajs-parent-page-id: '3868345'
    ajs-parent-page-title: Standard Widget Types
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Advanced+Widget+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Advanced+Widget+Types'
    page_id: '17794542'
    shortlink: 7oUPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/7oUPAQ'
    source_link: /display/NXDOC/Advanced+Widget+Types
history:
    - 
        author: Solen Guitter
        date: '2015-08-31 14:20'
        message: pdate table of contents loo
        version: '9'
    - 
        author: Solen Guitter
        date: '2014-01-08 17:27'
        message: Added related topics
        version: '8'
    - 
        author: Anahide Tchertchian
        date: '2013-12-18 01:09'
        message: add usage of set variable wdget (selection options cache)
        version: '7'
    - 
        author: Anahide Tchertchian
        date: '2013-12-06 19:41'
        message: insert anchors
        version: '6'
    - 
        author: Anahide Tchertchian
        date: '2013-12-06 19:26'
        message: more fixes of anchor links
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2013-12-06 19:25'
        message: fix link with anchor
        version: '4'
    - 
        author: Anahide Tchertchian
        date: '2013-12-06 19:22'
        message: add advanced widget types
        version: '3'
    - 
        author: Anahide Tchertchian
        date: '2013-12-06 15:18'
        message: add structure
        version: '2'
    - 
        author: Anahide Tchertchian
        date: '2013-12-05 17:29'
        message: ''
        version: '1'

---
{{! excerpt}}

A series of widget types for advanced usage.

{{! /excerpt}}

## Layout

Id: `layout`

The layout widget type displays a layout. This is useful to build high-level layouts, in combination with the [Form Actions]({{page page='tab-designer-widget-types#documentactions'}}) widget type for instance.

## Set Variable

Id: `setVariable`

This widget type uses the [`nxu:set`](http://nxuset) tag to expose variables in the JSF context, and displays its subwidgets. It can be useful to make a variable available for the subwidgets rendering.

For instance, this is useful when manipulating selection entries, to be able to cache them in the page (and avoid retrieving them for each item rendered in selection options).

## Template

Id: `template`

The template widget type is highly customizable and allows to define a XHTML template to use for rendering the widget depending on its mode. Please refer to the [dedicated documentation]({{page page='custom-layout-and-widget-templates'}}).

## Action

Id: `action`

This widget type displays an action, with possibility to surround it by a form or not (and additional rendering properties).

The difference with the [Form Action]({{page page='tab-designer-widget-types#documentaction'}}) or [Toolbar Action]({{page page='tab-designer-widget-types#documentactionwithforms'}}) widget types is that it needs the action to be already resolved. This makes it possible to display actions that would have been retrieved using a custom filtering context.

## Actions

Id: `actions`

This widget type displays actions, with possibility to surround it by a form or not (and additional rendering properties).

The difference with the [Form Actions]({{page page='tab-designer-widget-types#documentactions'}}) or [Toolbar Actions]({{page page='tab-designer-widget-types#documentactionswithforms'}}) widget types is that it needs the action to be already resolved. This makes it possible to display actions that would have been retrieved using a custom filtering context.

## Single Generic Suggestion

Id: `select2Widget`

This widget types displays a select2 suggestion for a single element selection. It requires advanced configuration for the operation to call and javascript functions for formatting of JSON result of suggestions.

## Multiple Generic Suggestion

Id: `select2WidgetMultiple`

This widget types displays a select2 suggestion for multiple elements selection. It requires advanced configuration for the operation to call and javascript functions for formatting of JSON result of suggestions.

&nbsp;

* * *