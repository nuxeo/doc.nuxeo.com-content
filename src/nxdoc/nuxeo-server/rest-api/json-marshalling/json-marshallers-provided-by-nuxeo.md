---
title: JSON Marshallers Provided by the Nuxeo Platform
review:
    comment: ''
    date: '2017-01-11'
    status: ok
labels:
    - rest-api
    - json
    - marshalling
toc: true
tree_item_index: 100

---

Each existing marshaller class provides a well documented Javadoc. Please, read the corresponding Javadoc to understand the generated JSON format and the available parameters.

#### **document**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

DocumentModel

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[DocumentModelJsonWriter](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/core/io/marshallers/json/document/DocumentModelJsonWriter.html)

</td><td colspan="1">

Writes a document as JSON. It is enrichable and extendable.

*   `properties=*`
    Loads all document's properties
*   `properties=dublincore,file`
    Loads only `dublincore` and `file` schemas
*   `fetch.document=properties`
    Loads every properties associated with a resolver
*   `fetch.document=versionLabel`
    Loads the versioning information
*   `fetch.document=lock`
    Loads the lock owner and the lock date

</td></tr><tr><td colspan="1">

DocumentModel

</td><td colspan="1">

JSON-to-Java

</td><td colspan="1">

[DocumentModelJsonReader](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/core/io/marshallers/json/document/DocumentModelJsonReader.html)

</td><td colspan="1">

Reads a document from JSON. Supports either reference or JSON object for extended fields value.

*   If an uid is specified, it will update the existing document with the given properties. The result is a DocumentModelImpl ready to save.
*   Otherwise, you have to specify the name and the type of the document.
*   The result is a SimpleDocumentModel.

</td></tr></tbody></table></div>

#### **document / acls**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

DocumentModel

</td><td colspan="1">

Java-to-JSON Enricher

</td><td colspan="1">

[ACLJsonEnricher](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/permissions/ACLJsonEnricher.html)

</td><td colspan="1">

Enriches a document. Adds document ACLs.

Activated with `enrichers.document=acls.`

</td></tr></tbody></table></div>

#### **document / permissions**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

DocumentModel

</td><td colspan="1">

Java-to-JSON Enricher

</td><td colspan="1">

[BasePermissionsJsonEnricher](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/core/io/marshallers/json/enrichers/BasePermissionsJsonEnricher.html)

</td><td colspan="1">

Enriches a document. Adds user's permission on the document.

Activated with `enrichers.document=permissions`.

</td></tr></tbody></table></div>

#### **document / breadcrumb**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java type</th><th colspan="1">Type</th><th colspan="1">Java class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

DocumentModel

</td><td colspan="1">

Java-to-JSON Enricher

</td><td colspan="1">

[BreadcrumbJsonEnricher](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/core/io/marshallers/json/enrichers/BreadcrumbJsonEnricher.html)

</td><td colspan="1">

Enriches a document. Add the parent's documents.

Activated with `enrichers.document=breadcrumb`.

</td></tr></tbody></table></div>

#### **document / children**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

DocumentModel

</td><td colspan="1">

Java-to-JSON Enricher

</td><td colspan="1">

[ChildrenJsonEnricher](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/core/io/marshallers/json/enrichers/ChildrenJsonEnricher.html)

</td><td colspan="1">

Enriches a document. Adds the children documents.

Activated with `enrichers.document=children`.

</td></tr></tbody></table></div>

#### **document / contextualParameters**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

DocumentModel

</td><td colspan="1">

Java-to-JSON Enricher

</td><td colspan="1">

[ContextualParametersJsonEnricher](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/core/io/marshallers/json/enrichers/ContextualParametersJsonEnricher.html)

</td><td colspan="1">

Enriches a document with free key/value pair. Only from the server side.

```
String name = "contextualParameters";
Map<String, String> keyValues = ...;
ctx.enrich(name).param(name, keyValues).get();
```

</td></tr></tbody></table></div>

#### **document / preview**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

DocumentModel

</td><td colspan="1">

Java-to-JSON Enricher

</td><td colspan="1">

[PreviewJsonEnricher](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/platform/preview/io/PreviewJsonEnricher.html)

</td><td colspan="1">

Enriches a document. Adds the URL of its preview.

Activated with `enrichers.document=preview`.

</td></tr></tbody></table></div>

#### **document / thumbnail**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

DocumentModel

</td><td colspan="1">

Java-to-JSON Enricher

</td><td colspan="1">

[ThumbnailJsonEnricher](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/platform/ui/web/io/ThumbnailJsonEnricher.html)

</td><td colspan="1">

Enriches a document. Adds the URL of its thumbnail.

Activated with `enrichers.document=thumbnail`.

</td></tr></tbody></table></div>

#### **documents**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

List<DocumentModel>

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[DocumentModelListJsonWriter](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/core/io/marshallers/json/document/DocumentModelListJsonWriter.html)

</td><td colspan="1">

Writes a list of document as JSON.

Supports paginated lists and provides pagination information.

