---
title: Workflow and Task Endpoints
review:
    comment: ''
    date: '2017-01-04'
    status: ok
details:
    howto:
        excerpt: >-
            This how-to provides an example of how to use the workflow REST API.
        level: Advanced
        tool: Code
        topics: 'Worklow, REST API'
labels:
    - lts2016-ok
    - rest-api
    - workflow
    - workflow-component
    - excerpt
toc: true
tree_item_index: 300

---

Since 7.2, the framework provides a new REST API to initiate and run workflows. Endpoints documentation is available on:

*   The [API Playground](http://nuxeo.github.io/api-playground/) (see this [documentation]({{page version='' space='nxdoc' page='use-nuxeo-api-playground-to-discover-the-api'}}) to add the needed contribution to be able to browse your local instance)
*   The REST API explorer of your instance at [http://localhost:8080/nuxeo/api/v1/doc](http://localhost:8080/nuxeo/api/v1/doc)

A client sample [nuxeo-travel-expenses](https://github.com/nuxeo/nuxeo-travel-expenses) (available on [GitHub](https://github.com/nuxeo/nuxeo-travel-expenses)) based on Web Components and [Polymer framework](https://www.polymer-project.org) demonstrates how to use the workflow REST API.

## Endpoints

### Workflow

| Path                                                | Endpoint                                                   |
|:----------------------------------------------------|:-----------------------------------------------------------|
| GET `/api/v1/workflow`                              | Get the workflow instances launched by the current user.   |
| GET `/api/v1/workflow/{workflowId}`                 | Find a workflow instance by its id.                        |
| GET `/api/v1/workflow/{workflowInstanceId}/graph`   | Get the JSON serialization of a workflow instance graph.   |
| GET `/api/v1/id/{docId}/@workflow`                  | Get the workflow instances launched on the given document. |
| GET `/api/v1/path/{docPath}/@workflow`              | Get the workflow instances launched on the given document. |
| POST `/api/v1/id/workflow`                          | Start a workflow instance.                                 |
| POST `/api/v1/id/{docId}/@workflow`                 | Start a workflow instance on the given document.           |
| POST `/api/v1/path/{docPath}/@workflow`             | Start a workflow instance on the given document.           |
| DELETE `/api/v1/path/workflow/{workflowInstanceId}` | Delete a workflow instance by its id.                      |

### Task

| Path                                 | Endpoint                              |
|:-------------------------------------|:--------------------------------------|
| GET `/api/v1/task`                   | Query tasks by user and workflow ids. |
| GET `/api/v1/task/{taskId}`          | Get a task by its id.                 |
| GET `/api/v1/id/{docId}/@task`       | List tasks of the given document.     |
| GET `/api/v1/path/{docPath}/@task`   | List tasks of the given document.     |
| PUT `/api/v1/task/{taskId}/{action}` | Complete task.                        |
| PUT `/api/v1/task/{taskId}/reassign` | Reassign a task.                      |
| PUT \/api/v1/task/{taskId}/delegate` | Delegate a task.                      |

### Workflow Model

| Path                                          | Endpoint                                              |
|:----------------------------------------------|:------------------------------------------------------|
| GET `/api/v1/workflowModel/{modelName}`       | Find a workflow model by its name.                    |
| GET `/api/v1/workflowModel/{modelName}/graph` | Get the JSON serialization of a workflow model graph. |
| GET `/api/v1/workflowModel`                   | Get the workflow models.                              |

## Parallel Review Example

Below follows an example of how to start a Parallel Review Workflow and complete it via the REST API.

1.  To start a parallel review on a given document, post to the workflow endpoint or the workflow [adapter]({{page version='' space='nxdoc' page='web-adapters-for-the-rest-api'}}):

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

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Workflow documentation]({{page page='workflow'}})
- [Web Adapters for the REST API]({{page version='' space='nxdoc' page='web-adapters-for-the-rest-api'}})
- [REST API Entity Types]({{page version='' space='nxdoc' page='rest-api-entity-types'}})
{{/panel}}
</div>
<div class="column medium-6">

&nbsp;

</div>
</div>
