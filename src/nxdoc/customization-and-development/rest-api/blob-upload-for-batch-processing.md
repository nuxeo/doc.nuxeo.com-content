---
title: Blob Upload for Batch Processing
review:
    comment: ''
    date: ''
    status: ok
labels:
    - blob
    - upload
    - automation
    - todo
toc: true
confluence:
    ajs-parent-page-id: '17334531'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Blob+Upload+for+Batch+Processing
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Blob+Upload+for+Batch+Processing'
    page_id: '17334524'
    shortlink: '-IAIAQ'
    shortlink_source: 'https://doc.nuxeo.com/x/-IAIAQ'
    source_link: /display/NXDOC58/Blob+Upload+for+Batch+Processing
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 13:41'
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
## Uploading Files

The principle is that you can upload the file to the server using the URL:

```
POST /site/automation/batch/upload
```

You can do a simple POST with the payload containing your file.

However, you will need to set some custom HTTP headers:

<table><tbody><tr><th colspan="1">Header name</th><th colspan="1">Description</th></tr><tr><td colspan="1">`X-Batch-Id`</td><td colspan="1">Batch identifier</td></tr><tr><td colspan="1">`X-File-Idx`</td><td colspan="1">Index of the file inside the batch</td></tr><tr><td colspan="1">`X-File-Name`</td><td colspan="1">Name of the file</td></tr><tr><td colspan="1">`X-File-Size`</td><td colspan="1">Size of the file in bytes</td></tr><tr><td colspan="1">`X-File-Type`</td><td colspan="1">Mime type of the file</td></tr><tr><td colspan="1">`Content-Type`</td><td colspan="1">Should be set to "`binary/octet-stream`"</td></tr></tbody></table>

<span style="font-size: 10.0pt;line-height: 13.0pt;">Optionally depending on the HTTP client you are using you might need to add the Content-Length header to specify the size of the file in bytes.</span>

<span style="font-size: 10.0pt;line-height: 13.0pt;">The batch identifier should be common to all the files you want to upload and attach to the same batch.</span> This identifier should be client side generated:

*   GUID,
*   <span style="font-size: 10.0pt;line-height: 13.0pt;">Timestamp + random number,</span>
*   <span style="font-size: 10.0pt;line-height: 13.0pt;">whatever that can be reasonably considered as unique.</span>

The `X-File-Idx` is here in case you later want to reference the file by its index and also to keep track of the client side ordering: because the order the server receives the files may not be the same.

The files attached to the batch are stored on a temporary disk storage (inside `java.io.tmp`) until the batch is executed or dropped.

To drop a batch you must use:

```
GET /site/automation/batch/drop/{batchId}
```

<span style="font-size: 10.0pt;line-height: 13.0pt;">Technically, a batch is automatically "started" when the first upload is received.</span>

Executing a batch will automatically remove it.

## Using Files From a Batch

### Batch Execute

You can execute an automation chain or an automation operation using the blobs associated to a batch as input.

To place the blobs as input, call a specific batch operation, passing the `operationId` and `batchId` as parameter:

```
POST /site/automation/batch/execute
Accept: application/json+nxentity, */*
Content-Type: application/json+nxrequest; charset=UTF-8
X-NXDocumentProperties: *
```

```
{"params":{"operationId":"Chain.FileManager.ImportInSeam","batchId":"batch-1370282334917-258", ...},"context":{...}}
```

Optionally you can pass the `fileIdx` parameter to specify the index of the file inside the batch that you want to use as input of the chain or operation to execute.

This way of calling automation operation &nbsp;is actually used in the default UI to manage Drag&Drop:

1.  Files are progressively uploaded to the server:

    *   You can drop several sets of files,
    *   There is a maximum number of concurrent uploads.
2.  When upload is finished you can select the operation or chain to execute.

More info about [Drag & Drop configuration]({{page page='drag-and-drop-service-for-content-capture-html5-based'}}).

### Referencing a Blob From a Batch

An other option is to reference the file within the batch to create input parameters of an operation.

For that you can add a parameter of type&nbsp;<span style="color: rgb(0,0,0);">`properties` that will <span style="color: rgb(0,0,0);">automatically</span> be resolved to the correct blob if the provided properties are the correct ones:</span>

```
type = blob
length = 657656
mime-type = application/pdf
name = myfile.pdf
upload-batch = 989676879865765
upload-fileId = myfile.pdf
```

<span style="color: rgb(0,0,0);">When using Java automation client, this would look like:&nbsp;</span>

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

<div class="module toggle-wrap">

<div class="mod-content">

<div class="field-ignore-highlight">

<div class="user-content-block">

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
             "upload-batch":"batchId-20358",
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

&nbsp;

</div>

</div>

</div>

</div>

### Java API

&nbsp;