---
title: Default JSON Marshallers
review:
    comment: ''
    date: '2017-12-12'
    status: ok
labels:
    - lts2016-ok
    - rest-api
    - troger
    - json
    - marshalling
    - lts2017-ok
toc: true
tree_item_index: 100

---

Each existing marshaller class has a detailed Javadoc. Please read the corresponding Javadoc to fully understand the generated JSON format and available parameters.

## Java-to-JSON Marshallers

### DocumentModel

`DocumentModel`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [DocumentModelJsonWriter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/document/DocumentModelJsonWriter.html)
        </td>
        <td class="small-7">
        Writes a document as JSON. It is enrichable and extendable.<br />
        `properties=*`<br />
        Loads all document's properties<br />
        `properties=dublincore,file`<br />
        Loads only `dublincore` and `file` schemas<br />
        `fetch.document=properties`<br />
        Loads every properties associated with a resolver<br />
        `fetch.document=versionLabel`<br />
        Loads the versioning information<br />
        `fetch.document=lock`<br />
        Loads the lock owner and the lock date<br />
        </td>
      </tr>
      <tr>
        <td class="small-5">
        [ACLJsonEnricher](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/permissions/ACLJsonEnricher.html)
        </td>
        <td class="small-7">
        Enriches a document, adding document ACLs. Activated with `enrichers.document=acls`.
        </td>
      </tr>
      <tr>
        <td class="small-5">
        [BasePermissionsJsonEnricher](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/enrichers/BasePermissionsJsonEnricher.html)
        </td>
        <td class="small-7">
        Enriches a document, adding user's permissions to the document. Activated with `enrichers.document=permissions`.
        </td>
      </tr>
      <tr>
        <td class="small-5">
        [BreadcrumbJsonEnricher](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/enrichers/BreadcrumbJsonEnricher.html)
        </td>
        <td class="small-7">
        Enriches a document, adding the parent's documents. Activated with `enrichers.document=breadcrumb`.
        </td>
      </tr>
      <tr>
        <td class="small-5">
        [ChildrenJsonEnricher](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/enrichers/ChildrenJsonEnricher.html)
        </td>
        <td class="small-7">
        Enriches a document, adding the children documents. Activated with `enrichers.document=children`.
        </td>
      </tr>
      <tr>
        <td class="small-5">
        [ContextualParametersJsonEnricher](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/enrichers/ContextualParametersJsonEnricher.html)
        </td>
        <td class="small-7">
        Enriches a document with free key/value pair. Only from the server side.<br />
        `String name = "contextualParameters";`<br />
        `Map<String, String> keyValues = ...;`<br />
        `ctx.enrich(name).param(name, keyValues).get();`
        </td>
      </tr>
      <tr>
        <td class="small-5">
        [PreviewJsonEnricher](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/preview/io/PreviewJsonEnricher.html)
        </td>
        <td class="small-7">
        Enriches a document, adding the URL of its preview. Activated with `enrichers.document=preview`.
        </td>
      </tr>
      <tr>
        <td class="small-5">
        [ThumbnailJsonEnricher](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/ui/web/io/ThumbnailJsonEnricher.html)
        </td>
        <td class="small-7">
        Enriches a document, adding the URL of its thumbnail. Activated with `enrichers.document=thumbnail`.
        </td>
      </tr>
    </tbody>
  </table>
</div>

`List<DocumentModel>`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
        [DocumentModelListJsonWriter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/document/DocumentModelListJsonWriter.html)
        </td>
        <td class="small-7">
        Writes a list of documents as JSON. Supports paginated lists and provides pagination information. Delegates the document's writing to the Nuxeo Platform.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### ACP

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [ACPJsonWriter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/document/ACPJsonWriter.html)
        </td>
        <td class="small-7">
        Writes a set of access rights as JSON. Enrichable and extendable.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### DocumentType

`DocumentType`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [DocumentTypeJsonWriter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/types/DocumentTypeJsonWriter.html)
        </td>
        <td class="small-7">
        Writes a document's type as JSON. Enrichable and extendable. Delegates the writing of the type's schemas to the Nuxeo Platform.
        </td>
      </tr>
    </tbody>
  </table>
</div>

`List<DocumentType>`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [DocumentTypeListJsonWriter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/types/DocumentTypeListJsonWriter.html)
        </td>
        <td class="small-7">
        Writes a list of document types as JSON. Supports paginated lists and provides pagination information. Delegates the type's writing to the Nuxeo Platform.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### CompositeType

