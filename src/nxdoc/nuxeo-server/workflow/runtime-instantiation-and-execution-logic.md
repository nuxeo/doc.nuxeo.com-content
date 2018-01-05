---
title: 'Runtime Instantiation & Execution Logic'
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
    canonical: viewpage.action?pageId=16091264
    canonical_source: viewpage.action?pageId=16091264
    page_id: '16091264'
    shortlink: gIj1
    shortlink_source: 'https://doc.nuxeo.com/x/gIj1'
    source_link: /pages/viewpage.action?pageId=16091264
tree_item_index: 300
history:
    -
        author: Manon Lumeau
        date: '2015-09-16 11:39'
        message: ''
        version: '39'
    -
        author: Solen Guitter
        date: '2015-08-31 13:57'
        message: ''
        version: '38'
    -
        author: Mariana Cedica
        date: '2013-10-31 15:49'
        message: ''
        version: '37'
    -
        author: Mariana Cedica
        date: '2013-10-31 15:48'
        message: ''
        version: '36'
    -
        author: Solen Guitter
        date: '2013-10-31 10:22'
        message: Fixed links and formatted steps
        version: '35'
    -
        author: Mariana Cedica
        date: '2013-10-30 18:52'
        message: ''
        version: '34'
    -
        author: Mariana Cedica
        date: '2013-10-30 18:51'
        message: ''
        version: '33'
    -
        author: Mariana Cedica
        date: '2013-10-30 18:47'
        message: ''
        version: '32'
    -
        author: Mariana Cedica
        date: '2013-10-30 18:46'
        message: ''
        version: '31'
    -
        author: Mariana Cedica
        date: '2013-10-30 18:35'
        message: ''
        version: '30'
    -
        author: Mariana Cedica
        date: '2013-10-30 18:22'
        message: ''
        version: '29'
    -
        author: Mariana Cedica
        date: '2013-10-30 18:18'
        message: ''
        version: '28'
    -
        author: Mariana Cedica
        date: '2013-10-30 18:16'
        message: ''
        version: '27'
    -
        author: Mariana Cedica
        date: '2013-10-30 18:12'
        message: ''
        version: '26'
    -
        author: Mariana Cedica
        date: '2013-10-30 17:54'
        message: ''
        version: '25'
    -
        author: Mariana Cedica
        date: '2013-10-30 16:55'
        message: ''
        version: '24'
    -
        author: Mariana Cedica
        date: '2013-10-30 16:48'
        message: ''
        version: '23'
    -
        author: Mariana Cedica
        date: '2013-10-30 16:41'
        message: ''
        version: '22'
    -
        author: Mariana Cedica
        date: '2013-10-30 16:38'
        message: ''
        version: '21'
    -
        author: Mariana Cedica
        date: '2013-10-30 16:37'
        message: ''
        version: '20'
    -
        author: Mariana Cedica
        date: '2013-10-30 16:36'
        message: ''
        version: '19'
    -
        author: Mariana Cedica
        date: '2013-10-30 16:23'
        message: ''
        version: '18'
    -
        author: Mariana Cedica
        date: '2013-10-30 16:19'
        message: ''
        version: '17'
    -
        author: Mariana Cedica
        date: '2013-10-30 16:15'
        message: ''
        version: '16'
    -
        author: Mariana Cedica
        date: '2013-10-30 16:11'
        message: ''
        version: '15'
    -
        author: Mariana Cedica
        date: '2013-10-30 16:09'
        message: ''
        version: '14'
    -
        author: Mariana Cedica
        date: '2013-10-30 16:04'
        message: ''
        version: '13'
    -
        author: Mariana Cedica
        date: '2013-10-30 15:59'
        message: ''
        version: '12'
    -
        author: Mariana Cedica
        date: '2013-10-30 15:58'
        message: ''
        version: '11'
    -
        author: Mariana Cedica
        date: '2013-10-30 15:13'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2013-10-21 11:03'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2013-10-21 10:18'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2013-10-18 15:47'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2013-10-18 15:38'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2013-10-18 15:31'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2013-10-18 15:31'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2013-10-18 15:29'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-10-18 15:20'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-10-18 15:09'
        message: ''
        version: '1'

---
{{! excerpt}}

This page gives you technical details about the execution of workflow.

{{! /excerpt}}

## Running a workflow

