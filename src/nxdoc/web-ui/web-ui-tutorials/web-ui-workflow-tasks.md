---
title: 'HOWTO: Customize Workflow Tasks'
review:
    comment: ''
    date: 2017-12-14
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
tree_item_index: 1000

---

In this tutorial you will learn how to create a custom workflow tasks layout in Studio Designer. We'll be using a custom validation workflow template linked to the Contract document type.

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Course on Document type layouts](https://university.nuxeo.com/learn/public/course/view/elearning/80/DocumentandWorkflowTaskLayoutswithNuxeoStudioDesigner).
![]({{file name='university-doc-layout.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

## Prerequisites
- A [Contract document type]({{page version='' space='nxdoc' page='web-ui-document-layouts'}}#create-a-contract-document-type) created in Studio Modeler.
- Make sure that the [Nuxeo Web UI]({{page version='' space='nxdoc' page='web-ui'}}) addon is installed on your instance.

## Create a Workflow Template
First, we need to create a new workflow template in Studio Modeler. This workflow will be applied to the Contract document type.

1. Go to **Workflow** > **Process Definitions** and click on **New**.
  ![]({{file version='810' space='nxdoc' page='web-ui-workflow-tasks' name='create-wf-studio.png'}} ?w=350,border=true)
1. On the **Activation** tab, next to the field **Current document has one of the types**, select the Contract local type and move it from left to right.
Now we will add a custom workflow variable called **Type** to specify which type of contract you are validating.
1. On the **Variables** tab, add a field `type` as a string.
1. On the **Graph** tab, select an **Accept/Reject** user tasks and drag and drop it on the graph.
1. Click on the **Edit** button next to the task.
1. Fill in the **General** tab as shown below:
  ![]({{file version='810' space='nxdoc' page='web-ui-workflow-tasks' name='general-tab-custom-wf.png'}} ?w=350,border=true)
1. On the **Variables** tab, activate the custom variable by moving it to the right box.
1. Save your changes.
  You should end up with a graph like this:
  ![]({{file version='810' space='nxdoc' page='web-ui-workflow-tasks' name='graph-custom-wf.png'}} ?w=350,border=true)

We will finish our Studio Modeler configuration by creating a vocabulary for the Type variable, to be able to select the type from a drop down list during the workflow process. The vocabulary will be composed of three different types of employment contract.

1. Go to **Vocabularies** and click on **New**
  ![]({{file version='810' space='nxdoc' page='web-ui-workflow-tasks' name='create-voc-studio.png'}} ?w=350,border=true)
2. Fill in the rows like this:

| Id                              | Label                                 |
|:--------------------------------|:--------------------------------------|
| full-time-part-time             | Full-time and part-time               |
| fixed-terms                     | Fixed-term                            |
| freelance-consultant-contractor | Freelancers, consultants, contractors |

3. Save your modifications.

## Create a Task layout
We can now configure our layout on Studio Designer.

1. On the **Layouts** tab, go to the **Workflows** menu and click on _Contract Validation task_ and then on **CONFIGURE**.
  The workflow layout works as the document type layout, you can browse the element catalog and switch editors between code and visual.
1. You can start by reorder the properties on the visual editor to end up with something like this:
  ![]({{file version='810' space='nxdoc' page='web-ui-workflow-tasks' name='workflow-process-VD.png'}} ?w=350,border=true)
1. Switch to editor from visual to code and change the line corresponding to the type field to turn it into a `nuxeo-directory-suggestion` to link the type property to the associated directory:
```
<nuxeo-directory-suggestion role="widget" label="Type"
    placeholder="Select the contract type..."
    value="{{task.variables.type}}"
    directory-name="type"
    min-chars="0">
</nuxeo-directory-suggestion>
```
1. Save your changes.  

You can now [deploy your project]({{page space='studio' page='deploying-your-project-in-dev-mode'}}) on your instance and see what it looks like!
![]({{file version='810' space='nxdoc' page='web-ui-workflow-tasks' name='contract-validation-process-web-ui.png'}} ?w=350,border=true)
![]({{file version='810' space='nxdoc' page='web-ui-workflow-tasks' name='validation-task-process.png'}} ?w=350,border=true)
![]({{file version='810' space='nxdoc' page='web-ui-workflow-tasks' name='type-field-web-ui.png'}} ?w=350,border=true)

/*For more information on How to start a workflow on a document, see [Tasks]({{page version='' space='userdoc' page='task'}}).*/

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
