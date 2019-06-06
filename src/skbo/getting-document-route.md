---
title: Getting DocumentRouteException caused by InvalidChainException on a DocumentModelListImpl
description: Getting DocumentRouteException caused by InvalidChainException on a DocumentModelListImpl
review: 
    date: '2019-06-01'
    status: ok
    comment: ''
labels:
    - studio-automation
    - automation
    - how-to
    - workflow

---
# Getting  “Caused by: org.nuxeo.ecm.automation.InvalidChainException: Cannot find any valid path in operation chain - no method found for operation 'Context.FetchDocument' and for first input type 'org.nuxeo.ecm.core.api.impl.DocumentModelListImpl'“
## Problem
You are getting an instance of an exception:

    ERROR [RoutingTaskActionsBean] org.nuxeo.ecm.platform.routing.api.exception.DocumentRouteException: Error running chain: […YourChain…] org.nuxeo.ecm.platform.routing.api.exception.DocumentRouteException: Error running chain: […YourChain…]
    at org.nuxeo.ecm.platform.routing.core.impl.GraphNodeImpl.executeChain(GraphNodeImpl.java:518)
    at org.nuxeo.ecm.platform.routing.core.impl.GraphNodeImpl.executeTransitionChain(GraphNodeImpl.java:498)
    at org.nuxeo.ecm.platform.routing.core.impl.GraphRunner.runGraph(GraphRunner.java:293)
    […]
    Caused by: org.nuxeo.ecm.automation.InvalidChainException: Cannot find any valid path in operation chain - no method found for operation 'Context.FetchDocument' and for first input type 'org.nuxeo.ecm.core.api.impl.DocumentModelListImpl'
    at org.nuxeo.ecm.automation.core.impl.OperationChainCompiler$OperationMethod.solve(OperationChainCompiler.java:172)
    at org.nuxeo.ecm.automation.core.impl.OperationChainCompiler$Connector.connect(OperationChainCompiler.java:103)
    at org.nuxeo.ecm.automation.core.impl.OperationChainCompiler.compile(OperationChainCompiler.java:45)
    at org.nuxeo.ecm.automation.core.impl.OperationServiceImpl.compileChain(OperationServiceImpl.java:372)
    […]

And you wonder how come **'Context.FetchDocument'** cannot take **“documents”** as input
## Solution
The problem is to be found in your automation chain […YourChain…]:
with a WorkFlow, the argument of the automation chain is **docri:participatingDocuments** which is a **DocumentModelListImpl**. However, one of the operations in the chain cannot accept a “documents” as an input argument, and is limited to running e.g. with a one and unique “document”.  
In case the automation chain of your workflow is meant to be applied on 1 document only in your workflow, you can replace **'Context.FetchDocument'** with **‘Context.RestoreDocumentInputFromScript’** with a script as argument such as :  

    @{This instanceof org.nuxeo.ecm.core.api.impl.DocumentModelListImpl ? This.get(0) : This }

which enables the same script to apply inside the context of a workflow (“documents” as input) and in a single “document” context such as a Button.


2019-06-01T17:37:17.393Z
## (c) Nuxeo Support Knowledge Base Outline 2019
