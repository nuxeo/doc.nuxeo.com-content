---
title: How to Register a JSF Tag Library
review:
    comment: ''
    date: '2015-12-01'
    status: ok
details:
    howto:
        excerpt: Learn how to use the JSF tag library registration.
        level: Advanced
        tool: Code
        topics: JSF
labels:
    - content-review-lts2016
    - howto
    - jsf
    - seam-jsf-component
    - atchertchian
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '9830458'
    ajs-parent-page-title: JSF and Ajax Tips and How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Register+a+JSF+Tag+Library
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Register+a+JSF+Tag+Library'
    page_id: '3343544'
    shortlink: uAQz
    shortlink_source: 'https://doc.nuxeo.com/x/uAQz'
    source_link: /display/NXDOC/How+to+Register+a+JSF+Tag+Library
tree_item_index: 600
history:
    -
        author: Solen Guitter
        date: '2014-12-01 21:39'
        message: ''
        version: '25'
    -
        author: Anahide Tchertchian
        date: '2014-12-01 17:18'
        message: 'Rephrase, do not present this as a workaround'
        version: '24'
    -
        author: Manon Lumeau
        date: '2014-09-18 11:07'
        message: ''
        version: '23'
    -
        author: Manon Lumeau
        date: '2014-09-17 17:27'
        message: ''
        version: '22'
    -
        author: Manon Lumeau
        date: '2014-09-17 17:25'
        message: typo
        version: '21'
    -
        author: Anahide Tchertchian
        date: '2012-02-06 17:55'
        message: Migrated to Confluence 4.0
        version: '20'
    -
        author: Anahide Tchertchian
        date: '2012-02-06 17:55'
        message: ''
        version: '19'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 17:34'
        message: ''
        version: '18'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 14:43'
        message: ''
        version: '17'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:27'
        message: ''
        version: '16'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:24'
        message: ''
        version: '15'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:14'
        message: ''
        version: '14'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 09:14'
        message: ''
        version: '13'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 09:10'
        message: ''
        version: '12'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 08:55'
        message: ''
        version: '11'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 08:51'
        message: ''
        version: '10'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 20:11'
        message: ''
        version: '9'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 20:05'
        message: ''
        version: '8'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 19:21'
        message: ''
        version: '7'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 19:01'
        message: ''
        version: '6'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:39'
        message: ''
        version: '5'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:23'
        message: ''
        version: '4'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:18'
        message: ''
        version: '3'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:12'
        message: ''
        version: '2'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:00'
        message: ''
        version: '1'

---
When registering a new tag library for your application, you would usually declare the facelets taglib file in the `web.xml` configuration file.

As this parameter can only be declared once, and is already declared in the nuxeo base ui module, you cannot declare it using the Nuxeo deployment feature.

So you should declare your custom taglib by placing a file `mylibary.taglib.xml` in the `META-INF` folder of your custom jar: it will be registered automatically.

As a reminder, the tag library documentation file, `mylibrary.tld`, is usually placed in the same folder than the taglib file, but it is only used for documentation: it plays no role in the tags registration in the application.

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [JSF and Javascript ]({{page page='jsf-and-javascript'}})
- [Ajax4jsf Best Practices]({{page page='ajax4jsf-best-practices'}})
- [Ajax Forms and Actions]({{page page='ajax-forms-and-actions'}})
- [How to Add a JSF Form Validation]({{page page='how-to-add-a-jsf-form-validation'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [JavaScript Client]({{page page='javascript-client'}})
- [JSF UI Framework]({{page page='jsf-ui-framework'}})
- [Nuxeo JSF UI]({{page page='nuxeo-jsf-ui'}})
{{/panel}}</div></div>
