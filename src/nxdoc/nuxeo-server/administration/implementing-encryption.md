---
title: Implementing Encryption
review:
    comment: ''
    date: '2017-01-30'
    status: ok
labels:
    - lts2016-ok
    - encryption
    - jcarsique
    - binary-manager
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '31032113'
    ajs-parent-page-title: Administration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Implementing+Encryption
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Implementing+Encryption'
    page_id: '19235410'
    shortlink: UoIlAQ
    shortlink_source: 'https://doc.nuxeo.com/x/UoIlAQ'
    source_link: /display/NXDOC/Implementing+Encryption
tree_item_index: 1300
version_override:
    LTS 2015: 710/admindoc/implementing-encryption
    '6.0': 60/admindoc/implementing-encryption
history:
    -
        author: Manon Lumeau
        date: '2016-03-25 16:43'
        message: ''
        version: '10'
    -
        author: Alain Escaffre
        date: '2016-03-23 22:59'
        message: ''
        version: '9'
    -
        author: Florent Guillaume
        date: '2015-07-13 10:04'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-11-28 14:07'
        message: Formatting and links
        version: '7'
    -
        author: Florent Guillaume
        date: '2014-10-10 15:21'
        message: ''
        version: '6'
    -
        author: Florent Guillaume
        date: '2014-10-10 15:19'
        message: ''
        version: '5'
    -
        author: Florent Guillaume
        date: '2014-10-10 15:16'
        message: ''
        version: '4'
    -
        author: Florent Guillaume
        date: '2014-10-09 19:11'
        message: ''
        version: '3'
    -
        author: Florent Guillaume
        date: '2014-10-09 18:56'
        message: ''
        version: '2'
    -
        author: Mike Obrebski
        date: '2014-04-24 22:54'
        message: ''
        version: '1'

---
## Binaries Encryption

The content files stored by the Nuxeo Platform, also known as blobs or binaries, are stored using the Blob Provider abstraction, as described in the [File Storage]({{page page='file-storage'}}) page. There are several ways to configure encryption depending on your choice of Blob Provider.

## Filesystem AES Encryption

It's possible to use a Blob Provider that encrypts files using AES. Two modes are possible:

*   A fixed AES key retrieved from a Java KeyStore
*   An AES key derived from a human-readable password using the industry-standard PBKDF2 mechanism (in which case each encrypted file contains a different salt for security reasons).

You choose the mode and the parameters by providing the `key=` configuration options in the&nbsp;`<binaryManager class="" key="...">`&nbsp;of the repository configuration.

The configuration has the form&nbsp;`key1=value1,key2=value2,...`&nbsp;where the possible keys are, for Java KeyStore use:

*   **keyStoreType**: the keystore type, for instance `JCEKS`
*   **keyStoreFile**: the path to the keystore, if applicable
*   **keyStorePassword**: the keystore password
*   **keyAlias**: the alias (name) of the key in the keystore
*   **keyPassword**: the key password

And for PBKDF2 use:

*   **password**: the password

The Blob Provider and its options can be set through [`nuxeo.conf`]({{page page='configuration-parameters-index-nuxeoconf'}}):

```
nuxeo.core.binarymanager=org.nuxeo.ecm.core.blob.binary.AESBinaryManager
nuxeo.core.binarymanager_key=keyStoreType=JCEKS,keyStoreFile=/etc/keystore.jceks,keyStorePassword=changeit,keyAlias=mykey,keyPassword=changeittoo
#or
nuxeo.core.binarymanager_key=password=mypassword
```

{{#> callout type='note' heading='Encryption Algorithm'}}
Before Nuxeo 10.3, the encryption used was based on AES/CBC/PKCS5Padding which has been found to be insecure (susceptible to padding oracle attacks).
Starting with Nuxeo 10.3, a more secure encryption algorithm, AES/GCM/NoPadding, is used. If you're migrating data from an earlier version and therefore still
need to use the old insecure encryption algorithm, you must add the option `useInsecureCipher=true` to the `nuxeo.core.binarymanager_key` in `nuxeo.conf`.
{{/callout}}

{{#> callout type='note' heading='Java Cryptographic Extension'}}

By default Oracle Java ships with a Java Cryptographic Extension (JCE) module configured for 128-bit maximum key length, whereas the Nuxeo Platform needs at least 256-bit keys for adequate security of AES.

To overcome this limitation, you must install an optional downloadable component coming with the JDK. Go to [Oracle Java SE Downloads](http://www.oracle.com/technetwork/java/javase/downloads/index.html) and download and install the **Java Cryptography Extension (JCE) Unlimited Strength Jurisdiction Policy Files** for your JDK (see the README.txt file inside the downloaded ZIP for installation instructions).

If you do not do this, you will get an exception `java.security.InvalidKeyException: Illegal key size or default parameters` when encrypting or decrypting a file.

{{/callout}}


## S3 Encryption

The configuration is described in&nbsp;[Amazon S3 Online Storage]({{page page='amazon-s3-online-storage'}}).
