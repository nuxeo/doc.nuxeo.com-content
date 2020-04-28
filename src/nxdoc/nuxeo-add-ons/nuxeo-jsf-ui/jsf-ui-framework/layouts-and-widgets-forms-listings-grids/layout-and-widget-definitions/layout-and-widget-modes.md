---
title: Layout and Widget Modes
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
    - layout
    - widget
    - layout-widgets-component
    - atchertchian
    - excerpt
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '3868333'
    ajs-parent-page-title: Layout and Widget Definitions
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Layout+and+Widget+Modes
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Layout+and+Widget+Modes'
    page_id: '17794409'
    shortlink: aYUPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/aYUPAQ'
    source_link: /display/NXDOC/Layout+and+Widget+Modes
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2016-08-30 15:58'
        message: ''
        version: '9'
    -
        author: Anahide Tchertchian
        date: '2014-12-08 17:36'
        message: 'NXDOC-286: give example for mode configuration with expressions'
        version: '8'
    -
        author: Anahide Tchertchian
        date: '2014-12-08 16:18'
        message: 'NXDOC-286: cosmit'
        version: '7'
    -
        author: Solen Guitter
        date: '2014-08-25 14:01'
        message: Remove 5.4 reference
        version: '6'
    -
        author: Solen Guitter
        date: '2014-01-07 18:30'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-01-07 18:29'
        message: 'Added related topics and links, removed 5.4.2 mentions'
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2013-12-20 15:18'
        message: ''
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2013-12-05 14:24'
        message: ''
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2013-12-04 14:18'
        message: ''
        version: '1'

---
{{! excerpt}}

Both layouts and widgets have modes, that makes it possible to render the same layout in different use cases, even if some only support a simple "view" mode.

{{! /excerpt}}

The **layout modes** can be anything although some default modes are included in the application: `create`, `edit`, `view`. Some additional modes are available: `listing`, `search`, `bulkEdit`, `header`, `csv`, `pdf` and `plain`.

The **widget modes** are more restricted and widget types will usually only handle two modes: `edit` and `view`. Some additional modes are available by default:&nbsp;`pdf`, `csv` and&nbsp;`plain` (very close to the `view` mode except it's not supposed to include HTML tags). These additional modes are useful when exporting listings. The widget mode is computed from the layout mode (or from its parent widget mode).

Here is a table of the default mappings:

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Layout Mode

</th><th colspan="1">

Default Widget Mode

</th></tr><tr><td colspan="1">

create*, edit*, search*, bulkEdit*

</td><td colspan="1">

edit

</td></tr><tr><td colspan="1">

view*, summary*

</td><td colspan="1">

view

</td></tr><tr><td colspan="1">

csv*

</td><td colspan="1">

csv

</td></tr><tr><td colspan="1">

pdf*

</td><td colspan="1">

pdf

</td></tr><tr><td colspan="1">

any other value

</td><td colspan="1">

plain

</td></tr></tbody></table></div>

The pseudo mode&nbsp;`any` is only used in layouts and widgets definitions to set up default values.

It is possible to override this behavior in the [widget definition]({{page page='widget-definitions'}}) and state that, for instance, whatever the layout mode, the widget will be in `view` mode. This enables to make the widget display only read-only values. The pseudo-mode&nbsp;`hidden` can also be used in a widget definition to exclude this widget from the layout in a given mode.

It is also possible to use expressions to resolve this mode, for instance the following expression can be used to hide a widget displaying the `dublincore` field named `format` in `view` mode if this property is not filled on the document:

```xml
<widgetModes>
  <mode value="view">#{empty layoutValue.dc.format?'hidden':'view'}</mode>
</widgetModes>
```

See [Field Binding and Expressions]({{page page='field-binding-and-expressions'}}) for more information about available expression variables.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in current documentation'}}

- [Layout Definitions]({{page page='layout-definitions'}})
- [Widget Definitions]({{page page='widget-definitions'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related pages in Studio documentation'}}

- [Form Layouts]({{page space='studio' page='form-layouts'}})

{{/panel}}</div></div>
