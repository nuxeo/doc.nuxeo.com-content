---
title: 'November 2021'
description: Release notes for Nuxeo Studio released in October 2021.
tree_item_index: 949
review:
  comment: ''
  date: '2021-11-24'
  status: ok
toc: true

---

{{! multiexcerpt name='studio-updates-2021-11'}}

## Multi-layer Improvements

We’ve made it to the dependencies panel in multi-layer will align to the check-out branch, allowing easier collaboration on a project. We’ve made sure that locking dependencies for a release applies to Studio Projects only, to avoid outdated packages being used in projects.

## Update All Button in Application Definition in Studio

In order to mass update all dependencies that are outdated, as in many events it will be several, we’ve added an **Update All** button.  

We’ve fixed the use of logical operators in `property changed` in **`Before document modification`** event handler when using more than 1 property in field **Current document properties have changed**, logical operators OR or AND are used to generate the expression, they didn’t and now work.

## `HiddenInCreation` Facet

The default facet `HiddenInCreation` which already existed OOTB (like Picture, HiddenInNavigation, Commentable, ....), is now available in the menu Studio menu.

## Marketplace Improvements

We’ve fixed a range of small bugs on the Marketplace and reviewed the short descriptions.
{{! /multiexcerpt}}
