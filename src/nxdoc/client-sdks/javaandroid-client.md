---
title: Java/Android Client
review:
    comment: ''
    date: '2015-12-01'
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '16091040'
    ajs-parent-page-title: Client SDKs
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: viewpage.action?pageId=30474666
    canonical_source: viewpage.action?pageId=30474666
    page_id: '30474666'
    shortlink: qgHRAQ
    shortlink_source: 'https://doc.nuxeo.com/x/qgHRAQ'
    source_link: /pages/viewpage.action?pageId=30474666
history:
    -
        author: Manon Lumeau
        date: '2016-08-17 12:11'
        message: ''
        version: '10'
    -
        author: Vladimir Pasquier
        date: '2016-03-02 21:26'
        message: ''
        version: '9'
    -
        author: Vladimir Pasquier
        date: '2016-03-02 21:26'
        message: ''
        version: '8'
    -
        author: Vladimir Pasquier
        date: '2016-03-02 21:25'
        message: ''
        version: '7'
    -
        author: Vladimir Pasquier
        date: '2016-03-02 19:48'
        message: ''
        version: '6'
    -
        author: Vladimir Pasquier
        date: '2016-03-02 19:46'
        message: ''
        version: '5'
    -
        author: Vladimir Pasquier
        date: '2016-03-02 19:46'
        message: ''
        version: '4'
    -
        author: Vladimir Pasquier
        date: '2016-03-02 19:45'
        message: ''
        version: '3'
    -
        author: Vladimir Pasquier
        date: '2016-03-02 19:40'
        message: ''
        version: '2'
    -
        author: Vladimir Pasquier
        date: '2016-03-02 19:39'
        message: ''
        version: '1'

---
The Nuxeo Java Client is a Java client library (can be used for Android) for the Nuxeo Automation and REST API.

