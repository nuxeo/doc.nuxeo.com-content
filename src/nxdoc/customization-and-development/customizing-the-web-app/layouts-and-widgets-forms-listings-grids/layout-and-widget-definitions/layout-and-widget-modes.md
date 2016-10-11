---
title: Layout and Widget Modes
review:
    comment: ''
    date: ''
    status: ok
labels:
    - layout
    - widget
confluence:
    ajs-parent-page-id: '17334430'
    ajs-parent-page-title: Layout and Widget Definitions
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Layout+and+Widget+Modes
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Layout+and+Widget+Modes'
    page_id: '18449622'
    shortlink: 1oQZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/1oQZAQ'
    source_link: /display/NXDOC58/Layout+and+Widget+Modes
history:
    - 
        author: Solen Guitter
        date: '2016-08-30 15:56'
        message: ''
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2014-12-08 16:20'
        message: 'NXDOC-286: cosmit'
        version: '4'
    - 
        author: Solen Guitter
        date: '2014-01-23 17:19'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2014-01-22 15:16'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-01-22 15:15'
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

'view' before 5.4.2, 'plain' after

</td></tr></tbody></table></div>

It is possible to override this behavior in the [widget definition]({{page page='widget-definitions'}}) and state that, for instance, whatever the layout mode, the widget will be in `view` mode. This enables to make the widget display only read-only values. The pseudo-mode&nbsp;`hidden` can also be used in a widget definition to exclude this widget from the layout in a given mode.

The pseudo mode&nbsp;`any` is only used in layouts and widgets definitions to set up default values.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in current documentation'}}

&nbsp;

*   [Layout Definitions]({{page page='layout-definitions'}})
*   [Widget Definitions]({{page page='widget-definitions'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related pages in Studio documentation'}}

*   [Form Layouts]({{page space='studio' page='form-layouts'}})

{{/panel}}</div></div>