---
title: Selenium tests
review:
    comment: 'This page needs to be reviewed. Check back soon for updated content!'
    date: ''
    status: not-ok
toc: true
confluence:
    ajs-parent-page-id: '6422538'
    ajs-parent-page-title: Functional testing
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Selenium+tests
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Selenium+tests'
    page_id: '3343481'
    shortlink: eQQz
    shortlink_source: 'https://doc.nuxeo.com/x/eQQz'
    source_link: /display/CORG/Selenium+tests
tree_item_index: 100
history:
    -
        author: Ronan Daniellou
        date: '2015-11-13 16:40'
        message: ixes titles + typ
        version: '24'
    -
        author: Ronan Daniellou
        date: '2015-11-13 16:35'
        message: Fixes layout + adds Nuxeo TOC
        version: '23'
    -
        author: Antoine Taillefer
        date: '2012-04-08 13:57'
        message: Migrated to Confluence 4.0
        version: '22'
    -
        author: Antoine Taillefer
        date: '2012-04-08 13:57'
        message: ''
        version: '21'
    -
        author: Anahide Tchertchian
        date: '2012-01-20 17:41'
        message: ''
        version: '20'
    -
        author: Anahide Tchertchian
        date: '2012-01-18 16:59'
        message: ''
        version: '19'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 14:43'
        message: ''
        version: '18'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:27'
        message: ''
        version: '17'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:23'
        message: ''
        version: '16'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:12'
        message: ''
        version: '15'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 09:13'
        message: ''
        version: '14'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 09:07'
        message: ''
        version: '13'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 08:54'
        message: ''
        version: '12'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 08:50'
        message: ''
        version: '11'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 20:10'
        message: ''
        version: '10'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 20:03'
        message: ''
        version: '9'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 19:20'
        message: ''
        version: '8'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 19:00'
        message: ''
        version: '7'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:38'
        message: ''
        version: '6'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:22'
        message: ''
        version: '5'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:17'
        message: ''
        version: '4'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:11'
        message: ''
        version: '3'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:09'
        message: ''
        version: '2'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:00'
        message: ''
        version: '1'
---

Nuxeo is using a tool to run selenium tests on a given server, see documentation at [https://github.com/nuxeo/tools-nuxeo-ftest](https://github.com/nuxeo/tools-nuxeo-ftest)

## Selenium Documentation

Helpful links: [http://seleniumhq.org/documentation/](http://seleniumhq.org/documentation/)

Commands reference: [http://release.seleniumhq.org/selenium-core/1.0.1/reference.html](http://release.seleniumhq.org/selenium-core/1.0.1/reference.html)

## Firefox Plugins

Here are some Firefox plugins that make life easier writing Selenium tests:

*   Selenium IDE ([http://seleniumhq.org/projects/ide/](http://seleniumhq.org/projects/ide/)) can be helpful writing a single test before adding it to a suite.

*   XPath Checker ([https://addons.mozilla.org/fr/firefox/addon/1095](https://addons.mozilla.org/fr/firefox/addon/1095)) is very handy when struggling to find an element path in the HTML page DOM structure. Higly recommended!

## Structure of Nuxeo Test Suites

The Nuxeo test suites are located in subdirectory tests/ and named tests.html, suite1.html and suite2.html.

tests.html has been cut in two for automated testing: THINK OF UPDATING ALL FILES WHEN ADDING/REMOVING tests.

Note that the tests are currently not very "unit": some tests will require
previous tests to be run to succeed.

## Generic Advice When Writing Tests

*   Have a look at selenium commands to see what is available.

*   Write small test cases, and try to make them as unit as possible. Do not forget to set a timeout at the beginning of your test (it default to 3000ms may not be enough) and to start and end the test by logging out of the nuxeo application.

*   Be specific when testing an element: a vague xpath reference may trigger a false error if the HTML page slightly changes. If you can't be specific, then page rendering should be changed to ease this process.

*   Handle ajax requests properly: if the test cannot detect correctly when the ajax call is finished, it may lead to "heisenbugs", e.g. tests alternatively failing or succeeding with no apparent reason.

&nbsp;

1\. when triggering an ajax call through a4j or richfaces JSF libraries,
the following commands have been made available in the nuxeo suites
user-extensions.js file: "watchA4jRequests" and
"waitForA4jRequest". "watchA4jRequests" has to be called **before** any
command that will trigger an ajax call, it does not take any
parameters. "waitForA4jRequest" has to be called **after** the command
that will trigger an ajax call, it takes a timeout as parameter.

Sample usage:

```
<tr>
  <td>watchA4jRequests</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td>typeKeys</td>
  <td>//input[@name='createUser:nxl_user:nxw_groups_suggest']</td>
  <td>members</td>
</tr>
<tr>
  <td>waitForA4jRequest</td>
  <td>10000</td>
  <td></td>
</tr>
```

WARNING: The "typeKeys" command has a bug that simulates the "ALT" key when using the "y" character (see [http://jira.openqa.org/browse/SIDE-309](http://jira.openqa.org/browse/SIDE-309)) so you should avoid this character in suggestion keywords.

2\. when triggering a remote call using jQuery or prototype Javascript
libraries, the following command has been made available in the nuxeo
suites user-extensions.js file: waitForJSQueries. It takes a timeout
has parameter.

Sample usage:

```
<tr>
  <td>waitForQueries</td>
  <td>100000</td>
  <td></td>
</tr>
```

3\. when triggering any other call (Javascript call with Seam remoting
calls for instance), using the Selenium command "waitForCondition" with
appropriate javascript testing is usually enough to test that the ajax
response has been received. Commands "waitForEditable" or
"waitForTextPresent" may also be helpful.

Sample usage:

```
<!-- wait for table to disappear -->
<tr>
  <td>waitForCondition</td>
  <td>selenium.browserbot.getCurrentWindow().document.getElementById('editGroup:nxl_group:nxw_members_list:2:nxw_members_listItem') == null</td>
  <td>10000</td>
</tr>
```

### How to Get an Element When No ID Is Available

(taken from [http://lawrencesong.net/2008/01/selenium-element-locators/](http://lawrencesong.net/2008/01/selenium-element-locators/))

#### Get the Link With the Link Text:

```
<a href="link url">Link Text</a> -> link=Link Text
```

#### Get Element With the Element Text:

```
<a href="link url">Link Text</a> -> //a[text()='Link Text']
```

#### Get Element With Part of the Element Text:

```
<a href="link url">Link Text</a> -> //a[contains(text(), 'ink Tex')]
```

#### Get Element With an Attribute:

```
<a href="link url">Link Text</a> -> //a[@href='link url']
```

#### Get Element With Two Attributes:

```
<input type="text" value="value"/> -> //input[@type='text' and @value='value']
```

### Sometimes This Command Will Succed:

```
<td>click</td>
<td>dashboardDocumentProcessTable:j_id130</td>
<td></td>
```

when this one will fail:

```
<td>click</td>
<td>//input[@id="dashboardDocumentProcessTable:j_id130"]</td>
<td></td>
```

### Print Out the Rendered HTML in the Page

When trying to debug what's happening on the server, it may be useful to print out the rendered HTML in the page. The following command can be used:

```
<tr>
  <td>storeEval</td>
  <td>selenium.browserbot.getCurrentWindow().document.body.innerHTML</td>
  <td>innerhtml</td>
</tr>
<tr>
  <td>echo</td>
  <td>${innerhtml}</td>
  <td></td>
</tr>
```
