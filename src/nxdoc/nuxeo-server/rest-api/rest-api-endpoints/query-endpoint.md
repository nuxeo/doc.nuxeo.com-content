---
title: Query Endpoint (Deprecated)
review:
    comment: ''
    date: '2020-01-21'
    status: ok
details:
    howto:
        excerpt: This how-to provides an example of how to use the REST API to query the Nuxeo repository.
        level: Advanced
        tool: Code
        topics: 'Query, REST API'
labels:
    - content-review-lts2016
    - endpoint
    - howto
    - page-provider
    - elasticsearch
    - rest-api
    - troger
    - query-pageprovider-component
    - link-update
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '13664833'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Query+Endpoint
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Query+Endpoint'
    page_id: '20514728'
    shortlink: qAc5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/qAc5AQ'
    source_link: /display/NXDOC/Query+Endpoint
tree_item_index: 800
history:
    -
        author: Gabriel Barata
        date: '2016-08-26 15:16'
        message: ''
        version: '41'
    -
        author: Gabriel Barata
        date: '2016-08-26 15:10'
        message: ''
        version: '40'
    -
        author: Manon Lumeau
        date: '2016-06-09 13:55'
        message: ''
        version: '39'
    -
        author: Karin Touchie
        date: '2016-04-05 08:06'
        message: ''
        version: '38'
    -
        author: Karin Touchie
        date: '2016-04-05 08:06'
        message: ''
        version: '37'
    -
        author: Manon Lumeau
        date: '2016-04-04 15:24'
        message: ''
        version: '36'
    -
        author: Manon Lumeau
        date: '2015-09-16 10:25'
        message: ''
        version: '35'
    -
        author: Solen Guitter
        date: '2015-04-20 13:11'
        message: ''
        version: '34'
    -
        author: Solen Guitter
        date: '2015-04-20 13:07'
        message: ''
        version: '33'
    -
        author: Solen Guitter
        date: '2015-01-14 09:12'
        message: ''
        version: '32'
    -
        author: Solen Guitter
        date: '2015-01-14 09:11'
        message: ''
        version: '31'
    -
        author: Vladimir Pasquier
        date: '2015-01-13 13:48'
        message: ''
        version: '30'
    -
        author: Anahide Tchertchian
        date: '2014-12-17 17:20'
        message: format
        version: '29'
    -
        author: Anahide Tchertchian
        date: '2014-12-17 17:19'
        message: remove leftover chapters
        version: '28'
    -
        author: Anahide Tchertchian
        date: '2014-12-17 17:18'
        message: fill doc with named parameters examples
        version: '27'
    -
        author: Anahide Tchertchian
        date: '2014-12-17 16:33'
        message: add related  content + link to interesting page
        version: '26'
    -
        author: Anahide Tchertchian
        date: '2014-12-17 16:28'
        message: format
        version: '25'
    -
        author: Anahide Tchertchian
        date: '2014-12-17 16:23'
        message: remove dupe content (bad previous copy/paste)
        version: '24'
    -
        author: Guillaume Renard
        date: '2014-12-11 14:46'
        message: ''
        version: '23'
    -
        author: Vladimir Pasquier
        date: '2014-10-29 17:34'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2014-09-22 10:31'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2014-09-22 10:31'
        message: ''
        version: '20'
    -
        author: Vladimir Pasquier
        date: '2014-09-18 15:45'
        message: add es provider
        version: '19'
    -
        author: Vladimir Pasquier
        date: '2014-09-12 16:22'
        message: ''
        version: '18'
    -
        author: Vladimir Pasquier
        date: '2014-09-12 11:59'
        message: ''
        version: '17'
    -
        author: Vladimir Pasquier
        date: '2014-09-12 11:58'
        message: ''
        version: '16'
    -
        author: Thibaud Arguillere
        date: '2014-09-11 18:24'
        message: ''
        version: '15'
    -
        author: Vladimir Pasquier
        date: '2014-09-11 15:46'
        message: Query Endpoint
        version: '14'
    -
        author: Vladimir Pasquier
        date: '2014-09-11 15:43'
        message: ''
        version: '13'
    -
        author: Vladimir Pasquier
        date: '2014-09-11 15:42'
        message: ''
        version: '12'
    -
        author: Vladimir Pasquier
        date: '2014-09-11 15:37'
        message: ''
        version: '11'
    -
        author: Vladimir Pasquier
        date: '2014-09-11 15:28'
        message: ''
        version: '10'
    -
        author: Vladimir Pasquier
        date: '2014-09-11 15:28'
        message: ''
        version: '9'
    -
        author: Vladimir Pasquier
        date: '2014-09-11 15:23'
        message: ''
        version: '8'
    -
        author: Vladimir Pasquier
        date: '2014-09-11 14:59'
        message: ''
        version: '7'
    -
        author: Vladimir Pasquier
        date: '2014-09-11 14:54'
        message: ''
        version: '6'
    -
        author: Vladimir Pasquier
        date: '2014-09-11 14:53'
        message: ''
        version: '5'
    -
        author: Vladimir Pasquier
        date: '2014-09-11 14:53'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-09-10 10:39'
        message: ''
        version: '3'
    -
        author: Vladimir Pasquier
        date: '2014-09-09 18:54'
        message: wip query endpoint
        version: '2'
    -
        author: Vladimir Pasquier
        date: '2014-09-09 18:47'
        message: ''
        version: '1'
