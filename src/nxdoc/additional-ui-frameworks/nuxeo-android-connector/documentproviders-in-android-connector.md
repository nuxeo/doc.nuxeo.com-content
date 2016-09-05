---
title: DocumentProviders in Android Connector
confluence:
    ajs-parent-page-id: '22380574'
    ajs-parent-page-title: Nuxeo Android Connector
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: DocumentProviders+in+Android+Connector
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/DocumentProviders+in+Android+Connector
    page_id: '22380586'
    shortlink: KoBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/KoBVAQ'
    source_link: /display/NXDOC60/DocumentProviders+in+Android+Connector
history:
    - 
        author: Thierry Delprat
        date: '2011-10-05 01:15'
        message: igrated to Confluence 4.
        version: '3'
    - 
        author: Thierry Delprat
        date: '2011-10-05 01:15'
        message: ''
        version: '2'
    - 
        author: Thierry Delprat
        date: '2011-10-05 00:46'
        message: ''
        version: '1'

---
## DocumentProvider and LazyDocumentsList

The DocumentProvider system is basically an extension of the PageProvider notion that exists on the Nuxeo server side.

The `DocumentProvider` service allows to access a list of documents by it's name.

```

	LazyUpdatableDocumentsList documentsList = docProvider.getDocumentsList("MyList", getNuxeoSession());

```

This list of documents will be fetched using an Automation Operation.
This means the content of the document list can be propulated from :

*   children of a Folder
*   content of a InBox (CMF use case)
*   the Clipboad or the Worklist
*   the result of a NXQL query
*   ...

When returning lists of documents, the DocumentProvider does not provide a simple `Documents` type.
It returns a `LazyDocumentsList` type that provides additional features :

*   list will be automatically fetched asynchronously page by page as needed

*   the list will be cached locally to be available offline

*   you can add documents to the list (even in offline mode)

*   you can edit documents to the list (even in offline mode)

*   list definition can be dynamically saved so that you can restore it later

The `DocumentProvider` can be accessed like any service :

```

DocumentProvider docProvider = getNuxeoSession().getAdapter(DocumentProvider.class);

```

DocumentProvider gives access to named list of documents. These lists implement the `LazyDocumentsList` interface and if they support create/update operation they also implement `LazyUpdatableDocumentsList`.

You can define your own `LazyDocumentsList` and register them to the `DocumentProvider` :

```

// register a query
String query = "select * from Document where ecm:mixinType != \"HiddenInNavigation\" AND ecm:isCheckedInVersion = 0 AND ecm:currentLifeCycleState != \"deleted\" order by dc:modified DESC";
docProvider.registerNamedProvider(getNuxeoSession(),"Simple select", query , 10, false, false, null);

// register an operation
// create the fetch operation
OperationRequest getWorklistOperation = getNuxeoSession().newRequest("Seam.FetchFromWorklist");
// define what properties are needed
getWorklistOperation.setHeader("X-NXDocumentProperties", "common,dublincore");
// register provider from OperationRequest
docProvider.registerNamedProvider("Worklist", getWorklistOperation , null, false, false, null);

// register a documentList
String query2 = "SELECT * FROM Document WHERE dc:contributors = ?";
LazyUpdatableDocumentsList docList = new LazyUpdatableDocumentsListImpl(getNuxeoSession(), query2, new String[]{"Administrator"}, null, null, 10);
docList.setName("My Documents");
docProvider.registerNamedProvider(docList, false);

```

When registering a new provider, you can ask for it to be persisted in the local db. The list definition will be saved to the db and the content will be cached.
This allows the end used to define custom lists of documents that will benefit from cache and offline support.

When you need to access one of the named lists you can simply ask the `DocumentProvider` :

```

LazyUpdatableDocumentsList documentsList = docProvider.getDocumentsList(providerName, getNuxeoSession());

```

The Nuxeo Connector provides and Android `ListAdapter` so that you can directly bind the document lists to an Android `ListView`.
(this part will be explained in more details in the next section).

## Create and Update operations on `LazyDocumentsList`

You can add or edit documents :

```

// add a document
Document newDocument = ...
documentsList.createDocument(newDocument);

// update a document
Document doc2Update = documentsList.getDocument(idx);
doc2Update.set("dc:title", "Modified!");
documentsList.updateDocument(Update);

```

The actual implementation on the server side of the create/update operations will depend on your business logic.
Typically, if you list represent the content of a folder or a list of documents matching a topic, you will have different create/update/delete implementations.

<table><tbody><tr><th colspan="1">

List nature

</th><th colspan="1">

Create operation

</th><th colspan="1">

Update operation

</th><th colspan="1">

Delete operation

</th></tr><tr><td colspan="1">

Folder contents

</td><td colspan="1">

Create document in Folder

</td><td colspan="1">

Update document

</td><td colspan="1">

Delete document

</td></tr><tr><td colspan="1">

query on topic

</td><td colspan="1">

Create document in personnal workspace and set topic meta-data

</td><td colspan="1">

Update document

</td><td colspan="1">

unset target meta-data

</td></tr><tr><td colspan="1">

inbox content

</td><td colspan="1">

Get next document from service mailbox and assign to me

</td><td colspan="1">

Update document

</td><td colspan="1">

distribute to next actor of the workflow

</td></tr></tbody></table>

The default implementation create the document with a path that can be configured and does a simple update of the document.

```

protected OperationRequest buildUpdateOperation(Session session, Document updatedDocument) {
	OperationRequest updateOperation = session.newRequest(DocumentService.UpdateDocument).setInput(updatedDocument);
	updateOperation.set("properties", updatedDocument.getDirtyPropertiesAsPropertiesString());
	updateOperation.set("save", true);
	updateOperation.set("changeToken", updatedDocument.getChangeToken()); // prevent dirty updates !
	// add dependency if needed
	markDependencies(updateOperation, updatedDocument);
	return updateOperation;
}

protected OperationRequest buildCreateOperation(Session session, Document newDocument) {
	PathRef parent = new PathRef(newDocument.getParentPath());
	OperationRequest createOperation = session.newRequest(DocumentService.CreateDocument).setInput(parent);
	createOperation.set("type", newDocument.getType());
	createOperation.set("properties", newDocument.getDirtyPropertiesAsPropertiesString());
	if (newDocument.getName()!=null) {
		createOperation.set("name", newDocument.getName());
	}
	// add dependency if needed
	markDependencies(createOperation, newDocument);
	return createOperation;
}

```

You can use your own operation definitions by inehit from `AbstractLazyUpdatebleDocumentsList` and simple implement the 2 methods `buildUpdateOperation` and `buildCreateOperation`.