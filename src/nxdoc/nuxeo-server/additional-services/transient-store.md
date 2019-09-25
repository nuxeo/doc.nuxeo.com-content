---
title: Transient Store
review:
    comment: ''
    date: '2016-12-06'
    status: ok
labels:
    - lts2016-ok
    - core-component
    - link-update
    - excerpt
toc: true
tree_item_index: 1200
history:
    -
        author: Antoine Taillefer
        date: '2016-02-04 12:56'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2016-01-08 10:41'
        message: ''
        version: '10'
    -
        author: Antoine Taillefer
        date: '2016-01-06 15:29'
        message: ''
        version: '9'
    -
        author: Antoine Taillefer
        date: '2016-01-06 14:25'
        message: ''
        version: '8'
    -
        author: Antoine Taillefer
        date: '2016-01-06 13:51'
        message: ''
        version: '7'
    -
        author: Antoine Taillefer
        date: '2016-01-06 13:48'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2015-12-28 09:24'
        message: ''
        version: '5'
    -
        author: Antoine Taillefer
        date: '2015-12-24 10:38'
        message: ''
        version: '4'
    -
        author: Antoine Taillefer
        date: '2015-12-24 10:35'
        message: ''
        version: '3'
    -
        author: Antoine Taillefer
        date: '2015-12-24 10:30'
        message: ''
        version: '2'
    -
        author: Antoine Taillefer
        date: '2015-12-09 10:43'
        message: ''
        version: '1'

---
{{! excerpt}}

A Transient Store allows you to store temporary blobs and associated parameters in a Nuxeo instance but outside of the document repository, thus the "transient" aspect.

{{! /excerpt}}

It is typically used by:

