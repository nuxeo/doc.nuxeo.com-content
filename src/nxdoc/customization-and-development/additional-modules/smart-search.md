---
title: Smart Search
labels:
    - smart-search
confluence:
    ajs-parent-page-id: '17334336'
    ajs-parent-page-title: Additional Modules
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Smart+Search
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Smart+Search'
    page_id: '17334305'
    shortlink: IYAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/IYAIAQ'
    source_link: /display/NXDOC58/Smart+Search
history:
    -
        author: Solen Guitter
        date: '2016-08-30 14:30'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2016-08-30 14:29'
        message: ''
        version: '30'
    -
        author: Manon Lumeau
        date: '2016-03-10 16:10'
        message: ''
        version: '29'
    -
        author: Manon Lumeau
        date: '2016-03-10 16:09'
        message: 'Merge ADMINDOC with NXDOC    '
        version: '28'
    -
        author: Solen Guitter
        date: '2013-12-12 15:34'
        message: Updated excerpt
        version: '27'
    -
        author: Solen Guitter
        date: '2013-11-13 16:52'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2013-09-04 18:22'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2013-09-04 18:19'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2013-02-18 19:04'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2013-02-18 18:54'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2012-09-11 22:23'
        message: Migrated to Confluence 4.0
        version: '21'
    -
        author: Solen Guitter
        date: '2012-09-11 22:23'
        message: Updated links to current snapshot
        version: '20'
    -
        author: Solen Guitter
        date: '2012-05-21 11:40'
        message: Updated 5.4 mercurial link to 5.6 snapshot github URL
        version: '19'
    -
        author: Anahide Tchertchian
        date: '2010-10-14 17:14'
        message: ''
        version: '18'
    -
        author: Anahide Tchertchian
        date: '2010-10-14 12:22'
        message: ''
        version: '17'
    -
        author: Anahide Tchertchian
        date: '2010-10-13 19:28'
        message: ''
        version: '16'
    -
        author: Anahide Tchertchian
        date: '2010-10-13 19:15'
        message: ''
        version: '15'
    -
        author: Anahide Tchertchian
        date: '2010-10-13 19:14'
        message: ''
        version: '14'
    -
        author: Anahide Tchertchian
        date: '2010-10-13 19:06'
        message: ''
        version: '13'
    -
        author: Anahide Tchertchian
        date: '2010-10-13 19:00'
        message: ''
        version: '12'
    -
        author: Anahide Tchertchian
        date: '2010-10-13 18:59'
        message: ''
        version: '11'
    -
        author: Anahide Tchertchian
        date: '2010-10-13 18:58'
        message: ''
        version: '10'
    -
        author: Anahide Tchertchian
        date: '2010-10-13 18:57'
        message: ''
        version: '9'
    -
        author: Anahide Tchertchian
        date: '2010-10-13 18:34'
        message: ''
        version: '8'
    -
        author: Anahide Tchertchian
        date: '2010-10-13 18:29'
        message: ''
        version: '7'
    -
        author: Anahide Tchertchian
        date: '2010-10-13 16:58'
        message: ''
        version: '6'
    -
        author: Anahide Tchertchian
        date: '2010-10-13 16:58'
        message: ''
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2010-10-13 16:57'
        message: ''
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2010-10-13 15:26'
        message: ''
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2010-10-13 15:25'
        message: ''
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2010-10-12 15:36'
        message: ''
        version: '1'

---
{{! excerpt}}

{{{excerpt 'USERDOC58:Smart Search'}}}

{{! /excerpt}}

The Smart search package requires no specific installation steps. It can be installed like any other package&nbsp;[from the Marketplace or from the Admin Center]({{page space='admindoc58' page='installing-a-new-package-on-your-instance'}}).

After the package is installed, a new Smart search link is available in the top right corner of the application.

![]({{file name='smart-search-link 1.png'}})

## Smart Query Configuration

The smart query is designed to work in conjunction with a [content view]({{page page='content-views'}}).
This content view search layout displays a selector to help building a query part, and a text area with the existing query parts already aggregated:

![]({{file name='smart_search_form_1.png'}} ?w=650,border=true)
![]({{file name='smart_search_form_2.png'}} ?w=650,border=true)

