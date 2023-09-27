---
title: Strict Mode
description: Learn how to install and configure the Nuxeo Retention addon in strict mode (formerly known as compliance mode).
review:
    comment: ''
    date: '2023-09-05'
    status: 'ok'
labels:
    - grenard
    - bchauvin
    - retention-management
toc: true
tree_item_index: 1000
---

This page gives all the necessary steps to install the Retention Management addon in [strict mode]({{page page='nuxeo-retention-installation'}}#strict-formerly-known-as-compliance-mode-specificities).

## Prerequisites

{{{multiexcerpt 'storage-support' page='nuxeo-retention-installation'}}}

## Installation

{{{multiexcerpt 'MP-installation-easy' space='nxdoc' page='Generic Multi-Excerpts'}}}

## Configuration

### Nuxeo Server

In strict mode, the Nuxeo Retention Management addon requires to disable the **attachments**, **versioning**, and **comments** features.

This is done adding the parameter `nuxeo.retention.strictmode.enabled=true` in the server [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}).

This must be done **prior to any usage of the Nuxeo instance** to guarantee the data consistency.

### Amazon S3

In strict mode, Nuxeo Platform with Nuxeo Retention Management addon requires the usage of 2 Amazon S3 buckets:

- A standard S3 bucket as for any other standard Nuxeo instance: this bucket is used to store the standard documents. You can refer to [Amazon S3 Online Storage]({{page version='' space='nxdoc' page='amazon-s3-online-storage'}}) documentation to configure this bucket.

- A S3 bucket dedicated to the records that is configured with Object Lock in [Compliance mode](#s3-configuration-requirements): this bucket is used to store the records only. 

#### {{> anchor 's3-configuration-requirements'}} Amazon S3 Configuration Requirements

Compliance with [SEC Rule 17a-4]({{page page='nuxeo-retention-management'}}#sec-rule-17a4) requires to configure Nuxeo Platform to use Amazon S3 Compliance Buckets to store records required by regulation, thereby establishing the foundation for meeting the requirements of the Rule.</br>

Specifically:

- Direct writes to the Amazon S3 storage system must be disabled, to ensure all documents transit through Nuxeo Platform for compliant processing.

- The Amazon S3 Object Lock feature must be enabled in Compliance Mode on the bucket intended to store objects that are marked as final records.

- Amazon S3 Versioning must be enabled (it is automatically enabled when enabling Object Lock).

- The default retention value for Amazon S3 Compliance Buckets intended to retain compliant record objects must not be set (or at least set to zero).

- No Min/Max range should be established for Amazon S3 Compliance Buckets intended to retain compliant record objects.

- Amazon S3 Lifecycle Policies must not be configured for use within the Nuxeo Platform storage subsystem.

#### Configure the Records Bucket in Amazon S3 Online Storage

##### Through XML Configuration File

Once the standard Amazon S3 bucket is installed as described in [Amazon S3 Online Storage](https://connect.nuxeo.com/nuxeo/site/marketplace/package/amazon-s3-online-storage), you have to add an XML extension file to configure the bucket dedicated to the records and how to dispatch files in each bucket (documents vs records):
- The file has to be added into `$NUXEO_HOME/nxserver/config`
- The file name has to be ended with `-config.xml`
- The file must contain a specific `component name`:

```xml
<component name="records-s3-compliance">
```
- The file must contain a blob manager extension with the configuration of the S3 bucket dedicated to the records and the following parameters:

```xml
<extension target="org.nuxeo.ecm.core.blob.BlobManager" point="configuration">
    <blobprovider name="records">
      <class>org.nuxeo.ecm.blob.s3.S3BlobProvider</class>
      <property name="record">true</property>
```
- The file must contain a blob dispatcher extension as described here:

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
The configuration provided here is applicable for use with the Nuxeo Retention addon in strict mode. Please refer to the appropriate examples if you picked the standard mode.
{{/callout}}

Complete XML extension file example:
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

###### Through `nuxeo.conf` Properties

Alternatively, you can add the `s3retention` template to the `nuxeo.templates` property in your [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}) file:
```
nuxeo.templates=default,s3binaries,retention,s3retention
```

This will enable the [s3-retention-config.xml](https://github.com/nuxeo/nuxeo-retention/blob/lts-2021/nuxeo-retention-package/src/main/resources/install/templates/s3retention/nxserver/config/s3-retention-config.xml.nxftl) which allows to define these properties in your [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}) file:
  - `nuxeo.retention.s3storage.bucket`</br>
    (required)
  - `nuxeo.retention.s3storage.bucket_prefix`</br>
    (optional)
  - `nuxeo.retention.s3storage.awsid`</br>
    (fallback on `nuxeo.s3storage.awsid`)
  - `nuxeo.retention.s3storage.awssecret`</br>
    (fallback on `nuxeo.s3storage.awssecret`)
  - `nuxeo.retention.s3storage.awstoken`</br>
    (fallback on `nuxeo.s3storage.awstoken`)
  - `nuxeo.retention.s3storage.region`</br>
    (fallback on `nuxeo.s3storage.region`)
  - `nuxeo.retention.core.blobstore.digestAsync`</br>
    (fallback on `nuxeo.core.blobstore.digestAsync`)
  - `nuxeo.retention.s3storage.cacheminage`</br>
    (fallback on `nuxeo.s3storage.cacheminage`)
  - `nuxeo.retention.s3storage.cachesize`</br>
    (fallback on `nuxeo.s3storage.cachesize`)
  - `nuxeo.retention.s3storage.cachecount`</br>
    (fallback on `nuxeo.s3storage.cachecount`)
  - `nuxeo.retention.s3storage.connection.max`</br>
    (fallback on `nuxeo.s3storage.connection.max`)
  - `nuxeo.retention.s3storage.connection.retry`</br>
    (fallback on `nuxeo.s3storage.connection.retry`)
  - `nuxeo.retention.s3storage.connection.timeout` </br>
    (fallback on `nuxeo.s3storage.connection.timeout`)
  - `nuxeo.retention.s3storage.socket.timeout` </br>
    (fallback on `nuxeo.s3storage.socket.timeout`)
  - `nuxeo.retention.s3storage.endpoint`</br>
    (fallback on `nuxeo.s3storage.endpoint`)
  - `nuxeo.retention.s3storage.pathstyleaccess`</br>
    (fallback on `nuxeo.s3storage.pathstyleaccess`)
  - `nuxeo.retention.s3storage.accelerateMode`</br>
    (fallback on `nuxeo.s3storage.accelerateMode`)
