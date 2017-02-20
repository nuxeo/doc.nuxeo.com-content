---
title: Learning REST API
review:
    comment: ''
    date: '2017-01-16'
    status: ok
labels:
    - multiexcerpt-include
toc: true
confluence:
    ajs-parent-page-id: '19235679'
    ajs-parent-page-title: Educational
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Learning+REST+API
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Learning+REST+API'
    page_id: '31034741'
    shortlink: dY3ZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/dY3ZAQ'
    source_link: /display/NXDOC/Learning+REST+API
tree_item_index: 800
history:
    -
        author: Solen Guitter
        date: '2016-08-02 14:16'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2016-08-02 13:58'
        message: Remove icon from info panel
        version: '14'
    -
        author: Solen Guitter
        date: '2016-08-02 13:12'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2016-08-01 16:23'
        message: Move useful resources into prerequisites section
        version: '12'
    -
        author: Solen Guitter
        date: '2016-08-01 15:59'
        message: source cleanup
        version: '11'
    -
        author: Solen Guitter
        date: '2016-08-01 15:44'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2016-07-29 16:25'
        message: Fix page reference
        version: '9'
    -
        author: Solen Guitter
        date: '2016-07-29 15:58'
        message: Add borders to pictures
        version: '8'
    -
        author: Solen Guitter
        date: '2016-06-14 08:37'
        message: ''
        version: '7'
    -
        author: Bertrand Chauvin
        date: '2016-06-10 11:15'
        message: ''
        version: '6'
    -
        author: Bertrand Chauvin
        date: '2016-05-24 15:36'
        message: ''
        version: '5'
    -
        author: Bertrand Chauvin
        date: '2016-05-24 15:02'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2016-05-19 14:57'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2016-05-19 14:49'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2016-05-19 14:49'
        message: ''
        version: '1'

---

{{! multiexcerpt name='REST_API_tuto'}}

This tutorial teaches you how to use Nuxeo REST API.

## Prerequisites

### Technical Prerequisites

