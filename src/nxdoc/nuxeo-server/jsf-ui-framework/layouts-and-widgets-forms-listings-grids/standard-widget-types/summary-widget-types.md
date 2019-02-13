---
title: Summary Widget Types
review:
    comment: ''
    date: '2019-02-13'
    status: ok
labels:
    - content-review-lts2016
    - widget-types
    - summary
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
    canonical: Summary+Widget+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Summary+Widget+Types'
    page_id: '17794538'
    shortlink: 6oUPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/6oUPAQ'
    source_link: /display/NXDOC/Summary+Widget+Types
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2016-08-31 12:22'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2015-08-31 14:15'
        message: Update table of contents look
        version: '5'
    -
        author: Solen Guitter
        date: '2014-01-08 16:29'
        message: Added IDs and related topics
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2013-12-06 16:00'
        message: add the list of most of default summary widget types
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2013-12-06 15:18'
        message: add structure
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2013-12-05 17:28'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DeprecatedJSF' page='generic-multi-excerpts'}}}

{{! excerpt}}
A series of higher-level widget types useful to display information on a document Summary tab.
{{! /excerpt}} {{#> callout type='warning' }}

Summary widget types are usually using hardcoded values to display from the context, hence their field bindings are usually ignored.

For this reason, these widget types will not behave correctly if used in listing layouts.

{{/callout}}

## Comments

Id: `summary_current_document_comments`

This widget type displays the current document comments.

## Description

Id: `summary_current_document_description`

This widget type displays the current document description, creation date, author and version.

## Dublincore

Id: `summary_current_document_dublincore`

This widget type displays the dublincore layout for the current document (in view mode).

## Files

Id: `summary_current_document_files`

This widget type displays attached files to the current document. It also displays a drop zone for drag and drop features.

## Lifecycle State and Version

Id: `summary_current_document_lc_and_version`

This widget type displays the current document lifecycle state and version.

## Publications

Id: `summary_current_document_publications`

This widget type displays the current document publications.

## Relations

Id: `summary_current_document_relations`

This widget type displays the current document incoming and outgoing relations.

## States

Id: `summary_current_document_states`

This widget type displays the current document lifecycle state and lock status.

## Tagging

Id: `summary_current_document_tagging`

This widget type displays the current document tags, with the possibility to add new ones.

{{#> callout type='info' heading='Requirements'}}

This feature requires the Document Management module to be installed.

{{/callout}}

## Tasks

Id: `summary_current_document_single_tasks`

This widget type displays the current document workflow tasks assigned to current user.

## View Layout

Id: `summary_current_document_view`

This widget type displays the current document view layout (as configured on the document type definition).

## Workflow Process

Id: `summary_document_route`

This widget type displays a selector with the list of available workflows that can be started on the current document. When a workflow is already started, it displays the workflow name and a button to view its graph.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Standard Widget Types]({{page page='standard-widget-types'}})
- [Custom Widget Types]({{page page='custom-widget-types'}})
- [Layout & Widget How-To Index]({{page page='layout-and-widget-how-to-index'}})

{{/panel}}</div><div class="column medium-6"></div></div>
