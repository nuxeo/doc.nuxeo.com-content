---
title: 'HOWTO: Create and Use Document Facets'
description: Learn How to Create and Reuse Document Facets in Nuxeo Studio
review:
    date: '2019-10-07'
    status: ok
    comment: ''
toc: true
details:
  howto:
    excerpt: Learn How to Create and Reuse Document Facets in Nuxeo Studio
    level: Intermediate
    tool: Nuxeo Studio
    topics: Facets
tree_item_index: 40
---
{{! excerpt}}
Document facets can be attached dynamically to implement specific business logic.
{{! /excerpt}}

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related content in Nuxeo University:</br>
[Course on Content Model Design in Nuxeo Studio](https://university.nuxeo.com/learn/course/external/view/elearning/12/ContentModelDesigninNuxeoStudio)</br>
[Expert Session on Content Modeling Options](https://university.nuxeo.com/learn/course/external/view/elearning/203/ExpertSession-ContentModelingOptions)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/doctypes_university.png
    name: doctypes_university.png
    studio_modeler#screenshot#up_to_date
--}}
![doctypes_university.png](nx_asset://27d822b7-7815-48e0-95ad-0ff102a284d2 ?w=450,border=true)
{{/callout}}

## Concept

Enabling a facet on a Nuxeo document adds additional functionality. Facets can be used to attach a schema to a document. It can be interpreted by Nuxeo Web UI to display additional data or views of the document, like:

- **Folderish**: Can be a parent to specified document types.
- **NXTag**: Can be tagged, includes the tag schema.
- **Picture/Video**: Changes how the document is displayed to show document conversions, multimedia information extraction.
- etc.

## Use Case

We will create a new facet, entitled `ValidityFacet`, which is applied to any **approved** document. The facet is linked to a custom schema called `validity` which provided information about the validity period of a document.

### Create the Validity Schema

1. In Studio Modeler, create a new external schema in **Configuration** > **Content Model** > **Schemas**, called `validity`.
1. Add two **Date** properties: `ValidityStartFrom` and `ValidityEndsIn`.

### Create the Facet to the Studio Registry

The next step is about registering the new built-in document facet.

1. In Studio Modeler, navigate to **Settings** > **Registries** > **Document Facets**.
1. Add the new facet using the example provided in the upper section:

```
{
  "facets": [
    {
      "id": "ValidityFacet",
      "description": "Facet applied to all new validated document"
    }
  ]
}
```

{{#> callout type='note'}}
At this step, you should see the **ValidityFacet** checkbox in the **Definition** screen of your document type.
{{/callout}}

### Link the Facet to the Schema

In Studio Modeler, create an XML Extension in **Configuration** > **Advanced Settings** > **XML Extensions** to associate the facet with the schema previously created:

```
<extension point="doctype" target="org.nuxeo.ecm.core.schema.TypeService">
  <facet name="ValidityFacet">
    <schema name="validity" />
  </facet>
</extension>
```

### Add Business Logic

Nuxeo Studio exposes the `Document.AddFacet` automation operation so that you can add the facet dynamically:
- You can execute it from an **Event Handler** (Like On _Document Created_ event with some criteria, like the document location, or the document lifecycle state in our example).
- You can also trigger this operation from a **button**, created in **Nuxeo Studio Designer**.

### Design Your Visual Element

There is no default UI component for the facet, so it needs to be created manually, either from the **UI** > **Layout Blocks** menu, or directly in the **Resources** tab.

Then, you can add the following condition in your elements and layouts to display or not the facet information:

```
<template is="dom-if" if="[[hasFacet(document, 'ValidityFacet')]]">
  <!-- Code of the UI element displaying the facet information -->
</template>
```
