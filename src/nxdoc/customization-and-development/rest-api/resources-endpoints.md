---
title: Resources Endpoints
labels:
    - 5-7-2
    - endpoint
    - rest-api
    - rest
toc: true
confluence:
    ajs-parent-page-id: '17334531'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Resources+Endpoints
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Resources+Endpoints'
    page_id: '17334312'
    shortlink: KIAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/KIAIAQ'
    source_link: /display/NXDOC58/Resources+Endpoints
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 12:40'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2014-06-06 12:03'
        message: ''
        version: '21'
    - 
        author: Vladimir Pasquier
        date: '2014-04-07 15:21'
        message: ''
        version: '20'
    - 
        author: Thibaud Arguillere
        date: '2013-11-14 16:18'
        message: ''
        version: '19'
    - 
        author: Alain Escaffre
        date: '2013-10-29 00:36'
        message: ''
        version: '18'
    - 
        author: Thomas Roger
        date: '2013-10-01 11:31'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-09-23 13:42'
        message: Formatting
        version: '16'
    - 
        author: Alain Escaffre
        date: '2013-09-17 18:11'
        message: ''
        version: '15'
    - 
        author: Alain Escaffre
        date: '2013-09-17 18:09'
        message: ''
        version: '14'
    - 
        author: Vincent Dutat
        date: '2013-09-17 13:44'
        message: ''
        version: '13'
    - 
        author: Alain Escaffre
        date: '2013-09-17 03:33'
        message: ''
        version: '12'
    - 
        author: Alain Escaffre
        date: '2013-09-17 03:11'
        message: ''
        version: '11'
    - 
        author: Alain Escaffre
        date: '2013-09-17 03:09'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-08-30 12:19'
        message: Moved excerpt
        version: '9'
    - 
        author: Thibaud Arguillere
        date: '2013-08-01 16:50'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2013-07-31 12:08'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-07-31 11:56'
        message: ''
        version: '6'
    - 
        author: Damien Metzler
        date: '2013-07-26 06:56'
        message: ''
        version: '5'
    - 
        author: Damien Metzler
        date: '2013-07-26 06:55'
        message: ''
        version: '4'
    - 
        author: Vincent Dutat
        date: '2013-07-25 18:23'
        message: ''
        version: '3'
    - 
        author: Damien Metzler
        date: '2013-07-25 17:59'
        message: ''
        version: '2'
    - 
        author: Damien Metzler
        date: '2013-07-25 16:27'
        message: ''
        version: '1'

---
### Updating a Document

<span style="font-size: 10.0pt;line-height: 13.0pt;">To update the document it&rsquo;s very simple. You have to make a</span> <span class="s1" style="font-size: 10.0pt;line-height: 13.0pt;">PUT</span> <span style="font-size: 10.0pt;line-height: 13.0pt;">on the document resource and pass a reduced version of the content of the entity type as the data. You can also pass the full set, but it's not mandatory.
</span>

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

To create a new document under the current resource, you have to send a <span class="s1">POST</span> request with the following data:

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

In this case, the id of the document is the one for the parent document, and the `name` property in the entity stands for the name of the newly created document.&nbsp;<span style="font-size: 10.0pt;line-height: 13.0pt;">You don&rsquo;t have to specify a UID since the session will create one for you. It will be returned in the response.</span>

### Deleting a Document

Finally, in order to delete a document, you just have to send a <span class="s1">DELETE</span> request to the document resource.&nbsp;

```
DELETE /nuxeo/site/api/v1/id/{idOfTheDoc}
```

## List Adapters

### Children of a Given Document

<span style="font-size: 10.0pt;line-height: 13.0pt;">Given a document resource, it's very simple to get its children:</span>

```
GET /nuxeo/site/api/v1/path/{pathOfTheDoc}/@children?page=0&pagesize=20&maxResults=100
```

This returns a list of documents with the <span class="s1">documents</span> entity type:

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

*   <span style="font-size: 10.0pt;line-height: 13.0pt;">`page`: 0</span>
*   <span style="font-size: 10.0pt;line-height: 13.0pt;">`pageSize`: 50</span>
*   <span style="font-size: 10.0pt;line-height: 13.0pt;">`maxResult`: nolimit</span>

