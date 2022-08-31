---
title: 'May 2022'
description: Release notes for Nuxeo Studio released in May 2022.
tree_item_index: 945
review:
  comment: ''
  date: '2022-05-28'
  status: ok
toc: true
---

{{! multiexcerpt name='studio-updates-2022-05'}}

## Manual Field in Default Sort

When adding a field to default sort in a page provider, previously, the only options available were default and created schemas and associated fields. We’ve now added a "manual entry" to the list of sort fields, with an editable text entry. Note, this text entry will be submitted as is, with no further checks.

## Only Released Versions Will Be Considered by App Definition in Studio

In the application definition page, for each dependency package, there is a check to determine if a newer version of the package exists. This used to take into account SNAPSHOT versions, these will no longer be considered.

## The Run Function Will Be Automatically Added

When creating a new script from an event handler or a workflow task, the run function is not declared. It will now be automatically added to new automation scripts.

## Project Listing Lazy Load

The listing for Projects in Connect will now be lazy loaded, which will reduce load times significantly for organisations with many projects.

## CLID Update

We’ve updated the process resolving security and access for CLIDs. This should improve alignment between base maintenance services and CLIDs.

## Resolved Multi-layer Override Error

An error ```Validation error: The prefix 'mydoc' already exists in the default application.``` can occur when saving an overridden Document Type with certain schemas attached. This has been resolved.

{{! /multiexcerpt}}
