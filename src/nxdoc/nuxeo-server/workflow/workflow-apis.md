---
title: Workflow APIs
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - workflow
    - workflow-component
    - excerpt
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

You can read the javadoc of the workflow engine main services:&nbsp;

*   The [DocumentRouting Service](http://community.nuxeo.com/api/nuxeo/5.8/javadoc/org/nuxeo/ecm/platform/routing/api/DocumentRoutingService.html)
*   The [Task Service](http://community.nuxeo.com/api/nuxeo/5.8/javadoc/org/nuxeo/ecm/platform/task/TaskService.html)

Note that most of the time provided Automation operations will do what you want to do and are easier to use.

## Automation

The framework provides a few interesting Automation operation, in the category "Workflow Context".

*   [Start Workflow](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/Context.StartWorkflow): Starts a workflow with the given&nbsp;`id`&nbsp;and to initialize its workflow variable. The document id of the created workflow instance is available under the&nbsp;`workflowInstanceId`&nbsp;context variable.
    The&nbsp;`id`&nbsp;parameter is the id of the workflow definition, as it was configured in Studio.
*   [Cancel Workflow](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.7.3/viewOperation/Context.CancelWorkflow): Cancels a workflow giving its id. The&nbsp;`id`&nbsp;parameter is the id of the document representing the workflow instance.
*   [Resume Workflow](/explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.7.3/viewOperation/Workflow.ResumeNodeOperation): Allows to resume a node of the workflow. It probably was suspended waiting for a task to be solved. This operation allows to force the resuming, and will let the task in a "cancelled" state.
*   [Complete task](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.7.3/viewOperation/Workflow.CompleteTaskOperation): Allows to close a task as if it was done via the user interface, with the ability to pass some data, as if it came from a form.
*   [Set Workflow Variable](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/Context.SetWorkflowVar): Allows to set workflow variables, either from within the execution of a workflow automation chain (input, output, transition) or externally, provided the workflow instance id.
*   [Set Node Variable](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/Context.SetWorkflowNodeVar): Allows to set node variables within the execution of a workflow automation chain (input, output, transition).

## REST API{{> anchor 'wfrestapi'}}

Since 7.2, the framework provides a new REST API to initiate and run worflows. Endpoints documentation is available on:

*   the [API Playground](http://nuxeo.github.io/api-playground/)(see this&nbsp;[documentation](/x/9QUuAQ) to add the needed contribution to be able to browse your local instance)
*   the REST API explorer of your instance at&nbsp;[http://localhost:8080/nuxeo/api/v1/doc](http://localhost:8080/nuxeo/api/v1/doc)

A client sample&nbsp;[nuxeo-travel-expenses](https://github.com/nuxeo/nuxeo-travel-expenses) (available on [GitHub](https://github.com/nuxeo/nuxeo-travel-expenses)) based on&nbsp;Web Components and [Polymer framework](https://www.polymer-project.org)&nbsp;demonstrates how to use the workflow REST API.

### Parallel Review Example

Below follows an example of how to start a Parallel Review Workflow and complete it via the REST API.&nbsp;

1.  To start a parallel review on a given document, post to the workflow endpoint or the workflow adapter:

    ```
    POST /api/v1/id/{documentId}/@workflow
    {
        "entity-type":"workflow",
        "workflowModelName":"ParallelDocumentReview",
        "attachedDocumentIds":["{documentId}"]
    }
    ```

    A workflow object is returned with the `workflowId`, which will be used henceforth. Each workflow comprises a set of tasks, which must be completed in order for the workflow to change its state and eventually come to an end.

2.  For each step, retrieve the respective task from the server, either via the `task` endpoint or `task` adapter.

    ```
    GET /api/v1/id/{documentId}/@task?userId={userId}&workflowInstanceId={workflowId}&workflowModelName=ParallelDocumentReview
    ```

    A task object is returned, with the respective `taskId`. In our case, the first step would return a Choose Participants task, where the user that started the workflow must choose the participants involved in the review. The task can than be completed via a PUT request to the `task` endpoint, with the respective action being supplied at the end of the path.

3.  To start the review, use the `start_review` action in the request.

    ```
    PUT /api/v1/task/{taskId}/start_review
    {
        "entity-type":"task",
        "id":"{taskId}",
        "variables":{
            "comment":{initial_comment},
            "participants":”{userIds}”,
            "assignees":"{userIds}",
            "end_date":”{end_date}”
        }
    }
    ```

    Here, the `initial_comment`, `userIds`, and `end_date` variables must be supplied by the user, and userIds must be a string encoding an array containing the ids of the participants. Supposing that only John was selected for the review, `userIds` would be represented as `"[\"John\"]"`.
    The next task prompts the user to Approve, Reject or take No Action (N/A) in the review, and optionally leave a comment.

4.  The review could be approved via the following request:

    ```
    PUT /api/v1/task/{taskId}/approve
    {
        "entity-type":"task",
        "id":"{tasId}",
        "comment":"{comment}"
    }
    ```

    The next task requires the user to Validate or Reject the review, in the light of the feedback provided by other participants. Completing this task will bring the workflow to an end.

5.  Validating the review can be done as follows:

    ```
    PUT /api/v1/task/{taskId}/validate
    {
        "entity-type":"task",
        "id":"{taskId}",
        "comment":"{comment}"
    }
    ```
