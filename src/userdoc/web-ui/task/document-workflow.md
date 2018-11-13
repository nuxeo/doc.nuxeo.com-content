---
title: Starting a Workflow on a Document
review:
    comment: ''
    date: '2018-11-12'
    status: ok
labels:
    - workflow
toc: true
tree_item_index: 100
description: Web UI User Documentation about Workflows

---
You need to have editing or management permissions to start a workflow on a document.

{{{multiexcerpt 'tasks-assigned-to-group' page='Serial Document Workflow'}}}

## Serial Document Review

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
6. Click on **Start review** once everything is ready, to let participants approve or reject the document.
![]({{file name='participants-review-web-ui.png'}} ?w=300,border=true)

## Parallel Document Review

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
