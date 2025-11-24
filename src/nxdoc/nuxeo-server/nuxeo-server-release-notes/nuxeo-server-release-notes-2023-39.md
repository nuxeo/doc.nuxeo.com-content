---
title: LTS 2023.39 / LTS 2023-HF39
description: Discover what's new in LTS 2023.39 / LTS 2023-HF39
review:
   comment: ''
   date: '2025-11-24'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2023-39'}}
# What's New in LTS 2023.39 / LTS 2023-HF39

## Add Ability to Store Blob With INTELLIGENT_TIERING Default Storage Class in S3

Blobs can now be stored with INTELLIGENT_TIERING storage class in S3 Blob Providers.

The new Nuxeo configuration property `nuxeo.s3storage.storageClass` allows you to specify which storage class should be used to store blobs in an S3 bucket. Supported values are `STANDARD` (default) or `INTELLIGENT_TIERING`.

 You can also fine-tune which storage class should be applied to the full-text blobs extracted from binaries (when `nuxeo.vcs.fulltext.storedInBlob=true`) with the `nuxeo.s3storage.fulltext.storeInBlob.storageClass` property.

Alternatively, when defining your own S3 blob provider XML contribution, you can also specify the `storageClass` property:

```
  <extension target="org.nuxeo.ecm.core.blob.BlobManager" point="configuration">
    <blobprovider name="myBlobProvider">
      <class>org.nuxeo.ecm.blob.s3.S3BlobProvider</class>
      ...
      <property name="storageClass">INTELLIGENT_TIERING</property>
```

Note that the `INTELLIGENT_TIERING` class could only be used when the underlying bucket used to store data is configured to use only immediate (synchronous) access tiers:

- *Frequent Access tier*
- *Infrequent Access tier*
- *Archive Instant Access tier*

The two last tiers are prohibited as they must be accessed asynchronously (requires an explicit restore action) and the Nuxeo platform does not handle this use case.

- *Archive Access tier*
- *Deep Archive Access tier*

NB: There is also the possibility to define a lifecycle rule on the bucket to transition objects from `STANDARD` to `INTELLIGENT_TIERING` storage class. However, AWS states:

> Transitions are charged per request
> For a lifecycle transition action, each request corresponds to an object transition. For details on lifecycle transition pricing, see requests pricing info on the Storage & requests tab of the [Amazon S3 pricing page ](https://aws.amazon.com/s3/pricing), that is, transitioning data from S3 `STANDARD` to S3 `INTELLIGENT_TIERING` will be charged /home/jenkins/workspace/uxeo_lts_check-release-date_2023@tmp/durable-4b2914c9/script.sh.copy.01 per 1,000 requests.

Although the lifecycle could be needed to transition existing objects, consider leveraging this new `nuxeo.s3storage.storageClass` property to avoid this extra cost for objects created in the future.

## Fix SAML Logout When No Login Page Is Configured

Don't save SAML logout request when logging out.

## NoSuchFileException in LocalBlobStore.writeBlobGeneric()

Files being written to LocalBlobStore are now ignored by the garbage collector.

## Create a D2 (Declarative Diagramming) Introspection Stream Export

It's now possible to view the [cluster state as D2 diagram](https://doc.nuxeo.com/rest-api/1/stream-endpoint/#get-detailed-nuxeo-stream-and-processor-information).

## Address Regression in Hotfix 2023.38 of Library Quartz 2.5.1 in a Nuxeo Cluster Using PostgreSQL

Address a regression in Quartz for PostgreSQL.


{{! /multiexcerpt}}
