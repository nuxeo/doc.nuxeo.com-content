---
title: Advanced Search
review:
    comment: ''
    date: ''
    status: ok
labels:
    - advanced-search
toc: true
confluence:
    ajs-parent-page-id: '18449663'
    ajs-parent-page-title: Searches Customization
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Advanced+Search
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Advanced+Search'
    page_id: '17334314'
    shortlink: KoAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/KoAIAQ'
    source_link: /display/NXDOC58/Advanced+Search
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 07:33'
        message: ''
        version: '28'
    - 
        author: Solen Guitter
        date: '2014-01-23 18:02'
        message: ''
        version: '27'
    - 
        author: Solen Guitter
        date: '2014-01-22 17:11'
        message: Screenshot update
        version: '26'
    - 
        author: Solen Guitter
        date: '2014-01-22 17:07'
        message: ''
        version: '25'
    - 
        author: Solen Guitter
        date: '2013-11-13 16:38'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2013-11-13 16:38'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2013-11-13 16:28'
        message: Updated screenshot
        version: '22'
    - 
        author: Solen Guitter
        date: '2013-09-04 17:55'
        message: Removed related topics from TOC
        version: '21'
    - 
        author: Solen Guitter
        date: '2013-02-19 11:25'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2012-09-11 22:10'
        message: Migrated to Confluence 4.0
        version: '19'
    - 
        author: Solen Guitter
        date: '2012-09-11 22:10'
        message: Updated links to current snapshot
        version: '18'
    - 
        author: Solen Guitter
        date: '2012-05-21 11:29'
        message: Updated 5.4 mercurial link to 5.6 snapshot github URL
        version: '17'
    - 
        author: Anahide Tchertchian
        date: '2010-10-13 17:58'
        message: ''
        version: '16'
    - 
        author: Anahide Tchertchian
        date: '2010-10-13 17:51'
        message: ''
        version: '15'
    - 
        author: Anahide Tchertchian
        date: '2010-10-13 17:43'
        message: ''
        version: '14'
    - 
        author: Anahide Tchertchian
        date: '2010-10-13 17:28'
        message: ''
        version: '13'
    - 
        author: Anahide Tchertchian
        date: '2010-10-13 17:20'
        message: ''
        version: '12'
    - 
        author: Anahide Tchertchian
        date: '2010-10-13 16:48'
        message: ''
        version: '11'
    - 
        author: Anahide Tchertchian
        date: '2010-10-13 16:47'
        message: ''
        version: '10'
    - 
        author: Anahide Tchertchian
        date: '2010-10-13 16:47'
        message: ''
        version: '9'
    - 
        author: Anahide Tchertchian
        date: '2010-10-13 16:29'
        message: ''
        version: '8'
    - 
        author: Anahide Tchertchian
        date: '2010-10-13 16:18'
        message: ''
        version: '7'
    - 
        author: Anahide Tchertchian
        date: '2010-10-13 16:18'
        message: ''
        version: '6'
    - 
        author: Anahide Tchertchian
        date: '2010-10-13 15:54'
        message: ''
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2010-10-13 15:53'
        message: ''
        version: '4'
    - 
        author: Anahide Tchertchian
        date: '2010-10-13 15:28'
        message: ''
        version: '3'
    - 
        author: Anahide Tchertchian
        date: '2010-10-13 15:27'
        message: ''
        version: '2'
    - 
        author: Anahide Tchertchian
        date: '2010-10-13 15:25'
        message: ''
        version: '1'

---
## "AdvancedSearch" Document Type

