---
title: Standard Mode
description: Learn how to install and configure the Nuxeo Retention addon in the standard mode.
review:
    comment: ''
    date: '2019-08-05'
    status: 'ok'
labels:
    - lts2019-wip
    - grenard
    - jaubenque
    - retention-management
toc: true
tree_item_index: 1000
---

## Before You Start

This page gives all the necessary steps to install the Retention Management addon with the [Standard mode]({{page page='nuxeo-retention-management'}}#configuration-modes).

## Prerequisites

You can use all the [file storages]({{page page='file-storage'}}) supported by Nuxeo Platform.

## Installation

{{{multiexcerpt 'MP-installation-easy' space='nxdoc' page='Generic Multi-Excerpts'}}}

## Configuration

### {{> anchor 'standard-amazon-s3'}} Amazon S3

In Standard mode, there are 3 supported configurations with Amazon S3:

- Records are stored in the same S3 bucket than the standard documents.</br>
  [<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More info](#s3-one-bucket-configuration)
- Records are stored in a dedicated S3 bucket.</br>
  [<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More info](#s3-2-buckets-configuration)
- Records are stored in a dedicated S3 bucket, with [**Amazon S3 Object Lock**](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html).</br>
  [<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More info](#s3-one-bucket-object-lock)

#### {{> anchor 's3-one-bucket-configuration'}} Store Records in the Same Bucket as Other Documents

This configuration consists on using the same S3 bucket for records and other documents.

In this case, you can use the Amazon S3 addon with the [default configuration]({{page page='amazon-s3-online-storage'}}) with the Retention addon.

This configuration does not allow using the [Amazon S3 Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html) feature.

{{#> callout type='warning'}}
This configuration is only compliant with the binary manager `org.nuxeo.ecm.core.storage.sql.S3BinaryManager`.

The following property is required in the `nuxeo.conf` configuration file:
```
nuxeo.core.binarymanager=org.nuxeo.ecm.core.storage.sql.S3BinaryManager
```
{{/callout}}

#### {{> anchor 's3-2-buckets-configuration'}} Store Records in a Dedicated S3 Bucket

It is possible to configure an additional S3 bucket dedicated to storing records. This can be configured using an XML contribution, or via the `nuxeo.conf` configuration file.

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

If you want to configure your instance with only 1 bucket, and NO object lock, please refer to the [previous chapter](#s3-one-bucket-configuration).
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
    (optional)
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


#### {{> anchor 's3-one-bucket-object-lock'}} Store Records in a Dedicated S3 Bucket With S3 Object Lock In Governance Mode

[Amazon S3 Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html) prevents the deletion of content under retention until the retention period has expired. Nuxeo Retention, when configured to use Amazon S3 Object Lock, automatically provides the retention period (or legal hold) to Amazon S3.

{{#> callout type='warning'}}
Because Nuxeo Retention provides the ability to [delete a document under retention]({{page page='nuxeo-retention-functional-overview'}}#delete-document-under-retention), the addon in standard mode supports [Amazon S3 Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html) only in Governance mode.
{{/callout}}

To configure the Retention addon with a dedicated S3 bucket with Object lock, first follow the steps described in the  [previous section](#s3-2-buckets-configuration). Next configure the record bucket as follows:

- Direct writes to the Amazon S3 storage system must be disabled; this is to ensure that all documents pass through Nuxeo Platform for compliant processing.

- The Amazon S3 Object Lock feature must be enabled in Governance Mode on the record bucket.

- Amazon S3 Versioning must be enabled; this is automatically done when enabling Object lock.

- The default retention value for the record bucket must not be set (or, at least, set to zero).

- No Min/Max range should be established for record bucket.

- Amazon S3 Lifecycle Policies must not be configured for use within the Nuxeo Platform storage subsystem.
