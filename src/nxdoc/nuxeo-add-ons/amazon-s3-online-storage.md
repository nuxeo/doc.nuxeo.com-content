---
title: Amazon S3 Online Storage
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - lts2016-ok
    - amazon-s3
    - fguillaume
    - binary-manager
    - multiexcerpt-include
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Amazon+S3+Online+Storage
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Amazon+S3+Online+Storage'
    page_id: '12912817'
    shortlink: sQjF
    shortlink_source: 'https://doc.nuxeo.com/x/sQjF'
    source_link: /display/NXDOC/Amazon+S3+Online+Storage
tree_item_index: 300
history:
    -
        author: Florent Guillaume
        date: '2016-08-17 09:53'
        message: ermission clarificatio
        version: '19'
    -
        author: Florent Guillaume
        date: '2016-08-11 15:30'
        message: added s3 policy
        version: '18'
    -
        author: Alain Escaffre
        date: '2016-08-02 12:07'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2016-06-01 14:30'
        message: 'Use generic installation excerpt '
        version: '16'
    -
        author: Solen Guitter
        date: '2016-02-04 16:55'
        message: ''
        version: '15'
    -
        author: Florent Guillaume
        date: '2016-01-28 15:07'
        message: add server-side encryption option
        version: '14'
    -
        author: Florent Guillaume
        date: '2016-01-05 15:00'
        message: cachecount+ cacheminage
        version: '13'
    -
        author: Florent Guillaume
        date: '2015-12-16 13:19'
        message: bucket_prefix
        version: '12'
    -
        author: Solen Guitter
        date: '2015-11-27 13:55'
        message: 'NXDOC-658: Marketplace packages are now called Nuxeo Packages'
        version: '11'
    -
        author: Mathieu Guillaume
        date: '2015-10-07 08:57'
        message: ''
        version: '10'
    -
        author: Florent Guillaume
        date: '2015-09-22 12:21'
        message: Download From S3
        version: '9'
    -
        author: Manon Lumeau
        date: '2015-06-29 10:02'
        message: ''
        version: '8'
    -
        author: Michaël Vachette
        date: '2015-03-20 11:00'
        message: ''
        version: '7'
    -
        author: Vladimir Pasquier
        date: '2014-05-05 18:12'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-01-21 17:44'
        message: ''
        version: '5'
    -
        author: Florent Guillaume
        date: '2014-01-20 18:20'
        message: NXP-13550 connection pool doc
        version: '4'
    -
        author: Solen Guitter
        date: '2013-10-16 17:03'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2013-08-05 16:33'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2013-01-04 10:51'
        message: ''
        version: '1'

---
The Amazon S3 Online Storage is a Nuxeo Binary Manager for S3\. It stores Nuxeo's binaries (the attached documents) in an [Amazon S3](http://aws.amazon.com/s3/) bucket.

## Before You Start

You should be familiar with Amazon S3 and be in possession of your credentials.

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Nuxeo Configuration

In order to configure the package, you will need to provide values for the configuration parameters that define your S3 credentials, bucket and encryption choices.

For the case of a single repository, you can do the configuration using the `nuxeo.conf` properties described below. For more complex setups, you will need to use an XML extension point, see further down for details.

### Specifying Your Amazon S3 Parameters

In `nuxeo.conf`, add the following lines:

```
nuxeo.s3storage.bucket=your_s3_bucket_name
nuxeo.s3storage.awsid=your_AWS_ACCESS_KEY_ID
nuxeo.s3storage.awssecret=your_AWS_SECRET_ACCESS_KEY

```

