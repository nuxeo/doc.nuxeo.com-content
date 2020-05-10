---
title: JSF troubleshoot
review:
    comment: ''
    date: '2015-12-01'
    status: ok
details:
    howto:
        excerpt: Discover the troubleshooting issues that can be encountered with JSF.
        level: Advanced
        tool: Code
        topics: JSF
labels:
    - content-review-lts2016
    - jsf
    - howto
    - seam-jsf-component
    - atchertchian
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '9830458'
    ajs-parent-page-title: JSF and Ajax Tips and How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: JSF+troubleshoot
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/JSF+troubleshoot'
    page_id: '3343547'
    shortlink: uwQz
    shortlink_source: 'https://doc.nuxeo.com/x/uwQz'
    source_link: /display/NXDOC/JSF+troubleshoot
tree_item_index: 700
history:
    -
        author: Anahide Tchertchian
        date: '2016-07-08 15:07'
        message: ''
        version: '29'
    -
        author: Anahide Tchertchian
        date: '2016-07-08 15:06'
        message: ''
        version: '28'
    -
        author: Guillaume Renard
        date: '2015-09-28 10:40'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2015-08-31 14:10'
        message: Add TOC
        version: '26'
    -
        author: Anahide Tchertchian
        date: '2014-12-09 15:34'
        message: add deprecation warning
        version: '25'
    -
        author: Manon Lumeau
        date: '2014-09-18 11:06'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2014-09-17 17:33'
        message: typos
        version: '23'
    -
        author: Anahide Tchertchian
        date: '2012-02-06 17:54'
        message: Migrated to Confluence 4.0
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
Although they are not all specific to Nuxeo framework, here are some troubleshooting issues that can be encountered with JSF.

## My file is not uploaded correctly although other fields are set

Make sure your `<h:form>` tag accepts multipart content: `<h:form enctype="multipart/form-data">`.

## My ajax action does not work

There could be lots of reasons for this to happen. The easiest way to find the cause is to add a `<a4j:log />` tag to your xhtml page, and then open it using CTRL+SHIFT+l. You'll get ajax debug logs in a popup window and hopefully will understand what is the problem.

Also make sure you have the right namespace: `xmlns:a4j="[http://richfaces.org/a4j](http://richfaces.org/a4j)"`.

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

## ClassCastException on&nbsp;h:selectManyCheckbox (or such) jsf tag

If you see the following stacktrace:

```
Caused by: java.lang.ClassCastException: [Ljava.lang.String; cannot be cast to java.util.Collection
	at com.sun.faces.renderkit.html_basic.MenuRenderer.convertSelectManyValuesForModel(MenuRenderer.java:356)
	at com.sun.faces.renderkit.html_basic.MenuRenderer.convertSelectManyValue(MenuRenderer.java:128)
	at com.sun.faces.renderkit.html_basic.MenuRenderer.getConvertedValue(MenuRenderer.java:314)
	at javax.faces.component.UIInput.getConvertedValue(UIInput.java:1046)
	at javax.faces.component.UIInput.validate(UIInput.java:976)
	at javax.faces.component.UIInput.executeValidate(UIInput.java:1249)
	at javax.faces.component.UIInput.processValidators(UIInput.java:712)
	at javax.faces.component.UIComponentBase.processValidators(UIComponentBase.java:1258)
	at javax.faces.component.UIComponentBase.processValidators(UIComponentBase.java:1258)
	at javax.faces.component.UIForm.processValidators(UIForm.java:253)
	at javax.faces.component.UIComponentBase.processValidators(UIComponentBase.java:1258)
	at org.nuxeo.ecm.platform.ui.web.component.holder.UIValueHolder.processComponent(UIValueHolder.java:258)
	at org.nuxeo.ecm.platform.ui.web.component.holder.UIValueHolder.processFacetsAndChildren(UIValueHolder.java:237)
	at org.nuxeo.ecm.platform.ui.web.component.holder.UIValueHolder.processFacetsAndChildrenWithVariable(UIValueHolder.java:245)
	at org.nuxeo.ecm.platform.ui.web.component.holder.UIValueHolder.processValidators(UIValueHolder.java:184)
	at javax.faces.component.UIComponentBase.processValidators(UIComponentBase.java:1258)
	at javax.faces.component.UIComponentBase.processValidators(UIComponentBase.java:1258)
	at javax.faces.component.UIViewRoot.processValidators(UIViewRoot.java:1195)
	at com.sun.faces.lifecycle.ProcessValidationsPhase.execute(ProcessValidationsPhase.java:76)
	at com.sun.faces.lifecycle.Phase.doPhase(Phase.java:101)
	at com.sun.faces.lifecycle.LifecycleImpl.execute(LifecycleImpl.java:198)
	at javax.faces.webapp.FacesServlet.service(FacesServlet.java:646)
	... 66 more

```

add&nbsp;`collectionType="java.util.ArrayList"` to the jsf tag causing the error.

```
	<h:selectManyCheckbox id="#{widget.id}_checkbox" value="#{field}"
		layout="pageDirection" collectionType="java.util.ArrayList">
		<nxu:selectItems
			value="#{aBean.getValues()}"
			var="item" itemValue="#{item.id}"
			itemLabel="#{item.label}"/>
	</h:selectManyCheckbox>
```

&nbsp;

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [JSF and Javascript ]({{page page='jsf-and-javascript'}})
- [Ajax4jsf Best Practices]({{page page='ajax4jsf-best-practices'}})
- [Ajax Forms and Actions]({{page page='ajax-forms-and-actions'}})
- [HOWTO: Add a JSF Form Validation]({{page page='how-to-add-a-jsf-form-validation'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [JavaScript Client]({{page page='javascript-client'}})
- [JSF UI Framework]({{page page='jsf-ui-framework'}})
- [Nuxeo JSF UI]({{page page='nuxeo-jsf-ui'}})
{{/panel}}</div></div>
