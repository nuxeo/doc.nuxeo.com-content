---
title: LTS 2025.13 / LTS 2025-HF13
description: Discover what's new in LTS 2025.13 / LTS 2025-HF13
review:
   comment: ''
   date: '2026-01-08'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2025-13'}}
# What's New in LTS 2025.13 / LTS 2025-HF13

## Keep Custom Metadata When Publishing a Rendition of a Folderish Document

Rendition service offers a new "targetDocTypes" extension point to register the target document type for holding a rendition of a source document type that is either Folderish or is not adaptable as a BlobHolder.

The new targetDocTypes extension point allows registering the target document type for holding a rendition of a source document type that is either Folderish or is not adaptable as a BlobHolder, which is required to hold the rendition result. Contributed target types must be adaptable as a BlobHolder.

Example:

```
  <extension target="org.nuxeo.ecm.platform.rendition.service.RenditionService" point="targetDocTypes">
    <targetDocType from="Note" to="File" />
  </extension>
```

If no target doc type is found for a given type, it falls back on File.

## Upgrade Keycloak to 26.0.6 to Fix CVE-2024-10039

Upgraded the Keycloak core libraries from 25.0.3 to 26.4.7.

## Provide a Package Marketplace to Use the AWS JDBC Driver

Included improvements in Datasource configuration and addition of AWS Advanced JDBC Driver.

#### Datasource configuration improvements

We improved how you can configure the Datasource used by Nuxeo. You can now give any specific configuration to the properties used by the underlying java Driver. By default we define the following properties:

```
nuxeo.datasource.properties.minTotal=${nuxeo.db.min-pool-size:=}
nuxeo.datasource.properties.maxTotal=${nuxeo.db.max-pool-size:=}
nuxeo.datasource.properties.maxWaitMillis=${nuxeo.db.blocking-timeout-millis:=}
nuxeo.datasource.properties.validationQuery=${nuxeo.db.validationQuery:=}
nuxeo.datasource.properties.cacheState=false
nuxeo.datasource.properties.accessToUnderlyingConnectionAllowed=true
```

The pattern to use to define new properties is: `nuxeo.datasource.properties.SPECIFIC_KEY=SPECIFIC_VALUE`.

In addition to these properties, there’s also the possibility to customize the DB connection checker properties on the same pattern. By default the connection instantiated during DB connection tests receives these properties:

```
nuxeo.datasource.checker.properties.user=${nuxeo.db.user}
nuxeo.datasource.checker.properties.password=${nuxeo.db.password}
```

#### AWS Advanced JDBC Driver Package

The `nuxeo-amazon-jdbc` Nuxeo Package is now available to leverage the AWS Advanced JDBC Driver within Nuxeo.

The AWS Advanced JDBC Driver must be used with another JDBC Driver (such as PostgreSQL or MySQL/MariaDB) as it is a wrapper around another driver.

Let's have a look to an example with PostgreSQL. 

##### Template aws-jdbc (default)

After installing the `nuxeo-amazon-jdbc` package, the `aws-jdbc` template will be added automatically. Your nuxeo.conf should look like this:

```
nuxeo.templates=postgresql,aws-jdbc

nuxeo.db.host=db-identifier.XYZ.eu-west-3.rds.amazonaws.com
nuxeo.db.user=nuxeo
nuxeo.db.password=nuxeo
```

