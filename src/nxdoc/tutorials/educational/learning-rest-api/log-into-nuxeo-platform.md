---
title: Log into Nuxeo Platform
description: Discover the basic and token authentication methods supported by the Nuxeo JavaScript Client.
review:
    comment: 'Separate pages'
    date: '2017-02-20'
    status: ok
toc: true
tree_item_index: 500
previous_link: nxdoc/define-a-cors-configuration
next_link: nxdoc/manipulate-documents

---

Starting from here, you will use the Nuxeo JavaScript Client. Two authentication methods are supported by the JS client:

*   `basic` authentication: login and password are sent with a base64 encoding.
*   `token` authentication: a `basic` authentication is performed to obtain a token, then further calls make use of the token.

## Basic Authentication

Authenticating using Nuxeo JS client:

*   Instantiate a [`Nuxeo` class](https://nuxeo.github.io/nuxeo-js-client/latest/Nuxeo.html).
*   Set a `baseURL` property, unless you connect to your localhost.
*   Add an `auth` object into it, passing it the authentication method, username and password.

    {{#> panel type='code' heading='Sample'}}

    ```javascript
    var nuxeo = new Nuxeo({
     baseUrl: 'http://NUXEO_SERVER/nuxeo',
     auth: {
       method: 'basic',
       username: 'Administrator',
       password: 'Administrator'
     }
    });
    ```

    {{/panel}}

### Practice - Basic Authentication Using Nuxeo JS Client

1.  Download [basicAuthentication.js]({{file name='basicAuthentication.js'}}) or open in another tab to copy and paste.
2.  Create a Nuxeo object in the `nuxeo` variable.
3.  Referring to the [Nuxeo JS client documentation](https://nuxeo.github.io/nuxeo-js-client/latest/Nuxeo.html), modify the code to authenticate against your Nuxeo local instance using the basic authentication method.
If you haven't changed it, the default login/password is Administrator/Administrator.
5.  When your code is ready, test it by uncommenting the `assertResult()` method and running the code in a terminal:
    ```bash
    $ node basicAuthentication.js
    ```


{{#> accordian heading='Basic Authentication - Solution' closed='true'}}

```javascript
// Be sure to replace "NUXEO_SERVER" with your own Nuxeo Server URL.

const Nuxeo = require('nuxeo');
var nuxeo = new Nuxeo({
  baseURL: 'http://NUXEO_SERVER/nuxeo/',
  auth: {
    method: 'basic',
    username: 'Administrator',
    password: 'Administrator'
  },
});

assertResult();

function assertResult() {
	if(!nuxeo) {
    console.log("The nuxeo variable is not set. Please create the client object in the Nuxeo variable.");
    return false;
  }

  var isNuxeo = nuxeo.constructor === Nuxeo;
  if(!isNuxeo) {
  	console.log("The nuxeo variable is not a Nuxeo object. Please create the client object in the Nuxeo variable.");
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
```

{{/accordian}}


## Token Authentication

Token authentication using the JS client is much safer.

1. Instantiate a Nuxeo client, using `basic` authentication.
    ```javascript
    var tmpNuxeoClient = new Nuxeo({
     baseUrl: 'http://NUXEO_SERVER/nuxeo',
     auth: {
       method: 'basic',
       username: 'Administrator',
       password: 'Administrator'
     }
    });
    ```
    If successful, the Nuxeo Platform creates a token (access key) which is used in further calls to authenticate instead of sending credentials.
2. Obtain a token.
    Each parameter is a `string` used to identify the token in Nuxeo Platform's interface.
    ```javascript
    tmpNuxeoClient.requestAuthenticationToken(applicationName, uniqueDeviceId, deviceDescription, permission)
      .then(...)
      .catch(...)
    ```
3. Instantiate another Nuxeo client, this time using `token` authentication.
    ```javascript
    var nuxeo = new Nuxeo({
     baseUrl: 'http://NUXEO_SERVER/nuxeo',
     auth: {
       method: 'token',
       token: tokenVariable
     }
    });
    ```

If you need to prevent a user from logging in using this token, it can be destroyed any time from Nuxeo Platform's interface. Go to **HOME** > **Nuxeo Drive**. All available tokens should be listed under **Authentication Tokens**. Once destroyed, it cannot be used again.

For security purposes, you should avoid defining the first client using the `basic` authentication in the global scope, and place it in a function call instead. You will be able to see a sample in the exercise below.

### Practice - Token Authentication Using the JS Client

1.  Download [tokenAuthentication.js]({{file name='tokenAuthentication.js'}}) or open in another tab to copy and paste.
2.  Store your Nuxeo Server URL in the `baseURL` variable.
3.  Update `getClientWithTokenFor` method with your credentials.
4.  Create a Nuxeo client using basic authentication in the `tmpNuxeoClient` variable.
5.  Use `requestAuthenticationToken` method to obtain a token.
6.  Create a Nuxeo client using token authentication.
7.  When your code is ready, test it by uncommenting the `assertResult()` method and running the code in a terminal:
    ```bash
    $ node tokenAuthentication.js
    ```

{{#> accordian heading='Token Authentication - Solution' closed='true'}}

```javascript
// Be sure to replace "NUXEO_SERVER" with your own Nuxeo Server URL.
var baseURL = 'http://NUXEO_SERVER/nuxeo';

const Nuxeo = require('nuxeo');
var nuxeo;

getClientWithTokenFor(baseURL, 'Administrator', 'Administrator');

function getClientWithTokenFor(baseURL, username, password) {

  var tmpNuxeoClient = new Nuxeo({
    baseURL: baseURL,
    auth: {
      method: 'basic',
      username: username,
      password: password
    }
  });

  var uniqueDeviceId = 'id' + (new Date()).getTime();
  tmpNuxeoClient.requestAuthenticationToken('learning-rest-api', uniqueDeviceId, 'REST API exercise browser', 'rw')
    .then(function(token) {
      nuxeo = new Nuxeo({
        baseURL: baseURL,
        auth: {
          method: 'token',
          token: token
        }
      });

      assertResult();
    })
    .catch(function(error) {
      throw error;
    });
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

```

{{/accordian}}

**Learn More**

[Authentication and User Management]({{page version='' space='nxdoc' page='authentication-and-user-management'}}) documentation
