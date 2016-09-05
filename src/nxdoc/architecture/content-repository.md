---
title: Content Repository
labels:
    - reviewed
toc: true
confluence:
    ajs-parent-page-id: '17334300'
    ajs-parent-page-title: Architecture
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Content+Repository
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Content+Repository'
    page_id: '17334349'
    shortlink: TYAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/TYAIAQ'
    source_link: /display/NXDOC58/Content+Repository
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 15:33'
        message: 'emove children display macro  '
        version: '41'
    - 
        author: Solen Guitter
        date: '2014-01-30 12:23'
        message: ''
        version: '40'
    - 
        author: Solen Guitter
        date: '2013-11-27 15:30'
        message: typo
        version: '39'
    - 
        author: Solen Guitter
        date: '2013-09-25 16:09'
        message: ''
        version: '38'
    - 
        author: Solen Guitter
        date: '2013-09-19 12:09'
        message: 'Fixed typos, removed Jackrabbit from persistence back ends'
        version: '37'
    - 
        author: Solen Guitter
        date: '2013-09-18 18:01'
        message: Fixed some typos
        version: '36'
    - 
        author: Alain Escaffre
        date: '2013-09-16 13:56'
        message: ''
        version: '35'
    - 
        author: Alain Escaffre
        date: '2013-09-16 13:56'
        message: ''
        version: '34'
    - 
        author: Alain Escaffre
        date: '2013-09-16 13:18'
        message: ''
        version: '33'
    - 
        author: Solen Guitter
        date: '2013-09-04 12:07'
        message: ''
        version: '32'
    - 
        author: Solen Guitter
        date: '2013-09-04 12:06'
        message: Formatting
        version: '31'
    - 
        author: Florent Guillaume
        date: '2011-09-13 23:15'
        message: Migrated to Confluence 4.0
        version: '30'
    - 
        author: Florent Guillaume
        date: '2011-09-13 23:15'
        message: document repository -> content repository
        version: '29'
    - 
        author: Florent Guillaume
        date: '2011-02-10 17:46'
        message: Jackrabbit backend is obsolete
        version: '28'
    - 
        author: Solen Guitter
        date: '2011-01-06 18:01'
        message: ''
        version: '27'
    - 
        author: Solen Guitter
        date: '2011-01-04 17:53'
        message: formatting and typos
        version: '26'
    - 
        author: Stéfane Fermigier
        date: '2010-10-15 17:18'
        message: ''
        version: '25'
    - 
        author: Stéfane Fermigier
        date: '2010-10-15 17:15'
        message: ''
        version: '24'
    - 
        author: Stéfane Fermigier
        date: '2010-10-15 17:14'
        message: ''
        version: '23'
    - 
        author: Stéfane Fermigier
        date: '2010-10-15 17:13'
        message: ''
        version: '22'
    - 
        author: Jane Zupan
        date: '2010-09-30 23:15'
        message: ''
        version: '21'
    - 
        author: Stéfane Fermigier
        date: '2010-06-28 08:13'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2010-05-20 17:31'
        message: formatting and typos
        version: '19'
    - 
        author: Thierry Delprat
        date: '2010-05-19 11:37'
        message: ''
        version: '18'
    - 
        author: Thierry Delprat
        date: '2010-05-19 10:58'
        message: ''
        version: '17'
    - 
        author: Thierry Delprat
        date: '2010-05-19 03:17'
        message: ''
        version: '16'
    - 
        author: Thierry Delprat
        date: '2010-05-19 02:47'
        message: ''
        version: '15'
    - 
        author: Thierry Delprat
        date: '2010-05-19 01:55'
        message: ''
        version: '14'
    - 
        author: Thierry Delprat
        date: '2010-05-19 01:53'
        message: ''
        version: '13'
    - 
        author: Thierry Delprat
        date: '2010-05-19 01:51'
        message: ''
        version: '12'
    - 
        author: Thierry Delprat
        date: '2010-05-19 01:50'
        message: ''
        version: '11'
    - 
        author: Thierry Delprat
        date: '2010-05-19 01:49'
        message: ''
        version: '10'
    - 
        author: Thierry Delprat
        date: '2010-05-19 01:43'
        message: ''
        version: '9'
    - 
        author: Thierry Delprat
        date: '2010-05-19 01:37'
        message: ''
        version: '8'
    - 
        author: Thierry Delprat
        date: '2010-05-19 01:33'
        message: ''
        version: '7'
    - 
        author: Thierry Delprat
        date: '2010-05-19 01:32'
        message: ''
        version: '6'
    - 
        author: Thierry Delprat
        date: '2010-05-19 01:29'
        message: ''
        version: '5'
    - 
        author: Thierry Delprat
        date: '2010-05-12 11:20'
        message: ''
        version: '4'
    - 
        author: Thierry Delprat
        date: '2010-05-12 11:09'
        message: ''
        version: '3'
    - 
        author: Admin name placeholder
        date: '2010-03-01 00:38'
        message: ''
        version: '2'
    - 
        author: Admin name placeholder
        date: '2010-03-01 00:37'
        message: ''
        version: '1'

