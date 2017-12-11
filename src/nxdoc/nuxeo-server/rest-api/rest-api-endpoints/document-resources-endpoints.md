---
title: Document Resources Endpoints
review:
    comment: ''
    date: '2017-12-12'
    status: ok
labels:
    - lts2016-ok
    - endpoint
    - rest-api
    - troger
    - lts2017-ok
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
tree_item_index: 100
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
Here are some examples of the id and Path endpoints.

## id Endpoint

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th colspan="1">Path</th>
        <th colspan="1">Description</th>
      </tr>
      <tr>
        <td colspan="1">GET `/api/v1/id/{idOfTheDoc}`</td>
        <td colspan="1">Finds a document by its id</td>
      </tr>
      <tr>
        <td colspan="1">PUT `/api/v1/id/{idOfTheDoc}`</td>
        <td colspan="1">Updates a document by its id</td>
      </tr>
      <tr>
        <td colspan="1">POST `/api/v1/id/{idOfTheDoc}`</td>
        <td colspan="1">Updates a document by its id</td>
      </tr>
      <tr>
        <td colspan="1">DELETE `/api/v1/id/{idOfTheDoc}`</td>
        <td colspan="1">Deletes a document by its id</td>
      </tr>
      <tr>
        <td colspan="1">GET `/api/v1/repo/{repoId}/id/{docId}`</td>
        <td colspan="1">Find a document by its id in a specific repository</td>
      </tr>
      <tr>
        <td colspan="1">PUT `/api/v1/repo/{repoId}/id/{docId}`</td>
        <td colspan="1">Updates a document by its id in a specific repository</td>
      </tr>
      <tr>
        <td colspan="1">POST `/api/v1/repo/{repoId}/id/{docId}`</td>
        <td colspan="1">Updates a document by its id in a specific repository</td>
      </tr>
      <tr>
        <td colspan="1">DELETE `/api/v1/repo/{repoId}/id/{docId}`</td>
        <td colspan="1">Deletes a document by its id in a specific repository</td>
      </tr>
    </tbody>
  </table>
</div>

### Properties

In addition to the `docId` and `repoId` parameters, the `id` endpoint accepts the definition of a `document` object. See the page [REST API Entity Types]({{page page='rest-api-entity-types'}}) and the examples below.


## Path Endpoint

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th colspan="1">Path</th>
        <th colspan="1">Endpoint</th>
      </tr>
      <tr>
        <td colspan="1">GET `/api/v1/path/{docPath}`</td>
        <td colspan="1">Finds a document by its path</td>
      </tr>
      <tr>
        <td colspan="1">PUT `/api/v1/path/{docPath}`</td>
        <td colspan="1">Updates a document by its path</td>
      </tr>
      <tr>
        <td colspan="1">DELETE `/api/v1/path/{docPath}`</td>
        <td colspan="1">Deletes a document by its path</td>
      </tr>
      <tr>
        <td colspan="1">POST `/api/v1/path/{docPath}`</td>
        <td colspan="1">Creates a document by its parent path</td>
      </tr>
      <tr>
        <td colspan="1">GET `/api/v1/repo/{repoId}/path/{docPath}`</td>
        <td colspan="1">Finds a document in a specific repository by its path</td>
      </tr>
      <tr>
        <td colspan="1">PUT `/api/v1/repo/{repoId}/path/{docPath}`</td>
        <td colspan="1">Updates a document in a specific repository by its path</td>
      </tr>
      <tr>
        <td colspan="1">DELETE `/api/v1/repo/{repoId}/path/{docPath}`</td>
        <td colspan="1">Deletes a document in a specific repository by its path</td>
      </tr>
      <tr>
        <td colspan="1">POST `/api/v1/repo/{repoId}/path/{docPath}`</td>
        <td colspan="1">Creates a document in a specific repository by its parent path</td>
      </tr>
    </tbody>
  </table>
</div>

### Properties

The `path` endpoint only takes the `docPath` and `repoId` parameters. It can however be leveraged with web adapters such as `@children`, `@search`, `@bo`. See [REST API Web Adapters]({{page page='rest-api-web-adapters'}}) for more detailed information.


## Examples

### Creating a Document

To create a new document under the current resource, send a POST request with the following data:

```
POST http://NUXEO_SERVER/nuxeo/api/v1/id/{idOfParentDoc}
{
    "entity-type": "document",
    "name":"newDoc",
    "type": "File",
    "properties": {
        "dc:title": "The new document",
        "dc:description": "Created via a very cool and easy REST API",
        "common:icon": "/icons/file.gif",
        "common:icon-expanded": null,
        "common:size": null
    }
}
```

In this case, the ID of the document is the parent document's ID, and the `name` property in the entity stands for the name of the newly created document. You don't need to specify a UID since the session will create one for you. It will be returned in the response.

### Updating a Document

To update a document, use PUT on the document resource and pass a reduced version of the [entity type content]({{page page='rest-api-entity-types#document'}}) as data. You could pass the full set of data but it's not mandatory.

{{#> panel type='code' heading='PUT Request'}}

```
    PUT http://NUXEO_SERVER/nuxeo/api/v1/id/{idOfTheDoc}
    {
        "entity-type": "document",
        "repository": "default",
        "uid": "37b1502b-26ff-430f-9f20-4bd0d803191e",
        "properties": {
            "dc:title": "The new title",
            "dc:description": "Updated via a very cool and easy REST API",
            "common:icon": "/icons/file.gif",
            "common:icon-expanded": null,
            "common:size": null
        }
    }
```

{{/panel}}

### Deleting a Document

```
DELETE http://NUXEO_SERVER/nuxeo/api/v1/id/{idOfTheDoc}
```

## Learn More

*   Test these endpoints on your local instance with [Nuxeo API Playground](http://nuxeo.github.io/api-playground/) (see [documentation]({{page version='' space='nxdoc' page='howto-nuxeo-api-playground'}}) to configure your local instance).
*   Checkout the Nuxeo REST API explorer of your instance at `http://NUXEO_SERVER/nuxeo/api/v1/doc`.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [REST API Entity Types]({{page page='rest-api-entity-types'}})
- [REST API Web Adapters]({{page page='rest-api-web-adapters'}})

{{/panel}}</div><div class="column medium-6"></div></div>
