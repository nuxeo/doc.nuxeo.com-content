---
title: Page Providers
review:
    comment: ''
    date: '2017-12-14'
    status: ok
notes: Documentation page used on Nuxeo Studio. Check with NOS team before deleting or moving.
labels:
    - content-review-lts2016
    - page-provider
    - query-pageprovider-component
    - kleturc
    - excerpt
    - lts2017-ok
    - university
toc: true
confluence:
    ajs-parent-page-id: '4687860'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Page+Providers
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Page+Providers'
    page_id: '7209246'
    shortlink: HgFu
    shortlink_source: 'https://doc.nuxeo.com/x/HgFu'
    source_link: /display/NXDOC/Page+Providers
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2016-09-01 09:49'
        message: ''
        version: '28'
    -
        author: Anahide Tchertchian
        date: '2015-12-08 13:29'
        message: ''
        version: '27'
    -
        author: Vladimir Pasquier
        date: '2015-05-29 09:31'
        message: ''
        version: '26'
    -
        author: Vladimir Pasquier
        date: '2015-05-29 09:28'
        message: ''
        version: '25'
    -
        author: Vladimir Pasquier
        date: '2015-05-29 09:26'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2015-05-29 09:18'
        message: Titile capitalization
        version: '23'
    -
        author: Vladimir Pasquier
        date: '2015-05-28 16:01'
        message: ''
        version: '22'
    -
        author: Anahide Tchertchian
        date: '2015-03-31 12:40'
        message: ''
        version: '21'
    -
        author: Anahide Tchertchian
        date: '2014-12-17 15:54'
        message: merge custom page providers doc
        version: '20'
    -
        author: Anahide Tchertchian
        date: '2014-12-17 14:12'
        message: remove hardcoded links to confluence pages...
        version: '19'
    -
        author: Anahide Tchertchian
        date: '2014-12-17 14:10'
        message: wording
        version: '18'
    -
        author: Benoit Delbosc
        date: '2014-11-25 14:54'
        message: ''
        version: '17'
    -
        author: Benoit Delbosc
        date: '2014-11-25 10:45'
        message: ''
        version: '16'
    -
        author: Benoit Delbosc
        date: '2014-11-25 10:35'
        message: ''
        version: '15'
    -
        author: Benoit Delbosc
        date: '2014-11-25 10:31'
        message: ''
        version: '14'
    -
        author: Benoit Delbosc
        date: '2014-11-25 10:31'
        message: ''
        version: '13'
    -
        author: Benoit Delbosc
        date: '2014-11-25 10:08'
        message: ''
        version: '12'
    -
        author: Benoit Delbosc
        date: '2014-11-25 10:07'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2014-09-23 08:04'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-01-17 17:07'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-01-13 16:58'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-01-13 16:58'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-01-13 16:57'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-09-04 16:30'
        message: Added related topics
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2011-04-26 18:05'
        message: Migrated to Confluence 4.0
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2011-04-26 18:05'
        message: ''
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2011-04-26 17:28'
        message: ''
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2011-04-26 17:28'
        message: ''
        version: '1'

---
{{! excerpt}}

Page providers allow retrieving items with pagination facilities, they can be used in a non-UI or non-JSF context like event listeners or core services.

{{! /excerpt}}

For an introduction to content views, please refer to the [Content Views]({{page page='content-views'}}) page.

