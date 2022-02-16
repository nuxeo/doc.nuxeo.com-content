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

{{#> callout type='info' heading='Hyland University'}}
Watch the expert session on [Content Modeling Options](https://university.hyland.com/courses/e4025):</br>
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

## Creating a new Facet

To create a facet, click on **New**.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Facets/New Facet
    name: NewFacet.png
    studio_modeler#popup#up_to_date
--}}
![New Facet](nx_asset://71e42fbf-61d1-4348-8dd6-859c3d875c24 ?w=350,border=true)

* **Feature ID**: Technical ID of the feature
* **Label**: The label that will be displayed when selecting facets of a Document Type. Choose a short explicit name and capitalize it if you want it to appear before the built-in facets.
* **Description**: The description of the facet, its functional purpose and where/when to use it. This description is here for information purposes.

## Editing a Facet

Once created, your can attach schemas to your facet

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Facets/Edit Facet
    name: EditFacet.png
    studio_modeler#screenshot#up_to_date
--}}
![Edit Facet](nx_asset://093b433e-ac0c-4c91-9b9d-dfddf2123e27 ?w=650,border=true)

* **Associated Schemas**: This is the list of schemas associated to your facet. You don't have to add anything here if you use the facet as a flag.

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

## Use an external Facet

In order to reference an externally contributed Facet, you have to add it manually to the registries [using the custom facet registries]({{page page='registries'}}).
