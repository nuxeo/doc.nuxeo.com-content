---
title: Binary Store
labels:
    - binarystore
toc: true
confluence:
    ajs-parent-page-id: '17334349'
    ajs-parent-page-title: Content Repository
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Binary+Store
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Binary+Store'
    page_id: '18450117'
    shortlink: xYYZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/xYYZAQ'
    source_link: /display/NXDOC58/Binary+Store
history:
    - 
        author: Solen Guitter
        date: '2014-01-30 12:21'
        message: dded TO
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-01-29 18:27'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

## Repository and BinaryManager

{{! excerpt}}

Each content repository has to be associated with a `BinaryManager` implementation. The `BinaryManager`&nbsp;is a low level interface that only deals with binary stream.

{{! /excerpt}}

```
  Binary getBinary(InputStream in) throws IOException;

  Binary getBinary(String digest);
```

</div><div class="column medium-4">{{#> panel heading='On this page'}}

{{/panel}}</div></div>

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

A common question regarding `BinaryManager` is the support for encryption.

### Built-in Encryption

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