Delegates the document's writing to the Nuxeo Platform.

</td></tr><tr><td colspan="1">

List<DocumentModel>

</td><td colspan="1">

JSON-to-Java

</td><td colspan="1">

[DocumentModelListJsonReader](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/core/io/marshallers/json/document/DocumentModelListJsonReader.html)

</td><td colspan="1">

Reads a list of document from JSON.

Delegates the document's reading to the Nuxeo Platform.

</td></tr></tbody></table></div>

#### **acls**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

ACP

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[ACPJsonWriter](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/core/io/marshallers/json/document/ACPJsonWriter.html)

</td><td colspan="1">

Writes a set of access right as JSON. It is enrichable and extendable

</td></tr></tbody></table></div>

#### **docType**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

DocumentType

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[DocumentTypeJsonWriter](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/core/io/marshallers/json/types/DocumentTypeJsonWriter.html)

</td><td colspan="1">

Writes a document's type as JSON.

It is enrichable and extendable

Delegates the writing of the type's schemas to the Nuxeo Platform.

</td></tr></tbody></table></div>

#### **docTypes**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

List<DocumentType>

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[DocumentTypeListJsonWriter](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/core/io/marshallers/json/types/DocumentTypeListJsonWriter.html)

</td><td colspan="1">

Writes a list of document's types as JSON.

Supports paginated lists and provides pagination information.

Delegates the type's writing to the Nuxeo Platform.

</td></tr></tbody></table></div>

#### **facet**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

CompositeType

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[FacetJsonWriter](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/core/io/marshallers/json/types/FacetJsonWriter.html)

</td><td colspan="1">

Writes a document's facet as JSON.

It is enrichable and extendable.

Delegates the writing of the facet's schemas to the Nuxeo Platform.

</td></tr></tbody></table></div>

#### **facets**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

List<CompositeType>

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[FacetListJsonWriter](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/core/io/marshallers/json/types/FacetListJsonWriter.html)

</td><td colspan="1">

Writes a list of facets as JSON.

Supports paginated lists and provides pagination information.

Delegates the facet's writing to the Nuxeo Platform.

</td></tr></tbody></table></div>

#### **schema**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

Schema

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[SchemaJsonWriter](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/core/io/marshallers/json/types/SchemaJsonWriter.html)

</td><td colspan="1">

Writes a schema as JSON.

It is enrichable and extendable.

</td></tr></tbody></table></div>

#### **schemas**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

List<Schema>

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[SchemaListJsonWriter](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/core/io/marshallers/json/types/SchemaListJsonWriter.html)

</td><td colspan="1">

Writes a list of schemas as JSON.

Supports paginated lists and provides pagination information.

Delegates the schema's writing to the Nuxeo Platform.

</td></tr></tbody></table></div>

#### **validation_constraint**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

Constraint

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[ConstraintJsonWriter](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/core/io/marshallers/json/validation/ConstraintJsonWriter.html)

</td><td colspan="1">

Writes a validation constraint as JSON.

It is enrichable and extendable.

</td></tr></tbody></table></div>

#### **validation_constraints**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

List<Constraint>

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[ConstraintListJsonWriter](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/core/io/marshallers/json/validation/ConstraintListJsonWriter.html)

</td><td colspan="1">

Writes a list of constraints as JSON.

Supports paginated lists and provides pagination information.

Delegates the constraint's writing to the Nuxeo Platform.

</td></tr></tbody></table></div>

#### **validation_report**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

DocumentValidationReport

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[DocumentValidationReportJsonWriter](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/core/io/marshallers/json/validation/DocumentValidationReportJsonWriter.html)

</td><td colspan="1">

Writes a validation report as JSON.

It is enrichable and extendable.

Delegates the constraint's writing to the Nuxeo Platform.

</td></tr></tbody></table></div>

#### **user**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

NuxeoPrincipal

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[NuxeoPrincipalJsonWriter](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/platform/usermanager/io/NuxeoPrincipalJsonWriter.html)

</td><td colspan="1">

Writes a user as JSON.

It is enrichable and extendable.

</td></tr><tr><td colspan="1">

NuxeoPrincipal

</td><td colspan="1">

JSON-to-Java

</td><td colspan="1">

[NuxeoPrincipalJsonReader](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/platform/usermanager/io/NuxeoPrincipalJsonReader.html)

</td><td colspan="1">

Reads a user from JSON

</td></tr></tbody></table></div>

#### **users**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

List<NuxeoPrincipal>

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[NuxeoPrincipalListJsonWriter](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/platform/usermanager/io/NuxeoPrincipalListJsonWriter.html)

</td><td colspan="1">

Writes a list of users as JSON.

Supports paginated lists and provides pagination information.

Delegates the user's writing to the Nuxeo Platform.

</td></tr><tr><td colspan="1">

List<NuxeoPrincipal>

</td><td colspan="1">

JSON-to-Java

</td><td colspan="1">

[NuxeoPrincipalListJsonReader](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/platform/usermanager/io/NuxeoPrincipalListJsonReader.html)

