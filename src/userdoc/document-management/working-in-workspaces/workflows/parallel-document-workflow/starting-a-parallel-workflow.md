---
title: Starting a parallel workflow
review:
    comment: ''
    date: ''
    status: ok
labels:
    - parallel-workflow
confluence:
    ajs-parent-page-id: '16092655'
    ajs-parent-page-title: Parallel Document Workflow
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Starting+a+parallel+workflow
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Starting+a+parallel+workflow'
    page_id: '16092656'
    shortlink: 8I31
    shortlink_source: 'https://doc.nuxeo.com/x/8I31'
    source_link: /display/USERDOC58/Starting+a+parallel+workflow
history:
    - 
        author: Solen Guitter
        date: '2013-10-25 14:39'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-10-25 14:38'
        message: ''
        version: '1'

---
You need to have writing or management rights to start a workflow, either parallel or serial.

To start a parallel workflow, you need to select the workflow type, the reviewers and due date.

**To start a parallel workflow:**

1.  On the **Summary** tab, in the **Workflow process** section, select the parallel review and click on the **Start** button.
    ![]({{file name='parallel-workflow-before-start.png'}} ?w=650,h=231,border=true)
    The form to select the reviewers and start the workflow is displayed on the **Summary** tab. A **Show graph view** button is also available, that displays the workflow route in a pop-up window.
    ![]({{file name='parallel-workflow-choose-participants-task-summary.png'}} ?w=650,border=true)
    A **Workflow** tab is now available on the document from which you can select reviewers, see the graph view but also see the current and previous tasks and [abandon the workflow]({{page space='USERDOC' page='Abandoning a+Workflow'}}).
    ![]({{file name='parallel-workflow-choose-participants-task-workflow-tab.png'}} ?w=650,border=true)
2.  Search and select the users you want to consult for the review:
    1.  In the **Participants on the review**, type the name of a user or a group.

        The users and groups corresponding to the letters typed are displayed.
        ![]({{file name='parallel-workflow-select-participants.png'}} ?w=450,h=320,border=true)

    2.  Click on the user you want to add on the workflow.

    3.  Repeat these two steps to add all the participants to the review.

3.  Type a comment for the reviewers, for instance if you want them to pay attention to a specific section of the document.
4.  Select the due date by when the participants need to have reviewed the document.

    {{#> callout type='tip' }}

    When the due date is passed, the consultation task is automatically closed to all reviewers that haven't provided their opinion on the document and the workflow goes to the next step: the initiator approval.

    {{/callout}}

    ![]({{file name='parallel-workflow-due-date.png'}} ?w=450,h=324,border=true)

5.  Click on the **Start the review** button to let participants give their opinion on the document.
    Only the **Show graph view** button remains on the **Summary** tab. The document is locked so that only the workflow initiator can edit the document.
    ![]({{file name='parallel-workflow-started-summary-tab.png'}} ?w=650,h=236,border=true)

    On the **Workflow** tab, the current task and the previous ones are displayed.

    ![]({{file name='parallel-workflow-started-workflow-tab.png'}} ?w=650,border=true)
    All reviewers get a Consultation task in their Home Workflow tab.