---
title: Actions Display
labels:
    - action-category
    - action
    - actions-filters-component
    - lts2015-ok
    - excerpt
toc: true
confluence:
    ajs-parent-page-id: '950289'
    ajs-parent-page-title: 'Actions (Links, Buttons, Icons, Tabs and More)'
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Actions+Display
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Actions+Display'
    page_id: '17794915'
    shortlink: Y4cPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/Y4cPAQ'
    source_link: /display/NXDOC/Actions+Display
history:
    - 
        author: Solen Guitter
        date: '2015-08-31 14:24'
        message: pdate table of contents loo
        version: '12'
    - 
        author: Solen Guitter
        date: '2014-09-16 17:11'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2014-03-10 18:29'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2014-03-10 18:29'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2014-01-13 15:58'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2014-01-13 15:47'
        message: Put list of all action categories
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-01-13 10:50'
        message: 'Added related topics, fixed typos'
        version: '6'
    - 
        author: Anahide Tchertchian
        date: '2014-01-10 12:19'
        message: ''
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2013-12-20 19:36'
        message: 'update doc, add TODO for unfinished work'
        version: '4'
    - 
        author: Anahide Tchertchian
        date: '2013-12-16 18:58'
        message: ''
        version: '3'
    - 
        author: Anahide Tchertchian
        date: '2013-12-16 18:55'
        message: add content from parent page + wip warning
        version: '2'
    - 
        author: Anahide Tchertchian
        date: '2013-12-16 14:54'
        message: ''
        version: '1'

---
{{! excerpt}}

Actions are grouped in categories to be able to display them in the same area of a page. Widgets can be used to handle rendering of these actions.

{{! /excerpt}}

Actions are referencing the same category when they need to be displayed in the same area of a page.

The available categories are listed below and can also be found by checking action contributions on [the explorer](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.actions.ActionService--actions).

## CAP Categories

{{{multiexcerpt 'CAP-actions-categories-1' page='Studio:User actions categories'}}}

{{{multiexcerpt 'CAP-actions-categories-2' page='Studio:User actions categories'}}}

## CAP Advanced Categories

These categories can be useful when defining custom actions, that will reference the widgets to display. This is useful when building incremental layouts, like the default summary layout starting from 5.6: the action order and filter information are useful to contribute/display/hide some widgets to the summary default layout.

These categories are not really useful when defining user actions, and the associated features can be broken when migrating from 5.6 to 5.8, as the form around the summary layout has been removed for 5.8 to allow fine-grained form management on this page.

### View Action List

Technical name: `VIEW_ACTION_LIST`.

This category is used for tabs displayed on every document.

```

  VIEW_ACTION_LIST
  view

  VIEW_ACTION_LIST
  view_content

```

{{{multiexcerpt 'CAP-advanced-actions-categories' page='Studio:User actions categories'}}}

## DAM Categories

{{{multiexcerpt 'DAM-actions-categories' page='Studio:User actions categories'}}}

## Adapting Templates to Display an Action

Since Nuxeo Platform 5.6, an action can define the way it will be rendered by using the&nbsp;`type` attribute. This make it easier to combine different kinds of rendering for a group of actions, and this is done by using widget types for action types, to leverage features from the [Nuxeo Layout Framework]({{page page='layouts-and-widgets-forms-listings-grids'}}).

The [`template` action type]({{page page='standard-action-types'}}) makes it possible to define a custom action rendering. [New action types]({{page page='custom-action-types'}}) can also be contributed to the framework.

A series of widget types displaying are available by default, see the pages [Tab Designer Widget Types]({{page page='tab-designer-widget-types'}}) and [Advanced Widget Types]({{page page='advanced-widget-types'}}). These widget types include rendering configuration options that are implemented by default action widget types (CSS styling, display as buttons or links, for instance).

Here are two ways of rendering actions.

### Rendering Actions via Widget Definitions

Here is a sample widget definition to render actions using category `MY_CATEGORY`:

```

      MY_CATEGORY
      links
      horizontal_block
      userActions

```

This widget can be displayed on a page directly using the following sample code:

Of course this widget definition can also be included within a layout definition, as it's done for [Incremental Layouts]({{page page='incremental-layouts-and-actions'}}) configuration.

### Rendering Actions via Dynamically Computed Widget

It can also be useful to generate the widget definition dynamically from the widget template, by passing the widget properties as tag attributes to the&nbsp;[`nxl:widgetType`](http://nxlwidgetType) tag:

Notice the tag attribute `widgetProperty_category` used to define the actions category: as widget types also have a notion of category, adding&nbsp;`widgetProperty_` prefix to the attribute makes it possible to explicitly state that this is a widget property.

See also chapter about [Layout and Widget Display]({{page page='layout-and-widget-display'}}).

&nbsp;

* * *

<div class="row" data-equalizer="" data-equalize-on="medium">

<div class="column medium-6">{{#> panel heading="Related sections in this documentation"}}

{{/panel}}

</div>

<div class="column medium-6">{{#> panel heading="Related sections in Studio documentation"}}

{{/panel}}

</div>

</div>