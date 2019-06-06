---
title: Automated numbering of a custom document
description: Automated numbering of a custom document
review: 
    date: '2019-06-01'
    status: ok
    comment: ''
labels:
    - administration
    - studio-automation
    - automation
    - fn.getnextid
    - sequence
---
# Automated numbering of a custom document
## Problem
A document type needs to a have a number as application-defined identifier. This number needs to be unique and if possible ever increasing.  
How to perform this?
## Solution
Let’s assume you have a type MyNote extending Note with a String-typed field Versioning

In Studio, in the Creation tab, do not display this field, and make it read-only in the Edit and View tabs

Create an event handler triggered on the event “about to create” for document type MyNote and executing the automation chain operation named “MyNoteCreationVersioning”

This automation chain MyNoteCreationVersioning reads:
    - Context.FetchDocument
    - Context.RunScript:
        script: "Document[\"mynote:versioning\"]=Fn.getNextId(\"MyNoteSeq\")\n"

where MyNoteSeq is a database sequence that you have to initialize to give the initial value of the sequence.

When created, a MyNote document will be initialized as wished in the Versioning field, and appear as such in the View and Edit tabs.


2019-06-01T17:37:19.788Z
## (c) Nuxeo Support Knowledge Base Outline 2019
