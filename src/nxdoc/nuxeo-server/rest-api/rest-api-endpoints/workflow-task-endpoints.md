---
title: Workflow and Task Resources Endpoints
review:
    comment: ''
    date: '2018-01-16'
    status: ok
details:
    howto:
        excerpt: This how-to provides an example of how to use the workflow REST API.
        level: Advanced
        tool: Code
        topics: 'Worklow, REST API'
labels:
    - lts2016-ok
    - rest-api
    - troger
    - excerpt
    - lts2017-ok
toc: true
tree_item_index: 300

---

## Endpoints

### Workflow

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-7">Path</th>
        <th class="small-5">Endpoint</th>
      </tr>
      <tr>
        <td class="small-7">GET `/api/v1/workflow`</td>
        <td class="small-5">Gets workflow instances launched by current user</td>
      </tr>
      <tr>
        <td class="small-7">GET `/api/v1/workflow/{workflowId}`</td>
        <td class="small-5">Finds workflow instance by its ID</td>
      </tr>
      <tr>
        <td class="small-7">GET `/api/v1/workflow/{workflowInstanceId}/graph`</td>
        <td class="small-5">Gets JSON serialization of workflow instance graph</td>
      </tr>
      <tr>
        <td class="small-7">GET `/api/v1/id/{docId}/@workflow`</td>
        <td class="small-5">Gets workflow instances launched on given document</td>
      </tr>
      <tr>
        <td class="small-7">GET `/api/v1/path/{docPath}/@workflow`</td>
        <td class="small-5">Gets workflow instances launched on given document</td>
      </tr>
      <tr>
        <td class="small-7">POST `/api/v1/id/workflow`</td>
        <td class="small-5">Starts workflow instance</td>
      </tr>
      <tr>
        <td class="small-7">POST `/api/v1/id/{docId}/@workflow`</td>
        <td class="small-5">Starts workflow instance on given document</td>
      </tr>
      <tr>
        <td class="small-7">POST `/api/v1/path/{docPath}/@workflow`</td>
        <td class="small-5">Starts workflow instance on given document</td>
      </tr>
      <tr>
        <td class="small-7">DELETE `/api/v1/path/workflow/{workflowInstanceId}`</td>
        <td class="small-5">Deletes workflow instance by its ID</td>
      </tr>
    </tbody>
  </table>
</div>

### Task

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-7">Path</th>
        <th class="small-5">Endpoint</th>
      </tr>
      <tr>
        <td class="small-7">GET `/api/v1/task`</td>
        <td class="small-5">Queries tasks by user and workflow IDs</td>
      </tr>
      <tr>
        <td class="small-7">GET `/api/v1/task/{taskId}`</td>
        <td class="small-5">Gets task by its ID</td>
      </tr>
      <tr>
        <td class="small-7">GET `/api/v1/id/{docId}/@task`</td>
        <td class="small-5">Lists tasks of given document</td>
      </tr>
      <tr>
        <td class="small-7">GET `/api/v1/path/{docPath}/@task`</td>
        <td class="small-5">Lists tasks of given document</td>
      </tr>
      <tr>
        <td class="small-7">PUT `/api/v1/task/{taskId}/{action}`</td>
        <td class="small-5">Completes task</td>
      </tr>
      <tr>
        <td class="small-7">PUT `/api/v1/task/{taskId}/reassign`</td>
        <td class="small-5">Reassigns task</td>
      </tr>
      <tr>
        <td class="small-7">PUT `/api/v1/task/{taskId}/delegate`</td>
        <td class="small-5">Delegates task</td>
      </tr>
    </tbody>
  </table>
</div>

### Workflow Model

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-7">Path</th>
        <th class="small-5">Endpoint</th>
      </tr>
      <tr>
        <td class="small-7">GET `/api/v1/workflowModel/{modelName}`</td>
        <td class="small-5">Finds workflow model by name</td>
      </tr>
      <tr>
        <td class="small-7">GET `/api/v1/workflowModel/{modelName}/graph`</td>
        <td class="small-5">Gets JSON serialization of workflow model graph</td>
      </tr>
      <tr>
        <td class="small-7">GET `/api/v1/workflowModel`</td>
        <td class="small-5">Gets workflow models</td>
      </tr>
    </tbody>
  </table>
