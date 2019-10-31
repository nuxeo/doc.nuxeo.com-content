---
title: Using Workflows
review:
    comment: ''
    date: '2019-10-31'
    status: ok
toc: true
labels:
    - lts2016-ok
    - lts2017-ok
    - lts2019-ok
    - notassigned
    - university
confluence:
    ajs-parent-page-id: '29460589'
    ajs-parent-page-title: Getting Started with the Nuxeo Platform
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Using+Workflows
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Using+Workflows'
    page_id: '31687900'
    shortlink: 3ITjAQ
    shortlink_source: 'https://doc.nuxeo.com/x/3ITjAQ'
    source_link: /display/NXDOC/Using+Workflows
tree_item_index: 800
history:
    -
        author: Solen Guitter
        date: '2016-10-05 15:13'
        message: ''
        version: '25'
    -
        author: Bertrand Chauvin
        date: '2016-10-05 13:07'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2016-10-05 11:58'
        message: ''
        version: '23'
    -
        author: Arnaud Kervern
        date: '2016-09-21 20:36'
        message: ''
        version: '22'
    -
        author: Arnaud Kervern
        date: '2016-09-21 20:35'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2016-09-21 12:36'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2016-09-20 15:30'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2016-09-20 15:03'
        message: fix handleManagerWorkflowTasks.js
        version: '18'
    -
        author: Bertrand Chauvin
        date: '2016-09-20 15:01'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2016-09-20 15:00'
        message: Fix handleUserWorkflowTasks.js
        version: '16'
    -
        author: Arnaud Kervern
        date: '2016-09-07 09:47'
        message: ''
        version: '15'
    -
        author: Arnaud Kervern
        date: '2016-09-07 09:37'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2016-09-02 15:55'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2016-08-17 12:40'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2016-08-17 11:11'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2016-08-17 08:20'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2016-08-17 08:19'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2016-08-17 08:18'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2016-08-16 15:18'
        message: ''
        version: '7'
    -
        author: Bertrand Chauvin
        date: '2016-08-10 08:49'
        message: ''
        version: '6'
    -
        author: Bertrand Chauvin
        date: '2016-08-05 13:25'
        message: ''
        version: '5'
    -
        author: Bertrand Chauvin
        date: '2016-08-05 12:59'
        message: ''
        version: '4'
    -
        author: Bertrand Chauvin
        date: '2016-08-05 12:10'
        message: ''
        version: '3'
    -
        author: Bertrand Chauvin
        date: '2016-08-05 11:55'
        message: ''
        version: '2'
    -
        author: Bertrand Chauvin
        date: '2016-08-04 08:21'
        message: ''
        version: '1'
previous_link: /nxdoc/using-renditions
next_link: /nxdoc/using-automation

---

{{! excerpt}}
Learn how to manage a contract validation workflow using the REST API. Log in as different users to see the whole process and process tasks.
{{! /excerpt}}