The [SmartQuery](https://github.com/nuxeo/nuxeo-platform-smart-search/blob/release-5.8/nuxeo-platform-smart-query-api/src/main/java/org/nuxeo/ecm/platform/smart/query/SmartQuery.java) interface is very simple: it can build a query (or query part) and can check if it is in a valid state.

The [IncrementalSmartQuery](https://github.com/nuxeo/nuxeo-platform-smart-search/blob/release-5.8/nuxeo-platform-smart-query-api/src/main/java/org/nuxeo/ecm/platform/smart/query/IncrementalSmartQuery.java) abstract class holds additional methods for a good interaction with UI JSF components. It is able to store an existing query part, and has getters and setters for the description of a new element to add to the query.

The [IncrementalSmartNXQLQuery](https://github.com/nuxeo/nuxeo-platform-smart-search/blob/release-5.8/nuxeo-platform-smart-query-jsf/src/main/java/org/nuxeo/ecm/platform/smart/query/jsf/IncrementalSmartNXQLQuery.java) class implements the `org.nuxeo.ecm.platform.smart.query.SmartQuery` interface and generates a query using the NXQL syntax.

The seam component named ["smartNXQLQueryActions"](https://github.com/nuxeo/nuxeo-platform-smart-search/blob/release-5.8/nuxeo-platform-smart-query-jsf/src/main/java/org/nuxeo/ecm/platform/smart/query/jsf/SmartNXQLQueryActions.java) exposes an instance of it, given an existing query part, and is used to update it on Ajax calls.

The complete list of layouts used to generate this screen is available here: [smart-query-layouts-contrib.xml](https://github.com/nuxeo/nuxeo-platform-smart-search/blob/release-5.8/nuxeo-platform-smart-query-jsf/src/main/resources/OSGI-INF/smart-query-layouts-contrib.xml).

The content view is configured to use the layout named "`nxql_incremental_smart_query`" as a search layout, and this content view is referenced both in the search form and search results templates : [https://github.com/nuxeo/nuxeo-platform-smart-search/blob/release-5.8/nuxeo-platform-smart-query-jsf/src/main/resources/OSGI-INF/smart-query-contentviews-contrib.xml](https://github.com/nuxeo/nuxeo-platform-smart-search/blob/release-5.8/nuxeo-platform-smart-query-jsf/src/main/resources/OSGI-INF/smart-query-contentviews-contrib.xml).

The easiest way to customize available query conditions is to override the definition of the layout named "`incremental_smart_query_selection`". This layout uses the template [incremental_smart_query_selection_layout_template.xhtml](https://github.com/nuxeo/nuxeo-platform-smart-search/blob/release-5.8/nuxeo-platform-smart-query-jsf/src/main/resources/web/nuxeo.war/layouts/incremental_smart_query_selection_layout_template.xhtml) that accepts one property named "hideNotOperator". This property, if set to true, will hide the selection of the 'NOT' word that can be added in front of each criterion. If you do so, operators should include negative operators.

Here is an explanation on how to define this layout widgets, that need to be of type "incremental_smart_query_condition" to ensure a good behaviour with other layouts.

As a simple example, let's have a look at the widget to add a condition on the title:

```html/xml
<widget name="nxql_smart_query_condition_title"
  type="incremental_smart_query_condition">
  <labels>
    <label mode="any">title</label>
  </labels>
  <translated>true</translated>
  <properties widgetMode="edit">
    <property name="searchField">dc:title</property>
    <propertyList name="availableOperators">
      <value>CONTAINS</value>
      <value>LIKE</value>
      <value>=</value>
    </propertyList>
  </properties>
  <subWidgets>
    <widget name="title" type="text">
      <fields>
        <field>stringValue</field>
      </fields>
    </widget>
  </subWidgets>
</widget>

```

The properties "searchField" and "availableOperators" are used to set the left expression of the condition and the operator. The subwidget is a standard widget of type "text". It is bound to the "stringValue" field so it will be stored in the smart query instance field with the same name. Other additional properties supported by the "text" widget type can be added here (for instance, the "required" or "styleClass" properties).

Here is the complete list of available field bindings:

*   booleanValue
*   stringValue
*   stringListValue
*   stringArrayValue
*   datetimeValue
*   otherDatetimeValue (to be used in conjunction with datetimeValue)
*   dateValue
*   otherDateValue (to be used in conjunction with dateValue)
*   integerValue
*   floatValue (to bind a Double instance)

As a more complex example, let's have a look at the widget used to add a condition on the modification date:

```html/xml
<widget name="nxql_smart_query_condition_modified"
  type="incremental_smart_query_condition">
  <labels>
    <label mode="any">label.dublincore.modified</label>
  </labels>
  <translated>true</translated>
  <properties widgetMode="edit">
    <property name="searchField">dc:modified</property>
    <propertyList name="availableOperators">
      <value>BETWEEN</value>
      <value>&lt;</value>
      <value>&gt;</value>
    </propertyList>
  </properties>
  <subWidgets>
    <widget name="modified_before" type="datetime">
      <fields>
        <field>dateValue</field>
      </fields>
      <properties widgetMode="edit">
        <property name="required">true</property>
        <property name="format">#{nxu:basicDateFormater()}</property>
      </properties>
    </widget>
    <widget name="and" type="text">
      <widgetModes>
        <mode value="any">
          #{not empty value.conditionalOperator and
          value.conditionalOperator!='BETWEEN'?'hidden':'view'}
        </mode>
      </widgetModes>
      <properties mode="any">
        <property name="value">
          &amp;nbsp;#{messages['label.and']}&amp;nbsp;
        </property>
        <property name="escape">false</property>
      </properties>
    </widget>
    <widget name="modified_after" type="datetime">
      <fields>
        <field>otherDateValue</field>
      </fields>
      <widgetModes>
        <mode value="any">
          #{not empty value.conditionalOperator and
          value.conditionalOperator!='BETWEEN'?'hidden':mode}
        </mode>
      </widgetModes>
      <properties widgetMode="edit">
        <property name="required">true</property>
        <property name="format">#{nxu:basicDateFormater()}</property>
      </properties>
    </widget>
  </subWidgets>
</widget>

```

It is more complex as some subwidgets should not be shown depending on the chosen operator: when operator "BETWEEN" is selected, all of the three subwidgets should be displayed, whereas when other operators are selected, only the first subwidget should be shown. This is achieved by setting the widget mode according to the selected value.

Let's have a close look at the condition _"#{not empty value.conditionalOperator and value.conditionalOperator!='BETWEEN'?'hidden':mode}"_. In this expression, "value" references the value manipulated by the widget (e.g. the smart query instance) and "mode" references the mode as passed to the layout tag. Both of these values are made available by the layout system. Here, if the conditional operator is not empty, and is different from 'BETWEEN', the widget should be hidden. Otherwise, it can be shown in the originally resolved mode. The widgets shown when the conditional operator is empty should be suitable for the first operator within the list of available operators.

{{#> callout type='note' }}

An EL bug will not allow you to use a non-static value at the second position in the conditional expression: _#{condition?mode:'hidden'}_ will throw an error. But placing the variable "mode" at the end of the expression is ok: _#{not condition?'hidden':mode}_.

{{/callout}}

## Smart Folder Configuration

The smart folder creation and edition pages is very close to the smart search form. It reuses the same widget types, including some adjustments since the bound values are kept in its properties instead of a backing seam component. Its layout definition is here: [smart-folder-layouts-contrib.xml](https://github.com/nuxeo/nuxeo-platform-smart-search/blob/release-5.8/nuxeo-platform-smart-folder-jsf/src/main/resources/OSGI-INF/smart-folder-layouts-contrib.xml). It also includes the definition of a widget in charge of displaying the content view results.

Note that it needs another content view to be defined (see [smart-folder-contentviews-contrib.xml](https://github.com/nuxeo/nuxeo-platform-smart-search/blob/release-5.8/nuxeo-platform-smart-folder-jsf/src/main/resources/OSGI-INF/smart-folder-contentviews-contrib.xml)) so that this content view uses the query, sort information, result columns and page size as set on the document properties (note the usage of tags parameter, sortInfosBinding, resultColumns and pageSizeBinding).

![]({{file name='smart_folder_view.png'}} ?w=650,border=true)

## Result Layout, Column and Sort Selection

The layout used to display the column selection, the sort information selection, and to display the search results, is the generic layout "`search_listing_layout`" also used in the advanced search form. If it is changed, it needs to be kept consistent between all the places referencing it:

*   the smart search form
*   the smart query content view result layout and result columns binding
*   the smart folder layout in edit mode
*   the smart folder content view result layout and result columns binding (displayed via its layout in view mode)

Please refer to the [Advanced Search]({{page page='advanced-search'}}) documentation for more information about this layout customization.

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in this documentation'}}

*   [Content Views]({{page page='content-views'}})
*   [Custom Page Providers]({{page page='custom-page-providers'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related pages in other documentations'}}

*   [Smart Search user documentation]()
*   [Smart search operators]({{page space='userdoc58' page='smart-search-operators'}})

{{/panel}}</div></div>