---
title: Tasks
review:
    comment: ''
    date: '2020-06-08'
    status: ok
labels:
    - workflow
    - content-review-lts2017
tree_item_index: 800
description: Web UI User Documentation about Workflows
next_link: /userdoc/document-workflow
---
All the documents evolve according to a defined lifecycle. The default lifecycle is composed of the following states: Project, Approved and Obsolete. There are different ways to make documents evolve through this lifecycle. One of them is to use a workflow.

Users involved in workflows are alerted by email and can have a synthetic view of all their pending tasks on documents in their [dashboard]({{page page='browse'}}#dashboard) or on the **Task** tab. The documents they have to review are listed there.

{{{multiexcerpt 'default-validation-workflows' space='nxdoc' page='workflow'}}}

A task represents what a workflow instance expects from a user or a group of users. Usually they are expected to give some information through a form and click on a button (like Accept, Reject, Confirm, Notify, Transform, etc.). A task usually has one or several assignees, a title, a directive and an expected date of achievement. The task assignees can be specified directly in the task definition or can be dynamically computed. If a task is assigned to you but you won't be able to perform it, you can [delegate the task]({{page page='delegating-task'}}) or [reassign it]({{page page='reassigning-task'}}).
