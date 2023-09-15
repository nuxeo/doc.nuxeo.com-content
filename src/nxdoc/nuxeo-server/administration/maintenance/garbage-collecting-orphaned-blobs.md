---
title: Garbage-Collecting Orphaned Blobs
review:
    comment: ''
    date: '2023-06-09'
    status: ok
labels:
    - http
    - rest-api
toc: true
tree_item_index: 999
---

## Immediate Garbage Collection

Since [LTS 2021-HF35]({{page page='nuxeo-server-release-notes-2021-35'}}) (see [NXP-31594](https://jira.nuxeo.com/browse/NXP-31594)), the Nuxeo Platform deletes orphaned blobs whenever a:
- document is removed
- document blob property is edited
- document blob property is dispatched to another blob provider

### Preconditions

Only deployments using the **MongoDB** backend can benefit from this feature. The following conditions must also be met:
 - repositories must have the `queryBlobKeys` capability
 - repositories must use `LocalBlobProvider` or `S3BlobProvider`

#### Repository with `queryBlobKeys` capability

This new GC implementation only works for repositories having the `queryBlobKeys` capability.

Since LTS 2021-HF02 and [NXP-29516](https://jira.nuxeo.com/browse/NXP-29516), the blob keys referenced by a document are stored in its `ecm:blobKeys` field.

If **ALL** documents of a repository have this field computed, then the repository has the `queryBlobKeys` capability. In other words, a repository with documents created by a nuxeo server with a version prior to LTS 2021.2 / LTS 2021-HF02 **does NOT** have this capability.

You can query the [capability endpoint]({{page page='rest-api-endpoints#capability-endpoint'}}) to check whether a repository has the `queryBlobKeys` capability.

In case of multi-repository configuration, all the repositories must have this capability.

#### Supported Blob Provider implementations

This GC implementation only works with Blob Providers extending [BlobStoreBlobProvider](https://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/blob/BlobStoreBlobProvider.html) which are:
- [S3BlobProvider](https://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/blob/s3/S3BlobProvider.html) (when using [amazon-s3-online-storage](https://connect.nuxeo.com/nuxeo/site/marketplace/package/amazon-s3-online-storage))
- [LocalBlobProvider](https://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/blob/LocalBlobProvider.html)

{{#> callout type='note' heading='2021 Default Blob Provider'}}
In LTS 2021, the default Blob Provider is [DefaultBinaryManager](https://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/blob/binary/DefaultBinaryManager.html). This GC implementation is therefore not supported out of the box in LTS 2021. You can switch to [LocalBlobProvider](https://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/blob/LocalBlobProvider.html) to benefit from this GC implementation with this configuration property:
```
nuxeo.core.binarymanager=org.nuxeo.ecm.core.blob.LocalBlobProvider
```
See [NXP-31876](https://jira.nuxeo.com/browse/NXP-31876).
{{/callout}}

### Disablement

Immediate Garbage Collection is enabled by default. You can disable it with the following configuration property:

```
nuxeo.bulk.action.blobGC.enabled=false
```

## Full Garbage Collection

Since [LTS 2021-HF38]({{page page='nuxeo-server-release-notes-2021-38'}}) (see [NXP-28565](https://jira.nuxeo.com/browse/NXP-28565)), a new Full GC implementation is available to scan your blob store in order to detect and delete the blobs that are no longer referenced in your repository.

This Full GC leverages the [Bulk Action Framework]({{page page='bulk-action-framework'}}). Like other bulk actions, the following configuration properties can be tweaked to fit your environment:
```
nuxeo.bulk.action.garbageCollectOrphanBlobs.defaultConcurrency=2
nuxeo.bulk.action.garbageCollectOrphanBlobs.defaultPartitions=4
```

Please see the dedicated [Blobs Management Rest endpoint]({{page space='rest-api' version='1' page='blobs-endpoint'}}#garbage-collect-documentand39s-blobs) to invoke and monitor a Blob Full GC.

{{#> callout type='info' }}
Despite this implementation being designed to scale on big volumes of data, it will necessarily take some time to fully garbage collect a repository referencing a certain amount of blobs.
{{/callout}}

{{#> callout type='tip' }}
It is recommended first to run an orphaned version GC in order to remove references to blobs. It would allow the orphaned blob Full GC to free more space. See [Versions Management Rest endpoint]({{page space='rest-api' version='1' page='versions-endpoint'}}#garbage-collect-orphaned-versions) to do so.
{{/callout}}
