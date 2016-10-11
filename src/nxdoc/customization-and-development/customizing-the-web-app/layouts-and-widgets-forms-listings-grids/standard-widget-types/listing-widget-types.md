---
title: Listing Widget Types
review:
    comment: ''
    date: ''
    status: ok
labels:
    - widget-types
toc: true
confluence:
    ajs-parent-page-id: '17334434'
    ajs-parent-page-title: Standard Widget Types
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Listing+Widget+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Listing+Widget+Types'
    page_id: '18449588'
    shortlink: tIQZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/tIQZAQ'
    source_link: /display/NXDOC58/Listing+Widget+Types
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 12:24'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2014-01-22 14:42'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-01-22 14:41'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">{{! excerpt}}

A series of widget types useful for listings.

{{! /excerpt}} {{#> callout type='warning' }}

Listing widget types usually apply to a [`PageSelection`](http://community.nuxeo.com/api/nuxeo/5.8/javadoc/org/nuxeo/ecm/platform/query/api/PageSelection.html) element, wrapping the&nbsp; [`DocumentModel`](http://community.nuxeo.com/api/nuxeo/5.8/javadoc/org/nuxeo/ecm/core/api/DocumentModel.html) to handle selection information.

Basic widget types can also be used in listings, but this has an impact on field bindings configuration.

For instance, when displaying the document title in a listing layout, here is the corresponding configuration:

```xml
<widget name="title" type="text">
  <labels>
    <label mode="any">Title</label>
  </labels>
  <translated>false</translated>
  <fields>
    <field>data['dc']['title']</field>
  </fields>
</widget>
```

You can see that the "data" binding is mentioned. It will resolve `PageSelection#getData` method, which resolves to the `DocumentModel`. Subsequent "dc" and "title" configurations make it resolve the document field named "title" in the "dublincore" schema (defined to use prefix "dc").

Please refer to the section [Field Binding and Expressions]({{page page='field-binding-and-expressions'}}) for more information about field bindings configuration.

{{/callout}}</div><div class="column medium-4">{{#> panel heading='In this section'}} {{/panel}}</div></div>

## Title with Link

Id: `listing_title_link`

This widget type displays the document title with a link to it. It can also display a download link provided the blob field path in its properties.

View online demo: [http://showcase.nuxeo.com/nuxeo/layoutDemo/listing_title_linkWidget](http://showcase.nuxeo.com/nuxeo/layoutDemo/listing_title_linkWidget)

## Author

Id: `listing_author`

This widget type displays the document author/creator first and last name, with its identifier in a tooltip.

View online demo: [http://showcase.nuxeo.com/nuxeo/layoutDemo/listing_authorWidget](http://showcase.nuxeo.com/nuxeo/layoutDemo/listing_authorWidget)

## Last Contributor

Id: `listing_last_contributor`

This widget type displays the document last contributor first and last names, with its identifier in a tooltip.

View online demo: [http://showcase.nuxeo.com/nuxeo/layoutDemo/listing_last_contributorWidget](http://showcase.nuxeo.com/nuxeo/layoutDemo/listing_last_contributorWidget)

## Big Icon with Type

Id: `listing_big_icon_type_link`

This widget type displays a big icon (usually 100x100 px) with the document type in a tooltip. The icon can represent the document type, or the attached file type when there is one.

View online demo: [http://showcase.nuxeo.com/nuxeo/layoutDemo/listing_big_icon_type_linkWidget](http://showcase.nuxeo.com/nuxeo/layoutDemo/listing_big_icon_type_linkWidget)

## Icon with Type

Id: `listing_icon_type`

This widget type displays an icon (usually 16x16 px) with the document type in a tooltip. The icon can represent the document type, or the attached file type when there is one.

View online demo: [http://showcase.nuxeo.com/nuxeo/layoutDemo/listing_icon_typeWidget](http://showcase.nuxeo.com/nuxeo/layoutDemo/listing_icon_typeWidget)

## Version

Id: `listing_version`

This widget type displays the document version.

View online demo: [http://showcase.nuxeo.com/nuxeo/layoutDemo/listing_versionWidget](http://showcase.nuxeo.com/nuxeo/layoutDemo/listing_versionWidget)

## Lifecycle

Id: `listing_lifecycle`

This widget type displays the document life cycle state.

View online demo: [http://showcase.nuxeo.com/nuxeo/layoutDemo/listing_lifecycleWidget](http://showcase.nuxeo.com/nuxeo/layoutDemo/listing_lifecycleWidget)

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related topics in this documentation'}}

*   [Standard Widget Types]({{page page='standard-widget-types'}})
*   [Custom Widget Types]({{page page='custom-widget-types'}})

{{/panel}}</div><div class="column medium-6"></div></div>