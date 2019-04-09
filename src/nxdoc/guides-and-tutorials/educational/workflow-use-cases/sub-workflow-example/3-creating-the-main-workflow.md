---
title: 3- Creating the Main Workflow
review:
    comment: ''
    date: ''
    status: ok
labels:
    - sub-workflow
    - subworkflow
    - workflow
toc: true
confluence:
    ajs-parent-page-id: '22380870'
    ajs-parent-page-title: Sub Workflow Example
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: 3-+Creating+the+Main+Workflow
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/3-+Creating+the+Main+Workflow'
    page_id: '22380920'
    shortlink: eIFVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/eIFVAQ'
    source_link: /display/NXDOC60/3-+Creating+the+Main+Workflow
history:
    -
        author: Manon Lumeau
        date: '2015-08-10 13:34'
        message: ''
        version: '13'
    -
        author: Manon Lumeau
        date: '2014-12-10 16:42'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-06-12 11:47'
        message: Fixed broken links
        version: '11'
    -
        author: Solen Guitter
        date: '2013-08-09 16:16'
        message: ''
        version: '10'
    -
        author: Bertrand Chauvin
        date: '2013-08-08 11:38'
        message: ''
        version: '9'
    -
        author: Bertrand Chauvin
        date: '2013-08-08 10:44'
        message: ''
        version: '8'
    -
        author: Bertrand Chauvin
        date: '2013-08-08 10:35'
        message: ''
        version: '7'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:55'
        message: ''
        version: '6'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:54'
        message: ''
        version: '5'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:53'
        message: ''
        version: '4'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:53'
        message: ''
        version: '3'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:41'
        message: ''
        version: '2'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:20'
        message: ''
        version: '1'
previous_link: nxdoc/2-creating-the-subworkflows

---
{{#> callout type='info' }}

This document is part of the [Sub Workflow Example]({{page page='sub-workflow-example'}}) project series.

{{/callout}}

## What Will We Do In this Step?

We will create the main workflow that will call a subworkflow depending on the document's metadata, and pass it variables along the way.

## Creating the Workflow

1.  In Nuxeo Studio, go to **Workflow** > **Workflow definitions** and click on the **New** button.
2.  Fill in the fields:

    1.  **Feature ID**: `expenseValidation`
    2.  **Label**: Expense validation
    3.  **(Optional) Description**: Request your expense validation.
3.  Click on the **Next** button.

### Activation Tab

This workflow will be a wrapper for the subworkflows. So contrarily to the previous ones we created, it should be visible to the users.

1.  In the "Current user has one of the permissions" list, choose **Write**.
2.  In the "Current document has one of the types" list, choose **Expense**.
3.  In the "Current document state is" field, type `project`. We wouldn't like to launch the workflow on validated expenses.
4.  Save your modifications.

### Graph Tab

1.  Drag and drop the following nodes on your graph:

    1.  A Start node.
    2.  A Sub Workflow node.
    3.  An end node (Stop).
2.  Link the start node's output transition to the subworkflow node.
3.  Link the subworkflow's output transition to the end node.
4.  Save your modifications.
    Your graph should look like this:
    ![]({{file name='expensevalidation-wf-before-node-edition.png'}} ?w=400,border=true)

### Edit the Sub Workflow Node

#### General Tab

Set the following values:

1.  **Title**: Validation request
2.  **Workflow**: We will use an [MVEL expression]({{page page='use-of-mvel-in-automation-chains'}}) to determine which workflow should be run. Type the following expression in this field:

    ```
    @{Document["expense:amount"] < 100 && Document["expense:expensetype"] != 'Misc' ? 'subOneLevelValidation' : 'subTwoLevelsValidation'}
    ```

    This implements our business logic rule, by checking the expense's amount and its type. If under $100 and not in the misc category, then we call a one level validation, otherwise a two-level validation.
    Result below (as seen in the expression editor because it is a rather large expression):
    ![]({{file name='mainwf-subworkflow-field.png'}} ?w=500,border=true)

3.  Workflow variables: This field determines which variables we will send to the sub workflow that is called. Note that to be able to use it in your subworkflow, it has to be set in the subworkflow Variables tab; as we did this already in the previous step, we're fine. Each value has to be set on a separate line, so we will fill this field as following:

    ```
    level1Assignees=group:accounting
    level2Assignees=Eric
    ```

    Look at the result below:
    ![]({{file name='mainwf-general-node.png'}} ?w=500,border=true)

4.  Save your modifications in the node and on the graph.

You are now all set! This tutorial is merely a basic example of what can be achieved with the sub workflow functionality; the rest is up to your imagination.
