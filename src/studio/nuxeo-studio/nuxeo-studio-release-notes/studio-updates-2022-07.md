---
title: 'July 2022'
description: Release notes for Nuxeo Studio released in July 2022.
tree_item_index: 944
review:
  comment: ''
  date: '2022-07-28'
  status: ok
toc: true
---

{{! multiexcerpt name='studio-updates-2022-07'}}

## Disable/Re-enable Features Coming from Dependencies

We keep improving our Multi-layer feature, by adding the possibility of disabling certain features being contributed by a dependency. The following features are concerned:

- DocType
- Event Handler
- OperationType (chain and script)
- LifeCycle
- Structured Template

This change is particularly relevant to features such as Event Handlers that can have impacts outside their scope.  

Please note: disabled features can be re-enabled with some exceptions, please use the override functionality in such instances. This functionality is only available from the LTS 2021.17.

## ElasticSearch Mapping

The ElasticSearch Mapping feature is now publicly accessible to all users.

## Page Provider Fixes

We’ve made several fixes to page providers:
- We’ve added the missing predicate operators for lists of date, integer, long and double (Between, <, <=, >, >=).
- `ecm:versionVersionableId` can now be added as a predicate, fixing a validation error in designer.
- Addition of the `video:frameRate` property in selectable predicate/aggregate fields.

## Facets in Event Handler list

Facets created in the Facet Manager did not appear in a Event Listeners “Current document has facet” filter. They now appear.

## Performances

We’ve optimised loading times for projects with many dependencies.

{{! /multiexcerpt}}
