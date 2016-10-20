---
title: Customizing DAM Compat Bulk Edit
review:
    comment: ''
    date: ''
    status: ok
labels:
    - bulk-edit
confluence:
    ajs-parent-page-id: '22380763'
    ajs-parent-page-title: Nuxeo DAM Compat
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Customizing+DAM+Compat+Bulk+Edit
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Customizing+DAM+Compat+Bulk+Edit'
    page_id: '22380598'
    shortlink: NoBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/NoBVAQ'
    source_link: /display/NXDOC60/Customizing+DAM+Compat+Bulk+Edit
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2016-08-31 12:37'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-11-21 17:11'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-11-07 17:27'
        message: ''
        version: '9'
    -
        author: Thomas Roger
        date: '2014-10-31 17:42'
        message: ''
        version: '8'
    -
        author: Thomas Roger
        date: '2014-10-31 17:41'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-11-26 11:27'
        message: Updated content for 5.8
        version: '6'
    -
        author: Solen Guitter
        date: '2013-11-26 11:16'
        message: ''
        version: '5'
    -
        author: Thomas Roger
        date: '2010-07-28 21:18'
        message: Migrated to Confluence 4.0
        version: '4'
    -
        author: Thomas Roger
        date: '2010-07-28 21:18'
        message: ''
        version: '3'
    -
        author: Thomas Roger
        date: '2010-07-28 19:50'
        message: ''
        version: '2'
    -
        author: Thomas Roger
        date: '2010-07-28 18:31'
        message: ''
        version: '1'

---
{{! excerpt}}

On the same principle as the default bulk edit of the Nuxeo Platform, the DAM Compat module offers a bulk edit form that allows to edit several assets at the same time, with a form adapted to assets relevant metadata.

{{! /excerpt}}

## Customizing the Bulk Edit Form

The default bulk edit form is based on a layout called `damBulkEdit@edit`. To change it you just need to override the default one by your own `damBulkEdit@edit` layout to display your own widgets.

{{#> panel type='code' heading='Default DAM bulk edit layout'}}

```xml
<require>org.nuxeo.dam.layouts</require>
<extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
    point="layouts">
  <layout name="damBulkEdit@edit">
    <templates>
      <template mode="any">/layouts/layout_bulkedit_template.xhtml</template>
    </templates>
    <rows>
      <row>
        <widget>dam_edit_tags</widget>
      </row>
      <row>
        <widget>damc_author</widget>
      </row>
      <row>
        <widget>damc_authoringDate</widget>
      </row>
      <row>
        <widget>subjects</widget>
      </row>
      <row>
        <widget>coverage</widget>
      </row>
    </rows>
  </layout>
</extension>

```

{{/panel}} {{#> callout type='note' }}

The widgets used in the&nbsp;`damBulkEdit@edit` layout should not have the property `required` set to `true`. If the widgets you want to use have this property, redefine them in the layout without the `required` property.

{{/callout}}
