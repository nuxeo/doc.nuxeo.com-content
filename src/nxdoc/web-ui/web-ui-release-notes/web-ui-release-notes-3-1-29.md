---
title: Version 3.1.29
description: Discover what's new in Web UI 3.1.29.
review:
  comment: ''
  date: '2026-04-09'
  status: ok
toc: true
labels:
tree_item_index: 972
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.29)


**Bug fixes and Enhancements** 

- ***Persistent table column preferences:***
  - Users can now customize table columns (order, width, visibility, and sort) in Search and Document Browse views. These preferences are securely stored in the backend and automatically restored across sessions and browsers, ensuring a consistent and personalized experience.
- ***Customizable date format in Date Picker:***
  - The Nuxeo Date Picker now respects a configurable format property, allowing users to view and enter dates in their preferred format.
- ***Improved aggregation filter readability:***
  - Aggregation filter dropdowns now fully display long values, ensuring selected options are always visible and easy to read.
- ***Cleaner table header layout:***
  - Removed unwanted vertical scrollbars from aggregate column headers in nuxeo-data-table for a smoother browsing experience.
- ***Fixed metadata duplication during multi‑file import:***
  - Resolved an issue where properties from the first document were incorrectly applied to all files during multi‑file imports. Each file now correctly maintains its own independent properties.
- ***Resolved 404 errors on profile links:***
  - Non‑admin and non‑power users no longer encounter 404 errors when clicking user profile links, as these links are now conditionally disabled.


**Accessibility Improvements** 

- ***Improved keyboard navigation:***
  - Fixed accessibility issues in dropdown elements so tabbing behavior is now consistent and predictable.
- ***Role‑appropriate profile access:***
  - User profile links are now disabled for non‑admin and non‑power users, preventing confusing 404 errors and improving overall usability.



<br/>

{{! /multiexcerpt}}
