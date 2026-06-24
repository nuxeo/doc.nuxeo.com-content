---
title: LTS 2025.21 / LTS 2025-HF21
description: Discover what's new in LTS 2025.21 / LTS 2025-HF21
review:
   comment: ''
   date: '2026-06-22'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2025-21'}}
# What's New in LTS 2025.21 / LTS 2025-HF21

## Gracefully Handle Errors During Big CSV Import

The new `nuxeo.csv.importer.max.lines` configuration property for Nuxeo CSV importer defines the configuration for rejecting CSV files exceeding the desired limit. Default is `-1` (unlimited).

## Fix Duplicate ACEs in 'Acls' Enricher's Response

ACEs are no more duplicated in 'acls' enricher's response.

## Ship Audit Backend Templates That Ease Blue/Green Audit Migration Setup

Added the "mongodb-green-audit" and "opensearch1-green-audit" templates to ease blue/green audit migration setup.

## Restore WebDAV Protocol Support as a Nuxeo Package

WebDAV protocol support is available again as an installable Nuxeo Package (nuxeo-webdav), migrated to Jakarta EE.

## DefaultBlobDispatcher Should Support Ecm:mixinType as a Dispatch Criterion

The blob dispatcher now supports dispatching based on document facets using the ecm:mixinType pseudo-property in dispatch rules.

## Security Fixes

This release also contains security fixes.

{{! /multiexcerpt}}
