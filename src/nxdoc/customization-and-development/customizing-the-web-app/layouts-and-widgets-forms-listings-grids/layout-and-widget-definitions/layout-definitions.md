---
title: Layout Definitions
review:
    comment: ''
    date: ''
    status: ok
labels:
    - layout
toc: true
confluence:
    ajs-parent-page-id: '17334430'
    ajs-parent-page-title: Layout and Widget Definitions
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Layout+Definitions
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Layout+Definitions'
    page_id: '18449614'
    shortlink: zoQZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/zoQZAQ'
    source_link: /display/NXDOC58/Layout+Definitions
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 12:59'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2014-01-23 17:15'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2014-01-23 16:23'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2014-01-22 15:12'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-01-22 15:08'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">{{! excerpt}}

Layouts can be used to display various kinds of information, in various renderings.&nbsp;

{{! /excerpt}}

## Layout Registration

Layouts are registered using a regular [extension point]({{page page='extension-points-configuration'}}) on the [Nuxeo ECM layout service](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewComponent/org.nuxeo.ecm.platform.forms.layout.WebLayoutManager). Here is a sample contribution.

```
<?xml version="1.0"?>

<component name="org.nuxeo.ecm.platform.forms.layouts.webapp">

  <extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
    point="layouts">

    <layout name="heading">
      <templates>
        <template mode="any">/layouts/layout_default_template.xhtml</template>
      </templates>
      <rows>
        <row>
          <widget>title</widget>
        </row>
        <row>
          <widget>description</widget>
        </row>
      </rows>
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
      <widget name="description" type="textarea">
        <labels>
          <label mode="any">label.dublincore.description</label>
        </labels>
        <translated>true</translated>
        <fields>
          <field>dc:description</field>
        </fields>
      </widget>
    </layout>

  </extension>

</component>

```

</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

## Layout Definition

The above layout definition is used to display the title and the description of a document. Here are its properties:

*   `name`: the string used as an identifier. In the example, the layout name is `heading`.
*   `templates`: the list of templates to use for this layout global rendering. In the example, the layout template in any mode is the XHTML file at "`/layouts/layout_default_template.xhtml`". Please refer to [section about custom layout templates]({{page page='custom-layout-and-widget-templates'}}) for more information.
*   `rows`: the definition about which widgets will have to be displayed on this row. Each row can hold several widgets, and an empty `widget` tag can be used to control the alignment. The widget has to match a widget name given in this layout definition. If none is found, it will lookup a global widget with this name in the global registry of widgets.
    In the example, two rows have been defined: the first one will hold the `title` widget, and the second one will hold the `description` widget.
*   `widget`: a layout definition can hold any number of widget definitions. If the widget is not referenced in the rows definition, it will be ignored. Referencing a global widget instead of defining it locally is a convenient way to share widget definitions between layouts. Please refer the [Widget Definitions section]({{page page='widget-definitions'}}).

## {{> anchor 'listing-layout'}}Listing Layout Definition

Layouts can also be used to render table rows, as long as their mode (or their widgets mode) do not depend on the iteration variable (as the layout is built when building the JSF tree, too early in the JSF construction mechanism for most iteration variables).

For this usage, columns/column aliases have been defined because they are more intuitive when describing a row in the layout. The layout `layout_listing_template.xhtml` makes it possible to define new properties to take care of when rendering the table header or columns.

