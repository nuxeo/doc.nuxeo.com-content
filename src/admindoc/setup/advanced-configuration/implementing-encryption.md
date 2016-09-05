---
title: Implementing Encryption
labels:
    - encryption
toc: true
confluence:
    ajs-parent-page-id: '21921850'
    ajs-parent-page-title: Advanced Configuration
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: Implementing+Encryption
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC60/Implementing+Encryption'
    page_id: '21921800'
    shortlink: CIBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/CIBOAQ'
    source_link: /display/ADMINDOC60/Implementing+Encryption
history:
    - 
        author: Solen Guitter
        date: '2014-11-28 14:07'
        message: ''
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

The content files stored by the Nuxeo Platform, also known as binaries, are stored using the `BinaryManager` abstraction, as described in [the Binary Store documentation]({{page space='nxdoc60' page='binary-store'}}). There are several ways to configure encryption depending on your choice of&nbsp;`BinaryManager`.

## Filesystem AES Encryption

Since Nuxeo Platform 6.0, it's possible to use a&nbsp;`BinaryManager`&nbsp;that encrypts files using AES. Two modes are possible:

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

The binary manager and options can be set through [`nuxeo.conf`]({{page page='configuration-parameters-index-nuxeoconf'}}):

```
nuxeo.core.binarymanager=org.nuxeo.ecm.core.storage.binary.AESBinaryManager
nuxeo.core.binarymanager_key=keyStoreType=JCEKS,keyStoreFile=/etc/keystore.jceks,keyStorePassword=changeit,keyAlias=mykey,keyPassword=changeittoo
#or
nuxeo.core.binarymanager_key=password=mypassword
```

{{#> callout type='note' }}

By default Java ships with a Java Cryptographic Extension (JCE) module configured for 128-bit maximum key length, whereas the Nuxeo Platform needs at least 256-bit keys for adequate security of AES. The Nuxeo code attempts to work around these restrictions automatically to force the JCE to allow unlimited key length.

If it cannot force it, you will get an exception `java.security.InvalidKeyException`: Illegal key size or default parameters when encrypting or decrypting a file. In that case, you must go to&nbsp;[Oracle Java SE Downloads](http://www.oracle.com/technetwork/java/javase/downloads/index.html)&nbsp;and download and install the Java Cryptography Extension (JCE) Unlimited Strength Jurisdiction Policy Files for your JDK (see the README.txt file inside the downloaded ZIP for installation instructions).

{{/callout}}

<dl>

## S3 Encryption

The configuration is described in&nbsp;[Amazon S3 Online Storage]({{page space='nxdoc60' page='amazon-s3-online-storage'}}).

</dl>