Before following this tutorial, ensure that you have the following:

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <td>**Browser**</td>
        <td>
          Google Chrome / Chromium browser with the [Postman extension](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop), or Firefox web browser with the [RESTED extension](https://addons.mozilla.org/en-US/firefox/addon/rested/)[](https://addons.mozilla.org/en-us/firefox/addon/restclient/)
        </td>
      </tr>
      <tr>
        <td>**Nuxeo Studio project**</td>
        <td>
          You need a Nuxeo Studio project. If you don't have a Nuxeo Online Services account, you should sign up for a [30-day free trial](http://www.nuxeo.com/downloads/#online-trial).
        </td>
      </tr>
      <tr>
        <td>**Node.js**</td>
        <td>
          In this tutorial we will be using Nuxeo JS Client in **node.js**. Click [here]({{page version='' space='nxdoc' page='setting-up-your-javascript-environment#setting-up-the-javascript-environment'}}) for complete instructions on how to install both tools.
        </td>
      </tr>
      <tr>
        <td>**Nuxeo JS Client**</td>
        <td>
          We will be using Nuxeo JS Client to wrap our REST API calls. See above for instructions on how to install.
        </td>
      </tr>
      <tr>
        <td>**cURL**</td>
        <td>
          Available natively for Mac OS and Linux users, Windows users can [install it](https://curl.haxx.se/download.html#Win64). It may be useful to check your CORS configuration.
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <td colspan="2">*&ast;&ast;OPTIONAL&ast;&ast;*</td>
      </tr>
      <tr>
        <td>**Nuxeo DAM**</td>
        <td>
          From Nuxeo Marketplace, install the Nuxeo DAM addon. This will provide you with three extra multimedia Document Types to use and test throughout the tutorial.
        </td>
      </tr>
      <tr>
        <td>**Nuxeo Showcase Content addon**</td>
        <td>
          From Nuxeo Marketplace, install the Nuxeo Showcase Content addon. This will provide you with a stock of various documents to manipulate during the tutorial.
        </td>
      </tr>
      <tr>
        <td>**Nuxeo Dev Tools browser extension**</td>
        <td>
          Available for [Chrome](https://chrome.google.com/webstore/detail/nuxeo-dev-tools/kncphbjdicjganncpalklkllihdidcmh?hl=en) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/nuxeo-dev-tools/), this handy little extension provides a number of [useful shortcuts]({{page version='' space='nxdoc' page='nuxeo-dev-tools-extension#features'}}). Be sure to set up a [CORS configuration]({{page version='' space='nxdoc' page='cross-origin-resource-sharing-cors'}}) to fully benefit from its features.
        </td>
      </tr>
    </tbody>
  </table>
</div>


### Required Knowledge

You should be familiar with the following:

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <td>**Nuxeo Platform**</td>
        <td>
          Understanding the [Nuxeo Platform's document concept](https://university.nuxeo.io/nuxeo/university/#!/course/using-nuxeo-platform/understanding-document-concept) is essential. Getting a grasp of the [main Nuxeo Platform functionalities](https://university.nuxeo.io/nuxeo/university/#!/course/using-nuxeo-platform) is highly recommended.
        </td>
      </tr>
      <tr>
        <td>**Nuxeo Studio**</td>
        <td>
          Familiarity with the [main Nuxeo Studio functionalities](https://university.nuxeo.io/nuxeo/university/#!/course/getting-started-nuxeo-studio) is necessary, because you will call custom features created in Studio during this course.
        </td>
      </tr>
      <tr>
        <td>**JavaScript**</td>
        <td>
          JavaScript programming skills are required, as we will be using the [Nuxeo JavaScript client]({{page version='' space='nxdoc' page='javascript-client'}}) to practice.
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <td colspan="2">*&ast;&ast;OPTIONAL&ast;&ast;*</td>
      </tr>
      <tr>
        <td>**Java**</td>
        <td>
          Java programming skills are needed if you want to cover the bonus section of this tutorial, extending the REST API.
        </td>
      </tr>
    </tbody>
  </table>
</div>


### Useful REST API Resources

Information about Nuxeo REST API can be found in various places. Here are some of the most relevant tools at your disposal:

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <td>**API Playground**</td>
        <td>
          Available at [nuxeo.github.io/api-playground](http://nuxeo.github.io/api-playground/). It allows you to connect to a live Nuxeo Platform repository and try out the existing endpoints.
        </td>
      </tr>
      <tr>
        <td>**REST API Documentation**</td>
        <td>
          Available at [REST API]({{page version='' space='nxdoc' page='rest-api'}}) in our documentation center. It provides detailed technical documentation on the concepts, features and clients for Nuxeo REST API.
        </td>
      </tr>
      <tr>
        <td>**Local Instance REST API Documentation**</td>
        <td>
        Available in your Nuxeo Platform instance at `api/v1/doc`. Assuming a Nuxeo Platform instance is running on your machine, the URL would be `http://NUXEO_SERVER/nuxeo/api/v1/doc`. If you don't have a local instance, you can try it at [https://nightly.nuxeo.com/nuxeo/api/v1/doc](https://nightly.nuxeo.com/nuxeo/api/v1/doc). The default login / password is **Administrator** / **Administrator**. It provides an automatically generated documentation with the available endpoints and what they expect. Use it to get an idea of what you need to send in a request body.
        </td>
      </tr>
      <tr>
        <td>**JS Client Documentation**</td>
        <td>
          Available at [nuxeo.github.io/nuxeo-js-client/](http://nuxeo.github.io/nuxeo-js-client/). It provides explanations about the available objects and methods in Nuxeo JS client, which we will use during this tutorial.
        </td>
      </tr>
      <tr>
        <td>**REST API Video Course**</td>
        <td>
          Available at Nuxeo University [REST API course](https://university.nuxeo.io/nuxeo/university/#!/course/working-with-nuxeo-platform-rest-api). Sign up for a free account in order to access the videos. It can help get you started quickly with Nuxeo REST API's main concepts, and gives the relevant links to go further.
        </td>
      </tr>
    </tbody>
  </table>
</div>

## REST API Principles

##### Practice - REST API Principles

#### Create a Document using Nuxeo Platform UI

1.  Log into your Nuxeo instance.

2.  Go to `default-domain/workspaces`.

3.  Create a Workspace named "Rest API Tutorial".

4.  Create a Picture document within the Workspace.

5.  Export the Document using the [**XML export** option in Nuxeo Platform]({{page version='' space='userdoc' page='exporting-documents#xml-export-of-a-single-document'}}) or by clicking the ![]({{file name='export_json.png'}}) link in the **Nuxeo Dev Tools** extension.

#### Retrieve the Document using the REST API

1.  Log into the [API Playground](http://nuxeo.github.io/api-playground/) using your Nuxeo Server URL, `http://NUXEO_SERVER/nuxeo` and your credentials or simply click the API Playground button in the **Nuxeo Dev Tools** extension.

**FETCH THE DOCUMENT**

2.  In the **Resources Endpoints**, get the document using the document's `id` which can be found in the XML/JSON export obtained earlier.

    ```bash
    GET /api/v1/id/{docId}
    ```

3.  Click on the **Settings** icon ![]({{file page='howto-nuxeo-api-playground' name='playground_settings_icon.png'}}) to change the `properties` header so that you only retrieve the `picture` schema.

4.  Get the document using the document's `path` (also in the XML/JSON export).

    ```bash
    GET /api/v1/path/{docPath}
    ```

5.  In the **Command Endpoints**, get the document using the `Fetch > Document` operation and the `path` or `id` as a parameter.

    ```bash
    POST /api/automation/Repository.GetDocument
    ```

{{#> callout type='info' heading='What\'s the Best Way to Retrieve a Document?'}}

*   Using the **Resources Endpoints** is preferable. The **Command Endpoints** are better suited when you want to execute business logic.
*   Using the `id` endpoint is recommended over the `path` endpoint when possible as it improves performance.

{{/callout}}

## Define a CORS Configuration

### Concepts

Setting up CORS configuration allows requests from other domains to be executed. This is essential if your application is located on a distant server, and a security concern that you should think about. When dealing with your CORS configuration, you need to ask yourself the following questions:

*   Where will calls be allowed from?
*   What kind of calls do I want to allow?

A CORS configuration can be made from Studio by adding an XML extension.

Notice that **only GET, POST, HEAD, OPTIONS methods are allowed by default**. You need to explicitly set the supported methods in your configuration to allow PUT and DELETE calls.

Refer to the [CORS documentation]({{page version='' space='nxdoc' page='cross-origin-resource-sharing-cors'}}) for all applicable configuration options.

##### Practice - CORS Configuration

1.  In **Nuxeo Studio** under **Customization**, select **Advanced Settings** > **XML Extensions**

2.  Create an XML extension, `RestApiTutorial`, which:
      - only allows requests from https://foobar.com and its subdomains
      - supports the following methods: `GET, PUT, POST, DELETE, HEAD, OPTIONS`
      - only allows requests on the following pattern: `/nuxeo/`
    *If you already provided a CORS configuration when you installed the Nuxeo Dev Tools extension, you can either replace it or skip this Practice exercise.*

3.  In your Nuxeo instance, deploy the Nuxeo Studio configuration.
    **ADMIN** > **Update Center** > **Update**

4.  Restart the instance.
    **ADMIN** > **System Information** > **Restart Server**

5.  Open a terminal and launch the following commands to test your configuration, *replacing `NUXEO_SERVER` with your Nuxeo Server instance URL.*

{{#> panel type='code' heading='This command should be **denied** by the CORS configuration.'}}
```bash
curl --verbose -H "Origin: http://www.nuxeo.com" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: X-Requested-With" -X OPTIONS http://NUXEO_SERVER/nuxeo/site/foobar/upload
```
{{/panel}}

{{#> panel type='code' heading='This command should be **accepted** by the CORS configuration.'}}
```bash
curl --verbose -H "Origin: https://foobar.com" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: X-Requested-With" -X OPTIONS http://NUXEO_SERVER/nuxeo/site/foobar/upload
```
{{/panel}}


{{#> accordian heading='CORS Configuration - Solution' closed='true'}}

```xml
<extension target="org.nuxeo.ecm.platform.web.common.requestcontroller.service.RequestControllerService" point="corsConfig">
  <corsConfig name="foobar" allowGenericHttpRequests="true"allowOrigin="https://foobar.com"allowSubdomains="true" supportedMethods="GET, PUT, POST, DELETE, HEAD, OPTIONS">
    <pattern>/nuxeo/.*</pattern>
  </corsConfig>
</extension>
```

{{/accordian}}

## JavaScript Client

There are [several clients available]({{page version='' space='nxdoc' page='client-sdks'}}) to wrap your calls to Nuxeo REST API. During this tutorial we will focus on using the JavaScript (JS) client. Nuxeo JS client is versatile enough to let you work in various contexts:

*   In **Node.js**
*   In the browser by adding the library directly or through Bower
*   In AngularJS applications

The JS client uses promises, which look like this:

{{#> panel type='code' heading='Promise Example'}}

```javascript
var nuxeo = new Nuxeo({...});

nuxeo
  .someClass()
  .someMethod(variable1, variable2)
  .then(function(callResult){
    // the call succeeded
    // now you can do something with the resulting variable
  })
  .catch(function(error){
    // there was an error during the call
    // you can use the error variable to see what went wrong
    throw error;
  });
```

{{/panel}}

## Logging into Nuxeo Platform

Two authentication methods are supported by the JS client:

*   `basic` authentication: login and password are sent with a base64 encoding.
*   `token` authentication: a `basic` authentication is performed to obtain a token, then further calls make use of the token.

### Basic Authentication

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

##### Practice - Basic Authentication Using Nuxeo JS Client

1.  Download <a href="{{file name='basicAuthentication.js'}}" download>basicAuthentication.js</a> or open in another tab to copy and paste.

2.  Create a Nuxeo object in the `nuxeo` variable.

**Referring to the [Nuxeo JS client documentation](https://nuxeo.github.io/nuxeo-js-client/latest/Nuxeo.html), modify the code to:**

3.  Authenticate against your Nuxeo local instance.

4.  Use the basic authentication method. *If you haven't changed it, the default login/password is Administrator/Administrator*.

5.  When your code is ready, test it by uncommenting the `assertResult()` method and running the code in a terminal:

    ```bash
    node basicAuthentication.js
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


### Token Authentication

Token authentication using the JS client is much safer.

A call is performed using `basic` authentication. If successful, Nuxeo Platform creates a token (access key) which is used in further calls to authenticate instead of sending credentials.

If you need to prevent a user from logging in using this token, it can be destroyed any time from Nuxeo Platform's interface. **Once destroyed, it cannot be used again**.

{{#> panel type='code' heading='Instantiate a Nuxeo client, using `basic` authentication'}}

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
{{/panel}}

{{#> panel type='code' heading='Obtain a token'}}

Each parameter is a `string` used to identify the token in Nuxeo Platform's interface.
```javascript
tmpNuxeoClient.requestAuthenticationToken(applicationName, uniqueDeviceId, deviceDescription, permission)
  .then(...)
  .catch(...)
```
{{/panel}}

{{#> panel type='code' heading='Instantiate another Nuxeo client, this time using `token` authentication'}}
```javascript
var nuxeo = new Nuxeo({
 baseUrl: 'http://NUXEO_SERVER/nuxeo',
 auth: {
   method: 'token',
   token: tokenVariable
 }
});
```
{{/panel}}

To revoke a token from Nuxeo Platform's interface, go to **HOME** > **Nuxeo Drive**. All available tokens should be listed under **Authentication Tokens**.

For security purposes, you should avoid defining the first client using the `basic` authentication in the global scope, and place it in a function call instead. You will be able to see a sample in the exercise below.

##### Practice - Token Authentication Using the JS Client

1.  Download <a href="{{file name='tokenAuthentication.js'}}" download>tokenAuthentication.js</a> or open in another tab to copy and paste.

2.  Store your Nuxeo Server URL in the `baseURL` variable.

3.  Update `getClientWithTokenFor` method with your credentials.

4.  Create a Nuxeo client using basic authentication in the `tmpNuxeoClient` variable.

5.  Use `requestAuthenticationToken` method to obtain a token.

6.  Create a Nuxeo client using token authentication.

7.  When your code is ready, test it by uncommenting the `assertResult()` method and running the code in a terminal:

    ```bash
    node tokenAuthentication.js
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

## Manipulating Documents

### Create

You can create a document using the JS client create method.
```javascript
nuxeo.repository().create({parentRef}, {document})...
```
The `parentRef` is the ID or path under which your document should be created.

A [`Document`](https://nuxeo.github.io/nuxeo-js-client/latest/Document.html) can't be instantiated directly, so you need to create the object manually. Refer to the [REST API Entity Types]({{page version='' space='nxdoc' page='rest-api-entity-types'}}) documentation to see what you need to send.

{{{multiexcerpt 'restapi-doc-entity-post' page='REST API Entity Types'}}}

##### Practice - Document Creation

1.  Download <a href="{{file name='createDocuments.js'}}" download>createDocuments.js</a> or open in another tab to copy and paste.

2.  Store your Nuxeo Server URL in the `baseURL` variable.

3.  Define the properties for the Workspace, Folder and Document you will create. (See [REST API Entity Types]({{page version='' space='nxdoc' page='rest-api-entity-types'}}) for more information)

4.  Using the `nuxeo.repository().create({parentRef}, {document})...` method, create the **My Workspace** in "Workspaces".

5.  Create a Folder in **My Workspace**.

6.  Create a Document (File, Note, etc) in the Folder.

7.  When your code is ready, run it with the following command:

    ```bash
    node createDocuments.js
    ```

{{#> accordian heading='Create Documents - Solution' closed='true'}}

```javascript

const Nuxeo = require('nuxeo');

const nuxeo = new Nuxeo({
  baseURL: 'http://NUXEO_SERVER/nuxeo',
  auth: {
    method: 'basic',
    username: 'Administrator',
    password: 'Administrator'
  }
});

nuxeo.schemas("*");

// Define Workspace properties
const workspaceToCreate = {
  'entity-type': 'document',
  'type': 'Workspace',
  'name': 'myWorkspace',
  'properties': {
    'dc:title': 'My Workspace'
 }
};

// Define Folder properties
const folderToCreate = {
'entity-type': 'document',
'type': 'Folder',
'name': 'myFolder',
'properties': {
  'dc:title': 'My Folder'
}
};

// Define Document properties
const documentToCreate = {
  'entity-type': 'document',
  'type': 'File',
  'name': 'myFile',
  'properties': {
    'dc:title': 'My File'
 }
}

const whereToCreateWorkspace = '/default-domain/workspaces/';

const repository = nuxeo.repository();

// Create the Workspace, Folder and then Document
repository
  .create(whereToCreateWorkspace, workspaceToCreate)
  .then(workspace => {
    console.log('Workspace has been created:');
    console.log(workspace);
    console.log('\n');
    return repository.create(workspace.path, folderToCreate);
  })
  .then(folder => {
    console.log('Folder has been created:');
    console.log(folder);
    console.log('\n');
    return repository.create(folder.path, documentToCreate);
  })
  .then(file => {
    console.log('File has been created:');
    console.log(file);
    asserResult(file);
  })
  .catch(error => {
    console.log('Apologies, an error occurred.');
    console.log(error);
  });

```

{{/accordian}}

### Update

Updating a document is done using the JS client `nuxeo.repository().update(document)...` method.

The `document` parameter is a document object containing:

*   the entity-type
*   the document ID (in a `uid` field)
*   the properties to update (in a `properties` object)

```javascript
// Sample document object for an update call
var documentToUpdate = {
  'entity-type': 'document',
  'uid': 'document-to-update-id',
  'properties': {
    // Only send the properties that need to be updated
    'dc:title': 'My Updated Title'
  }
};
```

### Create a Version

The `X-Versioning-Option` header can be used when you need to increment the minor or major version of the document. It **returns the versioned document**. Creating a version also means that you will be able to revert to that version later if needed. By default, no version is created when updating a document and the 'live' (snapshot) document is returned.

Accepted values for the header are `MAJOR` (creates a version and increments the major version number), `MINOR` (creates a version and increments the minor version number) or `NONE` (no version is created, if another update is performed later you won't be able to revert the document to the specific state you left it in during the first update). There is no functional difference between a minor and major version.

##### Practice - Document Update

1.  Download <a href="{{file name='updateVersionDocument.js'}}" download>updateVersionDocument.js</a> or open in another tab to copy and paste.

2.  Store your Nuxeo Server URL in the `baseURL` variable.

3.  Update the Document you created in the previous exercise (with a new title, for example)

4.  Increment the Major version during the update.

5.  Uncomment the `assertResult(document)` method to test your results.

6.  When your code is ready, run it with the following command:

    ```bash
    node updateVersionDocument.js
    ```

{{#> accordian heading='Update and Version Documents - Solution' closed='true'}}

```javascript

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

var documentToUpdate = {
  "entity-type": "document",
  // Use the UID of the document you created in the previous exercise
  "uid": "8a1b5856-630b-486c-89a8-fd82d1fbce9e",
  "properties": {
    "dc:title": "Updated File"
  }
};

nuxeo.repository()
	.header("X-Versioning-Option", "MAJOR")
  .update(documentToUpdate)
  .then(function(document) {
    console.log("Document has been updated:");
    console.log(document);
    // Check your result
    assertResult(document);
  })
  .catch(function(error) {
    throw error;
  });

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

```

{{/accordian}}

{{#> callout type='info' heading='Can\'t increase the version?'}}

A version is only created when there are actual modifications sent because it checks to see if the properties have changed.

If you launch the same call in the solution twice in a row, the first call will create a version, the second won't.

{{/callout}}

### Upload a File

You can upload files with REST API outside the context of a transaction through the batch upload endpoint. This means that you can upload files as big as you want without risking a timeout.

Uploading a File with the JS client:

*   Create a `Nuxeo.Blob` object containing the file.
*   Instantiate a batch.
*   Upload the file.

**The file can be attached to the document either during document creation, or by updating it.**

{{#> panel type='code' heading='File Upload Sample'}}

```javascript
// Access the local file
const filePath = '/local/path/to/myFile';

fs.stat(filePath, (err, stats) => {

  // Create a blob from the filePath passed as variable
  const blob = new Nuxeo.Blob({
    'content': fs.createReadStream(filePath),
    'name': path.basename(filePath),
    'size': stats.size
  });
  const fileName = path.basename(filePath);

  // Start a new batch and upload
  var batch = nuxeo.batchUpload()
    .upload(blob)
    .then(function(res) {
      // Can attach files to Document here...
    })
    .catch(function(error) {
      throw error;
    });
});
```

{{/panel}}

Check out the [Importing Files with the REST API](https://university.nuxeo.io/nuxeo/university/#!/course/working-with-nuxeo-platform-rest-api/importing-files-rest-api) video at [Nuxeo University](https://university.nuxeo.com/) for more information.

##### Practice - File Upload

1.  Download <a href="{{file name='uploadFile.js'}}" download>uploadFile.js</a> or open in another tab to copy and paste.

2.  Store your Nuxeo Server URL in the `baseURL` variable and modify the `filePath` and `whereToCreate` variables.

3.  Access the local file.

4.  Create a blob from the `filePath` passed as variable.

5.  Upload the file, create a Document and attach the file to it.

6.  When your code is ready, run it with the following command:

    ```bash
    node uploadFile.js
    ```

{{#> accordian heading='Upload a File - Solution' closed='true'}}

```javascript

const Nuxeo = require('nuxeo');

// We require 'path' and 'fs' to access the local file system
const path = require('path');
const fs = require('fs');

const nuxeo = new Nuxeo({
  baseURL: 'http://NUXEO_SERVER/nuxeo',
  auth: {
    method: 'basic',
    username: 'Administrator',
    password: 'Administrator'
  }
});

const filePath = '/local/path/to/myFile';

const whereToCreate = '/path/to/myFolder';

nuxeo.schemas("*");

// Access the local file
fs.stat(filePath, (err, stats) => {
  if (err) {
    console.log(`File not found. Please check the filePath variable (currently set to ${filePath}).`);
    return;
  }
  if (!stats.isFile()) {
    console.log(`${filePath} is not a file. Please check the filePath variable.`);
    return;
  }
  // Create a blob from the filePath passed as variable
  const blob = new Nuxeo.Blob({
    'content': fs.createReadStream(filePath),
    'name': path.basename(filePath),
    'size': stats.size
  });
  const fileName = path.basename(filePath);

  // Upload the file, create a Document and attach the file to it
  nuxeo.batchUpload()
    .upload(blob)
    .then(uploadedFile => {
      console.log('File is uploaded, we will now attach it to a document.');
      const documentToCreate = {
        'entity-type': 'document',
        'type': 'File',
        'name': 'MyFile',
        'properties': {
          'dc:title': fileName,
          'file:content': uploadedFile.blob
        }
      };

      return nuxeo.repository().create(whereToCreate, documentToCreate, { schemas: ['*'] });
    })
    .then(document => {
      console.log('File has been created:');
      console.log(document);
    })
    .catch(error => {
       console.log(error);
    });
});

```

{{/accordian}}

### Fetch

You can fetch documents with Nuxeo JS Client using the [`Repository`](https://nuxeo.github.io/nuxeo-js-client/latest/Repository.html) class and the document path or ID.

{{#> panel type='code' heading='Fetching a Document'}}

```javascript
nuxeo.repository().fetch(docId)
```
```javascript
nuxeo.repository().fetch(docPath)
```

{{/panel}}

#### Headers

[Special HTTP Headers]({{page version='' space='nxdoc' page='special-http-headers'}}) can be set to fine-tune your request. Here are a couple of examples for fetching a document:

    `properties:schema1, schema2`: Retrieves only specific schemas
    `properties:*`: Retrieves all schemas

With JS client, you can set headers in the `Nuxeo` instance to ensure they are sent with each call, or in one specific request:

{{#> panel type='code' heading='Adding an Application-Wide Header'}}
```javascript
nuxeo.header(someHeader, someValue);
```
{{/panel}}

{{#> panel type='code' heading='Adding a Request-Specific Header'}}

```javascript
var callOptions = {
  'headers': { headerName: headerValue, ... } 	// overrides all headers set for this call only
  'schemas': ['dublincore', 'common', ...] 			// overrides the schemas set in the Nuxeo object for this call only
};
nuxeo.class().method(..., callOptions)
```

{{/panel}}

##### Practice - Using Headers

1.  Download <a href="{{file name='headers.js'}}" download>headers.js</a> or open in another tab to copy and paste.

**Referring to the [Nuxeo JS client documentation](https://nuxeo.github.io/nuxeo-js-client/latest/Nuxeo.html), modify the code to:**

2.  Ensure that further calls return all schemas in the response.

3.  Retrieve a document you previously created, using its path or ID.

4.  When your code is ready, run it with the following command:

    ```bash
    node headers.js
    ```

{{#> accordian heading='Using Headers - Solution' closed='true'}}

```javascript

const Nuxeo = require('nuxeo');

var nuxeo = new Nuxeo({
  baseURL: 'http://NUXEO_SERVER/nuxeo',
  auth: {
    method: 'basic',
    username: 'Administrator',
    password: 'Administrator'
  },
});

checkCredentials();

nuxeo.header("properties","*");

nuxeo.repository('default')
  // Use the UID of the document you created in the previous exercise
  .fetch('8a1b5856-630b-486c-89a8-fd82d1fbce9e') // you can also use the docPath here
  .then(function(document) {
    console.log(document);
  })
  .catch(function(error) {
    throw error;
  });

```

{{/accordian}}

#### Resolvers

Resolvers allow you to retrieve the object associated with the ID stored in a property, all within the same call. It can be used with:

*   Documents
*   Users
*   Vocabulary entries

Assuming that we have:

*   A `Contract` document referencing a `Company` document ID
*   A `Company` document referencing a `country` vocabulary ID
*   A `country` vocabulary

...the `depth` header allows you to control the aggregation depth:
<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <td>`depth:root`<br />
        Retrieves objects attached to the current object (default)</td>
        <td>![]({{file name='marshalling-depth-root.png' page='learning-rest-api'}} ?w=300,h=275,border=true)</td>
      </tr>
      <tr>
        <td>`depth:children`<br />
        Retrieves the objects referenced by the current object and one level deeper</td>
        <td>![]({{file name='marshalling-depth-children.png' page='learning-rest-api'}} ?w=300,h=205,border=true)</td>
      </tr>
      <tr>
        <td>`depth:max`<br />
        Retrieves objects referenced by the current object, and objects referenced up to two levels deeper</td>
        <td>![]({{file name='marshalling-depth-max.png' page='learning-rest-api'}} ?w=300,h=275,border=true)</td>
      </tr>
    </tbody>
  </table>
</div>

In addition to the `depth` header, you can use:

*   `fetch.document` with the property IDs storing the references, for each additional object to retrieve:
    ```bash
    "fetch.document":"{schema}:{property}, {schema}:{property}"
    ```

*   `fetch.document:properties`, to retrieve all objects at the same time.

*   The corresponding JS client methods:
    ```javascript
    nuxeo.repository().fetchProperty('entity-type', '{schema}:{property}')...

    nuxeo.repository().fetchProperties(
      // Declare all properties to fetch at once, overrides the previous definition
      { 'entity-type', ['{schema}:{property}', '{schema}:{property}'] }
    )...
    ```

**Notes about the JS client methods:**

*   More information about the entity types can be found in the [REST API Entity Types]({{page version='' space='nxdoc' page='rest-api-entity-types'}}) documentation page.

*   The entity type you fill in is that of the first object you are retrieving.

*   When calling a document, use the `document` entity in the `fetchProperty` method, no matter what kind of entity types further referenced objects may have.

*   When calling a user, use the `user` entity in the `fetchProperty` method, no matter what kind of entity types further referenced objects may have.

##### Practice - Resolvers

1.  In Nuxeo Studio, create two different document types that each extend the File document type: `Company` and `Contract`.

2.  Under the **Schema** tab in the `Contract` document type, add a custom schema that includes the field `companyId` of type `Document`.

3.  Under the **Creation Layout** tab in the `Contract` document type, add `companyId` to the form.

4.  Deploy your Studio project on your Nuxeo Platform instance or perform a Hot Reload from the **Dev Tool extension**.

5.  In Nuxeo Platform, create a company, **My Company**.

6.  Create a contract, **My Contract**, attributing it to **My Company** during creation.

7.  Download <a href="{{file name='usingResolvers.js'}}" download>usingResolvers.js</a> or open in another tab to copy and paste.

8.  Replace `NUXEO_SERVER` with your Nuxeo Server URL and the `docId` with that of the contract you created.

9.  Add the appropriate resolvers to return the `Company` object and `Contract` object in the same call.

10. When your code is ready, run it with the following command:

    ```bash
    node usingResolvers.js
    ```

{{#> accordian heading='Using Resolvers - Solution' closed='true'}}

```javascript
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
	.header("depth", "children")
  .header("fetch.document", "properties")
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
```

{{/accordian}}


**Learn More**

[JSON Marshalling]({{page version='' space='nxdoc' page='json-marshalling'}}) documentation

#### Enrichers

Adding enrichers when fetching a document is done by setting the `enrichers.document` header, `document` being the entity type that will be enriched. If you were calling a user, you would use the `enrichers.user` header instead, and so on. As for resolvers, what matters here is the entity type of the first object you have been calling. Entity types are listed in the [REST API Entity Types]({{page version='' space='nxdoc' page='rest-api-entity-types'}}) documentation.

Enrichers are provided in the response of the `contextParameters` object.

The corresponding JS client methods:

```javascript
nuxeo.repository().enricher('entity-type', 'enricher')...

nuxeo.repository().enrichers(
  { 'entity-type', ['enricher1', 'enricher2'] }
)...
```

##### Practice - Enrichers

1.  Download <a href="{{file name='usingEnrichers.js'}}" download>usingEnrichers.js</a> or open in another tab to copy and paste.

2.  Replace `NUXEO_SERVER` and the document UID.

3.  Use content enrichers to retrieve the document's ACLs and preview URL.

4.  When your code is ready, run it with the following command:

    ```bash
    node usingEnrichers.js
    ```

{{#> accordian heading='Using Resolvers - Solution' closed='true'}}

```javascript

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
  .enricher("document", "acls")
  .enricher("document", "preview")
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

```

{{/accordian}}



#### Adapters

Adapters allow you to modify the response before retrieving it. They were created before enrichers, and now you can use enrichers instead of most adapters.

Calling an adapter is done by using an `@{adaptername}` in your call URL.

There are some use cases where adapters come in handy:

*   Retrieving a folderish document's children instead of the document itself

{{{multiexcerpt 'restapi-adapters-children' page='REST API Web Adapters'}}}

*   Executing business logic and retrieve its output instead

{{{multiexcerpt 'restapi-adapters-op' page='REST API Web Adapters'}}}

##### Piping

Several adapters can be chained; in this case the result of the first adapter will become the input for the second, and so on.

{{{multiexcerpt 'restapi-adapters-piping' page='REST API Web Adapters'}}}

##### Using Adapters with the JS Client

As adapters can provide virtually anything in the response, there is no specific class that can be used to call adapters in the JS client. Instead, you need to use the `Request` class to launch a call, passing the URL and the call method:

```javascript
// Sample to retrieve the ACLs of the default domain
nuxeo.request('/path/default-domain/@acl')
  .get()
  .then(function(result){
    // Code to do something with the result here
  })
  .catch(function(error){
    // Code to handle error thrown here
  });
```

##### Practice - Adapters

1.  Download <a href="{{file name='usingAdapters.js'}}" download>usingAdapters.js</a> or open in another tab to copy and paste.

2.  Replace `NUXEO_SERVER` with your Nuxeo Server URL.

3.  Use an adapter to obtain the audit log of an existing document.

4.  Pass the result to the `assertResult` method to check your work.

5.  When your code is ready, run it with the following command:

    ```bash
    node usingAdapters.js
    ```

{{#> accordian heading='Using Adapters - Solution' closed='true'}}

```javascript

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
nuxeo
// Replace with the contract document ID or use the path endpoint and document ID
  .request('id/4b33906d-5753-44c7-a83b-bec35581cc9b/@audit')
  .get()
  .then(function(result) {
    console.log("Result has been retrieved:");
    console.log(result);
// Call the following method to check your result
    assertResult(result);
  })
  .catch(function(error) {
    throw error;
  });


/************
DO NOT EDIT BELOW THIS LINE
************/

function assertResult(result) {
	if(!result['entity-type'] == "logEntries") {
    console.log("Document audit log not found. Check the adapter in your request.");
  }

  console.log('Congratulations, you have successfully completed this exercise.');
}

```
{{/accordian}}

**Learn More**

[Web Adapters for the REST API]({{page version='' space='nxdoc' page='rest-api-web-adapters'}}) documentation.

### Delete and Trash Management

You can permanently delete a document with a simple `DELETE` call.

In the JS client, you can use the `delete` method contained in the [Repository](https://nuxeo.github.io/nuxeo-js-client/latest/Repository.html) object:
```javascript
nuxeo.repository().delete(documentRef)...
```
where `documentRef` is either a document ID or a document path.

If you want to handle a trash mechanism, you should change the document state:
```javascript
document.followTransition(transitionName)...
```
where `document` is a Document object and `transitionName` the name of the transition to follow.

Using the default document lifecycle:

*   Follow the `delete` transition to put a document in the `deleted` state.
*   Follow the `undelete` transition to restore a document to the `project` state.

Then it is up to you to make sure your queries will not retrieve documents in the `deleted` state!

##### Practice - Document Deletion

**Trash Management**

1.  Download <a href="{{file name='trashManagement.js'}}" download>trashManagement.js</a> or open in another tab to copy and paste.

2.  Replace `NUXEO_SERVER` with your Nuxeo Server URL.

3.  Retrieve a document using its ID or path.

4.  Put the document in the "deleted" state.

5.  Pass the trashed document to the `assertResult` method.

6.  When your code is ready, run it with the following command:

    ```bash
    node trashManagement.js
    ```

{{#> accordian heading='Trash Management - Solution' closed='true'}}

```javascript

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
// Retrieve a document using its ID or path
// (Replace with existing document UID or path)
  .fetch('dde30fe7-1dec-47d2-8ee7-01faba5120ac')
  .then(function(document) {
    console.log("RETRIEVED DOCUMENT:");
    console.log(document);
// Put the document in the "deleted" state
    document.followTransition('delete')
    .then(function(trashedDocument) {
      console.log("DOCUMENT TRASHED:");
      console.log(trashedDocument);
// Pass the trashed document to the assertResult method
      assertResult(trashedDocument);
    })
    .catch(function(error) {
      throw error;
    });
  });



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

```

{{/accordian}}

**Document Deletion**

1.  Download <a href="{{file name='documentDeletion.js'}}" download>documentDeletion.js</a> or open in another tab to copy and paste.

2.  Replace `NUXEO_SERVER` and the document UID.

3.  Delete the document using its ID or path.

4.  Pass the result to the `assertResult` method.

5.  When your code is ready, run it with the following command:

    ```bash
    node documentDeletion.js
    ```

{{#> accordian heading='Document Deletion - Solution' closed='true'}}

```javascript

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
// Replace with UID or path of existing document
  .delete('66cb53a4-3515-4751-8f5b-960f39ceb7dd')
  .then(function(result) {
    assertResult(result);
  })
  .catch(function(error) {
    throw error;
  });



/************
DO NOT EDIT BELOW THIS LINE
************/

function assertResult(result) {
  if (!result.status || result.status !== 204) {
    console.log("The document still exists. Permanently delete the document to complete this exercise.");
    return false;
  }
  console.log('Document deleted.');
  console.log('Congratulations, you have successfully completed this exercise.');
}

```

{{/accordian}}


## Querying and Searching

Using the JS client, the [`Repository`](https://nuxeo.github.io/nuxeo-js-client/latest/Repository.html)'s `query` method can be used to launch NXQL queries or call page providers.

### Launch NXQL Queries

Specify the NXQL query to be launched in the query property:

```javascript
nuxeo.Repository().query({ 'query': myQuery })...
```
where `myQuery` is a variable containing the query to launch.

{{#> panel type='code' heading='Sample NXQL Query for a Fulltext Search'}}

```sql
SELECT * FROM Document
	WHERE ecm:mixinType != 'HiddenInNavigation'
	AND ecm:isProxy = 0
	AND ecm:isCheckedInVersion = 0
	AND ecm:currentLifeCycleState != 'deleted'
	AND ecm:fulltext LIKE 'MyKeyword'
```

{{/panel}}

See the [NXQL]({{page version='' space='nxdoc' page='nxql'}}) documentation for other possibilities.

### Call Page Providers

A page provider is the underlying query when creating a content view in Nuxeo Studio.

To call page providers:

*   Specify the content view ID, as defined in Nuxeo Studio in the `pageProvider` property.
*   Pass an array containing the parameters in the `queryParams` property in the same order as they are defined in the content view.

```javascript
nuxeo.Repository().query({ 'pageProvider': 'pageProviderId', queryParams['parameter1', 'parameter2'...] })...
```

##### Practice - Querying and Searching

**Calling Page Providers**

1.  Download <a href="{{file name='callPageProvider.js'}}" download>callPageProvider.js</a> or open in another tab to copy and paste.

2.  Replace `NUXEO_SERVER` with your Nuxeo Server URL.

3.  Define query options, calling the `DefaultContentListingInNavigation` content view defined in Studio and passing it the UID of an existing parent document as a parameter. The query result should return the document's children as objects.

4.  Pass the result to the `assertResult` method.

5.  When your code is ready, run it with the following command:

    ```bash
    node callPageProvider.js
    ```


{{#> accordian heading='Calling Page Providers - Solution' closed='true'}}

```javascript

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
var queryOpts = {
  "pageProvider": "DefaultContentListingInNavigation",
  // Replace with UID of existing parent document
  "queryParams": ["11857bce-4a0f-4bc2-b679-4216b4bf216b"]
};

nuxeo
  .repository()
  .query(queryOpts)
  .then(function(result) {
    console.log("QUERY RESULTS:")
    console.log(result);
    // Pass the call result to the method below
    assertResult(result);
  })
  .catch(function(error) {
    throw error;
  });


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

```

{{/accordian}}



**Launching NXQL Queries**

1.  Download <a href="{{file name='nxqlQuery.js'}}" download>nxqlQuery.js</a> or open in another tab to copy and paste.

2.  Replace `NUXEO_SERVER` with your Nuxeo Server URL.

3.  Define an NXQL query that will return all documents created TODAY. Exclude proxies, archived versions and deleted (trashed) documents.

4.  Add query to `queryOpts` and launch the query.

5.  Pass the result to the `assertResult` method.

6.  When your code is ready, run it with the following command:

    ```bash
    node nxqlQuery.js
    ```


{{#> accordian heading='Launching NXQL Queries - Solution' closed='true'}}

```javascript

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
var queryToLaunch = "SELECT * FROM Document	"
// Change to today's date
	+ " WHERE dc:created >= DATE '2017-02-09' "
  + " AND ecm:isVersion = 0 "
  + " AND ecm:isProxy = 0 "
  + " AND ecm:currentLifeCycleState != 'deleted' ";

// Add query to query options
var queryOpts = {
  "query": queryToLaunch
};

// Launch query
nuxeo
  .repository()
  .query(queryOpts)
  .then(function(result) {
    console.log(result);
    // Pass the call result to the method below
    assertResult(result);
  })
  .catch(function(error) {
    throw error;
  });


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

```

{{/accordian}}

### Notes about Elasticsearch and the Passthrough API

**Where is the query launched?**

By default, NXQL queries use the database, but you can change this to use the ElasticSearch index when creating a page provider.

**How Can I Take Advantage of all the Elasticsearch Features?**

Nuxeo provides a [passthrough API for Elasticsearch]({{page version='' space='nxdoc' page='elasticsearch-passthrough'}}) that lets you benefit from the Elasticsearch API while handling security. When using it, queries are written using the Elasticsearch API, but they are actually sent to Nuxeo Platform that reworks them. We won't cover this aspect during this tutorial but you can head to the [Elasticsearch documentation](https://www.elastic.co/guide) for more information.

## Executing Business Logic through Automation

Automation [operations]({{page version='' space='nxdoc' page='contributing-an-operation'}}), [chains]({{page page='how-to-create-an-automation-chain'}}) and [scripts]({{page page='automation-scripting'}}) can all be called with the JS client.

**When You Should Use Automation**

Whenever you want to execute some business logic and leverage Nuxeo Platform functionalities.

**Why You Should Use Automation Chains or Scripts**

Every call to the REST API is a single transaction:

*   By using automation chains or scripts, you can execute several unitary operations in a single call.
*   Automation chains and scripts are executed as a single transaction: Either the whole chain or script is executed and the transaction is committed, or it is rolled back entirely.
*   Therefore, you should use them **whenever you need to execute logic that would require several calls as a single transaction.**

**How to Make Chains or Scripts Available through the REST API**

As soon as you create one of them in Nuxeo Studio and deploy your configuration in Nuxeo Platform, the feature is available and can be called using the REST API. That's all!

**How To Call Automation Operations, Chains, or Scripts**

Using the JS client's [`Operation`](https://nuxeo.github.io/nuxeo-js-client/latest/Operation.html) object.

{{#> panel type='code' heading='Call a Chain or Script'}}

```javascript
nuxeo.operation('MyChainOrScriptId')
// Input docId, path or Document object
  .input('docId')
  .params({
    'parameterName': 'parameterValue'
  })
  .context({
    'variableName': 'variableValue',
  })
  .execute()
  .then(function(result) {
	// Do something with the result
  })
  .catch(function(error) {
    throw error);
  });
```

{{/panel}}

Note that automation scripts are prefixed by `javascript.` So if your automation script is called `myScript` in Nuxeo Studio, you should call `javascript.myScript`.  

##### Practice - Executing Business Logic

1.  Download <a href="{{file name='addToCollection.js'}}" download>addToCollection.js</a> or open in another tab to copy the code.

2.  In Nuxeo Studio, create a new automation script, `addToCollection` where you can paste the code.

*COMPLETE THE AUTOMATION SCRIPT:*

3.  Check if the `collectionName` context variable is set, otherwise set it.

4.  Retrieve the user's workspace and set as the `userWorkspace` variable.

5.  If the collection variable is null, create a collection with the context variable's `collectionName` value and place it in the `collection` variable. The collection should be created in the user workspace.

6.  Add the document to the collection.

7.  Save the `addToCollection` automation script.

8.  Deploy your Studio project on your Nuxeo Platform instance or perform a Hot Reload from the **Dev Tool extension**.

*COMPLETE THE NODE.JS SCRIPT:*

9.  Download <a href="{{file name='businessLogic.js'}}" download>businessLogic.js</a> or open in another tab to copy the code.

10. Replace `NUXEO_SERVER` with your Nuxeo Server URL.

11. Retrieve an existing document using its ID or path.

12. Call the `addToCollection` automation script and pass the document as its input.

13. Add a `collectionName` as a context variable.

14. Pass the result to the `assertResult` method.

15. When your code is ready, run it with the following command:

    ```bash
    node businessLogic.js
    ```

{{#> accordian heading='addToCollection Automation Script - Solution' closed='true'}}

```javascript

function run(input, params) {

// Check if the collectionName context variable is set, otherwise set it
  if(!ctx.collectionName) {
    ctx.collectionName = "My Collection";
  }

// Retrieve the user's workspace and set as the userWorkspace variable
  var userWorkspace = User.GetUserWorkspace(
    input, {
  });

  var collection = getCollectionInUserWorkspace(input, ctx.collectionName);
// If the collection variable is null, create a collection with the context variable's collectionName value and place it in the collection variable. The collection should be created in the user workspace.
  if(!collection) {
    collection = Collection.Create(
      userWorkspace, {
        'name': ctx.collectionName,
        'description': ""
      }
    );
  }

// Add the document to the collection
  Document.AddToCollection(
    input, {
      'collection': collection
    }
  );

	return input;
}



/******
DO NOT EDIT BELOW THIS LINE
******/

// Return the collection (or null if it doesn't exist)
function getCollectionInUserWorkspace(input, collectionName) {
  var userWorkspace = User.GetUserWorkspace(
    input, {
    }
  );
  var userWorkspacePath = userWorkspace.path;
  var queryResults = Repository.Query(
    input, {
      'query': "SELECT * FROM Collection WHERE dc:title = '"+ collectionName  +"' AND ecm:path STARTSWITH '"+ userWorkspacePath +"'",
    }
  );
  if(queryResults.length === 0) {
    return;
  }
  return queryResults[0];
}

```

{{/accordian}}

{{#> accordian heading='Executing Business Logic - Solution' closed='true'}}

```javascript

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

nuxeo.repository()
// Retrieve a document using its ID or path
// (Replace with existing document UID or path)
  .fetch('9e7b87b6-affe-44eb-ac05-9fe057e52ee3')
// Call the automation script passing the document as input
  .then(function(document) {
    nuxeo.operation('javascript.addToCollection')
    .input(document)
    .context({
// Add a collectionName as a context variable
      'collectionName':'My Collection'
    })
    .execute()
    .then(function(result) {
// Pass the result to the collection below
      assertResult(result);
    })
    .catch(function(error) {
      throw error;
    })
  });

/************
DO NOT EDIT BELOW THIS LINE
************/

function assertResult(result) {
  console.log(result);
  if (result['entity-type'] === 'string') {
    console.log("Pass the document variable as an input for your operation.");
    return false;
  }

  if (!result.facets.includes("CollectionMember")) {
    console.log("The document has not been added to a collection.");
    return false;
  }

  console.log('Congratulations, you have successfully completed this exercise.');
}

```

{{/accordian}}

### Restricting Automation Calls - Defining Security Measures

Sometimes you might need to create automation operations or chains that shouldn't be accessible to everybody. Nuxeo Studio allows you to apply restrictions to them.

In the **Customization** menu, choose **Advanced Settings** > **Web Services Filtering** and create a new filter. You can then choose to restrict or disable operations and chains.

## Workflows

Workflows can be launched using the JS client's [`Workflows`](https://nuxeo.github.io/nuxeo-js-client/latest/Workflows.html) class.

A workflow can be started:

*   Without any document attached to it
*   With a single document attached to it
*   With multiple documents attached to it

### How to Start a Workflow

With the JS client, you can use the `nuxeo.workflows().start('workflowId')` method. The workflow ID to pass is the one defined in Nuxeo Studio. Doing so will start a workflow without attaching a document.

### How to Attach Documents

#### Using the Document Class

Once the document is fetched, use the `startWorkflow` method:

{{#> panel type='code' heading='Starting a Workflow On a Document'}}

```javascript
document.startWorkflow('workflowId');
```

{{/panel}}

#### Using the Workflow Class

Before starting the workflow, you need to create an object containing the IDs of the documents to attach.

{{#> panel type='code' heading='Workflow Options Object'}}

```javascript
var workflowOptions = {
      "attachedDocumentIds":
        ["docId1", "docId2", ...]
  };
```

{{/panel}}

Then pass the object when starting the workflow.

```javascript
nuxeo.workflows().start('workflowId', workflowOptions)...
```

### How to Complete a Task

When a workflow is started, you are given a [`Workflow`](https://nuxeo.github.io/nuxeo-js-client/latest/Workflow.html) class instance in the response. Using this object, retrieve the tasks it contains.

You end up with an array containing [`Task`](https://nuxeo.github.io/nuxeo-js-client/latest/Task.html) class instances. Iterate over the tasks.

You can fill in the task form using the Task's variable method or during the complete method.

Completing a task is done using the `complete(action, taskOptions)` method.
  *   The `action` variable defines the button ID the user clicks on.
  *   The task options can be used to fill the task form if you didn't do it through the variable method.

##### Practice - Workflows

*CREATE AN AUTOMATION CHAIN*

1.  In Nuxeo Studio, [create a simple automation chain]({{page version='' space='nxdoc' page='automation-chain'}}), `ValidateDocumentChain`, that modifies the lifecycle of a document to "approved" and adds a comment.

    ```yaml
    - Context.FetchDocument
    - Document.FollowLifecycleTransition:
    value: approve
    - Document.SetProperty:
    xpath: dc:description
    save: 'true'
    value: WorkflowVariables["validationComment"]
    - Audit.LogEvent:
    event: Document validated
    category: RESTAPIWorkflowExercise
    comment: "Validation comment: \n@{WorkflowVariables[\"validationComment\"]}"
    ```

*CREATE A SIMPLE WORKFLOW*

2.  Create a [workflow]({{page version='' space='nxdoc' page='simple-workflow-example'}}), `ValidateDocument`.

3.  Under the **Variables** tab, add the String field `validationComment`.

4.  Under the **Activation** tab, allow for Read & Edit permissions and the document type of your choice.

5.  Under the **Graph** tab, add an **Accept/Reject** user task node, and click on the **Edit** icon ![]({{file name='editor_area.gif' space='studio' page='studio-icons-index'}}) to edit the node properties.

![]({{file name='workflow-graph.png'}} ?w=550,border=true)

6.  Under the **General** tab, add the `Context["workflowInitiator"]` assignees expression.

7.  Under the **Variables** tab, add the `validationComment` variable.

8.  Under the **Form** tab, add the **Validation Comment** widget from the `var_ValidateDocument` schema.

9.  Under the **Transitions** tab, add the `ValidateDocumentChain` to the `validate` transition, then **Save**.

10. Add your transitions to the graph, then **Save** your workflow.

*LAUNCH THE WORKFLOW USING JS CLIENT*

11. Download <a href="{{file name='workflows.js'}}" download>workflows.js</a> or open in another tab to copy and paste.

12. Replace `NUXEO_SERVER` with your Nuxeo Server URL.

13. Create an object containing the ID(s) of the document(s) to attach.

14. Start the workflow, passing in the object, then call `getWfTasks` method.

15. Retrieve the workflow tasks and call the `completeWfTasks` method.

16. Iterate through the tasks, presuming that the user adds a `validationComment` and clicks the validate button.

17. Call the `asserResult` method.

18. When your code is ready, run it with the following command:

    ```bash
    node workflows.js
    ```

{{#> accordian heading='Launching Workflows - Solution' closed='true'}}

```javascript

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

// Create an object containing the document ID(s)
var workflowOptions = {
    // Replace with existing document ID(s)
  	"attachedDocumentIds":["907d1fb1-d0d1-4160-8533-4fc2f30b897d"]
};

// Start the workflow, passing in the object, then call getWfTasks method
nuxeo.workflows()
  .start('ValidateDocument', workflowOptions)
  .then(getWfTasks)
  .catch(function(error) {
    throw error;
  });

function getWfTasks(workflow) {
	console.log("Workflow:");
  console.log(workflow);

// Retrieve the workflow tasks, then call the completeWfTasks method
	workflow
  	.fetchTasks()
    .then(completeWfTasks)
    .catch(function(error) {
    throw error;
  });
}

function completeWfTasks(tasks) {
	console.log("Tasks:");
  console.log(tasks);

// Iterate through the tasks, presuming that the user adds a validationComment  and clicks the validate button
  var tasksNb = tasks.entries.length;
	for (var i = 0; i < tasksNb; i++) {
    tasks.entries[i]
    	.variable("validationComment", "Looks great.")
    	.complete("validate")
      .then(assertResult)
      .catch(function(error) {
    	throw error;
  	});
  }
}

/************
DO NOT EDIT BELOW THIS LINE
************/


function assertResult(result) {
	console.log("Your result:");
  console.log(result);
  if (result['entity-type'] !== 'task') {
    console.log("Pass the completed task to the assertResult method.");
    return false;
  }

  if(result.targetDocumentIds.length <= 0) {
    console.log("There is no document attached to your workflow.");
    return false;
  }

  if(result.state !== "ended") {
    console.log("The task you passed is not completed yet.");
    return false;
  }

  if(!result.variables.validationComment
  ||  result.variables.validationComment.trim().length <= 0
  ) {
    console.log("Fill in validationComment variable.");
    return false;
  }

  console.log('Congratulations, you have successfully completed this exercise.');
}

```

{{/accordian}}


## Bonus - Contributing Your Own Content Enricher

We've covered the basics of Nuxeo REST API. But there are some functionalities we left aside: [`Users`](https://nuxeo.github.io/nuxeo-js-client/latest/Users.html) / [`Groups`](https://nuxeo.github.io/nuxeo-js-client/latest/Groups.html) management, and [`Directories`](https://nuxeo.github.io/nuxeo-js-client/latest/Directory.html). Feel free to take a look at their corresponding classes.

For now we will extend the REST API by contributing a custom content enricher. In order to contribute a content enricher, you need to:

*   Creating the content enricher
*   Declaring the content enricher
*   Calling the content enricher

### Create the Content Enricher

A content enricher is a Java class that:

*   Extends the `AbstractJsonEnricher` class for a defined object (e.g.: `AbstractJsonEnricher<DocumentModel>` for a document)
*   Contains a `@Setup` annotation before the class declaration in order to define:
    *   How the class will be instantiated (usually as a singleton)
    *   Which class will have the highest priority in case of naming conflict
*   Uses the Jackson library to generate the JSON to be added in the response.

Here is a commented sample below:

{{{multiexcerpt 'enricher-class' page='Content Enrichers'}}}

Now it's your turn!

##### Practice - Contribute a Content Enrichers
\*This exercise requires some familiarity with Java

*CREATE THE CONTENT ENRICHER*

1.  Download <a href="{{file name='LastVersionEnricher.java'}}" download>LastVersionEnricher.java</a> or open in another tab to copy and add to your project.

2.  In the Java class, retrieve the `CoreSession` from the `DocumentModel` object.

3.  Retrieve the last document version from the `CoreSession`.

4.  Use the `JsonGenerator` object to write a field with the enricher name.

5.  Use the `JsonGenerator` object to write an object with the last document version.

*DECLARE THE CONTENT ENRICHER*

6.  Declare the content enricher through Nuxeo Studio, or by adding an XML file in your Java project's `src/main/resources/OSGI-INF` folder. <a href="{{file name='sample.xml'}}" download>Here is a sample.</a>

7.  If you declare it in your Java project, make sure to reference it in the project's `manifest.mf` file in the `src/main/resources/META-INF` folder, in the `Nuxeo-Component` list:

{{#> panel type='code' heading='Manifest.mf Extract'}}
Nuxeo-Component:OSGI-INF/org.nuxeo.sample.enrichers.parentDocEnricher.xml,OSGI-INF/org.nuxeo.sample.another-contribution.xml, ...
{{/panel}}

*CALL THE CONTENT ENRICHER*

8.  [Package and deploy your application](https://university.nuxeo.io/nuxeo/university/#!/course/nuxeo-platform-developer-basics/package-deploy-application).

9.  Under the **Transitions** tab, add the `ValidateDocumentChain` to the `validate` transition, then **Save**.

10. Add your transitions to the graph, then **Save** your workflow.

*LAUNCH THE WORKFLOW USING JS CLIENT*

11. Download <a href="{{file name='workflows.js'}}" download>workflows.js</a> or open in another tab to copy and paste.

12. Replace `NUXEO_SERVER` with your Nuxeo Server URL.

13. Create an object containing the ID(s) of the document(s) to attach.

14. Start the workflow, passing in the object, then call `getWfTasks` method.

15. Retrieve the workflow tasks and call the `completeWfTasks` method.

16. Iterate through the tasks, presuming that the user adds a `validationComment` and clicks the validate button.

17. Call the `asserResult` method.

18. When your code is ready, run it with the following command:

    ```bash
    node workflows.js
    ```

{{#> accordian heading='Solution' closed='true'}}

```java
package org.nuxeo.sample;
import static org.nuxeo.ecm.core.io.registry.reflect.Instantiations.SINGLETON;
import static org.nuxeo.ecm.core.io.registry.reflect.Priorities.REFERENCE;
import java.io.IOException;
import org.codehaus.jackson.JsonGenerator;
import org.nuxeo.ecm.core.api.CoreSession;
import org.nuxeo.ecm.core.api.DocumentModel;
import org.nuxeo.ecm.core.io.marshallers.json.enrichers.AbstractJsonEnricher;
import org.nuxeo.ecm.core.io.registry.reflect.Setup;
@Setup(mode = SINGLETON, priority = REFERENCE)
public class LastVersionEnricher extends AbstractJsonEnricher<DocumentModel> {
    public static final String NAME = "lastVersion";
    public SampleEnricher() {
        super(NAME);
    }
    // Method that will be called when the enricher is asked for
    @Override
    public void write(JsonGenerator jg, DocumentModel doc) throws IOException {
      // TODO: Retrieve the CoreSession from the DocumentModel object
      CoreSession session = doc.getCoreSession();
      // TODO: Retrieve the CoreSession from the DocumentModel object
      DocumentModel lastVersion = session.getLastDocumentVersion(doc.getRef());
      // TODO: Use the JsonGenerator object to write a field with the enricher name
      jg.writeFieldName(NAME);
      // TODO: Use the JsonGenerator object to write an object with the last document version
      jg.writeObject(lastVersion);
    }
}
```

{{/accordian}}


Now you can declare yours!

1.  Declare the content enricher in your Java project.

2.  Reference the component in the bundle's manifest file.

### Call the Content Enricher

Now that the enricher is created, you need to [package and deploy your application](https://university.nuxeo.io/nuxeo/university/#!/course/nuxeo-platform-developer-basics/package-deploy-application), then you can [call it](#enrichers)! Your enricher name is the one you put inside the `NAME` variable.

{{! /multiexcerpt}}