---

The query endpoint allows REST clients to query the Nuxeo repository.

{{#> callout type='warning' }}
Since 8.3 this endpoint has been deprecated in favor of the [Search Resource Endpoint]({{page page='search-endpoints'}}).
{{/callout}}

## Reminder

#### Automation

Since Nuxeo 6.0, you can use Automation operations remotely to run Page Providers in Elasticsearch.

There are no means to directly execute queries on Elasticsearch through Automation. Use the following Query endpoint instead: [Document.PageProvider](https://github.com/nuxeo/nuxeo-features/blob/6.0/nuxeo-automation/nuxeo-automation-features/src/main/java/org/nuxeo/ecm/automation/core/operations/services/DocumentPageProviderOperation.java) gives the ability to run page provider on Elasticsearch by passing the parameter **providerName**. This provider has to be created (for instance `myPageProviderESQL` and has to be set in `$NUXEO_HOME/bin/nuxeo.conf`.

```
elasticsearch.override.pageproviders=default_search,myPageProviderESQL
```

#### REST API

Read the following documentation to use the Query endpoint.

## Endpoint

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Path</th>
<th colspan="1">Endpoint</th>
</tr>
<tr>
<td colspan="1">GET

`/api/v1/query`

`/api/v1/query/NXQL`

</td>
<td colspan="1">Endpoint to perform queries on the repository in NXQL.</td>
</tr>
<tr>
<td colspan="1">

**GET**

`/api/v1/query/{providerName}`

</td>
<td colspan="1">Endpoint to perform a query based on page provider registered on the application.</td>
</tr>
</tbody>
</table>
</div>

## Properties

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Key</th>
<th colspan="1">Value</th>
</tr>
<tr>
<td colspan="1">

**query**

`string`

</td>
<td colspan="1">

The query to perform.

By default: `SELECT * FROM Document`

</td>
</tr>
<tr>
<td colspan="1">

**pageSize**

`integer`

</td>
<td colspan="1">

The number of entries per page.

By default: 0 (0 means no pagination.)

The maximum number of entries per page is 1000 by default. See [nuxeo.pageprovider.default-<span class="il">max</span>-<span class="il">page</span>-<span class="il">size</span> ]({{page page='configuration-parameters-index-nuxeoconf'}}) to customize it.

</td>
</tr>
<tr>
<td colspan="1">

**currentPageIndex**

`integer`

</td>
<td colspan="1">

The selected page index.

By default: 0

</td>
</tr>
<tr>
<td colspan="1">

**maxResults**

`integer`

</td>
<td colspan="1">

The maximum entries.

By default: 200

</td>
</tr>
<tr>
<td colspan="1">

**sortBy**

`string`

</td>
<td colspan="1">

Property(ies) sorting.

Example: `sortBy="dc:title,dc:description"`

</td>
</tr>
<tr>
<td colspan="1">

**sortOrder**

`string`

</td>
<td colspan="1">

Sort order.

Values: ASC or DESC

Example: `sortOrder="DESC,ASC"`

</td>
</tr>
<tr>
<td colspan="1">

**queryParams**

`string`

</td>
<td colspan="1">

Ordered parameters.

Example: for a query pattern like `Select * From Document where dc:title = ?`, the queryParams value should be "my title", for instance.

Note this is only interesting when using a page provider, defined server side.

</td>
</tr>
<tr>
<td colspan="1">**parameter1, parameter2...**

`string`

</td>
<td colspan="1">

Named parameters.

Example: for a query pattern like `Select * From Document where dc:title = :title1`, the title1 parameter should be "my title", for instance.

Parameter names should be strictly different from property names (and other query parameters).

Note this is only interesting when using a page provider, defined server side.

</td>
</tr>
</tbody>
</table>
</div>

## Examples

### Query

{{#> panel type='code' heading='Examples'}}

```
GET http://NUXEO_SERVER/nuxeo/api/v1/query?query=select * from Document

GET http://NUXEO_SERVER/nuxeo/api/v1/query?query=select * from Document&pageSize=2&currentPageIndex=1
```

{{/panel}}

{{#> panel type='code' heading='Response'}}

```
{
    "entity-type": "documents",
    "isPaginable": true,
    "resultsCount": 39,
    "pageSize": 2,
    "maxPageSize": 100,
    "currentPageSize": 2,
    "currentPageIndex": 1,
    "numberOfPages": 20,
    "isPreviousPageAvailable": true,
    "isNextPageAvailable": true,
    "isLastPageAvailable": true,
    "isSortable": true,
    "hasError": false,
    "errorMessage": null,
    "totalSize": 39,
    "pageIndex": 1,
    "pageCount": 20,
    "entries": [
        {
            "entity-type": "document",
            "repository": "default",
            "uid": "6a2707d7-1340-4f7c-935b-6f01f0c1bf15",
            "path": "/management/administrative-infos/Mac OS X--44d452c00edf0bf0f86447b1f40923d6-79d535faa48b39f3f358fe5dad3c503b--org.nuxeo.ecm.smtp",
            "type": "AdministrativeStatus",
            "state": "undefined",
            "versionLabel": "",
            "isCheckedOut": true,
            "title": "Mac OS X--44d452c00edf0bf0f86447b1f40923d6-79d535faa48b39f3f358fe5dad3c503b--org.nuxeo.ecm.smtp",
            "lastModified": "2014-09-04T09:51:15.46Z",
            "facets": [
                "HiddenInNavigation"
            ],
            "changeToken": "1409824275462",
            "contextParameters": {
                "documentURL": "/nuxeo/nxdoc/default/6a2707d7-1340-4f7c-935b-6f01f0c1bf15"
            }
        },
        {
            "entity-type": "document",
            "repository": "default",
            "uid": "5366b1e4-10f3-4ab6-9510-c31e1e5faea9",
            "path": "/management/administrative-infos",
            "type": "AdministrativeStatusContainer",
            "state": "undefined",
            "versionLabel": "",
            "isCheckedOut": true,
            "title": "administrative-infos",
            "lastModified": "2014-09-04T09:51:15.44Z",
            "facets": [
                "Folderish",
                "HiddenInNavigation"
            ],
            "changeToken": "1409824275441",
            "contextParameters": {
                "documentURL": "/nuxeo/nxdoc/default/5366b1e4-10f3-4ab6-9510-c31e1e5faea9"
            }
        }
    ]
}
```

{{/panel}}

### Query - Elasticsearch

In order to perform NXQL queries on Elasticsearch repository through the `query` endpoint, the following configuration must be added in `$NUXEO_HOME/bin/nuxeo.conf`:

```
elasticsearch.override.pageproviders=default_search,REST_API_SEARCH_ADAPTER
```

Note that the [`default_search`]({{page page='page-provider-aggregates'}}) is the only page provider querying on Elasticsearch by default. When defining `elasticsearch.override.pageproviders` conf property, don't forget to add it else it won't be querying Elasticsearch anymore. See also [How to Make a Page Provider or Content View Query Elasticsearch Index]({{page page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}}).

### Page Provider

Using page providers defined server-side, instead of redefining the query on client side, might also be useful for better reusability.

Here are different use cases when defining page providers and making it possible to pass parameters from the client.

#### Page Provider without Parameters

```xml
<coreQueryPageProvider name="latest_docs">
  <pattern>
    SELECT * FROM Document WHERE ecm:mixinType != 'HiddenInNavigation'
    AND ecm:isVersion = 0 AND ecm:isTrashed = 0
  </pattern>
  <sort column="dc:modified" ascending="false" />
  <pageSize>50</pageSize>
</coreQueryPageProvider>
```

{{#> panel type='code' heading='Example'}}

```
GET http://NUXEO_SERVER/nuxeo/api/v1/query/latest_docs

```

{{/panel}}

#### Page Provider with Parameters Referenced with the '?' Character

```xml
<coreQueryPageProvider name="tree_children">
  <pattern>
    SELECT * FROM Document WHERE ecm:parentId = ? AND ecm:isProxy = 0
    AND ecm:mixinType = 'Folderish' AND ecm:mixinType != 'HiddenInNavigation'
    AND ecm:isVersion = 0 AND ecm:isTrashed = 0
  </pattern>
  <sort column="dc:title" ascending="true" />
  <pageSize>50</pageSize>
</coreQueryPageProvider>
```

{{#> panel type='code' heading='Example'}}

```
GET http://NUXEO_SERVER/nuxeo/api/v1/query/tree_children?queryParams=47dd6d8d-d8d0-4a09-9e3e-e30fc8877df1

```

{{/panel}}

#### Page Provider with Named Parameter in the Pattern

```xml
<coreQueryPageProvider name="docs_by_title_and_desc">
  <pattern>
    SELECT * FROM Document WHERE dc:title = :title AND dc:description LIKE :desc
  </pattern>
  <sort column="dc:title" ascending="true" />
  <pageSize>50</pageSize>
</coreQueryPageProvider>
```

{{#> panel type='code' heading='Example'}}

```
GET http://NUXEO_SERVER/nuxeo/api/v1/query/docs_by_title_and_desc?title=mytitle&desc=mydesc

```

{{/panel}}

#### Page Provider with Named Parameter in WHERE Clause

```xml
<coreQueryPageProvider name="docs_by_title_if_any">
  <whereClause>
    <predicate parameter="dc:title" operator="=">
      <field name="title" />
    </predicate>
  </whereClause>
  <sort column="dc:title" ascending="true" />
  <pageSize>50</pageSize>
</coreQueryPageProvider>
```

{{#> panel type='code' heading='Examples'}}

```
GET http://NUXEO_SERVER/nuxeo/api/v1/query/docs_by_title_if_any?title=mytitle
GET http://NUXEO_SERVER/nuxeo/api/v1/query/docs_by_title_if_any
```

{{/panel}}

In the second example, no filtering will be performed: the title parameter is not filled so the corresponding predicate will not be part of the resulting query.

Named parameters will be, by default, treated as String values. If you need further configuration, you'll need to define a document type, and associated schema, so that conversions are accurate for numbers, dates, booleans, etc...

#### Page Provider with Named Parameter in WHERE Clause and Typing

Assuming a document type NamedParamDoc, with associated schema with prefix `np`, has been defined, the following query can be performed:

```xml
<coreQueryPageProvider name="docs_by_title_complex">
  <searchDocumentType>NamedParamDoc</searchDocumentType>
  <whereClause>
    <predicate parameter="dc:title" operator="=">
      <field name="np:title" />
    </predicate>
    <predicate parameter="ecm:isVersion" operator="=">
      <field xpath="np:isCheckedIn" />
    </predicate>
  </whereClause>
  <sort column="dc:title" ascending="true" />
  <pageSize>50</pageSize>
</coreQueryPageProvider>
```

{{#> panel type='code' heading='Example'}}

```
GET http://NUXEO_SERVER/nuxeo/api/v1/query/docs_by_title_complex?np%3Atitle=mytitle&np%3AisCheckedIn=true
```

{{/panel}}

{{#> panel type='code' heading='Response'}}

```
{
    "entity-type": "documents",
    "isPaginable": true,
    "resultsCount": 1,
    "pageSize": 50,
    "maxPageSize": 100,
    "currentPageSize": 1,
    "currentPageIndex": 0,
    "numberOfPages": 1,
    "isPreviousPageAvailable": false,
    "isNextPageAvailable": false,
    "isLastPageAvailable": false,
    "isSortable": true,
    "hasError": false,
    "errorMessage": null,
    "totalSize": 1,
    "pageIndex": 0,
    "pageCount": 1,
    "entries": [
        {
            "entity-type": "document",
            "repository": "default",
            "uid": "1c5fcfa7-3cd1-446e-b3d3-5f8c41d61ea7",
            "path": "/default-domain/UserWorkspaces/Administrator",
            "type": "Workspace",
            "state": "project",
            "versionLabel": "",
            "isCheckedOut": true,
            "title": "Administrator",
            "lastModified": "2014-09-04T09:52:15.83Z",
            "facets": [
                "Folderish",
                "SuperSpace"
            ],
            "changeToken": "1409824335836",
            "contextParameters": {
                "documentURL": "/nuxeo/nxdoc/default/1c5fcfa7-3cd1-446e-b3d3-5f8c41d61ea7/view_documents"
            }
        }
    ]
}
```

{{/panel}}

### Page Provider - Elasticsearch

{{#> panel type='code' heading='Default Page provider in Nuxeo Server'}}

```xml
<genericPageProvider name="aggregates_1"
  class="org.nuxeo.elasticsearch.provider.ElasticSearchNxqlPageProvider">
  <property name="coreSession">#{documentManager}</property>
  <property name="maxResults">-1</property>
  <pageSize>20</pageSize>
  <fixedPart>SELECT * FROM Document</fixedPart>
  <aggregates>
    <aggregate id="source" type="terms" parameter="dc:source">
      <field schema="advanced_search" name="source_agg" />
      <properties>
        <property name="size">5</property>
      </properties>
    </aggregate>
    <aggregate id="coverage" type="terms" parameter="dc:coverage">
      <field schema="advanced_search" name="coverage_agg" />
      <properties>
        <property name="size">5</property>
      </properties>
    </aggregate>
    <aggregate id="nature" type="terms" parameter="dc:nature">
      <field schema="advanced_search" name="nature_agg" />
      <properties>
        <property name="size">5</property>
      </properties>
    </aggregate>
  </aggregates>
</genericPageProvider>

```

{{/panel}}{{#> panel type='code' heading='Examples'}}

```
GET http://NUXEO_SERVER/nuxeo/api/v1/query/aggregates_1

```

{{/panel}}

{{#> panel type='code' heading='Response'}}

```
{
  "entity-type": "documents",
  "isPaginable": true,
  "resultsCount": 16,
  "pageSize": 20,
  "maxPageSize": 1000,
  "currentPageSize": 15,
  "currentPageIndex": 0,
  "numberOfPages": 1,
  "isPreviousPageAvailable": false,
  "isNextPageAvailable": false,
  "isLastPageAvailable": false,
  "isSortable": true,
  "hasError": false,
  "errorMessage": null,
  "totalSize": 16,
  "pageIndex": 0,
  "pageCount": 1,
  "entries": [
    {
      "entity-type": "document",
      "repository": "test",
      "uid": "48706617-f28f-4fd5-9a7c-1b7759908eb9",
      "path": "/folder_2",
      "type": "Folder",
      "state": "project",
      "versionLabel": "",
      "isCheckedOut": true,
      "title": "Folder 2",
      "lastModified": "2014-09-18T13:42:16.31Z",
      "properties": {
        "dc:description": null,
        "dc:language": null,
        "dc:coverage": null,
        "dc:valid": null,
        "dc:creator": "Administrator",
        "dc:modified": "2014-09-18T13:42:16.31Z",
        "dc:lastContributor": "Administrator",
        "dc:format": null,
        "dc:expired": null,
        "dc:rights": null,
        "dc:created": "2014-09-18T13:42:16.31Z",
        "dc:title": "Folder 2",
        "dc:issued": null,
        "dc:nature": null,
        "dc:subjects": [],
        "dc:contributors": [
          "Administrator"
        ],
        "dc:source": null,
        "dc:publisher": null
      },
      "facets": [
        "Folderish"
      ],
      "changeToken": "1411047736310",
      "contextParameters": {
        "documentURL": "/nuxeo/nxdoc/test/48706617-f28f-4fd5-9a7c-1b7759908eb9"
      }
    }
..............................
  "aggregations": {
    "coverage": {
      "id": "coverage",
      "type": "terms",
      "query": {
        "field": "dc:coverage",
        "properties": {
          "size": "5"
        },
        "id": "coverage",
        "type": "terms",
        "selection": []
      },
      "buckets": [
        {
          "key": "Coverage0",
          "docCount": 2
        },
        {
          "key": "Coverage1",
          "docCount": 2
        },
        {
          "key": "Coverage2",
          "docCount": 1
        }
      ]
    },
    "nature": {
      "id": "nature",
      "type": "terms",
      "query": {
        "field": "dc:nature",
        "properties": {
          "size": "5"
        },
        "id": "nature",
        "type": "terms",
        "selection": []
      },
      "buckets": [
        {
          "key": "Nature0",
          "docCount": 3
        },
        {
          "key": "Nature1",
          "docCount": 2
        }
      ]
    },
    "source": {
      "id": "source",
      "type": "terms",
      "query": {
        "field": "dc:source",
        "properties": {
          "size": "5"
        },
        "id": "source",
        "type": "terms",
        "selection": []
      },
      "buckets": [
        {
          "key": "Source0",
          "docCount": 1
        },
        {
          "key": "Source1",
          "docCount": 1
        },
        {
          "key": "Source2",
          "docCount": 1
        },
        {
          "key": "Source3",
          "docCount": 1
        },
        {
          "key": "Source4",
          "docCount": 1
        }
      ]
    }
  }
}
```

{{/panel}}

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Document Resources Endpoints]({{page page='document-resources-endpoints'}})
- [REST API Entity Types]({{page page='rest-api-entity-types'}})
- [Page Providers]({{page page='page-providers'}})
- [HOWTO: Make a Page Provider or Content View Query Elasticsearch Index]({{page page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}})
{{/panel}}
</div>

<div class="column medium-6">

&nbsp;

</div></div>
