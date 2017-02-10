const Nuxeo = require('nuxeo');

var nuxeo = new Nuxeo({
  baseURL: 'http://NUXEO_SERVER/nuxeo',
  auth: {
    method: 'basic',
    username: 'Administrator',
    password: 'Administrator'
  }
});

nuxeo.schemas("*");

// Set the properties to update the document from the previous exercise


// Create a major version


// assertResult(document);



/************
DO NOT EDIT BELOW THIS LINE
************/

function assertResult(document) {
  if (document.isCheckedOut === true) {
    console.log("You didn't create a version while updating your document. Check the headers you are sending.");
    return false;
  }

  console.log("Congratulations, you have successfully completed this exercise");
}
