---
title: Nuxeo Server 9.2 Release Notes
review:
    comment: ''
    date: '2017-07-17'
    status: ok
labels:
    - content-review-lts2017
    - release-notes
toc: true
tree_item_index: 10000

---
This page relates to the release notes of Nuxeo Server and related addons for the 9.10 cycle, a.k.a LTS 2017 cycle. It will list the improvements and features that are successively shipped with the 9.1, 9.2 and 9.3 releases, before a final update for the LTS 2017. Evolutions are grouped by components.
You can also find detailed JIRA release notes:

- [9.1 JIRA release notes](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=17991)
- [9.2 JIRA release notes](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=18236)

We also provide [instructions for upgrading]({{page version='' space='nxdoc' page='upgrade-from-lts-2016-to-92'}}) to the latest release.

## Nuxeo Server

### Runtime

#### Runtime Components Lifecycle Refactored {{since '9.2'}}

The runtime behavior has been refactored so as to provide a cleaner lifecycle to its components. This (big) change is pretty transparent for now but will allow to provide new features to the runtime in the next releases.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-19326](https://jira.nuxeo.com/browse/NXP-19326).

#### Change in Runtime Reload Strategy {{since '9.3'}}

Runtime reload strategy has been set by default to `standby` and can be changed with the property `org.nuxeo.runtime.reload_strategy`. Standby mode will: 

- stop all components 
- apply the stash (components to remove/add before restarting) 
- start all components 

`restart` will: 

- stop all components 
- deactivate all components 
- apply the stash 
- activate all components 
- start all components 

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22546](https://jira.nuxeo.com/browse/NXP-22546).

#### Graceful Shutdown in Tomcat {{since '9.2'}}

Runtime behavior has been cleaned up: when shutting down Tomcat it is now possible to make sure that all asynchronous work has been either processed or task has been persisted.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21969](https://jira.nuxeo.com/browse/NXP-21969).

#### Backing Service {{since '9.2'}}

We added the infrastructure for plugging some initial checks on external services availability *before* starting the runtime. The first use case is to add a check for MongoDB  or PostgreSQL availability, when the MongoDB or PostgreSQL template is used. In case it is not available, the nuxeo-launcher is interrupted.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21532](https://jira.nuxeo.com/browse/NXP-21532).

#### Better error message on invalid class in extension point contribution {{since '9.3'}}

When a contribution to the runtime expects a class name, and the effective contribution does not refer to a class, runtime exception has been made clearer and there is a warning at startup. Ex: "Failed to load contributions for component service:org.nuxeo.ecm.core.cache.config.bad"

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22797](https://jira.nuxeo.com/browse/NXP-22797).

#### Test @PartialDeploy Annotation  {{since '9.1'}}

The new Test `@PartialDeploy` annotation allows you to select exactly which contributions you want to deploy from a component.

```
@PartialDeploy(bundle = "studio.extensions.YOUR_PROJECT_NAME", extensions = { TargetExtensions.Automation.class })
```

It makes it easier to test Nuxeo Studio features like Automation Scripting or event handlers.

### Core Repository

#### Centralized Automated Versioning Policies  {{since '9.1'}}

A new extension point has been added to define automated versioning policies. It allows to declare behaviors such as "Version documents each time the current contributor is different than the last one on the document". It also allows to control whether you want to version before or after the modification. All platform code that was triggering specifically hardcoded behaviors has been refactored so that the central policy is applied: Drive, File Manager (drag and drop behaviors), etc.). Only CMIS hasn't been impacted for now due to some difficulties with requirements regarding document checked in or checked out.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21588](https://jira.nuxeo.com/browse/NXP-21588), the [versioning developer documentation]({{page version='' space='nxdoc' page='versioning'}}) or the [user documentation]({{page version='' space='userdoc'}}).

#### More Permissions Returned in the Permissions Enricher  {{since '9.1'}}

