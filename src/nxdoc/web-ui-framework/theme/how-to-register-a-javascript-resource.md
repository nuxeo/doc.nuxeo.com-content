---
title: How to Register a JavaScript Resource
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: >-
            Learn how to register a JavaScript resource in the Nuxeo web
            application.
        level: Advanced
        tool: Code
        topics: 'Layout, Theme'
labels:
    - jsf
    - howto
    - javascript
toc: true
confluence:
    ajs-parent-page-id: '22380895'
    ajs-parent-page-title: Theme
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: How+to+Register+a+JavaScript+Resource
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/How+to+Register+a+JavaScript+Resource
    page_id: '22380688'
    shortlink: kIBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/kIBVAQ'
    source_link: /display/NXDOC60/How+to+Register+a+JavaScript+Resource
history:
    - 
        author: Anahide Tchertchian
        date: '2014-12-05 18:04'
        message: 'hange topics from JSF to Layout, Them'
        version: '13'
    - 
        author: Solen Guitter
        date: '2014-12-01 22:01'
        message: ''
        version: '12'
    - 
        author: Manon Lumeau
        date: '2014-09-18 10:57'
        message: ''
        version: '11'
    - 
        author: Manon Lumeau
        date: '2014-09-18 10:56'
        message: ''
        version: '10'
    - 
        author: Manon Lumeau
        date: '2014-09-17 17:47'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2014-04-07 10:53'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2014-04-07 10:52'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-04-07 10:44'
        message: ''
        version: '6'
    - 
        author: Alain Escaffre
        date: '2014-04-01 18:59'
        message: ''
        version: '5'
    - 
        author: arussel
        date: '2011-01-31 10:09'
        message: Migrated to Confluence 4.0
        version: '4'
    - 
        author: arussel
        date: '2011-01-31 10:09'
        message: ''
        version: '3'
    - 
        author: arussel
        date: '2011-01-31 10:04'
        message: ''
        version: '2'
    - 
        author: arussel
        date: '2011-01-31 10:03'
        message: ''
        version: '1'

---
{{#> callout type='note' }}

This page talks about using JavaScript inside the Nuxeo web application (the back office). If you want to build a JavaScript application (with jQuery, Node, angularJS, ...) you should follow our [Nuxeo JavaScript Client]({{page page='javascript-client'}}) page.

{{/callout}}

To make a JavaScript resource available in your JSF page, you need to register the resource and to add to the theme view you are using.

## Registering a JavaScript Resource

To register a JavaScript resource you give it a name a the path of the resource inside your JAR.

```
<extension target="org.nuxeo.theme.services.ThemeService"
point="resources">
<resource name="jquery.js">
<path>nxthemes/html/scripts/jquery.js</path>
</resource>

```

## Using a Resource in a View

You can add a resource to the contribution of your view:

```
<extension target="org.nuxeo.theme.services.ThemeService" point="views">

<view name="myview" template-engine="jsf-facelets">
<format-type>widget</format-type>
<template>incl/includes.xhtml</template>
<resource>jquery.js</resource>
</view>
</extension>

```

## JavaScript in WebEngine

If your webengine module extends either base or admin, then the prototype and jQuery libraries are already provided.

## Available Javascript Libraries

It is not necessary to add resource for common JavaScript libraries as they are already contributed. We also recommand to use the libraries below if needed:

*   prototype 1.6.0.3
*   jQuery 1.4.4

    * * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

*   [JSF and Javascript ]({{page page='jsf-and-javascript'}})
*   [Ajax4jsf Best Practices]({{page page='ajax4jsf-best-practices'}})
*   [Ajax Forms and Actions]({{page page='ajax-forms-and-actions'}})
*   [How to Add a JSF Form Validation]({{page page='how-to-add-a-jsf-form-validation'}})
*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [JavaScript Client]({{page page='javascript-client'}})
*   [Web UI Framework]({{page page='web-ui-framework'}})
*   [Web UI Framework Overview]({{page page='web-ui-framework-overview'}})
*   [Web UI Limitations]({{page page='web-ui-limitations'}})&nbsp;

{{/panel}}</div></div>