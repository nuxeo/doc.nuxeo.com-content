---
title: 'February 2022'
description: Release notes for Nuxeo Studio released in February 2022.
tree_item_index: 947
review:
  comment: ''
  date: '2022-02-28'
  status: ok
toc: true

---

{{! multiexcerpt name='studio-updates-2022-02'}}

## Facet Manager in Studio 

It will now be possible to create within Nuxeo Studio a facet inside the content model. This facet can also be associated with a schema, such as when that facet is added to a document it will add to that document the related schema when active. This a major new component for Studio. 

The feature is retroactive and you should see a display change in the Doctype view.

## Fix override button displayed on read-only schemas

When creating a schema feature using the advanced import option, the feature is displayed in readonly mode. Previously, an erroneous override button would appear. It has been removed.

## Fix event handler’s field ‘Current document properties have changed’ when using properties of ‘file’ schema

When using any properties of schema file in field 'Current document properties have changed' in the definition of an event handler, the automation script or chain does not get triggered. This has been updated so subfields of 'file' are available.

## Trial Registration Issues

We’ve made a series of fixes to Tri.al Registration, resolving several bugging scenarios encountered

{{! /multiexcerpt}}