---
A file is a special case of a complex field that contains:

*   A binary stream,
*   A filename,
*   A mime-type,
*   A size.

As a result, a Nuxeo Document can contain zero, one or several files.

In fact, inside the Nuxeo repository, even a folder is seen as a document because it holds metadata (title, creation date, creator, ...).

### Schemas

Document structure is defined using XSD schemas.

XSD schemas provide:

*   A standard way to express structure,
*   A way to define metadata blocks.

Each document type can use one or several schemas.

Here is a simple example of a XSD schema used in Nuxeo Core (a subset of Dublin Core):

```
<?xml version="1.0"?>
<xs:schema
        targetNamespace="http://www.nuxeo.org/ecm/schemas/dublincore/"
        xmlns:xs="http://www.w3.org/2001/XMLSchema"
        xmlns:nxs="http://www.nuxeo.org/ecm/schemas/dublincore/">

    <xs:simpleType name="subjectList">
        <xs:list itemType="xs:string"/>
    </xs:simpleType>
    <xs:simpleType name="contributorList">
        <xs:list itemType="xs:string"/>
    </xs:simpleType>
    <xs:element name="title" type="xs:string"/>
    <xs:element name="description" type="xs:string"/>
    <xs:element name="subjects" type="nxs:subjectList"/>
    <xs:element name="rights" type="xs:string"/>
    <xs:element name="source" type="xs:string"/>
    <xs:element name="coverage" type="xs:string"/>
    <xs:element name="created" type="xs:date"/>
    <xs:element name="modified" type="xs:date"/>
    <xs:element name="issued" type="xs:date"/>
    <xs:element name="valid" type="xs:date"/>
    <xs:element name="expired" type="xs:date"/>
    <xs:element name="format" type="xs:string"/>
    <xs:element name="language" type="xs:string"/>
    <xs:element name="creator" type="xs:string"/>
    <xs:element name="contributors" type="nxs:contributorList"/>
</xs:schema>

```

### Document Types

Inside the Nuxeo Repository, each document has a Document Type.

A document type is defined by:

*   A name,
*   A set of schemas,
*   A set of facets,
*   A base document type.

Document types can inherit from each other.

By using schemas and inheritance you can carefully design how you want to reuse the metadata blocks.

At pure storage level, the facets are simple declarative markers. These marker are used by the repository and other Nuxeo Platform services to define how the document must be handled.

Default facets include:

*   Versionnable,
*   HiddenInNavigation,
*   Commentable,
*   Folderish,
*   ...

Here are some Document Types definition examples:

```
<doctype name="File" extends="Document">
    <schema name="common"/>
    <schema name="file"/>
    <schema name="dublincore"/>
    <schema name="uid"/>
    <schema name="files"/>
    <facet name="Downloadable"/>
    <facet name="Versionable"/>
    <facet name="Publishable"/>
    <facet name="Indexable"/>
    <facet name="Commentable"/>
</doctype>

<doctype name="Folder" extends="Document">
    <schema name="common"/>
    <schema name="dublincore"/>
    <facet name="Folderish"/>
    <subtypes>
        <type>Folder</type>
        <type>File</type>
        <type>Note</type>
    </subtypes>
</doctype>

```

At UI level, Document Types defined in the repository are mapped to high level document types that have additional attributes:

*   Display name,
*   Category,
*   Icon,
*   Visibility,
*   ...

