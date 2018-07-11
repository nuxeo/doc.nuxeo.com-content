---
title: Nuxeo Server 10.1 Fast Track Release Notes
review:
    comment: ''
    date: '2018-03-19'
    status: ok
labels:
    - lts2017-ok
    - release-notes
toc: true
tree_item_index: 10000

---
This page relates to the release notes of Nuxeo Server and related addons for the 10.10 cycle, a.k.a LTS 2018 cycle. It will list the improvements and features that are successively shipped with the 10.1, 10.2, 10.3 and LTS 2018 releases. Evolutions are grouped by components.

You can also find detailed JIRA release notes:

- [10.1 JIRA release notes](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=18634)

We also provide [instructions for upgrading]({{page version='' space='nxdoc' page='upgrade-from-lts-2017-to-101'}}) to the latest release.

## Nuxeo Server

<!--- ### Runtime  -->

### Core Repository

#### Trash, Untrash and EmptyTrash Operations {{since '10.1'}}

Two new operations `TrashDocument` and `UntrashDocument` have been added.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24282](https://jira.nuxeo.com/browse/NXP-24282) and [NXP-24281](https://jira.nuxeo.com/browse/NXP-24281).

#### New Trash Service Enabled {{since '10.2'}}

The new trash service has been enabled by default on the repository. It uses a system property ``ecm:isTrashed`` for labelling a document as being trashed. It also fires dedicated events documentTrashed and documentUntrashed (hold by TrashService interface).A migrator has been implemented for migrating content from the old trash system (relying on lifecycle state)to the new one (relying on the system property ecm:isTrashed). See upgrade notes for more information on migration.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA tickets [NXP-24850](https://jira.nuxeo.com/browse/NXP-24850) and  [NXP-24035](https://jira.nuxeo.com/browse/NXP-24035)

### ecm:isTrashed in the JSON  {{since '10.2'}}
ecm:isTrashed  is now in the JSON representation of a Nuxeo Document

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24741](https://jira.nuxeo.com/browse/NXP-24741)


#### New firstAccessibleAncestor REST API Enricher {{since '10.1'}}

It is now possible to get the closest document's ancestor of a document using the `firstAccessibleAncestor` JSON Enricher.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24282](https://jira.nuxeo.com/browse/NXP-24282)

#### No Mention of the Repository on a Document Reference {{since '10.2'}}

When referencing a document in a property, we don't need anymore to store the repository id. If the repository id is not there, the same as the referencing document is chosen.
The following two {{documentResolver}} restrictions with {{idOnly}} and {{pathOnly}} can be used for this:
```
<xs:restriction base="xs:string" ref:resolver="documentResolver" ref:store="idOnly" />
```
```
<xs:restriction base="xs:string" ref:resolver="documentResolver" ref:store="pathOnly" />
```
Their semantics is to store only the id or only the path, without any prefixed repository. When fetching the constraint, the document of the given id or path is resolved in the same repository as the current document.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22450](https://jira.nuxeo.com/browse/NXP-22450).

#### GetProxies Method on CoreSession {{since '10.2'}}

``getProxies(DocumentRef)`` has been added to the CoreSession to efficiently get proxies, without having to write and run a query.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24922](https://jira.nuxeo.com/browse/NXP-24922).

#### Servlet API 3.1 {{since '10.1'}}

Servlet API 3.1 is now used in Nuxeo code.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24386](https://jira.nuxeo.com/browse/NXP-24386).

### Core Storage

#### KMS Keys Support on S3 Binary Store {{since '10.1'}}

The support for [KMS keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/kms-using-sdks.html#kms-using-sdks-java) for S3 Server-Side Encryption is added.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22949](https://jira.nuxeo.com/browse/NXP-22949).

 <!--- ### Core Events  -->

### Directory

#### Tenant-isolated directories with MongoDB {{since '10.2'}}

Multi-tenant addon now supports tenant-isolated directories with MongoDB

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22682](https://jira.nuxeo.com/browse/NXP-22682)

#### Same Directory Entry ID on Different Tenants {{since '10.2'}}

Unicity check on directory entry has been moved post tenant-specific computation, so that same end user id can be used in two different tenants.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-25264](https://jira.nuxeo.com/browse/NXP-25264)

#### LDAP Connection timeout reduced to 1 min {{since '10.2'}}

The pooling connection timeout of the LDAP connections has been reduced from 30 min to 1 min to avoid some performance issues when making a lot of connections with multiple users.

Multi-tenant addon now supports tenant-isolated directories with MongoDB
<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-25085](https://jira.nuxeo.com/browse/NXP-25085)

#### Filters parameter on Directory.SuggestEntries {{since '10.2'}}

It is now possible to filter directories values on a given column value, so as to implement chain select behaviours for instance. You can use the "filters" parameter, with a serialized property, like: `{"parent": "europe"}`

[NXP-25299](https://jira.nuxeo.com/browse/NXP-25299)

### Workflow

#### More Properties on the Task Object {{since '10.1'}}
When using the rest api, the JSON structure of a Task object now also includes:
- the workflow initiator
- the workflow title
- the workflow life cycle state
- the graph route URL

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24476](https://jira.nuxeo.com/browse/NXP-24476).

### Nuxeo Streams

#### Avro serialization for Nuxeo Log/Stream {{since '10.2'}}

Avro (http://avro.apache.org) has been integrated to the platform: Avro schema store, Nuxeo Document <> Avro format converter so as to be able to use this format for Nuxeo Stream messages. It makes communication with outer world easier (no Nuxeo dependency in the message), makes messages more compact and give backwards / forward compatibility in messages format.
As a consequence, Nuxeo Stream can now encode record with different codec:
- ``legacy``: the original format based on java Externalizable
- ``avro``: avro message with a schema fingerprint header (Nuxeo has an avro ShemaStore service to retrieve schemas).
- ``avroBinary``: avro message without schema header so more compact
- ``avroJson``: avro in Json for debug purpose only

You can choose the encoding for the different service using ``nuxeo.conf`` options:

```
nuxeo.stream.work.log.codec=legacy
nuxeo.stream.audit.log.codec=legacy
nuxeo.stream.pubsub.log.codec=avroBinary
```
Note that you should not change the codec of an existing stream (Kafka Topic or Chronicle file), this should be done only on new stream.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22597](https://jira.nuxeo.com/browse/NXP-22597) and [NXP-24324](https://jira.nuxeo.com/browse/NXP-24324)

#### Kafka 1.1 {{since '10.2'}}

The Nuxeo Platform now relies on Kafka 1.1.
<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-25087](https://jira.nuxeo.com/browse/NXP-25087).


#### Stream Computations Use Watermark {{since '10.2'}}

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22597](https://jira.nuxeo.com/browse/NXP-24641) and [NXP-24324](https://jira.nuxeo.com/browse/NXP-24641)

#### Using The Key as the Kafka Record Key {{since '10.2'}}

When using the Kafka implementation of Nuxeo Stream, the key in the log is now the Kafka key itself, not the hash of it as it was previously (only option for the other backend, Chronicle queue).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24640](https://jira.nuxeo.com/browse/NXP-24640).

### WorkManager

#### Error Event After Successive Failures on a Work {{since '10.1'}}

An event `workFailed` is now fired when a work fails several times.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24126](https://jira.nuxeo.com/browse/NXP-24126).

#### State Information for the StreamWorkManager {{since '10.2'}}

By using ``nuxeo.stream.work.storestate.enabled=true``, it is now possible to get information of a given work when using the StreamWorkManager
<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24397](https://jira.nuxeo.com/browse/NXP-24397).

#### Ability to Cancel a Long-running Work with the StreamWorkManager {{since '10.2'}}

StreamWorkManager is now able to cancel a long-running work, provided the work calls regularly "isSuspending".

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24400](https://jira.nuxeo.com/browse/NXP-24400).

### Scheduler

#### Customisable Job {{since '10.2'}}

It is now possible to specify what Job should be created when using the scheduler thanks to a new attribute "jobFactoryClass":
```
<schedule id="testSchedulerSingleExecution"
    jobFactoryClass="org.nuxeo.ecm.core.scheduler.SingleExecutionEventJobFactory">
  <event>testSchedulerSingleExecution</event>
  <cronExpression>* * * * * ?</cronExpression>
</schedule>
```
<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24540](https://jira.nuxeo.com/browse/NXP-24540).

#### Timezone Sensitive Cron Service {{since '10.2'}}

The scheduler service (Cron) now allows using a timezone on expressions to avoid relying on the time of the server for firing events.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24955](https://jira.nuxeo.com/browse/NXP-24955).

###  PubSub

#### PubSub Service on Nuxeo Stream {{since '10.1'}}

An implementation of the PubSub service has been provided using Nuxeo Stream. This allows to not rely on Redis for this service that is notably used for cache syncing on the repository in a cluster, as well as for acquiring locks on documents.
To use it you can apply the following configuration in nuxeo.conf:

```
nuxeo.pubsub.provider=stream
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-23799](https://jira.nuxeo.com/browse/NXP-23799).

### Audit

#### STARTSWITH Operator Available for All Audit Backend (SQL, MongoDB and Elasticsearch){{since '10.1'}}

Following introduction of `AuditBackend#queryLogs(AuditQueryBuilder)`, we now have an easy way to query audit. We introduced in 10.1 the STARTSWITH operator, we could use it as below:

```
auditBackend.queryLogs(new AuditQueryBuilder().predicates( //
                Predicates.eq(LOG_EVENT_ID, "SOMETHING"),
                Predicates.startsWith(LOG_DOC_PATH, "/myFolder")));
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24386](https://jira.nuxeo.com/browse/NXP-24396).

<!--- ### CMIS -->

### Query

#### NXQL `ecm:isTrashed` Support

Following evolutions on the trash service, the NXQL property `ecm:isTrashed` has been added to be able to filter queries on trashed or not trashed documents.

#### Some Built-In Page Providers Moved to Elasticsearch {{since '10.1'}}

`REST_API_SEARCH_ADAPTER` and `all_collections` page providers have been added to the default list of page providers provided by Elasticsearch. If you have defined your own `elasticsearch.override.pageproviders` then it is recommended to add those two to your list.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24346](https://jira.nuxeo.com/browse/NXP-24346).

<!--- ### Conversion -->

<!--- ### Rendition -->

### Elasticsearch

#### Elasticseach 6.3 {{since '10.2'}}

Elasticsearch 6.3+ is now required. See upgrade instructions.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24102](https://jira.nuxeo.com/browse/NXP-24102).

#### Support of X-Pack {{since '10.1'}}

The use of Elasticsearch X-Pack is now allowed, [see documentation]({{page version='' space='nxdoc' page='elasticsearch-setup'}}#advanced-rest-client-configuration).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-23048](https://jira.nuxeo.com/browse/NXP-23048).

### Multi-Region Replication {{since '10.2'}}

A set of add-ons and scripts have been produced for the ability to replicate all the Nuxeo data in near real time into another hosting region, using Kafka streams for the replication. The intent is to be able to recover from a disaster in less than a minute. Contact Nuxeo for more information about it.

### More Like This Hint {{since '10.2'}}

A new hint is available that allows to leverage the More Like This query of Eleasticsearch (https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-mlt-query.html)

Ex: ```SELECT * FROM Document WHERE /*+ES: INDEX(dc:title.fulltext,dc:description.fulltext) OPERATOR(more_like_this) */ ecm:uuid = '1234' ```

will take the most frequent terms of the title and description of document 1234 and find documents that also match those terms.
<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-23048](https://jira.nuxeo.com/browse/NXP-23048).


<!--- ### Tag Service  -->
### Bulk service {{since '10.2'}}

The BulkService is a new Nuxeo Platform service that allows to persist a document set homogenous to an NXQL query (and in the future to a page provider) so as to process an "action" on each of the documents. The service allows to get a status on a given "Bulk". It is possible to remotely start a bulk using the ``Bulk.RunAction`` operation that accepts as a parameter the name of the action and an NXQL query for specifying the list of documents on which to run the bulk.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA tickets [NXP-24837](https://jira.nuxeo.com/browse/NXP-24837) and [NXP-25060](https://jira.nuxeo.com/browse/NXP-25060).

### Annotations Service

#### Annotation Java Service {{since '10.1'}}

A new annotation service has been added, it stores annotations in the repository.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24096](https://jira.nuxeo.com/browse/NXP-24396).

#### Annotation REST API Adapter {{since '10.1'}}

The web adapter "annotation" has been added on the document resource so as to retrieve and set annotations on documents using the REST API.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24364](https://jira.nuxeo.com/browse/NXP-24364).

#### Configuration Option for Annotations Location {{since '10.2'}}

A new configuration property ``nuxeo.annotations.placeless.storage`` is available to change how the annotations are stored.
If set to ``true`` (default), the annotations are placeless documents.
If set to ``false``, the annotations are stored in a hidden folder. This folder is created under the domain of the annotated document, or under the root if no domain.


### Comment Service

#### New Method for Creating an Answer at A Specific Place {{since '10.2'}}

- API in ``CommentManager`` is able to create sub-comments in a specific location
- The ``CommentableDocument`` adapter is enriched to provide the above service
- The ``CommentableDocument`` adapter is enriched to provide the service of creating comments in a specific location using the existing api ``org.nuxeo.ecm.platform.comment.api.CommentManager#createLocatedComment(org.nuxeo.ecm.core.api.DocumentModel, org.nuxeo.ecm.core.api.DocumentModel, java.lang.String)``

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24863](https://jira.nuxeo.com/browse/NXP-24863).

### Automation

#### More Java Objects in Automation Scripting {{since '10.2'}}
It's now possible to allow specific Java classes to be used via Automation Scripting, by default we add:
- java.util.ArrayList
- java.util.Arrays
- java.util.Collections
- java.util.UUID
- org.nuxeo.runtime.transaction.TransactionHelper
- org.nuxeo.ecm.core.api.Blobs
- org.nuxeo.ecm.core.api.impl.blob.StringBlob
- org.nuxeo.ecm.core.api.impl.blob.JSONBlob

Other classes can be added, and previously-allowed ones denied, through:
```
  <require>org.nuxeo.automation.scripting.classfilter</require>
  <extension target="org.nuxeo.automation.scripting.internals.AutomationScriptingComponent" point="classFilter">
    <classFilter>
      <allow>com.example.MyClass</allow>
      <allow>com.example.MyOtherClass</allow>
      <deny>org.nuxeo.runtime.transaction.TransactionHelper</deny>
    </classFilter>
  </extension>
```

One can use ``<deny>*</deny>`` to disallow all previously-allowed classes.

The default contribution now allows scripting code like:

```
function run(input, params) {
    var uuid = java.util.UUID.randomUUID().toString();
    return org.nuxeo.ecm.core.api.Blobs.createJSONBlob("{'uuid': \"" + uuid + "\"}");
}
```
<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-25020](https://jira.nuxeo.com/browse/25020).


### User Manager

#### UserGroup.Suggestion Operation Handles Fullname Search {{since '10.2'}}

The SuggestUserEntries operation performs a full name user search, e.g. typing "John Do" returns the user with first name "John" and last name "Doe".
Typing "John" still returns the "John Doe" user and possibly other users such as "John Foo". Respectively, typing "Do" returns the "John Doe" user and possibly other users such as "Jack Donald".

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24583](https://jira.nuxeo.com/browse/24583).

### Batch upload

#### Optimised Multipart/Form Upload {{since '10.2'}}

When uploading content to Nuxeo using the multi-part/form-data way, no useless copy is made on the way, optimising drastically the upload performance with large videos when using this upload method.
<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24384](https://jira.nuxeo.com/browse/NXP-24384).

### User Registration

#### Stronger Enforcement on Groups Validation for Newly Created Users {{since '10.1'}}

 Non-administrator users can only invite members from their own group(s).

 <i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24653](https://jira.nuxeo.com/browse/NXP-24653).

<!--- ### FileManager -->

<!--- ### Redis -->

<!--- ### Key Value Store -->

### OAuth

#### Rest API for oAUth 2 Tokens {{since '10.2'}}

Some new endpoints have been added to handle CRUD operations on provider and client oAuth tokens.
```
GET/PUT/DELETE /oauth2/token/provider/<providerId>/user/<username> -> perform CRUD on provider tokens
GET /oauth2/token/provider -> retrieve all provider tokens for current user
GET/PUT/DELETE /oauth2/token/client/<clientId>/user/<username> -> perform CRUD on client tokens
GET /oauth2/token/client -> retrieve all client tokens for current user
GET oauth2/client -> retrieve all oauth2 clients
GET oauth2/client/<clientId> -> retrieve an oauth2 client
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24578](https://jira.nuxeo.com/browse/NXP-24578).

### Transient Store

#### Batch Handler {{since '10.1'}}

The platform now provides a way to plug custom logics to upload content to a transient store, by contributing a Batch Handler.

```
<extension target="org.nuxeo.ecm.automation.server.BatchManager"
point="handlers">
<batchHandler>
<name>foo</name>
<class>org.someorg.somepackage.SomeClassThatImplementsBatchHandler</class>
<property name="transientStore">${backingTransientStore}</property>
<property name="key1">value1</property>
<property name="key2">value2</property>
...
<property name="keyN">valueN</property>
</batchHandler>
</extension>
```

An S3 implementation of this batch handler has been added, so as to be able to upload to S3 directly and to benefit from S3 accelerated upload infrastructure (See the new addon here after).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24208](https://jira.nuxeo.com/browse/NXP-24208).

#### Configurable blobProvider for KeyValueBlob transientStore {{since '10.2'}}

A KeyValueBlobTransientStore can now specify the ids of the key/value store and blob provider to use, instead of defaulting to the name of the transient store itself:

```
<extension target="org.nuxeo.ecm.core.transientstore.TransientStorageComponent" point="store">
<store name="mytransientstore" class="org.nuxeo.ecm.core.transientstore.keyvalueblob.KeyValueBlobTransientStore">
<property name="keyValueStore">mykeyvaluestore</property>
<property name="blobProvider">myblobprovider</property>
...
</store>
</extension>
```
<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24847](https://jira.nuxeo.com/browse/NXP-24847).

### REST API

#### Nuxeo Rest API Adapters are Now Overridable {{since '10.2'}}

Nuxeo-AllowOverride: true has been added to the rest module of Nuxeo Platform so that it becomes possible to override an adapter.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24532](https://jira.nuxeo.com/browse/NXP-24532).


#### ManagedBlob Decoder {{since '10.2'}}

A generic JSON decoder has been implemented for managed blobs.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24925](https://jira.nuxeo.com/browse/NXP-24925).
<!--- ### Migration Service -->

### Packaging / Distribution

#### HSTS Policy {{since '10.1'}}

The HSTS header is enabled by default when HTTPS is in use. It forces only HTTPS requests.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24254](https://jira.nuxeo.com/browse/NXP-24254).


#### AWS Client Upgrade {{since '10.2'}}

The Nuxeo Platform now uses version 1.11.323 of the Amazon SDK. This notably allows using AWS Comprehend service.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24981](https://jira.nuxeo.com/browse/NXP-24981).


#### JSON output for Log4J {{since '10.2'}}

Required dependencies have been added so that it is possible to configure the logs to be serialized as valid JSON. See sample log4j conf on the linked ticket.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-25096](https://jira.nuxeo.com/browse/NXP-25096).

#### JDK Check Enforced in nuxeoctl {{since '10.2'}}

A check on the presence of a JDK per is enforced at startup in nuxeoctl

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21200](https://jira.nuxeo.com/browse/NXP-21200).

#### Making Use of Tomcat 8 Rewrite Valve {{since '10.2'}}

It is now possible to contribute rules to Tomcat Rewrite Valve by leveraging our deployment preprocessor.

Ex (deployment-fragment.xml):
```
<?xml version="1.0"?>
<fragment version="1">
  <!-- JSF permalink redirect -->
  <extension target="rewrite#RULE">
    RewriteRule ^/nxdoc/default/(.*)/view_documents /ui/#!/doc/$1 [NE,R]
  </extension>

  <!--  ES6 / ES5 code -->
  <extension target="rewrite#RULE">
    RewriteCond  %{HTTP_USER_AGENT} .*Chrome.*
    RewriteRule ^/shop/(.*) /shop/es6-bundled/$1 [L]
    RewriteRule ^/shop/(.*) /shop/es5-bundled/$1 [L]
  </extension>
</fragment>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-25040](https://jira.nuxeo.com/browse/NXP-25040).

<!--- ### User workspace -->

## Addons

<!--- ### Packaging -->

### Nuxeo Web UI {{> anchor 'nuxeo-web-ui'}}

#### Orderable Folders {{since '10.1'}}

Orderable Folders are now available in Nuxeo Platform with up and down actions. It works with multiple selected documents.
For this purpose a new operation is available to order child documents.
Navigation tree now takes into account order on Orderable Folders.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24254](https://jira.nuxeo.com/browse/NXP-24254).

#### Trash {{since '10.1'}}

Add trash functionality and management to document deletion. Document deletion moves it to trash.
In order to manage trash:
- Documents with Folderish facet added a trash pill to manage deleted documents.
- New trash search on the main menu. Has a faceted search on path, size, authors, and text.
Trashed documents can be restore or permanently deleted by users with Manage Everything permission.
A new `EmptyTrash` operation allows to permanently delete a Folderish trash content which is available on the Folderish trash pill UI.
Finally, a set of functional tests for new trash features.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-23798](https://jira.nuxeo.com/browse/NXP-23798).

#### Direct Upload to 3rd-Party Service {{since '10.1'}}

Batch upload refactored to support third party providers.
It is possible to integrate providers for feature rich and performance upload.
To this end, the upload behaviour now supports external providers and allows features like progress and multipart.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24269](https://jira.nuxeo.com/browse/NXP-24269).

#### User Invitation Link {{since '10.1'}}

Fixed link on user invitation e-mail that led to "page not found".

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24535](https://jira.nuxeo.com/browse/NXP-24535).

#### Remove from Collection {{since '10.1'}}

The "Remove from Collection" action is now displayed on all document types with the Collection facet.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24347](https://jira.nuxeo.com/browse/NXP-24347).

#### Close Drawer Action {{since '10.1'}}

A new close action button has been added to let you hide the drawer. It appears on the middle right side of the drawer.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24082](https://jira.nuxeo.com/browse/NXP-24082).

#### New Languages {{since '10.1'}}

Italian, Dutch and Swedish languages have been added to Web UI and Nuxeo Elements.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA tickets [NXP-24451](https://jira.nuxeo.com/browse/NXP-24451) and [NXP-24445](https://jira.nuxeo.com/browse/NXP-24445).

<!-- ### Nuxeo JSF UI -->

### Amazon S3 Direct Upload for Web UI {{since '10.1'}}

New addon to upload using AWS S3 infrastructure with support for multipart. Allows future integration of other providers.
Integrated with Web UI upload with real time upload progress. For 10.2 we have added AWS instance role support for better security.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24490](https://jira.nuxeo.com/browse/NXP-24490) and [NXP-24748](https://jira.nuxeo.com/browse/NXP-24748).



<!---
### Arender Connector {{since '10.2'}}
A first implementation of the ARender SPI bridge has been implemented so as to be able to preview content stored in Nuxeo using the [Arender previewer](https://arender.io/). This implementation will be completed for 10.2

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24104](https://jira.nuxeo.com/browse/NXP-24104).

--->

### Nuxeo Platform Importer

#### Image and Video capabilities for the Nuxeo Stream Random Importer {{since '10.2'}}

The Nuxeo importer has an option for filling the repository with random content. This content can now be images or videos, randomly produced by watermarking a set of sample media.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24318](https://jira.nuxeo.com/browse/NXP-24318).

### IMAP Connector {{since '10.1'}}

Nuxeo IMAP Connector addon is now available on Web UI. You can create and configure IMAP folder documents on WebUI, with a sync action to import all unread emails from account.
This addon adds a new custom list view for emails on email folder documents and a custom view layout to email message documents with relevant information about the content, senders, receivers and attachments.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-23951](https://jira.nuxeo.com/browse/NXP-23951).

### Drive (Server part)

The release notes of the Drive client part can be found on [GitHub](https://github.com/nuxeo/nuxeo-drive/releases).

#### .lnk Files Ignored {{since '10.1'}}

Windows symlink files `.lnk` are now ignored by default

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24490](https://jira.nuxeo.com/browse/NXP-24490).

#### Full Scan Query Optimized {{since '10.1'}}

A great optimisation has been added lowering heavily the charge of the Elasticseach cluster when using Nuxeo Drive with Nuxeo.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24232](https://jira.nuxeo.com/browse/NXP-24232)  and [NXP-24637](https://jira.nuxeo.com/browse/NXP-24637)

### Nuxo DAM

#### Improve Video Processing {{since '10.1'}}

The video info (duration, format, etc.) is now computed by an asynchronous work to avoid loading the blob and running `ffmpeg-info` synchronously. This work, in turn, schedules two asynchronous works to process the video storyboard and conversions.

As a consequence, the user might not have the video info in the UI immediately after creating / updating a Video document, needing to refresh the page once the asynchronous work is done. This change allows a better behaviour when bulk importing videos.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24316](https://jira.nuxeo.com/browse/NXP-24316).

### Nuxeo Vision

#### All Backend Service features can be leveraged in Nuxeo Vision {{since '10.2'}}

The features to use (and sent to the provider) are no more checked against a predefined list. This allows for using any new feature available without waiting for an update of the plugin. After using such new feature, the caller should use the getNativeObject method and handle the results based on the provider's documentation.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24499](https://jira.nuxeo.com/browse/NXP-NXP-24499).

### Nuxeo Quota

#### Operation to Recompute Partially Quotas {{since '10.1'}}

A new operation: `Quotas.RecomputeStatistics` is provided, with optional parameters:
- tenantId / username / path (only one allowed)
- updaterName (defaults to `documentsSizeUpdater`)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21017](https://jira.nuxeo.com/browse/NXP-21017).

## Farewell

### WebEngine GWT Integration {{since '10.1'}}

The WebEngine GWT Integration that used for the former annotations system has been removed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24317](https://jira.nuxeo.com/browse/NXP-24317).
