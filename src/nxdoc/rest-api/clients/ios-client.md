---
title: iOS Client
review:
    comment: ''
    date: ''
    status: ok
labels:
    - ios
    - client
    - mobile
toc: true
confluence:
    ajs-parent-page-id: '22380554'
    ajs-parent-page-title: Clients
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: iOS+Client
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/iOS+Client'
    page_id: '22380765'
    shortlink: 3YBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/3YBVAQ'
    source_link: /display/NXDOC60/iOS+Client
history:
    - 
        author: Manon Lumeau
        date: '2015-09-16 11:30'
        message: ''
        version: '7'
    - 
        author: Manon Lumeau
        date: '2015-09-16 11:30'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-12-19 15:55'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-12-19 15:46'
        message: ''
        version: '4'
    - 
        author: Arnaud Kervern
        date: '2013-11-12 11:50'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-10-29 17:58'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2013-10-27 21:20'
        message: ''
        version: '1'

---
{{! excerpt}}

The goal of the iOS SDK is to integrate correctly with REST tools of the Nuxeo Platform, and provide a hierarchical synchronization service, so as to be able to access content offline.

{{! /excerpt}}

## Adding Nuxeo SDK to Your Project

To include [<span class="error">Nuxeo SDK</span>](https://github.com/nuxeo/nuxeo-sdk-ios) as a library to your project, we recommend you use [<span class="error">CocoaPods</span>](http://cocoapods.org/) , a dependencies manager for Objective C projects written in Ruby and available as a <span class="error">[RubyGems](http://rubygems.org/gems/cocoapods)</span> .

A Nuxeo dedicated specs repository is available in our GitHub account: <span class="error">[nuxeo/cocoapods-specs](https://github.com/nuxeo/cocoapods-specs)</span> .

### Installing CocoaPods and Setting up Nuxeo's Pods Repository

1.  Install Cocoapods using RubyGems.

    ```
     $ gem install cocoapods
    ```

2.  Set up our pods specs repository.

    ```
     $ pod repo add nuxeo https://github.com/nuxeo/cocoapods-specs
    ```

### Adding Pods to a XCode Project

<div class="external-link">

1.  Create a text file named `PodFile` in your project root folder.
    Its goal is to declare your dependencies. It should looks like this:

    ```
    $ cat Podfile
     platform :ios, '7.0'
    pod 'NuxeoSDK', :head
    $ pod
    ```

    {{#> callout type='note' }}

    In this sample, we reference our project *head. That means you will use our snapshot version. You might need to specify a version number.

    {{/callout}}
2.  Execute the `pod` command to download or update each dependencies defined in your `PodFile`.
    CocoaPods will create a dedicated XCode workspace containing everything you need.

&nbsp;

## Accessing REST / Automation API

&nbsp;

To access a remote server, at a first level we expose some basic objects.

*   A session object, which handles connectivity, can execute a request upon a server and makes it possible to serialize JSON results as entities.
*   A request object, which enables you to parametrize your needs.

Those two objects expose HTTP concepts: you can add parameters, headers, authentication. They can be enhanced with Nuxeo concepts like schema, adaptor, category, etc.

For instance, from scratch a hand made request to fetch the `default-domain` document with dublincore metadata gets this result as a document entity:

```
NSURL *url = [[NSURL alloc] initWithString:@"http://localhost:8080/nuxeo"];
 NUXSession *session = [[NUXSession alloc] initWithServerURL:url username:@"Administrator" password:@"Administrator"];
 [session addDefaultSchemas:@[@"dublincore"]];
NUXRequest *request = [[NUXRequest alloc] initWithSession:session];
 [[request addURLSegment:@"path"] addURLSegment:@"default-domain"];
 [request setCompletionBlock:^(NUXRequest *request)
{ NSError *error; NUXDocument *doc = [request responseEntityWithError:&error]; [self doSomethingGreatWith:doc]; }];
 [request start];
```

There are several ways to execute a request. You can start it asynchrounously, synchronously (beware not to block UI thread), from the session itself, or from convenience method from the request.

### `NUXSession` Class

```
#import <NuxeoSDK/NUXSession.h>
```

The <span class="error">[NUXSession](https://github.com/nuxeo/nuxeo-sdk-ios/blob/release-6.0/NuxeoSDK/NuxeoSDK/Classes/NUXSession.h)</span> object's goal is to handle remote server connectivity, authentication and default behaviors.

Do not hesitate to take a look at <span class="error">[the NUXSession tests]</span>([https://github.com/nuxeo/nuxeo-sdk-ios/blob/release-6.0/NuxeoSDK/NuxeoSDKTests/Classes/NUXSessionTests.m](https://github.com/nuxeo/nuxeo-sdk-ios/blob/release-6.0/NuxeoSDK/NuxeoSDKTests/Classes/NUXSessionTests.m)) hosted in GitHub.

#### Shared Session

In case your application uses a single dedicated account to connect to Nuxeo, you are able to configure it using a resource file strictly named `NUXSession-info.plist`. Then, you'll access the singleton using the `<span class="error">[NUXSession shared]</span>` message.

```
 <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
 <plist version="1.0">
 <dict>
 <key>Username</key>
 <string>sharedUsername</string>
 <key>Password</key>
 <string>sharedPassword</string>
 <key>Repository</key>
 <string>default</string>
 <key>ApiPrefix</key>
 <string>api/v1</string>
 <key>URL</key>
 <string>http://localhost:8080/nuxeo</string>
 </dict>
 </plist>
```

#### User's Level Session

Otherwise, if you want to use user's level sessions, you should instantiate it like other objects with the&nbsp;`init` message.

```
[[NUXSession alloc] initWithServerURL:url username:@"Administrator" password:@"Administrator"];
```

#### Change Requests Default Behaviors

You can also change some default behavior. For instance, you can add some request's default schema or <span class="error">[pluggable context](http://www.nuxeo.com/blog/development/2013/09/qa-friday-video-storyboard-rest-api/)</span> . And each request executed with this session will have those settings.

```
[session addDefaultSchema: @[@"dublincore", @"file"]];
[session addDefaultCategory: @[@"video"]];
```

### NUXRequest Class

```
#import <NuxeoSDK/NUXRequest.h>
```

The [<span class="error">NUXRequest</span>](https://github.com/nuxeo/nuxeo-sdk-ios/blob/release-6.0/NuxeoSDK/NuxeoSDK/Classes/Requests/NUXRequest.h) object exposes Nuxeo concepts like schema, adaptors, categories at a document level on top of HTTP stuff like methods, headers, data. NUXRequest is built using a NUXSession.

```
NUXRequest *request = [[NUXRequest alloc] initWithSession:aSession];
// Nuxeo related stuff
 [request addURLSegment: @""];
 [request addAdaptor: @"children"];
 [request addAdaptor: @"blob" withValue: @"file:content"];
 [request addCategory: @"video"];
 [request addCategories: @[@"video", ...]];
 [request addSchema: @"dublincore"];
 [request addSchemas: @[@"file", ...]];
// HTTP stuff
 [request addHeaderValue:@"value" forKey:@"key"];
 [request setMethod: @"GET"];
 [request setContentType: @"application/json"];
 [request setPostData: nil];
```

<div class="action-body flooded">`NXRequest` can be executed synchronously or asynchronously.</div>

<div class="action-body flooded">

&nbsp;

```
[request setCompletionBlock:^(NUXRequest *request)
{ // Do some stuff }];
 [request setFailureBlock:^(NUXRequest *request) { // Do some stuff executed on failure }];

 [request start]; //Start request asynchrounously
 [request startSynchronous]; //Start request synchronously

 // Convenience method to do everything in one line
 [request startWithCompletionBlock:^(NUXRequest *request) { // Do some stuff }FailureBlock:^(NUXRequest *request)
{ // Do some stuff executed on failure }];
```

&nbsp;

</div>

<div class="external-link">Do not hesitate to take a look at [<span class="error">the NUXRequest tests</span>](https://github.com/nuxeo/nuxeo-sdk-ios/blob/release-6.0/NuxeoSDK/NuxeoSDKTests/Classes/NUXRequestTests.m) hosted in GitHub.</div>

### Response Handling

There are several ways to get response data:

*   **NSData**: passing the HTTP result as it comes, as an object-oriented wrapper for byte buffer.
*   **NSString**: building a string with the NSData object, expected response string is UTF8 encoded.
*   **JSON as NSDictionnary**: serializing response in a JSON object.
*   **NUXEntity**: using our custom serialization object, to fill a custom object depending of the `entity-type` JSON field.

Code sample:

```
[request startSynchronous];
// Reponse
 request.responseStatusCode;
 request.responseMessage;
NSData *data = [request responseData];
 NSString *string = [request responseString];
NSError *error;
 NSDictionnary *json = [request responseJSONWithError:&error];
 NUXEntity *entity = [request responseEntityWithError:&error];
```

### Downloading Blobs

When you know your response will be a file, instead of mounting the complete file in memory in the `data` field of your request object, you must set the `downloadDestinationPath` property to stream the response data into it.

```
NSString *tempFile = [NSTemporaryDirectory() stringByAppendingPathComponent:[NSString stringWithFormat:@"tempfile%d.tmp", rand()]];
 request = [session requestDownloadBlobFrom:uid inMetadata:@"file:content"];
 request.downloadDestinationPath = tempFile;
```

{{#> callout type='tip' }}

To make sure downloading a file is not blocking other requests, and to allow you to cancel downloads and let other requests finish their work, we use two differents queues.

{{/callout}}

### Object Mapping

To manipulate a JSON response as an object instead of a `NSDictionnary` class, we build an automatic introspection mapping based on the `entity-type` value: each existing property is filled in the object mapping.

Each entity class must be registered as such and extend at least `NUXEntity`. We provide entity classes for base entity-type (`document` and `documents`), but you could register any entity for your custom <span class="error">[business objects]({{page page='repository-concepts#documentmodel-adpater'}})</span> .

To register a new entity class:

```
[[NUXJSONMapper sharedMapper] registerEntityClass:[NUXDocument class]];
```

To convert NSData -> NUXEntity, or NUXEntity -> NSData:

```
NSError *error;
NUXDocument *entity = [NUXJSONSerializer entityWithData:someData error:&error];
NSData *data = [NUXJSONSerializer dataWithEntity:entity error:&error];
```

To allow your class to be persisted, don't forget to implement `NUXEntityPersistable` protocol.

Do not hesitate to take a look at <span class="error">[the NUXJSONSerializer tests](https://github.com/nuxeo/nuxeo-sdk-ios/blob/release-6.0/NuxeoSDK/NuxeoSDKTests/Classes/NUXJSONSerializerTests.m)</span> hosted in GitHub.

### Convenience Category to Generate Common Requests

```
import <NuxeoSDK/NUXSession+requests.h>
```

To ease the request generation on some common requests like fetchDocument, get document children, query, etc., we added a category which adds these methods to a `NUXSession` object.

Here is a sample of convenience method, but do not hesitate to look at the <span class="error">[NUXSession+requests.h](https://github.com/nuxeo/nuxeo-sdk-ios/blob/release-6.0/NuxeoSDK/NuxeoSDK/Classes/NUXSession+requests.h)</span> file itself.

```
// Prefilled request messages
 NUXRequest *request = [session requestDocument: @"uid|path"];
request = [session requestChildren: @"uid|path"];
 request = [session requestQuery: @"SELECT * FROM Folder"];
// You can pass JSON dictionnary or NUXEntity
 [session requestUpdateDocument: myDoc];
 [session requestDeleteDocument: myDoc];
 [session requestCreateDocument: myDoc withParent: @"/default-domain"];
```

&nbsp;

Do not hesitate to take a look at <span class="error">[the NUXSession tests](https://github.com/nuxeo/nuxeo-sdk-ios/blob/release-6.0/NuxeoSDK/NuxeoSDKTests/Classes/NUXSessionTests.m)</span> hosted in GitHub.

## Automation Requests

We define a specific request for calling Automation operations. It exposes more Automation concepts like operation input (with a document or a file), operation context and operation parameters.

```
NUXAutomationRequest *request = [session requestOperation:@"FileManager.Import"];
 [request addContextValue:@"/default-domain/workspaces" forKey:@"currentDocument"];
 [request setInputFile:aFilePath];
// or more simply
 request = [session requestImportFile:file withParent:@"/default-domain/workspaces"];
```

## Cache

### Hierarchical Cache

Hierarchical cache is initialized with one request to define the hierarchy nodes. Then for each node you can define a block to fill its content. Nodes and content are stored in a SQLite database and available offline. Content could be refreshed automatically when online (default behavior).

Each hierarchy is identified with a unique name.

Here is a sample to initialize a hierarchy.

{{#> callout type='tip' }}

Don't forget to initiate it with blocks at your application startup, even if you don't need to load it at a time and even if `loadWithRequest` takes into account if the hierarchy is loaded or not.

{{/callout}}

```
NUXHierarchy *hierarchy = [NUXHierarchy hierarchyWithName:@"mainHierarchy"];
 NUXRequest *request = [session requestQuery:@"select * from Document where ecm:mixinType = 'Folderish'"];
 [hierarchy loadWithRequest:request]; //loading is asynchronous
[hierarchy waitUntilLoadingIsDone]; //exists, if you really need it.
```

&nbsp;

<div class="external-link">In this sample, no **content block** is defined, so you'll have to manage your node content outside of the hierarchy mecanism. After this async initialization, you'll be able to browse nodes, for instance.</div>

<div class="external-link">

&nbsp;

```
hierarchy.childrenOfRoot; // Return all root nodes
 [hierarchy childrenOfDocument:@"/default-domain"]; // Assuming your request has loaded /default-domain
If you want to use the provided node's content management, you just have to define a content block like this:
NUXHierarchy *hierarchy = [NUXHierarchy hierarchyWithName:@"mainHierarchy"];
 hierarchy.nodeBlock = ^NSArray *(NUXEntity *entity, NSUInteger depth)
 {
 NUXDocument *doc = (NUXDocument *)entity;
 if ([self shouldLoadDocumentsForNode:doc withDepth:depth] == YES)
{
 NUXSession *nuxSession = [NUXSession sharedSession]; // retrieve all 
documents in this node in synchronize mode NSString *subRequestFormat = 
@"SELECT * FROM Document where ecm:parentId = '%@'and ecm:currentLifeCycleState <> 'deleted'"; NSString *subRequestQuery = [NSString stringWithFormat:subRequestFormat, doc.uid]; NUXRequest *nuxSubRequest = [nuxSession requestQuery:subRequestQuery]; [nuxSubRequest startSynchronous]; NUXDocuments *documents = [nuxSubRequest responseEntityWithError:nil]; return documents.entries; }return nil;
 };
NUXRequest *request = [session requestQuery:@"select * from Document where ecm:mixinType = 'Folderish'"];
 [hierarchy loadWithRequest:request]; //loading is asynchronous
```

&nbsp;

</div>

The goal of a `nodeBlock` is to return an array of documents that you want to get as the content of a node. Note that `nodeBlock` is executed in a separate thread, so if you want to get documents from a request, you have to start it **synchronously**.</div>

<div class="external-link">

&nbsp;

{{#> callout type='tip' }}

While you are online, the same block is called each time you get content.

{{/callout}}

### Blob LRU cache

We provide a LRU cache to easily store your blob with an API-oriented `NUXEntity` or digest. You can change the maximum size and maximum items in cache. Size is defined in bytes.

```
[NUXBlobStore instance].sizeLimit = @(2*1024*1024*1024); // Set cache limit to 2Go
[NUXBlobStore instance].countLimit = @(10); // Set item limit to 10.
```

&nbsp;

`NUXBlobStore` removes the least recently used items first. Default values are unlimited size and 100 items. It uses blob digest as a key store. You can test if a blob is present, save a new blob, delete a specific blob from cache or reset the whole cache.

```
// Saving a blob
 NSString *storePath = [[NUXBlobStore instance] saveBlobFromPath:filePath withDocument:doc metadataXPath:@"file:content"];
// Accessing a blob with his digest
 NSString *digest = [[doc.properties valueForKey:@"file:content"] valueForKey:@"digest"];
 NSString *blobPath = [[NUXBlobStore instance] blob:digest];
 // Removing blob
 [[NUXBlobStore instance] removeBlob:digest];
```

Do not hesitate to take a look at <span class="error">[the NUXBlobStore tests](https://github.com/nuxeo/nuxeo-sdk-ios/blob/release-6.0/NuxeoSDK/NuxeoSDKTests/Classes/NUXBlobStoreTests.m)</span> hosted in GitHub.

</div>