---
title: Search Resource Endpoints
review:
    comment: ''
    date: '2017-12-13'
    status: ok
details:
    howto:
        excerpt: 'This how-to provides some examples of how to use the REST API to query the Nuxeo repository, as well as to save these queries and later reproduce them.'
        level: Advanced
        tool: Code
        topics: 'Query, REST API'
labels:
    - lts2016-ok
    - howto
    - elasticsearch
    - search-tab-component
    - gbarata
    - saved-search
    - query-pageprovider-component
    - university
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '13664833'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Search+Endpoint
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Search+Endpoint'
    page_id: '31688591'
    shortlink: j4fjAQ
    shortlink_source: 'https://doc.nuxeo.com/x/j4fjAQ'
    source_link: /display/NXDOC/Search+Endpoint
tree_item_index: 200
history:
    -
        author: Gabriel Barata
        date: '2016-08-29 13:26'
        message: ''
        version: '24'
    -
        author: Gabriel Barata
        date: '2016-08-29 13:25'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2016-08-29 13:14'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2016-08-29 12:53'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2016-08-29 12:52'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2016-08-29 09:44'
        message: 'Fix formatting in endpoint, parameters and properties tables'
        version: '19'
    -
        author: Gabriel Barata
        date: '2016-08-26 15:06'
        message: ''
        version: '18'
    -
        author: Gabriel Barata
        date: '2016-08-26 15:05'
        message: ''
        version: '17'
    -
        author: Gabriel Barata
        date: '2016-08-26 14:57'
        message: ''
        version: '16'
    -
        author: Gabriel Barata
        date: '2016-08-26 14:36'
        message: ''
        version: '15'
    -
        author: Gabriel Barata
        date: '2016-08-26 14:22'
        message: ''
        version: '14'
    -
        author: Gabriel Barata
        date: '2016-08-26 14:18'
        message: ''
        version: '13'
    -
        author: Gabriel Barata
        date: '2016-08-26 14:17'
        message: ''
        version: '12'
    -
        author: Gabriel Barata
        date: '2016-08-26 14:13'
        message: ''
        version: '11'
    -
        author: Gabriel Barata
        date: '2016-08-26 14:00'
        message: ''
        version: '10'
    -
        author: Gabriel Barata
        date: '2016-08-26 13:35'
        message: ''
        version: '9'
    -
        author: Gabriel Barata
        date: '2016-08-26 12:03'
        message: ''
        version: '8'
    -
        author: Gabriel Barata
        date: '2016-08-26 11:44'
        message: ''
        version: '7'
    -
        author: Gabriel Barata
        date: '2016-08-26 11:38'
        message: ''
        version: '6'
    -
        author: Gabriel Barata
        date: '2016-08-26 11:38'
        message: ''
        version: '5'
    -
        author: Gabriel Barata
        date: '2016-08-26 11:37'
        message: ''
        version: '4'
    -
        author: Gabriel Barata
        date: '2016-08-26 11:35'
        message: ''
        version: '3'
    -
        author: Gabriel Barata
        date: '2016-08-26 11:28'
        message: ''
        version: '2'
    -
        author: Gabriel Barata
        date: '2016-08-26 11:19'
        message: ''
        version: '1'

---
The Search resource endpoints allow REST clients to perform queries on the Nuxeo repository, save these queries and reproduce them later on.

## Endpoints

There are three search endpoints:
- page provider (`pp`)
- query (`lang`) - not to be confused with the [deprecated query endpoint]({{page version='' space='nxdoc' page='query-endpoint'}})
- saved search (`saved`)

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-7">Path</th>
        <th class="small-5">Description</th>
      </tr>
      <tr>
        <td class="small-7">GET `/api/v1/search/lang/{queryLanguage}/execute`</td>
        <td class="small-5">Executes a query in a given query language. Default language is NXQL.</td>
      </tr>
      <tr>
        <td class="small-7">GET `/api/v1/search/pp/{providerName}/execute`</td>
        <td class="small-5">Executes a search using a specific page provider.</td>
      </tr>
      <tr>
        <td class="small-7">GET `/api/v1/search/pp/{providerName}`</td>
        <td class="small-5">Gets the definition of a given page provider.</td>
      </tr>
      <tr>
        <td class="small-7">GET `/api/v1/search/saved`</td>
        <td class="small-5">Gets a list of saved searches.</td>
      </tr>
      <tr>
        <td class="small-7">POST `/api/v1/search/saved`</td>
        <td class="small-5">Saves a search.</td>
      </tr>
      <tr>
        <td class="small-7">GET `/api/v1/search/saved/{searchId}`</td>
        <td class="small-5">Retrieves a saved search.</td>
      </tr>
      <tr>
        <td class="small-7">PUT `/api/v1/search/saved/{searchId}`</td>
        <td class="small-5">Updates a saved search.</td>
      </tr>
      <tr>
        <td class="small-7">DELETE `/api/v1/search/saved/{searchId}`</td>
        <td class="small-5">Deletes a saved search.</td>
      </tr>
      <tr>
        <td class="small-7">GET `/api/v1/search/saved/{searchId}/execute`</td>
        <td class="small-5">Executes a saved search.</td>
      </tr>
    </tbody>
  </table>
