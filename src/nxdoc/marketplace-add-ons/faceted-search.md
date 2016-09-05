---
title: Faceted Search
labels:
    - faceted-search
    - link-update
toc: true
confluence:
    ajs-parent-page-id: '22380668'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Faceted+Search
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Faceted+Search'
    page_id: '22380786'
    shortlink: 8oBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/8oBVAQ'
    source_link: /display/NXDOC60/Faceted+Search
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 14:16'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2015-11-09 16:20'
        message: Fix broken excerpt
        version: '23'
    - 
        author: Solen Guitter
        date: '2014-11-03 22:38'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2014-10-29 23:54'
        message: Add installation steps
        version: '21'
    - 
        author: Solen Guitter
        date: '2014-10-21 18:52'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2014-09-19 12:30'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2014-09-19 12:29'
        message: Formatting
        version: '18'
    - 
        author: Solen Guitter
        date: '2014-01-13 18:34'
        message: ''
        version: '17'
    - 
        author: Anahide Tchertchian
        date: '2013-12-16 12:31'
        message: better excerpt
        version: '16'
    - 
        author: Anahide Tchertchian
        date: '2013-12-04 15:59'
        message: format
        version: '15'
    - 
        author: Anahide Tchertchian
        date: '2013-12-04 15:58'
        message: add mention of DM
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-11-13 14:19'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-11-13 14:18'
        message: Updated links
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-09-04 18:17'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-02-18 19:36'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2012-09-11 22:13'
        message: Migrated to Confluence 4.0
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-09-11 22:13'
        message: Updated link to current snapshot
        version: '8'
    - 
        author: Solen Guitter
        date: '2012-05-21 11:31'
        message: Updated 5.4 mercurial link to 5.6 snapshot github URL
        version: '7'
    - 
        author: Solen Guitter
        date: '2010-10-13 10:10'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2010-10-13 10:05'
        message: ''
        version: '5'
    - 
        author: Thomas Roger
        date: '2010-09-24 21:01'
        message: ''
        version: '4'
    - 
        author: Thomas Roger
        date: '2010-09-24 18:36'
        message: ''
        version: '3'
    - 
        author: Thomas Roger
        date: '2010-09-24 17:37'
        message: ''
        version: '2'
    - 
        author: Thomas Roger
        date: '2010-09-24 16:27'
        message: ''
        version: '1'

---
{{{excerpt 'USERDOC60:Faceted Search'}}}

## Installation

Faceted search requires no specific installation steps. It can be installed like any other package [from the Marketplace or from the Admin Center]({{page space='admindoc60' page='installing-a-new-package-on-your-instance'}}).

After it is installed, users have a new tab with the icon ![]({{file name='facetedSearch.png' space='userdoc60' page='icons-index'}}) in the left pane.

![]({{file name='DM-faceted-search-results.png' space='userdoc60' page='faceted-search'}} ?w=650,border=true)

## Customization

{{! excerpt}}

The faceted search is configured to work in conjunction with a content view. This section describes the document type and layouts used in the default faceted search.

{{! /excerpt}}

### Saved Faceted Searches

The saved searches are stored in the personal workspace of the user who saved the search.

The folder where the searches are stored can be configured through an extension point on the [`FacetedSearchService`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewService/org.nuxeo.ecm.platform.faceted.search.api.service.FacetedSearchService) :

```html/xml
<extension target="org.nuxeo.ecm.platform.faceted.search.jsf.service.FacetedSearchService"
 point="configuration">

 <configuration>
   <rootSavedSearchesTitle>Saved Searches</rootSavedSearchesTitle>
 </configuration>

</extension>

```

### How to Contribute a New Faceted Search

We will see how to contribute a new faceted search with the default faceted search in Nuxeo DM as an example.

#### Content Views Contribution

A faceted search is just a content view with the `FACETED_SEARCH` flag set.

When defining the content view for your faceted search, you'll end up defining the `CoreQueryPageProvider` that will be the definition of the query done to retrieve the documents matching your criteria.

To register your content view as a faceted search, don't forget to add the correct flag in the contribution:

```html/xml
<flags>
  <flag>FACETED_SEARCH</flag>
</flags>

```

To understand all the parameters of the contribution, have a look at: [Content Views]({{page page='content-views'}})

The key attributes are:

*   `docType`: defines which document type to use to populate the values in the query.
*   `searchLayout`: defines which layout will be rendered for this faceted search.

Here is the whole contribution of the content view used for the default faceted search in Nuxeo DM:

```html/xml
<extension target="org.nuxeo.ecm.platform.ui.web.ContentViewService"
  point="contentViews">

  <contentView name="faceted_search_default">
    <title>label.faceted.search.default</title>
    <translateTitle>true</translateTitle>

    <coreQueryPageProvider>
      <property name="coreSession">#{documentManager}</property>
      <whereClause docType="FacetedSearchDefault">
        <fixedPart>
          ecm:mixinType != 'HiddenInNavigation' AND
          ecm:mixinType != 'HiddenInFacetedSearch' AND ecm:isCheckedInVersion = 0
          AND ecm:currentLifeCycleState != 'deleted'
        </fixedPart>
        <predicate parameter="ecm:fulltext" operator="FULLTEXT">
          <field schema="faceted_search_default" name="ecm_fulltext" />
        </predicate>
        <predicate parameter="dc:created" operator="BETWEEN">
          <field schema="faceted_search_default" name="dc_created_min" />
          <field schema="faceted_search_default" name="dc_created_max" />
        </predicate>
        <predicate parameter="dc:modified" operator="BETWEEN">
          <field schema="faceted_search_default" name="dc_modified_min" />
          <field schema="faceted_search_default" name="dc_modified_max" />
        </predicate>
        <predicate parameter="dc:creator" operator="IN">
          <field schema="faceted_search_default" name="dc_creator" />
        </predicate>
        <predicate parameter="dc:coverage" operator="STARTSWITH">
          <field schema="faceted_search_default" name="dc_coverage" />
        </predicate>
        <predicate parameter="dc:subjects" operator="STARTSWITH">
          <field schema="faceted_search_default" name="dc_subjects" />
        </predicate>
        <predicate parameter="ecm:path" operator="STARTSWITH">
          <field schema="faceted_search_default" name="ecm_path" />
        </predicate>
      </whereClause>
      <sort column="dc:title" ascending="true" />
      <pageSize>20</pageSize>
    </coreQueryPageProvider>

    <searchLayout name="faceted_search_default" />

    <useGlobalPageSize>true</useGlobalPageSize>
    <refresh>
      <event>documentChanged</event>
      <event>documentChildrenChanged</event>
    </refresh>
    <cacheKey>only_one_cache</cacheKey>
    <cacheSize>1</cacheSize>

    <resultLayouts>
      <layout name="document_virtual_navigation_listing_ajax"
        title="document_listing" translateTitle="true"
        iconPath="/icons/document_listing_icon.png" />
    </resultLayouts>

    <selectionList>CURRENT_SELECTION</selectionList>
    <actions category="CURRENT_SELECTION_LIST" />

    <flags>
      <flag>FACETED_SEARCH</flag>
    </flags>
  </contentView>

</extension>

```

#### Schema and Document Type Contribution

As seen in the content view we just defined, we need a document type, `FacetedSearchDefault`. To be a correct document type used in a faceted search, it must extend the `FacetedSearch` document type.

According to the predicates set in the content view, we need to add a schema to the new document type to handle each predicate.

