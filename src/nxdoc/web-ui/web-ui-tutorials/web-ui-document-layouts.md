---
title: 'HOWTO: Customize Document Layouts'
description: Learn how to use document layouts with Web UI and Studio Designer.
review:
    comment: ''
    date: '2019-07-17'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to use document layouts with Web UI and Studio Designer
        level: Intermediate
        tool: 'Studio Designer, code'
        topics: 'Web UI, Studio Designer'
labels:
    - view-designer
    - nuxeo-web-ui
    - nuxeo-elements
    - tcardoso
    - nuxeo-ui-elements
    - extension
    - layouts
    - university
    - lts2017-ok
    - lts2019-ok
tree_item_index: 800
---

Document type layouts are used to display a document's metadata in Web UI. A document layout is structured with document type properties, assembled with several UI elements such as sections, cards, columns etc.

A given document type can have multiple layouts: a `create` and `edit` layout to set its schema fields when creating or editing the document, a `view` layout to display field values and any other layouts according to the application(s) where these are used. In our previous metamodel driven UI, these were known as `modes` and a single layout definition could be rendered in different modes.

In this tutorial you will learn how to create a document type layout with Studio Designer from a document type created in Studio Modeler and how to add a icon to it.

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related course on Nuxeo University:</br>
[Course on Document type layouts](https://university.nuxeo.com/learn/public/course/view/elearning/80/DocumentandWorkflowTaskLayoutswithNuxeoStudioDesigner).
![]({{file name='university-doc-layout.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

## Prerequisites

The [Nuxeo Web UI]({{page version='' space='nxdoc' page='web-ui'}}) addon is installed on your instance.

## Create a Contract Document Type

Create a custom document type named "Contract" that will hold specific metadata for a contract: contract owner, starting date, policy.

1. In Studio Modeler, under **Configuration**, click on the **Content Model** section, then **Document Types**. Click on the **New** button.
1. Fill in the creation form as follows and click on **Next**:
    - **ID**: Contract
    - **Extends**: File
    - **Label**: Contract
    - **Description**: Contract document type for internal use.

    Your document type is created.
1. Fill in the [**Definition** tab]({{page space='studio' page='documents'}}):
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Document Layouts/definition_contract.png
      name: definition_contract.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![definition_contract.png](nx_asset://7c4bf823-6a9a-4d53-bc7e-49e9fe175770 ?w=600,border=true)
1. Select an icon for your contract document type:
    - A .png icon for the **Icon** and **Large Icon** fields
    - A .svg Icon for the **SVG Icon** field.</br>
    From **Select Resource** buttons, you can select any SVG file available in the Studio project resources or upload your own.
1. Fill in the [**Schema** tab]({{page space='studio' page='schemas'}}) with the following metadata:
    - A field **owner** as a _String_
    - A field **policy** as a _String_
    - A field **reminder** as a _Date_
    - A field **start** as a _Date_
    - A field **endDate** as a _Date_ </br>
    You should end up with the following screen:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Document Layouts/schema_contract.png
      name: schema_contract.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![schema_contract.png](nx_asset://1ef30ee8-2913-4632-b0a4-f4b3f7d99d9a ?w=600,border=true)

Once you are all set, click on **Configure Layouts** at the top-right of the screen to go the Designer side.

## Create a New Layout

When configuring a document type, you need to create all layouts in the Studio Designer in order to display the relevant properties.</br>
1. Click on **Configure missing layouts** to create automatically the default layouts based on the document type.
1. Modify and/or delete fields as you need on each layout to fit your needs.
1. Go to your **Create** layout. In **CATALOG**, on the right, select **File** > **content:blob** > **view** and drag and drop the element in the main view.</br>
    You now have an upload button on your document layout.
1. Click on **Save**.

You should end up with something like this:
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Document Layouts/main-view-contract-vd.png
    name: main-view-contract-vd.png
    studio_designer#screenshot#up_to_date
--}}
![main-view-contract-vd.png](nx_asset://85c40a74-ebcf-4e93-8dd8-c6b75aef4031 ?w=450,border=true)

<!--
### Configure Labels

When configuring a document type, a label is required. If you do not create a translation file, Studio uses this label as a fallback option to show your users something clearer.

If you create a translation file for your document type labels by uploading the corresponding files in Designer's **UI** tab, they override the configuration made in the label field.

To do so:
1. Click on the **UI** table;
1. Click on **Translations**
1. Use the default `messages.json` or create your own language;
1. Create a new entry in the JSON file with key `label.document.type.<document type name>` and the document type name as value. Here it is `"label.document.type.contract":"Contract"`;
1. Save your changes.
-->

You now have a document type ready to be used on your Web UI interface!

## Technical Overview

In Nuxeo Web UI, these different layout/mode combinations have been materialized into individual elements, meaning each layout element is bound to a given document type and built for a specific use case. This enables developers to leverage any custom elements they see fit when building their layouts with explicit binding between fields and elements properties - thus doing without the mode handling widget abstraction.

By simply following a convention that maps a document type to a set of pre-defined element names, according to the different use cases (modes), our application can dynamically load and instantiate the appropriate element for a given document.

Regions of the UI which require configurable document layouts rely on custom container elements to handle the loading and instantiation of the appropriate layout elements for the given use case, for instance the default tab has two configurable regions by default:

![]({{file name='document_page_1.png'}} ?w=400,border=true)

1. the `view` layout which usually displays an inline preview of the document and
2. the `metadata` layout which displays the document's metadata.

Each of these regions is defined by a generic layout container element which will import and render the specific layout element for the given document type, in this case `nuxeo-document-view` will rely on `nuxeo-<doctype>-view-layout`and `nuxeo-document-metadata` will use `nuxeo-<doctype>-metadata-layout`, where `<doctype>` is the lower case document type (i.e. *folder*, *note*, *picture*, etc.).

These specific document layout elements are loaded by convention from a `/nuxeo.war/ui/document/<doctype>` folder and the element naming convention adopted is `nuxeo-<doctype>-<mode>-layout.html` where `mode` describes the use case and matches the layout name (i.e. *create*, *view* , *edit*, *import*, etc):

```
/ui
  └──── document
    ├─── <doctype>
    |  ├── nuxeo-<doctype>-<layout>-layout.html
    │  └── ...
    └── ...
```
The following table lists layout elements used by Nuxeo Web UI:

| Element                      | Layout                             |                                                                  |
|:-----------------------------|:-----------------------------------|:-----------------------------------------------------------------|
| 1. nuxeo-document-view       | nuxeo-{doctype}-view-layout        | ![]({{file name='document_page_1.png'}} ?w=100,border=true)      |
| 2. nuxeo-document-metadata   | nuxeo-{doctype}-metadata-layout    | ![]({{file name='document_page_1.png'}} ?w=100,border=true)      |
| 3. nuxeo-document-edit       | nuxeo-{doctype}-edit-layout        | ![]({{file name='document_page_2.png'}} ?w=100,border=true)      |
| 4. nuxeo-document-create     | nuxeo-{doctype}-create-layout      | ![]({{file name='document_create.png'}} ?w=100,border=true)      |
| 5. nuxeo-document-import     | nuxeo-{doctype}-import-layout      | ![]({{file name='document_import.png'}} ?w=100,border=true)      |

{{#> callout type='warning' }}
Nuxeo Web UI relies on the existence of these document layout elements so, for each registered document type, the application will attempt to load its specific layouts. Since there is no layout registry, there is no fallback.
{{/callout}}

When instantiating and stamping these layout elements, a `document` property will be set to the current document and the layout is expected to update accordingly. The importing and stamping of these elements, executed by container, is simply:

```
this.importHref(this.resolveUrl(layout + '.html'), function() {
  // create the element
  var el = document.createElement(layout);
  // append it to the parent
  this.appendChild(el);
  // setup data binding
  el.document = this.document;
},
```
By building these elements with Polymer, developers can simply declare this `document` property and rely on native data binding support to bind document fields to the the template.

Since these document layouts are regular custom elements, developers have no limitations whatsoever in terms of HTML template, CSS styling or JS logics and are free to leverage any third party libraries or elements when building their own.

{{#> callout type='warning' }}
Nuxeo Web UI is vulcanized for production meaning that shared dependencies are already bundled and loaded in the application and should not be imported again in dynamically loaded elements.
If your elements have other unshared static dependencies then these should be deployed as well.
{{/callout}}

Layouts created and managed by Nuxeo Studio however will rely on introspection of the HTML and JS in order to provide validation and tooling support and will include some extra metadata, in the form of HTML attributes and/or JSDoc annotations.

The following is a sample definition of what an `edit` layout element for a `MyDoc` document type would look like, including Nuxeo Studio generated metadata:

```
<dom-module id="nuxeo-mydoc-edit-layout">
  <template>
    <!-- Custom CSS -->
    <style>
      *[role=widget] {
        padding: 5px;
      }
    </style>

    <!-- A paper-input widget bound to 'dc:title' -->
    <paper-input role="widget" value="\{{document.properties.dc:title}}" label="Title"></paper-input>

    <!-- An input of type date bound to 'my:date' -->
    <div role="widget" class="item">
      <label>My date</label>
      <input type="date" value="[[document.properties.my:date]]">
    </div>

    <!-- Any HTML -->
    <img src="assets/imgs/logo.png">

  </template>

  <script>
    Polymer({
      is: 'nuxeo-mydoc-edit-layout',
      properties: {
        /**
         * You can use either @schema or @doctype annotation in your model.
         * Use to provide validation and auto completion of document properties.
         * @doctype MyDoc
         */
        document: {
          type: Object
        }
      }
    });
  </script>
</dom-module>
```

### Configuring Document Creation

When configuring document types, there are two more contributions that have to be made in order for them to
be properly displayed in the document creation wizard: add a custom icon and a custom label for each type.

The icon must be contributed to `/nuxeo.war/ui/images/doctypes`, named after the format `{doctype}.svg`. Labels must be added to the message files under the format `label.document.type.{doctype}`. In both cases, `doctype` must be the lower case doctype **id**.

{{#> callout type='note' }}
For more information about contributing labels, please check the page [Managing Translations]({{page page='web-ui-managing-translations'}}).
{{/callout}}

You can prevent a doctype from being created via document creation wizard by adding to it the `HiddenInCreation` facet.

Doctypes can also be prevented from being imported even if they can be created, through the `window.nuxeo.importBlacklist`
array, which holds all the doctypes that **cannot** be created. You can simply add or override this array to fit your needs.
One could prevent the `Workspace`, `Folder`, `OrderedFolder` and `Collection` doctypes from being imported on the Web UI
by deploying the following as a WebResource:

```
window.nuxeo.importBlacklist = [
 'Workspace', 'Folder', 'OrderedFolder', 'Collection'
];
```
<!--
{{#> callout type='warning' }}
The configuration of document creation in Web UI is subject to change in the upcoming versions.
{{/callout}}
-->

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Nuxeo Studio Community Cookbook'}}

- [Barcode Widget](https://github.com/nuxeo/nuxeo-studio-community-cookbook/tree/master/modules/nuxeo/barcode-widget)
- [QR Code](https://github.com/nuxeo/nuxeo-studio-community-cookbook/blob/master/modules/nuxeo/qr-code)
- [Custom Nuxeo Suggestion Display](https://github.com/nuxeo/nuxeo-studio-community-cookbook/tree/master/modules/nuxeo/document-suggestion-result-formatters)
- [Collapsible Element](https://github.com/nuxeo/nuxeo-studio-community-cookbook/blob/master/modules/nuxeo/collapse)
- [Inline Card Property Edition](https://github.com/nuxeo/nuxeo-studio-community-cookbook/blob/master/modules/nuxeo/toggleable-form)
- [Show/Hide the Value of a Secret Field](https://github.com/nuxeo/nuxeo-studio-community-cookbook/blob/master/modules/nuxeo/ssn)
- [Display Document Relations](https://github.com/nuxeo/nuxeo-studio-community-cookbook/blob/master/modules/nuxeo/related-documents)

{{/panel}}</div><div class="column medium-6">
</div></div>
