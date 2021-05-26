---
title: 'May 2021'
description: .
tree_item_index: 954
review:
  comment: ''
  date: '2021-05-01'
  status: ok
toc: true
---

{{! multiexcerpt name='studio-updates-2021-05'}}

### Web UI by Default

We've added Web UI by default for all newly created Studio projects.

### Recursive Resolution of Dependent Studio Registries

The recursive computation of the registries of dependent Studio projects will be enforced.

### New Events Added in Studio Standard Configuration

We've added `pictureViewsGenerationDone` and `videoConversionsDone` events out of the box.

### Removed Blocking Scenario, Empty Parameter in Registry

We've added default parameters to operations contributed by the registries, in case these are empty. Previously these empty parameters caused automation chain errors.

### Removed Blocking Scenario, Corrupted Translation Files

Corrupted i18n JSON files no longer block project builds.

{{! /multiexcerpt}}
