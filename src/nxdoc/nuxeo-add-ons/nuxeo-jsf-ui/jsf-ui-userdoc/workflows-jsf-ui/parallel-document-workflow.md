---
title: Parallel Document Workflow
review:
    comment: ''
    date: '2018-02-20'
    status: ok
labels:
    - lts2016-ok
    - parallel-workflow
    - excerpt
    - multiexcerpt-include
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '2392410'
    ajs-parent-page-title: Workflows
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Parallel+Document+Workflow
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Parallel+Document+Workflow'
    page_id: '16091766'
    shortlink: dor1
    shortlink_source: 'https://doc.nuxeo.com/x/dor1'
    source_link: /display/USERDOC/Parallel+Document+Workflow
tree_item_index: 200
history:
    -
        author: Manon Lumeau
        date: '2015-11-25 17:32'
        message: ew Edit permissio
        version: '9'
    -
        author: Solen Guitter
        date: '2015-09-21 21:51'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-09-21 21:42'
        message: Fix missing excerpts
        version: '7'
    -
        author: Manon Lumeau
        date: '2015-09-21 09:06'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2015-09-18 16:27'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2015-09-18 16:23'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2015-09-09 08:54'
        message: Add precisions about lock status during workflow
        version: '3'
    -
        author: Solen Guitter
        date: '2013-10-25 14:41'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2013-10-25 13:54'
        message: ''
        version: '1'

---
{{! excerpt}}
**The default parallel workflow**, called "Parallel document review", is an unordered workflow that enables to change the document's state after a consultation step. This means that participants can give their opinion on the document without having to wait for a previous participant to approve it.
{{! /excerpt}}

The workflow is composed of the steps below:

1. A user wants to make a document go to the Approved lifecycle state, but would like to have the opinion of some other users. He executes a Parallel document review.
2. He selects the users he wants to consult about the document, select a due date and starts the review.

    The document is automatically locked for the review.

    The participants all get a consultation task at the same time.
3. Each participant goes on the document and indicates if he approves or rejects the document.
4. When all participants have provided their opinion, the initiator gets a summary of the consultation.
5. He can then approve the document or not.
    - If he approved it, the document changes state.
    - If he rejects it, the document stays at the Project lifecycle state.In both cases the document is automatically unlocked.

## Starting a Parallel Workflow

You need to have editing or management permissions to start a workflow, either parallel or serial.

**To start a parallel workflow**:

1. On the **Summary** tab, in the **Workflow process** section, select the parallel review and click on the **Start** button.

    The form to select the reviewers and start the workflow is displayed on the **Summary** tab. A **Show graph view** button is also available, that displays the workflow route in a pop-up window.

    A **Workflow** tab is now available on the document from which you can select reviewers, see the graph view but also see the current and previous tasks and [abandon the workflow]({{page space='nxdoc' page='abandoning-a-workflow'}}).
    ![]({{file name='parallel-workflow-choose-participants-task-workflow-tab.png'}} ?w=600,border=true)
2. In the **Participants on the review** field, type the name of a user or a group you want to add on the workflow and select it in the drop down list. Repeat these two steps to add all the participants to the review. Optionally, drag and drop the participants to change their order on the workflow, or the icon ![]({{file space='userdoc' name='action-delete.png' page='icons-index'}}) to remove them.
3. Type a comment for the reviewers, for instance if you want them to pay attention to a specific section of the document. {{{multiexcerpt 'tasks-assigned-to-group' page='Serial Document Workflow'}}}
4. Select the due date by when the participants need to have reviewed the document.
    {{#> callout type='tip' }}
    When the due date is passed, the consultation task is automatically closed to all reviewers that haven't provided their opinion on the document and the workflow goes to the next step: the initiator approval.
    {{/callout}}
5. Click on the **Start the review** button to let participants give their opinion on the document.

    Only the **Show graph view** button remains on the **Summary** tab. The document is locked so that only the workflow initiator can edit the document.

    On the **Workflow** tab, the current task and the previous ones are displayed. All reviewers get a Consultation task in their Home Workflow tab.
    ![]({{file name='parallel-workflow-started-workflow-tab.png'}} ?w=600,h=304,border=true)

## Participating to a Parallel Workflow

After the workflow initiator has started the parallel workflow, two steps need to be completed:

1. Reviewers need to provide their opinion on the approval of the document: would they approve the document, reject it, or do they not have an opinion. That's the Consultation step, in which there is no order between the participants.
2. The Workflow initiator can then approve or not the document, after seeing the result of the consultation step. That's the Validation step.

### Reviewing the Document

After the workflow initiator started the workflow, all reviewers get a Consultation task displayed:

- In the My tasks gadget of their dashboard,
- In the Workflow tab of their Home.
    ![]({{file name='parallel-workflow-Home- Workflow-tab.png'}} ?w=600,border=true)

They also receive an email to inform them that they were assigned a task on a document:

{{{multiexcerpt 'workflow-notification' page='Serial Document Workflow'}}}

The consultation task consists in saying if you would approve or reject the document, or if you have no opinion (N/A). All participants can review the document at any time: there is no order between them. But they need to review the document before the due date if they want to provide their opinion.

{{{multiexcerpt 'tasks-assigned-to-group' page='Serial Document Workflow'}}}

**To review a document**:

1. In your **Home**, click on the **Workflow** tab.

    The list of tasks you have to do is displayed. Optionally click on the icon ![]({{file space='userdoc' name='external.gif' page='icons-index'}}) to open the document in a new tab and consult it.
2. Click on the **Process** button.

    The Consultation task form is displayed in the Workflow tab. If you think that you won't be able to process the task, [delegate it]({{page page='delegating-a-task'}}) or [reassign it ]({{page page='reassigning-a-task'}})to another user. If not, switch to the next step.
3. Click on one of the buttons to provide your opinion on the document validation:
    - Approve: you agree with the document being approved;
    - Reject: you think that the document is not ready to be approved;
    - N/A: you are not concerned by the document or don't have an opinion about its validation.Your consultation task is done. The task is removed from your dashboard and your Workflow tab. On the document, the consultation is displayed in the Previous tasks of the Workflow tab.

{{#> callout type='tip' heading='Other location to process the task'}}

The task form is also displayed on the document's Summary tab and its Workflow tab.

{{/callout}}

### Final Validation of the Document

When all reviewers have done their consultation task, the document goes back to the initiator of the review so he can see the opinion of the reviewers and approve or reject the document.
