---
title: Participating to a Serial Workflow
review:
    comment: ''
    date: ''
    status: ok
labels:
    - workflow
toc: true
confluence:
    ajs-parent-page-id: '16092652'
    ajs-parent-page-title: Serial Document Workflow
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Participating+to+a+Serial+Workflow
    canonical_source: >-
        https://doc.nuxeo.com/display/USERDOC58/Participating+to+a+Serial+Workflow
    page_id: '16092569'
    shortlink: mY31
    shortlink_source: 'https://doc.nuxeo.com/x/mY31'
    source_link: /display/USERDOC58/Participating+to+a+Serial+Workflow
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 14:31'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2013-11-03 16:34'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-11-03 16:32'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-11-03 16:29'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-11-03 16:28'
        message: 'Updated screenshots for 5.8, added delegation step'
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-11-03 16:21'
        message: Updated Validation step
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-11-03 15:20'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:15'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-09-30 17:10'
        message: Removed related topics from TOC
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-07-02 15:10'
        message: Fixed broken link to abandon workflow
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-01-18 15:04'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-09-12 16:24'
        message: Migrated to Confluence 4.0
        version: '8'
    - 
        author: Solen Guitter
        date: '2012-09-12 16:24'
        message: Updated content with latest version workflow
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-11-24 10:24'
        message: Added toc
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-06-06 14:41'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-05-24 12:16'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-05-24 12:15'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-12-01 11:23'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-05-28 11:57'
        message: ''
        version: '1'

---
## Approving a Document

Participants can approve the document when it's their turn, after the previous participant on the workflow has approved it. Participants automatically get Write right on the document for the time they have a task to perform on the document, if they had Read permission or no access to the document.

**To approve the document:**

1.  In your **Home**, click on the **Workflow** tab.
    The list of tasks you have to do is displayed.
2.  Optionally click on the icon&nbsp;![]({{file name='external.gif' page='icons-index'}})&nbsp;to open the document in a new tab, consult it and edit it.
3.  From the **Workflow** tab, click on the&nbsp;**Process**&nbsp;button.
    The Validation task is displayed.
    ![]({{file name='Serial-workflow-task-process.png'}} ?w=650,border=true)

4.  If you think that you won't be able to process the task,&nbsp;[delegate it]({{page space='USERDOC' page='Delegating a+Task'}})&nbsp;to another user. If not switch to the next step.
5.  Optionally, type a comment to indicate what you did on the document before approving it.
6.  Click on the **Validate**&nbsp;button.
    The task is not displayed anymore from the Workflow tab and the document. If you originally had read-only access to the document, you can't edit it anymore.
    The next participant can now review the document and approve or reject it.

## Rejecting a Document

Participants can reject the document when it's their turn, after the previous participant on the workflow has approved it.

**To reject the document:**

1.  In your&nbsp;**Home**, click on the&nbsp;**Workflow**&nbsp;tab.
    The list of tasks you have to do is displayed.
2.  Optionally click on the icon&nbsp;![]({{file name='external.gif' page='icons-index'}})&nbsp;to open the document in a new tab, consult it and edit it.
3.  From the&nbsp;**Workflow**&nbsp;tab, click on the&nbsp;**Process**&nbsp;button.
    The Validation task is displayed.
    ![]({{file name='Serial-workflow-task-process.png'}} ?w=650,border=true)

4.  If you think that you won't be able to process the task,&nbsp;[delegate it]({{page space='USERDOC' page='Delegating a+Task'}})&nbsp;to another user. If not switch to the next step.
5.  Optionally, type a comment to indicate why you reject the document.
6.  Click on the **Reject** button.
    The task is not displayed anymore from the Workflow tab and the document. If you originally had read-only access to the document, you can't edit it anymore.
    The document is automatically sent back to the previous reviewer on the workflow, so he can edit it and approve it again.

When the document is rejected by the first reviewer, the document is sent back to the initiator, who can then either modify the document and resubmit it, or [cancel the review]({{page page='abandoning-a-workflow'}}).

## Ending the Workflow

The workflow automatically ends when the last reviewer approves the document, and the document changes state if the initiator [chose to do a validation review]({{page page='starting-a-serial-workflow'}}).

&nbsp;