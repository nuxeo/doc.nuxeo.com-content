---
title: How to Modify a Workflow Variable outside of Workflow Context
review:
    comment: ''
    date: '2017-12-14'
    status: ok
details:
    howto:
        excerpt: Learn how to modify a workflow outside of the workflow context.
        level: Advanced
        tool: Studio
        topics: 'Workflow, Event, Listener'
labels:
    - lts2016-ok
    - workflow
    - grenard
    - event
    - listener
    - howto
    - excerpt
    - lts2017-ok
confluence:
    ajs-parent-page-id: '19235619'
    ajs-parent-page-title: Workflow How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Modify+a+Workflow+Variable+outside+of+Workflow+Context
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Modify+a+Workflow+Variable+outside+of+Workflow+Context'
    page_id: '12913725'
    shortlink: PQzF
    shortlink_source: 'https://doc.nuxeo.com/x/PQzF'
    source_link: /display/NXDOC/How+to+Modify+a+Workflow+Variable+outside+of+Workflow+Context
tree_item_index: 200
history:
    -
        author: Manon Lumeau
        date: '2014-09-09 16:37'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2014-09-09 16:13'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2014-09-09 15:37'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2013-07-18 14:56'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2013-05-16 15:06'
        message: ''
        version: '13'
    -
        author: Mariana Cedica
        date: '2013-02-08 16:58'
        message: ''
        version: '12'
    -
        author: Mariana Cedica
        date: '2013-02-08 16:58'
        message: ''
        version: '11'
    -
        author: Mariana Cedica
        date: '2013-02-08 16:55'
        message: ''
        version: '10'
    -
        author: Mariana Cedica
        date: '2013-02-08 16:48'
        message: ''
        version: '9'
    -
        author: Mariana Cedica
        date: '2013-02-08 16:45'
        message: ''
        version: '8'
    -
        author: Mariana Cedica
        date: '2013-02-08 16:44'
        message: ''
        version: '7'
    -
        author: Mariana Cedica
        date: '2013-02-08 16:42'
        message: ''
        version: '6'
    -
        author: Mariana Cedica
        date: '2013-02-08 16:42'
        message: ''
        version: '5'
    -
        author: Mariana Cedica
        date: '2013-02-08 16:38'
        message: ''
        version: '4'
    -
        author: Mariana Cedica
        date: '2013-02-08 16:36'
        message: ''
        version: '3'
    -
        author: Mariana Cedica
        date: '2013-02-08 16:34'
        message: ''
        version: '2'
    -
        author: Mariana Cedica
        date: '2013-02-08 16:30'
        message: ''
        version: '1'

---
A workflow (route instance) is stored in Nuxeo as a document of type "DocumentRoute". A node in the workflow is stored as a document of type "RouteNode". Both workflow and node variables are persisted on the workflow and node documents.

{{! excerpt}}

If you want to modify these variables outside of the workflow context (from a listener for example), you have to fetch the workflow instance document and you can use the available methods on their adapters, [GraphRoute](http://community.nuxeo.com/api/nuxeo/8.10/javadoc/org/nuxeo/ecm/platform/routing/core/impl/GraphRoute.html) and [GraphNode:](http://community.nuxeo.com/api/nuxeo/8.10/javadoc/org/nuxeo/ecm/platform/routing/core/impl/GraphNode.html)

{{! /excerpt}}

```java
void setVariables(Map<String, Serializable> map);
Map<String, Serializable> getVariables();
```

e.g.

```
GraphRoute route = doc.getAdapter(GraphRoute.class);
GraphNode node = route.getNode(nodeId);
```

You can either listen to events triggered on the document following the workflow, or on workflow events.
In the first case, in the event handler you have the document following the workflow and you have to get the workflow instance document. Use the following method on the [DocumentRoutingService](http://community.nuxeo.com/api/nuxeo/8.10/javadoc/org/nuxeo/ecm/platform/routing/api/DocumentRoutingService.html) service:

```
List<DocumentRoute> getDocumentRoutesForAttachedDocument(CoreSession session, String attachedDocId)
```

For the second case, the `workflowTaskCompleted` event is triggered during a workflow every time a task is completed. On this event, the id of the workflow (route) instance documents is directly added into the map holding the properties of this event.
Here is some sample data fetched with my debugger on a break point on `TaskEventNotificationHelper notifyEvent` method:

```java
event: workflowTaskCompleted
eventProperties:
{category=eventDocumentCategory, sessionId=default-6778825317969559609, recipients=[Administrator, Administrator, test],
comment=szss, repositoryName=default, taskInstance=org.nuxeo.ecm.platform.task.TaskImpl@65fff289, documentLifeCycle=project}

((org.nuxeo.ecm.platform.task.TaskImpl)eventProperties.get("taskInstance")).getVariables()
taskVariables: {createdFromTaskService=true, taskNotificationTemplate=myTemplate, document.routing.step=0be590a5-8d03-48ef-9649-a82f06d8001a,
nodeId=Taska2e, documentRepositoryName=default, routeInstanceDocId=d05b14e4-8d60-41be-bea2-0d4063196c0b, directive=Aknowledgement, validated=false,
documentId=5b09103d-2fe1-40de-8737-a64b49425a6e}
```

So if you want to set a workflow variable from a listener listening to `workflowTaskCompleted` event:

1.  Get the `taskInstance` from the `eventProperties` map.
2.  Get the workflow document (using his id = "`routeInstanceDocId`") from the `taskVariables`.
3.  Adapt the document to `GraphRoute`.
4.  Use `setVariables` like in the first example.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Set Up a Tasks Dashboard]({{page page='how-to-set-up-a-tasks-dashboard'}})&nbsp;
- [How to Make a Simple Task Assignment to One or Many Users]({{page page='how-to-make-a-simple-task-assignment-to-one-or-many-users'}})&nbsp;
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Workflow in Nuxeo Studio]({{page space='studio' page='workflow'}})
- [Full-Text Queries]({{page page='full-text-queries'}})
- [NXQL]({{page page='nxql'}})
- [Variables Available in the Automation Context]({{page page='variables-available-in-the-automation-context'}})
- [Workflow]({{page page='workflow'}})

{{/panel}}</div></div>
