---
title: Custom Layout and Widget Templates
labels:
    - summary-layout
    - widget
    - layout-widgets-component
    - excerpt
toc: true
confluence:
    ajs-parent-page-id: '950330'
    ajs-parent-page-title: 'Layouts and Widgets (Forms, Listings, Grids)'
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Custom+Layout+and+Widget+Templates
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Custom+Layout+and+Widget+Templates'
    page_id: '3868351'
    shortlink: vwY7
    shortlink_source: 'https://doc.nuxeo.com/x/vwY7'
    source_link: /display/NXDOC/Custom+Layout+and+Widget+Templates
history:
    - 
        author: Vincent Dutat
        date: '2016-02-12 03:21'
        message: ''
        version: '23'
    - 
        author: Manon Lumeau
        date: '2015-09-16 12:21'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2014-12-09 10:21'
        message: ''
        version: '21'
    - 
        author: Anahide Tchertchian
        date: '2014-12-08 17:58'
        message: 'NXDOC-286: fix link'
        version: '20'
    - 
        author: Anahide Tchertchian
        date: '2014-12-08 17:55'
        message: >-
            NXDOC-286: remove the outdated and now useless complex widget type
            example
        version: '19'
    - 
        author: Anahide Tchertchian
        date: '2014-12-08 17:51'
        message: 'NXDOC-286: update layout templates examples'
        version: '18'
    - 
        author: Anahide Tchertchian
        date: '2014-12-08 17:40'
        message: 'NXDOC-286: update layout templates examples'
        version: '17'
    - 
        author: Anahide Tchertchian
        date: '2014-11-04 17:17'
        message: update TOC panel
        version: '16'
    - 
        author: Solen Guitter
        date: '2014-01-22 15:42'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2014-01-22 15:41'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2014-01-08 17:58'
        message: 'Formatting, removed 5.3.0 sections'
        version: '13'
    - 
        author: Anahide Tchertchian
        date: '2013-12-12 17:29'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-09-04 16:09'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2012-09-11 21:33'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2012-09-11 21:33'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-07-06 10:00'
        message: 'Added TOC and related pages '
        version: '8'
    - 
        author: Anahide Tchertchian
        date: '2012-06-04 14:07'
        message: ''
        version: '7'
    - 
        author: Anahide Tchertchian
        date: '2012-06-04 14:05'
        message: ''
        version: '6'
    - 
        author: Anahide Tchertchian
        date: '2012-06-04 14:02'
        message: ''
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2011-04-18 18:56'
        message: ''
        version: '4'
    - 
        author: Anahide Tchertchian
        date: '2011-03-01 16:05'
        message: ''
        version: '3'
    - 
        author: Anahide Tchertchian
        date: '2010-10-12 15:21'
        message: ''
        version: '2'
    - 
        author: Anahide Tchertchian
        date: '2010-10-12 15:16'
        message: ''
        version: '1'

---
{{! excerpt}}

Some templating features have been made available to make it easier to control the layouts and widgets rendering.

{{! /excerpt}}

## Custom Layout Template

A layout can define an XHTML template to be used in a given mode. Let's take a look at the default template structure.

```

```

This template is intended to be unused in any mode, so the layout mode is checked to provide a different rendering in "edit", "create", "view" modes and other modes.

When this template is included in the page, several variables are made available:

*   `layout`: the computed layout value; its mode and number of columns can be checked on it.
*   `value` or `document`: the document model (or whatever item used as value).

The layout system integration using facelets features requires that iterations are performed on the layout rows and widgets. The `<nxl:layoutRow>` and `<nxl:layoutRowWidget />` trigger these iterations. Inside the `layoutRow` tag, two more variables are made available: `layoutRow` and `layoutRowIndex`. Inside the `layoutRowWidget`, two more variables are made available: `widget` and `widgetIndex`.

These variables can be used to control the layout rendering. For instance, the default template is the one applying the "required" style on widget labels, and translating these labels if the widget must be translated. It also makes sure widgets on the same rows are presented in the same table row.

This template also shows that:

*   Layout templates can handle properties set on the layout definition (here to control the display of its subwidgets via a property named&nbsp;`widgetsDisplay`).
*   Layout templates can check [controls set on widgets configuration]({{page page='widget-definitions'}}) (here to add a form around the widget or not).

