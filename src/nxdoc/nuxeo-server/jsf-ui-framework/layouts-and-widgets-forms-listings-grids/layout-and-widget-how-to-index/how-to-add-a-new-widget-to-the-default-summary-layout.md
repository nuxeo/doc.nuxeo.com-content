---
title: How to Add a New Widget to the Default Summary Layout
review:
    comment: ''
    date: '2019-02-13'
    status: ok
details:
    howto:
        excerpt: "Learn how to insert a new widget to the default Summary layout so that's displayed on all document Summary pages."
        level: Advanced
        tool: Studio
        topics: 'Layout, JSF UI'
labels:
    - content-review-lts2016
    - summary-layout
    - incremental-layout
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
    canonical: How+to+Add+a+New+Widget+to+the+Default+Summary+Layout
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Add+a+New+Widget+to+the+Default+Summary+Layout'
    page_id: '17794331'
    shortlink: G4UPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/G4UPAQ'
    source_link: /display/NXDOC/How+to+Add+a+New+Widget+to+the+Default+Summary+Layout
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2016-09-05 10:04'
        message: pdate how-to topic
        version: '10'
    -
        author: Anahide Tchertchian
        date: '2015-10-13 12:44'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2015-01-13 10:26'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-12-01 21:55'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2014-09-12 18:03'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2014-09-12 14:56'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2014-09-11 18:24'
        message: ''
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2014-07-17 17:17'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2014-01-23 17:40'
        message: ''
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2013-12-03 16:46'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DeprecatedJSF' page='generic-multi-excerpts'}}}

{{! excerpt}}
This how-to explains how to insert a new widget to the default Summary layout so that's displayed on all document Summary pages.
{{! /excerpt}}

{{#> callout type='info' }}
{{{multiexcerpt 'check-jsf-ui-dependency' page='how-to-define-a-new-content-view'}}}
{{/callout}}

A widget type enables to display [actions]({{page page='actions-links-buttons-icons-tabs-and-more'}}). It takes advantage of the fact that actions needing different kinds of rendering can now be mixed up even if they're using the same [category]({{page page='actions-display'}}). This widget type makes it possible to display a list of actions, but also to include some widget types rendering.

Since the default summary layout contains four widgets displaying actions, it is possible to pile up widgets in them. The available action categories are:

*   `SUMMARY_PANEL_TOP` to add widgets on top of default summary (takes the whole panel width, empty by default),
*   `SUMMARY_PANEL_LEFT` for left zone,
*   `SUMMARY_PANEL_RIGHT` for right zone,
*   `SUMMARY_PANEL_BOTTOM` for bottom zone (takes the whole panel width, empty by default).

Here is the definition of the widget referencing actions for the `SUMMARY_TOP_LEFT` category:

```
<extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
  point="widgets">

  <widget name="summary_panel_left" type="summary_current_document_custom_actions">
    <handlingLabels>true</handlingLabels>
    <labels>
      <label mode="any"></label>
    </labels>
    <properties widgetMode="any">
      <property name="category">SUMMARY_PANEL_LEFT</property>
      <property name="subStyleClass">summaryActions</property>
    </properties>
  </widget>

</extension>

```

Default widgets (presenting the document relations, status, publications, etc...) are contributed to one of these zones, with orders separated by 100 (check out the explorer to get a complete overview, beware that add-ons&nbsp;may contribute to these zones already).

Here is a sample contribution to add a widget to the left widget panel:

```
<extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
  point="widgets">

  <widget name="summary_note_text" type="richtext_with_mimetype">
    <fields>
      <field>note:note</field>
      <field>note:mime_type</field>
    </fields>
    <properties mode="view">
      <property name="translatedHtml">
        #{noteActions.translateImageLinks(field_0)}
      </property>
      <property name="cssClass">note_content_block</property>
    </properties>
  </widget>

</extension>

<extension target="org.nuxeo.ecm.platform.actions.ActionService"
  point="actions">

  <action id="summary_note_text" type="widget" order="100">
    <category>SUMMARY_PANEL_LEFT</category>
    <properties>
      <property name="widgetName">summary_note_text</property>
    </properties>
    <filter-id>hasNote</filter-id>
  </action>

</extension>

```

This contribution will add the widget named `summary_note_text` to the summary layout when current document is a note (see filter named `hasNote`).
The action order will make it possible to change the order of appearance of this new widget in comparison to other "action widgets" defined in the same category.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Customize the Dashboard]({{page page='how-to-customize-the-dashboard'}})
- [How to Set a Default Date on a Field at Document Creation]({{page page='how-to-set-a-default-date-on-a-field-at-document-creation'}})
- [Customize the Versioning and Comment Widget]({{page page='how-to-customize-the-versioning-and-comment-widget-on-document-edit-form'}})
- [How to Add a JSF Form Validation]({{page page='how-to-add-a-jsf-form-validation'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [JSF UI Framework]({{page page='jsf-ui-framework'}})
- [Form Layouts in Nuxeo Studio]({{page space='studio' page='form-layouts'}})
- [Layout and Widgets]({{page page='layouts-and-widgets-forms-listings-grids'}})
- [Widget Definitions]({{page page='widget-definitions'}})

{{/panel}}</div></div>
