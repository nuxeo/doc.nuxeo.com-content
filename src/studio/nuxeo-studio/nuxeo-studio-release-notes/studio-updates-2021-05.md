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

### WebUI by default 

We've added WebUI by default for all newly created Studio projects. 

### Recursive resolution of dependent Studio registries 

The recursive computation of the registries of dependent Studio projects will be enforced. 

### New events added in Studio standard configuration 

We've added "pictureViewsGenerationDone" and "videoConversionsDone" events out of the box.

### Removed blocking scenario, empty parameter in registry  

We've added default parameters to operations contributed by the registries, in cases where these are empty. Previously these empty parameters caused automation chain errors. 

### Removed blocking scenario, corrupted translation files 

Corrupted i18n JSON files no longer block project builds. 

{{! /multiexcerpt}}
