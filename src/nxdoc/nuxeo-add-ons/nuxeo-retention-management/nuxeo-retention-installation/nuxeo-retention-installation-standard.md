---
title: Standard Mode
description: Learn how to install and configure the Nuxeo Retention addon in standard mode.
review:
    comment: ''
    date: '2023-09-11'
    status: 'ok'
labels:
    - grenard
    - bchauvin
    - retention-management
toc: true
tree_item_index: 950
---

## Before You Start

This page gives all the necessary steps to install the Retention Management addon in [standard mode]({{page page='nuxeo-retention-installation'}}#standard-mode-specificities).

## Prerequisites

{{{multiexcerpt 'storage-support' page='nuxeo-retention-installation'}}}

## Installation

{{{multiexcerpt 'MP-installation-easy' space='nxdoc' page='Generic Multi-Excerpts'}}}

## Configuration

### Setting the Addon in Standard Mode
Setting the addon in standard mode is done through the following [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}) property:
```
nuxeo.retention.strictmode.enabled=false
```

{{#> callout type='info'}}
Since LTS 2021 HF41, this property replaces and supersedes the property `nuxeo.retention.compliance.enabled`: if both are set, the value of `nuxeo.retention.strictmode.enabled` will be used.
{{/callout}}

### {{> anchor 'standard-arch'}} Architecture Options

In Standard mode, there are 3 supported configurations using Amazon S3:
- Storing records in a dedicated bucket with Object Lock (recommended)
- Storing records in a dedicated bucket without Object Lock
- Storing records in the same bucket as other documents

### Recommended Architecture

Our recommendation is to have a dedicated bucket for records. This option provides greater flexibility in the long run, and facilitates demonstrating compliance. 

Depending on your compliance needs, the dedicated bucket can leverage Amazon S3 Object Lock or Google Storage Object Retention in governance mode, or in compliance mode to provide compliance with the SEC-17A4 regulation.

{{#> callout type='info'}}
Activating AWS S3 Object Lock or Google Storage Object Retention and choosing a mode for it must be done during the creation of the bucket. Please consider your needs and the regulations you will be subject to before installing and configuring the addon.
{{/callout}}

[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;Storing records in a dedicated S3 bucket](#s3-2-buckets)<br/>
[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;Storing records in a dedicated Google Storage bucket](#gcp-2-buckets)

{{> anchor 's3-2-buckets'}}
#### Storing Records in a Dedicated S3 Bucket

Storing records in a dedicated S3 bucket can be done with XML contribution, or via the `nuxeo.conf` configuration file.

##### Configure via XML Contribution

Configure the standard S3 bucket as described in [Amazon S3 Online Storage](https://connect.nuxeo.com/nuxeo/site/marketplace/package/amazon-s3-online-storage). Once complete, add an XML extension file to configure the bucket that will be used for records:
- The file has to be added to `$NUXEO_HOME/nxserver/config`
- The file name has to be ended with `-config.xml`
- The file must contain the following `component name`:

```xml
<component name="records-s3-compliance">
```
- The file must contain a blob manager contribution with the following parameters:

```xml
<extension target="org.nuxeo.ecm.core.blob.BlobManager" point="configuration">
    <blobprovider name="records">
      <class>org.nuxeo.ecm.blob.s3.S3BlobProvider</class>
      <property name="record">true</property>
```
- The file must contain a blob dispatcher contribution as shown here:

```xml
<extension target="org.nuxeo.ecm.core.blob.DocumentBlobManager" point="configuration">
    <blobdispatcher>
      <class>org.nuxeo.ecm.core.blob.DefaultBlobDispatcher</class>
      <property name="records">records</property>
      <property name="default">default</property>
    </blobdispatcher>
</extension>
```

{{#> callout type='warning'}}
This configuration is only applicable when using the Retention addon with a dedicated S3 bucket for the records.

If you want to configure your instance with a single bucket and NO support for Object Lock now or in the future, please refer to the [single bucket architecture](#one-bucket-configuration).
{{/callout}}

Here is the complete XML extension file example:
```xml
<?xml version="1.0"?>
<component name="records-s3-compliance">

  <require>default-repository-config</require>

  <extension target="org.nuxeo.ecm.core.blob.BlobManager" point="configuration">
    <blobprovider name="records">
      <class>org.nuxeo.ecm.blob.s3.S3BlobProvider</class>
      <property name="record">true</property>
      <property name="awsid">${nuxeo.s3storage.awsid}</property>
      <property name="awssecret">${nuxeo.s3storage.awssecret}</property>
      <property name="awstoken">${nuxeo.s3storage.awstoken}</property>
      <property name="bucket">Your S3 bucket for records</property>
      <property name="region">${nuxeo.s3storage.region}</property>
      <property name="endpoint">${nuxeo.s3storage.endpoint}</property>
      <property name="pathstyleaccess">${nuxeo.s3storage.pathstyleaccess}</property>
      <property name="accelerateMode">${nuxeo.s3storage.accelerateMode}</property>
      <!-- always define a prefix different than the default blob provider one in the case you use the same bucket -->
      <property name="bucket_prefix">Prefix for your S3 bucket for records</property>
      <!-- min file age, in second, to be removed from cache if the size max size is reached, default is 3600 -->
      <property name="cacheminage">60</property>
      <property name="cachesize">100MB</property>
      <property name="connection.max">50</property>
      <property name="connection.retry">3</property>
      <property name="connection.timeout">50000</property>
      <property name="socket.timeout">50000</property>
    </blobprovider>
  </extension>

  <extension target="org.nuxeo.ecm.core.blob.DocumentBlobManager" point="configuration">
    <blobdispatcher>
      <class>org.nuxeo.ecm.core.blob.DefaultBlobDispatcher</class>
      <property name="records">records</property>
      <property name="default">default</property>
    </blobdispatcher>
  </extension>
</component>
```

##### Configure via `nuxeo.conf`

Add the `s3retention` template to the `nuxeo.templates` property in the [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}) file:
```
nuxeo.templates=default,s3binaries,retention,s3retention
```

This will enable the [s3-retention-config.xml](https://github.com/nuxeo/nuxeo-retention/blob/lts-2021/nuxeo-retention-package/src/main/resources/install/templates/s3retention/nxserver/config/s3-retention-config.xml.nxftl) config, which enables the following properties for [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}):
  - `nuxeo.retention.s3storage.bucket`</br>
    (required)
  - `nuxeo.retention.s3storage.bucket_prefix`</br>
    (required, always define a prefix different than the default blob provider one in the case you use the same bucket)
  - `nuxeo.retention.s3storage.awsid`</br>
    (fallback to `nuxeo.s3storage.awsid`)
  - `nuxeo.retention.s3storage.awssecret`</br>
    (fallback to `nuxeo.s3storage.awssecret`)
  - `nuxeo.retention.s3storage.awstoken`</br>
    (fallback to `nuxeo.s3storage.awstoken`)
  - `nuxeo.retention.s3storage.region`</br>
    (fallback to `nuxeo.s3storage.region`)
  - `nuxeo.retention.core.blobstore.digestAsync`</br>
    (fallback to `nuxeo.core.blobstore.digestAsync`)
  - `nuxeo.retention.s3storage.cacheminage`</br>
    (fallback to `nuxeo.s3storage.cacheminage`)
  - `nuxeo.retention.s3storage.cachesize`</br>
    (fallback to `nuxeo.s3storage.cachesize`)
  - `nuxeo.retention.s3storage.cachecount`</br>
    (fallback to `nuxeo.s3storage.cachecount`)
  - `nuxeo.retention.s3storage.connection.max`</br>
    (fallback to `nuxeo.s3storage.connection.max`)
  - `nuxeo.retention.s3storage.connection.retry`</br>
    (fallback to `nuxeo.s3storage.connection.retry`)
  - `nuxeo.retention.s3storage.connection.timeout` </br>
    (fallback to `nuxeo.s3storage.connection.timeout`)
  - `nuxeo.retention.s3storage.socket.timeout` </br>
    (fallback to `nuxeo.s3storage.socket.timeout`)
  - `nuxeo.retention.s3storage.endpoint`</br>
    (fallback to `nuxeo.s3storage.endpoint`)
  - `nuxeo.retention.s3storage.pathstyleaccess`</br>
    (fallback to `nuxeo.s3storage.pathstyleaccess`)
  - `nuxeo.retention.s3storage.accelerateMode`</br>
    (fallback to `nuxeo.s3storage.accelerateMode`)

##### Optionally activate S3 Object Lock

[Amazon S3 Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html) prevents the deletion of content under retention until the retention period has expired. Nuxeo Retention, when configured to use Amazon S3 Object Lock, automatically provides the retention period (or legal hold) to Amazon S3.

Configure the record bucket as follows:

- Direct writes to the Amazon S3 storage system must be disabled; this is to ensure that all documents pass through Nuxeo Platform for compliant processing.

- The Amazon S3 Object Lock feature must be enabled on the record bucket. If you intend to be compliant with SEC-17A4, you must use Object Lock in Compliance mode.

- Amazon S3 Versioning must be enabled; this is automatically done when enabling Object Lock.

- The default retention value for the record bucket must not be set (or, at least, set to zero).

- No min/max range should be established for the record bucket.

- Amazon S3 Lifecycle Policies must not be configured for use within the Nuxeo Platform storage subsystem.

{{> anchor 'gcp-2-buckets'}}
#### Storing Records in a Dedicated Google Storage Bucket

Storing records in a dedicated Google Storage bucket can simply be done via the `nuxeo.conf` configuration file after having installed the [Google Storage Addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/google-storage).

Add the `gcpretention` template to the `nuxeo.templates` property in the [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}) file:
```
nuxeo.templates=default,gcpbinaries,retention,gcpretention
```

This will activate the [gcp-retention-config.xml](https://github.com/nuxeo/nuxeo-retention/blob/lts-2025/nuxeo-retention-package/src/main/resources/install/templates/gcpretention/nxserver/config/gcp-retention-config.xml.nxftl) template, which enables the following properties for [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}):
  - `nuxeo.gcp.retention.storage.bucket`</br>
    (required)
  - `nuxeo.gcp.retention.storage.bucket_prefix`</br>
    (required, always define a prefix different than the default blob provider one in the case you use the same bucket)
  - `nuxeo.gcp.retention.project`</br>
    (fallback to `nuxeo.gcp.project`)
  - `nuxeo.gcp.retention.credentials`</br>
    (fallback to `nuxeo.gcp.credentials`)

{{> anchor 'gcp-2-buckets-enable-retention'}}
##### Optionally activate Google Storage Object Retention

[Google Storage Object Retention](https://cloud.google.com/storage/docs/object-lock) prevents the deletion of content under retention until the retention period has expired. Nuxeo Retention, when configured to use Google Storage Object Retention automatically provides the retention period (or legal hold) to Google Storage.

Configure the record bucket as follows:

- The Google Storage Object Retention feature must be enabled on the record bucket.

- Google Storage Object Versioning must be enabled; this is automatically done when enabling Object Lock.

- Do not define any "Bucket retention policy", it is the Nuxeo server that will explicitly set the retention period for the objects stored in this bucket.

{{> anchor 'one-bucket-configuration'}}
#### Storing Records in the Same Bucket as Other Documents (Alternative Option)

Records can also be stored in the same bucket as the rest of the content. This provides a simpler architecture, but restricts the possibility to adapt to more complex scenarios in the long run.

This configuration does NOT allow using the [Amazon S3 Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html) nor [Google Storage Object Retention](https://cloud.google.com/storage/docs/object-lock) feature (no WORM storage option).

{{#> callout type='warning'}}
Always store both regular and record blobs in different locations by using distinct prefix in your S3 bucket. Otherwise, this will result in a shared storage configuration that will prevent the [Orphaned Blobs GC]({{page page='garbage-collecting-orphaned-blobs'}}) from running efficiently.
{{/callout}}
