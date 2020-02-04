---
title: Task
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '3868922'
    ajs-parent-page-title: Nuxeo Glossary
    ajs-space-key: GLOS
    ajs-space-name: Glossary
    canonical: Task
    canonical_source: 'https://doc.nuxeo.com/display/GLOS/Task'
    page_id: '16091417'
    shortlink: GYn1
    shortlink_source: 'https://doc.nuxeo.com/x/GYn1'
    source_link: /display/GLOS/Task
history:
    -
        author: Solen Guitter
        date: '2014-09-23 17:07'
        message: ''
        version: '4'
    -
        author: Manon Lumeau
        date: '2014-07-23 18:21'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2014-07-14 23:21'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2013-10-21 13:14'
        message: ''
        version: '1'

---
## Task (Workflow)

{{! multiexcerpt name='task-workflow'}}

A task is a persisted object that represents what a workflow instance expects from a user or a group of users. They are expected to give some information through a form and click on a button (like Accept, Reject, Confirm, Notify, Transform, etc.). A task usually has one or several assignees, a title, a directive and an expected date of achievement. A task is either to be done or done. A task is created by a node for which the property of task creation has been activated. The task assignees can be specified directly in the task definition or can be dynamically computed.

{{! /multiexcerpt}}

**Related pages:**

*   [Task in developer documentation](http://doc.nuxeo.com/x/OwzF)
*   Task in Studio documentation

**Studio documentation about tasks:**

*   [Workflow]({{page space='studio' page='workflow'}}) pages
*   [Simple Workflow Example]({{page space='nxdoc' page='simple-workflow-example'}})
*   [How to Set Up a Tasks Dashboard]({{page space='nxdoc' page='how-to-set-up-a-tasks-dashboard'}})
*   [Create a task assignment alert]({{page space='nxdoc' page='create-a-task-assignment-alert'}})
*   [How to Make a Simple Task Assignment to One or Many Users]({{page space='nxdoc' page='how-to-make-a-simple-task-assignment-to-one-or-many-users'}})

**Developer documentation about tasks:**

*   [About Tasks]({{page space='nxdoc' page='about-tasks'}}) and more generally [Workflow pages]({{page space='nxdoc' page='workflow'}})
*   [How to complete a workflow task programmatically]({{page space='nxdoc56' page='how-to-complete-a-workflow-task-programmatically'}})
*   [Workflow APIs]({{page space='nxdoc' page='workflow-apis'}})
