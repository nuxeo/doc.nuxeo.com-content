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

// Define an NXQL query that will return all documents created TODAY
var queryToLaunch =

// Add query to query options
var queryOpts =

// Launch query

// Pass the call result to the method below
    // assertResult(result);



/************
DO NOT EDIT BELOW THIS LINE
************/

function assertResult(result) {
  if (typeof queryToLaunch === 'undefined') {
    console.log("\"queryToLaunch\" is undefined.");
    return false;
  }

  if (!queryToLaunch.includes('ecm:isVersion') &&
      !queryToLaunch.includes('ecm:isCheckedInVersion')
    ) {
    console.log("Exclude archived versions from query.");
    return false;
  }

  if (!queryToLaunch.includes('ecm:isProxy')) {
    console.log("Exclude proxies from query.");
    return false;
  }

  if (!queryToLaunch.includes('ecm:currentLifeCycleState') ||
      !queryToLaunch.includes('deleted')
    ) {
    console.log("Exclude deleted documents from query.");
    return false;
  }

  if (!Array.isArray(result.entries)) {
  console.log();
  console.log(result);
    console.log("Please pass the query result to complete this exercise.");
    return false;
  }

  if (Array.isArray(result.entries)) {
    if (result.length > 0) {
      if (result[0]['entity-type'] !== 'document') {
        console.log("You didn't retrieve any documents. Check your NXQL query and syntax.");
        return false;
      }
    }
  }

  console.log('Congratulations, you have successfully completed this exercise.');
}

