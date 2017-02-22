const Nuxeo = require('nuxeo');

var nuxeo = new Nuxeo({
  baseURL: 'http://NUXEO_SERVER/nuxeo',
  auth: {
    method: 'basic',
    username: 'Administrator',
    password: 'Administrator'
  },
});

nuxeo.schemas("*");

// Delete a document using its ID or path




/************
DO NOT EDIT BELOW THIS LINE
************/

function assertResult(result) {
  if (!result.status || result.status !== 204) {
    console.log("The document still exists. Permanently delete the document to complete this exercise.");
    return false;
  }
  console.log('Document deleted.');
  console.log('Congratulations, you have successfully completed this exercise.');
}

