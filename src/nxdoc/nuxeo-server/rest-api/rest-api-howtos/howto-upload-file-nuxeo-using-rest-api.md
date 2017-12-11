---
title: 'HOWTO: Upload a File in Nuxeo Using REST API'
review:
    comment: ''
    date: '2017-12-12'
    status: ok
details:
    howto:
        excerpt: Learn how to import a file using the Batch processing endpoint of the REST API.
        level: Advanced
        tool: Code
        topics: 'Import, REST API'
labels:
    - lts2016-ok
    - import
    - rest-api
    - troger
    - howto
    - upload
    - file-upload-component
    - university
    - excerpt
    - lts2017-ok
toc: true
version_override:
    LTS 2015: 710/nxdoc/how-to-upload-a-file-in-nuxeo-platform-using-rest-api-batch-processing-endpoint
    '6.0': 60/nxdoc/how-to-upload-a-file-in-nuxeo-platform-using-rest-api-batch-processing-endpoint/
confluence:
    ajs-parent-page-id: '13664833'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Upload+a+File+in+Nuxeo+Platform+Using+REST+API+Batch+Processing+Endpoint
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Upload+a+File+in+Nuxeo+Platform+Using+REST+API+Batch+Processing+Endpoint'
    page_id: '19793389'
    shortlink: 7QUuAQ
    shortlink_source: 'https://doc.nuxeo.com/x/7QUuAQ'
    source_link: /display/NXDOC/How+to+Upload+a+File+in+Nuxeo+Platform+Using+REST+API+Batch+Processing+Endpoint
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2016-08-30 12:28'
        message: ''
        version: '17'
    -
        author: Antoine Taillefer
        date: '2015-11-03 11:25'
        message: ''
        version: '16'
    -
        author: Bertrand Chauvin
        date: '2015-10-19 16:11'
        message: ''
        version: '15'
    -
        author: Bertrand Chauvin
        date: '2015-10-19 16:03'
        message: ''
        version: '14'
    -
        author: Bertrand Chauvin
        date: '2015-10-19 15:57'
        message: course title
        version: '13'
    -
        author: Bertrand Chauvin
        date: '2015-10-19 09:16'
        message: Added video
        version: '12'
    -
        author: Antoine Taillefer
        date: '2015-10-07 09:28'
        message: ''
        version: '11'
    -
        author: Antoine Taillefer
        date: '2015-10-06 16:21'
        message: ''
        version: '10'
    -
        author: Antoine Taillefer
        date: '2015-10-06 16:02'
        message: ''
        version: '9'
    -
        author: Antoine Taillefer
        date: '2015-10-06 14:31'
        message: ''
        version: '8'
    -
        author: Antoine Taillefer
        date: '2015-09-14 10:20'
        message: ''
        version: '7'
    -
        author: Antoine Taillefer
        date: '2015-09-14 10:17'
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

The Nuxeo Platform allows you to [upload binaries under a given "batch ID"]({{page page='batch-upload-endpoint'}}) on the server and then reference the batch ID when posting a document resource, or for fetching it from a custom Automation chain. For instance if you need to create a file with some binary content, first you have to upload the file into the `BatchManager`. It's a place on the system where you can upload temporary files to bind them later.

{{! /excerpt}}

There are two ways to upload a file:

