---
title: How to Refresh the Task Widget on the Summary Tab
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: Learn how to refresh the task widget on the Summary tab.
        level: Advanced
        tool: Studio
        topics: 'Workflow, Widget'
labels:
    - workflow
    - lts2015-ok
    - workflow-component
    - widget
    - howto
confluence:
    ajs-parent-page-id: '28475570'
    ajs-parent-page-title: Workflow How-To Index
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: How+to+Refresh+the+Task+Widget+on+the+Summary+Tab
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC710/How+to+Refresh+the+Task+Widget+on+the+Summary+Tab
    page_id: '28475626'
    shortlink: 6oCyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/6oCyAQ'
    source_link: /display/NXDOC710/How+to+Refresh+the+Task+Widget+on+the+Summary+Tab
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2015-04-24 09:11'
        message: >-
            eplace operation User Interface >Refresh with User Interface > Raise
            Seam event
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
{{! excerpt}}

If you start workflow automatically using the&nbsp;[Workflow > StartWorkflow](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewOperation/Context.StartWorkflow)&nbsp;operation and that your workflow's first node creates a task to the workflow initiator, you need to use in the input chain the&nbsp;**[User Interface > Raise Seam events](http://explorer.nuxeo.com/nuxeo/site/distribution/7.10/viewOperation/Seam.RaiseEvents)**&nbsp;operation, with the value "<span style="color: rgb(34,34,34);">`**workflowNewProcessStarted**`" for the event name.</span>

{{! /excerpt}}

&nbsp;

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

*   [undefined]()&nbsp;
*   [How to Modify a Workflow Variable outside of Workflow Context]({{page page='how-to-modify-a-workflow-variable-outside-of-workflow-context'}})
*   [undefined]()&nbsp;
*   [How to Make a Simple Task Assignment to One or Many Users]({{page page='how-to-make-a-simple-task-assignment-to-one-or-many-users'}})&nbsp;
*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Workflow in Nuxeo Studio]({{page space='studio' page='workflow'}})
*   [Full-Text Queries]({{page page='full-text-queries'}})
*   [NXQL]({{page page='nxql'}})
*   [Variables Available in the Automation Context]({{page page='variables-available-in-the-automation-context'}})
*   [Workflow]({{page page='workflow'}})

{{/panel}}</div></div>
