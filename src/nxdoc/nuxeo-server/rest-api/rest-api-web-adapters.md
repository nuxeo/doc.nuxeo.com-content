---
title: REST API Web Adapters
review:
    comment: ''
    date: '2018-01-15'
    status: ok
labels:
    - lts2016-ok
    - link-update
    - rest-api
    - troger
    - webengine
    - lts2017-ok
toc: true
version_override:
    LTS 2015: 710/nxdoc/web-adapters-for-the-rest-api
    '6.0': 60/nxdoc/web-adapters-for-the-rest-api
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
        message: 'Add convert, rendition and search web adapters and related documentation'
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

WebEngine, the JAX-RS Server used to serve the REST API, offers [WebAdapters]({{page page='webengine-jax-rs#webengine-adapters'}}) for the Document Model. The REST API leverages this concept to expose adapters on top of the Document REST endpoint.

A WebAdapter is a URL segment starting with `@` which transforms the input resource so as to return another resource. The idea is to have a URL pointing to a Document and use the adapter to convert the Document into something else before the result is returned. The general syntax is:

```
http://NUXEO_SERVER/nuxeo/api/v1/id/{docId}/@adapter/{parameters}

http://NUXEO_SERVER/nuxeo/api/v1/path/{documentPath}/@adapter/{parameters}
```

