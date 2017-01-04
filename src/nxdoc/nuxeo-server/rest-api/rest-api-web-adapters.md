---
title: REST API Web Adapters
review:
    comment: ''
    date: '2016-12-07'
    status: ok
labels:
    - lts2016-ok
    - link-update
    - rest-api
    - webengine
    - rest-api-component
toc: true
confluence:
    ajs-parent-page-id: '13664833'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Web+Adapters+for+the+REST+API
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Web+Adapters+for+the+REST+API'
    page_id: '19793380'
    shortlink: 5AUuAQ
    shortlink_source: 'https://doc.nuxeo.com/x/5AUuAQ'
    source_link: /display/NXDOC/Web+Adapters+for+the+REST+API
tree_item_index: 600
history:
    -
        author: Solen Guitter
        date: '2016-07-29 16:15'
        message: dd missing excerpts for page Leaning the REST AP
        version: '18'
    -
        author: Damien Metzler
        date: '2016-02-24 08:40'
        message: ''
        version: '17'
    -
        author: Arnaud Kervern
        date: '2015-10-15 13:02'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2015-09-14 13:58'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2015-04-29 09:05'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2015-04-29 09:05'
        message: Add examples from page Document Resources Endpoints
        version: '13'
    -
        author: Solen Guitter
        date: '2015-04-23 09:58'
        message: Add task and workflow web adapters
        version: '12'
    -
        author: Solen Guitter
        date: '2015-04-22 14:29'
        message: page formatting
        version: '11'
    -
        author: Solen Guitter
        date: '2015-04-22 14:28'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2015-04-22 14:27'
        message: >-
            Add convert, rendition and search web adapters and related
            documentation
        version: '9'
    -
        author: Solen Guitter
        date: '2015-03-03 08:56'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-03-03 08:55'
        message: ''
        version: '7'
    -
        author: Thierry Delprat
        date: '2015-03-02 17:58'
        message: ''
        version: '6'
    -
        author: Thierry Delprat
        date: '2015-03-02 17:34'
        message: ''
        version: '5'
    -
        author: Thierry Delprat
        date: '2015-03-02 17:32'
        message: ''
        version: '4'
    -
        author: Thierry Delprat
        date: '2015-03-02 17:23'
        message: ''
        version: '3'
    -
        author: Thierry Delprat
        date: '2015-03-02 16:56'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-07-03 00:51'
        message: ''
        version: '1'

---
## Adapters and REST Resources

WebEngine, the JAX-RS Server used to serve the REST API, has the concept of [WebAdapter]({{page page='webengine-jax-rs'}}) for DocumentModel. Logically the REST API leverages this concept to expose adapters on top of the Document REST end point.

An adapter is a URL segment that starts with `@` and that transforms the input resource so as to return another resource. The idea is to have a URL pointing to a Document and use the adapter to convert the Document into something else before the result is returned. The general syntax is:

```
/nuxeo/api/v1/id/{docId}/@adapter/parameters

/nuxeo/api/v1/path/{documentPath}/@adapter/parameters
```

