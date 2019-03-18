---
title: Serial Document Workflow
review:
    comment: ''
    date: '2018-02-17'
    status: ok
labels:
    - lts2016-ok
    - serial-workflow
    - excerpt
    - multiexcerpt-include
    - multiexcerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '2392410'
    ajs-parent-page-title: Workflows
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Serial+Document+Workflow
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Serial+Document+Workflow'
    page_id: '16091752'
    shortlink: aIr1
    shortlink_source: 'https://doc.nuxeo.com/x/aIr1'
    source_link: /display/USERDOC/Serial+Document+Workflow
tree_item_index: 100
history:
    -
        author: Manon Lumeau
        date: '2015-11-25 17:03'
        message: 'eplace "access rights" by "permissions'
        version: '12'
    -
        author: Manon Lumeau
        date: '2015-11-24 15:14'
        message: new Edit permission
        version: '11'
    -
        author: Manon Lumeau
        date: '2015-09-21 09:07'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2015-09-21 09:05'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2015-09-21 09:05'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-09-21 08:58'
        message: Merge approving and rejecting sections
        version: '7'
    -
        author: Manon Lumeau
        date: '2015-09-18 16:13'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2015-09-18 16:04'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2015-09-18 15:51'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2015-09-09 08:53'
        message: Add precisions about lock status during workflow
        version: '3'
    -
        author: Solen Guitter
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
**The default serial workflow**, called "Serial document review", is an ordered workflow. This means that participants can review the document only when the previous participant in the list has approved the document. It can be used either to approve the document or simply to review it.
{{! /excerpt}}

The workflow is composed of the steps below:

1.  A user decides to start a review on a document and wants several other users to participate one after the other. They execute a Serial document review.
2.  They select who will participate to the review and if the document should go the Approved lifecycle state at the end of the workflow. They can then start the workflow.
    The document is not locked during the workflow.
3.  Participants gets the document one after the other to approve or reject it:
    - If the participant approves the document, the next participant gets a task to review the document.
    - If the participant rejects the document, the document goes back to the previous reviewer.
4.  When the last participant approves the document, the workflow automatically stops and, in case of an approval review, the document goes the Approved lifecycle state.

## Starting a Serial Workflow

You need to have editing or management permissions to start a workflow.

**To start a workflow**:

1.  On the **Summary** tab, in the **Workflow process** section, select the workflow type you want to start and click on the **Start** button.
    The form to select the reviewers and start the workflow is displayed on the **Summary** tab. A **Show graph view** button is also available, that displays the workflow route in a pop-up window.
    A **Workflow** tab is now available on the document from which you can select the reviewers, [delegate your task]({{page page='delegating-a-task'}}), show the graph view but also see the current and previous tasks and [abandon the workflow]({{page page='abandoning-a-workflow'}}).
    ![]({{file name='workflow-choose-reviewers-task-workflow-tab.png'}} ?w=650,border=true)
2.  In the **Participants on the review** field, type the name of a user or a group you want to add on the workflow and select it in the drop down list. Repeat these two steps to add all the participants to the review. Optionally, drag and drop the participants to change their order on the workflow, or the icon ![]({{file name='action-delete.png' page='icons-index'}}) to remove them. {{{multiexcerpt 'tasks-assigned-to-group' page='Serial Document Workflow'}}}
3.  Select the type of review you want to do: **Simple review**: the document's state will not change; or the **Validation review**: when all the reviewers have approved the document, it goes to the **Approved** lifecycle state.
    ![]({{file name='workflow-review-type-selection.png'}} ?w=350,border=true)
4.  Type a comment, indicating the purpose of the review for instance.
5.  Click on the **Start the review** button to let participants approve or reject the document.
    Only the **Show graph view** button remains on the **Summary** tab. The document remains unlocked.
    On the **Workflow** tab, the current task and the previous ones are displayed.
    The first participant(s) on the review get(s) an email and have his (their) task displayed on his (their) dashboard.

## Participating to a Serial Workflow

Once the workflow has been started, users added on the workflow's roadmap can review the document and approve or reject it.

When they have a task on a document, users are displayed it on their [dashboard]({{page page='browsing-content#dashboard'}}) in the "My tasks" gadget and in their home **Workflow** tab. They also receive an email to inform them that they were assigned a task on a document:

{{! multiexcerpt name='workflow-notification'}}
> A task on the document Document_Title was assigned to you or to a group you belong to. You can consult the document following this link: Document_Title

{{! /multiexcerpt}}

The participants of a workflow can:

- Edit the document: permissions to the document are temporarily modified by the system to enable the reviewers to edit the document if their permissions didn't allow them to
- Approve the document
- Reject the document

{{! multiexcerpt name='tasks-assigned-to-group'}}
{{#> callout type='info' heading='Tasks assigned to a group'}}
A task assigned to a group is displayed to all the members of the group. As soon as a member of the group approves or rejects the document, the task is completed and the workflow continues.
{{/callout}}
{{! /multiexcerpt}}

### {{> anchor 'approve-reject-document'}}Approving or Rejecting a Document

Participants can approve the document when it's their turn, after the previous participant on the workflow has approved it. Participants automatically get Edit permission on the document for the time they have a task to perform on the document, if they had Read permission or no access to the document.

**To approve or reject the document**:

1.  In your **Home**, click on the **Workflow** tab, the list of tasks you have to do is displayed. Optionally click on the icon ![]({{file name='external.gif' page='icons-index'}}) to open the document in a new tab, consult it and edit it.
2.  From the **Workflow** tab, click on the **Process** button. The Validation task is displayed.![]({{file name='Serial-workflow-task-process.png'}} ?w=650,border=true)
3.  If you think that you won't be able to process the task, [delegate it]({{page space='nxdoc' page='delegating-a-task'}}) or [reassign it]({{page page='reassigning-a-task'}}) to another user. If not switch to the next step. Optionally, type a comment to indicate what you did on the document before approving it.
4.  Depending on your opinion on the document, click on one of the buttons available:
    - **Validate**
      The task is not displayed anymore from the **Workflow** tab and the document. If you originally had read-only access to the document, you can't edit it anymore. The next participant can now review the document and approve or reject it.
    - **Reject**
      The task is not displayed anymore from the Workflow tab and the document. If you originally had read-only access to the document, you can't edit it anymore. The document is automatically sent back to the previous reviewer on the workflow, so he can edit it and approve it again.
      When the document is rejected by the first reviewer, the document is sent back to the initiator, who can then either modify the document and resubmit it, or [cancel the review]({{page page='abandoning-a-workflow'}}).

### Ending the Workflow

The workflow automatically ends when the last reviewer approves the document, and the document changes state if the initiator chose to do a validation review.