*   The [Batch Upload API]({{page page='batch-upload-endpoint'}}) to temporarily store a batch of uploaded blobs until they are attached to a document.
*   The `ConversionService` to store the `BlobHolder` resulting from an [Asynchronous Conversion Work]({{page page='conversion'}}#rest-api-async-conversions).

The [TransientStore](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/transientstore/api/TransientStore.html) API is based on the following methods:

```java
void putBlobs(String key, List blobs);
void putParameter(String key, String parameter, Serializable value);
void putParameters(String key, Map parameters);

List getBlobs(String key);
Serializable getParameter(String key, String parameter);
Map getParameters(String key);
```

## Configuration

You can configure any number of transient stores with the following extension point:

```xml
<extension target="org.nuxeo.ecm.core.transientstore.TransientStorageComponent"
  point="store">
  <store name="myTransientStore" class="my.transientstore.implementation">
    <targetMaxSizeMB>-1</targetMaxSizeMB>
    <absoluteMaxSizeMB>-1</absoluteMaxSizeMB>
    <firstLevelTTL>240</firstLevelTTL>
    <secondLevelTTL>10</secondLevelTTL>
  </store>
</extension>
```

The `store` element supports two attributes:

*   `name`: Used to identify the store.
*   `class`: Optionally references an implementation of the `TransientStore` interface (the default is `SimpleTransientStore`).

The nested configuration elements are:

*   `targetMaxSizeMB`: The target size that ideally should never be exceeded.
*   `absoluteMaxSizeMB`: The size that must never be exceeded.
*   `firstLevelTTL`: TTL in minutes of the first level cache.
*   `secondLevelTTL`: TTL in minutes of the second level cache.

Have a look at the [default transient store configuration](https://github.com/nuxeo/nuxeo/blob/8.10/nuxeo-distribution/nuxeo-nxr-server/src/main/resources/templates/common/config/transient-store-config.xml.nxftl), defined in a template:

{{#> panel type='code' heading='Default Transient Store Configuration'}}

```xml
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.core.transient.store.config">
  <#if "${nuxeo.redis.enabled}" == "true">
    <#assign className = "org.nuxeo.ecm.core.redis.contribs.RedisTransientStore" />
  <#else>
    <#assign className = "org.nuxeo.ecm.core.transientstore.SimpleTransientStore" />
  </#if>
  <extension target="org.nuxeo.ecm.core.transientstore.TransientStorageComponent"
    point="store">
    <store name="default" class="${className}">
      <targetMaxSizeMB>-1</targetMaxSizeMB>
      <absoluteMaxSizeMB>-1</absoluteMaxSizeMB>
      <firstLevelTTL>240</firstLevelTTL>
      <secondLevelTTL>10</secondLevelTTL>
      <minimalRetention>10</minimalRetention>
    </store>
  </extension>
</component>
```

{{/panel}}

In this template the class is dynamically defined depending on whether [Redis]({{page page='redis-configuration'}}) is enabled or not.
If you need to define a custom transient store we strongly recommend you use such a template with this dynamic class definition mechanism so that:

*   In development mode, where Redis is usually not enabled, you rely on the in-memory cache implementation.
*   In [cluster mode]({{page page='nuxeo-clustering-configuration'}}), where Redis needs to be enabled, the data stored in the transient store is shared between cluster nodes.

To retrieve a given transient store, just call `TransientStoreService#getStore(String name)`. If the specified transient store hasn't been registered, the `default` one is used instead.

## Implementation

As seen above there are two implementations available in the default Nuxeo platform. They both handle blob storage in the same way but store the parameters differently.

### Blob Storage

The transient blob storage directory used by the two default implementations of the transient store is located in `$DATA_DIR/transientstores/<transientstore_name>`. Typically for the default transient store on a Nuxeo instance where the data directory is not externalized, it is: `$NUXEO/nxserver/data/transientstores/default`.

{{#> callout type='warning' heading='Clustering Configuration'}}

In a cluster environment the transient blob storage directory must be shared by all the Nuxeo instances, see the [related documentation]({{page page='Nuxeo Clustering+Configuration'}}#transient-store).

{{/callout}}

### Parameter Storage

The `SimpleTransientStore` implementation relies on Nuxeo's [in-memory cache implementation](https://github.com/nuxeo/nuxeo/blob/8.10/nuxeo-core/nuxeo-core-cache/src/main/java/org/nuxeo/ecm/core/cache/InMemoryCacheImpl.java) which uses Google's Guava cache. **It is not distributed and not persistent** so should not be used in a clustered setting.

The `RedisTransientStore` relies on [Redis]({{page page='nuxeo-and-redis'}}). **It is distributed and persistent.**

{{#> callout type='warning' heading='Clustering configuration'}}

In a cluster environment Nuxeo must be configured to use a Redis server and any transient store accessed by multiple Nuxeo instances must use the `RedisTransientStore` implementation, or a custom implementation that is cluster-aware.

{{/callout}}

See [NXP-18051](https://jira.nuxeo.com/browse/NXP-18051) for details about the `RedisTransientStore` cluster-aware implementation.

## Time To Live and Garbage Collector

Entries have a Time To Live (TTL) defined in the transient store configuration.

Initially the TTL of an entry is set to `firstLevelTTL`. It can later be set to `secondLevelTTL` by calling `TransientStore#release(String key)`.

The garbage collection:

*   Is scheduled every 15 minutes to wipe the files associated to entries that don't exist anymore.
*   Can be triggered manually on a given store with `TransientStore#doGC` or all stores with `TransientStoreService#doGC`.

## Example Services Using a Transient Store

### BatchManager

It relies on the `BatchManagerCache` transient store which in fact is not registered so it falls back on the `default` transient store, this is to allow overriding the configuration if needed.

See the "Batch Upload Example" section of [NXP-18050](https://jira.nuxeo.com/browse/NXP-18050) for details.

### TransientStoreWork

A `Work` allowing to store a result in a transient store.

It relies on the `transientStoreWorkCache` transient store, also not registered with a fallback on the `default` transient store.

For example, the [Asynchronous Conversions]({{page page='conversion'}}#asynchronous-conversions) rely on such instances of `TransientStoreWork` via the `ConversionWork` class.

{{! Don't put anything here. }}

* * *
