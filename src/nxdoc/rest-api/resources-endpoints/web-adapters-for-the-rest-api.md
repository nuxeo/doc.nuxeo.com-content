---
title: Web Adapters for the REST API
review:
    comment: ''
    date: ''
    status: ok
version_override:
    'FT': '/nxdoc/rest-api-web-adapters'
    'LTS 2016': 810/nxdoc/rest-api-web-adapters
confluence:
    ajs-parent-page-id: '22380806'
    ajs-parent-page-title: Resources Endpoints
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Web+Adapters+for+the+REST+API
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Web+Adapters+for+the+REST+API'
    page_id: '22380876'
    shortlink: TIFVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/TIFVAQ'
    source_link: /display/NXDOC60/Web+Adapters+for+the+REST+API
tree_item_index: 400
toc: true
history:
    -
        author: Alain Escaffre
        date: '2014-07-03 00:51'
        message: ''
        version: '1'

---
This API also has the concept of "adapter". An adapter is a URL segment that starts with "@" and that transforms the input resource so as to return another resource. For example, using `@blob` will return the file of a document (the one stored on the property given by the next URL segment), and chaining it to `@op` will call an operation (that takes a blob in input):

```
/nuxeo/api/v1/id/{docId}/@adapter/parameters

/nuxeo/api/v1/path/{documentPath}/@adapter/parameters

/nuxeo/api/v1/id/{docId}/@blob/file:content/@op/{OperationName}
```

{{#> callout type='note' }}

The notion of Adapter precedes the concept of [Content Enricher]({{page page='content-enricher'}}). In some cases, some of the adapters presented here could be replaced by Content Enrichers.

{{/callout}}

## Simple Document Adapters

Several default adapters are provided by default.

`acl`

*   **Usage**: Returns the ACLs of the target Document.
*   **Sample URL**:

    ```
    /nuxeo/api/v1/id/{docId}/@acl
    ```

`audit`

*   **Usage**: Returns audit trails records corresponding to the target Document.
*   **Sample URL**:

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

*   **Usage**: Returns children of the target Document.
    Query parameters are not mandatory and are by default:
    *   `page`: 0
    *   `pageSize`: 50
    *   `maxResult`: nolimit
*   **Sample URL**:

    ```
    /nuxeo/api/v1/id/{docId}/@children
    ```

`pp`

*   **Usage**: Returns the result of the query corresponding to the named PageProvider.
    The target Document is used to provide the parameters of the PageProvider (i.e. SearchDocumentModel).
*   **Sample URL**:

    ```
    /nuxeo/api/v1/id/{docId}/@pp/{pageProviderName}
    ```

`search`

*   **Usage**: Returns paged results of the query.
    Query can be a full-text query or a NXQL query.
    Query parameters are not mandatory and are by default:
    *   `orderBy`: [dc:title](http://dctitle/)
    *   `page`: 0
    *   `pageSize`: 50
    *   `maxResult`: nolimit
*   **Sample URL**:

    ```
    /nuxeo/site/api/v1/path/{docId}/@search?fullText=nuxeo&orderBy=dc:title

    /nuxeo/site/api/v1/path/{pathOfTheDoc}/@search?query=SELECT * FROM File
    ```

### Getting the Children of a Given Document - @children

{{! multiexcerpt name='restapi-adapters-children'}}
{{#> panel type='code' heading='Example'}}

```
GET /nuxeo/site/api/v1/path/{pathOfTheDoc}/@children?currentPageIndex=0&pagesize=20&maxResults=100
```

{{/panel}}
{{! /multiexcerpt}}

{{#> panel type='code' heading='Response'}}

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

If the pointed resource is not a Folder, then the search is issued from the parent document.

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

## Custom Adapters

You can of course contribute new WebAdapters using WebEngine.

An other alternative is to use the `@bo` WebAdapter to leverage standard Nuxeo DocumentModelAdapters that can be defined using the [adapter extension point](http://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewExtensionPoint/org.nuxeo.ecm.core.api.DocumentAdapterService--adapters).

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

And then to create a business object, you have to issue a POST on the object resource plus the name of the newly created document, like this:

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

{{/panel}}

{{#> panel type='code' heading='Sample POST Request Body'}}

```
POST /nuxeo/site/api/v1/path/{pathOfTheDoc}/@op/{myOperation}
{
  params: {
    opParam: "value"  
  }
}
```

{{/panel}}
{{! /multiexcerpt}}

The response will depend on the result of the automation chain.

You can also use it to run a chain by prefixing the chain name by ` Chain.` , for instance:

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

Here is an example:

{{#> panel type='code' heading='Sample URL'}}

```
/nuxeo/api/v1/id/{docId}/@blob/file:content/@op/Blob.ToPDF
```

{{/panel}}


* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [WebEngine (JAX-RS)]({{page page='webengine-jax-rs'}})
- [REST API]({{page page='rest-api'}})
- [Content Enricher]({{page page='content-enricher'}})

{{/panel}}
</div>

<div class="column medium-6">

&nbsp;

</div></div>
