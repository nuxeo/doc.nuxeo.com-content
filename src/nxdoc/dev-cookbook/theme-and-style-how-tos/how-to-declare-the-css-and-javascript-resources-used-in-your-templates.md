---
title: How to Declare the CSS and Javascript Resources Used in Your Templates
review:
    comment: ''
    date: ''
    status: ok
labels:
    - css
    - javascript
    - template
confluence:
    ajs-parent-page-id: '17334301'
    ajs-parent-page-title: Theme and Style How-Tos
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: How+to+Declare+the+CSS+and+Javascript+Resources+Used+in+Your+Templates
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC58/How+to+Declare+the+CSS+and+Javascript+Resources+Used+in+Your+Templates
    page_id: '18449703'
    shortlink: J4UZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/J4UZAQ'
    source_link: >-
        /display/NXDOC58/How+to+Declare+the+CSS+and+Javascript+Resources+Used+in+Your+Templates
history:
    - 
        author: Solen Guitter
        date: '2014-01-22 17:40'
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