---
title: Custom Widget Types
review:
    comment: ''
    date: ''
    status: ok
labels:
    - widget
toc: true
confluence:
    ajs-parent-page-id: '17334360'
    ajs-parent-page-title: 'Layouts and Widgets (Forms, Listings, Grids)'
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Custom+Widget+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Custom+Widget+Types'
    page_id: '17334433'
    shortlink: oYAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/oYAIAQ'
    source_link: /display/NXDOC58/Custom+Widget+Types
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 13:38'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2014-01-22 15:45'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2014-01-09 18:20'
        message: Fixed links and updated screenshots
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-09-04 16:16'
        message: ''
        version: '17'
    - 
        author: Anahide Tchertchian
        date: '2012-12-04 18:01'
        message: edit layout showcase link
        version: '16'
    - 
        author: Anahide Tchertchian
        date: '2011-11-14 19:39'
        message: Migrated to Confluence 4.0
        version: '15'
    - 
        author: Anahide Tchertchian
        date: '2011-11-14 19:39'
        message: ''
        version: '14'
    - 
        author: Anahide Tchertchian
        date: '2011-11-14 19:38'
        message: update export urls since 5.5
        version: '13'
    - 
        author: Solen Guitter
        date: '2011-11-14 15:29'
        message: replaced 5.4.3 with 5.5
        version: '12'
    - 
        author: Thierry Delprat
        date: '2011-09-29 15:35'
        message: ''
        version: '11'
    - 
        author: Anahide Tchertchian
        date: '2011-07-19 17:52'
        message: ''
        version: '10'
    - 
        author: Anahide Tchertchian
        date: '2011-04-26 19:13'
        message: ''
        version: '9'
    - 
        author: Anahide Tchertchian
        date: '2011-04-26 19:12'
        message: ''
        version: '8'
    - 
        author: Anahide Tchertchian
        date: '2011-04-26 19:12'
        message: ''
        version: '7'
    - 
        author: Anahide Tchertchian
        date: '2011-04-26 19:11'
        message: ''
        version: '6'
    - 
        author: Anahide Tchertchian
        date: '2011-04-26 19:10'
        message: ''
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2011-04-26 19:09'
        message: ''
        version: '4'
    - 
        author: Anahide Tchertchian
        date: '2011-04-26 18:52'
        message: ''
        version: '3'
    - 
        author: Anahide Tchertchian
        date: '2011-04-26 18:34'
        message: ''
        version: '2'
    - 
        author: Anahide Tchertchian
        date: '2010-10-12 15:11'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">{{! excerpt}}

Custom widget types can be added to the [standard list]({{page page='standard-widget-types'}}) thanks to another extension point on the web layout service.

{{! /excerpt}}

Usually widget types are template widgets that are declared as widget types to make them easily reusable in different layouts, have a clear widget types library, and make them available in [Studio]({{page space='studio'}}).

## Simple Widget Type Registration

Here is a sample widget type registration, based on a widget template:

</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

```xml
<component name="org.nuxeo.ecm.platform.forms.layout.MyContribution">

  <extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
    point="widgettypes">

    <widgetType name="my_widget_type">
      <handler-class>
        org.nuxeo.ecm.platform.forms.layout.facelets.plugins.TemplateWidgetTypeHandler
      </handler-class>
      <property name="template">
        /widgets/my_own_widget_template.xhtml
      </property>
    </widgetType>

  </extension>

</component>

```

Before this contribution, the widgets needing this template were declaring (for instance):

```xml
<widget name="my_widget" type="template">
  <labels>
    <label mode="any">My label</label>
  </labels>
  <translated>false</translated>
  <fields>
    <field>dc:description</field>
  </fields>
  <properties widgetMode="any">
    <property name="template">/widgets/my_own_widget_template.xhtml</property>
  </properties>
</widget>

```

With this configuration, the following widget definition can now be used:

```xml
<widget name="my_widget" type="my_widget_type">
  <labels>
    <label mode="any">My label</label>
  </labels>
  <translated>false</translated>
  <fields>
    <field>dc:description</field>
  </fields>
</widget>

```

## Complex Widget Type Registration

Here is a more complex sample widget type registration:

```xml
<?xml version="1.0"?>

<component name="org.nuxeo.ecm.platform.forms.layout.MyContribution">

  <extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
    point="widgettypes">

    <widgetType name="customtype">
      <handler-class>
        org.myproject.MyCustomWidgetTypeHandler
      </handler-class>
      <property name="foo">bar</property>
    </widgetType>

  </extension>

</component>

```

The custom widget type class must follow the `org.nuxeo.ecm.platform.forms.layout.facelets.WidgetTypeHandler` interface.

Additional properties can be added to the type registration so that the same class can be reused with a different behavior given the property value.

The widget type handler is used to generate facelet tag handlers dynamically taking into account the mode and any other properties that can be found on a widget.

The best thing to do before writing a custom widget type handler is to go see how standard widget type handlers are implemented, as some helper methods can be reused to ease implementation of specific behaviors.

## Additional Widget Type Configuration

Some additional information can be put on a widget type for several purposes:

*   configuration of widgets made available in Studio
    ![]({{file name='widget_configuration_studio.png'}} ?w=400,border=true)