```
<?xml version="1.0"?>

<component name="org.nuxeo.ecm.platform.forms.layouts.webapp.listing">

  <extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
    point="widgets">

    <widget name="listing_selection_box_with_current_document"
      type="listing_selection_box_with_current_document">
      <labels>
        <label mode="any"></label>
      </labels>
      <fields>
        <field>selected</field>
        <field>data.ref</field>
      </fields>
    </widget>

    <widget name="listing_icon_type" type="listing_icon_type">
      <labels>
        <label mode="any"></label>
      </labels>
      <fields>
        <field>data</field>
        <field>data.ref</field>
        <field>data.type</field>
        <field>data.folder</field>
      </fields>
    </widget>

    <widget name="listing_title_link" type="listing_title_link">
      <labels>
        <label mode="any">label.content.header.title</label>
      </labels>
      <translated>true</translated>
      <fields>
        <field>data</field>
        <field>data.ref</field>
        <field>data.dc.description</field>
        <field>data.file.content</field>
        <field>data.file.filename</field>
      </fields>
      <properties mode="any">
        <property name="file_property_name">file:content</property>
        <property name="file_schema">file</property>
      </properties>
    </widget>

    <widget name="listing_modification_date" type="datetime">
      <labels>
        <label mode="any">label.content.header.modified</label>
      </labels>
      <translated>true</translated>
      <fields>
        <field>data.dc.modified</field>
      </fields>
      <properties widgetMode="any">
        <property name="pattern">#{nxu:basicDateAndTimeFormater()}</property>
      </properties>
    </widget>

  </extension>

  <extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
    point="layouts">

    <layout name="document_listing_sample">
      <templates>
        <template mode="any">/layouts/layout_listing_template.xhtml</template>
      </templates>
      <properties mode="any">
        <property name="showListingHeader">true</property>
        <property name="showRowEvenOddClass">true</property>
      </properties>
      <columns>
        <column>
          <properties mode="any">
            <property name="isListingSelectionBoxWithCurrentDocument">
              true
            </property>
            <property name="useFirstWidgetLabelAsColumnHeader">false</property>
            <property name="columnStyleClass">iconColumn</property>
          </properties>
          <widget>listing_selection_box_with_current_document</widget>
        </column>
        <column>
          <properties mode="any">
            <property name="useFirstWidgetLabelAsColumnHeader">false</property>
            <property name="columnStyleClass">iconColumn</property>
          </properties>
          <widget>listing_icon_type</widget>
        </column>
        <column>
          <properties mode="any">
            <property name="useFirstWidgetLabelAsColumnHeader">true</property>
            <property name="sortPropertyName">dc:title</property>
          </properties>
          <widget>listing_title_link</widget>
        </column>
        <column>
          <properties mode="any">
            <property name="useFirstWidgetLabelAsColumnHeader">true</property>
            <property name="sortPropertyName">dc:modified</property>
          </properties>
          <widget>listing_modification_date</widget>
        </column>
      </columns>
    </layout>

  </extension>

</component>

```

Here widgets have been defined globally, as well as their types. New widget types, or simply widget templates, can be made taking example on the existing ones, see [the layouts-listing-contrib.xml](https://github.com/nuxeo/nuxeo-jsf/blob/release-5.8/nuxeo-platform-webapp-base/src/main/resources/OSGI-INF/layouts-listing-contrib.xml) and chapter about [Listing Widget Types]({{page page='listing-widget-types'}}).

Note that field bindings are a bit different here since they do not hold just the property path, but the&nbsp;`data` prefix. For more information about this, please read [Field Binding and Expressions]({{page page='field-binding-and-expressions'}}).

More information about how to write a listing layout template can be read in section [Custom Layout and Widget Templates]({{page page='custom-layout-and-widget-templates'}}). If you need to define listing layouts that handle column selection, please refer to the [Advanced Search]({{page page='advanced-search'}}) chapter as it gives a complete example on how this is achieved for this feature.

## Grid Layout Definition

Layouts can also be used to render grid layouts, visible on documents "Summary" tab for instance.

Here is a sample contribution showing how to define grid slots and corresponding size. The online [Style Guide](http://showcase.nuxeo.com/nuxeo/styleGuide) shows detailed information about [grids styling](http://showcase.nuxeo.com/nuxeo/styleGuide/Grid).

```xml
<layout name="grid_summary_layout">
  <templates>
    <template mode="any">
      /layouts/layout_grid_template.xhtml
    </template>
  </templates>
  <rows>
    <row>
      <properties mode="any">
        <property name="nxl_gridStyleClass_0">gridStyle12</property>
      </properties>
      <widget>summary_panel_top</widget>
    </row>
    <row>
      <properties mode="any">
        <property name="nxl_gridStyleClass_0">gridStyle7</property>
        <property name="nxl_gridStyleClass_1">gridStyle5</property>
      </properties>
      <widget>summary_panel_left</widget>
      <widget>summary_panel_right</widget>
    </row>
    <row>
      <properties mode="any">
        <property name="nxl_gridStyleClass_0">gridStyle12</property>
      </properties>
      <widget>summary_panel_bottom</widget>
    </row>
  </rows>
</layout>
```

## Other Kinds of Layout Definitions

Above examples show that depending on the layout template used to perform the rendering, specific configuration can be held by the layout definition to allow performing customized behavior and rendering.

As an example, [Studio]({{page space='studio'}}) generates specific layout templates to handle `colspans` in generated rendering. Colspan information is kept on layout rows properties.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in current documentation'}}

*   [Layout and Widget Modes]({{page page='layout-and-widget-modes'}})
*   [Generic Layout Usage]({{page page='generic-layout-usage'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related pages in Studio documentation'}}

*   [Form Layouts in Nuxeo Studio]({{page space='studio' page='form-layouts'}})
*   [Tabs in Nuxeo Studio]({{page space='studio' page='tabs'}})

{{/panel}}</div></div>