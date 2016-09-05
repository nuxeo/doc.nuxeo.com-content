---
title: How to Query Workflow Objects
labels:
    - workflow
    - how-to
    - nxql
    - persistence
    - query
    - workflow-task
toc: true
confluence:
    ajs-parent-page-id: '17334536'
    ajs-parent-page-title: Workflow How-Tos
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: How+to+Query+Workflow+Objects
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/How+to+Query+Workflow+Objects'
    page_id: '17334525'
    shortlink: '-YAIAQ'
    shortlink_source: 'https://doc.nuxeo.com/x/-YAIAQ'
    source_link: /display/NXDOC58/How+to+Query+Workflow+Objects
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 07:37'
        message: ''
        version: '46'
    - 
        author: Solen Guitter
        date: '2013-11-13 13:27'
        message: ''
        version: '45'
    - 
        author: Solen Guitter
        date: '2013-10-21 15:11'
        message: ''
        version: '44'
    - 
        author: Solen Guitter
        date: '2013-10-21 15:10'
        message: ''
        version: '43'
    - 
        author: Solen Guitter
        date: '2013-10-21 15:05'
        message: ''
        version: '42'
    - 
        author: Alain Escaffre
        date: '2013-10-19 12:41'
        message: ''
        version: '41'
    - 
        author: Mariana Cedica
        date: '2013-08-07 14:56'
        message: ''
        version: '40'
    - 
        author: Mariana Cedica
        date: '2013-08-07 14:54'
        message: ''
        version: '39'
    - 
        author: Solen Guitter
        date: '2013-07-18 14:53'
        message: Added excerpt
        version: '38'
    - 
        author: Solen Guitter
        date: '2013-05-16 15:06'
        message: ''
        version: '37'
    - 
        author: Solen Guitter
        date: '2013-05-16 14:57'
        message: ''
        version: '36'
    - 
        author: Solen Guitter
        date: '2013-05-16 14:57'
        message: Added related pages  and format
        version: '35'
    - 
        author: Mariana Cedica
        date: '2013-05-15 22:09'
        message: ''
        version: '34'
    - 
        author: Mariana Cedica
        date: '2013-05-15 22:07'
        message: ''
        version: '33'
    - 
        author: Mariana Cedica
        date: '2013-05-15 19:53'
        message: ''
        version: '32'
    - 
        author: Mariana Cedica
        date: '2013-05-15 19:52'
        message: ''
        version: '31'
    - 
        author: Mariana Cedica
        date: '2013-05-15 19:47'
        message: ''
        version: '30'
    - 
        author: Mariana Cedica
        date: '2013-05-15 19:42'
        message: ''
        version: '29'
    - 
        author: Mariana Cedica
        date: '2013-05-15 19:40'
        message: ''
        version: '28'
    - 
        author: Mariana Cedica
        date: '2013-05-15 19:40'
        message: ''
        version: '27'
    - 
        author: Mariana Cedica
        date: '2013-05-15 19:36'
        message: ''
        version: '26'
    - 
        author: Mariana Cedica
        date: '2013-05-15 19:34'
        message: ''
        version: '25'
    - 
        author: Mariana Cedica
        date: '2013-05-15 19:34'
        message: ''
        version: '24'
    - 
        author: Mariana Cedica
        date: '2013-05-15 19:33'
        message: ''
        version: '23'
    - 
        author: Mariana Cedica
        date: '2013-05-15 19:29'
        message: ''
        version: '22'
    - 
        author: Mariana Cedica
        date: '2013-05-15 19:18'
        message: ''
        version: '21'
    - 
        author: Mariana Cedica
        date: '2013-05-15 19:17'
        message: ''
        version: '20'
    - 
        author: Mariana Cedica
        date: '2013-05-15 19:11'
        message: ''
        version: '19'
    - 
        author: Mariana Cedica
        date: '2013-05-15 19:06'
        message: ''
        version: '18'
    - 
        author: Mariana Cedica
        date: '2013-05-15 19:04'
        message: ''
        version: '17'
    - 
        author: Mariana Cedica
        date: '2013-05-15 18:55'
        message: ''
        version: '16'
    - 
        author: Mariana Cedica
        date: '2013-05-15 18:54'
        message: ''
        version: '15'
    - 
        author: Mariana Cedica
        date: '2013-05-15 18:54'
        message: ''
        version: '14'
    - 
        author: Mariana Cedica
        date: '2013-05-15 18:49'
        message: ''
        version: '13'
    - 
        author: Mariana Cedica
        date: '2013-05-15 18:49'
        message: ''
        version: '12'
    - 
        author: Mariana Cedica
        date: '2013-05-15 18:40'
        message: ''
        version: '11'
    - 
        author: Mariana Cedica
        date: '2013-05-15 18:39'
        message: ''
        version: '10'
    - 
        author: Mariana Cedica
        date: '2013-05-15 18:37'
        message: ''
        version: '9'
    - 
        author: Mariana Cedica
        date: '2013-05-15 18:37'
        message: ''
        version: '8'
    - 
        author: Mariana Cedica
        date: '2013-05-15 18:35'
        message: ''
        version: '7'
    - 
        author: Mariana Cedica
        date: '2013-05-15 18:35'
        message: ''
        version: '6'
    - 
        author: Mariana Cedica
        date: '2013-05-15 18:34'
        message: ''
        version: '5'
    - 
        author: Mariana Cedica
        date: '2013-05-15 18:32'
        message: ''
        version: '4'
    - 
        author: Mariana Cedica
        date: '2013-05-15 18:30'
        message: ''
        version: '3'
    - 
        author: Mariana Cedica
        date: '2013-05-15 18:28'
        message: ''
        version: '2'
    - 
        author: Mariana Cedica
        date: '2013-05-15 18:23'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

