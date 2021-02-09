---
title: Nuxeo Elements Quality Assurance
review:
    comment: ''
    date: '2021-02-03'
    status: ok
toc: true
labels:
    - lts2019-ok
    - nuxeo-elements
    - quality-assurance
    - testing
    - linting
    - performance
    - gbarata
    - security
tree_item_index: 100
---

When developing web applications with Nuxeo Elements there are several strategies and tools that can provide means for code quality, performance and security.
Using our experience, here we share some best practices and our views on these different quality assurance topics.

## Formatting and Linting

A *linter* is a code quality tool that scans your code and flags bugs, unoptimized code and other suspicious constructs. *Linting* is important because it keeps the code clean and enforces a predefined set of rules and good practices. Because JavaScript is a loosely-typed language, it is very easy to introduce bugs in the code. Therefore, a JavaScript linter becomes a crucial tool to help developers identify problems in the code without having to execute it. Our linter of choice is [ESLint](http://eslint.org/), and you can use our Nuxeo Web UI [config file](https://github.com/nuxeo/nuxeo-web-ui/blob/maintenance-3.0.x/.eslintrc.js) as a sample.

You can find a quick guide on how to run and setup ESLint in their [online documentation](http://eslint.org/docs/user-guide/getting-started).

You can use ESLint in two ways:
1. run it via command line (e.g. `eslint file.js`)
2. use it in an IDE or text editor and let it run as you type.
The latter is usually more convenient.

There is ESLint support for several of the most popular IDEs, including:
- [Atom](https://atom.io/packages/linter-eslint)
- [IntelliJ Idea](http://plugins.jetbrains.com/plugin/7494)
- [Sublime Text 3](https://github.com/roadhump/SublimeLinter-eslint)
- [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [and others](http://eslint.org/docs/user-guide/integrations)

Stepping up a notch, Polymer IDE provides linting, autocomplete and many more features to support development with Polymer. You can install it for [Atom](https://atom.io/packages/polymer-ide) and [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=polymer.polymer-ide).

## Performance Strategies

Nuxeo elements are the best tools for building a custom UI application on top of Nuxeo server. Below are guidelines to make the UI experience faster and to reduce server performance cost.

### Browser Cache

By default, the Nuxeo server deactivates the browser cache by setting the response header `Cache-Control` to `no-cache`, so no resource is considered "new" except for returned blobs (such as images, thumbnails, binaries in general): therefore, the browser will request a validation for those blobs from the server with `ETags` each time it refreshes.

In order to activate the browser cache, you can create a file `cache-browser-config.xml` in the `NUXEO_HOME/nxserver/config` folder and set the recommended following content:

```
<component name="org.nuxeo.browser.cache.settings">
  <require>org.nuxeo.ecm.platform.web.common.requestcontroller.service.RequestControllerService.defaultContrib</require>
  <extension target="org.nuxeo.ecm.platform.web.common.requestcontroller.service.RequestControllerService"
             point="responseHeaders">
    <header name="X-UA-Compatible">IE=10; IE=11</header>
    <header name="Cache-Control">private, max-age=3600, must-revalidate</header>
    <header name="X-Content-Type-Options">nosniff</header>
    <header name="X-XSS-Protection">1; mode=block</header>
    <header name="X-Frame-Options">${nuxeo.frame.options:=SAMEORIGIN}</header>
    <!-- this is a permissive Content-Security-Policy, which should be overridden for more security -->
    <header name="Content-Security-Policy">default-src *; script-src 'unsafe-inline' 'unsafe-eval' data: *; style-src 'unsafe-inline' *; font-src data: *
    </header>
  </extension>

</component>
```

- The cache will be `private` (i.e., you cannot cache the resources on a intermediate proxy like for instance a `CDN`)
- The `max-age` cache time is set to 1 hour (within the hour, the browser won't request a validation to the server of the blobs like thumbnails)
- Once the cache expires, the browser will request a validation of the blobs from the server if they have been updated

Here is [a schema](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/images/http-cache-decision-tree.png) which summarises browser caching strategies.

### Polymer

##### Vulcanizing the Polymer Elements

[`Vulcanize`](https://polymer-library.polymer-project.org/2.0/docs/apps/build-for-production) is a build tool that lets you concatenate a set of elements and their HTML imported dependencies into a single file. It will reduce network requests for a performant app experience. You can check out [this video](https://www.youtube.com/watch?v=EUZWE8EZ0IU) for a complete bootstrap.

##### Custom Polymer Elements - Anti-Patterns

When building a custom element, developers can achieve great things with Polymer by encapsulating logic that can be re-used multiple times. But be careful with how you build them:

- Optimize data loading by passing data between elements:

Try to use an element only once then pass the result through/between all elements to avoid unnecessary calls.

### Response Payloads

There are two ways to filter data from the server in order to avoid unnecessary quantity information in response:

- filtering by **schemas**
- using [**enrichers**]({{page version='' space='nxdoc' page='content-enrichers'}})

##### Schemas

When building views, listings and pages in general you need to determine which document information you want to display to your users.

For instance a listing could only require the `dublincore` schema of the documents and their summary links. The metadata displayed in each row would be:

- `dc:title`
- `dc:description`
- `dc:created` date
- and the navigation link to their summary

A document can contain several schemas with a dozen of metadata so the JSON payload in response could be unnecessarily too big. Building a listing of several documents can make the client side navigation slower: we need to filter schemas.

[Special header]({{page version='' space='nxdoc' page='special-http-headers'}}) is reserved for this purpose and can be used easily with the Nuxeo resource elements: `nuxeo-resource` and `nuxeo-operation`.

Example:

```
<nuxeo-operation auto
    op="Document.Query"
    params="{'query': 'select from Document'}"
    schemas="dublincore"
    on-response="\{{handleResponse}}">
    </nuxeo-operation>
```

This will fetch document definitions with only their `dublincore` metadata.

But we still need a permanent URL of the document for the navigation from this listing. To get it, let's call an enricher.

##### Enrichers

The Nuxeo [enrichers]({{page version='' space='nxdoc' page='content-enrichers'}}) are means to get additional computed documents information by simply setting a [special header]({{page version='' space='nxdoc' page='special-http-headers'}}). And if you cannot fullfil your need with the Nuxeo default headers, you can easily build your own.

For example, to get the permanent URL of a document with the Nuxeo resource elements (`nuxeo-resource` and `nuxeo-operation`), set the `enrichers` property:

```
<nuxeo-operation auto
    op="Document.Query"
    params="{'query': 'select from Document'}"
    schemas="dublincore"
    on-response="\{{handleResponse}}"
    enrichers="documentURL">
    </nuxeo-operation>
```

You will finally have all the information needed for your listing with a small amount of information in your response payload.

### Search

##### Elasticsearch

With Nuxeo platform, you have two ways of fetching data from the server for building listings and searching:

- Via 'direct' queries
- Via [`pageproviders`]({{page version='' space='nxdoc' page='page-providers'}})

Depending on your environment, you perform searches with Nuxeo Server on top of your **database** (PostgreSQL, MongoDB) or on top of your [**ElasticSearch**]({{page version='' space='nxdoc' page='elasticsearch-setup'}}) **(recommended)**.

For Elasticsearch (ES), use `pageproviders` which [can be activated for ES]({{page version='' space='nxdoc' page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}}) via the `nuxeo.conf` file and the following Nuxeo elements with related properties:

- [`nuxeo-page-provider`](https://www.webcomponents.org/element/nuxeo/nuxeo-elements/elements/nuxeo-page-provider) with the property `provider` set
- [`nuxeo-operation`](https://www.webcomponents.org/element/nuxeo/nuxeo-elements/elements/nuxeo-operation) with the operation [`Repository.PageProvider`](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewOperation/Repository.Query)

## Test Strategies

Testing your custom elements is paramount if you want to have reliable and easy to maintain components. We are [Karma](https://karma-runner.github.io/latest/index.html). It is a handy library that allows you to **unit test** your elements. Along with Karma, we are using [Mocha](http://mochajs.org/) as the test framework, [Chai](http://chaijs.com/) for the assertions and [Sinon](http://sinonjs.org/) to mock server responses.

However, testing how your custom elements work together and whether they actually play the role they are supposed to play becomes crucial as your application grows. That's what **functional and integration testing** are for! In the Web UI, we use [Cucumber](https://cucumber.io/) and [WebdriverIO](http://webdriver.io/) for Behavior-Driven Testing (or **BDD** for short), and to test the UI as a whole.

#### Quick Guide

All the elements to be tested, or to support testing directly, should be passed as an argument to the `fixture` function. Imagine we want to unit test the `nuxeo-collections` element. We must declare the test fixture as follows:

```js
const nuxeoConnection = await fixture(
  html`
    <nuxeo-connection></nuxeo-connection>
  `,
);
```

Most of our custom elements need to communicate with an instance of Nuxeo server, and that is true for `nuxeo-collections` as well. We must then declare a `nuxeo-connection` as a test-fixture beforehand, so that the Nuxeo JavaScript Client is properly initialized and `nuxeo-collections` can issue requests to the server:

```js
const nuxeoConnection = await fixture(
  html`
    <nuxeo-connection url="/dummy"></nuxeo-connection>
  `,
);
```

When defining your main test suite, you must setup a fake server using `sinon`, which will provide fake responses to your element's requests, and also initialize the `nuxeo-connection` element by logging in:

```JavaScript
suite('nuxeo-workflow-data', () => {
  let server;

  setup(async () => {
    server = await login();
  });
});
```

{{#> callout type='tip' heading='Test Helpers'}}
Here, the `login` method is part of our [test helpers](https://github.com/nuxeo/nuxeo-elements/blob/maintenance-3.0.x/testing-helpers/test-helpers.js#L148), which also includes several other support methods. Feel free to import them on your own test suites.
{{/callout}}

Oftentimes you'll want to perform more than one bundle of tests inside the same test file. In this case you can define *inner* test suites, i.e., test suites inside your main test suite. Inside these you should setup the responses that the fake server should issue to your custom elements.

So, imagine we want to test how our collections element behaves when there are collections to display. We can create a dedicated suite and setup a fake response with only a single entry:

```JavaScript
setup(() => {
  server.respondWith(
    'GET',
    '/dummy/api/v1/query/user_collections?currentPageIndex=0&pageSize=40&sortBy=dc%3Amodified&sortOrder=desc&searchTerm=%25&user=%24currentUser',
    [
      200,
      {'Content-Type': 'application/json'},
      JSON.stringify(
        {
          "entity-type": "documents",
          "entries": [{
            "entity-type":"document",
             "uid":"1",
             "type":"Collection",
             "title":"My Collection"
           }]
        }
      )
    ]
  );
});
```

{{#> callout type='note' heading='Sinon Documentation'}}
For more information about how to setup fake responses, please check the official [Sinon Documentation](http://sinonjs.org/docs/) for the matching version.
{{/callout}}

We now want to create a test case that verifies that our element actually displays the collection and that its DOM reflects this. We can do it by adding a test inside our test suite:

```JavaScript
test('it should display collections', () => {
    const  nuxeoConnection = await fixture(
      html`
        <nuxeo-connection url="/dummy"></nuxeo-connection>
      `,
    );
    const table = nuxeoError.shadowRoot.querySelector('nuxeo-data-list');
    // let's wait for the nuxeo-page-loaded event to be fired once before testing
    // only then will we have the data from the server
    await waitForEvent(table, 'nuxeo-page-loaded', 1);
    await flush();

    const collections = table.shadowRoot.querySelectorAll('.collection-box');
    expect(collections.length).to.be.equal(1); // there should be only one item
    expect(collections[0].querySelector('.collection-name').textContent).to.be.equal('My Collection'); // and its collection name should be "My Collection
  });
});
```

{{#> callout type='tip' heading='Test Helpers'}}
Again, the `waitForEvent` method is part of our [test helpers](https://github.com/nuxeo/nuxeo-elements/blob/maintenance-3.0.x/testing-helpers/index.js). This method waits for an event to be fired a specific amount of times before returning a promise. Similarly, you can use `waitChanged` to wait for a particular
property to change on an element, provided that it's set to `notify: true`. Please, check the Polymer documentation on [data-binding](https://polymer-library.polymer-project.org/3.0/docs/devguide/data-binding) for more information on this subject.
{{/callout}}

{{#> callout type='note' heading='Chai API'}}
For more information about how perform test asserts, please check the official [Chai documentation](http://chaijs.com/api/), which provides both BDD and TDD oriented APIs.
{{/callout}}

You can then run your tests using `npm run test`. This will run Karma and, in the case of the nuxeo-elements repository, it will check our three folders: Core, UI, and Dataviz. 

If you want to test your own element, you can always pass some handy arguments into your terminal:

```bash
    $ npm run test:watch -- --browsers Chrome --grep nuxeo-connection.test.js --package ui
```

Here we are using the `watch` parameter which will give you the possibility to see the test running on a browser. Using the flag `--browsers` let us specify in which browser do we want to run our test. We are also using the flag `--grep` to search our file. Since, in this example, `nuxeo-connection-test.js` is part of our UI folder, we need to also specify the `--package`.

For more examples on testing custom elements, please check our repositories:
- [nuxeo-elements unit tests](https://github.com/nuxeo/nuxeo-elements/tree/maintenance-3.0.x/ui/test)

### Cucumber

Our integration testing is done using [Cucumber.js](https://github.com/cucumber/cucumber-js) and [WebdriverIO](http://webdriver.io/). While the latter serves the purpose of providing a means to interact with the browser and run tests on it, similar to what is done in WCT, the former provides a way to run automated tests written in plain language. There are two key concepts of Cucumber tests: **features** and **step definitions**.

Features are implementation-independent, defined in *.feature* files, and they contain executable specifications written in a language called *Gherkin*. They specify scenarios where each line represents an **step** written in natural language, usually starting with **Given**, **When** and **Then**.

```
Background:
    Given I login as "Administrator"

Scenario: Admin center
    When I click the "administration" button
    Then I can see the administration menu
```

Step definitions bridge the gap between features and the system being tested. They translate plain text into interactions with the system. Step definitions are platform-dependent, and they use a regular expression the match the steps defined in the feature files, and implement the code required to execute the step.

```JavaScript
Given('I login as {string}', function(username) {
  this.username = username;
});

When('I click the {word} button', function(button) {
  this.ui.drawer.open(button);
});

Then('I can see the administration menu', function() {
  this.ui.drawer.administration.isVisible().should.be.true;
});
```

Cucumber allows for BDD using human-readable specifications. The advantages are two-fold: first, it allows specifications to be implemented by developers, but written in natural language by someone else, such as QA or business analyst; second, it makes error identification simpler for developers and non-developers alike, by showing clearly in plain language what steps failed. Please check [Cucumber](https://docs.cucumber.io/) and [Cucumber.js](https://github.com/cucumber/cucumber-js) documentation for more details.

For a more in-depth explanation on functional tests, please check the
[Web UI functional testing]({{page page='web-ui-functional-testing'}}) page!

## Security Strategies

### Search: GET method URL

With Nuxeo platform, you have two ways to fetch data from the server for building listings and searching:

- Via 'direct' queries
- Via [`pageproviders`]({{page version='' space='nxdoc' page='page-providers'}})

If your network environment (proxies, firewalls) doesn't allow queries inside URL for `GET` Method for security purpose, you have to avoid the `nuxeo-resource` usage with the endpoint `query` if you want to execute a search via 'direct' queries:

See this GET Method URL example:

```
http://NUXEO_SERVER/nuxeo/api/v1/query?currentPageIndex=0&pageSize=10&query=SELECT%20%2A%20FROM%20Document%20where%20ecm%3AprimaryType%20in%20%28%27UserProfile%27%29%20%20
```

**We recommend that you**:

- use page providers in general (see above in `Performance Strategies > Search`)
- use [`Repository.Query`](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewOperation/Repository.Query) operation with [`nuxeo-operation`](https://www.webcomponents.org/element/nuxeo/nuxeo-elements/elements/nuxeo-operation) element if you still want to search via 'direct' queries.
