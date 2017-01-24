---
title: How to use the Document Resources Endpoint
review:
    comment: ''
    date: ''
    status: ok
labels:
    - endpoint
toc: true
confluence:
    ajs-parent-page-id: '22380806'
    ajs-parent-page-title: Resources Endpoints
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: How+to+use+the+Document+Resources+Endpoint
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/How+to+use+the+Document+Resources+Endpoint
    page_id: '22380857'
    shortlink: OYFVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/OYFVAQ'
    source_link: /display/NXDOC60/How+to+use+the+Document+Resources+Endpoint
tree_item_index: 200
history:
    -
        author: Thibaud Arguillere
        date: '2014-09-11 18:27'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-07-21 10:35'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-07-18 12:22'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-07-02 10:38'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2014-07-01 00:34'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-11-15 15:48'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-11-15 11:29'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2013-11-14 01:25'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2013-11-14 00:52'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-11-14 00:51'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-11-14 00:49'
        message: ''
        version: '1'

---

We provide some sample usages of the REST API. You can also have a try of the REST API on the [Nuxeo Platform API Playground](http://nuxeo.github.io/api-playground/#/).

## Documents

### Updating a Document

To update a document it's very easy. You have to PUT on the document resource, and pass a reduced version of the entity type content as the data. You can also pass the full set f data, but it is not mandatory.

```
    PUT /nuxeo/site/api/v1/id/{idOfTheDoc}
    {
        "entity-type": "document",
        "repository": "default",
        "uid": "37b1502b-26ff-430f-9f20-4bd0d803191e",
        "properties": {
            "dc:title": "The new title",
            "dc:description": "Updated via a so cool and simple REST API"
            "common:icon": "/icons/file.gif",
            "common:icon-expanded": null,
            "common:size": null
        }
    }
```

### Creating a Document

To create a new document under the current resource, you have to send  POST request with the following data:

```
POST /nuxeo/site/api/v1/id/{idOfParentDoc}
{
    "entity-type": "document",
    "name":"newDoc",
    "type": "File",
    "properties": {
        "dc:title": "The new document",
        "dc:description": "Created via a so cool and simple REST API"
        "common:icon": "/icons/file.gif",
        "common:icon-expanded": null,
        "common:size": null
    }
}
```

In this case, the id of the document is the parent document's id, and the `name` property in the entity stands for the name of the newly created document. You don't have to specify a UID since the session will create one for you. It will be returned in the response.

### Deleting a Document

Finally, in order to delete a document, you just have to send a DELETE request to the document resource.

```
DELETE /nuxeo/site/api/v1/id/{idOfTheDoc}
```

## List Adapters

### Children of a Given Document

Given a document resource, it's very simple to get its children:

```
GET /nuxeo/site/api/v1/path/{pathOfTheDoc}/@children?page=0&pagesize=20&maxResults=100
```

This returns a list of documents with the documents entity type:

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

Query parameters are not mandatory and are by default:

*   `page`: 0
*   `pageSize`: 50
*   `maxResult`: nolimit

{{#> callout type='info' }}

In the response, for each document, you have a `documentURL` property that points to the API endpoint's id.

{{/callout}}

### Searching Documents

It is possible to search for documents in several ways.

```
GET /nuxeo/site/api/v1/path/{pathOfTheDoc}/@search?fullText=nuxeo&orderBy=dc:title
```

This returns the list of documents under the pointed resource that fulfills the full-text search for the "nuxeo" term. The same query parameters as in the `@children` adapter apply, plus the `orderBy` one. If the pointed resource is not a Folder, then the search is issued from the parent document.

You can also make some direct NXQL queries with this endpoint, like this:

```
GET /nuxeo/site/api/v1/path/{pathOfTheDoc}/@search?query=SELECT * FROM File
```

It will return a paged result set.

### Using Page Provider Adapters

If you have defined some page adapters that rely on only one parameter which is the id of the document, then you can use it with the page adapter endpoint:

```
GET /nuxeo/site/api/v1/path/{pathOfTheDoc}/@pp/{myPageProvider}
```

Same query parameters apply for pagination as for the `@children` adapter.

As it would be great to not only bind the id of a document, but also the document itself as a parameter of the page provider (using EL to define parameters). This API is then subject to change during the 5.9.x series.

## Automation Chains

### On a Document

As we have a way to point to documents with resources, we provide a way to run an automation chain on them. You can use any chain that takes a document as input. For instance to call that operation `myOperation` on a document, just send an POST request like that:

```
POST /nuxeo/site/api/v1/path/{pathOfTheDoc}/@op/{myOperation}
{
  params: {
    opParam: "value"  
  }
}
```

The response will depend on the result of the automation chain.

If you want to run a chain, just use the same endpoint and prefix the chain name by `Chain.`, for instance:

```
POST /nuxeo/site/api/v1/path/{pathOfTheDoc}/@op/Chain.{myChain}
{
  params: {
    chainParam: "value"  
  }
}
```

### On a List of Documents

We also have a way to point to lists of documents through the use of list adapters. This way, we are also able to run operations or chains on lists of documents. For instance:

```
POST /nuxeo/site/api/v1/path/{pathOfTheFolder}/@children/@op/Chain.myChain
{
  params: {
	chainParam: "value"  
  }
}
```

This way we run the `myChain` operation on the children of the given folder.

{{#> callout type='note' }}

Pay attention to the fact that document list adapters are paged. That means that the chain will run on all document of the current page.

{{/callout}}

## Business Object Adapters

Since 5.7.2, you can use [Business objects]({{page page='java-automation-client#managing-business-objects'}}) with Automation. They are also bound on the REST API and you just have to use the same semantics than for document resources.

### Getting a Business Object

```
GET /nuxeo/site/api/v1/path/{pathOfTheDoc}/@bo/BusinessBeanAdapter
```

will return

```
{
    entity-type: "BusinessBeanAdapter"
    id: "37b1502b-26ff-430f-9f20-4bd0d803191e",
    "type": "Domain",
    "title":"Default domain"
    "description:""
}
```

### Updating a Business Object

To update a business object, you just have to send a PUT request one the business object resource with its content data like this:

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

### Creating a Business Object

And then to create a business object, you have to issue a POST on the object resource plus the name of the newly created document, like this:

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
