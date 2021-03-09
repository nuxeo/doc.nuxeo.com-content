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

nuxeo.repository()
// Retrieve a document using its ID or path


// Call the automation script passing the document as input


// Add a collectionName as a context variable



// Pass the result to the method below

  // assertResult(result);





/************
DO NOT EDIT BELOW THIS LINE
************/

function assertResult(result) {
  console.log(result);
  if (result['entity-type'] === 'string') {
    console.log("Pass the document variable as an input for your operation.");
    return false;
  }

  if (!result.facets.includes("CollectionMember")) {
    console.log("The document has not been added to a collection.");
    return false;
  }

  console.log('Congratulations, you have successfully completed this exercise.');
}