## Listing Template

This layout intends to render columns within a table: each line will be filled thanks to a layout configuration. It is only used in view mode. Let's take a look at the default listing template structure.

```

  Layout template applying to an item instance of SelectDataModel named "documents"

  Other needed parameters are:
  - provider: instance of a ResultProvider to handle sort
  - layoutListingStatus: iteration status, used to print table header
    matching widget label.

  Since 5.8, removed selection and sort actions (see NXP-12435).

```

As you can see, this layout makes it possible to use the first defined widget in a given column to print a label, and maybe translate it. It also relies on properties defined in the layout or layout column properties to handle selection, column style class, sorting on the provider, etc.

Any custom template can be defined following this example to handle additional properties to display on the final table header and columns.

## Custom Summary Template

The summary uses a custom template to use "div" elements instead of tables, more appropriate to a dashboard-like view.

This template uses a "grid" rendering allowing fine-grained control over the place used by widgets. It combines the following layout template with the use of the standard ["container"]({{page page='decoration-widget-types'}}) widget type. The container widgets pile up any number of widgets displaying information about the document metadata, its state, relations, publications, etc.

```

    Handles grid layouts, using style classes defined by row properties.

```

When using this layout template, the layout definition will use properties defined on rows to allow more or less place to the widgets. Here is the default summary definition:

```

        gridStyle7
        gridStyle5

      summary_left_panel
      summary_right_panel

```

Here the first widget, containing widgets to display on the left part of the page, will take approximately 60% of the page. Here is a diagram to help you design layouts using grids:

![]({{file name='grid-layout-css-classes.png'}} ?w=752,h=323,border=true)

## Custom Widget Template

The template widget type makes it possible to set a template to use as an include.

Let's have a look at a sample template used to present contributors to a document.

```

      #{status.last ? andLabel : ', '}

```

This widget presents the contributors of a document with specific links on each on these user identifier information, whatever the widget mode.

Having a widget type just to perform this kind of rendering would be overkill, so using a widget with type "template" can be useful here.

Template widgets should handle the new 'plain' and 'pdf' modes for an accurate rendering of the layout in PDF (content view and document export) and CSV (content view export). CSV export does not need any specific CSV rendering, so the widget rendering in 'plain' mode should be enough.

Some helper methods make it easier to check the widget mode, here is the complete current definition of the contributors widget type in the Nuxeo Platform.

```

      #{status.last ? andLabel : ', '}

      #{status.last ? andLabel : ', '}

```

Note that extra spaces have been removed when rendering in the "plain" mode as these spaces may appear on the final rendering (in CSV columns for instance).

When this template is included in the page, the&nbsp;`widget` variable is made available. For a complete list of available variables, please refer to the [EL expressions documentation]({{page page='field-binding-and-expressions'}}).

Some rules must be followed when writing XHTML to be included in templates:

*   Use the widget id as identifier: the widget id is computed to be unique within the page, so it should be used instead of fixed id attributes so that another widget using the same template will not introduce duplicated ids in the JSF component tree.
*   Use the variable with name following the field_n pattern to reference field values. For instance, binding a JSF component value attribute to `#{field_0}` means binding it to the first field definition. The expression `#{field}` is an alias to `#{field_0}`.

## Built-in Templates to Handle Complex Properties

### List Widget Template

The standard widget type "list" is actually a widget of type "template" using a static template path: `/widgets/list_widget_template.xhtml`. If this default behavior does not suit your needs, you can simply copy this template, make your changes, and use a widget of type "template" with the new template path.

This template assumes that each element of the list will be displayed using subwidgets definitions.

For instance, to handle a list of String elements, you can use the definition:

```

    dc:contributors

```

The empty field definition in the subwidget is used to specify that each element of the list is itself the element to display.

### Lists of Lists

A builtin template has been added to handle sublists: the original "list" widget is equivalent to a widget of type "template" using the file `/widgets/list_widget_template.xhtml`. To handle the sublist, this template needs to be changed. The file `list_subwidget_template.xhtml` is available for it.

To handle a sublist property, you can use take example on this definition:

```

    company:employees

          /widgets/complex_list_item_widget_template.xhtml

            phoneNumbers

              /widgets/list_subwidget_template.xhtml

```