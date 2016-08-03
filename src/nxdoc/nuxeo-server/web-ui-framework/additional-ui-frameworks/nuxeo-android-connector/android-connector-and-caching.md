---
title: Android Connector and Caching
labels:
    - android-connector-component
    - lts2015-ok
confluence:
    ajs-parent-page-id: '8684332'
    ajs-parent-page-title: Nuxeo Android Connector
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Android+Connector+and+Caching
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Android+Connector+and+Caching'
    page_id: '8684367'
    shortlink: T4OE
    shortlink_source: 'https://doc.nuxeo.com/x/T4OE'
    source_link: /display/NXDOC/Android+Connector+and+Caching
history:
    - 
        author: Solen Guitter
        date: '2013-07-18 10:14'
        message: ''
        version: '10'
    - 
        author: Julien Carsique
        date: '2013-07-17 05:04'
        message: ''
        version: '9'
    - 
        author: Julien Carsique
        date: '2013-07-17 04:19'
        message: ''
        version: '8'
    - 
        author: Julien Carsique
        date: '2013-07-17 04:08'
        message: ''
        version: '7'
    - 
        author: Thierry Delprat
        date: '2011-10-12 19:10'
        message: Migrated to Confluence 4.0
        version: '6'
    - 
        author: Thierry Delprat
        date: '2011-10-12 19:10'
        message: ''
        version: '5'
    - 
        author: Thierry Delprat
        date: '2011-10-04 18:57'
        message: ''
        version: '4'
    - 
        author: Thierry Delprat
        date: '2011-10-04 18:36'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2011-10-04 18:17'
        message: ''
        version: '2'
    - 
        author: Thierry Delprat
        date: '2011-10-04 14:36'
        message: ''
        version: '1'

---
![]({{file name='AndroidSDK.png'}} ?w=755,h=306,border=true)

## ResponseCache

Automation responses can be cached.&nbsp;This basically means that the JSON response sent by the Nuxeo server is stored on the local filesystem and is associated with a DB record that maintains metadata.
The extra metadata in the SQL DB are used to be able to match a response with the corresponding request. The DB also contains the informations to be able to reconstruct the request, so that the cache can be refreshed.

Compared to the "standard Automation Client API", when calling an operation you can specify expected caching behavior.

```
  DocRef docRef = new PathRef("/");

  // Call with no CacheBehavior => default to CacheBehavior.STORE
  session.newRequest("Document.GetChildren").setInput(docRef).execute();

  // Call with CacheBehavior.STORE => will cache the response
  session.newRequest("Document.GetChildren").setInput(docRef).execute(CacheBehavior.STORE);

  // Force refresh (try to fetch from server, store to cache)
  session.newRequest("Document.GetChildren").setInput(docRef).execute(CacheBehavior.FORCE_REFRESH);

```

## TransientState

This cache stores document deltaset (changes done in the document).&nbsp;This includes newly created documents that do only exist in local.

The TransientState manager is mainly updated via events (`AndroidTransientStateManager` is a `BroadcastReceiver`).

This design helps making the TransientState management as transparent as possible.&nbsp;When a Document is created or update in local, a event is sent : TransientStateManager stores the delta.&nbsp;When the create/update operation has been processed by the server a new event will be fired and the TransientStateManager will delete the local storage.

To reflect the synchronization status, the Document has a `getStatusFlag()` that returns an Enum:

*   `"new"` means that the document only exists in local for now,
*   `"updated"` means that the document hold local modifications that have not yet been pushed to the server,
*   `""` means that the document is synchronized with the server,
*   `"conflict"` means that the push on the server resulted in a conflict,

`TransientStateManager` exposes an API to automatically fetch and merge deltasets on a List of Documents, but in most of the cases this is already encapsulated by the DocumentProviders.

## Deferred Updates

This caches keeps track of the Create/Update/Delete operations that are pending and should be sent to the server when network is accessible.&nbsp;Each cached operation is indirectly linked to a set of TransientState.&nbsp;In addition, pending Request can have dependencies:

*   dependencies between update requests,
*   dependencies with pending Uploads.

Deferred Updates system is exposed via `DeferredUpdateManager` service interface.&nbsp;This service can be used to send an update request:

```
String execDeferredUpdate(OperationRequest request, AsyncCallback cb, OperationType opType, boolean executeNow);

```