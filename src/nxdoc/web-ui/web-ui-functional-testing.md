---
title: Web UI Functional Tests
description: An overview of functional testing on Web UI and it's functional testing framework.
toc: true
review:
  date: '2019-06-06'
  status: ok
  comment: ''
---

This page covers the bases of functional testing on Web UI and provides an overview of the Web UI functional tests framework.

## Functional Tests Overview

The Web UI functional tests are developed on top of [WebDriverIO](https://webdriver.io/) and [Cucumber](https://cucumber.io/), providing a mechanism to run WebDriver tests written in plain language (English).
The advantages of this approach are threefold:
- it improves readability.
- it makes it easier to write tests based on requirements, specifications, and acceptance criteria.
- it facilitates test writing by people other than developers.

Cucumber is a crucial element of our testing stack, promoting Behavior-Driven Development (or **BDD** for short). Cucumber tests are written in [Gherkin](https://docs.cucumber.io/gherkin/reference/), which are then translated into JavaScript instructions that run commands using the WebDriver protocol. Tests are written in **feature** files (ending with the `.feature` extension), which are composed by a set of **Scenarios** with one or more **Steps**. Steps common to more than one scenario are usually placed in a **Background**, which is run before every scenario. Steps must begin with one of the following keywords: *Given*, *When*, *Then*, *And*, *But*. Which keyword is used only affects it's meaning to readers, although the *Given* keyword is commonly used for provisioning steps.

{{#> panel type='code' heading='Sample feature file'}}

```Gherkin
Feature: Login / Logout

  As a user I can login and logout

  Scenario: Login as member user
    Given user "John" exists in group "members"
    When I login as "John"
    Then I am logged in as "John"
```
{{/panel}}

{{#> callout type='note'}}
Please check the [Gherkin reference](https://docs.cucumber.io/gherkin/reference/) page for more details on how to write Cucumber tests.
{{/callout}}

Steps used in feature files are mapped into JavaScript instructions, which are read from **step definition** files. These are JavaScript files that map a given set of steps into JavaScript code. These definitions usually rely on page helpers to access interface elements and assert the conditions matching the test criteria. **Page helpers** are objects that encapsulate the logics required to access and manipulate high level interface elements, hiding most of the WebDriver-specific logics.

{{#> panel type='code' heading='Sample step definitions'}}

```JavaScript
Then('I am logged in as {string}', function (username) {
  const currentUser = this.ui.drawer.open('profile').getText('.header').toLowerCase();
  currentUser.should.be.equal(username.toLowerCase());
});

Then('I am logged out', () => driver.isVisible('#username').should.be.true);
```

{{/panel}}

{{#> callout type='note'}}
Please check the [step definitions](https://docs.cucumber.io/cucumber/step-definitions/) reference page for more details on how to write tests using this language.
{{/callout}}

You can check Web UI's plugin repository for more examples on Cucumber [feature](https://github.com/nuxeo/plugin-nuxeo-web-ui/tree/2.4_10.10/ftest/web-ui/webdriver/test) files, [step definitions](https://github.com/nuxeo/plugin-nuxeo-web-ui/tree/2.4_10.10/nuxeo-web-ui-ftest/test/features/step_definitions), and [page helpers](https://github.com/nuxeo/plugin-nuxeo-web-ui/tree/2.4_10.10/nuxeo-web-ui-ftest/test/pages).

## Functional Tests Framework

The [functional tests framework for Web UI](https://github.com/nuxeo/plugin-nuxeo-web-ui/tree/2.4_10.10/nuxeo-web-ui-ftest) exposes a large set of step definitions and page helpers, which is particularly useful for developing functional tests for projects contributing to Web UI. The provided steps were designed to cover most default functionality, but some of them are generic enough to be re-used on other contexts. However, you can create your own step definitions, while still being able to import and use the default page helpers provided by the framework. Should this not be enough, and you can do your own page helpers to wrap the logics of your custom elements.

Shadow DOM is one of the biggest challenges when testing applications powered by custom elements. Only recently did WebDriverIO [introduce support for Shadow DOM](https://github.com/webdriverio/webdriverio/blob/master/CHANGELOG.md#550-2019-02-20), by adding a command that is able to pierce the shadow root of a given element. However, this is not enough most of the time, where several levels of shadow roots need to be pierced. To this end, Web UI's functional tests framework has a Shadow DOM plugin embedded, which allows WebDriverIO commands to work just like they would if no Shadow DOM was being used.

### Setup

To use the framework on custom projects, you need to create an npm package with a dependency on the framework:

{{#> panel type='code' heading='package.json'}}
```JSON
{
  "name": "my-test-project",
  "version": "1.0.0",
  "scripts": {
    "test": "nuxeo-web-ui-ftest --report --screenshots",
    "test:watch": "nuxeo-web-ui-ftest --tags=@watch",
  },
  "license": "Apache-2.0",
  "dependencies": {
    "@nuxeo/nuxeo-web-ui-ftest": "3.0.0-SNAPSHOT",
    "cucumber": "^4.1.0"
  }
}
```
{{/panel}}

To ensure that you can access *SNAPSHOT* versions of the framework, you need to have our private repository added to your npm config file (located under `~/.npmrc`):

{{#> panel type='code' heading='~/.npmrc'}}
```
...
@nuxeo:registry=https://mavenin.nuxeo.com/nexus/repository/npmjs-nuxeo/
...
```
{{/panel}}

It is also required to have on the root of the project a file named `.babelrc` with the following content:

{{#> panel type='code' heading='.babelrc'}}
```JSON
{
  "presets": [
    ["env", {
      "targets": {
        "node": "current"
      }
    }]
  ]
}
```
{{/panel}}

You can then install the project's dependencies, by running `npm install`. From there, you're all set to create your own tests.

The first step is to create on the root of your project a *test* folder, containing a sub folder named *features* and optionally another one named *resources*, if you need to use resources in your tests such as images. If you are doing custom step definitions, you must place them inside `features/step_definitions`. The functional tests framework will load feature files, step definitions and resources by convention, so please make sure to respect this folder structure. It should look as follows:

```
.
├── package.json
├── .babelrc
└── test
    ├── features
    │   ├── myfeature1.feature
    │   ├── myfeature2.feature
    │   ├── ...
    │   └── step_definitions
    │       ├── myfeature1.js
    │       ├── myfeature2.js
    │       └── ...
    └── resources
        ├── image.png
        └── ...
```

For an example on how to use the functional test framework, please check
[Nuxeo DAM's functional tests for Web UI](https://github.com/nuxeo/marketplace-dam/tree/6.4_10.10/ftest/web-ui/webdriver).


### Running Tests

Assuming a server is running with the contributions that need to be tested, you can run the test suite with:
```
npm run test
```
But, oftentimes all we want is to run a particular subset of feature files, or even a subset of scenarios.

In such cases, it can be done by adding the `@watch` tag to the top of a feature file, or right before a given scenario, and then running:
```
npm run test:watch
```

For an example of how to launch a nuxeo server and run the tests using maven, please check
[Nuxeo DAM's functional tests for Web UI](https://github.com/nuxeo/marketplace-dam/tree/6.4_10.10/ftest/web-ui/webdriver).

### Debugging

You can run the previous commands in debug mode by passing the `--debug` parameter:

```
npm run test -- --debug
npm run test:watch -- --debug
```

Once you run the tests in debug mode, you can use your favorite debugger to attach and debug the code. This is very easy to do with Google Chrome: a new entry will be available under `chrome://inspect/#devices`, and you just need to click "inspect" to attached the debugger. The execution will stop as soon at it hits a [`debugger`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger) statement.
