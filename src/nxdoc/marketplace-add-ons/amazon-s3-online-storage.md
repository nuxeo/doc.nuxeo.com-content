---
title: Amazon S3 Online Storage
review:
    comment: ''
    date: ''
    status: ok
labels:
    - amazon-s3
    - binary-manager
    - content-review-lts2015
toc: true
confluence:
    ajs-parent-page-id: '28475782'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Amazon+S3+Online+Storage
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Amazon+S3+Online+Storage'
    page_id: '27604604'
    shortlink: fDalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/fDalAQ'
    source_link: /display/NXDOC710/Amazon+S3+Online+Storage
history:
    - 
        author: Manon Lumeau
        date: '2016-08-19 15:17'
        message: ''
        version: '16'
    - 
        author: Manon Lumeau
        date: '2016-08-12 12:42'
        message: ''
        version: '15'
    - 
        author: Manon Lumeau
        date: '2016-06-02 08:51'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2016-02-04 16:55'
        message: ''
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

## Installing the Package

<span style="color: rgb(0,0,0);">{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}</span>

## <span style="color: rgb(0,0,0);">Nuxeo Configuration</span>

In order to configure the package, you will need to change a few Nuxeo templates, and provide values for the configuration variables that define your S3 credentials, bucket and encryption choices

### Specifying Your Amazon S3 Parameters

In `nuxeo.conf`, add the following lines:

```
nuxeo.s3storage.bucket=your_s3_bucket_name
nuxeo.s3storage.awsid=your_AWS_ACCESS_KEY_ID
nuxeo.s3storage.awssecret=your_AWS_SECRET_ACCESS_KEY

```

{{#> callout type='info' }}

You can also use IAM instance roles (since 5.9.1), in which case you do not need to specify the AWS ID and secret (the credentials will be fetched automatically from the instance metadata).

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

The region code can be:

*   For us-east-1 (the default), don't specify this parameter
*   For us-west-1 (Northern California), use `us-west-1`
*   For us-west-2 (Oregon), use `us-west-2`
*   For eu-west-1 (Ireland), use `EU`
*   For ap-southeast-1 (Singapore), use `ap-southeast-1`
*   For ap-southeast-2 (Tokyo), use `ap-southeast-2`
*   For sa-east-1 (Sao Paulo), use `sa-east-1`

You can also use a bucket prefix to localize your binaries within specific S3 folder (the `bucket_prefix` syntax is available since Nuxeo 7.10-HF03, before that you'll need to modify explicitly the binary manager XML file and use `nuxeo.s3storage.bucket.prefix`&nbsp;but this syntax was removed).

#### Client-Side Crypto Options

With S3 you have the option of storing your data encrypted using [S3 Client-Side Encryption](http://docs.amazonwebservices.com/AmazonS3/latest/dev/UsingClientSideEncryption.html). Note that the local cache will _not_ be encrypted.

The S3 Binary Manager can use a keystore containing a keypair, but there are a few caveats to be aware of:

*   The Sun/Oracle JDK doesn't always allow the AES256 cipher which the AWS SDK uses internally. Depending on the US export restrictions for your country, you may be able to modify your JDK to use AES256 by installing the "Java Cryptography Extension Unlimited Strength Jurisdiction Policy Files". See the following link to download the files and installation instructions:
    [http://www.oracle.com/technetwork/java/javase/downloads/index.html](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

*   Don't forget to specify the key algorithm if you create your keypair with the `keytool` command, as this won't work with the default (DSA). The S3 Binary Manager has been tested with a keystore generated with this command:

    ```
    keytool -genkeypair -keystore </path/to/keystore/file> -alias <key alias> -storepass <keystore password> -keypass <key password> -dname <key distinguished name> -keyalg RSA
    ```

    If you get&nbsp;`keytool error: java.io.IOException: Incorrect AVA format`, then ensure that the distinguished name parameter has a form such as:&nbsp;`-dname "CN=AWS S3 Key, O=example, DC=com".`

{{#> callout type='warning' }}

Don't forget to **make backups of the `/path/to/keystore/file` file** along with the **store password, key alias and key password**. If you lose them (for instance if the EC2 machine hosting the Nuxeo instance with the original keystore is lost) you will lose the ability to recover any encrypted blob from the S3 backet.

{{/callout}}

With all that above in mind, here are the crypto options that you can add to `nuxeo.conf` (they are all&nbsp;mandatory once you specify a keystore):

#### Server-Side Crypto Options

Alternatively, you can use [S3 Server-Side Encryption](http://docs.amazonwebservices.com/AmazonS3/latest/dev/UsingServerSideEncryption.html) with the following option:

```
nuxeo.s3storage.crypt.serverside=true
```

{{#> callout type='info' }}

Client-Side Encryption is safer than Server-Side Encryption. With Client-Side Encryption an attacker need both access to the _AWS credentials and the key_ to be able to access the unencrypted data while Server-Side Encryption will only require the potential attacker to provide the _AWS credentials_.

{{/callout}}

#### <span style="color: rgb(0,0,0);">Cache Options</span>

Files retrieved from S3 are cached locally for speed. You can configure the maximum cache size (in bytes or with the standard KB, MB, GB or TB&nbsp;suffixes), the maximum number of files in the cache, and the minimum age (in seconds) a file should have before being eligible for purge (the age is the time since last file access).

```
nuxeo.s3storage.cachesize=100MB
nuxeo.s3storage.cachecount=10000
nuxeo.s3storage.cacheminage=3600
```

`cachecount` and `cacheminage` are available since Nuxeo 7.10-HF03.

#### Download From S3 Options

Since Nuxeo 7.4, you can configure downloads to be directly served to the user from S3 without going through Nuxeo. To do so, use:

```
nuxeo.s3storage.downloadfroms3=true
nuxeo.s3storage.downloadfroms3.expire=3600
```

The expire time is expressed in seconds (the default is one hour) and determines how long the generated S3 URLs are valid. Having short-lived URLs is better for security, but too short an expiration time could be problematic if your server clock is not exactly in sync with the absolute official time use by S3.

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
INFO  [S3BinaryManager] Repository 'default' using S3BinaryManager

```

Don't forget to enable the `INFO` level for the group `org.nuxeo` in `$NUXEO_HOME/lib/log4j.xml` to see INFO level messages from Nuxeo classes.

If your configuration is incorrect, this line will be followed by some error messages describing the problems encountered.

## AWS Configuration

You must have appropriate permissions set on your bucket. In particular, note that the less commonly-used permissions&nbsp;`s3:AbortMultipartUpload`,&nbsp;`s3:ListMultipartUploadParts`&nbsp;and&nbsp;`s3:ListBucketMultipartUploads`&nbsp;are required.

Here is a sample AWS S3 Policy that you can use; make sure that you replace&nbsp;`yourbucketname`&nbsp;with your own bucket name.

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