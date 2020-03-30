---
title: REST API Entity Types
description: This page lists samples of JSON objects expected by the Resources Endpoints, that you may want to use and adapt when doing POST and PUT.
review:
    comment: ''
    date: '2018-01-15'
    status: ok
labels:
    - content-review-lts2016
    - rest-api
    - troger
    - blogs
    - endpoint
    - multiexcerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '13664833'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: REST+API+Entity+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/REST+API+Entity+Types'
    page_id: '19792382'
    shortlink: '-gEuAQ'
    shortlink_source: 'https://doc.nuxeo.com/x/-gEuAQ'
    source_link: /display/NXDOC/REST+API+Entity+Types
tree_item_index: 200
history:
    -
        author: Bertrand Chauvin
        date: '2016-04-26 16:54'
        message: ''
        version: '34'
    -
        author: Bertrand Chauvin
        date: '2015-10-14 13:01'
        message: Added multivalued / complex / complex multivalued property management syntax
        version: '33'
    -
        author: Alain Escaffre
        date: '2015-09-21 23:57'
        message: ''
        version: '32'
    -
        author: Guillaume Renard
        date: '2015-07-30 14:32'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2015-04-29 13:03'
        message: Update related pages
        version: '30'
    -
        author: Solen Guitter
        date: '2015-04-29 13:01'
        message: Add acl section
        version: '29'
    -
        author: Solen Guitter
        date: '2015-04-23 15:27'
        message: Add Workflow POST request and Task PUT request
        version: '28'
    -
        author: Solen Guitter
        date: '2015-04-23 13:34'
        message: Add task and workflow entity types
        version: '27'
    -
        author: Solen Guitter
        date: '2015-04-21 14:02'
        message: Add anchors
        version: '26'
    -
        author: Bertrand Chauvin
        date: '2015-03-27 09:31'
        message: Added POST / PUT request body for document
        version: '25'
    -
        author: Bertrand Chauvin
        date: '2014-10-17 14:59'
        message: ''
        version: '24'
    -
        author: Bertrand Chauvin
        date: '2014-10-17 14:59'
        message: added group entity
        version: '23'
    -
        author: Alain Escaffre
        date: '2014-06-30 16:00'
        message: ''
        version: '22'
    -
        author: Alain Escaffre
        date: '2014-06-18 02:54'
        message: ''
        version: '21'
    -
        author: Alain Escaffre
        date: '2014-06-17 14:39'
        message: ''
        version: '20'
    -
        author: Alain Escaffre
        date: '2014-06-17 14:38'
        message: ''
        version: '19'
    -
        author: Alain Escaffre
        date: '2014-06-17 14:26'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2014-06-09 18:12'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2014-06-09 18:11'
        message: Added TOC and related topics
        version: '16'
    -
        author: Thibaud Arguillere
        date: '2014-06-06 20:57'
        message: ''
        version: '15'
    -
        author: Alain Escaffre
        date: '2014-06-06 19:02'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2014-06-06 19:02'
        message: ''
        version: '13'
    -
        author: Alain Escaffre
        date: '2014-06-06 18:55'
        message: ''
        version: '12'
    -
        author: Alain Escaffre
        date: '2014-06-06 18:40'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2014-06-06 18:40'
        message: ''
        version: '10'
    -
        author: Alain Escaffre
        date: '2014-06-06 18:39'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2014-06-06 17:46'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2014-06-06 17:44'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2014-06-06 17:43'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2014-06-06 17:42'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2014-06-06 16:53'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2014-06-06 12:26'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2014-06-06 12:25'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-06-06 12:15'
        message: ''
        version: '1'

