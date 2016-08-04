---
title: >-
    How to Upload a File in Nuxeo Platform Using REST API Batch Processing
    Endpoint
details:
    howto:
        excerpt: >-
            Learn how to import a file using the Batch processing endpoint of
            the REST API.
        level: Advanced
        tool: Code
        topics: 'Import, REST API'
labels:
    - import
    - rest-api
    - howto
    - upload
    - file-upload-component
    - university
    - excerpt
toc: true
confluence:
    ajs-parent-page-id: '13664833'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: >-
        How+to+Upload+a+File+in+Nuxeo+Platform+Using+REST+API+Batch+Processing+Endpoint
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/How+to+Upload+a+File+in+Nuxeo+Platform+Using+REST+API+Batch+Processing+Endpoint
    page_id: '19793389'
    shortlink: 7QUuAQ
    shortlink_source: 'https://doc.nuxeo.com/x/7QUuAQ'
    source_link: >-
        /display/NXDOC/How+to+Upload+a+File+in+Nuxeo+Platform+Using+REST+API+Batch+Processing+Endpoint
history:
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
{{> wistia_video id='qokay4hw1i'}}

Extract from the course "[Working with the REST API](https://university.nuxeo.io/nuxeo/university/#!/course/working-with-nuxeo-platform-rest-api)" at [Nuxeo University](https://university.nuxeo.io)

&nbsp;

{{! excerpt}}

The Platform provides facilities for&nbsp;[uploading binaries under a given "batch id"]({{page page='blob-upload-for-batch-processing'}})&nbsp;on the server, and then to reference that batch id when posting a document resource, or for fetching it from a custom automation chain. For instance if you need to create a file with some binary content, first you have to upload the file into the BatchManager. It's a place on the system where you can upload temporary files to bind them later.

{{! /excerpt}}

There are two ways to upload a file:

1.  [In one go]({{page}}): the full content of the file is transferred to the server as a binary stream in a single HTTP request. Such an upload is not resumable: in case of interruption you will need to start all over again.
2.  [In chunks]({{page}}): the file content is transferred to the server as several binary streams in separate HTTP requests. Such an upload is resumable: in case of&nbsp;interruption you will only need to upload the remaining chunks.

Before uploading any file or chunk you need to [initialize an upload batch]({{page}}).

## Batch Initialization

```
POST /api/v1/upload/
```

Or with curl:

```
curl -u Administrator:Administrator -X POST http://<host>:<port>/nuxeo/api/v1/upload
```

Response:

```
201 Created
{"batchId": myBatchId}
```

**You need to save this batch id as it willl be used in subsequent requests.**

## Uploading a File in One Go (not Resumable)

### File upload

```
POST /api/v1/upload/<myBatchId>/0
X-File-Name: myFile.doc
X-File-Type: application/msword
-----------------------
The content of the file
...
```

Or with curl:

```
curl -u Administrator:Administrator -H "X-File-Name:myFile.doc" -H "X-File-Type:application/msword" -F file=@myFile.doc http://<host>:<port>/nuxeo/api/v1/upload/<myBatchId>/0
```

### Batch File Verification

You can verify that the file has actually been uploaded.

```
GET /api/v1/upload/<myBatchId>
```

Or with curl:

```
curl -u Administrator:Administrator -G http://<host>:<port>/nuxeo/api/v1/upload/<myBatchId>
```

Response:

```
200 OK
[{"name": "myFile.doc", "size": 115090, "uploadType": "normal"}]
```

## Uploading a File in Chunks (Resumable)

Such an upload allows:

*   To have a simple resume process that does not require to be able to access a specific byte.
*   To multiplex / parallelize the upload of the different chunks.

This is a standard approach, as very well described in the Google Drive API documentation about [Resumable Upload](https://developers.google.com/drive/web/manage-uploads#resumable).

Here is an example of a resumable upload of a file cut up into 5 chunks.

### Uploading Chunk i out of 5

This step will be repeated 5 times, one for each chunk. Let's just start with <i> = 0.

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

```
curl -u Administrator:Administrator -H "X-Upload-Type:chunked" -H "X-Upload-Chunk-Index:<i>" -H "X-Upload-Chunk-Count:5" -H "X-File-Name:myFile.doc" -H "X-File-Type:application/msword" -H "X-File-Size:115090" -F file=@<chunk_i> http://<host>:<port>/nuxeo/api/v1/upload/<myBatchId>/0
```

Response:&nbsp;there are 3 cases here.

1.  The chunk has been uploaded but the file is incomplete, meaning some chunks are missing.

    ```
    308 Resume Incomplete
    {"batchId": myBatchId, "fileIdx": "0", "uploadType": "chunked", "uploadedSize": chunkSize, "uploadedChunkIds": [0, 1, 2], "chunkCount": 5}
    ```

    => Repeat the step [Uploading Chunk i out of 5]({{page}})&nbsp;with `X-Upload-Chunk-Index`&nbsp;= index of the next chunk to upload, the easiest being <i + 1>.
    At this point a request to [know the chunk completion]({{page}}) and determine the next chunk to upload can be made.

2.  The chunk has been uploaded and the file is now complete, meaning this was the last chunk to upload.

    ```
    201 Created
    {"batchId": myBatchId, "fileIdx": "0", "uploadType": "chunked", "uploadedSize": chunkSize, "uploadedChunkIds": [0, 1, 2, 3, 4], "chunkCount": 5}
    ```

    => **End of upload**.

3.  The request is interrupted or you recieve HTTP 503 Service Unavailable or any other 5xx response from the server, go to the [Resume an Interrupted Upload]({{page}})&nbsp;step.

### Resume an Interrupted Upload

Note the importance here of having saved the batch id: it can be seen&nbsp;as a _resumable upload session id_.

```
GET /api/upload/<myBatchId>/0
```

Or with curl:

```
curl -u Administrator:Administrator -G http://<host>:<port>/nuxeo/api/v1/upload/<myBatchId>/0
```

Response:&nbsp;again there are 3 cases here.

1.  The file is incomplete.

    ```
    308 Resume Incomplete
    {"name": myFile.doc, "size": 115090, "uploadType": "chunked", "uploadedChunkIds": [0, 1, 2], "chunkCount": 5}
    ```

    => Repeat the step&nbsp;[Uploading Chunk i out of 5]({{page}})&nbsp;with&nbsp;`X-Upload-Chunk-Index`&nbsp;= index of the next chunk to upload, in this case 3.

2.  The file is now complete, meaning all chunks have been uploaded.
    This could happen if the connection broke after all bytes were uploaded but before the client received a response from the server.

    ```
    200 OK
    {"name": myFile.doc, "size": 115090, "uploadType": "chunked", "uploadedChunkIds": [0, 1, 2, 3, 4], "chunkCount": 5}
    ```

    => **End of upload**.

3.  The request is interrupted or you recieve HTTP 503 Service Unavailable or any other 5xx response from the server,&nbsp;go to the&nbsp;[Resume an Interrupted Upload]({{page}})&nbsp;step.

### Best Practices

You should follow the [Best Practices](https://developers.google.com/drive/web/manage-uploads#best-practices) advised in the Google Drive API documentation about File Upload, especially the [Exponential backoff](https://developers.google.com/drive/web/manage-uploads#exp-backoff) strategy.

## Creating a Document from an Uploaded File

You can create a document of type File and attach to it a file uploaded to a given batch by using the specific syntax on the&nbsp;[`file:content`](http://filecontent)&nbsp;property.

**That fact that the file has been uploaded in one go or in chunks has no incidence here.**

```
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

```
curl -X POST -H 'Content-Type: application/json' -u Administrator:Administrator -d '{"entity-type": "document", "name": "myNewDoc", "type": "File", "properties": {"dc:title": "My new doc", "file:content": {"upload-batch": "<myBatchId>", "upload-fileId": "0"}}}' http://<host>:<port>/nuxeo/api/v1/path/default-domain/workspaces/myworkspace
```

Finally you now can access the content of your file by pointing to the following resource:

```
GET /api/v1/path/default-domain/workspaces/myworkspace/myNewDoc/@blob/file:content
```

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='REST API how-tos'}}

&nbsp;

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Import how-tos'}}

&nbsp;

{{/panel}}</div></div>