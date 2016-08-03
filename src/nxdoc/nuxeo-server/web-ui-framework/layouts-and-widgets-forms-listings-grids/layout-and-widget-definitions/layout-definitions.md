---
title: Layout Definitions
labels:
    - layout
    - layout-widgets-component
    - excerpt
toc: true
confluence:
    ajs-parent-page-id: '3868333'
    ajs-parent-page-title: Layout and Widget Definitions
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Layout+Definitions
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Layout+Definitions'
    page_id: '17794338'
    shortlink: IoUPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/IoUPAQ'
    source_link: /display/NXDOC/Layout+Definitions
history:
    - 
        author: Anahide Tchertchian
        date: '2014-12-08 18:22'
        message: 'XDOC-427: mention layout aliase'
        version: '15'
    - 
        author: Anahide Tchertchian
        date: '2014-12-08 18:20'
        message: 'NXDOC-286: more info about layout types'
        version: '14'
    - 
        author: Anahide Tchertchian
        date: '2014-12-08 18:16'
        message: 'NXDOC-427: reference the listingTable layout type in sample'
        version: '13'
    - 
        author: Solen Guitter
        date: '2014-12-05 18:56'
        message: Remove link to advanced search page (obsolete)
        version: '12'
    - 
        author: Manon Lumeau
        date: '2014-11-04 17:13'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2014-10-03 15:38'
        message: link update
        version: '10'
    - 
        author: Anahide Tchertchian
        date: '2014-01-09 16:57'
        message: add anchor and link to listing widget types
        version: '9'
    - 
        author: Solen Guitter
        date: '2014-01-08 15:53'
        message: format
        version: '8'
    - 
        author: Solen Guitter
        date: '2014-01-07 17:04'
        message: Added related topics
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-01-07 17:00'
        message: Added TOC and links
        version: '6'
    - 
        author: Anahide Tchertchian
        date: '2013-12-17 16:47'
        message: add reference to the field bindings and expressions doc
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2013-12-05 14:23'
        message: ''
        version: '4'
    - 
        author: Anahide Tchertchian
        date: '2013-12-05 14:22'
        message: >-
            add info about grid layouts and other kinds of layouts (generic
            usage)
        version: '3'
    - 
        author: Anahide Tchertchian
        date: '2013-12-04 13:52'
        message: moving layout definitions doc to a dedicated page
        version: '2'
    - 
        author: Anahide Tchertchian
        date: '2013-12-03 16:53'
        message: ''
        version: '1'

---
{{! excerpt}}

Layouts can be used to display various kinds of information, in various renderings.&nbsp;

{{! /excerpt}}

## Layout Registration

Layouts are registered using a regular [extension point]({{page page='runtime-and-component-model'}}) on the [Nuxeo ECM layout service](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewComponent/org.nuxeo.ecm.platform.forms.layout.WebLayoutManager). Here is a sample contribution.

```

        header

          title

          description

          label.dublincore.title

        true

          dc:title

          true

          label.dublincore.description

        true

          dc:description

```

## Layout Definition

The above layout definition is used to display the title and the description of a document. Here are its properties:

*   `name`: the string used as an identifier. In the example, the layout name is `heading`.
*   `templates`: the list of templates to use for this layout global rendering. In the example, the layout template in any mode is the XHTML file at "`/layouts/layout_default_template.xhtml`". Please refer to [section about custom layout templates]({{page page='custom-layout-and-widget-templates'}}) for more information.
*   `rows`: the definition about which widgets will have to be displayed on this row. Each row can hold several widgets, and an empty `widget` tag can be used to control the alignment. The widget has to match a widget name given in this layout definition. If none is found, it will lookup a global widget with this name in the global registry of widgets.
    In the example, two rows have been defined: the first one will hold the `title` widget, and the second one will hold the `description` widget.
*   `widget`: a layout definition can hold any number of widget definitions. If the widget is not referenced in the rows definition, it will be ignored. Referencing a global widget instead of defining it locally is a convenient way to share widget definitions between layouts. Please refer to the [Widget Definitions]({{page page='widget-definitions'}}) section.
*   `type`: an optional type has been introduced on layouts, making it possible to avoid repeating the templates to use when declaring a layout definition. Please refer to the [Standard Layout Types]({{page page='standard-layout-types'}}) section.
*   `aliases`: an optional alternative name for this layout. This is useful for compatibility management, when renaming a given layout. If another layout is declared with the same name, the last layout to be declared will be taken into account at runtime.

## Listing Layout Definition

Layouts can also be used to render table rows, as long as their mode (or their widgets mode) do not depend on the iteration variable (as the layout is built when building the JSF tree, too early in the JSF construction mechanism for most iteration variables).

A [layout type]({{page page='standard-layout-types'}}) has been extracted to make this configuration easier, so links to templates do not need to be referenced here.

For this usage, columns/column aliases have been defined because they are more intuitive when describing a row in the layout. The layout `layout_listing_template.xhtml` makes it possible to define new properties to take care of when rendering the table header or columns.

```

        selected
        data.ref

        data
        data.ref
        data.type
        data.folder

        label.content.header.title

      true

        data
        data.ref
        data.dc.description
        data.file.content
        data.file.filename

        file:content
        file

        label.content.header.modified

      true

        data.dc.modified

        #{nxu:basicDateAndTimeFormater()}

        true
        true

              true

            false
            iconColumn

            true

            true

          listing_selection_box_with_current_document

            false
            iconColumn

          listing_icon_type

            true
            dc:title

          listing_title_link

            true
            dc:modified

          listing_modification_date

```

Here widgets have been defined globally, as well as their types. New widget types, or simply widget templates, can be made taking example on the existing ones, see [the layouts-listing-contrib.xml](https://github.com/nuxeo/nuxeo-jsf/blob/master/nuxeo-platform-webapp-base/src/main/resources/OSGI-INF/layouts-listing-contrib.xml) and chapter about [Listing Widget Types]({{page page='listing-widget-types'}}).

Note that field bindings are a bit different here since they do not hold just the property path, but the&nbsp;`data` prefix. For more information about this, please read [Field Binding and Expressions]({{page page='field-binding-and-expressions'}}).

More information about how to write a listing layout template can be read in section [Custom Layout and Widget Templates]({{page page='custom-layout-and-widget-templates'}}).

## Grid Layout Definition

Layouts can also be used to render grid layouts, visible on documents "Summary" tab for instance.

Here is a sample contribution showing how to define grid slots and corresponding size. The online [Style Guide](http://showcase.nuxeo.com/nuxeo/styleGuide) shows detailed information about [grids styling](http://showcase.nuxeo.com/nuxeo/styleGuide/Grid).

```

        gridStyle12

      summary_panel_top

        gridStyle7
        gridStyle5

      summary_panel_left
      summary_panel_right

        gridStyle12

      summary_panel_bottom

```

## Other Kinds of Layout Definitions

Above examples show that depending on the layout template used to perform the rendering, specific configuration can be held by the layout definition to allow performing customized behavior and rendering.

As an example, [Studio]({{page space='studio'}}) generates specific layout templates to handle `colspans` in generated rendering. Colspan information is kept on layout rows properties.

* * *

<div class="row" data-equalizer="" data-equalize-on="medium">

<div class="column medium-6">{{#> panel heading="Related pages in current documentation"}}

{{/panel}}

</div>

<div class="column medium-6">{{#> panel heading="Related pages in Studio documentation"}}

{{/panel}}

</div>

</div>