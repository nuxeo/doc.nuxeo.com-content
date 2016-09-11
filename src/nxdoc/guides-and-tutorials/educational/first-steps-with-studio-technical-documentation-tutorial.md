---
title: 'First Steps With Studio: Technical Documentation Tutorial'
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lts2015-ok
    - tutorial
confluence:
    ajs-parent-page-id: '28475557'
    ajs-parent-page-title: Educational
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: First+Steps+With+Studio%3A+Technical+Documentation+Tutorial
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC710/First+Steps+With+Studio%3A+Technical+Documentation+Tutorial
    page_id: '28475548'
    shortlink: nICyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/nICyAQ'
    source_link: >-
        /display/NXDOC710/First+Steps+With+Studio%3A+Technical+Documentation+Tutorial
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 13:52'
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

This tutorial offers a progressive and educative tour of what you can do to customize the Nuxeo Platform with Nuxeo Studio. It should be one of the first tutorials you do.

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
*   Publishing should automatic at the end of the validation workflow.

This how-to is divided in the following main steps:

*   [Implementing Documentation Items]({{page space='NXDOC710' page='Implementing Documentation+Items'}})
*   [Custom Content View for Documentation Items]({{page space='NXDOC710' page='Custom Content+View+for+Documentation+Items'}})
*   [Document Locking Right after Its Creation]({{page space='NXDOC710' page='Document Locking+Right+after+Its+Creation'}})
*   [Validation Workflow Choosing the Assignee Based on a Metadata]({{page space='NXDOC710' page='Validation Workflow+Choosing+the+Assignee+Based+on+a+Metadata'}})