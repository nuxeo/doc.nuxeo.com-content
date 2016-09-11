---
title: Web Adapters for the REST API
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lts2015-ok
    - rest-api-component
    - rest-api
    - link-update
    - webengine
toc: true
confluence:
    ajs-parent-page-id: '28475677'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Web+Adapters+for+the+REST+API
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Web+Adapters+for+the+REST+API'
    page_id: '28475646'
    shortlink: '-oCyAQ'
    shortlink_source: 'https://doc.nuxeo.com/x/-oCyAQ'
    source_link: /display/NXDOC710/Web+Adapters+for+the+REST+API
history:
    - 
        author: Bertrand Chauvin
        date: '2016-04-26 21:11'
        message: ''
        version: '21'
    - 
        author: Bertrand Chauvin
        date: '2016-04-26 18:24'
        message: ''
        version: '20'
    - 
        author: Bertrand Chauvin
        date: '2016-04-26 18:13'
        message: ''
        version: '19'
    - 
        author: Damien Metzler
        date: '2016-02-25 09:28'
        message: ''
        version: '18'
    - 
        author: Manon Lumeau
        date: '2016-01-04 17:46'
        message: Fix links to 7.10
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
## Adapters and REST Resources&nbsp;

WebEngine, the JAX-RS Server used to serve the REST API, has the concept of [WebAdapter]({{page page='webengine-jax-rs'}})&nbsp;for DocumentModel. Logically the REST API leverages this concept to expose adapters on top of the Document REST end point.

An adapter is a URL segment that starts with&nbsp;`@` and that transforms the input resource so as to return another resource. The idea is to have a URL pointing to a Document and use the adapter to convert the Document into something else before the result is returned. The general syntax is:

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

*   **Usage**:&nbsp;Returns the ACLs of the target Document.
*   **Sample URL**:&nbsp;

    ```
    /nuxeo/api/v1/id/{docId}/@acl
    ```

`audit`

*   **Usage**:&nbsp;Returns audit trails records corresponding to the target Document.
*   **Sample URL**:&nbsp;

    ```
    /nuxeo/api/v1/id/{docId}/@audit
    ```

`blob`

*   **Usage**: Returns the Blob corresponding to the Document attribute matching the XPath parameter.
*   **Sample URL**:

    ```
    /nuxeo/api/v1/id/{docId}/@blob/{xpath}
    ```

`children`

*   **Usage**:&nbsp;Returns children of the target Document.&nbsp;
    Query parameters are not mandatory and are by default:
    *   `page`: 0
    *   `pageSize`: 50
    *   `maxResult`: nolimit

*   **Sample URL**:

    ```
    /nuxeo/api/v1/id/{docId}/@children
    ```

`convert`

*   **Usage**:&nbsp;Returns the conversion of a blob.
    Query parameters, you must use one of them:
    *   `converter`
    *   `type`
    *   `format`
*   **Sample URL**:

    ```
    /nuxeo/api/v1/id/{docId}/@convert?format=pdf
    ```

`pp`

*   **Usage**:&nbsp;Returns the result of the query corresponding to the named PageProvider.&nbsp;
    The target Document is used to provide the parameters of the PageProvider (i.e. SearchDocumentModel).
*   **Sample URL**:&nbsp;

    ```
    /nuxeo/api/v1/id/{docId}/@pp/{pageProviderName}
    ```

`rendition`

*   **Usage**:&nbsp;Returns the renditions of a blob.
*   **Sample URL**:

    ```
    /nuxeo/api/v1/id/{docId}/@rendition/{renditionName}
    ```

`search`

