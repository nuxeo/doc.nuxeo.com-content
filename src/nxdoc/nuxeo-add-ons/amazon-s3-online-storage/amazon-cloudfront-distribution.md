---
title: Amazon CloudFront
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - amazon-s3
    - fguillaume
    - amazon-cloudfront
    - binary-manager
    - lts2017-ok
toc: true
tree_item_index: 100

---
The CloudFrontBinaryManager is a Nuxeo Binary Manager that lets you store Nuxeo's binaries in an [Amazon S3](http://aws.amazon.com/s3/) bucket and lets you download them from an [Amazon CloudFront CDN](https://aws.amazon.com/cloudfront/) using signed URLs.

## Before You Start

You should be familiar with:

- [Nuxeo S3 Binary Manager]({{page page='amazon-s3-online-storage'}}) installed and configured

- [Serving Private Content through CloudFront](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html)

- Be in possession of your [CloudFront Key Pairs](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html#private-content-creating-cloudfront-key-pairs)

## Distribution Configuration

### Serving S3 Content

Follow [Using CloudFront with Amazon S3](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/MigrateS3ToCloudFront.html#adding-cloudfront-to-s3) documentation page to create a web distribution bound to S3.

Mandatory settings:

- **Restrict Bucket Access**: `true`. Must be enabled to serve private content and sign URLs.

- **Query String Forwarding and Caching**: `whitelist`.
  ```
  response-content-type
  response-content-disposition
  ```

To get correct response `content-type` and `content-disposition` headers.

- **Restrict Viewer Access**: `Yes`. Requires signed URLs to access objects in the bucket.

Recommended settings in order to ease configuration:

- **Restrict Bucket Access**: `Yes`. Restricts Bucket access to only CloudFront origin.

- **Origin Access Identity**: `Create a New Identity`. Creates a dedicated Identity between the distribution and S3.

- **Grant Read Permissions on Bucket**: `Yes, Update Bucket Policy`. Grants read permission to the selected Identity.

## Nuxeo Configuration

In order to configure the package, you will need to provide values for the configuration parameters that define your S3 credentials bucket.

Assuming that you already have a bucket `nuxeo_bucket` with minimal configuration:

```
nuxeo.aws.accessKeyId=your_AWS_ACCESS_KEY_ID
nuxeo.aws.secretKey=your_AWS_SECRET_ACCESS_KEY

nuxeo.s3storage.bucket=nuxeo_bucket

# Required prior to 9.3
nuxeo.s3storage.directdownload=true
```

You don't need to specify `nuxeo.aws.accessKeyId` and `nuxeo.aws.secretKey` if you're using IAM instance roles.
If you want to go further, please read the [Nuxeo S3 Binary Manager]({{page page='amazon-s3-online-storage'}}) page.

### Specifying Your Amazon CloudFront Parameters

In `nuxeo.conf`, add the following lines:

```
# Use CloudFrontBinaryManager
nuxeo.core.binarymanager=org.nuxeo.ecm.core.storage.sql.CloudFrontBinaryManager

# CloudFront private key in .pem or .der format
nuxeo.s3storage.cloudfront.privKey=/local/path/cf/private/key
nuxeo.s3storage.cloudfront.privKeyId=your_CF_PRIV_KEY_ID
nuxeo.s3storage.cloudfront.distribDomain=your_DISTRIBUTION_DOMAIN

# Fix a query parameter encoding issue - Amazon has to fix it...
nuxeo.s3storage.cloudfront.fix.encoding=true
```
