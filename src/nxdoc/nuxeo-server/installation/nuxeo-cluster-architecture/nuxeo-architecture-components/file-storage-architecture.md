---
title: File Storage
description: 
labels:
    - deployment
    - bchauvin
    - architecture
    - cluster
    - content-review-lts2017
    - lts2019-ok
review:
    comment: ''
    date: '2021-03-10'
    status: ok
toc: true
tree_item_index: 400
---

## Concept

Nuxeo stores binaries attached to the documents on a file system by default. That can be a shared file system, a NAS, an Amazon S3 bucket or its Microsoft Azure equivalent, etc. More options are available depending on your target deployment. This is described in the [Storage Alternatives](#storage-alternatives) section below.

## Recommandation

### File Sharing

- The shared filesystem is usually an NFS mount. You **must not** share the whole Nuxeo installation tree (see below). The complete Nuxeo instance hierarchy **must not** be shared between all instances. However the following things must be shared.
- All the binary stores **must** be shared by all Nuxeo instances in order for the document repository and transient stores to function correctly.
- The temporary directory configured through `nuxeo.tmp.dir` **must not** be shared by all instances, because there are still a few name collision issues that may occur, especially during startup.

### Storage recommandation

You can store your binaries on a local storage (like a NAS). However, we recommend to use the **Amazon S3 Online Storage** with **S3 Direct Upload** whenever possible, with Client-Side Encryption. 

## Configuration

### Binaries

In addition to the default repository binary store used for documents, Nuxeo uses dynamically-named binary stores for the various transient stores it needs. These dynamic binary stores are created as siblings of the default one.

The default `repository.binary.store` is `$NUXEO/nxserver/data/binaries` and therefore by default Nuxeo would create:
- `$NUXEO/nxserver/data/binaries`
- `$NUXEO/nxserver/data/binaries_transient_authorizationRequestStore`
- `$NUXEO/nxserver/data/binaries_transient_BatchManagerCache`
- `$NUXEO/nxserver/data/binaries_transient_default`
- etc.

However the rest of the `$NUXEO/nxserver/data` directory **must not** be shared by several Nuxeo instances, as it contains instance-specific data.

Therefore in a cluster setting you should point `repository.binary.store` to a folder like `/var/lib/nuxeo/binaries/binaries` and mount/share `/var/lib/nuxeo/binaries`. This way the default binary store and all the dynamic binary stores will be created under the mount point:
- `/var/lib/nuxeo/binaries/binaries`
- `/var/lib/nuxeo/binaries/binaries_transient_authorizationRequestStore`
- `/var/lib/nuxeo/binaries/binaries_transient_BatchManagerCache`
- `/var/lib/nuxeo/binaries/binaries_transient_default`
- etc.

You can of course use a different path than `/var/lib/nuxeo/binaries`.

The above does not apply if binaries are stored in a network-based location, like S3.

### Temporary Directory

In order for various no-copy optimizations to be effective, the temporary directory should be on the same filesystem as the binaries directory. To do this, the recommended way is to have each instance's `nuxeo.tmp.dir` point to a different subdirectory of the shared filesystem.

Using the above suggestions for the binaries directory, you could set `nuxeo.tmp.dir` to `/var/lib/nuxeo/binaries/tmp/node1` for example, for a node with id `node1`.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Going further'}}

- [Amazon S3 Online Storage]({{page version='' space='nxdoc' page='amazon-s3-online-storage'}})

{{/panel}}</div><div class="column medium-6">
</div></div>