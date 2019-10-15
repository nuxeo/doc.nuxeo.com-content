---
title: Sub-Workflow Example
review:
    comment: ''
    date: '2019-06-18'
    status: ok
labels:
    - lts2016-ok
    - workflow
    - grenard
    - sub-workflow
    - sub-workflow
    - excerpt
    - lts2017-ok
    - lts2019-ok
confluence:
    ajs-parent-page-id: '19235786'
    ajs-parent-page-title: Workflow Use Cases
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Sub+Workflow+Example
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Sub+Workflow+Example'
    page_id: '14257562'
    shortlink: mo3Z
    shortlink_source: 'https://doc.nuxeo.com/x/mo3Z'
    source_link: /display/NXDOC/Sub+Workflow+Example
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2013-09-02 17:15'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2013-08-09 16:10'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-08-08 16:47'
        message: Fixed typos
        version: '15'
    -
        author: Bertrand Chauvin
        date: '2013-08-08 14:01'
        message: Removed restrictions
        version: '14'
    -
        author: Bertrand Chauvin
        date: '2013-08-08 11:41'
        message: ''
        version: '13'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 19:29'
        message: ''
        version: '12'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 19:15'
        message: ''
        version: '11'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:56'
        message: ''
        version: '10'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:53'
        message: ''
        version: '9'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:50'
        message: ''
        version: '8'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:49'
        message: ''
        version: '7'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:46'
        message: ''
        version: '6'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:42'
        message: ''
        version: '5'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:17'
        message: ''
        version: '4'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 16:55'
        message: ''
        version: '3'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 16:52'
        message: ''
        version: '2'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 16:49'
        message: ''
        version: '1'
---

## A Quick Note About The Sub-workflow Concept

{{! excerpt}}
The sub-workflow functionality is the ability to call a workflow from another workflow (creating inception-like workflows), and to pass its variables along the way. The main workflow is suspended while the sub-workflow runs, and resumes when the sub-workflow ends.
{{! /excerpt}}

This functionality is a great asset as it allows you to reuse your workflows and imagine powerful combinations. The best point is that you can dynamically choose the sub-workflow that should be called using an [MVEL expression]({{page page='use-of-mvel-in-automation-chains'}}).

## Use Case

The company SuperTech wants to implement an expense report validation workflow, with the following rules:

- Users should be able to fill in their expenses and attach the corresponding receipt.
- Each expense should be validated separately.
- Expense type can be chosen from a list (transportation, hotel or misc).
- Expenses of 100 dollars or more have to be validated by the accounting service and the general manager, only by the accounting service if less.
- If the document is validated, set its status to approved.
- If the document is rejected, end the workflow.

### How Will We Achieve This?

Easy! We will take advantage of the sub-workflow functionality introduced in Nuxeo 5.7.2.

- The user will call a workflow.
- Depending on the document values, we will call a sub-workflow with the corresponding steps.
- The sub-workflows will be made generic so that they can also be used in another context.

### How Are We Going To Create It?

This project will be divided in three steps:

1.  [Creating the Expense document type]({{page page='1-creating-the-expense-document-type'}})
2.  [Creating the validation sub workflows]({{page page='2-creating-the-subworkflows'}}) (called automatically depending on the document values)
3.  [Creating the main workflow]({{page page='3-creating-the-main-workflow'}}) (called by the user)

Ready? So let's start with the [Expense document type creation]({{page page='1-creating-the-expense-document-type'}}).
