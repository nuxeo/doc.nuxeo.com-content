---
title: JSF troubleshoot
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: >-
            Discover the troubleshooting issues that can be encountered with
            JSF.
        level: Advanced
        tool: Code
        topics: JSF
labels:
    - jsf
    - howto
toc: true
confluence:
    ajs-parent-page-id: '22380748'
    ajs-parent-page-title: JSF and Ajax Tips and How-To Index
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: JSF+troubleshoot
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/JSF+troubleshoot'
    page_id: '22380679'
    shortlink: h4BVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/h4BVAQ'
    source_link: /display/NXDOC60/JSF+troubleshoot
tree_item_index: 700
history:
    -
        author: Guillaume Renard
        date: '2015-09-28 10:40'
        message: ''
        version: '28'
    -
        author: Guillaume Renard
        date: '2015-09-28 10:38'
        message: ''
        version: '27'
    -
        author: Manon Lumeau
        date: '2015-09-16 12:08'
        message: ''
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

{{#> callout type='warning' }}

Some of this content is outdated and needs to be reviewed.

{{/callout}}

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

Also make sure you have the right namespace: `xmlns:a4j="https://ajax4jsf.dev.java.net/ajax"`.

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

add&nbsp;`collectionType="java.util.ArrayList"`

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

## IE throws errors like 'Out of memory at line 3156'

This is probably due to some forgotten a4j:log tag on one of your xhtml pages: IE does not play well with this tag from the RichFaces ajax library, and useful for debugging.
It usually happens when entering values on a form, and it may not happen on every page holding the tag.

* * *

&nbsp;

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

Although they are not all specific to Nuxeo framework, here are some troubleshooting issues that can be encountered with JSF.

{{#> callout type='warning' }}

Some of this content is outdated and needs to be reviewed.

{{/callout}}

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

Also make sure you have the right namespace: `xmlns:a4j="https://ajax4jsf.dev.java.net/ajax"`.

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

add&nbsp;`collectionType="java.util.ArrayList"` to the jsf tag causing the error:

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

## IE throws errors like 'Out of memory at line 3156'

This is probably due to some forgotten a4j:log tag on one of your xhtml pages: IE does not play well with this tag from the RichFaces ajax library, and useful for debugging.
It usually happens when entering values on a form, and it may not happen on every page holding the tag.

* * *

&nbsp;

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
