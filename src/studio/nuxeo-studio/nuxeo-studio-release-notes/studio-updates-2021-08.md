---
title: 'August 2021'
description: .
tree_item_index: 951
review:
  comment: ''
  date: '2021-08-21'
  status: ok
toc: true
---

{{! multiexcerpt name='studio-updates-2021-08'}}

### Multi-layer changes 

The team is working on the major improvement of being able to add Studio projects as dependencies of other Studio projects. If you are currently using Wrappers containing other packages, registries from all those packages will be merged into you local project and be useable within local features. Likewise, Designer assets from those dependencies will be visible in a new 'Layouts from Dependencies' tab in the Desginer interface.    

### Elasticsearch optimisation in Studio and Marketplace  

We've updated the Studio and Marketplace applications to make full use of Elasticsearch. Better results should be returned faster in both these applications.  

### Improvements to package upload on the Marketplace

On the marketplace, for manual package uploads, we have improved the error handling and error scenarios to give users better feedback around compatible package formats. 

### Missing feature error handling

We've added better missing feature error handling and notification. 

### Build failure due to registry error 

We've removed the automatic build failure when registries are in error, instead we now display the error in the console on run time. 

### Removed filter on 'Chains' in automation editor  

Operations with category "Chain" will now be visible on the automation editor.


{{! /multiexcerpt}}