The default configured plugins are based on the AWS Driver defaults, which are: `auroraConnectionTracker,failover2,efm2`. The full list of available plugins can be accessed [here](https://github.com/aws/aws-advanced-jdbc-wrapper/blob/main/docs/using-the-jdbc-driver/UsingTheJdbcDriver.md#list-of-available-plugins).

Based on the datasource configuration properties, you can edit these plugins with `nuxeo.datasource.properties.wrapperPlugins` property (note that the checker might also need to receive introduced properties).

##### Template aws-jdbc-iam

You can enable the optional `aws-jdbc-iam` template which eases the activation of [IAM plugin](https://github.com/aws/aws-advanced-jdbc-wrapper/blob/main/docs/using-the-jdbc-driver/using-plugins/UsingTheIamAuthenticationPlugin.md). By adding the template you will benefit from IAM plugin properties definition:

```
nuxeo.datasource.properties.wrapperPlugins=auroraConnectionTracker,failover2,efm2,iam
nuxeo.datasource.properties.iamDefaultPort=
nuxeo.datasource.properties.iamHost=
nuxeo.datasource.properties.iamRegion=
# iamExpiration is in minutes - default to 870 (14h30m)
nuxeo.datasource.properties.iamExpiration=870

## Startup checks configuration
nuxeo.datasource.checker.properties.wrapperPlugins=iam
```

In basic setup, just enabling the `aws-jdbc-iam` template would be enough to connect with Aurora by leveraging IAM.

##### Template aws-jdbc-secret-manager

You can enable the optional `aws-jdbc-secret-manager` template which ease the activation of [Secret Manager plugin](https://github.com/aws/aws-advanced-jdbc-wrapper/blob/main/docs/using-the-jdbc-driver/using-plugins/UsingTheAwsSecretsManagerPlugin.md). By adding the template you will benefit from Secret Manager plugin properties definition:

```
nuxeo.datasource.properties.wrapperPlugins=auroraConnectionTracker,failover2,efm2,awsSecretsManager
# secretsManagerSecretId: Set this value to be the secret name or the secret ARN
# NOTE A Secret ARN has the following format: arn:aws:secretsmanager:<Region>:<AccountId>:secret:SecretName-6RandomCharacters
nuxeo.datasource.properties.secretsManagerSecretId=
# secretsManagerRegion: Set this value to be the region your secret is in
nuxeo.datasource.properties.secretsManagerRegion=

## Startup checks configuration
nuxeo.datasource.checker.properties.wrapperPlugins=awsSecretsManager
nuxeo.datasource.checker.properties.secretsManagerSecretId=${nuxeo.datasource.properties.secretsManagerSecretId}
```

In basic setup, you just need to define `nuxeo.datasource.properties.secretsManagerSecretId` property in addition to activating the `aws-jdbc-secret-manager` template.

## Run Work in Failure Management Endpoint Should Accept dryRun and Filter Parameters

The "dryRun" and "categoryFilter" form parameters are now available on the work manager endpoint of "run-works-in-failure".

## Enable Override of PageProvider Class in PaginableAdapter

Page providers used in PagineableAdapter are now using a name and they can be overridden like other page providers.

## Declare the Availability of the Es Passthrough in Capabilities Endpoint

The capability endpoint now returns whether the ES passthrough endpoint is available or not:

```
curl -XGET -u Administrator:Administrator http://localhost:8080/nuxeo/api/v1/capabilities
{
  "entity-type": "capabilities",
  "server": {
    "distributionName": "lts",
    "distributionVersion": "2025.13-SNAPSHOT",
    "distributionServer": "tomcat"
  },
  "passthrough": {
    "elasticsearch-audit": true,
    "elasticsearch": true
  }
}
```

Nuxeo also declares the following nuxeo.conf properties if the passthrough is enabled:

```
nuxeo.passthrough.elasticsearch.enabled=true
nuxeo.passthrough.elasticsearch.audit.enabled=true
```
## Fix S3 KMS and AES Server-Side Encryption With AWS SDK V2

S3 KMS and AES server-side encryption with AWS SDK v2 now works.

## Cleanup S3 Unit Tests Features

The S3BlobProviderFeature test feature now installs CoreBulkFeature and DocumentBlobManagerFeature.

## Support All S3 Storage Class Providing Synchronous Access

S3 Standard-IA (STANDARD_IA), One Zone-IA (ONEZONE_IA) and Glacier Instant Retrieval (GLACIER_IR) storage classes are now supported.

The following [S3 Storage Classes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html) are now supported:

- S3 Standard-IA (`STANDARD_IA`)
- S3 One Zone-IA (`ONEZONE_IA`)
- S3 Glacier Instant Retrieval (`GLACIER_IR`)

These classes can be set through the `nuxeo.s3storage.storageClass` Nuxeo configuration property. See also release notes.

## Move S3 Request Controller Contrib to S3 Package Template Resources

The "org.nuxeo.ecm.core.storage.cloud.requestcontroller.service.contrib" component is deprecated in favor of "org.nuxeo.ecm.core.storage.s3.directDownload".


{{! /multiexcerpt}}