---
We reference here sample JSON objects expected by the Resources Endpoints, that you may want to use and adapt when doing POST and PUT. You can experiment Nuxeo API and see the list of endpoints on the [Nuxeo API Playground](http://nuxeo.github.io/api-playground/).


## document

### Result of a GET Request

{{#> panel type='code' heading='GET Request'}}

```json
{
  "entity-type": "document",
  "repository": "default",
  "uid": "dac9ef1d-0ca0-4946-93ed-048021b506d9",
  "path": "/default-domain",
  "type": "Domain",
  "state": "project",
  "versionLabel": "",
  "isCheckedOut": true,
  "title": "Default domain",
  "lastModified": "2014-06-06T10:23:59.76Z",
  "properties": {
    "dc:creator": "system",
    "dc:source": "Wikipedia",
    "dc:nature": "application",
    "dc:contributors": [
      "system",
      "Administrator"
    ],
    "dc:created": "2012-08-01T10:00:57.75Z",
    "dc:description": "",
    "dc:rights": "Creative Common",
    "dc:subjects": [
      "art/cinema",
      "technology/electronic"
    ],
    "dc:publisher": null,
    "dc:valid": null,
    "dc:format": "XML",
    "dc:issued": null,
    "dc:modified": "2014-06-06T10:23:59.76Z",
    "dc:expired": "2014-06-18T22:00:00.00Z",
    "dc:coverage": "asia/Bahrain",
    "dc:language": "EN",
    "dc:title": "Default domain",
    "dc:lastContributor": "Administrator",
    "common:icon": "/icons/domain.gif",
    "common:icon-expanded": null,
    "common:size": null,
    "domain:content_roots": [],
    "domain:display_type": "false"
  },
  "facets": [
    "SuperSpace",
    "DocumentsSizeStatistics",
    "Folderish",
    "DocumentsCountStatistics",
    "NotCollectionMember"
  ],
  "changeToken": "1402050239761",
  "contextParameters": {}
}
```

{{/panel}}

A few useful items to understand the data exposed on the document:

*   **properties** is an object of metadata values. Each property of this object is the XPath of the field ( [`dc:title`](http://dctitle) for example), and the value of the field. For multivalued fields, we have an array of values. Note that the content of this property may vary depending on which schemas you requested using the `X-NXDocumentProperties` header, as well as which properties [you configured on your document type]({{page space='nxdoc60' page='how-to-define-a-document-type'}}), using Nuxeo Studio. See the [data modeling documentation]({{page space='nxdoc' page='data-modeling'}}) for more information.
*   **facets** lists the [facets]({{page version='' space='nxdoc' page='available-facets'}}) that were declared on your document type.
*   **changeToken** is generated by Nuxeo and may be used server-side for some concurrent modifications safety check.
*   **contextParameters** is filled when calling Content Enrichers. See [this blog post](http://www.nuxeo.com/blog/development/2013/09/qa-friday-video-storyboard-rest-api/) for a sample on how to use Content Enrichers.

### Body for a POST Request

{{! multiexcerpt name='restapi-doc-entity-post'}}

When doing a POST request to create a document, you only need to specify a few elements: entity-type, document type and name. The properties object can be used to send more metadata. Here is a sample below:

{{#> panel type='code' heading='POST Request Body'}}

```json
{
  "entity-type": "document",
  "type": "File",
  "name": "myDocumentName",
  "properties": {
    "dc:title": "My Document Title",
    "demo:aDateProperty": "2050-12-25",
    "demo:aStringMultivaluedProperty": ["some", "text", "here"],
    "demo:aComplexProperty": {"firstName": "Chuck", "lastName": "Norris",
      "birthDate": "1968-12-25"},
    "demo:aMultivaluedComplexProperty": [
      {"firstName": "Chuck", "lastName": "Norris", "birthDate": "1968-12-25"},
      {"firstName": "Bruce", "lastName": "Lee", "birthDate": "1965-10-21"}
    ]
  }
}
```

{{/panel}}

A few useful items to understand the data exposed on the document:

*   `demo:aDateProperty` - Timezones are not needed for dates, but you can add it if you want to.
*   `demo:aStringMultivaluedProperty` - Multivalued properties must be sent as JavaScript arrays.
*   `demo:aComplexProperty` - Complex properties must be sent as JavaScript objects.
*   `demo:aMultivaluedComplexProperty` - Complex multi-valued properties are sent as arrays of JavaScript objects.

{{! /multiexcerpt}}

### Body for a PUT Request

{{! multiexcerpt name='restapi-doc-entity-put'}}

A PUT request is even simpler: you only need to send the entity type and the metadata you wish to update in the properties object.

{{#> panel type='code' heading='PUT Request Body'}}

```json
{
  "entity-type": "document",
  "properties": {
    "dc:title": "My Updated Title"
  }
}
```

{{/panel}}

Partial updates to documents are allowed. In this case, update `dc:title` but not the rest.

{{! /multiexcerpt}}

## directoryEntry

```json
{
  "entity-type": "directoryEntry",
  "directoryName": "continent",
  "properties": {
    "id": "oceania",
    "obsolete": "0",
    "ordering": "10000000",
    "label": "label.directories.continent.oceania"
  }
}
```

The list of properties depends on the schema of the directory. See the [developer documentation]({{page page='data-lists-and-directories'}}) for more information.

[Directories are documented]({{page page='data-lists-and-directories'}}) in the developer section. To create a new vocabulary (a directory specialized for combo boxes component), you can use [the vocabulary feature of Nuxeo Studio]({{page page='how-to-add-a-new-vocabulary'}}).

## directoryEntries

```json
{
  "entity-type": "directoryEntries",
  "entries": [{
    "entity-type": "directoryEntry",
    "directoryName": "continent",
    "properties": {
      "id": "europe",
      "obsolete": "0",
      "ordering": "10000000",
      "label": "label.directories.continent.europe"
    }
  }, {
    "entity-type": "directoryEntry",
    "directoryName": "continent",
    "properties": {
      "id": "africa",
      "obsolete": "0",
      "ordering": "10000000",
      "label": "label.directories.continent.africa"
    }
  }, {
    "entity-type": "directoryEntry",
    "directoryName": "continent",
    "properties": {
      "id": "north-america",
      "obsolete": "0",
      "ordering": "10000000",
      "label": "label.directories.continent.north-america"
    }
  }]
}
```

## group

```json
{
  "entity-type": "group",
  "groupname": "members",
  "grouplabel": "Members group",
  "memberUsers": [],
  "memberGroups": []
}
```

## user

```json
{
  "entity-type": "user",
  "id": "Bill",
  "properties": {
    "lastName": "Murray",
    "username": "Bill",
    "email": "bill@exemple.com",
    "company": "",
    "firstName": "Bill",
    "password": "",
    "groups": [
      "members",
      "ecm-experts",
      "hr_operational_managers"
    ]
  },
  "extendedGroups": [{
    "name": "members",
    "label": "Members group",
    "url": "group/members"
  }, {
    "name": "ecm-experts",
    "label": "ECM experts",
    "url": "group/ecm-experts"
  }, {
    "name": "hr_operational_managers",
    "label": "",
    "url": "group/hr_operational_managers"
  }, {
    "name": "doc:default:ac6e425b-262b-41ed-bbdd-b79c22d06657_members",
    "label": "doc:default:ac6e425b-262b-41ed-bbdd-b79c22d06657_members",
    "url": "group/doc:default:ac6e425b-262b-41ed-bbdd-b79c22d06657_members"
  }, {
    "name": "doc:default:b6994e9f-636c-484b-bc46-d4fd9071e432_members",
    "label": "doc:default:b6994e9f-636c-484b-bc46-d4fd9071e432_members",
    "url": "group/doc:default:b6994e9f-636c-484b-bc46-d4fd9071e432_members"
  }, {
    "name": "doc:default:ac6e425b-262b-41ed-bbdd-b79c22d06657_administrators",
    "label": "doc:default:ac6e425b-262b-41ed-bbdd-b79c22d06657_administrators",
    "url": "group/doc:default:ac6e425b-262b-41ed-bbdd-b79c22d06657_administrators"
  }],
  "isAdministrator": false,
  "isAnonymous": false
}
```

*   **properties**: those are the properties defined for the user. [They can be customized]({{page page='authentication-and-user-management#authenticationandusermanagement-addingnewfieldstotheuserprofileorgroupprofile'}}).

*   **extendedGroups**: this section gathers the explicit groups and the computed groups (See an [exemple of using the computed groups]({{page page='how-to-implement-local-groups-or-roles-using-computed-groups'}})). This section is computed server-side and is not taken into account when posting a user object.

## acl

{{#> panel type='code' heading='GET Request Response '}}

```json
{
  "entity-type": "acls",
  "acl": [{
    "name": "local",
    "ace": [{
      "username": "jdoe",
      "permission": "ReadWrite",
      "granted": true
    }]
  }, {
    "name": "inherited",
    "ace": [{
      "username": "Administrator",
      "permission": "Everything",
      "granted": true
    }, {
      "username": "members",
      "permission": "Read",
      "granted": true
    }]
  }]
}
```

{{/panel}}

## workflow

### Result of a GET Request

{{#> panel type='code' heading='GET Request'}}

```json
{
  "entity-type": "workflow",
  "id": "05fd04ca-9f4f-42e8-89f1-5e529477f8da",
  "name": "SerialDocumentReview",
  "title": "wf.serialDocumentReview.SerialDocumentReview",
  "state": "running",
  "workflowModelName": "SerialDocumentReview",
  "initiator": "Administrator",
  "attachedDocumentIds": [{
      "id": "4d2a827e-3191-469e-8b61-fe7c07304c2c"
  }],
  "variables": {
    "validationOrReview": "validation",
    "participants": [
      "user:john",
      "group:mobilityExperts"
    ],
    "initiatorComment": "",
    "index": 0
  },
  "graphResource": "http://demo.nuxeo.com/nuxeo/site/api/v1/workflow/05fd04ca-9f4f-42e8-89f1-5e529477f8da/graph"
}
```

{{/panel}}

### Body for a POST Request

When doing a POST request to start a workflow, you only need to specify a few elements: entity-type, workflowModelName and attachedDocumentIds. Variables are not necessary to just start the workflow.

{{#> panel type='code' heading='POST Request Body'}}

```json
{
  "entity-type": "workflow",
  "workflowModelName": "ParallelDocumentReview",
  "attachedDocumentIds": [{
    "id": "95cb364d-8cc7-45b0-b943-e3d68376694b"
  }]
}
```

{{/panel}}

## task

### Result of a GET Request

{{#> panel type='code' heading='GET Request'}}

```json
{
  "entity-type": "task",
  "id": "7bb67cd2-5848-4687-93af-30b3e715453e",
  "name": "wf.serialDocumentReview.DocumentValidation",
  "workflowInstanceId": "05fd04ca-9f4f-42e8-89f1-5e529477f8da",
  "workflowModelName": "SerialDocumentReview",
  "state": "opened",
  "directive": "wf.serialDocumentReview.AcceptReject",
  "created": "2015-02-24T23:12:53.81Z",
  "dueDate": "2015-03-01T23:12:53.81Z",
  "nodeName": "Task6d8",
  "targetDocumentIds": [{
    "id": "4d2a827e-3191-469e-8b61-fe7c07304c2c"
  }],
  "actors": [{
    "id": "user:john"
  }],
  "comments": [],
  "variables": {
    "comment": "",
    "participants": [
      "user:john",
      "group:mobilityExperts"
    ],
    "initiatorComment": ""
  },
  "taskInfo": {
    "taskActions": [{
      "name": "reject",
      "url": "http://demo.nuxeo.com/nuxeo/site/api/v1/task/7bb67cd2-5848-4687-93af-30b3e715453e/reject",
      "label": "wf.serialDocumentReview.Reject"
    }, {
      "name": "validate",
      "url": "http://demo.nuxeo.com/nuxeo/site/api/v1/task/7bb67cd2-5848-4687-93af-30b3e715453e/validate",
      "label": "wf.serialDocumentReview.Validate"
    }],
    "layoutResource": {
      "name": "Task6d8@taskLayout",
      "url": "http://demo.nuxeo.com/nuxeo/site//layout-manager/layouts/?layoutName=Task6d8@taskLayout"
    },
    "schemas": [{
      "name": "var_Task6d8",
      "url": "http://demo.nuxeo.com/nuxeo/site/api/v1/config/schemas/var_Task6d8"
    }, {
      "name": "dublincore",
      "url": "http://demo.nuxeo.com/nuxeo/site/api/v1/config/schemas/dublincore"
    }, {
      "name": "route_node",
      "url": "http://demo.nuxeo.com/nuxeo/site/api/v1/config/schemas/route_node"
    }]
  }
}
```

{{/panel}}

*   **Variables**: Variables are either the ones defined on the associated node from the workflow model or global variables (defined at workflow level).
*   **taskActions**: task actions have a PATH param (`url`), which will be used to send PUT requests to complete the task.

### Body for a PUT Request

When doing a PUT request to complete a task, you only need to specify a few elements: entity-type (task), id (of the task), variables (if any). The elements you need to specify depend on the task you are completing.

In the example below, we'll use the task we got from the GET request above whose name is `wf.serialDocumentReview.DocumentValidation`, i.e. the validation of a document in an approval workflow. Since we want to approve the task, the PUT will be sent on the URL <span class="nolink">[http://demo.nuxeo.com/nuxeo/site/api/v1/task/7bb67cd2-5848-4687-93af-30b3e715453e/validate](http://demo.nuxeo.com/nuxeo/site/api/v1/task/7bb67cd2-5848-4687-93af-30b3e715453e/validate)</span> . To reject the task, we would send the PUT request on the URL <span class="nolink">[http://demo.nuxeo.com/nuxeo/site/api/v1/task/7bb67cd2-5848-4687-93af-30b3e715453e/reject](http://demo.nuxeo.com/nuxeo/site/api/v1/task/7bb67cd2-5848-4687-93af-30b3e715453e/reject)</span> .

{{#> panel type='code' heading='PUT Request Body'}}

```json
{
  "entity-type": "task",
  "id": "7bb67cd2-5848-4687-93af-30b3e715453e",
  "variables": {
    "comment": "Document reviewed and approved on my side.",
  }
}
```

{{/panel}}


* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in developer documentation'}}

- [Document Resources Endpoints]({{page page='document-resources-endpoints'}})
- [REST API Web Adapters]({{page page='rest-api-web-adapters'}})
- [JSON Marshalling]({{page page='json-marshalling'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
