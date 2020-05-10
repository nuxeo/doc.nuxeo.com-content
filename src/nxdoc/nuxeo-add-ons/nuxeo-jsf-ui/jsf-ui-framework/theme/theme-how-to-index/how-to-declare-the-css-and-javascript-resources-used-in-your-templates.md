---
title: 'HOWTO: Declare the CSS and JavaScript Resources Used in Your Templates'
review:
    comment: ''
    date: '2018-01-15'
    status: ok
details:
    howto:
        excerpt: Learn how to declare and add the CSS and JavaScript ressources in your templates.
        level: Advanced
        tool: Code editor
        topics: Theme
labels:
    - lts2016-ok
    - css
    - javascript
    - troger
    - template
    - howto
    - theme
    - link-update
    - excerpt
    - lts2017-ok
confluence:
    ajs-parent-page-id: '19235625'
    ajs-parent-page-title: Theme How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Declare+the+CSS+and+JavaScript+Resources+Used+in+Your+Templates
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Declare+the+CSS+and+JavaScript+Resources+Used+in+Your+Templates'
    page_id: '4689203'
    shortlink: M41H
    shortlink_source: 'https://doc.nuxeo.com/x/M41H'
    source_link: /display/NXDOC/How+to+Declare+the+CSS+and+JavaScript+Resources+Used+in+Your+Templates
tree_item_index: 300
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

{{! /excerpt}} {{#> callout type='note' }}

This page talks about using JavaScript inside the Nuxeo web application (the back office). If you want to build a JavaScript application (with jQuery, Node, AngularJS, ...) you should follow our [Nuxeo JavaScript Client]({{page page='javascript-client'}}) page.

{{/callout}}

## Defining New Resources

Let's define two types of resources to be included later on pages:

```xml
<extension target="org.nuxeo.ecm.platform.WebResources" point="resources">
  <resource name="myCss.css">
    <uri>/css/myCss.css</uri>
  </resource>
  <resource name="myScript.js">
    <uri>scripts/myScript.js</uri>
  </resource>
</extension>
```

Here the `uri` element is used, so resources will be looked up in the JAR holding the declaration. Please refer to the [`resources` extension point](http://explorer.nuxeo.com/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.platform.WebResources--resources) documentation for more details.

## Including Resources in a Given Page

{{#> callout type='tip' }}

You can browse the [Nuxeo Resources JSF tag library documentation](http://community.nuxeo.com/api/nuxeo/7.4/tlddoc/nxr/tld-summary.html) to get details on how to use a given resource or bundle in a page.

{{/callout}}

&nbsp;

Let's consider defining a new page template, using the main page template at [`/pages/basic_page.xhtml`](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-jsf/nuxeo-platform-webapp-base/src/main/resources/web/nuxeo.war/pages/basic_page.xhtml):

```xml
<ui:composition template="basic_page.xhtml"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:ui="http://java.sun.com/jsf/facelets">
  <ui:param name="pageName" value="myPage" />
  <ui:param name="pageFlavor" value="#{themeActions.currentFlavor}" />

  <ui:define name="basic body">
    Main body content goes here
  </ui:define>

</ui:composition>
```

This template uses a page named `myPage`.

It can also reference the two resources defined above to include them too:

```xml
<extension target="org.nuxeo.theme.styling.service" point="pages">
  <page name="myPage" charset="utf-8">
    <links>
      <icon name="icon">/icons/favicon.png</icon>
      <icon name="shortcut icon">/icons/favicon.ico</icon>
    </links>
    <defaultFlavor>default</defaultFlavor>
    <flavors>
      <flavor>default</flavor>
    </flavors>
    <resources>
      <bundle>nuxeo_includes</bundle>
      <bundle>nuxeo_base</bundle>
      <bundle>nuxeo_sassCss</bundle>
      <bundle>nuxeo_dm</bundle>
      <resource>myCss.css</resource>
      <resource>myScript.js</resource>
    </resources>
  </page>
</extension>
```

Alternatively, if the page already exists, resources can be appended to it:

```xml
<require>component.defining.the.myPage.page<require>
<extension target="org.nuxeo.theme.styling.service" point="pages">
  <page name="myPage">
    <resources append="true">
      <resource>myCss.css</resource>
      <resource>myScript.js</resource>
    </resources>
  </page>
</extension>
```

Alternatively, resources can be included to a new resource bundle:

```xml
<require>component.defining.the.myPage.page<require>
<extension target="org.nuxeo.ecm.platform.WebResources" point="bundles">
  <bundle name="myBundle">
    <resources>
      <resource>myCss.css</resource>
      <resource>myScript.js</resource>
    </resources>
  </bundle>
</extension>
<extension target="org.nuxeo.theme.styling.service" point="pages">
  <page name="myPage">
    <resources append="true">
      <bundle>myBundle</bundle>
    </resources>
  </page>
</extension>
```

## Including Resources in Several Pages

The default bundle named `nuxeo_includes`, defined by component `org.nuxeo.theme.nuxeo.webapp`, handles the inclusion of most of the JavaScript files used in default pages. New resources can be added to it so that they're available in all default pages:

```xml
<require>org.nuxeo.theme.nuxeo.webapp</require>
<extension target="org.nuxeo.ecm.platform.WebResources" point="bundles">
  <bundle name="nuxeo_includes">
    <resources append="true">
      <resource>myCss.css</resource>
      <resource>myScript.js</resource>
    </resources>
  </bundle>
</extension>

```

Similarly, the default bundle named `nuxeo_base`, also defined by component `org.nuxeo.theme.nuxeo.webapp`, handles the inclusion of most of CSS files used in default pages. New resources can also be added to it.

## Including Resources in a Given Template

When designing a page, you may want to include specific resources. The main page template at [`/pages/basic_page.xhtml`](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-jsf/nuxeo-platform-webapp-base/src/main/resources/web/nuxeo.war/pages/basic_page.xhtml) waits for a `pageName` parameter, that will already include resources and bundles contributed through the `page` extension point.

It also inserts additional templating zones to include additional resources, here is a sample usage:

```xml
<ui:composition template="basic_page.xhtml"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:h="http://java.sun.com/jsf/html"
  xmlns:ui="http://java.sun.com/jsf/facelets">
  <ui:param name="pageName" value="#{themeActions.currentPage}" />
  <ui:param name="pageFlavor" value="#{themeActions.currentFlavor}" />

  <ui:define name="stylesheets">
    <nxr:resource name="myCss.css" />
  </ui:define>

  <ui:define name="header_scripts">
    <nxr:resource name="myScript.js" />
  </ui:define>

  <ui:define name="basic body">
    Main body content goes here
  </ui:define>

</ui:composition>
```

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [Theme Documentation]({{page page='theme'}})
- [HOWTO: Customize the Login Page]({{page page='how-to-customize-the-login-page'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Branding in Studio Documentation]({{page space='studio' page='branding'}})
- [Extension Points]({{page page='runtime-and-component-model'}})
- [JSF UI Framework]({{page page='jsf-ui-framework'}})
- [Online UI Style Guide](http://showcase.nuxeo.com/nuxeo/styleGuide/)

{{/panel}}</div></div>
