---
title: 'August 2021'
description: Release notes for Nuxeo Studio released in August 2021.
tree_item_index: 951
review:
  comment: ''
  date: '2021-09-24'
  status: ok
toc: true
hidden: true
---

{{! multiexcerpt name='studio-updates-2021-08'}}
### Multi-layer changes

The team is working on the major improvement of being able to add Studio projects as dependencies of other Studio projects. If you are currently using Wrappers containing other packages, registries from all those packages will be merged into your local project and be useable within local features. Likewise, Designer assets from those dependencies will be visible in a new **Layouts from Dependencies** tab in the Designer interface.

### Elasticsearch Optimisation in Studio and Marketplace

We've updated the Studio and Marketplace applications to make full use of Elasticsearch. Better results should be returned faster in both these applications.

### Improvements to Package Upload on the Marketplace

On the marketplace, for manual package uploads, we have improved the error handling and error scenarios to give users better feedback around compatible package formats.

### Missing Feature Error Handling

We've added better missing feature error handling and notification.

### Build Failure Due to Registry Error

We've removed the automatic build failure when registries are in error, instead we now display the error in the console on run time.

### Removed Filter on ‘Chains’ in Automation Editor

Operations with category "Chain" will now be visible on the automation editor.
{{! /multiexcerpt}}
