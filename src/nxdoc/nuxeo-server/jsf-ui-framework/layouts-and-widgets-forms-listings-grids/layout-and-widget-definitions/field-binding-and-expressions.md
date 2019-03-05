---
title: Field Binding and Expressions
review:
    comment: ''
    date: '2019-02-13'
    status: ok
labels:
    - content-review-lts2016
    - el
    - layout
    - widget
    - scripting
    - layout-widgets-component
    - atchertchian
    - nxdoc-158
    - excerpt
    - content-review-lts2017
    - jsf-ui
toc: true
confluence:
    ajs-parent-page-id: '3868333'
    ajs-parent-page-title: Layout and Widget Definitions
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Field+Binding+and+Expressions
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Field+Binding+and+Expressions'
    page_id: '11043686'
    shortlink: ZoOo
    shortlink_source: 'https://doc.nuxeo.com/x/ZoOo'
    source_link: /display/NXDOC/Field+Binding+and+Expressions
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2016-09-01 09:13'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2015-10-12 13:17'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2015-10-12 13:16'
        message: Fix links
        version: '23'
    -
        author: Solen Guitter
        date: '2015-08-31 14:13'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2015-08-31 14:12'
        message: Update table of contents look
        version: '21'
    -
        author: Solen Guitter
        date: '2014-09-30 11:20'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-01-23 17:21'
        message: ''
        version: '19'
    -
        author: Thibaud Arguillere
        date: '2014-01-10 18:38'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2014-01-09 17:06'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2014-01-08 17:52'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2014-01-07 19:37'
        message: 'Formatting, removed mentions of old versions, '
        version: '15'
    -
        author: Anahide Tchertchian
        date: '2013-12-17 17:22'
        message: complete doc + remove WIP warning
        version: '14'
    -
        author: Anahide Tchertchian
        date: '2013-12-03 15:45'
        message: add links to Studio doc + fix tld link
        version: '13'
    -
        author: Anahide Tchertchian
        date: '2013-12-03 15:31'
        message: update related topics
        version: '12'
    -
        author: Anahide Tchertchian
        date: '2013-10-03 19:01'
        message: 'NXP-12692: mention new widgetProperties variable'
        version: '11'
    -
        author: Solen Guitter
        date: '2013-09-04 16:05'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2012-09-11 21:25'
        message: Migrated to Confluence 4.0
        version: '9'
    -
        author: Solen Guitter
        date: '2012-09-11 21:25'
        message: ''
        version: '8'
    -
        author: Anahide Tchertchian
        date: '2012-08-01 18:42'
        message: ''
        version: '7'
    -
        author: Anahide Tchertchian
        date: '2012-07-31 20:40'
        message: ''
        version: '6'
    -
        author: Anahide Tchertchian
        date: '2012-07-31 20:39'
        message: ''
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2012-07-31 20:38'
        message: ''
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2012-07-31 20:37'
        message: ''
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2012-07-31 20:35'
        message: ''
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2012-07-31 20:25'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

{{! excerpt}}
This chapter explains how field bindings are resolved, what is their purpose, and what variables are available for expressions depending on the context.
{{! /excerpt}}

## Field Bindings

The final binding used by the JSF component is built by the layout system at runtime so that it applies to the value you give it in the template defining the `nxl:layout` tag.

### Simple Use Case

You can use this kind of `nxl:layout` tag in a XHTML template.

```xml
<nxl:layout name="myLayoutName" mode="view" value="#{currentDocument}" />

```

The layout contains a widget mapped to the `dc:title` field (see the [Widget Definitions]({{page page='widget-definitions'}}) page):

```xml
<widget name="title" type="text">
 <labels>
   <label mode="any">label.dublincore.title</label>
 </labels>
 <translated>true</translated>
 <fields>
   <field>dc:title</field>
 </fields>
 <properties widgetMode="edit">
   <property name="required">true</property>
 </properties>
</widget> 
```

When the layout service builds the corresponding JSF view (dynamically via facelets), it will build the value expression `#{currentDocument.dc.title}` (or a similar expression achieving this) and give it to the JSF component that would be usually used for a `h:outputText` JSF tag.

Using the `field` property means that you expect the layout system to perform this mapping.

### Listing Use Case

