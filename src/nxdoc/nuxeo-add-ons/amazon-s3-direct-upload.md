---
title: Amazon S3 Direct Upload for Web UI
review:
    comment: ''
    date: '2018-08-13'
    status: ok
tree_item_index: 350
labels:
    - amazon-s3
    - nuxeo-web-ui
    - upload provider
    - gbarata
toc: true
---

[Amazon S3 Direct Upload for Web UI](https://connect.nuxeo.com/nuxeo/site/marketplace/package/amazon-s3-direct-upload) is an addon that allows Web UI to make use of [S3 Direct Upload]({{page page='amazon-s3-online-storage#s3-direct-upload'}}) to directly upload files to a transient bucket, which will then be moved by the Nuxeo server to a final bucket once the upload is finished. For that purpose, this addon deploys a custom [upload provider]({{page page='web-ui-upload-providers'}}) for Web UI that leverages the [AWS SDK for Javascript](https://github.com/aws/aws-sdk-js), to upload blobs directly to an S3 bucket. This addon requires [Amazon S3 Online Storage]({{page page='amazon-s3-online-storage'}}) to be installed and configured.

## Installation

This addon requires no specific installation steps. It can be installed like any other package with [nuxeoctl command line]({{page version='' space='nxdoc' page='installing-a-new-package-on-your-instance'}}#installing-a-package-using-the-nuxeoctl-script).


## Configuration

Only S3 Direct upload must be configured, as [described in its documentation page]({{page page='amazon-s3-online-storage#s3-direct-upload'}}). No further configuration is required.

## Technical Overview

Once installed, this addon sets the S3 direct upload as the default upload provider for Web UI, which means that every blob uploaded through the UI will be sent to an S3 bucket, unless the target element is [configured otherwise]({{page page='web-ui-upload-providers'}}#registration-and-configuration).

The upload is done in three steps:

1. The Web UI makes a call to a REST API endpoint, to initiate a new batch using the [S3 batch handler](https://github.com/nuxeo/nuxeo-core-binarymanager-cloud/blob/release-10.2/nuxeo-core-binarymanager-s3/src/main/java/org/nuxeo/ecm/core/storage/sql/S3DirectBatchHandler.java):

  ```
  POST 'http://localhost:8080/nuxeo/api/v1/upload/new/s3'
  ```

  This call returns a batch object in JSON format with all the required information to upload the blob to an S3 bucket, including the bucket name, region and credentials:

  ```JSON
  {
    "batchId": "batchId-0fd1e21d-8c21-4b37-9ccb-26a056fcffa5",
    "extraInfo": {
        "awsSecretAccessKey": "...",
        "awsSecretKeyId": "...",
        "awsSessionToken": "...",
        "baseKey": "...",
        "bucket": "my-bucket",
        "expiration": 1533877058000,
        "region": "eu-west-3",
        "useS3Accelerate": false
    },
    "fileEntries": [],
    "provider": "s3"
  }
  ```

2. Web UI then uses the [S3 service](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property) provided by the [AWS SDK for Javascript](https://github.com/aws/aws-sdk-js) to upload the blob, using the data retrieved on step 1.

3. Once the upload is finalized, a last REST API call is made to notify the Nuxeo server that the upload to the transient bucket is finished, including a reference to the blob in the payload:

  ```
  POST 'http://localhost:8080/nuxeo/api/v1/upload/batchId-0fd1e21d-8c21-4b37-9ccb-26a056fcffa5/0/complete'
  ```
  ```JSON
  {
    "bucket": "my-bucket",
    "etag": "asdasdas23as",
    "fileSize": 11251065,
    "key": "myfile.ext",
    "name": "myfile.ext"
  }
  ```

The server will then move the blob from the transient to the final bucket. For more information regarding S3 Direct Upload, please check the [related documentation page]({{page page='amazon-s3-online-storage'}}#s3-direct-upload).

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Amazon S3 Online Storage]({{page page='amazon-s3-online-storage'}})
- [HOWTO: Upload a File in Nuxeo Using REST API]({{page page='howto-upload-file-nuxeo-using-rest-api'}})
- [REST API]({{page page='rest-api'}})
- [Web UI Upload Providers]({{page page='web-ui-upload-providers'}})

{{/panel}}
</div>
</div>
