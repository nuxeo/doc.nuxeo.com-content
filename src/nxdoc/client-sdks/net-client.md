---
title: .NET Client
description: Nuxeo .NET Client is a cross-platform client library developed in C# for the Nuxeo Automation and REST API.
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - lts2016-ok
    - dotnet
    - gbarata
    - csharp
    - client
    - nuxeo-dotnet-client
    - netcore
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '16091040'
    ajs-parent-page-title: Client SDKs
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: .NET+Client
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/.NET+Client'
    page_id: '27591799'
    shortlink: dwSlAQ
    shortlink_source: 'https://doc.nuxeo.com/x/dwSlAQ'
    source_link: /display/NXDOC/.NET+Client
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2016-08-05 13:45'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2016-02-04 16:36'
        message: ''
        version: '29'
    -
        author: Gabriel Barata
        date: '2016-01-28 15:35'
        message: ''
        version: '28'
    -
        author: Solen Guitter
        date: '2015-12-14 17:17'
        message: Steps formatting
        version: '27'
    -
        author: Solen Guitter
        date: '2015-12-14 17:00'
        message: ''
        version: '26'
    -
        author: Gabriel Barata
        date: '2015-12-09 10:08'
        message: ''
        version: '25'
    -
        author: Gabriel Barata
        date: '2015-12-09 10:01'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2015-12-08 10:16'
        message: Formatting
        version: '23'
    -
        author: Gabriel Barata
        date: '2015-12-07 17:34'
        message: ''
        version: '22'
    -
        author: Gabriel Barata
        date: '2015-12-07 17:00'
        message: ''
        version: '21'
    -
        author: Gabriel Barata
        date: '2015-12-07 16:57'
        message: ''
        version: '20'
    -
        author: Gabriel Barata
        date: '2015-12-07 16:52'
        message: ''
        version: '19'
    -
        author: Gabriel Barata
        date: '2015-12-07 16:32'
        message: ''
        version: '18'
    -
        author: Gabriel Barata
        date: '2015-12-07 16:00'
        message: ''
        version: '17'
    -
        author: Gabriel Barata
        date: '2015-12-07 15:58'
        message: ''
        version: '16'
    -
        author: Gabriel Barata
        date: '2015-12-07 14:58'
        message: ''
        version: '15'
    -
        author: Gabriel Barata
        date: '2015-12-07 14:56'
        message: ''
        version: '14'
    -
        author: Gabriel Barata
        date: '2015-12-07 14:51'
        message: ''
        version: '13'
    -
        author: Gabriel Barata
        date: '2015-12-07 14:37'
        message: ''
        version: '12'
    -
        author: Gabriel Barata
        date: '2015-12-07 14:33'
        message: ''
        version: '11'
    -
        author: Gabriel Barata
        date: '2015-12-07 12:59'
        message: ''
        version: '10'
    -
        author: Gabriel Barata
        date: '2015-12-07 12:37'
        message: ''
        version: '9'
    -
        author: Gabriel Barata
        date: '2015-12-07 12:22'
        message: ''
        version: '8'
    -
        author: Gabriel Barata
        date: '2015-12-07 12:08'
        message: ''
        version: '7'
    -
        author: Gabriel Barata
        date: '2015-12-07 11:50'
        message: ''
        version: '6'
    -
        author: Gabriel Barata
        date: '2015-12-07 11:49'
        message: ''
        version: '5'
    -
        author: Gabriel Barata
        date: '2015-12-07 11:13'
        message: ''
        version: '4'
    -
        author: Gabriel Barata
        date: '2015-12-07 11:01'
        message: ''
        version: '3'
    -
        author: Gabriel Barata
        date: '2015-12-07 10:29'
        message: ''
        version: '2'
    -
        author: Gabriel Barata
        date: '2015-12-07 10:06'
        message: ''
        version: '1'

---
{{! excerpt}}

Nuxeo .NET Client is a cross-platform client library developed in C# for the Nuxeo Automation and REST API.

{{! /excerpt}}

Nuxeo .NET Client targets two platforms: `net45` and `dotnetcoreapp1.0`. This allows it to be used to develop apps for not only Windows but also Linux and macOS.

## Installation

