---
title: Virtual Navigations
review:
  comment: ''
  date: ''
  status: ok
toc: true
confluence:
  ajs-parent-page-id: '12911803'
  ajs-parent-page-title: Listings & Views
  ajs-space-key: Studio
  ajs-space-name: Nuxeo Online Services
  canonical: Virtual+Navigations
  canonical_source: 'https://doc.nuxeo.com/display/Studio/Virtual+Navigations'
  page_id: '20517698'
  shortlink: QhM5AQ
  shortlink_source: 'https://doc.nuxeo.com/x/QhM5AQ'
  source_link: /display/Studio/Virtual+Navigations
tree_item_index: 500
history:
  - author: Manon Lumeau
    date: '2016-04-26 14:35'
    message: 'ix Studio menu label '
    version: '8'
  - author: Solen Guitter
    date: '2016-02-01 13:13'
    message: ''
    version: '7'
  - author: Ronan Daniellou
    date: '2015-11-18 14:58'
    message: Fixes layout + adds Nuxeo TOC
    version: '6'
  - author: Manon Lumeau
    date: '2015-10-12 15:25'
    message: ''
    version: '5'
  - author: Solen Guitter
    date: '2015-07-31 16:32'
    message: ''
    version: '4'
  - author: Solen Guitter
    date: '2015-07-31 16:32'
    message: Add note about virtual navigation activation
    version: '3'
  - author: Solen Guitter
    date: '2014-11-28 18:33'
    message: ''
    version: '2'
  - author: Solen Guitter
    date: '2014-11-03 16:25'
    message: ''
    version: '1'
---

The Virtual Navigations menu entry enables you to define new browsing trees based on document properties. You can install the [Nuxeo Virtual Navigation]({{page space='nxdoc' page='nuxeo-virtual-navigation'}}) add-on to see how default virtual navigations based on the vocabularies Subject and Coverage work. This page explains the different options available on the Nuxeo Studio configuration screens.

A virtual navigation is a [content view]({{page page='content-views'}}) whose filter is not displayed as a form but as a tree that shows the values of a vocabulary.

## Pre-Requisites

You need to select the Virtual Navigation target package in your [Application Definition]({{page page='application-definition'}}) for this menu entry to be available.

## Definition Tab

![]({{file name='virtual-navigation-definition-tab.png'}} ?w=600,border=true)

- **Label**: The label that will be displayed as a tooltip on the virtual navigation tab.
- **Breadcrumb Label**: The label displayed in the breadcrumb from virtual navigation results.
- **Property**: Select the schema and the property on which should be used to filter documents.
- **Additional query filter**: Indicate the basis of the query that will be applied automatically applied.
  {{{multiexcerpt 'studio-default-query-filter' page='Content View - Query and Form Tab'}}}
  See the page [Content View - Query and Form Tab]({{page page='content-view-query-and-form-tab'}}) for more details.
- **Default sort**:
- **Vocabularies**: Select the vocabularies that should be used to display the property values in the tree.
- **Icon**: Select the icon to display in the virtual navigation tab.
- **Enabled**: Uncheck if you want to disable this navigation tree.

## Results Tab

The configuration of the content view results is the same as a regular content view. Please report to the page [Content View - Results]({{page page='content-view-results'}}).
