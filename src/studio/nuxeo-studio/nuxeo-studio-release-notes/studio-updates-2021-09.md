---
title: 'September 2021'
description: Release notes for Nuxeo Studio released in September 2021.
tree_item_index: 950
review:
  comment: ''
  date: '2021-09-24'
  status: ok
toc: true
hidden: true
---

{{! multiexcerpt name='studio-updates-2021-09'}}
## Project Inheritance and Multi-Layer Public Release

Multi-layer is the ability to add a Studio project as a dependency of another and have the configuration of that project inherited.

This release will render fully public and by default in all Studio projects the Multi-layer functionality.

Please find more information in our [documentation.](https://doc.nuxeo.com/studio/project-inheritance-multi-layer/)

## Warning for Outdated Dependencies

In Application Definition in Studio, dependencies are only updated when that page is saved, not simply loaded. Hence, a situation can exist where newer versions of packages are available, but these are not yet loaded in the project. If this situation occurs, a warning will appear in the package description blocks in Application Definition, when a newer version is available but not installed, for Studio packages.   

## Marketplace Search

In the Marketplace, all package short descriptions have been updated and reindexed, taking into account relevant platform versions, in order to optimise the search experience.

## Marketplace LTS Version Table

In Marketplace package description pages, the LTS version table will feature a green tick if a package is compatible with any version of an LTS. However, some packages may not be compatible with a specific version, please confirm with the detailed table before using a package.

## Recursive Dependencies

From now, we will be able to deploy packages that include recursive dependencies. Safeguards will also avoid circular dependencies creating errors. Although, these can still have negative consequences on installation time.

## Project Naming Convention

To avoid very long project names being truncated into duplicates or very similar items, max-length will be changed to 40 characters.
{{! /multiexcerpt}}