The page [Workflow Models Packaging]({{page page='workflow-models-packaging'}}) explained how the Studio JAR containing the workflow definitions is deployed on a Nuxeo instance and how the corresponding workflow models are created.

**What is happening when starting a new workflow? How is the running workflow persisted?**

Running a workflow means creating a new workflow instance from one of the existing workflow models. The new instance is actually created by copy from the workflow model that is run.

So the new workflow is also a document of type DocumentRoute (and the nodes are its children of type RouteNode) with the path `/document-route-instances-root/2016/10/15`. The date part of the path corresponds to the day the workflow instance has been created. The lifecycle state for a workflow model is "validated", while the instances are "running" when created and will be "done" or "canceled", depending on how the workflow is ended. The document(s) associated at the workflow start is(are) set on the field `docri:participatingDocuments`.

The DocumentRoute document and the underlying RouteNodes are used by the workflow engine to:

*   Read and store the workflow and node variables
*   Read the definition of the graph with the transitions between nodes
*   Persist the state of the workflow

Those DocumentRoute and RouteNode objects are useless once the workflow is achieved. They are never visible by the end user and they are removed by default. The clean-up is triggered daily at midnight.

{{#> callout type='tip' }}

In order to keep the completed workflows enable the following line in nuxeo.conf:

```
nuxeo.routing.disable.cleanup.workflow.instances = true
```

{{/callout}}

**How are workflow transitions persisted?**

Workflow transitions are stored as properties of the node document. A node has an unique id generated by Studio, set on the `rnode:nodeId` property. The list of possible transitions from a node is a complex metadata: a list of 'transition' where each 'transition' has (among others) a name, a targetId (the id of the target node) and a condition.

**What are workflow tasks?**

How tasks are created by the workflow is discussed in the section [About tasks]({{page page='about-tasks'}}), but at this point it's worth mentioning that workflow tasks are also persisted as documents of type TaskDoc.

{{#> callout type='tip' }}

Since workflows, nodes and task are all documents, the [NXQL]({{page version='' space='nxdoc' page='nxql'}}) query language can be used, like on any other document type. Check the page [How to query workflow objects]({{page page='how-to-query-workflow-objects'}}) to find out more.

{{/callout}}

## Runtime Execution Logic

**Workflow nodes and tasks**

Workflow nodes can be automatic steps or nodes of type task. An automatic node doesn't wait and doesn't require any external intervention to be completed. For a node of type "task", that means a task (or more) is(are) created when the workflow is executing that node and the node is paused as long as all its originating tasks are not completed.

{{#> callout type='info' }}

The lifecycle state of a document representing the node waiting for a task to be completed is 'suspended'.

{{/callout}}

**Plug in custom business logic**

Custom business logic is added in the workflow by using [automation chains]({{page page='content-automation-concepts'}}) at the node level. There are three entry points on the node where a chain can be added: in input, in output and on transitions. The moment when these chains are executed depends on the state of the workflow.

**Execution logic**

When a workflow is run, the engine starts with the node having the property 'start' set to true and after runs the nodes following, depending on the transitions in the graph.

A workflow node is run after the following algorithm:

1.  Check if this is a node of type 'merge' or not.

    *   If true, mark the node as 'waiting' and leave it in the list of pending nodes as long as not all its incoming transitions are evaluated to true.
    *   If false, move to the next step.
2.  Execute the "input" automation chain.
    *   If the node is of type "task", create one or more tasks and mark the node as 'suspended'.
        The node will stay 'suspended' until its tasks are completed, then move to the next step.
    *   If not, move to the next step.
3.  Execute the "output" automation chain.
4.  Evaluate all the conditions for all outgoing transitions from the current node.
    For all the transitions evaluated to 'true':

    1.  Execute the "transition" automation chain.
    2.  Add its target node to the list of pending nodes (the nodes to be run next in the workflow).

**Notes**
- **Fork node:** A node of type "fork" is a node having all conditions for its outgoing transitions evaluated to 'true'.

- **Node of type task "Accept/Reject":** The conditions of the outgoing transitions from a node of this type depend on how the task originating from the node was completed. When the user ends the task, the id of the button the user clicked is stored on the node in a predefined property. This property is used in the conditions of the outgoing transitions and when these are evaluated: the workflow knows where to go next, depending if the user accepted or rejected the task.

- All the automation chained executed by the workflow engine are executed using a temporary unrestricted session (if the current user is not an administrator, this is a session with the user "system"). The documents bound to the workflow are set as the input for these chains.
