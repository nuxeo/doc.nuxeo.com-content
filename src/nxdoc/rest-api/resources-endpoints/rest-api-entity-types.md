---
title: REST API Entity Types
labels:
    - rest-api
toc: true
confluence:
    ajs-parent-page-id: '22380806'
    ajs-parent-page-title: Resources Endpoints
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: REST+API+Entity+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/REST+API+Entity+Types'
    page_id: '22380835'
    shortlink: I4FVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/I4FVAQ'
    source_link: /display/NXDOC60/REST+API+Entity+Types
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 14:42'
        message: ''
        version: '30'
    - 
        author: Guillaume Renard
        date: '2015-07-30 14:33'
        message: ''
        version: '29'
    - 
        author: Bertrand Chauvin
        date: '2015-03-27 09:28'
        message: Added PUT request body
        version: '28'
    - 
        author: Bertrand Chauvin
        date: '2015-03-27 09:21'
        message: ''
        version: '27'
    - 
        author: Bertrand Chauvin
        date: '2015-03-27 09:19'
        message: ''
        version: '26'
    - 
        author: Bertrand Chauvin
        date: '2015-03-27 09:16'
        message: Added post code block for docs
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

```
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

A few useful information to understand the data exposed on the document:

*   **properties** is an object of metadata values. Each property of this object is the XPath of the field ( [`dc:title`](http://dctitle) for example), and the value of the field. For multivalued fields, we have an array of values. Note that the content of this property may vary depending on which schemas you requested using the `X-NXDocumentProperties` header, as well as which properties [you configured on your document type]({{page page='how-to-define-a-document-type'}}), using Nuxeo Studio. See the [repository documentation]({{page page='repository-concepts'}}) for more information.
*   **facets** lists the [facets]({{page page='content-repository'}}) that were declared on your document type.
*   **changeToken** is generated by Nuxeo and may be used server-side for some concurrent modifications safety check.
*   **contextParameters** is filled when calling Rest Contributors. See [this blog post](http://www.nuxeo.com/blog/development/2013/09/qa-friday-video-storyboard-rest-api/) for a sample on how to use Rest Contributors.

### Body for a POST Request

When doing a POST request to create a document, you only need to specify a few elements : entity-type, document type and name. The properties object can be used to send more metadata. Here is a sample below:

{{#> panel type='code' heading='POST Request Body'}}

```
{
  "entity-type": "document",
  "type": "File",
  "name": "myDocumentName",
  "properties": {
    "dc:title": "My Document Title"
  }
}
```

{{/panel}}

### Body for a PUT Request

A PUT request is even simpler : you only need to send the metadata you wish to update in the properties object.

{{#> panel type='code' heading='PUT Request Body'}}

```
{
  "entity-type": "document",
  "properties": {
    "dc:title": "My new title"
  }
}
```

{{/panel}}

## directoryEntries

```
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
    }
    }]
}
```

## directoryEntry

```
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

## user

```
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
  "extendedGroups": [
    {
      "name": "members",
      "label": "Members group",
      "url": "group/members"
    },
    {
      "name": "ecm-experts",
      "label": "ECM experts",
      "url": "group/ecm-experts"
    },
    {
      "name": "hr_operational_managers",
      "label": "",
      "url": "group/hr_operational_managers"
    },
    {
      "name": "doc:default:ac6e425b-262b-41ed-bbdd-b79c22d06657_members",
      "label": "doc:default:ac6e425b-262b-41ed-bbdd-b79c22d06657_members",
      "url": "group/doc:default:ac6e425b-262b-41ed-bbdd-b79c22d06657_members"
    },
    {
      "name": "doc:default:b6994e9f-636c-484b-bc46-d4fd9071e432_members",
      "label": "doc:default:b6994e9f-636c-484b-bc46-d4fd9071e432_members",
      "url": "group/doc:default:b6994e9f-636c-484b-bc46-d4fd9071e432_members"
    },
    {
      "name": "doc:default:ac6e425b-262b-41ed-bbdd-b79c22d06657_administrators",
      "label": "doc:default:ac6e425b-262b-41ed-bbdd-b79c22d06657_administrators",
      "url": "group/doc:default:ac6e425b-262b-41ed-bbdd-b79c22d06657_administrators"
    }
  ],
  "isAdministrator": false,
  "isAnonymous": false
}
```

*   **properties**: those are the properties defined for the user. [They can be customised]({{page page='user-management'}}).

*   **extendedGroups**: this section gathers the explicit groups and the computed groups (See an [exemple of using the computed groups]({{page page='how-to-implement-local-groups-or-roles-using-computed-groups'}})). This section is computed server-side and is not taken into account when posting a user object.

## group

```js
{
  "entity-type": "group",
  "groupname": "members",
  "grouplabel": "Members group",
  "memberUsers": [],
  "memberGroups": []
}
```