---
title: Automation chain sample to abandon a workflow knowing a participating document ID
description: Automation chain sample to abandon a workflow knowing a participating document ID
review: 
    date: '2019-06-01T17:37:18.595Z'
    status: ok
    comment: 'public version'
labels:
    - studio-automation
    - automation
    - workflow

---
# Automation chain sample to abandon a workflow knowing a participating document ID
## Problem
I have a document that is part of a workflow. I want to cancel the workflow using an automation chain.  
How to perform this task?
## Solution
    - Context.FetchDocument
    - Repository.Query:
        query: "Select * from DocumentRoute where docri:participatingDocuments IN (?) AND ecm:currentLifeCycleState = 'running'"
        language: NXQL
        queryParams: "@{Document.id}"
        sortOrder: ASC
    - WorkflowInstance.Cancel:
        id: "@{Document.id}"

Please notice that the 2 {Document.id} referenced here above actually refer to 2 different documents:  
* the first instance refer to the document we know the reference of
* the second instance refer to the workflow instance id, as it is the result of the previous Repository.Query operation.


2019-06-01T17:37:18.595Z
## (c) Nuxeo Support Knowledge Base Outline 2019
