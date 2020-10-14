---
title: Functional Testing
review:
    comment: 'This page needs to be reviewed. Check back soon for updated content!'
    date: ''
    status: not-ok
toc: true
confluence:
    ajs-parent-page-id: '9275231'
    ajs-parent-page-title: Working on Nuxeo sources
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Functional+testing
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Functional+testing'
    page_id: '6422538'
    shortlink: CgBi
    shortlink_source: 'https://doc.nuxeo.com/x/CgBi'
    source_link: /display/CORG/Functional+testing
tree_item_index: 300
history:
    -
        author: Manon Lumeau
        date: '2016-07-20 16:34'
        message: 'emove children display macro   '
        version: '5'
    -
        author: Ronan Daniellou
        date: '2015-11-13 16:36'
        message: Fixes layout + adds Nuxeo TOC
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2012-01-20 17:43'
        message: Migrated to Confluence 4.0
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2012-01-20 17:43'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2011-04-08 19:12'
        message: ''
        version: '1'
---

## Using Nuxeo Tools for Functional Testing

Look at [https://github.com/nuxeo/tools-nuxeo-ftest](https://github.com/nuxeo/tools-nuxeo-ftest) for instructions and samples.

### Selenium Sample

You will have to create such a structure in your project:

```
ftest/selenium/
|-- assembly.xml (copied from tools-nuxeo-ftest/assembly.xml.sample)
|-- data (containing resources for your tests)
|-- pom.xml (copied from tools-nuxeo-ftest/pom.xml.sample)
`-- tests (containing Selenium HTML tests suites)
```

Then, run:

```
mvn integration-test -f ftest/selenium/pom.xml [-DnuxeoURL=http://otherURL/] [-Dsuites=...] -P[tomcat|jboss]
```

The results will be in `ftest/selenium/target/` and named `result-{yourSuiteName}.html`.

*   [Selenium tests]({{page space='CORG' page='Selenium tests'}})
*   [WebDriver Tests]({{page space='CORG' page='WebDriver Tests'}})
