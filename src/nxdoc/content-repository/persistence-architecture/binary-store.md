---
title: Binary Store
review:
    comment: ''
    date: ''
    status: ok
labels:
    - binarystore
toc: true
confluence:
    ajs-parent-page-id: '22380769'
    ajs-parent-page-title: Persistence Architecture
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Binary+Store
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Binary+Store'
    page_id: '22380720'
    shortlink: sIBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/sIBVAQ'
    source_link: /display/NXDOC60/Binary+Store
history:
    - 
        author: Manon Lumeau
        date: '2014-12-10 17:01'
        message: O
        version: '8'
    - 
        author: Florent Guillaume
        date: '2014-10-09 18:56'
        message: ''
        version: '7'
    - 
        author: Florent Guillaume
        date: '2014-10-09 18:53'
        message: ''
        version: '6'
    - 
        author: Florent Guillaume
        date: '2014-10-09 18:52'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2014-01-30 12:20'
        message: Added TOC
        version: '4'
    - 
        author: Solen Guitter
        date: '2014-01-29 18:26'
        message: Typos
        version: '3'
    - 
        author: Thierry Delprat
        date: '2014-01-28 17:27'
        message: ''
        version: '2'
    - 
        author: Thierry Delprat
        date: '2014-01-28 16:57'
        message: ''
        version: '1'

---
## Repository and BinaryManager

{{! excerpt}}

Each content repository has to be associated with a `BinaryManager` implementation. The `BinaryManager`&nbsp;is a low level interface that only deals with binary stream.

{{! /excerpt}}

```
  Binary getBinary(InputStream in) throws IOException;

  Binary getBinary(String digest);
```

As you can see, the methods do not have any document related parameters. This means the binary storage is independent from the documents:

*   Moving a document does not impact the binary stream;
*   Updating a document does not impact the binary stream.

In addition, the streams are stored using their digest, thanks to that:

*   `BlobStore` does automatically manage de-duplication;
*   `BlobStore` can be safely snapshoted&nbsp; (files are never moved or updated, and they are only removed via a `GarbageCollection` process).

## From Simple FS to S3 Binary Manager&nbsp;

The default `BinaryManager` implementation is based on a simple filesystem: considering the storage principles, this is safe to use this implementation even on a NFS like filesystem (since there is no conflicts).

You can also use the S3 Binary Manager to use AWS Cloud File System.

![]({{file name='S3.png'}} ?w=500,h=161,border=true)

{{#> callout type='info' }}

The Temporary storage is used to avoid delays when using the Stream several times (ex: multiple conversions) inside the Nuxeo Server.

{{/callout}}

## Encryption

A common question regarding `BinaryManager` is the support for encryption.&nbsp;See&nbsp;[Implementing Encryption]({{page space='admindoc60' page='implementing-encryption'}}) for more on the configuration options.

### AES Encryption

Since Nuxeo 6.0, it's possible to use a `BinaryManager` that encrypts file using AES. Two modes are possible:

*   a fixed AES key retrieved from a Java KeyStore,
*   an AES key derived from a human-readable password using the industry-standard PBKDF2 mechanism.

While the files are in use by the application, a temporary file in clear is created. It is removed as soon as possible.

### Built-in S3 Encryption

If we take the example of the S3 BinaryManager, AWS S3 Client library supports both client side and server side encryption:&nbsp;

![]({{file name='S3-SSEncryption.png'}} ?w=500,h=159,border=true)

With Server side encryption, the encryption is completely transparent.

![]({{file name='S3-CSEncryption.png'}} ?w=500,h=152,border=true)

In Client side encryption mode the S3 Client manages the encrypt / decrypt process.&nbsp; The local temporary file is in clear.

### Custom Encryption

You can contribute custom implementation of the BinaryManager: since the interface is very simple, the implementation is simple too.

*   The first possible approach is to handle custom crypt / decrypt on top of AWS S3 Client library:

    ![]({{file name='S3-CustomEncryption1.png'}} ?w=500,h=163,border=true)

    In that case, the local temporary file is in clear.

*   The second possible approach is to handle the crypt/decrypt process on the fly.

    This means that the temp file is crypted, but as a trade off:

    *   Decrypting should be run on the fly each time the stream is read.
    *   Determining the stream size requires more work.&nbsp;

    ![]({{file name='S3-CustomEncrypt2.png'}} ?w=500,h=164,border=true)

&nbsp;