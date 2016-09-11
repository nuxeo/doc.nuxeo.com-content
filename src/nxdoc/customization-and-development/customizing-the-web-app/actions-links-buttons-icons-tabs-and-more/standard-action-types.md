---
title: Standard Action Types
review:
    comment: ''
    date: ''
    status: ok
labels:
    - action-type
    - action
toc: true
confluence:
    ajs-parent-page-id: '17334390'
    ajs-parent-page-title: 'Actions (Links, Buttons, Icons, Tabs and More)'
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Standard+Action+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Standard+Action+Types'
    page_id: '18449679'
    shortlink: D4UZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/D4UZAQ'
    source_link: /display/NXDOC58/Standard+Action+Types
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 09:36'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2014-03-11 12:06'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-01-22 17:25'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">{{! excerpt}}

A series of action types is available for the most basic uses cases.

{{! /excerpt}}

## link

Link actions display a command link, and can be ajaxified or not.

View online reference: [http://showcase.nuxeo.com/nuxeo/layoutDemo/linkAction](http://showcase.nuxeo.com/nuxeo/layoutDemo/linkAction)

## bare_link

Bare link actions display links to external URLs.

View online reference: [http://showcase.nuxeo.com/nuxeo/layoutDemo/bare_linkAction](http://showcase.nuxeo.com/nuxeo/layoutDemo/bare_linkAction)

</div><div class="column medium-4">{{#> panel heading='In this section'}} {{/panel}}</div></div>

## fancybox

Fancybox actions open a FancyBox (aka modal panel) when the button is clicked. The fancybox content can either be a XHTML template fragment, or a complete iframe.

Note that fancybox actions cannot currently be used as form actions (e.g present forms that can be submitted inside another form) as nested sub-forms are not supported.

When referencing a XHTML template via the&nbsp;`include` property, if this template holds a form, it should be using the variable `fancyboxFormId` as its form id for the fancybox to be reopened on validation errors.

The bulk edit action can be taken as an example, see the [action "CURRENT_SELECTION_EDIT" registration](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewContribution/org.nuxeo.ecm.platform.actions--actions) and [referenced template](https://github.com/nuxeo/nuxeo-jsf/blob/release-5.8/nuxeo-platform-webapp-base/src/main/resources/web/nuxeo.war/incl/bulk_edit_box.xhtml).

View online reference: [http://showcase.nuxeo.com/nuxeo/layoutDemo/fancyboxAction](http://showcase.nuxeo.com/nuxeo/layoutDemo/fancyboxAction)

## rest_document_link

Rest document link actions display a link to a given document view. These actions are used to display document tabs, as they can reference a tab to be marked as currently selected.

View online reference: [http://showcase.nuxeo.com/nuxeo/layoutDemo/rest_document_linkAction](http://showcase.nuxeo.com/nuxeo/layoutDemo/rest_document_linkAction)

## main_tab

Main tab actions display a link to a given module/application, for instance "Home", "Document Management" or "Admin Center".

These actions are not really tabs, because the content of the "tab" depends on the view, not on the corresponding action configuration. They use a specific action type to resolve specific [Navigation URLs]({{page page='navigation-urls'}}) and current document restoration depending on the module/application.

View online reference: [http://showcase.nuxeo.com/nuxeo/layoutDemo/main_tabAction](http://showcase.nuxeo.com/nuxeo/layoutDemo/main_tabAction)

## widget

Widget actions are mainly useful when building [incremental layouts]({{page page='incremental-layouts-and-actions'}}): they allow to display a given widget (on a summary page for instance) depending on action filters and orders configuration (for a given [category of actions]({{page page='actions-display'}})).

View online reference: [http://showcase.nuxeo.com/nuxeo/layoutDemo/widgetAction](http://showcase.nuxeo.com/nuxeo/layoutDemo/widgetAction)

## template

Template actions are useful to display a custom content freely. For instance, they're used to display the search box on the top right corner.

View online reference: [http://showcase.nuxeo.com/nuxeo/layoutDemo/templateAction](http://showcase.nuxeo.com/nuxeo/layoutDemo/templateAction)

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in this documentation'}}

*   [Actions Overview]({{page page='actions-overview'}})
*   [Custom Action Types]({{page page='custom-action-types'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related pages in Studio documentation'}}

*   [User Actions]({{page space='studio' page='user-actions'}})
*   [User actions categories]({{page space='studio' page='user-actions-categories'}})

{{/panel}}</div></div>