Nuxeo .NET Client can easily be installed from [NuGet](https://www.nuget.org/packages/NuxeoClient/). Here is how.

### Developing with Visual Studio (2015 or Newer)

You need [.NET Framework 4.5](https://www.microsoft.com/en-us/download/details.aspx?id=30653) installed in order to build .NET Client. In Visual Studio, open the Package Manager Console and type:

```
Install-Package NuxeoClient –Pre
```

### Developing for .NET Core, without Visual Studio

You will need to have .NET Core available in your system in order to run the client. Installation instructions are available for [Linux](https://www.microsoft.com/net/learn/get-started/linuxredhat), [macOS](https://www.microsoft.com/net/learn/get-started/macos) and [Windows](https://www.microsoft.com/net/learn/get-started/windows).

1.  Add the "NuxeoClient" dependency to your *project.json* file, which should look something like this:

    ```js
    {
      …,
      "dependencies": {
      	…,
      	"NuxeoClient": "1.0.0-*"
      },
     …
    }
    ```

2.  Run the following command on your favorite shell to download all dependencies:

    ```
    dotnet restore
    ```

## Initialization

1.  Before using the client, you must include a reference to the NuxeoClient namespaces in your .cs file:

    ```c#
    using NuxeoClient;
    using NuxeoClient.Wrappers;
    ```

2.  Create a new instance of NuxeoClient, which will allow us to perform API requests to a Nuxeo server. Assuming that the server is running on the local machine and with default credentials, create the client as follows:

    ```c#
    Client client = new Client("http://localhost:8080/nuxeo/",
                            new Authorization("Administrator",
                                              "Administrator"));
    ```

    Or just omit the default values:

    ```c#
    Client client = new Client();
    ```

    NuxeoClient exposes the following methods to specify the default schemas to be used when retrieving documents from the server (sets the `X-NXDocumentProperties` header):

    *   `client.AddDefaultSchema(string schema)`
    *   `client.SetDefaultSchemas(string[] schemas)`
    *   `client.RemoveDefaultSchema(string schema)`
    *   `client.ClearDefaultSchemas()`

## API Calls

Nuxeo .NET Client exposes methods to perform requests to the Automation and REST API, via `client.Operation(string id)` and `client.Request(RequestType type, string endpoint)`.

### Automation API

The `Operation` object exposes several methods to parameterize calls to the Automation API. These are:

*   **operation.SetInput**: Sets the input of the operation. Can be a `string`, a `JToken` or a `Blob` object.
*   **operation.SetContext(string property, JToken value)**: Sets the operation context. The value can also be passed as a string.
*   **operation.SetParameter(string property, JToken value)**: Sets a parameter for the operation. The value can also be passed as a string.
*   **operation.AddHeader(string name, string value)**: Adds a header to be used in the operation request.
*   **operation.AddSchema(string schema)** and **operation.SetSchemas(string[] schemas)**: Defines the schemas to be used in the operation request (overrides the `X-NXDocumentProperties` header).
*   **operation.SetTimeout(int timeout)**: Specifies the timeout for the operation.
*   **operation.SetRepository(string repository)**: Sets the repository to be used in the request (sets the `Repository` header).
*   **operation.Execute()**: launches a `Task` that executes the operation, which can be awaited within an async method.

#### Operation Examples

Creating a document on the root:

```c#
Document folder = (Document) await client.Operation("Document.Create")
                                         .SetInput("doc:/")
                                         .SetParameter("type", "Folder")
                                         .SetParameter("name", "TestFolder")
                                         .SetParameter("properties", new ParamProperties { { "dc:title", "Test Folder" } })
                                         .Execute()
```

Getting the children of a document:

```c#
Documents documents = (Documents) await client.Operation("Document.GetChildren")
                                              .SetInput("doc:" + folder.Path)
                                              .Execute()
                                              .Result;
```

### REST API

RESTful requests are made via the `client.Request` method, which has the following arguments:

*   RequestType **type**: the HTTP method type, which can be `RequestType.GET`, `RequestType.POST`, `RequestType.PUT` or `RequestType.DELETE`.
*   string **endpoint**: The URL to the endpoint to which the request will be made.
*   QueryParams **parameters** (defaults to null): The query parameters of the URL.
*   JToken **data** (defaults to null): The data to be sent in the request. A string can be used, which will be autoboxed to `JToken`.
*   Dictionary<string, string> **additionalHeaders** (defaults to null): The headers to be used in the request.
*   string **contentType** (defaults to `ContentType.JSON`): The content type of the request.

Requests made via this method are issued inside a `Task`, which can be awaited inside an async method. However, Nuxeo .NET Client provides a handful of wrappers to hide direct calls to `client.Request` and set headers, which makes code easier to read and write. Examples of these wrappers are `Document` and `Batch`.

#### Document CRUD via REST API

The `Document` wrapper provides several methods to perform operations over document, such as:

*   **document.Get()**: Fetches the document.
*   **document.Post**: Creates a child document. Receives an `Entity` or `JToken` object.
*   **document.Put**: Updates the document. Receives an `Entity` or `JToken` object.
*   **document.Delete()**: Deletes the document.
*   **SetAdapter(Adapter adapter)**: Sets a document adapter.
*   **SetContentEnrichers(string[] enrichers)**: Sets the document enrichers to be used in the next request.

Similarly to `Operation`, the `Document` wrapper also provides methods to define headers, schemas, the repository and the timeout.

**Examples**

*   Creating a document

    ```c#
    Document folder = (Document)await
                client.DocumentFromPath("/")
                      .Post(new Document
                      {
                            Type = "Folder",
                            Name = "folder",
                            Properties = new Properties
                            {
                                { "dc:title", "A Folder" }
                            }
                      });
    ```

*   Updating the same document

    ```c#
    Document folder = (Document)await folder.Put(new Document
    {
         Properties = new Properties
         {
               { "dc:title", "new title" }
         }
    });
    ```

*   Getting the folder's child documents, using the `@children` adapter

    ```c#
    Documents children = (Documents)await folder.SetAdapter(new ChildrenAdapter())
                                                .Get();
    ```

    Then, the list of children can be retrieved via:

    ```c#
    children.Entries
    ```

    Keep in mind that all the requests made to folder will be issued to the children adapter. The adapter can be unset by doing the following:

    ```c#
    folder.SetAdapter(null);
    ```

#### Batch Upload

The `Batch` wrapper provides methods to upload files, perform operation on batches and get information about batches and uploaded files. Some of the exposed methods are:

*   **batch.Operation(string operationId)**: Creates a new `Operation` to be executed over all files in the batch.
*   **batch.Upload(UploadJob job)**: Uploads a file.
*   **batch.UploadChunk(UploadJob job)**: Uploads a chunk of a file.
*   **batch.Drop()**: Drops the current batch.
*   **batch.Info()**: Gets information about a batch.
*   **batch.Info(int fileIndex)**: Gets information about a specific file that was uploaded to this batch.

Nuxeo .NET Client provides an `Uploader` that exposes convenient methods to upload files, such as:

*   **uploader.SetChunked(bool isChunkedUpload)**: Specifies whether files will be uploaded in chunks or not.
*   **uploader.SetChunkSize(int size)**: The size of the chunks.

*   **uploader.SetNumConcurrentUploads(int num)**: The number of files that can be uploaded in parallel.
*   **uploader.AddFile(string file)** and **AddFiles(string[] files)**: Adds files to the upload queue.
*   **uploader.UploadFiles()**: Uploads files in the queue.
*   **uploader.Operation(string operationId)**: Creates a new `Operation` to be executed over the current batch.

Now, imagine that you want to upload files to the server and import them as children of folder, the folder created above.

1.  Create a new instance of `Uploader`, which will upload files in chunks of 1 kB.

    ```c#
    Uploader uploader = client.Uploader()
                              .SetChunked(true)
                              .SetChunkSize(1024);
    ```

2.  Add files to the queue and start the upload process:

    ```c#
    await uploader.AddFile("Test.txt")
                  .AddFile("Puppy.docx")
                  .UploadFiles();
    ```

3.  Perform a batch operation `FileManager.Import`, which will import all files in the batch as children of folder:

    ```c#
    Documents documents = (Documents)await uploader.Operation("FileManager.Import")
                                                   .SetContext("currentDocument", folder.Path)
                                                   .Execute(); 
    ```

**Remarks**: Batch Upload complies with the upload API release with Nuxeo Platform 7.4\. Batch operations are only compatible with Nuxeo Platform 7.10 or above.

## Build

Nuxeo .NET Client's source code is available on [GitHub](https://github.com/nuxeo/nuxeo-dotnet-client), along with more usage examples and [documentation](http://nuxeo.github.io/nuxeo-dotnet-client/).

### Developing for .NET 4.5

1.  Install the [.NET Framework 4.5](https://www.microsoft.com/en-us/download/details.aspx?id=30653).
2.  Build and run NuxeoClient_net45.sln in Visual Studio (2015 or newer).

### Developing for .NET Core

1.  Install .NET Core in your system. Installation instructions are available for [Linux](https://www.microsoft.com/net/learn/get-started/linuxredhat), [macOS](https://www.microsoft.com/net/learn/get-started/macos) and [Windows](https://www.microsoft.com/net/learn/get-started/windows).
2.  Add the following feeds to NuGet config file:
    *   [https://www.myget.org/F/aspnetvnext/](https://www.myget.org/F/aspnetvnext/)
    *   [https://www.nuget.org/api/v2/](https://www.nuget.org/api/v2/)
3.  Build the solution with:

```
dotnet build
```

## Sample - NuxeoDotNetBrowser

The Nuxeo .NET Client is already being used by a sample application named [NuxeoDotNetBrowser](https://github.com/nuxeo/nuxeo-dotnet-browser). It provides the basic functionality to browse documents in a Nuxeo server, perform CRUD operations and start workflows.

* * *

{{#> panel heading='Related Topics'}}
- [Client SDKs]({{page page='client-sdks'}})
{{/panel}}
