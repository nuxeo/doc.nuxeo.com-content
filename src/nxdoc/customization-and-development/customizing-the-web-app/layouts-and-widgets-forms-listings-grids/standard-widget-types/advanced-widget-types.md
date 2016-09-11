---
title: Advanced Widget Types
review:
    comment: ''
    date: ''
    status: ok
labels:
    - widget-types
    - select2
toc: true
confluence:
    ajs-parent-page-id: '17334434'
    ajs-parent-page-title: Standard Widget Types
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Advanced+Widget+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Advanced+Widget+Types'
    page_id: '18449601'
    shortlink: wYQZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/wYQZAQ'
    source_link: /display/NXDOC58/Advanced+Widget+Types
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 08:54'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2014-01-23 17:25'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2014-01-22 14:59'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2014-01-22 14:59'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-01-22 14:57'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">{{! excerpt}}

A series of widget types for advanced usage.

{{! /excerpt}}

## {{> anchor 'layout'}}Layout

Id: `layout`

The layout widget type displays a layout. This is useful to build high-level layouts, in combination with the [Form Actions]({{page page='tab-designer-widget-types#documentactions'}}) widget type for instance.

## {{> anchor 'setvariable'}}Set Variable

Id: `setVariable`

This widget type uses the `nxu:set` tag to expose variables in the JSF context, and displays its subwidgets. It can be useful to make a variable available for the subwidgets rendering.

For instance, this is useful when manipulating selection entries, to be able to cache them in the page (and avoid retrieving them for each item rendered in selection options).

</div><div class="column medium-4">{{#> panel heading='In this section'}} {{/panel}}</div></div>

## {{> anchor 'template'}}Template

Id: `template`

The template widget type is highly customizable and allows to define a XHTML template to use for rendering the widget depending on its mode. Please refer to the [dedicated documentation]({{page page='custom-layout-and-widget-templates'}}).

## {{> anchor 'action'}}Action

Id: `action`

This widget type displays an action, with possibility to surround it by a form or not (and additional rendering properties).

The difference with the [Form Action]({{page page='tab-designer-widget-types#documentaction'}}) or [Toolbar Action]({{page page='tab-designer-widget-types#documentactionwithforms'}}) widget types is that it needs the action to be already resolved. This makes it possible to display actions that would have been retrieved using a custom filtering context.

## {{> anchor 'actions'}}Actions

Id: `actions`

This widget type displays actions, with possibility to surround it by a form or not (and additional rendering properties).

The difference with the [Form Actions]({{page page='tab-designer-widget-types#documentactions'}}) or [ Toolbar Actions ]({{page page='tab-designer-widget-types#documentactionswithforms'}}) widget types is that it needs the action to be already resolved. This makes it possible to display actions that would have been retrieved using a custom filtering context.

## Single Generic Suggestion

Id: `select2Widget`

This widget types displays a select2 suggestion for a single element selection. It requires advanced configuration for the operation to call and JavaScript functions for formatting of JSON result of suggestions.

## Multiple Generic Suggestion

Id: `select2WidgetMultiple`

This widget types displays a select2 suggestion for multiple elements selection. It requires advanced configuration for the operation to call and JavaScript functions for formatting of JSON result of suggestions.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation '}}

*   [Standard Widget Types]({{page page='standard-widget-types'}})
*   [Custom Widget Types]({{page page='custom-widget-types'}})
*   [Layout and Widget Modes]({{page page='layout-and-widget-modes'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related How-tos '}}

*   [How to Refresh the Task Widget on the Summary Tab]({{page page='how-to-refresh-the-task-widget-on-the-summary-tab'}})
*   [How to Add a New Widget to the Default Summary Layout]({{page page='how-to-add-a-new-widget-to-the-default-summary-layout'}})

{{/panel}}</div></div>