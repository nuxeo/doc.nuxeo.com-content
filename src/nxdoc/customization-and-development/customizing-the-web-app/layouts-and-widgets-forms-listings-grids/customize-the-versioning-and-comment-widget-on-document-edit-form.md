---
title: Customize the Versioning and Comment Widget on Document Edit Form
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '17334360'
    ajs-parent-page-title: 'Layouts and Widgets (Forms, Listings, Grids)'
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Customize+the+Versioning+and+Comment+Widget+on+Document+Edit+Form
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC58/Customize+the+Versioning+and+Comment+Widget+on+Document+Edit+Form
    page_id: '20513398'
    shortlink: dgI5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/dgI5AQ'
    source_link: >-
        /display/NXDOC58/Customize+the+Versioning+and+Comment+Widget+on+Document+Edit+Form
history:
    - 
        author: Anahide Tchertchian
        date: '2014-08-22 09:36'
        message: ''
        version: '2'
    - 
        author: Anahide Tchertchian
        date: '2014-08-22 09:35'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">{{! excerpt}}

On documents edit form, a **Comment** textarea is displayed, and this text is visible in the **History** tab. When document is versionable, versioning options are also displayed. This page provides some examples to customize this behavior. These examples can be contributed [in Nuxeo Studio]({{page page='contributing-to-an-extension-using-nuxeo-studio'}}) (Advanced Settngs > XML Extensions) or [in Nuxeo IDE]({{page page='contributing-to-an-extension-using-nuxeo-ide'}}).

{{! /excerpt}}

When using a **Toggleable Form** (`toggleableLayoutWithForms`) widget type, these fields can be shown by setting the property **Show Edit Options** (`showEditOptions`) to `true`, and they can be hidden by setting the property to `false`.

On the standard edit form, on the **Edit** tab, the layout showing these fields is included by default. Customizing it or hiding it can be done overriding the layout named [`document_edit_form_options`](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewContribution/org.nuxeo.ecm.platform.forms.layouts.webapp.base--layouts) .

This layout holds [three widgets](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewContribution/org.nuxeo.ecm.platform.forms.layouts.webapp.base--widgets) that can be customized independently:

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

Or you can play with the `hidden` widget mode:

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

</div><div class="column medium-4">{{#> panel heading='On this page'}}

{{/panel}}</div></div>