```
<type id="Folder">
    <label>Folder</label>
    <icon>/icons/folder.gif</icon>
    <bigIcon>/icons/folder_100.png</bigIcon>
    <icon-expanded>/icons/folder_open.gif</icon-expanded>
    <category>Collaborative</category>
    <description>Folder.description</description>
    <default-view>view_documents</default-view>
    <subtypes>
        <type>Folder</type>
        <type>File</type>
        <type>Note</type>
    </subtypes>
    <layouts mode="any">
        <layout>heading</layout>
    </layouts>
    <layouts mode="edit">
        <layout>heading</layout>
        <layout>dublincore</layout>
    </layouts>
    <layouts mode="listing">
        <layout>document_listing</layout>
        <layout>document_listing_compact_2_columns</layout>
        <layout>document_listing_icon_2_columns</layout>
    </layouts>
</type>

```

### Life Cycle

Nuxeo Core includes a life cycle service.

Each document type can be bound to a life cycle. The life cycle is responsible for defining:

*   The possible states of the document (ex: draft, validated, obsolete, ...),
*   The possible transitions between states (ex : validate, make obsolete, ...).

![]({{file name='S&eacute;lection_005.png'}} ?w=650,border=true)

Life cycle is not workflow, but:

*   Workflows usually use the life cycle of the document as one of the state variable of the process,
*   You can simulate simple review process using life cycle and listeners (very easy to do using [Nuxeo Studio]({{page space='studio' page='nuxeo-online-services'}}) and Content Automation).

## Security Management

By default, security is always on inside Nuxeo repository: each time a document is accessed or a search is issued, security is verified.

The Nuxeo repository security relies on a list of unitary permissions that are used within the repository to grant or deny access. These atomic permissions (Read_Children, Write_Properties ...) are grouped in Permissions Groups (Read, Write, Everything ...) so that security can be managed more easily.

Nuxeo comes with a default set of permissions and permissions groups but you can contribute yours too.

### ACL Model

The main model for security management is based on an ACL (Access Control List) system.

Each document can be associated with an ACP (Access Control Policy). This ACP is composed of a list of ACLs that itself is composed of ACEs (Access Control Entry).

Each ACE is a triplet:

*   User or Group,
*   Permission or Permission group,
*   Grant or deny.

ACPs are by default inherited: security check will be done against the merged ACP from the current document and all its parent. Inheritance can be blocked at any time if necessary.

Each document can be assigned several ACLs (one ACP) in order to better manage separation of concerns between the rules that define security:

*   The document has a default ACL: The one that can be managed via back-office UI,
*   The document can have several workflows ACLs: ACLs that are set by workflows including the document.

Thanks to this separation between ACLs, it's easy to have the document return to the right security if workflow is ended.

### Security Policies

The ACP/ACL/ACE model is already very flexible.&nbsp;But is some cases, using ACLs to define the security policy is not enough. A classic example would be confidentiality.

Imagine you have a system with confidential documents and you want only people accredited to the matching confidentiality level to be able to see them. Since confidentiality will be a metadata, if you use the ACL system, you have to compute a given ACL every time this metadata is set. You will also have to compute a dedicated user group for each confidentiality level.

In order to resolve this kind of issue, the Nuxeo repository includes a pluggable security policy system. This means you can contribute custom code that will be run to verify security every time it's needed.

Such polices are usually very easy to write, since in most of the case, it's only a match between a user attribute (confidentiality clearance) and the document's metadata (confidentiality level).

Custom security policy could have an impact on performance, especially when doing open search on a big content repository. To prevent this risk, security policies can be converted in low level query filters that are applied at storage level (SQL when [VCS]({{page space='glos' page='vcs'}}) is used) when doing searches.

## Indexing and Query

### Indexing

All documents stored in the Nuxeo repository are automatically indexed on their metadata.&nbsp;Files contained in Documents are also by default full-text indexed.

For that, Nuxeo Core includes a conversion service that provides full-text conversion from most usual formats (MSOffice, OpenOffice, PDF, HTML, XML, ZIP, RFC 822, ...).

So, in addition to metadata indexing, the Nuxeo repository will maintain a full-text index that will be composed of: all metadata text content + all text extracted from files.

Configuration options depend on the storage back end, but you can define what should be put into the full-text index and even define several separated full-text indexes.

### Query Support

Of course, indexing is only interesting if you can issue queries.

The Nuxeo repository includes a query system with a pluggable QueryParser that lets you do search against the repository content. The Nuxeo repository supports two types of queries:

*   NXQL: Native SQL like query language,
*   CMISQL: Normalized query language included in [CMIS]({{page space='glos' page='cmis'}}) specification.

Both query languages let you search documents based on keyword match (metadata) and/or full-text expressions.&nbsp;You can also manage ordering.