Workflows are stored in Nuxeo as documents of type DocumentRoute. A workflow instance is created by copy from a workflow model. The life cycle state for a workflow model is "validated",&nbsp; while the instances can be "running", "done" or "canceled".

A node in the workflow is stored as a document of type RouteNode.&nbsp; A node has an unique id generated by [Studio]({{page space='studio'}}), set on the `rnode:nodeId` property.&nbsp; Nodes can be automatic steps or nodes of type task. If a node is of type task, that means a task (persisted by default as a document of type TaskDoc) is created when the workflow is executing that node. The workflow will be resumed only when this task is completed.

{{! excerpt}}

Since workflows, nodes and task are all documents, the&nbsp;[NXQL]({{page page='nxql'}})&nbsp;query language can be used, like on any other document type.

{{! /excerpt}}</div><div class="column medium-4">{{#> panel heading='On this page'}}

{{/panel}}</div></div>

## Querying Workflows

### Using Life Cycle State

{{#> panel type='code' heading='Query all running workflows:'}}

```sql
Select * from DocumentRoute where ecm:currentLifeCycleState = 'running'
```

{{/panel}}{{#> panel type='code' heading='Query all available workflow models:'}}

```sql
Select * from DocumentRoute where ecm:currentLifeCycleState = 'validated'
```

{{/panel}}

### Using Workflow and Node Variables

Both workflow and node variables are persisted on the workflow and node documents. These are metadata stored on a dynamic [facet]({{page page='available-facets'}}), in a schema named as following:

*   for workflow variables, the name of the schema (and its prefix too) is `var_$WorkflowModelName`,
*   for node variables, is `var_$NodeId`.

The name of this facet is stored as the property:

*   `docri:variablesFacet` on the workflow documents
*   `rnode:variablesFacet` for nodes.

So both workflow and node variables can be queried as any other Nuxeo property.

{{#> panel type='code' heading='Query all running default serial workflows, having the global variable "initialComment" set to "test"'}}

```sql
Select * from DocumentRoute where var_SerialDocumentReview:initiatorComment = 'test'  
```

{{/panel}}{{#> panel type='code' heading='Querry all running workflows for a given document'}}

```sql
Select * from DocumentRoute where docri:participatingDocuments IN ('$docId') AND ecm:currentLifeCycleState = 'running'
```

{{/panel}}

### Querying Workflows Suspended at a given Step

NXQL queries can reference any metadata. Using the [CoreSession#queryAndFetch](http://community.nuxeo.com/api/nuxeo/5.8/javadoc/org/nuxeo/ecm/core/api/CoreSession.html#queryAndFetch%28java.lang.String,%20java.lang.String,%20java.lang.Object...%29) API we can look for workflows suspended on a given step. This will return in an [IterableQueryResult](http://community.nuxeo.com/api/nuxeo/5.8/javadoc/org/nuxeo/ecm/core/api/IterableQueryResult.html "IterableQueryResult JavaDoc") the id of the document representing the workflow document.

```sql
Select ecm:parentId from RouteNode  where rnode:nodeId = 'Task5237' and ecm:currentLifeCycleState = 'suspended'
```

where 'Task5237' is the unique id of the node.

## Querying Workflow Tasks

{{#> panel type='code' heading='Query for all opened tasks'}}

```sql
Select * from TaskDoc where ecm:currentLifeCycleState = 'opened'
```

{{/panel}}