1.  [In one go](#uploadingafileinonego): the full content of the file is transferred to the server as a binary stream in a single HTTP request. Such an upload is not resumable: in case of interruption you will need to start all over again.
2.  [In chunks](#uploadingafileinchunks): the file content is transferred to the server as several binary streams in separate HTTP requests. This upload is resumable: in case of interruption you will only need to upload the remaining chunks.

Before uploading any file or chunk you need to [initialize an upload batch](#batchinitialization).

## {{> anchor 'batchinitialization'}}Batch Initialization

```
POST http://NUXEO_SERVER/nuxeo/api/v1/upload/
```

Or with curl:

```
curl -u Administrator:Administrator -X POST http://NUXEO_SERVER/nuxeo/api/v1/upload
```

Response:

```
201 Created
{"batchId": myBatchId}
```

**Save this batch ID as it will be used in subsequent requests.**

## {{> anchor 'uploadingafileinonego'}}Uploading a File in One Go (not Resumable)

### File upload

```
POST http://NUXEO_SERVER/nuxeo/api/v1/upload/<myBatchId>/0
X-File-Name: myFile.doc
X-File-Type: application/msword
-----------------------
The content of the file
...
```

Or with curl:

```
curl -u Administrator:Administrator -H "X-File-Name:myFile.doc" -H "X-File-Type:application/msword" -F file=@myFile.doc http://NUXEO_SERVER/nuxeo/api/v1/upload/<myBatchId>/0
```

### Batch File Verification

You can verify that the file has actually been uploaded.

```
GET /api/v1/upload/<myBatchId>
```

Or with curl:

```
curl -u Administrator:Administrator -G http://NUXEO_SERVER/nuxeo/api/v1/upload/<myBatchId>
```

Response:

```
200 OK
[{"name": "myFile.doc", "size": 115090, "uploadType": "normal"}]
```

## {{> anchor 'uploadingafileinchunks'}}Uploading a File in Chunks (Resumable)

This upload allows you to:

*   Have a simple resume process that does not require starting the upload from the beginning to be able to access a specific byte.
*   Upload of the different chunks in parallel.

This is the standard approach, as described in the Google Drive API documentation, [Resumable Upload](https://developers.google.com/drive/web/manage-uploads#resumable).

Here is an example of the resumable upload of a file cut up into 5 chunks.

### {{> anchor 'uploadingchunkioutof5'}}Uploading Chunk `i` out of 5

This step will be repeated 5 times, one for each chunk. Let's just start with `<i>` = 0.

```
POST /api/v1/upload/<myBatchId>/0
X-Upload-Type: chunked
X-Upload-Chunk-Index: <i>
X-Upload-Chunk-Count: 5
X-File-Name: myFile.doc
X-File-Type: application/msword
X-File-Size: 115090
-----------------------
The content of the chunk
...
```

Or with curl:

```text
curl -u Administrator:Administrator -H "X-Upload-Type:chunked" -H "X-Upload-Chunk-Index:<i>" -H "X-Upload-Chunk-Count:5" -H "X-File-Name:myFile.doc" -H "X-File-Type:application/msword" -H "X-File-Size:115090" -F file=@<chunk_i> http://NUXEO_SERVER/nuxeo/api/v1/upload/<myBatchId>/0
```

Response: there are 3 cases here.

1.  The chunk has been uploaded but the file is incomplete, meaning some chunks are missing.

    ```
    308 Resume Incomplete
    {"batchId": myBatchId, "fileIdx": "0", "uploadType": "chunked", "uploadedSize": chunkSize, "uploadedChunkIds": [0, 1, 2], "chunkCount": 5}
    ```

    => Repeat the step [Uploading Chunk `i` out of 5](#uploadingchunkioutof5) with `X-Upload-Chunk-Index` = index of the next chunk to upload, the easiest being `<i + 1>`.
    At this point a request to [verify the chunk completion](#resumeaninterruptedupload) and determine the next chunk to upload can be made.

2.  The chunk has been uploaded and the file is now complete, meaning this was the last chunk to upload.

    ```
    201 Created
    {"batchId": myBatchId, "fileIdx": "0", "uploadType": "chunked", "uploadedSize": chunkSize, "uploadedChunkIds": [0, 1, 2, 3, 4], "chunkCount": 5}
    ```

    => **End of upload**.

3.  The request is interrupted or you recieve HTTP 503 Service Unavailable or any other 5xx response from the server, go to the [Resume an Interrupted Upload](#resumeaninterruptedupload) step.

### {{> anchor 'resumeaninterruptedupload'}}Resume an Interrupted Upload

Note the importance here of having saved the batch ID: it can be seen as a _resumable upload session ID_.

```
GET /api/upload/<myBatchId>/0
```

Or with curl:

```
curl -u Administrator:Administrator -G http://NUXEO_SERVER/nuxeo/api/v1/upload/<myBatchId>/0
```

Response: again there are 3 cases here.

1.  The file is incomplete.

    ```
    308 Resume Incomplete
    {"name": myFile.doc, "size": 115090, "uploadType": "chunked", "uploadedChunkIds": [0, 1, 2], "chunkCount": 5}
    ```

    => Repeat the step [Uploading Chunk `i` out of 5](#uploadingchunkioutof5) with `X-Upload-Chunk-Index` = index of the next chunk to upload, in this case 3.

2.  The file is now complete, meaning all chunks have been uploaded.
    This could happen if the connection broke after all bytes were uploaded but before the client received a response from the server.

    ```
    200 OK
    {"name": myFile.doc, "size": 115090, "uploadType": "chunked", "uploadedChunkIds": [0, 1, 2, 3, 4], "chunkCount": 5}
    ```

    => **End of upload**.

3.  The request is interrupted or you receive HTTP 503 Service Unavailable or any other 5xx response from the server, go to the [Resume an Interrupted Upload](#resumeaninterruptedupload) step.

### Best Practices

You should follow the [Best Practices](https://developers.google.com/drive/web/manage-uploads#best-practices) advised in the Google Drive API documentation about File Upload, especially the [Exponential backoff](https://developers.google.com/drive/web/manage-uploads#exp-backoff) strategy.

## Creating a Document from an Uploaded File

You can create a document of type File and attach to it a file uploaded to a given batch by using the specific syntax on the [`file:content`](http://filecontent) property.

**That fact that the file has been uploaded in one go or in chunks has no importance here.**

```text
POST /api/v1/path/default-domain/workspaces/myworkspace
{
  "entity-type": "document",
  "name":"myNewDoc",
  "type": "File",
  "properties" : {
    "dc:title":"My new doc",
    "file:content": {
      "upload-batch":"<myBatchId>",
      "upload-fileId":"0"
    }
  }
}
```

Or with curl:

```text
curl -X POST -H 'Content-Type: application/json' -u Administrator:Administrator -d '{"entity-type": "document", "name": "myNewDoc", "type": "File", "properties": {"dc:title": "My new doc", "file:content": {"upload-batch": "<myBatchId>", "upload-fileId": "0"}}}' http://NUXEO_SERVER/nuxeo/api/v1/path/default-domain/workspaces/myworkspace
```

Finally you now can access the content of your file by pointing to the following resource:

```text
GET /api/v1/path/default-domain/workspaces/myworkspace/myNewDoc/@blob/file:content
```
## Learn More

*   Follow the courses [Importing Files with the REST API](https://university.nuxeo.io/nuxeo/university/#!/course/working-with-nuxeo-platform-rest-api/importing-files-rest-api) and [Data Capture / REST API Import](https://university.nuxeo.com/learn/public/course/view/elearning/86/DataCapture) at [Nuxeo University](https://university.nuxeo.com).

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='REST API how-tos'}}

- [HOWTO: Nuxeo API Playground]({{page page='howto-nuxeo-api-playground'}})
- [Search Endpoints]({{page page='search-endpoints'}})
- [REST API HOWTOs]({{page page='rest-api-howtos'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Import how-tos'}}

- [How to Change the Default Document Type When Importing a File in the Nuxeo Platform?]({{page page='how-to-change-the-default-document-type-when-importing-a-file-in-the-nuxeo-platform'}})
- [How to Customize the Bulk Import Form]({{page page='how-to-customize-the-bulk-import-form'}})

{{/panel}}</div></div>
