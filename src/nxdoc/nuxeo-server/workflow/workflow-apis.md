---
title: Workflow APIs
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - workflow
    - grenard
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '12913723'
    ajs-parent-page-title: Workflow
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Workflow+APIs
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Workflow+APIs'
    page_id: '16091325'
    shortlink: vYj1
    shortlink_source: 'https://doc.nuxeo.com/x/vYj1'
    source_link: /display/NXDOC/Workflow+APIs
tree_item_index: 800
history:
    -
        author: Solen Guitter
        date: '2015-12-23 09:19'
        message: arallel workflow example step formattin
        version: '14'
    -
        author: Gabriel Barata
        date: '2015-12-22 17:34'
        message: ''
        version: '13'
    -
        author: Guillaume Renard
        date: '2015-04-14 11:32'
        message: ''
        version: '12'
    -
        author: Guillaume Renard
        date: '2015-04-14 08:41'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-09-19 11:11'
        message: ''
        version: '10'
    -
        author: Mariana Cedica
        date: '2013-10-31 15:00'
        message: ''
        version: '9'
    -
        author: Mariana Cedica
        date: '2013-10-31 14:59'
        message: ''
        version: '8'
    -
        author: Mariana Cedica
        date: '2013-10-31 14:58'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-10-21 14:42'
        message: Added links to the Explorer
        version: '6'
    -
        author: Solen Guitter
        date: '2013-10-21 11:34'
        message: Added links to the explorer
        version: '5'
    -
        author: Alain Escaffre
        date: '2013-10-19 15:16'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2013-10-19 15:15'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-10-19 15:14'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-10-19 15:13'
        message: ''
        version: '1'

---
{{! excerpt}}

We list here all the useful available workflow APIs if you want to programmatically change a workflow instance.

{{! /excerpt}}

## Java API

You can read the javadoc of the workflow engine main services:

*   The [DocumentRouting Service](http://community.nuxeo.com/api/nuxeo/9.1/javadoc/org/nuxeo/ecm/platform/routing/api/DocumentRoutingService.html)
*   The [Task Service](http://community.nuxeo.com/api/nuxeo/9.1/javadoc/org/nuxeo/ecm/platform/task/TaskService.html)

Note that most of the time provided Automation operations will do what you want to do and are easier to use.

## Automation

The framework provides a few interesting Automation operation, in the category "Workflow Context".

*   [Start Workflow](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewOperation/Context.StartWorkflow): Starts a workflow with the given `id` and to initialize its workflow variable. The document id of the created workflow instance is available under the `workflowInstanceId` context variable.
    The `id` parameter is the id of the workflow definition, as it was configured in Studio.
*   [Cancel Workflow](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewOperation/Context.CancelWorkflow): Cancels a workflow giving its id. The `id` parameter is the id of the document representing the workflow instance.
*   [Resume Workflow](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewOperation/Workflow.ResumeNodeOperation): Allows to resume a node of the workflow. It probably was suspended waiting for a task to be solved. This operation allows to force the resuming, and will let the task in a "cancelled" state.
*   [Complete task](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewOperation/Workflow.CompleteTaskOperation): Allows to close a task as if it was done via the user interface, with the ability to pass some data, as if it came from a form.
*   [Set Workflow Variable](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/Context.SetWorkflowVar): Allows to set workflow variables, either from within the execution of a workflow automation chain (input, output, transition) or externally, provided the workflow instance id.
*   [Set Node Variable](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewOperation/Workflow.SetNodeVariable): Allows to set node variables within the execution of a workflow automation chain (input, output, transition).

## REST API{{> anchor 'wfrestapi'}}

See [Workflow and Task endpoints]({{page page='workflow-task-endpoints'}}).
