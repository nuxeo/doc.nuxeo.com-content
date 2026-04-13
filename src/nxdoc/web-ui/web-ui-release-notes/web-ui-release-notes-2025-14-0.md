---
title: Version 2025.14.0
description: Discover what's new in Web UI 2025.14.0.
review:
  comment: ''
  date: '2026-04-09'
  status: ok
toc: true
labels:
tree_item_index: 987
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2025 (Version 2025.14.0)

**Bug Fixes and Enhancements** 

- ***Persistent table column preferences:***
  - Users can now customize table columns (order, width, visibility, and sort) in Search and Document Browse views. These preferences are securely stored in the backend and automatically restored across sessions and browsers, ensuring a consistent and personalized experience. User preferences are now preserved across sessions and browsers.
- ***Customizable date format in Date Picker:***
  - The Nuxeo Date Picker now supports a configurable format property, allowing users to view and enter dates in their preferred format.
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
  - Fixed accessibility issues in dropdown elements so the tabbing behavior is now consistent and predictable.
- ***Role‑appropriate profile access:***
  - User profile links are now disabled for non‑admin and non‑power users, preventing confusing 404 errors and improving overall usability.


**Developer Experience & Platform Maintenance** 
  - Upgraded ESLint from v5 to v9 and removed dependency on @open-wc/eslint-config
  - Bumped eslint-plugin-html from 5.0.5 → 8.1.4 for improved HTML linting reliability
  - Upgraded webpack-cli from 5.1.4 → 6.0.1
  - Updated clean-webpack-plugin to 4.0.0
  - Upgraded webpack-bundle-analyzer to 5.2.0
  - Updated css-loader from 5.2.7 → 7.1.3
  - Bumped dotenv from 8.6.0 → 17.2.4
  - Upgraded lit-html from 2.8.0 → 3.3.2
  - Upgraded uuid from 3.3.2 ->13.0.0
  - Upgraded mocha from 7.2.0 → 11.7.5
  - Upgraded @open-wc/karma-esm from 2.13.21 -> 4.0.0
  - Migrated test setup to ESM by upgrading chai to v5, sinon-chai to 4.0.1, and replacing karma-sinon-chai with an explicit ESM configuration
  - Replaced deprecated @open-wc/prettier-config with a direct dependency on Prettier 3, standardizing formatting rules across the Web UI codebase.
  - Migrated AWS SDK for JavaScript from v2 to v3 to address Dependabot alerts and ensure correct region parameter validation.


<br/>

{{! /multiexcerpt}}
