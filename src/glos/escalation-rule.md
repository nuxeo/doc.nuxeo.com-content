---
title: Escalation Rule
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '3868922'
    ajs-parent-page-title: Nuxeo Glossary
    ajs-space-key: GLOS
    ajs-space-name: Glossary
    canonical: Escalation+Rule
    canonical_source: 'https://doc.nuxeo.com/display/GLOS/Escalation+Rule'
    page_id: '24052460'
    shortlink: 7AJvAQ
    shortlink_source: 'https://doc.nuxeo.com/x/7AJvAQ'
    source_link: /display/GLOS/Escalation+Rule
history:
    - 
        author: Solen Guitter
        date: '2015-04-15 09:06'
        message: ''
        version: '1'

---
## Escalation Rule (Workflow)

{{! multiexcerpt name='escalation-rule-workflow'}}

An escalation rule is a rule that allows the execution of an [automation chain]({{page space='NXDOC' page='Content Automation+Concepts'}}) depending on a condition. A scheduler checks the condition regularly and executes the chain if the condition is evaluated to true. Escalation rules only apply to nodes awaiting for a user action to be executed.

{{! /multiexcerpt}}

**Studio Documentation about escalation rules**

*   [Node Escalation Rules Tab]({{page space='studio' page='node-escalation-rules-tab'}})

**Developer Documentation about escalation rules**

*   [Escalation Service]({{page space='nxdoc' page='escalation-service'}})
*   [Workflow Escalation Rules Example]({{page space='nxdoc' page='workflow-escalation-rules-example'}})