var baseURL = 'http://NUXEO_SERVER/nuxeo';

const Nuxeo = require('nuxeo');
var nuxeo;

getClientWithTokenFor(baseURL, 'Administrator', 'Administrator');


function getClientWithTokenFor(baseURL, username, password) {

// Create Nuxeo Client with basic authentication
  var tmpNuxeoClient;


  var uniqueDeviceId = 'id' + (new Date()).getTime();

// Use requestAuthenticationToken method to obtain token

// Create a Nuxeo client using token authentication

// Uncomment assertResult method to test your code
//     assertResult();
}



/************
DO NOT EDIT BELOW THIS LINE
************/

function assertResult() {
  if (!nuxeo) {
    console.log("The nuxeo variable is not set. Please create the client object in the nuxeo variable.");
    return false;
  }

  var isNuxeo = nuxeo.constructor === Nuxeo;
  if (!isNuxeo) {
    console.log("The nuxeo variable is not a Nuxeo object. Please create the client object in the Nuxeo variable.");
    return false;
  }

  if (!nuxeo._auth || !nuxeo._auth.method) {
    console.log("You must provide an authentication method.");
    return false;
  }

  if (!nuxeo._auth || nuxeo._auth.method != "token") {
    console.log("Incorrect authentication method.");
    return false;
  }

  checkCredentials();
}

function checkCredentials() {
  nuxeo.login().then(function(user) {
    console.log("You are logged in. Congratulations, you\'ve successfully completed this exercise.");
    console.log(user);
  }).catch(function(error) {
    console.log("You either supplied a wrong login/password, URL or CORS configuration.");
    console.log("Authentication failed.");
    throw error;
  });
}