`CompositeType`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [FacetJsonWriter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/types/FacetJsonWriter.html)
        </td>
        <td class="small-7">
        Writes a document's facet as JSON. Enrichable and extendable. Delegates the writing of the facet's schemas to the Nuxeo Platform.
        </td>
      </tr>
    </tbody>
  </table>
</div>

`List<CompositeType>`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [FacetListJsonWriter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/types/FacetListJsonWriter.html)
        </td>
        <td class="small-7">
        Writes a list of facets as JSON. Supports paginated lists and provides pagination information. Delegates the facet's writing to the Nuxeo Platform.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Schema

`Schema`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [SchemaJsonWriter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/types/SchemaJsonWriter.html)
        </td>
        <td class="small-7">
        Writes a schema as JSON. It is enrichable and extendable.
        </td>
      </tr>
    </tbody>
  </table>
</div>

`List<Schema>`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [SchemaListJsonWriter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/types/SchemaListJsonWriter.html)
        </td>
        <td class="small-7">
        Writes a list of schemas as JSON. Supports paginated lists and provides pagination information. Delegates the schema's writing to the Nuxeo Platform.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Constraint

`Constraint`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [ConstraintJsonWriter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/validation/ConstraintJsonWriter.html)
        </td>
        <td class="small-7">
        Writes a validation constraint as JSON. Enrichable and extendable.
        </td>
      </tr>
    </tbody>
  </table>
</div>

`List<Constraint>`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [ConstraintListJsonWriter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/validation/ConstraintListJsonWriter.html)
        </td>
        <td class="small-7">
        Writes a list of constraints as JSON. Supports paginated lists and provides pagination information. Delegates the constraint's writing to the Nuxeo Platform.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### DocumentValidationReport

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [DocumentValidationReportJsonWriter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/validation/DocumentValidationReportJsonWriter.html)
        </td>
        <td class="small-7">
        Writes a validation report as JSON. Enrichable and extendable. Delegates the constraint's writing to the Nuxeo Platform.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### NuxeoPrincipal

`NuxeoPrincipal`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [NuxeoPrincipalJsonWriter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/usermanager/io/NuxeoPrincipalJsonWriter.html)
        </td>
        <td class="small-7">
        Writes a user as JSON. Enrichable and extendable.
        </td>
      </tr>
    </tbody>
  </table>
</div>

`List<NuxeoPrincipal>`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [NuxeoPrincipalListJsonWriter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/usermanager/io/NuxeoPrincipalListJsonWriter.html)
        </td>
        <td class="small-7">
        Writes a list of users as JSON. Supports paginated lists and provides pagination information. Delegates the user's writing to the Nuxeo Platform.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### NuxeoGroup

`NuxeoGroup`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [NuxeoGroupJsonWriter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/usermanager/io/NuxeoGroupJsonWriter.html)
        </td>
        <td class="small-7">
        Writes a group as JSON. It is enrichable and extendable.
        </td>
      </tr>
    </tbody>
  </table>
</div>

`List<NuxeoGroup>`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [NuxeoGroupListJsonWriter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/usermanager/io/NuxeoGroupListJsonWriter.html)
        </td>
        <td class="small-7">
        Writes a list of groups as JSON. Supports paginated lists and provides pagination information. Delegates the group's writing to the Nuxeo Platform.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### DirectoryEntry

`DirectoryEntry`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [DirectoryEntryJsonWriter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/directory/io/DirectoryEntryJsonWriter.html)
        </td>
        <td class="small-7">
        Writes a directory entry as JSON. Enrichable and extendable.<br />
        `fetch.directoryEntry=parent`<br />
        Loads the entry's `parent` field as the corresponding entry in the same directory. Useful for `dc:subjects` or `dc:coverage` values.<br />
        `translate.directoryEntry=label`<br />
        Translates the label if it matches an existing `l10n` key. Useful for `dc:nature` values.
        </td>
      </tr>
    </tbody>
  </table>
</div>

`List<DirectoryEntry>`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [DirectoryEntryListJsonWriter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/directory/io/DirectoryEntryListJsonWriter.html)
        </td>
        <td class="small-7">
        Writes a list of directory entries as JSON. Supports paginated lists and provides pagination information. Delegates the directory entries writing to the Nuxeo Platform.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### LogEntry

