const Nuxeo = require('nuxeo');

var nuxeo = new Nuxeo({
  baseURL: 'http://NUXEO_SERVER/nuxeo',
  auth: {
    method: 'basic',
    username: 'Administrator',
    password: 'Administrator'
  },
});


// Use adapters to obtain your contract's audit log (history)



// Call the following method to check your result
//   assertResult(result);



/************
DO NOT EDIT BELOW THIS LINE
************/

function assertResult(result) {
	if(!result['entity-type'] == "logEntries") {
    console.log("Document audit log not found. Check the adapter in your request.");
  }

  console.log('Congratulations, you have successfully completed this exercise.');
}
