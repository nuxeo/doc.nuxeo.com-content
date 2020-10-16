---
title: 'HOWTO: Customize the Versioning and Comment Widget on Document Edit Form - JSF UI'
review:
    comment: ''
    date: '2019-10-21'
    status: ok
details:
    howto:
        excerpt: 'Learn how to customize the versioning and comment widget using XML extensions. These examples can be contributed in Nuxeo Studio (Advanced Settings > XML Extensions) or with Nuxeo CLI.'
        level: Intermediate
        tool: 'XML extension, Nuxeo CLI, Studio'
        topics: 'Layout, Versioning, JSF UI, Widget'
labels:
    - content-review-lts2016
    - versioning
    - widget
    - layout
    - howto
    - howto-info
    - layout-widgets-component
    - atchertchian
    - excerpt
    - content-review-lts2017
    - jsf-ui
toc: true
confluence:
    ajs-parent-page-id: '19235623'
    ajs-parent-page-title: 'Layout & Widget How-To Index'
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Customize+the+Versioning+and+Comment+Widget+on+Document+Edit+Form
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Customize+the+Versioning+and+Comment+Widget+on+Document+Edit+Form'
    page_id: '19793894'
    shortlink: 5gcuAQ
    shortlink_source: 'https://doc.nuxeo.com/x/5gcuAQ'
    source_link: /display/NXDOC/How+to+Customize+the+Versioning+and+Comment+Widget+on+Document+Edit+Form
tree_item_index: 600
history:
    -
        author: Solen Guitter
        date: '2016-09-05 10:01'
        message: pdate how-to topic
        version: '22'
    -
        author: Anahide Tchertchian
        date: '2015-12-08 13:37'
        message: ''
        version: '21'
    -
        author: Anahide Tchertchian
        date: '2015-12-08 13:36'
        message: ''
        version: '20'
    -
        author: Manon Lumeau
        date: '2015-01-13 10:27'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2014-12-01 21:53'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2014-09-12 15:52'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2014-09-12 15:34'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2014-09-12 14:21'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2014-09-12 14:15'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2014-09-08 14:31'
        message: ''
        version: '13'
    -
        author: Anahide Tchertchian
        date: '2014-08-22 09:34'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-07-22 11:48'
        message: ''
        version: '11'
    -
        author: Anahide Tchertchian
        date: '2014-07-17 21:08'
        message: 'NXDOC-341: fix widget mode in samples'
        version: '10'
    -
        author: Anahide Tchertchian
        date: '2014-07-17 20:46'
        message: 'NXDOC-341: format'
        version: '9'
    -
        author: Anahide Tchertchian
        date: '2014-07-17 20:45'
        message: 'NXDOC-341: add missing extension tags'
        version: '8'
    -
        author: Solen Guitter
        date: '2014-07-17 19:18'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-07-17 19:17'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-07-17 19:16'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-07-17 19:16'
        message: Formatting
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2014-07-17 18:50'
        message: 'NXDOC-341: fix require tags'
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2014-07-17 18:50'
        message: 'NXDOC-341: complete doc about edit options layout'
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2014-07-17 18:46'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

{{! excerpt}}
On documents edit form, a **Comment** textarea is displayed, and this text is visible in the **History** tab. When the document is versionable, versioning options are also displayed. This page provides some examples to customize this behavior using XML extensions. These examples can be contributed [in Nuxeo Studio]({{page page='how-to-contribute-to-an-extension'}}) (Advanced Settings > XML Extensions) or with [Nuxeo CLI]({{page page='how-to-contribute-to-an-extension'}}).
{{! /excerpt}}

