---
title: >-
    How to Upload a File in Nuxeo Platform Using REST API Batch Processing
    Endpoint
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: >-
            Learn how to import a file using the Batch processing endpoint of
            the REST API.
        level: Advanced
        tool: Code
        topics: 'Import, REST API'
labels:
    - howto
    - import
    - rest-api
version_override:
    'FT': 'nxdoc/howto-upload-file-nuxeo-using-rest-api'
confluence:
    ajs-parent-page-id: '22380745'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: >-
        How+to+Upload+a+File+in+Nuxeo+Platform+Using+REST+API+Batch+Processing+Endpoint
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/How+to+Upload+a+File+in+Nuxeo+Platform+Using+REST+API+Batch+Processing+Endpoint
    page_id: '22380872'
    shortlink: SIFVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/SIFVAQ'
    source_link: >-
        /display/NXDOC60/How+to+Upload+a+File+in+Nuxeo+Platform+Using+REST+API+Batch+Processing+Endpoint
tree_item_index: 1000
history:
    -
        author: Solen Guitter
        date: '2016-08-30 12:26'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2015-09-15 08:20'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-12-01 21:45'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2014-09-08 17:53'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-09-08 14:47'
        message: Add related how-tos
        version: '3'
    -
        author: Solen Guitter
        date: '2014-07-18 12:25'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-07-03 01:07'
        message: ''
        version: '1'

---
{{! excerpt}}

The Platform provides facilities for [uploading binaries under a given "batch id"]({{page page='blob-upload-for-batch-processing'}}) on the server, and then to reference that batch id when posting a document resource, or for fetching it from a custom automation chain. For instance if you need to create a file with some binary content, first you have to upload the file into the batchManager. It's a place on the system where you can upload temporary files to bind them later.

{{! /excerpt}}

1.  For that you have to generate yourself a `batchId`, which will identify the batch : let's say `mybatchid`.

    ```text
    POST http://localhost:8080/nuxeo/api/v1/automation/batch/upload
    X-Batch-Id: mybatchid
    X-File-Idx:0
    X-File-Name:myFile.zip
    -----------------------
    The content of the file
    ```

    Or with curl:

    ```text
    curl -H "X-Batch-Id: mybatchid" -H "X-File-Idx:0" -H "X-File-Name:Sites.zip" -F file=@Sites.zip -u Administrator:Administrator http://localhost:8080/nuxeo/site/automation/batch/upload
    ```

2.  You may verify the content of your batch with the following request.

    ```text
    GET http://localhost:8080/nuxeo/site/automation/batch/files/mybatchid
    [{"name":"Sites.zip","size":115090}]
    ```

3.  Next you have to create a document of type File and attach the Blob to it by using the specific syntax on the `file:content` property.

    ```text
    POST http://localhost:8080/nuxeo/api/v1/path/default-domain/workspaces/myworkspace
    {  
      "entity-type": "document",
      "name":"myNewDoc",
      "type": "File",  
      "properties" : {
        "dc:title":"My new doc",
        "file:content": {
          "upload-batch":"mybatchid",
          "upload-fileId":"0"
        }
      }
    }
    ```

    Or with curl:

    ```text
    curl -X POST -H 'Content-Type: application/json' -u Administrator:Administrator -d '{"entity-type": "document", "name": "myNewDoc", "type": "File", "properties": {"dc:title": "My new doc", "file:content": {"upload-batch": "mybatchid", "upload-fileId": "0"}}}' http://localhost:8080/nuxeo/api/v1/path/default-domain/workspaces/myworkspace
    ```

4.  Finally you now can access the content of your file by pointing to the following resource:

    ```text
    GET http://localhost:8080/nuxeo/api/v1/path/default-domain/workspaces/myworkspace/myNewDoc/@blob/file:content
    ```

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='REST API how-tos'}}

- [Use Nuxeo API Playground to Discover the API]({{page page='use-nuxeo-api-playground-to-discover-the-api'}})
- [Query Endpoint]({{page page='query-endpoint'}})
- [REST API How-To Index]({{page page='rest-api-how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Import how-tos'}}

- [How to Change the Default Document Type When Importing a File in the Nuxeo Platform?]({{page page='how-to-change-the-default-document-type-when-importing-a-file-in-the-nuxeo-platform'}})
- [How to Customize the Bulk Import Form]({{page page='how-to-customize-the-bulk-import-form'}})

{{/panel}}</div></div>
