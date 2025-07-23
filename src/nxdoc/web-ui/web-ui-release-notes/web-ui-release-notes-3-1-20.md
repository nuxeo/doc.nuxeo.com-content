---
title: Version 3.1.20
description: Discover what's new in Web UI 3.1.20.
review:
  comment: ''
  date: ''2025-07-23''
  status: ok
toc: true
labels:
tree_item_index: 981
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.20)

**Node.js 22 Upgrade Enhancements** - 

- Migrated from CommonJS to ES Modules (ESM): Replaced all require() statements with import syntax to align with the modern JavaScript module system supported in Node.js 22.

- Explicit .js Extensions in Imports: Updated all internal import statements to include the .js file extension, as required in ESM environments for proper module resolution.

- Dual Compatibility with Node.js 18 and 22: Ensured all functional tests remain compatible with both Node.js 18 and Node.js 22 to support teams in transition while preserving stability.

- Please refer to the [upgrade notes]({{page page='web-ui-upgrade-notes'}}) for detailed information.

**Accessibility enhancements** -

- Fixed Checkbox state now properly clears on deselection in list view to ensure accurate accessibility feedback.

- Questions? accessibility@hyland.com

**Security and vulnerability fixes** –

- Replaced @polymer/marked-element with a custom wrapper to safely render markdown and resolve the marked vulnerability.

- Inflight vulnerability marked as a false positive – The affected package is only used in build and test-related scripts and does not impact the core webui.

- Upgrade to commons-lang3 or remove commons-lang.

- Upgraded set-output in Github Action

### Other Noteworthy Changes

- loadAddons module will be loaded after router is loaded to access the navigateTo function correctly.

- Refresh local permissions in User Profile.
<br/>

{{! /multiexcerpt}}