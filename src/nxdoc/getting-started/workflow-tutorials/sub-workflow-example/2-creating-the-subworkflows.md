---
title: 2- Creating the Subworkflows
review:
    comment: ''
    date: '2019-06-18'
    status: ok
labels:
    - lts2016-ok
    - workflow
    - grenard
    - subworkflow
    - sub-workflow
    - lts2017-ok
    - lts2019-ok
toc: true
confluence:
    ajs-parent-page-id: '14257562'
    ajs-parent-page-title: Sub Workflow Example
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: 2-+Creating+the+Subworkflows
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/2-+Creating+the+Subworkflows'
    page_id: '14257597'
    shortlink: vY3Z
    shortlink_source: 'https://doc.nuxeo.com/x/vY3Z'
    source_link: /display/NXDOC/2-+Creating+the+Subworkflows
history:
    -
        author: Manon Lumeau
        date: '2015-08-24 13:37'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2015-08-24 13:29'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2015-08-24 10:02'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2014-12-10 16:41'
        message: TOC
        version: '16'
    -
        author: Solen Guitter
        date: '2014-06-12 11:46'
        message: Fixed broken links
        version: '15'
    -
        author: Solen Guitter
        date: '2013-08-09 16:10'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2013-08-09 16:10'
        message: Fixed formatting and typos
        version: '13'
    -
        author: Bertrand Chauvin
        date: '2013-08-08 13:56'
        message: Fixed error
        version: '12'
    -
        author: Bertrand Chauvin
        date: '2013-08-08 12:06'
        message: ''
        version: '11'
    -
        author: Bertrand Chauvin
        date: '2013-08-08 11:14'
        message: ''
        version: '10'
    -
        author: Bertrand Chauvin
        date: '2013-08-08 11:09'
        message: ''
        version: '9'
    -
        author: Bertrand Chauvin
        date: '2013-08-08 11:00'
        message: ''
        version: '8'
    -
        author: Bertrand Chauvin
        date: '2013-08-08 10:22'
        message: ''
        version: '7'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 19:50'
        message: ''
        version: '6'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 19:48'
        message: ''
        version: '5'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:48'
        message: ''
        version: '4'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:45'
        message: ''
        version: '3'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:45'
        message: ''
        version: '2'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:45'
        message: ''
        version: '1'
