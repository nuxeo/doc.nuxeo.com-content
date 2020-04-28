---
title: Delegating a Task
review:
    comment: ''
    date: '2019-10-18'
    status: ok
labels:
    - lts2016-ok
    - delegation
    - multiexcerpt-include
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '2392410'
    ajs-parent-page-title: Workflows
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Delegating+a+Task
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Delegating+a+Task'
    page_id: '16092383'
    shortlink: 34z1
    shortlink_source: 'https://doc.nuxeo.com/x/34z1'
    source_link: /display/USERDOC/Delegating+a+Task
tree_item_index: 300
history:
    -
        author: Manon Lumeau
        date: '2014-12-02 18:22'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-02-10 16:43'
        message: Added Reassign vs Delegate info
        version: '4'
    -
        author: Solen Guitter
        date: '2014-02-10 15:20'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2014-02-10 15:20'
        message: Added screenshots
        version: '2'
    -
        author: Solen Guitter
        date: '2013-11-03 15:59'
        message: ''
        version: '1'
---

{{{multiexcerpt 'DeprecatedAddon_10.10' page='generic-multi-excerpts'}}}

<span style="color: rgb(51,51,51);">When you know you might not be able to perform a task, you can delegate it to another user or group of users. Delegating means that they can do the task at your place, but you are not unassigned the task. As soon as you or a delegatee reviews the document, the task is closed for you and all the delegatees. On the contrary, if you do the task before the delegatees, the task is considered done for everyone.</span>

{{{multiexcerpt 'delegate-vs-reassign' page='Reassigning a Task'}}}

You can delegate a task from:

*   The Process view of the tasks in the Home Workflow tab,
*   The Workflow tab of the document.

**To delegate the task from the Home Workflow tab:**

1.  Click on the **Process** button of the task to delegate.
2.  Click on **Delegate task.**
    ![]({{file name='workflow-home-more-menu.png'}} ?w=650,border=true)
    The delegation form is displayed in a pop-up.
    ![]({{file name='delegation-form.png'}} ?w=450,border=true)
3.  In the Users field, type the name of a user or group.
4.  Click on the user or group you want to delegate the task to.
5.  Optionally repeat these steps as many times as you want to delegate the task.
6.  Optionally type a comment for the delegatees.
7.  Click on the **Delegate** button.
    You are displayed the **My tasks** tab of the **Workflow** tab.
    If you click on the task **Process** button, you can see the list of delegatees displayed on the task.

**To delegate a task from the document's Workflow tab:**

1.  Click on the **Delegate task** button displayed in the top left corner of the task.
    ![]({{file name='workflow-doc-tab.png'}} ?w=450,border=true)
2.  The delegation form is displayed in a pop-up.
    ![]({{file name='delegation-form.png'}} ?w=450,border=true)
3.  In the Users field, type the name of a user or group.
4.  Click on the user or group you want to delegate the task to.
5.  Optionally repeat these steps as many times as you want to delegate the task.
6.  Optionally type a comment for the delegatees.
7.  Click on the **Delegate** button.
    The Workflow tab of the document is displayed. The list of delegatees is displayed on the task.
