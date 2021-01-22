---
title: Nuxeo Sample Project
review:
    comment: ''
    date: '2019-11-29'
    status: ok
labels:
    - sample
toc: true
tree_item_index: 2560
---

{{! excerpt}}
[Nuxeo Sample](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-sample) registers bare contributions defined in [https://github.com/nuxeo/nuxeo-sample-project](https://github.com/nuxeo/nuxeo-sample-project) to help developers discover contributions mechanism.
{{! /excerpt}}

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Samples

### Content Enricher

[Documentation page]({{page version='' space='nxdoc' page='content-enrichers'}})

Related files:

- `Enricher`: [SampleDocumentEnricher.java](https://github.com/nuxeo/nuxeo-sample-project/blob/master/nuxeo-sample/src/main/java/org/nuxeo/sample/SampleDocumentEnricher.java)

- `Contribution`: [sample-document-enricher-contrib.xml](https://github.com/nuxeo/nuxeo-sample-project/blob/master/nuxeo-sample/src/main/resources/OSGI-INF/sample-document-enricher-contrib.xml)

- `Unit Test`: [SampleDocumentEnricherTest.java](https://github.com/nuxeo/nuxeo-sample-project/blob/master/nuxeo-sample/src/test/java/org/nuxeo/sample/SampleDocumentEnricherTest.java)

### Asynchronous Listener

[Documentation page]({{page page='events-and-messages'}})

Related files:

- `Listener`: [SampleAsyncListener.java](https://github.com/nuxeo/nuxeo-sample-project/blob/master/nuxeo-sample/src/main/java/org/nuxeo/sample/SampleAsyncListener.java)

- `Contribution`: [sample-async-listener-contrib.xml](https://github.com/nuxeo/nuxeo-sample-project/blob/master/nuxeo-sample/src/main/resources/OSGI-INF/sample-async-listener-listener-contrib.xml)

- `Unit Test`: [TestSampleAsyncListener.java](https://github.com/nuxeo/nuxeo-sample-project/blob/master/nuxeo-sample/src/test/java/org/nuxeo/sample/TestSampleAsyncListener.java)

### Synchronous Listener

[Documentation page]({{page page='events-and-messages'}})

Related files:

- `Listener`: [SampleSyncListener.java](https://github.com/nuxeo/nuxeo-sample-project/blob/master/nuxeo-sample/src/main/java/org/nuxeo/sample/SampleSyncListener.java)

- `Contribution`: [sample-sync-listener-contrib.xml](https://github.com/nuxeo/nuxeo-sample-project/blob/master/nuxeo-sample/src/main/resources/OSGI-INF/sample-sync-listener-listener-contrib.xml)

- `Unit Test`: [TestSampleSyncListener.java](https://github.com/nuxeo/nuxeo-sample-project/blob/master/nuxeo-sample/src/test/java/org/nuxeo/sample/TestSampleSyncListener.java)

### Operation

[Documentation page]({{page page='contributing-an-operation'}})

Related files:

- `Operation`: [SampleOperation.java](https://github.com/nuxeo/nuxeo-sample-project/blob/master/nuxeo-sample/src/main/java/org/nuxeo/sample/SampleOperation.java)

- `Contribution`: [sample-operation-contrib.xml](https://github.com/nuxeo/nuxeo-sample-project/blob/master/nuxeo-sample/src/main/resources/OSGI-INF/sample-operation-operation-contrib.xml)

- `Unit Test`: [TestSampleOperation.java](https://github.com/nuxeo/nuxeo-sample-project/blob/master/nuxeo-sample/src/test/java/org/nuxeo/sample/TestSampleOperation.java)

### Service

[Documentation page]({{page page='runtime-and-component-model'}})

Related files:

- `Service Interface`: [SampleService.java](https://github.com/nuxeo/nuxeo-sample-project/blob/master/nuxeo-sample/src/main/java/org/nuxeo/sample/SampleService.java)

- `Service Implementation`: [SampleServiceImpl.java](https://github.com/nuxeo/nuxeo-sample-project/blob/master/nuxeo-sample/src/main/java/org/nuxeo/sample/SampleServiceImpl.java)

- `Contribution`: [sample-service.xml](https://github.com/nuxeo/nuxeo-sample-project/blob/master/nuxeo-sample/src/main/resources/OSGI-INF/sample-service-service.xml)

- `Unit Test`: [TestSampleService.java](https://github.com/nuxeo/nuxeo-sample-project/blob/master/nuxeo-sample/src/test/java/org/nuxeo/sample/TestSampleService.java)

## To Go Further

Do not hesitate to give a look to [Nuxeo CLI]({{page version='' space='nxdoc' page='nuxeo-cli'}}). We built it to help you reducing the amount of boilerplate you have to write.
