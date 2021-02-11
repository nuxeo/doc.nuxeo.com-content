---
title: 'HOWTO: Customize Workflow Tasks'
review:
    comment: ''
    date: '2019-07-17'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to configure your workflow tasks
        level: Advanced
        tool: code
        topics: Web UI
labels:
    - lts2016-ok
    - nuxeo-web-ui
    - extension
    - grenard
    - workflow
    - university
    - task
    - lts2017-ok
    - lts2019-ok
tree_item_index: 1000
---

{{! excerpt}}
In this tutorial you will learn how to create a custom workflow tasks layout in Studio Designer. We'll be using a custom validation workflow template linked to the Contract document type.
{{! /excerpt}}

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University:</br>
[Course on Document type layouts](https://university.nuxeo.com/learn/public/course/view/elearning/80/DocumentandWorkflowTaskLayoutswithNuxeoStudioDesigner).
![]({{file name='university-doc-layout.png' version='cloud' space='nxdoc' page='university'}} ?w=450,border=true)
{{/callout}}

## Prerequisites

- A [Contract document type]({{page version='' space='nxdoc' page='web-ui-document-layouts'}}#create-a-contract-document-type) created in Studio Modeler.
- Make sure that the [Nuxeo Web UI]({{page version='' space='nxdoc' page='web-ui'}}) addon is installed on your instance.

## Create a Workflow Template

First, we need to create a new workflow template in Studio Modeler. This workflow will be applied to the Contract document type.

1. Go to **Workflow** > **Process Definitions** and click on **New**.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Workflow Tasks/create-wf-studio.png
      name: create-wf-studio.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![create-wf-studio.png](nx_asset://4d5272f1-a220-4af3-ae76-7bd3d916f446 ?w=450,border=true)
1. On the **Activation** tab, next to the field **Current document has one of the types**, select the Contract local type and move it from left to right.</br>
Now we will add a custom workflow variable called **Type** to specify which type of contract you are validating.
1. On the **Variables** tab, add a field `type` as a string.
1. On the **Graph** tab, select an **Accept/Reject** user task and drag and drop it on the graph.
1. Click on the **Edit** button next to the task.
1. Fill in the **General** tab as shown below:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Workflow Tasks/general-tab-custom-wf.png
      name: general-tab-custom-wf.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![general-tab-custom-wf.png](nx_asset://905350af-8553-4096-9661-e282f87ece4d ?w=450,border=true)
1. On the **Variables** tab, activate the `type` custom variable by moving it to the right box.
1. Save your changes.
  You should end up with a graph like this:
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Workflow Tasks/graph-custom-wf.png
    name: graph-custom-wf.png
    studio_modeler#screenshot#up_to_date
  --}}
  ![graph-custom-wf.png](nx_asset://dff4bfee-121d-46c1-a4ea-ed2bed5e7f75 ?w=450,border=true)

We will finish our Studio Modeler configuration by creating a vocabulary for the `type` variable, to be able to select the type from a drop down list during the workflow process. The vocabulary will be composed of three different types of employment contract.

1. Go to **Vocabularies** and click on **New**
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Workflow Tasks/create-voc-studio.png
    name: create-voc-studio.png
    studio_modeler#screenshot#up_to_date
  --}}
  ![create-voc-studio.png](nx_asset://24a390bd-bcaf-4556-b604-3f8229281d05 ?w=450,border=true)
2. Fill in the rows like this:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Workflow Tasks/voc-created-studio.png
      name: voc-created-studio.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![voc-created-studio.png](nx_asset://a60d0e4e-58d7-44ed-8101-2cf5ca40b4df ?w=450,border=true)
3. Save your modifications.

## Create a Task layout
We can now configure our layout on Studio Designer.

1. In **UI**, go to the  **Layouts** > **Workflows** menu and click on _Contract Validation task_ and then on **CONFIGURE**.
  The workflow layout works as the document type layout, you can browse the element catalog and switch editors between code and visual.
1. You can start by reordering the properties on the visual editor to end up with something like this:
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Workflow Tasks/workflow-process-VD.png
    name: workflow-process-VD.png
    studio_designer#screenshot#up_to_date
  --}}
  ![workflow-process-VD.png](nx_asset://b24e91cb-f932-4164-89c1-8d42334d42b5 ?w=350,border=true)
1. Switch to editor from visual to code and change the line corresponding to the type field to turn it into a `nuxeo-directory-suggestion` to link the type property to the associated directory:
```
<nuxeo-directory-suggestion role="widget" label="Type"
    placeholder="Select the contract type..."
    value="\{{task.variables.type}}"
    directory-name="type"
    min-chars="0">
</nuxeo-directory-suggestion>
```
1. Save your changes.  

You can now [deploy your project]({{page space='studio' page='deploying-your-project-in-dev-mode'}}) on your instance and see what it looks like!
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Workflow Tasks/contract-validation-process-web-ui.png
    name: contract-validation-process-web-ui.png
    studio_modeler#screenshot#up_to_date
--}}
![contract-validation-process-web-ui.png](nx_asset://e3f3a367-21f8-4b70-b306-552ae590220f ?w=350)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Workflow Tasks/validation-task-process.png
    name: validation-task-process.png
    1.1.3#screenshot#up_to_date
--}}
![validation-task-process.png](nx_asset://3b855158-01e3-499c-b8b6-f3f4b27a4410 ?w=350,border=true)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Workflow Tasks/type-field-web-ui.png
    name: type-field-web-ui.png
    1.1.3#screenshot#up_to_date
--}}
![type-field-web-ui.png](nx_asset://66f1206c-8515-4487-89a1-da37c1dcfd4f ?w=350,border=true)

For more information about tasks on Web UI, read the [related documentation]({{page version='' space='userdoc' page='task'}}).

## Technical Overview

### Workflow Tasks

Each workflow task has its own form defined by a dedicated element. This form is excluded from the [vulcanization process]({{page version='' space='nxdoc' page='web-ui-deployment'}}) and is therefore dynamically loaded.

In the `$NUXEO_SERVER/nxserver/nuxeo.war/ui/` directory, you can see:

```
└── workflow
    ├── nuxeo-document-task.html
    ├── nuxeo-document-task-review-result.html
    ├── paralleldocumentreview
    │   ├── nuxeo-task2169-layout.html
    │   ├── nuxeo-task2556-layout.html
    │   └── nuxeo-task328d-layout.html
    └── serialdocumentreview
        ├── nuxeo-task38e-layout.html
        ├── nuxeo-task542-layout.html
        └── nuxeo-task6d8-layout.html
```

By convention, a `$NUXEO_SERVER/nxserver/nuxeo.war/ui/workflow/{worfklowName}/nuxeo-{taskId}-layout.html` file defines the form layout of the task with task ID `{taskId}` for the workflow `{worfklowName}`.
