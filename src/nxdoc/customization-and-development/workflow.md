---
title: Workflow
confluence:
    ajs-parent-page-id: '17334392'
    ajs-parent-page-title: Customization and Development
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Workflow
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Workflow'
    page_id: '17334313'
    shortlink: KYAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/KYAIAQ'
    source_link: /display/NXDOC58/Workflow
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 15:23'
        message: 'emove children display macro  '
        version: '17'
    - 
        author: Anonymous
        date: '2013-10-30 12:25'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-10-28 10:46'
        message: ''
        version: '15'
    - 
        author: Alain Escaffre
        date: '2013-10-27 14:58'
        message: ''
        version: '14'
    - 
        author: Alain Escaffre
        date: '2013-10-27 14:57'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-10-21 11:02'
        message: Added children pages
        version: '12'
    - 
        author: Alain Escaffre
        date: '2013-10-18 14:15'
        message: ''
        version: '11'
    - 
        author: Alain Escaffre
        date: '2013-10-18 14:15'
        message: ''
        version: '10'
    - 
        author: Alain Escaffre
        date: '2013-10-18 14:09'
        message: ''
        version: '9'
    - 
        author: Alain Escaffre
        date: '2013-10-18 14:09'
        message: ''
        version: '8'
    - 
        author: Alain Escaffre
        date: '2013-10-18 14:08'
        message: ''
        version: '7'
    - 
        author: Alain Escaffre
        date: '2013-10-18 14:04'
        message: ''
        version: '6'
    - 
        author: Alain Escaffre
        date: '2013-10-18 14:01'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-09-06 16:45'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-07-18 14:57'
        message: ''
        version: '3'
    - 
        author: Mariana Cedica
        date: '2013-06-21 10:53'
        message: ''
        version: '2'
    - 
        author: Mariana Cedica
        date: '2013-02-08 16:29'
        message: ''
        version: '1'

---
<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{! excerpt}}

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

&nbsp;

&nbsp;

&nbsp;

</div><div class="column medium-6">

**Section's content:**

*   [Models Packaging]({{page space='NXDOC58' page='Models Packaging'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This page deals with how a workflow model is created on a Nuxeo instance. Note that when using Nuxeo Studio, everything is done transparently. The goal of this page is to let you understand what Studio generates in the JAR when you use the Studio feature and how the workflow is created and persisted when deploying the Studio project.</span>
*   [Runtime Instantiation & Execution Logic](https://doc.nuxeo.com/pages/viewpage.action?pageId=17334295)&nbsp;&mdash;&nbsp;<span class="smalltext">This page gives you technical details about the execution of workflow.</span>
*   [Instance Properties]({{page space='NXDOC58' page='Instance Properties'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This page describes information that is persisted on a workflow instance.</span>
*   [Node Properties]({{page space='NXDOC58' page='Node Properties'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This page lists all the properties of a node. A workflow instance is made of several nodes linked by some transitions.</span>
*   [Escalation Service]({{page space='NXDOC58' page='Escalation Service'}})&nbsp;&mdash;&nbsp;<span class="smalltext">The Nuxeo workflow engine comes with an escalation service useful for having some automated evolution in the workflow graph.&nbsp;</span>
*   [About Tasks]({{page space='NXDOC58' page='About Tasks'}})&nbsp;&mdash;&nbsp;<span class="smalltext">You'll find here what you need to know about tasks that are created via the workflow service.</span>
*   [Workflow APIs]({{page space='NXDOC58' page='Workflow APIs'}})&nbsp;&mdash;&nbsp;<span class="smalltext">We list here all the useful available workflow APIs if you want to programmatically change a workflow instance.</span>
*   [Variables Available in the Automation Context]({{page space='NXDOC58' page='Variables Available+in+the+Automation+Context'}})
*   [Workflow Naming Conventions]({{page space='NXDOC58' page='Workflow Naming+Conventions'}})&nbsp;&mdash;&nbsp;<span class="smalltext">We provide in this page a few rules for facilitating maintenance of your workflow models.</span>
*   [Useful Definitions]({{page space='NXDOC58' page='Useful Definitions'}})&nbsp;&mdash;&nbsp;<span class="smalltext">The main concepts that are used to design a workflow are listed below:</span>
*   [How to Refresh the Task Widget on the Summary Tab]({{page space='NXDOC58' page='How to+Refresh+the+Task+Widget+on+the+Summary+Tab'}})&nbsp;&mdash;&nbsp;<span class="smalltext">If you start workflow automatically using the&nbsp;Workflow > StartWorkflow&nbsp;operation and that your workflow's first node creates a task to the workflow initiator, you need to use in the input chain the&nbsp;User Interface > Refresh&nbsp;operation, with the value "workflowNewProcessStarted" for the event name.</span>

</div></div>