</div>

### Execution Parameters

Searches can be parameterized with execution parameters which can be passed to all `/search/**/execute` endpoints.

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th colspan="1">Key</th>
        <th colspan="1">Type</th>
        <th colspan="1">Description</th>
        <th colspan="1">Default Value / Example</th>
      </tr>
      <tr>
        <td colspan="1">`query`</td>
        <td colspan="1">string</td>
        <td colspan="1">The query to perform</td>
        <td colspan="1">`SELECT * FROM Document`</td>
      </tr>
      <tr>
        <td colspan="1">`pageSize`</td>
        <td colspan="1">integer</td>
        <td colspan="1">Number of entries per page</td>
        <td colspan="1">0 *(no pagination)* The maximum is 1000 by default. See the [Configuration Parameters Index (nuxeo.conf)]({{page page='configuration-parameters-index-nuxeoconf'}}) in order to customize it.</td>
      </tr>
      <tr>
        <td colspan="1">`currentPageIndex`</td>
        <td colspan="1">integer</td>
        <td colspan="1">Selected page index</td>
        <td colspan="1">0</td>
      </tr>
      <tr>
        <td colspan="1">`maxResults`</td>
        <td colspan="1">integer</td>
        <td colspan="1">Maximum entries</td>
        <td colspan="1">200</td>
      </tr>
      <tr>
        <td colspan="1">`sortBy`</td>
        <td colspan="1">string</td>
        <td colspan="1">Property sorting</td>
        <td colspan="1">Example: `sortBy="dc:title,dc:description"`</td>
      </tr>
      <tr>
        <td colspan="1">`sortOrder`</td>
        <td colspan="1">string</td>
        <td colspan="1">Sort order</td>
        <td colspan="1">Examples: `sortOrder="DESC"` or `sortOrder="ASC"`</td>
      </tr>
      <tr>
        <td colspan="1">`offset`</td>
        <td colspan="1">number</td>
        <td colspan="1">Current page offset.</td>
        <td colspan="1">0</td>
      </tr>
      <tr>
        <td colspan="1">`highlight`</td>
        <td colspan="1">string</td>
        <td colspan="1">List of fields to highlight.</td>
        <td colspan="1">Example: `highlight="dc:title.fulltext,dc:description.fulltext"`. Check [Elasticsearch Highlights]({{page page='elasticsearch-highlights'}}) for more details.</td>
      </tr>
      <tr>
        <td colspan="1">`queryParams`</td>
        <td colspan="1">string</td>
        <td colspan="1">Ordered parameters</td>
        <td colspan="1">
          Example: For a query pattern like `Select * From Document where dc:title = ?`, the `queryParams` value should be "My Title". This is only useful when using a page provider, defined server-side.
        </td>
      </tr>
      <tr>
        <td colspan="1">`parameter1`, `parameter2`...</td>
        <td colspan="1">string</td>
        <td colspan="1">Named parameters</td>
        <td colspan="1">
          Example: For a query pattern like `Select * From Document where dc:title = :title1`, the `title1` parameter should be "My Title". Parameter names should be strictly different from property names (and other query parameters). This is only useful when using a page provider, defined server-side.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Saved Search Properties

