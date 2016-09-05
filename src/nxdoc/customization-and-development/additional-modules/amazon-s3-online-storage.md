---
title: Amazon S3 Online Storage
labels:
    - amazon-s3
toc: true
confluence:
    ajs-parent-page-id: '17334336'
    ajs-parent-page-title: Additional Modules
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Amazon+S3+Online+Storage
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Amazon+S3+Online+Storage'
    page_id: '16810025'
    shortlink: KYAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/KYAAAQ'
    source_link: /display/NXDOC58/Amazon+S3+Online+Storage
history:
    - 
        author: Solen Guitter
        date: '2014-01-21 17:44'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2014-01-21 17:38'
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
## Configuring the Package

In order to configure the package, you will need to change a few Nuxeo templates, and provide values for the configuration variables that define your S3 credentials, bucket and encryption choices

### Specifying Your Amazon S3 Parameters

In `nuxeo.conf`, add the following lines:

```
nuxeo.s3storage.bucket=your_s3_bucket_name
nuxeo.s3storage.awsid=your_AWS_ACCESS_KEY_ID
nuxeo.s3storage.awssecret=your_AWS_SECRET_ACCESS_KEY

```

If you installed the bundle JAR manually instead of using the marketplace package you will also need:

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
nuxeo.s3storage.cachesize=100MB

```

The region code can be:

*   for us-east-1 (the default), don't specify this parameter
*   for us-west-1 (Northern California), use `us-west-1`
*   for eu-west-1 (Ireland), use `EU`
*   for ap-southeast-1 (Singapore), use `ap-southeast-1`

Since 5.6, you can also use:

*   for us-west-2 (Oregon), `us-west-2`
*   for ap-southeast-2 (Tokyo), use `ap-southeast-2`
*   for sa-east-1 (Sao Paulo), use `sa-east-1`

### Crypto Options

With S3 you have the option of storing your data encrypted (note that the local cache will _not_ be encrypted).

The S3 Binary Manager can use a keystore containing a keypair, but there are a few caveats to be aware of:

*   The Sun/Oracle JDK doesn't always allow the AES256 cipher which the AWS SDK uses internally. Depending on the US export restrictions for your country, you may be able to modify your JDK to use AES256 by installing the "Java Cryptography Extension Unlimited Strength Jurisdiction Policy Files". See the following link to download the files and installation instructions:
    [http://www.oracle.com/technetwork/java/javase/downloads/index.html](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

*   Don't forget to specify the key algorithm if you create your keypair with the `keytool` command, as this won't work with the default (DSA). The S3 Binary Manager has been tested with a keystore generated with this command:

    ```
    keytool -genkeypair -keystore </path/to/keystore/file> -alias <key alias> -storepass <keystore password> -keypass <key password> -dname <key distinguished name> -keyalg RSA
    ```

    If you get&nbsp;`keytool error: java.io.IOException: Incorrect AVA format`, then ensure that the distinguished name parameter has a form such as:&nbsp;`-dname&nbsp;<span style="color: rgb(34,34,34);">"CN=AWS S3 Key</span> <span style="color: rgb(34,34,34);">, O=example, DC=com".</span>`

{{#> callout type='warning' }}

Don't forget to **make backups of the `/path/to/keystore/file` file** along with the **store password, key alias and key password** . If you lose them (for instance if the EC2 machine hosting the Nuxeo instance with the original keystore is lost) you will lose the ability to recover any encrypted blob from the S3 backet.

{{/callout}}

With all that above in mind, here are the crypto options that you can add to `nuxeo.conf` (they are all&nbsp;mandatory once you specify a keystore):

```
nuxeo.s3storage.crypt.keystore.file=/absolute/path/to/the/keystore/file
nuxeo.s3storage.crypt.keystore.password=the_keystore_password
nuxeo.s3storage.crypt.key.alias=the_key_alias
nuxeo.s3storage.crypt.key.password=the_key_password

```

{{#> callout type='info' }}

The Nuxeo `S3BinaryManager` class is using [S3 Client-Side Encryption](http://docs.amazonwebservices.com/AmazonS3/latest/dev/UsingClientSideEncryption.html) instead of [S3 Server-Side Encrytption](http://docs.amazonwebservices.com/AmazonS3/latest/dev/UsingServerSideEncryption.html). CSE is safer than SSE. With CSE an attacker need both access to the **AWS credentials and the key** to be able to access the unencrypted data while SSE will only require the potential attacker to provide the **AWS credentials**.

{{/callout}}

### Connection Pool Options

Since Nuxeo 5.8.0-HF06 (and&nbsp;Nuxeo 5.9.2 and Nuxeo 5.6.0-HF30) you can configure the internal S3 connection pool. This pool has a size of 50 by default, so if you've configured Nuxeo to use more sessions than this and all the sessions are accessing S3, you may run out of connections.

The following parameters can be used to change some connection pool parameters (the defaults are shown):

```
nuxeo.s3storage.connection.max=50
nuxeo.s3storage.connection.retry=3
nuxeo.s3storage.connection.timeout=50000
nuxeo.s3storage.socket.timeout=50000
```

The timeouts are expressed in milliseconds.

You can read more about these parameters on the AWS&nbsp;[ClientConfiguration](http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/ClientConfiguration.html)&nbsp;documentation page.

## Checking Your Configuration

To check that installation went well, you can check your startup logs and look for a line like:

```
INFO  [S3BinaryManager] Repository 'default' using S3BinaryManager

```

Don't forget to enable the `INFO` level for the group `org.nuxeo` in `$NUXEO_HOME/lib/log4j.xml` to see INFO level messages from Nuxeo classes.

If your configuration is incorrect, this line will be followed by some error messages describing the problems encountered.