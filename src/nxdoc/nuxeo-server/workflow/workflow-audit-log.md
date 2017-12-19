---
title: Workflow Audit Log
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - workflow
    - audit
    - grenard
    - elasticsearch
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '12913723'
    ajs-parent-page-title: Workflow
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Workflow+Audit+Log
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Workflow+Audit+Log'
    page_id: '26316725'
    shortlink: tY_RAQ
    shortlink_source: 'https://doc.nuxeo.com/x/tY_RAQ'
    source_link: /display/NXDOC/Workflow+Audit+Log
tree_item_index: 1000
history:
    -
        author: Solen Guitter
        date: '2015-10-16 09:57'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2015-10-15 11:59'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2015-10-13 10:09'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2015-10-13 09:55'
        message: Fix some formatting issues
        version: '21'
    -
        author: Guillaume Renard
        date: '2015-10-02 16:12'
        message: ''
        version: '20'
    -
        author: Guillaume Renard
        date: '2015-09-29 15:10'
        message: ''
        version: '19'
    -
        author: Alain Escaffre
        date: '2015-09-29 14:31'
        message: ''
        version: '18'
    -
        author: Guillaume Renard
        date: '2015-09-29 11:49'
        message: ''
        version: '17'
    -
        author: Guillaume Renard
        date: '2015-09-29 11:46'
        message: ''
        version: '16'
    -
        author: Guillaume Renard
        date: '2015-09-29 11:40'
        message: ''
        version: '15'
    -
        author: Guillaume Renard
        date: '2015-09-29 11:39'
        message: ''
        version: '14'
    -
        author: Guillaume Renard
        date: '2015-09-29 10:27'
        message: ''
        version: '13'
    -
        author: Guillaume Renard
        date: '2015-09-29 10:26'
        message: ''
        version: '12'
    -
        author: Guillaume Renard
        date: '2015-09-29 10:25'
        message: ''
        version: '11'
    -
        author: Guillaume Renard
        date: '2015-09-29 10:20'
        message: ''
        version: '10'
    -
        author: Guillaume Renard
        date: '2015-09-29 10:19'
        message: ''
        version: '9'
    -
        author: Guillaume Renard
        date: '2015-09-29 10:18'
        message: ''
        version: '8'
    -
        author: Guillaume Renard
        date: '2015-09-29 09:24'
        message: ''
        version: '7'
    -
        author: Guillaume Renard
        date: '2015-09-29 08:58'
        message: ''
        version: '6'
    -
        author: Guillaume Renard
        date: '2015-09-28 15:48'
        message: ''
        version: '5'
    -
        author: Guillaume Renard
        date: '2015-09-28 15:47'
        message: ''
        version: '4'
    -
        author: Guillaume Renard
        date: '2015-09-28 15:44'
        message: ''
        version: '3'
    -
        author: Guillaume Renard
        date: '2015-09-28 15:43'
        message: ''
        version: '2'
    -
        author: Guillaume Renard
        date: '2015-09-28 14:18'
        message: ''
        version: '1'

---
{{! excerpt}}

The page details the information logged in the audit during a workflow completion.

{{! /excerpt}}

## What Is Logged in the Audit

Since 7.4, a new audit category called **Routing** has been added for the following workflow events:

*   `afterWorkflowStarted`
*   `afterWorkflowFinish`
*   `beforeWorkflowCanceled`
*   `afterWorkflowTaskCreated`
*   `afterWorkflowTaskEnded`
*   `afterWorkflowTaskReassigned`
*   `afterWorkflowTaskDelegated`

