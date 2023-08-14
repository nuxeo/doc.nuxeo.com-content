---
title: Upgrade from LTS 2021 to LTS 2023
description: Instructions to upgrade your Nuxeo Platform instance from LTS 2021 version to LTS 2023.
review:
  comment: ''
  date: '2023-07-17'
  status: ok
labels:
  - multiexcerpt
toc: true
tree_item_index: 94
---

For the general upgrade process, see the page [Upgrading the Nuxeo Platform]({{page page='upgrading-the-nuxeo-platform'}}).

{{! excerpt}}
This chapter highlights some major information about upgrade from Nuxeo Platform LTS 2021 (2021.x) to Nuxeo Platform LTS 2023 (2023.x). We strongly encourage you to also have a quick read of the upgrade notes.
{{! /excerpt}}

## Prerequisites

These upgrade notes assume that Nuxeo Server is on 2021 and up to date with the latest hotfixes.

## Installation and Configuration

### Behavior Changes

#### Make Nuxeo Code Build With Java 17

Java 17 is now required to build Nuxeo and its packages.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31182](https://jira.nuxeo.com/browse/NXP-31182)

#### Update Nuxeo Docker Image to Use Rocky Linux Instead of CentOS

The `docker-private.packages.nuxeo.com/nuxeo/nuxeo:2023` Docker image is built from `rockylinux:9.2`.

DNF, the enhanced package manager, is installed and recommended instead of YUM.

The following OS packages were upgraded:
- **ExifTool**: from 12.42-1.el7 to 12.42-1.el9, to comply with the newer version of Perl.
- **ImageMagick**: from 6.9.10.68-6.el7_9 to the latest version available in <https://rpms.remirepo.net/enterprise/remi-release-9.1.rpm>.

The following OS packages were removed:
- **ufraw**: unavailable since not maintained. Yet, ImageMagick is able to identify/convert raw image formats such as .cr2 and .dng, though ufraw-batch is not installed.
- **Python 2**: deprecated since January 1, 2020, only Python 3 is available.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31458](https://jira.nuxeo.com/browse/NXP-31458)

#### Make certificateKeyAlias Value Configurable From nuxeo.conf

A new nuxeo.conf property is available to configure the alias name for the certificate used in the HTTPS configuration: nuxeo.server.https.keyAlias

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31425](https://jira.nuxeo.com/browse/NXP-31425)

## Core Storage

### Behavior Changes

#### Upgrade H2 to Version 2.x

The H2 2.x upgrade comes with several breaking changes from H2 itself. Nothing has to be done on the Nuxeo side.

If you have H2 data persisted by a previous version of Nuxeo, you should delete the `nxserver/data/h2` folder before starting Nuxeo. YOU WILL LOSE DATA.

Otherwise, you can also follow the [migration steps](https://www.h2database.com/html/migration-to-v2.html) detailed by the maintainer of the H2 library.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31810](https://jira.nuxeo.com/browse/NXP-31810)

#### Upgrade to Hibernate 5

##### Maven dependencies

**Upgrade:**
- org.hibernate:hibernate-core from 3.3.2.GA to 5.6.15.Final
- javax.persistence:persistence-api:1.0.2 to javax.persistence:javax.persistence-api:2.2

**Remove:**
- org.hibernate:hibernate-annotations
- org.hibernate:hibernate-entitymanager
- org.hibernate:hibernate-commons-annotations
- org.hibernate:hibernate-validator
- org.javassist:javassist, only used for Hibernate < 5.6, moved to [JSF UI](https://github.com/nuxeo/nuxeo-jsf-ui-lts/commit/899dd35aaa344b34cdef45e81fb754c45170fb9a#diff-4baf235dd7b00fb14ae4473942622ceed409dbed554d3f043baaaf9ba4c2f5a2R98) as needed by JBoss Seam

##### Java Code

**Remove:**
- `HibernateConfiguration#annotedClasses`
- `HibernateConfiguration#addAnnotedClass(Class<?> annotedClass)`
- `HibernateConfiguration#removeAnnotedClass(Class<?> annotedClass)`
- `HibernateConfiguration#cfg`
- `HibernateConfiguration#setupConfiguration()`
- `HibernateConfiguration#createEntityManagerFactory(final Map<String, String> properties)`
- `HibernateConfiguration#NuxeoTransactionManagerLookup`
- `NuxeoConnectionProvider#getConnection()`
- `NuxeoConnectionProvider#closeConnection(Connection connection)`
- `NuxeoConnectionProvider#close()`
- `PersistenceComponent#registerOracle12DialectResolver()`

**Add:**
- `HibernateConfiguration#NuxeoJtaPlatform`

**Update:**
- `HibernateConfiguration#hibernateProperties` from `Properties` to `HashMap`
- `NuxeoConnectionProvider` from `implements ConnectionProvider` to `extends DatasourceConnectionProviderImpl`
- `NuxeoConnectionProvider#configure` from `(Properties props)` to `(Map props)`
- `PersistenceComponent#doPatchForTests` from `(Properties hibernateProperties)` to `(Map<String, String> hibernateProperties)`

##### Extension Point

The `classes/class` list has been removed from the hibernateConfiguration contribution to the following extension point:
```java
<extension target=org.nuxeo.ecm.core.persistence.PersistenceComponent
  point=hibernate>
  <hibernateConfiguration name=...>
    ...
  </hibernateConfiguration>
</extension>
```
##### Hibernate Release Notes

**4.0.0.Final**

<https://in.relation.to/2011/12/15/hibernate-core-40-is-final/>
 <https://github.com/hibernate/hibernate-orm/blob/4.3/changelog.txt>

**5.6.15**

<https://in.relation.to/2023/02/06/hibernate-orm-5615-final/>
 <https://in.relation.to/2015/08/20/hibernate-orm-500-final-release/> (5.0.0.Final)
 <https://github.com/hibernate/hibernate-orm/blob/5.6/changelog.txt>
 <https://hibernate.org/orm/releases/5.6/>

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31791](https://jira.nuxeo.com/browse/NXP-31791)

### Recommended Changes

#### Add MongoDB Index on Ecm:isVersion

For MongoDB backend, create the index manually:
```
db.default.createIndex(
   { ecm:isVersion: 1 }
);
```
Otherwise, the nuxeo server will attempt to create this index if not present at start-up.  In the case of an existing instance with large amounts of documents, this process may time out and/or affect performance.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31530](https://jira.nuxeo.com/browse/NXP-31530)

#### Fix Removal of 'Aceinfo' Directory Entries When a Document Is Deleted

For existing instances on MongoDB, in order to improve performance on ace info removal the following index needs to be created manually:
```
db.aceinfo.createIndex({aceinfo:docId: 1})  
```
Then enable ace info garbage collection by adding the following line to your nuxeo.conf:
```
nuxeo.aceinfo.gc.enabled=true
```
VCS users will need to make their own index.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31459](https://jira.nuxeo.com/browse/NXP-31459)

#### Create a MongoTransientStore That Can Handle Large Number Params

To use a MongoDB optimized implementation of the transientstore, (that is replacing the  KeyValueTransientStore implementation), the following property must be se on nuxeo.conf for 10.10 and LTS 2021:
```
nuxeo.transientstore.provider=mongodb
```
Note that on LTS 2023 this implementation is used by default.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31311](https://jira.nuxeo.com/browse/NXP-31311)

## Opensearch

### Behavior Changes

#### Prevent Base64-Encoded Images From Being Sent to Opensearch

When using an HTML Note document, only the fulltext (extracted text) is submitted to elastic for indexation.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31698](https://jira.nuxeo.com/browse/NXP-31698)

#### Add an Option to Disable Hostname Verification During Elastic/Opensearch SSL Handshake

You can now use `elasticsearch.restClient.ssl.certificate.verification=false` to disable hostname verification during SSL handshake for accessing a testing instance of OpenSearch or Elasticsearch running with a test certificate.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31837](https://jira.nuxeo.com/browse/NXP-31837)

## Bulk Service (Aka "Bulk Action Framework")

### Behavior Changes

#### Reduce Retries on Recompute Bulk Actions

The maximum number of retries can now be configured for recompute bulk actions using nuxeo.conf options below, also, the new default is one retry (previously 3):
```
nuxeo.bulk.action.recomputeThumbnails.maxRetries=1
nuxeo.bulk.action.recomputeViews.maxRetries=1
nuxeo.bulk.action.recomputeVideoConversions.maxRetries=1
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31550](https://jira.nuxeo.com/browse/NXP-31550)

#### Add a nuxeo.conf Property to Disable Immediate Blob Garbage Collection

To disable the immediate document's blobs garbage collection, set the following nuxeo.conf property to false:
```
nuxeo.bulk.action.blobGC.enabled=false
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31794](https://jira.nuxeo.com/browse/NXP-31794)

## Monitoring

### Behavior Changes

#### PubSub Usage Must Be Monitored

There is now a metric to count the number of messages published using the PubSub service.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29386](https://jira.nuxeo.com/browse/NXP-29386)

## Nuxeo Streams

### Behavior Changes

#### Make Kafka Replication Factor Param Optional

Nuxeo is now relying on the default Kafka broker topic replication factor when creating a new topic. This is configured with `kafka.default.replication.factor=-1`.
Note that it works only with Kafka cluster >= 2.4, if you want to use an older Kafka cluster, you have to set explicitly the replication factor in Nuxeo to something > 0.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31621](https://jira.nuxeo.com/browse/NXP-31621)

## Miscellaneous

### Behavior Changes

#### Use Jackson BOM for Jackson Dependencies

Addons declaring Jackson artifacts in their `dependencyManagment` section can remove them, as `jackson-bom` is now imported in the Maven dependency graph of the Nuxeo Platform.
This will ease Jackson security upgrades for all Nuxeo artefacts.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31455](https://jira.nuxeo.com/browse/NXP-31455)

## Deprecated

### Document.FetchByProperty Operation

The `Document.FetchByProperty` operation is deprecated. From now, use `Repository.Query` to fetch documents by a property.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31259](https://jira.nuxeo.com/browse/NXP-31259)

## Farewell

### Redis

Redis support in Nuxeo has been removed as it isn't an interesting configuration because it doesn't provide a stream implementation, and the only production configuration that provide the stream implementation is Kafka that supplants Redis.

The StreamWorkManager is now the default implementation of the platform.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31901](https://jira.nuxeo.com/browse/NXP-31901)

### Chronicle Queue

Chronicle Queue is no longer available as log implementation. It is replaced by an In-Memory one for test and dev purpose (no cluster capability, no persistence after restart). Use Kafka for production environment.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31296](https://jira.nuxeo.com/browse/NXP-31296)

### Remove Deprecated Code Since 5.x

#### Data Model

- `RouteStep` facet was replaced by the Graph API, no replacement
- `StepFolder` facet was replaced by the Graph API, no replacement
- `StepFolder` document type was replaced by the Graph API, no replacement
- `step_folder` schema was replaced by the Graph API, no replacement
- `ConditionalStepFolder` facet was replaced by the Graph API, no replacement
- `ConditionalStepFolder` document type was replaced by the Graph API, no replacement
- `conditional*step*folder` schema was replaced by the Graph API, no replacement
- `DocumentRouteStep` document type was replaced by the Graph API, no replacement
- `task_step` schema was replaced by the Graph API, no replacement
- `conditional*task*step` schema was replaced by the Graph API, no replacement
- `TaskStep` facet was replaced by the Graph API, no replacement
- `SimpleTask` document type was replaced by the Graph API, no replacement
- `FollowLifeCycleTransitionTask` document type was replaced by the Graph API, no replacement
- `PublishTask` document type was replaced by the Graph API, no replacement
- `ConditionalTask` document type was replaced by the Graph API, no replacement

#### Operations

- `Document.Routing.Resume.Step` was replaced by the Graph API, no replacement
- `Update.NextStep.ConditionalFolder` was replaced by the Graph API, no replacement
- `Document.Routing.BackToReady` was replaced by the Graph API, no replacement
- `Document.Routing.Step.Done` was replaced by the Graph API, no replacement
- `setDone` was replaced by the Graph API, no replacement
- `simpleValidate` was replaced by the Graph API, no replacement
- `simpleRefuse` was replaced by the Graph API, no replacement
- `simpleUndo` was replaced by the Graph API, no replacement
- `setNextStep` was replaced by the Graph API, no replacement
- `decideNextStepAndSimpleValidate` was replaced by the Graph API, no replacement
- `simpleChooseNextOption1AndDone` was replaced by the Graph API, no replacement
- `simpleChooseNextOption2AndDone` was replaced by the Graph API, no replacement

#### Contributions

##### Extension point

- `handlingLabels` was replaced by `handleLabels` control on the `widget` object descriptor
- `org.nuxeo.ecm.platform.routing.service#chainsToType` was replaced by the Graph API, no replacement

#### Constants

- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingConstants.ROUTE*STEP*FACET` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingConstants.STEP*FOLDER*FACET` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingConstants.EXECUTION*TYPE_PROPERTY*NAME` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingConstants.STEP*DOCUMENT*TYPE` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingConstants.CONDITIONAL*STEP*FACET` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingConstants.CONDITIONAL*STEP_DOCUMENT*TYPE` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingConstants.STEP*TO_BE_EXECUTED_NEXT_PROPERTY*NAME` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingConstants.STEP*DOCUMENT*TYPE` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.core.impl.DocumentRoutingServiceImpl.CHAINS*TO_TYPE*XP` was replaced by the Graph API, no replacement

#### Fields

- `org.nuxeo.ecm.platform.routing.core.impl.DocumentRoutingServiceImpl.typeToChain` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.core.impl.DocumentRoutingServiceImpl.undoChainIdFromRunning` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.core.impl.DocumentRoutingServiceImpl.undoChainIdFromDone` was replaced by the Graph API, no replacement

#### Methods

- `org.nuxeo.ecm.automation.AutomationService#putOperationChain(OperationChain)` was replaced by `org.nuxeo.ecm.automation.AutomationService#putOperation(OperationType)`
- `org.nuxeo.ecm.automation.AutomationService#putOperationChain(OperationChain, boolean)` was replaced by `org.nuxeo.ecm.automation.AutomationService#putOperation(OperationType, boolean)`
- `org.nuxeo.ecm.automation.AutomationService#removeOperationChain(String)` was replaced by `org.nuxeo.ecm.automation.AutomationService#removeOperation(OperationType)`
- `org.nuxeo.ecm.automation.AutomationService#getOperationChain(String)` was replaced by `org.nuxeo.ecm.automation.AutomationService#getOperation(String)`
- `org.nuxeo.ecm.automation.AutomationService#getOperationChains()` was replaced by `org.nuxeo.ecm.automation.AutomationService#getOperations()`
- `org.nuxeo.connect.update.standalone.LocalPackageImpl#<init>(File, int, PackageUpdateService)` was replaced by `org.nuxeo.connect.update.standalone.LocalPackageImpl#<init>(File, PackageState, PackageUpdateService)`
- `org.nuxeo.connect.update.standalone.LocalPackageImpl#<init>(ClassLoader, File, int, PackageUpdateService)` was replaced by `org.nuxeo.connect.update.standalone.LocalPackageImpl#<init>(ClassLoader, File, PackageState, PackageUpdateService)`
- `org.nuxeo.connect.update.standalone.PackagePersistence#updateState(String, int)` was replaced by `org.nuxeo.connect.update.standalone.PackagePersistence#updateState(String, PackageState)`
- `org.nuxeo.connect.update.task.standalone.commands.Copy#getContentToCopy(Map)` was replaced  by `org.nuxeo.connect.update.task.standalone.commands.Copy#getContentToCopy(File, Map)`
- `org.nuxeo.ecm.core.api.security.ACP#listUsernamesForAnyPermission(Set)` was replaced by `org.nuxeo.ecm.platform.usermanager.UserManager#getUsersForPermission(String, ACP)`
- `org.nuxeo.ecm.core.api.security.UserEntry#addPrivilege(String, boolean, boolean)` was superseded by `org.nuxeo.ecm.core.api.security.UserEntry#addPrivilege(String, boolean)` as readOnly flag is not used
- `org.nuxeo.ecm.platform.forms.layout.api.WidgetDefinition#isHandlingLabels()` was replaced by `org.nuxeo.ecm.platform.forms.layout.api.WidgetDefinition#getControls()` with `handleLabels` control
- `org.nuxeo.ecm.platform.forms.layout.api.WidgetDefinition#setHandlingLabels(boolean)` was replaced by `org.nuxeo.ecm.platform.forms.layout.api.WidgetDefinition#setControls(Map)` with `handleLabels` control
- `org.nuxeo.ecm.platform.routing.api.DocumentRouteStep#undo(CoreSession)` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingService#createNewInstance(DocumentRoute, String, CoreSession, boolean)` was replaced by `org.nuxeo.ecm.platform.routing.api.DocumentRoutingService#createNewInstance(DocumentRoute, List, CoreSession, boolean)`
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingService#createNewInstance(DocumentRoute, List, CoreSession)` was replaced by `org.nuxeo.ecm.platform.routing.api.DocumentRoutingService#createNewInstance(DocumentRoute, List, CoreSession, boolean)`
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingService#createNewInstance(DocumentRoute, String, CoreSession)` was replaced by `org.nuxeo.ecm.platform.routing.api.DocumentRoutingService#createNewInstance(DocumentRoute, List, CoreSession, boolean)`
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingService#getOperationChainId(String)` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingService#getUndoFromRunningOperationChainId(String)` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingService#getUndoFromDoneOperationChainId(String)` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingService#canUserValidateRoute(NuxeoPrincipal)` was replaced by `org.nuxeo.ecm.platform.routing.api.DocumentRoutingService#canUserValidateRoute(DocumentModel, CoreSession)`
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingService#addRouteElementToRoute(DocumentRef, int, DocumentRouteElement, CoreSession)` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingService#addRouteElementToRoute(DocumentRef, String, DocumentRouteElement, CoreSession)` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingService#removeRouteElement(DocumentRouteElement, CoreSession)` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingService#getOrderedRouteElement(String, CoreSession)` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingService#getRouteElements(DocumentRoute, CoreSession)` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingService#finishTask(CoreSession, DocumentRoute, Task, boolean)` was replaced by `org.nuxeo.ecm.platform.routing.api.DocumentRoutingService#completeTask(String, String, Map, String, CoreSession)`
- `org.nuxeo.ecm.platform.routing.core.impl.ElementRunner#undo(CoreSession, DocumentRouteElement)` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.web.DocumentRoutingActionsBean#computeRouteElements()` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.web.DocumentRoutingActionsBean#computeRelatedRouteElements()` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.web.DocumentRoutingActionsBean#getElements(DocumentRoute)` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.web.DocumentRoutingActionsBean#getTypeDescription(DocumentRouteTableElement)` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.web.DocumentRoutingActionsBean#isStep(DocumentModel)` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.web.DocumentRoutingActionsBean#removeStep()` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.web.DocumentRoutingActionsBean#createRouteElement(String)` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.web.DocumentRoutingActionsBean#moveRouteElement(String)` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.web.DocumentRoutingActionsBean#saveRouteElement()` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.web.DocumentRoutingActionsBean#getOrderedChildren(String, String)` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.web.DocumentRoutingActionsBean#getChildWithPosition(DocumentModel, String)` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.web.DocumentRoutingActionsBean#getPositionForChild(DocumentModel, DocumentModel)` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.web.RouteSecurityChecker#canValidateRoute()` was replaced by `org.nuxeo.ecm.platform.routing.web.RouteSecurityChecker#canValidateRoute(DocumentModel)`

#### Classes

- `org.nuxeo.ecm.platform.actions.AbstractActionFilter` was not used, no replacement
- `org.nuxeo.ecm.platform.video.convert.MP4Converter` was replaced by `org.nuxeo.ecm.platform.video.convert.VideoConversionConverter`
- `org.nuxeo.ecm.platform.video.convert.OggConverter` was replaced by `org.nuxeo.ecm.platform.video.convert.VideoConversionConverter`
- `org.nuxeo.ecm.platform.video.convert.WebMConverter` was replaced by `org.nuxeo.ecm.platform.video.convert.VideoConversionConverter`
- `org.nuxeo.ecm.platform.routing.api.ActionableObject` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.DocumentRouteTableElement` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.RouteFolderElement` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.RouteTable` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.RoutingTaskService` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.helper.ActionableValidator` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.helper.ConditionalFolderUpdateRunner` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.helper.StepResumeRunner` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.operation.ResumeStepOperation` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.operation.SetNextStepOnConditionalFolderOperation` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.operation.StepBackToReadyOperation` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.operation.StepDoneOperation` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.core.impl.ChainToTypeMappingDescriptor` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.core.impl.ConditionalRunner` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.core.impl.ParallelRunner` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.core.impl.RoutingTaskServiceImpl` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.core.impl.SerialRunner` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.core.impl.StepElementRunner` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.api.DocumentRoutingConstants$ExecutionTypeValues` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.dm.adapter.RoutingTask` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.dm.adapter.RoutingTaskAdapterFactory` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.dm.adapter.RoutingTaskImpl` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.dm.adapter.TaskStep` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.dm.adapter.TaskStepAdapterFactory` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.dm.adapter.TaskStepImpl` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.dm.api.RoutingTaskConstants` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.dm.operation.AbstractTaskStepOperation` was replaced by the Graph API, no replacement
- `org.nuxeo.ecm.platform.routing.dm.operation.CreateRoutingTask` was replaced by the Graph API, no replacement, the operation id was `Workflow.CreateRoutingTask`
- `org.nuxeo.ecm.platform.routing.dm.operation.EvaluateCondition` was replaced by the Graph API, no replacement, the operation id was `Document.Routing.EvaluateCondition`
- `org.nuxeo.ecm.platform.routing.dm.operation.RemoveRoutingTask` was replaced by the Graph API, no replacement, the operation id was `Workflow.RemoveRoutingTask`
- `org.nuxeo.ecm.platform.routing.dm.operation.SetCurrentRunningStepFromTask` was replaced by the Graph API, no replacement, the operation id was `Document.Routing.SetRunningStepFromTask`

#### Maven Modules

`org.nuxeo.ecm.routing:nuxeo-routing-dm` was replaced by the Graph API, no replacement

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31639](https://jira.nuxeo.com/browse/NXP-31639)

### Remove Deprecated Code Since 6.0

#### Operations

- `Context.RunDocumentOperationInNewTx` was replaced by `Context.RunDocumentOperation`
- `Context.RunOperationOnListInNewTx` was replaced by `Context.RunOperationOnList`

#### Contributions

##### Extension point

`whereClause@docType` attribute in objects of `org.nuxeo.ecm.platform.query.api.PageProviderService#providers` was replaced by `searchDocumentType` element

#### Constants

- `org.nuxeo.ecm.platform.task.TaskQueryConstant.TASK_VARIABLES_WHERE_CLAUSE` was replaced by Page Provider
- `org.nuxeo.ecm.platform.task.TaskQueryConstant.TASK_ACTORS_WHERE_CLAUSE` was replaced by Page Provider
- `org.nuxeo.ecm.platform.task.TaskQueryConstant.GET_TASKS_QUERY` was replaced by Page Provider
- `org.nuxeo.ecm.platform.task.TaskQueryConstant.GET_TASKS_FOR_ACTORS_QUERY` was replaced by Page Provider
- `org.nuxeo.ecm.platform.task.TaskQueryConstant.GET_TASKS_FOR_TARGET_DOCUMENT_QUERY` was replaced by Page Provider
- `org.nuxeo.ecm.platform.task.TaskQueryConstant.GET_TASKS_FOR_TARGET_DOCUMENTS_QUERY` was replaced by Page Provider
- `org.nuxeo.ecm.platform.task.TaskQueryConstant.GET_TASKS_FOR_TARGET_DOCUMENT_AND_ACTORS_QUERY` was replaced by Page Provider
- `org.nuxeo.ecm.platform.task.TaskQueryConstant.GET_TASKS_FOR_TARGET_DOCUMENTS_AND_ACTORS_QUERY` was replaced by Page Provider
- `org.nuxeo.ecm.platform.task.TaskQueryConstant.GET_TASKS_FOR_PROCESS_ID_QUERY` was replaced by Page Provider
- `org.nuxeo.ecm.platform.task.TaskQueryConstant.GET_TASKS_FOR_PROCESS_ID_AND_ACTORS_QUERY` was replaced by Page Provider
- `org.nuxeo.ecm.platform.task.TaskQueryConstant.GET_TASKS_FOR_PROCESS_ID_AND_NODE_ID_QUERY` was replaced by Page Provider
- `org.nuxeo.ecm.platform.task.TaskQueryConstant.GET_TASKS_FOR_TARGET_DOCUMENT_AND_ACTORS_QUERY_OR_DELEGATED_ACTORS_QUERY` was replaced by Page Provider

#### Fields

- `org.nuxeo.ecm.automation.core.operations.services.AuditPageProviderOperation.page` was replaced by `org.nuxeo.ecm.automation.core.operations.services.AuditPageProviderOperation.currentPageIndex`, the operation parameter was `page` and it is now `currentPageIndex`
- `org.nuxeo.ecm.automation.core.operations.services.AuditPageProviderOperation.sortInfoAsStringList` was replaced by `org.nuxeo.ecm.automation.core.operations.services.AuditPageProviderOperation.sortBy` & `org.nuxeo.ecm.automation.core.operations.services.AuditPageProviderOperation.sortOrder`, the operation parameter was `sortInfo` and it is now `sortBy` & `sortOrder`
- `org.nuxeo.ecm.automation.core.operations.services.AuditPageProviderOperation.maxResults` was not used, no replacement
- `org.nuxeo.ecm.platform.query.core.WhereClauseDescriptor.docType` was replaced by `org.nuxeo.ecm.platform.query.core.BasePageProviderDescriptor.searchDocumentType`

#### Methods

- `org.nuxeo.elasticsearch.api.ElasticSearchService#query(CoreSession, String, int, int, SortInfo...)` was replaced by `org.nuxeo.elasticsearch.api.ElasticSearchService#query(NxQueryBuilder)`
- `org.nuxeo.elasticsearch.api.ElasticSearchService#query(CoreSession, QueryBuilder, int, int, SortInfo...)` was replaced by `org.nuxeo.elasticsearch.api.ElasticSearchService#query(NxQueryBuilder)`
- `org.nuxeo.ecm.platform.importer.random.HunspellDictionaryHolder#loadDic(String)` was not used, no replacement
- `org.nuxeo.ecm.directory.Session#getEntries()` was replaced by query methods
- `org.nuxeo.ecm.platform.query.core.WhereClauseDescriptor#getDocType()` was replaced by `org.nuxeo.ecm.platform.query.core.BasePageProviderDescriptor#getSearchDocumentType()`
- `org.nuxeo.ecm.platform.task.TaskQueryConstant#getVariableWhereClause(String, String)` was replaced by Page Provider
- `org.nuxeo.ecm.platform.task.TaskQueryConstant#getActorsWhereClause(List)` was replaced by Page Provider
- `org.nuxeo.ecm.platform.task.TaskQueryConstant#formatStringList(List)` was replaced by Page Provider
- `org.nuxeo.ecm.platform.task.core.service.DocumentTaskProvider#wrapDocModelInTask(DocumentModelList)` was replaced by `org.nuxeo.ecm.platform.task.core.service.DocumentTaskProvider#wrapDocModelInTask(List)`
- `org.nuxeo.ecm.platform.task.core.service.DocumentTaskProvider#wrapDocModelInTask(DocumentModelList, boolean)` was replaced by `org.nuxeo.ecm.platform.task.core.service.DocumentTaskProvider#wrapDocModelInTask(List)`

#### Classes

- `org.nuxeo.ecm.automation.core.operations.execution.RunInNewTransaction` was replaced by `org.nuxeo.ecm.automation.core.operations.execution.RunDocumentChain`, the operation id was `Context.RunDocumentOperationInNewTx`, the new one is `Context.RunDocumentOperation`
- `org.nuxeo.ecm.automation.core.operations.execution.RunOperationOnListInNewTransaction` was replaced by `org.nuxeo.ecm.automation.core.operations.execution.RunOperationOnList`
- `org.nuxeo.ecm.platform.suggestbox.service.SearchDocumentsSuggestion` was not used, no replacement
- `org.nuxeo.ecm.platform.suggestbox.service.suggesters.DocumentSearchByDateSuggester` was not used, no replacement
- `org.nuxeo.ecm.platform.suggestbox.service.suggesters.DocumentSearchByPropertySuggester` was not used, no replacement

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31640](https://jira.nuxeo.com/browse/NXP-31640)

### Remove Deprecated Code Since 7.10

#### Contributions

##### Extension point

- `org.nuxeo.theme.styling.service.ThemeStylingService#pages` does not take `org.nuxeo.theme.styling.service.descriptors.ThemePage` objects anymore. It now only takes `org.nuxeo.theme.styling.service.descriptors.PageDescriptor`
- `org.nuxeo.theme.styling.service.ThemeStylingService#styles` was removed as it is replaced by `org.nuxeo.ecm.platform.WebResources#resources`
- `org.nuxeo.theme.styling.service.ThemeStylingService#resources` was removed as it is replaced by `org.nuxeo.ecm.platform.WebResources#resources`

##### Facets

`org.nuxeo.ecm.platform.picture.coreTypes#MultiviewPicture` was removed, no replacement

#### Constants

- `org.nuxeo.ecm.core.api.event.CoreEventConstants.DOCUMENT_MODEL_ID` was used for compatibility, replaced by `DESTINATION_NAME`
- `org.nuxeo.ecm.core.api.pathsegment.PathSegmentServiceDefault.NUXEO_MAX_SEGMENT_SIZE_PROPERTY` was used for compatibility, replaced by `PathSegmentService#NUXEO_MAX_SEGMENT_SIZE_PROPERTY`
- `org.nuxeo.ecm.core.opencmis.impl.server.NuxeoRepository.NUXEO_VERSION_PROP` was used for compatibility, replaced by `org.nuxeo.common.Environment#DISTRIBUTION_VERSION`
- `PicturePreviewAdapterFactory.ORIGINAL_VIEW_NAME` was removed, the Original view does not exist anymore. See NXP-16070
`org.nuxeo.ecm.core.io.download.DownloadService.NXBIGFILE` was used for compatibility, replaced by `#NXFILE`

#### Fields

- `org.nuxeo.ecm.user.invite.UserRegistrationInfo.password` The password should not be stored
- `org.nuxeo.theme.styling.service.descriptors.PageDescriptor.appendStyles` was removed, use resources instead
- `org.nuxeo.theme.styling.service.descriptors.PageDescriptor.styles` was removed, use resources instead

#### Methods

- `org.nuxeo.ecm.core.api.impl.blob.URLBlob.#URLBlob(URL, String, String, String)` was removed. Use a separate `#setFilename` call instead
- `org.nuxeo.ecm.core.api.security.ACP#addACL(String, ACL)` was replaced by `#addACL(ACL)` to have correctly ordered acls. To force by-passing the order, use `#addACL(int, ACL)`
- `org.nuxeo.ecm.core.api.security.impl.ACPImpl#addACL(String, ACL)` was replaced by `#addACL(ACL)` to have correctly ordered acls. To force by-passing the order, use `#addACL(int, ACL)`
- `org.nuxeo.ecm.platform.convert.plugins.CommandLineBasedConverter#getCommandLineService()` was removed
- `org.nuxeo.connect.client.vindoz.InstallAfterRestart#isVindozBox()` was removed. Use `org.apache.commons.lang3.SystemUtils#IS_OS_WINDOWS` instead
- `org.nuxeo.ecm.admin.NuxeoCtlManager#isWindows()` was removed. Use `org.apache.commons.lang3.SystemUtils#IS_OS_WINDOWS` instead
- `org.nuxeo.ecm.automation.server.jaxrs.batch.BatchManager#initBatch(String, String)` was replaced by `#initBatch()`
- `org.nuxeo.ecm.automation.server.jaxrs.batch.BatchManagerComponent#initBatch(String, String)` was replaced by `#initBatch()`
- `org.nuxeo.ecm.core.opencmis.impl.server.NuxeoCmisService#getIconRenditionStream(String)` was removed. The thumbnail is now a default rendition, see NXP-16662
- `org.nuxeo.ecm.core.opencmis.impl.server.NuxeoObjectData#getIconRendition(DocumentModel, CallContext)` was removed. The thumbnail is now a default rendition, see NXP-16662
- `org.nuxeo.ecm.core.opencmis.impl.server.NuxeoObjectData#getIconStream(String, CallContext)` was removed. The thumbnail is now a default rendition, see NXP-16662
- `org.nuxeo.ecm.user.invite.UserRegistrationConfiguration#getUserInfoPasswordField()` was removed
- `org.nuxeo.ecm.user.invite.UserRegistrationInfo#getPassword()` was removed
- `org.nuxeo.ecm.user.invite.UserRegistrationInfo#setPassword(String)` was removed
- `org.nuxeo.ecm.directory.Directory#getReference(String)` was replaced by `#getReferences(String)`
- `org.nuxeo.ecm.directory.AbstractDirectory#getReference(String)` was replaced by `#getReferences(String)`
- `org.nuxeo.ecm.platform.filemanager.utils.FileManagerUtils#getBytesFromFile(File)` was removed. Use `org.apache.commons.io.IOUtils#toByteArray` instead
- `org.nuxeo.ecm.platform.picture.ImagingComponent#getImageMetadata(Blob)` was removed. `Use org.nuxeo.binary.metadata.api.BinaryMetadataService#readMetadata(Blob, boolean)` instead
- `org.nuxeo.ecm.platform.picture.api.ImagingService#getImageMetadata(Blob)` was removed. `Use org.nuxeo.binary.metadata.api.BinaryMetadataService#readMetadata(Blob, boolean)` instead
- `org.nuxeo.ecm.platform.picture.api.PictureConversion#getTitle()` was replaced by `#getId()`
- `org.nuxeo.ecm.platform.picture.api.PictureView#getContent()` was replaced by `#getBlob`
- `org.nuxeo.ecm.platform.picture.api.PictureViewImpl#getContent()` was replaced by `#getBlob`
- `org.nuxeo.ecm.platform.picture.api.adapters#AbstractPictureAdapter.setMetadata()` was removed
- `org.nuxeo.ecm.platform.rendition.service.RenditionService#getDeclaredRenditionDefinitionsForProviderType(String)` was removed
- `org.nuxeo.ecm.platform.rendition.service.RenditionCreator#getDetachedDendition()` was replaced by `#getDetachedRendition`
- `org.nuxeo.ecm.platform.rendition.service.RenditionServiceImpl#getDeclaredRenditionDefinitionsForProviderType(String)` was removed
- `org.nuxeo.ecm.platform.task.TaskService#createTask(CoreSession, NuxeoPrincipal, List<DocumentModel>, String, String, String, String, List<String>, boolean, String, String, Date, Map<String, String>, String, Map<String, Serializable>)` was replaced by `#createTaskForProcess(CoreSession, NuxeoPrincipal, List, String, String, String, String, String, List, boolean, String, String, Date, Map, String, Map)`
- `org.nuxeo.ecm.platform.task.core.service.TaskServiceImpl#createTask(CoreSession, NuxeoPrincipal, List<DocumentModel>, String, String, String, String, List<String>, boolean, String, String, Date, Map<String, String>, String, Map<String, Serializable>)` was replaced by `#createTaskForProcess(CoreSession, NuxeoPrincipal, List, String, String, String, String, String, List, boolean, String, String, Date, Map, String, Map)`
- `org.nuxeo.theme.styling.service.ThemeStylingServiceImpl#getResourceFromStyle(String)` was removed
- `org.nuxeo.theme.styling.service.descriptors.PageDescriptor#getAppendStyles()` was removed. Use resources instead
- `org.nuxeo.theme.styling.service.descriptors.PageDescriptor#getStyles()` was removed. Use resources instead
- `org.nuxeo.theme.styling.service.descriptors.PageDescriptor#setStyles(List<String>)` was removed. Use resources instead
- `org.nuxeo.theme.styling.service.descriptors.PageDescriptor#setAppendStyles(boolean)` was removed. Use resources instead
- `org.nuxeo.theme.styling.service.registries.PageRegistry#getThemePage(String)` was replaced by `#getPage(String)`
- `org.nuxeo.theme.styling.service.registries.PageRegistry#getThemePages()` was replaced `#getPages(String)`
- `org.nuxeo.theme.styling.service.registries.PageRegistry#getConfigurationApplyingToAllThemes()` Use `#getConfigurationApplyingToAll()` instead
- `org.nuxeo.ecm.restapi.server.jaxrs.blob.BlobObject#buildResponseFromBlob(Request, HttpServletRequest, Blob, String)` was removed
- `org.nuxeo.connect.update.task.guards.PlatformHelper#isWindows()` was removed. Use `org.apache.commons.lang3.SystemUtils#IS_OS_WINDOWS` instead
- `org.nuxeo.connect.update.task.guards.PlatformHelper#isNotWindows()` was removed. Use `org.apache.commons.lang3.SystemUtils#IS_OS_WINDOWS` instead

#### Classes

- `org.nuxeo.ecm.core.api.DocumentException` was removed
- `org.nuxeo.ecm.automation.core.operations.document.DocumentPermissionHelper` was removed. Methods to managing permissions are now on ACP / ACL
- `org.nuxeo.ecm.automation.jaxrs.io.audit.LogEntryListWriter` was removed. This marshaller was migrated to `org.nuxeo.ecm.platform.audit.io.LogEntryListJsonWriter`. To use it in JAX-RS, register the `org.nuxeo.ecm.webengine.jaxrs.coreiodelegate.CoreIODelegate` to forward the JAX-RS marshalling to nuxeo-core-io
- `org.nuxeo.ecm.automation.jaxrs.io.audit.LogEntryWriter` was removed. This marshaller was migrated to `org.nuxeo.ecm.platform.audit.io.LogEntryJsonWriter`. To use it in JAX-RS, register the `org.nuxeo.ecm.webengine.jaxrs.coreiodelegate.CoreIODelegate` to forward the JAX-RS marshalling to nuxeo-core-io
- `org.nuxeo.ecm.automation.jaxrs.io.documents.JSONDocumentModelReader` was removed. The Nuxeo JSON marshalling was migrated to nuxeo-core-io. This class is replaced by `DocumentModelJsonReader` which is registered by default and available to marshal `DocumentModel` from the Nuxeo Rest API thanks to the JAX-RS marshaller `org.nuxeo.ecm.webengine.jaxrs.coreiodelegate.CoreIODelegate`.
- `org.nuxeo.ecm.platform.picture.api.BlobHelper` was removed. Use `org.nuxeo.ecm.core.api.Blob#getFile` directly
- `org.nuxeo.ecm.platform.picture.api.PictureTemplate` was replaced by `org.nuxeo.ecm.platform.picture.api.PictureConversion`
- `org.nuxeo.ecm.platform.picture.magick.MagickExecutor` was removed
- `org.nuxeo.ecm.platform.web.common.UserAgentMatcher` was replaced by `org.nuxeo.common.utils.UserAgentMatcher`
- `og.nuxeo.ecm.platform.web.common.resources.AggregatedJSProvider` was removed. Use webresources extension points instead
- `org.nuxeo.theme.styling.service.descriptors.SimpleStyle` was removed. Use the `org.nuxeo.ecm.web.resources.core.ResourceDescriptor` with flavor endpoint instead
- `org.nuxeo.theme.styling.service.descriptors.ThemePage` was removed
- `org.nuxeo.ecm.webengine.jaxrs.coreiodelegate.DocumentModelJsonReaderLegacy` was removed as it used `org.nuxeo.ecm.automation.jaxrs.io.documents.JSONDocumentModelReader`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31534](https://jira.nuxeo.com/browse/NXP-31534)

### Remove Deprecated Code Since 8.10

#### Constants

- `org.nuxeo.ecm.platform.importer.source.FileWithIndividualMetadasSourceNode.PROPERTY_FILE_SUFIX` was replaced by `PROPERTY_FILE_SUFFIX`
- `org.nuxeo.ecm.platform.ui.web.auth.NuxeoAuthenticationFilter.DEFAULT_START_PAGE` was replaced by `LoginScreenHelper#getStartupPagePath()`

#### Methods

- `org.nuxeo.ecm.core.api.CoreSession#isStateSharedByAllThreadSessions()` was removed as it always returns true by design
- `org.nuxeo.ecm.core.api.CoreSession#copy(DocumentRef, DocumentRef, String, boolean)` was replaced by `#copy(DocumentRef, DocumentRef, String, CopyOption...)`
- `org.nuxeo.ecm.core.api.CoreSession#copy(List<DocumentRef>, DocumentRef, boolean)` was replaced by `#copy(List, DocumentRef, CopyOption...)`
- `org.nuxeo.ecm.core.api.CoreSession#copyProxyAsDocument(DocumentRef, DocumentRef, String, boolean)` was replaced by `#copyProxyAsDocument(DocumentRef, DocumentRef, String, CopyOption...)`
- `org.nuxeo.ecm.core.api.CoreSession#copyProxyAsDocument(List<DocumentRef>, DocumentRef, boolean)` was replaced by `#copyProxyAsDocument(List, DocumentRef, CopyOption...)`
- `org.nuxeo.ecm.core.api.DocumentModel#setPropertyObject(Property)` was added to allow removal of `org.nuxeo.ecm.core.api.DocumentModel#getParts()`
- `org.nuxeo.ecm.core.api.DocumentModel#getParts()` was removed
- `org.nuxeo.ecm.core.api.DocumentModel.getParts()` is internal. Use direct `org.nuxeo.ecm.core.api.model.Property` getters instead
- `org.nuxeo.ecm.core.api.IterableQueryResult#isLife()` was replaced by `#mustBeClosed()`
- `org.nuxeo.ecm.core.api.impl.DocumentModelImpl#setPropertyObject(Property)` was added to allow removal of `org.nuxeo.ecm.core.api.DocumentModel#getParts()`
- `org.nuxeo.ecm.core.api.impl.SimpleDocumentModel#setPropertyObject(Property)` was added to allow removal of `org.nuxeo.ecm.core.api.DocumentModel#getParts()`
- `org.nuxeo.ecm.core.api.impl.SimpleDocumentModel#getParts()` was removed
- `org.nuxeo.ecm.core.api.model.DeltaLong#DeltaLong(long, long)` was replaced by `#DeltaLong(Long, long)`
- `org.nuxeo.ecm.core.api.model.DeltaLong#deltaOrLong(Number, long)` was replaced by `#valueOf(Number, long)`
- `org.nuxeo.ecm.core.event.impl.ShallowDocumentModel#getPart(String)` was removed
- `org.nuxeo.ecm.core.event.impl.ShallowDocumentModel#getParts()` was removed
- `org.nuxeo.ecm.core.event.impl.ShallowDocumentModel#setPropertyObject(Property)` was added to allow removal of `org.nuxeo.ecm.core.api.DocumentModel#getParts()` but is unsupported
- `org.nuxeo.ecm.core.work.AbstractWork#initSession()` was replaced by `#openSystemSession()`
- `org.nuxeo.ecm.core.work.AbstractWork#initSession(String)` was replaced by `#openSystemSession()` to open a session on the configured repository name, otherwise use `CoreInstance#getCoreSessionSystem(String)`
- `org.nuxeo.ecm.core.storage.dbs.DBSSession.DBSQueryResult#isLife()` was replaced by `#mustBeClosed()`
- `org.nuxeo.ecm.core.storage.sql.jdbc.ResultSetQueryResult#isLife()` was replaced by `#mustBeClosed()`
- `org.nuxeo.ecm.core.api.AbstractSession#copy(DocumentRef, DocumentRef, String, boolean)` was replaced by `#copy(DocumentRef, DocumentRef, String, CopyOption...)`
- `org.nuxeo.ecm.core.api.AbstractSession#copy(List<DocumentRef>, DocumentRef, boolean)` was replaced by `#copy(List, DocumentRef, CopyOption...)`
- `org.nuxeo.ecm.core.api.AbstractSession#copyProxyAsDocument(DocumentRef, DocumentRef, String, boolean)` was replaced by `#copyProxyAsDocument(DocumentRef, DocumentRef, String, CopyOption...)`
- `org.nuxeo.ecm.core.api.AbstractSession#copyProxyAsDocument(List<DocumentRef>, DocumentRef, boolean)` was replaced by `#copyProxyAsDocument(List, DocumentRef, CopyOption...)`
- `org.nuxeo.ecm.core.api.local.LocalSession#isStateSharedByAllThreadSessions()` was removed as it always returns true by design
- `org.nuxeo.ecm.core.opencmis.impl.server.CMISQLtoNXQL.NXQLtoCMISIterableQueryResult#isLife()` was replaced by `#mustBeClosed()`
- `org.nuxeo.ecm.csv.core.CSVImporterDocumentFactory#exists(CoreSession, String, String, String, Map<String, Serializable>)` was replaced by `#exists(CoreSession, String, String, Map<String, Serializable>)`
- `org.nuxeo.ecm.csv.core.DefaultCSVImporterDocumentFactory#exists(CoreSession, String, String, String, Map<String, Serializable>)` was replaced by `#exists(CoreSession, String, String, Map<String, Serializable>)`
- `org.nuxeo.elasticsearch.api.EsIterableQueryResultImpl#isLife()` was replaced by `#mustBeClosed()`
- `org.nuxeo.elasticsearch.core.EsResultSetImpl#isLife()` was replaced by `#mustBeClosed()`
- `org.nuxeo.ecm.permissions.PermissionListener#handleReplaceACE(DocumentEventContext, String, ACE, ACE)` was removed
- `org.nuxeo.ecm.platform.audit.api.AuditReader#getLogEntriesFor(String)` was replaced by `#getLogEntriesFor(String, String)`
- `org.nuxeo.ecm.platform.audit.service.BaseLogEntryProvider#getLogEntriesFor(String)` was replaced by `#getLogEntriesFor(String, String)`
- `org.nuxeo.ecm.platform.audit.service.BaseLogEntryProvider#getLogEntriesFor(String, Map<String, FilterMapEntry>, boolean)` was removed. If you use the `org.nuxeo.ecm.platform.audit.service.LogEntryProvider` implementation, you can use `org.nuxeo.ecm.platform.audit.service.LogEntryProvider#queryLogs(QueryBuilder)`
- `org.nuxeo.ecm.platform.audit.service.DefaultAuditBackend#getLogEntriesFor(String)` was replaced by `#getLogEntriesFor(String, String)`
- `org.nuxeo.ecm.platform.audit.service.LogEntryProvider#getLogEntriesFor(String)` was replaced by `#queryLogs(QueryBuilder)`
- `org.nuxeo.ecm.platform.audit.service.LogEntryProvider#getLogEntriesFor(String, Map<String, FilterMapEntry>, boolean)` was replaced by `#queryLogs(QueryBuilder)`
- `org.nuxeo.ecm.platform.importer.source.FileWithIndividualMetadasSourceNode#isPropertyFile(File)` was removed
- `org.nuxeo.ecm.platform.rendition.service.RenditionServiceImpl#storeRendition(DocumentModel, Rendition, String)` was removed

#### Classes

- `org.nuxeo.ecm.core.api.DataModelMap` was removed. Use `Map<String, DataModel>`
- `org.nuxeo.ecm.core.api.impl.DataModelMapImpl` was removed. Use `Map<String, DataModel>`
- `org.nuxeo.ecm.platform.routing.core.io.JsonEncodeDecodeUtils` was replaced by `org.nuxeo.ecm.core.io.registry.Writer#write(Object, Class, java.lang.reflect.Type, javax.ws.rs.core.MediaType, java.io.OutputStream)` See how `org.nuxeo.ecm.platform.routing.core.io.DocumentRouteWriter#writeVariables(org.nuxeo.ecm.platform.routing.api.DocumentRoute, JsonGenerator, org.nuxeo.ecm.core.io.registry.MarshallerRegistry, org.nuxeo.ecm.core.io.registry.context.RenderingContext, SchemaManager)` uses it
- `org.nuxeo.ecm.platform.routing.core.io.TaskCompletionRequestLegacyJsonReader` was replaced by `TaskCompletionRequestJsonReader`
- `org.nuxeo.ecm.platform.routing.core.io.WorkflowRequestLegacyJsonReader` was replaced by `WorkflowRequestJsonReader`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31535](https://jira.nuxeo.com/browse/NXP-31535)

### Remove Deprecated Code Since 9.10

#### Configuration Properties

##### Nuxeo.conf

- `nuxeo.hotreload.compat.mechanism` was removed, no replacement
- `org.nuxeo.runtime.reload_strategy` doesn't allow `unstash` anymore

##### Configuration Service

`nuxeo.drive.force.versioning`, its default value was `true`

#### Contributions

##### Extension point

- `org.nuxeo.ecm.core.versioning.VersioningService#versioningRules` has been removed as it is replaced by Automatic Versioning
- `org.nuxeo.ecm.platform.filemanager.service.FileManagerService#versioning` has been removed as it is replaced by Automatic Versioning

##### Component

`org.nuxeo.ecm.core.versioning.VersioningService` component has been replaced by `org.nuxeo.ecm.core.api.versioning.VersioningService`

#### Constants

- `org.nuxeo.drive.adapter.impl.FileSystemItemHelper.NUXEO_DRIVE_FORCE_VERSIONING_PROPERTY` was referencing `nuxeo.drive.force.versioning` configuration service property
- `org.nuxeo.ecm.core.versioning.StandardVersioningService.DEFAULT_FORMER_RULE_ORDER` was used for compatibility, replaced by Automatic Versioning
- `org.nuxeo.ecm.core.versioning.StandardVersioningService.COMPAT_ID_PREFIX` was used for compatibility, replaced by Automatic Versioning
- `org.nuxeo.ecm.core.versioning.StandardVersioningService.COMPAT_DEFAULT_ID` was used for compatibility, replaced by Automatic Versioning
- `org.nuxeo.ecm.core.versioning.VersioningComponent.VERSIONING_RULE_XP` was replaced by Automatic Versioning
- `org.nuxeo.ecm.core.versioning.StandardVersioningService.FILE_TYPE` was not used, no replacement
- `org.nuxeo.ecm.core.versioning.StandardVersioningService.NOTE_TYPE` was not used, no replacement
- `org.nuxeo.ecm.core.versioning.StandardVersioningService.PROJECT_STATE` was not used, no replacement
- `org.nuxeo.ecm.core.versioning.StandardVersioningService.AUTO_CHECKED_OUT` was not used, no replacement
- `org.nuxeo.ecm.core.io.download.DownloadService.NXBIGZIPFILE` was replaced by `org.nuxeo.ecm.core.io.download.DownloadService.NXBIGBLOB`
- `org.nuxeo.ecm.core.storage.mongodb.GridFSBinaryManager.SERVER_PROPERTY` was replaced by `MongoDBConnectionService` contributions
- `org.nuxeo.ecm.core.storage.mongodb.GridFSBinaryManager.DBNAME_PROPERTY` was replaced by `MongoDBConnectionService` contributions
- `org.nuxeo.drive.service.impl.DefaultFileSystemItemFactory.VERSIONING_DELAY_PARAM` was replaced by Automatic Versioning
- `org.nuxeo.drive.service.impl.DefaultFileSystemItemFactory.VERSIONING_OPTION_PARAM` was replaced by Automatic Versioning
- `org.nuxeo.functionaltests.pages.tabs.CollectionContentTabSubPage.DELETE` was not used, no replacement
- `org.nuxeo.ecm.platform.tag.TagConstants.MIGRATION_ID` not used anymore since `org.nuxeo.ecm.platform.tag.RelationTagService` has been removed
- `org.nuxeo.ecm.platform.tag.TagConstants.MIGRATION_STATE_RELATIONS` not used anymore since `org.nuxeo.ecm.platform.tag.RelationTagService` has been removed
- `org.nuxeo.ecm.platform.tag.TagConstants.MIGRATION_STATE_FACETS` not used anymore since `org.nuxeo.ecm.platform.tag.RelationTagService` has been removed
- `org.nuxeo.ecm.platform.tag.TagConstants.MIGRATION_STEP_RELATIONS_TO_FACETS` not used anymore since `org.nuxeo.ecm.platform.tag.RelationTagService` has been removed
- `org.nuxeo.ecm.platform.tag.TagConstants.TAGS_BELONG_TO_DOCUMENT` not used anymore since `org.nuxeo.ecm.platform.tag.RelationTagService` has been removed
- `org.nuxeo.ecm.platform.ui.web.auth.NXAuthConstants.LANGUAGE_PARAMETER` was not used, no replacement
- `org.nuxeo.runtime.reload.ReloadComponent.RELOAD_STRATEGY_VALUE_UNSTASH` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.reload.ReloadService.USE_COMPAT_HOT_RELOAD` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.DevFrameworkBootstrap.USE_COMPAT_HOT_RELOAD` was used by former Hot Reload mechanism, no replacement, was referencing `nuxeo.hotreload.compat.mechanism` nuxeo.conf property
- `org.nuxeo.ecm.user.center.profile.UserProfileConstants.USER_PROFILE_TIMEZONE` no timezone field in schema, no replacement
- `org.nuxeo.runtime.api.Framework.NUXEO_STRICT_RUNTIME_SYSTEM_PROP` was not used, no replacement, was referencing `org.nuxeo.runtime.strict`

#### Fields

- `org.nuxeo.ecm.core.versioning.VersioningComponent.versioningRulesRegistry` was replaced by Automatic Versioning
- `org.nuxeo.ecm.core.versioning.VersioningComponent.defaultVersioningRuleList` was replaced by Automatic Versioning
- `org.nuxeo.ecm.core.storage.mongodb.MongoDBRepositoryDescriptor.server` was replaced by `MongoDBConnectionService` contributions
- `org.nuxeo.ecm.core.storage.mongodb.MongoDBRepositoryDescriptor.dbname` was replaced by `MongoDBConnectionService` contributions
- `org.nuxeo.ecm.csv.core.CSVImportStatus.positionInQueue` was not used, not replacement
- `org.nuxeo.ecm.csv.core.CSVImportStatus.queueSize` was not used, not replacement
- `org.nuxeo.drive.service.impl.DefaultFileSystemItemFactory.versioningDelay` was replaced by Automatic Versioning
- `org.nuxeo.drive.service.impl.DefaultFileSystemItemFactory.versioningOption` was replaced by Automatic Versioning
- `org.nuxeo.drive.operations.NuxeoDriveAttachBlob.applyVersioningPolicy` was replaced by Automatic Versioning
- `org.nuxeo.drive.operations.NuxeoDriveAttachBlob.factoryName` was replaced by Automatic Versioning
- `org.nuxeo.functionaltests.pages.tabs.AbstractContentTabSubPage.filterInput` was replaced by filter methods from `org.nuxeo.functionaltests.contentView.ContentViewElement`
- `org.nuxeo.functionaltests.pages.tabs.AbstractContentTabSubPage.filterButton` was replaced by filter methods from `org.nuxeo.functionaltests.contentView.ContentViewElement`
- `org.nuxeo.functionaltests.pages.tabs.AbstractContentTabSubPage.clearFilterButton` was replaced by filter methods from `org.nuxeo.functionaltests.contentView.ContentViewElement`
- `org.nuxeo.functionaltests.pages.tabs.CollectionContentTabSubPage.documentContentForm` was not used, no replacement
- `og.nuxeo.functionaltests.pages.tabs.CollectionContentTabSubPage.childDocumentRows` was not used, no replacement
- `org.nuxeo.functionaltests.pages.tabs.SectionContentTabSubPage.contentForm` was not used, no replacement
- `org.nuxeo.runtime.model.impl.ComponentRegistry.deployedFiles` was removed, no real usage
- `org.nuxeo.runtime.test.runner.RuntimeDeployment.contexts` was removed, no real usage
- `org.nuxeo.runtime.tomcat.dev.ReloadServiceInvoker.flushSeam` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.ReloadServiceInvoker.reloadSeam` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.ReloadServiceInvoker.installWebResources` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.ReloadServiceInvoker.runDeploymentPreprocessor` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.ReloadServiceInvoker.deployBundles` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.ReloadServiceInvoker.undeployBundles` was used by former Hot Reload mechanism, no replacement

#### Methods

- `org.nuxeo.connect.client.status.ConnectStatusHolder#isRegistred()` was replaced by `org.nuxeo.connect.client.status.ConnectStatusHolder#isRegistered()`
- `org.nuxeo.ecm.automation.core.impl.adapters.StringToDocRef#createRef(String)` was replaced by `org.nuxeo.ecm.automation.core.impl.adapters.helper.TypeAdapterHelper#createDocumentRef(String-`
- `org.nuxeo.connect.update.live.UpdateServiceImpl#restart()` was replaced by `org.nuxeo.ecm.admin.NuxeoCtlManager#restart()`
- `org.nuxeo.connect.update.task.live.LiveInstallTask#reloadComponent(String)` was removed since former Hot Reload mechanism was removed
- `org.nuxeo.connect.update.task.live.LiveInstallTask#reloadComponents(LocalPackage)` was removed since former Hot Reload mechanism was removed
- `org.nuxeo.connect.update.task.live.commands.Deploy#deployFile(File, ReloadService)` behavior has changed since former Hot Reload mechanism was removed
- `org.nuxeo.connect.update.task.live.commands.Deploy#deployDirectory(File, ReloadService)` behavior has changed since former Hot Reload mechanism was removed
- `org.nuxeo.connect.update.task.live.commands.Deploy#doCompatRun(Task)` was removed since former Hot Reload mechanism was removed
- `org.nuxeo.connect.update.task.live.commands.Undeploy#undeployFile(File, ReloadService)` behavior has changed since former Hot Reload mechanism was removed
- `org.nuxeo.connect.update.task.live.commands.Undeploy#undeployDirectory(File, ReloadService)` behavior has changed since former Hot Reload mechanism was removed
- `org.nuxeo.connect.update.task.live.commands.Undeploy#doCompatRun(Task)` was removed since former Hot Reload mechanism was removed
- `org.nuxeo.ecm.core.blob.BlobDispatcher#getBlobProvider(Document, Blob)` was replaced by `org.nuxeo.ecm.core.blob.BlobDispatcher#getBlobProvider(Document, Blob, String)` + in the implementations
- `org.nuxeo.ecm.core.uidgen.UIDSequencer#initSequence(String, int)` was replaced by `org.nuxeo.ecm.core.uidgen.UIDSequencer#initSequence(String, long)`
- `org.nuxeo.ecm.core.uidgen.UIDSequencer#getNext(String)` was replaced by `org.nuxeo.ecm.core.uidgen.UIDSequencer#getNextLong(String)`
- `org.nuxeo.ecm.core.versioning.ExtendableVersioningService#getVersioningRules()` was replaced by Automatic Versioning
- `org.nuxeo.ecm.core.versioning.ExtendableVersioningService#setVersioningRules(Map)` was replaced by Automatic Versioning
- `org.nuxeo.ecm.core.versioning.ExtendableVersioningService#setDefaultVersioningRule(DefaultVersioningRuleDescriptor)` was replaced by Automatic Versioning
- `org.nuxeo.ecm.core.versioning.VersioningComponent#registerVersioningRule(VersioningRuleDescriptor)` was replaced by Automatic Versioning
- `org.nuxeo.ecm.core.versioning.VersioningComponent#unregisterVersioningRule(VersioningRuleDescriptor)` was replaced by Automatic Versioning
- `org.nuxeo.ecm.core.versioning.VersioningComponent#registerDefaultVersioningRule(DefaultVersioningRuleDescriptor)` was replaced by Automatic Versioning
- `org.nuxeo.ecm.core.versioning.VersioningComponent#getVersioningRules()` was replaced by Automatic Versioning
- `org.nuxeo.ecm.core.versioning.VersioningComponent#getDefaultVersioningRule()` was replaced by Automatic Versioning
- `org.nuxeo.ecm.core.api.ScrollResult#getResultIds()` was replaced by `org.nuxeo.ecm.core.api.ScrollResult#getResults()`
- `org.nuxeo.ecm.core.api.model.Property#getPath()` was replaced by `org.nuxeo.ecm.core.api.model.Property#getXPath()`
- `org.nuxeo.ecm.core.cache.CacheService#registerCache(String, int, int)` was replaced by `org.nuxeo.ecm.core.cache.CacheService#registerCache(String)`
- `org.nuxeo.ecm.core.transientstore.api.TransientStoreProvider#getStorageSizeMB()` was replaced by `org.nuxeo.ecm.core.transientstore.api.TransientStoreProvider#getStorageSize()`
- `org.nuxeo.ecm.core.convert.api.ConversionService#convertBlobToPDF(Blob)` was replaced by `org.nuxeo.ecm.core.convert.api.ConversionService#convertToMimeType(String, BlobHolder, Map)`
- `org.nuxeo.ecm.core.query.sql.model.FromList#get(int)` was not used, no replacement
- `org.nuxeo.ecm.core.query.sql.model.SelectList#get(int)` was not used, no replacement
- `org.nuxeo.ecm.core.storage.mongodb.MongoDBRepositoryService#handleConnectionContribution(MongoDBRepositoryDescriptor, BiConsumer)` was replaced by - `MongoDBConnectionService` contributions
- `org.nuxeo.ecm.csv.core.CSVImporter#launchImport(CoreSession, String, File, String, CSVImporterOptions)` was replaced by `org.nuxeo.ecm.csv.core.CSVImporter#launchImport(CoreSession, String, Blob, CSVImporterOptions)`
- `org.nuxeo.ecm.csv.core.CSVImportStatus#<init>(State, int, int)` was not used, not replacement
- `org.nuxeo.ecm.csv.core.CSVImportStatus#getPositionInQueue()` was not used, not replacement
- `org.nuxeo.ecm.csv.core.CSVImportStatus#getQueueSize()` was not used, not replacement
- `org.nuxeo.drive.adapter.FolderItem#createFile(Blob)` was replaced by `org.nuxeo.drive.adapter.FolderItem#createFile(Blob, boolean)`
- `org.nuxeo.drive.adapter.FolderItem#createFolder(String)` was replaced by `org.nuxeo.drive.adapter.FolderItem#createFolder(String, boolean)`
- `org.nuxeo.drive.adapter.impl.DocumentBackedFileItem#<init>(VersioningFileSystemItemFactory, DocumentModel)` was replaced by Automatic Versioning
- `org.nuxeo.drive.adapter.impl.DocumentBackedFileItem#<init>(VersioningFileSystemItemFactory, DocumentModel, boolean)` was replaced by Automatic Versioning
- `org.nuxeo.drive.adapter.impl.DocumentBackedFileItem#<init>(VersioningFileSystemItemFactory, DocumentModel, boolean, boolean)` was replaced by Automatic Versioning
- `org.nuxeo.drive.adapter.impl.DocumentBackedFileItem#<init>(VersioningFileSystemItemFactory, FolderItem, DocumentModel)` was replaced by Automatic Versioning
- `org.nuxeo.drive.adapter.impl.DocumentBackedFileItem#<init>(VersioningFileSystemItemFactory, FolderItem, DocumentModel, boolean)` was replaced by Automatic Versioning
- `org.nuxeo.drive.adapter.impl.DocumentBackedFileItem#<init>(VersioningFileSystemItemFactory, FolderItem, DocumentModel, boolean, boolean)` was replaced by Automatic Versioning
- `org.nuxeo.drive.adapter.impl.DocumentBackedFileItem#initialize(VersioningFileSystemItemFactory, FolderItem, DocumentModel)` was replaced by Automatic Versioning
- `org.nuxeo.drive.adapter.impl.FileSystemItemHelper#versionIfNeeded(VersioningFileSystemItemFactory, DocumentModel, CoreSession)` was replaced by Automatic Versioning
- `org.nuxeo.drive.service.FileSystemItemManager#createFolder(String, String, NuxeoPrincipal)` was replaced by `org.nuxeo.drive.service.FileSystemItemManager#createFolder(String, String, NuxeoPrincipal, boolean)`
- `org.nuxeo.drive.service.FileSystemItemManager#createFile(String, Blob, NuxeoPrincipal)` was replaced by `org.nuxeo.drive.service.FileSystemItemManager#createFile(String, Blob, NuxeoPrincipal, boolean)`
- `org.nuxeo.functionaltests.contentView.ContentViewElement#checkByTitle(String...)` was replaced by `org.nuxeo.functionaltests.contentView.ContentViewElement#selectByTitle(String...)`
- `org.nuxeo.functionaltests.contentView.ContentViewElement#checkByIndex(int...)` was replaced by `org.nuxeo.functionaltests.contentView.ContentViewElement#selectByIndex(int...)` or `org.nuxeo.functionaltests.contentView.ContentViewElement#unselectByIndex(int...)`
- `org.nuxeo.functionaltests.contentView.ContentViewElement#checkAllItems()` was replaced by `org.nuxeo.functionaltests.contentView.ContentViewElement#selectAll()` or `org.nuxeo.functionaltests.contentView.ContentViewElement#unselectAll()`
- `org.nuxeo.functionaltests.contentView.ContentViewElement#getSelectionActionByTitle(String)` was not used
- `org.nuxeo.functionaltests.pages.DocumentBasePage#getAddAllToCollectionPopup()` was replaced by actions from `org.nuxeo.functionaltests.pages.tabs.ContentTabSubPage`
- `org.nuxeo.functionaltests.pages.LoginPage#login(String, String, String)` was replaced by `org.nuxeo.functionaltests.pages.LoginPage#(String, String)`
- `org.nuxeo.functionaltests.pages.tabs.CollectionContentTabSubPage#deleteSelectedDocuments()` was replaced by actions `org.nuxeo.functionaltests.pages.contentview.ContentViewElement`
- `org.nuxeo.functionaltests.pages.tabs.CollectionContentTabSubPage#filterDocument(String, int, int)` was replaced by `org.nuxeo.functionaltests.pages.tabs.ContentTabSubPage#filterDocument(String)`
- `org.nuxeo.functionaltests.pages.tabs.CollectionContentTabSubPage#clearFilter(int, int)` was not used, no replacement
- `org.nuxeo.launcher.NuxeoLauncher#registerTrial()` was removed
- `org.nuxeo.ecm.platform.audit.api.AuditReader#getLogEntriesFor(String, Map, boolean)` was replaced by `org.nuxeo.ecm.platform.audit.api.AuditReader#queryLogs(QueryBuilder)`
- `org.nuxeo.ecm.platform.audit.service.AuditBackend#onShutdown()` was replaced by `org.nuxeo.ecm.platform.audit.service.AuditBackend#onApplicationStopped()`
- `org.nuxeo.ecm.platform.audit.service.AuditBulker#onShutdown()` was replaced by `org.nuxeo.ecm.platform.audit.service.AuditBulker#onApplicationStopped()`
-`org.nuxeo.ecm.platform.audit.service.BaseLogEntryProvider#getLogEntriesFor(String, String)` was replaced by `org.nuxeo.ecm.platform.audit.api.AuditReader#getLogEntriesFor(String, String)`
- `org.nuxeo.ecm.directory.Session#deleteEntry(String, Map)` was replaced by `org.nuxeo.ecm.directory.Session#deleteEntry(String)`
- `org.nuxeo.ecm.platform.filemanager.api.FileManager#createFolder(CoreSession, String, String)` was replaced by `org.nuxeo.ecm.platform.filemanager.api.FileManager#createFolder(CoreSession, String, String, boolean)`
- `org.nuxeo.ecm.platform.filemanager.api.FileManager#getVersioningOption()` was replaced by Automatic Versioning
- `org.nuxeo.ecm.platform.filemanager.api.FileManagerService#registerVersioning()` was replaced by Automatic Versioning
- `org.nuxeo.ecm.platform.filemanager.api.FileManagerService#defaultCreateFolder(CoreSession, String, String)` was replaced by Automatic Versioning `org.nuxeo.ecm.platform.filemanager.api.FileManagerService#defaultCreateFolder(CoreSession, String, String, boolean)`
- `org.nuxeo.ecm.platform.filemanager.api.FileManagerService#defaultCreateFolder(CoreSession, String, String, String, boolean)` was replaced by Automatic Versioning `org.nuxeo.ecm.platform.filemanager.api.FileManagerService#defaultCreateFolder(CoreSession, String, String, String, boolean, boolean)`
- `org.nuxeo.ecm.platform.filemanager.service.extension.AbstractFileImporter#skipCheckInForBlob(Blob)` was replaced by Automatic Versioning
- `org.nuxeo.ecm.platform.filemanager.service.extension.AbstractFileImporter#checkIn(DocumentModel)` was replaced by Automatic Versioning
- `org.nuxeo.ecm.platform.filemanager.service.extension.AbstractFileImporter#checkInAfterAdd(DocumentModel)` was replaced by Automatic Versioning
- `org.nuxeo.ecm.platform.notification.api.NotificationManager#getSubscribedDocuments(String)` was replaced by `org.nuxeo.ecm.platform.notification.api.NotificationManager#getSubscribedDocuments(String, String)`
- `org.nuxeo.ecm.platform.tag.TagService#tag(CoreSession, String, String, String)` was replaced by `org.nuxeo.ecm.platform.tag.TagService#tag(CoreSession, String, String)`
- `org.nuxeo.ecm.platform.tag.TagService#untag(CoreSession, String, String, String)` was replaced by `org.nuxeo.ecm.platform.tag.TagService#untag(CoreSession, String, String)`
- `org.nuxeo.ecm.platform.tag.TagService#getDocumentTags(CoreSession, String, String)` was replaced by `org.nuxeo.ecm.platform.tag.TagService#getTags(CoreSession, String)`
- `org.nuxeo.ecm.platform.tag.TagService#getDocumentTags(CoreSession, String, String, boolean)` was replaced by `org.nuxeo.ecm.platform.tag.TagService#getTags(CoreSession, String)`
- `org.nuxeo.ecm.platform.tag.TagService#getTagDocumentIds(CoreSession, String, String)` was replaced by `org.nuxeo.ecm.platform.tag.TagService#getTagDocumentIds(CoreSession, String)`
- `org.nuxeo.ecm.platform.tag.TagService#getTagCloud(CoreSession, String, String, boolean)` was not used, no replacement
- `org.nuxeo.ecm.platform.tag.TagService#getSuggestions(CoreSession, String, String)` was replaced by `org.nuxeo.ecm.platform.tag.TagService#getSuggestions(CoreSession, String)`
- `org.nuxeo.ecm.platform.tag.TagService#hasFeature(Feature)` not used anymore since `org.nuxeo.ecm.platform.tag.RelationTagService` has been removed
- `org.nuxeo.ecm.platform.computedgroups.NuxeoComputedGroup#<init>(String)` was replaced by `org.nuxeo.ecm.platform.computedgroups.NuxeoComputedGroup#<init>(String, GroupConfig)`
- `org.nuxeo.ecm.platform.computedgroups.NuxeoComputedGroup#<init>(String, String)` was replaced by `org.nuxeo.ecm.platform.computedgroups.NuxeoComputedGroup#<init>(String, String, GroupConfig)`
- `org.nuxeo.ecm.platform.userworkspace.api.UserWorkspaceService#getCurrentUserPersonalWorkspace(CoreSession, DocumentModel)` was replaced by `org.nuxeo.ecm.platform.userworkspace.api.UserWorkspaceService#getCurrentUserPersonalWorkspace(CoreSession)`
- `org.nuxeo.ecm.platform.ui.web.DownloadServlet#handleDownloadTemporaryZip(HttpServletRequest, HttpServletResponse, String)` was not used, no replacement
- `org.nuxeo.runtime.api.Framework#getLocalService(Class)` was replaced by `org.nuxeo.runtime.api.Framework#getService(Class)`
- `org.nuxeo.runtime.model.Component#applicationStarted(ComponentContext)` was replaced by `org.nuxeo.runtime.model.Component#start(ComponentContext)`
- `org.nuxeo.runtime.model.ComponentInstance#reload()` was removed since former Hot Reload mechanism was removed
- `org.nuxeo.runtime.model.ComponentManager#unregisterByLocation(String)` was removed, no real usage
- `org.nuxeo.runtime.model.ComponentManager#hasComponentFromLocation(String)` was removed, no real usage
- `org.nuxeo.runtime.model.impl.RegistrationInfoImpl#reload()` was removed since former Hot Reload mechanism was removed
- `org.nuxeo.runtime.model.impl.RegistrationInfoImpl#restart()` was not used, no replacement
- `org.nuxeo.runtime.reload.ReloadService#deployBundle(File)` was replaced by `org.nuxeo.runtime.reload.ReloadService#reloadBundles(ReloadContext)`
- `org.nuxeo.runtime.reload.ReloadService#deployBundle(File, boolean)` was replaced by `org.nuxeo.runtime.reload.ReloadService#reloadBundles(ReloadContext)`
- `org.nuxeo.runtime.reload.ReloadService#deployBundles(List)` was replaced by `org.nuxeo.runtime.reload.ReloadService#reloadBundles(ReloadContext)`
- `org.nuxeo.runtime.reload.ReloadService#deployBundles(List, boolean)` was replaced by `org.nuxeo.runtime.reload.ReloadService#reloadBundles(ReloadContext)`
- `org.nuxeo.runtime.reload.ReloadService#undeployBundle(File)` was replaced by `org.nuxeo.runtime.reload.ReloadService#reloadBundles(ReloadContext)`
- `org.nuxeo.runtime.reload.ReloadService#undeployBundle(File, boolean)` was replaced by `org.nuxeo.runtime.reload.ReloadService#reloadBundles(ReloadContext)`
- `org.nuxeo.runtime.reload.ReloadService#undeployBundles(List)` was replaced by `org.nuxeo.runtime.reload.ReloadService#reloadBundles(ReloadContext)`
- `org.nuxeo.runtime.reload.ReloadService#undeployBundles(List, boolean)` was replaced by `org.nuxeo.runtime.reload.ReloadService#reloadBundles(ReloadContext)`
- `org.nuxeo.runtime.reload.ReloadService#installWebResources(File)` was not used, no replacement
- `org.nuxeo.runtime.reload.ReloadComponent#refreshComponents()` was used former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.DevFrameworkBootstrap#preloadDevBundles()` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.DevFrameworkBootstrap#postloadDevBundles()` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.DevFrameworkBootstrap#zipDirectory(Path, Path, CopyOption...)` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.DevFrameworkBootstrap#clearClassLoader()` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.DevFrameworkBootstrap#installNewClassLoader()` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.DevFrameworkBootstrap#installSeamClasses(File[])` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.DevFrameworkBootstrap#installResourceBundleFragments(List)` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.DevFrameworkBootstrap#resourceBundleName(File)` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.ReloadServiceInvoker#hotDeployBundles(DevBundle[])` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.ReloadServiceInvoker#hotUndeployBundles(DevBundle[])` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.ReloadServiceInvoker#deployBundles(List)` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.ReloadServiceInvoker#undeployBundles(List)` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.ReloadServiceInvoker#installWebResources(File)` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.ReloadServiceInvoker#flushSeam()` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.ReloadServiceInvoker#reloadSeam()` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.runtime.tomcat.dev.ReloadServiceInvoker#runDeploymentPreprocessor()` was used by former Hot Reload mechanism, no replacement
- `org.nuxeo.ecm.webengine.app.JsonWebengineWriter#writeException(OutputStream, WebException, MediaType)` not needed anymore as `org.nuxeo.ecm.webengine.WebException` was removed
- `org.nuxeo.ecm.webengine.app.JsonWebengineWriter#writeException(JsonGenerator, WebException, MediaType)` not needed anymore as `org.nuxeo.ecm.webengine.WebException` was removed

#### Classes

- `org.nuxeo.ecm.automation.OperationCompoundExceptionBuilder` was not used, no replacement
- `org.nuxeo.ecm.automation.jaxrs.io.operations.MultiPartRequestReader` was replaced by `org.nuxeo.ecm.automation.jaxrs.io.operations.MultiPartFormRequestReader`
- `org.nuxeo.ecm.core.versioning.CompatVersioningService` was not used, no replacement
- `org.nuxeo.ecm.core.versioning.DefaultVersioningRuleDescriptor` was replaced by Automatic Versioning
- `org.nuxeo.ecm.core.versioning.VersioningComponent` was replaced by Automatic Versioning
- `org.nuxeo.ecm.core.versioning.OptionDescriptor` was replaced by Automatic Versioning
- `org.nuxeo.ecm.core.versioning.SaveOptionsDescriptor` was replaced by Automatic Versioning
- `org.nuxeo.ecm.core.versioning.VersioningRuleDescriptor` was replaced by Automatic Versioning
- `org.nuxeo.ecm.core.versioning.VersioningService` was replaced by `org.nuxeo.ecm.core.api.versioning.VersioningService`
- `org.nuxeo.drive.service.VersioningFileSystemItemFactory` was replaced by Automatic Versioning
- `org.nuxeo.drive.operations.test.NuxeoDriveSetVersioningOptions` was replaced by Automatic Versioning
- `org.nuxeo.ecm.platform.filemanager.service.extension.VersioningDescriptor` was replaced by Automatic Versioning
- `org.nuxeo.ecm.platform.tag.RelationTagService` was replaced by `org.nuxeo.ecm.platform.tag.FacetedTagService`
- `org.nuxeo.ecm.platform.tag.BridgeTagService` not used anymore since `org.nuxeo.ecm.platform.tag.RelationTagService` has been removed
- `org.nuxeo.ecm.platform.tag.TagsMigrator` not used anymore since `org.nuxeo.ecm.platform.tag.RelationTagService` has been removed
- `org.nuxeo.ecm.platform.tag.Tag` not used anymore since `org.nuxeo.ecm.platform.tag.RelationTagService` has been removed
- `org.nuxeo.ecm.platform.tag.CheckedInDocumentListener` not used anymore since `org.nuxeo.ecm.platform.tag.RelationTagService` has been removed
- `org.nuxeo.ecm.platform.computedgroups.ComputedGroupsService` was not used, no replacement
- `org.nuxeo.runtime.RuntimeExtension` was not used, no replacement
- `org.nuxeo.runtime.model.impl.ShutdownTask` was removed since Nuxeo Runtime now handles start / stop
- `org.nuxeo.runtime.reload.NuxeoRestart` was replaced by `org.nuxeo.ecm.admin.NuxeoCtlManager`
- `org.nuxeo.runtime.reload.ReloadEventNames` was replaced by `org.nuxeo.runtime.reload.ReloadService`
- `org.nuxeo.ecm.webengine.WebException` was replaced by `org.nuxeo.ecm.core.api.NuxeoException`
 -`org.nuxeo.ecm.webengine.app.JsonExceptionWriter` not needed anymore as `org.nuxeo.ecm.webengine.WebException` was removed
- `org.nuxeo.ecm.webengine.model.AdapterNotFoundException` was replaced by `org.nuxeo.ecm.webengine.model.exceptions.WebResourceNotFoundException`
- `org.nuxeo.ecm.webengine.model.TemplateNotFoundException` was replaced by `org.nuxeo.ecm.webengine.model.exceptions.WebResourceNotFoundException`
 -`org.nuxeo.ecm.webengine.model.TypeException` was replaced by `org.nuxeo.ecm.webengine.model.exceptions.WebResourceNotFoundException`
- `org.nuxeo.ecm.webengine.model.TypeNotFoundException` was replaced by `org.nuxeo.ecm.webengine.model.exceptions.WebResourceNotFoundException`
- `org.nuxeo.ecm.webengine.jaxrs.session.CoreExceptionMapper` was not used, no replacement

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31536](https://jira.nuxeo.com/browse/NXP-31536)

## Dependencies Upgrade Versions

#### Upgrade Apache POI to 5.2.1

Upgraded the following Maven dependencies from 4.1.2 to 5.2.3:
```
org.apache.poi:poi
org.apache.poi:poi-scratchpad
org.apache.poi:poi-ooxml
org.apache.poi:poi-ooxml-schemas
```
This required an upgrade from 3.1.0 to 5.1.1 of:
```
org.apache.xmlbeans:xmlbean
```
See the Apache POI [History of changes](https://poi.apache.org/changes.html).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31787](https://jira.nuxeo.com/browse/NXP-31787)

#### Upgrade Apache mina-core to 2.1.5

The following dependency has been removed:
```Java
org.apache.directory.server:apacheds-kerberos-shared:1.5.1
```
Thus, also removing its transitive dependency:
```Java
org.apache.mina:mina-core:1.1.2
```
Note that `apacheds-kerberos-shared` was previously made available as a transitive dependency of:
```Java
org.apache.directory.server:apacheds-core:1.5.1
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31786](https://jira.nuxeo.com/browse/NXP-31786)

### Other Dependency Version Upgrades

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Component</th>
<th colspan="1">Nuxeo Platform LTS 2021</th>
<th colspan="1">Nuxeo Platform LTS 2023</th>
</tr>
<tr>
<td colspan="1">ANTLR</td>
<td colspan="1">3.5.2</td>
<td colspan="1">3.5.3</td>
</tr>
<tr>
<td colspan="1">ant-assembly-maven-plugin</td>
<td colspan="1">2.1.4</td>
<td colspan="1">2.1.5</td>
</tr>
<tr>
<td colspan="1">Apache Ant</td>
<td colspan="1">1.10.9</td>
<td colspan="1">1.10.13</td>
</tr>
<tr>
<td colspan="1">Apache Avro</td>
<td colspan="1">1.9.2</td>
<td colspan="1">1.11.1</td>
</tr>
<tr>
<td colspan="1">Apache Chemistry OpenCMIS</td>
<td colspan="1">1.1.0</td>
<td colspan="1">1.1.1-NX01</td>
</tr>
<tr>
<td colspan="1">Apache Geronimo Transaction</td>
<td colspan="1">3.1.4</td>
<td colspan="1">3.1.4-NX1</td>
</tr>
<tr>
<td colspan="1">Apache HttpComponents</td>
<td colspan="1">4.4.13</td>
<td colspan="1">4.5.14</td>
</tr>
<tr>
<td colspan="1">Apache HttpCore</td>
<td colspan="1">4.4.13</td>
<td colspan="1">4.4.16</td>
</tr>
<tr>
<td colspan="1">Apache PDFBox</td>
<td colspan="1">2.0.21</td>
<td colspan="1">2.0.27</td>
</tr>
<tr>
<td colspan="1">Apache Xerces</td>
<td colspan="1">>2.12.0-nx1</td>
<td colspan="1">>2.12.2-nx1</td>
</tr>
<tr>
<td colspan="1">AssertJ</td>
<td colspan="1">>3.17.2</td>
<td colspan="1">>3.24.2</td>
</tr>
<tr>
<td colspan="1">AWS Java SDK</td>
<td colspan="1">1.11.885</td>
<td colspan="1">1.12.261</td>
</tr>
<tr>
<td colspan="1">Azure Storage</td>
<td colspan="1">3.1.0</td>
<td colspan="1">8.6.6</td>
</tr>
<tr>
<td colspan="1">biz.neustar:browsermob-proxy</td>
<td colspan="1">2.0-beta-6</td>
<td colspan="1">2.0-beta-7</td>
</tr>
<tr>
<td colspan="1">BouncyCastle</td>
<td colspan="1">1.66</td>
<td colspan="1">1.69</td>
</tr>
<tr>
<td colspan="1">Build Helper Maven Plugin</td>
<td colspan="1">1.8</td>
<td colspan="1">1.12</td>
</tr>
<tr>
<td colspan="1">Build Number Maven Plugin</td>
<td colspan="1">1.2</td>
<td colspan="1">1.4</td>
</tr>
<tr>
<td colspan="1">ClassGraph</td>
<td colspan="1">4.8.90</td>
<td colspan="1">4.8.157</td>
</tr>
<tr>
<td colspan="1">com.fasterxml.woodstox:woodstox-core</td>
<td colspan="1">6.2.3</td>
<td colspan="1">6.5.0</td>
</tr>
<tr>
<td colspan="1">com.google.code.externalsortinginjava:externalsortinginjava</td>
<td colspan="1">0.6.0</td>
<td colspan="1">0.6.1</td>
</tr>
<tr>
<td colspan="1">com.googlecode.owasp-java-html-sanitizer:owasp-java-html-sanitizer</td>
<td colspan="1">20190103.NX1</td>
<td colspan="1">20211018.2.NX1</td>
</tr>
<tr>
<td colspan="1">com.auth0:java-jwt</td>
<td colspan="1">3.11.0</td>
<td colspan="1">3.19.4</td>
</tr>
<tr>
<td colspan="1">commons-cli:commons-cli</td>
<td colspan="1">1.4</td>
<td colspan="1">1.5.0</td>
</tr>
<tr>
<td colspan="1">commons-fileupload:commons-fileupload</td>
<td colspan="1">1.4</td>
<td colspan="1">1.5</td>
</tr>
<tr>
<td colspan="1">Concordion</td>
<td colspan="1">1.3.0</td>
<td colspan="1">1.5.1</td>
</tr>
<tr>
<td colspan="1">Confluent</td>
<td colspan="1">6.0.0</td>
<td colspan="1">6.2.9</td>
</tr>
<tr>
<td colspan="1">Dependency Check Maven Plugin</td>
<td colspan="1">5.2.4</td>
<td colspan="1">5.3.2</td>
</tr>
<tr>
<td colspan="1">Dom4J</td>
<td colspan="1">2.1.3</td>
<td colspan="1">2.1.4</td>
</tr>
<tr>
<td colspan="1">Exec Maven Plugin</td>
<td colspan="1">1.5.0</td>
<td colspan="1">1.6.0</td>
</tr>
<tr>
<td colspan="1">Gatling Maven Plugin</td>
<td colspan="1">3.0.4</td>
<td colspan="1">3.1.2</td>
</tr>
<tr>
<td colspan="1">Google API Client</td>
<td colspan="1">1.25.0</td>
<td colspan="1">1.35.2</td>
</tr>
<tr>
<td colspan="1">Google API Drive</td>
<td colspan="1">v2-rev161-1.19.1</td>
<td colspan="1">v2-rev20201130-1.31.0</td>
</tr>
<tr>
<td colspan="1">Google Cloud Storage</td>
<td colspan="1">1.76.0</td>
<td colspan="1">1.118.1</td>
</tr>
<tr>
<td colspan="1">Google Guava</td>
<td colspan="1">30.0-jre</td>
<td colspan="1">30.1-jre</td>
</tr>
<tr>
<td colspan="1">Google HTTP Client</td>
<td colspan="1">1.19.0</td>
<td colspan="1">1.43.1</td>
</tr>
<tr>
<td colspan="1">Google OAuth Client</td>
<td colspan="1">1.20.0</td>
<td colspan="1">>1.34.1</td>
</tr>
<tr>
<td colspan="1">Groovy</td>
<td colspan="1">2.4.12</td>
<td colspan="1">>2.4.21</td>
</tr>
<tr>
<td colspan="1">Gson</td>
<td colspan="1">2.8.6</td>
<td colspan="1">>2.10.1</td>
</tr>
<tr>
<td colspan="1">io.prometheus:simpleclient_httpserver</td>
<td colspan="1">0.9.0</td>
<td colspan="1">>0.16.0</td>
</tr>
<tr>
<td colspan="1">JAXB</td>
<td colspan="1">2.3.3</td>
<td colspan="1">2.3.8</td>
</tr>
<tr>
<td colspan="1">Jackson 1</td>
<td colspan="1">1.8.1</td>
<td colspan="1">1.9.11</td>
</tr>
<tr>
<td colspan="1">Jackson 2</td>
<td colspan="1">2.11.3</td>
<td colspan="1">2.12.7</td>
</tr>
<tr>
<td colspan="1">javax.validation:validation-api</td>
<td colspan="1">1.0.0.GA</td>
<td colspan="1">1.1.0.Final</td>
</tr>
<tr>
<td colspan="1">JCIFS</td>
<td colspan="1">1.2.19</td>
<td colspan="1">1.3.18-kohsuke-1</td>
</tr>
<tr>
<td colspan="1">Jedis</td>
<td colspan="1">2.9.0</td>
<td colspan="1">2.10.2</td>
</tr>
<tr>
<td colspan="1">Joda-Time</td>
<td colspan="1">2.10.6</td>
<td colspan="1">2.12.3</td>
</tr>
<tr>
<td colspan="1">JSONassert</td>
<td colspan="1">1.5.0</td>
<td colspan="1">1.5.1</td>
</tr>
<tr>
<td colspan="1">JUnit</td>
<td colspan="1">4.13.1</td>
<td colspan="1">4.13.2</td>
</tr>
<tr>
<td colspan="1">Jxls-2</td>
<td colspan="1">2.8.1</td>
<td colspan="1">2.12.0</td>
</tr>
<tr>
<td colspan="1">Kafka Client</td>
<td colspan="1">2.6.0</td>
<td colspan="1">3.4.0</td>
</tr>
<tr>
<td colspan="1">LibrePDF</td>
<td colspan="1">1.3.22</td>
<td colspan="1">1.3.30</td>
</tr>
<tr>
<td colspan="1">License Maven Plugin</td>
<td colspan="1">1.8</td>
<td colspan="1">1.20</td>
</tr>
<tr>
<td colspan="1">Log4j</td>
<td colspan="1">2.13.3</td>
<td colspan="1">2.20.0</td>
</tr>
<tr>
<td colspan="1">MariaDB Java Driver</td>
<td colspan="1">1.7.4</td>
<td colspan="1">2.7.9</td>
</tr>
<tr>
<td colspan="1">Maven AntRun Plugin</td>
<td colspan="1">1.7</td>
<td colspan="1">1.8</td>
</tr>
<tr>
<td colspan="1">Maven Assembly Plugin</td>
<td colspan="1">2.4</td>
<td colspan="1">2.6</td>
</tr>
<tr>
<td colspan="1">Maven Bundle Plugin</td>
<td colspan="1">2.4.0</td>
<td colspan="1">2.5.4</td>
</tr>
<tr>
<td colspan="1">Maven Clean Plugin</td>
<td colspan="1">2.5</td>
<td colspan="1">2.6.1</td>
</tr>
<tr>
<td colspan="1">Maven Compiler Plugin</td>
<td colspan="1">3.8.0</td>
<td colspan="1">3.11.0</td>
</tr>
<tr>
<td colspan="1">Maven Dependency Plugin</td>
<td colspan="1">3.1.0</td>
<td colspan="1">3.5.0</td>
</tr>
<tr>
<td colspan="1">Maven Deploy Plugin</td>
<td colspan="1">2.8.1</td>
<td colspan="1">2.8.2</td>
</tr>
<tr>
<td colspan="1">Maven Eclipse Plugin</td>
<td colspan="1">2.9</td>
<td colspan="1">2.10</td>
</tr>
<tr>
<td colspan="1">Maven Install Plugin</td>
<td colspan="1">2.5.1</td>
<td colspan="1">2.5.2</td>
</tr>
<tr>
<td colspan="1">Maven JAR Plugin</td>
<td colspan="1">2.3.1</td>
<td colspan="1">2.6</td>
</tr>
<tr>
<td colspan="1">Maven Jarsigner Plugin</td>
<td colspan="1">1.3.1</td>
<td colspan="1">1.4</td>
</tr>
<tr>
<td colspan="1">Maven Javadoc Plugin</td>
<td colspan="1">3.2.0</td>
<td colspan="1">3.5.0</td>
</tr>
<tr>
<td colspan="1">Maven JXR Plugin</td>
<td colspan="1">2.4</td>
<td colspan="1">2.5</td>
</tr>
<tr>
<td colspan="1">Maven Project Info Reports Plugin</td>
<td colspan="1">3.1.1</td>
<td colspan="1">3.4.2</td>
</tr>
<tr>
<td colspan="1">Maven Resources Plugin</td>
<td colspan="1">2.6</td>
<td colspan="1">2.7</td>
</tr>
<tr>
<td colspan="1">Maven Shade Plugin</td>
<td colspan="1">3.2.1</td>
<td colspan="1">3.4.1</td>
</tr>
<tr>
<td colspan="1">Maven Site Plugin</td>
<td colspan="1">3.9.1</td>
<td colspan="1">3.12.1</td>
</tr>
<tr>
<td colspan="1">Maven Source Plugin</td>
<td colspan="1">3.2.0</td>
<td colspan="1">3.2.1</td>
</tr>
<tr>
<td colspan="1">Maven WAR Plugin</td>
<td colspan="1">2.4</td>
<td colspan="1">2.6</td>
</tr>
<tr>
<td colspan="1">Mockito</td>
<td colspan="1">1.9.5</td>
<td colspan="1">3.12.4</td>
</tr>
<tr>
<td colspan="1">MongoDB Java Driver</td>
<td colspan="1">4.1.1</td>
<td colspan="1">4.9.0</td>
</tr>
<tr>
<td colspan="1">MSSQL Java Driver</td>
<td colspan="1">7.0.0.jre8</td>
<td colspan="1">7.4.1.jre8</td>
</tr>
<tr>
<td colspan="1">MVEL 2</td>
<td colspan="1">2.4.10.Final</td>
<td colspan="1">2.4.15.Final</td>
</tr>
<tr>
<td colspan="1">MySQL Java Driver</td>
<td colspan="1">8.0.22</td>
<td colspan="1">8.0.30</td>
</tr>
<tr>
<td colspan="1">net.jodah:failsafe</td>
<td colspan="1">1.1.0</td>
<td colspan="1">1.1.1</td>
</tr>
<tr>
<td colspan="1">net.jodah:expiringmap</td>
<td colspan="1">0.5.9</td>
<td colspan="1">0.5.10</td>
</tr>
<tr>
<td colspan="1">Netty</td>
<td colspan="1">4.1.49.Final</td>
<td colspan="1">4.1.90.Final</td>
</tr>
<tr>
<td colspan="1">Nuxeo Connect Client</td>
<td colspan="1">1.8.3</td>
<td colspan="1">1.8.6</td>
</tr>
<tr>
<td colspan="1">Nuxeo Java Client</td>
<td colspan="1">3.2.0</td>
<td colspan="1">3.13.0</td>
</tr>
<tr>
<td colspan="1">OpenCensus</td>
<td colspan="1">0.27.1</td>
<td colspan="1">0.31.1</td>
</tr>
<tr>
<td colspan="1">OpenSAML</td>
<td colspan="1">2.6.4</td>
<td colspan="1">2.6.6</td>
</tr>
<tr>
<td colspan="1">OPS4J Pax Logging</td>
<td colspan="1">4.4.0</td>
<td colspan="1">4.13.1</td>
</tr>
<tr>
<td colspan="1">org.apache.commons:commons-compress</td>
<td colspan="1">1.20</td>
<td colspan="1">1.23.0</td>
</tr>
<tr>
<td colspan="1">org.apache.commons:commons-csv</td>
<td colspan="1">1.8</td>
<td colspan="1">1.10.0</td>
</tr>
<tr>
<td colspan="1">org.apache.commons:commons-dbcp2</td>
<td colspan="1">2.8.0</td>
<td colspan="1">2.9.0</td>
</tr>
<tr>
<td colspan="1">org.apache.commons:commons-lang3</td>
<td colspan="1">3.11</td>
<td colspan="1">3.12.0</td>
</tr>
<tr>
<td colspan="1">org.apache.commons:commons-pool2</td>
<td colspan="1">2.9.0</td>
<td colspan="1">2.11.1</td>
</tr>
<tr>
<td colspan="1">org.apache.commons:commons-text</td>
<td colspan="1">1.9</td>
<td colspan="1">1.10.0</td>
</tr>
<tr>
<td colspan="1">org.apache.jackrabbit:jackrabbit-webdav</td>
<td colspan="1">2.21.3</td>
<td colspan="1">2.21.15</td>
</tr>
<tr>
<td colspan="1">org.apache.santuario:xmlsec</td>
<td colspan="1">2.2.0</td>
<td colspan="1">2.3.2</td>
</tr>
<tr>
<td colspan="1">org.apache.xbean:xbean-naming</td>
<td colspan="1">4.18</td>
<td colspan="1">4.22</td>
</tr>
<tr>
<td colspan="1">org.codehaus.jettison:jettison</td>
<td colspan="1">1.4.1</td>
<td colspan="1">1.5.4</td>
</tr>
<tr>
<td colspan="1">org.codehaus.plexus:plexus-utils</td>
<td colspan="1">1.5.6</td>
<td colspan="1">3.5.1</td>
</tr>
<tr>
<td colspan="1">org.coursera:metrics-datadog</td>
<td colspan="1">2.0.0-RC1</td>
<td colspan="1">2.0.0-RC2</td>
</tr>
<tr>
<td colspan="1">org.eclipse.jdt:core</td>
<td colspan="1">3.1.1-NXP-4284</td>
<td colspan="1">3.4.2.v_883_R34x</td>
</tr>
<tr>
<td colspan="1">org.freemarker:freemarker</td>
<td colspan="1">2.3.30</td>
<td colspan="1">2.3.32</td>
</tr>
<tr>
<td colspan="1">org.javassist:javassist</td>
<td colspan="1">3.27.0-GA</td>
<td colspan="1">3.29.2-GA</td>
</tr>
<tr>
<td colspan="1">org.jboss.logging:jboss-logging-log4j</td>
<td colspan="1">2.1.0.GA</td>
<td colspan="1">2.1.2.GA</td>
</tr>
<tr>
<td colspan="1">org.mock-server:mockserver-netty</td>
<td colspan="1">5.11.1</td>
<td colspan="1">5.15.0</td>
</tr>
<tr>
<td colspan="1">org.mp4parser:isoparser</td>
<td colspan="1">1.9.41</td>
<td colspan="1">1.9.56</td>
</tr>
<tr>
<td colspan="1">org.ops4j.pax.url:pax-url-aether</td>
<td colspan="1">1.5.2</td>
<td colspan="1">1.6.0</td>
</tr>
<tr>
<td colspan="1">org.osgi:org.osgi.compendium</td>
<td colspan="1">4.2.0</td>
<td colspan="1">4.3.1</td>
</tr>
<tr>
<td colspan="1">org.ow2.asm:asm</td>
<td colspan="1">7.3.1</td>
<td colspan="1">9.5</td>
</tr>
<tr>
<td colspan="1">OWASP ESAPI</td>
<td colspan="1">2.2.1.1</td>
<td colspan="1">2.5.1.0</td>
</tr>
<tr>
<td colspan="1">PostgreSQL Java Driver</td>
<td colspan="1">42.2.18</td>
<td colspan="1">42.6.0</td>
</tr>
<tr>
<td colspan="1">Properties Maven Plugin</td>
<td colspan="1">1.0-alpha-2</td>
<td colspan="1">1.1.0</td>
</tr>
<tr>
<td colspan="1">Restlet</td>
<td colspan="1">2.4.2</td>
<td colspan="1">2.4.3</td>
</tr>
<tr>
<td colspan="1">Scala</td>
<td colspan="1">2.12.3</td>
<td colspan="1">2.12.17</td>
</tr>
<tr>
<td colspan="1">Scala Logging</td>
<td colspan="1">3.9.0</td>
<td colspan="1">3.9.5</td>
</tr>
<tr>
<td colspan="1">Scala Maven Plugin</td>
<td colspan="1">4.3.1</td>
<td colspan="1">4.8.1</td>
</tr>
<tr>
<td colspan="1">SLF4J</td>
<td colspan="1">1.7.30</td>
<td colspan="1">1.7.36</td>
</tr>
<tr>
<td colspan="1">SnakeYAML</td>
<td colspan="1">1.27</td>
<td colspan="1">2.0</td>
</tr>
<tr>
<td colspan="1">Tomcat</td>
<td colspan="1">9.0.41</td>
<td colspan="1">9.0.73</td>
</tr>
<tr>
<td colspan="1">Vaadin</td>
<td colspan="1">0.9.12-NX01</td>
<td colspan="1">0.9.13</td>
</tr>
<tr>
<td colspan="1">Versions Maven Plugin</td>
<td colspan="1">2.7</td>
<td colspan="1">2.15.0</td>
</tr>
<tr>
<td colspan="1">Wro4j</td>
<td colspan="1">1.9.0</td>
<td colspan="1">1.10.1</td>
</tr>
<tr>
<td colspan="1">XDocReport</td>
<td colspan="1">1.0.5</td>
<td colspan="1">1.0.6</td>
</tr>
<tr>
<td colspan="1">xom:xom</td>
<td colspan="1">1.3.5</td>
<td colspan="1">1.3.8</td>
</tr>
<tr>
<td colspan="1">XStream</td>
<td colspan="1">1.4.15</td>
<td colspan="1">1.4.20</td>
</tr>
</tbody>
</table>
</div>

## Dependencies Removal

The following Maven dependencies, unused, were removed from the root POM:

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Removed component</th>
</tr>
<tr>
<td colspan="1">aopalliance:aopalliance</td>
</tr>
<tr>
<td colspan="1">backport-util-concurrent:backport-util-concurrent</td>
</tr>
<tr>
<td colspan="1">bsh:bsh</td>
</tr>
<tr>
<td colspan="1">caja:caja</td>
</tr>
<tr>
<td colspan="1">com.ericdaugherty.mail:jes</td>
</tr>
<tr>
<td colspan="1">com.github.eirslett:frontend-maven-plugin</td>
</tr>
<tr>
<td colspan="1">com.github.olivergondza:maven-jdk-tools-wrapper</td>
</tr>
<tr>
<td colspan="1">com.github.segmentio:analytics</td>
</tr>
<tr>
<td colspan="1">com.google.code.guice:guice-internal</td>
</tr>
<tr>
<td colspan="1">com.googlecode.json-simple:json-simple</td>
</tr>
<tr>
<td colspan="1">com.google.inject.extensions:guice-assistedinject</td>
</tr>
<tr>
<td colspan="1">com.google.inject.extensions:guice-jmx</td>
</tr>
<tr>
<td colspan="1">com.google.inject.extensions:guice-servlet</td>
</tr>
<tr>
<td colspan="1">com.google.protobuf:protobuf-java</td>
</tr>
<tr>
<td colspan="1">com.spotify:dockerfile-maven-plugin</td>
</tr>
<tr>
<td colspan="1">commons-betwixt:commons-betwixt</td>
</tr>
<tr>
<td colspan="1">commons-logging:commons-logging</td>
</tr>
<tr>
<td colspan="1">com.octo.captcha:jcaptcha</td>
</tr>
<tr>
<td colspan="1">com.tngtech.java:junit-dataprovider</td>
</tr>
<tr>
<td colspan="1">com.tngtech.jgiven:jgiven-core</td>
</tr>
<tr>
<td colspan="1">com.tngtech.jgiven:jgiven-junit</td>
</tr>
<tr>
<td colspan="1">com.tngtech.jgiven:jgiven-maven-plugin</td>
</tr>
<tr>
<td colspan="1">com.versioneye:versioneye-maven-plugin</td>
</tr>
<tr>
<td colspan="1">de.odysseus.juel:juel-impl</td>
</tr>
<tr>
<td colspan="1">de.schlichtherle.io:truezip</td>
</tr>
<tr>
<td colspan="1">dnsjava:dnsjava</td>
</tr>
<tr>
<td colspan="1">imagej:imagej</td>
</tr>
<tr>
<td colspan="1">io.opencensus:opencensus-exporter-trace-stackdriver</td>
</tr>
<tr>
<td colspan="1">io.opencensus:opencensus-exporter-stats-stackdriver</td>
</tr>
<tr>
<td colspan="1">io.opencensus:opencensus-contrib-log-correlation-log4j2</td>
</tr>
<tr>
<td colspan="1">io.repaint.maven:tiles-maven-plugin</td>
</tr>
<tr>
<td colspan="1">javax.script:bsh-engine</td>
</tr>
<tr>
<td colspan="1">javax.script:jexl-engine</td>
</tr>
<tr>
<td colspan="1">javax.script:js-engine</td>
</tr>
<tr>
<td colspan="1">jboss:jboss-serialization</td>
</tr>
<tr>
<td colspan="1">jdom:jdom</td>
</tr>
<tr>
<td colspan="1">jline:jline</td>
</tr>
<tr>
<td colspan="1">jotm:jotm</td>
</tr>
<tr>
<td colspan="1">net.java.dev.jna:jna</td>
</tr>
<tr>
<td colspan="1">net.java.dev.jna:jna-platform</td>
</tr>
<tr>
<td colspan="1">net.logstash.log4j:jsonevent-layout</td>
</tr>
<tr>
<td colspan="1">net.minidev:json-smart</td>
</tr>
<tr>
<td colspan="1">net.oauth.core:oauth-consumer</td>
</tr>
<tr>
<td colspan="1">net.oauth.core:oauth-httpclient3</td>
</tr>
<tr>
<td colspan="1">net.openhft:chronicle-bom</td>
</tr>
<tr>
<td colspan="1">net.openhft:chronicle-threads</td>
</tr>
<tr>
<td colspan="1">net.sf.jtidy:jtidy</td>
</tr>
<tr>
<td colspan="1">net.sourceforge.jtds:jtds</td>
</tr>
<tr>
<td colspan="1">net.sourceforge.nekohtml:nekohtml</td>
</tr>
<tr>
<td colspan="1">org.apache.commons:commons-vfs2</td>
</tr>
<tr>
<td colspan="1">org.apache.directory.server:apacheds-core-shared</td>
</tr>
<tr>
<td colspan="1">org.apache.felix:org.apache.felix.framework</td>
</tr>
<tr>
<td colspan="1">org.apache.httpcomponents:fluent-hc</td>
</tr>
<tr>
<td colspan="1">org.apache.httpcomponents:httpclient-cache</td>
</tr>
<tr>
<td colspan="1">org.apache.kafka:kafka_2.12</td>
</tr>
<tr>
<td colspan="1">org.apache.lucene:lucene-analyzers-common</td>
</tr>
<tr>
<td colspan="1">org.apache.lucene:lucene-codecs</td>
</tr>
<tr>
<td colspan="1">org.apache.lucene:lucene-core</td>
</tr>
<tr>
<td colspan="1">org.apache.lucene:lucene-highlighter</td>
</tr>
<tr>
<td colspan="1">org.apache.lucene:lucene-join</td>
</tr>
<tr>
<td colspan="1">org.apache.lucene:lucene-queries</td>
</tr>
<tr>
<td colspan="1">org.apache.lucene:lucene-queryparser</td>
</tr>
<tr>
<td colspan="1">org.apache.lucene:lucene-memory</td>
</tr>
<tr>
<td colspan="1">org.apache.lucene:lucene-spatial</td>
</tr>
<tr>
<td colspan="1">org.apache.lucene:lucene-suggest</td>
</tr>
<tr>
<td colspan="1">org.apache.maven.plugins:maven-checkstyle-plugin</td>
</tr>
<tr>
<td colspan="1">org.apache.maven.plugins:maven-ejb-plugin</td>
</tr>
<tr>
<td colspan="1">org.apache.maven.plugins:maven-pmd-plugin</td>
</tr>
<tr>
<td colspan="1">org.apache.maven.plugins:maven-rar-plugin</td>
</tr>
<tr>
<td colspan="1">org.apache.maven.plugins:maven-release-plugin</td>
</tr>
<tr>
<td colspan="1">org.apache.shindig:shindig-common</td>
</tr>
<tr>
<td colspan="1">org.apache.shindig:shindig-features</td>
</tr>
<tr>
<td colspan="1">org.apache.shindig:shindig-gadgets</td>
</tr>
<tr>
<td colspan="1">org.apache.shindig:shindig-social-api</td>
</tr>
<tr>
<td colspan="1">org.apache.ws.commons.axiom:axiom-api</td>
</tr>
<tr>
<td colspan="1">org.apache.ws.commons.axiom:axiom-impl</td>
</tr>
<tr>
<td colspan="1">org.apache.xmlgraphics:batik-css</td>
</tr>
<tr>
<td colspan="1">org.apache.xmlgraphics:batik-util</td>
</tr>
<tr>
<td colspan="1">org.codehaus.mojo:cobertura-maven-plugin</td>
</tr>
<tr>
<td colspan="1">org.codehaus.mojo:jboss-packaging-maven-plugin</td>
</tr>
<tr>
<td colspan="1">org.codehaus.mojo:xml-maven-plugin</td>
</tr>
<tr>
<td colspan="1">org.codehaus.sonar-plugins:maven-report</td>
</tr>
<tr>
<td colspan="1">org.codelibs.elasticsearch.module:analysis-common</td>
</tr>
<tr>
<td colspan="1">org.dts:jmyspell-core</td>
</tr>
<tr>
<td colspan="1">org.easymock:easymockclassextension</td>
</tr>
<tr>
<td colspan="1">org.eclipse.m2e:lifecycle-mapping</td>
</tr>
<tr>
<td colspan="1">org.elasticsearch:elasticsearch</td>
</tr>
<tr>
<td colspan="1">org.elasticsearch.client:elasticsearch-rest-client</td>
</tr>
<tr>
<td colspan="1">org.elasticsearch.client:elasticsearch-rest-high-level-client</td>
</tr>
<tr>
<td colspan="1">org.elasticsearch.client:transport</td>
</tr>
<tr>
<td colspan="1">org.elasticsearch.plugin:transport-netty4-client</td>
</tr>
<tr>
<td colspan="1">org.fusesource.jansi:jansi</td>
</tr>
<tr>
<td colspan="1">org.glassfish:javax.json</td>
</tr>
<tr>
<td colspan="1">org.glassfish.embedded:glassfish-embedded-all</td>
</tr>
<tr>
<td colspan="1">org.hamcrest:hamcrest-all</td>
</tr>
<tr>
<td colspan="1">org.jacoco:jacoco-maven-plugin</td>
</tr>
<tr>
<td colspan="1">org.jboss:jboss-common-core</td>
</tr>
<tr>
<td colspan="1">org.jboss:jboss-vfs</td>
</tr>
<tr>
<td colspan="1">org.jboss.logging:jboss-logging-spi</td>
</tr>
<tr>
<td colspan="1">org.jboss.microcontainer:jboss-dependency</td>
</tr>
<tr>
<td colspan="1">org.jboss.microcontainer:jboss-kernel</td>
</tr>
<tr>
<td colspan="1">org.jboss.naming:jnp-client</td>
</tr>
<tr>
<td colspan="1">org.jboss.remoting:jboss-remoting</td>
</tr>
<tr>
<td colspan="1">org.jboss.security:jbosssx</td>
</tr>
<tr>
<td colspan="1">org.jolokia:jolokia-core</td>
</tr>
<tr>
<td colspan="1">org.jsecurity:jsecurity</td>
</tr>
<tr>
<td colspan="1">org.jvnet.maven-antrun-extended-plugin:maven-antrun-extended-plugin</td>
</tr>
<tr>
<td colspan="1">org.jvnet.staxex:stax-ex</td>
</tr>
<tr>
<td colspan="1">org.knallgrau.utils:textcat</td>
</tr>
<tr>
<td colspan="1">org.objectweb.howl:howl</td>
</tr>
<tr>
<td colspan="1">org.opensaml:openws</td>
</tr>
<tr>
<td colspan="1">org.seleniumhq.selenium:selenium-java</td>
</tr>
<tr>
<td colspan="1">org.sonarsource.scanner.maven:sonar-maven-plugin</td>
</tr>
<tr>
<td colspan="1">org.tukaani:xz</td>
</tr>
<tr>
<td colspan="1">oro:oro</td>
</tr>
<tr>
<td colspan="1">ro.isdc.wro4j:wro4j-extensions</td>
</tr>
<tr>
<td colspan="1">rome:rome</td>
</tr>
</tbody>
</table>
</div>

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31492](https://jira.nuxeo.com/browse/NXP-31492)

## Complementary Information

- [Release notes for Nuxeo Platform LTS 2023]({{page version='' space='nxdoc' page='nuxeo-server-release-notes'}})
