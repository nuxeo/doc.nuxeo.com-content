---
title: 'HOWTO: Set a Default Date on a Field at Document Creation'
review:
    comment: ''
    date: '2015-12-01'
    status: ok
details:
    howto:
        excerpt: "Learn how to set a default date on a field at document creation using Nuxeo Studio's  event handlers  and  automation chains."
        level: Advanced
        tool: 'Studio, Nuxeo CLI'
        topics: 'Layout, Event'
labels:
    - content-review-lts2016
    - event
    - handler
    - listener
    - date
    - howto
    - layout
    - layout-widgets-component
    - atchertchian
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '19235623'
    ajs-parent-page-title: 'Layout & Widget How-To Index'
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Set+a+Default+Date+on+a+Field+at+Document+Creation
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Set+a+Default+Date+on+a+Field+at+Document+Creation'
    page_id: '14255680'
    shortlink: QIbZ
    shortlink_source: 'https://doc.nuxeo.com/x/QIbZ'
    source_link: /display/NXDOC/How+to+Set+a+Default+Date+on+a+Field+at+Document+Creation
tree_item_index: 200
history:
    -
        author: Manon Lumeau
        date: '2016-06-09 15:43'
        message: ''
        version: '13'
    -
        author: Manon Lumeau
        date: '2016-04-28 12:54'
        message: 'Fix images '
        version: '12'
    -
        author: Manon Lumeau
        date: '2016-04-28 12:50'
        message: 'Fix Studio menu label      '
        version: '11'
    -
        author: Solen Guitter
        date: '2016-04-15 09:24'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-12-01 21:52'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2014-09-12 15:47'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2014-09-11 15:24'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2014-09-10 17:30'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-03-10 17:42'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2013-07-17 18:46'
        message: Added excerpt
        version: '4'
    -
        author: Solen Guitter
        date: '2013-07-15 13:50'
        message: ''
        version: '3'
    -
        author: Bertrand Chauvin
        date: '2013-07-01 12:06'
        message: ''
        version: '2'
    -
        author: Bertrand Chauvin
        date: '2013-07-01 11:43'
        message: ''
        version: '1'

---
{{! excerpt}}
A frequent requirement with documents is to set a default date on a field when showing the creation form. This how-to will teach you how to do it easily using Nuxeo Studio's [event handlers]({{page space='studio' page='event-handlers'}}) and [automation chains]({{page space='studio' page='automation'}}).
{{! /excerpt}}

## Before You Start

{{{multiexcerpt 'check-jsf-ui-dependency' page='how-to-define-a-new-content-view'}}}

## Creating the Event Handler

In Nuxeo Studio, go to **Automation** > **Event Handlers** and add a new event handler. Name it and click **Next**.

In the Event Handler Definition section, make sure to select the event "**Empty document created**". This event will be fired right before the document form creation is shown to the user.

![]({{file name='Nuxeo Studio 2013-07-01 11-12-03.png'}} ?w=350,border=true)

In the Event Handler Activation section, you may add filters to define conditions for your event handler to be used. You may relate it to a certain document type for instance, especially if you need to fill a document type specific field.

![]({{file name='Nuxeo Studio 2013-07-01 11-19-04.png'}} ?w=350,border=true)

## Creating the Associated Automation Chain

Now that you have setup when the event handler will take place, it is important to tell what it will do. To do so, in the Event Handler Execution section click on the button **Create**. Note that you may also use an existing automation chain if you created it previously.

![]({{file name='Nuxeo Studio 2013-07-01 11-17-45.png'}} ?w=300,h=69,border=true)

Name your chain and click on **OK**.

In the automation chain, use the following operations and parameters:

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Operation</th>
<th colspan="1">Parameter</th>
<th colspan="1">Value</th>
</tr>
<tr>
<td colspan="1">Fetch > Context document(s)</td>
<td colspan="1">&nbsp;</td>
<td colspan="1">&nbsp;</td>
</tr>
<tr>
<td colspan="1">Document > Update property</td>
<td colspan="1">Value</td>
<td colspan="1">`@{CurrentDate.calendar}`</td>
</tr>
<tr>
<td colspan="1">&nbsp;</td>
<td colspan="1">Xpath</td>
<td colspan="1">`schema:field`</td>
</tr>
</tbody>
</table>
</div>

And that's it! Note that the previous parameter will set today's date, but you may use Nuxeo Studio's expression builder to change it. Many possibilities exist in that regard.

![]({{file name='Nuxeo Studio 2013-07-01 11-36-25.png'}} ?w=35,h=24,border=true)

![]({{file name='Nuxeo Studio 2013-07-01 11-36-04.png'}} ?w=300,h=323,border=true)

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [Customize the Versioning and Comment Widget]({{page page='how-to-customize-the-versioning-and-comment-widget-on-document-edit-form'}})
- [HOWTO: Add a JSF Form Validation]({{page page='how-to-add-a-jsf-form-validation'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [JSF UI Framework]({{page page='jsf-ui-framework'}})
- [Form Layouts in Nuxeo Studio]({{page space='studio' page='form-layouts'}})
- [Layout and Widgets]({{page page='layouts-and-widgets-forms-listings-grids'}})
- [Widget Definitions]({{page page='widget-definitions'}})

{{/panel}}</div></div>