For all these events, we log useful information regarding the workflow and/or node state in the [extended info]({{page page='audit#extendedinfo'}}) of the audit entry. The table below summarizes which extended info is logged depending on the event.

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1"></th><th colspan="1">modelName</th><th colspan="1">modelId</th><th colspan="1">workflowInitator</th><th colspan="1">taskActor</th><th colspan="1">workflowVariables</th><th colspan="1">nodeVariables</th><th colspan="1">action</th><th colspan="1">timeSinceWfStarted</th><th colspan="1">timeSinceTaskStarted</th></tr><tr><th colspan="1">afterWorkflow
Finish</th><td colspan="1">x</td><td colspan="1">x</td><td colspan="1">x</td><td colspan="1"></td><td colspan="1">x</td><td colspan="1"></td><td colspan="1"></td><td colspan="1">x</td><td colspan="1"></td></tr><tr><th colspan="1">afterWorkflow
Started</th><td colspan="1">x</td><td colspan="1">x</td><td colspan="1">x</td><td colspan="1"></td><td colspan="1">x</td><td colspan="1"></td><td colspan="1"></td><td colspan="1">x</td><td colspan="1"></td></tr><tr><th colspan="1">beforeWorkflow
Canceled</th><td colspan="1">x</td><td colspan="1">x</td><td colspan="1">x</td><td colspan="1"></td><td colspan="1">x</td><td colspan="1"></td><td colspan="1"></td><td colspan="1">x</td><td colspan="1"></td></tr><tr><th colspan="1">afterWorkflow
TaskCreated</th><td colspan="1">x</td><td colspan="1">x</td><td colspan="1"></td><td colspan="1"></td><td colspan="1">x</td><td colspan="1">x</td><td colspan="1"></td><td colspan="1">x</td><td colspan="1"></td></tr><tr><th colspan="1">afterWorkflow
TaskEnded</th><td colspan="1">x</td><td colspan="1">x</td><td colspan="1"></td><td colspan="1">x</td><td colspan="1">x</td><td colspan="1">x</td><td colspan="1">x</td><td colspan="1">x</td><td colspan="1">x</td></tr><tr><th colspan="1">afterWorkflow
TaskReassigned</th><td colspan="1">x</td><td colspan="1">x</td><td colspan="1"></td><td colspan="1">x</td><td colspan="1">x</td><td colspan="1">x</td><td colspan="1"></td><td colspan="1">x</td><td colspan="1">x</td></tr><tr><th colspan="1">afterWorkflow
TaskDelegated</th><td colspan="1">x</td><td colspan="1">x</td><td colspan="1"></td><td colspan="1">x</td><td colspan="1">x</td><td colspan="1">x</td><td colspan="1"></td><td colspan="1">x</td><td colspan="1">x</td></tr></tbody></table></div>

Where:

*   `modelName` is the name of the workflow model
*   `modelId` is the uuid of the workflow model
*   `workflowInitator` is the user who initiated the workflow
*   `taskActor` is the user who completed a task associated to a workflow node
*   `workflowVariables` lists the global variables of the workflow
*   `nodeVariables` lists the local variables i.e. the ones defined on the node associated to a task
*   `action` is the action (i.e. button) that has been clicked to complete a task.
*   `timeSinceWfStarted` is the time in milliseconds elapsed since the workflow started.
*   `timeSinceTaskStarted` is the time in milliseconds elapsed since the task started.