{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Course on the Nuxeo Workflow Engine](https://university.nuxeo.com/learn/public/course/view/elearning/39/WorkflowEngine)
- [Course on the REST API](https://university.nuxeo.com/learn/public/course/view/elearning/66/rest-api)
![]({{file name='university-restapi.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

The contract validation workflow follows the following steps:

1.  When the workflow starts, the contract state changes to &nbsp;`approval` and the system verifies that the amount property is filled in. If not, the workflow initiator must fill it in.
2.  A manager reviews the contract to approve it. If he rejects it, the workflow initiator must fix it.
3.  When the manager approves the contract, the state changes to&nbsp;`running`.

## Starting the Workflow

**Goal**

Start a workflow on a contract, leveraging the contract validation workflow provided by the addon Getting started with the Nuxeo Platform.

**Prerequisites**

*   {{{multiexcerpt 'prerequisite_addon' page='Handling Permissions'}}}
*   {{{multiexcerpt 'prerequisite_users' page='Handling Permissions'}}}
*   {{{multiexcerpt 'prerequisite_contract_skynet' page='Retrieving Audit Log'}}}

**Procedure**

1.  Create a file called `startContractValidationWorkflow.js` with the following content.

    ```js
    #!/usr/bin/env node

    let Nuxeo = require('nuxeo');
    let nuxeo = new Nuxeo({
        auth: {
            method: 'basic',
            username: 'afraser',
            password: 'afraser'
        }
    });
    let contractToFetch = '/default-domain/workspaces/North America/awesome-tech/skynet-ai-maintenance';
    nuxeo.repository()
        .fetch(contractToFetch)
        .then(contract => {
            if (contract.state !== 'draft') {
                console.log('\nSorry, the contract needs to be in the draft state to launch a validation workflow on it.\nCurrent state is: ' + contract.state + '\n');
                return;
            }
            contract.startWorkflow('BCContractValidationWf')
                .then(wf => {
                    console.log('Workflow is now started!');
                    console.log('id: ' + wf.id);
                    console.log('workflow state: ' + wf.state);
                    console.log('initiated by: ' + wf.initiator);
                })
                .catch(error => {
                    console.log('Apologies, an error occurred while starting the workflow.');
                    console.log(error);
                });
            return;
        })
        .catch(error => {
            console.log('Apologies, an error occurred while fetching the contract.');
            console.log(error);
        });

    ```

2.  Save and run:

    ```
    $ node startContractValidationWorkflow.js
    ```

{{#> callout type='info' heading='Learn more'}}

*   [Workflow developer documentation]({{page page='workflow'}})
*   [Workflow Engine course on Nuxeo University](https://university.nuxeo.com/learn/public/course/view/elearning/39/WorkflowEngine)

{{/callout}}

&nbsp;

## Completing Tasks

**Goal**

Complete the Fill Amount task.

The workflow looks like this:

![]({{file name='contract-validation-workflow-fillAmount.png'}} ?w=481,h=637,border=true)

When the workflow started, a verification was performed that determined no amount was given in the contract properties. Therefore, a task has been assigned to the workflow initiator (Alicia Fraser in this case) so that she may fill it in before having it reviewed by a manager.

**Procedure**

1.  Create a file called `handleUserWorkflowTasks.js` with the following content. While completing a task, you can send the information filled in by a user (Alicia Fraser in this case). Here, send the contract amount.

    ```js
    #!/usr/bin/env node

    let Nuxeo = require('nuxeo');
    let nuxeo = new Nuxeo({
      auth: {
        method: 'basic',
        username: 'afraser',
        password: 'afraser'
      }
    });

    // Fetch the current user's contract validation tasks
    nuxeo.workflows().fetchTasks({
        'workflowModelName': 'BCContractValidationWf'
      })
      .then(function(tasks) {
        // Display tasks
        if (tasks.length === 0) {
          console.log('No task to do! Cool!\n');
          return;
        }
        tasks.entries.forEach(currentTask => {
          console.log('Name: ' + currentTask.name);
          console.log('Status: ' + currentTask.state);
          console.log('What to do: ' + currentTask.directive);
          console.log('Before: ' + currentTask.dueDate);
          console.log('On document id: ' + currentTask.targetDocumentIds[0].id);
          console.log('Task form can be downloaded at: ' + currentTask.taskInfo.layoutResource.url);
          console.log('\nPossible actions for this task:');
          currentTask.taskInfo.taskActions.forEach(currentAction => {
            console.log('Name: ' + currentAction.name);
          });
          // Fill in the contract's amount and confirm
          currentTask
            .variable('contractAmount', '67890.99')
            .complete('confirm')
            .then(completedTask => {
              console.log('\nWe will fill in an amount and confirm to send the contract for validation.');
              console.log(`Task ${completedTask.name} is now ${completedTask.state}.`);
              // Check contract state now that the task is completed
              nuxeo.repository().fetch(completedTask.targetDocumentIds[0].id, {
                  schemas: ['bcsalescommon']
                })
                .then(contract => {
                  console.log(`Contract ${contract.title} is now in the following state: ${contract.state}.`);
                  console.log(`Its amount has been set to ${contract.properties['bcsalescommon:amount']}.`);
                });
            })
            .catch(error => {
              console.log('Apologies, an error occurred while completing a task.');
              console.log(error);
            });
        })
      })
      .catch(error => {
        console.log('Apologies, an error occurred while fetching the tasks.');
        console.log(error);
      });

    ```

2.  Save and run:

    ```
    $ node handleUserWorkflowTasks.js
    ```

    Note that the contract's amount has been updated.

{{#> callout type='info' heading='Learn more'}}

*   [About Tasks]({{page page='about-tasks'}})
*   [Assigning Workflow Tasks video from Nuxeo University](https://university.nuxeo.com/learn/public/course/view/elearning/39/WorkflowEngine)

{{/callout}}

## Ending the Workflow

**Goal**

Review and validate the contract.

The contract should now be reviewed by a manager:

![]({{file name='contract-validation-workflow-review.png'}} ?w=481,h=637,border=true)

This time a task has been assigned to the `managers` group (represented by Sarah Connor). Validating the contract will trigger some logic and end the workflow, rejecting it will ask the workflow initiator to update it.

**Procedure**

1.  Create a file called `handleManagerWorkflowTasks.js` with the following content. Log in as `Sarah Connor` this time since she is a manager, and as such the one that needs to complete this task.

    ```js
    #!/usr/bin/env node
    let Nuxeo = require('nuxeo');
    let nuxeo = new Nuxeo({
        auth: {
            method: 'basic',
            username: 'sconnor',
            password: 'sconnor'
        }
    });
    // Fetch the current user's contract validation tasks
    nuxeo.workflows().fetchTasks({
            'workflowModelName': 'BCContractValidationWf'
        })
        .then(function(tasks) {
            // Display tasks
            if (tasks.length === 0) {
                console.log('No task to do! Cool!\n');
                return;
            }
            tasks.entries.forEach(currentTask => {
                console.log('Name: ' + currentTask.name);
                console.log('Status: ' + currentTask.state);
                console.log('What to do: ' + currentTask.directive);
                console.log('Before: ' + currentTask.dueDate);
                console.log('On document id: ' + currentTask.targetDocumentIds[0].id);
                console.log('Task form can be downloaded at: ' + currentTask.taskInfo.layoutResource.url);
                console.log('\nPossible actions for this task:\n');
                currentTask.taskInfo.taskActions.forEach(currentAction => {
                    console.log('Name: ' + currentAction.name + '\nCan be triggered using code or by following this link:\n' + currentAction.url);
                });
                // Validate contract(s)
                currentTask.complete('validate')
                    .then(completedTask => {
                        console.log('\nWe will validate the contract.');
                        console.log('Task ' + completedTask.name + ' is now ' + completedTask.state + '.');
                        // Check contract state now that the task is completed
                        nuxeo.repository().fetch(completedTask.targetDocumentIds[0].id, {
                                schemas: ['bccontract']
                            })
                            .then(contract => {
                                console.log('Contract ' + contract.title + ' is now in the following state: ' + contract.state + '.');
                                console.log('Contract\'s expiration date has automatically been set to one year from now: ' + contract.properties['bccontract:expirationDate'] + '.');
                            });
                    })
                    .catch(error => {
                        console.log('Apologies, an error occurred while completing a task.');
                        console.log(error);
                    });
            })
        })
        .catch(error => {
            console.log('Apologies, an error occurred while fetching the tasks.');
            console.log(error);
        });

    ```

2.  Save and run:

    ```
    $ node handleManagerWorkflowTasks.js
    ```

    The workflow is now finished.

**Notes:**

*   Validating the contract triggered some logic automatically: the contract's expiration date has been set to one year from now, the contract's state is now `running`.
*   Instead of completing the task programmatically, you could have used direct links instead. Keep in mind that these links need to be sent using a POST call.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Nuxeo Studio Community Cookbook'}}

- [Bulk Workflow Reassignment](https://github.com/nuxeo/nuxeo-studio-community-cookbook/tree/master/modules/nuxeo/bulk-workflow-reassignment)

{{/panel}}</div><div class="column medium-6">
</div></div>