[Github Documentation Website](http://nuxeo.github.io/nuxeo-java-client/)

## Getting Started

### Client - Library Import

**Import Nuxeo Java Client with:**

Maven:

```
<dependency>
  <groupId>org.nuxeo.java.client</groupId>
  <artifactId>nuxeo-java-client</artifactId>
  <version>0.1-SNAPSHOT</version>
</dependency>
```

Gradle:

```
compile 'org.nuxeo.java.client:nuxeo-java-client:0.1-SNAPSHOT'
```

Ivy:

```
<dependency org="org.nuxeo.java.client" name="nuxeo-java-client" rev="0.1-SNAPSHOT" />

```

SBT:

```
libraryDependencies += "org.nuxeo.java.client" % "nuxeo-java-client" % "0.1-SNAPSHOT"
```

###Usage

**Creating a client**

For a given `url`:

```java
String url = "http://localhost:8080/nuxeo";
```

And given credentials:

```java
import org.nuxeo.java.client.api.NuxeoClient;

NuxeoClient nuxeoClient = new NuxeoClient(url, "Administrator", "Administrator");
```

Options:

```java
// For defining session and transaction timeout
nuxeoClient = nuxeoClient.timeout(60).transactionTimeout(60);
```

```java
// For defining global schemas, global enrichers and global headers in general
nuxeoClient = nuxeoClient.schemas("dublincore", "common").enrichers("acls","preview").header(key1,value1).header(key2, value2);
```

```java
// For defining all schemas
nuxeoClient = nuxeoClient.schemas("*");
```

```java
// To enable cache
nuxeoClient = nuxeoClient.enableDefaultCache();
```

```java
// To logout (shutdown the client, headers etc...)
nuxeoClient = nuxeoClient.logout();
```

**APIs**

General rule:

- when using `fetch` methods, `NuxeoClient` is making remote calls.
- when using `get` methods, objects are retrieved from memory.

**Automation API**

To use the Automation API, `org.nuxeo.java.client.api.NuxeoClient#automation()` is the entry point for all calls:

```java
import org.nuxeo.java.client.api.objects.Document;

// Fetch the root document
Document result = (Document) nuxeoClient.automation().param("value", "/").execute("Repository.GetDocument");
```

```java
import org.nuxeo.java.client.api.objects.Operation;
import org.nuxeo.java.client.api.objects.Documents;

// Execute query
Operation operation = nuxeoClient.automation("Repository.Query").param("query", "SELECT * " + "FROM Document");
Documents result = (Documents) operation.execute();
```

```java
import org.nuxeo.java.client.api.objects.blob.Blob;

// To upload|download blob(s)

Blob fileBlob = new Blob(java.io.File file);
blob = (Blob) nuxeoClient.automation().newRequest("Blob.AttachOnDocument").param("document", "/folder/file").input(fileBlob).execute();

Blobs inputBlobs = new Blobs();
inputBlobs.add(java.io.File file1);
inputBlobs.add(java.io.File file2);
Blobs blobs = (Blob) nuxeoClient.automation().newRequest("Blob.AttachOnDocument").param("xpath", "files:files").param("document", "/folder/file").input(inputBlobs).execute();

Blob resultBlob = (Blob) nuxeoClient.automation().input("folder/file").execute("Document.GetBlob");
```

**Repository API**

```java
import org.nuxeo.java.client.api.objects.Document;

// Fetch the root document
Document root = nuxeoClient.repository().fetchDocumentRoot();
```

```java
// Fetch document in a specific repository
root = nuxeoClient.repository().repositoryName("other_repo").fetchDocumentRoot();
```

```java
// Fetch document by path
Document folder = nuxeoClient.repository().fetchDocumentByPath("folder_2");
```

```java
// Create a document
Document folder = nuxeoClient.repository().fetchDocumentByPath("folder_1");
Document document = new Document("file", "File");
document.set("dc:title", "new title");
document = nuxeoClient.repository().createDocumentByPath("folder_1", document);
```

```java
// Update a document
Document document = nuxeoClient.repository().fetchDocumentByPath("folder_1/note_0");
Document documentUpdated = new Document("test update", "Note");
documentUpdated.setId(document.getId());
documentUpdated.set("dc:title", "note updated");
documentUpdated.setTitle("note updated");
documentUpdated.set("dc:nature", "test");
documentUpdated = nuxeoClient.repository().updateDocument(documentUpdated);
```

```java
// Delete a document
Document documentToDelete = nuxeoClient.repository().fetchDocumentByPath("folder_1/note_1");
nuxeoClient.repository().deleteDocument(documentToDelete);
```

```java
// Fetch children
Document folder = nuxeoClient.repository().fetchDocumentByPath("folder_2");
Documents children = folder.fetchChildren();
```

```java
// Fetch blob
Document file = nuxeoClient.repository().fetchDocumentByPath("folder_2/file");
Blob blob = file.fetchBlob();
```

```java
import org.nuxeo.java.client.api.objects.audit.Audit;
// Fetch the document Audit
Document root = nuxeoClient.repository().fetchDocumentRoot();
Audit audit = root.fetchAudit();
```

```java
// Execute query
Documents documents = nuxeoClient.repository().query("SELECT * " + "From Note");

import org.nuxeo.java.client.api.objects.RecordSet;
// With RecordSets
RecordSet documents = (RecordSet) nuxeoClient.automation().param("query", "SELECT * FROM Document").execute("Repository.ResultSetQuery");
```

```java
import retrofit2.Callback;
// Fetch document asynchronously with callback
nuxeoClient.repository().fetchDocumentRoot(new Callback<Document>() {
            @Override
            public void onResponse(Response<Document> response) {
                if (!response.isSuccess()) {
                    ObjectMapper objectMapper = new ObjectMapper();
                    NuxeoClientException nuxeoClientException;
                    try {
                        nuxeoClientException = objectMapper.readValue(response.errorBody().string(),
                                NuxeoClientException.class);
                    } catch (IOException reason) {
                        throw new NuxeoClientException(reason);
                    }
                    fail(nuxeoClientException.getRemoteStackTrace());
                }
                Document folder = response.body();
                assertNotNull(folder);
                assertEquals("Folder", folder.getType());
                assertEquals("document", folder.getEntityType());
                assertEquals("/folder_2", folder.getPath());
                assertEquals("Folder 2", folder.getTitle());
            }

            @Override
            public void onFailure(Throwable reason) {
                fail(reason.getMessage());
            }
        });
```

**Batch Upload**

Batch uploads are executed through the `org.nuxeo.java.client.api.objects.upload.BatchUpload`.

```java
// Batch Upload Initialization
BatchUpload batchUpload = nuxeoClient.fetchUploadManager();
assertNotNull(batchUpload.getBatchId());
```

```java
// Upload File
File file = FileUtils.getResourceFileFromContext("sample.jpg");
batchUpload = batchUpload.upload(file.getName(), file.length(), "jpg", batchUpload.getBatchId(), "1", file);

// Fetch this file
BatchFile batchFile = batchUpload.fetchBatchFile("1");

import org.nuxeo.java.client.api.objects.upload.BatchFile;
// Upload another file and check files
file = FileUtils.getResourceFileFromContext("blob.json");
batchUpload.upload(file.getName(), file.length(), "json", batchUpload.getBatchId(), "2", file);
List<BatchFile> batchFiles = batchUpload.fetchBatchFiles();
```
Batch upload can be executed in a [chunk mode](https://doc.nuxeo.com/display/NXDOC/Blob+Upload+for+Batch+Processing?src=search#BlobUploadforBatchProcessing-UploadingaFilebyChunksUploadingaFilebyChunks).

```java
// Upload file chunks
BatchUpload batchUpload = nuxeoClient.fetchUploadManager().enableChunk();
File file = FileUtils.getResourceFileFromContext("sample.jpg");
batchUpload = batchUpload.upload(file.getName(), file.length(), "jpg", batchUpload.getBatchId(), "1", file);
```

Chunk size is by default 1MB (int 1024*1024). You can update this value with:

```java
nuxeoClient.fetchUploadManager().enableChunk().chunkSize(1024);
```

Attach batch to a document:

```java
Document doc = new Document("file", "File");
doc.set("dc:title", "new title");
doc = nuxeoClient.repository().createDocumentByPath("folder_1", doc);
doc.set("file:content", batchUpload.getBatchBlob());
doc = doc.updateDocument();
```

or via Automation:

```java
Document doc = new Document("file", "File");
doc.set("dc:title", "new title");
doc = nuxeoClient.repository().createDocumentByPath("folder_1", doc);
Operation operation = nuxeoClient.automation("Blob.AttachOnDocument").param("document", doc);
Blob blob = (Blob) batchUpload.execute(operation);
```

**Directories**

```java
import org.nuxeo.java.client.api.objects.directory.Directory;
// Fetch a directory
Directory directory = nuxeoClient.getDirectoryManager().fetchDirectory("continent");
```

**Users/Groups**

```java
import org.nuxeo.java.client.api.objects.user.CurrentUser;
// Fetch current user
CurrentUser currentUser = nuxeoClient.fetchCurrentUser();
```

```java
import org.nuxeo.java.client.api.objects.user.User;
// Fetch user
User user = nuxeoClient.getUserManager().fetchUser("Administrator");
```

```java
import org.nuxeo.java.client.api.objects.user.Group;
// Fetch group
Group group = nuxeoClient.getUserManager().fetchGroup("administrators");
```

**Workflow**

```java
import org.nuxeo.java.client.api.objects.workflow.Workflows;
// Fetch current user workflow instances
Workflows workflows = nuxeoClient.fetchCurrentUser().fetchWorkflowInstances();
```

```java
// Fetch document workflow instances
Workflows workflows = nuxeoClient.repository().fetchDocumentRoot().fetchWorkflowInstances();
```

**Manual REST Calls**

`NuxeoClient` allows manual rest calls with the 4 main methods GET,POST,PUT,DELETE and provides json (de)serializer helpers:

```java
import okhttp3.Response;

// GET Method and Deserialize Json Response Payload
Response response = nuxeoClient.get("NUXEO_URL/path/");
assertEquals(true, response.isSuccessful());
String json = response.body().string();
Document document = (Document) nuxeoClient.getConverterFactory().readJSON(json, Document.class);
```

```java
// PUT Method and Deserialize Json Response Payload
Response response = nuxeoClient.put("NUXEO_URL/path/", "{\"entity-type\": \"document\",\"properties\": {\"dc:title\": \"new title\"}}");
assertEquals(true, response.isSuccessful());
String json = response.body().string();
Document document = (Document) nuxeoClient.getConverterFactory().readJSON(json, Document.class);
```

**Async/Callbacks**

All APIs from the client are executable in Asynchronous way.

All apis are duplicated with an additional parameter `retrofit2.Callback<T>`.

When no response is needed (204 No Content Status for example), use `retrofit2.Callback<ResponseBody>` (`okhttp3.ResponseBody`). This object can be introspected like the response headers or status for instance.

**Custom Endpoints**

**Marshalling**



**Cache**

**Errors/Exceptions**

## Testing

The Testing suite or TCK can be found in this project [`nuxeo-java-client-test`](https://github.com/nuxeo/nuxeo-java-client/tree/master/nuxeo-java-client-test).

{{! Don't put anything here. }}

* * *