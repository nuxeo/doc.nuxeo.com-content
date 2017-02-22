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

nuxeo.repository()
// Retrieve the contract document and the company document in the same call


// Replace with the contract document ID or path
  .fetch('4b33906d-5753-44c7-a83b-bec35581cc9b')

  .then(function(document) {
    console.log("Document has been retrieved:");
    console.log(document);
// Call the following method to check your result
    assertResult(document);
  })
  .catch(function(error) {
    throw error;
  });



/************
DO NOT EDIT BELOW THIS LINE
************/

function assertResult(document) {
  if (document.type !== 'Contract') {
    console.log("Retrieved document is not a 'Contract'.");
    return false;
  }

  if (!document.get('contract:companyId').properties) {
    console.log("Document not associated with a company.");
    return false;
  }

  console.log('Congratulations, you\'ve successfully completed this exercise.');
}