{{#> callout type='info'}}
Watch the related courses on Nuxeo University
- [Configuring Searches with Nuxeo Studio Modeler & Designer](https://university.nuxeo.com/learn/public/course/view/elearning/134/configuring-searches-in-nuxeo-studio-modeler-designer).
![]({{file name='page-providers-university.png'}} ?w=450,border=true)
{{/callout}}

## Standard Page Providers

Page provider offers many advantages comparing to hard coded NXQL queries:

*   Pagination logics do not have to be coded again, the `AbstractPageProvider` implementation already offers corresponding logics.
*   Code duplication can be prevented, by re-using registered page providers.
*   Overriding an existing page provider definition is easy.
*   The default implementation (`CoreQueryDocumentPageProvider`) that handles Nuxeo documents can be [switched from VCS (database) to Elasticsearch]({{page page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}}) by just setting a configuration in the `nuxeo.conf` file.
*   When using Elasticsearch, page providers support [aggregation features]({{page page='page-provider-aggregates'}}).

Page providers can be registered on their own service and queried outside of an UI context. These page providers can also be referenced from [content views]({{page page='content-views'}}), to keep a common definition of the provider.

{{#> callout type='info' }}

Content views are very linked to the rendering as they hold UI configuration and need the JSF context to resolve variables.

Page providers defined inside content views are also registered on the `PageProviderService`, reusing the original content view name, so that they're available outside of the content view.

{{/callout}}

Here is a sample page provider definition:

```xml
<extension target="org.nuxeo.ecm.platform.query.api.PageProviderService"
  point="providers">

  <coreQueryPageProvider name="TREE_CHILDREN_PP">
    <pattern>
      SELECT * FROM Document WHERE ecm:parentId = ? AND ecm:isProxy = 0 AND
      ecm:mixinType = 'Folderish' AND ecm:mixinType != 'HiddenInNavigation'
      AND ecm:isVersion = 0 AND ecm:isTrashed = 0
    </pattern>
    <sort column="dc:title" ascending="true" />
    <pageSize>50</pageSize>
  </coreQueryPageProvider>

</extension>

```

This definition is identical to the one within a content view, except it cannot use EL expressions for variables resolution.

A typical usage of this page provider would be:

```java
PageProviderService ppService = Framework.getService(PageProviderService.class);
Map<String, Serializable> props = new HashMap<>();
props.put(CoreQueryDocumentPageProvider.CORE_SESSION_PROPERTY, (Serializable) coreSession);
PageProvider<DocumentModel> pp = (PageProvider<DocumentModel>) ppService.getPageProvider(
        "TREE_CHILDREN_PP", null, null, null, props,
        new Object[] { myDoc.getId() });
List<DocumentModel> documents = pp.getCurrentPage();

```

Here you can see that the page provider properties (needed for the query to be executed) and its parameters (needed for the query to be built) cannot be resolved from EL expressions: they need to be given explicitly to the page provider service.

A typical usage of this page provider, referenced in a content view, would be:

```xml
<extension target="org.nuxeo.ecm.platform.ui.web.ContentViewService" point="contentViews">

  <contentView name="TREE_CHILDREN_CV">
    <title>tree children</title>

    <pageProvider name="TREE_CHILDREN_PP">
      <property name="coreSession">#{documentManager}</property>
      <property name="checkQueryCache">true</property>
      <parameter>#{currentDocument.id}</parameter>
    </pageProvider>      

  </contentView>

</extension>

```

Here you can see that properties and parameters can be put on the referenced page provider as content views all have a JSF context.

There is also a syntax to reference "named parameters" in the page provider fixed part. This is mostly useful when working with page providers from the [Search Endpoints]({{page page='search-endpoints'}}). You can also find [extensive test cases in the code](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-services/nuxeo-platform-query-api/src/test/java/org/nuxeo/ecm/platform/query/core/TestPageProviderNamedParameters.java).

## Custom Page Providers

This chapter focuses on writing custom page providers, for instance when you'd like to use content views to query and display results from an external system.

The `<coreQueryPageProvider>` element makes it possible to answer to most common use cases. If you would like to use another kind of query, you can use an alternate element and specify the `PageProvider` class to use.

Here is a sample example of a custom page provider configuration:

```xml
<extension target="org.nuxeo.ecm.platform.ui.web.ContentViewService"
  point="contentViews">

  <contentView name="CURRENT_DOCUMENT_CHILDREN_FETCH">
    <genericPageProvider
      class="org.nuxeo.ecm.platform.query.nxql.CoreQueryAndFetchPageProvider">
      <property name="coreSession">#{documentManager}</property>
      <pattern>
        SELECT dc:title FROM Document WHERE ecm:parentId = ? AND
        ecm:isVersion = 0 AND ecm:mixinType != 'HiddenInNavigation'
        AND ecm:isTrashed = 0
      </pattern>
      <parameter>#{currentDocument.id}</parameter>
      <sort column="dc:title" ascending="true" />
      <pageSize>2</pageSize>
    </genericPageProvider>

    ...
  </contentView>

</extension>

```

The `<genericPageProvider>` element takes an additional `class` attribute stating the page provider class. This class has to follow the `org.nuxeo.ecm.core.api.PageProvider` interface and does not need to list document models: content views do not force the item type to a given interface. The abstract class `org.nuxeo.ecm.core.api.AbstractPageProvider` makes it easier to define a new page provider as it implements most of the interface methods in a generic way.

As result layouts can apply to other objects than document models, their definition can be adapted to fit to the kind of results provided by the custom page provider.

In the given example, another kind of query will be performed on a core session, and will return a list of maps, each map holding the&nbsp; [`dc:title`](http://dctitle) key and corresponding value on the matching documents.

The `<genericPageProvider>` element accepts all the other configurations present on the `<coreQueryPageProvider>` element: it is up to the `PageProvider` implementation to use them to build its query or not. It can also perform its own caching.

The properties can be defined as EL expressions and make it possible for the query provider to have access to contextual information. In the above example, the core session to the Nuxeo repository is taken from the Seam context and passed as the property with name `coreSession`.

## Use Cases

#### Using Query Parameters and 'IN' Operator

By passing query String list parameters:

```
list.add("\"Art/Architecture\", \"Art/Culture\"");
```

&nbsp;

And setting quoteParameters to false:

```xml
<genericPageProvider class="org.nuxeo.ecm.platform.query.nxql.CoreQueryAndFetchPageProvider"
                     name="searchWithInOperatorAndQueryParams">
  <property name="searchAllRepositories">true</property>
  <pattern quoteParameters="false">
    SELECT * FROM Document WHERE ecm:mixinType != 'HiddenInNavigation'
    AND ecm:isVersion = 0
    AND ecm:isTrashed = 0
    AND dc:subjects IN (?)
  </pattern>
  <pageSize>50</pageSize>
</genericPageProvider>
```

Result will be the following query:

```
SELECT * FROM Document WHERE ecm:mixinType != 'HiddenInNavigation' AND ecm:isVersion = 0 AND ecm:isTrashed = 0 AND dc:subjects IN ("Art/Architecture", "Art/Culture")
```

&nbsp;

#### Using Named Parameters and Dates with Automation

By setting quoteParameters to false:

```xml
<genericPageProvider class="org.nuxeo.ecm.platform.query.nxql.CoreQueryAndFetchPageProvider" name="testPP">
  <property name="searchAllRepositories">true</property>
  <pattern quoteParameters="false">
    SELECT * FROM Document WHERE dc:created &gt; :mydate AND dc:title = "hello"
  </pattern>
  <pageSize>50</pageSize>
</genericPageProvider>
```

And defining a named parameter date:

```xml
<operation id="Repository.PageProvider">
  <param type="string" name="language">NXQL</param>
  <param type="properties" name="namedParameters">expr:mydate=@{CurrentDate}</param>
  <param type="string" name="providerName">testPP</param>
  <param type="string" name="sortOrder">ASC</param>
</operation>
```

Result will be the following query:

```
SELECT * FROM Document WHERE dc:created > TIMESTAMP '2015-04-04 00:00:00.000'
```

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Page provider related topics'}}

- [Custom Page Providers]({{page page='custom-page-providers'}})
- [Page Provider Aggregates]({{page page='page-provider-aggregates'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
