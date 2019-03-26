---
title: Widget Definitions
review:
    comment: ''
    date: '2019-02-13'
    status: ok
labels:
    - content-review-lts2016
    - widget
    - layout-widgets-component
    - atchertchian
    - excerpt
    - content-review-lts2017
    - jsf-ui
toc: true
confluence:
    ajs-parent-page-id: '3868333'
    ajs-parent-page-title: Layout and Widget Definitions
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Widget+Definitions
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Widget+Definitions'
    page_id: '17794340'
    shortlink: JIUPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/JIUPAQ'
    source_link: /display/NXDOC/Widget+Definitions
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2016-08-31 14:07'
        message: ''
        version: '20'
    -
        author: Anahide Tchertchian
        date: '2015-12-08 13:51'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2014-12-09 10:18'
        message: format
        version: '18'
    -
        author: Anahide Tchertchian
        date: '2014-12-08 18:26'
        message: 'NXDOC-427: mention widget aliases'
        version: '17'
    -
        author: Anahide Tchertchian
        date: '2014-12-08 16:41'
        message: 'NXDOC-286: remove "since 5.8" mentions'
        version: '16'
    -
        author: Anahide Tchertchian
        date: '2014-12-08 16:29'
        message: 'NXDOC-286: fix anchor link to widget controls'
        version: '15'
    -
        author: Anahide Tchertchian
        date: '2014-12-08 16:27'
        message: 'NXDOC-286: cosmit'
        version: '14'
    -
        author: Solen Guitter
        date: '2014-01-23 17:18'
        message: Code block formatting
        version: '13'
    -
        author: Solen Guitter
        date: '2014-01-07 18:26'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-01-07 17:46'
        message: Added links
        version: '11'
    -
        author: Solen Guitter
        date: '2014-01-07 17:29'
        message: ''
        version: '10'
    -
        author: Anahide Tchertchian
        date: '2013-12-17 16:43'
        message: add reference to the field bindings and expressions doc
        version: '9'
    -
        author: Anahide Tchertchian
        date: '2013-12-12 17:30'
        message: add anchor for controls
        version: '8'
    -
        author: Anahide Tchertchian
        date: '2013-12-12 14:55'
        message: fix name for default control
        version: '7'
    -
        author: Anahide Tchertchian
        date: '2013-12-12 14:21'
        message: fix typo
        version: '6'
    -
        author: Anahide Tchertchian
        date: '2013-12-06 19:39'
        message: add controls + table of contents
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2013-12-06 15:22'
        message: remove useless excerpt
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2013-12-05 17:39'
        message: ''
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2013-12-04 13:53'
        message: move widget definitions to a dedicated page
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2013-12-03 16:54'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

{{! excerpt}}
This page describes the different elements that can be used to define widgets.
{{! /excerpt}}

&nbsp;

> Last night a widget saved my life
>
> &ndash; ui:Indeep

## Sample Definition

Here is a sample contribution of widget definitions inside a layout definition:

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

Two widget definitions are presented on the above example. Let's look into the `title` widget and present its properties:

*   `name`: the string used as an identifier in the layout context.
    In the example, the widget name is `title`.
*   `type`: the widget type that will manage the rendering of this widget.
    In this example, the widget type is `text`. This widget type is a standard widget types, more information about widget types is available on the[ Standard Widget Types page]({{page page='standard-widget-types'}}).
*   `labels`: the list of labels to use for this widget in a [given mode]({{page page='layout-and-widget-modes'}}). If no label is defined in a specific mode, the label defined in the "any" mode will be taken as default.
    In the example, a single label is defined for any mode to the `label.dublicore.title` message. If no label is defined at all, a default label will be used following the convention: `label.widget.[layoutName].[widgetName]`.
