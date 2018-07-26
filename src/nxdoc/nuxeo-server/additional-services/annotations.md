---
title: Annotations
description: See how to handle annotations in Nuxeo
review:
    comment: ''
    date: '2017-07-06'
    status: ok
labels:
    - annotations
    - annotation-component
toc: true
tree_item_index: 1300
---

Annotations in Nuxeo are linked to a specific document and one of its blob.

You can get the [`AnnotationService`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/annotation/AnnotationService.html) with `Framework#getService`.

Service provides API to get / create / update / delete annotation.

To access it through REST, you can use the [web adapter](https://doc.nuxeo.com/nxdoc/rest-api-web-adapters/).

## Core Implementation

Annotations are stored as placeless document in Nuxeo. Their document type is `Annotation` and main schema is `annotation`. They hold:
- document id
- blob xpath
- annotation id (from external system)
- entity (string representation from external system)

Service uses two page providers, defined as core page provider, to retrieve annotations:
- GET\_ANNOTATION
- GET\_ANNOTATIONS\_FOR\_DOCUMENT

## Configuration

You can change the storage place by contributing the following to [ConfigurationService](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.runtime.ConfigurationService--configuration):
```xml
<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
  <property name="nuxeo.annotations.placeless.storage">true</property>
</extension>
```
By contributing that, annotations will be stored in an `HiddenFolder` named `Annotations` under the domain of annotated document.
