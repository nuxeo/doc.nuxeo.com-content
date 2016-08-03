---
title: How to Create a N-Level Select Widget
details:
    howto:
        excerpt: >-
            Learn how to create a selection widget with 3 levels by contributing
            a "template widget" in Studio.
        level: Advanced
        tool: Studio
        topics: 'Layout, Widget'
labels:
    - widget
    - layout
    - howto
    - studio
    - layout-widgets-component
    - lts2015-ok
    - excerpt
toc: true
confluence:
    ajs-parent-page-id: '19235623'
    ajs-parent-page-title: Layout & Widget How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Create+a+N-Level+Select+Widget
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/How+to+Create+a+N-Level+Select+Widget
    page_id: '6029528'
    shortlink: 2ABc
    shortlink_source: 'https://doc.nuxeo.com/x/2ABc'
    source_link: /display/NXDOC/How+to+Create+a+N-Level+Select+Widget
history:
    - 
        author: Anahide Tchertchian
        date: '2015-05-04 12:06'
        message: >-
            ake widget property "allowBranchSelection" available on the template
            widget type configuratio
        version: '26'
    - 
        author: Anahide Tchertchian
        date: '2015-04-03 10:04'
        message: 'NXP-16605: templates update again (wrong version edited before...)'
        version: '25'
    - 
        author: Anahide Tchertchian
        date: '2015-04-03 09:58'
        message: >-
            NXP-16605: another template update for incmplete selection related
            bugs
        version: '24'
    - 
        author: Anahide Tchertchian
        date: '2015-04-02 17:05'
        message: fix the "onchange" event to "change" (again...)
        version: '23'
    - 
        author: Anahide Tchertchian
        date: '2015-03-25 21:37'
        message: fix the "onchange" event to "change"
        version: '22'
    - 
        author: Anahide Tchertchian
        date: '2015-03-23 17:57'
        message: fix the "onchange" event to "change"
        version: '21'
    - 
        author: Anahide Tchertchian
        date: '2015-03-06 10:26'
        message: >-
            NXP-16605: update templates to fix "Incomplete selections are not
            allowed" validation message issue
        version: '20'
    - 
        author: Solen Guitter
        date: '2014-12-01 22:30'
        message: ''
        version: '19'
    - 
        author: Anahide Tchertchian
        date: '2014-11-28 17:41'
        message: ''
        version: '18'
    - 
        author: Anahide Tchertchian
        date: '2014-11-28 17:37'
        message: 'NXDOC-414: update samples for JSF2 migration'
        version: '17'
    - 
        author: Manon Lumeau
        date: '2014-09-12 15:39'
        message: ''
        version: '16'
    - 
        author: Manon Lumeau
        date: '2014-09-11 17:59'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2014-08-25 11:39'
        message: Remove 5.4 reference
        version: '14'
    - 
        author: Solen Guitter
        date: '2014-08-25 10:31'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-09-02 14:54'
        message: ''
        version: '12'
    - 
        author: Anahide Tchertchian
        date: '2012-05-11 11:24'
        message: Migrated to Confluence 4.0
        version: '11'
    - 
        author: Anahide Tchertchian
        date: '2012-05-11 11:24'
        message: fix size value on multiselect example
        version: '10'
    - 
        author: Laurent Doguin
        date: '2012-03-02 17:32'
        message: ''
        version: '9'
    - 
        author: Laurent Doguin
        date: '2012-03-02 17:20'
        message: add template widget configuration screenshot
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-09-05 18:45'
        message: ''
        version: '7'
    - 
        author: Alain Escaffre
        date: '2011-05-25 20:11'
        message: ''
        version: '6'
    - 
        author: Alain Escaffre
        date: '2011-03-23 11:27'
        message: ''
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2011-03-03 19:17'
        message: ''
        version: '4'
    - 
        author: Anahide Tchertchian
        date: '2011-03-03 18:36'
        message: ''
        version: '3'
    - 
        author: Anahide Tchertchian
        date: '2011-03-03 18:16'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2011-03-02 20:27'
        message: ''
        version: '1'

---
{{! excerpt}}

In this page we provide samples to have a selection widget with 3 levels by contributing a "template widget" in Studio. Each sample code below is the sample for one widget that has a different behavior (described before the code).

{{! /excerpt}}

To create and use a new widget:

1.  Copy-paste the sample of your choice in a file that you call, for instance, "3_level_select_widget.xhtml".

    {{#> callout type='tip' }}

    Of course you can modify the samples below to add other levels, or other behaviors. You just need to be familiar with facelets and JSF.

    {{/callout}}
2.  Upload this file in the **Resources** > **Widgets** section.
    The widget is created. You can now use it on layouts and forms.
3.  In the layout of the document type where you want to use the widget, drag and drop the **Template** widget from the **Advanced Widgets** category on the right.
4.  Edit the properties of the widget.
    Here are the properties specific to custom widgets that you need to fill in.
    *   Template: choose the XHTML file you have just uploaded.
    *   Fields: add one field and put the XPath of the field you want to update. For instance, "dc:coverage".
    *   Custom properties configuration: in our sample, you can (should) add those three properties labels and put the value you need:
        *   localize
        *   required
        *   directoryName (should be the name of the vocabulary that holds the values that are displayed).

![]({{file name='ConfigureTemplateWidget.png'}} ?w=450,border=true)

## Widget Samples

### Mono-Select 3-Level Widget

Sample example on 3 levels with widget property&nbsp;`directoryName` filled with the directory name (mono select):

```

```

### Multi-Select 3-Level Widget

Sample example on 3 levels with widget property `directoryName` filled with the directory name (multi select):

```

```

## Complete Examples with CSV (Plain) and PDF Rendering

### Mono-Select Widget

```

//

```

### Multi-Select Widget

```

//

```

<div class="row" data-equalizer="" data-equalize-on="medium">

<div class="column medium-6">{{#> panel heading="Related How-Tos"}}

*   [undefined]({{page}})
*   [How to Set a Default Date on a Field at Document Creation]({{page page='how-to-set-a-default-date-on-a-field-at-document-creation'}})
*   [Customize the Versioning and Comment Widget]({{page page='how-to-customize-the-versioning-and-comment-widget-on-document-edit-form'}})
*   [How to Add a JSF Form Validation]({{page page='how-to-add-a-jsf-form-validation'}})
*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div>

<div class="column medium-6">{{#> panel heading="Related Documentation"}}

*   [Web UI Framework]({{page page='web-ui-framework'}})
*   [Form Layouts in Nuxeo Studio]({{page space='studio' page='form-layouts'}})
*   [Layout and Widgets]({{page page='layouts-and-widgets-forms-listings-grids'}})
*   [Web UI Limitations]({{page page='web-ui-limitations'}})
*   [Widget Definitions]({{page page='widget-definitions'}})

{{/panel}}</div>

</div>