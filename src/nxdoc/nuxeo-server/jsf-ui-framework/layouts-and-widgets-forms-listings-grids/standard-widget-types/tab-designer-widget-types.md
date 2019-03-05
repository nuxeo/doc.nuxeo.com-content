---
title: Tab Designer Widget Types
review:
    comment: ''
    date: '2019-02-13'
    status: ok
labels:
    - content-review-lts2016
    - widget-types
    - tab
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
    canonical: Tab+Designer+Widget+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Tab+Designer+Widget+Types'
    page_id: '17794573'
    shortlink: DYYPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/DYYPAQ'
    source_link: /display/NXDOC/Tab+Designer+Widget+Types
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2016-08-31 14:05'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-12-08 14:59'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-01-08 16:43'
        message: ''
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2013-12-06 19:07'
        message: ''
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2013-12-06 19:01'
        message: add default tab designer widget types
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2013-12-06 15:19'
        message: add structure
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2013-12-06 15:00'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

{{! excerpt}}
Some higher level widget types are useful to design tab content, and come as an addition to [Summary Widget Types]({{page page='summary-widget-types'}}).
{{! /excerpt}}

## {{> anchor 'toggleablelayoutwithforms'}}Toggleable Layout

Id: `toggleableLayoutWithForms`

This widget type presents a layout in view mode, with toggle buttons to present the edit mode, as well as usual Save and Cancel buttons by default (these can be customized).

## {{> anchor 'contentviewwithforms'}}Content View

Id: `contentViewWithForms`

This widget type presents a content view, with possibility to override some of the content view definition properties in the widget properties.

## {{> anchor 'documenttabswithforms'}}Tabs

Id: `documentTabsWithForms`

This widget type presents document tabs. It is tied to the document on which this widget is rendered as filters are evaluated in this context.

## {{> anchor 'documentaction'}}Form Action

Id: `documentAction`

This widget type presents an action, not surrounded by a form. It is tied to the document on which this widget is rendered as [filters]({{page page='filters-and-access-controls'}}) are evaluated in its context. The action to present is retrieved by id.

This is useful in combination with the "layout" widget for instance, or to build incremental layouts using "Summary Panel" categories (as widgets contributed to this category may already contain a form).

## {{> anchor 'documentactions'}}Form Actions

Id: `documentActions`

This widget type presents actions, not surrounded by a form. It is tied to the document on which this widget is rendered as [filters]({{page page='filters-and-access-controls'}}) are evaluated in its context. The actions to present are retrieved by category.

This is useful in combination with the [ `layout` widget]({{page page='advanced-widget-types#layou'}}) for instance, or to build incremental layouts using "Summary Panel" categories (as widgets contributed to this category may already contain a form).

## {{> anchor 'documentactionwithforms'}}Toolbar Action

Id: `documentActionWithForms`

This widget type presents an action, surrounded by a form. It is tied to the document on which this widget is rendered as [filters]({{page page='filters-and-access-controls'}}) are evaluated in its context.

Form management performed by this widget type makes it possible to use FancyBox actions for instance (so that FancyBox content can itself contain a form).

## {{> anchor 'documentactionswithforms'}}Toolbar Actions

Id: `documentActionsWithForms`

This widget type presents document tabs. It is tied to the document on which this widget is rendered as [filters]({{page page='filters-and-access-controls'}}) are evaluated in its context.

Form management performed by this widget type makes it possible to use FancyBox actions for instance (so that FancyBox content can itself contain a form).

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related topics in this documentation'}}

*   [Standard Widget Types]({{page page='standard-widget-types'}})
*   [Custom Widget Types]({{page page='custom-widget-types'}})
*   [Layout & Widget How-To Index]({{page page='layout-and-widget-how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related topics in Studio documentation'}}

*   [Filtering Options Reference Page]({{page space='studio' page='filtering-options-reference-page'}})
*   [Tabs]({{page space='studio' page='tabs'}})

{{/panel}}</div></div>
