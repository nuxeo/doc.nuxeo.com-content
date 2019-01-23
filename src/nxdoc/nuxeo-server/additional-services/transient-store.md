---
title: Transient Store
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - lts2016-ok
    - core-component
    - fguillaume
    - link-update
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '16089319'
    ajs-parent-page-title: Additional Services
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Transient+Store
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Transient+Store'
    page_id: '27592193'
    shortlink: AQalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/AQalAQ'
    source_link: /display/NXDOC/Transient+Store
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
A Transient Store allows you to store temporary blobs and associated parameters (file name, MIME type, etc.) in a Nuxeo instance but outside of the document repository, thus the "transient" aspect.
{{! /excerpt}}

It is typically used by:

- The [Batch Upload API]({{page page='batch-upload-endpoint'}}) to temporarily store a batch of uploaded blobs until they are attached to a document.
- The `ConversionService` to store the `BlobHolder` resulting from an [Asynchronous Conversion Work]({{page page='conversion'}}#rest-api-async-conversions).
- The `BatchHandler` contributions that interact with the Transient Store.

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
  <store name="foobar" class="...">
    <targetMaxSizeMB>-1</targetMaxSizeMB>
    <absoluteMaxSizeMB>-1</absoluteMaxSizeMB>
    <firstLevelTTL>240</firstLevelTTL>
    <secondLevelTTL>10</secondLevelTTL>
    <!--
       Optional, may be used with the KeyValueBlobTransientStore
       if you don't want the default naming.
    <property name="keyValueStore">transient_foobar</property>
    <property name="blobProvider">transient_foobar</property>
    -->
</store>
</extension>
```

The `store` element supports two attributes:

- `name`: Used to identify the transient store.
- `class`: Optionally references an implementation of the `TransientStore` interface (the default is to use the same class as the `default` transient store, which is `KeyValueBlobTransientStore` by default).

The nested configuration elements are:

- `targetMaxSizeMB`: The target size that ideally should never be exceeded.
- `absoluteMaxSizeMB`: The size that must never be exceeded.
- `firstLevelTTL`: TTL in minutes of the first level cache.
- `secondLevelTTL`: TTL in minutes of the second level cache.

Two additional properties can be defined if the `KeyValueBlobTransientStore` is used:

- `keyValueStore`: The key/value store name.
- `blobProvider`: The blob provider name.

Both of these names default to `transient_` followed by the transient store name.

Have a look at the [default transient store configuration](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-distribution/nuxeo-nxr-server/src/main/resources/templates/common/config/transient-store-config.xml), defined in a template:

{{#> panel type='code' heading='Default Transient Store Configuration'}}
```xml
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.core.transient.store.config">
  <extension target="org.nuxeo.ecm.core.transientstore.TransientStorageComponent"
    point="store">
    <store name="default" class="org.nuxeo.ecm.core.transientstore.keyvalueblob.KeyValueBlobTransientStore">
      <targetMaxSizeMB>-1</targetMaxSizeMB>
      <absoluteMaxSizeMB>-1</absoluteMaxSizeMB>
      <firstLevelTTL>240</firstLevelTTL>
      <secondLevelTTL>10</secondLevelTTL>
    </store>
  </extension>
</component>
```
{{/panel}}

To retrieve a given transient store, just call `TransientStoreService#getStore(String name)`. If the specified transient store hasn't been registered, the `default` one is used instead.

### Implementation

Other implementations than `KeyValueBlobTransientStore` can be used, but this is the recommended one. If you use the `redis` template and want to use the old `RedisTransientStore`, you must set `nuxeo.transientstore.provider=redis`.

## Blob Storage

The `KeyValueBlobTransientStore` stores its blobs in a `BlobProvider`. You can either specify the name of the blob provider to use with `<property name="blobProvider">myblobprovider</property>`, or let it default to `transient_` followed by the transient store name.

If a blob provider is referenced but there is no actual XML configuration for it, a configuration based on the `default` blob provider will be used, however with a "namespace" to avoid collisions. For the file-based blob provider, this will be in a directory named `binaries_` followed by the blob provider name. For S3 or Azure, this will be in a "subfolder" of the bucket/container named from the blob provider name.

It's important to mark the blob provider as `transient` in its configuration using `<property name="transient">true</property>`. This is done implicitly if the blob provider names starts with `transient`.

{{#> callout type='warning' heading='Clustering Configuration'}}
In a cluster environment the transient blob provider must be shared by all the Nuxeo instances, see the [related documentation]({{page page='Nuxeo Clustering+Configuration'}}#transient-store).
{{/callout}}

## Parameter Storage

The `KeyValueBlobTransientStore` stores its parameters in a `KeyValueStore`. You can either specify the name of the key/value store to use with `<property name="keyValueStore">mykeyvaluestore</property>`, or let it default to `transient_` followed by the transient store name.

If a key/value store is referenced but there is no actual XML configuration for it, a configuration based on the `default` key/value store will be used, however with a "namespace" to avoid collisions.

The `default` key/value store in Nuxeo templates is `SQLKeyValueStore` if a SQL database is used, or `MongoDBKeyValueStore` if MongoDB is used.

## Time To Live and Garbage Collector

Entries have a Time To Live (TTL) defined in the transient store configuration.

Initially the TTL of an entry is set to `firstLevelTTL`. It can later be set to `secondLevelTTL` by calling `TransientStore#release(String key)`.

The garbage collection:

- Is scheduled every 15 minutes to wipe the files associated to entries that don't exist anymore.
- Can be triggered manually on a given store with `TransientStore#doGC` or all stores with `TransientStoreService#doGC`.

## Example Services Using a Transient Store

### BatchMananager

It relies on the `BatchManagerCache` transient store which in fact is not registered so it falls back on the `default` transient store, this is to allow overriding the configuration if needed.

See the "Batch Upload Example" section of [NXP-18050](https://jira.nuxeo.com/browse/NXP-18050) for details.

### TransientStoreWork

A `Work` allowing to store a result in a transient store.

It relies on the `transientStoreWorkCache` transient store, also not registered with a fallback on the `default` transient store.

For example, the [Asynchronous Conversions]({{page page='conversion'}}#asynchronous-conversions) rely on such instances of `TransientStoreWork` via the `ConversionWork` class.


* * *
