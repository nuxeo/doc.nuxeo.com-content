---
title: How to suppress a selection of documents from a collection?
description: I would like to create a button suppressing from a collection Documents previously selected in the window "content of the collection"
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - jsfdevelopment
    - studio-automation
    - automation
    - collection
    - jsf

---
# How to suppress a selection of documents from a collection?

## The problem
I  would like to create a button suppressing from a collection Documents previously selected in the window &#34;content of the collection&#34;

## The solution
The following automation called by a button enables this:
    - Context.FetchDocument
    - Context.SetInputAsVar:
        name: myColl
    - Seam.GetSelectedDocuments
    - Collection.RemoveFromCollection:
        collection: "@{Context[\"myColl\"]}"


2019-06-01T21:50:27.970Z
## (c) Nuxeo Support Knowledge Base Outline 2019