Saved searches are composed of the following properties:

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th colspan="1">Property</th>
        <th colspan="1">Type</th>
        <th colspan="1">Description</th>
      </tr>
      <tr>
        <td colspan="1">`queryParams`</td>
        <td colspan="1">string</td>
        <td colspan="1">Ordered query parameters</td>
      </tr>
      <tr>
        <td colspan="1">`namedParams`</td>
        <td colspan="1">object</td>
        <td colspan="1">Named parameters</td>
      </tr>
      <tr>
        <td colspan="1">`query`</td>
        <td colspan="1">string</td>
        <td colspan="1">Query to be executed, mutually exclusive with `providerName`</td>
      </tr>
      <tr>
        <td colspan="1">`queryLanguage`</td>
        <td colspan="1">string</td>
        <td colspan="1">Query language, mutually exclusive with `providerName` (default is NXQL)</td>
      </tr>
      <tr>
        <td colspan="1">`providerName`</td>
        <td colspan="1">string</td>
        <td colspan="1">Page provider to use in the search, mutually exclusive with `query` and `queryLanguage`</td>
      </tr>
      <tr>
        <td colspan="1">`contentViewData`</td>
        <td colspan="1">string</td>
        <td colspan="1">JSON object containing content view related data</td>
      </tr>
    </tbody>
  </table>
</div>

These properties are particularly relevant for creating and updating saved searches. Search execution parameters can be stored as properties of the saved search, which will be used when the search is executed. These parameters can be overridden if passed again with new values to the execution endpoint.

## Examples and Sample Code

### Searching by Query