{{#> callout type='info' }}

Note that since Nuxeo 7.3, the audit is stored by default as an Elasticsearch index which offers the possibility to store the [extended info]({{page page='audit#extendedinfo'}}) as plain JSON objects. The `workflowVariables` and `nodeVariables` are indeed maps of primitive types and therefore are stored in their current forms except for blob variables which are omitted.

{{/callout}}

## The Travel Expenses Example

Let's consider the [travel expenses addon's workflow](https://github.com/nuxeo/marketplace-travel-expenses) which allows a user to submit a travel expense to be validated by a manager or a supervisor.

In the first step of the workflow called `wf.travelExpenses.create`, a user completes a task with the nature of the expense, the amount and the department he works in. Then a manager can accept the request, which will be passed on to the accountancy department, or reject it.

![]({{file name='expenses_graph.png'}} ?w=400,border=true,align=center)

In order to have an overview of what is logged in the audit, we can use the [Elasticsearch Passthrough]({{page page='elasticsearch-passthrough'}}) to query the new entries added to the audit index as we are completing the above workflow. For instance the following request

```bash
curl -XGET -u jdoe:jdoe  'http://localhost:8080/nuxeo/site/es/audit_wf/_search' -d '{ "query": { "match_all":{}}}'
```

will return all Routing audit entries associated to the workflow models on which the current user has the Data Visualization permission. This Data Visualization permission can be added from the **Admin** > **Workflow** menu.

Let's have a look to returned entries. First the workflow is started by a user, there are two new entries in the audit:

*   One for the `afterWorkflowStarted` event

    ```js
    {
        "_id": "10267",
        "_index": "audit",
        "_score": null,
        "_source": {
            "category": "Routing",
            "comment": null,
            "docLifeCycle": "running",
            "docPath": "/document-route-instances-root/2015/09/28/TravelExpenseValidation",
            "docType": "DocumentRoute",
            "docUUID": "e2777d7e-5fac-4264-94be-818a13ea13dd",
            "entity-type": "logEntry",
            "eventDate": "2015-09-28T15:01:21.786+02:00",
            "eventId": "afterWorkflowStarted",
            "extended": {
                "modelId": "5e7980bc-12f1-4b5f-a7df-149af96bc899",
                "modelName": "TravelExpenseValidation",
                "workflowInitiator": "jdoe",
                "workflowVariables": {
                    "amount": null,
                    "department": "it",
                    "description": null,
                    "destination": null,
                    "expensenature": "transportation",
                    "file": null,
                    "label": null,
                    "user": null
                }
            },
            "id": 10267,
            "logDate": "2015-09-28T15:01:22.395+02:00",
            "principalName": "Administrator",
            "repositoryId": "default"
        },
        "_type": "entry",
        "_version": 1,
        "sort": [
            1443445281786
        ]
    }
    ```

*   Another one for the `afterWorkflowTaskCreated` event because the workflow creates the task associated to the `wf.travelExpenses.create` node right after it started.

    ```js
    {
        "_id": "10266",
        "_index": "audit",
        "_score": null,
        "_source": {
            "category": "Routing",
            "comment": null,
            "docLifeCycle": "opened",
            "docPath": "/task-root/Task4fb",
            "docType": "RoutingTask",
            "docUUID": "587464f7-daba-4c07-9b43-9f04f201d421",
            "entity-type": "logEntry",
            "eventDate": "2015-09-28T15:01:21.771+02:00",
            "eventId": "afterWorkflowTaskCreated",
            "extended": {
                "actors": [
                    "jdoe"
                ],
                "modelId": "5e7980bc-12f1-4b5f-a7df-149af96bc899",
                "modelName": "TravelExpenseValidation",
                "nodeVariables": {},
                "taskName": "wf.travelExpenses.create",
                "workflowInitiator": "Administrator",
                "workflowVariables": {
                    "amount": null,
                    "department": "it",
                    "description": null,
                    "destination": null,
                    "expensenature": "transportation",
                    "file": null,
                    "label": null,
                    "user": null
                }
            },
            "id": 10266,
            "logDate": "2015-09-28T15:01:22.331+02:00",
            "principalName": "Administrator",
            "repositoryId": "default"
        },
        "_type": "entry",
        "_version": 1,
        "sort": [
            1443445281771
        ]
    }
    ```

    In the above snippet, you can see that the `extended.workflowVariables.department` and `extended.workflowVariables.expensenature` variables have default values defined by the workflow model.

Then the user completes the task associated to the `wf.travelExpenses.create` node which creates two new entries:

*   One for `afterWorkflowTaskEnded`

    ```js
    {
        "_id": "10271",
        "_index": "audit",
        "_score": null,
        "_source": {
            "category": "Routing",
            "comment": null,
            "docLifeCycle": "ended",
            "docPath": "/task-root/Task4fb",
            "docType": "RoutingTask",
            "docUUID": "587464f7-daba-4c07-9b43-9f04f201d421",
            "entity-type": "logEntry",
            "eventDate": "2015-09-28T15:02:04.830+02:00",
            "eventId": "afterWorkflowTaskEnded",
            "extended": {
                "action": "submit",
                "modelName": "TravelExpenseValidation",
                "nodeVariables": {},
                "taskActor": "jdoe",
                "taskName": "wf.travelExpenses.create",
                "timeSinceTaskStarted": 43052,
                "timeSinceWfStarted": 43044,
                "workflowInitiator": "jdoe",
                "workflowVariables": {
                    "amount": 12,
                    "department": "marketing",
                    "description": "Morning breakfast",
                    "destination": null,
                    "expensenature": "lunch",
                    "file": null,
                    "label": "Breakfast",
                    "user": null
                }
            },
            "id": 10271,
            "logDate": "2015-09-28T15:02:05.097+02:00",
            "principalName": "Administrator",
            "repositoryId": "default"
        },
        "_type": "entry",
        "_version": 1,
        "sort": [
            1443445324830
        ]
    }
    ```

    At this stage, the [extended info]({{page page='audit#extendedinfo'}}) contains interesting data such as `timeSinceWfStarted`, `timeSinceTaskStarted`, `action` (i.e. the button the user clicked to complete the task), etc.

*   Another one for the `afterWorkflowTaskCreated` event because the workflow creates a task associated to the `Accept/Reject` node right after:

    ```js
     {
        "_id": "10275",
        "_index": "audit",
        "_score": null,
        "_source": {
            "category": "Routing",
            "comment": null,
            "docLifeCycle": "opened",
            "docPath": "/task-root/Task12ef",
            "docType": "RoutingTask",
            "docUUID": "0a06570a-5e74-45a4-8a06-66989b543555",
            "entity-type": "logEntry",
            "eventDate": "2015-09-28T15:02:04.906+02:00",
            "eventId": "afterWorkflowTaskCreated",
            "extended": {
                "actors": [
                    "group:managers"
                ],
                "modelId": "5e7980bc-12f1-4b5f-a7df-149af96bc899",
                "modelName": "TravelExpenseValidation",
                "nodeVariables": {},
                "taskName": "Accept/ Reject",
                "timeSinceWfStarted": 43120,
                "workflowInitiator": "jdoe",
                "workflowVariables": {
                    "amount": 12,
                    "department": "marketing",
                    "description": "Morning breakfast",
                    "destination": null,
                    "expensenature": "lunch",
                    "file": null,
                    "label": "Breakfast",
                    "user": null
                }
            },
            "id": 10275,
            "logDate": "2015-09-28T15:02:05.160+02:00",
            "principalName": "Administrator",
            "repositoryId": "default"
        },
        "_type": "entry",
        "_version": 1,
        "sort": [
            1443445324906
        ]
    }
    ```

Eventually a manager will validate the request (associated audit entries will be persisted):

*   A final audit entry for the `afterWorkflowFinish` event is added

    ```js
    {
        "_id": "10289",
        "_index": "audit",
        "_score": null,
        "_source": {
            "category": "Routing",
            "comment": null,
            "docLifeCycle": "done",
            "docPath": "/document-route-instances-root/2015/09/28/TravelExpenseValidation",
            "docType": "DocumentRoute",
            "docUUID": "e2777d7e-5fac-4264-94be-818a13ea13dd",
            "entity-type": "logEntry",
            "eventDate": "2015-09-28T15:02:14.958+02:00",
            "eventId": "afterWorkflowFinish",
            "extended": {
                "modelId": "5e7980bc-12f1-4b5f-a7df-149af96bc899",
                "modelName": "TravelExpenseValidation",
                "timeSinceWfStarted": 53171,
                "workflowInitiator": "jdoe",
                "workflowVariables": {
                    "amount": 12,
                    "department": "marketing",
                    "description": "Morning breakfast",
                    "destination": null,
                    "expensenature": "lunch",
                    "file": null,
                    "label": "Breakfast",
                    "user": null
                }
            },
            "id": 10289,
            "logDate": "2015-09-28T15:02:15.089+02:00",
            "principalName": "jdoe",
            "repositoryId": "default"
        },
        "_type": "entry",
        "_version": 1,
        "sort": [
            1443445334958
        ]
    }
    ```

    Along with final values of the workflow variables we can see the workflow duration `timeSinceWorkflowStarted`.

{{! Don't put anything here. }}

* * *
