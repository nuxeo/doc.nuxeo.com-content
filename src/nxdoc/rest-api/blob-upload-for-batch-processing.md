---
title: Blob Upload for Batch Processing
review:
    comment: ''
    date: ''
    status: ok
labels:
    - upload
    - blob
    - lts2015-ok
    - file-upload-component
    - todo
    - automation
    - university
toc: true
version_override:
    'FT': '/nxdoc/batch-upload-endpoint'
    'LTS 2016': 810/nxdoc/batch-upload-endpoint
confluence:
    ajs-parent-page-id: '28475677'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Blob+Upload+for+Batch+Processing
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Blob+Upload+for+Batch+Processing'
    page_id: '28475691'
    shortlink: K4GyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/K4GyAQ'
    source_link: /display/NXDOC710/Blob+Upload+for+Batch+Processing
tree_item_index: 1100
history:
    -
        author: Manon Lumeau
        date: '2016-03-09 15:04'
        message: ''
        version: '31'
    -
        author: Antoine Taillefer
        date: '2015-12-09 13:59'
        message: ''
        version: '30'
    -
        author: Antoine Taillefer
        date: '2015-11-03 16:07'
        message: ''
        version: '29'
    -
        author: Antoine Taillefer
        date: '2015-11-03 10:52'
        message: ''
        version: '28'
    -
        author: Bertrand Chauvin
        date: '2015-10-19 16:10'
        message: ''
        version: '27'
    -
        author: Bertrand Chauvin
        date: '2015-10-19 16:02'
        message: ''
        version: '26'
    -
        author: Bertrand Chauvin
        date: '2015-10-19 15:56'
        message: course title
        version: '25'
    -
        author: Bertrand Chauvin
        date: '2015-10-19 09:18'
        message: Added video
        version: '24'
    -
        author: Antoine Taillefer
        date: '2015-10-06 16:32'
        message: ''
        version: '23'
    -
        author: Antoine Taillefer
        date: '2015-10-06 16:29'
        message: ''
        version: '22'
    -
        author: Antoine Taillefer
        date: '2015-10-06 12:19'
        message: ''
        version: '21'
    -
        author: Antoine Taillefer
        date: '2015-10-06 12:10'
        message: ''
        version: '20'
    -
        author: Antoine Taillefer
        date: '2015-10-06 11:56'
        message: ''
        version: '19'
    -
        author: Antoine Taillefer
        date: '2015-10-06 10:08'
        message: ''
        version: '18'
    -
        author: Antoine Taillefer
        date: '2015-10-06 09:53'
        message: ''
        version: '17'
    -
        author: Antoine Taillefer
        date: '2015-10-06 09:40'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2015-08-31 13:50'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2013-09-25 14:53'
        message: Removed related topics from TOC
        version: '14'
    -
        author: Solen Guitter
        date: '2013-09-23 13:36'
        message: ''
        version: '13'
    -
        author: Alain Escaffre
        date: '2013-09-17 03:34'
        message: ''
        version: '12'
    -
        author: Alain Escaffre
        date: '2013-09-17 03:02'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2013-08-30 12:23'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2013-07-17 15:05'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2013-07-03 15:19'
        message: >-
            Reported changes from 5.6 documentation on Content-Type and
            Content-Length headers and fileIdx parameter.
        version: '8'
    -
        author: Solen Guitter
        date: '2013-07-01 11:15'
        message: Fixed typos
        version: '7'
    -
        author: Thierry Delprat
        date: '2013-06-26 17:57'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-06-04 10:01'
        message: ''
        version: '5'
    -
        author: Thierry Delprat
        date: '2013-06-03 20:31'
        message: ''
        version: '4'
    -
        author: Thierry Delprat
        date: '2013-06-03 20:08'
        message: ''
        version: '3'
    -
        author: Thierry Delprat
        date: '2013-06-03 20:02'
        message: ''
        version: '2'
    -
        author: Thierry Delprat
        date: '2013-06-03 19:54'
        message: ''
        version: '1'

---
{{> wistia_video id='qokay4hw1i'}}