*   `translated`: the string representing a boolean value ("true" or "false") and defaulting to "false". When set as translated, the widget labels will be treated as messages and displayed translated. In the example, the `label.dublincore.title` message will be translated at rendering time.
*   `fields`: the list of fields that will be managed by this widget. In the example, we handle the field `dc:title` where "dc" is the prefix for the "dublincore" schema. If the schema you would like to use does not have a prefix, use the schema name instead. Note that most of standard widget types only handle one field. The field definition also accepts an EL expression. For more information about this please read [Field Binding and Expressions]({{page page='field-binding-and-expressions'}}).

    {{#> callout type='tip' }}

    When dealing with an attribute from the document that is not a metadata, you can use the property name as it will be resolved like a value expression of the form `#{document.attribute}`, like `#{document.id}` for instance.

    {{/callout}}
*   `properties`: the list of properties that will apply to the widget in a [given mode]({{page page='layout-and-widget-modes'}}). Properties listed in the "any" mode will be merged with properties for the specific mode. Depending on the widget type, these properties can be used to control what JSF component will be used and/or what attributes will be set on these components. In standard widget types, only one component is used given the mode, and properties will be set as attributes on the component. For instance, when using the `text` widget type, every property accepted by the `<h:inputText />` tag can be set as properties on "edit" and "create" modes, and every property accepted by the `<h:outputText />` tag can be set as properties. Properties can also be added in a given widget mode.

## Additional Configuration

Additional configuration can be set on a widget:

*   `helpLabels`: a list that follows the same pattern as labels, but used to set help labels.
*   `widgetModes`: the list of local mode mappings that override the default one. [Local mode]({{page page='layout-and-widget-modes'}}) is deduced from the layout mode or from the parent widget mode.
*   `subWidgets`: the list of widget definitions, as the widget list, used to describe subwidgets use to help the configuration of some complex widget types.
*   `controls`: an additional configuration to control the behavior of a widget (see the [Widget Controls section](#controlswidgetcontrols) below).
*   `aliases`: an optional alternative name for this widget. This is useful for compatibility management, when renaming a given widget. If another widget is declared with the same name, the last widget to be declared will be taken into account at runtime.

Here is a more complex layout contribution that shows the syntax to use for these additional properties:

```
<?xml version="1.0"?>

<component name="org.nuxeo.ecm.platform.forms.layouts.webapp">

  <!-- WARNING: this extension point is only available from versions 5.1.7 and 5.2.0 -->
  <extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
    point="widgets">

    <!-- global definition of a widget so that it can be used
      in several layouts -->
    <widget name="description" type="textarea">
      <aliases>
        <alias>docdesc</alias>
        <alias>docsubject</alias>
      </aliases>
      <labels>
        <label mode="any">description</label>
      </labels>
      <translated>true</translated>
      <fields>
        <field>dc:description</field>
      </fields>
      <properties widgetMode="edit">
        <property name="styleClass">dataInputText</property>
      </properties>
    </widget>

  </extension>

  <extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
    point="layouts">

    <layout name="complex">
      <templates>
        <template mode="any">/layouts/layout_default_template.xhtml</template>
      </templates>
      <rows>
        <row>
          <widget>identifier</widget>
        </row>
        <row>
          <!-- reference a global widget -->
          <widget>description</widget>
        </row>
      </rows>
      <widget name="identifier" type="text">
        <labels>
          <label mode="any">label.dublincore.title</label>
        </labels>
        <translated>true</translated>
        <fields>
          <field>uid:uid</field>
        </fields>
        <widgetModes>
          <!-- not shown in create mode -->
          <mode value="create">hidden</mode>
        </widgetModes>
        <properties widgetMode="edit">
          <!-- required in widget mode edit -->
          <property name="required">true</property>
        </properties>
        <properties mode="view">
          <!-- property applying in view mode -->
          <property name="styleClass">cssClass</property>
        </properties>
      </widget>
    </layout>

  </extension>

</component>

```

&nbsp;

Here is a sample contribution showing subwidgets configuration:

```xml
<widget name="dam_text_search" type="container">
  <handlingLabels>true</handlingLabels>
  <labels>
    <label mode="any">label.dam.search.textSearch</label>
  </labels>
  <translated>true</translated>
  <properties widgetMode="any">
    <property name="hideSubLabels">true</property>
  </properties>
  <subWidgets>
    <widget name="ecm_fulltext" type="text">
      <labels>
        <label mode="any"></label>
      </labels>
      <translated>false</translated>
      <fields>
        <field>dams:ecm_fulltext</field>
      </fields>
      <properties widgetMode="edit">
        <property name="placeholder">
          #{messages['label.dam.search.text.placeholder']}
        </property>
      </properties>
    </widget>
  </subWidgets>
</widget>
```

You can also reference global widgets for subwidgets. Here is a sample configuration:

```xml
<widget name="dam_text_search" type="container">
  <handlingLabels>true</handlingLabels>
  <labels>
    <label mode="any">label.dam.search.textSearch</label>
  </labels>
  <translated>true</translated>
  <properties widgetMode="any">
    <property name="hideSubLabels">true</property>
  </properties>
  <subWidgetRefs>
    <widget>globalSubWidgetName</widget>
  </subWidgetRefs>
</widget>
```

If you need a richer structure to handle subwidgets, you can also consider using a ["layout" widget type]({{page page='advanced-widget-types#layout'}}) to render a layout via a widget.

## {{> anchor 'controls'}}Widget Controls

Widgets definitions also accept a notion of "control".

Controls can be seen as additional properties that can be set on the widget definition, and are managed by [mode]({{page page='layout-and-widget-modes'}}).

They hold additional configurations that will not be filled on the underlying JSF component attributes, but will more likely be used by this widget parent layout or widget.

Default layout templates and widget types accepting subwidgets handle the following controls:

*   `requireSurroundingForm`: this makes it possible to surround the rendered widget by a form. If the control `useAjaxForm` is also set to true, then the form will be ajaxified.
*   `handlingLabels`: this makes it possible to avoid making the parent widget or layout handle the label, maybe keeping an unneeded empty space visible. Widgets using a type that knows how to handle their label will then display the label themselves. Widgets using a type that does not know how to handle the label will not display the label at all.

Here is a sample configuration:

```xml
 <widget name="widgetWithControls" type="test">
  <controls mode="any">
    <control name="requireSurroundingForm">true</control>
    <control name="useAjaxForm">true</control>
    <control name="handlingLabels">true</control>
  </controls>
</widget>
```

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in current documentation'}}

- [Standard Widget Types]({{page page='standard-widget-types'}})
- [Custom Widget Types]({{page page='custom-widget-types'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

&nbsp;

</div></div>