{{#> callout type='note' }}

The notion of Adapter precedes the concept of [Content Enricher]({{page page='content-enricher'}}). In some cases, some of the adapters presented here could be replaced by Content Enrichers.

{{/callout}}

## Simple Document Adapters

Several default adapters are provided by default.

`acl`

* **Usage**: Returns the ACLs of the target Document.
* **Sample URL**:

    ```
    /nuxeo/api/v1/id/{docId}/@acl
    ```

`audit`

* **Usage**: Returns audit trails records corresponding to the target Document.
* **Sample URL**:

    ```
    /nuxeo/api/v1/id/{docId}/@audit
    ```

`blob`

* **Usage**: Returns the Blob corresponding to the Document attribute matching the XPath parameter.
* **Sample URL**:

    ```
    /nuxeo/api/v1/id/{docId}/@blob/{xpath}
    ```

`children`

* **Usage**: Returns children of the target Document.
    Query parameters are not mandatory and are by default:
    * `page`: 0
    * `pageSize`: 50
    * `maxResult`: nolimit

* **Sample URL**:

    ```
    /nuxeo/api/v1/id/{docId}/@children
    ```

`convert`

* **Usage**: Returns the conversion of a blob.
    Query parameters, you must use one of them:
    * `converter`
    * `type`
    * `format`
* **Sample URL**:

    ```
    /nuxeo/api/v1/id/{docId}/@convert?format=pdf
    ```

`pp`

* **Usage**: Returns the result of the query corresponding to the named PageProvider.
    The target Document is used to provide the parameters of the PageProvider (i.e. SearchDocumentModel).
* **Sample URL**:

    ```
    /nuxeo/api/v1/id/{docId}/@pp/{pageProviderName}
    ```

`rendition`

* **Usage**: Returns the renditions of a blob.
* **Sample URL**:

    ```
    /nuxeo/api/v1/id/{docId}/@rendition/{renditionName}
    ```

`search`

* **Usage**: Returns paged results of the query.
    Query can be a full-text query or a NXQL query.
    Query parameters are not mandatory and are by default:
    * `orderBy`: [dc:title](http://dctitle/)
    * `page`: 0
    * `pageSize`: 50
    * `maxResult`: nolimit
* **Sample URL**:

    ```
    /nuxeo/site/api/v1/path/{docId}/@search?fullText=nuxeo&orderBy=dc:title

    /nuxeo/site/api/v1/path/{pathOfTheDoc}/@search?query=SELECT * FROM File
    ```

`task`

* **Usage**: Returns task instance you have permission to see.
* **Sample URL**:

    ```
    /nuxeo/api/v1/id/{docId}/@task
    ```

`workflow`

* **Usage**: Returns workflow instances launched by current user.
* **Sample URL**:

    ```
    /nuxeo/api/v1/id/{docId}/@workflow
    ```

### Getting the Children of a Given Document - @children

{{! multiexcerpt name='restapi-adapters-children'}}{{#> panel type='code' heading='Example'}}

```
GET /nuxeo/site/api/v1/path/{pathOfTheDoc}/@children?currentPageIndex=0&pagesize=20&maxResults=100
```

{{/panel}}{{! /multiexcerpt}}{{#> panel type='code' heading='Response'}}

```javascript
{
  "entity-type": "documents",
  "isPaginable": true,
  "resultsCount": 1,
  "pageSize": 50,
  "maxPageSize": 1000,
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
  "entries": [{
    "entity-type": "document",
    "repository": "default",
    "uid": "0178eb31-b1ca-49af-86b0-ff59d671dc91",
    "path": "/default-domain",
    "type": "Domain",
    "state": "project",
    "parentRef": "6db16630-9e06-42ba-8ce2-e5a0f14e9ee7",
    "isCheckedOut": true,
    "isVersion": false,
    "isProxy": false,
    "changeToken": "1481174085000",
    "title": "Domain",
    "lastModified": "2016-12-08T05:14:45.00Z",
    "facets": ["Folderish", "SuperSpace", "NotCollectionMember"]
  }]
}
```

{{/panel}}

### Searching Documents - @search

**Full-Text Search**

```
GET /nuxeo/site/api/v1/path/{pathOfTheDoc}/@search?fullText=nuxeo&orderBy=dc:title
```

{{#> panel type='code' heading='Response Example'}}

```javascript
{
  "entity-type": "documents",
  "isPaginable": true,
  "resultsCount": 2,
  "pageSize": 50,
  "maxPageSize": 0,
  "currentPageSize": 2,
  "currentPageIndex": 0,
  "numberOfPages": 1,
  "isPreviousPageAvailable": false,
  "isNextPageAvailable": false,
  "isLastPageAvailable": false,
  "isSortable": true,
  "hasError": false,
  "errorMessage": null,
  "totalSize": 2,
  "pageIndex": 0,
  "pageCount": 1,
  "entries": [{
    "entity-type": "document",
    "repository": "default",
    "uid": "7808880b-9a2d-4f91-89d8-1bc49f6ba526",
    "path": "/default-domain/templates/customerReferenceDOCX",
    "type": "TemplateSource",
    "state": "project",
    "parentRef": "6ef6675e-4ec8-4484-88f6-62651c7311ad",
    "isCheckedOut": true,
    "changeToken": "1430295774263",
    "title": "Customer reference using Word template",
    "lastModified": "2015-04-29T08:22:54.26Z",
    "facets": [
      "Versionable",
      "Commentable",
      "HasRelatedText",
      "Thumbnail",
      "Downloadable",
      "Template"
    ]
  }, {
    "entity-type": "document",
    "repository": "default",
    "uid": "fd63af66-07d4-4430-8b13-f17c25d2513a",
    "path": "/default-domain/templates/interventionStatement",
    "type": "TemplateSource",
    "state": "project",
    "parentRef": "6ef6675e-4ec8-4484-88f6-62651c7311ad",
    "isCheckedOut": true,
    "changeToken": "1430295774052",
    "title": "Delivery Statement",
    "lastModified": "2015-04-29T08:22:54.05Z",
    "facets": [
      "Versionable",
      "Commentable",
      "HasRelatedText",
      "Thumbnail",
      "Downloadable",
      "Template"
    ]
  }]
}
```

{{/panel}}

If the pointed resource is not a Folder, then the search is issued from the parent document.

**NXQL Search**

You can also make some direct NXQL queries with this endpoint, like this:

{{#> panel type='code' heading='GET Request Body'}}

```
GET /nuxeo/site/api/v1/path/{pathOfTheDoc}/@search?query=SELECT * FROM File
```

{{/panel}}{{#> panel type='code' heading='Response Example'}}

```javascript
{
  "entity-type": "documents",
  "isPaginable": true,
  "resultsCount": 4,
  "pageSize": 50,
  "maxPageSize": 0,
  "currentPageSize": 4,
  "currentPageIndex": 0,
  "numberOfPages": 1,
  "isPreviousPageAvailable": false,
  "isNextPageAvailable": false,
  "isLastPageAvailable": false,
  "isSortable": true,
  "hasError": false,
  "errorMessage": null,
  "totalSize": 4,
  "pageIndex": 0,
  "pageCount": 1,
  "entries": [{
    "entity-type": "document",
    "repository": "default",
    "uid": "38723e10-80f8-477d-bb5e-6dcd9cf76f9f",
    "path": "/default-domain/workspaces/templatesamples/intervention",
    "type": "InterventionStatement",
    "state": "project",
    "parentRef": "a05f7f31-6727-48db-b8d9-a89023135867",
    "isCheckedOut": true,
    "changeToken": "1430295774082",
    "title": "Sample Intervention Statement",
    "lastModified": "2015-04-29T08:22:54.08Z",
    "facets": [
      "Versionable",
      "Publishable",
      "Commentable",
      "TemplateBased",
      "HasRelatedText",
      "Downloadable"
    ]
  }, {
    "entity-type": "document",
    "repository": "default",
    "uid": "489819bd-f265-47a6-931a-236cd55f97ec",
    "path": "/default-domain/workspaces/templatesamples/spec",
    "type": "File",
    "state": "project",
    "parentRef": "a05f7f31-6727-48db-b8d9-a89023135867",
    "isCheckedOut": true,
    "changeToken": "1430295774195",
    "title": "Spec",
    "lastModified": "2015-04-29T08:22:54.19Z",
    "facets": [
      "Versionable",
      "Publishable",
      "Commentable",
      "TemplateBased",
      "HasRelatedText",
      "Thumbnail",
      "Downloadable"
    ]
  }]
}
```

{{/panel}}

## Group Adapters

Several default adapters are provided by default.

`users`

* **Usage**: Returns the member users of a group.
* **Sample URL**:

    ```
    /nuxeo/api/v1/group/{groupId}/@users
    ```

`groups`

* **Usage**: Returns the member groups of a group.
* **Sample URL**:

    ```
    /nuxeo/api/v1/group/{groupId}/@groups
    ```

## Custom Adapters

You can of course contribute new WebAdapters using WebEngine.

An other alternative is to use the `@bo` WebAdapter to leverage standard Nuxeo DocumentModelAdapters that can be defined using the [adapter extension point](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.api.DocumentAdapterService--adapters).

```
/nuxeo/api/v1/id/{docId}/@bo/{documentAdapterName}
```

### Getting a Business Object

{{#> panel type='code' heading='GET Request Body'}}

```
GET /nuxeo/site/api/v1/path/{pathOfTheDoc}/@bo/BusinessBeanAdapter
```

{{/panel}}{{#> panel type='code' heading='Response'}}

```javascript
{
  "entity-type": "BusinessBeanAdapter",
  "id": "37b1502b-26ff-430f-9f20-4bd0d803191e",
  "type": "Domain",
  "title": "Default domain",
  "description": ""
}
```

{{/panel}}

### Updating a Business Object

To update a business object, you just have to send a `PUT` request one the business object resource with its content data like this:

{{#> panel type='code' heading='PUT Request Body'}}

```
PUT /nuxeo/site/api/v1/path/{pathOfTheDoc}/@bo/BusinessBeanAdapter
{
  "entity-type": "BusinessBeanAdapter",
  "value": {
    "id": "37b1502b-26ff-430f-9f20-4bd0d803191e",
    "type": "Domain",
    "title": "Default domain",
    "description": "My new description"
  }
}
```

{{/panel}}

### Creating a Business Object

And then to create a business object, you have to issue a `POST` on the object resource plus the name of the newly created document, like this:

{{#> panel type='code' heading='POST Request Body'}}

```
POST /nuxeo/site/api/v1/path/{pathOfTheDoc}/@bo/BusinessBeanAdapter/{newName}
{
  "entity-type": "BusinessBeanAdapter",
  "value": {
    "type": "Note",
    "title": "A sample note",
    "description": "",
    "note": "The content of my note",
  }
}
```

{{/panel}}

## Bridging Operations and Automation Chains

{{! multiexcerpt name='restapi-adapters-op'}}

The `@op` adapter can be used to pipe the identified Document as input of an operation.

{{#> panel type='code' heading='Sample URL'}}

```
/nuxeo/api/v1/id/{docId}/@op/{OperationName}
```

{{/panel}}{{#> panel type='code' heading='Sample POST Request Body'}}

```
POST /nuxeo/site/api/v1/path/{pathOfTheDoc}/@op/{myOperation}
{
  "params": {
    "opParam": "value"
  }
}
```

{{/panel}}{{! /multiexcerpt}}

The response will depend on the result of the automation chain.

You can also use it to run a chain by prefixing the chain name by `Chain.` , for instance:

{{#> panel type='code' heading='Sample URL'}}

```
/nuxeo/site/api/v1/path/{pathOfTheDoc}/@op/Chain.{myChain}
```

{{/panel}}{{#> panel type='code' heading='Sample POST Request Body on a Document'}}

```
POST /nuxeo/site/api/v1/path/{pathOfTheDoc}/@op/Chain.{myChain}
{
  "params": {
    "chainParam": "value"
  }
}
```

{{/panel}}{{! multiexcerpt name='restapi-adapters-piping'}}{{#> panel type='code' heading='Sample POST Request Body on a List of Documents'}}

```
POST /nuxeo/site/api/v1/path/{pathOfTheFolder}/@children/@op/Chain.myChain
{
  "params": {
	"chainParam": "value"
  }
}
```

{{/panel}}

Pay attention to the fact that document list adapters are paged. That means that the chain will run on all document of the current page.

{{! /multiexcerpt}}

## Piping

Adapters can be chained: the result of one adapter becomes the input of the next one.

Here is an example :

{{#> panel type='code' heading='Sample URL'}}

```
/nuxeo/api/v1/id/{docId}/@blob/file:content/@op/Blob.ToPDF
```

{{/panel}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [WebEngine (JAX-RS)]({{page page='webengine-jax-rs'}})
- [REST API]({{page page='rest-api'}})
- [Content Enricher]({{page page='content-enricher'}})

{{/panel}}</div></div>
