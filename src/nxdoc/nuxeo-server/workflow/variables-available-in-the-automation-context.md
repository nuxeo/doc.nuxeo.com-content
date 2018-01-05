---
title: Variables Available in the Automation Context
review:
    comment: ''
    date: '2017-01-20'
    status: ok
labels:
    - lts2016-ok
    - scripting
    - automation
    - variable
    - workflow
    - fdavid
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '12913723'
    ajs-parent-page-title: Workflow
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Variables+Available+in+the+Automation+Context
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Variables+Available+in+the+Automation+Context'
    page_id: '11534609'
    shortlink: EQGw
    shortlink_source: 'https://doc.nuxeo.com/x/EQGw'
    source_link: /display/NXDOC/Variables+Available+in+the+Automation+Context
tree_item_index: 900
history:
    -
        author: Anahide Tchertchian
        date: '2014-11-27 16:55'
        message: orma
        version: '18'
    -
        author: Guillaume Renard
        date: '2014-11-27 16:52'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2013-11-14 11:37'
        message: ''
        version: '16'
    -
        author: Mariana Cedica
        date: '2013-10-31 15:11'
        message: ''
        version: '15'
    -
        author: Mariana Cedica
        date: '2013-10-31 15:08'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2013-10-21 13:42'
        message: ''
        version: '13'
    -
        author: Alain Escaffre
        date: '2013-09-09 17:18'
        message: ''
        version: '12'
    -
        author: Vladimir Pasquier
        date: '2013-07-16 16:38'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2013-07-11 01:34'
        message: ''
        version: '10'
    -
        author: Bertrand Chauvin
        date: '2013-07-08 16:51'
        message: ''
        version: '9'
    -
        author: Bertrand Chauvin
        date: '2013-07-08 14:20'
        message: Added originating user
        version: '8'
    -
        author: Solen Guitter
        date: '2013-05-22 17:45'
        message: ''
        version: '7'
    -
        author: stan
        date: '2012-12-13 11:21'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2012-10-03 11:05'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2012-10-03 11:05'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2012-09-16 11:36'
        message: Migrated to Confluence 4.0
        version: '3'
    -
        author: Alain Escaffre
        date: '2012-09-16 11:36'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2012-09-16 11:36'
        message: ''
        version: '1'

---
{{#> callout type='info' }}

For a broader look about variables available in different contexts, have a look at the [Understand Expression and Scripting Languages Used in Nuxeo]({{page page='understand-expression-and-scripting-languages-used-in-nuxeo'}}) page.

{{/callout}}

You need to be familiar with the concept of [Automation]({{page space='studio' page='automation'}}) for this section.

In the chains run on nodes (Input chain, output chain, transition and escalation chains) you have access to some data linked to the workflow being run.

*   `WorkflowVariables`: A hashmap, used like this: `WorkflowVariables['my_workflow_level_variable']`
*   `NodeVariables`: A hashmap, used like this: `NodeVariables['my_Node_level_variable']`
*   `workflowInitiator`: The user who launched the workflow.
*   `workflowStartTime`: The time when the workflow was started, useful for example when computing a due date (Eg: MVEL Due date expression: `workflowStartTime.days(8)`).
*   `documents`: The documents bound to the workflow. These documents are also set as input of all executed chains.
*   `button`: The button id that was clicked for processing the task, if the current node is a task node.
*   `nodeId`
*   `state`: The node state. A node waiting for its originating tasks to be completed is `suspended`. At the end of the workflow the node is `done`.
*   `nodeStartTime`: The time when the node was started, useful for example when computing a due date (Eg: MVEL Due date expression: `nodeStartTime.days(8)`)
*   `nodeEndTime`: The time when the node was ended.
*   `nodeLastActor`: The last actor on the node. Useful for instance to know who closed a task when the task was assigned to a group.
*   `CurrentUser.getActingUser()`: All the automation operations executed by the workflow engine are executed using a temporary unrestricted session (if the current user is not an administrator, this is a session with the user "system"). This function returns the ID of the actual user performing the task.
*   `ChainParameters`: A hashmap, used like this: `ChainParameters['my_chain_parameter']`. Since 5.7.2, all chains are able to contain parameters as operation to be used from the automation context along their execution.
*   `workflowInstanceId`: The id of the workflow instance.
*   `NodeVariables["tasks"]`: Holds information about all tasks created by a node. Is a list of objects of type [TaskInfo](http://community.nuxeo.com/api/nuxeo/8.10/javadoc/org/nuxeo/ecm/platform/routing/core/impl/GraphNode.TaskInfo.html). You can iterate on this list and fetch for every task: the lifecycle state (ended or not), the user who ended the task, the comment if any, and the id of the button the user clicked to complete the task (status).

{{#> callout type='info' }}

You can use these variables on the node configuration form Studio: in automation chains, in the fields "Due Date expression" , "Compute additional assignees" and when setting up conditions on transitions or escalation rules .

{{/callout}}
