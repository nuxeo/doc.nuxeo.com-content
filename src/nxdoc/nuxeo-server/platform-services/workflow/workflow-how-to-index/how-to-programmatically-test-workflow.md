---
title: 'HOWTO: Programmatically test a workflow'
review:
    comment: ''
    date: '2019-06-11'
    status: ok
details:
    howto:
        excerpt: 'Learn how to programmatically test a workflow.'
        level: Advanced
        tool: Studio, Node.js
        topics: 'Workflow, Tasks, Test'
labels:
    - task
    - workflow
    - test
    - howto
toc: true
tree_item_index: 710
---

{{! excerpt}}
When you are implementing a long multi-step workflow, debugging the last step actually requires that you've reached it, which takes more and more time as your workflow gets longer. Time is precious and this page will provide you with tips to save it!
{{! /excerpt}}

The Workflow engine of the Nuxeo Platform is a great tool to automate content processes. Complex routing logic can easily be configured, which can lead to a very high number of possible scenarios.
Adding the Automation framework and notification templating to the mix and one will quickly end up in workflow configuration hell: an exponential number of things to test.

Imagine you have a workflow with 10 different steps and the last one is failing. Manually testing is definitely the painful way of doing things and will challenge one's sanity.
Fortunately, with the Nuxeo Platform, there is an API for everything, which means a lot can simply be automated.

To solve this problem, Nuxeo's Solution Engineering team has built [a simple node.js tool](https://github.com/nuxeo-sandbox/nuxeo-workflow-test) that simulates the REST API calls done by the Web UI when users complete workflow tasks.

Scenarios are described in a JSON file which includes the following elements:
- the workflow input document
- the workflow to start
- an array of workflow actions to complete with the following parameters: a role, the action to simulate and the task variable values

Roles are also described in a JSON file such that one scenario can be run with different sets of actual users.

While this tool is not meant to replace more comprehensive test frameworks used in a real-life implementation project, its very short learning curve enables Nuxeo Studio users to automate workflow tests during development quickly.

The GitHub repository contains a comprehensive [README](https://github.com/nuxeo-sandbox/nuxeo-workflow-test/blob/master/README.md) as well as two sample test scenarios for the two default workflows:
 - [Serial Workflow](https://github.com/nuxeo-sandbox/nuxeo-workflow-test/blob/master/config.json)
 - [Parallel Workflow](https://github.com/nuxeo-sandbox/nuxeo-workflow-test/blob/master/config-parallel-document-review.json)

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [HOWTO: Modify a Workflow Variable outside of Workflow Context]({{page page='how-to-modify-a-workflow-variable-outside-of-workflow-context'}})
- [HOWTO: Set a Default Value on a Date Field of a Task Form]({{page space='nxdoc' page='how-to-set-a-default-value-on-a-date-field-of-a-task-form'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Workflow in Nuxeo Studio]({{page space='studio' page='workflow'}})
- [Variables Available in the Automation Context]({{page page='variables-available-in-the-automation-context'}})
- [Workflow]({{page page='workflow'}})

{{/panel}}</div></div>
