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

// Define query options

  // Call the DefaultContentListingInNavigation defined in Studio

  // Provide the UID of an existing parent document as a parameter


//  Pass the call result to the method below
  // assertResult(result);



/************
DO NOT EDIT BELOW THIS LINE
************/

function assertResult(result) {
  if (Array.isArray(result)) {
    console.log("Please pass the query result to complete this exercise.");
    return false;
  }

  if (Array.isArray(result)) {
  	if(result.length > 0) {
    	if(result[0]['entity-type'] !== 'document') {
        console.log("You didn't retrieve any documents. Check the page provider and queryParams.");
        return false;
      }
    }
  }

  console.log('Congratulations, you have successfully completed this exercise.');
}
