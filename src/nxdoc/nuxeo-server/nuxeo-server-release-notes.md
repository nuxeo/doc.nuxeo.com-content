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

#### Test @PartialDeploy Annotation

The new Test `@PartialDeploy` annotation allows you to select exactly which contributions you want to deploy from a component.

```
@PartialDeploy(bundle = "studio.extensions.YOUR_PROJECT_NAME", extensions = { TargetExtensions.Automation.class })
```

It makes it easier to test Nuxeo Studio features like Automation Scripting or event handlers.

### Core Repository

#### Centralized Automated Versioning Policies

A new extension point has been added to define automated versioning policies. It allows to declare behaviors such as "Version documents each time the current contributor is different than the last one on the document". It also allows to control wether you want to version before or after the modification. All platform code that was triggering specifically hardcoded behaviors has been refactored so that the central policy is applied: Drive, File Manager (Drag'n Drop behaviors), etc.). Only CMIS hasn't been impacted for now due to some difficulties with requirements regarding document checked in or checked out.

More information on JIRA ticket [NXP-21588](https://jira.nuxeo.com/browse/NXP-21588), the [versioning developer documentation]({{page version='' space='nxdoc' page='versioning'}}) or the [user documentation]({{page version='' space='userdoc'}}).

#### More Permissions Returned in the Permissions Enricher

All visible permissions and more core permissions are included by the [Permissions enricher](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/io/marshallers/json/enrichers/BasePermissionsJsonEnricher.html). Permission enricher can be used to know what permissions the authenticated user has on the document.

More information on JIRA ticket [NXP-21408](https://jira.nuxeo.com/browse/NXP-21408) and the [Content Enricher documentation]({{page version='' space='nxdoc' page='content-enrichers'}}).

#### Orphan Versions Removal

In some cases, versions of some documents where not deleted even when the document itself was removed. The solution chosen to solve this issue has been to add a scheduled cleanup mechanism. The cleanup mechanism does periodic commits, every 1000 documents by default. This value can be changed using the configuration property `org.nuxeo.orphanVersionsCleanup.commitSize`.

More information on JIRA ticket [NXP-14187](https://jira.nuxeo.com/browse/NXP-14187).


#### Compatible with CloudFront for Caching Binaries

When using S3 it is possible to redirect signed CloudFront URLs instead of directly S3 ones, so as to benefit from AWS world wild content caching service.

More information on JIRA ticket [NXP-20219](https://jira.nuxeo.com/browse/NXP-20219).

#### Leverage Blob's XPath in Dispatching Rules

It is now possible to use the XPath of the binary that is being stored to determine where the binary should be stored. This typically allows to store thumbnails in a different backend than the main file. The DefaultBlobDispatcher can now match blob XPath using the syntax `blob:xpath=my/xpath` and a new glob operator `~` is available to allow matching things like `blob:xpath~files/*/file`.

More information on JIRA ticket [NXP-21891](https://jira.nuxeo.com/browse/NXP-21891).

#### Change Token for Optimistic Locking

New API:

- `DocumentModel.getChangeToken()`

New behavior:

- Calling `doc.putContextData(CoreSession.CHANGE_TOKEN, token)` then `CoreSession.saveDocument(doc)` will check the change token and raise ConcurrentUpdateException in case of mismatch.

More information on JIRA ticket [NXP-19435](https://jira.nuxeo.com/browse/NXP-19435).

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

### Core Storage

#### New Oracle JDBC Driver (ojdbc7) Compatibility

The new Oracle JDBC Driver OJBC7 can be used with Oracle 12c.

More information on JIRA ticket [NXP-19373](https://jira.nuxeo.com/browse/NXP-19373).

#### Optimized Number of Read When Writing

The number of read requests required to create documents has been reduced to the strictly required using cache. As a consequence CPU is no longer the limiting factor of bulk-intensive import scenarii.

More information on JIRA ticket [NXP-20595](https://jira.nuxeo.com/browse/NXP-20595).

### Core Events

A new PubSubService is available, providing cross-instance publish/subscribe methods:
- `publish(topic, message)` sends a message to the given topic
- `registerSubscriber(topic, subscriber)` registers a subscriber

More information on JIRA ticket [NXP-21800](https://jira.nuxeo.com/browse/NXP-21800).

### Directory

#### MongoDB Directory Implementation

Directory interface now has a MongoDB implementation.

More information on JIRA ticket [NXP-17742](https://jira.nuxeo.com/browse/NXP-17742).

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

### Query

#### Search with Highlighted Results

It is now possible to configure a page provider so as to get highlighted search result, in order to display the paragraph wrapping a given full-text searched term, in the search result. The [Search endpoint]({{page version='' space='nxdoc' page='search-endpoints'}}) and PageProvider operation have been updated accordingly. Checkout the [polymer sample](https://github.com/nuxeo-sandbox/nuxeo-highlight-showcase) that showcases this new capability of the API to know more about it.

More information on JIRA ticket [NXP-20507](https://jira.nuxeo.com/browse/NXP-20507).

### Conversion

#### PDF Export of a Note

It is now possible to export a Note with its embedded images as a PDF.

More information on JIRA ticket [NXP-16831](https://jira.nuxeo.com/browse/NXP-16831).

### Elasticsearch

#### Shield Support

Elasticsearch Shield support has been added. It is possible to configure authentication credentials [in nuxeo.conf]({{page version='' space='nxdoc' page='configuration-parameters-index-nuxeoconf'}}) (`elasticsearch.shield.enabled`, `elasticsearch.shield.username`, `elasticsearch.shield.password`).

More information on JIRA ticket [NXP-21208](https://jira.nuxeo.com/browse/NXP-21208) and the [Elasticsearch Shield documentation]({{page version='' space='nxdoc' page='elasticsearch-setup'}}#configuring-access-to-the-cluster-through-elasticsearch-shield-plugin) for more information.

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

### Packaging

#### Static WAR Generation
Static WAR generation has been fixed and added back to continuous integration. Nuxeo static WAR can be deployed as a standard web application on a Tomcat server.

More information on JIRA ticket [NXP-21659](https://jira.nuxeo.com/browse/NXP-21659).

## Addons

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

### JSF UI

#### Custom Mobile Banner

A Custom Banner has been added so as to let the user open the [Nuxeo mobile application]({{page version='' space='nxdoc' page='nuxeo-mobile'}}) when browsing the JSF UI from an Android or iOS mobile device.

![Nuxeo Mobile banner on login page]({{file name='9.1-nuxeo-mobile-banner.jpg'}} ??w=300,border=true)

More information on JIRA ticket [NXP-21679](https://jira.nuxeo.com/browse/NXP-21679).

#### Breadcrumb: Browse Parent Folder

Dots in the breadcrumb allow to move to parent folder.

![Breadcrumbs update for 9.1]({{file name='9.1-nuxeo-jsf-breadcrumbs.png'}} ?w=600,border=true)

More information on JIRA ticket [NXP-21068](https://jira.nuxeo.com/browse/NXP-21068).

## Farewell

### Nuxeo Forum

Deprecated for LTS 2016, Nuxeo Forum has been removed.

More information on JIRA ticket [NXP-21448](https://jira.nuxeo.com/browse/NXP-21448).
