---
title: Retention Management Addon Installation and Configuration
description: Learn how to install and configure the Nuxeo Retention addon.
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
tree_item_index: 300
private: true
---


## Before You Start

This page gives all the necessary steps to install the Retention Management addon with both [Standard and Compliance modes]({{page page='index'}}#configuration-modes).

## Prerequisites

### With Compliance mode

- The [Amazon S3 Online Storage]({{page version='' space='nxdoc' page='amazon-s3-online-storage'}}) addon configured on your instance

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Configuration

### With Compliance mode

#### Nuxeo server

In Compliance mode, the Nuxeo Retention Management addon requires to disable the **attachments**, **versioning**, and **comments** features.

This is done adding the parameter `nuxeo.retention.compliance.enabled=true` in the server [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}).

This has to be done prior to any usage of the Nuxeo Instance to guarantee the data consistency.

#### Amazon S3

Nuxeo Platform with Nuxeo Retention Management addon requires the usage of 2 Amazon buckets:

- A standard S3 bucket as for any other standard Nuxeo instance: this bucket is used to store the standard documents. You can refer to [Amazon S3 Online Storage]({{page version='' space='nxdoc' page='amazon-s3-online-storage'}}) documentation to configure this bucket.

- An S3 bucket dedicated to the records that is configured on [Compliance mode](#s3-configuration-requirements): this bucket is used to store the records only. Compared to the standard bucket, the Garbage Collector must be disabled as there is a [specific deletion process]({{page page='nuxeo-retention-technical-overview'}}#record-deletion-flow).

##### {{> anchor 's3-configuration-requirements'}} Amazon S3 Configuration Requirements

Compliance with [SEC Rule 17a-4]({{page page='index'}}#sec-rule-17a4) requires to configure Nuxeo Platform to use Amazon S3 Compliance Buckets to store records required by regulation, thereby establishing the foundation for meeting the requirements of the Rule.</br>

Specifically:

- Direct writes to the Amazon S3 storage system must be disabled, to ensure all documents transit through Nuxeo Platform for compliant processing.

- The Amazon S3 Object Lock feature must be enabled in Compliance Mode on the bucket intended to store objects that are marked as final records.

- Amazon S3 Versioning must be enabled.

- The default retention value for Amazon S3 Compliance Buckets intended to retain compliant record objects must be set to zero (0).

- No Min/Max range should be established for Amazon S3 Compliance Buckets intended to retain compliant record objects.

- Amazon S3 Lifecycle Policies must not be configured for use within the Nuxeo Platform storage subsystem.

##### Configure the records bucket in [Amazon S3 Online Storage](https://connect.nuxeo.com/nuxeo/site/marketplace/package/amazon-s3-online-storage)

Once the standard Amazon S3 bucket is installed as described in [Amazon S3 Online Storage](https://connect.nuxeo.com/nuxeo/site/marketplace/package/amazon-s3-online-storage), you have to add an XML extension file to configure the bucket dedicated to the records and how to dispatch files in each bucket (documents vs records):
- The file has to be added into `$NUXEO_HOME/nxserver/config`
- The file name has to be ended with `-config.xml`
- The file must contain a specific `component name`:

```xml
<component name="records-s3-compliance" version="1.0.0">
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

Complete XML extension file example:
```xml
<?xml version="1.0"?>
<component name="records-s3-compliance" version="1.0.0">

  <require>default-repository-config</require>

  <extension target="org.nuxeo.ecm.core.blob.BlobManager" point="configuration">
    <blobprovider name="records">
      <class>org.nuxeo.ecm.blob.s3.S3BlobProvider</class>
      <property name="record">true</property>
      <property name="awsid">${nuxeo.s3storage.awsid}</property>
      <property name="awssecret">${nuxeo.s3storage.awssecret}</property>
      <property name="awstoken">${nuxeo.s3storage.awstoken}</property>
      <property name="bucket">${nuxeo.s3storage.bucket}</property>
      <property name="region">${nuxeo.s3storage.region}</property>
      <property name="endpoint">${nuxeo.s3storage.endpoint}</property>
      <property name="pathstyleaccess">${nuxeo.s3storage.pathstyleaccess}</property>
      <property name="accelerateMode">${nuxeo.s3storage.accelerateMode}</property>
      <property name="bucket_prefix">${nuxeo.s3storage.bucket_prefix}</property>
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
