const Nuxeo = require('nuxeo');

var nuxeo;
// Authenticate your local Nuxeo instance using basic authentication


// assertResult();



/************
DO NOT EDIT BELOW THIS LINE
************/

function assertResult() {
	if(!nuxeo) {
    console.log("The nuxeo variable is not set. Please create the client object in the nuxeo variable.");
    return false;
  }

  var isNuxeo = nuxeo.constructor === Nuxeo;
  if(!isNuxeo) {
  	console.log("The nuxeo variable is not a Nuxeo object. Please create the client object in the nuxeo variable.");
    return false;
  }

  if(!nuxeo._auth || !nuxeo._auth.method) {
    console.log("You need to provide an authentication method.");
    return false;
  }

  if(!nuxeo._auth || nuxeo._auth.method != "basic") {
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