{{#> callout type='info' }}

Notice that in the response, for each document, you have a `documentURL` property that points to the id API endpoint.

{{/callout}}

### Searching Documents

It is possible to search for documents in several ways.

```
GET /nuxeo/site/api/v1/path/{pathOfTheDoc}/@search?fullText=nuxeo&orderBy=dc:title
```

This returns the list of documents under the pointed resource that fulfill the full-text search for the <span class="s1">"nuxeo</span>" term. The same query parameters as in the `<span class="s1">@children</span>` adapter apply plus the `<span class="s1">orderBy</span>` one. If the pointed resource is not a <span class="s1">Folder</span>, then the search is issued from the parent document.

You can also make some direct NXQL query with this endpoint, like this:

```
GET /nuxeo/site/api/v1/path/{pathOfTheDoc}/@search?query=SELECT * FROM File
```

It will return a paged result set.

### Using Page Provider Adapters

If you have defined some page adapters that rely on&nbsp;only one parameter which is the <span class="s1">id</span> of the document, then you can use it with the page adapter endpoint:

```
GET /nuxeo/site/api/v1/path/{pathOfTheDoc}/@pp/{myPageProvider}
```

Same query parameters apply for pagination as for the `<span class="s1">@children</span>` adapter.

As it would be great to not only bind the id of a document, but also the document itself as a parameter of the page provider (using EL to define parameters), this API is then subject to change during the 5.7.x series.

## Automation Chains

### On a Document

As we have a way to point to documents with resources, we provide a way to run an automation chain on them. You can use any chain that takes a document as input. For instance to call that operation `<span class="s1">myOperation</span>` on a document, just send an <span class="s1">POST</span> request like that:

```
POST /nuxeo/site/api/v1/path/{pathOfTheDoc}/@op/{myOperation}
{
  params: {
    opParam: "value"  
  }
}
```

The response will depend on the result of the automation chain.

<span style="font-size: 10.0pt;line-height: 13.0pt;">If you want to run a chain, just use the same endpoint and prefix the chain name by</span> `<span class="s1" style="font-size: 10.0pt;line-height: 13.0pt;">Chain.</span>` <span style="font-size: 10.0pt;line-height: 13.0pt;">, for instance:</span>

```
POST /nuxeo/site/api/v1/path/{pathOfTheDoc}/@op/Chain.{myChain}
{
  params: {
    chainParam: "value"  
  }
}
```

### On a List of Documents

We also have a way to point to lists of documents thru the use of list adapters. This way, we are&nbsp;also able to run operations or chains on lists of documents. For instance:

```
POST /nuxeo/site/api/v1/path/{pathOfTheFolder}/@children/@op/Chain.myChain
{
  params: {
	chainParam: "value"  
  }
}
```

This way we run the `<span class="s1">myChain</span>` operation on the children of the given folder.

{{#> callout type='note' }}

Pay attention to the fact that document list adapters are paged. That means that the chain will run on all document of the current page.

{{/callout}}

## Business Object Adapters

Since 5.7.2, you can use [ <span class="s1">Business objects</span> ]({{page page='java-automation-client#managing-business-objects'}}) with Automation. They are also bound on the REST API and you just have to use the same semantics than for document resources.

### Getting a Business Object

```
GET /nuxeo/site/api/v1/path/{pathOfTheDoc}/@bo/BusinessBeanAdapter
```

will return&nbsp;

```
{
    entity-type: "BusinessBeanAdapter"
    id: "37b1502b-26ff-430f-9f20-4bd0d803191e",
    "type": "Domain",
    "title":"Default domain"
    "description":""
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
	    "description":"My new description"
	 }
}
```

### Creating a Business Object

And then t<span style="font-size: 10.0pt;line-height: 13.0pt;">o create a business object, you have to issue a</span> <span class="s1" style="font-size: 10.0pt;line-height: 13.0pt;">POST</span> <span style="font-size: 10.0pt;line-height: 13.0pt;">on the object resource plus the name of the newly created document, like this:</span>

```
POST /nuxeo/site/api/v1/path/{pathOfTheDoc}/@bo/BusinessBeanAdapter/{newName}
{
	entity-type: "BusinessBeanAdapter",
	value: {
	  "type": "Note",
	  "title":"A sample note",
	  "description":"",
	  "note":"The content of my note"
	}
}
```