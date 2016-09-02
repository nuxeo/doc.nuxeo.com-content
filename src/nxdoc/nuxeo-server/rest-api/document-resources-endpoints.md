---
title: Document Resources Endpoints
labels:
    - endpoint
    - rest-api
    - rest-api-component
toc: true
confluence:
    ajs-parent-page-id: '13664833'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Document+Resources+Endpoints
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Document+Resources+Endpoints'
    page_id: '17793413'
    shortlink: hYEPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/hYEPAQ'
    source_link: /display/NXDOC/Document+Resources+Endpoints
history:
    - 
        author: Kevin Leturc
        date: '2016-06-21 08:51'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2015-04-29 09:10'
        message: ''
        version: '12'
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

## id Endpoint

<table><tbody><tr><th colspan="1">Path</th><th colspan="1">Endpoint</th></tr><tr><td colspan="1">

GET

`/api/v1/id/{idOfTheDoc}`

</td><td colspan="1">

Finds a document by its id

</td></tr><tr><td colspan="1">

PUT

`/api/v1/id/{idOfTheDoc}`

</td><td colspan="1">

Updates a document by its id

</td></tr><tr><td colspan="1">

POST

`/api/v1/id/{idOfTheDoc}`

</td><td colspan="1">

Updates a document by its id

</td></tr><tr><td colspan="1">

DELETE

`/api/v1/id/{idOfTheDoc}`

</td><td colspan="1">Deletes a document by its id</td></tr><tr><td colspan="1">

GET

`/api/v1/repo/{repoId}/id/{docId}`

</td><td colspan="1">Find a document by its id in a specific repository</td></tr><tr><td colspan="1">

PUT

`/api/v1/repo/{repoId}/id/{docId}`

</td><td colspan="1">Updates a document by its id in a specific repository</td></tr><tr><td colspan="1">

POST

`/api/v1/repo/{repoId}/id/{docId}`

</td><td colspan="1">Updates a document by its id in a specific repository</td></tr><tr><td colspan="1">

DELETE

`/api/v1/repo/{repoId}/id/{docId}`

</td><td colspan="1">Deletes a document by its id in a specific repository</td></tr></tbody></table>

### Properties

Beside the `docId` and `repoId` parameters, the `id` endpoint accepts the definition of a `document` object. See the page [REST API Entity Types]({{page page='rest-api-entity-types'}}) and the examples below.

### Updating a Document

To update a document you have to <span class="s1">PUT</span> on the document resource, and pass a reduced version of the [entity type content]({{page page='rest-api-entity-types#document'}}) as the data. You can also pass the full set of data, but it is not mandatory.

{{#> panel type='code' heading='PUT Request'}}

```
    PUT /nuxeo/site/api/v1/id/{idOfTheDoc}
    {
        "entity-type": "document",
        "repository": "default",
        "uid": "37b1502b-26ff-430f-9f20-4bd0d803191e",
        "properties": {
            "dc:title": "The new title",
            "dc:description": "Updated via a so cool and simple REST API",
            "common:icon": "/icons/file.gif",
            "common:icon-expanded": null,
            "common:size": null
        }
    }
```

{{/panel}}

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
        "dc:description": "Created via a so cool and simple REST API",
        "common:icon": "/icons/file.gif",
        "common:icon-expanded": null,
        "common:size": null
    }
}
```

In this case, the id of the document is the parent document's id, and the `name` property in the entity stands for the name of the newly created document. You don&rsquo;t have to specify a UID since the session will create one for you. It will be returned in the response.

### Deleting a Document

```
DELETE /nuxeo/site/api/v1/id/{idOfTheDoc}
```

## Path Endpoint

<table><tbody><tr><th colspan="1">Path</th><th colspan="1">Endpoint</th></tr><tr><td colspan="1">

GET

`/api/v1/path/{`docPath`}`

</td><td colspan="1">Finds a document by its path</td></tr><tr><td colspan="1">

PUT

`/api/v1/path/{`docPath`}`

</td><td colspan="1">Updates a document by its path</td></tr><tr><td colspan="1">

DELETE

`/api/v1/path/{docPath}`

</td><td colspan="1">Deletes a document by its path</td></tr><tr><td colspan="1">

POST

`/api/v1/path/{`docPath`}`

</td><td colspan="1">Creates a document by its parent path</td></tr><tr><td colspan="1">

GET

`/api/v1/repo/{repoId}/path/{docPath}`

</td><td colspan="1">Finds a document in a specific repository by its path</td></tr><tr><td colspan="1">

PUT

`/api/v1/repo/{repoId}/path/{docPath}`

</td><td colspan="1">Updates a document in a specific repository by its path</td></tr><tr><td colspan="1">

DELETE

`/api/v1/repo/{repoId}/path/{docPath}`

</td><td colspan="1">Deletes a document in a specific repository by its path</td></tr><tr><td colspan="1">

POST

`/api/v1/repo/{repoId}/path/{docPath}`

</td><td colspan="1">Creates a document in a specific repository by its parent path</td></tr></tbody></table>

### Properties

The `path` endpoint does not requires paramets besides the `docPath` and `repoId` parameters. It can however leverage web adapters such as `@children`, `@search`, `@bo`. See the examples on the page [Web Adapters for the REST API]({{page page='web-adapters-for-the-rest-api'}}).

* * *