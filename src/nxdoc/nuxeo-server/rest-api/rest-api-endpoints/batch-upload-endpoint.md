---
title: Batch Upload Resource Endpoint
review:
    comment: ''
    date: '2017-12-28'
    status: ok
labels:
    - lts2016-ok
    - automation
    - ataillefer
    - blob
    - upload
    - todo
    - file-upload-component
    - university
    - excerpt
    - lts2017-ok
toc: true
version_override:
    LTS 2015: 710/nxdoc/blob-upload-for-batch-processing/
    '6.0': 60/nxdoc/blob-upload-for-batch-processing/
confluence:
    ajs-parent-page-id: '13664833'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Blob+Upload+for+Batch+Processing
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Blob+Upload+for+Batch+Processing'
    page_id: '14254649'
    shortlink: OYLZ
    shortlink_source: 'https://doc.nuxeo.com/x/OYLZ'
    source_link: /display/NXDOC/Blob+Upload+for+Batch+Processing
tree_item_index: 400
history:
    -
        author: Gabriel Barata
        date: '2016-10-07 17:35'
        message: 'hanged "Dropping a Batch" and added "Deleting a File from a Batch"'
        version: '32'
    -
        author: Antoine Taillefer
        date: '2016-03-08 13:04'
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
        message: Reported changes from 5.6 documentation on Content-Type and Content-Length headers and fileIdx parameter.
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

{{! excerpt}}

This endpoint allows to upload a batch of files to a Nuxeo server. The uploaded files can then be used as the input of an Automation operation or a property of a document through the REST API.

