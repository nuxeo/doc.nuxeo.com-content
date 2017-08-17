---
title: "HOWTO: Create and Reuse a Custom element"
review:
    comment: ''
    date: '2017-04-12'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to create and reuse a custom element in Studio Designer.
        level: Advanced
        tool: code
        topics: Web UI
labels:
    - lts2016-ok
    - tutorial
    - nuxeo-elements
    - nuxeo-ui-elements
    - polymer
tree_item_index: 1200
---
{{! excerpt}}
In this tutorial you will learn how to create and reuse custom elements in Studio Designer.
{{! /excerpt}}

{{{multiexcerpt 'Designer-restricted-access-note' page='generic-multi-excerpts'}}}

## Requirements

- A [Contract document type]({{page version='' space='nxdoc' page='getting-started-with-nuxeo-studio'}}#step-3-create-a-contract-document-type) created in Studio Modeler
- The Web UI addon installed on your instance

## Create an Element
We are going to start by adding a `validation` schema to our Contract document type.

In Studio Modeler, go to **Configuration**&nbsp;> **Content Model**&nbsp;> **Schemas**
1. Click on **New** and name it `validation`.
1. Add a field `validated` as a boolean.
1. Save your changes.

Go to the Studio Designer on the **Resources** tab.
1. Create a folder called `elements`.
1. In it, create an element called `my-validation-element`.
  ![]({{file name='create-element-VD.png'}} ?w=200,border=true)
1. Edit the layout of the element by adding the validation schema.
  ![]({{file name='schema-annotations-VD.png'}} ?w=200,border=true)
1. In the HTML editor, replace the lines describing the title and description by the following to call your `validation` element:
  ```
  <div role="widget">
      <label>Validated</label>
      <paper-checkbox checked="{{document.properties.validation:validated}}"></paper-checkbox>
  </div>
  ```
1. Save your changes.

## Reuse an Element

Now, go to your `contract` document type, on the view layout to use your element:
1. Click on **Customize**.
1. Switch to Code Editor at the button of the main view. On the search available in the elements catalog, search `my-validation-element`.
1. Drag and drop it from the catalog to the editor.
  ![]({{file name='contract-view-layout-element.png'}} ?w=650,border=true)
1. Save your changes and deploy your studio project, you're done :)

  You can now reuse your element as much as you want, for example on the other layouts of your contract document, it will always be available in the **Project Elements** library.


* * *

{{#> callout type='info' heading='Learn more'}}

- [Document and Workflow Task Layouts with Nuxeo Studio Designer course from Nuxeo University](https://university.nuxeo.com/store/187249-document-and-workflow-task-layouts-with-nuxeo-studio-designer)

{{/callout}}