*   **Usage**:&nbsp;Returns paged results of the query.&nbsp;
    Query can be a full-text query or a NXQL query.&nbsp;
    Query parameters are not mandatory and are by default:
    *   `orderBy`:&nbsp;[dc:title](http://dctitle/)&nbsp;
    *   `page`: 0&nbsp;
    *   `pageSize`: 50&nbsp;&nbsp;
    *   `maxResult`: nolimit
*   **Sample URL**:

    ```
    /nuxeo/site/api/v1/path/{docId}/@search?fullText=nuxeo&orderBy=dc:title

    /nuxeo/site/api/v1/path/{pathOfTheDoc}/@search?query=SELECT * FROM File
    ```

`task`

*   **Usage**:&nbsp;Returns task instance you have permission to see.
*   **Sample URL**:

    ```
    /nuxeo/api/v1/id/{docId}/@task
    ```

`workflow`

*   **Usage**:&nbsp;Returns workflow instances launched by current user.
*   **Sample URL**:&nbsp;

    ```
    /nuxeo/api/v1/id/{docId}/@workflow
    ```

### Getting the Children of a Given Document - @children

{{! multiexcerpt name='restapi-adapters-children'}}{{#> panel type='code' heading='Example'}}

```
GET /nuxeo/site/api/v1/path/{pathOfTheDoc}/@children?currentPageIndex=0&pagesize=20&maxResults=100
```

{{/panel}}{{! /multiexcerpt}}{{#> panel type='code' heading='Response'}}

```
{
    "entity-type": "documents",
    "isPaginable": true,
    "totalSize": 3,
    "pageIndex": 0,
    "pageSize": 50,
    "pageCount": 1,
    "entries": [
      {   
        "entity-type": "document",
        "repository": "default",
        "uid": "afb373f1-08ed-4228-bfe8-9f93131f8c84",
        "path": "/default-domain/sections",
        "type": "SectionRoot",
            ...
        "contextParameters": {
            "documentURL": "/nuxeo/site/api/v1/id/afb373f1-08ed-4228-bfe8-9f93131f8c84"
        }            
       },
       ...
    ]
}
```

{{/panel}}

In the response, for each document, you have a `documentURL` property that points to the API endpoint's id.

### Searching Documents - @search

**Full-Text Search**

```
GET /nuxeo/site/api/v1/path/{pathOfTheDoc}/@search?fullText=nuxeo&orderBy=dc:title
```

{{#> panel type='code' heading='Response Example'}}

```
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
    "entries":
    [
        {
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
            "facets":
            [
                "Versionable",
                "Commentable",
                "HasRelatedText",
                "Thumbnail",
                "Downloadable",
                "Template"
            ]
        },
        {
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
            "facets":
            [
                "Versionable",
                "Commentable",
                "HasRelatedText",
                "Thumbnail",
                "Downloadable",
                "Template"
            ]
        }
    ]
}
```

{{/panel}}

If the pointed resource is not a&nbsp;<span class="s1">Folder</span>, then the search is issued from the parent document.

**NXQL Search**

You can also make some direct NXQL queries with this endpoint, like this:

{{#> panel type='code' heading='GET Request Body'}}

```
GET /nuxeo/site/api/v1/path/{pathOfTheDoc}/@search?query=SELECT * FROM File
```

{{/panel}}{{#> panel type='code' heading='Response Example'}}

```
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
    "entries":
    [
        {
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
            "facets":
            [
                "Versionable",
                "Publishable",
                "Commentable",
                "TemplateBased",
                "HasRelatedText",
                "Downloadable"
            ]
        },
        {
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
            "facets":
            [
                "Versionable",
                "Publishable",
                "Commentable",
                "TemplateBased",
                "HasRelatedText",
                "Thumbnail",
                "Downloadable"
            ]
        }
    ]
}
```

{{/panel}}

&nbsp;

## Custom Adapters

You can of course contribute new WebAdapters using WebEngine.

An other alternative is to use the `@bo` WebAdapter to leverage standard Nuxeo DocumentModelAdapters that can be defined using the [adapter extension point](http://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewExtensionPoint/org.nuxeo.ecm.core.api.DocumentAdapterService--adapters).

```
/nuxeo/api/v1/id/{docId}/@bo/{documentAdapterName}
```

### Getting a Business Object

{{#> panel type='code' heading='GET Request Body'}}

```
GET /nuxeo/site/api/v1/path/{pathOfTheDoc}/@bo/BusinessBeanAdapter
```

{{/panel}}{{#> panel type='code' heading='Response'}}

```
{
    entity-type: "BusinessBeanAdapter"
    id: "37b1502b-26ff-430f-9f20-4bd0d803191e",
    "type": "Domain",
    "title":"Default domain"
    "description:""
}
```

{{/panel}}

### Updating a Business Object

To update a business object, you just have to send a PUT request one the business object resource with its content data like this:

{{#> panel type='code' heading='PUT Request Body'}}

```
PUT /nuxeo/site/api/v1/path/{pathOfTheDoc}/@bo/BusinessBeanAdapter
{
	"entity-type: "BusinessBeanAdapter"
	"value": {
		id: "37b1502b-26ff-430f-9f20-4bd0d803191e",
	    "type": "Domain",
	    "title":"Default domain"
	    "description:"My new description"
	 }
}
```

{{/panel}}

### Creating a Business Object

And then to create a business object, you have to issue a&nbsp;<span class="s1">POST</span>&nbsp;on the object resource plus the name of the newly created document, like this:

{{#> panel type='code' heading='POST Request Body'}}

```
POST /nuxeo/site/api/v1/path/{pathOfTheDoc}/@bo/BusinessBeanAdapter/{newName}
{
	entity-type: "BusinessBeanAdapter",
	value: {
	  "type": "Note",
	  "title":"A sample note",
	  "description:"",
	  "note":"The content of my note"
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
  params: {
    opParam: "value"  
  }
}
```

{{/panel}}{{! /multiexcerpt}}

The response will depend on the result of the automation chain.

You can also use it to run a chain by prefixing the chain name by `<span class="s1">Chain.</span>` , for instance:

{{#> panel type='code' heading='Sample URL'}}

```
/nuxeo/site/api/v1/path/{pathOfTheDoc}/@op/Chain.{myChain}
```

{{/panel}}{{#> panel type='code' heading='Sample POST Request Body on a Document'}}

```
POST /nuxeo/site/api/v1/path/{pathOfTheDoc}/@op/Chain.{myChain}
{
  params: {
    chainParam: "value"  
  }
}
```

{{/panel}}{{! multiexcerpt name='restapi-adapters-piping'}}{{#> panel type='code' heading='Sample POST Request Body on a List of Documents'}}

```
POST /nuxeo/site/api/v1/path/{pathOfTheFolder}/@children/@op/Chain.myChain
{
  params: {
	chainParam: "value"  
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

&nbsp;

&nbsp;

* * *