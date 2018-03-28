---
title: How to Use a Generic Widget in Layouts
review:
    comment: ''
    date: '2015-12-01'
    status: ok
details:
    howto:
        excerpt: Learn how to use a generic widget in Studio.
        level: Advanced
        tool: Studio
        topics: 'Layout, Widget'
labels:
    - content-review-lts2016
    - widget
    - howto
    - layout
    - layout-widgets-component
    - atchertchian
    - excerpt
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '19235623'
    ajs-parent-page-title: 'Layout & Widget How-To Index'
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Use+a+Generic+Widget+in+Layouts
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Use+a+Generic+Widget+in+Layouts'
    page_id: '9274315'
    shortlink: y4ON
    shortlink_source: 'https://doc.nuxeo.com/x/y4ON'
    source_link: /display/NXDOC/How+to+Use+a+Generic+Widget+in+Layouts
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2014-12-01 21:54'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-12-01 21:54'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2014-09-12 17:10'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2014-09-12 15:44'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2014-09-11 17:51'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-09-02 14:48'
        message: ''
        version: '5'
    -
        author: Frédéric Vadon
        date: '2013-06-17 18:00'
        message: added syntax to bind to fields
        version: '4'
    -
        author: Alain Escaffre
        date: '2011-12-02 18:45'
        message: Migrated to Confluence 4.0
        version: '3'
    -
        author: Alain Escaffre
        date: '2011-12-02 18:45'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2011-12-02 18:44'
        message: ''
        version: '1'

---
{{#> callout type='info' }}
{{{multiexcerpt 'check-jsf-ui-dependency' page='how-to-define-a-new-content-view'}}}
{{/callout}}

{{! excerpt}}
The Nuxeo Platform framework and its "Layout" module offers many widget types. Some are exposed directly in Studio interface, but some are not. If you want to use one of those existing widgets in Studio when editing a layout, you should drop a _generic widget_ from the "Advanced Widgets" category on the right, as in the screenshot below:
{{! /excerpt}}

![]({{file name='screenshot_2011-12-02_18.39.20.png'}} ?w=200,border=true,thumbnail=true)

You should then fill the proper type attribute in widget configuration screen (among the existing one or by giving the id of the one you target) and the widget properties in the _Custom properties_ section.

![]({{file name='screenshot_2011-12-02_18.43.22.png'}} ?w=400,border=true)

&nbsp;

{{#> callout type='tip' heading='Binding Fields from the document to the widget'}}

Let's say that the widget needs to be linked to the metadata description from the schema `dublincore` (prefix dc), you can click on **Add** next to "Fields" and enter the field but syntax will differ whether you are on a form layout or a table layout.

*   Form Layout: `dc:description`
*   Table Layout: `data.dc.description`

&nbsp;

{{/callout}}<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}
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
{{/panel}}</div></div>
