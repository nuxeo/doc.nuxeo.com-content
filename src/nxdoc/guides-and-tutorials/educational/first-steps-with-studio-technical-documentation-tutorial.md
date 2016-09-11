---
title: 'First Steps With Studio: Technical Documentation Tutorial'
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '22380615'
    ajs-parent-page-title: Educational
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: First+Steps+With+Studio%3A+Technical+Documentation+Tutorial
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/First+Steps+With+Studio%3A+Technical+Documentation+Tutorial
    page_id: '22380605'
    shortlink: PYBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/PYBVAQ'
    source_link: >-
        /display/NXDOC60/First+Steps+With+Studio%3A+Technical+Documentation+Tutorial
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 14:22'
        message: 'emove children display macro '
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

This tutorial offers a progressive and educative tour of what you can do to customize the Nuxeo Platform with Nuxeo Studio. It should be one of the first tutorials you do.

{{! /excerpt}}

In this sample use case, we will use the Nuxeo Platform to manage technical documentation. It will be important to make it easy to differentiate draft documentation items from validated ones. We will implement the publishing logic using the Nuxeo Platform.

Here are a few rules we want to follow:

*   A technical documentation document is called a "documentation item". It can be a procedure, a notice or installation instructions.
*   When looking at a documentation item we should only display needed information, nothing else.
*   A documentation item is composed of an office file and a set of descriptive metadata.
*   All documentation items should be stored in one place. This means it should be easy to filter documents by metadata.
*   The document listing should display the useful metadata immediately.
*   A newly created document should be editable only by its creator until the validation workflow is started.
*   A workflow should be available to validate a document easily.
*   Publishing should automatic at the end of the validation workflow.

Here are the steps to follow:

*   [Documentation Item Implementation]({{page space='NXDOC60' page='Documentation Item+Implementation'}})
*   [Custom Content View for Documentation Items]({{page space='NXDOC60' page='Custom Content+View+for+Documentation+Items'}})
*   [Document Locking Right after Its Creation]({{page space='NXDOC60' page='Document Locking+Right+after+Its+Creation'}})
*   [Validation Workflow Choosing the Assignee Based on a Metadata]({{page space='NXDOC60' page='Validation Workflow+Choosing+the+Assignee+Based+on+a+Metadata'}})