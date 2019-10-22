---
title: Double Click Shield
review:
    comment: ''
    date: '2019-10-21'
    status: ok
details:
    howto:
        excerpt: 'Learn how to use the "Double Click Shield" feature.'
        level: Advanced
        tool: Code
        topics: 'JSF, Ajax, jQuery'
labels:
    - content-review-lts2016
    - jquery
    - double-click
    - howto
    - ajax
    - jsf-ui
    - seam-jsf-component
    - atchertchian
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '9830458'
    ajs-parent-page-title: JSF and Ajax Tips and How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Double+Click+Shield
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Double+Click+Shield'
    page_id: '16092264'
    shortlink: aIz1
    shortlink_source: 'https://doc.nuxeo.com/x/aIz1'
    source_link: /display/NXDOC/Double+Click+Shield
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2015-10-14 13:31'
        message: ''
        version: '18'
    -
        author: Anahide Tchertchian
        date: '2015-10-13 16:28'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2014-09-18 11:25'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2014-09-17 15:55'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2014-09-17 15:53'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2014-09-17 15:31'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-01-23 18:33'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-01-23 16:15'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2014-01-23 16:14'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-01-23 15:45'
        message: Added TOC
        version: '9'
    -
        author: Solen Guitter
        date: '2014-01-07 15:35'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2013-11-12 16:47'
        message: ''
        version: '7'
    -
        author: Guillaume Renard
        date: '2013-10-31 16:05'
        message: ''
        version: '6'
    -
        author: Guillaume Renard
        date: '2013-10-31 15:42'
        message: ''
        version: '5'
    -
        author: Guillaume Renard
        date: '2013-10-31 15:39'
        message: ''
        version: '4'
    -
        author: Guillaume Renard
        date: '2013-10-31 15:39'
        message: ''
        version: '3'
    -
        author: Guillaume Renard
        date: '2013-10-31 15:23'
        message: NXDOC-264
        version: '2'
    -
        author: Guillaume Renard
        date: '2013-10-31 14:32'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

{{! excerpt}}
The "Double Click Shield" feature is enabled in the JSF interface and it addresses the issue described in the page [I Get an Error When I Click on Two Links Quickly]({{page space='nxdoc60' page='i-get-an-error-when-i-click-on-two-links-quickly'}}).
{{! /excerpt}}

The Double Click Shield prevents a form from being submitted twice. When you click many times on the same button that launches a&nbsp;server-side action, the feature will let the first click launch the action but will prevent any additional click. This is possible thanks to a jQuery plugin which listens to the submit event of a given form.

Through a custom JSF Form Renderer, we add the dedicated CSS style class&nbsp; `<span style="color: rgb(34,34,34);">doubleClickShielded</span>` &nbsp;to all&nbsp;`h:form`&nbsp;handled by Nuxeo. When a page is loaded, the jQuery plugin will then enable the shield on all form flagged with this CSS class. (Note that the shield is not enabled on&nbsp;`a4j:form`&nbsp;since it serializes its submits).

You can see the shield in action when a "Request in progress" message is displayed at the top right corner of the window:

![]({{file name='Screenshot from 2013-10-31 15-21-18.png'}} ?w=650,border=true)

## Limitations

The shield will intercept the submit event of a form. There are cases where a form is submitted without firing the submit event and the shield will therefore not be active.

{{#> callout type='tip' heading='h:commandLink vs. h:commandButton'}}

*   `<span class="il" style="color: rgb(34,34,34);">h</span> <span style="color: rgb(34,34,34);">:</span> <span class="il" style="color: rgb(34,34,34);">commandLink</span>` <span style="color: rgb(34,34,34);">&nbsp;renders a classic HTML `a` link with some custom JSF JavaScript, bound to the click event, that obscurely submits the form in a uncommon way. Then submitting it does&nbsp;**not**&nbsp;fire the submit event.</span>
*   <span style="color: rgb(34,34,34);">`h:commandButton`&nbsp;renders a HTML `input` tag with&nbsp;`type="submit"`&nbsp;which properly fires the submit event.</span>

{{/callout}}

<span style="color: rgb(34,34,34);">When designing your own template, if you'd like to protect a form from double submit, use the&nbsp;</span>&nbsp;`h:commandButton`&nbsp;<span style="color: rgb(34,34,34);">.</span>

## How to Locally Disable the Shield

There are use cases where the shield might break the proper functioning of a form. For instance, if you have a component that needs to perform several Ajax submits. This is the case when using&nbsp;[`rich:fileupload`](http://richfileupload)&nbsp;which performs as many submits as there are files to upload. With the shield enabled, only the first file will be uploaded and the others will be ignored. To address these particular use cases, you can disable the shield on a particular form by adding the&nbsp;`disableDoubleClickShield="true"`&nbsp;attribute.

{{#> panel type='code' heading='Disabling Double Click Shield on a particular form'}}

```xml
<h:form enctype="multipart/form-data" id="document_files_edit" disableDoubleClickShield="true">

	<rich:fileUpload uploadData="#{FileManageActions.uploadedFiles}"
      listHeight="150" maxFilesQuantity="5"
      id="upload"
      locale="#{localeSelector.localeString}"
      immediateUpload="true" >
      <a4j:support  onsubmit="removeUploadedFile(event.memo.entry);" event="onclear"/>
	</rich:fileUpload>

</h:form>
```

{{/panel}}

## How to Globally Disable the Shield

You can disable the shield for the whole Nuxeo application by adding the following runtime contribution:

```
<component name="org.nuxeo.disableDoubleClickShield">

  <require>org.nuxeo.ecm.platform.ui.web.configuration.default</require>
  <extension target="org.nuxeo.runtime.ConfigurationService"
    point="configuration">
      <property name="nuxeo.jsf.enableDoubleClickShield">false</property>
  </extension>

</component>
```

&nbsp;

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
