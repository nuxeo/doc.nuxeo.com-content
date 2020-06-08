---
title: Participating to a workflow
review:
    comment: ''
    date: '2020-06-08'
    status: ok
labels:
    - workflow
    - content-review-lts2017
toc: true
tree_item_index: 200
description: Web UI User Documentation about Tasks
---
Once a workflow has been started, users added on the workflow can review the document and approve or reject it.

When users have a task on a document, it displays on their [dashboard]({{page page='browse'}}#dashboard) in the **Tasks** gadget and in the **Task** tab.

![]({{file name='task-menu-web-ui.png'}} ?w=300,border=true)

The participants of a workflow can:

- Edit the document: permissions to the document are temporarily modified by the system to enable the reviewers to edit the document if their permissions didn't allow them to
- Approve the document
- Reject the document

Participants can approve the document when it's their turn, after the previous participant on the workflow has approved it. Participants automatically get Edit permission on the document for the time they have a task to perform on the document, if they had Read permission or no access to the document.

## Participating to a Serial Document Review

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

## Participating to a Parallel Document Review

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

Your review task is done. The task is removed from your dashboard and your Tasks tab.

### Final Validation of the Document

When all reviewers have done their consultation task, the document goes back to the initiator of the review so he can see the opinion of the reviewers and approve or reject the document.

![]({{file name='parallel-workflow-final-step_web-ui.png'}} ?w=300,border=true)
