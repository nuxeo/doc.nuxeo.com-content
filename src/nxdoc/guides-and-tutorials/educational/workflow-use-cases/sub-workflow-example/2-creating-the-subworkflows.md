---
title: 2- Creating the Subworkflows
review:
    comment: ''
    date: ''
    status: ok
labels:
    - sub-workflow
    - subworkflow
    - workflow
    - content-review-lts2015
toc: true
confluence:
    ajs-parent-page-id: '28475463'
    ajs-parent-page-title: Sub Workflow Example
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: 2-+Creating+the+Subworkflows
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/2-+Creating+the+Subworkflows'
    page_id: '28475461'
    shortlink: RYCyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/RYCyAQ'
    source_link: /display/NXDOC710/2-+Creating+the+Subworkflows
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
previous_link: nxdoc/1-creating-the-expense-document-type
next_link: nxdoc/3-creating-the-main-workflow

---
{{#> callout type='info' }}

This document is part of the [Sub Workflow Example]({{page page='sub-workflow-example'}}) project series.

{{/callout}}

## What Will We Do in this Step?

We will create the subworkflows that may be called from the main workflow depending on the document's metadata. We will need two separate workflows as the business logic is different between them. The first workflow will have one Accept/Reject node, the other will have two successive ones.

A single level validation workflow and a two-level validation workflow are both elements we could use again in the future, so we will keep them generic. Allowing a generic workflow design is one of the major assets in the subworkflow functionality.

## Prerequisites

Before starting this tutorial step, make sure you create in your Nuxeo Platform Admin Center a user with "Eric" as his username and a user group named "accounting" with at least one member.

## Creating the Accounting Validation Workflow

In our case this workflow will be used if the expense is worth less than $100 and not belonging in the "misc" category, but it needs to be reusable in another context as well.

1.  In Nuxeo Studio, go to Nuxeo Studio&nbsp;> **Workflow definitions** and click on the **New** button.
2.  Fill in the fields:

    1.  **Feature ID**: `subOneLevelValidation`
    2.  **Label**: Generic one level validation workflow.
3.  Click on the **Next** button.
    The Definition tab of the workflow is displayed.

### Variables Tab

We want to keep this workflow generic, remember? So what we will do is setup a workflow variable to define the assignees. The parent workflow will send us the variable content.

1.  Add a variable named `level1Assignees`.
2.  Choose the **String** type.
3.  Check multi-valued (we may have several assignees).
4.  Save your modifications.
    Look at the result below:
    ![]({{file name='subonelevel-variables-tab.png' space='nxdoc' page='2-creating-the-subworkflows'}} ?w=500,h=99,border=true)

### Activation Tab

We do not want anybody to launch this subworkflow directly, so we will set rules to restrain its visibility.

1.  In the "Current document state is" field, type `hideThisWorkflow`.
    As this lifecycle state does not exist, this trick will ensure the workflow will never appear in the drop-down list.
2.  Save your modifications.
    Look at the result below:
    ![]({{file name='subonelevel-node1-general-tab.png' space='nxdoc' page='2-creating-the-subworkflows'}} ?w=400,h=280,border=true)

### Graph Tab

1.  Drag and drop the following nodes on your graph:

    1.  A Start node,
    2.  An Accept/Reject node,
    3.  An end node (Stop).
2.  Link the Start node's output to the Accept/Reject node.
3.  Link the Accept/Reject node's output transitions to the end node.
    Your graph should look like this:
    ![]({{file name='subaccountingvalidation-wf-graph.png' space='nxdoc' page='2-creating-the-subworkflows'}} ?w=500,border=true)

### Edit the Accept/Reject Node

#### General Tab

Set the following values:

1.  **Title**: First level validation
2.  **Directive**: Please review this document.
3.  **Assignees expression**: Replace the value with the following [MVEL expression]({{page page='use-of-mvel-in-automation-chains'}}):
    `@{WorkflowVariables["level1Assignees"]}`
    This calls the corresponding workflow variable that will be set in the parent workflow.
4.  **Grant permission to task assignees:** Read (in our case we want to make sure the accountants will be able to view the document, not necessarily to modify it).
5.  Look at the result below:
    ![]({{file name='subonelevel-node1-general-tab.png' space='nxdoc' page='2-creating-the-subworkflows'}} ?w=500,h=350,border=true)

#### Transitions Tab

1.  In the `validate` transition, click on the **Create** button to add a new automation chain.
2.  Name your chain `validateDoc`.
3.  Set your chain as following:

    <div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Operation</th><th colspan="1">Parameters</th></tr><tr><td colspan="1">Fetch > Context Document(s)</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">Document > Follow Life Cycle Transition</td><td colspan="1">**Value**: approve</td></tr></tbody></table></div>
4.  Save your modifications.

## Creating the Accounting + General Manager (GM) Validation Workflow

In our case this workflow will be used in the other possible situations, but it needs to be reusable in another context as well.

1.  In Nuxeo Studio, go to **Workflow** > **Workflow definitions** and click on the **New** button.
2.  Fill in the fields:

    1.  **Feature ID**: `subTwoLevelsValidation`
    2.  **Label**: Two levels validation workflow
3.  Click on the **Next** button.

### Variables Tab

Here comes another generic workflow. This time again we will setup workflow variables to define the assignees and the parent workflow will send us the variables content.

1.  Add a variable named `level1Assignees`, and another one named `level2Assignees`.
2.  Choose the **String** type for both.
3.  Check multi-valued for both.
    Look at the expected result:
    ![]({{file name='subtwolevels-variables-tab.png'}} ?w=650,border=true)
4.  Save your modifications.

### Activation Tab

Same goes for this subworkflow:

1.  In the "Current document state is" field, type `hideThisWorkflow`.
    As this life cycle state does not exist, the workflow will never appear in the drop-down list.
2.  Look at the expected result:
    ![]({{file name='subwf-availability.png' space='nxdoc' page='2-creating-the-subworkflows'}} ?w=400,h=370,border=true)
3.  Save your modifications.

### Graph Tab

1.  Drag and drop the following nodes on your graph:

    *   A Start node.
    *   Two Accept/Reject nodes.
    *   An end node (Stop).
2.  Link the Start node's output to the first Accept/Reject node.
3.  Link the first Accept/Reject node's validate output transition to the second Accept/Reject node.
4.  Link the second Accept/Reject node's validate output transition to the end node.
5.  Link both Accept/Reject node's reject output transitions to the end node.
    Your graph should look like this:
    ![]({{file name='subaccountinggm-wf-graph-before-node-edition.png' space='nxdoc' page='2-creating-the-subworkflows'}} ?w=500,border=true)
6.  Save your modifications.

### Edit the First Accept/Reject Node

#### General Tab

Set the following values:

1.  **Title**: First level validation.
2.  **Directive**: Please review this document.
3.  **Assignees expression**: Replace the value with the following [MVEL expression]({{page page='use-of-mvel-in-automation-chains'}}):
    `@{WorkflowVariables["level1Assignees"]}`
    This calls the corresponding workflow variable that will be set in the parent workflow.
4.  **Grant permission to task assignees:** Read (in our case we want to make sure the accountants will be able to view the document, not necessarily to modify it).
5.  Look at the expected result:
    ![]({{file name='subonelevel-node1-general-tab.png' space='nxdoc' page='2-creating-the-subworkflows'}} ?w=500,h=350,border=true)
6.  Save your modifications in the node and on the graph.

### Edit the Second Accept/Reject Node

#### General Tab

Set the following values:

1.  **Title**: Second level validation
2.  **Directive**: Please review this document.
3.  **Assignees expression**: Replace the value with the following [MVEL expression]({{page page='use-of-mvel-in-automation-chains'}}):
    `@{WorkflowVariables["level2Assignees"]}`
    This calls the corresponding workflow variable that will be set in the parent workflow.
4.  **Grant permission to task assignees:** Read
5.  Look at the expected result:
    ![]({{file name='subtwolevels-node2-general-tab.png' space='nxdoc' page='2-creating-the-subworkflows'}} ?w=500,h=351,border=true)

#### Transitions Tab

1.  In the `validate` transition, select the `validateDoc` chain.
    Look at the expected result:
    ![]({{file name='subtwolevels-node1-transitions-tab.png' space='nxdoc' page='2-creating-the-subworkflows'}} ?w=500,h=351,border=true)
2.  Save your modifications in the node and on the graph.

That's it! Our sub workflows are ready, now only remains the one workflow to rule them all, the main workflow.
