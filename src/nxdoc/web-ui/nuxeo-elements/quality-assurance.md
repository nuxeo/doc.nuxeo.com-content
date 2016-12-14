---
title: Quality Assurance
review:
    comment: ''
    date: '2015-12-01'
    status: ok
toc: true
labels:
tree_item_index: 200

---
## Quality Assurance

- Intro to topic

## Formatting and Linting

- ESLint
-- ES5 : default / recommended setting
-- ES2016: Airbnb default https://www.npmjs.com/package/eslint-config-airbnb
- Plugin for IDEs
-- Atom: https://atom.io/packages/linter-eslint
-- Intellij Idea: https://plugins.jetbrains.com/plugin/7494
-- Sublime Text 3: https://github.com/roadhump/SublimeLinter-eslint
-- More: http://eslint.org/docs/user-guide/integrations


## Test Strategies

Web Component tests
Polymer’s web-component-tester
Used by Polymer’s dev team
https://github.com/Polymer/web-component-tester
For mock responses: http://sinonjs.org/
Nuxeo code examples: https://github.com/nuxeo/nuxeo-ui-elements/tree/master/test

Integration & BDD Tests
Webdriver
http://webdriver.io/
Use Chimp.js https://chimp.readme.io/

Cucumber for BDD (behavior-driven development)
https://cucumber.io/
Still poor coverage due to UX evolution

### NighwatchJS

Nightwatch.js is an automated testing framework for web applications and websites, written in Node.js and using the W3C WebDriver API (formerly Selenium WebDriver).

It is a complete browser (End-to-End) testing solution which aims to simplify the process of setting up Continuous Integration and writing automated tests. Nightwatch can also be used for writing Node.js unit tests.

#### Browser/IDE Setup

Here is the [nightwathjs wiki](https://github.com/nightwatchjs/nightwatch/wiki) to have information about browser tests setup, running/debugging in your favorite IDE.

#### Configuration

The test runner expects a configuration file to be passed, using by default a `nightwatch.json` file from the current directory, if present. A `nightwatch.conf.js` file will also be loaded by default, if found.

[Here's an example](http://nightwatchjs.org/getingstarted#settings-file)

#### Page Object API

In order to factorize your tests, the Page Object API has been introduced in Nightwatchjs and allows developers to create different page descriptors with the related selectors for re-using them easily in the IT tests.

[More information here](https://github.com/nightwatchjs/nightwatch/wiki/Page-Object-API)

#### The Command Queue

When Nightwatch runs a test, it processes its commands in a list known as the command queue. This list manages the asynchronous execution of the commands defined in that test.

[More information here](https://github.com/nightwatchjs/nightwatch/wiki/Understanding-the-Command-Queue)

#### API

Please refer to this [developer guide](http://nightwatchjs.org/guide) to see how to use:

- Default commands
- CSS or xpath Selectors
- Pages
- APIs

#### Nuxeo Maven Package Example

Here is [an example](https://github.com/nuxeo/nuxeo-marketplace-sample/edit/master/ftest/nightwatchjs) of a Nuxeo package to run with Maven and npm nightwatchjs tests.

## Performance Strategies

### Schemas - enrinchers

### Browser Cache
