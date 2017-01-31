---
title: Serial Document Workflow
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '21299495'
    ajs-parent-page-title: Workflows
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Serial+Document+Workflow
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Serial+Document+Workflow'
    page_id: '21299439'
    shortlink: 7wBFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/7wBFAQ'
    source_link: /display/USERDOC60/Serial+Document+Workflow
tree_item_index: 100
history:
    -
        author: Manon Lumeau
        date: '2016-07-20 14:10'
        message: emove children display macro
        version: '5'
    -
        author: Manon Lumeau
        date: '2015-09-18 15:53'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2015-09-09 08:53'
        message: Add precisions about lock status during workflow
        version: '3'
    -
        author: Anonymous
        date: '2013-10-25 13:46'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2013-10-25 10:02'
        message: ''
        version: '1'

---
{{! excerpt}}

The default serial workflow, called "Serial document review", is an ordered workflow. This means that participants can review the document only when the previous participant in the list has approved the document. It can be used either to approve the document or simply to review it.

{{! /excerpt}}

The workflow is composed of the steps below:

1.  A user decides to start a review on a document and wants several other users to participate one after the other. He executes a Serial document review.
2.  He selects who will participate to the review and if the document should go the Approved life cycle state at the end of the workflow. He can then start the workflow.
    The document is not locked during the workflow.
3.  Participants gets the document one after the other to approve or reject it:
    *   If the participant approves the document, the next participant gets a task to review the document.
    *   If the participant rejects the document, the document goes back to the previous reviewer.
4.  When the last participant approves the document, the workflow automatically stops and, in case of an approval review, the document goes the Approved life cycle state.

The pages below describe how to proceed for the different steps:

*   [Starting a Serial Workflow]({{page space='USERDOC60' page='Starting a+Serial+Workflow'}})
*   [Participating to a Serial Workflow]({{page space='USERDOC60' page='Participating to+a+Serial+Workflow'}})
