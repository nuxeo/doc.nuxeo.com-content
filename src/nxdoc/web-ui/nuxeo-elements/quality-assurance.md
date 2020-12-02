---
title: Nuxeo Elements Quality Assurance
review:
    comment: 'Needs to be updated after migration to Polymer 2.0 legacy API.'
    date: '2017-12-15'
    status: requiresUpdates
toc: true
labels:
    - lts2016-ok
    - nuxeo-elements
    - quality-assurance
    - testing
    - linting
    - performance
    - gbarata
    - security
    - content-review-lts2017
tree_item_index: 100

---
When developing web applications with Nuxeo Elements there are several strategies and tools that can provide means for code quality, performance and security.
Using our experience, here we share some best practices and our views on these different quality assurance topics.

## Formatting and Linting

A *linter* is a code quality tool that scans your code and flags bugs, unoptimized code and other suspicious constructs. *Linting* is important because it keeps the code clean and enforces a predefined set of rules and good practices. Because JavaScript is a loosely-typed language, it is very easy to introduce bugs in the code. Therefore, a JavaScript linter becomes a crucial tool to help developers identify problems in the code without having to execute it. Our linter of choice is [ESLint](http://eslint.org/), and you can use our Nuxeo Web UI [config file](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/.eslintrc.json) as a sample.

You can find a quick guide on how to run and setup ESLint in their [online documentation](http://eslint.org/docs/user-guide/getting-started).

You can use ESLint in two ways: a) run it via command line (e.g. `eslint file.js`), or b) use it in an IDE or text editor and let it run as you type. The latter is usually more convenient. There is ESLint support for several of the most popular IDEs, including:
- [Atom](https://atom.io/packages/linter-eslint)
- [Intellij Idea](http://plugins.jetbrains.com/plugin/7494)
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

- The cache will be `private` (you cannot cache the resources on a intermediate proxy like for instance a `CDN`)
- The `max-age` cache time is set to 1 hour (within the hour, the browser won't request a validation to the server of the blobs like thumbnails)
- Once the cache expires, the browser will request a validation of the blobs from the server if they have been updated

Here is [a schema](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/images/http-cache-decision-tree.png) which summarises browser caching strategies.

### Polymer

##### Vulcanizing the Polymer Elements

[`Vulcanize`](https://www.polymer-project.org/1.0/docs/tools/optimize-for-production) is a build tool that lets you concatenate a set of elements and their HTML imported dependencies into a single file. It will reduce network requests for a performant app experience. You can check out [this video](https://www.youtube.com/watch?v=EUZWE8EZ0IU) for a complete bootstrap.

##### Custom Polymer Elements - Anti-Patterns

When building a custom element, developers can achieve great things with Polymer by encapsulating logic that can be re-used multiple times. But be careful with how you build them:

- Optimize data loading by passing data between elements:

Try to use an element only once then pass the result through/between all elements to avoid unnecessary calls.

### Response Payloads

There are two ways to filter data from the server in order to avoid unnecessary quantity information in response:

- filtering by **schemas**
- using [**enrichers**]({{page version='' space='nxdoc' page='content-enrichers'}})

##### Schemas

When building views, listings and pages in general you need to determine which document information you want to display for your users.

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

Depending on your environment, you perform searches with Nuxeo Server on top of your **database** (Mysql/MariaDB, Postgresql, MongoDB, Oracle...) or on top of your [**ElasticSearch**]({{page version='' space='nxdoc' page='elasticsearch-setup'}}) **(recommended)**.

For Elasticsearch (ES), use `pageproviders` which [can be activated for ES]({{page version='' space='nxdoc' page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}}) via the `nuxeo.conf` file and the following Nuxeo elements with related properties:

- [`nuxeo-page-provider`](https://www.webcomponents.org/element/nuxeo/nuxeo-elements/elements/nuxeo-page-provider) with the property `provider` set
- [`nuxeo-operation`](https://www.webcomponents.org/element/nuxeo/nuxeo-elements/elements/nuxeo-operation) with the operation [`Repository.PageProvider`](http://explorer.nuxeo.com/nuxeo/site/distribution/10.10/viewOperation/Repository.Query)

## Test Strategies

Testing your custom elements is paramount if you want to have reliable and easy to maintain components. The Polymer team already provides the [Web Component Tester](https://github.com/Polymer/web-component-tester)
(hereafter referred to as **WCT**), a handy library that allows you to **unit test** your elements. This is the library we use to individually test our custom components. However, testing how your custom elements work together and whether they actually play the role they are supposed to play becomes crucial as your application grows. That's what **functional and integration testing** are for! In the Web UI, we use [Cucumber](https://cucumber.io/) and [WebdriverIO](http://webdriver.io/) for Behavior-Driven Testing (or **BDD** for short), and to test the UI as a whole. Alternative solutions, such as [NighwatchJS](http://nightwatchjs.org/), have proven to be valuable tools in testing applications that use web components, while following both **BDD** and more test-driven approaches to development (**TDD**).

### Web Component Tester

[WCT](https://github.com/Polymer/web-component-tester) is Polymer's approach to testing custom elements. This library relies on several frameworks to provide a flexible test environment for your components. It includes
[Mocha](http://mochajs.org/) as the test framework, [Chai](http://chaijs.com/) for the assertions, [Sinon](http://sinonjs.org/) to mock server responses, and [WD](http://admc.io/wd/) to provide an interface to communicate with the web browser. WCT is best used from the [Polymer CLI](https://www.polymer-project.org/1.0/docs/tools/polymer-cli).
We recommend reading Polymer's Documentation on [WCT](https://www.polymer-project.org/1.0/docs/tools/tests) and watching Polycasts [#36](https://www.youtube.com/watch?v=YBNBr9ECXLo) and [#37](https://www.youtube.com/watch?v=_9qARcdCAn4) for a better understanding on how to setup and run your tests before proceeding to the next section.

#### Quick Guide

All the elements to be tested or to support testing directly should be declared as a `test-fixture`. Imagine we want to unit test the `nuxeo-collections` element. We must declare the test fixture as follows:

```html
<test-fixture id="collections">
  <template>
    <nuxeo-collections visible></nuxeo-collections>
  </template>
</test-fixture>
```

Most of our custom elements need to communicate with an instance of Nuxeo server, and that is true for `nuxeo-collections` as well. We must then declare a `nuxeo-connection` as a test-fixture beforehand, so that the Nuxeo JavaScript Client is properly
initialized and `nuxeo-collections` can issue requests to the server:

```html
<test-fixture id="nx">
  <template>
    <nuxeo-connection url="/dummy"></nuxeo-connection>
  </template>
</test-fixture>
```

When defining your main test suite, you must setup a fake server using `sinon`, which will provide fake responses to your element's requests, and also initialize the `nuxeo-connection` element by logging in:

```JavaScript
setup(function() {
  server = sinon.fakeServer.create();
  server.autoRespond = true;
  // login
  var nx = fixture('nx');
  return login(server, nx);
});
```

{{#> callout type='tip' heading='Test Helpers'}}
Here, the `login` method is part of our [test helpers](https://github.com/nuxeo/nuxeo-elements/blob/maintenance-2.2.x/test/test-helpers.js), which also includes several other support methods. Feel free to import them on your own test suites.
{{/callout}}

Oftentimes you'll want to perform more than one bundle of tests inside the same test file. In this case you can define *inner* test suites, i.e., test suites inside your main test suite. Inside these you should setup the responses that the
fake server should issue to your custom elements.

So, imagine we want to test how our collections element behaves when there are collections to display. We can create a dedicated suite and setup a fake response with only a single entry:

```JavaScript
setup(function() {
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
For more information about how to setup fake responses, please check the official [Sinon Documentation](http://sinonjs.org/docs/)
{{/callout}}

We now want to create a test case that verifies that our element actually displays the collection and that its DOM reflects this. We can do it by adding a test inside our test suite:

```JavaScript
test('it should display collections', function() {
    var element = fixture('collections'), collections;
    var table = Polymer.dom(element.root).querySelector('nuxeo-data-list');
    // let's wait for the nuxeo-page-loaded event to be fired once before testing
    // only then will we have the data from the server
    return waitForEvent(table, 'nuxeo-page-loaded', 1).then(function() {
      collections = Polymer.dom(table.root).querySelectorAll('.collection-box');
      expect(collections.length).to.be.equal(1); // there should be only one item
      expect(collections[0].querySelector('.collection-name').textContent).to.be.equal('My Collection'); // and its collection name should be "My Collection"
    });
  });
});
```

{{#> callout type='tip' heading='Test Helpers'}}
Again, the `waitForEvent` method is part of our [test helpers](https://github.com/nuxeo/nuxeo-elements/blob/maintenance-2.2.x/test/test-helpers.js#L35). This method waits for an event to be fired a specific amount of times before returning a promise. Similarly, you can use `waitChanged` to wait for a particular
property to change on an element, provided that it's set to `notify: true`. Please, check the Polymer documentation on [data-binding](https://www.polymer-project.org/1.0/docs/devguide/data-binding) for more information on this subject.
{{/callout}}

{{#> callout type='note' heading='Chai API'}}
For more information about how perform test asserts, please check the official [Chai documentation](http://chaijs.com/api/), which provides both BDD and TDD oriented APIs.
{{/callout}}

You can then run your tests using `polymer test` or run them interactively via `polymer serve`. Check the Polymer documentation on [WCT](https://www.polymer-project.org/1.0/docs/tools/tests) for more on this subject.

For more examples on testing custom elements, please check our repositories:
- [nuxeo-elements](https://github.com/nuxeo/nuxeo-elements/tree/maintenance-2.2.x/test)
- [nuxeo-dataviz-elements](https://github.com/nuxeo/nuxeo-dataviz-elements/tree/maintenance-2.2.x/test)
- [nuxeo-ui-elements](https://github.com/nuxeo/nuxeo-ui-elements/tree/maintenance-2.2.x/test)

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
this.Given('I am "$username"', (username) => this.username = username);

this.When('I click the "$button" button', (button) => this.ui.drawer.open(button));

this.Then('I can see the administration menu', () => this.ui.drawer.administration.isVisible().should.be.true);
```

Cucumber allows for BDD using human-readable specifications. The advantages are two-fold: first, it allows specifications to be implemented by developers, but written in natural language by someone else, such as QA or business analyst; second, it makes error identification simpler for developers and non-developers alike, by showing clearly in plain language what steps failed. Please check [Cucumber](https://cucumber.io/docs/reference) and [Cucumber.js](https://github.com/cucumber/cucumber-js) documentation for more details.

If you're looking for examples of Cucumber tests, check our [Web UI's plugin repository](https://github.com/nuxeo/plugin-nuxeo-web-ui/tree/2.2_9.10/ftest/web-ui/webdriver/test). These rely on [Chimp.js](http://chimp.readme.io), a test automation framework that brings together Cucumber.js, WebdriverIO and Chai. See [Chimp's documentation page](https://chimp.readme.io/docs/tutorial) and [this tutorial](https://chimp.readme.io/docs/tutorial) for more details.

### NighwatchJS

Nightwatch.js is an automated testing framework for web applications and websites, written in Node.js and using the W3C WebDriver API (formerly Selenium WebDriver).

It is a complete browser (End-to-End) testing solution which aims to simplify the process of setting up Continuous Integration and writing automated tests. Nightwatch can also be used for writing Node.js unit tests.

#### Browser/IDE Setup

Here is the [Nightwatch.js wiki](https://github.com/nightwatchjs/nightwatch/wiki) for more information about browser test setup and running/debugging in your favorite IDE.

#### Configuration

The test runner expects a configuration file to be passed, using by default a `nightwatch.json` file from the current directory, if present. A `nightwatch.conf.js` file will also be loaded by default, if found. Click [here](http://nightwatchjs.org/getingstarted#settings-file) to view an example.

#### Page Object API

In order to factorize your tests, the Page Object API has been introduced in Nightwatchjs and allows developers to create different page descriptors with the related selectors for re-using them easily in the IT tests. Click [here](https://github.com/nightwatchjs/nightwatch/wiki/Page-Object-API) for more information.

#### The Command Queue

When Nightwatch runs a test, it processes its commands in a list known as the command queue. This list manages the asynchronous execution of the commands defined in that test. Click [here](https://github.com/nightwatchjs/nightwatch/wiki/Understanding-the-Command-Queue) for more information.

#### API

Please refer to this [developer guide](http://nightwatchjs.org/guide) to see how to use:

- Default commands
- CSS or XPath Selectors
- Pages
- APIs

#### Nuxeo Maven Package Example

[An example](https://github.com/nuxeo/nuxeo-marketplace-sample/edit/master/ftest/nightwatchjs) of a Nuxeo package to run with Maven and npm nightwatchjs tests.

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
- use [`Repository.Query`](http://explorer.nuxeo.com/nuxeo/site/distribution/10.10/viewOperation/Repository.Query) operation with [`nuxeo-operation`](https://www.webcomponents.org/element/nuxeo/nuxeo-elements/elements/nuxeo-operation) element if you still want to search via 'direct' queries.
