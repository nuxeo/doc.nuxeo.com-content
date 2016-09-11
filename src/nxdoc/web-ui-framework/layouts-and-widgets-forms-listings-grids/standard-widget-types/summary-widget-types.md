---
title: Summary Widget Types
review:
    comment: ''
    date: ''
    status: ok
labels:
    - summary
    - widget-types
toc: true
confluence:
    ajs-parent-page-id: '22380771'
    ajs-parent-page-title: Standard Widget Types
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Summary+Widget+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Summary+Widget+Types'
    page_id: '22380823'
    shortlink: F4FVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/F4FVAQ'
    source_link: /display/NXDOC60/Summary+Widget+Types
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 12:21'
        message: ''
        version: '6'
    - 
        author: Manon Lumeau
        date: '2015-09-16 12:16'
        message: ''
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

This widget type displays attached files to the current document. It also displays a drop zone for Drag & Drop features.

## Life Cycle State and Version

Id: `summary_current_document_lc_and_version`

This widget type displays the current document life cycle state and version.

## Publications

Id: `summary_current_document_publications`

This widget type displays the current document publications.

## Relations

Id: `summary_current_document_relations`

This widget type displays the current document incoming and outgoing relations.

## States

Id: `summary_current_document_states`

This widget type displays the current document life cycle state and lock status.

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