{{! /excerpt}}
{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Nuxeo REST API Import](https://university.nuxeo.com/learn/public/course/view/elearning/91/nuxeo-rest-api-import).
![]({{file name='university-rest-api-importer.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}
## Batch Upload Endpoint

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th>Path</th>
        <th>Description</th>
      </tr>
      <tr>
        <th colspan="2">Uploading a File</th>
      </tr>
      <tr>
        <td>GET `/api/v1/upload/handlers`</td>
        <td>Lists all registered batch upload handlers</td>
      </tr>
      <tr>
        <td>POST `/api/v1/upload/new/{handler}`</td>
        <td>Initializes a new batch associated with the specified handler</td>
      </tr>
      <tr>
        <td>POST `/api/v1/upload/{batchId}/{fileIdx}`</td>
        <td>Uploads a file (see below for details on the [necessary headers](#uploading-a-file))</td>
      </tr>
      <tr>
        <td>POST `/api/v1/upload/{batchId}/{fileIdx}/complete`</td>
        <td>Notifies Batch Upload Handler that a file has been uploaded, JSON structure down below</td>
      </tr>
      <tr>
        <td>GET `/api/v1/upload/{batchId}`</td>
        <td>Gets information about a batch file</td>
      </tr>
      <tr>
        <td>GET `/api/v1/upload/{batchId}/info`</td>
        <td>Gets JSON structured information about a batch file</td>
      </tr>
      <tr>
        <td>GET `/api/v1/upload/{batchId}/complete`</td>
        <td>Notifies the Upload Handler that an upload was complete (not used in default handler)</td>
      </tr>
      <tr>
        <td>GET `/api/v1/upload/{batchId}/{fileIdx}`</td>
        <td>Gets information about a specific batch file</td>
      </tr>
      <tr>
        <td>DELETE `/api/v1/upload/{batchId}`</td>
        <td>Drops a batch</td>
      </tr>
      <tr>
        <td>DELETE `/api/v1/upload/{batchId}/{fileId}`</td>
        <td>Deletes a file from a batch</td>
      </tr>
      <tr>
        <th colspan="2">Uploading a File in Chunks</th>
      </tr>
      <tr>
        <td>POST `/api/v1/upload/{batchId}/{fileIdx}`</td>
        <td>Uploads a chunk (see below for details on the [necessary headers](#uploading-a-chunk))</td>
      </tr>
      <tr>
        <td>GET `/api/v1/upload/{batchId}/{fileIdx}`</td>
        <td>Gets information about a chunked file</td>
      </tr>
      <tr>
        <th colspan="2">Using File from a Batch</th>
      </tr>
      <tr>
        <td>POST `/api/v1/upload/{batchId}/execute/{operationId}`</td>
        <td>Executes an Automation chain or operation using the blobs associated to a batch as input</td>
      </tr>
      <tr>
        <td>POST `/api/v1/upload/{batchId}/{fileIdx}/execute/{operationId}`</td>
        <td>Executes an Automation chain or operation using a specific file inside the batch as input</td>
      </tr>
      <tr>
        <th colspan="2">Deprecated Endpoints (Maintained for Historical reasons)</th>
      </tr>
      <tr>
        <td>POST `/api/v1/upload/`</td>
        <td>Initializes a batch with the default handler</td>
      </tr>
    </tbody>
  </table>
</div>

## Uploading Files

### Batch Initialization


Before uploading any file, you need to initialize a batch, even if there is only one file to upload.

This handshake phase is mandatory to acquire a server-side generated batch ID to be used in subsequent requests as part of the REST resource path.

```
POST http://NUXEO_SERVER/nuxeo/api/v1/upload/
```

This request returns a 201 CREATED status code with the following JSON data:

```javascript
{"batchId": batchId}
```

The batch id can be seen as an upload session id, especially for a [resumable upload]({{page page='howto-upload-file-nuxeo-using-rest-api'}}#-anchor-uploadingafileinchunks-uploading-a-file-in-chunks-resumable-).

#### Batch Upload Handler Architecture
Example for Amazon Web Services S3

![]({{file name='s3-direct-batch-upload.png'}})

  1. Client initiates batch
  2. Request Temporary Credentials and S3 Data
  3. Upload file to S3 Bucket
  4. POST file information to Nuxeo
  5. Attach to Document

#### Using a Different Upload Handler

On batch initialization you call:

```
POST http://NUXEO_SERVER/nuxeo/api/v1/upload/<provider>
```

This will associate all the upload mechanism to this specific provider. We recommend reading documentation regarding the specified provider. To upload several files using different providers, you need to use different batches with different providers.


### Uploading a File {{> anchor 'uploading-a-file'}}

You can do a simple POST with the payload containing your file, but a multipart encoded upload is also supported.

```
POST http://NUXEO_SERVER/nuxeo/api/v1/upload/{batchId}/{fileIdx}
```

The `batchId` is the batch identifier. You need to use the one returned by the batch initialization request, otherwise you will get a 404 Not Found status code.

The `fileIdx` is the index of the file inside the batch. The file can be referenced later with this index and it keeps track of the client-side ordering, since the order in which the server receives the files may not be the same.

The batch identifier should be common to all the files you want to upload and attach to the same batch.

You also need to set some custom HTTP headers:

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th colspan="1">Header name</th>
        <th colspan="1">Description</th>
      </tr>
      <tr>
        <td colspan="1">`X-File-Name`</td>
        <td colspan="1">The name of the file</td>
      </tr>
      <tr>
        <td colspan="1">`X-File-Type`</td>
        <td colspan="1">The mime type of the file</td>
      </tr>
      <tr>
        <td colspan="1">`Content-Type`</td>
        <td colspan="1">Should be set to `application/octet-stream`</td>
      </tr>
      <tr>
        <td colspan="1">`Content-Length`</td>
        <td colspan="1">
          The size of the file in bytes, required if your HTTP client doesn't add this header, typically the Nuxeo [JavaScript Client]({{page page='javascript-client'}})
        </td>
      </tr>
    </tbody>
  </table>
</div>

Returns a 201 CREATED status code with the following JSON data:

```javascript
{"batchId": batchId, "fileIdx": fileIdx, "uploadType": "normal", "uploadedSize": xxx}
```

The value of the `uploadType` field is `normal` by default, it can be `chunked` if the file was [uploaded in chunks](#uploading-a-file-in-chunks).


### Getting Information about the Batch Files

Two options are available:
```
GET http://NUXEO_SERVER/nuxeo/api/v1/upload/{batchId}
```

Returns a 200 OK status code if the batch contains at least one file and a 204 No Content status code if the batch doesn't contain any file.

JSON response data:

```javascript
[{"name": file1, "size": yyy, "uploadType": "normal"}, {"name": file2, "size": zzz, "uploadType": "normal"}]
```

**Or**

```
GET http://NUXEO_SERVER/nuxeo/api/v1/upload/{batchId}/info
```

Returns a 200 OK status code everytime and contains a structured JSON Object with batch information.

JSON response data:

```javascript
{ "batchId": "<batchId>", "provider": "default", "fileEntries": [{"name": file1, "size": yyy, "uploadType": "normal"}, {"name": file2, "size": zzz, "uploadType": "normal"}] }

```

### Getting Information about a Specific Batch File

```
GET http://NUXEO_SERVER/nuxeo/api/v1/upload/{batchId}/{fileIdx}
```

Returns a 200 OK status code if the batch contains a file with the given index and a 404 Not Found status code otherwise.

JSON response data:

```javascript
{"name": xxx, "size": yyy, "uploadType": "normal"}
```

### Dropping a Batch

```
DELETE http://NUXEO_SERVER/nuxeo/api/v1/upload/{batchId}
```

Returns a 204 No Content status code with the following JSON data:

```javascript
{"batchId": batchId, "dropped": "true"}
```

By default, executing a batch will automatically remove it. You can prevent this behavior by executing it with the header `X-Batch-No-Drop` set to `true`. In such a case, you have to take care of dropping the batch manually after you're done with it.

### Deleting a File from a Batch

```
DELETE http://NUXEO_SERVER/nuxeo/api/v1/upload/{batchId}/{fileIdx}
```

Returns a 204 No Content and removes the file from the batch.

## Uploading a File in Chunks {{> anchor 'uploading-a-file-in-chunks'}}

Using a [resumable upload]({{page page='howto-upload-file-nuxeo-using-rest-api'}}#-anchor-uploadingafileinchunks-uploading-a-file-in-chunks-resumable-) is useful otherwise uploading large files over a broken connection could take days.

Chunking is a good idea because:

*   It allows you to manage upload resumption with enough granularity (restart with chunk x).
*   It allows multiplexing (upload on multiple TCP streams)
*   It allows you to overcome the limitations of some reverse proxies (limits the risk of having a POST considered as too big).

### Uploading a Chunk {{> anchor 'uploading-a-chunk'}}

As for uploading a whole file, you can do a simple POST with the payload containing your chunk.

```
POST http://NUXEO_SERVER/nuxeo/api/v1/upload/{batchId}/{fileIdx}
```

The `batchId` and `fileIdx` serve the same purpose as for uploading a whole file. They should be common to all the chunks you want to upload for a given file in the batch.

You need to set the same HTTP headers as for a whole file, adding some extra ones:

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th colspan="1">Header name</th>
        <th colspan="1">Description</th>
      </tr>
      <tr>
        <td colspan="1">`X-Upload-Type`</td>
        <td colspan="1">`chunked`</td>
      </tr>
      <tr>
        <td colspan="1">`X-Upload-Chunk-Index`</td>
        <td colspan="1">Index of the chunk</td>
      </tr>
      <tr>
        <td colspan="1">`X-Upload-Chunk-Count`</td>
        <td colspan="1">Total chunk count</td>
      </tr>
      <tr>
        <td colspan="1">`X-File-Name`</td>
        <td colspan="1">Name of the file</td>
      </tr>
      <tr>
        <td colspan="1">`X-File-Size`</td>
        <td colspan="1">Size of the file in bytes</td>
      </tr>
      <tr>
        <td colspan="1">`X-File-Type`</td>
        <td colspan="1">Mime type of the file</td>
      </tr>
      <tr>
        <td colspan="1">`Content-Type`</td>
        <td colspan="1">Should be set to `application/octet-stream`</td>
      </tr>
      <tr>
        <td colspan="1">`Content-Length`</td>
        <td colspan="1">
          Size of the chunk in bytes, required if your HTTP client doesn't add this header, typically the Nuxeo [JavaScript Client]({{page page='javascript-client'}})
        </td>
      </tr>
    </tbody>
  </table>
</div>

`X-Upload-Chunk-Index` must be the number of the chunk in the ordered list of chunks, starting from 0.

For instance if the file is made of 5 chunks you will send 5 requests with the following headers and `i` between 0 and 4:

*   `X-Upload-Chunk-Index: i`

*   `X-Upload-Chunk-Count: 5`

Optionally depending on the HTTP client you are using you might need to add the `Content-Length` header to specify the size of the chunk in bytes.

For a file uploaded in one go, the chunks attached to the batch are stored on temporary disk storage until the batch is executed or dropped.

Returns a 201 CREATED status code for a complete chunked file and a 308 Resume Incomplete status code for an incomplete chunked file.

JSON response data:

```javascript
{"batchId": batchId, "fileIdx": fileIdx, "uploadType": "chunked", "uploadedSize": xxx, "uploadedChunkIds": [0, 1, 2], "chunkCount": 5}
```

### Getting Information about a Chunked File

```
GET http://NUXEO_SERVER/nuxeo/api/v1/upload/{batchId}/{fileIdx}
```

Returns a 200 OK status code for a complete chunked file and a 308 Resume Incomplete status code for an incomplete chunked file. It is this specific 308 Resume Incomplete status code that lets you know that you either need to upload the missing chunks or to resume an interrupted file upload.

If the batch doesn't contain any file with the given index, returns a 404 Not Found status code.

JSON response data:

```javascript
{"name": xxx, "size": yyy, "uploadType": "chunked", "uploadedChunkIds": [0, 1, 2, 4], "chunkCount": 5}
```

## Using Files From a Batch

### Batch Execute

You can execute an Automation chain or an Automation operation using the blobs associated to a batch as input.

To place the blobs as input, call a specific batch operation by passing the `operationId` and `batchId` path parameters:

```
POST http://NUXEO_SERVER/nuxeo/api/v1/upload/{batchId}/execute/{operationId}
Accept: application/json, */*
Content-Type: application/json; charset=UTF-8
```

```javascript
{"params": {"operationParam": "value", ...}, "context": {...}}
```

Optionally you can use the `fileIdx` path parameter to specify the index of the file inside the batch that you want to use as input of the chain or operation to execute.

```
POST http://NUXEO_SERVER/nuxeo/api/v1/upload/{batchId}/{fileIdx}/execute/{operationId}
```

This way of calling an Automation operation is actually used in the default UI to manage drag and drop:

1.  Files are progressively uploaded to the server:
    *   You can drop several sets of files,
    *   There is a maximum number of concurrent uploads.

2.  When upload is finished you can select the operation or chain to execute.

More info about [Drag and Drop configuration]({{page page='drag-and-drop-service-for-content-capture-html5-based'}}).

Sample code using the Java client:

```java
// Get a Nuxeo client
NuxeoClient nuxeoClient = new NuxeoClient.Builder().url("http://NUXEO_SERVER/nuxeo")
                                                   .authentication("Administrator", "Administrator")
                                                   .connect();

// Upload a file
BatchUploadManager batchUploadManager = nuxeoClient.batchUploadManager();
BatchUpload batchUpload = batchUploadManager.createBatch();
File file = new File("/file/to/upload.txt");
batchUpload = batchUpload.upload("0", file, file.getName(), "text/plain", file.length());

// Execute an Automation operation with the uploaded file as input
Document doc = new Document("file", "File");
doc.set("dc:title", "new title");
doc = nuxeoClient.repository().createDocumentByPath("/folder_1", doc);
Blob blob = batchUpload.operation("Blob.AttachOnDocument").param("document", doc).execute();

```

### Referencing a Blob from a JSON Document Resource

You can reference a Blob by its batch id and file index in the JSON document you're sending to the REST API.

```javascript
{
  "entity-type": "document",
  "properties": {
    "file:content": {
      "upload-batch":"batchId-50b2ccb2-ce69-4fdc-b24e-b4ea8c155a05",
      "upload-fileId":"0" // referencing the first file of the batch
    }
  }
}
```

Sample code using the Java client:

```java
Document doc = nuxeoClient.repository().fetchDocumentByPath("/my/document/path");
doc.setPropertyValue("file:content", batchUpload.getBatchBlob());
doc = doc.updateDocument();
```

## Learn More

*   Follow the course [Importing Documents / REST API Import](https://university.nuxeo.com/learn/public/course/view/elearning/86/DataCapture) at [Nuxeo University](https://university.nuxeo.com).
*   Test these endpoints on your local instance with [Nuxeo API Playground](http://nuxeo.github.io/api-playground/) (see [documentation]({{page version='' space='nxdoc' page='howto-nuxeo-api-playground'}}) to configure your local instance).

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [HOWTO: Upload a File in Nuxeo Using REST API]({{page page='howto-upload-file-nuxeo-using-rest-api'}})
- [Transient Store]({{page version='' space='nxdoc' page='transient-store'}})

{{/panel}}
</div>

</div>
