---
title: Client API Test suite (TCK)
labels:
    - automation
    - todo
    - link-update
    - rest-api-component
    - lts2015-ok
    - excerpt
toc: true
confluence:
    ajs-parent-page-id: '16091040'
    ajs-parent-page-title: Client SDKs
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: viewpage.action?pageId=14255551
    canonical_source: viewpage.action?pageId=14255551
    page_id: '14255551'
    shortlink: v4XZ
    shortlink_source: 'https://doc.nuxeo.com/x/v4XZ'
    source_link: /pages/viewpage.action?pageId=14255551
history:
    - 
        author: Manon Lumeau
        date: '2015-09-16 11:32'
        message: ''
        version: '29'
    - 
        author: Manon Lumeau
        date: '2015-09-16 11:31'
        message: ''
        version: '28'
    - 
        author: Solen Guitter
        date: '2014-12-05 17:30'
        message: formatting
        version: '27'
    - 
        author: Solen Guitter
        date: '2013-11-13 12:06'
        message: Formatting
        version: '26'
    - 
        author: Vladimir Pasquier
        date: '2013-10-30 14:45'
        message: ''
        version: '25'
    - 
        author: Alain Escaffre
        date: '2013-10-16 17:00'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2013-09-23 13:31'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2013-08-30 12:14'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2013-08-30 12:14'
        message: Changed title
        version: '21'
    - 
        author: Solen Guitter
        date: '2013-08-30 12:08'
        message: ''
        version: '20'
    - 
        author: Vladimir Pasquier
        date: '2013-07-26 15:43'
        message: ''
        version: '19'
    - 
        author: Vladimir Pasquier
        date: '2013-07-26 15:41'
        message: ''
        version: '18'
    - 
        author: Vladimir Pasquier
        date: '2013-07-26 15:39'
        message: ''
        version: '17'
    - 
        author: Vladimir Pasquier
        date: '2013-07-25 18:04'
        message: ''
        version: '16'
    - 
        author: Vladimir Pasquier
        date: '2013-07-25 18:03'
        message: ''
        version: '15'
    - 
        author: Vladimir Pasquier
        date: '2013-07-25 18:02'
        message: ''
        version: '14'
    - 
        author: Vladimir Pasquier
        date: '2013-07-25 17:58'
        message: ''
        version: '13'
    - 
        author: Vladimir Pasquier
        date: '2013-07-25 17:53'
        message: ''
        version: '12'
    - 
        author: Vladimir Pasquier
        date: '2013-07-25 17:30'
        message: ''
        version: '11'
    - 
        author: Vladimir Pasquier
        date: '2013-07-25 17:19'
        message: ''
        version: '10'
    - 
        author: Florent Guillaume
        date: '2013-07-25 15:00'
        message: JS -> JavaScript
        version: '9'
    - 
        author: Julien Carsique
        date: '2013-07-25 14:27'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2013-07-11 17:20'
        message: Added TOC and fixed heading levels
        version: '7'
    - 
        author: Vladimir Pasquier
        date: '2013-07-08 15:26'
        message: ''
        version: '6'
    - 
        author: Vladimir Pasquier
        date: '2013-07-02 14:57'
        message: ''
        version: '5'
    - 
        author: Thierry Delprat
        date: '2013-07-02 01:02'
        message: ''
        version: '4'
    - 
        author: Thierry Delprat
        date: '2013-07-02 00:58'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2013-07-02 00:36'
        message: ''
        version: '2'
    - 
        author: Thierry Delprat
        date: '2013-06-26 17:54'
        message: ''
        version: '1'

---
**<span style="color: rgb(255,0,0);">
</span>**<span style="color: rgb(255,0,0);">&nbsp;</span>

