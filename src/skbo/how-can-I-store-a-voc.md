---
title: How can I store a vocabulary label in a document
description: How can I store a vocabulary label in a document
review: 
    date: '2019-06-01'
    status: ok
    comment: ''
labels:
    - studio-automation
    - automation
    - directory
    - studio

---
# How can I store a vocabulary label in a document ?
## Problem
Selecting an item from a vocabulary results in the ID being stored in the document, not the label. Sometimes we want to see the label value in the document.
## Solution
Use two fields, one which stores the ID and one which stores the label.

Consider a vocabulary that looks like this:

    Id,Label
    ap.apple
    ba,banana
    ca,carrot
    du,durian

when we select apple on document creation or edit, ap is stored in the document.

Say that we store the selection in **myschema:myVocabId**, and we add another field in that schema called **myschema:myVocabLabel** in which we want to store a string "*apple*". An event handler can be configured to read the vocab ID, look up its label and set it in a variable. Then **myschema:myVocabLabel** is set with the variable's contents.

### Set up the Event Handler
+ make a new Event Handler
+ add events Before Document Modification and Document Created to Event Handler Definition
+ add your document type(s) to Event Handler Activation and any other conditions you might need
+ go to Event Handler Execution and create a new Automation Chain

### Set up the Automation Chain

    - Context.FetchDocument
    - Context.SetVar:
        name: myVocabId
        value: "@{Document[\"myschema:myVocabId\"]}"
    - Context.SetVar:
        name: myVocabLabel
        value: "@{Fn.getVocabularyLabel(\"myVocab\", Context[\"myVocabId\"])}"
    - Document.SetProperty:
        xpath: "myschema:myVocabLabel"
        save: "false"
        value: "@{Context[\"myVocabLabel\"]}"

When you create or edit a document, you will choose a value for **myschema:myVocabId**, then the event will fire the automation chain to copy the label value to **myschema:myVocabLabel**.


2019-06-01T17:37:32.803Z
## (c) Nuxeo Support Knowledge Base Outline 2019