{{#> panel type='code' heading='Schema definition'}}

```html/xml
<?xml version="1.0"?>
<xs:schema targetNamespace="http://www.nuxeo.org/ecm/schemas/common/"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:nxs="http://www.nuxeo.org/ecm/schemas/common/">

  <xs:include schemaLocation="base.xsd" />

  <xs:element name="ecm_fulltext" type="xs:string" />
  <xs:element name="dc_creator" type="nxs:stringList" />
  <xs:element name="dc_created_min" type="xs:date" />
  <xs:element name="dc_created_max" type="xs:date" />
  <xs:element name="dc_modified_min" type="xs:date" />
  <xs:element name="dc_modified_max" type="xs:date" />

  <xs:element name="dc_coverage" type="nxs:stringList" />
  <xs:element name="dc_subjects" type="nxs:stringList"/>

  <xs:element name="ecm_path" type="nxs:stringList"/>

</xs:schema>

```

{{/panel}}{{#> panel type='code' heading='Document Type and Schema registration'}}

```html/xml
<extension target="org.nuxeo.ecm.core.schema.TypeService" point="schema">
  <schema name="faceted_search_default" src="schemas/faceted_search_default.xsd" prefix="fsd"/>
</extension>

<extension target="org.nuxeo.ecm.core.schema.TypeService" point="doctype">

  <doctype name="FacetedSearchDefault" extends="FacetedSearch">
    <schema name="faceted_search_default"/>
    <facet name="HiddenInFacetedSearch"/>
  </doctype>

</extension>

```

{{/panel}}

#### Search Layout Contribution

The search layout is just a standard layout. It's the layout that will be used in the left tab to display all the widgets that will perform the search.

Define your widgets and map them to the right field on your newly created schema. For instance, for a filter on the `dc:creator` property, the widget looks like:

```html/xml
<widget name="people_search" type="faceted_search_wrapper">
  <labels>
    <label mode="any">label.faceted.search.peopleSearch</label>
  </labels>
  <translated>true</translated>
  <subWidgets>
    <widget name="dc_creator" type="faceted_search_users_suggestion">
      <labels>
        <label mode="any">label.dublincore.creator</label>
      </labels>
      <fields>
        <field>fsd:dc_creator</field>
      </fields>
      <properties widgetMode="any">
        <property name="userSuggestionSearchType">USER_TYPE</property>
        <property name="displayHorizontally">false</property>
        <property name="hideSearchTypeText">true</property>
        <property name="displayHelpLabel">false</property>
      </properties>
    </widget>
  </subWidgets>
</widget>

```

Then you just need to create the layout referenced in the content view:

```html/xml
<extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
           point="layouts">

  <layout name="faceted_search_default">
    <templates>
      <template mode="any">/layouts/layout_faceted_search_template.xhtml
      </template>
    </templates>
    <rows>
      <row>
        <widget>faceted_searches_selector</widget>
      </row>
      <row>
        <widget>saved_faceted_searches_selector</widget>
      </row>
      <row>
        <widget>actions_bar</widget>
      </row>
      <row>
        <widget>text_search</widget>
      </row>
      <row>
        <widget>date_search</widget>
      </row>
      <row>
        <widget>people_search</widget>
      </row>
      <row>
        <widget>categorization_search</widget>
      </row>
      <row>
        <widget>path_search</widget>
      </row>
      <row>
        <widget>actions_bar</widget>
      </row>
    </rows>
  </layout>
</extension>

```

{{#> callout type='note' }}

Do not forget to update the `searchLayout` attribute of the content view if you change the layout name.

{{/callout}}

### Available Widgets Types

Here are the widgets types defined in the Faceted Search module. You can reuse them in your own faceted search contribution. You can also use all the existing widget already defined in Nuxeo.

You can have a look [on GitHub](https://github.com/nuxeo/nuxeo-platform-faceted-search/blob/release-6.0/nuxeo-platform-faceted-search-dm/src/main/resources/OSGI-INF/faceted-search-layouts-contrib.xml) to see how the widgets are used in the default faceted search.

If you depend on Nuxeo DM, you can use some widgets directly without redefining them (for instance, the ones that do not depend on a metadata property)

#### faceted_search_wrapper

This widget is used to wrap other subwidgets. It displays the widget label, and list the subwidgets below according to the `wrapperMode`. The subwidgets can use three wrapper modes (to be defined in the subwidget properties):

*   `row`: the subwidget label is displayed on one row, and the subwidget content on another row.
*   `column`: the subwidget label and content are displayed on the same row (default mode if not specified).
*   `noLabel`: the subwidget label is not displayed at all.

For instance, here is the definition of the Text search part:

```html/xml
<widget name="text_search" type="faceted_search_wrapper">
  <labels>
    <label mode="any">label.faceted.search.textSearch</label>
  </labels>
  <translated>true</translated>
  <subWidgets>
    <widget name="ecm_fulltext" type="text">
      <labels>
        <label mode="any">label.faceted.search.fulltext</label>
      </labels>
      <translated>true</translated>
      <fields>
        <field>fsd:ecm_fulltext</field>
      </fields>
      <properties widgetMode="edit">
        <property name="wrapperMode">row</property>
      </properties>
    </widget>
  </subWidgets>
</widget>

```

#### date_range

Widget used to search on a date range.

```html/xml
<widget name="dc_modified" type="date_range">
  <labels>
    <label mode="any">label.dublincore.modificationDate</label>
  </labels>
  <translated>true</translated>
  <fields>
    <field>fsd:dc_modified_min</field>
    <field>fsd:dc_modified_max</field>
  </fields>
  <properties widgetMode="edit">
    <property name="styleClass">dataInputTextDate</property>
  </properties>
</widget>

```

#### faceted_search_users_suggestion

Widget allowing to search and select one or more users with a suggestion box.

```html/xml
<widget name="dc_creator" type="faceted_search_users_suggestion">
  <labels>
    <label mode="any">label.dublincore.creator</label>
  </labels>
  <fields>
    <field>fsd:dc_creator</field>
  </fields>
  <properties widgetMode="any">
    <property name="userSuggestionSearchType">USER_TYPE</property>
    <property name="displayHorizontally">false</property>
    <property name="hideSearchTypeText">true</property>
    <property name="displayHelpLabel">false</property>
  </properties>
</widget>

```

#### faceted_searches_selector

Widget displaying all the registered faceted searches. Hidden in case only one faceted search is registered.

```html/xml
<widget name="faceted_searches_selector"
  type="faceted_searches_selector">
  <widgetModes>
    <!-- not shown in edit and view modes -->
    <mode value="view">hidden</mode>
    <mode value="edit">hidden</mode>
  </widgetModes>
</widget>

```

In this sample, the widget is hidden in view and edit mode, so that the widget is not displayed when you are on the Summary or Edit tab of a saved search.

#### saved_faceted_searches_selector

Widget displaying all the saved faceted searches. It displays two categories:

*   Your searches: your saved faceted searches.
*   All searches: all the other users shared saved faceted searches.

The&nbsp;`outcome` property needs to be defined: on which JSF view should we redirect after selecting a saved search.

```html/xml
<widget name="saved_faceted_searches_selector"
        type="saved_faceted_searches_selector">
  <widgetModes>
    <!-- not shown in edit and view modes -->
    <mode value="view">hidden</mode>
    <mode value="edit">hidden</mode>
  </widgetModes>
  <properties widgetMode="any">
    <property name="outcome">faceted_search_results</property>
  </properties>
</widget>

```

#### faceted_search_directory_tree

Widget allowing to select one or more values from a tree constructed from the directory tree specified in the `directoryTreeName` property.

```html/xml
<widget name="dc_coverage" type="faceted_search_directory_tree">
  <labels>
    <label mode="any">label.faceted.search.coverage</label>
  </labels>
  <translated>true</translated>
  <fields>
    <field>fsd:dc_coverage</field>
  </fields>
  <properties widgetMode="any">
    <property name="directoryTreeName">byCoverageNavigation</property>
    <property name="wrapperMode">noLabel</property>
  </properties>
</widget>

```

#### faceted_search_path_tree

Widget allowing to select one or more values from a tree constructed from the navigation tree.

```html/xml
<widget name="ecm_path" type="faceted_search_path_tree">
  <labels>
    <label mode="any">label.faceted.search.path</label>
  </labels>
  <translated>true</translated>
  <fields>
    <field>fsd:ecm_path</field>
  </fields>
  <properties widgetMode="any">
    <property name="wrapperMode">noLabel</property>
  </properties>
</widget>

```

#### actions_bar

This widget is only defined in the `nuxeo-platform-faceted-search-dm` module.

```html/xml
<widget name="actions_bar" type="template">
  <properties widgetMode="any">
    <property name="template">
      /widgets/faceted_search_actions_widget_template.xhtml
    </property>
  </properties>
  <widgetModes>
    <!-- not shown in edit and view modes -->
    <mode value="view">hidden</mode>
    <mode value="edit">hidden</mode>
  </widgetModes>
</widget>

```

You can use directly the widget in your custom search layout:

```html/xml
<extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
  point="layouts">
  <layout name  ="faceted_search_default">
    <templates>
      <template mode="any">/layouts/layout_faceted_search_template.xhtml
      </template>
    </templates>
    <rows>
      ...
      <row>
        <widget>actions_bar</widget>
      </row>
      ...
    </rows>
  </layout>
</extension>

```

You probably want at least one action bar in your layout to perform the search.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in this documentation'}}

*   [Layouts and Widgets (Forms, Listings, Grids)]({{page page='layouts-and-widgets-forms-listings-grids'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related pages in other documentations'}}

*   [Faceted Search]({{page space='userdoc60' page='faceted-search'}})

{{/panel}}</div></div>