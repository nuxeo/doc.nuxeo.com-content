---
title: Query Models and Result Providers Migration to Content Views and Page Providers
review:
    comment: ''
    date: '2017-02-14'
    status: ok
labels:
    - lts2016-ok
    - multiexcerpt
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '12288891'
    ajs-parent-page-title: Upgrade from 5.6 to 5.8
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Query+Models+and+Result+Providers+Migration+to+Content+Views+and+Page+Providers
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Query+Models+and+Result+Providers+Migration+to+Content+Views+and+Page+Providers'
    page_id: '24052377'
    shortlink: mQJvAQ
    shortlink_source: 'https://doc.nuxeo.com/x/mQJvAQ'
    source_link: /display/NXDOC/Query+Models+and+Result+Providers+Migration+to+Content+Views+and+Page+Providers
version_override:
    LTS 2015: 710/admindoc/query-models-and-result-providers-migration-to-content-views-and-page-providers
    '6.0': 60/admindoc/query-models-and-result-providers-migration-to-content-views-and-page-providers
    '5.8': 58/admindoc/query-models-and-result-providers-migration-to-content-views-and-page-providers
history:
    - 
        author: Solen Guitter
        date: '2015-04-14 14:46'
        message: ''
        version: '1'

---
{{! multiexcerpt name='query-models-result-providers-upgrade'}}{{! excerpt}}

This page explains how query models and result provider farms, deprecated since version 5.4.2, can be migrated to [content views]({{page page='content-views'}}) and [page providers]({{page page='page-providers'}}).

The JIRA issue {{jira server='Nuxeo Issue Tracker' key='NXP-12435'}} gives technical upgrade notes, this chapter gives more details depending on use cases.

{{! /excerpt}}

## Generic Migration Steps

Content views and associated page providers have been designed to replace old query models that were not as modular and easy to use.

A lot of configuration has been updated or removed, but without any feature loss. For instance, syndication links are not relying anymore on a specific module, but using native exports from the result layout listing.

Reading the [Content Views]({{page page='content-views'}}) chapter is highly recommended to understand migration steps.

Query models have been replaced by page providers. Page providers definition is sometimes embedded within a content view definition, as content views are useful for UI interactions. Page providers alone are still useful to generate lists of documents from core code, not involving any UI interactions. Results provider farms were used to pass UI contextual information to the query model. This is now done by using EL expressions when defining parameters on content views.

### XML Configurations Migration

Components `org.nuxeo.ecm.core.search.api.client.querymodel.QueryModelService` and `org.nuxeo.ecm.webapp.pagination.ResultsProviderService` have been removed, components [`org.nuxeo.ecm.platform.query.api.PageProviderService`](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewComponent/org.nuxeo.ecm.platform.query.api.PageProviderService) (with extension point [providers](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.platform.query.api.PageProviderService--providers)) and [`org.nuxeo.ecm.platform.ui.web.ContentViewService`](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewComponent/org.nuxeo.ecm.platform.ui.web.ContentViewService) (with extension point [contentViews](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.platform.ui.web.ContentViewService--contentViews)) should be used instead.

The XML syntax is very close, here is a sample migration of a query model contribution without a whereClause element:

