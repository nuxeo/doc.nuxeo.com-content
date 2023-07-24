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


// Start the workflow, passing in the object, then call getWfTasks method




function getWfTasks(workflow) {
	console.log("Workflow:");
  console.log(workflow);

// Retrieve the workflow tasks, then call the completeWfTasks method



}

function completeWfTasks(tasks) {
	console.log("Tasks:");
  console.log(tasks);

// Iterate through the tasks, presuming that the user adds a validationComment and clicks the validate button


// Call the asserResult method

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


