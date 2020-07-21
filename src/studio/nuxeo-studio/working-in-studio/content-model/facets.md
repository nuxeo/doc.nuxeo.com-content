---
title: Facets
review:
  comment: ''
  date: '2020-07-21'
  status: ok
labels:
  - document-type
  - facet
toc: true
tree_item_index: 250
---

{{#> callout type='info' heading='Nuxeo University'}}
Watch the expert session on [Content Modeling Options](https://university.nuxeo.com/learn/course/external/view/elearning/203/content-modeling-options):</br>
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/content-modeling-options.png
    name: content-modeling-options.png
    studio_modeler#diagram#up_to_date
--}}
![content-modeling-options.png](nx_asset://3911d973-4b4e-44ae-906f-c6a2c7321352 ?w=450,border=true)
{{/callout}}

## Concept

Facets can be seen as a property, a flag or configuration option of a document type:
- It can add schemas of properties to the document
- It can be defined as part of the default document type configuration in Nuxeo Studio
- It can be added/removed from a document using Automation

Document facets are part of the document definition.

## Available Facets

The default document facets are listed in the [Available Facets]({{page version='' space='nxdoc' page='available-facets'}}) documentation page.

## Functional Use Cases

- When a document is validated, we need to store the validation period.</br>
  More details about this use case in the [HOWTO: Customize the Default Document View]({{page version='' space='nxdoc' page='how-to-update-default-nuxeo-page'}}) documentation page.

- After a document is indicated as a "template", we need to store information about who can use and publish the document.

- We need to indicate which documents are "Assets" and should be returned in standard search results.

- To avoid having to determine if a document is linked to rights data, we will set a "Has Rights" facet.

- When a Document is sent to an external service, we need to store information on this service to know how to access that external instance of the document.

## Facets Used as Flag

Facets can be used to **filter searches**:
```
SELECT * FROM Document WHERE ecm:mixinType != 'HiddenInNavigation' AND ...
```

Facets can be used to **show-hide widgets**:
```
<template is="dom-if" if="[[hasFacet('MyFacet')]]">...
```

Facets can be checked in **automation or Java code**:
```js
if(input.hasFacet("MyFacet")) {
  ...
} else …
```

## Facet Creation and Registration

Please refer to the [HOWTO: Create and Use a Document Facet]({{page version='' space='studio' page='how-to-create-and-use-document-facets'}}) documentation page.
