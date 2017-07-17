---
title: Nuxeo Server 9.1 Release Notes
review:
    comment: ''
    date: '2017-04-23'
    status: ok
labels:
toc: true
tree_item_index: 10000

---
This page relates to the release notes of Nuxeo Server and related addons for the 9.10 cycle, a.k.a LTS 2017 cycle. It will list the improvements and features that are successively shipped with the 9.1, 9.2 and 9.3 releases, before a final update for the LTS 2017. Evolutions are grouped by components. You can also find detailed JIRA release notes:

- [9.1 JIRA release notes](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=17991)

We also provide [instructions for upgrading]({{page version='' space='nxdoc' page='upgrade-from-lts-2016-to-91'}}) to the latest release.

## Nuxeo Server

### Runtime

#### NEW Runtime Components Lifecycle Refactored

The runtime behaviour has been refactored so as to provide a cleaner lifecycle to its components. This (big) change is pretty transparent for now but will allow to provide new features to the runtime in the next releases.

More information on JIRA ticket [NXP-19326](https://jira.nuxeo.com/browse/NXP-19326).

#### NEW Graceful Shutdown in Tomcat

Runtime behavior has been cleaned up so that it is now possible when shutting down tomcat to make sure that all asynchronous work has been either processed or task has been persisted.

More information on JIRA ticket [NXP-21969](https://jira.nuxeo.com/browse/NXP-21969).

#### NEW Backing Service

The infrastructure was added for plugging some initial external services availability checks *before* starting the runtime. First use case was to add a check for MongoDB  or Postgres availability, when the MongoDB or Postgres template is used. In case it is not available, the nuxeo-launcher is interrupted.

More information on JIRA ticket [NXP-21532](https://jira.nuxeo.com/browse/NXP-21532).

#### Test @PartialDeploy Annotation

The new Test `@PartialDeploy` annotation allows you to select exactly which contributions you want to deploy from a component.

```
@PartialDeploy(bundle = "studio.extensions.YOUR_PROJECT_NAME", extensions = { TargetExtensions.Automation.class })
```

It makes it easier to test Nuxeo Studio features like Automation Scripting or event handlers.

### Core Repository

#### Centralized Automated Versioning Policies

A new extension point has been added to define automated versioning policies. It allows to declare behaviors such as "Version documents each time the current contributor is different than the last one on the document". It also allows to control wether you want to version before or after the modification. All platform code that was triggering specifically hardcoded behaviors has been refactored so that the central policy is applied: Drive, File Manager (drag and drop behaviors), etc.). Only CMIS hasn't been impacted for now due to some difficulties with requirements regarding document checked in or checked out.

More information on JIRA ticket [NXP-21588](https://jira.nuxeo.com/browse/NXP-21588), the [versioning developer documentation]({{page version='' space='nxdoc' page='versioning'}}) or the [user documentation]({{page version='' space='userdoc'}}).

#### More Permissions Returned in the Permissions Enricher

All visible permissions and more core permissions are included by the [Permissions enricher](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/enrichers/BasePermissionsJsonEnricher.html). Permission enricher can be used to know what permissions the authenticated user has on the document.

More information on JIRA ticket [NXP-21408](https://jira.nuxeo.com/browse/NXP-21408) and the [Content Enricher documentation]({{page version='' space='nxdoc' page='content-enrichers'}}).

#### Orphan Versions Removal

In some cases, versions of some documents where not deleted even when the document itself was removed. The solution chosen to solve this issue has been to add a scheduled cleanup mechanism. The cleanup mechanism does periodic commits, every 1000 documents by default. This value can be changed using the configuration property [`org.nuxeo.orphanVersionsCleanup.commitSize`](http://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform-9.1/viewContribution/org.nuxeo.ecm.core.orphanVersionsCleanup--configuration).

More information on JIRA ticket [NXP-14187](https://jira.nuxeo.com/browse/NXP-14187).

#### Compatible with CloudFront for Caching Binaries

When using S3 it is possible to redirect signed CloudFront URLs instead of directly S3 ones, so as to benefit from AWS world wild content caching service.

More information on JIRA ticket [NXP-20219](https://jira.nuxeo.com/browse/NXP-20219).

#### Leverage Blob's XPath in Dispatching Rules

It is now possible to use the XPath of the binary that is being stored to determine where the binary should be stored. This typically allows to store thumbnails in a different backend than the main file. The DefaultBlobDispatcher can now match blob XPath using the syntax `blob:xpath=my/xpath` and a new glob operator `~` is available to allow matching things like `blob:xpath~files/*/file`.

More information on JIRA ticket [NXP-21891](https://jira.nuxeo.com/browse/NXP-21891).

#### NEW Change Token for Optimistic Locking

New API:

- `DocumentModel.getChangeToken()`

New behaviors:

- Calling `doc.putContextData(CoreSession.CHANGE_TOKEN, token)` then `CoreSession.saveDocument(doc)` will check the change token and raise ConcurrentUpdateException in case of mismatch.

- Calling doc.putContextData(CoreSession.USER_CHANGE, Boolean.TRUE) then CoreSession.saveDocument(doc) will flag the save as a "user change".

The change token returned to the user-level API DocumentModel.getChangeToken() is now a mix of a system change token (updated at every change) and a user change token (updated at every user change). A "user change" is a change initiated by a user-level operation, which is defined as a document save that passes a previous change token using doc.putContextData(CoreSession.CHANGE_TOKEN, token), or that marks the save as an explicit user change using doc.putContextData(CoreSession.USER_CHANGE, Boolean.TRUE).
The system change token is such that every modification to a document (whether done by the system or by a user) now increments a system value called the "system change token".

More information on JIRA tickets [NXP-19435](https://jira.nuxeo.com/browse/NXP-19435) and [NXP-22019](https://jira.nuxeo.com/browse/NXP-22019) and [NXP-22259](https://jira.nuxeo.com/browse/NXP-22259).

#### Disable Delta Computation

By adding the new option `org.nuxeo.core.delta.disabled=true` in the `nuxeo.conf` file, the delta calculation used by the [Nuxeo Quota addon]({{page version='' space='nxdoc' page='nuxeo-quota'}}) can be skipped. This can improve the performance of mass import.

More information on JIRA ticket [NXP-20892](https://jira.nuxeo.com/browse/NXP-20892).

#### API for Permission Purge

An operation "PermissionsPurge" has been added for triggering a permission purge for a given principal. This allows you to do an integration with your identity management system so as to remove any permission to a user that would be leaving your organization in the same time you would disable his credentials.

More information on JIRA ticket [NXP-20844](https://jira.nuxeo.com/browse/NXP-20844).

#### Date Fields Export with Millisecond Precision

The XML Core IO format and the JSON serialization now include milliseconds information for all date properties.

More information on JIRA ticket [NXP-21607](https://jira.nuxeo.com/browse/NXP-21607).

#### User Existence Is Checked on Document.AddPermission Operation

A check on the existence of users an groups referenced with this operation is performed before doing the assignment. An exception is raised otherwise.

More information on JIRA ticket [NXP-21559](https://jira.nuxeo.com/browse/NXP-21559).

#### NEW Attribute "perDocumentQuery" of facet definition can be overridden

It is possible to change the value of the attribute perDocumentQuery of a facet that has been contributed in the built-in distribution.

More information on JIRA ticket [NXP-22603](https://jira.nuxeo.com/browse/NXP-22603)

#### NEW Document Properties Deprecation

A new extension point "deprecation" has been added to the Schema service for configuring deprecated fields and their optional fall-back. A warning is logged when a deprecated field is used in the application, and if the fall-back is configured, values are set and get from that fall-back field.

```xml
<property schema="common" name="size" deprecated="true" />
<property schema="file" name="filename" fallback="content/name" />
```
More information on JIRA ticket [NXP-21456](https://jira.nuxeo.com/browse/NXP-21456)

### Core Storage

#### NEW SSL Support for Marklogic

When using the Marklogic Connector for Nuxeo, connection is now secured with SSL.

More information on JIRA ticket [NXP-21818](https://jira.nuxeo.com/browse/NXP-21818).

#### Improved Performance on Scrolling API with Marklogic

Scroll API (that allows to fetch many documents in a row) has been re-implemented on Marklogic connector. Elastiscsearch re-indexation rate has been increased from 642 documents / seconds to 2418 documents / seconds, i.e +375%.

More information on JIRA ticket [NXP-21824](https://jira.nuxeo.com/browse/NXP-21824).

#### New Oracle JDBC Driver (ojdbc7) Compatibility

The new Oracle JDBC Driver OJBC7 can be used with Oracle 12c.

More information on JIRA ticket [NXP-19373](https://jira.nuxeo.com/browse/NXP-19373).

#### Optimized Number of Read When Writing

The number of read requests required to create documents has been reduced to the strictly required using cache. As a consequence CPU is no longer the limiting factor of bulk-intensive import scenari.

More information on JIRA ticket [NXP-20595](https://jira.nuxeo.com/browse/NXP-20595).

#### NEW Database-level Integrity Constraints for PostgreSQL

When using PostgreSQL, stricter database-level checks are now enabled to prevent rare document name collisions due to concurrent writes. Behavior can be controlled in the repository configuration file using 

```xml
	<childNameUniqueConstraintEnabled>true</childNameUniqueConstraintEnabled>
```
More information on JIRA ticket [NXP-22421](https://jira.nuxeo.com/browse/NXP-22421).

### Core Events

A new PubSubService is available, providing cross-instance publish/subscribe methods:
- `publish(topic, message)` sends a message to the given topic
- `registerSubscriber(topic, subscriber)` registers a subscriber

More information on JIRA ticket [NXP-21800](https://jira.nuxeo.com/browse/NXP-21800).

### directory

#### NEW administrators group members have access to protected directories 

Directories access protected by giving `Read`permission to group __Nobody__ are now accessible by members of the group administrators.

More information on JIRA ticket [NXP-22609](https://jira.nuxeo.com/browse/NXP-22609)

#### NEW MongoDB Directory Implementation

Directory interface now has a MongoDB implementation included in the default distribution.

More information on JIRA ticket [NXP-21582](https://jira.nuxeo.com/browse/NXP-21582).

#### NEW Generic Directories References
A new descriptor for references in directories has been added (their description used to be specific to the SQL implementation of directories). Example: 
```xml
<references> 
        <reference field="groups" directory="groupDirectory" 
                   name="user2group" source="userId" 
                   target="groupId" dataFile="user2group.csv"/> 
</references> 
```

This reference is generic and can be used with SQL and MongoDB implementation. 


More information on JIRA ticket [NXP-22411](https://jira.nuxeo.com/browse/NXP-22411).


### Audit

#### MongoDB Audit Backend

A MongoDB backend has been implemented with the purpose of being able to install the Nuxeo Platform without requiring an additional relation database.

More information on JIRA ticket [NXP-21500](https://jira.nuxeo.com/browse/NXP-21500).

### CMIS

#### Relax Mode

Some constraints of CMIS can be bypassed. To do so use the runtime property `nuxeo.dontFollowCmisSpec=true`.
This way, for instance, multiple "contains" can be used in the CMISQL query while the standard forbids it.

More information on JIRA ticket [NXP-19858](https://jira.nuxeo.com/browse/NXP-19858).

#### Change Token

Change Token [specified](http://docs.oasis-open.org/cmis/CMIS/v1.1/cs01/CMIS-v1.1-cs01.html#x1-1610003) in CMIS 1.1 as optional has been implemented.

More information on JIRA ticket [NXP-20665](https://jira.nuxeo.com/browse/NXP-20665).

#### Proxies Are Visible by Default

`org.nuxeo.cmis.proxies=true` is now the default.

More information on JIRA ticket [NXP-21828](https://jira.nuxeo.com/browse/NXP-21828).

#### NEW maxItems Parameter in CMIS Query is Now Supported

Thanks to this parameter, when using the ES implementation of CMIS bridge, you can get a certain amount of documents without loading the entire result set at once. Implementation over Core in case of DBS as also been improved consequently.

More information on JIRA ticket [NXP-21877](https://jira.nuxeo.com/browse/NXP-21877).

### Query

#### Search with Highlighted Results

It is now possible to configure a page provider so as to get highlighted search result, in order to display the paragraph wrapping a given full-text searched term, in the search result. The [Search endpoint]({{page version='' space='nxdoc' page='search-endpoints'}}) and PageProvider operation have been updated accordingly. Checkout the [polymer sample](https://github.com/nuxeo-sandbox/nuxeo-highlight-showcase) that showcases this new capability of the API to know more about it.

More information on JIRA ticket [NXP-20507](https://jira.nuxeo.com/browse/NXP-20507).

### Conversion

#### PDF Export of a Note

It is now possible to export a Note with its embedded images as a PDF.

More information on JIRA ticket [NXP-16831](https://jira.nuxeo.com/browse/NXP-16831).

### Elasticsearch

####  NEW Shield Support

Elasticsearch Shield support has been added. It is possible to configure authentication credentials [in nuxeo.conf]({{page version='' space='nxdoc' page='configuration-parameters-index-nuxeoconf'}}) (`elasticsearch.shield.enabled`, `elasticsearch.shield.username`, `elasticsearch.shield.password`). It also includes support of SSL encryption of the traffic.

More information on JIRA ticket [NXP-21208](https://jira.nuxeo.com/browse/NXP-21208) and [NXP-22042](https://jira.nuxeo.com/browse/NXP-22042)and the [Elasticsearch Shield documentation]({{page version='' space='nxdoc' page='elasticsearch-setup'}}#configuring-access-to-the-cluster-through-elasticsearch-shield-plugin) for more information.

#### Elasticsearch PageProvider limits navigation to 10k Documents (Configurable)

The page provider navigation is now limited to the first 10k documents (this is the default maximum result window defined in Elasticsearch). 
When there is more than 10k results there is no more button to go to the last page or to go to a next page above this range. 
The limit of 10k can be changed using the configuration service by setting the property: org.nuxeo.elasticsearch.provider.maxResultWindow.

#### Use Elasticsearch Tools with Embedded Deployment of ES

It is now possible to use Elasticsearch tools to inspect (like elasticsearch-head) and query (like mirage) on Nuxeo index when Elasticsearch is embedded.

More information on JIRA ticket [NXP-21455](https://jira.nuxeo.com/browse/NXP-21455).


### User Manager

#### New Operations

New automation operations are available:
- `User.CreateOrUpdate`
- `Group.CreateOrUpdate`

Both operations have a "mode" parameter that can be set to "create" or "update" to force the operation to do only creates or only updates.
Both operations can receive direct parameters or use a "properties" map to receive them.

The `Services.Query` operation has been renamed `User.Query`.

More information on JIRA tickets [NXP-21627](https://jira.nuxeo.com/browse/NXP-21627) and [NXP-21962](https://jira.nuxeo.com/browse/NXP-21962).

### FileManager

A new parameter allows to avoid overriding an existing folder.

More information on JIRA ticket [NXP-21853](https://jira.nuxeo.com/browse/NXP-21853).

### Redis

#### Key Value Store

A new Key/Value store has been added to the Core API and implemented in the Redis addon.
From the KeyValueService one can acquire a named KeyValueStore, whose API is currently:
- `put(key, value)`
- `get(key)`
- `compareAndSet(key, expected, value)`

More information on JIRA ticket [NXP-21870](https://jira.nuxeo.com/browse/NXP-21870).

### oAuth

### NEW Nuxeo Platform as oAuth Provider
There was a first implementation of the oAuth flow for using Nuxeo as a oAuth provider. It has been deeply reviewed and completed for being closer to the specifications and for implementing the best security practices. As a result, the Nuxeo Mobile application will now use the oAuth flow to access content stored in the Nuxeo repository.

More information on JIRA tickets linked to the following epic: [NXP-21721](https://jira.nuxeo.com/browse/NXP-21721).

### NEW REST API Endpoints for oAuth tokens and oAuth Providers Management

Endpoints to CRUD  oAuth tokens and providers (in respect to permission) have been added:
 - GET oauth2/provider: returns the list of registered oauth2 service providers
 - POST oauth2/provider: creates a new oauth2 service provider
 - PUT oauth2/provider/<providerName>: updates an oauth2 service provider
 - DELETE oauth2/provider/<providerName>: deletes an oauth2 service provider
 - GET oauth2/token: to list all stored tokens for all users
 - GET oauth2/token/<providerName>/<nxLogin>: to retrieve a stored token
 - PUT oauth2/token/<providerName>/<nxLogin>: to update a stored token
 - DELETE oauth2/token//<providerName>/<nxLogin>: to delete a stored token

More information on JIRA ticket [NXP-20884](https://jira.nuxeo.com/browse/NXP-20884).

### Packaging

#### Static WAR Generation
Static WAR generation has been fixed and added back to continuous integration. Nuxeo static WAR can be deployed as a standard web application on a Tomcat server.

More information on JIRA ticket [NXP-21659](https://jira.nuxeo.com/browse/NXP-21659).

### User workspace

#### NEW More Robust User Workspace Name Definition

We now generate the user workspace name based on the user id with no possible collision, using an escaping mechanism that escapes the few unwanted characters in paths and URLS (slash, backslash, ?, &, @, ; ) using a ~ and an hex code. If a user workspace was created previously, it will still be recognized and used; this applies only to new user workspaces.

More information on JIRA ticket [NXP-21807](https://jira.nuxeo.com/browse/NXP-21807).

## Addons

### NEW Lambda Integration

A new addon has been implemented that allows to leverage Amazon Lambdas for efficient asynchronous computing. The initial use case is to offload the PictureViews generation (generating several rendition with different size of the same source image) but the module has been designed to be used for other kind of processing.

More information on the [readme](https://github.com/nuxeo/nuxeo-lambda/blob/master/Readme.md) and on the JIRA ticket [NXP-21922](https://jira.nuxeo.com/browse/NXP-21922).


### Imaging

#### Disabling Default Picture Conversions

Default picture conversions can now be disabled by using the `enabled` attribute on the [PictureConversions extension point](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.picture.ImagingComponent--pictureConversions) contributions.

More information on JIRA ticket [NXP-21311](https://jira.nuxeo.com/browse/NXP-21311).

### Binary Metadata

[Binary metadata]({{page version='' space='nxdoc' page='binary-metadata'}}) allows to extract and write back metadata on binaries (ex: EXIF metadata). The module no more tries to update the binary when the content is managed externally, for instance when using [Nuxeo Live Connect]({{page version='' space='nxdoc' page='nuxeo-live-connect'}}).

More information on JIRA ticket [NXP-20282](https://jira.nuxeo.com/browse/NXP-20282).

### Nuxeo Drive

Root registrations are not copied when a document and its children are copied.
In 9.1 and later, by default, we reset the synchronization root registrations on a copied document and its children. In LTS 2016 and earlier the previous behavior is kept.

More information on JIRA ticket [NXP-21676](https://jira.nuxeo.com/browse/NXP-21676).

### Nuxeo Vision

#### Amazon Rekognition

### Live Connect

#### NEW Dropbox API V2 Implementation

Live Connect plugin now leverages Dropbox V2 API for integration with Nuxeo in Live Connect add-on. 

More information on JIRA ticket [NXP-22384](https://jira.nuxeo.com/browse/NXP-NXP-22384).

[Nuxeo Vision]({{page version='' space='nxdoc' page='nuxeo-vision'}}), the computer vision gateway, can now use Amazon Rekognition in addition to Google Vision. The automation operation `VisionOp` now includes a new parameter `provider` that allows to specifically call a given provider.

More information on JIRA ticket [NXP-21851](https://jira.nuxeo.com/browse/NXP-21851).

### Nuxeo CSV Web UI Port

[Nuxeo CSV]({{page version='' space='nxdoc' page='nuxeo-csv'}}) can now be used from [Web UI]({{page version='' space='userdoc' page='web-ui'}}). The feature is available from the import pop-up, in a new "CSV" tab.

![CSV import on Nuxeo Web UI]({{file name='9.1-nuxeo-csv-on-web-ui.png'}} ?w=500,border=true)

More information on JIRA ticket [NXP-21484](https://jira.nuxeo.com/browse/NXP-21484).

### Nuxeo Template Rendering Web UI Port

[The template Rendering plugin]({{page version='' space='nxdoc' page='template-rendering-addon'}}) has been ported to Web UI. It has also been simplified. It is now designed to be used mostly in some situations where the Web UI has been tailored to your use cases. A user action looks up for matching templates and lets user choose one if there are several. If the template has some parameters, that action will asks the user those parameters, otherwise it will generate the rendition and fire a download. It is possible to easily override the template look up logic as well as the rendition chain that is used.

![Nuxeo Template Rendering Samples on Nuxeo Web UI]({{file name='9.1-template-rendering-samples-web-ui.png'}} ?w=500,border=true)


More information on JIRA ticket [NXP-21486](https://jira.nuxeo.com/browse/NXP-21486).

### Nuxeo Platform Importer - English Dictionary for Random Import

Random English content can now be generated using the random importer.

More information on JIRA ticket [NXP-21260](https://jira.nuxeo.com/browse/NXP-21260).

### Web UI

#### NEW New List Item View with Search Results Highlight

A new search result view has been added on the main search. It displays items on the full width of the panel, in the same style as a web search engine such as Google, with searched terms highlighted in the context of the original text wrapping them.

More information on JIRA ticket [NXP-22567](https://jira.nuxeo.com/browse/NXP-22567).

#### NEW Results Highlight in Suggestion Search

When doing a quick search in the suggestion box, Web UI now displays the matched terms and metadata so as to understand why the result item is returned.  

More information on JIRA ticket [NXP-22566](https://jira.nuxeo.com/browse/NXP-22566).

#### NEW Justified Thumbnails Grid

A new view for media search results has been added with justified display of thumbnails that keep their original ratio and with metadata displayed on hover. Goal is to improve user experience for users that spend a lot of time searching for visual media (images, video) in the repository.

More information on JIRA ticket [NXP-22474](https://jira.nuxeo.com/browse/NXP-22474).

#### NEW Better Task View

Task view has been improved:
  - New task layout: More readable task detail, preview on the right, flatter design
  - Task queue: Optimization of the information available to the user
  - Tasks Listing Dashboard : File name and path info have been added 

More information on JIRA ticket [NXP-22591](https://jira.nuxeo.com/browse/NXP-22591).


#### NEW Default Workflows

Default Workflows (serie and parallel review) have been added to Web UI.

More information on JIRA ticket [NXP-21518](https://jira.nuxeo.com/browse/NXP-21518).

### JSF UI

#### Custom Mobile Banner

A Custom Banner has been added so as to let the user open the [Nuxeo mobile application]({{page version='' space='nxdoc' page='nuxeo-mobile'}}) when browsing the JSF UI from an Android or iOS mobile device.

![Nuxeo Mobile banner on login page]({{file name='9.1-nuxeo-mobile-banner.jpg'}} ??w=300,border=true)

More information on JIRA ticket [NXP-21679](https://jira.nuxeo.com/browse/NXP-21679).

#### Breadcrumb: Browse Parent Folder

Dots in the breadcrumb allow to move to parent folder.

![Breadcrumbs update for 9.1]({{file name='9.1-nuxeo-jsf-breadcrumbs.png'}} ?w=600,border=true)

More information on JIRA ticket [NXP-21068](https://jira.nuxeo.com/browse/NXP-21068).

#### NEW Integer Constraint Correctly Formated in JSF UI

When a property is of type Integer and constraint check is enabled, message on the widget is:
 "'abc' is not a number. Example: 99".


 ### Packaging

 ####  NEW Official Docker Image is Compatible with OpenShift

 The script to build the official docker image has been improved so that the image can be launched from Open Shift that imposes some specific security constraints.

More information on JIRA ticket [NXP-21880](https://jira.nuxeo.com/browse/NXP-21880).


## Farewell

### Nuxeo Forum

Deprecated for LTS 2016, Nuxeo Forum has been removed.

More information on JIRA ticket [NXP-21448](https://jira.nuxeo.com/browse/NXP-21448).

### Box API

Deprecated for LTS 2016, Box API has been removed.

More information on JIRA ticket [NXP_22041](https://jira.nuxeo.com/browse/NXP-22041).
