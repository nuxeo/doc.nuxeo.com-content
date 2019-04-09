---
title: 1- Creating the Expense Document Type
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
    canonical: 1-+Creating+the+Expense+Document+Type
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC710/1-+Creating+the+Expense+Document+Type
    page_id: '28475459'
    shortlink: Q4CyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/Q4CyAQ'
    source_link: /display/NXDOC710/1-+Creating+the+Expense+Document+Type
history:
    -
        author: Manon Lumeau
        date: '2016-04-27 16:06'
        message: 'ix Studio menu label   '
        version: '14'
    -
        author: Manon Lumeau
        date: '2016-03-17 13:50'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2016-02-10 13:59'
        message: Update Schema tab step
        version: '12'
    -
        author: Manon Lumeau
        date: '2014-12-10 16:39'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-12-10 16:38'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-12-10 16:37'
        message: formatting
        version: '9'
    -
        author: Solen Guitter
        date: '2014-06-12 11:43'
        message: Fixed broken links
        version: '8'
    -
        author: Solen Guitter
        date: '2013-08-09 16:10'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-08-09 14:59'
        message: Fixed formatting and typos
        version: '6'
    -
        author: Bertrand Chauvin
        date: '2013-08-08 10:36'
        message: ''
        version: '5'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:51'
        message: ''
        version: '4'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:46'
        message: ''
        version: '3'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:46'
        message: ''
        version: '2'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:11'
        message: ''
        version: '1'
next_link: nxdoc/2-creating-the-subworkflows

---
{{#> callout type='info' }}

This document is part of the [Sub Workflow Example]({{page page='sub-workflow-example'}}) project series.

{{/callout}}

## What Will We Do in This Step?

We will create the document type on which the workflow will be launched.

## Reviewing the Rules

Before starting the document type creation, we will take a little time to review what is expected from us at this step:

*   Users should be able to fill in their expenses and attach the corresponding receipt.
    => This means we need to create a document type that will allow us to attach a binary file. The file will be a mandatory field.

*   Each expense should be validated separately.
    => No more than one binary file at a time then.

*   Expense type can be chosen from a list (transportation, hotel or misc).
    => We will need to create a [vocabulary]({{page space='studio' page='vocabularies'}}).

*   Expenses worth 100 dollars or more and/or belonging to the misc type have to be validated by the accounting service and the general manager, otherwise only by the accounting service.
    => The user will have to fill the amount; amount and expense type should be mandatory fields.

Alright; now that we know where we are heading to, we can look further.

## Creating the Vocabulary

Before creating the document type, we will create the vocabulary so that we have all necessary elements to complete it afterwards.

1.  In Nuxeo studio, go to **Vocabularies** and click on the **New** button.
2.  Name your vocabulary: `expenseType`.
3.  Leave the default vocabulary type, a simple vocabulary is exactly what we need.
4.  Add the following entries into the vocabulary (leave the default values for elements not indicated in the table):

    <div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Id</th><th colspan="1">Label</th></tr><tr><td colspan="1">Hotel</td><td colspan="1">Hotel</td></tr><tr><td colspan="1">Transportation</td><td colspan="1">Transportation</td></tr><tr><td colspan="1">Misc</td><td colspan="1">Misc</td></tr></tbody></table></div>
5.  Save your vocabulary.
    You can take a look at the expected result below:
    ![]({{file name='expense-type-vocabulary.png'}} ?w=650,border=true)

## Creating the Expense Document Type

On to the document type creation.

1.  In Nuxeo Studio, go to **Content Model**&nbsp;> **Document Types**, and click on the **New** button.
2.  Fill in the fields:

    *   **Feature ID**: Expense
    *   **Extends**: Choose "Nothing"
    *   **Label**: Expense
3.  Click on the **Next** button.

## Defining the Document Type

Now that the document type is created, we have to define its specificities.

### Definition Tab

1.  Set the category to **Document**.
    (Optional) You may add icons if you like to, your document type will be nicer that way.
2.  Save your modifications.
    Look at the result below:
    ![]({{file name='expense-definition-tab.png'}} ?w=650,border=true)

### Schema Tab

We will need to add two specific fields: amount and type.

1.  In the **Add extra schemas to this document type** section, add the `file` schema (not `files`).
    Our document will now be able to hold a single binary file.
2.  In the **Add a custom schema** section:
    *   Add a field named `amount` of type **Floating point**.
    *   Add a field named `expensetype` of type **String**.
3.  Save your modifications.

## Defining the Document Type Layouts

1.  In the **Creation Layout** tab, create the layout as following:

    <div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Schema</th><th colspan="1">Field</th><th colspan="1">Widget type</th><th colspan="1">Required?</th></tr><tr><td colspan="1">dublincore</td><td colspan="1">title</td><td colspan="1">Text</td><td colspan="1">Yes</td></tr><tr><td colspan="1">dublincore</td><td colspan="1">description</td><td colspan="1">Textarea</td><td colspan="1">No</td></tr><tr><td colspan="1">expense</td><td colspan="1">amount</td><td colspan="1">Floating point</td><td colspan="1">Yes</td></tr><tr><td colspan="1">expense</td><td colspan="1">expensetype</td><td colspan="1">Vocabulary
    (use the expenseType vocabulary here!)</td><td colspan="1">Yes</td></tr><tr><td colspan="1">file</td><td colspan="1">content</td><td colspan="1">File</td><td colspan="1">Yes</td></tr></tbody></table></div>
2.  Import this (create) layout in the **Edit Layout** and **View Layout** tabs.
3.  Save your modifications.
    See the result:
    ![]({{file name='expense-creation-layout-tab.png'}} ?w=500,border=true)

Our document type is ready to rock! Take a deep breath and head on to the next step: [Creating the subworkflows]({{page page='2-creating-the-subworkflows'}}).
