---
title: Parallel Document Workflow
review:
    comment: ''
    date: ''
    status: ok
labels:
    - parallel-workflow
    - 5-8
confluence:
    ajs-parent-page-id: '16092618'
    ajs-parent-page-title: Workflows
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Parallel+Document+Workflow
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Parallel+Document+Workflow'
    page_id: '16092655'
    shortlink: '7431'
    shortlink_source: 'https://doc.nuxeo.com/x/7431'
    source_link: /display/USERDOC58/Parallel+Document+Workflow
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 14:12'
        message: emove children display macro
        version: '4'
    - 
        author: Manon Lumeau
        date: '2015-09-18 16:29'
        message: ''
        version: '3'
    - 
        author: Anonymous
        date: '2013-10-25 14:41'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-10-25 13:54'
        message: ''
        version: '1'

---
&nbsp;

{{! excerpt}}

The default parallel workflow, called "Parallel document review", is an unordered workflow that enables to change the document's state after a consultation step. This means that participants can give their opinion on the document without having to wait for a previous participant to approve it.

{{! /excerpt}}

The workflow is composed of the steps below:

1.  A user wants to make a document go to the Approved life cycle state, but would like to have the opinion of some other users. He executes a Parallel document review.
2.  He select the users he wants to consult about the document, select a due date and starts the review.
    The participants all get a consultation task at the same time.
3.  Each participant goes on the document and indicates if he approves or rejects the document.
4.  When all participants have provided their opinion, the initiator gets a summary of the consultation.
5.  He can then approve the document or not.
    *   If he approved it, the document changes state.
    *   If he rejects it, the document stays at the Project life cycle state.

The pages below describe how to proceed for each of these steps:

*   [Starting a Serial Workflow]({{page space='USERDOC60' page='Starting a+Serial+Workflow'}})
*   [Participating to a Serial Workflow]({{page space='USERDOC60' page='Participating to+a+Serial+Workflow'}})