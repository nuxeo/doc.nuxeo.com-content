---
title: 'HOWTO: Create a Bulk Edit Form Using Nuxeo Studio'
review:
    comment: ''
    date: '2021-12-21'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to create a bulk edit form using Nuxeo Studio Designer
        level: Intermediate
        tool: null
        topics: 'Web UI, Studio Designer, UIElements, Bulk'
labels:
    - tutorial
    - bulk
    - edit
tree_item_index: 497
---

{{! excerpt}}
In this tutorial you will learn how to create a form to edit metadata on a large set of documents.
{{! /excerpt}}

## Requirements

{{#> callout type='info'}}
This capability is available since LTS 2021 with Web UI 3.0.9.
{{/callout}}

- A [Contract document type]({{page page='web-ui-document-layouts'}}#create-a-contract-document-type) created in Nuxeo Modeler.
- The Nuxeo [Web UI addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-web-ui) installed on your instance.
- In Studio Modeler > **Settings** > **Application Definition**, make sure that **Nuxeo Web UI** is in the **Packages to Install** list.
- Activate the **Select All and Bulk Actions** feature by adding the `nuxeo.selection.selectAllEnabled=true` property in your [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}) file.

{{#> callout type='tip'}}
Bulk edit can work without enabling the select all option if you intend to select documents to edit individually or using a range only.
{{/callout}}

## Create the Structure

1. In Studio Designer, click on the **RESOURCES** tab.
1. Select the `UI` folder and click on the `create` button at the bottom of the screen.
1. Create a new folder and name it `bulk`.

## Create a Bulk Edit Layout

To make things faster, we will reuse the same form as the one used for the edit layout of the Contract document type.

1. From the **RESOURCES** tab, open the **document** > **contract** folder and open the `nuxeo-contract-edit-layout.html` file.
1. Copy the content of the layout (Ctrl/Cmd + A then Ctrl/Cmd + C).
1. Select the `bulk` folder you created previously and click on the `create` button at the bottom of the screen.
1. Create a new `empty file` and name it `nuxeo-bulk-edit-contracts-layout.html`.
1. Inside, paste the content of the contract edit layout.
1. In your bulk edit layout, replace the name of the layout you copied (`nuxeo-contract-edit-layout`) with the current one (`nuxeo-bulk-edit-contracts-layout`).
1. Save your configuration.

{{#> callout type='info'}}
Your bulk edit layouts need to be placed in the dedicated `bulk` folder, and follow a naming convention introduced to prevent collision. Make sure they are always named `nuxeo-bulk-[your-layout-name]-layout`.
{{/callout}}

## Bind the Bulk Edit Layout to a Button

Now that your layout is ready, you will need to bind it to a button.

1. From the **RESOURCES** tab, open the `nuxeo-[studio-project-id]-custom-bundle.html` file.
  {{#> callout type='info'}}
  If the file doesn't exist yet, open the `nuxeo-[studio-project-id]-bundle.html` file first and you will be prompted for the custom bundle file to be generated.
  {{/callout}}

1. Inside the file, add the following contribution to bind your layout to a button:

  ```
  <!-- Contribution for bulk editing contracts in every context (no filtering) -->
  <nuxeo-slot-content name="bulkEditContractsButton" slot="RESULTS_SELECTION_ACTIONS" order="1">
    <template>
      <nuxeo-edit-documents-button icon="nuxeo:edit" label="Bulk Edit Contracts" documents="[[selection]]" layout="edit-contracts"></nuxeo-edit-documents-button>
    </template>
  </nuxeo-slot-content>
  ```

  {{#> callout type='tip'}}
  In this example, we are displaying our button in every situation. Feel free to [add filters to this contribution]({{page space='studio' page='javascript-expression-examples'}}) to refine when the button should be displayed.
  {{/callout}}

1. Save your configuration. Your bulk edit form is ready to be used.

{{#> callout type='info'}}
You only need to mention the unique part of the layout name in the `layout` property of the `nuxeo-edit-documents-button` element. It applies the naming convention automatically.
{{/callout}}

## Testing the Result

From any [Folderish]({{page page="available-facets"}}#folderish) document (e.g. a `Folder`, a `Workspace`) or in the results of a search, select one or several documents you want to validate. Click on your brand new button in the toolbar on top of the screen to open your bulk edit form. Select the properties to replace and the value to set, and click save to launch the action.

## Questions and Answers

### How Does Bulk Edit Deal With Required Fields?

When a field is marked as required, it won't be shown as required in your custom form because users can still choose to leave the existing value(s) as they are. However, the `empty value(s)` option will be grayed out to prevent any error.

## Known Limitations

{{{multiexcerpt 'bulk-actions-known-limitations' page='web-ui-bulk-actions'}}}

### No Support for Layout Blocks / Limited Compatibility With Custom Elements

When using bulk edit, Web UI tries to detect the input widget in order to show the bulk edit options dynamically.

At this stage, we are not able to make this work when the input element is embedded into another element; be it a layout block or a custom element.

### No Support for Bulk Editing Document Tags

Document tags leverage an element that has a specific behavior. We cannot make it compatible with bulk editing at this stage.