All visible permissions and more core permissions are included by the [Permissions enricher](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/enrichers/BasePermissionsJsonEnricher.html). Permission enricher can be used to know what permissions the authenticated user has on the document.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21408](https://jira.nuxeo.com/browse/NXP-21408) and the [Content Enricher documentation]({{page version='' space='nxdoc' page='content-enrichers'}}).

#### Orphan Versions Removal  {{since '9.1'}}

In some cases, versions of some documents where not deleted even when the document itself was removed. The solution chosen to solve this issue has been to add a scheduled cleanup mechanism. The cleanup mechanism does periodic commits, every 1000 documents by default. This value can be changed using the configuration property [`org.nuxeo.orphanVersionsCleanup.commitSize`](http://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform-9.1/viewContribution/org.nuxeo.ecm.core.orphanVersionsCleanup--configuration).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-14187](https://jira.nuxeo.com/browse/NXP-14187).

#### Compatible with CloudFront for Caching Binaries  {{since '9.1'}}

When using S3 it is possible to redirect signed CloudFront URLs instead of directly S3 ones, so as to benefit from AWS world wild content caching service.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-20219](https://jira.nuxeo.com/browse/NXP-20219).

#### Leverage Blob's XPath in Dispatching Rules  {{since '9.1'}}

It is now possible to use the XPath of the binary that is being stored to determine where the binary should be stored. This typically allows to store thumbnails in a different backend than the main file. The DefaultBlobDispatcher can now match blob XPath using the syntax `blob:xpath=my/xpath` and a new glob operator `~` is available to allow matching things like `blob:xpath~files/*/file`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21891](https://jira.nuxeo.com/browse/NXP-21891).

#### Change Token for Optimistic Locking {{since '9.2'}}

New API:

- `DocumentModel.getChangeToken()`

New behaviors:

- Calling `doc.putContextData(CoreSession.CHANGE_TOKEN, token)` then `CoreSession.saveDocument(doc)` will check the change token and raise `ConcurrentUpdateException` in case of mismatch.
- Calling `doc.putContextData(CoreSession.USER_CHANGE, Boolean.TRUE)` then `CoreSession.saveDocument(doc)` will flag the save as a "user change".

The change token returned to the user-level API `DocumentModel.getChangeToken()` is now a mix of a system-change token (updated at every change) and a user-change token (updated at every user change).
- A "user change" is a change initiated by a user-level operation, which is defined as a document save that passes a previous change token using `doc.putContextData(CoreSession.CHANGE_TOKEN, token)`, or that marks the save as an explicit user change using `doc.putContextData(CoreSession.USER_CHANGE, Boolean.TRUE)`.
- The system change token is such that every modification to a document (whether done by the system or by a user) now increments a system value called the "system change token".

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA tickets [NXP-19435](https://jira.nuxeo.com/browse/NXP-19435) and [NXP-22019](https://jira.nuxeo.com/browse/NXP-22019) and [NXP-22259](https://jira.nuxeo.com/browse/NXP-22259).

#### Document.Update operation: Improved change token detection {{since '9.3'}}

The {{Document.Update}} operation has been updated so that it is possible to use the change token mechanism and ignore system modifications, that were taken into account with previous releases.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22751](https://jira.nuxeo.com/browse/NXP-22751).

#### Ability to set change token from REST API  {{since '9.3'}}

When sending an update to a document with the REST API, the JSON can now include a {{changeToken}} field (as a toplevel field), with the same value that was retrieved previously when reading the document. A 409 will then be returned if the update is in conflict server-side.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22254](https://jira.nuxeo.com/browse/NXP-22254).

#### Allow for the Document to Not Be Saved In The Add/Remove Facet Operations  {{since '9.3'}}

A new parameter has been added: `save`. When `true`, the document is saved, else it is not (other operations in the chain should then save it). 
Notice: Default value is `true`, the document is saved by default to maintain compatibility.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22912](https://jira.nuxeo.com/browse/NXP-22912).


#### Disable Delta Computation  {{since '9.1'}}

By adding the new option `org.nuxeo.core.delta.disabled=true` in the `nuxeo.conf` file, the delta calculation used by the [Nuxeo Quota addon]({{page version='' space='nxdoc' page='nuxeo-quota'}}) can be skipped. This can improve the performance of mass import.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-20892](https://jira.nuxeo.com/browse/NXP-20892).

#### API for Permission Purge  {{since '9.1'}}

An operation `PermissionsPurge` has been added for triggering a permission purge for a given principal. This allows you to do an integration with your identity management system so as to remove any permission to a user that would be leaving your organization in the same time you would disable his credentials.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-20844](https://jira.nuxeo.com/browse/NXP-20844).

#### Date Fields Export with Millisecond Precision  {{since '9.1'}}

The XML Core IO format and the JSON serialization now include milliseconds information for all date properties.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21607](https://jira.nuxeo.com/browse/NXP-21607).

#### User Existence Is Checked on Document.AddPermission Operation  {{since '9.1'}}

A check on the existence of users an groups referenced with this operation is performed before doing the assignment. An exception is raised otherwise.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21559](https://jira.nuxeo.com/browse/NXP-21559).

#### Atomic getOrCreateDocument Method {{since '9.3'}}

A new method is available in CoreSession: `getOrCreateDocument(DocumentModel)`. 
This method can be used to prevent different threads from trying to create the same document.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-19009](https://jira.nuxeo.com/browse/NXP-19009)

#### Attribute "perDocumentQuery" of Facet Definition Can Be Overridden {{since '9.2'}}

It is now possible to change the value of the attribute `perDocumentQuery` of a facet that has been contributed in the built-in distribution.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22603](https://jira.nuxeo.com/browse/NXP-22603)

#### New Document Properties Deprecation {{since '9.2'}}

A new extension point [`deprecation`](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.schema.TypeService--deprecation) has been added to the Schema service to configure deprecated fields and their optional fall-back. A warning is logged when a deprecated field is used in the application, and if the fall-back is configured, values are set and gotten from that fall-back field.

```xml
<property schema="common" name="size" deprecated="true" />
<property schema="file" name="filename" fallback="content/name" />
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21456](https://jira.nuxeo.com/browse/NXP-21456)

#### Distributed Cache {{since '9.3'}}

Invalidation cache has been rewritten to a better distributed architecture that improves performances.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22786](https://jira.nuxeo.com/browse/NXP-22786)

### Core Storage

#### SSL Support for MarkLogic {{since '9.2'}}

When using the [MarkLogic Connector for Nuxeo](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-marklogic-connector), connection is now secured with SSL.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21818](https://jira.nuxeo.com/browse/NXP-21818).

#### Improved Performance on Scrolling API with MarkLogic {{since '9.2'}}

Scroll API (that allows to fetch many documents in a row) has been re-implemented on [Marklogic connector](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-marklogic-connector). Elastiscsearch re-indexation rate has been increased from 642 documents/second to 2,418 documents/second, i.e +&nbsp;375%.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21824](https://jira.nuxeo.com/browse/NXP-21824).

#### New Oracle JDBC Driver (ojdbc7) Compatibility  {{since '9.1'}}

The new Oracle JDBC Driver OJBC7 can be used with Oracle 12c.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-19373](https://jira.nuxeo.com/browse/NXP-19373).

#### Optimized Number of Read When Writing  {{since '9.1'}}

The number of read requests required to create documents has been reduced to the strictly required using cache. As a consequence CPU is no longer the limiting factor of bulk-intensive import scenari.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-20595](https://jira.nuxeo.com/browse/NXP-20595).

#### Database-Level Integrity Constraints for PostgreSQL {{since '9.2'}}

When using PostgreSQL, stricter database-level checks are now enabled to prevent rare document name collisions due to concurrent writes. Behavior can be controlled in the repository configuration file using

```xml
	<childNameUniqueConstraintEnabled>true</childNameUniqueConstraintEnabled>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22421](https://jira.nuxeo.com/browse/NXP-22421).

#### Exception When Using S3 storage With an Empty AWS_ACCESS_KEY_ID {{since '9.3}}

A more meaningful error is thrown when the platform doesn't find AWS_ACCESS_KEY_ID when starting.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22967](https://jira.nuxeo.com/browse/NXP-22967).

### Core Events  {{since '9.1'}}

A new PubSubService is available, providing cross-instance publish/subscribe methods:
- `publish(topic, message)` sends a message to the given topic
- `registerSubscriber(topic, subscriber)` registers a subscriber

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21800](https://jira.nuxeo.com/browse/NXP-21800).

### Directory

#### administrators Group Members Have Access to Protected Directories {{since '9.2'}}

Directories access protected by giving `Read` permission to group "Nobody" are now accessible by members of the group "administrators".

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22609](https://jira.nuxeo.com/browse/NXP-22609)

#### New MongoDB Directory Implementation {{since '9.2'}}

Directory interface now has a MongoDB implementation included in the default distribution.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21582](https://jira.nuxeo.com/browse/NXP-21582).

#### Generic Directories References {{since '9.2'}}

A new descriptor for references in directories has been added (their description used to be specific to the SQL implementation of directories). Example:

```xml
<references>
        <reference field="groups" directory="groupDirectory"
                   name="user2group" source="userId"
                   target="groupId" dataFile="user2group.csv"/>
</references>
```

This reference is generic and can be used with SQL and MongoDB implementations.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22411](https://jira.nuxeo.com/browse/NXP-22411).

### Nuxeo Streams {{since '9.3'}}

An asynchronous infrastructure to process distributed work chains has been written and named "nuxeo-stream". It creates an abstraction on top of Kafka and Chronicle Queues (for the standalone implementation). 
It provides two patterns: 
- a batched producer/consumer pattern dedicated to import process
- a [Stream Computation pattern|https://github.com/nuxeo/nuxeo-mqueues/tree/master/nuxeo-mqueues-core#pattern-4-stream-and-computations] (taken from [Concord Mesos|http://concord.io/docs/guides/concepts.html], Google MillWheel or [Kafka Processor|https://cwiki.apache.org/confluence/display/KAFKA/KIP-28+-+Add+a+processor+client]) to chain tasks 

nuxeo-stream is now used for several use cases in the platform, either by default or optionaly: Audit (by default), Workers (optionally), Import. More usage will be integrated in the near future.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21993](https://jira.nuxeo.com/browse/NXP-21993)

### WorkManager

#### Implementation On Top of nuxeo-stream {{since '9.3'}}

WorkManager now has an implementation on nuxeo-stream that provides better resilience and distribution capability.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22500](https://jira.nuxeo.com/browse/NXP-22500)

#### New Metrics {{since '9.3'}}

Some metrics of the Work manager added during this LTS 2017 cycle has been renamed. Overall we now have: 
- `nuxeo.works.total.default.canceled` : the number of cancelled work persisted in redis in cluster mode 
- `nuxeo.works.total.default.completed` : the number of completed work persisted in redis in cluster mode 
- `nuxeo.works.total.default.running` : the current number of work running 
- `nuxeo.works.total.default.scheduled`: the current number of work scheduled 
- `nuxeo.works.default.completed` : the total number of completed work since this instance is up 
- `nuxeo.works.default.running` : current number of running work in this instance 
- `nuxeo.works.default.scheduled` : the total number of work scheduled by this instance 
- `nuxeo.works.default.total` : a timer that mesures work execution in this pool

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22996](https://jira.nuxeo.com/browse/NXP-22996).


### Audit

#### MongoDB Audit Backend  {{since '9.1'}}

A MongoDB backend has been implemented with the purpose of being able to install the Nuxeo Platform without requiring an additional relation database. Since 9.3, the implementation is available by default and doesn't require to install any addon.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA tickets [NXP-21500](https://jira.nuxeo.com/browse/NXP-21500) and [NXP-22247](https://jira.nuxeo.com/browse/NXP-22247) .

### CMIS

#### Relax Mode  {{since '9.1'}}

Some constraints of CMIS can be bypassed. To do so use the runtime property `nuxeo.dontFollowCmisSpec=true`.
This way, for instance, multiple "contains" can be used in the CMISQL query while the standard forbids it.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-19858](https://jira.nuxeo.com/browse/NXP-19858).

#### Change Token  {{since '9.1'}}

Change Token [specified](http://docs.oasis-open.org/cmis/CMIS/v1.1/cs01/CMIS-v1.1-cs01.html#x1-1610003) in CMIS 1.1 as optional has been implemented.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-20665](https://jira.nuxeo.com/browse/NXP-20665).

#### Proxies Are Visible by Default  {{since '9.1'}}

`org.nuxeo.cmis.proxies=true` is now the default.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21828](https://jira.nuxeo.com/browse/NXP-21828).

#### maxItems Parameter in CMIS Query Is Now Supported {{since '9.2'}}

When using the ES implementation of CMIS bridge, using the parameter `maxItems` allows you to get a certain amount of documents without loading the entire result set at once. Implementation over Core in case of DBS has also been improved consequently.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21877](https://jira.nuxeo.com/browse/NXP-21877).

### Query

#### Search with Highlighted Results  {{since '9.1'}}

It is now possible to configure a page provider so as to get highlighted search result, in order to display the paragraph wrapping a given full-text searched term, in the search result. The [Search endpoint]({{page version='' space='nxdoc' page='search-endpoints'}}) and PageProvider operation have been updated accordingly. Checkout the [polymer sample](https://github.com/nuxeo-sandbox/nuxeo-highlight-showcase) that showcases this new capability of the API to know more about it. Since Nuxeo Platform 9.2, this is used by default [in Nuxeo Web UI](#nuxeo-web-ui).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-20507](https://jira.nuxeo.com/browse/NXP-20507).

#### Search Rest Endpoint Exposes Page provider offset  {{since '9.3'}}

The search endpoint now exposes an "offset" property which is used by the underlying page provider to return results from this offset. If set, the `currentPageIndex` property is ignored.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22775](https://jira.nuxeo.com/browse/NXP-22775).

#### No Default Query Language for Search ndpoint Anymore {{since '9.3'}}

Query language parameter in search endpoint no more has a default.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22754](https://jira.nuxeo.com/browse/NXP-22754).

### Conversion

#### PDF Export of a Note {{since '9.1'}}

It is now possible to export a Note with its embedded images as a PDF.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-16831](https://jira.nuxeo.com/browse/NXP-16831).

#### ffmpeg Embedded aac Encoder Instead of libfaac {{since '9.3'}}

ffmpeg embedded aac encoder is now used instead of libfaac, simplifying the set up phase.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22777](https://jira.nuxeo.com/browse/NXP-22777).

### Elasticsearch

#### Make use of Elasticsearch 5.x instead of 2.X {{since '9.3'}}

Elasticsearch's Nuxeo Platform dependence is now on version 5.6 of the search engine. This upgrade brings security and performance improvements in addition to additional query capabilities. More specifically, the connector now uses the HTTP(s) interface of Elasticsearch (Java one is still available).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22812](https://jira.nuxeo.com/browse/NXP-22812).

#### Shield Support {{since '9.2'}}

Elasticsearch Shield support has been added since Nuxeo Platform 9.1. It is possible to configure authentication credentials [in nuxeo.conf]({{page version='' space='nxdoc' page='configuration-parameters-index-nuxeoconf'}}) (`elasticsearch.shield.enabled`, `elasticsearch.shield.username`, `elasticsearch.shield.password`). It also includes support of SSL encryption of the traffic since Nuxeo Platform 9.2.

Warning: in 9.3 this feature has been removed as Elasticsearch implementation was migrated to 5.X. A compatibility with X-Pack will be added later.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21208](https://jira.nuxeo.com/browse/NXP-21208) and [NXP-22042](https://jira.nuxeo.com/browse/NXP-22042)and the [Elasticsearch Shield documentation]({{page version='' space='nxdoc' page='elasticsearch-setup'}}#configuring-access-to-the-cluster-through-elasticsearch-shield-plugin) for more information.

#### Elasticsearch PageProvider Limits Navigation to 10k Documents (Configurable) {{since '9.2'}}

The page provider navigation is now limited to the first 10k documents. This is the default maximum result window defined in Elasticsearch.

When there are more than 10k results there is no more button to go to the last page or to go to a next page above this range.
The limit of 10k can be changed using the configuration service by contributing the property `org.nuxeo.elasticsearch.provider.maxResultWindow` to the [Configuration service](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.runtime.ConfigurationService--configuration#contribute).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22063](https://jira.nuxeo.com/browse/NXP-22063)

#### ecm:acl Removed From the Fulltext in the Default Elasticsearch Configuration {{since '9.3'}}

ACLs are no more indexed on the full text index.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22788](https://jira.nuxeo.com/browse/NXP-22788)

#### Use Elasticsearch Tools with Embedded Deployment of ES {{since '9.1'}}

It is now possible to use Elasticsearch tools to inspect (like elasticsearch-head) and query (like mirage) on Nuxeo index when Elasticsearch is embedded.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21455](https://jira.nuxeo.com/browse/NXP-21455).

### Tag Service

#### New Implementation Compatible With MongoDB {{since '9.3'}}

A new implementation for the Tag service has been made available by default. This implementation is available on MongoDB and Marklogic (while the previous implementation only worked for VCS). A property allows switching the implementation to the former one if necessary. (nuxeo.faceted.tag.service.enabled). New tag implementation stores values as properties of the document o na dedicated facet. As a consequence, the document type definition shall include that facet to benefit from Tag service support on a given document. A migration procedure has bee written to easily handle the migration from legacy implementation to the new one.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21651](https://jira.nuxeo.com/browse/NXP-21651).

### User Manager

#### New Operations {{since '9.1'}}

New automation operations are available:
- `User.CreateOrUpdate`
- `Group.CreateOrUpdate`

Both operations have a "mode" parameter that can be set to "create" or "update" to force the operation to do only creates or only updates.
Both operations can receive direct parameters or use a "properties" map to receive them.

The `Services.Query` operation has been renamed `User.Query`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA tickets [NXP-21627](https://jira.nuxeo.com/browse/NXP-21627) and [NXP-21962](https://jira.nuxeo.com/browse/NXP-21962).

### FileManager  {{since '9.1'}}

A new parameter allows to avoid overriding an existing folder.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21853](https://jira.nuxeo.com/browse/NXP-21853).

### Redis

#### Redis 4.0 supported {{since '9.3'}}

Both Redis 3.2 and 4.0 are now supported.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21770](https://jira.nuxeo.com/browse/NXP-21770).


### Key Value Store

#### A New Service Implemented On Redis {{since '9.1'}}

A Key/Value store has been added to the Core API and implemented in the Redis addon.
From the KeyValueService one can acquire a named KeyValueStore, whose API is currently:
- `put(key, value)`
- `get(key)`
- `compareAndSet(key, expected, value)`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21870](https://jira.nuxeo.com/browse/NXP-21870).

#### TTL Management On Key/Value store {{since '9.3'}}

TTL support has been added to the KeyValueStore with two additional methods to set it: 

- put(key,value,ttl) 
- setTTL(key,ttl)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-23029](https://jira.nuxeo.com/browse/NXP-23029).

#### MongoDB Implementation {{since '9.3'}}

The Nuxeo Key / Value store now has a MongoDB-based implementation. This removes a dependency toward Redis, with the goal of not needing Redis donc all dependencies will have been removed (there will remain the pub/sub implementation at LTS 2017 release time).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-23030](https://jira.nuxeo.com/browse/NXP-23030).

### OAuth

#### Nuxeo Platform as OAuth Provider {{since '9.2'}}

There was a first implementation of the OAuth flow to use Nuxeo as an OAuth provider. It has been deeply reviewed and completed to be closer to the specifications and to implement the best security practices. As a result, the [Nuxeo Mobile application]({{page version='' space='nxdoc' page='nuxeo-mobile'}}) will now use the OAuth flow to access content stored in the Nuxeo repository.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA epic [NXP-21721](https://jira.nuxeo.com/browse/NXP-21721).

#### PKCE For Native Applications {{since '9.3'}}

Starting from Nuxeo 9.3, Security has been improved on the oAuth flow implemented by Nuxeo Server, so that applications trying to connect to Nuxeo via a redirect to a custom URI scheme can be validated as non-malicious (since several applications could be listening to such scheme (ex: nuxeo://)).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22193](https://jira.nuxeo.com/browse/NXP-22193).


#### RFC recommendations about OAuth2 response errors and log these error {{since '9.3'}}

Error responses happening during the OAuth flow have been improved so as to stick to the RFC: 
- Authorization response: https://tools.ietf.org/html/rfc6749#section-4.1.2.1 
- Access token response: https://tools.ietf.org/html/rfc6749#section-5.2 
Errors are also logged server-side.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22717](https://jira.nuxeo.com/browse/NXP-22717).

#### REST API Endpoints for OAuth Tokens and OAuth Providers Management {{since '9.2'}}

Endpoints to CRUD OAuth tokens and providers (in respect to permission) have been added:

 - `GET oauth2/provider`: Returns the list of registered OAuth2 service providers
 - `POST oauth2/provider`: Creates a new OAuth2 service provider
 - `PUT oauth2/provider/<providerName>`: Updates an OAuth2 service provider
 - `DELETE oauth2/provider/<providerName>`: Deletes an OAuth2 service provider
 - `GET oauth2/token`: Gets the list of all stored tokens for all users
 - `GET oauth2/token/<providerName>/<nxLogin>`: Retrieves a stored token
 - `PUT oauth2/token/<providerName>/<nxLogin>`: Updates a stored token
 - `DELETE oauth2/token//<providerName>/<nxLogin>`: Deletes a stored token

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-20884](https://jira.nuxeo.com/browse/NXP-20884).

### REST API

#### Jersay client handler {{since '9.3'}}

REST API Client handler now uses Apache's Jersey implementation while it was using the JDK one previously. It provides stricter behaviors leading to better resilience.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22798](https://jira.nuxeo.com/browse/NXP-22798).

#### documentURL Enricher is Adapted to Using Web UI {{since '9.3'}}

documentUrl enricher now takes into account the application that has been set as the default one (between JSF an Web UI) so as to set the correct base on the returned.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22875](https://jira.nuxeo.com/browse/NXP-22875)

### User Management

####  nuxeo.user.emergency.enable Disabled By Default {{since '9.3'}}

Virtual emergency user that was available by default when using LDAP for authentication is disabled by default for security reason.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22888](https://jira.nuxeo.com/browse/NXP-22888).

### Packaging

#### Static WAR Generation {{since '9.1'}}
Static WAR generation has been fixed and added back to continuous integration. Nuxeo static WAR can be deployed as a standard web application on a Tomcat server.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21659](https://jira.nuxeo.com/browse/NXP-21659).

### User workspace

#### More Robust User Workspace Name Definition {{since '9.2'}}

We now generate the user workspace name based on the user id with no possible collision. We use an escaping mechanism that escapes the few unwanted characters in paths and URLs (slash, backslash, `?`, `&`, `@`, `&`) using a `~` and an hex code. This applies only to new user workspaces; If a user workspace was created previously, it will still be recognized and used.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21807](https://jira.nuxeo.com/browse/NXP-21807).

## Addons

### Lambda Integration {{since '9.2'}}

A new addon has been implemented that allows to leverage Amazon Lambdas for efficient asynchronous computing. The initial use case is to offload the Picture Views generation (generating several renditions with different sizes of the same source image), but the module has been designed to be used for other kinds of processing.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on the [readme](https://github.com/nuxeo/nuxeo-lambda/blob/master/Readme.md) and on the JIRA ticket [NXP-21922](https://jira.nuxeo.com/browse/NXP-21922).

### Imaging

#### Disabling Default Picture Conversions  {{since '9.1'}}

Default picture conversions can now be disabled by using the `enabled` attribute on the [PictureConversions extension point](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.picture.ImagingComponent--pictureConversions) contributions.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21311](https://jira.nuxeo.com/browse/NXP-21311).

### Binary Metadata  {{since '9.1'}}

[Binary metadata]({{page version='' space='nxdoc' page='binary-metadata'}}) allows to extract and write back metadata on binaries (ex: EXIF metadata). The module no more tries to update the binary when the content is managed externally, for instance when using [Nuxeo Live Connect]({{page version='' space='nxdoc' page='nuxeo-live-connect'}}).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-20282](https://jira.nuxeo.com/browse/NXP-20282).

### Nuxeo Drive  {{since '9.1'}}

Root registrations are not copied when a document and its children are copied.
In 9.1 and later, by default, we reset the synchronization root registrations on a copied document and its children. In LTS 2016 and earlier the previous behavior is kept.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21676](https://jira.nuxeo.com/browse/NXP-21676).

### Nuxeo Vision

#### Amazon Rekognition  {{since '9.1'}}

[Nuxeo Vision]({{page version='' space='nxdoc' page='nuxeo-vision'}}), the computer vision gateway, can now use Amazon Rekognition in addition to Google Vision. The automation operation `VisionOp` now includes a new parameter `provider` that allows to specifically call a given provider.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21851](https://jira.nuxeo.com/browse/NXP-21851).

### Live Connect

#### Dropbox API V2 Implementation {{since '9.2'}}

[Nuxeo Live Connect](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-liveconnect) now leverages the Dropbox API v2.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22384](https://jira.nuxeo.com/browse/NXP-NXP-22384).

### Nuxeo CSV

#### Nuxeo CSV Web UI Port  {{since '9.1'}}

[Nuxeo CSV]({{page version='' space='nxdoc' page='nuxeo-csv'}}) can now be used from [Web UI]({{page version='' space='userdoc' page='web-ui'}}). The feature is available from the import pop-up, in a new "CSV" tab.

![CSV import on Nuxeo Web UI]({{file name='9.1-nuxeo-csv-on-web-ui.png'}} ?w=500,border=true)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21484](https://jira.nuxeo.com/browse/NXP-21484).

#### CSV importer report {{since '9.3'}}

The Web UI integration of CSV importer now displays the import report to the user.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22460](https://jira.nuxeo.com/browse/NXP-22460).

#### Handle Blobs in Lists and Complex Types {{since '9.3'}}

By using a JSON format like 

```json
[
    {
        "file": {
            "mime-type": "text/plain",
            "content": "first_file.txt"
        }
    },
    {
        "file": {
            "mime-type": "application/pdf",
            "content": "my_pdf.pdf"
        }
    },
    {
        "file": {
            "name": "custom_name.pdf",
            "content": "another_pdf.pdf"
        }
    }
]
```
we can now import files in the attachment part of the File document (or any of your customized document type), while only the main file:content property could be filled using Nuxeo CSV importer before.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22746](https://jira.nuxeo.com/browse/NXP-22746).

### Nuxeo Template Rendering Web UI Port {{since '9.1'}}

[The template Rendering plugin]({{page version='' space='nxdoc' page='template-rendering-addon'}}) has been ported to Web UI. It has also been simplified. It is now designed to be used mostly in some situations where the Web UI has been tailored to your use cases. A user action looks up for matching templates and lets user choose one if there are several. If the template has some parameters, that action will asks the user those parameters, otherwise it will generate the rendition and fire a download. It is possible to easily override the template look up logic as well as the rendition chain that is used.

![Nuxeo Template Rendering Samples on Nuxeo Web UI]({{file name='9.1-template-rendering-samples-web-ui.png'}} ?w=500,border=true)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21486](https://jira.nuxeo.com/browse/NXP-21486).

### Nuxeo Platform Importer - English Dictionary for Random Import  {{since '9.1'}}

Random English content can now be generated using the random importer.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21260](https://jira.nuxeo.com/browse/NXP-21260).

### Nuxeo EasyShare Port {{since '9.3'}}

EasyShare addon has been ported to Web UI.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22923](https://jira.nuxeo.com/browse/NXP-22923).


### Nuxeo Web UI {{> anchor 'nuxeo-web-ui'}}

#### New List Item View with Search Results Highlight {{since '9.2'}}

A new search result view has been added on the main search. It displays items on the full width of the panel, in the same style as a web search engine such as Google, with searched terms highlighted in the context of the original text wrapping them.

![Web UI 9.2 faceted search results hightlights]({{file name='9.2-faceted-search-results-hightlight.png'}} ??w=500,border=true)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22567](https://jira.nuxeo.com/browse/NXP-22567).

#### Results Highlight in Suggestion Search {{since '9.2'}}

When doing a quick search in the suggestion box, Web UI now displays the matched terms and metadata so as to understand why the result item is returned.  

![Web UI 9.2 suggestion search results hightlights]({{file name='9.2-suggestion-search-results-highlight.png'}} ??w=400,border=true)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22566](https://jira.nuxeo.com/browse/NXP-22566).

#### Justified Thumbnails Grid {{since '9.2'}}

A new view for media search results has been added, with justified display of thumbnails that keep their original ratio and metadata displayed on hover. The goal is to improve user experience for users that spend a lot of time searching for visual media (images, video) in the repository.

![Web UI 9.2 media justified grid]({{file name='9.2-assets-justified-grid.png'}} ??w=400,border=true)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22474](https://jira.nuxeo.com/browse/NXP-22474).

#### Improved Task View {{since '9.2'}}

Task view has been improved:

- New task layout: More readable task details, preview on the right, flatter design
- Task queue: Optimization of the information available to the user
- Tasks Listing Dashboard: File name and path info have been added

![Web UI 9.2 improved task view]({{file name='9.2-improved-workflow-task.png'}} ??w=500,border=true)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22591](https://jira.nuxeo.com/browse/NXP-22591).

#### New Layout For Folderish Documents {{since '9.3'}}

The folder view (and view of other folderish documents) has been improved so that more space is dedicated to the content listing of the folder while displaying metadata of the folder above the listing.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22997](https://jira.nuxeo.com/browse/NXP-22997).

#### Better Document Edit User Experience {{since '9.3'}}

More space has been dedicated to metadata edit experience, by using a pop-in that displays metadata edit page full screen.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22989](https://jira.nuxeo.com/browse/NXP-22989).

#### Storyboard on Video Layout {{since '9.2'}}

The storyboard has been added to Web UI view of videos.

![Web UI 9.2 video storyboard]({{file name='9.2-video-storyboard-webui.png'}} ??w=500,border=true)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [ELEMENTS-358](https://jira.nuxeo.com/browse/ELEMENTS-358)

#### Default Workflows independent from Nuxeo JSF UI {{since '9.2'}}

Default Workflows (serial and parallel reviews) have been added to Nuxeo Web UI and do not require Nuxeo SJF UI anymore.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21518](https://jira.nuxeo.com/browse/NXP-21518).

#### More Style Variables For Further Customization {{since '9.3'}}

More CSS variables area available allowing to move some of the major elements (like search bar) and to better control the space available for the logo.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-23198](https://jira.nuxeo.com/browse/NXP-23198).

#### Add an Alternative Text to Non-text Content {{since '9.3'}}

Some improvements in regard to accessibility of the Web UI application have been implemented, like adding an alternative text to non-text content.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22478](https://jira.nuxeo.com/browse/NXP-22478).

#### Ability to Close the Banner {{since '9.3'}}

A close button has been added to the Mobile Banner in Web UI.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21794](https://jira.nuxeo.com/browse/NXP-21794).

#### Hungarian is now translated using Crowdin {{since '9.3'}}

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22758](https://jira.nuxeo.com/browse/NXP-22758).

### Nuxeo JSF UI

#### Custom Mobile Banner  {{since '9.1'}}

A Custom Banner has been added so as to let the user open the [Nuxeo mobile application]({{page version='' space='nxdoc' page='nuxeo-mobile'}}) when browsing the JSF UI from an Android or iOS mobile device.

![Nuxeo Mobile banner on login page]({{file name='9.1-nuxeo-mobile-banner.jpg'}} ??w=250,border=true)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21679](https://jira.nuxeo.com/browse/NXP-21679).

#### Breadcrumb: Browse Parent Folder  {{since '9.1'}}

Dots in the breadcrumb allow to move to parent folder.

![Breadcrumbs update for 9.1]({{file name='9.1-nuxeo-jsf-breadcrumbs.png'}} ?w=500,border=true)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21068](https://jira.nuxeo.com/browse/NXP-21068).

#### Integer Constraint Correctly Formatted in JSF UI {{since '9.2'}}

When a property is of type Integer and the constraint check is enabled, message on the widget is:
 "'abc' is not a number. Example: 99".

### Packaging

#### Official Docker Image is Compatible with OpenShift {{since '9.2'}}

The script to build the official Docker image has been improved so that the image can be launched from Open Shift, which imposes some specific security constraints.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21880](https://jira.nuxeo.com/browse/NXP-21880).

#### CentOS Specific Image Build {{since '9.2'}}

The script to build the official Docker image now also allows to build specifically an image on top of CentOS.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21995](https://jira.nuxeo.com/browse/NXP-21995).

## Farewell

### Nuxeo Forum  {{since '9.1'}}

Deprecated for LTS 2016, Nuxeo Forum has been removed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21448](https://jira.nuxeo.com/browse/NXP-21448).

### Box API  {{since '9.1'}}

Deprecated for LTS 2016, Box API has been removed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP_22041](https://jira.nuxeo.com/browse/NXP-22041).
