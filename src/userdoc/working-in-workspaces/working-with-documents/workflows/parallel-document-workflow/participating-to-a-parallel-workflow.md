---
title: Participating to a Parallel Workflow
labels:
    - parallel-workflow
toc: true
confluence:
    ajs-parent-page-id: '21299433'
    ajs-parent-page-title: Parallel Document Workflow
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Participating+to+a+Parallel+Workflow
    canonical_source: >-
        https://doc.nuxeo.com/display/USERDOC60/Participating+to+a+Parallel+Workflow
    page_id: '21299432'
    shortlink: 6ABFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/6ABFAQ'
    source_link: /display/USERDOC60/Participating+to+a+Parallel+Workflow
history:
    - 
        author: Manon Lumeau
        date: '2015-09-18 13:28'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2015-02-06 14:24'
        message: ''
        version: '8'
    - 
        author: Manon Lumeau
        date: '2014-12-02 18:11'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-02-10 16:45'
        message: Added link to reassignment page
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-11-03 16:33'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-11-03 16:00'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-11-03 15:58'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-10-25 19:27'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-10-25 15:16'
        message: ''
        version: '1'

---
After the workflow initiator has started the parallel workflow, two steps need to be completed:

1.  Reviewers need to provide their opinion on the approval of the document: Would they approve the document, reject it, or do they not have an opinion. That's the Consultation step, in which there is no order between the participants.
2.  The Workflow initiator can then approve or not the document, after seeing the result of the consultation step. That's the Validation step.

## Reviewing the Document

After the workflow initiator started the workflow, all reviewers get a Consultation task displayed:

*   In the My tasks gadget of their dashboard,
*   In the Workflow tab of their Home.&nbsp;
    ![]({{file name='parallel-workflow-Home- Workflow-tab.png'}} ?w=650,border=true)

They also receive an email to inform them that they were assigned a task on a document:

{{{multiexcerpt 'workflow-notification' page='Participating to a Serial Workflow'}}}

The consultation task consists in saying if you would approve or reject the document, or if you have no opinion (N/A). All participants can review the document at any time: there is no order between them. But they need to review the document before the due date if they want to provide their opinion. When the due date is passed, all pending Consultation tasks are closed as N/A and the workflow goes to the Validation step.

{{{multiexcerpt 'tasks-assigned-to-group' page='Participating to a Serial Workflow'}}}

**To review a document:**

1.  In your&nbsp;**Home**, click on the&nbsp;**Workflow**&nbsp;tab.
    The list of tasks you have to do is displayed.
2.  Optionally click on the icon&nbsp;![]({{file name='external.gif' page='icons-index'}})&nbsp;to open the document in a new tab and consult it.
3.  Click on the&nbsp;**Process**&nbsp;button.
    The Consultation task form is displayed in the Workflow tab.
4.  If you think that you won't be able to process the task,&nbsp;[delegate it]({{page page='delegating-a-task'}})&nbsp;or&nbsp;[reassign it ]({{page page='reassigning-a-task'}})to another user. If not switch to the next step.
5.  Click on one of the buttons to provide your opinion on the document validation:
    *   Approve: you agree with the document being approved;
    *   Reject: you think that the document is not ready to be approved;
    *   N/A: you are not concerned by the document or don't have an opinion about its validation.Your consultation task is done. The task is removed from your dashboard and your Workflow tab.
    On the document, the consultation is displayed in the Previous tasks of the Workflow tab.

{{#> callout type='tip' heading='Other location to process the task'}}

The task form is also displayed on the document's Summary tab and its Workflow tab.

{{/callout}}

## Final Validation of the Document

When all reviewers have done their consultation task, the document goes back to the initiator of the review so he can see the opinion of the reviewers and approve or reject the document.