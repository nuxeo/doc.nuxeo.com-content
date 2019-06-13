---
title: Transition
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '3868922'
    ajs-parent-page-title: Nuxeo Glossary
    ajs-space-key: GLOS
    ajs-space-name: Glossary
    canonical: Transition
    canonical_source: 'https://doc.nuxeo.com/display/GLOS/Transition'
    page_id: '16091410'
    shortlink: Eon1
    shortlink_source: 'https://doc.nuxeo.com/x/Eon1'
    source_link: /display/GLOS/Transition
history:
    -
        author: Solen Guitter
        date: '2014-09-23 16:46'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2014-07-15 07:12'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2014-07-14 23:18'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2014-05-13 07:58'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2013-10-21 12:35'
        message: ''
        version: '1'

---
## Transition (Lifecycle)

{{! multiexcerpt name='transition-life-cycle'}}

A transition is what enables a document to go from one state to another in a lifecycle.

{{! /multiexcerpt}}

**Studio documentation about transitions in lifecycle:**

*   [Life cycle]({{page space='studio' page='life-cycle'}})

**Developer documentation about transitions in lifecycle:**

*   [Data Modeling]({{page space='nxdoc' page='data-modeling'}})

## Transition (Workflow)

{{! multiexcerpt name='transition-workflow'}}

In the workflow terminology a transition is what links two nodes in the graph of a workflow model. A transition is always associated to a condition. When there is a transition between nodes n1 and n2, the workflow engine will check if the transition condition is evaluated to true. If yes, it will execute n2 immediately after n1 is processed.

{{! /multiexcerpt}}

**Studio documentation about transitions in workflow:**

*   [Node Transitions Tab]({{page space='studio' page='node-transitions-tab'}}) and more generally [Workflow pages]({{page space='studio' page='workflow'}})
*   [How to Follow a Transition If User Is Member of a Group]({{page space='nxdoc' page='how-to-follow-a-transition-if-user-is-member-of-a-group'}})
*   [Simple Workflow Example]({{page space='nxdoc' page='simple-workflow-example'}})
*   [Workflow Escalation Rules Example]({{page space='nxdoc' page='workflow-escalation-rules-example'}})

**Developer documentation about transitions in workflows:**

*   [Workflow Node Properties]({{page space='nxdoc' page='workflow-node-properties'}}) and more generally [Workflow pages]({{page space='nxdoc' page='workflow'}})
