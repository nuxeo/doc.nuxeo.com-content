---
title: Useful Definitions
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - workflow
    - grenard
    - concept
    - excerpt
    - multiexcerpt-include
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '12913723'
    ajs-parent-page-title: Workflow
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Useful+Definitions
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Useful+Definitions'
    page_id: '12912668'
    shortlink: HAjF
    shortlink_source: 'https://doc.nuxeo.com/x/HAjF'
    source_link: /display/NXDOC/Useful+Definitions
tree_item_index: 100
history:
    -
        author: Manon Lumeau
        date: '2015-09-16 08:38'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2015-04-15 09:07'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2013-11-12 14:54'
        message: ''
        version: '12'
    -
        author: Mariana Cedica
        date: '2013-10-31 15:46'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2013-10-21 14:07'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2013-10-21 13:25'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2013-10-21 12:37'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2013-10-20 00:17'
        message: ''
        version: '7'
    -
        author: Mariana Cedica
        date: '2013-09-13 15:45'
        message: ''
        version: '6'
    -
        author: Bertrand Chauvin
        date: '2013-08-06 13:51'
        message: ''
        version: '5'
    -
        author: Bertrand Chauvin
        date: '2013-08-06 13:50'
        message: ''
        version: '4'
    -
        author: Bertrand Chauvin
        date: '2013-08-06 13:49'
        message: Added sub workflow and escalation rule quick description.
        version: '3'
    -
        author: Solen Guitter
        date: '2013-05-22 18:09'
        message: Moved main concepts from dedicated page to this one.
        version: '2'
    -
        author: Alain Escaffre
        date: '2012-12-31 02:53'
        message: ''
        version: '1'

---
## Main concepts

{{! excerpt}}

The main concepts that are used to design a workflow are listed below:

{{! /excerpt}}

### Node

{{{multiexcerpt 'node-workflow' page='GLOS:Node'}}}

### Transition

{{{multiexcerpt 'transition-workflow' space='glos' page='Transition'}}}

### Graph

{{{multiexcerpt 'graph-workflow' page='GLOS:Graph'}}}

### Task

{{{multiexcerpt 'task-workflow' page='GLOS:Task'}}}

### Variables

As we said before, the process, defined by its graph, is the orchestrated execution of nodes. It is very often necessary to have access to some data all along the life of the process: for example an action on a node needs some information captured earlier in the process execution. For that reason, the workflow engine offers a persistence system through the "variables". There are two types of variables:

*   Node variables, defined on a node and accessible on the node scope,
*   Workflow variables, defined at workflow level, and accessible from any node.

A variable has a type: string, float, blob, etc. So a variable can be a date picked up in a calendar, a file, a constrained value, &hellip;

### User Task Form

A form and submission buttons can be bound to a task generated at a given node. The form helps capturing data from the user and set it on variables (workflow or local node).

### Notifications

When a task is assigned to someone, you can configure the node to send a notification via email to the assignee(s), and author the content of the email yourself, including HTML formatting. Note that when a task is assigned to a group, the prefix "`group:`" must be used in front of the group name in the task assignee if you need to send a notification mail to each of the group members.

### Automation Chains

The Automation module is used to express what the engine does when going through each node. Workflow engine handles several kinds of automation chain:

*   Node input: executed before entering a node (and if this node is of type task, before the task is created),
*   Node output: executed just after having gone through a node,
*   Transition chain: executed when the workflow engine goes through a transition condition one is evaluated to true.
*   Escalation rule (available since 5.7.2): executed when the system is awaiting for a user to complete an action, depending on a condition. For example when the user has not completed the task before its due date.

### Queues

Depending on the implemented workflows, users may receive many tasks that they need to process. Those tasks can be grouped for presentation to the users in "queues". A queue can be functionally defined as a set of tasks assigned to a user or a group of users. Generally, a queue allows to do bulk task processing. A user can have access to several queues. Technically, we will see that queues are implemented in Nuxeo using content views.

### Sub workflow

Since 5.7.2, a workflow can call another workflow and pass hard-coded or computed variables to it.

### Escalation Rules

{{{multiexcerpt 'escalation-rule-workflow' page='GLOS:Escalation Rule'}}}
