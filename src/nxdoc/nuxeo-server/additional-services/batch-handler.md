---
title: Batch Handler
description: Nuxeo BatchHandler Batch handler batch customization
review:
    date: '2018-05-23'
    status: ok
    comment: ''
label:
    - batch-handler
    -
toc: true
---

## BatchHandler

Batch Handler is a concept introduced in Nuxeo Platform 10.1 Fast Track version, which consists in allowing custom upload behaviour to all the batches.

The previous behaviour is now a provider, which we call "Default". When needed, you can customize the Transient Store to manage your uploads (e.g., Use a 3rd party cloud provider storage).

## Interface

```java
void initialize(String name, Map<String, String> properties);
String getName();
Batch newBatch(String batchId);
Batch getBatch(String batchId);
boolean completeUpload(String batchId, String fileIdx, BatchFileInfo fileInfo)
```


## Contributing Your Own Handler
To implement your own handler you need to implement the interface `BatchHandler` and register it through the extension point `handlers` in `org.nuxeo.ecm.automation.server.BatchManager`.

e.g.:

```xml
<extension target="org.nuxeo.ecm.automation.server.BatchManager" point="handlers">
  <batchHandler>
    <name>foo</name>
    <class>org.someorg.somepackage.SomeClassThatImplementsBatchHandler</class>
    <property name="transientStore">${backingTransientStore}</property>
    <property name="key1">value1</property>
    <property name="key2">value2</property>
    ...
    <property name="keyN">valueN</property>
  </batchHandler>
</extension>
```

A [S3DirectBatchHandler]({{page space='nxdoc' page='amazon-s3-online-storage'}}) is provided and configured in the [Amazon S3 Online Storage](https://connect.nuxeo.com/nuxeo/site/marketplace/package/amazon-s3-online-storage) addon.
