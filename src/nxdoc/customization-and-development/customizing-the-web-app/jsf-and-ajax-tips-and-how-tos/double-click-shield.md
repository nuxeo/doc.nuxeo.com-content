---
title: Double Click Shield
review:
    comment: ''
    date: ''
    status: ok
labels:
    - jquery
    - double-click
toc: true
confluence:
    ajs-parent-page-id: '17334513'
    ajs-parent-page-title: JSF and Ajax Tips and How-Tos
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Double+Click+Shield
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Double+Click+Shield'
    page_id: '17334498'
    shortlink: 4oAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/4oAIAQ'
    source_link: /display/NXDOC58/Double+Click+Shield
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 07:36'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2014-01-23 18:34'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2014-01-23 16:20'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2014-01-23 16:16'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2014-01-23 15:55'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-11-12 16:49'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2013-11-12 16:43'
        message: Formatting
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
<div class="row"><div class="column medium-8">{{! excerpt}}

A new feature called "Double Click Shield" has been introduced in Nuxeo 5.8\. It is enabled in the JSF interface and it addresses the issue described in "[I Get an Error When I Click on Two Links Quickly]({{page page='i-get-an-error-when-i-click-on-two-links-quickly'}})".

{{! /excerpt}}

The Double Click Shield prevents a form from being submitted twice. Typically, when you click many times the same button that launches a&nbsp;server-side action, the feature will let the first click launch the action but will prevent any additional click. This is possible thanks to a jQuery plugin which listens to the submit event of a given form.

Through a custom JSF Form Renderer, we add the dedicated CSS style class&nbsp; `doubleClickShielded` &nbsp;to all&nbsp;`h:form`&nbsp;handled by Nuxeo. When a page is loaded, the jQuery plugin will then enable the shield on all form flagged with this CSS class. (Note that the shield is not enabled on&nbsp;`a4j:form`&nbsp;since it serializes its submits).

</div><div class="column medium-4">{{#> panel heading='On this page'}}

{{/panel}}</div></div>

You can see the shield in action when a "Request in progress" message is displayed at the top right corner of the window:

![]({{file name='Screenshot from 2013-10-31 15-21-18.png'}} ?w=650,border=true)

## Limitations

The shield will intercept the submit event of a form. There are cases where a form is submitted without firing the submit event and the shield will therefore not be active.

{{#> callout type='tip' heading='h:commandLink vs. h:commandButton'}}

*   `h:commandLink` renders a classic HTML `a` link with some custom JSF JavaScript, bound to the click event, that obscurely submits the form in a uncommon way. Then submitting it does&nbsp;**not**&nbsp;fire the submit event.
*   `h:commandButton`&nbsp;renders a HTML `input` tag with&nbsp;`type="submit"`&nbsp;which properly fires the submit event.

{{/callout}}

When designing your own template, if you'd like to protect a form from double submit, use the `h:commandButton` .

## How to Locally Disable the Shield

There are use cases where the shield might break the proper functioning of a form. For instance, if you have a component that needs to perform several Ajax submits. This is the case when using&nbsp;`rich:fileupload`&nbsp;which performs as many submits as there are files to upload. With the shield enabled, only the first file will be uploaded and the others will be ignored. To address these particular use cases, you can disable the shield on a particular form by adding the&nbsp;`disableDoubleClickShield="true"`&nbsp;attribute.

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

You can disable the shield for the whole Nuxeo application by adding the following&nbsp;parameter in your [ nuxeo.conf file ]({{page space='admindoc58' page='configuration-parameters-index-nuxeoconf'}}).

```
nuxeo.jsf.enableDoubleClickShield=false
```

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related topics'}}

*   [I Get an Error When I Click on Two Links Quickly]({{page page='i-get-an-error-when-i-click-on-two-links-quickly'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>