</div>

## Task Extended Fields

You can use [the following fetch properties]({{page version='' space='nxdoc' page='document-json-extended-fields'}}) to resolve some fields when retrieving tasks:

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-7">Fetch Property</th>
        <th class="small-5">Description</th>
      </tr>
      <tr>
        <td class="small-7">`targetDocumentIds`</td>
        <td class="small-5">Resolves the document targeted by the task</td>
      </tr>
      <tr>
        <td class="small-7">`actors`</td>
        <td class="small-5">Resolves the actors of a task</td>
      </tr>
    </tbody>
  </table>
</div>

Example:

```
curl -X GET 'http://localhost:8080/nuxeo/api/v1/task?userId={userId}' -H 'X-NXfetch.task: targetDocumentIds,actors' -u user:password
```

## Parallel Review Example

Below is an example of how to start a Parallel Review Workflow and complete it with Nuxeo REST API.

1.  To start a parallel review on a given document, POST to the workflow endpoint or the workflow [adapter]({{page version='' space='nxdoc' page='rest-api-web-adapters'}}):

    ```
    POST http://NUXEO_SERVER/nuxeo/api/v1/id/{documentId}/@workflow
    {
        "entity-type":"workflow",
        "workflowModelName":"ParallelDocumentReview",
        "attachedDocumentIds":["{documentId}"]
    }
    ```

    A workflow object is returned with the `workflowId`, which can be used later. Each workflow is composed of a set of tasks which must be completed in order for the workflow to change its state and eventually come to an end.

2.  For each step, retrieve the respective task from the server, either via the `task` endpoint or `task` adapter.

    ```
    GET http://NUXEO_SERVER/nuxeo/api/v1/id/{documentId}/@task?userId={userId}&workflowInstanceId={workflowId}&workflowModelName=ParallelDocumentReview
    ```

    A task object is returned, with the respective `taskId`. In our case, the first step would return a Choose Participants task, where the user that started the workflow must choose the participants involved in the review. The task can then be completed with a PUT request to the `task` endpoint, the respective action being supplied at the end of the path.

3.  To start the review, use the `start_review` action in the request.

    ```
    PUT http://NUXEO_SERVER/nuxeo/api/v1/task/{taskId}/start_review
    {
        "entity-type":"task",
        "id":"{taskId}",
        "variables":{
            "comment":{initial_comment},
            "participants":”{userIds}”,
            "end_date":”{end_date}”
        }
    }
    ```

    Here, the `initial_comment`, `userIds`, and `end_date` variables must be supplied by the user, and `userIds` must be a string encoding an array containing the IDs of the participants. Supposing only John was selected for the review, `userIds` would be represented as `"[\"John\"]"`.
    The next task prompts the user to Approve, Reject or take No Action (N/A) in the review, and optionally leave a comment.

4.  The review could be approved via the following request:

    ```
    PUT http://NUXEO_SERVER/nuxeo/api/v1/task/{taskId}/approve
    {
        "entity-type":"task",
        "id":"{taskId}",
        "comment":"{comment}"
    }
    ```

    The next task requires the user to Validate or Reject the review, depending on the feedback provided by other participants. Completing this task will bring the workflow to an end.

5.  Validating the review can be done as follows:

    ```
    PUT http://NUXEO_SERVER/nuxeo/api/v1/task/{taskId}/validate
    {
        "entity-type":"task",
        "id":"{taskId}",
        "comment":"{comment}"
    }
    ```

## Learn More

*   Test these endpoints on your local instance with [Nuxeo API Playground](http://nuxeo.github.io/api-playground/) (see [documentation]({{page version='' space='nxdoc' page='howto-nuxeo-api-playground'}}) to configure your local instance).
*   Checkout the Nuxeo REST API explorer of your instance at `http://NUXEO_SERVER/nuxeo/api/v1/doc`.

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}
- [Workflow documentation]({{page page='workflow'}})
- [REST API Web Adapters]({{page version='' space='nxdoc' page='rest-api-web-adapters'}})
- [REST API Entity Types]({{page version='' space='nxdoc' page='rest-api-entity-types'}})
{{/panel}}
</div>
<div class="column medium-6">

</div>
</div>
