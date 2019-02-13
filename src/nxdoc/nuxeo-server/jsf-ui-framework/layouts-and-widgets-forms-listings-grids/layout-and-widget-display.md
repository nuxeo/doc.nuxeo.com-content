---
title: Layout and Widget Display
review:
    comment: ''
    date: '2019-02-13'
    status: ok
labels:
    - content-review-lts2016
    - link-update
    - widget
    - layout
    - community-links
    - layout-widgets-component
    - atchertchian
    - excerpt
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '950330'
    ajs-parent-page-title: 'Layouts and Widgets (Forms, Listings, Grids)'
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Layout+and+Widget+Display
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Layout+and+Widget+Display'
    page_id: '3868343'
    shortlink: twY7
    shortlink_source: 'https://doc.nuxeo.com/x/twY7'
    source_link: /display/NXDOC/Layout+and+Widget+Display
tree_item_index: 600
history:
    -
        author: Solen Guitter
        date: '2016-08-31 13:12'
        message: ''
        version: '19'
    -
        author: Anahide Tchertchian
        date: '2015-12-08 14:17'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2014-12-05 19:06'
        message: Fix links to point to latest version
        version: '17'
    -
        author: Solen Guitter
        date: '2014-01-13 11:25'
        message: Added related topics
        version: '16'
    -
        author: Solen Guitter
        date: '2014-01-10 15:32'
        message: ''
        version: '15'
    -
        author: Anahide Tchertchian
        date: '2013-12-20 15:39'
        message: ''
        version: '14'
    -
        author: Anahide Tchertchian
        date: '2013-12-12 18:07'
        message: add more examples for advanced layouts tag usage
        version: '13'
    -
        author: Anahide Tchertchian
        date: '2013-12-05 17:34'
        message: better title
        version: '12'
    -
        author: Solen Guitter
        date: '2013-11-13 16:57'
        message: Updated link
        version: '11'
    -
        author: Solen Guitter
        date: '2013-09-04 16:06'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2012-09-11 21:28'
        message: Migrated to Confluence 4.0
        version: '9'
    -
        author: Solen Guitter
        date: '2012-09-11 21:28'
        message: ''
        version: '8'
    -
        author: Anahide Tchertchian
        date: '2012-07-31 20:21'
        message: ''
        version: '7'
    -
        author: Anahide Tchertchian
        date: '2012-06-04 12:13'
        message: ''
        version: '6'
    -
        author: Anahide Tchertchian
        date: '2011-04-18 18:55'
        message: ''
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2011-03-14 18:17'
        message: ''
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2011-03-04 14:41'
        message: ''
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2010-10-13 15:47'
        message: ''
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2010-10-12 15:08'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DeprecatedJSF' page='generic-multi-excerpts'}}}

{{! excerpt}}
Layouts can be displayed thanks to a series a JSF tags that will query the web layout service to get the layout definition and build it for a given mode.
{{! /excerpt}}

The more common way to display a given layout for a document is to use the [`nxl:layout` tag](http://community.nuxeo.com/api/nuxeo/7.1/tlddoc/nxl/layout.html):

```xml

<div xmlns:nxl="http://nuxeo.org/nxforms/layout">
  <nxl:layout name="heading" mode="view" value="#{currentDocument}" />
</div>

```

Layouts that are referenced on a document type definition can use other helper tags, see the [corresponding documentation]({{page page='document-layouts#display'}}).

{{#> callout type='note' }}

You can include a layout in a `dataTable` tag, but cannot make its mode depend on the iteration variable. If you need to do so, recommendation is to use the `c:forEach` tag and handle all the `<table>`, `<tr>`, `<td>`... tags by yourself.

{{/callout}}

For instance, here is a sample display of a listing layout. The layout template is configured to display table rows. It will display header rows when the parameter&nbsp;`showListingHeader` is true.

```xml

<table class="dataOutput">
  <c:forEach var="row" items="#{documents.rows}" varStatus="layoutListingStatus">
    <c:set var="showListingHeader" value="#{layoutListingStatus.index == 0}" />
    <nxl:layout name="#{layoutName}" value="#{row}" mode="view"
      selectedColumns="#{selectedResultLayoutColumns}" />
  </c:forEach>
</table>

```

Some other advanced tags make it possible to display a global widget for instance, or even to create a widget from scratch by specifying its definition using the tag attributes.

Here is a sample usage of the [`nxl:widget` tag](http://community.nuxeo.com/api/nuxeo/7.1/tlddoc/nxl/widget.html):

```xml
<nxl:widget name="widgetName" mode="#{myMode}" value="#{myObject}" required="true" />
```

Here is a sample usage of the [`nxl:widgetType` tag](http://community.nuxeo.com/api/nuxeo/7.1/tlddoc/nxl/widgetType.html) (creating a widget definition on the fly):

```xml
<nxl:widgetType name="text" mode="#{myMode}" value="#{myText}" required="true" />
```

Please refer to the tag library documentation available at [http://community.nuxeo.com/api/nuxeo/latest/tlddoc/nxl/tld-summary.html](http://community.nuxeo.com/api/nuxeo/latest/tlddoc/nxl/tld-summary.html).

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related sections in this documentation'}}

*   [Layout and Widget Definitions]({{page page='layout-and-widget-definitions'}})
*   [Layout and Widget Modes]({{page page='layout-and-widget-modes'}})
*   [Custom Layout and Widget Templates]({{page page='custom-layout-and-widget-templates'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related section in Studio documentation'}}

*   [Form Layouts]({{page space='studio' page='form-layouts'}})
*   [Tabs]({{page space='studio' page='tabs'}})

{{/panel}}</div></div>