previous_link: /nxdoc/1-creating-the-expense-document-type
next_link: /nxdoc/3-creating-the-main-workflow
---
{{#> callout type='info' }}
This document is part of the [Sub-Workflow Example]({{page page='sub-workflow-example'}}) project series.
{{/callout}}

## What Will We Do in This Step?

We will create the sub-workflows that may be called from the main workflow depending on the document's metadata. We will need two separate workflows as the business logic is different between them. The first workflow will have one Accept/Reject node, the other will have two successive ones.

A single level validation workflow and a two-level validation workflow are both elements we could use again in the future, so we will keep them generic. Allowing a generic workflow design is one of the major assets in the sub-workflow functionality.

## Prerequisites

- A user named `Eric`
- A group named `accounting` with at least one member.

## Creating the Accounting Validation Workflow

In our case this workflow will be used if the expense is worth less than $100 and not belonging in the "misc" category, but it needs to be reusable in another context as well.

1.  In Studio Modeler, go to **Workflow** > **Process definitions** and click on the **New** button.
2.  Fill in the fields:
    - **Feature ID**: `subOneLevelValidation`
    - **Label**: Generic one level validation workflow.

3.  Click on the **Ok** button.
    The Definition tab of the workflow is displayed.

### Variables Tab

We want to keep this workflow generic, remember? So what we will do is setup a workflow variable to define the assignees. The parent workflow will send us the variable content.

1.  Add a variable named `level1Assignees`.
2.  Choose the **String** type.
3.  Check multi-valued (we may have several assignees).
4.  Save your modifications.
    Look at the result below:
    {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/2- Creating the Subworkflows/subonelevel-variables-tab.png
    name: subonelevel-variables-tab.png
    studio_modeler#screenshot#up_to_date
    --}}
    ![subonelevel-variables-tab.png](nx_asset://188151a4-7713-4e38-9be7-a9f72627d020 ?w=650,border=true)

### Activation Tab

We do not want anybody to launch this sub-workflow directly, so we will set rules to restrain its visibility.

1.  In the **Current document state is** field, type `hideThisWorkflow`.
    As this lifecycle state does not exist, this trick will ensure the workflow will never appear in the drop-down list.
2.  Save your modifications.
    Look at the result below:
    {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/2- Creating the Subworkflows/subwf-availability.png
    name: subwf-availability.png
    studio_modeler#screenshot#up_to_date
    --}}
    ![subwf-availability.png](nx_asset://5b9f0bdc-01ca-4717-9dcd-0797882963c5 ?w=650,border=true)

### Graph Tab

1.  Drag and drop the following nodes on your graph:

    - A Start node,
    - An Accept/Reject node,
    - An end node (Stop).
2.  Link the Start node's output to the Accept/Reject node.
3.  Link the Accept/Reject node's output transitions to the end node.
    Your graph should look like this:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/2- Creating the Subworkflows/subaccountingvalidation-wf-graph.png
      name: subaccountingvalidation-wf-graph.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![subaccountingvalidation-wf-graph.png](nx_asset://b8b254c4-c053-4d30-b240-2eb46c649154 ?w=650,border=true)

### Edit the Accept/Reject Node

#### General Tab

Set the following values:

1.  **Title**: First level validation
1.  **Directive**: Please review this document.
1. **Due date expression**: `CurrentDate.days(5)`.
1.  **Assignees expression**: Replace the value with the following [MVEL expression]({{page page='use-of-mvel-in-automation-chains'}}):
    `@{WorkflowVariables["level1Assignees"]}`</br>
    This calls the corresponding workflow variable that will be set in the parent workflow.
1.  **Grant permission to task assignees:** Read (in our case we want to make sure the accountants will be able to view the document, not necessarily to modify it).
1.  Look at the result below:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/2- Creating the Subworkflows/subonelevel-node1-general-tab.png
      name: subonelevel-node1-general-tab.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![subonelevel-node1-general-tab.png](nx_asset://62cc78a4-8010-4db1-864a-a2beb701a1de ?w=650,border=true)

#### Transitions Tab

1.  In the `validate` transition, click on the **Create** button to add a new automation chain.
2.  Name your chain `validateDoc`.
3.  Set your chain as following:

    <div class="table-scroll">
    <table class="hover">
    <tbody>
    <tr>
    <th colspan="1">Operation</th>
    <th colspan="1">Parameters</th>
    </tr>
    <tr>
    <td colspan="1">Fetch > Context Document(s)</td>
    <td colspan="1">&nbsp;</td>
    </tr>
    <tr>
    <td colspan="1">Document > Follow Life Cycle Transition</td>
    <td colspan="1">**Value**: approve</td>
    </tr>
    </tbody>
    </table>
    </div>
4.  Save your modifications.

## Creating the Accounting + General Manager (GM) Validation Workflow

In our case this workflow will be used in the other possible situations, but it needs to be reusable in another context as well.

1.  In Nuxeo Studio, go to **Workflow** > **Process definitions** and click on the **New** button.
2.  Fill in the fields:

    1.  **Feature ID**: `subTwoLevelsValidation`
    2.  **Label**: Two levels validation workflow
3.  Click on **Ok**.

### Variables Tab

Here comes another generic workflow. This time again we will setup workflow variables to define the assignees and the parent workflow will send us the variables content.

1.  Add a variable named `level1Assignees`, and another one named `level2Assignees`.
2.  Choose the **String** type for both.
3.  Check multi-valued for both.
    Look at the expected result:
    {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/2- Creating the Subworkflows/subtwolevels-variables-tab.png
    name: subtwolevels-variables-tab.png
    studio_modeler#screenshot#up_to_date
    --}}
    s![subtwolevels-variables-tab.png](nx_asset://8618fc1c-112b-48c6-abd1-b5b62acaa7f6 ?w=650,border=true)
4.  Save your modifications.

### Activation Tab

Same goes for this sub-workflow:

1.  In the "Current document state is" field, type `hideThisWorkflow`.
    As this lifecycle state does not exist, the workflow will never appear in the drop-down list.
2.  Look at the expected result:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/2- Creating the Subworkflows/subwf-availability.png
      name: subwf-availability.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![subwf-availability.png](nx_asset://5b9f0bdc-01ca-4717-9dcd-0797882963c5 ?w=500,border=true)
3.  Save your modifications.

### Graph Tab

1.  Drag and drop the following nodes on your graph:
    - A Start node.
    - Two Accept/Reject nodes.
    - An end node (Stop).

1.  Link the Start node's output to the first Accept/Reject node.

1.  Link the first Accept/Reject node's validate output transition to the second Accept/Reject node.

1.  Link the second Accept/Reject node's validate output transition to the end node.

1.  Link both Accept/Reject node's reject output transitions to the end node.
    Your graph should look like this:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/2- Creating the Subworkflows/subaccountinggm-wf-graph-before-node-edition.png
      name: subaccountinggm-wf-graph-before-node-edition.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![subaccountinggm-wf-graph-before-node-edition.png](nx_asset://ee93fb3e-4d85-4abf-a8ba-70ffbcb508a8 ?w=650,border=true)

1.  Save your modifications.

### Edit the First Accept/Reject Node

#### General Tab

Set the following values:

1.  **Title**: First level validation.
1.  **Directive**: Please review this document.
1.  **Due date expression**: `CurrentDate.days(5)`.
1.  **Assignees expression**: Replace the value with the following [MVEL expression]({{page page='use-of-mvel-in-automation-chains'}}):
    `@{WorkflowVariables["level1Assignees"]}`</br>
    This calls the corresponding workflow variable that will be set in the parent workflow.
1.  **Grant permission to task assignees:** Read (in our case we want to make sure the accountants will be able to view the document, not necessarily to modify it).
1.  Look at the expected result:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/2- Creating the Subworkflows/subonelevel-node1-general-tab.png
      name: subonelevel-node1-general-tab.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![subonelevel-node1-general-tab.png](nx_asset://62cc78a4-8010-4db1-864a-a2beb701a1de ?w=500,border=true)
1.  Save your modifications in the node and on the graph.

### Edit the Second Accept/Reject Node

#### General Tab

Set the following values:

1. **Title**: Second level validation
1. **Directive**: Please review this document.
1. **Due date expression**: `CurrentDate.days(5)`.
1. **Assignees expression**: Replace the value with the following [MVEL expression]({{page page='use-of-mvel-in-automation-chains'}}):
    `@{WorkflowVariables["level2Assignees"]}`
    This calls the corresponding workflow variable that will be set in the parent workflow.
1. **Grant permission to task assignees:** Read
1. Look at the expected result:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/2- Creating the Subworkflows/subtwolevels-node2-general-tab.png
      name: subtwolevels-node2-general-tab.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![subtwolevels-node2-general-tab.png](nx_asset://c3fc08a7-febb-4b08-84d1-5e3123fd45d8 ?w=500,border=true)

#### Transitions Tab

1. In the `validate` transition, select the `validateDoc` chain.</br>
   Look at the expected result:
   {{!--     ### nx_asset ###
   path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/2- Creating the Subworkflows/subtwolevels-node1-transitions-tab.png
   name: subtwolevels-node1-transitions-tab.png
   studio_modeler#screenshot#up_to_date
   --}}
   ![subtwolevels-node1-transitions-tab.png](nx_asset://08d05de7-def8-41c7-9e63-8e429550b5a9 ?w=500,border=true)
1. Save your modifications in the node and on the graph.

That's it! Our sub workflows are ready, now only remains the one workflow to rule them all, the main workflow.
