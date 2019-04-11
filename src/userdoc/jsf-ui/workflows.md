---
title: Workflows
review:
    comment: ''
    date: '2018-03-08'
    status: ok
labels:
    - workflow
    - life-cycle
    - multiexcerpt-include
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '11043048'
    ajs-parent-page-title: Nuxeo Platform User Documentation
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Workflows
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Workflows'
    page_id: '2392410'
    shortlink: WoEk
    shortlink_source: 'https://doc.nuxeo.com/x/WoEk'
    source_link: /display/USERDOC/Workflows
tree_item_index: 1200
history:
    -
        author: Manon Lumeau
        date: '2015-09-21 09:35'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2014-11-04 00:45'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2013-11-03 15:14'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2013-10-25 13:56'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-10-24 15:03'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2013-10-24 14:41'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2013-01-04 12:21'
        message: ''
        version: '13'
    -
        author: Alain Escaffre
        date: '2012-12-31 02:37'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2012-09-12 16:19'
        message: Migrated to Confluence 4.0
        version: '11'
    -
        author: Solen Guitter
        date: '2012-09-12 16:19'
        message: Updated content with last version changes (5.6 workflow)
        version: '10'
    -
        author: Solen Guitter
        date: '2012-06-18 17:41'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2011-11-23 10:00'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2011-06-06 11:47'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2010-10-20 10:41'
        message: ''
        version: '6'
    -
        author: Wojciech Sulejman
        date: '2010-08-30 15:50'
        message: ''
        version: '5'
    -
        author: Stéfane Fermigier
        date: '2010-08-03 17:55'
        message: added brief description of workflows
        version: '4'
    -
        author: Solen Guitter
        date: '2010-05-26 18:15'
        message: added brief description of workflows
        version: '3'
    -
        author: Solen Guitter
        date: '2010-05-26 17:55'
        message: added schema
        version: '2'
    -
        author: Solen Guitter
        date: '2010-04-14 17:17'
        message: ''
        version: '1'

---
All the documents evolve according to a defined lifecycle. The default lifecycle is composed of the following states: Project, Approved and Obsolete. There are different ways to make documents evolve through this lifecycle. One of the ways is to use a workflow.

Users who are involved in workflows are alerted by email and can have a synthetic view of all their pending tasks on documents in their [dashboard]({{page space='USERDOC' page='Browsing Content'}}#dashboard). The documents they have to review are listed there.

{{{multiexcerpt 'default-validation-workflows' page='NXDOC:Workflow'}}}

Other workflows can be [configured with Nuxeo Studio]({{page space='Studio' page='Workflow'}}), which will then be available in the application.

## Submitting a Task

A task represents what a workflow instance expects from a user or a group of users. Usually they are expected to give some information through a form and click on a button (like Accept, Reject, Confirm, Notify, Transform, etc.). A task usually has one or several assignees, a title, a directive and an expected date of achievement. The task assignees can be specified directly in the task definition or can be dynamically computed.

To submit a task, read the following documentation for [serial workflow]({{page page='serial-document-workflow'}}) or [parallel workflow]({{page page='parallel-document-workflow'}}).

## Delegating a Task

When you know you might not be able to perform a task, you can delegate it to another user or group of users. Delegating means that they can do the task at your place, but you are not unassigned the task. As soon as you or a delegate reviews the document, the task is closed for you and all the delegatees. On the contrary, if you do the task before the delegatees, the task is considered done for everyone.

For more information about delegation, see [Delegating a Task]({{page page='delegating-a-task'}}).

## Reassigning a Task

If you feel that you should not be responsible for a task, you can reassign it. Reassigning a task means that you lose your rights on the task and on the document when you reassign your task on a document. The user you reassign the task to becomes responsible for the task and it is as if you never had to review the document.

For more information about reassignment, read [Reassigning a Task]({{page page='reassigning-a-task'}}).

## Abandoning a Workflow

Abandoning a workflow means canceling it. When you abandon a workflow, the lifecycle state of the document does not change. The modifications made on the document during the workflow are kept.

Abandoning the workflow can be done at any time. Only the workflow initiator and administrators can abandon a workflow. He can also decide to cancel the workflow when he gets an update request from the first reviewer. When the first reviewer [rejects the document]({{page version='' space='userdoc' page='serial-document-workflow'}}#approve-reject-document), it goes back to the initiator, who should then either edit the document and resubmit it, or cancel the review.

To **abandon a workflow**, click on the **Workflow** tab of the document and then click on **Abandon**. The workflow is immediately canceled.

## Notifications

Users who are involved in workflows are alerted by email and can have a synthetic view of all the tasks they have to do on documents in their [dashboard]({{page space='USERDOC' page='Browsing Content'}}#dashboard). The documents they have to review are listed there.

## Rights Modification on the Document

You can modify the permissions of a particular user or group on a document during an entire workflow or a particular task. This will bypass the permissions set on the workspace.

## Implementation

Workflows can be adapted to any types of use cases like purchase requests, case management, invoices management. You can read the page [Simple Workflow Example]({{page space='NXDOC' page='Simple Workflow+Example'}}), and follow the creation of a workflow step by step with a specific use case.

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related pages'}}

- [Serial Document Workflow]({{page page='serial-document-workflow'}})
- [Parallel Document Workflow]({{page page='parallel-document-workflow'}})
- [Delegating a Task]({{page page='delegating-a-task'}})
- [Reassigning a Task]({{page page='reassigning-a-task'}})

{{/panel}}
</div>

<div class="column medium-6">

&nbsp;

</div>
</div>
