---
title: How to Declare the CSS and JavaScript Resources Used in Your Templates
details:
    howto:
        excerpt: >-
            Learn how to declare and add the CSS and JavaScript ressources in
            your templates.
        level: Advanced
        tool: Code editor
        topics: Theme
labels:
    - css
    - javascript
    - template
    - howto
    - theme
    - link-update
    - last-review-20150805
    - themes-component
    - lts2015-ok
    - excerpt
confluence:
    ajs-parent-page-id: '19235625'
    ajs-parent-page-title: Theme How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Declare+the+CSS+and+JavaScript+Resources+Used+in+Your+Templates
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/How+to+Declare+the+CSS+and+JavaScript+Resources+Used+in+Your+Templates
    page_id: '4689203'
    shortlink: M41H
    shortlink_source: 'https://doc.nuxeo.com/x/M41H'
    source_link: >-
        /display/NXDOC/How+to+Declare+the+CSS+and+JavaScript+Resources+Used+in+Your+Templates
history:
    - 
        author: Manon Lumeau
        date: '2016-02-09 15:14'
        message: ''
        version: '16'
    - 
        author: Lise Kemen
        date: '2015-10-13 13:51'
        message: ''
        version: '15'
    - 
        author: Lise Kemen
        date: '2015-10-13 13:48'
        message: ''
        version: '14'
    - 
        author: Anahide Tchertchian
        date: '2015-08-05 09:46'
        message: 'NXDOC-577: add ref to the nxr tag lib doc'
        version: '13'
    - 
        author: Solen Guitter
        date: '2015-08-04 08:29'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2015-08-04 08:29'
        message: Formatting
        version: '11'
    - 
        author: Anahide Tchertchian
        date: '2015-08-03 13:10'
        message: 'NXDOC-577: cleanup'
        version: '10'
    - 
        author: Anahide Tchertchian
        date: '2015-08-03 13:09'
        message: 'NXDOC-577: update theme doc'
        version: '9'
    - 
        author: Solen Guitter
        date: '2014-10-03 15:13'
        message: ''
        version: '8'
    - 
        author: Manon Lumeau
        date: '2014-09-17 12:17'
        message: ''
        version: '7'
    - 
        author: Manon Lumeau
        date: '2014-09-16 17:29'
        message: ''
        version: '6'
    - 
        author: Manon Lumeau
        date: '2014-09-16 16:37'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2014-01-06 17:18'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2014-01-06 15:21'
        message: ''
        version: '3'
    - 
        author: Jean-Marc Orliaguet
        date: '2011-01-07 21:29'
        message: ''
        version: '2'
    - 
        author: Jean-Marc Orliaguet
        date: '2011-01-07 21:29'
        message: ''
        version: '1'

---
{{! excerpt}}

The CSS and JavaScript resources needed by your JSF pages can be added directly from inside your templates, or using runtime extension points.

{{! /excerpt}}{{#> callout type='note' }}

This page talks about using JavaScript inside the Nuxeo web application (the back office). If you want to build a JavaScript application (with jQuery, Node, AngularJS, ...) you should follow our [Nuxeo JavaScript Client]({{page page='javascript-client'}}) page.

{{/callout}}

## Defining New Resources

Let's define two types of resources to be included later on pages:

```

    /css/myCss.css

    scripts/myScript.js

```

Here the `uri` element is used, so resources will be looked up in the JAR holding the declaration. Please refer to the [`resources` extension point](http://explorer.nuxeo.com/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.platform.WebResources--resources) documentation for more details.

## Including Resources in a Given Page

{{#> callout type='tip' }}

You can browse the [Nuxeo Resources JSF tag library documentation](http://community.nuxeo.com/api/nuxeo/7.4/tlddoc/nxr/tld-summary.html) to get details on how to use a given resource or bundle in a page.

{{/callout}}

&nbsp;

Let's consider defining a new page template, using the main page template at [`/pages/basic_page.xhtml`](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-jsf/nuxeo-platform-webapp-base/src/main/resources/web/nuxeo.war/pages/basic_page.xhtml):

```

    Main body content goes here

```

This template uses a page named `myPage`.

It can also reference the two resources defined above to include them too:

```

      /icons/favicon.png
      /icons/favicon.ico

    default

      default

      nuxeo_includes
      nuxeo_base
      nuxeo_sassCss
      nuxeo_dm
      myCss.css
      myScript.js

```

Alternatively, if the page already exists, resources can be appended to it:

```
component.defining.the.myPage.page

      myCss.css
      myScript.js

```

Alternatively, resources can be included to a new resource bundle:

```
component.defining.the.myPage.page

      myCss.css
      myScript.js

      myBundle

```

## Including Resources in Several Pages

The default bundle named `nuxeo_includes`, defined by component `org.nuxeo.theme.nuxeo.webapp`, handles the inclusion of most of the JavaScript files used in default pages. New resources can be added to it so that they're available in all default pages:

```
org.nuxeo.theme.nuxeo.webapp

      myCss.css
      myScript.js

```

Similarly, the default bundle named `nuxeo_base`, also defined by component `org.nuxeo.theme.nuxeo.webapp`, handles the inclusion of most of CSS files used in default pages. New resources can also be added to it.

## Including Resources in a Given Template

When designing a page, you may want to include specific resources. The main page template at [`/pages/basic_page.xhtml`](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-jsf/nuxeo-platform-webapp-base/src/main/resources/web/nuxeo.war/pages/basic_page.xhtml) waits for a `pageName` parameter, that will already include resources and bundles contributed through the `page` extension point.

It also inserts additional templating zones to include additional resources, here is a sample usage:

```

    Main body content goes here

```

<div class="row" data-equalizer="" data-equalize-on="medium">

<div class="column medium-6">{{#> panel heading="Related How-Tos"}}

*   [Theme Documentation]({{page page='theme'}})
*   [How to Customize the Login Page]({{page page='how-to-customize-the-login-page'}})
*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div>

<div class="column medium-6">{{#> panel heading="Related Documentation"}}

*   [Branding in Studio Documentation]({{page space='studio' page='branding'}})
*   [Extension Points]({{page page='runtime-and-component-model'}})
*   [Web UI Framework]({{page page='web-ui-framework'}})
*   [Online UI Style Guide](http://showcase.nuxeo.com/nuxeo/styleGuide/)

{{/panel}}</div>

</div>