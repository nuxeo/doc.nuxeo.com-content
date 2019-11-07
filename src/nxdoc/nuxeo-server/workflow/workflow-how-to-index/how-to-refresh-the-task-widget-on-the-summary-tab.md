---
title: How to Refresh the Task Widget on the Summary Tab
review:
    comment: ''
    date: '2019-11-07'
    status: ok
details:
    howto:
        excerpt: Learn how to refresh the task widget on the Summary tab.
        level: Advanced
        tool: Studio
        topics: 'Workflow, Widget'
labels:
    - lts2016-ok
    - widget
    - howto
    - workflow
    - workflow-component
    - excerpt
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2015-04-24 09:11'
        message: 'eplace operation User Interface >Refresh with User Interface > Raise Seam event'
        version: '7'
    -
        author: Solen Guitter
        date: '2014-12-01 21:49'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2014-09-09 18:08'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2014-09-09 18:01'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2013-07-17 22:32'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-04-22 11:45'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-04-22 11:42'
        message: ''
        version: '1'

---

If you start workflow automatically using the [Workflow > StartWorkflow](http://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform%20LTS%202016-8.10/viewOperation/Context.StartWorkflow) operation and that your workflow's first node creates a task to the workflow initiator, you need to use in the input chain the **[User Interface > Raise Seam events](http://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform-8.10/viewOperation/Seam.RaiseEvents)** operation, with the value `workflowNewProcessStarted` for the event name.

If you cancel a workflow automatically using the [Workflow > CancelWorkflow](http://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform%20LTS%202016-8.10/viewOperation/WorkflowInstance.Cancel) operation, you need to use in the input chain the **[User Interface > Raise Seam events](http://explorer.nuxeo.com/nuxeo/site/distribution/current/viewOperation/Seam.RaiseEvents)** operation, with the value `WorkflowInstance.Cancel` for the event name.

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
