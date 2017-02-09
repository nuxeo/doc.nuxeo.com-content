---
title: 'First Steps With Studio: Technical Documentation Tutorial'
review:
    comment: ''
    date: '2017-01-17'
    status: ok
labels:
    - lts2016-ok
    - tutorial
    - excerpt
tree_item_index: 200
history:
    -
        author: Manon Lumeau
        date: '2016-07-20 12:32'
        message: emove children display macr
        version: '10'
    -
        author: Solen Guitter
        date: '2015-10-29 13:21'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-10-07 11:25'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2014-10-06 18:50'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2014-10-06 16:24'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2014-10-06 16:20'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2014-10-06 15:49'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2014-10-06 15:48'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2014-05-06 01:05'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-05-06 01:03'
        message: ''
        version: '1'

---
{{! excerpt}}

This tutorial offers a progressive and educative tour of what you can do to customize the Nuxeo Platform with Nuxeo Studio. It could be one of the first tutorials you do.

{{! /excerpt}}

In this sample use case, we will use the Nuxeo Platform to manage technical documentation. It will be important to make it easy to differentiate draft documentation items from validated ones. We will implement the publishing logic using the Nuxeo Platform.

Here are a few rules we want to follow:

*   A technical documentation document is called a "documentation item". Documentation items can be procedures, notices or installation instructions.
*   A documentation item is composed of an office file and a set of descriptive metadata.
*   When looking at a documentation item we should only display needed information, nothing else.
*   All documentation items should be stored in one place. This means it should be easy to filter documents by properties.
*   The document listing should display the useful metadata immediately.
*   A workflow should be available to validate a document easily.
*   A newly created documentation item should be editable only by its creator until the validation workflow is started.
*   Publishing should be automatic at the end of the validation workflow.

This how-to is divided in the following main steps:

*   [Implementing Documentation Items]({{page space='NXDOC' page='Implementing Documentation+Items'}})
*   [Custom Content View for Documentation Items]({{page space='NXDOC' page='Custom Content+View+for+Documentation+Items'}})
*   [Document Locking Right After Its Creation]({{page space='NXDOC' page='Document Locking+Right+after+Its+Creation'}})
*   [Validation Workflow Choosing the Assignee Based on a Metadata]({{page space='NXDOC' page='Validation Workflow+Choosing+the+Assignee+Based+on+a+Metadata'}})