{{#> callout type='info' }}

If your Nuxeo instance runs on Amazon EC2, you can also transparently use IAM instance roles, in which case you do not need to specify the AWS ID and secret (the credentials will be fetched automatically from the instance metadata).

{{/callout}}

&nbsp;

If you are using an S3 compatible storage service, then you will most likely also need to set the endpoint parameter in `nuxeo.conf`

```
nuxeo.s3storage.endpoint=hostname
```

If you installed the bundle JAR manually instead of using the Nuxeo Package you will also need:

```
nuxeo.core.binarymanager=org.nuxeo.ecm.core.storage.sql.S3BinaryManager
```

{{#> callout type='info' }}

The bucket name is unique across all of Amazon, you should find something original and specific.

{{/callout}} {{#> callout type='note' }}

The file `nuxeo.conf` now contains S3 secret access keys, you should protect it from prying eyes.

{{/callout}}

You can also add the following optional parameters:

```
nuxeo.s3storage.region=us-west-1
nuxeo.s3storage.bucket_prefix=myfolder/
```

The region code can be found in the [S3 Region Documentation](http://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region). The default is `us-east-1`. At the time this documentation was written, the list is:

* us-east-1: US East (N. Virginia) (default)
* us-east-2: US East (Ohio)
* us-west-1: US West (N. California)
* us-west-2: US West (Oregon)
* eu-west-1: EU (Ireland)
* eu-west-2: EU (London)
* eu-central-1: EU (Frankfurt)
* ap-south-1: Asia Pacific (Mumbai)
* ap-southeast-1: Asia Pacific (Singapore)
* ap-southeast-2: Asia Pacific (Sydney)
* ap-northeast-1: Asia Pacific (Tokyo)
* ap-northeast-2: Asia Pacific (Seoul)
* sa-east-1: South America (São Paulo)
* ca-central-1: Canada (Central)
* cn-northwest-1: China (Ningxia)

You can also use a bucket prefix to localize your binaries within specific S3 folder (the `bucket_prefix` syntax is available since Nuxeo 7.10-HF03, before that you'll need to modify explicitly the binary manager XML file and use `nuxeo.s3storage.bucket.prefix`&nbsp;but this syntax was removed).

#### Client-Side Crypto Options

With S3 you have the option of storing your data encrypted using [S3 Client-Side Encryption](http://docs.amazonwebservices.com/AmazonS3/latest/dev/UsingClientSideEncryption.html). Note that the local cache will _not_ be encrypted.

The S3 Binary Manager can use a keystore containing a keypair, but there are a few caveats to be aware of:

*   The Sun/Oracle JDK doesn't always allow the AES256 cipher which the AWS SDK uses internally. Depending on the US export restrictions for your country, you may be able to modify your JDK to use AES256 by installing the "Java Cryptography Extension Unlimited Strength Jurisdiction Policy Files". See the following link to download the files and installation instructions:
    [http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html](http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html)

*   Don't forget to specify the key algorithm if you create your keypair with the `keytool` command, as this won't work with the default (DSA). The S3 Binary Manager has been tested with a keystore generated with this command:

    ```
    keytool -genkeypair -keystore </path/to/keystore/file> -alias <key alias> -storepass <keystore password> -keypass <key password> -dname <key distinguished name> -keyalg RSA
    ```

    If you get&nbsp;`keytool error: java.io.IOException: Incorrect AVA format`, then ensure that the distinguished name parameter has a form such as:&nbsp;`-dname "CN=AWS S3 Key, O=example, DC=com".`

{{#> callout type='warning' }}

Don't forget to **make backups of the `/path/to/keystore/file` file** along with the **store password, key alias and key password**. If you lose them (for instance if the EC2 machine hosting the Nuxeo instance with the original keystore is lost) you will lose the ability to recover any encrypted blob from the S3 bucket.

{{/callout}}

With all that above in mind, here are the crypto options that you can add to `nuxeo.conf` (they are all&nbsp;mandatory once you specify a keystore):

```
nuxeo.s3storage.crypt.keystore.file=/absolute/path/to/the/keystore/file
nuxeo.s3storage.crypt.keystore.password=the_keystore_password
nuxeo.s3storage.crypt.key.alias=the_key_alias
nuxeo.s3storage.crypt.key.password=the_key_password

```

#### Server-Side Crypto Options

Alternatively, you can use [S3 Server-Side Encryption](http://docs.amazonwebservices.com/AmazonS3/latest/dev/UsingServerSideEncryption.html) with the following option:

```text
nuxeo.s3storage.crypt.serverside=true
```

{{#> callout type='info' }}

Client-Side Encryption is safer than Server-Side Encryption. With Client-Side Encryption an attacker needs both access to the _AWS credentials and the key_ to be able to access the unencrypted data while Server-Side Encryption will only require the potential attacker to provide the _AWS credentials_.

{{/callout}}

If you want to use [Server-Side Encryption with AWS KMS–Managed Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html), specify your key with:

```text
nuxeo.s3storage.crypt.kms.key = your-key-id
```

`crypt.kms.key` is available since Nuxeo 9.10-HF02.

#### Cache Options

Files retrieved from S3 are cached locally for speed. You can configure the maximum cache size (in bytes or with the standard KB, MB, GB or TB&nbsp;suffixes), the maximum number of files in the cache, and the minimum age (in seconds) a file should have before being eligible for purge (the age is the time since last file access).

```
nuxeo.s3storage.cachesize=100MB
nuxeo.s3storage.cachecount=10000
nuxeo.s3storage.cacheminage=3600
```

`cachecount` and `cacheminage` are available since Nuxeo 7.10-HF03.

#### Download From S3 Options

You can configure downloads to be directly served to the user from S3 without going through Nuxeo. To do so, use:

```
nuxeo.s3storage.directdownload=true
nuxeo.s3storage.directdownload.expire=3600
```

The expire time is expressed in seconds (the default is one hour) and determines how long the generated S3 URLs are valid. Having short-lived URLs is better for security, but too short an expiration time could be problematic if your server clock is not exactly in sync with the absolute official time use by S3.

{{#> callout type='info' }}

Before Nuxeo 7.10 the configuration was done using property `nuxeo.s3storage.downloadfroms3` instead of `nuxeo.s3storage.directdownload` (same with `expire`). This is still available for backward compatibility after Nuxeo 7.10 but will be removed in a future version, so the `nuxeo.s3storage.directdownload` version above should be preferred.

{{/callout}}


#### Connection Pool Options

You can configure the internal S3 connection pool. This pool has a size of 50 by default, so if you've configured Nuxeo to use more sessions than this and all the sessions are accessing S3, you may run out of connections.

The following parameters can be used to change some connection pool parameters (the defaults are shown):

```
nuxeo.s3storage.connection.max=50
nuxeo.s3storage.connection.retry=3
nuxeo.s3storage.connection.timeout=50000
nuxeo.s3storage.socket.timeout=50000
```

The timeouts are expressed in milliseconds.

You can read more about these parameters on the AWS&nbsp;[ClientConfiguration](http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/ClientConfiguration.html)&nbsp;documentation page.

### Checking Your Configuration

To check that installation went well, you can check your startup logs and look for a line like:

```
INFO  [CachingBinaryManager] Registering binary manager 'default' using S3BinaryManager

```

Don't forget to enable the `INFO` level for the group `org.nuxeo` in `$NUXEO_HOME/lib/log4j.xml` to see INFO level messages from Nuxeo classes.

If your configuration is incorrect, this line will be followed by some error messages describing the problems encountered.

## AWS Configuration

You must have appropriate permissions set on your bucket. In particular, note that the less commonly-used permissions&nbsp;`s3:AbortMultipartUpload`, `s3:ListMultipartUploadParts` and `s3:ListBucketMultipartUploads`&nbsp;are required.

Here is a sample AWS S3 Policy that you can use; make sure that you replace&nbsp;`yourbucketname` with your own bucket name.

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListAllMyBuckets"
            ],
            "Resource": "arn:aws:s3:::*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket",
                "s3:GetBucketLocation",
                "s3:AbortMultipartUpload",
                "s3:ListMultipartUploadParts",
                "s3:ListBucketMultipartUploads"
            ],
            "Resource": "arn:aws:s3:::yourbucketname"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:DeleteObject",
                "s3:AbortMultipartUpload",
                "s3:ListMultipartUploadParts",
                "s3:ListBucketMultipartUploads"
            ],
            "Resource": "arn:aws:s3:::yourbucketname/*"
        }
    ]
}
```

## Nuxeo Configuration Through Extension Point

The above configuration uses `nuxeo.conf` properties prefixed with `nuxeo.s3storage`, which is useful for simple configurations. However if you plan on using several S3 blob managers, you must configure them using an XML extension point. The following is an example for the `default` blob manager:

```xml
<extension target="org.nuxeo.ecm.core.blob.BlobManager" point="configuration">
  <blobprovider name="default">
    <class>org.nuxeo.ecm.core.storage.sql.S3BinaryManager</class>
    <property name="awsid">your_AWS_ACCESS_KEY_ID</property>
    <property name="awssecret">your_AWS_SECRET_ACCESS_KEY</property>
    <property name="region">us-west-1</property>
    <property name="bucket">your_s3_bucket_name</property>
    <property name="bucket_prefix">myprefix/</property>
    <property name="directdownload">true</property>
    <property name="directdownload.expire">3600</property>
    <property name="cachesize">100MB</property>
    <property name="crypt.keystore.file">/my/keystore.jks</property>
    <property name="crypt.keystore.password">password</property>
    <property name="crypt.key.alias">mykey</property>
    <property name="crypt.key.password">password</property>
    <property name="connection.max">50</property>
    <property name="connection.retry">3</property>
    <property name="connection.timeout">50000</property>
    <property name="socket.timeout">50000</property>
  </blobprovider>
</extension>
```

Note that this needs to override the default configuration present in the default Nuxeo template `default-repository-config.xml.nxftl`, which already defines the standard configuration for the `default` blob provider. You may need to `<require>default-repository-config</require>` in order for the override to be correctly taken into account.

## S3 Direct Upload

By default, binaries are uploaded to the Nuxeo server which upload them to S3.

Another possibility is for the client to ask the Nuxeo server temporary S3 credentials to a second S3 bucket, used as a facade bucket and called transient, where the client (basically Web UI) directly uploads binaries. Then the S3 reference is passed to the server which moves it to its actual S3 bucket.

To unblock this capability you will need a dedicated S3 bucket and a IAM Role that can write in it and which can be assumed with the Nuxeo server AWS configuration.

The role must possess at least the right `s3:PutObject` on the transient bucket.

Please note that the S3 transient bucket has to be configured to allow CORS on PUT and POST methods, this can be done in the permissions tab from the AWS bucket configuration page.

The following CORS configuration allows Web UI to send files to S3, please feel free to adapt it if needed.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedMethod>POST</AllowedMethod>
    <MaxAgeSeconds>3000</MaxAgeSeconds>
    <ExposeHeader>ETag</ExposeHeader>
    <AllowedHeader>*</AllowedHeader>
</CORSRule>
</CORSConfiguration>
```

To activate S3 direct upload use these parameters:

```
nuxeo.s3storage.useDirectUpload=true

# mandatory
nuxeo.s3storage.transient.bucket=YOUR_TRANSIENT_BUCKET
nuxeo.s3storage.transient.roleArn=ROLE_THAT_CAN_WRITE_ON_IT

# usually taken from system environement
nuxeo.s3storage.transient.awsid=
nuxeo.s3storage.transient.awssecret=
nuxeo.s3storage.transient.awstoken=
nuxeo.s3storage.transient.region=
```

The `awsid`, `awssecret`, `awstoken` and `region` are deprecated and should instead be configured through `nuxeo.aws.accessKeyId`, `nuxeo.aws.secretKey`,`nuxeo.aws.sessionToken` and `nuxeo.aws.region` or through implicit IAM instance roles (see above).

S3 direct upload is implemented by a [BatchHandler]({{page space='nxdoc' page='batch-handler'}}) and a [TransientStore]({{page space='nxdoc' page='transient-store'}}) using contributions that can be found in the s3binaries template file [s3directupload-config.xml.nxftl](https://github.com/nuxeo/marketplace-amazon-s3/tree/1.8_9.10/ear/src/main/resources/s3binaries/nxserver/config/s3directupload-config.xml.nxftl)
