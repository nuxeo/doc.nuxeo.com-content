---
title: How to Save Work in Progress for a Task
review:
    comment: ''
    date: '2019-05-29'
    status: ok
details:
    howto:
        excerpt: Learn how to implement a save work in progress option without completing a workflow task.
        level: Intermediate
        tool: Studio
        topics: 'Workflow, Tasks'
labels:
    - task
    - workflow
    - howto
tree_item_index: 710
hidden: true
---

{{! excerpt}}

One can be interrupted while dealing with a workflow task. This how-to will teach you how to implement an option so that work in progress can be saved, giving more flexibility to users in order to complete it at their own pace.

{{! /excerpt}}

Steps:
- Create a workflow (named importantReview here)
- Add a wf var reviewComment type string, edit it to make it required, save wf
- Add an accept/reject task and link nodes
- Fill in the general info about the task (nothing specific so far)
- Make wf var editable in this task
- Add a new button to save progress and *uncheck validate form* => that's what allows to bypass the required put earlier
- Go to transitions tab to have the transition for that new button automatically created (it's a bug, it won't be there if you don't)
- Save node
- Link saveProgress transition to the same task (that's the goal, you want to go back to that task when you save)
- Save wf
- Configure task layout in Designer

That's it (deploy and use).

Note: users may possibly want to replace the text input (1 line max) with a textarea (made for large text). It's just about changing the <nuxeo-input> element to <nuxeo-textarea> in the layout config after switching to code.

Note: when saving work in progress, it does trigger again the output chain, input chain and the task assigned email.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Modify a Workflow Variable outside of Workflow Context]({{page page='how-to-modify-a-workflow-variable-outside-of-workflow-context'}})
- [How to Set a Default Value on a Date Field of a Task Form]({{page space='nxdoc' page='how-to-set-a-default-value-on-a-date-field-of-a-task-form'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Workflow in Nuxeo Studio]({{page space='studio' page='workflow'}})
- [Variables Available in the Automation Context]({{page page='variables-available-in-the-automation-context'}})
- [Workflow]({{page page='workflow'}})

{{/panel}}</div></div>
