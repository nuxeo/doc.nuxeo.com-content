---
title: Learning the REST API
review:
    comment: 'Since Nuxeo IO is no longer relevant, the Nuxeo Cloud Instance and links ending by `nuxeo.io` sould be reviewed. See [NXDOC-982](https://jira.nuxeo.com/browse/NXDOC-982)'
    date: '2016-12-06'
    status: not-ok
redirect: nxdoc/getting-started-with-the-nuxeo-platform
labels:
    - content-review-lts2016
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
hidden: true
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
&nbsp;

{{! multiexcerpt name='REST_API_tuto '}}

This is a training on using the REST API.

## Prerequisites

{{#> callout type='info' }}

This training is based on **Nuxeo Platform LTS 2015**.

{{/callout}}

### Technical Prerequisites

Before doing this training, you need the following:

*   **Browser**:
    Google Chrome / Chromium browser with the [Postman extension](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop), or Firefox web browser with the [RESTED extension](https://addons.mozilla.org/en-US/firefox/addon/rested/)[](https://addons.mozilla.org/en-us/firefox/addon/restclient/)
*   **Nuxeo Cloud instance**:
    You need access to a Nuxeo Cloud instance. If you don't, you should sign up for a [Nuxeo Online Services 30 days free trial](http://www.nuxeo.com/downloads/#online-trial).
*   **Nuxeo Studio project**:
    You need a Nuxeo Studio project. Again, this is all part of the Nuxeo Online Services trial.
*   **REST API Training application template**:
    In Nuxeo Studio, import the REST API Training application template from the **Customization** > **External Templates** menu.
*   **cURL** (optional):
    Available natively for Mac OS and Linux users, Windows users can [install it](https://curl.haxx.se/download.html#Win64). It is useful to check your CORS configuration.

### Required Knowledge

The following knowledge is needed to follow this course:

*   **Nuxeo Platform**:
    Understanding the [Nuxeo Platform's document concept](https://university.nuxeo.io/nuxeo/university/#!/course/using-nuxeo-platform/understanding-document-concept) is mandatory. Having a grasp about the [main Nuxeo Platform functionalities](https://university.nuxeo.io/nuxeo/university/#!/course/using-nuxeo-platform) is highly recommended.
*   **Nuxeo Studio**:
    Knowledge of the [main Nuxeo Studio functionalities](https://university.nuxeo.io/nuxeo/university/#!/course/getting-started-nuxeo-studio) is necessary, because you will call custom features created in Studio during this course.
*   **JavaScript**:
    JavaScript programming skills are required, as we will be using the [Nuxeo JavaScript client](https://doc.nuxeo.com/nxdoc/javascript-client/) to practice.
*   **Java (optional)**:
    Java programming skill are needed if you want to cover the bonus section of this training, to extend the REST API.

### Useful REST API Resources

Information about the REST API usage can be found in various places. The most important ones are the following:

*   **API Playground**:
    Available at [nuxeo.github.io/api-playground](http://nuxeo.github.io/api-playground/) or available as a [Nuxeo package]({{page page='installing-a-new-package-on-your-instance'}}). It allows you to connect to a live Nuxeo Platform repository and discover / try the existing endpoints.
*   **Local Instance REST API Documentation**:
    Available in your Nuxeo Platform instance at `api/v1/doc`. Assuming a Nuxeo Platform instance is running on your machine, the URL would be [http://localhost:8080/nuxeo/api/v1/doc](/nuxeo.github.io/api-playground) If you don't have a local instance, you can try it at [https://nightly.nuxeo.com/nuxeo/api/v1/doc](https://nightly.nuxeo.com/nuxeo/api/v1/doc) [.](https://nightly.nuxeo.com/api/v1/doc) The default login / password is Administrator / Administrator.
    It provides an automatically generated documentation with the available endpoints and what they expect. Use it to get an idea of what you need to send in a request body.
*   **REST API Documentation**:
    Available at [REST API]({{page page='rest-api'}}) in our documentation center. It provides detailed technical documentation on the concepts, features and clients for the REST API.
*   **JS Client Documentation**:
    Available at [nuxeo.github.io/nuxeo-js-client/1.2.1/](http://nuxeo.github.io/nuxeo-js-client/1.2.1/). It provides explanations about the available objects and methods in the Nuxeo JS client, that we will use during this training.
*   **REST API Video Course**:
    Available at the Nuxeo University [REST API course](https://university.nuxeo.io/nuxeo/university/#!/course/working-with-nuxeo-platform-rest-api). It can help getting you started quickly with the REST API's main concepts, and gives the relevant links to go further.

## Prepare Your Environment

### Nuxeo Studio

1.  Log in your Nuxeo Studio project at [https://connect.nuxeo.com](https://connect.nuxeo.com).
2.  Go into the **Settings** > **Application Dependencies** menu.
3.  Set the target platform version to **Nuxeo Platform LTS 2015** and save.
4.  Go into the **Customization** > **External Templates** menu.
5.  Import the application template **Nuxeo Training: REST API**.

### Nuxeo Cloud Instance

1.  Log in your nuxeo.io manager at [https://manager.nuxeo.io](https://manager.nuxeo.io).
2.  Select your instance from the central zone of the screen, then stop your instance if it is running.
3.  Edit your instance and make sure it is associated to your Nuxeo Studio project. In this example the associated Studio project is "REST API Training", but yours will be named differently of course.
    ![]({{file name='instance-studio-project.png' page='learning-rest-api'}} ?w=300,h=200,border=true)
4.  Start your instance.
5.  Once started, access it. URL can be seen in the manager, in this example it is [`https://my-instance-name.nuxeo.io`](https://my-instance-name.nuxeo.io) . Make sure to use yours.
    ![]({{file name='instance-url.png' page='learning-rest-api'}} ?w=300,h=200,border=true)
6.  Log in. Default credentials are Administrator / Administrator.
7.  Install the [Nuxeo API Playground]({{page page='howto-nuxeo-api-playground'}}) Nuxeo package from the **Update Center** > **Marketplace Packages** tab.
    Note that the instance has to be restarted for the installation to complete. The restart can be achieved as following:
    ![]({{file name='restart-instance.png' page='learning-rest-api'}} ?w=500,h=508,border=true)
8.  [Deploy your Nuxeo Studio configuration](https://university.nuxeo.io/nuxeo/university/#%21/course/getting-started-nuxeo-studio/deploying-nuxeo-studio-configuration).
    ![]({{file name='deploy-configuration.png' page='learning-rest-api'}} ?w=500)

## REST API Principles

{{> wistia_video id='258cvm9i4j'}}

_Extract from the course "[Working with the REST API](https://university.nuxeo.io/nuxeo/university/#!/course/working-with-nuxeo-platform-rest-api)" on [Nuxeo University](https://university.nuxeo.io)_

### Practice - REST API Principles

**Your goals**

1.  Create a Contract from the UI.
2.  Retrieve it through the REST API using the API Playground in various manners.
3.  Use headers to change the response.

**What you need to do**

**Use the Nuxeo Platform UI to create a contract**

1.  Log in your Nuxeo Cloud instance ( [`https://your-instance-name.nuxeo.io`](https://your-instance-name.nuxeo.io) ).
    Note: your instance URL can be seen in the nuxeo.io manager.
    ![]({{file name='instance-url.png' page='learning-rest-api'}} ?w=300,h=200,border=true)
2.  Go to `default-domain/workspaces`:
    1.  Create a Contract Portfolio named "EMEA".
    2.  Create a Contract named "Beyond Space Travel Agency".
    3.  [Export the Contract]({{page space='userdoc' page='exporting-documents'}}) using the **XML export** option.

**Retrieve the Contract using the REST API**

1.  Access your API Playground at `https://your-instance-name.nuxeo.io/nuxeo/playground` and use the API Playground to do the following steps.
2.  Log in to your Nuxeo Cloud instance ( [`https://your-instance-name.nuxeo.io/nuxeo`](https://your-instance-name.nuxeo.io/nuxeo) ).
3.  Fetch the contract:
    1.  Using the Resources `Id` endpoint. Use the document id found in the XML export done previously for that.
    2.  Using the Resources `Path` endpoint. Use the document path found in the XML export done previously for that.
    3.  Using the Command endpoint, and the `Fetch > Document` operation.
4.  Change the headers sent so that you only retrieve the `dublincore` and `bccontract` schemas.

{{#> callout type='info' heading='What\'s the Best Way to Retrieve a Document?'}}

*   Using the `Resources` endpoint is preferable. The `Command` endpoint is better suited when you want to execute business logic.
*   Using the `Id` endpoint is recommended over the `Path` endpoint when possible, as it brings a small performance improvement.

{{/callout}}

## Define a CORS Configuration

### Concepts

Setting up a CORS configuration is necessary to allow requests from other domains to be executed. That's a major need if your application is located on a distant server, and a security concern you need to think about. When dealing with your CORS configuration, you need to ask yourself the following questions:

*   Where will calls be allowed from?
*   What kind of calls do I want to allow?

A CORS configuration can be done from Studio by adding an XML extension.

Notice that **only GET, POST, HEAD, OPTIONS methods are allowed by default**. You need to explicitly set the supported methods in your configuration to allow PUT and DELETE calls.

Refer to the [CORS documentation]({{page page='cross-origin-resource-sharing-cors'}}) for all applicable configuration options.

### Practice - CORS Configuration

**Your goals**

Set up a CORS configuration that will only allow specific domains to execute requests.

**What you need to do**

In Nuxeo Studio:

1.  Edit the XML extension&nbsp;`BCCORSConfig` providing a CORS configuration in Nuxeo Studio:
    *   Only allow requests coming from [`https://jsfiddle.net`](https://jsfiddle.net) and [`https://jshell.net`](https://jshell.net) and their subdomains.
    *   Make sure the following methods will be supported: `GET, PUT, POST, DELETE, HEAD, OPTIONS`.
    *   Only allow requests on the following pattern: `/nuxeo/.*`.

{{#> accordian heading='CORS Configuration - Solution' closed='true'}}

```xml
<extension target="org.nuxeo.ecm.platform.web.common.requestcontroller.service.RequestControllerService" point="corsConfig">
  <corsConfig name="BigCorp"
    allowGenericHttpRequests="true"
    allowOrigin="https://jsfiddle.net https://jshell.net"
    allowSubdomains="true"
    supportedMethods="GET, PUT, POST, DELETE, HEAD, OPTIONS">
    <pattern>/nuxeo/.*</pattern>
  </corsConfig>
</extension>
```

{{/accordian}}

&nbsp;

In your Nuxeo Cloud instance:

1.  Deploy the Nuxeo Studio configuration.
    ![]({{file name='deploy-configuration.png' page='learning-rest-api'}} ?w=500,h=197,border=true)
2.  Restart the instance.
    ![]({{file name='restart-instance.png' page='learning-rest-api'}} ?w=500,h=508,border=true)
3.  Open a terminal and launch the following commands to test your configuration:

    ```bash
    # Please replace https://your-instance-name.nuxeo.io by your real nuxeo.io instance URL.
    # The following command should be denied by the CORS configuration.
    # You should see: Cross-Origin Resource Sharing (CORS) Filter: CORS origin denied: http://www.nuxeo.com
    curl --verbose -H "Origin: http://www.nuxeo.com" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: X-Requested-With" -X OPTIONS https://your-instance-name.nuxeo.io/nuxeo/site/foobar/upload
    ```

    ```bash
    # Please replace https://your-instance-name.nuxeo.io by your real nuxeo.io instance URL.
    # The following command should be accepted by the CORS configuration.
    curl --verbose -H "Origin: https://jsfiddle.net" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: X-Requested-With" -X OPTIONS https://your-instance-name.nuxeo.io/nuxeo/site/foobar/upload
    ```

## JavaScript Client Overview

Clients exist in various languages to help wrapping your calls to the Nuxeo REST API. Their goal is to handle the low-level plumbing and let you focus on high level functionalities, while integrating nicely in your favorite programming language / environment.

Here is a list of the existing clients.

{{{multiexcerpt 'rest-api-clients' page='Client SDKs'}}}

During this training we will focus on using the JavaScript client. The JavaScript (JS) client is versatile enough to let you work in various contexts:

*   In node.js
*   In the browser by adding the library directly or through Bower
*   In AngularJS applications

The JS client uses promises, that look like this:

{{#> panel type='code' heading='Promise Example'}}

```javascript
var nuxeo = new Nuxeo({...});

nuxeo
  .someClass()
  .someMethod(variable1, variable2)
  .then(function(callResult){
    // the call succeeded
    // now you can do something with the result variable
  })
  .catch(function(error){
    // there was an error during the call
    // you can use the error variable to see what went wrong
    throw error;
  });
```

{{/panel}}

Latest release of the Nuxeo JavaScript Client can be found in the [Nuxeo JS client repository](https://github.com/nuxeo/nuxeo-js-client/releases). **You don't need to install it for this training**, all exercises will be provided in cloud based services.

## Logging into the Nuxeo Platform

Two authentication methods are supported by the JS client:

*   `basic` authentication: login and password are sent with a base64 encoding.
*   `token` authentication: a `basic` authentication is performed to obtain a token, then further calls make use of the token.

### Basic Authentication

Authenticating using the JS client is done by:

1.  Instantiating a [`Nuxeo`](http://nuxeo.github.io/nuxeo-js-client/1.0.0/Nuxeo.html) class.
2.  Set a `baseURL` property, unless you connect to your localhost.
3.  Add an `auth` object into it, passing it the authentication method, username and password.

    {{#> panel type='code' heading='Sample'}}

    ```javascript
    var nuxeo = new Nuxeo({
     baseUrl: 'http://localhost:8080/nuxeo',
     auth: {
       method: 'basic',
       username: 'Administrator',
       password: 'Administrator'
     }
    });
    ```

    {{/panel}}

#### Practice - Authentication Using the JS Client

**Your goals**

Authenticate against your Nuxeo Cloud instance, using the JS client.

**What you need to do**

Complete the following exercise.

<iframe width="100%" height="300" src="//jsfiddle.net/Nuxeo/mkrx18wh/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Optional - Token Authentication

Token authentication using the JS client is much safer:

1.  A first call is performed using a `basic` authentication. If the login succeeds, the Nuxeo Platform creates a token (an access key) that can be used by the user to authenticate instead of sending its login and password.
2.  Further calls make use of the token, which means the password is not sent anymore, and the token is sent instead.
3.  If for any reason you want to prevent the user from logging in using this token, it can be revoked (destroyed) anytime from the Nuxeo Platform's interface. Once revoked, a token cannot be used anymore and a new one needs to be created instead. Even if the token was to be compromised, an attacker would not be able to guess the user's password from it, and the token can be revoked to prevent further access.

Obviously, this is also slightly more complex, since it involves more steps:

1.  Instantiating a Nuxeo client, using a `basic` authentication as you did in the previous exercise.

    {{#> panel type='code' heading='Sample'}}

    ```javascript
    var tmpNuxeoClient = new Nuxeo({
     baseUrl: 'http://localhost:8080/nuxeo',
     auth: {
       method: 'basic',
       username: 'Administrator',
       password: 'Administrator'
     }
    });
    ```

    {{/panel}}
2.  Use this instance to obtain a token:

    {{#> panel type='code' heading='Sample'}}

    ```javascript
    // Needed parameters for the function to obtain a token:
    // application name (string, use whatever you see fit),
    // unique device id (string, you'll probably want to use the device's id on a phone or use a specific function to generate one),
    // device description (string, use whatever you like),
    // permission (string, see notes below)
    // Notes:
    // The permission parameter is required but its content is not used currently,
    // we recommend you to use the 'rw' value in the meantime
    tmpNuxeoClient.requestAuthenticationToken(applicationName, uniqueDeviceId, deviceDescription, permission)
      .then(...)
      .catch(...)
    ```

    {{/panel}}
3.  Instantiate another Nuxeo client, this time using a `token` authentication mechanism:

    {{#> panel type='code' heading='Sample'}}

    ```javascript
    var nuxeo = new Nuxeo({
     baseUrl: 'http://localhost:8080/nuxeo',
     auth: {
       method: 'token',
       token: tokenVariable
     }
    });
    ```

    {{/panel}}

For security purpose, you should avoid defining the first client using the `basic` authentication in the global scope, and place it in a function call instead. You will be able to see a sample in the exercise below.

#### Practice - Token Authentication Using the JS Client

**Your goals**

Authenticate against your Nuxeo Cloud instance, using the `token` authentication mechanism.

**What you need to do**

Complete the following exercise.

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/0a8go893/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

**To go further**

[Authentication and User Management]({{page page='authentication-and-user-management'}}) documentation

## Manipulating Documents

### Fetch

When using the Nuxeo JS client, fetching documents is done by using the [`Repository`](http://nuxeo.github.io/nuxeo-js-client/1.0.0/Repository.html) class.

{{#> panel type='code' heading='Fetching a Document'}}

```javascript
nuxeo.repository().fetch("document id or path")...
```

{{/panel}}

#### Headers

Similarly to what we saw previously, headers can be set to fine-tune your request. Various headers are available, depending on the situation. A few examples when fetching a document:

1.  `properties:schema1, schema2`: Retrieves only specific schemas
2.  `properties:*`: Retrieves all schemas

More headers will be seen when they will be useful to us.

In the JS client, you can set headers:

*   In the `Nuxeo` instance to make sure the headers will be sent for each call

    {{#> panel type='code' heading='Adding an Application-Wide Header'}}

    ```javascript
    nuxeo.header("someHeader", "someValue");
    ```

    {{/panel}}

    Note that some shortcut methods exist, for instance to define the schemas to retrieve. Look at the [`Nuxeo`](http://nuxeo.github.io/nuxeo-js-client/1.0.0/Nuxeo.html) class documentation for them.

*   Only in a specific request to fine-tune a unique call.

    {{#> panel type='code' heading='Adding a Request-Specific Header'}}

    ```javascript
    var callOptions = {
      'headers': { 'headerName': 'headerValue', ... } 	// overrides all headers set for this call only
      'schemas': ['dublincore', 'common', ...] 			// overrides the schemas set in the Nuxeo object for this call only
    };
    nuxeo.class().method(..., callOptions)
    ```

    {{/panel}}

{{#> callout type='info' heading='What You Should Remember'}}

Headers can be used to fine tune your queries:

*   In all calls when used in the Nuxeo object
*   In a specific call in you provide them in the call options

Shortcut methods exist in the JS client to avoid having to remember the header names.

{{/callout}}

##### Practice - Using Headers

**Your goals**

Use the JS client to:

1.  Fetch a document
2.  Place an application wide header to fetch all document schemas

**What you need to do**

Complete the following exercise.

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/5szmz4nq/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### Resolvers

Resolvers allow you to retrieve the object associated to the id stored in a property, all within the same call. It can be used with:

*   Documents
*   Users
*   Vocabulary entries

Assuming that we have:

*   A `Contract` document referencing a `Company` document ID
*   A `Company` document referencing a `country` vocabulary ID
*   A `country` vocabulary

The `depth` header allow you to control the aggregation depth:

*   [`depth:root`](http://depthroot) will retrieve objects attached to the current object (default)
    ![]({{file name='marshalling-depth-root.png' page='learning-rest-api'}} ?w=300,h=275,border=true)
*   [`depth:children`](http://depthchildren) will retrieve the objects referenced by the current object and one level deeper.
    ![]({{file name='marshalling-depth-children.png' page='learning-rest-api'}} ?w=300,h=205,border=true)
*   [`depth:max`](http://depthmax) will retrieve objects referenced by the current object, and objects referenced up to two levels deeper.
    ![]({{file name='marshalling-depth-max.png' page='learning-rest-api'}} ?w=300,thumbnail=true)

On top of the `depth` header, you can use:

*   A header:
    `fetch.document` with the property ids storing the references, for each additional object to retrieve, e.g.: `"fetch.document":"mySchema:aProperty, myOtherSchema:yetAnotherProperty"`

    Or `fetch.document:properties` instead to retrieve all objects at the same time.
*   The corresponding JS client methods:

    ```javascript
    nuxeo.someClass().fetchProperty('entity-type', 'myschema:myProperty')...
    // You can use it as many times as needed to add other properties
    // TODO: You need to replace someClass by the appropriate class!

    nuxeo.someClass().fetchProperties( // TODO: you need to replace someClass by the appropriate class!
      // Declare all properties to fetch at once, overrides the previous definition
      // i.e. that would replace the resolver(s) declared previously using the fetchProperty method
      { 'entity-type', ['myschema:myProperty', 'anotherSchema:anotherProperty'] }
    )...
    ```

**Notes about the JS client methods:**

*   More information about the entity types can be found in the [REST API Entity Types]({{page page='rest-api-entity-types'}}) documentation page.

*   The entity type you have to fill is the one of the first object you are retrieving. For instance:
    ![]({{file name='document-entity.png' page='learning-rest-api'}} ?w=300,h=172,border=true)
*   When calling a document, use the `document` entity in the `fetchProperty` method, no matter what kind of entity types further referenced objects may have.
    ![]({{file name='user-entity.png' page='learning-rest-api'}} ?w=300,h=136,border=true)
*   When calling a user, use the `user` entity in the `fetchProperty` method, no matter what kind of entity types further referenced objects may have.

{{#> callout type='info' heading='What You Should Remember'}}

Using resolvers is a combination of:

*   A `depth` header (with the root, children or max value)
*   A list of objects to resolve, for which you need to specify an entity type and a XPath
*   The entity type to use is always the one of the first object you are calling (`document` for a document, `directoryEntry` for a vocabulary entry, `user` for a user...)

{{/callout}}

##### Practice - Resolvers

**Your goals**

1.  Update your content model to be able to use resolvers.

2.  Use the appropriate headers to fetch all your objects in a single call.

**What you need to do**

1.  In Nuxeo Studio:
    1.  Add a `companyId` property into the `bccontract` schema.
    2.  Make sure to use the `Document` property type to allow resolvers use on it.
    3.  Update the `BCContractLayout` in the **Listing & Views** > **Form Layouts** menu to include it in all situations.
2.  In your Nuxeo Cloud instance:
    1.  Deploy your Studio configuration.
    2.  Create a company.
    3.  Reference the company in an existing contract.
3.  Complete the following exercise

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/3brLoomy/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

##### Learn More

[JSON Marshalling]({{page page='json-marshalling'}}) documentation

#### Enrichers

{{> wistia_video id='ykaualv73f'}}

_Extract from the course "[Working with the REST API](https://university.nuxeo.io/nuxeo/university/#!/course/working-with-nuxeo-platform-rest-api)" on [Nuxeo University](https://university.nuxeo.io)_

Adding enrichers when fetching a document is done by setting the `enrichers.document` header, `document` being here the entity type that will be enriched. If you were calling a user, you would use a the `X-NXenrichers.user` header instead, and so on. As for resolvers, what matters here is the entity type of the first object you have been calling. Entity types are listed in the [REST API Entity Types]({{page page='rest-api-entity-types'}}) documentation.

Enrichers are provided in the response into the `contextParameters` object.

The corresponding JS client methods:

```javascript
nuxeo.someClass().enricher('entity-type', 'enricherName')...
// You can use it as many times as needed to add other enrichers
// TODO: You need to replace someClass by the appropriate class!

nuxeo.someClass().enrichers( // TODO: you need to replace someClass by the appropriate class!
  // Declare all properties to fetch at once, overrides the previous definition
  // i.e. that would replace the resolver(s) declared previously using the fetchProperty method
  { 'entity-type', ['enricherName1', 'enricherName2'] }
)...
```

{{#> callout type='info' heading='What You Should Remember'}}

*   Enrichers allow to retrieve anything on top of the response.
*   Many enrichers are provided by default, and you can also contribute your own.
*   To call an enricher, you need to pass a header or use the appropriate JS client method. Specify either way the entity type you want to enrich and the enricher name.
*   The entity type is the one of the first object you are calling (refer to the resolvers section for a larger overview).

{{/callout}}

##### Practice - Enrichers

**Your goals**

Use the appropriate enrichers.

**What you need to do**

1.  In your Nuxeo Cloud instance, attach the following file to your existing contract: []({{file name='beyond-space-travel-agencies-contract.odt' page='learning-rest-api'}}).
2.  Complete the following exercise.

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/c39thusw/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

**To go further**

[REST API entity types]({{page page='rest-api-entity-types'}}) documentation.

#### Adapters

Adapters allow to adapt the response before retrieving it.They were created before enrichers, and today you can use enrichers instead of most adapters.

Calling an adapter is done by using a `/@adaptername` (where `adaptername` is the name of the adapter) in your call URL.

There are some use cases where adapters come in handy. For instance:

*   To retrieve a folderish document's children instead of the document itself
    {{{multiexcerpt 'restapi-adapters-children' page='Web Adapters for the REST API'}}}
*   To execute business logic and retrieve its output instead
    {{{multiexcerpt 'restapi-adapters-op' page='Web Adapters for the REST API'}}}

##### Piping

Several adapters can be chained; in this case the result of the first adapter will become the input for the second, and so on.

{{{multiexcerpt 'restapi-adapters-piping' page='Web Adapters for the REST API'}}}

##### Using Adapters with the JS Client

As adapters can virtually provide anything in the response, there is no specific class that can be used to call adapters in the JS client. Instead, you need to use the `Request` class and launch a call, passing the URL and the call method:

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

{{#> callout type='info' heading='What You Should Remember'}}

*   Adapters are the ancestors of enrichers; today using an enricher is preferable when possible.
*   Adapters are called by adding a `/@adaptername` in the URL.
*   Adapters can be chained, allowing more complex calls.
*   Due to the unpredictable nature of calls made using adapters, the JS client does not offer specific methods to deal with them. You need to use the `request` class, passing the URL and call method.

{{/callout}}

##### Practice - Adapters

**Your goals**

Use the appropriate adapter to retrieve your contract's audit log. You can use the [Web Adapters for the REST API]({{page page='rest-api-web-adapters'}}) documentation to check which adapter to call.

**What you need to do**

Complete the following exercise.

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/cb1q1euv/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

**To go further**

[Web Adapters for the REST API]({{page page='rest-api-web-adapters'}}) documentation.

### Creation

Creating a document is done using the JS client `nuxeo.repository().create("parentRef", document)...` method. The `parentRef` is the id or path under which your document should be created.

A [`Document`](http://nuxeo.github.io/nuxeo-js-client/1.0.0/Document.html) can't be instantiated directly, so you need to create the object manually. Refer to the [REST API Entity Types]({{page page='rest-api-entity-types'}}) documentation to see what you need to send.

{{{multiexcerpt 'restapi-doc-entity-post' page='REST API Entity Types'}}}

{{#> callout type='info' heading='What You Should Remember'}}

*   Creating a document is done using the JS client `nuxeo.repository().create("parentRef", document)...` method, where:
    *   `parentRef` is the document id or path under which the document should be created.
    *   `document` is the document object that will be used to create your actual document.
*   Use the [REST API Entity Types]({{page page='rest-api-entity-types'}}) documentation to see what a document object should look like.
*   The created document will be returned; check the response to get the document's id, name and path.

{{/callout}}

#### Practice - Document Creation

**Your goals**

Create a Contract using the JS client.

**What you need to do**

Complete the following exercise.

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/bpw3d4tb/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Update

Updating a document is done using the JS client `nuxeo.repository().update(document)...` method.

The `document` parameter is a document object containing:

*   the entity-type
*   the document id (in a `uid` field)
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

#### Creating a Version

The `X-Versioning-Option` header can be used when you need to increment the minor or major version of the document. It **returns the versioned document**. Creating a version also means that you will be able to revert to that version later if needed. By default, no version is created when updating a document and the 'live' (snapshot) document is returned.

Accepted values for the header are `MAJOR` (creates a version and increments the major version number), `MINOR` (creates a version and increments the minor version number) or `NONE` (no version is created, if another update is performed later you won't be able to revert the document to the specific state you left it in during the first update). There is no functional difference between a minor and major version.

{{#> callout type='info' heading='What You Should Remember'}}

*   Updating a document is done using the JS client `nuxeo.repository().update(document)...` method, where `document` is the document object that will be used to create your actual document.
*   Use the [REST API Entity Types]({{page page='rest-api-entity-types'}}) documentation or the previous sample to see what a document object should look like.
*   By default no version is created. You can use the `X-Versioning-Option` header to create a version. Value: `MAJOR` for a major version number increment, `MINOR` for a minor version number increment.

{{/callout}}

#### Practice - Document Update

**Your goals**

Use the JS client to update a contract while creating a major version.

**What you need to do**

Complete the following exercise.

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/h0p82q00/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### File Upload

{{> wistia_video id='qokay4hw1i'}}

_Extract from the course "[Working with the REST API](https://university.nuxeo.io/nuxeo/university/#!/course/working-with-nuxeo-platform-rest-api)" on [Nuxeo University](https://university.nuxeo.io)_

File upload in the REST API is done through the batch upload endpoint in order to upload files outside of the context of a transaction. This means that you can upload files as big as you want without risking a timeout.

#### Uploading a File Using the JS Client

File upload with the JS client is done in three main steps:

1.  Create a `Nuxeo.Blob` object containing the file.
2.  Instantiate a batch.
3.  Upload the file.

The file can be attached to the document either during the document creation, or by updating it.

{{#> panel type='code' heading='File Upload Sample'}}

```javascript
// Create the blob wrapper
// We assume you already obtained the file from a form and placed it into a selectedFile variable
var nuxeoBlob = new Nuxeo.Blob({ 'content': selectedFile });

// Start a new batch
var batch = nuxeo.batchUpload();

// Upload the file in the batch
batch.upload(nuxeoBlob) // Note that we could also upload several blobs in the same batch using batch.upload(nuxeoBlob1, nuxeoBlob2, nuxeoBlob3...)
  .then(function(res) {
    // We can attach the file(s) to the document(s) now
  })
  .catch(function(error) {
    throw error;
  });
```

{{/panel}} {{#> callout type='info' heading='What You Should Remember'}}

*   Uploading files is done by creating `Nuxeo.Blob` objects, instantiating a batch, then uploading the files into the batch.
*   Once the files are uploaded, you can attach them to your documents by creating new documents or updating existing documents.

{{/callout}}

#### Practice - File Upload

**Your goals**

Use the JS client to upload a file and attach it to a contract.

**What you need to do**

Complete the following exercise.

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/2a3gguf5/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Delete and Trash Management

Deleting permanently a document is done through a simple `DELETE` call.

In the JS client, you can use the `delete` method contained in the [Repository](http://nuxeo.github.io/nuxeo-js-client/1.0.0/Repository.html) object: `nuxeo.repository().delete(documentRef)...`, where `documentRef` is either a document id or a document path.

If you want to handle a trash mechanism, you should rather change the document state: `document.followTransition(transitionName)...` where `document` is a Document object and `transitionName` the name of the transition to follow.

Using the default document lifecycle:

1.  Follow the `delete` transition to put a document in the `deleted` state.
2.  Follow the `undelete` transition to restore a document to the `project` state.

Then it is up to you to make sure your queries will not retrieve documents in the `deleted` state!

{{#> callout type='info' heading='What You Should Remember'}}

*   Deleting documents is done through `nuxeo.repository().delete(documentRef)...`, where `documentRef` is either a document id or a document path.
*   If you want to handle a trash mechanism, you should change the document state instead and make sure to adapt your queries accordingly, using: `document.followTransition(transitionName)...` where `document` is a Document object and `transitionName` the name of the transition to follow.

{{/callout}}

#### Practice - Document Deletion

**Your goals**

Use the JS client to:

*   Put a document in the deleted state
*   Delete permanently a document

**What you need to do**

Complete the following exercises.

*   Trash Management

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/tp188ypq/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

*   Document Deletion

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/zkz9ac2n/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Querying - Searching

Using the JS client, the [`Repository`](https://nuxeo.github.io/nuxeo-js-client/1.0.0/Repository.html) 's `query` method can be used both to:

### Launch Arbitrary NXQL Queries

In that case, specify the NXQL query to be launched in the query property: `nuxeo.Repository().query({ 'query': myQuery })...` where `myQuery` is a variable containing the query to launch.

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

See also the [NXQL]({{page page='nxql'}}) documentation to get a glimpse of all possibilities offered.

### Call Page Providers

A page provider is the underlying query when creating a content view in Nuxeo Studio.

In that case, you need to:

1.  Specify the content view id as defined in Nuxeo Studio in the `pageProvider` property
2.  Pass in the `queryParams` property an array containing the parameters, in the same order as they are defined in the content view.

```javascript
nuxeo.Repository().query({ 'pageProvider': 'pageProviderId', queryParams['parameter1', 'parameter2'...] })...
```

{{#> callout type='info' heading='What You Should Remember'}}

*   To query the database, you can use `nuxeo.Repository().query({ 'query': myQuery })...` where `myQuery` is a variable containing the query to launch.
*   If you want to query on the Elasticsearch index instead, you can create a page provider by defining a content view in Studio (only the query part is required), then call it using the JS client:

    ```javascript
    nuxeo.Repository().query({ 'pageProvider': 'pageProviderId', queryParams['parameter1', 'parameter2'...] })...
    ```

{{/callout}}

#### Practice - Querying and Searching

**Your goals**

Use the JS client to:

1.  Call a content view defined in Studio.
2.  Pass it some parameters.
3.  Launch a full-text search.

**What you need to do**

Complete the following exercises.

*   Calling Page Providers

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/h4q6oyLu/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

*   Launching NXQL Queries

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/y6pyfpc2/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Notes about Elasticsearch and the Passthrough API

**Where is the query launched?**

You are querying the database when launching an arbitrary NXQL query. When creating a page provider you can decide to use either the database or the Elasticsearch index.

**How Can I Take Advantage of the Whole Elasticsearch Features?**

Nuxeo provides a [passthrough API for Elasticsearch]({{page page='elasticsearch-passthrough'}}) that lets you benefit from the Elasticsearch API while handling security. When using it, queries are written using the Elasticsearch API, but they are actually sent to the Nuxeo Platform that reworks them. We won't cover this aspect during this training since you should rather head to the [Elasticsearch documentation](https://www.elastic.co/guide).

## Executing Business Logic through Automation

Automation operations, [chains]({{page page='how-to-create-an-automation-chain'}}) and [scripts]({{page page='automation-scripting'}}) can all be called with the JS client.

**When Should You Use Automation**

Whenever you want to execute some business logic and leverage the Nuxeo Platform functionalities.

**Why Should You Use Automation Chains or Scripts**

Every call to the REST API is a single transaction:

*   By using automation chains or scripts, you can execute several unitary operations in a single call.
*   Automation chains and scripts are executed as a single transaction: Either the whole chain / script is executed and the transaction is committed, or it is rolled back entirely.
*   Therefore, you should use them **whenever you need to execute logic that would require several calls as a single transaction.**

**How to Make Chain or Scripts Available through the REST API**

As soon as you create one of them in Nuxeo Studio and deploy your configuration in the Nuxeo Platform, the feature is available and can be called using the REST API. There is nothing special to do.

**How To Call Automation Operations - Chains - or Scripts**

Using the JS client's [`Operation`](https://nuxeo.github.io/nuxeo-js-client/1.0.0/Operation.html) object.

{{#> panel type='code' heading='Call a Chain or Script'}}

```javascript
nuxeo.operation('MyChainOrScriptId')
  .input('a Document object or an id or a path here')
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

{{#> callout type='info' heading='What You Should Remember'}}

*   You can execute automation operations, automation chains and automation scripts using the REST API.
*   Any custom operation, chain or script you created is immediately available on the server, there is nothing special to do.
*   The way to call them is similar, they all use the operation object:

    {{#> panel type='code' heading='Call a Chain or Script'}}

    ```javascript
    nuxeo.operation('MyChainOrScriptId')
      .input('a Document object or an id or a path here')
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

{{/callout}}

### Practice - Executing Business Logic

**Your goals**

1.  Create an automation script in Nuxeo Studio.
2.  Use the JS client to call the automation script on a contract.

**What you need to do**

1.  In Nuxeo Studio, complete the `BCAddToCollection` automation script.

    {{#> accordian heading='Solution' closed='true'}}

    ```javascript
    /******
    Adds a document to a specific collection in the user's workspace
    The collection is created if it doesn't exist

    The collection name is to be passed using the collectionName context parameter
    And can be accessed using ctx.collectionName in this automation script
    ******/
    function run(input, params) {

      // TODO: If the collectionName context variable is not set,
      // use "Contracts" as a default value
      if(!ctx.collectionName) {
        ctx.collectionName = "YOUPI";
      }

      // TODO: Retrieve the user's workspace
      // and place the result in a userWorkspace variable
      var userWorkspace = User.GetUserWorkspace(
        input, {
      });

      var collection = getCollectionInUserWorkspace(input, ctx.collectionName);
      // TODO: If the collection variable is null,
      // create a collection with the context variable's collectionName value
      // and place it in the collection variable.
      //
      // The collection needs to be created in the user workspace,
      // so make sure to send it as the input for the operation
      if(!collection) {
        collection = Collection.Create(
          userWorkspace, {
            /*required:true - type: string*/
            'name': ctx.collectionName,
            /*required:false - type: string*/
            'description': ""
          }
        );
      }

      // TODO: Add the document into the collection
      // No need to check if the document is already contained in it
      Document.AddToCollection(
        input, {
          /*required:true - type: document*/
          'collection': collection
        }
      );
      return input;
    }

    /******
    DO NOT EDIT BELOW THIS LINE
    ******/

    /****
     Returns the collection or null if it doesn't exist
    ****/  
    function getCollectionInUserWorkspace(input, collectionName) {
      var userWorkspace = User.GetUserWorkspace(
        input, {
        }
      );
      var userWorkspacePath = userWorkspace.path;
      var queryResults = Repository.Query(
        input, {
          /*required:true - type: string*/
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
2.  In the Nuxeo Platform, deploy your Nuxeo Studio configuration.
3.  Complete the following exercise.

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/qhxna546/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Restricting Automation Calls - Defining Security Measures

Sometimes you might need to create automation operations or chains, that should not be allowed to be used by everybody. Nuxeo Studio allows you to apply restrictions on them.

In the **Customization** menu, choose **Advanced Settings** > **Web Services Filtering** and create a new filter. You can then choose to restrict or disable some business logic related operations and chains.

{{#> callout type='info' heading='What You Should Remember'}}

In Nuxeo Studio, go into the **Customization** menu, choose **Advanced Settings** > **Web Services Filtering** and create a new filter to restrict or disable some business logic related operations and chains.

{{/callout}}

## Working with Workflows

Workflows can be launched using the JS client's [`Workflows`](http://nuxeo.github.io/nuxeo-js-client/1.0.0/Workflows.html) class.

A workflow can be started:

*   Without any document attached to it
*   With a single document attached to it
*   With multiple documents attached to it

### How to Start a Workflow

With the JS client, you can use the `nuxeo.workflows().start('workflowId')` method. The workflow id to pass is the one defined in Nuxeo Studio. Doing so will start a workflow without attaching a document.

### How to Attach Documents

#### Using the Document Class

Once the document is fetched, use the `startWorkflow` method:

{{#> panel type='code' heading='Starting a Workflow On a Document'}}

```javascript
document.startWorkflow('workflowId');
```

{{/panel}}

#### Using the Workflow Class

Before starting the workflow, you need to create an object containing the ids of the documents to attach.

{{#> panel type='code' heading='Workflow Options Object'}}

```javascript
var workflowOptions = {
      "attachedDocumentIds":
        ["docId1", "docId2", ...]
  };
```

{{/panel}}

Then pass this object when starting the workflow.

```javascript
nuxeo.workflows().start('workflowId', workflowOptions)...
```

### How to Complete a Task

1.  When the workflow is started, you are given a [`Workflow`](http://nuxeo.github.io/nuxeo-js-client/1.0.0/Workflow.html) class instance in the response.
2.  Using this object, retrieve the tasks it contains. You end up with an array containing [`Task`](http://nuxeo.github.io/nuxeo-js-client/1.0.0/Task.html) class instances.
3.  Then, iterate over them.
4.  You can fill the task form using the Task's variable method or during the complete method.
5.  Completing a task is done using the `complete(action, taskOptions)` method.
    *   The `action` variable defines the button id the user clicks on.
    *   The task options can be used to fill the task form if you didn't do it through the variable method.

{{#> callout type='info' heading='What You Should Remember'}}

*   Workflows can be started with either no document attached, a single one or multiple documents.
*   Use the workflow object to retrieve the tasks it contains.
*   Use the Task object to:
    *   Fill the task form using the `variable('variableToFill', 'value')` method.
    *   Complete it with the `complete(action, taskOptions)` method where action is the button id the user is considered to have clicked on.

{{/callout}}

### Practice - Workflows

**Your goals**

Use the JS client to:

1.  Launch a workflow
2.  Complete a workflow task (filling the form and clicking on a button)

**What you need to do**

Complete the following exercise.

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/ns8n5ddx/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Bonus - Contributing Your Own Content Enricher

We covered the basis of the Nuxeo REST API. There are some functionalities we left aside: [`Users`](https://nuxeo.github.io/nuxeo-js-client/1.0.0/Users.html) / [`Groups`](https://nuxeo.github.io/nuxeo-js-client/1.0.0/Groups.html) management, and [`Directories`](https://nuxeo.github.io/nuxeo-js-client/1.0.0/Directory.html) . Feel free to take a look at their corresponding classes.

Now we will start extending the REST API by contributing a custom content enricher.

### Our Goal

One thing we didn't mention so far is that the `ContractPortfolio` document type that you imported in Nuxeo Studio extends the `OrderedFolder` document type. It means that contracts can be ordered manually in the Nuxeo Platform UI. Our goal will be to create a content enricher that we can call to retrieve the contracts order.

We will do that in three phases:

1.  Creating the content enricher
2.  Declaring the content enricher
3.  Calling the content enricher

### Create the Content Enricher

A content enricher is a Java class that:

*   Extends the `AbstractJsonEnricher` class for a defined object (e.g.: `AbstractJsonEnricher<DocumentModel>` for a document)
*   Contains a `@Setup` annotation before the class declaration in order to define:
    *   How the class will be instantiated (usually as a singleton)
    *   Which class will have the highest priority in case of naming conflict
*   Uses the Jackson library to generate the JSON to be added in the response.

Here is a commented sample below:

{{{multiexcerpt 'enricher-class' page='Content Enricher'}}}

Now this is your turn to build yours!

**Your goals**

Create a content enricher to obtain the contract's latest version.

**What you need to do**

Copy the following Java class into your project and complete it:

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

      // TODO: Retrieve the CoreSession from the DocumentModel object

      // TODO: Use the JsonGenerator object to write a field with the enricher name

      // TODO: Use the JsonGenerator object to write an object with the last document version

    }
}
```

{{#> accordian heading='Solution' closed='true'}}

```
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

### Declare the Content Enricher

Declaring a content enricher is done through an XML component. You can declare it through Nuxeo Studio, or by adding an XML file in your Java project's `src/main/resources/OSGI-INF` folder. Here is a sample:

{{{multiexcerpt 'enricher-contrib' page='Content Enricher'}}}

If you declare it in your Java project, make sure to reference it in the project's `manifest.mf` file in the `src/main/resources/META-INF` folder, into the `Nuxeo-Component` list:

{{#> panel type='code' heading='Manifest.mf File Extract'}}

```text
...
Nuxeo-Component:OSGI-INF/org.nuxeo.sample.enrichers.parentDocEnricher.xml,OSGI-INF/org.nuxeo.sample.another-contribution.xml,...
```

{{/panel}}

Now you can declare yours!

**Your goals**

Declare your content enricher.

**What you need to do**

1.  Declare the content enricher in your Java project.
2.  Reference the component in the bundle's manifest file.

### Call the Content Enricher

Now that the enricher is created, you need to [package and deploy your application](https://university.nuxeo.io/nuxeo/university/#!/course/nuxeo-platform-developer-basics/package-deploy-application), then you can [call it](#enrichers)! Your enricher name is the one you put inside the `NAME` variable.

{{! /multiexcerpt}}
