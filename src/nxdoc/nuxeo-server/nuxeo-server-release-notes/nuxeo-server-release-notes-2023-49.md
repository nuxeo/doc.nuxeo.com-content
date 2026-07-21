---
title: LTS 2023.49 / LTS 2023-HF49
description: Discover what's new in LTS 2023.49 / LTS 2023-HF49
review:
   comment: ''
   date: '2026-06-23'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2023-49'}}
# What's New in LTS 2023.49 / LTS 2023-HF49

## Gracefully Handle Errors During Big CSV Import

Introduced the new `nuxeo.csv.importer.max.lines` configuration property for Nuxeo CSV importer that defines the configuration for rejecting CSV files exceeding the desired limit. Default is `-1` (unlimited).

## Fix Duplicate ACEs in 'Acls' Enricher's Response

ACEs are no more duplicated in 'acls' enricher's response.

## DefaultBlobDispatcher Should Support Ecm:mixinType as a Dispatch Criterion

The blob dispatcher now supports dispatching based on document facets using the ecm:mixinType pseudo-property in dispatch rules.

## Security Fixes

This release also contains security fixes.

{{! /multiexcerpt}}
