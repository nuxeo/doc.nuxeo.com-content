---
title: How to Control the Display Mode of a Widget
review:
    comment: ''
    date: '2019-02-13'
    status: ok
notes: Documentation page used on Nuxeo Studio. Check with NOS team before deleting or moving.
details:
    howto:
        excerpt: Learn how to be able to control the display mode of a widget. Nuxeo Studio enables you to implement your requirements using an expression when you configure your widget.
        level: Advanced
        tool: Studio
        topics: 'Layout, Widget'
labels:
    - content-review-lts2016
    - scripting
    - el
    - widget
    - howto
    - layout
    - studio
    - layout-widgets-component
    - atchertchian
    - excerpt
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '19235623'
    ajs-parent-page-title: 'Layout & Widget How-To Index'
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Control+the+Display+Mode+of+a+Widget
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Control+the+Display+Mode+of+a+Widget'
    page_id: '4689273'
    shortlink: eY1H
    shortlink_source: 'https://doc.nuxeo.com/x/eY1H'
    source_link: /display/NXDOC/How+to+Control+the+Display+Mode+of+a+Widget
tree_item_index: 700
history:
    -
        author: Manon Lumeau
        date: '2015-11-27 16:54'
        message: ''
        version: '28'
    -
        author: Manon Lumeau
        date: '2015-11-27 16:52'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2014-12-01 21:54'
        message: ''
        version: '26'
    -
        author: Manon Lumeau
        date: '2014-09-12 16:12'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2014-09-12 15:53'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2014-09-12 15:24'
        message: ''
        version: '23'
    -
        author: Manon Lumeau
        date: '2014-09-12 14:29'
        message: ''
        version: '22'
    -
        author: Manon Lumeau
        date: '2014-08-22 10:48'
        message: ''
        version: '21'
    -
        author: Manon Lumeau
        date: '2014-08-22 10:48'
        message: ''
        version: '20'
    -
        author: Manon Lumeau
        date: '2014-08-22 10:47'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2014-07-03 16:31'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2014-07-02 16:31'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2014-07-02 16:30'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2014-03-10 18:06'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2013-09-02 14:44'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2013-06-27 11:34'
        message: Added related EL topics
        version: '13'
    -
        author: Solen Guitter
        date: '2011-09-12 12:42'
        message: Migrated to Confluence 4.0
        version: '12'
    -
        author: Solen Guitter
        date: '2011-09-12 12:42'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2011-07-19 16:03'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2011-01-21 14:54'
        message: formatting and typos
        version: '9'
    -
        author: Alain Escaffre
        date: '2011-01-20 14:39'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2011-01-20 09:49'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2011-01-18 09:55'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2011-01-11 09:35'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2011-01-11 09:32'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2011-01-11 09:32'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2011-01-11 09:31'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2011-01-11 09:11'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DeprecatedJSF' page='generic-multi-excerpts'}}}

{{! excerpt}}
It is a very frequent requirement to be able to control the display mode of a widget depending on some conditions such as the lifecycle state of the document, or the groups a user belongs to. Nuxeo Studio enables you to leverage the power of the Nuxeo Layout service and to implement your requirements using an expression when you configure your widget.
{{! /excerpt}}

For instance, when you are editing a document layout, whether it is the creation, edition or view layout, if you edit the widgets you dropped on the layout, you will see the "Advanced mode configuration" section.

![]({{file name='STUDIO-2.1_widget_editor.png'}} ?w=350,border=true)

{{#> callout type='info' }}
{{{multiexcerpt 'check-jsf-ui-dependency' page='how-to-define-a-new-content-view'}}}
{{/callout}}

1.  Unfold the option by clicking on the black arrow,
    ![]({{file name='screenshot_2011-01-11_09.01.44.png'}} ?w=450,border=true)
2.  Fill the text area with an expression that will control the display of your widget. Here are some samples:

*   `#{layoutValue.currentLifeCycleState =='approved' && currentUser.model.user.company == 'Nuxeo'?'edit':'hidden'}`
    This expression says that the field will be invisible unless the document is in state "approved" and the company of the user is "Nuxeo". In that case it will be editable.
*   `#{currentUser.isMemberOf('quality_managers') && (layoutValue.dc.nature=='procedure'||layoutValue.dc.nature=='decree')?'edit':'view'}`
    This expression says that the field will be editable only for people from group quality_managers and only if the document is a decree or a procedure. Otherwise, value is just viewable.
*   `#{nxd:hasPermission(layoutValue, 'Editorial')?'edit':'view'}`
    This expression says that the widget will be editable only for users having the Editorial permission.

You can also see the [reference documentation on layouts]({{page page='layout-and-widget-definitions'}}), more specifically the [EL expressions in layouts and widgets]({{page page='layout-and-widget-definitions#el-expressions-in-layouts-and-widgets'}}) section.

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related How-Tos'}}

- [How to Set a Default Date on a Field at Document Creation]({{page page='how-to-set-a-default-date-on-a-field-at-document-creation'}})
- [Customize the Versioning and Comment Widget]({{page page='how-to-customize-the-versioning-and-comment-widget-on-document-edit-form'}})
- [How to Add a JSF Form Validation]({{page page='how-to-add-a-jsf-form-validation'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}
</div>

<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [JSF UI Framework]({{page page='jsf-ui-framework'}})
- [Form Layouts in Nuxeo Studio]({{page space='studio' page='form-layouts'}})
- [Layout and Widgets]({{page page='layouts-and-widgets-forms-listings-grids'}})
- [Widget Definitions]({{page page='widget-definitions'}})

{{/panel}}
</div>
</div>
