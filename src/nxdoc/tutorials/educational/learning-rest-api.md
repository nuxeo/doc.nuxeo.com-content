---
title: Learning REST API
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
history:
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
{{! multiexcerpt name='REST_API_tuto '}}

This is a training on using REST API.

## Prerequisites

{{#> callout type='info' }}

This training is based on **Nuxeo Platform LTS 2015**.

{{/callout}}

### Technical Prerequisites

Before doing this training, you need the following:

*   **Browser**
    Google Chrome / Chromium browser with the [Postman extension](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop), or Firefox web browser with the [RESTED extension](https://addons.mozilla.org/en-US/firefox/addon/rested/)[](https://addons.mozilla.org/en-us/firefox/addon/restclient/)
*   **Nuxeo Cloud instance**
    You need access to a Nuxeo Cloud instance. If you don't, you should sign up for a [Nuxeo Online Services 30 days free trial](http://www.nuxeo.com/downloads/#online-trial).
*   **Nuxeo Studio project**
    You need a Nuxeo Studio project. Again, this is all part of the Nuxeo Online Services trial.
*   ****REST API Training application template****
    In Nuxeo Studio, import the REST API Training application template from the Customization > <span title=""><span class="treeLink">External Templates</span></span> menu.
*   **cURL** (optional)
    Available natively for mac and linux users, Windows users can [install it](https://curl.haxx.se/download.html#Win64). It is useful to check your CORS configuration.

### Required Knowledge

The following knowledge is needed to follow this course:

*   **Nuxeo Platform
    **Understanding [Nuxeo Platform document concept](https://university.nuxeo.io/nuxeo/university/#%21/course/using-nuxeo-platform/understanding-document-concept) is mandatory. Having a grasp about the [main Nuxeo Platform functionalities](https://university.nuxeo.io/nuxeo/university/#%21/course/using-nuxeo-platform) is highly recommended.
*   **Nuxeo Studio
    **Knowledge of the [main Nuxeo Studio functionalities](https://university.nuxeo.io/nuxeo/university/#%21/course/getting-started-nuxeo-studio) is necessary, because you will call custom features created in Studio during this course.
*   **JavaScript
    **JavaScript programming skills are required, as we will be using the Nuxeo JavaScript client to practice.
*   **(Optional) Java**
    Java programming skill are needed if you want to cover the bonus section of this training, to extend the REST API.

## Prepare Your Environment

### Nuxeo Studio

1.  Log in your Nuxeo Studio project at [https://connect.nuxeo.com](https://connect.nuxeo.com)
2.  Go into the `Settings / Application Dependencies` menu
3.  Set the target platform version to `Nuxeo Platform LTS` `2015` and save.
4.  Go into the `Customization / External Templates` menu
5.  Import the `REST API Training` application template

### Nuxeo Cloud Instance

1.  Log in your nuxeo.io manager at [https://manager.nuxeo.io](https://manager.nuxeo.io)
2.  Select your instance from the central zone of the screen, then stop your instance if it is running
3.  Edit your instance and make sure it is associated to your Nuxeo Studio project. In this example the associated Studio project is "REST API Training", but yours will be named differently of course.
    ![]({{file name='instance-studio-project.png' space='nxdoc710' page='learning-rest-api'}} ?w=300,thumbnail=true)
4.  Start your instance
5.  Once started, access it. URL can be seen in the manager, in this example it is `<span class="nolink">[https://my-instance-name.nuxeo.io](https://my-instance-name.nuxeo.io)</span> `. Make sure to use yours.
    ![]({{file name='instance-url.png' space='nxdoc710' page='learning-rest-api'}} ?w=300,thumbnail=true)
6.  Log in (default credentials are Administrator / Administrator)
7.  Install the <span class="confluence-link"><span class="confluence-link">[Nuxeo API Playground]({{page space='nxdoc710' page='use-nuxeo-api-playground-to-discover-the-api'}}) Nuxeo package</span></span> . Note that the instance has to be restarted for the installation to complete. The restart can be achieved as following:
    ![]({{file name='restart-instance.png' space='nxdoc710' page='learning-rest-api'}} ?w=500)
8.  [Deploy your Nuxeo Studio configuration](https://university.nuxeo.io/nuxeo/university/#%21/course/getting-started-nuxeo-studio/deploying-nuxeo-studio-configuration):
    ![]({{file name='deploy-configuration.png' space='nxdoc710' page='learning-rest-api'}} ?w=500)

## Useful REST API Resources

Information about the REST API usage can be found in various places. The most important ones are the following:

### API Playground

*   Found at [nuxeo.github.io/api-playground](http://nuxeo.github.io/api-playground/) or available as a [Nuxeo package]({{page space='admindoc710' page='installing-a-new-package-on-your-instance'}}).
*   Allows you to connect to a live Nuxeo Platform repository and discover / try the existing endpoints.

### Local Instance REST API Documentation

*   Found in your Nuxeo Platform instance at api/v1/doc.
    Assuming a Nuxeo Platform instance is running on your machine, the URL would be [http://localhost:8080/nuxeo/api/v1/doc](https://doc.nuxeo.com/nuxeo.github.io/api-playground)
    If you don't have a local instance, you can try it at [https://nightly.nuxeo.com/nuxeo/api/v1/doc](https://nightly.nuxeo.com/nuxeo/api/v1/doc)[
    ](https://nightly.nuxeo.com/api/v1/doc)Default login / password is Administrator / Administrator
*   Provides an automatically generated documentation with the available endpoints and what they expect.
*   Useful to get an idea of what you need to send in a request body.

### REST API Documentation

*   Found at [REST API]({{page space='nxdoc710' page='rest-api'}}) in our documentation center
*   Provides detailed technical documentation on the concepts. features and clients for the REST API.

### JS Client Documentation

*   Found at [nuxeo.github.io/nuxeo-js-client/1.0.0/](http://nuxeo.github.io/nuxeo-js-client/1.0.0/)
*   Provides explanations about the available objects and methods in the Nuxeo JS client, that we will use during this training.

### REST API Video Course

*   Found at the Nuxeo University [REST API course](https://university.nuxeo.io/nuxeo/university/#%21/course/working-with-nuxeo-platform-rest-api)
*   Helps getting you started quickly with the REST API's main concepts, and gives the relevant links to go further.

## REST API Principles

{{> wistia_video id='258cvm9i4j'}}

Extract from the course "[Working with the REST API](https://university.nuxeo.io/nuxeo/university/#%21/course/working-with-nuxeo-platform-rest-api)" on [Nuxeo University](https://university.nuxeo.io)

### Practice - REST API Principles

#### Your Goals

1.  Create a Contract from the Web UI.
2.  Retrieve it through the REST API using the API Playground in various manners.
3.  Use headers to change the response.

#### What You Need To Do

**Use the Nuxeo Platform Web UI to create a contract**

1.  Log in your Nuxeo Cloud instance ( `<span class="nolink">[https://your-instance-name.nuxeo.io](https://your-instance-name.nuxeo.io)</span>`). Note: your instance URL can be seen in the nuxeo.io manager.
    ![]({{file name='instance-url.png' space='nxdoc710' page='learning-rest-api'}} ?w=300,thumbnail=true)
2.  Deploy your Nuxeo Studio configuration.
    ![]({{file name='deploy-configuration.png' space='nxdoc710' page='learning-rest-api'}} ?w=500)
3.  Go to `default-domain/workspaces`:
    1.  Create a Contract Portfolio named "EMEA".
    2.  Create a Contract named "Beyond Space Travel Agency".
    3.  [Export the Contract]({{page space='userdoc710' page='exporting-documents'}}) using the **XML export** option.

**Retrieve the Contract Using the REST API**

Access your API Playground at `<span style="color: rgb(0,0,0);"><span class="nolink">[https://your-instance-name.nuxeo.io](https://your-instance-name.nuxeo.io)</span> /nuxeo/playground</span>`
Use the API Playground to:

1.  Log in to your Nuxeo Cloud instance ( [`https://your-instance-name.nuxeo.io/nuxeo`](https://your-instance-name.nuxeo.io/nuxeo) ).
2.  Fetch the contract:
    1.  Using the `Resources` `Id` endpoint. You will need to use the document id found in the XML export done previously for that.
    2.  Using the `Resources` `Path` endpoint. You will need to use the document path found in the XML export done previously for that.
    3.  Using the `Command` endpoint, and the `Fetch > Document` operation.
3.  Change the headers sent so that you only retrieve the `dublincore` and `bccontract` schemas.

#### What's the Best Way to retrieve a Document?

*   Using the `Resources` endpoint is preferable. The `Command` endpoint is better suited when you want to execute business logic.
*   Using the `Id` endpoint is recommended over the `Path` endpoint when possible, as it brings a small performance improvement.

## CORS Configuration

### Concepts

Setting up a CORS configuration is necessary to allow requests from other domains to be executed. That's a major need if your application is located on a distant server, and a security concern you need to think about. When dealing with your CORS configuration, you need to ask yourself the following questions:

*   Where will calls be allowed from?
*   What kind of calls do I want to allow?

### Defining a CORS Configuration

A CORS configuration can be done from Studio by adding an XML extension.

{{{multiexcerpt 'CORS-contrib' page='NXDOC710:Cross-Origin Resource Sharing (CORS)'}}}

Notice that **only GET, POST, HEAD, OPTIONS methods are allowed by default**. You need to explicitly set the supported methods in your configuration to allow PUT and DELETE calls.

Refer to the [CORS documentation]({{page page='cross-origin-resource-sharing-cors'}}) for all applicable configuration options.

#### Practice - CORS Configuration

#### Your Goals

Set up a CORS configuration that will only allow specific domains to execute requests.

#### What You Need To Do

*   In Nuxeo Studio:
    1.  Edit the XML extension providing a CORS configuration in Nuxeo Studio.
    2.  Only allow requests coming from:
        1.  [`https://jsfiddle.net`](https://jsfiddle.net) and its subdomains
        2.  [`https://jshell.net`](https://jshell.net) and its subdomains
    3.  Make sure the following methods will be supported: `GET, PUT, POST, DELETE, HEAD, OPTIONS`
    4.  Only allow requests on the following pattern: `/nuxeo/.*
        `

&nbsp;

{{#> accordian heading="CORS Configuration - Solution" closed='true'}}

```

    /nuxeo/.*

```

{{/accordian}}

&nbsp;

*   In your Nuxeo Cloud instance

1.  Deploy the Nuxeo Studio configuration
    ![]({{file name='deploy-configuration.png' space='nxdoc710' page='learning-rest-api'}} ?w=500)
2.  Restart the instance
    ![]({{file name='restart-instance.png' space='nxdoc710' page='learning-rest-api'}} ?w=500)

*   Open a terminal and launch the following commands to test your configuration:

```
# Please replace https://your-instance-name.nuxeo.io by your real nuxeo.io instance url 
# The following command should be denied by the CORS configuration.
# You should see: Cross-Origin Resource Sharing (CORS) Filter: CORS origin denied: http://www.nuxeo.com
curl --verbose -H "Origin: http://www.nuxeo.com" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: X-Requested-With" -X OPTIONS https://your-instance-name.nuxeo.io/nuxeo/site/foobar/upload
```

```
# Please replace https://your-instance-name.nuxeo.io by your real nuxeo.io instance url 
# The following command should be accepted by the CORS configuration.
curl --verbose -H "Origin: https://jsfiddle.net" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: X-Requested-With" -X OPTIONS https://your-instance-name.nuxeo.io/nuxeo/site/foobar/upload
```

## Introducing the REST API Clients

Clients exist in various languages to help wrapping your calls to the Nuxeo REST API.

Their goal is to handle the low-level plumbing and let you focus on high level functionalities, while integrating nicely in your favorite programming language / environment.

Here is a list of the existing clients. During this training we will focus on using the JavaScript client.

{{{multiexcerpt 'rest-api-clients' page='Clients'}}}

## A Word About the JavaScript Client

The JavaScript (JS) client is versatile enough to let you work in various contexts:

1.  In node.js
2.  In the browser by adding the library directly or through Bower
3.  In AngularJS applications

Latest release can be found in the [Nuxeo JS client repository](https://github.com/nuxeo/nuxeo-js-client/releases).

**You don't need to install it for this training**, all exercises will be provided in cloud based services.

{{#> callout type='info' }}

From now on, we will be practicing using the Nuxeo JS client.

{{/callout}}

## How The JavaScript Client Works

The JS client uses promises, that look like this:

```
var nuxeo = new Nuxeo({...});

nuxeo
  .someClass()
  .someMethod(variable1, variable2)
  .then(function(callResult){
    // the call succeedeed
    // now you can do something with the result variable
  })
  .catch(function(error){
    // there was an error during the call
    // you can use the error variable to see what went wrong
    throw error;
  });
```

&nbsp;

## Logging into Nuxeo Platform

Two authentication methods are supported by the JS client:

*   `basic` authentication: login and password are sent with a base64 encoding.
*   `token` authentication: a `basic` authentication is performed to obtain a token, then further calls make use of the token.

### Basic Authentication

Authenticating using the JS client is done by:

1.  Instantiating a [`Nuxeo`](http://nuxeo.github.io/nuxeo-js-client/1.0.0/Nuxeo.html) class.
2.  Set a baseURL property, unless you connect to your locahost.
3.  Add an auth object into it, passing it the authentication method, username and password.

    ```
    var nuxeo = new Nuxeo({
     baseUrl: 'http://localhost:8080/nuxeo',
     auth: {
       method: 'basic',
       username: 'Administrator',
       password: 'Administrator'
     }
    });
    ```

#### Practice - Authentication Using the JS Client

#### Your Goals

1.  Authenticate against your Nuxeo Cloud instance, using the JS client.

#### What You Need To Do

Complete the following exercise

<iframe width="100%" height="300" src="//jsfiddle.net/Nuxeo/mkrx18wh/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### (Optional) Token Authentication

Token authentication using the JS client is much safer:

1.  A first call is performed using a `basic` authentication. If the login succeeds, Nuxeo Platform creates a token (an access key) that can be used by the user to authenticate instead of sending its login and password.
2.  Further calls make use of the token, which means the password is not sent anymore, and the token is sent instead.
3.  If for any reason you want to prevent the user from logging in using this token, it can be revoked (destroyed) anytime from Nuxeo Platform's interface. Once revoked, a token cannot be used anymore and a new one needs to be created instead. Even if the token was to be compromised, an attacker would not be able to guess the user's password from it, and the token can be revoked to prevent further access.

Obviously, this is also slightly more complex, since it involves more steps:

1.  Instantiating a Nuxeo client, using a `basic` authentication as you did in the previous exercise.

    ```
    var tmpNuxeoClient = new Nuxeo({
     baseUrl: 'http://localhost:8080/nuxeo',
     auth: {
       method: 'basic',
       username: 'Administrator',
       password: 'Administrator'
     }
    });
    ```

2.  Use this instance to obtain a token:

    ```
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

3.  Instantiate another Nuxeo client, this time using a `token` authentication mechanism:

    ```
    var nuxeo = new Nuxeo({
     baseUrl: 'http://localhost:8080/nuxeo',
     auth: {
       method: 'token',
       token: tokenVariable
     }
    });
    ```

For security purpose, you should avoid defining the first client using the `basic` authentication in the global scope, and place it in a function call instead. You will be able to see a sample in the exercise below.

&nbsp;

#### Practice - Token Authentication Using the JS Client

#### Your Goals

1.  Authenticate against your Nuxeo Cloud instance, using the `token` authentication mechanism.

#### What You Need To Do

Complete the following exercise

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/0a8go893/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

&nbsp;

#### To Go Further

&nbsp;

[Authentication and User Management]({{page space='nxdoc710' page='authentication-and-user-management'}}) documentation

## Manipulating Documents

### Fetch

When using the Nuxeo JS client, fetching documents is done by using the [`Repository`](http://nuxeo.github.io/nuxeo-js-client/1.0.0/Repository.html) class.

```
nuxeo.repository().fetch("document id or path")...
```

&nbsp;

1.  #### Headers

Similarly to what we saw previously, headers can be set to fine-tune your request. Various headers are available, depending on the situation. A few examples when fetching a document:

1.  `X-NXproperties:schema1, schema2` Retrieves only specific schemas
2.  `X-NXproperties:*` Retrieves all schemas

More headers will be seen when they will be useful to us.

In the JS client, you can set headers:

1.  In the `Nuxeo` instance to make sure the headers will be sent for each call

```
nuxeo.header("someHeader", "someValue");
```

Note that some shortcut methods exist ; for instance to define the schemas to retrieve. Look at the [`Nuxeo`](http://nuxeo.github.io/nuxeo-js-client/1.0.0/Nuxeo.html) class documentation for them.

&nbsp;

1.  Only in a specific request to fine-tune a unique call.

```
var callOptions = {
  'headers': { 'headerName': 'headerValue', ... } 	// overrides all headers set for this call only
  'schemas': ['dublincore', 'common', ...] 			// overrides the schemas set in the Nuxeo object for this call only
};
nuxeo.class().method(..., callOptions)
```

{{#> callout type='info' heading="What You Should Remember"}}

Headers can be used to fine tune your queries:

1.  In all calls when used in the Nuxeo object
2.  In a specific call in you provide them in the call options

Shortcut methods exist in the JS client to avoid having to remember the header names.

{{/callout}}

1.  #### Practice - Using Headers

2.  #### Your Goals

3.  Use the JS client to:

    1.  Fetch a document,
    2.  Place an application wide header to fetch all document schemas.
4.  #### What You Need To Do

Complete the following exercise

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/5szmz4nq/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

1.  #### Resolvers

Resolvers allow you to retrieve the object associated to the id stored in a property, all within the same call. It can be used with:

1.  Documents,
2.  Users,
3.  Vocabulary entries

Assuming that we have:

1.  A `Contract` document referencing a `Company` document ID
2.  A `Company` document referencing a `country` vocabulary ID
3.  A `country` vocabulary

The `depth` header allow you to control the aggregation depth:

1.  [`depth:root`](http://depthroot) will retrieve objects attached to the current object (default)
    ![]({{file name='marshalling-depth-root.png' space='nxdoc710' page='learning-rest-api'}} ?w=300,thumbnail=true)
2.  [`depth:children`](http://depthchildren) will retrieve the objects referenced by the current object and 1 level deeper.
    ![]({{file name='marshalling-depth-children.png' space='nxdoc710' page='learning-rest-api'}} ?w=300,thumbnail=true)
3.  [`depth:max`](http://depthmax) will retrieve objects referenced by the current object, and objects referenced up to 2 levels deeper.
    ![]({{file name='marshalling-depth-max.png' space='nxdoc710' page='learning-rest-api'}} ?w=300,thumbnail=true)

On top of the depth header, you can use:

1.  A header:
    `X-NXfetch.document` with the property ids storing the references, for each additional object to retrieve, e.g.: `"X-NXfetch.document":"[mySchema:aProperty](http://mySchemaaProperty), [myOtherSchema:yetAnotherProperty](http://myOtherSchemayetAnotherProperty)"`

    Or `X-NXfetch.[document:properties](http://documentproperties)` instead to retrieve all objects at the same time.
2.  The corresponding JS client methods:

    ```
    nuxeo.someClass().fetchProperty('entity-type', 'myschema:myProperty')... 
    // You can use it as many times as needed to add other properties
    // TODO: you need to replace someClass by the appropriate class!

    nuxeo.someClass().fetchProperties( // TODO: you need to replace someClass by the appropriate class!
      // Declare all properties to fetch at once, overrides the previous definition
      // i.e. that would replace the resolver(s) declared using the fetchProperty method previously
      { 'entity-type', ['myschema:myProperty', 'anotherSchema:anotherProperty'] }
    )...
    ```

    1.  Entity types can be found in the [REST API Entity Types]({{page space='nxdoc710' page='rest-api-entity-types'}}) documentation page.

    2.  The entity type you have to fill is the one of the first object you are retrieving. For instance:
        ![]({{file name='document-entity.png' space='nxdoc710' page='learning-rest-api'}} ?w=300,thumbnail=true)
        When calling a document, you will be using the `document` entity in the `fetchProperty` method, no matter what kind of entity types further referenced objects may have.

        ![]({{file name='user-entity.png' space='nxdoc710' page='learning-rest-api'}} ?w=300,thumbnail=true)
        When calling a user, you will be using the `user` entity in the `fetchProperty` method, no matter what kind of entity types further referenced objects may have.

{{#> callout type='info' heading="What You Should Remember"}}

Using resolvers is a combination of:

1.  A depth header (with the root, children or max value)
2.  A list of objects to resolve, for which you need to specify an entity type and a xpath
3.  The entity type to use is always the one of the first object you are calling (document for a document, directoryEntry for a vocabulary entry, user for a user...)

{{/callout}}

&nbsp;

1.  #### Practice - Resolvers

2.  ##### Your Goals

3.  Update your content model to be able to use resolvers

4.  Use the appropriate headers to fetch all your objects in a single call
5.  ##### What You Need To Do

6.  In Nuxeo Studio
    1.  Add a companyId property into the `bccontract` schema
    2.  Make sure to use the `Document` property type to allow resolvers use on it
    3.  Update the `BCContractLayout` in the `Listing and Views / Form Layouts` menu to include it in all situations
7.  In your Nuxeo Cloud instance
    1.  Deploy your Studio configuration
    2.  Create a company
    3.  Reference the company in an existing contract
8.  Complete the following exercise

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/3brLoomy/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

1.  #### To Go Further

[JSON Marshalling]({{page space='nxdoc710' page='json-marshalling'}}) documentation

1.  #### Enrichers

{{> wistia_video id='ykaualv73f'}}

Extract from the course "[Working with the REST API](https://university.nuxeo.io/nuxeo/university/#%21/course/working-with-nuxeo-platform-rest-api)" on [Nuxeo University](https://university.nuxeo.io)

Adding enrichers when fetching a document is done by setting the `X-NXenrichers.document` header, "document" being here the entity-type that will be enriched. If you were calling a user, you would use a the `X-NXenrichers.user` header instead, and so on. As for resolvers, what matters here is the entity type of the first object you have been calling. Entity types are listed in the [REST API Entity Types]({{page space='nxdoc710' page='rest-api-entity-types'}}) documentation.

Enrichers are provided in the response into the `contextParameters` object.

The corresponding JS client methods:

```
nuxeo.someClass().enricher('entity-type', 'enricherName')... 
// You can use it as many times as needed to add other enrichers
// TODO: you need to replace someClass by the appropriate class!

nuxeo.someClass().enrichers( // TODO: you need to replace someClass by the appropriate class!
  // Declare all properties to fetch at once, overrides the previous definition
  // i.e. that would replace the resolver(s) declared using the fetchProperty method previously
  { 'entity-type', ['enricherName1', 'enricherName2'] }
)...
```

{{#> callout type='info' heading="What You Should Remember"}}

1.  Enrichers allow to retrieve anything on top of the response.
2.  Many enrichers are provided by default, and you can also contribute your own.
3.  To call an enricher, you need to pass a header or use the appropriate JS client method. You will need to specify either way the entity type you want to enrich and the enricher name.
4.  The entity type is the one of the first object you are calling (refer to the resolvers section for a larger overview)

{{/callout}}

1.  #### Practice - Enrichers

2.  ##### Your Goals

3.  Use the appropriate enrichers

4.  ##### What You Need To Do

5.  In your Nuxeo Cloud instance
    1.  Attach the following file to your existing contract: []({{file name='beyond-space-travel-agencies-contract.odt' space='nxdoc710' page='learning-rest-api'}})
6.  Complete the following exercise

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/c39thusw/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

1.  #### To Go Further

[REST API entity types]({{page space='nxdoc710' page='rest-api-entity-types'}}) documentation.

1.  #### Adapters

Adapters allow to adapt the response before retrieving it.They were created before enrichers, and today you can use enrichers instead of adapters for most of them.

Calling an adapter is done by using a `/@adaptername` (where adaptername is the name of the adapter) in your call URL.

There are some use cases where adapters come in handy. For instance:

1.  To retrieve a folderish document's children instead of the document itself

{{{multiexcerpt 'restapi-adapters-children' page='Web Adapters for the REST API'}}}

1.  To execute business logic and retrieve its output instead

{{{multiexcerpt 'restapi-adapters-op' page='Web Adapters for the REST API'}}}

1.  ##### Piping

Several adapters can be chained ; in this case the result of the first adapter will become the input for the second, and so on.

{{{multiexcerpt 'restapi-adapters-piping' page='Web Adapters for the REST API'}}}

1.  ##### Using Adapters With the JS Client

As adapters can virtually provide anything in the response, there is no specific class that can be used to call adapters in the JS client. Instead, you need to use the `Request` class and launch a call, passing the URL and the call method:

```
// Sample to retrieve the acls of the default domain
nuxeo.request('/path/default-domain/@acl')
  .get()
  .then(function(result){
    // Code to do something with the result here
  })
  .catch(function(error){
    // Code to handle error thrown here
  });

```

{{#> callout type='info' heading="What You Should Remember"}}

1.  Adapters are the ancestors of enrichers ; today using an enricher is preferable when possible.
2.  Adapters are called by adding a `/@adaptername` in the URL.
3.  Adapters can be chained, allowing more complex calls.
4.  Due to the unpredicable nature of calls made using adapters, the JS client does not offer specific methods to deal with them. You need to use the Request class, passing the URL and call method.

{{/callout}}

1.  #### Practice - Adapters

2.  ##### Your Goals

3.  Use the appropriate adapter to retrieve your contract's audit log. You can use the [Web Adapters for the REST API]({{page space='nxdoc710' page='web-adapters-for-the-rest-api'}}) documentation to check which adapter to call.

4.  ##### What You Need To Do

5.  Complete the following exercise

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/cb1q1euv/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

1.  #### To Go Further

[Web Adapters for the REST API]({{page space='nxdoc710' page='web-adapters-for-the-rest-api'}}) documentation.

1.  ### Creation

Creating a document is done using the JS client `nuxeo.repository().create("parentRef", document)...` method.

The `parentRef` is the id or path under which your document should be created.

A [`Document`](http://nuxeo.github.io/nuxeo-js-client/1.0.0/Document.html) can't be instantiated directly, so you need to create the object manually. Refer to the [REST API Entity Types]({{page space='nxdoc710' page='rest-api-entity-types'}}) documentation to see what you need to send.

{{{multiexcerpt 'restapi-doc-entity-post' page='REST API Entity Types'}}}

{{#> callout type='info' heading="What You Should Remember"}}

1.  Creating a document is done using the JS client `nuxeo.repository().create("parentRef", document)...` method, where:
    1.  parentRef is the document id or path under which the document should be created
    2.  document is the document object that will be used to create your actual document
2.  Use the [REST API Entity Types]({{page space='nxdoc710' page='rest-api-entity-types'}}) documentation to see what a document object should look like.
3.  The created document will be returned ; check the response to get the document's id, name and path.

{{/callout}}

1.  #### Practice - Document Creation

2.  ##### Your Goals

3.  Create a Contract using the JS client

4.  ##### What You Need To Do

5.  Complete the following exercise

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/bpw3d4tb/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

1.  ### Update

Updating a document is done using the JS client `nuxeo.repository().update(document)...` method.

The `document` parameter is a document object containing:

1.  the entity-type,
2.  the document id (in a `uid` field),
3.  the properties to update (in a properties object)

```
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

1.  #### Creating a Version

<span>The</span> `<span>X-<span>Versioning-Option</span></span> `<span>header can be used when you need to increment the minor or major version, and **returns the versioned document**. Creating a version also means that you will be able to revert to that version later if needed. <span>By default, no version is created when updating a document and the 'live' (snapshot) document is returned.</span></span>

<span>Accepted values for the header are <span>`MAJOR` (creates a version and increments the major version number), `MINOR` <span><span>(creates a version and increments the minor version number)</span></span> or `NONE` (no version is created, if another update is performed later you won't be able to revert the document to the specific state you left it in during the first update). There is no functional difference between a minor and major version.
</span></span>

{{#> callout type='info' heading="What You Should Remember"}}

1.  Updating a document is done using the JS client `nuxeo.repository().update(document)...` method, where:

    1.  document is the document object that will be used to create your actual document
2.  Use the [REST API Entity Types]({{page space='nxdoc710' page='rest-api-entity-types'}}) documentation or the previous sample to see what a document object should look like.
3.  By default no version is created. You can use the<span>&nbsp;</span> `<span>X-<span>Versioning-Option</span></span> `<span>header</span> to create a version. Value: `MAJOR` for a major version number increment, `MINOR` for a minor version number increment.

{{/callout}}

1.  #### Practice - Document Update

2.  ##### Your Goals

3.  Use the JS client to update a contract while creating a major version.

4.  ##### What You Need To Do

5.  Complete the following exercise:

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/h0p82q00/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

1.  ### File Upload

{{> wistia_video id='qokay4hw1i'}}

Extract from the course "[Working with the REST API](https://university.nuxeo.io/nuxeo/university/#%21/course/working-with-nuxeo-platform-rest-api)" on [Nuxeo University](https://university.nuxeo.io)

File upload in the REST API is done through the batch upload endpoint in order to upload files outside of the context of a transaction. This means that you can upload files as big as you want without risking a timeout.

1.  #### Uploading a File Using the JS Client

File upload with the JS client is done in three main steps:

1.  Create a `Nuxeo.Blob` object containing the file,
2.  Instantiate a batch,
3.  Upload the file.

The file can be attached to the document either during the document creation, or by updating it.

```
// Create the blob wrapper
// We assume you already obtained the file from a form and placed it into a selectedFile variable
var nuxeoBlob = new Nuxeo.Blob({ 'content': selectedFile });

// Start a new batch
var batch = nuxeo.batchUpload();

// Upload the file in the batch
batch.upload(nuxeoBlob) // Note that we could also upload several blobs in the same batch using batch.upload(nuxeoBlob1, nuxeoBlob2, nuxeoBlob3...)
  .then(function(res) {
    // we can attach the file(s) to the document(s) now
  })
  .catch(function(error) {
    throw error;
  });
```

{{#> callout type='info' heading="What You Should Remember"}}

1.  Uploading files is done by creating `Nuxeo.Blob` objects, instantiating a batch, then uploading the files into the batch.
2.  Once the files are uploaded, you can attach them to your documents by creating new documents or updating existing documents.

{{/callout}}

1.  #### Practice - File Upload

2.  ##### Your Goals

3.  Use the js client to upload a file and attach it to a contract.

4.  ##### What You Need To Do

5.  Complete the following exercise:

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/2a3gguf5/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

1.  ### Delete and Trash Management

Deleting permanently a document is done through a simple `DELETE` call.

In the JS client, you can use the delete method contained in the [Repository](http://nuxeo.github.io/nuxeo-js-client/1.0.0/Repository.html) object: `nuxeo.repository().delete(documentRef)...`, where `documentRef` is either a document id or a document path.

If you want to handle a trash mechanism, you should rather change the document state: `document.followTransition(transitionName)...` where `document` is a Document object and `transitionName` the name of the transition to follow.

Using the default document lifecycle:

1.  Follow the `delete` transition to put a document in the `deleted` state,
2.  Follow the `undelete` transition to restore a document to the `project` state.

Then it's up to you to make sure your queries will not retrieve documents in the `deleted` state!

{{#> callout type='info' heading="What You Should Remember"}}

1.  Deleting documents is done through `nuxeo.repository().delete(documentRef)...`, where `documentRef` is either a document id or a document path.
2.  If you want to handle a trash mechanism, you should change the document state instead and make sure to adapt your queries accordingly, using: `document.followTransition(transitionName)...` where `document` is a Document object and `transitionName` the name of the transition to follow.

{{/callout}}

1.  #### Practice - Document Deletion

2.  ##### Your Goals

3.  Use the JS client to:

    1.  Put a document in the deleted state,
    2.  Delete permanently a document.
4.  ##### What You Need To Do

5.  Complete the following exercises
6.  ###### Trash Management

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/tp188ypq/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

1.  ###### Document Deletion

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/zkz9ac2n/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

1.  ## Querying - Searching

Using the JS client, the [`Repository`](https://nuxeo.github.io/nuxeo-js-client/1.0.0/Repository.html) 's `query` method can be used both to:

1.  ### Launch arbitrary NXQL queries

In that case, you need to:

1.  Specify the NXQL query to be launched in the query property: `nuxeo.Repository().query({ 'query': myQuery })...` where `myQuery` is a variable containing the query to launch.

```
SELECT * FROM Document 
	WHERE ecm:mixinType != 'HiddenInNavigation' 
	AND ecm:isProxy = 0 
	AND ecm:isCheckedInVersion = 0 
	AND ecm:currentLifeCycleState != 'deleted' 
	AND ecm:fulltext LIKE 'MyKeyword'
```

See also the [NXQL]({{page space='nxdoc710' page='nxql'}}) documentation to get a glimpse of all possibilities offered.

1.  ### Call page providers

A page provider is the underlying query when creating a content view in Nuxeo Studio.

In that case, you need to:

1.  specify the content view id as defined in Nuxeo Studio in the `pageProvider` property,
2.  and pass in the `queryParams` property an array containing the parameters, in the same order as they are defined in the content view.

```
nuxeo.Repository().query({ 'pageProvider': 'pageProviderId', queryParams['parameter1', 'parameter2'...] })...
```

{{#> callout type='info' heading="What You Should Remember"}}

1.  To query the database, you can use `nuxeo.Repository().query({ 'query': myQuery })...` where `myQuery` is a variable containing the query to launch.
2.  If you want to query on the elasticsearch index instead, you can create a page provider by defining a content view in Studio (only the query part is required), then call it using the JS client:

    `nuxeo.Repository().query({ 'pageProvider': 'pageProviderId', queryParams['parameter1', 'parameter2'...] })...`

{{/callout}}

1.  #### Practice - Querying and Searching

2.  ##### Your Goals

3.  Use the JS client to:

    1.  Call a content view defined in Studio,
    2.  Pass it some parameters,
    3.  Launch a fulltext search
4.  ##### What You Need To Do

5.  Complete the following exercises
6.  ###### Calling Page Providers

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/h4q6oyLu/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

1.  ###### Launching NXQL Queries

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/y6pyfpc2/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

1.  ### Note About Elasticsearch and the Passthrough API

2.  #### Where is the query launched?

3.  You are querying the database when launching an arbitrary NXQL query,
4.  When creating a page provider you can decide to use either the database or the Elasticsearch index.
5.  #### How Can I Take Advantage of the Whole Elasticsearch Features?

6.  Nuxeo provides a [passthrough API for Elasticsearch]({{page space='nxdoc710' page='elasticsearch-passthrough'}}) that lets you benefit from the Elasticsearch API while handling security.
7.  When using it, queries are written using the Elasticsearch API, but they are actually sent to Nuxeo Platform that reworks them.
8.  We won't cover this aspect during this training since you should rather head to the [Elasticsearch documentation](https://www.elastic.co/guide)
9.  ## Executing Business Logic Through Automation

Automation operations, [chains]({{page space='nxdoc710' page='how-to-create-an-automation-chain'}}) and [scripts]({{page space='nxdoc710' page='automation-scripting'}}) can all be called with the JS client.

1.  ### When Should You Use Automation

2.  Whenever you want to execute some business logic and leverage the Nuxeo Platform functionalities.
3.  ### Why Should You Use Automation Chains or Scripts

4.  Every call to the REST API is a single transaction:
    1.  By using automation chains or scripts, you can execute several unitary operations in a single call
    2.  Automation chains and scripts are executed as a single transaction: either the whole chain / script is executed and the transaction is committed, or it is rolled back entirely.
    3.  Therefore, you should use them **whenever you need to execute logic that would require several calls as a single transaction**
5.  ### How To Make Chain or Scripts Available Through the REST API

As soon as you create one of them in Nuxeo Studio and deploy your configuration in Nuxeo Platform, the feature is available and can be called using the REST API. There is nothing special to do.

1.  ### How To Call Automation Operations - Chains - or Scripts

Using the JS client's [`Operation`](https://nuxeo.github.io/nuxeo-js-client/1.0.0/Operation.html) object.

```
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

Note that automation scripts are prefixed by `javascript.` So if your automation script is called `myScript` in Nuxeo Studio, you should call `javascript.myScript`

{{#> callout type='info' heading="What You Should Remember"}}

1.  You can execute automation operations, automation chains and automation scripts using the REST API.
2.  Any custom operation, chain or script you created is immediately available on the server, there is nothing special to do.
3.  The way to call them is similar, they all use the operation object:

```
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

{{/callout}}

1.  #### Practice - Executing Business Logic

2.  ##### Your Goals

3.  Create an automation script in Nuxeo Studio
4.  Use the JS client to call the automation script on a contract
5.  ##### What You Need To Do

6.  In Nuxeo Studio, complete the <span title=""><span class="treeLink">BCAddToCollection</span> automation script.</span><span title="">
    </span>

    {{#> accordian heading="Solution" closed='true'}}

    ```
    /******
    Adds a document to a specific collection in the user's workspace
    The collection is created if it doesn't exist

    The collection name is to be passed using the collectionName context parameter
    And can be accessed using ctx.collectionName in this automation script
    ******/
    function run(input, params) {

      // TODO: if the collectionName context variable is not set, 
      // use "Contracts" as a default value
      if(!ctx.collectionName) {
        ctx.collectionName = "YOUPI";
      }

      // TODO: retrieve the user's workspace 
      // and place the result in a userWorkspace variable
      var userWorkspace = User.GetUserWorkspace(
        input, {
      });

      var collection = getCollectionInUserWorkspace(input, ctx.collectionName);
      // TODO: if the collection variable is null, 
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

      // TODO: add the document into the collection
      // no need to check if the document is already contained in it
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
7.  In Nuxeo Platform, deploy your Nuxeo Studio configuration.
8.  Complete the following exercise:

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/qhxna546/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

1.  ## Restricting Automation Calls - Defining Security Measures

Sometimes you might need to create automation operations or chains, that should not be allowed to be used by everybody.

Nuxeo Studio allows you to apply restrictions on them.

In the `Customization` menu, choose `Advanced Settings` / <span title="">`<span class="treeLink">Web Services Filtering</span>` and create a new filter. You can then choose to restrict or disable some business logic related operations and chains.</span>

{{#> callout type='info' heading="What You Should Remember"}}

1.  In Nuxeo Studio, go into the `Customization` menu, choose `Advanced Settings` / <span title="">`<span class="treeLink">Web Services Filtering</span>` and create a new filter to restrict or disable some business logic related operations and chains.</span>

{{/callout}}

1.  ## Working With Workflows

Workflows can be launched using the JS client's [`Workflows`](http://nuxeo.github.io/nuxeo-js-client/1.0.0/Workflows.html) class.

A workflow can be started:

1.  Without any document attached to it
2.  With a single document attached to it
3.  With multiple documents attached to it
4.  ### How To Start a Workflow

With the JS client, you can use the `nuxeo.workflows().start('workflowId')` method.

The workflow id to pass is the one defined in Nuxeo Studio.

Doing so will start a workflow without attaching a document.

1.  ### How To Attach Documents

2.  #### Using the Document class

Once the document is fetched, use the startWorkflow method:

```
document.startWorkflow('workflowId');
```

1.  #### Using the Workflow class

Before starting the workflow, you need to create an object containing the document ids to attach.

```
var workflowOptions = {
      "attachedDocumentIds": 
        ["docId1", "docId2", ...]
  };
```

Then pass this object when starting the workflow.

`nuxeo.workflows().start('workflowId', workflowOptions)...`

1.  ### How To Complete a Task

2.  When the workflow is started, you are given a [`Workflow`](http://nuxeo.github.io/nuxeo-js-client/1.0.0/Workflow.html) class instance in the response.
3.  Using this object, you can retrieve the tasks it contains. You end up with an array containing [`Task`](http://nuxeo.github.io/nuxeo-js-client/1.0.0/Task.html) class instances.
4.  Then, you can iterate over them.
5.  You can fill the task form using the Task's variable method or during the complete method.
6.  Completing a task is done using the `complete(action, taskOptions)` method.
    1.  The action variable defines the button id the user clicks on.
    2.  The task options can be used to fill the task form if you didn't do it through the variable method.

{{#> callout type='info' heading="What You Should Remember"}}

1.  Workflows can be started with either no document attached, a single one or multiple documents.
2.  <span title="">&nbsp;</span>Use the workflow object to retrieve the tasks it contains
3.  Use the Task object to:
    1.  fill the task form using the `variable('variableToFill', 'value')` method.
    2.  complete it with the `complete(action, taskOptions)` method where action is the button id the user is considered to have clicked on.

{{/callout}}

1.  ### Practice - Workflows

2.  #### Your Goals

3.  Use the JS client to:
    1.  Launch a workflow
    2.  Complete a workflow task (filling the form and clicking on a button)
4.  #### What You Need To Do

5.  Complete the following exercise:<span title="">&nbsp;</span>

<iframe width="100%" height="300" src="//jsfiddle.net/nuxeo/ns8n5ddx/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

1.  ## Bonus - Contributing Your Own Content Enricher

We covered the basis of the Nuxeo REST API. There are some functionalities we left aside: [`Users`](https://nuxeo.github.io/nuxeo-js-client/1.0.0/Users.html) / [`Groups`](https://nuxeo.github.io/nuxeo-js-client/1.0.0/Groups.html) management, and [`Directories`](https://nuxeo.github.io/nuxeo-js-client/1.0.0/Directory.html) . Feel free to take a look at their corresponding classes.

Now we will start extending the REST API by contributing a custom content enricher.

1.  ### Our Goal

One thing we didn't mention so far is that the `ContractPortfolio` document type that you imported in Nuxeo Studio extends the `OrderedFolder` document type. It means that contracts can be ordered in the Nuxeo Platform Web UI.

Our goal will be to create a content enricher that we can call to retrieve the contracts order.

We will do that in 3 phases:

1.  Creating the Content Enricher
2.  Declaring the Content Enricher
3.  ### Phase 1 - Creating the Content Enricher

A content enricher is a Java class that:

1.  Extends the `AbstractJsonEnricher` class for a defined object (e.g.: `AbstractJsonEnricher<DocumentModel>` for a document)
2.  Contains a `@Setup` annotation before the class declaration in order to define:
    1.  How the class will be instanciated (usually as a singleton)
    2.  Which class will have the highest priority in case of naming conflict
3.  Uses the Jackson library to generate the json to be added in the response.

Here is a commented sample below:

{{{multiexcerpt 'enricher-class' page='Content Enricher'}}}

Now this is your turn to build yours!

1.  #### Your Goals

2.  Create a content enricher to obtain the contract's latest version
3.  #### What You Need To Do

Copy the following Java class into your project and complete it:

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

public class LastVersionEnricher extends AbstractJsonEnricher { 
    public static final String NAME = "lastVersion";
    public SampleEnricher() {
        super(NAME);
    }
    // Method that will be called when the enricher is asked for
    @Override
    public void write(JsonGenerator jg, DocumentModel doc) throws IOException {
      // TODO: Retrieve the CoreSession from the DocumentModel object

      // TODO: Retrieve the CoreSession from the DocumentModel object

      // TODO: use the JsonGenerator object to write a field with the enricher name

      // TODO: use the JsonGenerator object to write an object with the last document version

    }
}
```

{{#> accordian heading="Solution" closed='true'}}

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
public class LastVersionEnricher extends AbstractJsonEnricher { 
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
      // TODO: use the JsonGenerator object to write a field with the enricher name
      jg.writeFieldName(NAME);
      // TODO: use the JsonGenerator object to write an object with the last document version
      jg.writeObject(lastVersion);
    }
}
```

{{/accordian}}

1.  ### Phase 2 - Declaring the Content Enricher

Declaring a content enricher is done through an XML component.

You can declare it through Nuxeo Studio, or by adding an XML file in your Java project's `src/main/resources/OSGI-INF` folder. Here is a sample:

{{{multiexcerpt 'enricher-contrib' page='Content Enricher'}}}

If you declare it in your Java project, make sure to reference it in the project's `manifest.mf` file in the `src/main/resources/META-INF` folder, into the `Nuxeo-Component` list:

```
...
Nuxeo-Component:OSGI-INF/org.nuxeo.sample.enrichers.parentDocEnricher.xml,OSGI-INF/org.nuxeo.sample.another-contribution.xml,...

```

Now you can declare yours!

1.  #### Your Goals

2.  Declare your content enricher
3.  #### What You Need To Do

4.  Declare the content enricher in your Java project,
5.  Reference the component in the bundle's manifest file.
6.  ### Calling the Content Enricher

Now that the enricher is created, you need to [package and deploy your application](https://university.nuxeo.io/nuxeo/university/#%21/course/nuxeo-platform-developer-basics/package-deploy-application), then you can [call it]({{page}})! Your enricher name is the one you put inside the `NAME` variable.

{{! /multiexcerpt}}