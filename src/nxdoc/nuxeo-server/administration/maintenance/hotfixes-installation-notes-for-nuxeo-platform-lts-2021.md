---
title: Hotfixes Installation Notes
review:
    comment: ''
    date: '2020-12-14'
    status: ok
labels:
    - lts2017-ok
    - multiexcerpt-include
toc: true
tree_item_index: 1200
version_override:
    LTS 2019: 1010/nxdoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2019
    LTS 2017: 910/nxdoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2017
    LTS 2016: 810/nxdoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2016
    LTS 2015: 710/admindoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2015
    '6.0': 60/admindoc/hotfixes-installation-notes-for-nuxeo-platform-60
---

The purpose of this page is to describe the additional actions that need to be done when installing the hotfixes on Nuxeo Platform and that cannot be done automatically. The page provides an exhaustive list of manipulations for the installation of Nuxeo Platform LTS 2021 hotfixes, but you need only to apply those relevant for your own instance.

{{{multiexcerpt 'intro_hotfix' page='ADMINDOC710:Hotfixes Installation Notes for Nuxeo Platform LTS 2015'}}}

{{#> callout type='warning' }}
While installing hotfixes, you will see the following message, but you can ignore it and continue.
```
Use of the <copy /> command on JAR files is not recommended, prefer using <update /> command to ensure a safe rollback. (nuxeo-launcher-9.10-HF01-jar-with-dependencies.jar)
```
{{/callout}}

Since LTS 2021, the addon "Nuxeo JSF UI" is handled outside the main Nuxeo repository on GitHub. As a consequence, the related fixes for JSF UI will not be embedded in a hotfix.</br>
Therefore if the addon "Nuxeo JSF UI" is installed on your instance, you must upgrade this package after installing a hotfix by running the following command:

```
> nuxeoctl mp-upgrade
```
Note that this command will upgrade the versions of any package.

## Instance Registration

Hotfixes released for LTS 2021 can only be used on valid, registered Nuxeo instances.

**Why?** </br>
If you are using an *unregistered LTS 2021 Nuxeo instance with hotfixes installed*, you may encounter the following behavior:
- A warning will be displayed in the logs during startup,

```
ERROR [RuntimeService] NUXEO INSTANCE NOT REGISTERED

***** This Nuxeo instance is not registered *****
It can only be used for development and will be stopped if used in production
```
- Over a certain level of use the server will be stopped automatically. When this happens, a message is displayed in the logs to inform you as well.

```
ERROR [RuntimeService] NUXEO INSTANCE STOPPING

***** This Nuxeo instance is not registered *****
Stopping Nuxeo instance due to threshold exceeded (TOTAL_COMMITS > 100000) after failed registration checks
```
The current limits of use are:
- 100,000 transaction commits
- 10 concurrent sessions (a session correspond to an access to the core)

If the expiration date is close (less than 15 days), a warning will be displayed and indicate how many days are left before expiration.
In the JSF UI, a message based on the Administrative message mechanism will be displayed: all users will be informed.

After expiration date, the following message will be displayed in the logs at startup:
```
ERROR [RuntimeService] NUXEO INSTANCE REGISTRATION EXPIRED

***** This Nuxeo instance registration is expired *****
It can only be used for development and will be stopped if used in production
```

The following message will be displayed in the logs when Nuxeo will be stopped automatically according to the same conditions as described earlier:
```
ERROR [RuntimeService] NUXEO INSTANCE STOPPING

***** This Nuxeo instance registration is expired *****
Stopping Nuxeo instance due to threshold exceeded (TOTAL_COMMITS > 100000) after registration expiration
```

**How Can I Avoid This?** </br>

Make sure to [register your Nuxeo instance]({{page version='810' space='nxdoc' page='registering-your-nuxeo-instance'}}): this can be done both for online and offline instances.

**Could it Break My CI Chain? Do I Need to Register My Test Instances?** </br>

The level of use needed  to stop an *unregistered instance with hotfixes* has been tuned to prevent any problems with CI chain tests. It would be possible to run the full test suite of Nuxeo server (both unit tests AND integration tests) several times before anything would happen.

Nevertheless, it is recommended to register your test instances, especially if you wish to test features that require heavy usage (e.g. load testing or mass import).

**How Often Do I Need to Register My Instance?** </br>

{{#> callout type='warning' }}
Registration tokens are valid until your current contract's expiration date. When renewing your Nuxeo Online Services subscription, you should register your instances again.
{{/callout}}

**I Have More Questions, Who Can I Ask For Help?** </br>

If you have any questions, feel free to contact our support team via a dedicated support ticket.


## Hotfix 29

## Hotfix 25

### Avoid Transaction Timeout During Emails Check

To avoid transaction timeout there is a new limit in the number of mail that can be fetched per mailbox, the default limit is 2000 mails, this can be configured with `nuxeo.conf` option:
```Java
org.nuxeo.mail.message.limit=2000
```
Note that there is a warning in the log when the limit is reached.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31163](https://jira.nuxeo.com/browse/NXP-31163)

### Unable to Detect Mimetype When Uploading Multipart Form Data

`multipart/form-data` upload is not supported and will be rejected. (400 Bad Request)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31123](https://jira.nuxeo.com/browse/NXP-31123)

## Hotfix 23

### Upgrade Various Dependencies to Fix CVE

Upgrade to netty 4.1.78.Final and jackson-databind 2.9.10.8 to fix CVE.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30979](https://jira.nuxeo.com/browse/NXP-30979)

## Hotfix 22

### Route Long Indexing Command to the Bulk Service Keeping WM Indexing Near Realtime

Use `elasticsearch.index.recursive.bulkService=true` in `nuxeo.conf` to activate the routing of long indexing command to the bulk service.
In cluster mode, It is recommended to use the option when the bulk service is distributed (i.e. Kafka is enabled).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30805](https://jira.nuxeo.com/browse/NXP-30805)

## Hotfix 21

### Tune the CMIS Query During Login to Get Platform Information

The `latestChangeLogToken` returned by the CMIS endpoint is now searched on events of the past 2 weeks for performance reason.
This limit can be tuned if needed using the following `nuxeo.conf` option:
```
# Improve performance on getLatestLogId limiting events to the past 2 weeks, using elastic date syntax
audit.elasticsearch.latestLogId.afterDate=now-14d/d
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31016](https://jira.nuxeo.com/browse/NXP-31016)

### Have a Way to Trace Full-text Search Performed on Repository

It is now possible to detect if repository full-text search is used by configuring `log4j2` to activate the following logger:
```
  <Logger name=org.nuxeo.ecm.core.storage.mongodb.MongoDBRepositoryQueryBuilder level=debug />
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31003](https://jira.nuxeo.com/browse/NXP-31003)

## Hotfix 19

### Use Elastic `word_delimiter_graph` instead of `word_delimiter` to Avoid Indexing Error

If you encounter indexing errors because of negative startOffset, your mapping needs to be updated.

If you have overridden the Elastic mapping then follow the recommended changes in the ticket.
Then you need to reindex the repository,  visit the [related documentation]({{page page='elasticsearch-setup'}}#rebuilding-the-repository-index) for more information.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30785](https://jira.nuxeo.com/browse/NXP-30785)

## Hotfix 17

### Add property to set max_expansion on match_phrase_prefix operator

Max expansions can be configured through the Configuration service with a contribution like
```xml
    <extension target=org.nuxeo.runtime.ConfigurationService point=configuration>
        <property name=elasticsearch.max_expansions>200</property>
    </extension>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30878](https://jira.nuxeo.com/browse/NXP-30878)

### Improve KV TransientStore GC Resiliency

Transient GC was not working in environments with segregated front and worker nodes.
As the result, transient stores in s3 might have accumulated lots of data and the current transient GC implementation might not be able to clean them efficiently.
In this case, it is recommended to purge manually all objects older than 3 days on transient stores before applying this hotfix.

This can be done using scripts or by creating an Object Lifecycle Management rule with a correct prefix `/transient_*/`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30851](https://jira.nuxeo.com/browse/NXP-30851)

### Allow Automation Contributions to be Disabled

When replacing an Automation operation, chain or script, its old aliases are lost.
If you contribute to an operation and want to call it by an alias, you need to copy that alias on the new operation contribution or to use the ID of the operation rather than an alias.

**OperationType**
(Please note you can't cross contribute to an OperationType implementation, a chain operation can't disable a scripted operation for example)

`ChainOperationType`:
```
<component name="org.nuxeo.ecm.automation.test-chain-operation" version="1.0">
  <extension target="org.nuxeo.ecm.core.operation.OperationServiceComponent" point="chains">
    <chain id="testScript" enabled="false" />
  </extension>
</component>
```

`ScriptingOperationType`:
```
<component name="org.nuxeo.ecm.automation.test-scripted-operation-disable" version="1.0">
  <require>org.nuxeo.ecm.automation.test-scripted-operation</require>
  <extension target="org.nuxeo.automation.scripting.internals.AutomationScriptingComponent" point="operation">
    <scriptedOperation id="testScript" enabled="false"/>
  </extension>
</component>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30761](https://jira.nuxeo.com/browse/NXP-30761)

## Hotfix 15

### Use partialFilterExpression on parentId When Creating the Unique Index to Avoid Duplicates

You MUST run the command below in a MongoDB Shell (assuming you're connected to the nuxeo database and your repository is default):

```
db.default.dropIndex("ecm:parentId_1_ecm:name_1");
```

As a workaround, you can configure the `nuxeo.db.indexes.create` property to false in nuxeo.conf.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30638](https://jira.nuxeo.com/browse/NXP-30638)


### setUserAgentPrefix in S3 Config

The following `nuxeo.conf` properties have been added:

- `nuxeo.s3storage.user.agent.prefix`, empty string by default
- `nuxeo.s3storage.user.agent.suffix`, empty string by default

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30797](https://jira.nuxeo.com/browse/NXP-30797)


## Hotfix 13

### Remove the Assignment to the ZIP Extra Field to Produce Correct ZIP

You can now disable the extra field setting when doing Nuxeo IO export by contributing the following:

```Java
  <extension target=org.nuxeo.runtime.ConfigurationService point=configuration>
    <property name=nuxeo.core.io.archive.extra.files.count>false</property>
  </extension>
```

This could be interesting if you want to open the produced archive with external tools such as Archive Utility.app.

This property has `true` as default as disabling this behavior may impact performance when re-importing to Nuxeo the archive.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30713](https://jira.nuxeo.com/browse/NXP-30713)

### Bulk SetPropertiesAction - VersioningOption Parameter Does Not Take Effect When Versioning Service Is Extended via XML Extension

As documented in the [automatic versioning system]({{page space='nxdoc' page='versioning'}}#source-based-versioning), the versioning policy order should be higher than `10`, order lower than 10 is reserved for internal purposes.
This restriction is now enforced on LTS 2021, a server having a versioning policy contribution that doesn't respect this rule will **NOT** start.
On LTS 2019, an ERROR message will be logged during Nuxeo startup.

In addition to disable the automatic versioning system for `setProperties` action, we also have disabled the system for the following system related updates:
- add/remove a document to/from a collection
- recompute pictureViews
- add/remove notifications subscriptions
- add/remove tags
- update quotas
- recompute thumbnails
- recompute transcodedVideos
- recompute videoInfos

In a more general way, the system has been disabled in the code paths where auto checkout was disabled.
This can impact positively performance by avoiding version creation on the above low-level updates.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30700](https://jira.nuxeo.com/browse/NXP-30700)

## Hotfix 11

### S3 Transfer Parameters Configurable

All the S3 multipart upload and copy parameters are configurable through nuxeo.conf.</br>

The `nuxeo.s3.multipart.copy.part.size` ConfigurationService property, formerly contributed in `configuration-properties.xml`, is deprecated since **2021.11/10.10-HF54**.

The new `nuxeo.s3storage.multipart.copy.part.size` `nuxeo.conf` property should be used instead, default value hasn't changed: 5242880 (5 MB).

If you have contributed a custom `nuxeo.s3.multipart.copy.part.size` ConfigurationService property with an XML component such as:
```
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="nuxeo.s3.multipart.copy.part.size">xxxx</property>
  </extension>
```
you need to remove it and replace it by `nuxeo.s3storage.multipart.copy.part.size=xxxx` in `nuxeo.conf`. Though, backward compatibility is kept.

The following `nuxeo.conf` properties have been added:

- `nuxeo.s3storage.multipart.copy.threshold`, default value: 5368709120 (5 GB)
- `nuxeo.s3storage.multipart.upload.threshold`, default value: 16777216 (16 MB)
- `nuxeo.s3storage.minimum.upload.part.size`, default value: 5242880 (5 MB)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30595](https://jira.nuxeo.com/browse/NXP-30595)

### Deletion BAF Action Now Runs With `SYSTEM_USERNAME`

`org.nuxeo.ecm.core.storage.dbs.DBSSession#remove` launches the `DeletionAction` BAF action to perform the db deletion of descendants of a folderish document being removed.

The problem is that we pass the current session's principal to run the action which will just skip the deletion of the document on which the current user does not have READ permission granted.

To fix that, we now run the `DeletionAction` as `SYSTEM_USER`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30661](https://jira.nuxeo.com/browse/NXP-30661)

### Upgrade to Apache PDFBox 2.0.24

The upgrade of Apache PDFBox from 1.8.16 to 2.0.24 introduces breaking changes to the library, code relying on it must be updated.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA tickets [NXP-28825](https://jira.nuxeo.com/browse/NXP-28825) and [NXP-30662](https://jira.nuxeo.com/browse/NXP-30662)

## Hotfix 10

### Nuxeo Workflow Now Supports 2 Parallel Tasks Completed at the Same Time by 2 Different Users

A warning is logged when assigning an unauthorized workflow global variable instead of throwing an exception.

Assigning an unauthorized workflow global variable won't throw an exception anymore but log a warning. The assignment is ignored.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30589](https://jira.nuxeo.com/browse/NXP-30589)

### Web UI - `nuxeo-document-preview` Should Not Load `nuxeo-pdf-viewer` For Unsupported MIME Types {{> tag 'Since 2021.10'}}

Web UI does not display anymore a preview for unsupported MIME types.

PDF rendition is no longer listed in available renditions when no converter is found for a document's main blob given MIME type.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30643](https://jira.nuxeo.com/browse/NXP-30643)


