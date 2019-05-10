---
title: Hotfixes Installation Notes for Nuxeo Platform LTS 2019
review:
    comment: ''
    date: '2019-01-28'
    status: ok
labels:
    - lts2017-ok
    - multiexcerpt-include
toc: true
tree_item_index: 1200
version_override:
    LTS 2017: 910/nxdoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2017
    LTS 2016: 810/nxdoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2016
    LTS 2015: 710/admindoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2015
    '6.0': 60/admindoc/hotfixes-installation-notes-for-nuxeo-platform-60
---

The purpose of this page is to describe the additional actions that need to be done when installing the hotfixes on Nuxeo Platform and that cannot be done automatically. The page provides an exhaustive list of manipulations for the installation of Nuxeo Platform LTS 2019 hotfixes, but you need only to apply those relevant for your own instance.

{{{multiexcerpt 'intro_hotfix' page='ADMINDOC710:Hotfixes Installation Notes for Nuxeo Platform LTS 2015'}}}

{{#> callout type='warning' }}
While installing hotfixes, you will see the following message, but you can ignore it and continue.  
```
Use of the <copy /> command on JAR files is not recommended, prefer using <update /> command to ensure a safe rollback. (nuxeo-launcher-9.10-HF01-jar-with-dependencies.jar)
```
{{/callout}}

## Instance Registration

Hotfixes released for LTS 2019 can only be used on valid, registered Nuxeo instances.

**Why?** </br>
If you are using an *unregistered LTS 2019 Nuxeo instance with hotfixes installed*, you may encounter the following behavior:
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

## Hotfix 06

### Large ACLs with SQL Server

On SQL Server it's now possible to configure VCS to use an increased size to stored the Read ACLs optimization tables, which may be necessary if users belong to many groups (total size of group names + the user name + "Everyone" > 4000 characters).
```
nuxeo.vcs.optimizations.acl.maxsize=999999
```
Any value > 4000 will make SQL Server use NVARCHAR(MAX) instead of NVARCHAR(4000) for its internal datastructures.

On PostgreSQL this feature already existed (default to 4096) but was not easily configurable, the same configuration property can be used to increase the value. The specific value requested will be used (there is no notion of MAX).

Note that the use of a new value will only happen when the optimization tables are created, which can be done on a stopped server by running:
```
DROP TABLE aclr;
DROP TABLE aclr_user;
-- on SQL Server:
EXEC nx_rebuild_read_acls;
-- on PostgreSQL:
SELECT nx_rebuild_read_acls();
```

## Hotfix 05

### StreamWorkManager Configuration

It is now possible to use the StreamWorkManager implementation with large works that exceed 1MB when serialized. The value is stored outside of the stream, in an external storage. For now the possible storages are the KeyValue store and the Transient store.

Here are the `nuxeo.conf` options to use to activate this feature for the StreamWorkManager:
```
# Filter big work to be stored outside of the stream
nuxeo.stream.work.computation.filter.enabled=true
# Above this threshold in bytes the record value is stored outside of the stream
nuxeo.stream.work.computation.filter.thresholdSize=1000000
nuxeo.stream.work.computation.filter.class=org.nuxeo.ecm.core.transientstore.computation.TransientStoreOverflowRecordFilter
nuxeo.stream.work.computation.filter.storeName=default
nuxeo.stream.work.computation.filter.storeKeyPrefix=bigRecord:
# An alternative storage using the KeyValue store
#nuxeo.stream.work.computation.filter.class=org.nuxeo.ecm.core.work.KeyValueStoreOverflowRecordFilter # TTL is only taken in account with the KV impl, for TS impl you need to configure TS garbage collector
#nuxeo.stream.work.computation.filter.storeTTL=4d
```
When using the TransientStore its TTL (firstLevelTTL) need to be adapted so the record value is not garbage collected before the work has been processed.
The `nuxeo.stream.work.computation.filter.storeTTL` option which is used by the KeyValue store implementation can be expressed using a duration string like "48h" or "4d".

Note also that this ability of using an external storage for large record value is not tied to the StreamWorkManager and can be used in any StreamProcessor.

### Quota Computation on Versioning

The behavior of quota computation and check has changed for versioning.
Now we compute and check the quotas on the `aboutToCheckIn` event instead of computing the quotas on the `documentCheckedIn` one and checking the quotas on the `documentCheckedOut` one.

This behavior is disabled by default and can be enabled by overriding the `nuxeo.quota.size.check.on.aboutToCheckIn` property:
```
  <require>org.nuxeo.ecm.quota.contrib</require>

  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="nuxeo.quota.size.check.on.aboutToCheckIn">true</property>
  </extension>
```

## Hotfix 04

### Binary store configuration

A new property `nuxeo.binarystores.root` is now available, and its use is recommended over the now-deprecated `repository.binary.store`. The old `repository.binary.store` is equivalent to `${nuxeo.binarystores.root}/binaries`.

### Orphan Version Cleanup

The orphan versions cleanup is now disabled by default, and can be re-enabled (if its performance is acceptable) with the following contribution:
```
  <require>org.nuxeo.ecm.core.orphanVersionsCleanup</require>
  <extension point="listener" target="org.nuxeo.ecm.core.event.EventServiceComponent">
    <listener name="orphanVersionsCleanup" enabled="true" />
  </extension>
```

## Hotfix 02

### Multiple AWS Configuration

AWS configuration can now specify an id with:
```
  <extension target="org.nuxeo.runtime.aws.AWSConfigurationService" point="configuration">
    <configuration id="myconfig">
      <accessKeyId>MY_ACCESS_KEY_ID</accessKeyId>
      <secretKey>MY_SECRET_KEY</secretKey>
      <region>MY_REGION</region>
    </configuration>
  </extension>
```
If the id is not specified, default is used.

To get to this configuration, you can use:
```
new NuxeoAWSCredentialsProvider(id)
new NuxeoAWSRegionProvider(id).getRegion()
```

{{#> callout type='note' }}
If the configuration is not found, the providers will still fall back on the default AWS SDK behavior to look in the OS environment, Java system properties, AWS profile or EC2 container credentials (which don't take into account any configuration id).
{{/callout}}

### S3 Server-side Encryption

S3 copy (used during direct upload in particular) now correctly takes into account the server-side encryption configuration for the destination bucket.

For direct upload, the following property is required:
```
nuxeo.s3storage.transient.crypt.serverside=true
```

### S3 Multipart Part Size

There is a new configuration property `nuxeo.s3.multipart.copy.part.size` to change the S3 multipart copy part size. The default is `5242880` (5MB).</br>

It can be changed with:
```
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="nuxeo.s3.multipart.copy.part.size">5242880</property>
  </extension>
```