&nbsp;

</td><td colspan="1">

Reads a list of users from JSON.

Delegates the user's reading to the Nuxeo Platform

</td></tr></tbody></table></div>

#### **group**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

NuxeoGroup

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[NuxeoGroupJsonWriter](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/platform/usermanager/io/NuxeoGroupJsonWriter.html)

</td><td colspan="1">

Writes a group as JSON.

It is enrichable and extendable.

</td></tr><tr><td colspan="1">

NuxeoGroup

</td><td colspan="1">

JSON-to-Java

</td><td colspan="1">

[NuxeoGroupJsonReader](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/platform/usermanager/io/NuxeoGroupJsonReader.html)

</td><td colspan="1">

Reads a group from JSON

</td></tr></tbody></table></div>

#### **groups**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

List<NuxeoGroup>

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[NuxeoGroupListJsonWriter](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/platform/usermanager/io/NuxeoGroupListJsonWriter.html)

</td><td colspan="1">

Writes a list of groups as JSON.

Supports paginated lists and provides pagination information.

Delegates the group's writing to the Nuxeo Platform

</td></tr><tr><td colspan="1">

List<NuxeoGroup>

</td><td colspan="1">

JSON-to-Java

</td><td colspan="1">

[NuxeoGroupListJsonReader](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/platform/usermanager/io/NuxeoGroupListJsonReader.html)

</td><td colspan="1">

Reads a list of groups from JSON.

Delegates the group's reading to the Nuxeo Platform.

</td></tr></tbody></table></div>

#### directoryEntry

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

DirectoryEntry

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[DirectoryEntryJsonWriter](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/directory/io/DirectoryEntryJsonWriter.html)

</td><td colspan="1">

Writes a directory entry as JSON. It is enrichable and extendable

*   `fetch.directoryEntry=parent`
    Loads the entry's `parent` field as the corresponding entry in the same directoryL
    Useful for `dc:subjects` or `dc:coverage` values.
*   `translate.directoryEntry=label`
    Translates the label if it matches an existing l10n key.
    Useful for `dc:nature` values.

</td></tr><tr><td colspan="1">

DirectoryEntry

</td><td colspan="1">

JSON-to-Java

</td><td colspan="1">

[DirectoryEntryJsonReader](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/directory/io/DirectoryEntryJsonReader.html)

</td><td colspan="1">

Reads a directory entry from JSON

</td></tr></tbody></table></div>

#### **directoryEntries**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

List<DirectoryEntry>

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[DirectoryEntryListJsonWriter](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/directory/io/DirectoryEntryListJsonWriter.html)

</td><td colspan="1">

Writes a list of directory entries as JSON.

Supports paginated lists and provides pagination information.

Delegates the directory entries writing to the Nuxeo Platform.

</td></tr><tr><td colspan="1">

List<DirectoryEntry>

</td><td colspan="1">

JSON-to-Java

</td><td colspan="1">

[DirectoryEntryListJsonReader](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/directory/io/DirectoryEntryListJsonReader.html)

</td><td colspan="1">

Reads a list of directory entries from JSON.

Delegates the directory entries reading to the Nuxeo Platform.

</td></tr></tbody></table></div>

#### **logEntry**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

LogEntry

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[LogEntryJsonWriter](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/platform/audit/io/LogEntryJsonWriter.html)

</td><td colspan="1">

Writes an audit entry to JSON.

It is enrichable and extendable.

</td></tr><tr><td colspan="1">

List<LogEntry>

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[LogEntryListJsonWriter](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/platform/audit/io/LogEntryListJsonWriter.html)

</td><td colspan="1">

Writes a list of audit entries to JSON

It is enrichable and extendable.

Delegates the entries writing to the Nuxeo Platform.

</td></tr></tbody></table></div>

#### **workflow**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

DocumentRoute

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[DocumentRouteWriter](http://community.nuxeo.com/api/nuxeo/8.3/javadoc/org/nuxeo/ecm/platform/routing/core/io/DocumentRouteWriter.html)

</td><td colspan="1">

Writes a workflow instance (DocumentRoute) as JSON. It is enrichable and extendable.

*   `fetch.workflow=initiator`
    Resolves the initiator.
*   `fetch.workflow=attachedDocumentIds`
    Resolves the attached document Ids

</td></tr></tbody></table></div>

#### **task**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Managed Java Type</th><th colspan="1">Type</th><th colspan="1">Java Class</th><th colspan="1">Behavior</th></tr><tr><td colspan="1">

Task

</td><td colspan="1">

Java-to-JSON

</td><td colspan="1">

[TaskWriter](http://community.nuxeo.com/api/nuxeo/8.3/javadoc/org/nuxeo/ecm/platform/routing/core/io/TaskWriter.html)

</td><td colspan="1">

Writes a task as JSON. It is enrichable and extendable.

*   `fetch.task=actors`
    Resolves the actors.
*   `fetch.task=targetDocumentIds`
    Resolves the target document Ids

</td></tr></tbody></table></div>
