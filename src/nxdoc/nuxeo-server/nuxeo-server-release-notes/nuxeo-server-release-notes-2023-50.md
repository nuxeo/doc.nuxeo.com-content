---
title: LTS 2023.50 / LTS 2023-HF50
description: Discover what's new in LTS 2023.50 / LTS 2023-HF50
review:
   comment: ''
   date: '2026-07-21'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2023-50'}}
# What's New in LTS 2023.50 / LTS 2023-HF50

## Refactor PublicationJsonEnricher to Use a Page Provider

PublicationJsonEnricher now uses the SearchService. The 2025 branch use `SearchService.search()` directly. A new page provider plugged into the Elasticsearch backend has been introduced for the 2023 branch. For additional information, see Upgrade notes.

## Take Into Account the Search Pattern on LDAP Directories

The `UserGroup.Suggestion` operation now honors the directory's `substringMatchType (subinitial, subany, subfinal)`, so LDAP user/group suggestions return infix and suffix matches when configured to do so.

## Security Fixes

This release also contains security fixes.

{{! /multiexcerpt}}
