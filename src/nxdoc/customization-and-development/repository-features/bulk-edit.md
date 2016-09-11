---
title: Bulk Edit
review:
    comment: ''
    date: ''
    status: ok
labels:
    - bulk-edit
toc: true
confluence:
    ajs-parent-page-id: '17334376'
    ajs-parent-page-title: Repository features
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Bulk+Edit
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Bulk+Edit'
    page_id: '17794060'
    shortlink: DIQPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/DIQPAQ'
    source_link: /display/NXDOC58/Bulk+Edit
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 16:12'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2015-08-28 13:42'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-11-26 14:56'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

&nbsp;

{{! excerpt}}

The bulk edit feature allows to edit several documents at the same time. This is implemented using the [BulkEditService](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewComponent/org.nuxeo.ecm.webapp.bulkedit.BulkEditService) component.

{{! /excerpt}}

## Customizing the Bulk Edit Form

The default bulk edit form is based on a layout called&nbsp;`bulkEdit@edit`. To change it you just need to override the default one by your own `bulkEdit@edit` layout to display your own widgets.

</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>{{#> panel type='code' heading='Default bulk edit layout'}}

```xml
<require>org.nuxeo.ecm.platform.forms.layouts.webapp</require>
<extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
    point="layouts">
  <layout name="bulkEdit@edit">
    <templates>
      <template mode="any">/layouts/layout_bulkedit_template.xhtml
      </template>
    </templates>
    <rows>
      <row>
        <widget>nature</widget>
      </row>
      <row>
        <widget>subjects</widget>
      </row>
      <row>
        <widget>rights</widget>
      </row>
      <row>
        <widget>source</widget>
      </row>
      <row>
        <widget>coverage</widget>
      </row>
      <row>
        <widget>format</widget>
      </row>
      <row>
        <widget>language</widget>
      </row>
      <row>
        <widget>expired</widget>
      </row>
    </rows>
  </layout>
</extension>
```

{{/panel}}

## Customizing the Bulk Edit Versioning Policy

When users edit several documents at the same time using the bulk edit form, a new version of the documents is saved before applying the modifications. The default versioning policy consists in creating a minor version.

This versioning policy can be configured through the [versioning](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewExtensionPoint/org.nuxeo.ecm.webapp.bulkedit.BulkEditService--versioning) extension point:

```xml
<extension target="org.nuxeo.ecm.webapp.bulkedit.BulkEditService"
  point="versioning">
  <versioning>
    <defaultVersioningOption>MINOR</defaultVersioningOption>
  </versioning>
</extension>

```