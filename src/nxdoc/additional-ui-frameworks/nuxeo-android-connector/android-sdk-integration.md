---
title: Android SDK Integration
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '22380574'
    ajs-parent-page-title: Nuxeo Android Connector
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Android+SDK+Integration
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Android+SDK+Integration'
    page_id: '22380581'
    shortlink: JYBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/JYBVAQ'
    source_link: /display/NXDOC60/Android+SDK+Integration
history:
    - 
        author: Thierry Delprat
        date: '2011-10-05 01:53'
        message: igrated to Confluence 4.
        version: '7'
    - 
        author: Thierry Delprat
        date: '2011-10-05 01:53'
        message: ''
        version: '6'
    - 
        author: Thierry Delprat
        date: '2011-10-05 01:52'
        message: ''
        version: '5'
    - 
        author: Thierry Delprat
        date: '2011-10-05 01:46'
        message: ''
        version: '4'
    - 
        author: Thierry Delprat
        date: '2011-10-05 01:43'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2011-10-05 01:41'
        message: ''
        version: '2'
    - 
        author: Thierry Delprat
        date: '2011-10-05 01:22'
        message: ''
        version: '1'

---
The Nuxeo Android SDK tries, as much as possible, to expose Nuxeo services in a natural Android way.
The idea is that the SDK should it's features via standard Android concepts and patterns.

## `DocumentsListAdapter`

`DocumentsListAdapter` is a dedicated implementation of the standard Android interface `ListAdapter`.
It allows to bind an Android `ListView` to a `LazyDocumentsList`.

```

// get the document list
LazyDocumentsList documentsList = getDocumentList(data);

// define the mapping between document attributes and widgets
Map<Integer, String> mapping = new HashMap<Integer,String>();
mapping.put(R.id.title_entry, "dc:title");
mapping.put(R.id.status_entry, "status");
mapping.put(R.id.iconView, "iconUri");
mapping.put(R.id.description, "dc:description");
mapping.put(R.id.id_entry, "uuid");

// create the adapter passing it the list, the mapping and the layout
DocumentsListAdapter adapter = new DocumentsListAdapter(this, documentsList, R.layout.list_item, mapping, R.layout.list_item_loading);

// bind to the ListView
listView.setAdapter(adapter);

```

Starting from there you can use your Nuxeo doculent list like any simple list.
The documents list will be fetched and refreshed automaticaly as needed.

If scrolling goes faster than fetching from the server, a waiting item will be displayed with a specific layout ( `R.layout.list_item_loading` in the above exemple).

## `ContentProvider`

Nuxeo's SDK try to expose as much as possible of the content via the Android `ContentProvider` system.

The provider authority is `nuxeo` and depending on the requested `URI` content, the call will be directed to a nuxeo service.
Basically :

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

URI pattern

</th><th colspan="1">

Target Content

</th></tr><tr><td colspan="1">

`content://nuxeo/documents`

</td><td colspan="1">

returns all documents of the repository via an Android Cursor

</td></tr><tr><td colspan="1">

`content://nuxeo/documents/<UUID>`

</td><td colspan="1">

access to document with given UUID

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

`content://nuxeo/<providername>`

</td><td colspan="1">

Android cursor documents in the given provider

</td></tr><tr><td colspan="1">

`content://nuxeo/<providername>/UUID`

</td><td colspan="1">

access to document with UUID in the given provider

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

`content://nuxeo/icons/<subPath>`

</td><td colspan="1">

download and cache icon of the given sub path

</td></tr><tr><td colspan="1">

`content://nuxeo/blobs/<UUID>`

</td><td colspan="1">

download and cache the main blob of the doc with the given UUID

</td></tr><tr><td colspan="1">

`content://nuxeo/blobs/<UUID>/<idx>`

</td><td colspan="1">

download and cache the blob <idx> of the doc with the given UUID

</td></tr><tr><td colspan="1">

`content://nuxeo/blobs/<UUID>/<subPath>`

</td><td colspan="1">

download and cache the blob contained in the field <subpath> of the doc with the given UUID

</td></tr></tbody></table></div>

This ContentProvider allows :

*   to easily bind Nuxeo resources (like images) to Androids Views (like an `ImageView`)
*   to easily use Nuxeo content from an external application
    *   Interprocess marshaling is handled by the ContentProvider system
    *   you don't need to depend on Nuxeo API

## Event system

Android built-in event system is used by the SDK to notify for :

*   Network status changes: when the Nuxeo server becomes reachable or when offline mode is required

*   Configuration changes : when the settings of the NuxeoAutomationClient have been changed

*   Document events : A notification is sent for Create/Update/Delete operations on `LazyDocumentsLists` (with 3 states Local, Server, Failed)

## Service binding

TBD