When using a **Toggleable Form** (`toggleableLayoutWithForms`) [widget type](http://showcase.nuxeo.com/nuxeo/layoutDemo/toggleableLayoutWidget), these fields can be shown by setting the property **Show Edit Options** (`showEditOptions`) to `true`, and they can be hidden by setting the property to `false`.

On the standard edit form, on the **Edit** tab, the layout showing these fields is included by default. Customizing it or hiding it can be done overriding the layout named [`document_edit_form_options`](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewContribution/org.nuxeo.ecm.platform.forms.layouts.webapp.base--layouts) .

This layout holds [three widgets](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewContribution/org.nuxeo.ecm.platform.forms.layouts.webapp.base--widgets)&nbsp;that can be customized independently:

*   `document_edit_current_version`,
*   `document_edit_versioning_options`,
*   `document_edit_comment` .

Here is the original definition of this layout:

```xml
<extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
  point="layouts">
  <layout name="document_edit_form_options">
    <templates>
      <template mode="any">/layouts/layout_default_template.xhtml
      </template>
    </templates>
    <rows>
      <row>
        <widget>document_edit_comment</widget>
      </row>
      <row>
        <widget>document_edit_current_version</widget>
      </row>
      <row>
        <widget>document_edit_versioning_options</widget>
      </row>
    </rows>
  </layout>
</extension>
```

## Emptying This Layout for All Documents

```xml
<require>org.nuxeo.ecm.platform.forms.layouts.webapp.base</require>

<extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
  point="layouts">
  <layout name="document_edit_form_options">
    <templates>
      <template mode="any">/layouts/layout_default_template.xhtml</template>
    </templates>
    <rows />
  </layout>
</extension>
```

## Removing the Comment but Keeping Versioning Options

```xml
<require>org.nuxeo.ecm.platform.forms.layouts.webapp.base</require>

<extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
  point="layouts">
  <layout name="document_edit_form_options">
    <templates>
      <template mode="any">/layouts/layout_default_template.xhtml</template>
    </templates>
    <rows>
      <row>
        <widget>document_edit_current_version</widget>
      </row>
      <row>
        <widget>document_edit_versioning_options</widget>
      </row>
    </rows>
  </layout>
</extension>
```

Or you can play with the&nbsp;`hidden` widget mode:

```xml
<require>org.nuxeo.ecm.platform.forms.layouts.webapp.base</require>

<extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
  point="widgets">
  <widget name="document_edit_comment" type="textarea">
    <widgetModes>
      <mode value="any">hidden</mode>
    </widgetModes>
  </widget>
</extension>
```

## Hiding the Comment Only on Some Document Types

```xml
<require>org.nuxeo.ecm.platform.forms.layouts.webapp.base</require>

<extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
  point="widgets">
  <widget name="document_edit_comment" type="textarea">
    <labels>
      <label mode="any">label.editComment</label>
    </labels>
    <helpLabels>
      <label mode="any">label.editComment.tooltip</label>
    </helpLabels>
    <translated>true</translated>
    <fields>
      <field>contextData['request/comment']</field>
    </fields>
    <widgetModes>
      <mode value="any">
        #{layoutMode == 'create' or layoutValue.type == 'myType'?'hidden':'edit'}
      </mode>
    </widgetModes>
  </widget>
</extension>
```

## Making the Comment Mandatory

```xml
<require>org.nuxeo.ecm.platform.forms.layouts.webapp.base</require>

<extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
  point="widgets">
  <widget name="document_edit_comment" type="textarea">
    <labels>
      <label mode="any">label.editComment</label>
    </labels>
    <helpLabels>
      <label mode="any">label.editComment.tooltip</label>
    </helpLabels>
    <translated>true</translated>
    <fields>
      <field>contextData['request/comment']</field>
    </fields>
    <widgetModes>
      <mode value="create">hidden</mode>
    </widgetModes>
    <properties widgetMode="edit">
      <property name="required">true</property>
    </properties>
  </widget>
</extension>
```

## Making the Comment Mandatory on a given Document Type

```xml
<require>org.nuxeo.ecm.platform.forms.layouts.webapp.base</require>

<extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
  point="widgets">
  <widget name="document_edit_comment" type="textarea">
    <labels>
      <label mode="any">label.editComment</label>
    </labels>
    <helpLabels>
      <label mode="any">label.editComment.tooltip</label>
    </helpLabels>
    <translated>true</translated>
    <fields>
      <field>contextData['request/comment']</field>
    </fields>
    <widgetModes>
      <mode value="create">hidden</mode>
    </widgetModes>
    <properties widgetMode="edit">
      <property name="required">
        #{layoutValue.type == 'myType'?true:false}
      </property>
    </properties>
  </widget>
</extension>
```

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Add a New Widget to the Default Summary Layout]({{page page='how-to-add-a-new-widget-to-the-default-summary-layout'}})
- [How to Set a Default Date on a Field at Document Creation]({{page page='how-to-set-a-default-date-on-a-field-at-document-creation'}})
- [How to Add a JSF Form Validation]({{page page='how-to-add-a-jsf-form-validation'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [JSF UI Framework]({{page page='jsf-ui-framework'}})
- [Form Layouts in Nuxeo Studio]({{page space='studio' page='form-layouts'}})
- [Layout and Widgets]({{page page='layouts-and-widgets-forms-listings-grids'}})
- [Widget Definitions]({{page page='widget-definitions'}})

{{/panel}}</div></div>
