---
title: WebDriver Tests
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '6422538'
    ajs-parent-page-title: Functional testing
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: WebDriver+Tests
    canonical_source: 'https://doc.nuxeo.com/display/CORG/WebDriver+Tests'
    page_id: '9275365'
    shortlink: 5YeN
    shortlink_source: 'https://doc.nuxeo.com/x/5YeN'
    source_link: /display/CORG/WebDriver+Tests
tree_item_index: 200
history:
    -
        author: Antoine Taillefer
        date: '2016-09-06 08:57'
        message: ''
        version: '11'
    -
        author: Ronan Daniellou
        date: '2015-11-13 16:33'
        message: Added missing title for section Firefox location
        version: '10'
    -
        author: Ronan Daniellou
        date: '2015-11-13 16:31'
        message: Fixed layout + added Nuxeo TOC
        version: '9'
    -
        author: Ronan Daniellou
        date: '2015-11-13 16:30'
        message: Added a section about xvfb for running headless
        version: '8'
    -
        author: Guillaume Renard
        date: '2014-11-24 15:40'
        message: ''
        version: '7'
    -
        author: Guillaume Renard
        date: '2014-11-24 15:39'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-04-08 10:35'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-04-08 10:35'
        message: ''
        version: '4'
    -
        author: Guillaume Renard
        date: '2014-04-07 11:58'
        message: ''
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2012-01-20 17:41'
        message: Migrated to Confluence 4.0
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2012-01-20 17:41'
        message: ''
        version: '1'
---

## Compatible Firefox Location

Webdriver tests run on selenium 2.53.0 and they pass on Firefox 26 to 46 included. You can use the following system property while running the tests to make Webdriver use the correct Firefox:

```
-Dwebdriver.firefox.bin="/path/to/firefox/binary"
```

Webdriver tests can be launched from eclipse like any other unit tests. You can add the above system property to the JRE of your eclipse:

*   Go to '**Windows**' -> '**Preferences**' -> '**Java**' -> '**Installed JREs**'
*   Edit the default JRE
*   Add

    <pre>-Dwebdriver.firefox.bin="/path/to/firefox/binary"</pre>

    to the **Default VM arguments**

## Running Tests Headless

If you want to run the tests without being disturbed by the Firefox windows opening and closing, under Linux, you may use:

```
xvfb-run -s "-screen 0 1920x1080x8" myCommand
```

Where:

*   _-s "-screen 0 **1920x1080**x8"_ specifies a screen resolution. Note that without it, the resolution may be too small and your tests may fail because it cannot reach some graphical interface widgets.
*   _myCommand_ is the command to be executed in this virtual frame buffer. E.g.: _mvn integration-tests -Dwebdriver.firefox.bin=/path/to/firefox/binary_.

## Screenshot

On failure, a screenshot of the web page is captured and stored in the target directory.

## Logging

It is possible to enable WebDriver logs when running tests. To do so, you need to pass a Environment Variable when running the tests:

```xml
nuxeo.log.webriver=true
```

As a result, WebDriver will log the driver connection details in the target directory. This also works in Jenkins by configuring a specific job and checking "<span style="color: rgb(0,0,0);">Set environment variables</span>" box in the "Build Environment" section.
