---
title: About Tasks
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - task
    - workflow
    - grenard
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '12913723'
    ajs-parent-page-title: Workflow
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: About+Tasks
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/About+Tasks'
    page_id: '16091337'
    shortlink: yYj1
    shortlink_source: 'https://doc.nuxeo.com/x/yYj1'
    source_link: /display/NXDOC/About+Tasks
tree_item_index: 700
history:
    -
        author: Manon Lumeau
        date: '2016-06-09 12:14'
        message: ''
        version: '12'
    -
        author: Vincent Dutat
        date: '2016-05-12 20:07'
        message: ''
        version: '11'
    -
        author: Vincent Dutat
        date: '2016-04-22 17:25'
        message: ''
        version: '10'
    -
        author: Guillaume Renard
        date: '2015-12-08 14:45'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2015-08-31 13:59'
        message: ''
        version: '8'
    -
        author: Mariana Cedica
        date: '2013-10-31 14:29'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-10-28 10:14'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2013-10-27 14:25'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2013-10-21 11:48'
        message: Added link
        version: '4'
    -
        author: Alain Escaffre
        date: '2013-10-20 00:08'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-10-20 00:07'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-10-19 16:53'
        message: ''
        version: '1'

---
{{! excerpt}}

You'll find here what you need to know about tasks that are created via the workflow service.

{{! /excerpt}}

## Dashboard

The user tasks dashboard on the Workflow tab in the Home menu is based on querying the tasks. It is possible to redefine the query and the complete content view (so as to choose the columns that are displayed for instance) by redefining the content view `user_open_tasks`.

## Resolution Screen

The resolution screen is made as a "[Tab]({{page space='studio' page='tabs'}})", based on a grid layout. One of the pieces you may want to override on this screen is the list of metadata displayed for the bound documents. You can for this override the `task_target_documents` content view. More exactly merge a new listing layout in it.

## TasksInfo

When a task is closed, the workflow engine stores useful information on the node about the task: The name of the user who solved the task, his comment and the id of the button that was clicked. Information can be accessed in the automation context via the object "`NodeVariables["tasks"]`" that returns a [TasksInfoWrapper](http://community.nuxeo.com/api/nuxeo/9.10/javadoc/org/nuxeo/ecm/platform/routing/core/api/TasksInfoWrapper.html) object that is a list of [TaskInfo](http://community.nuxeo.com/api/nuxeo/9.10/javadoc/org/nuxeo/ecm/platform/routing/core/impl/GraphNode.TaskInfo.html). When a node creates multiple tasks, all the resolution information of each task can be found on the `NodeVariables["tasks"]` object.

## Delegation

The workflow module allows task delegation. Delegatees are stored on the task in a separate property than the assignees (`task:` `delegatedActors`). That way it is possible to know when someone is assigned a task directly or by delegation. The workflow engine sets the the same ACLon the bound documents for the delegatee as for the main assignee. When the task is closed, an audit entry is set on the document tracking that the user acted as a delegatee of the main assignee.

It is also possible to reassign a task. In that case the value in the "Actors" list is changed directly.

## Task Type Definition

The default document type for tasks created by the workflow engine is `TaskDoc`. It is possible to use of any type of document as long as the document type has the facets `Task` and `RoutingTask`, and the `task` lifecycle. You can specify on the node properties which type of task to create.
