---
title: What is Needed to Design a REST API
review:
    comment: ''
    date: ''
    status: ok
labels:
    - rest-api
toc: true
confluence:
    ajs-parent-page-id: '4685848'
    ajs-parent-page-title: Coding and Design Guidelines
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: What+is+Needed+to+Design+a+REST+API
    canonical_source: 'https://doc.nuxeo.com/display/CORG/What+is+Needed+to+Design+a+REST+API'
    page_id: '16089597'
    shortlink: '-YH1'
    shortlink_source: 'https://doc.nuxeo.com/x/-YH1'
    source_link: /display/CORG/What+is+Needed+to+Design+a+REST+API
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 07:48'
        message: ''
        version: '7'
    - 
        author: Manon Lumeau
        date: '2015-09-29 13:59'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-09-16 11:00'
        message: ''
        version: '5'
    - 
        author: Damien Metzler
        date: '2013-09-13 15:56'
        message: ''
        version: '4'
    - 
        author: Damien Metzler
        date: '2013-09-13 15:53'
        message: ''
        version: '3'
    - 
        author: Damien Metzler
        date: '2013-09-13 15:52'
        message: ''
        version: '2'
    - 
        author: Damien Metzler
        date: '2013-09-13 15:45'
        message: ''
        version: '1'

---
Developers need some information to know what to do when adding a new REST endpoint. Basically a REST request is made of several parts:

*   The URL: this locates the resource;
*   A verb: GET, PUT, POST, DELETE;
*   Some headers;
*   Some Accept/Consume types;
*   Query params.

And it actually returns some objects that have some types.

Now Nuxeo adds some other paradigms:

*   `entity-type`: It is the type of the entity and is part of the response body. It MUST follow camelCase notation.

*   `adapters`: It is a URI fragment that is added to a resource URL and denotes an 'adaptation' of the resource. It is compatible with a given set or resource types.

## <span style="color: rgb(0,0,0);">Naming Conventions</span>

*   Endpoint names should not be abbreviated (i.e.: `directory`, `user` ).
*   <span style="font-size: 14.0px;line-height: 1.4285715;">Endpoint names should be singular (</span>`directory`<span style="font-size: 14.0px;line-height: 1.4285715;">&nbsp;not</span> `directories`<span style="font-size: 14.0px;line-height: 1.4285715;">).</span>
*   <span style="font-size: 14.0px;line-height: 1.4285715;">Adapter names MUST start with an</span> `@.`
*   <span style="font-size: 14.0px;line-height: 1.4285715;">Adapter names should be singular.</span>
*   <span style="font-size: 14.0px;line-height: 1.4285715;">Adapter names MAY BE abbreviated (</span> `@wf` <span style="font-size: 14.0px;line-height: 1.4285715;">for workflow,</span> `@op` <span style="font-size: 14.0px;line-height: 1.4285715;">for operation).</span>

## How to Specify

In order to specify correctly an API endpoint, the documentation should specify the elements below.

### The List of URLs With Actions

A URL is defined by the verb followed by a URL with parameter between braces. After that, we use the Javadoc notation to describe parameters, return types and exceptions:

*   `@param`: The type of the entity passed as the body (for PUT and POST);
*   `@pathparam`: Describes a path parameter referred by the URL;
*   `@queryparam`<span style="font-size: 14.0px;line-height: 1.4285715;">: Describes a parameter of the query string: i.e. `/search?q=john`.</span>
*   `@return`<span style="font-size: 14.0px;line-height: 1.4285715;">: Defines the model that is returned;</span>
*   `@exception`<span style="font-size: 14.0px;line-height: 1.4285715;">: Defines each status code with its signification.</span>

### The List of Models

Models defined by return type should be described with their JSON representation. Each model should refer an **entity-type**. The notation used to describe the entity-type MUST be camelCase.

## Complete Samples

### Directory Endpoint

The directory endpoint exposes the internal directory services APIs

#### URLs

{{#> panel type='code' heading='List all directory entries'}}

```
GET /directory/{directoryName}
@pathparam {directoryName} the name of the directory
@queryparam key value map to a directory search filter
@return directoryEntries
@exception : 404 directory not found
@exception : 500 server error
```

{{/panel}}{{#> panel type='code' heading='Get an entry'}}

```
GET /directory/{directoryName}/{entryId}
@pathparam {directoryName} the name of the directory
@pathparam {entryId} the id of the entry to fetch 
@return directoryEntries
@exception : 404 entry or directory not found
@exception : 500 server error

```

{{/panel}}

{{#> panel type='code' heading='Search for entries'}}

```
GET /directory/{directoryName}/@search
@pathparam the name of the directory
@queryparam key value map to a directory search filter
@return directoryEntries
@exception : 404 entry or directory not found
@exception : 500 server error

```

{{/panel}}{{#> panel type='code' heading='Update an entry'}}

```
PUT /directory/{directoryName}/{entryId} :
@param a directoryEntry
@return directoryEntry
@exception : 404 entry or directory not found
@exception : 403 not allowed to edit entry
@exception : 500 server error

```

{{/panel}}{{#> panel type='code' heading='Create an entry'}}

```
POST /directory/{directoryName}
@param a directoryEntry
@return 201 directoryEntry
@exception : 404 entry or directory not found
@exception : 403 not allowed to edit entry
@exception : 500 server error

```

{{/panel}}

&nbsp;

#### List of Models

{{#> panel type='code' heading='directoryEntry'}}

```js
{
  "entity-type": "directoryEntry",
  "directoryName": "userDirectory",
  "properties": {
    "lastName": "",
    "username": "Administrator",
    "email": "Administrator@example.com",
    "company": "",
    "firstName": "",
    "password": "Administrator",
    "groups": [
      "administrators"
    ]
  }
}

```

{{/panel}}{{#> panel type='code' heading='directoryEntries'}}

```js
{
  "entity-type": "directoryEntries",
  "directoryName": "userDirectory",
  "entries": [
    {
      "entity-type": "directoryEntry",
      "directoryName": "userDirectory",
      "properties": {
        "lastName": "",
        "username": "Administrator",
        "email": "Administrator@example.com",
        "company": "",
        "firstName": "",
        "password": "Administrator",
        "groups": [
          "administrators"
        ]
      }
    }, 
...
  ]
}

```

{{/panel}}

### Operation Adapter

Adapts a resource by running an automation operation/chain on it.

This adapter is compatible with resource of type:

*   document,
*   <span style="font-size: 14.0px;line-height: 1.4285715;">documents,</span>
*   <span style="font-size: 14.0px;line-height: 1.4285715;">blob,</span>
*   <span style="font-size: 14.0px;line-height: 1.4285715;">blobs.</span>

#### URLs

{{#> panel type='code' heading='Execute an operation'}}

```js
POST {RESOURCE_URL}/@op/{operationId} :
@pathparam the operation/chain id
@return document, documents, blob, blobs (depending on the operation/chain return type)
@exception : 404 resource or operation not found
@exception : 403 not allowed to run that operation
@exception : 400 operation not compatible with resource
@exception : 500 server error

```

{{/panel}}