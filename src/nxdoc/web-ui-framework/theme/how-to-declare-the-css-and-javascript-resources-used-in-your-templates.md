---
title: How to Declare the CSS and Javascript Resources Used in Your Templates
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: >-
            Learn how to declare and add the CSS and JavaScript ressources in
            your templates.
        level: Advanced
        tool: Code editor
        topics: Theme
labels:
    - howto
    - css
    - theme
    - javascript
    - template
confluence:
    ajs-parent-page-id: '22380895'
    ajs-parent-page-title: Theme
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: How+to+Declare+the+CSS+and+Javascript+Resources+Used+in+Your+Templates
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/How+to+Declare+the+CSS+and+Javascript+Resources+Used+in+Your+Templates
    page_id: '22380609'
    shortlink: QYBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/QYBVAQ'
    source_link: >-
        /display/NXDOC60/How+to+Declare+the+CSS+and+Javascript+Resources+Used+in+Your+Templates
history:
    - 
        author: Manon Lumeau
        date: '2016-02-09 15:32'
        message: ''
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

The CSS and JavaScript resources needed by your JSF pages can be added directly from inside your templates.

{{! /excerpt}}

Let us consider the following JSF page:

```xml
<nxthemes:composition xmlns="http://www.w3.org/1999/xhtml"
  xmlns:nxthemes="http://nuxeo.org/nxthemes"
  xmlns:ui="http://java.sun.com/jsf/facelets">

  <ui:define name="body">

<div class="myWidget">A special widget that requires custom CSS and Javascript.</div>
  </ui:define>

</nxthemes:composition>

```

The simplest way to include resources to the page is to add a `<nxthemes:require>` tag to your JSF template:

```xml
<nxthemes:composition xmlns="http://www.w3.org/1999/xhtml"
  xmlns:nxthemes="http://nuxeo.org/nxthemes"
  xmlns:ui="http://java.sun.com/jsf/facelets">

  <nxthemes:require resource="myCss.css" />
  <nxthemes:require resource="myScript.js" />

  <ui:define name="body">

<div>A special widget that requires custom CSS and Javascript</div>
  </ui:define>

</nxthemes:composition>

```

This will load the `myCss.css` style and the `myScript.js` script and all their dependencies automatically whenever the JSF page is being displayed.

If you are using FreeMarker templates under WebEngine, the syntax is:

```xml
<@nxthemes_require>myCss.css</@nxthemes_require>
<@nxthemes_require>myScript.js</@nxthemes_require>

```

&nbsp;Resources are declared as theme contributions as usual:

```xml
<extension target="org.nuxeo.theme.services.ThemeService" point="resources">

    <resource name="myCss.css">
      <path>path/to/myCss.css</path>
    </resource>

    <resource name="myScript.js">
      <path>path/to/myScript.js</path>
    </resource>

</extension>

```

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

*   [undefined]()
*   [How to Customize the Login Page]({{page page='how-to-customize-the-login-page'}})
*   [undefined]()
*   [How to Add a New Style to Default Pages]({{page page='how-to-add-a-new-style-to-default-pages'}})
*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Theme in Developer Documentation]({{page page='theme'}})
*   [Branding in Studio Documentation]({{page space='studio' page='branding'}})
*   [Extension Points]({{page page='runtime-and-component-model'}})
*   [Web UI Framework]({{page page='web-ui-framework'}})
*   [Online UI Style Guide](http://showcase.nuxeo.com/nuxeo/styleGuide/)

{{/panel}}</div></div>