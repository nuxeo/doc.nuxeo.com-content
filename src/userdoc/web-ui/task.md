---
title: Tasks
review:
    comment: ''
    date: '2018-10-15'
    status: ok
labels:
    - workflow
    - content-review-lts2017
toc: true
tree_item_index: 300
description: Web UI User Documentation about Workflows

---
All the documents evolve according to a defined lifecycle. The default lifecycle is composed of the following states: Project, Approved, Obsolete and Deleted. There are different ways to make documents evolve through this lifecycle. One of them is to use a workflow.

Users involved in workflows are alerted by email and can have a synthetic view of all their pending tasks on documents in their [dashboard]({{page page='browse'}}#dashboard) or on the **Task** tab. The documents they have to review are listed there.

{{{multiexcerpt 'default-validation-workflows' page='NXDOC:Workflow'}}}

A task represents what a workflow instance expects from a user or a group of users. Usually they are expected to give some information through a form and click on a button (like Accept, Reject, Confirm, Notify, Transform, etc.). A task usually has one or several assignees, a title, a directive and an expected date of achievement. The task assignees can be specified directly in the task definition or can be dynamically computed.

### Starting a Workflow on a Document

You need to have editing or management permissions to start a workflow on a document.

{{{multiexcerpt 'tasks-assigned-to-group' page='Serial Document Workflow'}}}

#### Serial Document Review

1. Go on the document that you want to review.
2. Click on the icon&nbsp;![]({{file name='workflow_web-ui.png' page='icons-index'}}).
2. On the pop-up, select the **Serial document review** from the drop down list and click on **Start**.<br/>
    Two info bars are displayed at the top of the document to inform that a process has been started on this document and that you have a task to process. Clicking the **View Graph** button displays the workflow route in a pop-up window.<br/>
    ![]({{file name='process-serial-review-web-ui.png'}} ?w=500,border=true)
3. Click on the **Process** button.<br/>
    The task view of the document displays:
    - the content of the document
    - the document attachments
    - the task form
4. In the **Participants** field, type the name of a user or a group you want to add on the workflow and select it in the drop down list. Repeat these two steps to add all the participants to the review. Optionally click or the icon ![]({{file name='action-delete.png' page='icons-index'}}) to remove them.
5. Select the type of review you want to do:
    - **Simple review**: The document's state will not change
    - **Validation**: When all the reviewers have approved the document, it goes to the **Approved** lifecycle state.
6. Click on **Start review** once everything is ready, to let participants approve or reject the document.![]({{file name='participants-review-web-ui.png'}} ?w=300,border=true)

#### Parallel Document Review

1. Go on the document that you want to review.
2. Click on the icon&nbsp;![]({{file name='workflow_web-ui.png' page='icons-index'}}).
2. On the pop-up, select the **Parallel document review** from the drop down list and click on **Start**.<br/>
    Two info bars are displayed at the top of the document to inform that a process has been started on this document and that you have a task to process. Clicking the **View Graph** button displays the workflow route in a pop-up window.<br/>
    ![]({{file name='process-parallel-review-web-ui.png'}} ?w=500,border=true)
3. Click on the **Process** button. <br/>
    The task view of the document displays:
    - the content of the document
    - the document attachments
    - the task form
4. In the **Participants** field, type the name of a user or a group you want to add on the workflow and select it in the drop down list. Repeat these two steps to add all the participants to the review. Optionally click on the icon ![]({{file name='action-delete.png' page='icons-index'}}) to remove them.
5. Type a comment for the reviewers, for instance if you want them to pay attention to a specific section of the document.
6. Select the due date by when the participants need to have reviewed the document.
    {{#> callout type='tip' }}
    When the due date is passed, the consultation task is automatically closed to all reviewers that haven't provided their opinion on the document and the workflow goes to the next step: the initiator approval.
    {{/callout}}
    ![]({{file name='participants-parallel-review-web-ui.png'}} ?w=300,border=true)
7. Click on **Start Review** to let participants give their opinion on the document. <br/>
    The document is locked so that only the workflow initiator can edit the document.<br/>
    On the **Task** tab and on the dashboard, the current task and the previous ones are displayed. All reviewers get a Consultation task in their dashboard and task tab.

### Handling Tasks

Once the workflow has been started, users added on the workflow's roadmap can review the document and approve or reject it.

When users have a task on a document, it displays on their [dashboard]({{page page='browse#dashboard'}}) in the **Tasks** gadget and in the **Task** tab.

![]({{file name='task-menu-web-ui.png'}} ?w=300,border=true)

The participants of a workflow can:

- Edit the document: permissions to the document are temporarily modified by the system to enable the reviewers to edit the document if their permissions didn't allow them to
- Approve the document
- Reject the document

Participants can approve the document when it's their turn, after the previous participant on the workflow has approved it. Participants automatically get Edit permission on the document for the time they have a task to perform on the document, if they had Read permission or no access to the document.

#### Participating in a Serial Document Review

**To approve or reject the document**:

1. Click on the **Task** tab, all your pending tasks are displayed.
    ![]({{file name='task-menu-web-ui.png'}} ?w=300,border=true)
2. Click on the task that you want to process. <br/>
    The document is displayed and a Task resolution section is displayed on the side menu.
3. Depending on your opinion on the document, click on one of the buttons available:
    - **Validate**
      The task is not displayed anymore in the Tasks tab. If you originally had read-only access to the document, you can't edit it anymore. The next participant can now review the document and approve or reject it.
    - **Reject**
      The task is not displayed anymore in the Tasks tab. If you originally had read-only access to the document, you can't edit it anymore. The document is automatically sent back to the previous reviewer on the workflow, so he can edit it and approve it again.
      When the document is rejected by the first reviewer, the document is sent back to the initiator, who can then either modify the document and resubmit it, or cancel the review.
      ![]({{file name='serial-review-web-ui.png'}} ?w=300,border=true)

#### Participating in a Parallel Document Review

After the workflow initiator has started the parallel workflow, two steps need to be completed:

- Reviewers need to provide their opinion on the approval of the document: would they approve the document, reject it, or do they not have an opinion. That's the Consultation step, in which there is no order between the participants.
- The Workflow initiator can then approve or not the document, after seeing the result of the consultation step. That's the Validation step.

**To approve or reject the document**:
1. Click on the **Task** tab, all your pending tasks are displayed.
    ![]({{file name='task-menu-web-ui.png'}} ?w=300,border=true)
2. Click on the task that you want to process. The document is displayed and a Task resolution section is displayed on the side menu.
3. Click on one of the buttons to provide your opinion on the document validation:
    - **Approve**: you agree with the document being approved
    - **Reject**: you think that the document is not ready to be approved
    - **N/A**: you are not concerned by the document or don't have an opinion about its validation

    ![]({{file name='parallel-review-web-ui.png'}} ?w=300,border=true)

Your consultation task is done. The task is removed from your dashboard and your Tasks tab.

**Final Validation of the Document**

When all reviewers have done their consultation task, the document goes back to the initiator of the review so he can see the opinion of the reviewers and approve or reject the document.

![]({{file name='parallel-workflow-final-step_web-ui.png'}} ?w=300,border=true)
