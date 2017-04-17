---
title: Nuxeo Server Release Notes
review:
    comment: ''
    date: '2017-04-23'
    status: ok
labels:
toc: true
tree_item_index: 10000

---
This page relates release notes of Nuxeo Server and related addons for the 9.10 cycle, a.k.a LTS 2017 cycle. We will add here improvements and features that are successively shipped with 9.1, 9.2 and 9.3 releases, before finalizing LTS 2017. The <img src="./new.png"/> icon highlights the improvements and evolutions that are part of the latest fast track release, as for now the 9.1. Evolutions are grouped by components. You can also find detailed Jira Release notes:
- [9.1](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=17991) Jira Release notes

We also provide [instructions for upgrading]({{page page=""}}) (TODO Put corect URL) to the latest release.

## Nuxeo Server

### Runtime

#### Test @PartialDeploy Annotation

New Test @PartialDeploy annotation allows you to select exactly what contributions you want to deploy from a component.

`` @PartialDeploy(bundle = "studio.extensions.YOUR_PROJECT_NAME", extensions = { TargetExtensions.Automation.class })``

It makes it easier to test Nuxeo Studio features like Automation Scripting or event handlers.


### Core Repository

#### Centralized Automated Versioning Policies

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21588)A new extension point has been added to define automated versioning policies. It allows to declare behaviors such as "Version documents each time current contributor is different than the latest one on the document". It also allows to control weather we want to version before or after the modification. All platform code that was triggering specifically hardcoded behaviors have been refactored so that the central policy is applied: Drive, File Manager (Drag'n drop behaviors), etc...'). Only CMIS hasn't been impacted for now due to some difficulties with requirements in regard to document checked in or checked out.


#### More Permissions Returned in the Permissions Enricher

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21408)
All visible permissions and more core permissions are included by the Permissions enricher. Permission enricher can be used to know what permissions the authenticated user has on the document.

#### Orphan Versions are Removed

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-14187)
In some cases, versions of some documents where not deleted even when the document itself was removed. The solution chosen to solve this issue has been to add a scheduled cleanup mechanism. The cleanup mechanism does periodic commits, every 1000 documents by default. This value can be changed using the Configuration Property `org.nuxeo.orphanVersionsCleanup.commitSize`.

#### Compatible with CloudFront for Caching Binaries

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-20219)
When using S3 it is possible to redirect signed CloudFront urls instead of directly S3 ones, so as to benefit from AWS world wild content caching service.

#### Leverage blob's xpath in dispatching rules

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21891)
It is now possible to use the xpath of the binary that is being stored to determine where the binary should be stored. This typically allows to store thumbnails in a different backend than the main file. The DefaultBlobDispatcher can now match blob xpath using the syntax blob:xpath=my/xpath and a new glob operator "~" is available to allow matching things like `'blob:xpath~files/*/file`

#### Change Token for Optimistic Locking

 [<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-19435)
New API:

- DocumentModel.getChangeToken()

New behavior:

- calling doc.putContextData(CoreSession.CHANGE_TOKEN, token) then CoreSession.saveDocument(doc) will check the change token and raise ConcurrentUpdateException in case of mismatch.

#### Disable Delta Computation

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-20892)
By adding the new option `org.nuxeo.core.delta.disabled=true` in the `nuxeo.conf` file, the delta calculation used by the quota addon can be skipped, this can improve the performance of mass import.

#### API for Permission Purge

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-20844)
An operation "PermissionsPurge" has been added for triggering a permission purge for a given principal. This allows you to do an integration with your identity management system so as to remove any permission to a user that would be leaving your organization in the same time you would disable his credentials.

#### Date Fields are Exported with Millisecond Precision

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21607)
The XML Core IO format and the JSON serialization now include milliseconds information for all date properties.

#### User existence is checked on Document.AddPermission operation

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21559)
A check on existence of users an groups referenced with this operation is performed  before doing the assignement. An exception is raised otherwise.

### Core Storage

#### Compatible with the new Oracle JDBC Driver (ojdbc7)

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-19373)
The new Oracle JDBC Driver OJBC7 can be used with Oracle 12c.

#### Optimized Number of Read when Writing

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-20595)
Number of read requests require to create documents have been reduced to the strictly required using cache. As a consequence CPU is no more the limiting factor of bulk-intensive import scenari.

### Core Events

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21800)
A new PubSubService is available, providing cross-instance publish/subscribe methods:
- publish(topic, message) sends a message to the given topic
- registerSubscriber(topic, subscriber) registers a subscriber

### Directory

#### MongoDB Directory Implementation

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-17742)
Directory interface now has a MongoDB implementation.

### Audit

#### MongoDB Audit Backend

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21500)
A MongoDB backend has been implemented with the purpose of being able to install Nuxeo Platform without requiring an additional relation database.

