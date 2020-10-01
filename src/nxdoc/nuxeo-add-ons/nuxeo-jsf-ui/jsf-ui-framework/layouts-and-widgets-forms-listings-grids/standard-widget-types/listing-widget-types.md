---
title: Listing Widget Types
review:
    comment: ''
    date: '2020-09-30'
    status: ok
labels:
    - content-review-lts2016
    - widget-types
    - layout-widgets-component
    - atchertchian
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '3868345'
    ajs-parent-page-title: Standard Widget Types
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Listing+Widget+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Listing+Widget+Types'
    page_id: '17794536'
    shortlink: 6IUPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/6IUPAQ'
    source_link: /display/NXDOC/Listing+Widget+Types
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2016-08-31 12:25'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2015-08-31 14:14'
        message: Update table of contents look
        version: '8'
    -
        author: Solen Guitter
        date: '2014-01-08 16:17'
        message: Added IDs and related topics
        version: '7'
    -
        author: Anahide Tchertchian
        date: '2013-12-06 15:17'
        message: add right menu
        version: '6'
    -
        author: Anahide Tchertchian
        date: '2013-12-06 15:15'
        message: add some default widget types
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2013-12-05 18:18'
        message: add links to javadoc
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2013-12-05 18:16'
        message: wording
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2013-12-05 18:15'
        message: add intro + warning about field bindings.
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2013-12-05 17:28'
        message: ''
        version: '1'

---
{{! excerpt}}

A series of widget types useful for listings.

{{! /excerpt}} {{#> callout type='warning' }}

Listing widget types usually apply to a [`PageSelection`](http://community.nuxeo.com/api/nuxeo/5.9.1/javadoc/org/nuxeo/ecm/platform/query/api/PageSelection.html) element, wrapping the&nbsp; [`DocumentModel`](http://community.nuxeo.com/api/nuxeo/5.9.1/javadoc/org/nuxeo/ecm/core/api/DocumentModel.html) to handle selection information.

Basic widget types can also be used in listings, but this has an impact on field bindings configuration.

For instance, when displaying the document title in a listing layout, here is the corresponding configuration:

```
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

{{/callout}}

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

This widget type displays the document lifecycle state.

View online demo: [http://showcase.nuxeo.com/nuxeo/layoutDemo/listing_lifecycleWidget](http://showcase.nuxeo.com/nuxeo/layoutDemo/listing_lifecycleWidget)

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Standard Widget Types]({{page page='standard-widget-types'}})
*   [Custom Widget Types]({{page page='custom-widget-types'}})
*   [Layout & Widget How-To Index]({{page page='layout-and-widget-how-to-index'}})

{{/panel}}</div><div class="column medium-6"></div></div>
