---
title: Upgrade from LTS 2023 to LTS 2025
description: Instructions to upgrade your Nuxeo Platform instance from LTS 2023 version to LTS 2025.
review:
  comment: ''
  date: '2025-02-28'
  status: ok
labels:
  - multiexcerpt
toc: true
tree_item_index: 93
---
For the general upgrade process, see the page [Upgrading the Nuxeo Platform]({{page page='upgrading-the-nuxeo-platform'}}).

{{! excerpt}}
This chapter highlights some major information about upgrade from Nuxeo Platform LTS 2023 (2023.x) to Nuxeo Platform LTS 2025 (2025.x). We strongly encourage you to also have a quick read of the upgrade notes.
{{! /excerpt}}

## Prerequisites

These upgrade notes assume that Nuxeo Server is on 2023 and up to date with the latest hotfixes.

## AWS S3

AWS Java SDK was bumpded to version 2. As such, a couple of s3 blob store configuration properties have evolved.

### Deprecated S3 blob provider configuration properties:

 - `nuxeo.s3.multipart.copy.part.size` is deprecated and unused, use `nuxeo.s3storage.minimum.upload.part.size` instead.
 - `nuxeo.s3storage.multipart.copy.threshold`  is deprecated and unused, `use nuxeo.s3storage.multipart.upload.threshold` instead.
 - `nuxeo.s3storage.multipart.cleanup.disabled`  is deprecated and unused, see below.

### New S3 blob provider configuration properties:

 - `nuxeo.s3storage.concurrency.max` to configure the maximum number of allowed concurrent requests of the AWS CRT client used by the transfer manager for parallel data upload and downloads.
 - `nuxeo.s3storage.targetThroughputInGbps` to define the target throughput for transfer requests of the AWS CRT client used by the transfer manager for parallel data upload and downloads.
 - `nuxeo.s3storage.crypt.kms.legacymode`
   {{#> callout type='warning' heading='KMS client-side encryption'}}
   `nuxeo.s3storage.crypt.kms.legacymode` must be set to `true` when upgrading from `lts-2023` to `lts-2025` if you have objects encrypted client-side with a KMS key using the AWS encryption API v2.
   {{/callout}}
   See [NXP-32760](https://hyland-sync.atlassian.net/issues/?jql=%22Source%20Issue%20Key%5BShort%20text%5D%22%20~%20%22NXP-32760%22)
 - `nuxeo.s3storage.crypt.keystore.legacymode`
   {{#> callout type='warning' heading='Keystore client-side encryption'}}
   `nuxeo.s3storage.crypt.keystore.legacymode` must be set to `true` when upgrading from `lts-2023` to `lts-2025` if you have objects encrypted client-side with a local keystore using the AWS encryption API v1.
   {{/callout}}
   See [NXP-32842](https://hyland-sync.atlassian.net/issues/?jql=%22Source%20Issue%20Key%5BShort%20text%5D%22%20~%20%22NXP-32842%22)

### Behavior changes

The Nuxeo server no longer aborts old Multipart uploads. Adding a bucket lifecycle configuration to delete incomplete multipart uploads is highly recommended. See [AWS documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpu-abort-incomplete-mpu-lifecycle-config.html).

HEAD requests on Presigned URLs are no longer supported. See NXP-32293 and [aws-sdk-java-v2 limiation](https://github.com/aws/aws-sdk-java-v2/issues/5276).

The old and deprecated `org.nuxeo.ecm.core.storage.sql.S3BinaryManager` implementation has been deleted and is no longer part of the distribution. The remaining classes from the `org.nuxeo.ecm.core.storage.sql` package have been merged into the `org.nuxeo.ecm.blob.s3` one. Please update any dependant project accordingly.

## Dependencies

### Joda Time

Joda Time library is no longer part of the default nuxeo distribution. Users are asked to migrate to java.time - a core part of the JDK which replaces this project.