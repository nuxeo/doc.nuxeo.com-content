---
title: How to modify a workflow variable outside of workflow context
review:
    comment: ''
    date: ''
    status: ok
labels:
    - workflow
    - event
    - listener
confluence:
    ajs-parent-page-id: '17334536'
    ajs-parent-page-title: Workflow How-Tos
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: How+to+modify+a+workflow+variable+outside+of+workflow+context
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC58/How+to+modify+a+workflow+variable+outside+of+workflow+context
    page_id: '17334310'
    shortlink: JoAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/JoAIAQ'
    source_link: >-
        /display/NXDOC58/How+to+modify+a+workflow+variable+outside+of+workflow+context
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 16:11'
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
A workflow (route instance) is stored in Nuxeo as a document of type "DocumentRoute". A node in the workflow is stored as a document of type "RouteNode".&nbsp;Both workflow and node variables are persisted on the workflow and node documents.

{{! excerpt}}

If you want to modify these variables outside of the workflow context (from a listener for example), you have to fetch the workflow instance document and you can use the available methods on their adapters,&nbsp;[GraphRoute](http://community.nuxeo.com/api/nuxeo/5.6/javadoc/org/nuxeo/ecm/platform/routing/core/impl/GraphRoute.html)&nbsp;and&nbsp;[GraphNode:](http://community.nuxeo.com/api/nuxeo/5.6/javadoc/org/nuxeo/ecm/platform/routing/core/impl/GraphNode.html)

{{! /excerpt}}

```java
void setVariables(Map<String, Serializable> map);
Map<String, Serializable> getVariables();
```

Eg.

```
GraphRoute route = doc.getAdapter(GraphRoute.class);
GraphNode node = route.getNode(nodeId);
```

You can either listen to events triggered on the document following the workflow, or on workflow events.
In the first case, in the event handler you have the document following the workflow and you have to get the workflow instance document. Use the following method on the [DocumentRoutingService](http://community.nuxeo.com/api/nuxeo/5.6/javadoc/org/nuxeo/ecm/platform/routing/api/DocumentRoutingService.html) service:

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

So if you want to set a workflow variable from a listener listening to&nbsp;`workflowTaskCompleted` event:

1.  Get the `taskInstance` from the `eventProperties` map.
2.  Get the workflow document (using his id = "`routeInstanceDocId`") from the `taskVariables`.
3.  Adapt the document to `GraphRoute`.
4.  Use `setVariables` like in the first example.

&nbsp;