{{#> panel type='code' heading='Requests'}}

```
GET http://NUXEO_SERVER/nuxeo/api/v1/search/lang/NXQL/execute?query=select * from Document

GET http://NUXEO_SERVER/nuxeo/api/v1/search/lang/NXQL/execute?query=select * from Document&pageSize=2&currentPageIndex=1
```

{{/panel}}

{{#> panel type='code' heading='Response'}}

```javascript
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

#### Querying with Elasticsearch

In order to perform NXQL queries on Elasticsearch repository through the `search` endpoints, the following configuration must be added to `$NUXEO_HOME/bin/nuxeo.conf`:

```
elasticsearch.override.pageproviders=default_search,REST_API_SEARCH_ADAPTER
```

Note that [`default_search`]({{page page='page-provider-aggregates'}}) is the only page provider querying on Elasticsearch by default. When defining `elasticsearch.override.pageproviders` conf property, don't forget to add it or else it won't query Elasticsearch anymore. See also [How to Make a Page Provider or Content View Query Elasticsearch Index]({{page page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}}).

### Searching by Page Provider

Using page providers defined server-side instead of redefining the query on client side might also be useful for better reusability.

Here are different use cases for defining page providers and making it possible to pass parameters from the client.

#### Without Parameters

```xml
<coreQueryPageProvider name="latest_docs">
  <pattern>
    SELECT * FROM Document WHERE ecm:mixinType != 'HiddenInNavigation'
    AND ecm:isCheckedInVersion = 0 AND ecm:currentLifeCycleState != 'deleted'
  </pattern>
  <sort column="dc:modified" ascending="false" />
  <pageSize>50</pageSize>
</coreQueryPageProvider>
```

{{#> panel type='code' heading='Example Request'}}

```
GET http://NUXEO_SERVER/nuxeo/api/v1/search/pp/latest_docs/execute

```

{{/panel}}

#### Parameters Referenced with the '?' Character

```xml
<coreQueryPageProvider name="tree_children">
  <pattern>
    SELECT * FROM Document WHERE ecm:parentId = ? AND ecm:isProxy = 0
    AND ecm:mixinType = 'Folderish' AND ecm:mixinType != 'HiddenInNavigation'
    AND ecm:isCheckedInVersion = 0 AND ecm:currentLifeCycleState != 'deleted'
  </pattern>
  <sort column="dc:title" ascending="true" />
  <pageSize>50</pageSize>
</coreQueryPageProvider>
```

{{#> panel type='code' heading='Example'}}

```
GET http://NUXEO_SERVER/nuxeo/api/v1/search/pp/tree_children/execute?queryParams=47dd6d8d-d8d0-4a09-9e3e-e30fc8877df1

```

{{/panel}}

#### Named Parameter in the Pattern

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
GET http://NUXEO_SERVER/nuxeo/api/v1/search/pp/docs_by_title_and_desc/execute?title=mytitle&desc=mydesc

```

{{/panel}}

#### Named Parameter in WHERE Clause

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

{{#> panel type='code' heading='Example'}}

```
GET http://NUXEO_SERVER/nuxeo/api/v1/search/pp/docs_by_title_if_any/execute?title=mytitle

GET http://NUXEO_SERVER/nuxeo/api/v1/search/pp/docs_by_title_if_any/execute
```

{{/panel}}

In the second example, no filtering is performed: the `title` parameter is not provided so the corresponding predicate is not part of the resulting query.

By default, named parameters are treated as String values. If you need further configuration, define a document type and the associated schema so that conversions are accurate for numbers, dates, booleans, etc.

#### Named Parameter in WHERE Clause and Typing

Assuming a document type `NamedParamDoc` and the associated schema prefixed `np` have been defined, the following query can be performed:

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
GET http://NUXEO_SERVER/nuxeo/api/v1/search/pp/docs_by_title_complex/execute?np%3Atitle=mytitle&np%3AisCheckedIn=true
```

{{/panel}}

{{#> panel type='code' heading='Response'}}

```javascript
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

#### With Elasticsearch

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
GET http://NUXEO_SERVER/nuxeo/api/v1/search/pp/aggregates_1/execute

```

{{/panel}}{{#> panel type='code' heading='Response'}}

```javascript
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

{{/panel}}{{#> panel type='code' heading='Using a parameter'}}

```
GET http://NUXEO_SERVER/nuxeo/api/v1/search/pp/aggregates_1/execute?nature_agg=%5B%22mynaturevalue1%22%5D
```

{{/panel}}{{#> panel type='code' heading='Using a multi-valued parameter'}}

```
GET http://NUXEO_SERVER/nuxeo/api/v1/search/pp/default_search/execute?dc_creator_agg=%5B%22user1%22,%22user2%22%5D
```

{{/panel}}
{{#> panel type='code' heading='Using several parameters'}}

```
GET http://NUXEO_SERVER/nuxeo/api/v1/search/pp/default_search/execute?dc_creator_agg=%5B%22user1%22,%22user2%22%5D&dc_nature_agg=%5B%22mynaturevalue1%22%5D
```

{{/panel}}

### Managing Saved Searches

#### Saving a Search by Query

{{#> panel type='code' heading='Request'}}

```
POST http://NUXEO_SERVER/nuxeo/api/v1/search/saved
{
  "entity-type": "savedSearch",
  "title": "search by query",
  "query": "select * from Document where dc:creator = ?",
  "queryLanguage": "NXQL",
  "queryParams": "$currentUser",
  "pageSize": "2"
}
```

{{/panel}}

#### Saving a Search Using a Search Document Model

{{#> panel type='code' heading='Request'}}

```
POST http://NUXEO_SERVER/nuxeo/api/v1/search/saved
{
  "entity-type": "savedSearch",
  "title": "search by search document model",
  "pageProviderName": "default_search",
  "pageSize": "2",
  "params": {
    "ecm_fulltext": "pupp*",
    "dc_modified_agg": ["lastMonth"]
  }
}
```

{{/panel}}

Note that the properties of the search document model are passed in the `params` property.

#### Saving a Search Using a Page Provider and with Content View Data

{{#> panel type='code' heading='Request'}}

```
POST http://NUXEO_SERVER/nuxeo/api/v1/search/saved
{
  "entity-type": "savedSearch",
  "title": "my search by page provider",
  "pageProviderName": "default_document_suggestion",
  "queryParams": "Puppy",
  "contentViewData": "{\"viewVar\": \"value\"}"
}
```

{{/panel}}

#### Listing Saved Searches

{{#> panel type='code' heading='Request'}}

```
GET http://NUXEO_SERVER/nuxeo/api/v1/search/saved
```

{{/panel}}{{#> panel type='code' heading='Response'}}

```javascript
{
  "entity-type": "savedSearches",
  "entries": [
    {
      "entity-type": "savedSearch",
      "id": "f0c173cc-4bbc-42b1-ac66-51b362643b6c",
      "title": "search by search document model",
      "queryParams": null,
      "query": null,
      "queryLanguage": null,
      "pageProviderName": "default_search",
      "pageSize": "2",
      "currentPageIndex": null,
      "maxResults": null,
      "sortBy": null,
      "sortOrder": null,
      "contentViewData": null,
      "params": {}
    },
    {
      "entity-type": "savedSearch",
      "id": "d9177b09-f077-4d69-bac5-687e3a71c7d1",
      "title": "search by query",
      "queryParams": "$currentUser",
      "query": "select * from Document where dc:creator = ?",
      "queryLanguage": "NXQL",
      "pageProviderName": null,
      "pageSize": "2",
      "currentPageIndex": null,
      "maxResults": null,
      "sortBy": null,
      "sortOrder": null,
      "contentViewData": null,
      "params": {}
    },
    {
      "entity-type": "savedSearch",
      "id": "09b3057f-6222-4567-924c-66fe0dd06140",
      "title": "my search by page provider",
      "queryParams": "Puppy",
      "query": null,
      "queryLanguage": null,
      "pageProviderName": "default_document_suggestion",
      "pageSize": null,
      "currentPageIndex": null,
      "maxResults": null,
      "sortBy": null,
      "sortOrder": null,
      "contentViewData": "{\"viewVar\": \"value\"}",
      "params": {}
    }
  ]
}
```

{{/panel}}

#### Retrieving a Search

{{#> panel type='code' heading='Request'}}

```
GET http://NUXEO_SERVER/nuxeo/api/v1/search/saved/f0c173cc-4bbc-42b1-ac66-51b362643b6c
```

{{/panel}}{{#> panel type='code' heading='Response'}}

```javascript
{
  "entity-type": "savedSearch",
  "id": "f0c173cc-4bbc-42b1-ac66-51b362643b6c",
  "title": "search by search document model",
  "queryParams": null,
  "query": null,
  "queryLanguage": null,
  "pageProviderName": "default_search",
  "pageSize": "2",
  "currentPageIndex": null,
  "maxResults": null,
  "sortBy": null,
  "sortOrder": null,
  "contentViewData": null,
  "params": {}
}
```

{{/panel}}

In the above example the search has a search document model, containing its own properties. To display these, pass the desired schemas in the [properties header]({{page page='special-http-headers'}}) when performing the request.

{{#> panel type='code' heading='Request'}}

```
[HEADER] properties: default_search
GET http://NUXEO_SERVER/nuxeo/api/v1/search/saved/f0c173cc-4bbc-42b1-ac66-51b362643b6c
```

{{/panel}}{{#> panel type='code' heading='Response'}}

```javascript
{
    "contentViewData": null,
    "currentPageIndex": null,
    "entity-type": "savedSearch",
    "id": "f0c173cc-4bbc-42b1-ac66-51b362643b6c",
    "maxResults": null,
    "pageProviderName": "default_search",
    "pageSize": "2",
    "params": {
        "defaults:common_size_agg": [],
        "defaults:dc_coverage": [],
        "defaults:dc_coverage_agg": [],
        "defaults:dc_created_agg": [],
        "defaults:dc_created_max": null,
        "defaults:dc_created_min": null,
        "defaults:dc_creator": [],
        "defaults:dc_creator_agg": [],
        "defaults:dc_modified_agg": [
            "lastMonth"
        ],
        "defaults:dc_modified_max": null,
        "defaults:dc_modified_min": null,
        "defaults:dc_nature": [],
        "defaults:dc_nature_agg": [],
        "defaults:dc_subjects": [],
        "defaults:dc_subjects_agg": [],
        "defaults:ecm_collections": [],
        "defaults:ecm_fulltext": "pupp*",
        "defaults:ecm_path": [],
        "defaults:ecm_tags": []
    },
    "query": null,
    "queryLanguage": null,
    "queryParams": null,
    "sortBy": null,
    "sortOrder": null,
    "title": "search by search document model"
}
```

{{/panel}}

#### Executing a Search

Executing a search with stored parameters:

{{#> panel type='code' heading='Request'}}

```
GET http://NUXEO_SERVER/nuxeo/api/v1/search/saved/f0c173cc-4bbc-42b1-ac66-51b362643b6c/execute
```

{{/panel}}

Overriding a stored execution parameters, in this case `pageSize`:

{{#> panel type='code' heading='Request'}}

```
GET http://NUXEO_SERVER/nuxeo/api/v1/search/saved/f0c173cc-4bbc-42b1-ac66-51b362643b6c/execute?pageSize=5
```

{{/panel}}

## Learn More

*   Test these endpoints on your local instance with [Nuxeo API Playground](http://nuxeo.github.io/api-playground/) (see [documentation]({{page version='' space='nxdoc' page='howto-nuxeo-api-playground'}}) to configure your local instance).
*   Checkout the Nuxeo REST API explorer of your instance at `http://NUXEO_SERVER/nuxeo/api/v1/doc`.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Document Resources Endpoints]({{page page='document-resources-endpoints'}})
- [REST API Entity Types]({{page page='rest-api-entity-types'}})
- [Page Providers]({{page page='page-providers'}})
- [How to Make a Page Provider or Content View Query Elasticsearch Index]({{page page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}})
- [Elasticsearch Highlights]({{page page='elasticsearch-highlights'}})

{{/panel}}</div><div class="column medium-6">



</div></div>