The `AdvancedSearch` document type is attached to this content view, and will store query parameters. Its default schema definition can be found here: [advanced_search.xsd](https://github.com/nuxeo/nuxeo-dm/tree/release-5.8/nuxeo-platform-webapp-types/src/main/resources/schemas/advanced_search.xsd). It can be overridden to add new custom fields, or redefined completely as the document type is only referenced in the content view.

Its content view definition shows the mapping between this document properties and the query to build (see [search-contentviews-contrib.xml](https://github.com/nuxeo/nuxeo-jsf/blob/release-5.8/nuxeo-platform-webapp-base/src/main/resources/OSGI-INF/search-contentviews-contrib.xml)).

It also references the search layout (defined here: [search-layouts-contrib.xml](https://github.com/nuxeo/nuxeo-jsf/blob/release-5.8/nuxeo-platform-webapp-base/src/main/resources/OSGI-INF/search-layouts-contrib.xml)) and the result layouts (defined here: [layouts-listing-contrib.xml](https://github.com/nuxeo/nuxeo-jsf/blob/release-5.8/nuxeo-platform-webapp-base/src/main/resources/OSGI-INF/layouts-listing-contrib.xml)).

![]({{file name='advanced_search_results.png' space='userdoc58' page='advanced-search'}} ?w=650,border=true)

## "search_form" and "search_results_advanced" Layouts

The search form and search results reference the content view name (see [search_form.xhtml](https://github.com/nuxeo/nuxeo-dm/blob/release-5.8/nuxeo-platform-webapp/src/main/resources/web/nuxeo.war/search/search_form.xhtml) and [search_results_advanced.xhtml](https://github.com/nuxeo/nuxeo-dm/blob/release-5.8/nuxeo-platform-webapp/src/main/resources/web/nuxeo.war/search/search_results_advanced.xhtml)) and also use the Seam component [DocumentSearchActions](https://github.com/nuxeo/nuxeo-jsf/blob/release-5.8/nuxeo-platform-webapp-base/src/main/java/org/nuxeo/ecm/webapp/search/DocumentSearchActions.java) to store the sort information and selected result columns.

The result layout used here is named `search_listing_ajax`. It is configured as a standard listing layout, and holds additional information on its columns definition so that it can be used to display the search columns selection and the sort information available columns. It is used with the following modes:

*   "edit_columns" when displaying the column selection widget as shown above.
*   "edit_sort_infos" or "edit_sort_infos_map" when displaying the sort information list widget as shown above. These two modes are equivalent, but the new item to add to the list is a `org.nuxeo.ecm.core.api.SortInfo` instance in the first case, and a map with keys "sortColumn" and "sortAscending" in the second case.
*   "view" when displaying the search results table (listing layout).

Here are screenshots of this layout rendered in these modes:
![]({{file name='advanced_search_columns_and_sort.png' space='userdoc58' page='advanced-search'}} ?w=450,border=true)
![]({{file name='advanced_search_results.png' space='userdoc58' page='advanced-search'}} ?w=650,border=true)

Here is an excerpt of this layout definition:

```html/xml
<layout name="search_listing_ajax">
  <templates>
    <template mode="any">
      /layouts/layout_listing_ajax_template.xhtml
    </template>
    <template mode="edit_columns">
      /layouts/layout_column_selection_template.xhtml
    </template>
    <template mode="edit_sort_infos">
      /layouts/layout_sort_infos_template.xhtml
    </template>
    <template mode="edit_sort_infos_map">
      /layouts/layout_sort_infos_template.xhtml
    </template>
  </templates>
  <properties mode="any">
    <property name="showListingHeader">true</property>
    <property name="showRowEvenOddClass">true</property>
  </properties>
  <properties mode="edit_columns">
    <property name="availableElementsLabel">
      label.selection.availableColumns
    </property>
    <property name="selectedElementsLabel">
      label.selection.selectedColumns
    </property>
    <property name="selectedElementsHelp"></property>
    <property name="selectSize">10</property>
    <property name="required">true</property>
    <property name="displayAlwaysSelectedColumns">false</property>
  </properties>
  <properties mode="edit_sort_infos">
    <property name="newSortInfoTemplate">
      #{documentSearchActions.newSortInfo}
    </property>
    <property name="required">false</property>
  </properties>
  <properties mode="edit_sort_infos_map">
    <property name="newSortInfoTemplate">
      #{documentSearchActions.newSortInfoMap}
    </property>
    <property name="required">false</property>
  </properties>
  <columns>
    <column name="selection" alwaysSelected="true">
      <properties mode="any">
        <property name="isListingSelectionBox">true</property>
        <property name="useFirstWidgetLabelAsColumnHeader">false</property>
        <property name="columnStyleClass">iconColumn</property>
      </properties>
      <widget>listing_ajax_selection_box</widget>
    </column>
    <column name="title_link">
      <properties mode="any">
        <property name="useFirstWidgetLabelAsColumnHeader">true</property>
        <property name="sortPropertyName">dc:title</property>
        <property name="label">label.selection.column.title_link</property>
      </properties>
      <properties mode="edit_sort_infos">
        <property name="showInSortInfoSelection">true</property>
      </properties>
      <properties mode="edit_sort_infos_map">
        <property name="showInSortInfoSelection">true</property>
      </properties>
      <widget>listing_title_link</widget>
    </column>
    [...]
    <column name="description" selectedByDefault="false">
      <properties mode="any">
        <property name="useFirstWidgetLabelAsColumnHeader">true</property>
        <property name="sortPropertyName">dc:description</property>
        <property name="label">description</property>
      </properties>
      <properties mode="edit_sort_infos">
        <property name="showInSortInfoSelection">true</property>
      </properties>
      <properties mode="edit_sort_infos_map">
        <property name="showInSortInfoSelection">true</property>
      </properties>
      <widget>listing_description</widget>
    </column>
    <column name="subjects" selectedByDefault="false">
      <properties mode="any">
        <property name="useFirstWidgetLabelAsColumnHeader">true</property>
        <property name="label">label.dublincore.subject</property>
      </properties>
      <widget>listing_subjects</widget>
    </column>
    [...]
  </columns>
</layout>

```

All the columns have names defined so that this value can be used as the key when computing the list of selected columns. If not set, the name will be generated according to the column position in the layout definition, but as this definition may change, it is recommended to set specific names for better maintenance and upgrade.

The columns that should not be selected by default hold the additional parameter `selectedByDefault`, and it is set to "false" as all columns (and rows) are considered selected by default. Hence the "description" and "subjects" columns are not selected by default, and shown in the left selector when displaying this layout in mode "edit_sort_infos" or "edit_sort_infos_map".

Properties defined on the layout in mode "edit_columns" are used by the layout template [layout_column_selection_template.xhtml](https://github.com/nuxeo/nuxeo-jsf/blob/release-5.8/nuxeo-platform-webapp-base/src/main/resources/web/nuxeo.war/layouts/layout_column_selection_template.xhtml).

Properties defined on the layout and columns in mode "edit_sort_infos" or "edit_sort_infos_map" are used by the layout template [layout_sort_infos_template.xhtml](https://github.com/nuxeo/nuxeo-jsf/blob/release-5.8/nuxeo-platform-webapp-base/src/main/resources/web/nuxeo.war/layouts/layout_sort_infos_template.xhtml). This template filters presentation of columns that do not hold the property "`showInSortInfoSelection`" set to "true" as some columns may not support sorting (for instance, as sorting cannot be done on the "subjects" complex property, the associated column should not be made available in the sort selection widget).

The column selection and sort information will be taken into account by the content view if:

*   the template displaying results binds this information to the backing bean holding the values, for instance:

```html/xml
<nxu:set var="contentViewId" value="advanced_search">
<nxu:set var="contentViewName" value="advanced_search">

  <ui:decorate template="/incl/content_view.xhtml">
    <ui:param name="selectedResultLayoutColumns"
      value="#{documentSearchActions.selectedLayoutColumns}" />
    <ui:param name="contentViewSortInfos"
      value="#{documentSearchActions.searchSortInfos}" />
[...]

```

*   or the content view definition holds these bindings, for instance:

```html/xml
<contentView name="advanced_search">

  <coreQueryPageProvider>
    [...]
    <pageSize>20</pageSize>
    <sortInfosBinding>
      #{documentSearchActions.searchSortInfos}
    </sortInfosBinding>
  </coreQueryPageProvider>

  [...]

  <resultLayouts>
    <layout name="search_listing_ajax" title="document_listing"
      translateTitle="true" iconPath="/icons/document_listing_icon.png" />
   [...]
  </resultLayouts>
  <resultColumns>
    #{documentSearchActions.selectedLayoutColumns}
  </resultColumns>

  [...]
</contentView>

```

&nbsp;

&nbsp;