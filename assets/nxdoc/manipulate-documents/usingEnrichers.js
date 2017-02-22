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

nuxeo.repository()
  // Use content enrichers to retrieve the document's ACLs and preview URL


  // Replace with UID or path of existing document
  .fetch('8fa1ed7a-22f4-49cb-b185-58dd9d2beb4f')
  .then(function(document) {
    console.log("Document has been retrieved:");
    console.log(document);
    assertResult(document);
  })
  .catch(function(error) {
    throw error;
  });


/************
DO NOT EDIT BELOW THIS LINE
************/

function assertResult(document) {
  if (!document.contextParameters.acls) {
    console.log("You didn't obtain the document's acls.");
    return false;
  }

  if (!document.contextParameters.preview) {
    console.log("You didn't obtain the document's preview.");
    return false;
  }

  console.log('Congratulations, you have successfully completed this exercise.');
}
