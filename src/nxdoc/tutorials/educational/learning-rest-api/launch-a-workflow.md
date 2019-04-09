---
title: Launch a Workflow
description: Learn how to run workflows using the REST API and the Nuxeo JavaScript Client.
review:
    comment: 'Separate pages'
    date: '2017-02-20'
    status: ok
toc: true
tree_item_index: 900
previous_link: nxdoc/execute-business-logic-through-automation
next_link: nxdoc/bonus-contribute-your-own-enricher

---

Workflows can be launched using the JS client's [`Workflows`](https://nuxeo.github.io/nuxeo-js-client/latest/Workflows.html) class.

A workflow can be started:

*   Without any document attached to it
*   With a single document attached to it
*   With multiple documents attached to it

## How to Start a Workflow

With the Nuxeo JavaScript client, you can use the `nuxeo.workflows().start('workflowId')` method. The workflow ID to pass is the one defined in Nuxeo Studio. Doing so will start a workflow without attaching a document.

## How to Attach Documents

### Using the Document Class

Once the document is fetched, use the `startWorkflow` method:

{{#> panel type='code' heading='Starting a Workflow On a Document'}}

```javascript
document.startWorkflow('workflowId');
```

{{/panel}}

### Using the Workflow Class

1. Before starting the workflow, you need to create an object containing the IDs of the documents to attach.
    {{#> panel type='code' heading='Workflow Options Object'}}

    ```javascript
    var workflowOptions = {
          "attachedDocumentIds":
            ["docId1", "docId2", ...]
      };
    ```

    {{/panel}}
2. Then pass the object when starting the workflow.
    ```javascript
    nuxeo.workflows().start('workflowId', workflowOptions)...
    ```

## How to Complete a Task

When a workflow is started, you are given a [`Workflow`](https://nuxeo.github.io/nuxeo-js-client/latest/Workflow.html) class instance in the response. Using this object, retrieve the tasks it contains.

You end up with an array containing [`Task`](https://nuxeo.github.io/nuxeo-js-client/latest/Task.html) class instances. Iterate over the tasks.

You can fill in the task form using the Task's variable method or during the complete method.

Completing a task is done using the `complete(action, taskOptions)` method.
  *   The `action` variable defines the button ID the user clicks on.
  *   The task options can be used to fill the task form if you didn't do it through the variable method.

## Practice - Workflows

**Create an Automation chain**

In Nuxeo Studio, [create a simple automation chain]({{page version='' space='nxdoc' page='automation-chain'}}), `ValidateDocumentChain`, that modifies the lifecycle of a document to "approved" and adds a comment.

```yaml
- Context.FetchDocument
- Document.FollowLifecycleTransition:
value: approve
- Document.SetProperty:
xpath: dc:description
save: 'true'
value: WorkflowVariables["validationComment"]
- Audit.LogEvent:
event: Document validated
category: RESTAPIWorkflowExercise
comment: "Validation comment: \n@{WorkflowVariables[\"validationComment\"]}"
```

**Create a simple workflow**

1.  Create a [workflow]({{page version='' space='nxdoc' page='simple-workflow-example'}}), `ValidateDocument`.
2.  Under the **Variables** tab, add the String field `validationComment`.
4.  Under the **Activation** tab, allow for Read & Edit permissions and the document type of your choice.
5.  Under the **Graph** tab, add an **Accept/Reject** user task node, and click on the **Edit** icon ![]({{file name='editor_area.gif' space='studio' page='studio-icons-index'}}) to edit the node properties.
    ![]({{file name='workflow-graph.png'}} ?w=550,border=true)
6.  Under the **General** tab, add the `Context["workflowInitiator"]` assignees expression.
7.  Under the **Variables** tab, add the `validationComment` variable.
8.  Under the **Form** tab, add the **Validation Comment** widget from the `var_ValidateDocument` schema.
9.  Under the **Transitions** tab, add the `ValidateDocumentChain` to the `validate` transition, then **Save**.
10. Add your transitions to the graph, then **Save** your workflow.
11. Deploy your Studio project on your Nuxeo Platform instance or perform a Hot Reload from the **Dev Tool extension**.

**Launch the workflow using the Nuxeo JavaScript Client**

1. Download [workflows.js]({{file name='workflows.js'}}) or open in another tab to copy and paste.
2. Replace `NUXEO_SERVER` with your Nuxeo Server URL.
3. Create an object containing the ID(s) of the document(s) to attach.
4. Start the workflow, passing in the object, then call `getWfTasks` method.
5. Retrieve the workflow tasks and call the `completeWfTasks` method.
6. Iterate through the tasks, presuming that the user adds a `validationComment` and clicks the validate button.
7. Call the `asserResult` method.
8. When your code is ready, run it with the following command:
    ```bash
    $ node workflows.js
    ```

{{#> accordian heading='Launching Workflows - Solution' closed='true'}}

```javascript

const Nuxeo = require('nuxeo');

var nuxeo = new Nuxeo({
  // Replace with your Nuxeo Server URL
  baseURL: 'http://NUXEO_SERVER/nuxeo',
  auth: {
    method: 'basic',
    username: 'Administrator',
    password: 'Administrator'
  },
});

nuxeo.schemas("*");

// Create an object containing the document ID(s)
var workflowOptions = {
    // Replace with existing document ID(s)
  	"attachedDocumentIds":["907d1fb1-d0d1-4160-8533-4fc2f30b897d"]
};

// Start the workflow, passing in the object, then call getWfTasks method
nuxeo.workflows()
  .start('ValidateDocument', workflowOptions)
  .then(getWfTasks)
  .catch(function(error) {
    throw error;
  });

function getWfTasks(workflow) {
	console.log("Workflow:");
  console.log(workflow);

// Retrieve the workflow tasks, then call the completeWfTasks method
	workflow
  	.fetchTasks()
    .then(completeWfTasks)
    .catch(function(error) {
    throw error;
  });
}

function completeWfTasks(tasks) {
	console.log("Tasks:");
  console.log(tasks);

// Iterate through the tasks, presuming that the user adds a validationComment  and clicks the validate button
  var tasksNb = tasks.entries.length;
	for (var i = 0; i < tasksNb; i++) {
    tasks.entries[i]
    	.variable("validationComment", "Looks great.")
    	.complete("validate")
      .then(assertResult)
      .catch(function(error) {
    	throw error;
  	});
  }
}

/************
DO NOT EDIT BELOW THIS LINE
************/


function assertResult(result) {
	console.log("Your result:");
  console.log(result);
  if (result['entity-type'] !== 'task') {
    console.log("Pass the completed task to the assertResult method.");
    return false;
  }

  if(result.targetDocumentIds.length <= 0) {
    console.log("There is no document attached to your workflow.");
    return false;
  }

  if(result.state !== "ended") {
    console.log("The task you passed is not completed yet.");
    return false;
  }

  if(!result.variables.validationComment
  ||  result.variables.validationComment.trim().length <= 0
  ) {
    console.log("Fill in validationComment variable.");
    return false;
  }

  console.log('Congratulations, you have successfully completed this exercise.');
}

```

{{/accordian}}