{{#> callout type='note' }}

The notion of adapter precedes the concept of [Content Enricher]({{page page='content-enrichers'}}). Some of the adapters presented here could be replaced by Content Enrichers.

{{/callout}}

## Simple Document Adapters

Default adapters provided by default.

<table class="hover">
<tr>
    <th>Adapter</th>
    <th>Usage and sample URL</th>
</tr>
  <tr>
    <td class="small-2">**@acl**</td>
    <td>Returns the ACLs of the target Document</td>
  </tr>
  <tr>
    <td></td>
    <td>
      ```
      /api/v1/id/{docId}/@acl
      ```
    </td>
  </tr>
</table>

<table class="hover">
  <tr>
    <td class="small-2">**@annotation**</td>
    <td>Returns annotations corresponding to the target Document and file:content blob</td>
  </tr>
  <tr>
    <td></td>
    <td>
      ```
      /api/v1/id/{docId}/@annotation
      ```
    </td>
  </tr>
</table>

<table class="hover">
  <tr>
    <td class="small-2">**@audit**</td>
    <td>Returns audit trail records corresponding to the target Document</td>
  </tr>
  <tr>
    <td></td>
    <td>
      ```
      /api/v1/id/{docId}/@audit
      ```
    </td>
  </tr>
</table>

<table class="hover">
  <tr>
    <td class="small-2">**@blob**</td>
    <td>Returns the Blob corresponding to the Document attribute matching the XPath parameter</td>
  </tr>
  <tr>
    <td></td>
    <td>
      ```
      /api/v1/id/{docId}/@blob/{xpath}
      ```
    </td>
  </tr>
</table>

<table class="hover">
  <tr>
    <td class="small-2">**@children**</td>
    <td>
      Returns children of the target Document<br />
      Query parameters (optional) are by default:<br />
      `page:0`<br />
      `pageSize:50`<br />
      `maxResult:nolimit`
    </td>
  </tr>
    <td></td>
    <td>
      ```
      /api/v1/id/{docId}/@children
      ```
    </td>
  </tr>
</table>

<table class="hover">
  <tr>
    <td class="small-2">**@comment**</td>
    <td>Returns comments corresponding to the target Document</td>
  </tr>
  <tr>
    <td></td>
    <td>
      ```
      /api/v1/id/{docId}/@comment
      ```
    </td>
  </tr>
</table>

<table class="hover">
  <tr>
    <td class="small-2">**@convert**</td>
    <td>
      Returns the conversion of a blob<br />
      Query parameters (must use one):<br />
      `converter`<br />
      `type`<br />
      `format`
    </td>
  </tr>
  <tr>
    <td></td>
    <td>
      ```
      /api/v1/id/{docId}/@convert?format=pdf
      ```
    </td>
  </tr>
</table>

<table class="hover">
  <tr>
    <td class="small-2">**@emptyWithDefault**</td>
    <td>
      Returns an empty document initialized with default properties. <br />
      The target document acts as the parent of the empty document. <br />
      Query parameters: <br />
      `type`: required, type of the empty document.<br />
      `name`: optional, name of the empty document. <br />
      <br />
      Note that calling `emptyWithDefault` adapter triggers the `emptyDocumentModelCreated` core event, so the returned empty document will have all properties set by listeners listening to `emptyDocumentModelCreated` as well.
    </td>
  </tr>
  <tr>
    <td></td>
  <td>
      ```
      /api/v1/id/{docId}/@emptyWithDefault?type=File&name=test
      ```
    </td>
  </tr>
</table>

<table class="hover">
  <tr>
    <td class="small-2">**@pp**</td>
    <td>
      Returns the result of the query corresponding to the named PageProvider. The target Document is used to provide the parameters of the PageProvider (*SearchDocumentModel*).
    </td>
  </tr>
  <tr>
    <td></td>
    <td>
      ```
      /api/v1/id/{docId}/@pp/{pageProviderName}
      ```
    </td>
  </tr>
</table>

<table class="hover">
  <tr>
    <td class="small-2">**@rendition**</td>
    <td>Returns the renditions of a blob</td>
  </tr>
  <tr>
    <td></td>
    <td>
      ```
      /api/v1/id/{docId}/@rendition/{renditionName}
      ```
    </td>
  </tr>
</table>

<table class="hover">
  <tr>
    <td class="small-2">**@search**</td>
    <td>
      Returns paged results of the query (full-text or NXQL)<br />
      Query parameters (optional) are by default:<br />
      `orderBy:dc:title`<br />
      `page:0`<br />
      `pageSize:50`<br />
      `maxResult:nolimit`
    </td>
  </tr>
  <tr>
    <td></td>
    <td>
      ```
       /api/v1/path/{docId}/@search?fullText=nuxeo&orderBy=dc:title
      ```
      ```
       /api/v1/path/{pathOfTheDoc}/@search?query=SELECT * FROM File
      ```
    </td>
  </tr>
</table>

<table class="hover">
  <tr>
    <td class="small-2">**@task**</td>
    <td>Returns the task instance you have permission to see</td>
  </tr>
  <tr>
    <td></td>
    <td>
      ```
      /api/v1/id/{docId}/@task
      ```
    </td>
  </tr>
</table>

<table class="hover">
  <tr>
    <td class="small-2">**@workflow**</td>
    <td>Returns workflow instances launched by current user</td>
  </tr>
  <tr>
    <td></td>
    <td>
      ```
      /api/v1/id/{docId}/@workflow
      ```
    </td>
  </tr>
</table>

## Group Adapters

Default adapters provided by default.

<table class="hover">
  <tr>
    <td class="small-2">**@users**</td>
    <td>Returns the member users of a group</td>
  </tr>
  <tr>
    <td></td>
    <td>
      ```
      /api/v1/group/{groupId}/@users
      ```
    </td>
  </tr>
</table>

<table class="hover">
  <tr>
    <td class="small-2">**@groups**</td>
    <td>Returns the member groups of a group</td>
  </tr>
  <tr>
    <td></td>
    <td>
      ```
      /api/v1/group/{groupId}/@groups
      ```
    </td>
  </tr>
</table>

## Custom Adapters

You can contribute new WebAdapters using WebEngine.

Alternatively, use the `@bo` WebAdapter to leverage standard Nuxeo DocumentModelAdapters which you can define with the [adapter extension point](http://explorer.nuxeo.com/nuxeo/site/distribution/10.10/viewExtensionPoint/org.nuxeo.ecm.core.api.DocumentAdapterService--adapters).

<table class="hover">
  <tr>
    <td class="small-2">**@bo**</td>
    <td>Specify the custom adapter you wish to use</td>
  </tr>
  <tr>
    <td></td>
    <td>
      ```
      /api/v1/id/{docId}/@bo/{documentAdapterName}
      ```
    </td>
  </tr>
</table>

Or use the `@op` adapter to access operations.

<table class="hover">
  <tr>
    <td class="small-2">**@op**</td>
    <td>Pipe document as input for an operation or automation chain</td>
  </tr>
  <tr>
    <td></td>
    <td>
      ```
      /api/v1/id/{docId}/@op/{OperationName}
      ```
      </br>
      ```
      /api/v1/path/{pathOfTheDoc}/@op/Chain.{myChain}
      ```
    </td>
  </tr>
</table>

## Piping

Adapters can be chained: the result of one adapter becomes the input of the next one.

Here is an example :

{{#> panel type='code' heading='Sample URL'}}

```
/api/v1/id/{docId}/@blob/file:content/@op/Blob.ToPDF
```

{{/panel}}

## Examples

### Getting the Children of a Given Document - `@children`

{{! multiexcerpt name='restapi-adapters-children'}}

{{#> panel type='code' heading='Example'}}

```
GET http://NUXEO_SERVER/nuxeo/site/api/v1/path/{pathOfTheDoc}/@children?currentPageIndex=0&pagesize=20&maxResults=100
```

{{/panel}}{{! /multiexcerpt}}

{{#> panel type='code' heading='Response'}}

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

### Searching Documents - `@search`

**Full-Text Search**

```
GET http://NUXEO_SERVER/nuxeo/site/api/v1/path/{pathOfTheDoc}/@search?fullText=nuxeo&orderBy=dc:title
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
GET http://NUXEO_SERVER/nuxeo/site/api/v1/path/{pathOfTheDoc}/@search?query=SELECT * FROM File
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

### Getting Annotations - `@annotation`

{{#> panel type='code' heading='Create annotation'}}

```
POST http://NUXEO_SERVER/nuxeo/site/api/v1/path/{pathOfTheDoc}/@annotation
{
  "entity-type": "annotation",
  "id": "ID",
  "documentId": "DOC_ID",
  "xpath": "file:content",
  "entity": "ENTITY"
}
```

{{/panel}}

{{#> panel type='code' heading='Get annotation'}}

```
GET http://NUXEO_SERVER/nuxeo/site/api/v1/path/{pathOfTheDoc}/@annotation/{annotationId}
```

{{/panel}}

{{#> panel type='code' heading='Get annotations'}}

```
GET http://NUXEO_SERVER/nuxeo/site/api/v1/path/{pathOfTheDoc}/@annotation?xpath=file:content
```

{{/panel}}

{{#> panel type='code' heading='Update annotation'}}

```
PUT http://NUXEO_SERVER/nuxeo/site/api/v1/path/{pathOfTheDoc}/@annotation
{
  "entity-type": "annotation",
  "entity": "ENTITY"
}
```

{{/panel}}

{{#> panel type='code' heading='Delete annotation'}}

```
DELETE http://NUXEO_SERVER/nuxeo/site/api/v1/path/{pathOfTheDoc}/@annotation/{annotationId}
```

{{/panel}}


### Getting a Business Object

{{#> panel type='code' heading='GET Request Body'}}

```
GET http://NUXEO_SERVER/nuxeo/site/api/v1/path/{pathOfTheDoc}/@bo/BusinessBeanAdapter
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

To update a business object, send a `PUT` request on the business object resource with its content data:

{{#> panel type='code' heading='PUT Request Body'}}

```
PUT http://NUXEO_SERVER/nuxeo/site/api/v1/path/{pathOfTheDoc}/@bo/BusinessBeanAdapter
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

To create a business object, issue a `POST` on the object resource with the name of the newly created document:

{{#> panel type='code' heading='POST Request Body'}}

```
POST http://NUXEO_SERVER/nuxeo/site/api/v1/path/{pathOfTheDoc}/@bo/BusinessBeanAdapter/{newName}
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

### Bridging Operations and Automation Chains

{{! multiexcerpt name='restapi-adapters-op'}}

{{#> panel type='code' heading='Sample POST Request Body'}}

```
POST http://NUXEO_SERVER/nuxeo/site/api/v1/path/{pathOfTheDoc}/@op/{myOperation}
{
  "params": {
    "opParam": "value"
  }
}
```

{{/panel}}{{! /multiexcerpt}}

The response will depend on the result of the automation chain.

{{#> panel type='code' heading='Sample POST Request Body on a Document'}}

```
POST http://NUXEO_SERVER/nuxeo/site/api/v1/path/{pathOfTheDoc}/@op/Chain.{myChain}
{
  "params": {
    "chainParam": "value"
  }
}
```

{{/panel}}{{! multiexcerpt name='restapi-adapters-piping'}}{{#> panel type='code' heading='Sample POST Request Body on a List of Documents'}}

```
POST http://NUXEO_SERVER/nuxeo/site/api/v1/path/{pathOfTheFolder}/@children/@op/Chain.myChain
{
  "params": {
	"chainParam": "value"
  }
}
```

{{/panel}}

Pay attention to the fact that document list adapters are paged. That means that the chain will run on all documents of the current page.

{{! /multiexcerpt}}

### Contributing A Web Adapter

Not completely satisfied with what's on offer? See how to [contribute a web adapter]({{page page='howto-contribute-to-the-rest-api#contributing-a-web-adapter'}})!

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [WebEngine (JAX-RS)]({{page page='webengine-jax-rs'}})
- [REST API]({{page page='rest-api'}})
- [HOWTO: Contribute to the REST API]({{page page='howto-contribute-to-the-rest-api'}})
- [Content Enricher]({{page page='content-enrichers'}})

{{/panel}}</div></div>
