---
title: JSF and JavaScript
review:
    comment: ''
    date: '2015-12-01'
    status: ok
details:
    howto:
        excerpt: Learn how to get a tag client using DOM.
        level: Advanced
        tool: Code
        topics: 'JSF, JavaScript'
labels:
    - content-review-lts2016
    - jsf
    - javascript
    - troger
    - howto
    - todo
    - seam-jsf-component
    - excerpt
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '9830458'
    ajs-parent-page-title: JSF and Ajax Tips and How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: JSF+and+JavaScript
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/JSF+and+JavaScript'
    page_id: '3343545'
    shortlink: uQQz
    shortlink_source: 'https://doc.nuxeo.com/x/uQQz'
    source_link: /display/NXDOC/JSF+and+JavaScript
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2015-10-12 13:06'
        message: ''
        version: '26'
    -
        author: Anahide Tchertchian
        date: '2014-12-09 15:33'
        message: add deprecation warning
        version: '25'
    -
        author: Manon Lumeau
        date: '2014-09-18 11:11'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2014-09-17 17:10'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2014-01-23 15:59'
        message: ''
        version: '22'
    -
        author: Anahide Tchertchian
        date: '2012-02-06 17:55'
        message: Migrated to Confluence 4.0
        version: '21'
    -
        author: Anahide Tchertchian
        date: '2012-02-06 17:55'
        message: ''
        version: '20'
    -
        author: Anahide Tchertchian
        date: '2012-02-06 17:53'
        message: ''
        version: '19'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 17:24'
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
        date: '2010-07-21 20:06'
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
{{! excerpt}}

Getting a tag client id with JavaScript might be an issue. Here's how you can get your tag using DOM.

{{! /excerpt}} {{#> callout type='warning' }}

Some of this content is outdated and needs to be reviewed.

{{/callout}}

```
document.getElementById('div-id').childNodes[0]

```

TODO: there are better ways to handle this in JSF2

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

*   [JSF and Javascript ]()
*   [Ajax4jsf Best Practices]({{page page='ajax4jsf-best-practices'}})
*   [Ajax Forms and Actions]({{page page='ajax-forms-and-actions'}})
*   [How to Add a JSF Form Validation]({{page page='how-to-add-a-jsf-form-validation'}})
*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [JavaScript Client]({{page page='javascript-client'}})
*   [JSF UI Framework]({{page page='jsf-ui-framework'}})
*   [Nuxeo JSF UI]({{page page='nuxeo-jsf-ui'}})
{{/panel}}</div></div>
