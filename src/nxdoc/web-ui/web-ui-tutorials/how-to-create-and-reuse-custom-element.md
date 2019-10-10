---
title: 'HOWTO: Create and Reuse a Custom Element'
review:
    comment: ''
    date: '2019-07-16'
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
    - lts2019-ok
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
Watch the related courses on Nuxeo University:</br>
- [Expert Session on Nuxeo Elements Creation](https://university.nuxeo.com/learn/public/course/view/elearning/148/expert-session-creating-nuxeo-elements-with-studio-designer)</br>
- [Course on Web UI Stack](https://university.nuxeo.com/learn/public/course/view/elearning/80/DocumentandWorkflowTaskLayoutswithNuxeoStudioDesigner)
![]({{file name='university-new-nuxeo-element.png' page='nxdoc/university'}} ?w=450,border=true)
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

To insert the `validation` schema in the Contract document type:
1. In Studio Designer, go to the **UI** tab.
1. In **Layout Blocks**, at the bottom-right of the screen, click on ![]({{file name='plus.png'}} ?w=32) to create a new element.
1. Enter the name `my-validation-element` and  select **Title/description element template** as element template.
    ![]({{file name='create-element-VD.png'}} ?w=300,border=true)
1. Add the validation schema in the `<script>`, it should look like this:

    ```
    <script>
    Polymer({
      is: 'my-validation-element',
      behaviors: [Nuxeo.LayoutBehavior],
      properties: {
        /**
  			* @schema validation
        */
        document: {
          type: Object
        }
      }

    });
    </script>
    ```

1. Replace the lines describing the title and description by the following to call your `validation` element:
    ```
    <div role="widget">
      <label>Validated</label>
      <paper-checkbox checked="{{document.properties.validation:validated}}"></paper-checkbox>
    </div>
    ```
1. Save your changes.

## Reuse an Element

Now, go to your `contract` document type, on the **view** layout to use your element:
1. Click on **Configure**.
1. Switch to the Code Editor. On the search available in the elements catalog, search `my-validation-element`.
1. Drag and drop it from the catalog to the editor.
  ![]({{file name='contract-view-layout-element.png'}} ?w=650,border=true)
1. Save your changes and deploy your studio project, you're done!

  You can now reuse your element as much as you want, for example on the other layouts of your contract document, it will always be available in the **Project Elements** library.

## Going further

For the moment you have a "Validated" checkbox displayed on all your `Contract` document type, but anything happens when you click on it as we didn't add any logic to it. To have more info on how to create an element and bind it to an action, follow the [related tutorial]({{page version='' space='nxdoc' page='how-to-insert-user-action'}}).

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Nuxeo Studio Community Cookbook'}}

- [Custom Nuxeo Suggestion Display](https://github.com/nuxeo/nuxeo-studio-community-cookbook/blob/master/modules/nuxeo/document-suggestion)
- [Collapsible Element](https://github.com/nuxeo/nuxeo-studio-community-cookbook/blob/master/modules/nuxeo/collapse)

{{/panel}}</div><div class="column medium-6">
</div></div>