Extract from the course "[Working with the REST API](https://university.hyland.com/courses/e4138)" on [Hyland University](https://university.hyland.com)

## Motivations

{{! excerpt}}

The default way Automation deals with Blobs is to use the standard HTTP MultiPart Encoding.

This strategy can not fit when:

{{! /excerpt}}

*   Your client does not natively support multipart encoding;
    Ex: JavaScript (without using a Form), Android SDK 2.x.
*   You have several files to send, but prefer to send them as separated chunks;
    Ex: You have an HTTP proxy that will limit POST size.
*   You want to upload files as soon as possible and then run the operation when everything has been uploaded on the server;
    Ex: You upload pictures you select from a mobile device.

## Uploading Files

{{#> callout type='info' }}

Since Nuxeo 7.4 the batch upload API has changed to be exposed as a REST resource endpoint.
The old API using `/site/automation/batch/upload` is deprecated but kept for backward compatibility.

{{/callout}}

### Batch Initialization

Before uploading any file you need to initialize a batch, even if there is only one file to upload.

```
POST /api/v1/upload/
```

This request returns a 201 _CREATED_  status code with the following JSON data:

```
{"batchId": batchId}
```

**This handshake phase is mandatory to acquire a server-side generated batch id to be used in subsequent requests as part of the REST resource path.**

The batch id can be seens as an upload session id, especially for a [resumable upload]({{page page='how-to-upload-a-file-in-nuxeo-platform-using-rest-api-batch-processing-endpoint#uploadingafileinchunks'}}).

### Uploading a File

You can do a simple POST with the payload containing your file, yet we also support multipart encoded upload.

```
POST /api/v1/upload/{batchId}/{fileIdx}
```

The `batchId` is the batch identifier, you need to use the one returned by the batch initialization request, otherwise you will get a 404 _Not Found_ status code.

The `fileIdx` is the index of the file inside the batch, it is here to later reference the file by its index and also to keep track of the client side ordering, because the order the server receives the files may not be the same.

The batch identifier should be common to all the files you want to upload and attach to the same batch.

You also need to set some custom HTTP headers:

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Header name</th><th colspan="1">Description</th></tr><tr><td colspan="1">`X-File-Name`</td><td colspan="1">Name of the file</td></tr><tr><td colspan="1">`X-File-Type`</td><td colspan="1">Mime type of the file</td></tr><tr><td colspan="1">`Content-Type`</td><td colspan="1">Should be set to `application/octet-stream`</td></tr><tr><td colspan="1">`Content-Length`</td><td colspan="1">Size of the file in bytes, required if your HTTP client doesn't add this header, typically the Nuxeo [JavaScript Client]({{page page='javascript-client'}})</td></tr></tbody></table></div>

Returns a 201 _CREATED_ status code with the following JSON data:

```
{"batchId": batchId, "fileIdx": fileIdx, "uploadType": "normal", "uploadedSize": xxx}
```

The value of the  `uploadType` field is `normal` by default, it can be `chunked` if the file was [uploaded by chunks](#uploadingafilebychunks).

{{#> callout type='info' heading='About the file storage implementation'}}

The files uploaded to the batch are stored on a temporary disk space until the batch is executed or dropped.

For this purpose the batch upload relies on the default [Transient Store](/x/AQalAQ) that stores the uploaded files inside `${nuxeo.data.dir}/transientstores/default`).

{{/callout}}

### Getting Information about the Batch Files

```
GET /api/v1/upload/{batchId}
```

Returns a 200 _OK_ status code if the batch contains at least one file and a 204 _No Content_ status code if the batch doesn't contain any file.
JSON response data:

```
[{"name": file1, "size": yyy, "uploadType": "normal"}, {"name": file2, "size": zzz, "uploadType": "normal"}]
```

### Getting Information about a Specific Batch File

```
GET /api/v1/upload/{batchId}/{fileIdx}
```

Returns a 200 _OK_ status code if the batch contains a file with the given index and a 404 _Not Found_ status code otherwise.
JSON response data:

```
{"name": xxx, "size": yyy, "uploadType": "normal"}
```

### Dropping a Batch

```
DELETE /api/v1/upload/{batchId}
```

Returns a 200 _OK_  status code with the following JSON data:

```
{"batchId": batchId, "dropped": "true"}
```

Executing a batch will automatically remove it.

## {{> anchor 'uploadingafilebychunks'}}Uploading a File by Chunks

[Resumable upload]({{page page='how-to-upload-a-file-in-nuxeo-platform-using-rest-api-batch-processing-endpoint#uploadingafileinchunks'}}) became a requirement otherwise uploading large files over a broken connection could take days.

Using chunking is a good idea since:

*   It allows to manage upload resume with enough granularity (_restart with chunk x_).
*   It allows multiplexing (_upload on multiple TCP streams_)
*   It allows to overcome the limitations of some reverse proxies (_limits the risk of having a POST considered as too big_).

### Uploading a Chunk

As for uploading a whole file, you can do a simple POST with the payload containing your chunk.

```
POST /api/v1/upload/{batchId}/{fileIdx}
```

The `batchId` and `fileIdx` serve the same purpose as for uploading a whole file. They should be common to all the chunks you want to upload for a given file in the batch.

You need to set the same HTTP headers as for a whole file, adding some extra ones:

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Header name</th><th colspan="1">Description</th></tr><tr><td colspan="1">`X-Upload-Type`</td><td colspan="1">`chunked`</td></tr><tr><td colspan="1">`X-Upload-Chunk-Index`</td><td colspan="1">Index of the chunk</td></tr><tr><td colspan="1">`X-Upload-Chunk-Count`</td><td colspan="1">Total chunk count</td></tr><tr><td colspan="1">`X-File-Name`</td><td colspan="1">Name of the file</td></tr><tr><td colspan="1">`X-File-Size`</td><td colspan="1">Size of the file in bytes</td></tr><tr><td colspan="1">`X-File-Type`</td><td colspan="1">Mime type of the file</td></tr><tr><td colspan="1">`Content-Type`</td><td colspan="1">Should be set to `application/octet-stream`</td></tr><tr><td colspan="1">`Content-Length`</td><td colspan="1">Size of the chunk in bytes, required if your HTTP client doesn't add this header, typically the Nuxeo [JavaScript Client]({{page page='javascript-client'}})</td></tr></tbody></table></div>

`X-Upload-Chunk-Index` must be the number of the chunk in the ordered list of chunks, starting from 0.

For instance if the file is made of 5 chunks you will send 5 requests with the following headers and `i` between 0 and 4:

*   `X-Upload-Chunk-Index: i`

*   `X-Upload-Chunk-Count: 5`

Optionally depending on the HTTP client you are using you might need to add the `Content-Length` header to specify the size of the chunk in bytes.

As for a file uploaded in one go, the chunks attached to the batch are stored on a temporary disk storage until the batch is executed or dropped.

Returns a 201 _CREATED_ status code for a complete chunked file and a 308 _Resume Incomplete_ status code for an incomplete chunked file.

JSON response data:

```
{"batchId": batchId, "fileIdx": fileIdx, "uploadType": "chunked", "uploadedSize": xxx, "uploadedChunkIds": [0, 1, 2], "chunkCount": 5}
```

### Getting Information about a Chunked File

```
GET /api/v1/upload/{batchId}/{fileIdx}
```

Returns a 200 _OK_ status code for a complete chunked file and a 308 _Resume Incomplete_ status code for an incomplete chunked file.

**It is this specific 308 _Resume Incomplete_ status code that lets you know that you either need to upload the missing chunks or to resume an interrupted file upload.**

If the batch doesn't contain any file with the given index, returns a 404 _Not Found_ status code.

JSON response data:

```
{"name": xxx, "size": yyy, "uploadType": "chunked", "uploadedChunkIds": [0, 1, 2, 4], "chunkCount": 5}
```

## Using Files From a Batch

### Batch Execute

You can execute an automation chain or an automation operation using the blobs associated to a batch as input.

To place the blobs as input, call a specific batch operation by passing the `operationId` and `batchId` path parameters:

```
POST /api/v1/upload/{batchId}/execute/{operationId}
Accept: application/json+nxentity, */*
Content-Type: application/json+nxrequest; charset=UTF-8
X-NXDocumentProperties: *
```

```
{"params":{"operationParam":"value", ...},"context":{...}}
```

Optionally you can use the `fileIdx` path parameter to specify the index of the file inside the batch that you want to use as input of the chain or operation to execute.

```
POST /api/v1/upload/{batchId}/{fileIdx}/execute/{operationId}
```

This way of calling automation operation is actually used in the default UI to manage Drag&Drop:

1.  Files are progressively uploaded to the server:

    *   You can drop several sets of files,
    *   There is a maximum number of concurrent uploads.
2.  When upload is finished you can select the operation or chain to execute.

More info about [Drag and Drop configuration]({{page page='drag-and-drop-service-for-content-capture-html5-based'}}).

### Referencing a Blob From a Batch

An other option is to reference the file within the batch to create input parameters of an operation.

For that you can add a parameter of type `properties` that will automatically be resolved to the correct blob if the provided properties are the correct ones:

```
type = blob
length = 657656
mime-type = application/pdf
name = myfile.pdf
upload-batch = batchId-50b2ccb2-ce69-4fdc-b24e-b4ea8c155a05
upload-fileId = myfile.pdf
```

When using Java automation client, this would look like:

```
PropertyMap blobProp = new PropertyMap();
blobProp.set("type", "blob");
blobProp.set("length", new Long(blobUploading.getLength()));
blobProp.set("mime-type", blobUploading.getMimeType());
blobProp.set("name", blobToUpload.getFileName());
// set information for server side Blob mapping
blobProp.set("upload-batch", batchId);
blobProp.set("upload-fileId", blobUploading.getFileName());
```

### Referencing a Blob from a JSON Document Resource

You can use the `batchId` property for blob in the JSON document you're sending to the REST API.

```
{
    "entity-type": "document",
    "repository": "default",
    "uid": "531d9636-46c2-497d-996b-1ae7a8f43e89",
    "path": "/default-domain",
    "type": "Domain",
    "state": "project",
    "versionLabel": "",
    "title": "Default domain",
    "lastModified": "2013-09-06T08:53:10.00Z",
    "properties": {
        "file:content": {
             "upload-batch":"batchId-50b2ccb2-ce69-4fdc-b24e-b4ea8c155a05",
             "upload-fileId":"0" // referencing the first file of the batch
         }
     },
    "facets": [
        "SuperSpace",
        "Folderish"
    ],
    "changeToken": "1378457590000",
    "contextParameters": {}
}
```

### Java API
