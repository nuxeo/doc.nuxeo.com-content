---
title: Standard Layout Types
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
    - layout
    - layout-widgets-component
    - atchertchian
    - excerpt
    - content-review-lts2017
    - jsf-ui
toc: true
confluence:
    ajs-parent-page-id: '950330'
    ajs-parent-page-title: 'Layouts and Widgets (Forms, Listings, Grids)'
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Standard+Layout+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Standard+Layout+Types'
    page_id: '22905201'
    shortlink: cYFdAQ
    shortlink_source: 'https://doc.nuxeo.com/x/cYFdAQ'
    source_link: /display/NXDOC/Standard+Layout+Types
tree_item_index: 200
history:
    -
        author: Anahide Tchertchian
        date: '2014-12-08 19:21'
        message: 'XDOC-427: document default layout type'
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2014-12-08 17:10'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

{{! excerpt}}
Some layout types have been extracted to ease up defining layouts.
{{! /excerpt}}

## listingTable

This layout type defines templates to use for the `view`, `csv`, `pdf` modes, as well as additional modes for selected columns edition, and sort infos edition, depending on configuration held by the layout definition.

### Global properties

The following properties can be set directly on the layout definition, for a specific mode or for any mode:

-   `showListingHeader`: this boolean property controls the rendering of the listing table header, defaults to true.
-   `showRowEvenOddClass`: this boolean property controls addition of a style class to highlight row and even classes, defaults to true.

### Row or Column properties

-   `columnStyleClass`: this property can be used to control style class of a given column.
-   `useFirstWidgetLabelAsColumnHeader`: this boolean property controls display of the first widget label as column header.
-   `sortPropertyName`: this property controls the property that will be used to handle sorting when clicking on the column header.
-   `label`: this property controls the label that will be used for this column when selecting it for column display or sort information definition.
-   `isListingSelectionBox` or `isListingSelectionBoxWithCurrentDocument`: this property controls the display of the global "select all/unselect all" header checkbox or action.&nbsp; The "WithCurrentDocument" property should be preferably used when listing is displayed on a page where the current document should be available.
-   `isHidden`:&nbsp; this property is useful for the pdf and csv modes, when a column does not need to be presented in this cases (typically the selection checkbox).
-   `showInSortInfoSelection`: this property controls the availability of the corresponding sort property when defining sort infos to apply in a filtering form. It is checked in modes `edit_sort_infos` and `edit_sort_infos_map` only.

## listingThumbnail

This layout type defines templates to use for the `view`, `csv`, `pdf` modes, as well as additional modes for selected columns edition, and sort infos edition, depending on configuration held by the layout definition.

A first layout (with corresponding selection checkbox as well as document title and thumbnail is displayed), additional column/rows configuration are piled up in the box, under the thumbnail.

### Global Properties

The following property can be set directly on the layout definition, for a specific mode or for any mode:

-   `thumbnailHeaderLayout`: this property controls the layout to be displayed in the thumbnail, defaults to layout `listing_thumbnail_header`.

### Row or Column Properties

-   `isBoxTitle`: this boolean property controls the display of a specific style class to highlight corresponding widgets in the box.

&nbsp;

&nbsp;

&nbsp;
