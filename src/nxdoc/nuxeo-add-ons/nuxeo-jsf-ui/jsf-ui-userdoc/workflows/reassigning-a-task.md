---
title: Reassigning a Task
review:
    comment: ''
    date: '2018-02-20'
    status: ok
notes: Documentation page used on Nuxeo Studio. Check with NOS team before deleting or moving.
labels:
    - lts2016-ok
    - reassign
    - multiexcerpt
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '2392410'
    ajs-parent-page-title: Workflows
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Reassigning+a+Task
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Reassigning+a+Task'
    page_id: '18450389'
    shortlink: 1YcZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/1YcZAQ'
    source_link: /display/USERDOC/Reassigning+a+Task
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2016-09-01 14:20'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2015-03-10 09:27'
        message: ''
        version: '3'
    -
        author: Manon Lumeau
        date: '2014-12-02 18:29'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2014-02-10 16:41'
        message: ''
        version: '1'

---
If you feel that you should not be responsible for a task, you can reassign it. Reassignment should not be confused with [delegation]({{page page='delegating-a-task'}}).

{{! multiexcerpt name='delegate-vs-reassign'}} {{#> callout type='info' heading='Reassignment vs Delegation'}}

When you delegate a task, you remain responsible for the task. You don't lose your rights on the document: you can still process the task if you want to. <br/>
On the contrary when you reassign your task on a document, you lose your rights on the task and on the document. The user you reassign the task to becomes responsible for the task and it is as if you never had to review the document.

{{/callout}}{{! /multiexcerpt}}

You can reassign a task from:

*   The Process view of the tasks in the Home Workflow tab,
*   The Workflow tab of the document.

To reassign a task from **the Home Workflow tab:**

1.  Click on the **Process** button of the task to delegate.
2.  In the **More** menu in the top right corner, click on **Reassign task**.
    ![]({{file name='workflow-home-more-menu.png' page='delegating-a-task'}} ?w=650,h=172,border=true)
    The Reassignment form is displayed in a pop-up.
    ![]({{file name='reassign-popup.png'}} ?w=450,border=true)
3.  In the Users field, type the name of a user or group.
4.  Click on the user or group you want to reassign the task to.
5.  Optionally repeat these steps as many times as you want to reassign the task.
6.  Optionally type a comment for the assignee(s).
7.  Click on the **Reassign** button.
    You are displayed the **My tasks** tab of the **Workflow** tab. The task is not displayed anymore.

**To reassign a task from the document's Workflow tab:**

1.  Click on the **Reassign task** button displayed in the top left corner of the task.
    ![]({{file name='workflow-doc-tab.png' page='delegating-a-task'}} ?w=450,border=true)
    The reassignment form is displayed in a pop-up.
    ![]({{file name='reassign-popup.png'}} ?w=450,border=true)
2.  In the Users field, type the name of a user or group.
3.  Click on the user or group you want to reassign the task to.
4.  Optionally repeat these steps as many times as you want to reassign the task.
5.  Optionally type a comment for the new assignee(s).
6.  Click on the **Reassign** button.
    The Workflow tab of the document is displayed: you have no task anymore.

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Delegating a Task]({{page page='delegating-a-task'}})
- [Workflows]({{page page='workflows'}})

{{/panel}}</div><div class="column medium-6">

</div></div>