`LogEntry`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [LogEntryJsonWriter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/audit/io/LogEntryJsonWriter.html)
        </td>
        <td class="small-7">
        Writes an audit entry to JSON. Enrichable and extendable.
        </td>
      </tr>
    </tbody>
  </table>
</div>

`List<LogEntry>`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [LogEntryListJsonWriter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/audit/io/LogEntryListJsonWriter.html)
        </td>
        <td class="small-7">
        Writes a list of audit entries to JSON. Enrichable and extendable. Delegates the entries writing to the Nuxeo Platform.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### DocumentRoute

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [DocumentRouteWriter](http://community.nuxeo.com/api/nuxeo/8.3/javadoc/org/nuxeo/ecm/platform/routing/core/io/DocumentRouteWriter.html)
        </td>
        <td class="small-7">
        Writes a workflow instance (DocumentRoute) as JSON. Enrichable and extendable.<br />
        `fetch.workflow=initiator`<br />
        Resolves the initiator<br />
        `fetch.workflow=attachedDocumentIds`<br />
        Resolves the attached document IDs
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Task

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [TaskWriter](http://community.nuxeo.com/api/nuxeo/8.3/javadoc/org/nuxeo/ecm/platform/routing/core/io/TaskWriter.html)
        </td>
        <td class="small-7">
        Writes a task as JSON. Enrichable and extendable.<br />
        `fetch.task=actors`<br />
        Resolves the actors.<br />
        `fetch.task=targetDocumentIds`<br />
        Resolves the target document Ids
        </td>
      </tr>
    </tbody>
  </table>
</div>

## JSON-to-Java Marshallers

### DocumentModel

`DocumentModel`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [DocumentModelJsonReader](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/document/DocumentModelJsonReader.html)
        </td>
        <td class="small-7">
        Reads a document from JSON. Supports either reference or JSON object for extended fields value.<br />
        If an uid is specified, it will update the existing document with the given properties. The result is a `DocumentModelImpl` ready to save. Otherwise, you have to specify the name and the type of the document and the result is a `SimpleDocumentModel`.
        </td>
      </tr>
    </tbody>
  </table>
</div>

`List<DocumentModel>`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [DocumentModelListJsonReader](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/document/DocumentModelListJsonReader.html)
        </td>
        <td class="small-7">
        Reads a list of document from JSON. Delegates the document's reading to the Nuxeo Platform.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### NuxeoPrincipal

`NuxeoPrincipal`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [NuxeoPrincipalJsonReader](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/usermanager/io/NuxeoPrincipalJsonReader.html)
        </td>
        <td class="small-7">
        Reads a user from JSON.
        </td>
      </tr>
    </tbody>
  </table>
</div>

`List<NuxeoPrincipal>`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [NuxeoPrincipalListJsonReader](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/usermanager/io/NuxeoPrincipalListJsonReader.html)
        </td>
        <td class="small-7">
        Reads a list of users from JSON. Delegates the user's reading to the Nuxeo Platform.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### NuxeoGroup

`NuxeoGroup`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [NuxeoGroupJsonReader](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/usermanager/io/NuxeoGroupJsonReader.html)
        </td>
        <td class="small-7">
        Reads a group from JSON.
        </td>
      </tr>
    </tbody>
  </table>
</div>

`List<NuxeoGroup>`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [NuxeoGroupListJsonReader](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/usermanager/io/NuxeoGroupListJsonReader.html)
        </td>
        <td class="small-7">
        Reads a list of groups from JSON. Delegates the group's reading to the Nuxeo Platform.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### DirectoryEntry

`DirectoryEntry`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [DirectoryEntryJsonReader](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/directory/io/DirectoryEntryJsonReader.html)
        </td>
        <td class="small-7">
        Reads a directory entry from JSON.
        </td>
      </tr>
    </tbody>
  </table>
</div>

`List<DirectoryEntry>`

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-5">Java Class</th>
        <th class="small-7">Behavior</th>
      </tr>
      <tr>
        <td class="small-5">
          [DirectoryEntryListJsonReader](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/directory/io/DirectoryEntryListJsonReader.html)
        </td>
        <td class="small-7">
        Reads a list of directory entries from JSON. Delegates the directory entries reading to the Nuxeo Platform.
        </td>
      </tr>
    </tbody>
  </table>
</div>
