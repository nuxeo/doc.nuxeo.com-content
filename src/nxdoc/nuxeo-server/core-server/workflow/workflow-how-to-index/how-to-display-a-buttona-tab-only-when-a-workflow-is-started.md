---
title: 'HOWTO: Display a Button/a Tab Only When a Workflow Is Started'
review:
  comment: ''
  date: '2017-12-14'
  status: ok
details:
  howto:
    excerpt: Learn how to display a tab or a button when a workflow is started.
    level: Intermediate
    tool: Studio
    topics: Workflow
labels:
  - content-review-lts2016
  - workflow
  - grenard
  - routing
  - scripting
  - howto
  - studio
  - excerpt
  - lts2017-ok
confluence:
  ajs-parent-page-id: '19235619'
  ajs-parent-page-title: Workflow How-To Index
  ajs-space-key: NXDOC
  ajs-space-name: Nuxeo Platform Developer Documentation
  canonical: viewpage.action?pageId=12912851
  canonical_source: viewpage.action?pageId=12912851
  page_id: '12912851'
  shortlink: 0wjF
  shortlink_source: 'https://doc.nuxeo.com/x/0wjF'
  source_link: /pages/viewpage.action?pageId=12912851
tree_item_index: 600
history:
  - author: Vincent Dutat
    date: '2016-01-06 21:17'
    message: ''
    version: '10'
  - author: Solen Guitter
    date: '2015-02-03 09:16'
    message: ''
    version: '9'
  - author: Solen Guitter
    date: '2014-12-01 21:50'
    message: ''
    version: '8'
  - author: Manon Lumeau
    date: '2014-09-09 18:09'
    message: ''
    version: '7'
  - author: Manon Lumeau
    date: '2014-09-09 18:04'
    message: ''
    version: '6'
  - author: Frédéric Vadon
    date: '2013-08-01 07:51'
    message: ''
    version: '5'
  - author: Solen Guitter
    date: '2013-07-17 22:33'
    message: Added excerpt
    version: '4'
  - author: Alain Escaffre
    date: '2013-01-04 21:28'
    message: ''
    version: '3'
  - author: Alain Escaffre
    date: '2013-01-04 20:28'
    message: ''
    version: '2'
  - author: Alain Escaffre
    date: '2013-01-04 17:33'
    message: ''
    version: '1'
---

## Web UI

When fetching a document through the [Rest API]({{page page='rest-api'}}), you can use the [runningWorkflows enricher]({{page page='content-enrichers#runningWorkflows'}}) and check that `document.contextParameters.runningWorkflows` is not empty to conditionally display a [Tab]({{page page='how-to-new-tab'}}) or an [Action]({{page page='how-to-insert-user-action'}}).

---

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
