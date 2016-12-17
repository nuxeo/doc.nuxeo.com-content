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

## Performance Strategies

Nuxeo elements are the best means to build a custom UI application on the top of Nuxeo server but several points have to be taken into account to make the UI experience faster and to reduce performance server cost:

### Response payloads

There are two ways to filter data from the server in order to avoid unecessary quantity information in response: filter the schemas and using enrichers.

##### Schemas

When building views, listings and pages in general you need to determine which document information you want to display for your users.

For instance a listing could only needs the {{dublincore}} schemas of the documents and their summary links. The metadata displayed in each row would be:

- `dc:title`
- `dc:description`
- `dc:created` date
- and the navigation link to their summary

A document can contain several schemas with a dozen of metadata so the JSON payload in response could be unecessary too big. Building a listing of several documents can make slow the client side navigation and use too much network bandwith: we need to filter schemas.

[Special header](https://doc.nuxeo.com/nxdoc/special-http-headers/#x-nxproperties) is reserved for this purpose and can be used easily with the Nuxeo resource elements: `nuxeo-resource` and `nuxeo-operation`.

Example:

```
<nuxeo-resource auto
    path="Document.Query"
    on-response="{{handleResponse}}"
    schemas="dublincore"></nuxeo-resource>

```

This will fetch document definitions with only their `dublincore` metadata.

But we still need a permanent URL of the document for the navigation from this listing. To get it, let's call an enricher.

##### Enrichers

The Nuxeo [enrichers](https://doc.nuxeo.com/nxdoc/content-enricher/) are means to get additional computed documents information by simply setting a [special header](https://doc.nuxeo.com/nxdoc/special-http-headers/#x-nxenrichers-document). And if you cannot fullfil your need with the Nuxeo default ones you can build easily your own.

To get the permanent URL of a document for instance with the Nuxeo resource elements (`nuxeo-resource` and `nuxeo-operation`), set the `enrichers` property:

```
<nuxeo-resource auto
    path="Document.Query"
    on-response="{{handleResponse}}"
    schemas="dublincore"
    enrichers="permanentURL"></nuxeo-resource>
```

You will have at last all the informations needed for your listing with a small amount of information in your response payload.

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