{{#> callout type='note' }}

This page is a work in progress.

{{/callout}}{{! excerpt}}

This chapter provides a test suite that can be used to test the implementation of an automation client library.

{{! /excerpt}}

## Automation Client Test Suite

The test suite is separated in three sub-parts:

*   Basic CRUD operations on documents,
*   Blobs management,
*   Marshaling extensions.

Only the first part is strictly necessary.

### Base CRUD

#### Create and Read Documents

##### Scenario

1.  Create a Folder on / (`Document.Create`).
2.  Create a File child (`Document.Create`).
3.  Create a File child (`Document.Create`).
4.  Update&nbsp;[`dc:description`](http://dcdescription)&nbsp;property on second child (`Document.SetProperty`).
5.  Update&nbsp;[`dc:subjects`](http://dcsubjects)&nbsp;property on second child (`Document.SetProperty`).
6.  Get Children of Folder (`Document.GetChildren`).
7.  Specify that `dublincore` schema should be fetched.
8.  Verify that:

    *   <span>the folder has two children,</span>
    *   <span>the second child has the correct</span> `<span>[dc:description](http://dcdescription)</span>` <span>and</span> `<span>[dc:subjects](http://dcsubjects)</span>` <span>.</span>

##### Java Implementation

[GitHub Link for CRUD operations tests suite](https://github.com/nuxeo/nuxeo-features/blob/master/nuxeo-automation/nuxeo-automation-test/src/test/java/org/nuxeo/ecm/automation/server/test/RemoteAutomationClientTCK.java#L81-L127)

##### JavaScript Implementation

Link JS

##### HTTP Captures

```
POST /nuxeo/site/automation/Document.Create HTTP/1.1
Host: 127.0.0.1:8080
Content-Length: 130
Authorization: Basic QWRtaW5pc3RyYXRvcjpBZG1pbmlzdHJhdG9y
Origin: http://127.0.0.1:8080
Content-Type: application/json+nxrequest
Accept: */*
X-NXDocumentProperties: dublincore
X-Requested-With: XMLHttpRequest
X-NXVoidOperation: false
Nuxeo-Transaction-Timeout: 35
{ "input" : "doc:/",
  "params" : { "name" : "TestDocs",
      "properties" : "dc:title=Test Docs \ndc:description=Simple container",
      "type" : "Folder"
    }
}

HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Content-Type: application/json+nxentity
{ "changeToken" : "1372718688038",
  "contextParameters" : {  },
  "entity-type" : "document",
  "facets" : [ "Folderish" ],
  "lastModified" : "2013-07-01T22:44:48.03Z",
  "path" : "/TestDocs",
  "properties" : { "dc:contributors" : [ "Administrator" ],
      "dc:coverage" : null,
      "dc:created" : "2013-07-01T22:44:48.03Z",
      "dc:creator" : "Administrator",
      "dc:description" : "Simple container",
      "dc:expired" : null,
      "dc:format" : null,
      "dc:issued" : null,
      "dc:language" : null,
      "dc:lastContributor" : "Administrator",
      "dc:modified" : "2013-07-01T22:44:48.03Z",
      "dc:nature" : null,
      "dc:publisher" : null,
      "dc:rights" : null,
      "dc:source" : null,
      "dc:subjects" : [  ],
      "dc:title" : "Test Docs",
      "dc:valid" : null
    },
  "repository" : "default",
  "state" : "project",
  "title" : "Test Docs",
  "type" : "Folder",
  "uid" : "e27bc86b-d5f1-4ba9-a8e4-3ce96340f301",
  "versionLabel" : ""
}

POST /nuxeo/site/automation/Document.Create HTTP/1.1
Host: 127.0.0.1:8080
Content-Length: 69
Authorization: Basic QWRtaW5pc3RyYXRvcjpBZG1pbmlzdHJhdG9y
Origin: http://127.0.0.1:8080
Content-Type: application/json+nxrequest
Accept: */*
X-NXDocumentProperties: dublincore
X-Requested-With: XMLHttpRequest
X-NXVoidOperation: false
Nuxeo-Transaction-Timeout: 35
{ "input" : "doc:/TestDocs",
  "params" : { "name" : "TestFile1",
      "type" : "File"
    }
}

HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Content-Type: application/json+nxentity
{ "changeToken" : "1372718688058",
  "contextParameters" : {  },
  "entity-type" : "document",
  "facets" : [ "Downloadable",
      "Commentable",
      "Versionable",
      "Publishable",
      "Thumbnail",
      "HasRelatedText"
    ],
  "lastModified" : "2013-07-01T22:44:48.05Z",
  "path" : "/TestDocs/TestFile1",
  "properties" : { "dc:contributors" : [ "Administrator" ],
      "dc:coverage" : null,
      "dc:created" : "2013-07-01T22:44:48.05Z",
      "dc:creator" : "Administrator",
      "dc:description" : null,
      "dc:expired" : null,
      "dc:format" : null,
      "dc:issued" : null,
      "dc:language" : null,
      "dc:lastContributor" : "Administrator",
      "dc:modified" : "2013-07-01T22:44:48.05Z",
      "dc:nature" : null,
      "dc:publisher" : null,
      "dc:rights" : null,
      "dc:source" : null,
      "dc:subjects" : [  ],
      "dc:title" : null,
      "dc:valid" : null
    },
  "repository" : "default",
  "state" : "project",
  "title" : "TestFile1",
  "type" : "File",
  "uid" : "29e654b3-02ae-4600-a057-d487fbac8fbd",
  "versionLabel" : "0.0"
}

POST /nuxeo/site/automation/Document.Create HTTP/1.1
Host: 127.0.0.1:8080
Content-Length: 69
Authorization: Basic QWRtaW5pc3RyYXRvcjpBZG1pbmlzdHJhdG9y
Origin: http://127.0.0.1:8080
Content-Type: application/json+nxrequest
Accept: */*
X-NXDocumentProperties: dublincore
X-Requested-With: XMLHttpRequest
X-NXVoidOperation: false
Nuxeo-Transaction-Timeout: 35
{ "input" : "doc:/TestDocs",
  "params" : { "name" : "TestFile2",
      "type" : "File"
    }
}

HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Content-Type: application/json+nxentity
{ "changeToken" : "1372718688083",
  "contextParameters" : {  },
  "entity-type" : "document",
  "facets" : [ "Downloadable",
      "Commentable",
      "Versionable",
      "Publishable",
      "Thumbnail",
      "HasRelatedText"
    ],
  "lastModified" : "2013-07-01T22:44:48.08Z",
  "path" : "/TestDocs/TestFile2",
  "properties" : { "dc:contributors" : [ "Administrator" ],
      "dc:coverage" : null,
      "dc:created" : "2013-07-01T22:44:48.08Z",
      "dc:creator" : "Administrator",
      "dc:description" : null,
      "dc:expired" : null,
      "dc:format" : null,
      "dc:issued" : null,
      "dc:language" : null,
      "dc:lastContributor" : "Administrator",
      "dc:modified" : "2013-07-01T22:44:48.08Z",
      "dc:nature" : null,
      "dc:publisher" : null,
      "dc:rights" : null,
      "dc:source" : null,
      "dc:subjects" : [  ],
      "dc:title" : null,
      "dc:valid" : null
    },
  "repository" : "default",
  "state" : "project",
  "title" : "TestFile2",
  "type" : "File",
  "uid" : "7493912e-5d59-4041-9efc-a907c1d1fa07",
  "versionLabel" : "0.0"
}
```

```
POST /nuxeo/site/automation/Document.Update HTTP/1.1
Host: 127.0.0.1:8080
Content-Length: 133
Authorization: Basic QWRtaW5pc3RyYXRvcjpBZG1pbmlzdHJhdG9y
Origin: http://127.0.0.1:8080
Content-Type: application/json+nxrequest
Accept: */*
X-NXDocumentProperties: dublincore
X-Requested-With: XMLHttpRequest
X-NXVoidOperation: false
Nuxeo-Transaction-Timeout: 35
{ "input" : "doc:/TestDocs/TestFile2",
  "params" : { "properties" : "dc:description=Simple File\ndc:subjects=subject1,subject2",
      "save" : "true"
    }
}

HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Content-Type: application/json+nxentity
{ "changeToken" : "1372718688104",
  "contextParameters" : {  },
  "entity-type" : "document",
  "facets" : [ "Downloadable",
      "Commentable",
      "Versionable",
      "Publishable",
      "Thumbnail",
      "HasRelatedText"
    ],
  "lastModified" : "2013-07-01T22:44:48.10Z",
  "path" : "/TestDocs/TestFile2",
  "properties" : { "dc:contributors" : [ "Administrator" ],
      "dc:coverage" : null,
      "dc:created" : "2013-07-01T22:44:48.08Z",
      "dc:creator" : "Administrator",
      "dc:description" : "Simple File",
      "dc:expired" : null,
      "dc:format" : null,
      "dc:issued" : null,
      "dc:language" : null,
      "dc:lastContributor" : "Administrator",
      "dc:modified" : "2013-07-01T22:44:48.10Z",
      "dc:nature" : null,
      "dc:publisher" : null,
      "dc:rights" : null,
      "dc:source" : null,
      "dc:subjects" : [ "subject1",
          "subject2"
        ],
      "dc:title" : null,
      "dc:valid" : null
    },
  "repository" : "default",
  "state" : "project",
  "title" : "TestFile2",
  "type" : "File",
  "uid" : "7493912e-5d59-4041-9efc-a907c1d1fa07",
  "versionLabel" : "0.0"
}

```

```
POST /nuxeo/site/automation/Document.Fetch HTTP/1.1
Authorization: Basic QWRtaW5pc3RyYXRvcjpBZG1pbmlzdHJhdG9y
Content-Type: application/json+nxrequest
Accept: application/json+nxentity, */*
Content-Length: 48
Host: localhost:8080
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.2.4 (java 1.5)

{"params":{"value":"/TestFolder1"},"context":{}}

HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Content-Type: application/json+nxentity
Transfer-Encoding: chunked
Date: Thu, 25 Jul 2013 14:20:03 GMT
{
  "entity-type": "document",
  "repository": "default",
  "uid": "6879c9c5-0fdf-4d53-85d0-32c8fa94a9e0",
  "path": "/TestFolder1",
  "type": "Folder",
  "state": "project",
  "versionLabel": "",
  "title": "Test Folder2",
  "lastModified": "2013-07-25T14:20:03.90Z",
  "facets": [
    "Folderish"
  ],
  "changeToken": "1374762003906",
  "contextParameters": {}
}

```

```
POST /nuxeo/site/automation/Document.GetChildren HTTP/1.1
Authorization: Basic QWRtaW5pc3RyYXRvcjpBZG1pbmlzdHJhdG9y
Content-Type: application/json+nxrequest
Accept: application/json+nxentity, */*
Content-Length: 82
Host: localhost:8080
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.2.4 (java 1.5)

{
  "input": {
    "entity-type": "string",
    "value": "/TestFolder1"
  },
  "params": {},
  "context": {}
}

HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Content-Type: application/json+nxentity
Transfer-Encoding: chunked
Date: Thu, 25 Jul 2013 14:20:03 GMT
{
  "entity-type": "documents",
  "entries": [
    {
      "entity-type": "document",
      "repository": "default",
      "uid": "dc499ced-e140-46e6-a5c4-58fbc19b589c",
      "path": "/TestFolder1/TestFile1",
      "type": "File",
      "state": "project",
      "versionLabel": "0.0",
      "title": "TestFile1",
      "lastModified": "2013-07-25T14:20:03.95Z",
      "facets": [
        "Downloadable",
        "Commentable",
        "Versionable",
        "Publishable",
        "Thumbnail",
        "HasRelatedText"
      ],
      "changeToken": "1374762003951",
      "contextParameters": {}
    },
    {
      "entity-type": "document",
      "repository": "default",
      "uid": "98181b11-ef91-48fa-b202-091f5d2ee809",
      "path": "/TestFolder1/TestFile2",
      "type": "File",
      "state": "project",
      "versionLabel": "0.0",
      "title": "TestFile2",
      "lastModified": "2013-07-25T14:20:04.04Z",
      "facets": [
        "Downloadable",
        "Commentable",
        "Versionable",
        "Publishable",
        "Thumbnail",
        "HasRelatedText"
      ],
      "changeToken": "1374762004043",
      "contextParameters": {}
    }
  ]
}
```

#### Pagination

##### Scenario

1.  Create a Folder on / (`Document.Create`).
2.  <span>Create three Files children.</span>
3.  <span>Call&nbsp;`Document.PageProvider`&nbsp;with "`select * from Document where&nbsp;`</span> `<span><span>ecm:parentId</span></span> `<span>`&nbsp;= ?`" with</span>

    *   <span>queryParams = Folder uuid&nbsp;</span>
    *   <span>pageSize = 2</span>
    *   <span>page = 1</span>
4.  <span>Verify:</span>

    *   <span>pageCount=2</span>
    *   <span>the page contains two docs.</span>
5.  Call&nbsp;`Document.PageProvider`&nbsp;with "`select * from Document where&nbsp;` `ecm:parentId` `&nbsp;= ?`" with

    *   <span>queryParams = Folder uuid&nbsp;</span>
    *   <span>pageSize = 2</span>
    *   <span>page = 2</span>
6.  <span>Verify:</span>

    *   <span>pageCount=2</span>
    *   <span>the page contains one document.</span>

##### Java Implementation

[GitHub Link for Pagination operations tests suite](https://github.com/nuxeo/nuxeo-features/blob/master/nuxeo-automation/nuxeo-automation-test/src/test/java/org/nuxeo/ecm/automation/server/test/RemoteAutomationClientTCK.java#L129-L175)

##### HTTP Capture

```
 POST /nuxeo/site/automation/Document.PageProvider HTTP/1.1
Authorization: Basic QWRtaW5pc3RyYXRvcjpBZG1pbmlzdHJhdG9y
Content-Type: application/json+nxrequest
Accept: application/json+nxentity, */*
Content-Length: 160
Host: localhost:8080
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.2.4 (java 1.5)

{
  "params": {
    "queryParams": "b583b0a7-cae4-4961-b94d-29c469ca8012",
    "page": "0",
    "query": "select * from Document where ecm:parentId = ?",
    "pageSize": "2"
  },
  "context": {}
}

HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Content-Type: application/json+nxentity
Transfer-Encoding: chunked
Date: Thu, 25 Jul 2013 15:24:47 GMT
{
  "entity-type": "documents",
  "isPaginable": true,
  "totalSize": 3,
  "pageIndex": 0,
  "pageSize": 2,
  "pageCount": 2,
  "entries": [
    {
      "entity-type": "document",
      "repository": "default",
      "uid": "3f76a415-ad73-4522-9450-d12af25b7fb4",
      "path": "/TestFolder2/TestFile3",
      "type": "File",
      "state": "project",
      "versionLabel": "0.0",
      "title": "TestFile3",
      "lastModified": "2013-07-25T15:23:58.63Z",
      "facets": [
        "Downloadable",
        "Commentable",
        "Versionable",
        "Publishable",
        "Thumbnail",
        "HasRelatedText"
      ],
      "changeToken": "1374765838639",
      "contextParameters": {
        "documentURL": "/nuxeo/nxdoc/default/3f76a415-ad73-4522-9450-d12af25b7fb4/view_documents"
      }
    },
    {
      "entity-type": "document",
      "repository": "default",
      "uid": "1e751ded-c659-46da-8982-0963575f48f8",
      "path": "/TestFolder2/TestFile1",
      "type": "File",
      "state": "project",
      "versionLabel": "0.0",
      "title": "TestFile1",
      "lastModified": "2013-07-25T15:23:58.55Z",
      "facets": [
        "Downloadable",
        "Commentable",
        "Versionable",
        "Publishable",
        "Thumbnail",
        "HasRelatedText"
      ],
      "changeToken": "1374765838558",
      "contextParameters": {
        "documentURL": "/nuxeo/nxdoc/default/1e751ded-c659-46da-8982-0963575f48f8/view_documents"
      }
    }
  ]
}
```

### Blobs

#### Direct Blob Upload

##### Scenario

1.  Create a Folder on / (`Document.Create`).
2.  <span>Call&nbsp;`FileManager.Import`&nbsp;passing a testText.txt file and setting context to Folder.</span>
3.  <span>Call&nbsp;`FileManager.Import`&nbsp;passing a testBlob.bin binary file and setting context to Folder.</span>
4.  <span>Verify that:</span>

    1.  <span>two documents are created, of types File and Note.</span>

##### Java Implementation

[GitHub link for Blob operations tests suite](https://github.com/nuxeo/nuxeo-features/blob/master/nuxeo-automation/nuxeo-automation-test/src/test/java/org/nuxeo/ecm/automation/server/test/RemoteAutomationClientTCK.java#L177-L247)

##### HTTP Capture

```
POST /nuxeo/site/automation/FileManager.Import HTTP/1.1
Authorization: Basic QWRtaW5pc3RyYXRvcjpBZG1pbmlzdHJhdG9y
Content-Type: multipart/related; 
    boundary="----=_Part_0_1227289322.1374766516160"
Accept: application/json+nxentity, */*
Transfer-Encoding: chunked
Host: localhost:8080
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.2.4 (java 1.5)
e7
------=_Part_0_1227289322.1374766516160
Content-Type: application/json+nxrequest; charset=UTF-8
Content-Transfer-Encoding: 8bit
Content-ID: request
Content-Length: 57
{"params":{},"context":{"currentDocument":"/FolderBlob"}}
f5
------=_Part_0_1227289322.1374766516160
Content-Type: text/xml
Content-Transfer-Encoding: binary
Content-Disposition: attachment; 
    filename=automation-test-5983650304333926591.xml
Content-ID: input
Content-Length: 16
mydoc
------=_Part_0_1227289322.1374766516160--

HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Content-Type: application/json+nxentity
Transfer-Encoding: chunked
Date: Thu, 25 Jul 2013 15:35:16 GMT
{
  "entity-type": "document",
  "repository": "default",
  "uid": "77ec49fb-1832-4124-b8f6-270d53ac20bb",
  "path": "/FolderBlob/automation-test-59836503",
  "type": "File",
  "state": "project",
  "versionLabel": "0.0",
  "title": "automation-test-5983650304333926591.xml",
  "lastModified": "2013-07-25T15:35:16.24Z",
  "facets": [
    "Downloadable",
    "Commentable",
    "Versionable",
    "Publishable",
    "Thumbnail",
    "HasRelatedText"
  ],
  "changeToken": "1374766516241",
  "contextParameters": {}
}
```

```
POST /nuxeo/site/automation/Blob.Attach HTTP/1.1
X-NXVoidOperation: true
Authorization: Basic QWRtaW5pc3RyYXRvcjpBZG1pbmlzdHJhdG9y
Content-Type: multipart/related; 
    boundary="----=_Part_1_2072469418.1374766516423"
Accept: application/json+nxentity, */*
Transfer-Encoding: chunked
Host: localhost:8080
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.2.4 (java 1.5)

------=_Part_1_2072469418.1374766516423
Content-Type: application/json+nxrequest; charset=UTF-8
Content-Transfer-Encoding: 8bit
Content-ID: request
Content-Length: 46

{"params":{"document":"/myfile"},"context":{}}

------=_Part_1_2072469418.1374766516423
Content-Type: image/jpeg
Content-Transfer-Encoding: binary
Content-Disposition: attachment; filename=creationFields.json
Content-ID: input
Content-Length: 1288
[
    {
        "fieldType": "string",
        "description": "desc field0",
        "roles": [
            "Decision",
            "Score"
        ],
        "name": "field0",
        "columnName": "col0",
        "sqlTypeHint": "whatever"
    },
    {
        "fieldType": "string",
        "description": "desc field1",
        "roles": [
            "Decision",
            "Score"
        ],
        "name": "field1",
        "columnName": "col1",
        "sqlTypeHint": "whatever"
    },
    {
        "fieldType": "string",
        "description": "desc field2",
        "roles": [
            "Decision",
            "Score"
        ],
        "name": "field2",
        "columnName": "col2",
        "sqlTypeHint": "whatever"
    },
    {
        "fieldType": "string",
        "description": "desc field3",
        "roles": [
            "Decision",
            "Score"
        ],
        "name": "field3",
        "columnName": "col3",
        "sqlTypeHint": "whatever"
    },
    {
        "fieldType": "string",
        "description": "desc field4",
        "roles": [
            "Decision",
            "Score"
        ],
        "name": "field4",
        "columnName": "col4",
        "sqlTypeHint": "whatever"
    }
]
------=_Part_1_2072469418.1374766516423--

HTTP/1.1 204 No Content
Server: Apache-Coyote/1.1
Date: Thu, 25 Jul 2013 15:35:16 GMT
```

#### Blobs Upload via Batch Manager

##### Scenario

1.  Upload two blobs via batch manager:

    *   <span>testText.txt,</span>
    *   <span>testBlob.bin.</span>
2.  <span>Call&nbsp;`FileManager.Import`&nbsp;via batch API</span>:

    *   <span>set currentDocument to /</span>
3.  <span>Verify that:</span>

    *   <span>two documents are created, of types File and Note.</span>

##### Java Implementation

XXX Link the Java unit test

##### HTTP Capture

XXX Commented HTTP capture

#### Blobs Attach via Batch Manager

##### Scenario

1.  Create a File on / (`Document.Create`).
2.  <span>Upload one blob via batch manager</span>:

    1.  <span>testText.txt.</span>
3.  <span>Call&nbsp;`Document.Update`&nbsp;with two properties</span>:

    *   `<span>dc:description</span>`
    *   `<span>file:content</span>` <span>: reference Blob 1 from batch.</span>
4.  <span>Fetch the Document</span>:

    *   <span>Specify to fetch the `dublincore` schema.</span>
5.  <span>Download the blob.</span>
6.  <span>Verify that:</span>

    *   <span>Description was updated.</span>
    *   <span>Blob exists and contains the expected text.</span>

##### Java Implementation

XXX Link the Java unit test

##### HTTP Capture

XXX Commented Http capture

### Marshaling Extensions

#### Manage Complex Properties

##### Scenario

1.  Create a File on / (`Document.Create`).
2.  <span>Call&nbsp;`Document.Update`:</span>

    1.  `<span>dc:description</span>` <span>,</span> <span>&nbsp;</span>
    2.  `<span>dc:subjects</span>` <span>,</span> <span>&nbsp;</span>
    3.  <span>some complex property.</span>
3.  <span>Fetch the Document</span>:

    1.  <span>specify to fetch all schemas.</span>
4.  <span>Verify that:</span>

    1.  <span>document content is ok (scalar, list and complex).</span>

##### Java Implementation

[GitHub link for Complex Properties operations tests suite](https://github.com/nuxeo/nuxeo-features/blob/master/nuxeo-automation/nuxeo-automation-test/src/test/java/org/nuxeo/ecm/automation/server/test/RemoteAutomationClientTCK.java#L249-L295)

##### HTTP Capture

```
POST /nuxeo/site/automation/Document.Create HTTP/1.1
Authorization: Basic QWRtaW5pc3RyYXRvcjpBZG1pbmlzdHJhdG9y
Content-Type: application/json+nxrequest
Accept: application/json+nxentity, */*
Content-Length: 1484
Host: localhost:8080
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.2.4 (java 1.5)

{
  "input": "doc:c3fbb3bd-8646-4b81-9380-63da531856e8",
  "params": {
    "name": "testDoc",
    "properties": "ds:fields=[    {        \"fieldType\": \"string\",        \"description\": \"desc field0\",        \"roles\": [            \"Decision\",            \"Score\"        ],        \"name\": \"field0\",        \"columnName\": \"col0\",        \"sqlTypeHint\": \"whatever\"    },    {        \"fieldType\": \"string\",        \"description\": \"desc field1\",        \"roles\": [            \"Decision\",            \"Score\"        ],        \"name\": \"field1\",        \"columnName\": \"col1\",        \"sqlTypeHint\": \"whatever\"    },    {        \"fieldType\": \"string\",        \"description\": \"desc field2\",        \"roles\": [            \"Decision\",            \"Score\"        ],        \"name\": \"field2\",        \"columnName\": \"col2\",        \"sqlTypeHint\": \"whatever\"    },    {        \"fieldType\": \"string\",        \"description\": \"desc field3\",        \"roles\": [            \"Decision\",            \"Score\"        ],        \"name\": \"field3\",        \"columnName\": \"col3\",        \"sqlTypeHint\": \"whatever\"    },    {        \"fieldType\": \"string\",        \"description\": \"desc field4\",        \"roles\": [            \"Decision\",            \"Score\"        ],        \"name\": \"field4\",        \"columnName\": \"col4\",        \"sqlTypeHint\": \"whatever\"    }]\nds:tableName=MyTable\ndc:title=testDoc\n",
    "type": "DataSet"
  },
  "context": {}
}

HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Content-Type: application/json+nxentity
Transfer-Encoding: chunked
Date: Thu, 25 Jul 2013 15:45:25 GMT
{
  "entity-type": "document",
  "repository": "default",
  "uid": "ad9f8940-6aa8-450f-80fd-05af3f4836fb",
  "path": "/testDoc",
  "type": "DataSet",
  "state": "undefined",
  "versionLabel": "0.0",
  "title": "testDoc",
  "lastModified": "2013-07-25T15:45:25.03Z",
  "facets": [
    "Downloadable",
    "Commentable",
    "Versionable",
    "Publishable",
    "Thumbnail",
    "HasRelatedText"
  ],
  "changeToken": "1374767125039",
  "contextParameters": {}
}
```

```
POST /nuxeo/site/automation/Document.Update HTTP/1.1
Authorization: Basic QWRtaW5pc3RyYXRvcjpBZG1pbmlzdHJhdG9y
Content-Type: application/json+nxrequest
Accept: application/json+nxentity, */*
Content-Length: 465
Host: localhost:8080
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.2.4 (java 1.5)

{
  "input": "doc:ad9f8940-6aa8-450f-80fd-05af3f4836fb",
  "params": {
    "properties": "ds:fields=[    {        \"fieldType\":\"string\",        \"description\":\"desc fieldA\",        \"name\":\"fieldA\",        \"columnName\":\"colA\",        \"sqlTypeHint\":\"whatever\"    },    {        \"fieldType\":\"string\",        \"description\":\"desc fieldB\",        \"name\":\"fieldB\",        \"columnName\":\"colB\",        \"sqlTypeHint\":\"whatever\"    }]\n"
  },
  "context": {}
}

HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Content-Type: application/json+nxentity
Transfer-Encoding: chunked
Date: Thu, 25 Jul 2013 15:45:25 GMT
{
  "entity-type": "document",
  "repository": "default",
  "uid": "ad9f8940-6aa8-450f-80fd-05af3f4836fb",
  "path": "/testDoc",
  "type": "DataSet",
  "state": "undefined",
  "versionLabel": "0.0",
  "title": "testDoc",
  "lastModified": "2013-07-25T15:45:25.08Z",
  "facets": [
    "Downloadable",
    "Commentable",
    "Versionable",
    "Publishable",
    "Thumbnail",
    "HasRelatedText"
  ],
  "changeToken": "1374767125085",
  "contextParameters": {}
}
```

#### Custom Marshaling

##### Scenario

1.  Create a Folder on / (`Document.Create`).
2.  <span>Create three Files children.</span>
3.  <span>Call `Resultset.PageProvider` with "`select&nbsp;`</span> `<span>dc:title</span> <span>,&nbsp;</span> <span>dc:desciption</span> <span>,&nbsp;</span> <span>ecm:type</span> <span>&nbsp;from Document where&nbsp;</span> <span>ecm:parentId</span> `<span>`&nbsp;= ?`" with:</span>

    1.  <span>`queryParams` = Folder uuid,</span>
    2.  <span>`pageSize` = 2,</span>
    3.  <span>`page` = 1.</span>
4.  <span>Verify that:</span>

    1.  <span>`pageCount`=2</span>
    2.  <span>the page contains two records,</span>
    3.  <span>the content of returned recordset is correct.</span>

##### Java Implementation

XXX Link the Java unit test

##### HTTP Capture

XXX Commented HTTP capture

#### Managing Business Objects

##### Scenario

1.  Create a client side 'Business' bean (simple POJO with getter/setter on properties).
2.  <span>Register</span> the POJO in client Marshaling engine.
3.  <span>Call `Business.BusinessCreateOperation` with:</span>

    *   two properties:

        *   `<span>name</span>` <span>,</span>
        *   `<span>parentPath</span>` <span>: reference the parent of the document to create,</span>
    *   one input:

        *   the POJO itself.
4.  Get the returned POJO (with id set).
5.  Update the POJO title.
6.  Call <span>`Business.BusinessUpdateOperation`</span> with:

    *   one property:

        *   id: references the document id to update
    *   with one input:

        *   the POJO itself.
7.  Verify that:

    *   the id is not null,
    *   the title was updated.

##### Java Implementation

[GitHub link for Business Object operations tests suite](https://github.com/nuxeo/nuxeo-features/blob/master/nuxeo-automation/nuxeo-automation-test/src/test/java/org/nuxeo/ecm/automation/server/test/RemoteAutomationClientTCK.java#L297-L319)

##### HTTP Capture

```
 POST /nuxeo/site/automation/Business.BusinessCreateOperation HTTP/1.1
Authorization: Basic QWRtaW5pc3RyYXRvcjpBZG1pbmlzdHJhdG9y
Content-Type: application/json+nxrequest
Accept: application/json+nxentity, */*
Content-Length: 206
Host: localhost:8080
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.2.4 (java 1.5)

{
  "input": {
    "entity-type": "BusinessBeanAdapter",
    "value": {
      "id": null,
      "type": "Note",
      "description": "File description",
      "title": "Note",
      "note": "Note Content"
    }
  },
  "params": {
    "name": "Note",
    "parentPath": "/"
  },
  "context": {}
}

HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Content-Type: application/json+nxentity
Transfer-Encoding: chunked
Date: Thu, 25 Jul 2013 15:45:45 GMT
{
  "entity-type": "BusinessBeanAdapter",
  "value": {
    "type": "Note",
    "id": "d82d9824-20ca-402a-a586-790103a018b2",
    "description": "File description",
    "note": "Note Content",
    "title": "Note"
  }
}
```

```
 POST /nuxeo/site/automation/Business.BusinessUpdateOperation HTTP/1.1
Authorization: Basic QWRtaW5pc3RyYXRvcjpBZG1pbmlzdHJhdG9y
Content-Type: application/json+nxrequest
Accept: application/json+nxentity, */*
Content-Length: 212
Host: localhost:8080
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.2.4 (java 1.5)

{
  "input": {
    "entity-type": "BusinessBeanAdapter",
    "value": {
      "id": "d82d9824-20ca-402a-a586-790103a018b2",
      "type": "Note",
      "description": "File description",
      "title": "Update",
      "note": "Note Content"
    }
  },
  "params": {},
  "context": {}
}

HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Content-Type: application/json+nxentity
Transfer-Encoding: chunked
Date: Thu, 25 Jul 2013 15:45:45 GMT
{
  "entity-type": "BusinessBeanAdapter",
  "value": {
    "type": "Note",
    "id": "d82d9824-20ca-402a-a586-790103a018b2",
    "description": "File description",
    "note": "Note Content",
    "title": "Update"
  }
}
```

## Client Compatibility Matrix

### Compatibility Level

This compatibility matrix focus on two aspects :

*   **protocol compliance**: capability to achieve simple usage scenario as defined inside the tests,
*   <span>**convenience features**: additional conveniant features that may be provided on top of JSON-RPC library.</span>

#### Protocol Compliance

Automation being a simple JSON-RPC, you should be able to do everything from every language as long as you can do JSON Marshaling and HTTP calls.

Hence for each test scenario, the target client library will be qualified with one of the three statuses:

*   **Ok**: built-in feature,
*   <span>**Easy**: test can be achieved with minor tweak (like format JSON partially by hand ...),</span>
*   <span>**Fail**: feature is not possible or complex to use.</span>

#### Convenience Features

This aspect is here to highlight the specific feature that may be provided by each client library implementation.

This feature list currently includes:

##### Static Check Before Call

Ability to check operation arguments and types before actually doing the server side call.

##### Working with Document Object

Ability to work fluently with Document objects:

*   fetch a document and retrieve it as a Document object,
*   update the Document object,
*   send it back to the server.

##### Background Upload/Download Pool

Manage HTTP threads pool for upload/download in background.

##### Caching

Support client side caching to provide minimal offline capability.

##### Advanced Exception Management

Retrieve advanced information about potential server side exception.

##### Advanced Authentication

Support integrated authentication (via portal_sso).

##### Layout Management

Support for fetching layouts definition associated to documents.

### Compatibility Matrix

<table><tbody><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><th colspan="1">Java Client</th><th colspan="1">JavaScript Client</th><th colspan="1">Python Client</th><th colspan="1">PHP Client</th><th colspan="1">C# Client</th><th colspan="1">Android Client</th><th colspan="1">Dart Client</th></tr><tr><td colspan="1">Compatibility</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">Base</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">Create and read docs</td><td colspan="1">{{#> callout type='tip' }}

[testCRUDSuite](https://github.com/nuxeo/nuxeo-features/blob/master/nuxeo-automation/nuxeo-automation-test/src/test/java/org/nuxeo/ecm/automation/server/test/RemoteAutomationClientTCK.java#L81-L127)

{{/callout}}</td><td colspan="1">{{#> callout type='tip' }}

[CRUD](https://github.com/tiry/nuxeo-automation-jsshell/blob/master/src/main/resources/web/nuxeo.war/scripts/test/automation-tests.js#L8-L84)

{{/callout}}</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">Pagination</td><td colspan="1">{{#> callout type='tip' }}

[testPaginationSuite](https://github.com/nuxeo/nuxeo-features/blob/master/nuxeo-automation/nuxeo-automation-test/src/test/java/org/nuxeo/ecm/automation/server/test/RemoteAutomationClientTCK.java#L129-L175)

{{/callout}}</td><td colspan="1">{{#> callout type='tip' }}

[Pagination](https://github.com/tiry/nuxeo-automation-jsshell/blob/master/src/main/resources/web/nuxeo.war/scripts/test/automation-tests.js#L86-L175)

{{/callout}}</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">Blobs</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">Direct Blob upload</td><td colspan="1">{{#> callout type='tip' }}

[testBlobSuite](https://github.com/nuxeo/nuxeo-features/blob/master/nuxeo-automation/nuxeo-automation-test/src/test/java/org/nuxeo/ecm/automation/server/test/RemoteAutomationClientTCK.java#L177-L247)

{{/callout}}</td><td colspan="1">{{#> callout type='tip' }}

[Blob](https://github.com/tiry/nuxeo-automation-jsshell/blob/master/src/main/resources/web/nuxeo.war/scripts/test/automation-tests.js#L86-L175) [Upload](https://github.com/tiry/nuxeo-automation-jsshell/blob/master/src/main/resources/web/nuxeo.war/scripts/test/automation-tests.js#L177-L241)

{{/callout}}</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">Blob upload via batch manager</td><td colspan="1">&nbsp;</td><td colspan="1">{{#> callout type='tip' }}

[Blob](https://github.com/tiry/nuxeo-automation-jsshell/blob/master/src/main/resources/web/nuxeo.war/scripts/test/automation-tests.js#L86-L175) [Upload Batch](https://github.com/tiry/nuxeo-automation-jsshell/blob/master/src/main/resources/web/nuxeo.war/scripts/test/automation-tests.js#L243-L320)

{{/callout}}</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">Blob update vua batch manager</td><td colspan="1">&nbsp;</td><td colspan="1">{{#> callout type='tip' }}

[Blob](https://github.com/tiry/nuxeo-automation-jsshell/blob/master/src/main/resources/web/nuxeo.war/scripts/test/automation-tests.js#L86-L175) [Update Batch](https://github.com/tiry/nuxeo-automation-jsshell/blob/master/src/main/resources/web/nuxeo.war/scripts/test/automation-tests.js#L366-L500)

{{/callout}}</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">Marshaling</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">Complex properties</td><td colspan="1">{{#> callout type='tip' }}

[testComplexPropSuite](https://github.com/nuxeo/nuxeo-features/blob/master/nuxeo-automation/nuxeo-automation-test/src/test/java/org/nuxeo/ecm/automation/server/test/RemoteAutomationClientTCK.java#L249-L295)

{{/callout}}</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">Custom marshaling</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">Business Objects</td><td colspan="1">{{#> callout type='tip' }}

[testBOSuite](https://github.com/nuxeo/nuxeo-features/blob/master/nuxeo-automation/nuxeo-automation-test/src/test/java/org/nuxeo/ecm/automation/server/test/RemoteAutomationClientTCK.java#L297-L319)

{{/callout}}</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">Convenience</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">Static checks</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">Working with documents</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">Background upload/download</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">Caching</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">Advanced Exception management</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">Advanced Authentication</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">Layout Management</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr></tbody></table>

## Running the Tests

### Client Side Code

The client side code depends on the following underlying technologies:

*   JUnit tests for Java client,
*   NUnit tests for .Net client,
*   HTML/JS for JavaScript client,
*   Python script for Python client,
*   JUnit for both Android clients (the nuxeo-android-connector and the deprecated nuxeo-automation-thin-client),
*   ? for PHP client,
*   ? for Dart client.

### Server Side Code

Compatibility tests have to be run against the lastest version of Nuxeo CAP.
For now, no specific additional module is required.

{{#> callout type='note' }}

Keep in mind that the tests do create document on the tested Nuxeo instance, don't run it against a production server otherwise you will end up with garbage in your repository since tests don't enforce cleanup.

{{/callout}}