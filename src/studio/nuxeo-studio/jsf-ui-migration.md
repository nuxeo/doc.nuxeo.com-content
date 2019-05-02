---
title: Web UI Studio Project Migration
description:
tree_item_index: 50
review:
  comment: ''
  date: '2019-04-23'
  status: ok
toc: true
---

When migrating a Studio project from a JSF UI based application to a Web UI based application, the configuration flow is changed:
- Nuxeo Studio is divided into **Nuxeo Studio Modeler**, for the backend logic, and **Nuxeo Studio Designer**, for all the user interface elements
- When disabling the Nuxeo JSF UI as target package, some configuration screens disappears from Nuxeo Studio Modeler (all the item specific to the JSF UI).

This page is a checklist to help in considering all the major impacts. The needed migration actions are listed and classified by configuration category.

{{#> callout type='info' heading='Migration Services'}}
A [Migration Service]({{page page='migration-services'}}) can be activated to migrate some Studio Configuration from JSF UI to Web UI. This migration tool is a safe and automated way to create an equivalent Web UI configuration based on your existing JSF UI configuration. Note that it migrates simple configuration objects and is not adapted for complex configurations.
{{/callout}}

{{#> callout type='tip' heading='Prerequisites'}}
Before digging into the different configuration elements, ensure Nuxeo Web UI is selected in the target package (in the Application Definition). Both JSF UI and Nuxeo Web UI package can be selected at the same time: Nuxeo Platform can run these packages simultaneously.
{{/callout}}


## Branding

- The login page configuration still remains on Nuxeo Studio Modeler.
- The header, footer, colors and font defined in the Branding should be migrate into a new theme in Nuxeo Web UI (`UI > Theme`).
- Custom CSS is removed: All specific CSS contributions should be migrate either into a new theme, or directly inside the corresponding element in the `<style>` section.

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th width="300" colspan="1" style="background-color:#ebebeb">JSF UI</th>
<th width="300" colspan="1" style="background-color:#ebebeb">Web UI</th>
</tr>
<tr>
<td colspan="1" style="background-color:white">
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Web UI Studio Project Migration/migration-jsf-branding.png
    name: migration-jsf-branding.png
    studio_modeler#screenshot#up_to_date
--}}
![migration-jsf-branding.png](nx_asset://82bad3c2-0c33-4bb1-b974-00b4e599cd37 ?w=300,border=true)
</td>
<td colspan="1" style="background-color:white">
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Web UI Studio Project Migration/migration-webui-branding.png
    name: migration-webui-branding.png
    studio_designer#screenshot#up_to_date
--}}
![migration-webui-branding.png](nx_asset://853d4c1e-7a48-4188-bc8e-1d35189b7ea4 ?w=300,border=true)
</td>
</tbody>
</table>
</div>

[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;**Studio Modeler - Branding configuration**]({{page page='branding'}})</br>
[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;**Studio Designer - How to customize the theme**]({{page page='how-to-customize-theme-studio'}})


## Document type layouts

- All the document type layout contributions from the Create, View, Edit, Header layouts tabs should be moved to Nuxeo Studio Modeler, in `UI > Layouts > Local Document Types` or `Built-In Document Types`.
- The JSF UI View form corresponds to the Web UI Metadata Layout.
- The View Layout corresponds to the page section where is generally displayed the document preview and its additional information and actions.

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th width="300" colspan="1" style="background-color:#ebebeb">JSF UI</th>
<th width="300" colspan="1" style="background-color:#ebebeb">Web UI</th>
</tr>
<tr>
<td colspan="1" style="background-color:white">
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Web UI Studio Project Migration/migration-jsf-doctypes.png
    name: migration-jsf-doctypes.png
    studio_modeler#screenshot#up_to_date
--}}
![migration-jsf-doctypes.png](nx_asset://bb78688a-5569-47f4-a542-43aa71824c6c ?w=300,border=true)
</td>
<td colspan="1" style="background-color:white">
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Web UI Studio Project Migration/migration-webui-doctypes.png
    name: migration-webui-doctypes.png
    studio_designer#screenshot#up_to_date
--}}
![migration-webui-doctypes.png](nx_asset://27358708-6873-4e9b-84bb-4ac0f5bc69ee ?w=300,border=true)
</td>
</tbody>
</table>
</div>

[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;**Studio Designer - Configuring Document Type Layouts**]({{page space='nxdoc' page='how-to-define-a-document-type'}})</br>

## Workflow task layouts

- The task form menu displayed from the Workflow template configuration screen in Studio Modeler is now moved to Studio Designer, in the `UI > Layouts > Workflows` section.

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th width="300" colspan="1" style="background-color:#ebebeb">JSF UI</th>
<th width="300" colspan="1" style="background-color:#ebebeb">Web UI</th>
</tr>
<tr>
<td colspan="1" style="background-color:white">
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Web UI Studio Project Migration/migration-jsf-wf.png
    name: migration-jsf-wf.png
    studio_modeler#screenshot#up_to_date
--}}
![migration-jsf-wf.png](nx_asset://cbb07904-1bc1-4fdd-97ba-9b5cbe9fa068 ?w=300,border=true)
</td>
<td colspan="1" style="background-color:white">
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Web UI Studio Project Migration/migration-webui-wf.png
    name: migration-webui-wf.png
    studio_designer#screenshot#up_to_date
--}}
![migration-webui-wf.png](nx_asset://20996a50-59af-4669-a6f5-8edcda8920e2 ?w=300,border=true)
</td>
</tbody>
</table>
</div>

[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;**Studio Designer - How to customize workflow task layouts**]({{page space='nxdoc' page='web-ui-workflow-tasks'}})


## Searches

- A search in Web UI is composed of a Page Provider in Studio Modeler, and its associated form and result layouts in Studio Designer.
- The `Listing & Views` menu (and therefore the `Content Views` and `Search` submenus) disappears: the configurations have to be migrated in Studio Designer, in the `UI > Layouts > Page Providers` section.

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th width="300" colspan="1" style="background-color:#ebebeb">JSF UI</th>
<th width="300" colspan="1" style="background-color:#ebebeb">Web UI</th>
</tr>
<tr>
<td colspan="1" style="background-color:white">
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Web UI Studio Project Migration/migration-jsf-search.png
    name: migration-jsf-search.png
    studio_modeler#screenshot#up_to_date
--}}
![migration-jsf-search.png](nx_asset://effe08d3-c45f-48ad-8e6e-bdbf829d7940 ?w=300,border=true)
</td>
<td colspan="1" style="background-color:white">
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Web UI Studio Project Migration/migration-webui-search.png
    name: migration-webui-search.png
    studio_designer#screenshot#up_to_date
--}}
![migration-webui-search.png](nx_asset://d60bb870-e8ca-4b01-aed8-fb098e12b7af ?w=300,border=true)
</td>
</tbody>
</table>
</div>

[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;**Studio Designer - How to configure searches**]({{page space='nxdoc' page='web-ui-search'}})

## User actions

- User actions are specific to Nuxeo JSF UI. In Nuxeo Web UI, User actions are converted into Actions, available from the Studio Designer, in `UI > Actions` menu.
- These Actions can either be linked to an automation chain (or an automation scripting) or to a specific element (in the case of opening a popup dialog).

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th width="300" colspan="1" style="background-color:#ebebeb">JSF UI</th>
<th width="300" colspan="1" style="background-color:#ebebeb">Web UI</th>
</tr>
<tr>
<td colspan="1" style="background-color:white">
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Web UI Studio Project Migration/migration-jsf-useraction.png
    name: migration-jsf-useraction.png
    studio_modeler#screenshot#up_to_date
--}}
![migration-jsf-useraction.png](nx_asset://31097120-29a7-44df-9daf-0bb105504099 ?w=300,border=true)
</td>
<td colspan="1" style="background-color:white">
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Web UI Studio Project Migration/migration-webui-useraction.png
    name: migration-webui-useraction.png
    studio_designer#screenshot#up_to_date
--}}
![migration-webui-useraction.png](nx_asset://2a7dd331-425e-4b22-8cb5-99cf30f1b23c ?w=300,border=true)
</td>
</tbody>
</table>
</div>

[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;**Studio Designer - How to configure a user action**]({{page space='nxdoc' page='how-to-insert-user-action'}})

## Automation chains

- Automation chains are core logics and are only impacted for all operations from the Category `User Interface`. It corresponds to all operations prefixed by `Seam.*` or `Navigation.*`.
- For these operations, specific properties are available from the Action elements.
  - Typically, `download` property downloads the output of the automation operations
  - The `notification` and `error-label` displayed user information messages when executing an automation chain.

  <div class="table-scroll">
  <table class="hover">
  <tbody>
  <tr>
  <th width="300" colspan="1" style="background-color:#ebebeb">JSF UI</th>
  <th width="300" colspan="1" style="background-color:#ebebeb">Web UI</th>
  </tr>
  <tr>
  <td colspan="1" style="background-color:white">
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Web UI Studio Project Migration/migration-jsf-automation.png
    name: migration-jsf-automation.png
    studio_modeler#screenshot#up_to_date
--}}
![migration-jsf-automation.png](nx_asset://fc6363a4-cd55-4fc0-aa00-3056d36fee79 ?w=300,border=true)
  </td>
  <td colspan="1" style="background-color:white">
  {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Web UI Studio Project Migration/migration-webui-automation.png
      name: migration-webui-automation.png
      studio_designer#screenshot#up_to_date
  --}}
  ![migration-webui-automation.png](nx_asset://6ac5fe3b-a07b-4c4a-93ba-8b416cdecb3c ?w=350,border=true)
  </td>
  </tbody>
  </table>
  </div>

[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;**Webcomponents Documentation - Nuxeo Operation Button Parameters**](https://www.webcomponents.org/element/nuxeo/nuxeo-ui-elements/elements/nuxeo-operation-button)


## Translations

- Document type label and vocabulary entry label are still created from Studio Modeler, and automatically replicated in Studio Designer in the main translation file (`messages.json`).
- Document properties labels should be created in a translation file.

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th width="300" colspan="1" style="background-color:#ebebeb">JSF UI</th>
<th width="300" colspan="1" style="background-color:#ebebeb">Web UI</th>
</tr>
<tr>
<td colspan="1" style="background-color:white">
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Web UI Studio Project Migration/migration-jsf-translation.png
    name: migration-jsf-translation.png
    studio_modeler#screenshot#up_to_date
--}}
![migration-jsf-translation.png](nx_asset://ec5a844e-0dee-4ba6-8a3b-406afdb8f3f9 ?w=300,border=true)
</td>
<td colspan="1" style="background-color:white">
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Web UI Studio Project Migration/migration-webui-translation.png
    name: migration-webui-translation.png
    studio_designer#screenshot#up_to_date
--}}
![migration-webui-translation.png](nx_asset://611b80ec-4eb6-4342-92d7-ee808c5da3b8 ?w=300,border=true)
</td>
</tbody>
</table>
</div>

[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;**Studio Designer - How to manage translations**]({{page space='nxdoc' page='web-ui-managing-translations'}})

## XML Extensions

- XML Extensions may not be impacted by the Web UI migration, except the one which refers to specific JSF UI components, as the `<extension target="org.nuxeo.ecm.platform.actions.ActionService" point="actions"` extension point for example.