In CMISQL you can do cross queries (i.e. : JOINS).

Here is an example of a NXQL query, to search for all non-folderish documents that have been contributed by a given user:

{{#> panel }}

`SELECT * FROM Document WHERE`
`dc:contributors = ?` &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;_&nbsp;&nbsp; // simple match on a multi-valued field_
`AND ecm:mixinType != 'Folderish'` &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; _// use facet to remove all folderish documents_
`AND ecm:mixinType != 'HiddenInNavigation'` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _// use facet to remove all documents that should be hidden_
`AND ecm:isCheckedInVersion = 0` &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _// only get checked-out documents_
`AND ecm:isProxy = 0 AND` &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; _// don't return proxies_
`ecm:currentLifeCycleState != 'deleted'` &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; _// don't return documents that are in the trash_

{{/panel}}

As you may see, there is no security clause, because the repository will always only return documents that the current user can see. Security filtering is built-in, so you don't have to post-filter results returned by a search, even if you use complex custom security policies.

## Other Repository Features

### Versioning

The Nuxeo Repository includes a versioning system.

At any moment, you can ask the repository to create and archive a version from a document. Versioning can be configured to be automatic (each document modification would create a new version) or on demand (this is bound to a radio button in default UI).

Each version has:

*   A label,
*   A major version number,
*   A minor version number.

The versioning service is configurable so you can define the numbering policy.&nbsp;In fact, even the version storage service is pluggable so you can define your own storage for versions.

### Proxies

The Nuxeo Repository includes the concept of Proxy.

A proxy is very much like a symbolic link on an Unix-like OS:&nbsp;a proxy points to a document and will look like a document from the user point of view:

*   The proxy will have the same metadata as the target document,
*   The proxy will hold the same files as the target documents (since file is a special kind of metadata).

A proxy can point to a live document or to a version (check in archived version).

Proxies are used to be able to see the same document from several places without having to duplicate any data.

The initial use case for proxies in the Nuxeo Platform is local publishing:&nbsp;when you are happy with a document (and possibly successfully completed a review workflow), you want to create a version for this document. This version will be the one validated and the live document stays in the workspace where you created it. Then you may want to give access to this valid document to several people.&nbsp;For that, you can publish the document into one or several sections: this means creating proxies pointing to the validated version.
Depending on their rights, people that cannot read the document from the workspace (because they can not access it) may be able to see it from one or several sections (that may even be public).

![]({{file name='S&eacute;lection_006.png'}} ?w=650,border=true)

The second use cases for proxies is multi-filling.

If a proxy can not hold metadata, it can hold security descriptors (ACP/ACL). So a user may be able to see one proxy and not an other.

### Event Systems

When the Nuxeo repository performs an operation, an event will be raised before and after.

Events raised by the repository are:

*   aboutToCreate / emptyDocumentModelCreated / documentCreated
*   documentImported
*   aboutToRemove / documentRemoved
*   aboutToRemoveVersion / versionRemoved
*   beforeDocumentModification / documentModified
*   beforeDocumentSecurityModification / documentSecurityUpdated
*   documentLocked / documentUnlocked
*   aboutToCopy / documentCreatedByCopy / documentDuplicated
*   aboutToMove / documentMoved
*   documentPublished / documentProxyPublished / documentProxyUpdated / sectionContentPublished
*   beforeRestoringDocument / documentRestored
*   sessionSaved
*   childrenOrderChanged
*   aboutToCheckout / documentCheckedOut
*   incrementBeforeUpdate / aboutToCheckIn

These events are forwarded on the Nuxeo Event Bus and can be processed by custom handlers. As for all events handlers inside the Nuxeo Platform, these handlers can be:

*   Synchronous: meaning they can alter the processing of the current operation;
    (ex: change the document content or mark the transaction for rollback);
*   Synchronous post-commit: executed just after the transaction has been committed;
    (can be used to update some data before the user gets the result);
*   Asynchronous: executed asynchronously after the transaction has been committed.

Inside the Nuxeo repository this event system is used to provide several features:

*   Some fields are automatically computed (creation date, modification date, author, contributors, ...),
*   Documents can be automatically versioned,
*   Full-text extraction is managed by a listener too,
*   ...

Using the event listener system for these features offers several advantages:

*   You can override the listeners to inject your own logic,
*   You can deactivate the listeners if you don't need the processing,
*   You can add your own listeners to provide extract features.

## Repository Storage: VCS

The Nuxeo repository consists of several services.

One of them is responsible for actually managing persistence of documents. This service is pluggable. The Nuxeo repository uses&nbsp; its own persistence back end: Nuxeo Visible Content Store (VCS)

Nuxeo VCS was designed to provide a clean SQL Mapping. This means that VCS does a normal mapping between XSD schemas and the SQL database:

*   A schema is mapped as a table,
*   A simple field is mapped as a column,
*   A complex type is mapped as a foreign key pointing to a table representing the complex type structure.

Using such a mapping provides several advantages:

*   A DBA can see the database content and fine tune indexes if needed,
*   You can use standard SQL based BI tools to do reporting,
*   You can do low level SQL bulk inserts for data migration.

Binary files are never stored in the database, they are stored via BinaryManager on the file system using their digest.&nbsp;Files are only deleted from the file system by a garbage collector script.

This storage strategy as several advantages:

*   Storing several times the same file in Nuxeo won't store it several time on disk,
*   Binary storage can be easily snapshotted.

VCS being now the default Nuxeo backend, it also provides some features that were not available when using the previous JCR backend:

*   Tag service,
*   Possibility to import a document with a fixed UUID (useful for application level synchronization).

In addition, VCS provides a native cluster mode that does not rely on any external clustering system. This means you can have two (or more) Nuxeo servers sharing the same data: you only have to turn on Nuxeo VCS Cluster mode.

Advantages of VCS:

*   SQL Storage is usage by DBAs and by BI reporting tools,
*   Supports Hot Backup,
*   Supports Cluster mode,
*   Supports extra features,
*   Supports low level SQL bulk imports,
*   VCS scales well with big volumes of Documents.

Drawbacks of VCS:

*   storage is not JCR compliant.

## Advanced Features

### Lazy Loading and Binary Files Streaming

In Java API, a Nuxeo document is represented as a _DocumentModel_ object.

Because a Document can be big (lots of fields including several files), a DocumentModel object could be big:

*   Big object in memory,
*   Big object to transfer on the network (in case of remoting),
*   Big object to fetch from the storage backend.

Furthermore, even when you have very complex documents, you don't need all these data on each screen: in most screens you just need a few properties (title, version, life cycle state, author, ...).

In order to avoid these problems, the Nuxeo DocumentModel supports lazy-fetching:&nbsp;a DocumentModel is by default not fully loaded, only the field defined as prefetch are initially loaded.&nbsp;The DocumentModel is bound to the repository session that was used to read it and it will transparently fetch the missing data, block per block when needed.

You still have the possibility to disconnect a DocumentModel from the repository (all data will be fetched), but the default behavior is to have a lightweight Java object that will fetch additional data when needed.

The same kind of mechanism applies to files, with one difference: files are transported via a dedicated streaming service that is built-in. Because default RMI remoting is not so smart when it comes to transferring big chuck of binary data, Nuxeo uses a custom streaming for transferring files from and to the repository.

### Transaction Management

The Nuxeo repository uses the notion of _Session_.

All the modifications to documents are done inside a session and modifications are saved (written in the back end) only when the session is saved.

In a JTA/JCA aware environment, the repository session is bound to a JCA Connector that allows:

*   The repository session to be part of the global JTA transaction,
*   The session to be automatically saved when the transaction commits.

This means that in a JTA/JCA compliant environment you can be sure that the repository will always be safe and have the expected transactional behavior. This is important because a single user action could trigger modifications in several services (update documents in repository, update a workflow process state, create an audit record) and you want to be sure that either all these modifications are done, or none of them: you don't want to end up in an inconsistent state.

### {{> anchor 'documentmodel-adapter'}}DocumentModel Adapter

In a lot of cases, documents are used to represent Business Object: invoice, subscription, contract...

The DocumentModel class will let you design the data structure using schemas, but you may want to add some business logic to it:

*   Providing helper methods that compute or update some fields,
*   Adding integrity checks based on business rules,
*   Adding business methods.

For this, Nuxeo Core contains an _adapter_ system that lets you bind a custom Java class to a DocumentModel. The binding can be made directly against a document type or can be associated to a facet.

By default, The Nuxeo Platform provides some generic adapters:

*   **BlobHolder**: Lets you read and write binary files stored in a document,
*   **CommentableDocument**: Encapsulates comment service logic so that you can easily comment a document,
*   **MultiViewPicture**: Provides an abstraction and easy API to manipulate a picture with multiple views,
*   ...