{{#> panel type='code' heading='Old Configuration'}}

```
<extension target="org.nuxeo.ecm.core.search.api.client.querymodel.QueryModelService"
  point="model">
  <queryModel name="MY_SEARCH">
    <pattern>
      SELECT * FROM Document WHERE ecm:currentLifeCycleState != 'deleted' AND ecm:uuid != ?
    </pattern>
    <sortable value="true" defaultSortColumn="dc:title" defaultSortAscending="true" />
    <max>20</max>
  </queryModel>
</extension>
```

{{/panel}}

This can be translated into a page provider very easily (notice the pageSize and sort syntax changes):

{{#> panel type='code' heading='New Configuration with Page Provider'}}

```
 <extension target="org.nuxeo.ecm.platform.ui.web.ContentViewService"
  point="contentViews">
  <coreQueryPageProvider name="MY_SEARCH">
    <pattern>
      SELECT * FROM Document WHERE ecm:currentLifeCycleState != 'deleted' AND ecm:uuid != ?
    </pattern>
    <sort column="dc:title" ascending="true" />
    <pageSize>20</pageSize>
  </coreQueryPageProvider>
</extension>
```

{{/panel}}

### Code Migration

Classes `QueryModel`, `QueryModelService` and `ResultsProviderFarm` have been removed.

The `QueryModel` class is basically replaced by [`PageProvider`](http://community.nuxeo.com/api/nuxeo/release-5.8/javadoc/org/nuxeo/ecm/platform/query/api/PageProvider.html) or [`PageProviderDefinition`](http://community.nuxeo.com/api/nuxeo/release-5.8/javadoc/org/nuxeo/ecm/platform/query/api/PageProviderDefinition.html) instances depending on the use case. Default page providers are available and perform queries on the Nuxeo repository, for instance [CoreQueryDocumentPageProvider](http://community.nuxeo.com/api/nuxeo/release-5.8/javadoc/org/nuxeo/ecm/platform/query/nxql/CoreQueryDocumentPageProvider.html).

Reading the [Custom Page Providers]({{page page='custom-page-providers'}}) and [Page Providers]({{page page='page-providers'}}) chapters is recommended to understand how to use the new API.

### Templates Migration

Old templates displaying paged lists of documents have been removed, the template at [`/incl/content_view.xhtml`](https://github.com/nuxeo/nuxeo-jsf/blob/master/nuxeo-platform-webapp-base/src/main/resources/web/nuxeo.war/incl/content_view.xhtml) can now be included to display the results using a listing layout configured on the content view.

{{#> panel type='code' heading='Sample Old Template'}}

```

<div xmlns:ui="http://java.sun.com/jsf/facelets"
  xmlns:nxu="http://nuxeo.org/nxweb/util">

  <nxu:set var="documents"
    value="#{documentActions.getChildrenSelectModel()}">
    <ui:decorate template="/incl/forum_table.xhtml" />
  </nxu:set>

</div>
```

{{/panel}}{{#> panel type='code' heading='Alternative Sample Old Template'}}

```

<div xmlns:ui="http://java.sun.com/jsf/facelets"
  xmlns:nxu="http://nuxeo.org/nxweb/util">

  <nxu:set var="provider"
    value="#{resultsProvidersCache.get('MY_SEARCH')}"
    cache="true">
    <ui:decorate template="/search/documents_table.xhtml">
      <ui:param name="provider" value="#{provider}"/>
      <ui:param name="providerName" value="#{provider.name}"/>
    </ui:decorate>
  </nxu:set>

</div>
```

{{/panel}}{{#> panel type='code' heading='Sample New Template'}}

```

<div xmlns:ui="http://java.sun.com/jsf/facelets"
  xmlns:nxu="http://nuxeo.org/nxweb/util">

  <nxu:set var="contentViewName" value="MY_SEARCH">
    <ui:decorate template="/incl/content_view.xhtml" />
  </nxu:set>

</div>
```

{{/panel}}

Also, the old templates displaying listings of documents were not relying on layouts, so migration may include defining [ listing layouts ]({{page page='layout-definitions#listing-layout'}}) and widget templates when migrating to content views.

## Migration Use Cases

### Migrating a `QueryModel` to a `PageProvider`

Let's take again the above example:

{{#> panel type='code' heading='Old Configuration'}}

```
<extension target="org.nuxeo.ecm.core.search.api.client.querymodel.QueryModelService"
  point="model">
  <queryModel name="MY_SEARCH">
    <pattern>
      SELECT * FROM Document WHERE ecm:currentLifeCycleState != 'deleted' AND ecm:uuid != ?
    </pattern>
    <sortable value="true" defaultSortColumn="dc:title" defaultSortAscending="true" />
    <max>20</max>
  </queryModel>
</extension>
```

{{/panel}}

This query model is designed to perform a query on the Nuxeo Core Repository, using a parameter to fill the [ecm:uuid](http://ecmuuid) filtering criterion.

Here is a sample JAVA code using this query model:

```
QueryModelService qmService = Framework.getService(QueryModelService.class);
QueryModelDescriptor qmd = qmService.getQueryModelDescriptor("MY_SEARCH");
QueryModel qm = new QueryModel(qmd);
Object[] params = {document.getId()};
DocumentModelList list = qm.getDocuments(coreSession, params);
```

Let's migrate the query model to a page provider:

{{#> panel type='code' heading='New Configuration with Page Provider'}}

```
<extension target="org.nuxeo.ecm.platform.ui.web.ContentViewService"
  point="contentViews">
  <coreQueryPageProvider name="MY_SEARCH">
    <pattern>
      SELECT * FROM Document WHERE ecm:currentLifeCycleState != 'deleted' AND ecm:uuid != ?
    </pattern>
    <sort column="dc:title" ascending="true" />
    <pageSize>20</pageSize>
  </coreQueryPageProvider>
</extension>
```

{{/panel}}

Let's also migrate the corresponding JAVA code:

```
PageProviderService ppService = Framework.getService(PageProviderService.class);
Map<String, Serializable> props = new HashMap<String, Serializable>();
props.put(CoreQueryDocumentPageProvider.CORE_SESSION_PROPERTY,
        (Serializable) coreSession);
Object[] params = {document.getId()};
PageProvider<DocumentModel> pp = (PageProvider<DocumentModel>) ppService.getPageProvider(
        "MY_SEARCH", null, null, null, props, params);
DocumentModelList list = pp.getCurrentPage();
```

Here is a more complex migration involving a whereClause (the search pattern is generated according to predicates definitions, retrieving values on the search document model):

```
<extension target="org.nuxeo.ecm.core.search.api.client.querymodel.QueryModelService"
  point="model">
  <queryModel name="MY_SEARCH" docType="AdvancedSearch">
    <whereClause>
      <predicate parameter="ecm:fulltext" operator="FULLTEXT ALL">
        <field schema="advanced_search" name="fulltext_all"/>
      </predicate>
      <fixedPart>ecm:currentLifeCycleState != 'deleted'</fixedPart>
    </whereClause>
    <sortable value="true" defaultSortColumn="dc:title" defaultSortAscending="true" />
    <max>20</max>
  </queryModel>
</extension>
```

The `whereClause` element content is unchanged, but the associated `docType` element has moved from the `queryModel` element to the `whereClause` element:

```
<extension target="org.nuxeo.ecm.platform.ui.web.ContentViewService"
  point="contentViews">
  <coreQueryPageProvider name="MY_SEARCH">
    <whereClause docType="AdvancedSearch">
      <predicate parameter="ecm:fulltext" operator="FULLTEXT ALL">
        <field schema="advanced_search" name="fulltext_all"/>
      </predicate>
      <fixedPart>ecm:currentLifeCycleState != 'deleted'</fixedPart>
    </whereClause>
    <sort column="dc:title" ascending="true" />
    <pageSize>20</pageSize>
  </coreQueryPageProvider>
</extension>
```

### Migrating a `QueryModel` to a `ContentView`

Sometimes it is useful to migrate the query model to a content view, where the page provider definition is embedded.

Here is a sample migration of the above example to a content view:

```
<extension target="org.nuxeo.ecm.platform.ui.web.ContentViewService"
  point="contentViews">
  <contentView name="MY_SEARCH">
    <coreQueryPageProvider>
      <pattern>
        SELECT * FROM Document WHERE ecm:currentLifeCycleState != 'deleted' AND ecm:uuid != ?
      </pattern>
      <sort column="dc:title" ascending="true" />
      <pageSize>20</pageSize>
      <parameter>#{currentDocument.id}</parameter>
    </coreQueryPageProvider>
    [...]
  </contentView>
</extension>
```

Notice the parameter element, using an EL expression, that makes it possible to resolve Seam/JSF EL expresssions.

### Migrating a QueryModel associated to a ResultsProviderFarm to a ContentView

Result provider farms were useful to pass contextual parameters to the page provider. Using EL expressions as parameter elements in the definition as above makes it possible to map directly these parameters.

For instance, if the result provider farm is a seam component named `mySeamComponent` and is using one of its custom contextual field `myField` as a parameter for the query model, the content view can simply state a parameter in the page provider definition as is (provided the Seam component holds public a getter method for this field):

```
<extension target="org.nuxeo.ecm.platform.ui.web.ContentViewService"
  point="contentViews">
  <contentView name="MY_SEARCH">
    <coreQueryPageProvider>
      [...]
      <parameter>#{mySeamComponent.myField}</parameter>
    </coreQueryPageProvider>
    [...]
  </contentView>
</extension>
```

## More Migration Examples

Nuxeo source code has been upgraded too, here are sample changes that can be helpful as examples:

*   Migration of the forum module, involving creation of a listing layout, see commit [https://github.com/nuxeo/nuxeo-features/commit/acfccb24d306406e0ec66d85ec80f29b34f8cf02](https://github.com/nuxeo/nuxeo-features/commit/acfccb24d306406e0ec66d85ec80f29b34f8cf02)
*   Migration of the sample module, involving migration of a query model and result provider farm, especially commit [https://github.com/nuxeo/nuxeo-sample-project/commit/c8cb1a9dd7708ffc236780efc36db00032accf0e](https://github.com/nuxeo/nuxeo-sample-project/commit/c8cb1a9dd7708ffc236780efc36db00032accf0e) (see {{jira server='Nuxeo Issue Tracker' key='NXP-12623'}})
*   Migration of the picture book listing view, involving a partial migration of XHTML templates to keep javascript custom code, see commits [https://github.com/nuxeo/nuxeo-features/commit/85cafc1883275f337bf214fb3a79addc5e8cf5aa](https://github.com/nuxeo/nuxeo-features/commit/85cafc1883275f337bf214fb3a79addc5e8cf5aa) and [https://github.com/nuxeo/nuxeo-features/commit/aa12896607d6acfe5dcd55cbc55652af789088bc](https://github.com/nuxeo/nuxeo-features/commit/aa12896607d6acfe5dcd55cbc55652af789088bc).

{{! /multiexcerpt}}
