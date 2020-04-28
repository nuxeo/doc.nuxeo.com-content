---
title: Workflow
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - workflow
    - grenard
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '31033314'
    ajs-parent-page-title: Nuxeo Server
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Workflow
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Workflow'
    page_id: '12913723'
    shortlink: OwzF
    shortlink_source: 'https://doc.nuxeo.com/x/OwzF'
    source_link: /display/NXDOC/Workflow
tree_item_index: 30
history:
    -
        author: Manon Lumeau
        date: '2016-08-17 11:47'
        message: ''
        version: '34'
    -
        author: Manon Lumeau
        date: '2016-06-09 16:35'
        message: ''
        version: '33'
    -
        author: Manon Lumeau
        date: '2016-04-28 09:40'
        message: 'Fix Studio menu label     '
        version: '32'
    -
        author: Manon Lumeau
        date: '2016-04-28 09:30'
        message: 'Fix Studio menu label     '
        version: '31'
    -
        author: Solen Guitter
        date: '2015-08-27 13:21'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2015-08-27 13:17'
        message: ''
        version: '29'
    -
        author: Manon Lumeau
        date: '2015-06-04 08:45'
        message: ''
        version: '28'
    -
        author: Solen Guitter
        date: '2015-06-04 08:37'
        message: ''
        version: '27'
    -
        author: Manon Lumeau
        date: '2015-06-03 12:53'
        message: ''
        version: '26'
    -
        author: Manon Lumeau
        date: '2015-06-03 09:38'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2015-06-03 09:24'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2015-01-19 09:37'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2014-09-23 11:27'
        message: ''
        version: '22'
    -
        author: Alain Escaffre
        date: '2014-09-23 00:29'
        message: ''
        version: '21'
    -
        author: Alain Escaffre
        date: '2014-09-23 00:24'
        message: ''
        version: '20'
    -
        author: Manon Lumeau
        date: '2014-09-19 14:14'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2014-09-19 12:34'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2014-09-19 10:50'
        message: ''
        version: '17'
    -
        author: Mariana Cedica
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
## Concept

The Nuxeo workflow engine provides the usual features you would expect from a workflow engine and leverages the main modules of the platform: the repository, the Automation service, layouts for all the user interactions and process implementations. It provides high level features regarding task management such as filterable tasks lists, reminders, task reassignment, task delegation, task reminders. You need to understand correctly those concepts before playing with the workflow engine.

A workflow is conceptually defined using a graph. Workflow graphs are [configured from Nuxeo Studio]({{page space='Studio' page='Workflow'}}).

The workflow engine provides means to implement most of BPMN concepts: Fork, merge, decision, branching point, exclusiveness, inclusiveness, looping, human tasks, services tasks, multiple instances, events, data objects, subprocess, join. Note that those standard concepts are not all exposed as is on the graph editor, but can still be implemented leveraging what is provided.

**Understanding Workflow:**

*   [Useful Definitions]({{page page='useful-definitions'}})
*   [Simple Workflow Example]({{page page='simple-workflow-example'}}) (tutorial)
*   [How to Assign a Workflow Task to a User Depending on a Metadata]({{page page='validation-workflow-choosing-the-assignee-based-on-a-metadata'}}) (tutorial)

## Default Available Workflows

{{! multiexcerpt name='default-validation-workflows'}}

The Nuxeo Platform offers two default workflows that showcase the possibilities of the Workflow.

* {{{excerpt 'USERDOC:Serial Document Workflow'}}}
* {{{excerpt 'USERDOC:Parallel Document Workflow'}}}

{{! /multiexcerpt}}

They are also available as an application template in Nuxeo Studio so as to enable you to see how they are configured. This application template is called **Default Nuxeo Platform Workflows Configuration**.

![]({{file name='Screenshot 2015-06-02 11.27.17.png'}} ?w=600,border=true)

It is possible to import this package from your Studio project : Go to **Configuration** > **External Templates** > **Default** **Nuxeo Platform Workflows Configuration** and click on **Import**.

See the pages [Serial Document Workflow]({{page space='userdoc' page='serial-document-workflow'}}) and [Parallel Document Workflow]({{page space='userdoc' page='parallel-document-workflow'}}) for more details about showcased default workflows.

## Configuring a New Workflow

To create a new workflow, simply go to the workflow section of Studio, click **New** and choose a name.

![]({{file name='Screenshot 2015-06-02 12.04.21.png'}} ?w=650,border=true)

A workflow can be configured through four tabs:

*   **Definition**: Where you select the name and label of the workflow.
*   **Variables**: Where you can manage the Workflow variables that will be used through-out the different steps of the workflow, like comments, user inputs...
*   **Availability**: Where you define the filter to enable or not the workflow.
*   **Graph**: Where you define all the workflow steps and their transitions. This is the most important tab.
    After you create your workflow, it's normal you get validation error, pending the creation of the graph.

### Starting the Workflow

A workflow must start with a node for which the "start node" property is checked and have at least one end node with the "end node" property checked. To make it simpler, Studio provides a node template library (on the left), from which a Start node and an Stop node are available.

To start the workflow graph:

1.  Click on the **Graph** tab.
2.  Drag the Start node and drop it on the graph.
    ![](https://www.lucidchart.com/publicSegments/view/54ede03e-bcb8-4715-a9f3-1f500a008a99/image.png ?w=250,border=true)
3.  Repeat this operation for every node and transition that you need to create your own workflow. Click on one node to open the editor to edit its properties and add possible transitions. Each possible transition is represented as an endpoint on the node.

**Working with Workflow:**

* [Workflow Variables]({{page page='variables-available-in-the-automation-context'}})
* [Instance Properties -]({{page page='workflow-instance-properties'}}) [Workflow Node Properties]({{page page='workflow-node-properties'}})
* [Node General Tab in Studio Documentation]({{page space='studio' page='node-general-tab'}})
* [Workflow Naming Conventions]({{page page='workflow-naming-conventions'}})

## Discover More

To go further, read the page [Simple Workflow Example]({{page page='simple-workflow-example'}}), and follow the creation of a workflow step by step with a specific use case.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Workflow How-Tos'}}

- [How to Query Workflow Objects]({{page page='how-to-query-workflow-objects'}})
- [How to Complete a Workflow Task Programmatically]({{page page='how-to-complete-a-workflow-task-programmatically'}})
- [How to Set Up a Tasks Dashboard]({{page page='how-to-set-up-a-tasks-dashboard'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading=' Advanced Features and Understanding'}}

- [Escalation Service]({{page page='escalation-service'}})
- [Workflow Models Packaging]({{page page='workflow-models-packaging'}})
- [Runtime Instantiation & Execution Logic]({{page page='runtime-instantiation-and-execution-logic'}})

{{/panel}}</div></div>
