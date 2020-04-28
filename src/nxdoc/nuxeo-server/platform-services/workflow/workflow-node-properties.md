---
title: Workflow Node Properties
review:
    comment: ''
    date: '2017-12-18'
    status: ok
labels:
    - lts2016-ok
    - todo
    - node
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
    canonical: Workflow+Node+Properties
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Workflow+Node+Properties'
    page_id: '16091315'
    shortlink: s4j1
    shortlink_source: 'https://doc.nuxeo.com/x/s4j1'
    source_link: /display/NXDOC/Workflow+Node+Properties
tree_item_index: 500
history:
    -
        author: Alain Escaffre
        date: '2015-09-29 14:46'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2015-08-31 13:58'
        message: ''
        version: '12'
    -
        author: Mariana Cedica
        date: '2013-10-31 14:06'
        message: ''
        version: '11'
    -
        author: Mariana Cedica
        date: '2013-10-31 13:52'
        message: ''
        version: '10'
    -
        author: Mariana Cedica
        date: '2013-10-31 11:30'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2013-10-31 09:38'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2013-10-31 09:37'
        message: Fixed link
        version: '7'
    -
        author: Mariana Cedica
        date: '2013-10-30 19:19'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-10-21 11:23'
        message: Formatting
        version: '5'
    -
        author: Alain Escaffre
        date: '2013-10-19 12:37'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2013-10-19 12:31'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-10-19 12:29'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-10-19 12:24'
        message: ''
        version: '1'

---
{{! excerpt}}

This page lists all the properties of a node. A workflow instance is made of several nodes linked by some transitions.

{{! /excerpt}}

## Node Variables

Node variables are persisted on the node document. These are metadata stored on a dynamic [facet]({{page page='available-facets'}}), in a schema named `var_$NodeId`.

## Node Properties

### Principle

At low level, there is only one type of node and the workflow engine behavior will change depending on the value of the properties of this node. In the [Nuxeo Studio Modeler]({{page space='studio' page='workflow'}}), you will find several kinds of node, that are actually just some sort of presets on top of the generic node. There are more than 40 parameters that can be configured on a node. They are all stored on the "route_node" schema of the "RouteNode" document.

Workflow variables are also available on the node properties, in a schema named `var_$WorkflowModelName`.

### Identification

`nodeId`: Id of the node, that is generated from Studio.

### Graph Behavior

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Property</th>
<th colspan="1">Description</th>
</tr>
<tr>
<td colspan="1">`start`</td>
<td colspan="1">Must be equal to `true` only on the node where the workflow engine should start to execute the given workflow.</td>
</tr>
<tr>
<td colspan="1">`stop`</td>
<td colspan="1">Sends a Stop workflow event. When the workflow arrives on such a node, it stops the execution of the workflow definitively.</td>
</tr>
<tr>
<td colspan="1">`merge`</td>
<td colspan="1">When this is 'true', this is a merge node: the workflow is suspended on this node, waiting for all incoming transitions to this node to be evaluated to 'true'.</td>
</tr>
<tr>
<td colspan="1">`executeOnlyFirstTransition`</td>
<td colspan="1">Follows the first transition that is equal to `true`, and only that one.</td>
</tr>
<tr>
<td colspan="1">`subRouteModelExpr`</td>
<td colspan="1">When this one is filled, the workflow engine runs the given process model on the same bound document list. This is used for the "sub workflow node" template in Studio.</td>
</tr>
<tr>
<td colspan="1">`subRouteInstanceId`</td>
<td colspan="1">The id of the instance of the subworkflow once it has been launched.</td>
</tr>
<tr>
<td colspan="1">`subRouteVariables`</td>
<td colspan="1">The variables to pass to the subworkflow when starting it.</td>
</tr>
<tr>
<td colspan="1">`transitions`</td>
<td colspan="1">There must be at least one transition. Each transition has the following character `:`</td>
</tr>
<tr>
<td colspan="1">`transition:chain`</td>
<td colspan="1">The chain to execute when going into a transition.</td>
</tr>
<tr>
<td colspan="1">`transition:condition`</td>
<td colspan="1">Workflow engine goes into that transition only if the condition is evaluated to `true`.</td>
</tr>
<tr>
<td colspan="1">`transition:name`</td>
<td colspan="1">The name of the transition.</td>
</tr>
<tr>
<td colspan="1">`transition:targetId`</td>
<td colspan="1">The id of the target node of the transition.</td>
</tr>
<tr>
<td colspan="1">`transition:label`</td>
<td colspan="1">The displayed name of the transition.</td>
</tr>
<tr>
<td colspan="1">`inputChain`</td>
<td colspan="1">The chain executed when the workflow engine starts running the node.</td>
</tr>
<tr>
<td colspan="1">`outputChain`</td>
<td colspan="1">The chain executed when the workflow engine quits the node, before entering a "transition".</td>
</tr>
</tbody>
</table>
</div>

