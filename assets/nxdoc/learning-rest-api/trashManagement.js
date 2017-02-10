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


// Retrieve a document using its ID or path


// Put the document in the "deleted" state


// Pass the trashed document to the assertResult method




/************
DO NOT EDIT BELOW THIS LINE
************/

function assertResult(document) {
  if (document.state !== 'deleted') {
    console.log("The document is not in the deleted state.");
    return false;
  }

  console.log('Congratulations, you have successfully completed this exercise.');
}