Depending on the value given to the `nxl:layout` tag, the field definition may change. For instance, in a listing, the layout is not usually rendered on the document, but on a [`PageSelection`](http://community.nuxeo.com/api/nuxeo/7.4/javadoc/org/nuxeo/ecm/platform/query/api/PageSelection.html) element, wrapping the&nbsp; [`DocumentModel`](http://community.nuxeo.com/api/nuxeo/7.4/javadoc/org/nuxeo/ecm/core/api/DocumentModel.html) to handle selection information. So a [ `text` widget]({{page page='basic-widget-types#widget-text'}}) showing the widget `title` would have the field binding `data['dc']['title']` instead of `dc:title`.

```xml
<widget name="title" type="text">
  <labels>
    <label mode="any">Title</label>
  </labels>
  <translated>false</translated>
  <fields>
    <field>data['dc']['title']</field>
  </fields>
</widget>
```

Using the syntax `data.dc.title` is also an option as it will produce a valid EL expression. But the&nbsp;`data['dc']['title']` syntax makes it possible to correctly handle cases where the schema or field name contains a dash "-" character. The "data" binding is mentioned here because it will resolve the `PageSelection#getData` method, which resolves to the `DocumentModel`. Subsequent "dc" and "title" configurations make it resolve the document field named "title" in the "dublincore" schema (defined to use prefix "dc").

### Overriding the Layout System Mapping

If you would like to map your widget to another object than the one the layout is applying to, you can use an EL expression in a custom property named&nbsp;`value` instead. It will override the field mapping generated by the layout system.

Since 5.8, you can even do so in the field definition (which makes it possible to define EL expressions for several fields). This can also be useful to display values resolved dynamically, like providing the difference between two integers kept on your document metadata, for instance `#{layoutValue.data.mySchema.myFirstNumber - layoutValue.data.mySchema.mySecondNumber}`. Also, remember that if you are displaying such expression while the widget is not in a listing, you cannot use `data`. The expression will be: `#{layoutValue.mySchema.myFirstNumber - layoutValue.mySchema.mySecondNumber}`.

## {{> anchor 'el-expressions-in-layout-widgets'}}EL Expressions in Layouts and Widgets

### Variables in Definitions

Some variables are available within layout and widget definitions, and can be referenced in properties, modes and field bindings definitions.

*   `layoutValue`: represents the value (evaluated) passed in a&nbsp;`nxl:layout` or `nxl:documentLayout` tag attribute.
*   `layoutMode`: represents the mode (evaluated) passed in a&nbsp;`nxl:layout` or `nxl:documentLayout` tag attribute.

### Variables in Templates

Some variables are made available to the EL context when using layout or widget templates.

*   Inside the **layout context**, the following global variables are available:

    *   `layoutValue`: represents the value (evaluated) passed in a&nbsp;`nxl:layout` or `nxl:documentLayout` tag attribute.
    *   `layoutMode`: represents the mode (evaluated) passed in a&nbsp;`nxl:layout` or `nxl:documentLayout` tag attribute.

    *   `value`: represents the current value as manipulated by the tag. In both `nxl:layout` and&nbsp;`nxl:widget` tags, it will represent the value resolved from the&nbsp;`value` tag attribute. This value will work with field information passed in the widget definition to resolve fields and subfields. The variable&nbsp;`document` is available as an alias of `value`, although it does not always represent a document model (as layouts can apply to any kind of object).
    *   `value_n`: represents the current value as manipulated by the tag, as above, excepts it includes the widget level (`value_0`, `value_1`, etc...). This is useful when needing to use the value as defined in a parent widget, for instance.

*   Inside a **layout template**, the variable "layout" is available. It make it possible to access the generated layout object. Since Nuxeo 5.8, the layout properties are also exposed for easier resolution of EL expressions: for instance, the variable `layoutProperty_title` represents the resolved property with name `title`.

*   Inside a **`nxl:layoutRow` tag**, the variables&nbsp;`layoutRow` and `layoutRowIndex` are available to access the generated layout row, and its index within the iteration over rows. The equivalent&nbsp;`layoutColumn` and&nbsp;`layoutColumnIndex` variables are also available for the **`nxl:layoutColumn` tag**.

*   Inside a **`nxl:layoutRowWidget`** , or equivalent `nxl:layoutColumnWidget` tag, the variables&nbsp;`widget` and `widgetIndex` are available to access the generated current widget, and its index in the row or column. The variables with level information are also available: `widget_0`, `widget_1`, etc. and `widgetIndex_0`, `widgetIndex_1`, etc. This is useful when needing to use the widget as defined in a higher level.

*   Inside a **widget template**, some `field_n` variables are available: `field` or&nbsp;`field_0` represents the resolved first field value,&nbsp;`field_1` the second value, etc.
    The widget properties are also exposed for easier resolution of EL expressions: for instance, the variable&nbsp;`widgetProperty_onchange` represents the resolved property with name `onchange`.
    The variable&nbsp;`fieldOrValue` is also available, in case the widget should be bound to the layout value (or parent widget value) when field definitions are empty.
    Since Nuxeo 5.8, the variable&nbsp;`widgetProperties` is also available, exposing the complete map of resolved widget properties.

The complete reference is available at [http://community.nuxeo.com/api/nuxeo/release-7.4/tlddoc/nxl/tld-summary.html](http://community.nuxeo.com/api/nuxeo/release-7.4/tlddoc/nxl/tld-summary.html).

{{#> callout type='note' }}

There are some inconsistencies between variables exposed in layout/widget definitions and variables exposed in layout/widget templates. You can follow issue [NXP-10423](https://jira.nuxeo.com/browse/NXP-10423) for improvements about this.

{{/callout}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in current documentation'}}

- [How to Add a New Widget to the Default Summary Layout]({{page page='how-to-add-a-new-widget-to-the-default-summary-layout'}})
- [Standard Widget Types]({{page page='standard-widget-types'}})
- [Custom Layout and Widget Templates]({{page page='custom-layout-and-widget-templates'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

&nbsp;

</div></div>
