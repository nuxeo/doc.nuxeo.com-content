---
title: Installation and Configuration
description: How to install and configure the Nuxeo Cold Storage addon.
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

{{#> callout type='tip'}}
This page covers installation and general configuration options about the Nuxeo Cold Storage addon. For detailed questions on how to integrate it in your application, please refer to our [Cold Storage FAQ]({{page page='nuxeo-coldstorage-faq'}}).
{{/callout}}

## Pre-requisites

{{#> callout type='info' heading='Cloud Platform Compatibility'}}
{{! multiexcerpt name='cloud-platform-compatibility'}}
The Nuxeo Cold Storage addon has been developed and tested specifically for AWS. Microsoft Azure or other Cloud platforms are not compatible with the addon.
{{! /multiexcerpt}}
{{/callout}}

- The [Amazon S3 Online Storage]({{page space='nxdoc' page='amazon-s3-online-storage'}}) addon needs to be configured on your instance.

## Amazon S3

Nuxeo Platform with Nuxeo Cold Storage addon requires a standard S3 bucket as for any other standard Nuxeo instance: this bucket is used to store the standard documents. You can refer to [Amazon S3 Online Storage]({{page space='nxdoc' page='amazon-s3-online-storage'}}) documentation to configure this bucket.

The `s3:RestoreObject` permission on this bucket is required to be able to restore document from Glacier storage class. See [AWS documentation here](https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/s3/AmazonS3.html#restoreObjectV2-com.amazonaws.services.s3.model.RestoreObjectRequest-).

## Configuration

Make sure that all configuration values are set in the `nuxeo.conf`:

```
nuxeo.aws.accessKeyId=
nuxeo.aws.secretKey=
nuxeo.aws.region=
nuxeo.s3storage.bucket_prefix=
nuxeo.s3storage.bucket=
```

**Optional but recommended**: you can define the following property on the `default` blob provider of your deployment:
```
 <property name="coldStorage">true</property>
```
This property enforces a transactional behavior of the blob provider. It allows to rollback the change of the storage class in case an error occurred during the transaction in which documents were sent to Cold Storage.

**There are some other optional configurations:**

To be able to send a document to Cold Storage, the addon requires by default that a preview is available that it can be used as a placeholder when browsing the document. This requirement can be disabled with the following configuration:

```
nuxeo.coldstorage.thumbnailPreviewRequired=false
```
A default placeholder will be displayed instead.

To customize the frequency in which the scheduler job checks if the retrieve task is finished and that the preview is available for the user to download, we use the expression below.

For example, if we want to check the status every hour at the 7th minute, we would add:

```
nuxeo.coldstorage.check.retrieve.state.cronExpression= 0 7 * ? * * *
```

You can learn more about Nuxeo schedulers in the [related documentation page]({{page version='' space='studio' page='scheduling-periodic-events'}}).

We can also customize how long we want to have the preview available once we do a retrieve action. The default is one day, but that can also be modified. For example, if we want it for 2 days we can add:

```
nuxeo.coldstorage.numberOfDaysOfAvailability.value.default= 2
```

### Preview file Configuration

{{! multiexcerpt name='preview-file-configuration'}}
When a document is sent to cold storage, the main file is not available (it requires a retrieval operation, taking between 3 and 5 hours). In order to preserve the user experience, we display a rendition of the document (as renditions remain on S3 standard).

By default, we are using the following renditions:

| Document properties                                 |  Rendition                                                    |
| --------------------------------------------------- | ------------------------------------------------------------- |
| Documents of type Picture                           | Small                                                         |
| Documents of type Video                             | MP4 480p                                                      |
| Others documents                                    | Thumbnail                                                     |

You can change the renditions to be used and add new configurations for specific document type(s) and/or facet(s).

To do so, you can add an XML contribution to your Nuxeo Studio project and specify the renditions to use, as in the following example:
```xml
<?xml version="1.0"?>
<component name="my.custom.coldstorage.rendition.contrib">
  <require>org.nuxeo.coldstorage.rendition.contrib</require>
  <extension target="org.nuxeo.coldstorage.service.ColdStorageService"  point="coldStorageRendition" >
    <coldStorageRendition name="defaultRendition" renditionName="thumbnail" />
    <coldStorageRendition name="pictureRendition" docType="Picture" facet="Picture" renditionName="Small" />
    <coldStorageRendition name="videoRendition" docType="Video" facet="Video" renditionName="MP4 480p" />
    <coldStorageRendition name="myCustomRendition" docType="myCustomDocumentType" facet="Picture" renditionName="OriginalJpeg" />  
  </extension>
</component>
```

{{#> callout type='warning'}}
This contribution must include:
 - a default rendition named "defaultRendition"
 - the `require` element `<require>org.nuxeo.coldstorage.rendition.contrib</require>`
{{/callout}}
{{! /multiexcerpt}}
