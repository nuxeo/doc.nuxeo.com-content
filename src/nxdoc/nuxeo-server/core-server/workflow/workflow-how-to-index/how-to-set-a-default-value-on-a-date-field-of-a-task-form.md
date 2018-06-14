---
title: How to Set a Default Value on a Date Field of a Task Form
review:
    comment: ''
    date: '2017-12-14'
    status: ok
details:
    howto:
        excerpt: Learn how to set a value by default on a date field.
        level: Advanced
        tool: Studio
        topics: Workflow
labels:
    - lts2016-ok
    - workflow
    - grenard
    - howto
    - excerpt
    - lts2017-ok
confluence:
    ajs-parent-page-id: '19235619'
    ajs-parent-page-title: Workflow How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Set+a+Default+Value+on+a+Date+Field+of+a+Task+Form
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Set+a+Default+Value+on+a+Date+Field+of+a+Task+Form'
    page_id: '12913517'
    shortlink: bQvF
    shortlink_source: 'https://doc.nuxeo.com/x/bQvF'
    source_link: /display/NXDOC/How+to+Set+a+Default+Value+on+a+Date+Field+of+a+Task+Form
tree_item_index: 700
history:
    -
        author: Solen Guitter
        date: '2014-12-01 21:49'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2014-09-09 18:07'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2014-09-09 18:07'
        message: ''
        version: '4'
    -
        author: Thibaud Arguillere
        date: '2013-11-15 21:11'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2013-07-17 22:40'
        message: Added excerpt
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-01-31 10:44'
        message: ''
        version: '1'

---
Let's say we have a workflow variable in a workflow whose name is `due_date`. In the first node of the workflow, a task asks the workflow initiator to fill-in the participants. He/She also has to set the due date, but a value is already suggested: The current date plus seven days.

{{! excerpt}}

While desinging your workflow in [Nuxeo Studio]({{page space='studio' page='workflow'}}), in order to pre-set the `due_date` value, you can use an `input automation chain` on the node (`General` tab of the `Node Properties` dialog). In this automation chain, you use the `Workflow Context>Set Workflow Variable`.

{{! /excerpt}}

Fill in the following parameters:

*   name: `due_date`
*   value: `@{CurrentDate.days(7).date}`

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Modify a Workflow Variable outside of Workflow Context]({{page page='how-to-modify-a-workflow-variable-outside-of-workflow-context'}})
- [How to Make a Simple Task Assignment to One or Many Users]({{page page='how-to-make-a-simple-task-assignment-to-one-or-many-users'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Workflow in Nuxeo Studio]({{page space='studio' page='workflow'}})
- [Full-Text Queries]({{page page='full-text-queries'}})
- [NXQL]({{page page='nxql'}})
- [Variables Available in the Automation Context]({{page page='variables-available-in-the-automation-context'}})
- [Workflow]({{page page='workflow'}})

{{/panel}}</div></div>
