---
title: Android Connector additional Services
confluence:
    ajs-parent-page-id: '22380574'
    ajs-parent-page-title: Nuxeo Android Connector
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Android+Connector+additional+Services
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/Android+Connector+additional+Services
    page_id: '22380579'
    shortlink: I4BVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/I4BVAQ'
    source_link: /display/NXDOC60/Android+Connector+additional+Services
history:
    - 
        author: Thierry Delprat
        date: '2011-10-05 00:38'
        message: igrated to Confluence 4.
        version: '7'
    - 
        author: Thierry Delprat
        date: '2011-10-05 00:38'
        message: ''
        version: '6'
    - 
        author: Thierry Delprat
        date: '2011-10-05 00:38'
        message: ''
        version: '5'
    - 
        author: Thierry Delprat
        date: '2011-10-05 00:37'
        message: ''
        version: '4'
    - 
        author: Thierry Delprat
        date: '2011-10-05 00:34'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2011-10-04 19:17'
        message: ''
        version: '2'
    - 
        author: Thierry Delprat
        date: '2011-10-04 19:12'
        message: ''
        version: '1'

---
In addition of the Automation Client, Android Connector exposes several services :

## Built in services

### `TransientStateManager`

Manages local storage of locally modified Documents.

### `DeferredUpdateManager`

Manages storage of updates operations until the network becomes available again.

### `ResponseCacheManager`

Manage Storage of server responses.

### `FileDownloader`

This service is also very tied to the caching system.
It manages download in a ThreadPool and caches the result on the Filesystem.

### `FileUploader`

This service works side by side with the `DeferredUpdateManager`.

For Document create/update operations, the Blobs are not directly sent inside the Create/Update request.
Basically, the Blobs are uploaded via the `FileUploader` service and the Create/Update operation will contain a reference to the upload batch.
In order for this to work correctly the DeferredUpdate will have a dependency on the required uploads.

### `NuxeoLayoutService`

## Accessing the services

Services are accessible via simple getters on the `NuxeoContext` and `AndroidAutomationClient` objects.
You can also use the adapter system on the Session object to have direct access to all the services.

```

FileUploader uploader = getNuxeoSession().getAdapter(FileUploader.class);

FileDownloader downloader = getNuxeoSession().getAdapter(FileDownloader.class);

DeferredUpdateManager deferredUpdateManager = getNuxeoSession().getAdapter(DeferredUpdateManager.class);

TransientStateManager transientStateManager = getNuxeoSession().getAdapter(TransientStateManager.class);

ResponseCacheManager responseCacheManager = getNuxeoSession().getAdapter(ResponseCacheManager.class);

NuxeoLayoutService nuxeoLayoutService = getNuxeoSession().getAdapter(NuxeoLayoutService.class);

DocumentMessageService documentMessageService = getNuxeoSession().getAdapter(DocumentMessageService.class);

DocumentProvider documentProvider = getNuxeoSession().getAdapter(DocumentProvider.class);

```