### CMIS

#### Relax Mode

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-19858)
Some constraints of CMIS can be bypassed. To do so use the runtime property
{noformat} nuxeo.dontFollowCmisSpec=true{noformat}
This way, for instance, multiple "contains" can be used in the CMISQL query while the standard forbids it.

#### Change Token

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-20665)
Change Token [specified](http://docs.oasis-open.org/cmis/CMIS/v1.1/cs01/CMIS-v1.1-cs01.html#x1-1610003) in CMIS 1.1 as optional has been implemented.

#### Proxies are Visible by Default

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21828)
org.nuxeo.cmis.proxies=true is now the default.

### Query

#### Search with Highlighted Result

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-20507)
It is now possible to configure a page provider so as to get highlighted search result, in order to display the paragraph wrapping a given full text search term, in the search result. Search endpoint and PageProvider operation have been updated accordingly. Checkout the [polymer sample](https://github.com/nuxeo-sandbox/nuxeo-highlight-showcase) that showcases this new capability of the API to know more about it.

### Conversion

#### PDF Export of a Note

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-16831)
It is now possible to export a Note with its embedded images as a PDF.

### Elasticsearch

#### Shield Support

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21208)
Elasticsearch Shield support has been added. It is possible to configure authentication credentials in nuxeo.conf (elasticsearch.shield.enabled, elasticsearch.shield.username, elasticsearch.shield.password).

#### Use Elasticsearch tools with Embedded Deployement of ES
[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21455)
It is now possible to use Elasticsearch tools to inspect (like elasticsearch-head) and query (like mirage) on Nuxeo index when Elasticsearch is embedded.

### User Manager
#### New Operations
[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21627)
[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21962)
New automation operations are available:
- User.CreateOrUpdate
- Group.CreateOrUpdate
Both operations have a "mode" parameter that can be set to "create" or "update" to force the operation to do only creates or only updates.
Both operations can receive direct parameters or use a "properties" map to receive them.
Services.Query operation has been renamed User.Query.

### Filemanager
[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21853)
A new parameter allows to avoid overriding an existing folder.

### Redis
#### Key Value Store
[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21870)
A new Key/Value store has been added to the Core API and implemented in the Redis addon.
From the KeyValueService one can acquire a named KeyValueStore, whose API is currently:
- put(key, value)
- get(key)
- compareAndSet(key, expected, value)

### Packaging

#### Static War Generation
[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21659)
Static War Generation has been fixed and added back to continuous integration. Nuxeo Static War can be deployed as a standad web application on a tomcat server.

### Addons

#### Imaging

##### Disabling Default Picture Conversions

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21311)
Default Picture conversions can now be disabled by using the "enabled" attribute on the PictureConversions extension point contributions.

#### Binary Metadata
[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-20282)
Binary Metadata allows to extract and write back metadata on binaries (ex: EXIF metadata). The module no more tries to update the binary when the content is managed externally such as when using Live Connect.

#### Drive
[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21676)
Root registrations are not copied when a document and its children are copied.
In 9.1 and later, by default, we reset the synchronization root registrations on a copied document and its children. In 8.10 and earlier the previous behavior is kept.

####Vision

##### Amazon Rekognition

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21851)
Nuxeo Vision, the computer vision gateway can now use Amazon Rekognition in addition to Google Vision. The automation operation "VisionOp" now includes a new parameter "provider" that allows to specifically call a given provider.
#### Nuxeo CSV

##### Web UI Port

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21484)
Nuxeo CSV can now be used from Web UI. The feature is available from the import pop up, in a new "CSV" tab.

#### Nuxeo Template Rendering

##### Web UI Port

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21486)
Template Rendering plugin has been ported to Web UI. It has also been simplified. It is now designed to be used mostly in some situations where the web ui has been tailored to your use cases. A user action looks up for matching templates and let user choose one if there are several. If the template has some parameters, that action will asks the user those parameters, otherwise will generate the rendition and fire a download. It is possible to easily override the template look up logic as well as the rendition chain that is used.

#### Nuxeo Platform Importer

##### Random Importer Uses an English Dictionary

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21260)
Random English content can now be generated using the random importer.

#### JSF UI

##### Custom Mobile Banner

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21679)
A Custom Banner has been added so as to let the user open the Nuxeo Mobile Application when browsing the JSF UI from an Android or iOS mobile phone.

##### Breadcrumb: Browse Parent Folder

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21068)
Dots in the breadcrumb allow to move to parent folder.


## Farewell

### Nuxeo Forum

[<img src="https://jira.nuxeo.com/images/icons/issuetypes/improvement.png"/>](https://jira.nuxeo.com/browse/NXP-21448)
Deprecated for LTS 2016, Nuxeo Forum has been removed.
