---
title: 'February 2023'
description: Release notes for Nuxeo Studio released in february 2023.
tree_item_index: 943
review:
  comment: ''
  date: '2023-02-09'
  status: ok
toc: true
---

{{! multiexcerpt name='studio-updates-2023-02'}}

## Studio Modeler

- Query parsing is fixed for jsf-to-webui migration.
- Users can now use "Custom properties configuration" without any error for empty lines.
- Change 'Disable' toggle button to 'Disabled' when active.

## Registries

- Validation error fixed for missing base.xsd.

## Target Platforms

- Users can now use the new Target Platform LTS 2023.

## Application Definition

- Now packages with no target platform can be listed on the "Application Definition" page in studio.

## Page Provider

- We have streamlined the operators, making it more intuitive to determine which operators are applicable to specific fields.
  For instance, when dealing with a string field, you'll now only use operators that are specifically designed to work with strings. Previously, there was a larger pool 
  of operators, some of which might not have been suitable for certain field types. This refinement ensures that you're presented with relevant and compatible operators 
  tailored to each field's data type
