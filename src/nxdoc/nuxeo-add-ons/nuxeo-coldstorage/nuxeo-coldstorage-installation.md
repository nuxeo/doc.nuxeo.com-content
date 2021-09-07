---
title: Installation and Configuration
description: How to install and configure the Nuxeo Coldstorage addon.
review:
    comment: ''
    date: ''
    status: ''
labels:
    - storage
    - glacier
    - coldstorage
toc: true
tree_item_index: 300
---

## Pre-requisites
- The [Amazon S3 Online Storage]({{page version='' space='nxdoc' page='amazon-s3-online-storage'}}) addon needs to be configured on your instance

## Amazon S3
Nuxeo Platform with Nuxeo Cold Storage addon requires the usage of 2 Amazon buckets:

A standard S3 bucket as for any other standard Nuxeo instance: this bucket is used to store the standard documents. You can refer to [Amazon S3 Online Storage]({{page version='' space='nxdoc' page='amazon-s3-online-storage'}}) documentation to configure this bucket.

A secondary standard S3 bucket: this bucket is used to store the documents with Glacier class. Compared to the standard bucket, a lifecycle must be defined to handle the document class change. You can refer to the [AWS documentation here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html) for reference.

## Configuration
Make sure that all configuration values are set in the `nuxeo.conf`:

```
nuxeo.aws.accessKeyId=
nuxeo.aws.secretKey=
nuxeo.aws.region=
nuxeo.s3storage.bucket_prefix=
nuxeo.s3storage.bucket=
nuxeo.aws.glacier.bucket=
nuxeo.aws.glacier.bucket_prefix=
```

There are some other optional configurations:

For customizing the frequency (in seconds) in which the scheduler job checks if the retrieve task is finished and that the preview is avaialble for the user to download, we use the expression below. For example, if we want to check the satus every hour at the 7th minute, we would add:

```
nuxeo.coldstorage.check.retrieve.state.cronExpression= 0 7 * ? * * *
```

To customize the scheduler job that checks if the storage class of the document was changed to Glacier by AWS we use the expression below.

```
nuxeo.coldstorage.check.storage.state.cronExpression= 0 7 * ? * * *
```

You can learn more about nuxeo schedulers in https://doc.nuxeo.com/studio/scheduling-periodic-events/

We can also customize how long we want to have the preview available once we do a retrieve action. The default is one day, but that can also be modified. For example, if we want it for 2 days we can add:

```
nuxeo.coldstorage.numberOfDaysOfAvailability.value.default= 2
```