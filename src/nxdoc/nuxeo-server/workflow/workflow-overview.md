---
title: Workflow Overview
labels:
    - workflow
    - workflow-component
    - lts2015-ok
    - excerpt
    - multiexcerpt
confluence:
    ajs-parent-page-id: '12913723'
    ajs-parent-page-title: Workflow
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Workflow+Overview
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Workflow+Overview'
    page_id: '20515356'
    shortlink: HAo5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/HAo5AQ'
    source_link: /display/NXDOC/Workflow+Overview
history:
    - 
        author: Manon Lumeau
        date: '2014-09-19 10:53'
        message: ''
        version: '2'
    - 
        author: Manon Lumeau
        date: '2014-09-19 10:53'
        message: ''
        version: '1'

---
{{! excerpt}}

This page and its subpages explain all the concepts and provide a documentation on how the workflow engine works.

{{! /excerpt}}{{! multiexcerpt name='WorkflowIntroduction'}}

The Nuxeo Platform embeds a powerful workflow engine technically called "Content Routing". This workflow engine provides usual features you would expect from a workflow engine and leverages the main modules of the platform: Repository, Automation service, layouts for all the user interaction and process implementation. You need to understand correctly those concepts before playing with the workflow engine.&nbsp;

A workflow <span class="st">is conceptually defined</span> using a graph. Workflow graphs are&nbsp;[configured from Nuxeo Studio]({{page space='studio' page='workflow'}}).

The workflow engine provides means to implement most of BPMN concepts: Fork, merge, decision, branching point, exclusive, inclusive, looping, human tasks, services tasks, multiple instances, events, data objects, subprocess, join. Note that those standard concepts are not all exposed as is on the graph editor, but can still be implemented leveraging what is provided.

The workflow engine provides high level features regarding task management such as filterable tasks lists, reminders, task reassignment, task delegation, task reminders.

Task and workflow REST endpoints are coming soon, stay tuned.

{{#> callout type='info' }}

You can use this workflow engine for case management projects, for form digitization, complex documents validation, signature and publishing processes and more!

{{/callout}}{{! /multiexcerpt}}