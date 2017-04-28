---
title: "HOWTO: Create and Reuse a Custom element"
review:
    comment: ''
    date: '2017-04-12'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to create and reuse a custom element in View Designer.
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
In this tutorial you will learn how to create and reuse custom elements in View Designer.
{{! /excerpt}}

{{#> callout type='note' }}
The View Designer is not available for everyone yet, but if you can't wait any longer to try it, do not hesitate to contact your sales representative to enable it on your project.
{{/callout}}

## Requirements

- A [Contract document type]({{page version='' space='nxdoc' page='getting-started-with-nuxeo-studio'}}#step-3-create-a-contract-document-type) created in Nuxeo Studio
- The Web UI addon installed on your instance

## Create an Element
We are going to start by adding a `validation` schema to our Contract document type.

In Nuxeo Studio, in your go to **Schema**
1. Click on **New** and name it `validation`.
1. Add a field `validated` as a boolean.
1. Save your changes.

Go to the View Designer on the **Resources** tab.
1. Create a folder called `elements`.
1. In it, create an element called `my-validation-element`.
  ![]({{file name='create-element-VD.png'}} ?w=150,border=true)
1. Edit the layout of the element by adding the validation schema.
  ![]({{file name='schema-annotations-VD.png'}} ?w=150,border=true)
  In the catalog properties, the `validated` field of the validation schema appears.
1. In the HTML editor, remove the lines describing the title and description.
1. Expand the `validated` field and drag'n'drop the **edit** layout from the catalog to the editor.
1. Save your changes.

## Reuse an Element

Now, go to your `contract` document type, on the view layout to use your element:
1. Click on **Customize**.
1. On the search available in the elements catalog, search `my-validation-element`.
1. Drag'n'drop it from the catalog to the editor.
  ![]({{file name='contract-view-layout-element.png'}} ?w=650,border=true)
1. Save your changes and deploy your studio project, you're done :)

  You can now reuse your element as much as you want, for example on the other layouts of your contract document, it will always be available in the **Project Elements** library.