### Execution History

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Property</th>
<th colspan="1">Description</th>
</tr>
<tr>
<td colspan="1">`startDate`</td>
<td colspan="1">Workflow engines stores here when it started running the node. If the node is run multiple times in a workflow (in a loop for example), it stores the last date the workflow started running this node.</td>
</tr>
<tr>
<td colspan="1">`endDate`</td>
<td colspan="1">Workflow engines store here when it goes out of the node, the last time the node is run.</td>
</tr>
<tr>
<td colspan="1">`lastActor`</td>
<td colspan="1">The last actor having done an action on the node. Useful most of the time in the output Automation chain to know who resumed the node.</td>
</tr>
<tr>
<td colspan="1">`count`</td>
<td colspan="1">The number of times the workflow engine ran this node.</td>
</tr>
<tr>
<td colspan="1">`canceled`</td>
<td colspan="1">When the workflow is canceled, all nodes are marked as canceled.</td>
</tr>
<tr>
<td colspan="1">`tasksInfo`</td>
<td colspan="1">Holds information about all tasks created by a node. For every task: the life cycle state (ended or not), the user who ended the task, the comment if any and the id of the button the user clicked to complete the task (status).</td>
</tr>
</tbody>
</table>
</div>

### Tasks

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Property</th>
<th colspan="1">Description</th>
</tr>
<tr>
<td colspan="1">`hasTask`</td>
<td colspan="1">If true, the workflow engine creates a task when running this node. The workflow is resumed only when this task is completed.</td>
</tr>
<tr>
<td colspan="1">`hasMultipleTasks`</td>
<td colspan="1">If true, the workflow engine creates a task for each assignee. The workflow is resumed only when all tasks created by this node are completed.</td>
</tr>
<tr>
<td colspan="1">`taskDocType`</td>
<td colspan="1">The tasks created by the workflow engine (by calling the TaskService) are documents of type "TaskDoc". You can change this if you need custom metadata on the task document (to be displayed on the task dashboard for example). Your document type must have the facets "Task" and "RoutingTask" and the "task" lifecycle.</td>
</tr>
<tr>
<td colspan="1">`taskDescription`</td>
<td colspan="1">Currently not used.</td>
</tr>
<tr>
<td colspan="1">`taskDirective`</td>
<td colspan="1">The directive of the task. Should put instructions here for the user to close his task.</td>
</tr>
<tr>
<td colspan="1">`taskDueDate`</td>
<td colspan="1">The due date for the task. The workflow engine does nothing with this information by default. Can be leveraged by an escalation rule.</td>
</tr>
<tr>
<td colspan="1">`taskDueDateExpr`</td>
<td colspan="1">The task dueDate will be dynamically computed from this MVEL expression.</td>
</tr>
<tr>
<td colspan="1">`taskAssignees`</td>
<td colspan="1">The assignees for the task. Users should be prefixed by "`user:`" and groups by "`group:`"</td>
</tr>
<tr>
<td colspan="1">`taskAssigneesExpr`</td>
<td colspan="1">Assignees are dynamically computed from this MVEL expression when the workflow is run.</td>
</tr>
<tr>
<td colspan="1">`taskAssigneesPermission`</td>
<td colspan="1">Grant specific permission to the task assignees on the documents following the workflow (automatically removed by the workflow engine once the task is completed).</td>
</tr>
<tr>
<td colspan="1">`allowTaskReassignment`</td>
<td colspan="1">When true, the reassign user action is displayed to the assignee.</td>
</tr>
<tr>
<td colspan="1">`taskNotificationTemplate`</td>
<td colspan="1">The template of the email that is sent to the assignee when she is assigned a task. If no template is selected, no notification is sent. **workflowTaskAssigned** is the default mail template.</td>
</tr>
<tr>
<td colspan="1">`taskLayout`</td>
<td colspan="1">The layout (form) that is displayed to the assignee for resolving the task.</td>
</tr>
<tr>
<td colspan="1">`taskButtons`</td>
<td colspan="1">The buttons that are displayed to the assignee for solving the task.</td>
</tr>
<tr>
<td colspan="1">`name`</td>
<td colspan="1">The id of the button, can be used in the transitions condition.</td>
</tr>
<tr>
<td colspan="1">`label`</td>
<td colspan="1">The label used for the button in the UI.</td>
</tr>
<tr>
<td colspan="1">`filter`</td>
<td colspan="1">Filtering information, used in the UI too (no low level control).</td>
</tr>
<tr>
<td colspan="1">`taskY`</td>
<td colspan="1">The position of the node on the Y axis.</td>
</tr>
<tr>
<td colspan="1">`taskX`</td>
<td colspan="1">The position of the node on the X axis.</td>
</tr>
</tbody>
</table>
</div>

### Escalation (`escalationRules`)

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Property</th>
<th colspan="1">Description</th>
</tr>
<tr>
<td colspan="1">`name`</td>
<td colspan="1">The name of the escalation rule (technical id)</td>
</tr>
<tr>
<td colspan="1">`multipleExecution`</td>
<td colspan="1">When set to true, the rule is evaluated periodically, otherwise it is evaluated only once.</td>
</tr>
<tr>
<td colspan="1">`condition`</td>
<td colspan="1">The condition to know if the rule should be executed or not.</td>
</tr>
<tr>
<td colspan="1">`chain`</td>
<td colspan="1">The name of the chain that should be executed if the condition is true.</td>
</tr>
</tbody>
</table>
</div>