*   documentation of available layouts and widget types on a given Nuxeo instance (see on your Nuxeo instance: [http://localhost:nuxeo/site/layout-manager/](http://localhostnuxeo))
    ![]({{file name='widget_type_export.png'}} ?w=650,border=true)

*   Sample JSON export URLs:

    <table><tbody><tr><td colspan="1">[http://demo.nuxeo.com/nuxeo/site/layout-manager/widget-types/widgetTypes/document](http://demo.nuxeo.com/nuxeo/site/layout-manager/widget-types/widgetTypes/document)</td><td colspan="1">

    All widget types with category "document"

    </td></tr><tr><td colspan="1">[http://demo.nuxeo.com/nuxeo/site/layout-manager/widget-types/widgetTypes/document?version=5.4.0](http://demo.nuxeo.com/nuxeo/site/layout-manager/widget-types/widgetTypes/document?version=5.4.0)</td><td colspan="1">

    All widget types with category "document", filtering widget types with a version strictly higher than 5.4.0

    </td></tr><tr><td colspan="1">[http://demo.nuxeo.com/nuxeo/site/layout-manager/widget-types/widgetTypes?categories=studio%20document&version=5.4.0](http://demo.nuxeo.com/nuxeo/site/layout-manager/widget-types/widgetTypes?categories=studio%20document&version=5.4.0)</td><td colspan="1">

    All widget types with both categories "document" and "studio", filtering widget types with a version strictly higher than 5.4.0.

    </td></tr></tbody></table>
*   documentation and showcase of this widget type (see [http://showcase.nuxeo.com/layout](http://showcase.nuxeo.com/layout)):
    ![]({{file name='widget_type_preview.png'}} ?w=650,border=true)

Here is a sample configuration extract:

```xml
<widgetType name="text">
  <configuration>
    <title>Text</title>
    <description>

<p>
        The text widget displays an input text in create or edit mode, with
        additional message tag for errors, and a regular text output in any
        other mode.
      </p>

<p>
        Widgets using this type can provide properties accepted on a
        &lt;h:inputText /&gt; tag in create or edit mode, and properties
        accepted on a &lt;h:outputText /&gt; tag in other modes.
      </p>
    </description>
    <demo id="textWidget" previewEnabled="true" />
    <supportedModes>
      <mode>edit</mode>
      <mode>view</mode>
    </supportedModes>
    <fields>
      <list>false</list>
      <complex>false</complex>
      <supportedTypes>
        <type>string</type>
        <type>path</type>
      </supportedTypes>
      <defaultTypes>
        <type>string</type>
      </defaultTypes>
    </fields>
    <categories>
      <category>document</category>
    </categories>
    <properties>
      <layouts mode="view">
        <layout name="text_widget_type_properties_view">
          <rows>
            <row>
              <widget>style</widget>
            </row>
            <row>
              <widget>styleClass</widget>
            </row>
            [...]
          </rows>
          <widget name="style" type="text">
            <labels>
              <label mode="any">Style</label>
            </labels>
            <fields>
              <field>style</field>
            </fields>
          </widget>
          <widget name="styleClass" type="text">
            <labels>
              <label mode="any">Style class</label>
            </labels>
            <fields>
              <field>styleClass</field>
            </fields>
          </widget>
          [...]
        </layout>
      </layouts>
      <layouts mode="edit">
        <layout name="text_widget_type_properties_edit">
          <rows>
            <row>
              <widget>required</widget>
            </row>
            <row>
              <widget>maxlength</widget>
            </row>
            <row>
              <widget>title</widget>
            </row>
            [...]
          </rows>
          <widget name="maxlength" type="int">
            <labels>
              <label mode="any">Max length</label>
            </labels>
            <fields>
              <field>maxlength</field>
            </fields>
          </widget>
          <widget name="required" type="checkbox">
            <labels>
              <label mode="any">Required</label>
            </labels>
            <fields>
              <field>required</field>
            </fields>
          </widget>
          <widget name="title" type="text">
            <labels>
              <label mode="any">Title</label>
            </labels>
            <fields>
              <field>title</field>
            </fields>
            <widgetModes>
              <mode value="any">hidden</mode>
              <mode value="view_reference">view</mode>
            </widgetModes>
          </widget>
          [...]
        </layout>
      </layouts>
    </properties>
  </configuration>
  <handler-class>
    org.nuxeo.ecm.platform.forms.layout.facelets.plugins.TextWidgetTypeHandler
  </handler-class>
</widgetType>

```

The&nbsp;`configuration` element is optional, but when defined it'll be used to define the following information:

*   `title`: the widget type title.
*   `description`: the widget type description, that accepts HTML content.
*   `demo`: this refers to this widget type representation in the layout demo (see the online demo, for instance [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/textWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/textWidget)).
*   `supportedModes`: the list of supported modes (for instance some widget types are read-only). This is useful for Studio configuration: if the edit mode is not available, the corresponding panel for properties configuration will not be shown.
*   `fields`: this configuration is subject to change, but it is currently used to define what kind of widgets types are available for a given field type.
*   `categories`: the list of categories for this widget type. This is a marker for display and it can also be used to facilitate exports. The default categories are "document", "summary", "listing" and "dev".
*   `properties`: the layouts to use to display the available widget properties depending on the mode. This is a standard layout configuration, using the property name as field. Properties hidden in the mode "view_reference" will only be displayed on the reference table, and will not be displayed for configuration in Studio or preview in the Layout showcase.

&nbsp;