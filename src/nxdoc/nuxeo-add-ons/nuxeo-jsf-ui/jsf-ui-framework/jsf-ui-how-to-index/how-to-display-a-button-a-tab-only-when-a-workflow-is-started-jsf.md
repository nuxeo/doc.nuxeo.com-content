---
title: 'HOWTO: Display a Button/a Tab Only When a Workflow Is Started - JSF UI'
review:
  comment: ''
  date: '2018-03-27'
  status: ok
toc: true
description: Learn how to display a tab or a button when a workflow is started.
tree_item_index: 1900
labels:
  - lts2017-ok
  - migration
  - jsf-ui
---

{{! excerpt}}

You can use the following custom condition on the user action or the tab filtering conditions, on the field **"Custom EL expression"**:

{{! /excerpt}}

```
#{routingActions.hasRelatedRoute()}
```

---

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [HOWTO: Display a Button/a Tab Only When a Workflow Is Started with Web UI]({{page version='' space='nxdoc' page='how-to-display-a-buttona-tab-only-when-a-workflow-is-started'}})
- [How to Make a Simple Task Assignment to One or Many Users]({{page page='how-to-make-a-simple-task-assignment-to-one-or-many-users'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Workflow in Nuxeo Studio]({{page space='studio' page='workflow'}})
- [Full-Text Queries]({{page page='full-text-queries'}})
- [NXQL]({{page page='nxql'}})
- [Variables Available in the Automation Context]({{page page='variables-available-in-the-automation-context'}})
- [Workflow]({{page page='workflow'}})

{{/panel}}</div></div>
