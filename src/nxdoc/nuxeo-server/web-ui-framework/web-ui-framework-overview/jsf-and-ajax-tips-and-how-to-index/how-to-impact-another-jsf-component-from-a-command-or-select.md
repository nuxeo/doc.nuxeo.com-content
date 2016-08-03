---
title: How to Impact Another JSF Component from a Command or Select
details:
    howto:
        excerpt: Learn how to impact another JSF component from a Command or Select.
        level: Advanced
        tool: Nuxeo IDE
        topics: 'Layout, JSF'
labels:
    - howto
    - seam-jsf-component
    - jsf
    - excerpt
toc: true
confluence:
    ajs-parent-page-id: '9830458'
    ajs-parent-page-title: JSF and Ajax Tips and How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Impact+Another+JSF+Component+from+a+Command+or+Select
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/How+to+Impact+Another+JSF+Component+from+a+Command+or+Select
    page_id: '20519998'
    shortlink: Phw5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/Phw5AQ'
    source_link: >-
        /display/NXDOC/How+to+Impact+Another+JSF+Component+from+a+Command+or+Select
history:
    - 
        author: Anahide Tchertchian
        date: '2016-01-06 10:26'
        message: ''
        version: '13'
    - 
        author: Anahide Tchertchian
        date: '2015-10-07 13:02'
        message: fotrmat
        version: '12'
    - 
        author: Anahide Tchertchian
        date: '2015-10-07 13:01'
        message: add bulk edit example
        version: '11'
    - 
        author: Anahide Tchertchian
        date: '2015-08-18 09:58'
        message: 'NXDOC-649: add checkbox rerender example'
        version: '10'
    - 
        author: Anahide Tchertchian
        date: '2015-08-18 09:35'
        message: 'NXDOC-649: fix first example, ajaxifying it'
        version: '9'
    - 
        author: Anahide Tchertchian
        date: '2015-07-31 16:47'
        message: fix subimtChanges -> submitValue
        version: '8'
    - 
        author: Solen Guitter
        date: '2014-12-09 17:06'
        message: fix typo
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-12-09 17:04'
        message: link update
        version: '6'
    - 
        author: Anahide Tchertchian
        date: '2014-12-09 16:58'
        message: ''
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2014-12-09 16:25'
        message: 'NXDOC-363 : add howtos about selectionActions helpers'
        version: '4'
    - 
        author: Anahide Tchertchian
        date: '2014-12-09 15:57'
        message: 'NXDOC-363: start doc about value holder tag usage'
        version: '3'
    - 
        author: Anahide Tchertchian
        date: '2014-12-01 14:52'
        message: ''
        version: '2'
    - 
        author: Anahide Tchertchian
        date: '2014-12-01 14:52'
        message: ''
        version: '1'

---
{{! excerpt}}

When designing a screen or form, you may want to render a part of the page when clicking on a link or when choosing an element in a select. This page explains how this can be done in a XHTML template.

{{! /excerpt}}

&nbsp;

This page describes how to do so without having to define a Seam component, keeping the contextual information. This is better for reuse of templates (like in widgets) within the same page, as you do not have to define a new Seam component for every context variable on the page.

The context variable is kept by a [nxu:valueHolder](http://community.nuxeo.com/api/nuxeo/7.1/tlddoc/nxu/valueHolder.html) tag, which also exposes the corresponding value in the context.

Two examples are given:

*   impact a given component with a static value
*   impact a given component with a value taken on another component

## Impacting with a Static Value

### Use Case

When i click on a button, another element should be hidden (or shown).

#### Available Helper

The Seam Component [selectionActions](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewSeamComponent/seam:selectionActions) has a method named `setStaticValue` that will retrieve attributes named `selectedValue` and `targetComponentId` from its originating tag. It will lookup the corresponding component in the tree and set the value given by the `selectedValue` attribute (which can also be an EL expression).

#### Sample Template Excerpt

```

  [...]

        My content

  [...]

```

## Impacting with a Value Taken on Another Component

### First Use Case

When I select an element in a drop down list, another element should be displayed depending on the selected value.

#### Available Helper

The Seam Component [selectionActions](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewSeamComponent/seam:selectionActions) has a method named&nbsp;`setValueFromComponent` that will retrieve attributes named&nbsp;`sourceComponentId` and `targetComponentId` from its originating tag. It will lookup the corresponding source component in the tree, retrieve its current value, and set this value to the corresponding target component.

#### Sample Template Excerpt

This is an excerpt of the [widget template displaying additional information about a selected flavor](https://github.com/nuxeo/nuxeo-features/blob/master/localconf/nuxeo-localconf-web/src/main/resources/web/nuxeo.war/widgets/select_flavor_widget_template.xhtml) in local configuration:

```

              #{messages['label.local.configuration.theme.flavorSelection.noPreviewAvailable']}

```

&nbsp;

### Second Use Case

In a form, when i check some checkbox, additional input fields are shown.

#### Available Helper

The Seam Component [selectionActions](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewSeamComponent/seam:selectionActions) has a method named&nbsp;`setValueFromComponent` that will retrieve attributes named&nbsp;`sourceComponentId` and `targetComponentId` from its originating tag. It will lookup the corresponding source component in the tree, retrieve its current value, and set this value to the corresponding target component.

Also, additional input fields to show are declared as standard sub-widgets to a widget of type&nbsp;`template` which is displaying the checkbox and holding the re-render logics.

#### Sample Widget Template

```

```

To use this template:

*   define a widget of type&nbsp;`template` and if you're in Studio, use an advanced&nbsp;`Generic Widget` to control fields definitions
*   add two fields for this widget: the first field should be empty, so that subwidgets are still bound to the same document (as first field mapping will be taken into account when building the subwidgets field binding), and second field should match the property holding the boolean value &ndash; note that persisting this value is useful for edition, so that persisted value can be taken into account when displaying the form again.

Here is a sample contribution:

```

      My widget

      myschema:mybooleancheck

        /widgets/checkbox_re_render.xhtml

          myschema:mytext

```

Refined version of this template when using it inside the bulk edit form (to make sure sub widget value is handled by the bulk edit too):

```

```

&nbsp;

&nbsp;

&nbsp;