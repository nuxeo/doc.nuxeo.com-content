---
title: Transient Store
review:
    comment: ''
    date: ''
    status: ok
labels:
    - core-component
    - link-update
toc: true
confluence:
    ajs-parent-page-id: '28475785'
    ajs-parent-page-title: Additional Services
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Transient+Store
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Transient+Store'
    page_id: '28475696'
    shortlink: MIGyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/MIGyAQ'
    source_link: /display/NXDOC710/Transient+Store
tree_item_index: 1200
history:
    -
        author: Solen Guitter
        date: '2016-02-08 13:27'
        message: dd information about TT
        version: '9'
    -
        author: Solen Guitter
        date: '2016-01-08 10:43'
        message: Fix link
        version: '8'
    -
        author: Solen Guitter
        date: '2016-01-08 10:34'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2016-01-08 10:33'
        message: Add TransientStoreWork
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

<span style="color: rgb(68,68,68);">The Transient Store allows to store temporary blobs and associated parameters on a Nuxeo instance but outside the repository, thus the "transient" aspect.</span>

{{! /excerpt}}

It is typically used by:

*   The new&nbsp;[Batch Upload API]({{page page='blob-upload-for-batch-processing'}})&nbsp;to store a batch of uploaded blobs until they are attached to a document.
*   The ConversionService to store the BlobHolder resulting from an&nbsp;[Asynchronous Conversion Work.]({{page page='conversion#rest-api-async-conversions'}})

<span style="color: rgb(68,68,68);">The new</span> [Transient Store](https://github.com/nuxeo/nuxeo/blob/release-7.10/nuxeo-core/nuxeo-core-cache/src/main/java/org/nuxeo/ecm/core/transientstore/api/TransientStore.java) <span style="color: rgb(68,68,68);">API allows this simply:</span>

```java
void putBlobs(String key, List blobs);

List getBlobs(String key);

void putParameters(String key, Map parameters);

Map getParameters(String key);

void putParameter(String key, String parameter, Serializable value);

Serializable getParameter(String key, String parameter);
```

## Configuration

You can configure several Transient Stores with the following extension point:

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

The `store` tag supports two attributes:

*   `name`: Used to identify the store.
*   `class`: References&nbsp;an implementation of the `TransientStore`&nbsp;interface (default is `SimpleTransientStore`).

Nested configuration elements are:

*   `targetMaxSizeMB`: The target size that ideally should never be exceeded.
*   `absoluteMaxSizeMB`: The size that must never be exceeded.
*   `firstLevelTTL`:&nbsp;TTL in minutes of the first level cache.
*   `secondLevelTTL`:&nbsp;TTL in minutes of the second level cache.

Have a look at the [default Transient Store configuration](https://github.com/nuxeo/nuxeo/blob/release-7.10/nuxeo-distribution/nuxeo-distribution-resources/src/main/resources/templates-tomcat/common/config/transient-store-config.xml.nxftl) defined in a template:

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

The class is dynamically defined depending on if [Redis]({{page space='admindoc710' page='redis-configuration'}}) is enabled or not.
If you need to define a custom Transient Store we strongly recommend you use such a template with this dynamic class definition mechanism so that:

*   In dev mode where usually Redis is not enabled you rely on the in-memory cache implementation.
*   In [cluster mode]({{page space='admindoc710' page='nuxeo-clustering-configuration'}})&nbsp;where Redis needs to be enabled the data stored in the Transient Store is distributed.

To get a given Transient Store just call&nbsp;`TransientStoreService#getStore(String name)`.

If the store doesn't exist the default one is retrieved (if for any reason the default store is not registered it is registered&nbsp;using the&nbsp;`SimpleTransientStore` implementation).

## Implementation

As seen above there are two implementations. They both handle file storage the same way but store the data differently.

### File Storage

<span style="color: rgb(0,0,0);">The caching directory used by any Transient Store is located in `$DATA_DIR/transientstores/<transientstore_name>`.</span>

<span style="color: rgb(0,0,0);">Typically for the default Transient Store on an instance with the Nuxeo data directory not externalized:&nbsp;`nxserver/data/transientstores/default` <span style="color: rgb(0,0,0);">.</span></span>

{{#> callout type='warning' heading='Clustering Configuration'}}

In a cluster environment the caching directory must be shared by all the Nuxeo instances, see the [related documentation]({{page space='admindoc710' page='nuxeo-clustering-configuration'}}).

{{/callout}}

### <span style="color: rgb(0,0,0);">Data Storage&nbsp;</span>

The&nbsp;`SimpleTransientStore` relies on Nuxeo's [in-memory cache implementation](https://github.com/nuxeo/nuxeo/blob/release-7.10/nuxeo-core/nuxeo-core-cache/src/main/java/org/nuxeo/ecm/core/cache/InMemoryCacheImpl.java) using Google's Guava cache.

**It is not distributed and not persistent.**

The&nbsp;`RedisTransientStore` relies on Redis.

**It is distributed and persistent.**

{{#> callout type='warning' heading='Clustering configuration'}}

&nbsp;In a cluster environment Nuxeo must be configured to use a Redis server and any Transient Store accessed by multiple Nuxeo instances must use the `RedisTransientStore` implementation.

{{/callout}}

See [NXP-18051](https://jira.nuxeo.com/browse/NXP-18051) for details about the `RedisTransientStore` cluster aware implementation.

## Examples

### BatchManager

It relies on the `BatchManagerCache` Transient Store which in fact is not registered so it falls back on the default store, this is to allow overriding the configuration if needed.

See the "Batch Upload Example"&nbsp;section of&nbsp;[NXP-18050](https://jira.nuxeo.com/browse/NXP-18050)&nbsp;for details.

### TransientStoreWork

A [Work](https://github.com/nuxeo/nuxeo/blob/release-7.10/nuxeo-core/nuxeo-core-event/src/main/java/org/nuxeo/ecm/core/work/api/Work.java) allowing to store a result in a Transient Store.

It relies on the `transientStoreWorkCache` Transient Store, also not registered with a fall back on the default store.

For example, the&nbsp;[Asynchronous Conversions]({{page page='conversion#java-api-async-conversions'}}) rely on such instances of&nbsp;`TransientStoreWork` via the&nbsp;`ConversionWork` class.

## Time To Live and Garbage Collector

Entries have a Time To Live (TTL) defined in the store configuration.

By default the TTL is set to `firstLevelTTL`, it can be set to `secondLevelTTL`&nbsp;by calling `TransientStore#release(String key)`.

Garbage collection:

*   Is scheduled every 15 minutes to wipe the files associated to entries that don't exist anymore.
*   Can be triggered manually on a given store with `TransientStore#doGC`&nbsp;or all stores with&nbsp;`TransientStoreService#doGC`.

{{! Don't put anything here. }}

* * *
