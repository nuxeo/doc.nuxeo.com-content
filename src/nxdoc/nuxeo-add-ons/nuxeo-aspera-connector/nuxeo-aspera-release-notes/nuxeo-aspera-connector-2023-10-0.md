---
title: Nuxeo Aspera 2023.10.0
description: Release notes for Nuxeo Aspera Connector 2023.10.0
tree_item_index: 858
review:
  comment: ''
  date: '2026-09-24'
  status: ok
toc: true
hidden: true
---


{{! multiexcerpt name='nuxeo-aspera-connector-2023-10-0'}}

## What's New in Aspera for LTS 2023 (Version 2023.10.0)

This release includes a bug fix, vulnerability fixes and some technical enhancements.

# Released Changes

### Functional Enhancements

#### Thumbnail Preview Control for Transfer Listings

A new option allows administrators to disable thumbnail previews in transfer listings. This helps improve page performance and provides a cleaner, more streamlined view when working with large numbers of files.

#### Improved File Import Reliability

File import operations are now more resilient when importers return empty or null results. The connector handles these scenarios automatically, eliminating the need for custom workarounds and helping ensure uninterrupted import processing.


### Bug Fixes

#### Consistent Folder Names in Downloads

Fixed an issue where downloaded folders could use internal system names instead of the renamed folder titles displayed in the application. Downloaded folder structures now correctly reflect the folder names users see in the interface, providing a more consistent and predictable experience.

{{! /multiexcerpt}}
