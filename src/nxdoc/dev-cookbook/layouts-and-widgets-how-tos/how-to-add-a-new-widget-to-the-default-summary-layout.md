---
title: How to Add a New Widget to the Default Summary Layout
labels:
    - summary-layout
    - incremental-layout
confluence:
    ajs-parent-page-id: '17334275'
    ajs-parent-page-title: Layouts and Widgets How-tos
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: How+to+Add+a+New+Widget+to+the+Default+Summary+Layout
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC58/How+to+Add+a+New+Widget+to+the+Default+Summary+Layout
    page_id: '18449843'
    shortlink: s4UZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/s4UZAQ'
    source_link: /display/NXDOC58/How+to+Add+a+New+Widget+to+the+Default+Summary+Layout
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 16:13'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-01-23 17:41'
        message: ''
        version: '1'

---
{{! excerpt}}

This how-to explains how to insert a new widget to the default Summary layout so that's displayed on all document Summary pages.

{{! /excerpt}} {{#> callout type='info' }}

This how-to defines how things should be done from version 5.6\. For earlier versions, the whole summary layout needs to be redefined.

{{/callout}}

Since version 5.6, a new widget type has been added to display [actions]({{page page='actions-links-buttons-icons-tabs-and-more'}}). It takes advantage of the fact that actions needing different kinds of rendering can now be mixed up even if they're using the same [category]({{page page='actions-display'}}). This widget type makes it possible to display a list of actions, but also to include some widget types rendering.

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

Default widgets (presenting the document relations, status, publications, etc...) are contributed to one of these zones, with orders separated by 100 (check out the explorer to get a complete overview, beware that addons may contribute to these zones already).

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