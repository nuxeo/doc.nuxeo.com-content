---
title: 'HOWTO: Create and Reuse a Custom element'
review:
    comment: ''
    date: '2017-12-15'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to create and reuse a custom element in Studio Designer.
        level: Advanced
        tool: code
        topics: Web UI
labels:
    - lts2017-ok
    - tutorial
    - nuxeo-elements
    - tcardoso
    - nuxeo-ui-elements
    - university
    - polymer
tree_item_index: 500

---

{{! excerpt}}
In this tutorial you will learn how to create and reuse custom elements in Studio Designer.
{{! /excerpt}}

{{#> callout type='info'}}
Watch the related courses on Nuxeo University<br>[Expert Session on Nuxeo Elements Creation](https://university.nuxeo.com/learn/public/course/view/elearning/148/expert-session-creating-nuxeo-elements-with-studio-designer)<br>[Course on Web UI Stack](https://university.nuxeo.com/learn/public/course/view/elearning/80/DocumentandWorkflowTaskLayoutswithNuxeoStudioDesigner)![]({{file name='university-new-nuxeo-element.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

## Requirements

- A [Contract document type]({{page version='' space='nxdoc' page='web-ui-document-layouts'}}) created in Studio Modeler
- The Web UI addon installed on your instance

## Create an Element
We are going to start by adding a `validation` schema to our Contract document type.

To create a `validation` schema:
1. In Studio Modeler, go to **Configuration**&nbsp;> **Content Model**&nbsp;> **Schemas**.
1. Click on **New** and name it `validation`.
1. Add a field `validated` as a boolean.
1. Save your changes.


<!--To insert the `validation` schema in the Contract document type:
1. Go to the Studio Designer on the **Resources** tab.
1. Create a folder called `elements`.
1. In it, create an element, using the `Sample layout template` called `my-validation-element`.
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
1. Save your changes.-->

To insert the `validation` schema in the Contract document type:
1. In Studio Designer, go to the **UI** tab.
1. In **Layout Blocks**, click Plus to create a new element.
1. Enter the name `my-validation-element` and  select `Title/description element template` as element template. ![]({{file name='create-element-VD.png'}} ?w=200,border=true)
1. Edit the layout of the element by adding the validation schema.
  ![]({{file name='schema-annotations-VD.png'}} ?w=200,border=true)
1. Switch to the Code Editor at the bottom of the main view, and replace the lines describing the title and description by the following to call your `validation` element:
    ```
    <div role="widget">
        <label>Validated</label>
        <paper-checkbox checked="{{document.properties.validation:validated}}"></paper-checkbox>
    </div>
    ```
1. Save your changes.

## Reuse an Element

Now, go to your `contract` document type, on the `view` layout to use your element:
1. Click on **Configure**.
1. Switch to the Code Editor. On the search available in the elements catalog, search `my-validation-element`.
1. Drag and drop it from the catalog to the editor.
  ![]({{file name='contract-view-layout-element.png'}} ?w=650,border=true)
1. Save your changes and deploy your studio project, you're done :)

  You can now reuse your element as much as you want, for example on the other layouts of your contract document, it will always be available in the **Project Elements** library.
