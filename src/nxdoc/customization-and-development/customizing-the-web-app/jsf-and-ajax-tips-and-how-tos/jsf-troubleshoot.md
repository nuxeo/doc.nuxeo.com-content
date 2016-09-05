---
title: JSF troubleshoot
confluence:
    ajs-parent-page-id: '17334513'
    ajs-parent-page-title: JSF and Ajax Tips and How-Tos
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: JSF+troubleshoot
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/JSF+troubleshoot'
    page_id: '17334465'
    shortlink: wYAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/wYAIAQ'
    source_link: /display/NXDOC58/JSF+troubleshoot
history:
    - 
        author: Anahide Tchertchian
        date: '2012-02-06 17:54'
        message: igrated to Confluence 4.
        version: '22'
    - 
        author: Anahide Tchertchian
        date: '2012-02-06 17:54'
        message: ''
        version: '21'
    - 
        author: Anahide Tchertchian
        date: '2011-05-17 17:05'
        message: ''
        version: '20'
    - 
        author: Anahide Tchertchian
        date: '2011-05-04 15:35'
        message: ''
        version: '19'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 17:33'
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
Altough they are not all specific to Nuxeo framework, here are some troubleshooting issues that can be encountered with JSF.

## NullPointerException? when rendering a page

If you have a stack trace that looks like:

```

java.lang.NullPointerException
        at org.apache.myfaces.trinidadinternal.renderkit.core.xhtml.FormRenderer.encodeEnd(FormRenderer.java:210)
        at org.apache.myfaces.trinidad.render.CoreRenderer.encodeEnd(CoreRenderer.java:211)
        at org.apache.myfaces.trinidadinternal.renderkit.htmlBasic.HtmlFormRenderer.encodeEnd(HtmlFormRenderer.java:63)
        at javax.faces.component.UIComponentBase.encodeEnd(UIComponentBase.java:833)
        at javax.faces.component.UIComponent.encodeAll(UIComponent.java:896)
        at javax.faces.component.UIComponent.encodeAll(UIComponent.java:892)

```

Then you probably have a `<h:form>` tag inside another `<h:form>` tag, and this is not allowed.

## My action is not called when clicking on a button

If an action listener is not called when clicking on a form button, then you probably have conversion or validation errors on the page. Add a `<h:messages />` tag to your page to get more details on the actual problem.

Also make sure you don't have any `<h:form>` tag inside another `<h:form>` tag.

## My file is not uploaded correctly although other fields are set

Make sure your `<h:form>` tag accepts multipart content: `<h:form enctype="multipart/form-data">`.

## My ajax action does not work

There could be lots of reasons for this to happen. The easiest way to find the cause is to add a `<a4j:log />` tag to your xhtml page, and then open it using CTRL+SHIFT+l. You'll get ajax debug logs in a popup window and hopefully will understand what is the problem.

Also make your you have the right namespace: `xmlns:a4j="https://ajax4jsf.dev.java.net/ajax"`.

## My variable is not resolved correctly

A lot of different causes could explain with a variable is not resolved properly, but here are some recommandations to avoid known problems.

When exposing a variable for EL resolution, note that there are some reserved keywords. For instance in tags like:

```

<nxu:dataList var="action" value="#{actions}">
  ...
</nxu:dataList>

```

or

```

<nxu:inputList model="model" value="#{myList}">
...
</nxu:inputList>

```

or even:

```

<c:set var="foo" value="bar" />

```

The reserved keywords are: "application", "applicationScope", "cookie", "facesContext", "header", "headerValues", "initParam", "param", "paramValues", "request", "requestScope", "session", "sessionScope", and "view".

All values in the EL context for one of these keywords will resolve to request information instead of mapping your value.

## IE throws errors like 'Out of memory at line 3156'

This is probably due to some forgotten a4j:log tag on one of your xhtml pages: IE does not play well with this tag from the RichFaces ajax library, and useful for debugging.
It usually happens when entering values on a form, and it may not happen on every page holding the tag.