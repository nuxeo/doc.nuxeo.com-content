---
title: How to Follow a Transition If User Is Member of a Group
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: >-
            Learn how to follow a transition if the user is member of a
            particular group.
        level: Advanced
        tool: Studio
        topics: 'Workflow, Transition'
labels:
    - howto
    - workflow
    - studio
    - transition
confluence:
    ajs-parent-page-id: '22380626'
    ajs-parent-page-title: Workflow How-To Index
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: How+to+Follow+a+Transition+If+User+Is+Member+of+a+Group
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/How+to+Follow+a+Transition+If+User+Is+Member+of+a+Group
    page_id: '22380856'
    shortlink: OIFVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/OIFVAQ'
    source_link: /display/NXDOC60/How+to+Follow+a+Transition+If+User+Is+Member+of+a+Group
tree_item_index: 800
history:
    -
        author: Solen Guitter
        date: '2014-12-01 21:51'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-09-10 10:44'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-09-10 10:44'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2014-09-09 18:16'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2014-09-09 18:14'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2013-08-26 16:03'
        message: ''
        version: '3'
    -
        author: Frédéric Vadon
        date: '2013-08-12 10:42'
        message: ''
        version: '2'
    -
        author: Frédéric Vadon
        date: '2013-08-12 10:41'
        message: ''
        version: '1'

---
{{! excerpt}}

In workflows, you may want to have several paths on the workflow depending on the group of the user who launched to workflow.

{{! /excerpt}}

The solution is to add the following test in the conditions of the transitions of a node:&nbsp;

```
Fn.getPrincipal(workflowInitiator).isMemberOf("managers")

```

This expression will be true if the workflowInitiator is a member of the managers group. Replace the group by the one you need and "workflowInitiator" by any other user you would need. If you need to filter on the current user, you can use `CurrentUser.originatingUser` as stated in the page [Variables Available in the Automation Context]({{page page='variables-available-in-the-automation-context'}}).

&nbsp;

* * *

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
